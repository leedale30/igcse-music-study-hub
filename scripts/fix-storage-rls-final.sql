-- Fix Storage RLS Policy Violations
-- This script fixes the "new row violates row-level security policy" error

-- ============================================================================
-- STEP 1: Check current storage buckets and policies
-- ============================================================================
SELECT name, id, public, file_size_limit, allowed_mime_types
FROM storage.buckets
WHERE name = 'test-files';

-- ============================================================================
-- STEP 2: Create test-files bucket if it doesn't exist
-- ============================================================================
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'test-files',
    'test-files',
    true,
    52428800, -- 50MB limit
    ARRAY['text/plain', 'text/csv', 'application/json', 'image/jpeg', 'image/png', 'image/gif', 'application/pdf']
)
ON CONFLICT (id) DO UPDATE SET
    public = EXCLUDED.public,
    file_size_limit = EXCLUDED.file_size_limit,
    allowed_mime_types = EXCLUDED.allowed_mime_types;

-- ============================================================================
-- STEP 3: Drop all existing storage policies to prevent conflicts
-- ============================================================================
DROP POLICY IF EXISTS "Allow authenticated users to upload files" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to view files" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to delete files" ON storage.objects;
DROP POLICY IF EXISTS "Allow public read access" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated upload" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated read" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated delete" ON storage.objects;
DROP POLICY IF EXISTS "test-files-upload" ON storage.objects;
DROP POLICY IF EXISTS "test-files-read" ON storage.objects;
DROP POLICY IF EXISTS "test-files-delete" ON storage.objects;

-- ============================================================================
-- STEP 4: Create comprehensive storage policies for test-files bucket
-- ============================================================================

-- Policy for uploading files to test-files bucket
CREATE POLICY "test_files_upload_policy" ON storage.objects
    FOR INSERT
    WITH CHECK (
        bucket_id = 'test-files' AND
        auth.role() = 'authenticated'
    );

-- Policy for reading files from test-files bucket
CREATE POLICY "test_files_read_policy" ON storage.objects
    FOR SELECT
    USING (
        bucket_id = 'test-files' AND
        (auth.role() = 'authenticated' OR bucket_id IN (SELECT id FROM storage.buckets WHERE public = true))
    );

-- Policy for updating files in test-files bucket
CREATE POLICY "test_files_update_policy" ON storage.objects
    FOR UPDATE
    USING (
        bucket_id = 'test-files' AND
        auth.role() = 'authenticated'
    )
    WITH CHECK (
        bucket_id = 'test-files' AND
        auth.role() = 'authenticated'
    );

-- Policy for deleting files from test-files bucket
CREATE POLICY "test_files_delete_policy" ON storage.objects
    FOR DELETE
    USING (
        bucket_id = 'test-files' AND
        auth.role() = 'authenticated'
    );

-- ============================================================================
-- STEP 5: Enable RLS on storage.objects if not already enabled
-- ============================================================================
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- STEP 6: Grant necessary permissions
-- ============================================================================
-- Grant usage on storage schema to authenticated users
GRANT USAGE ON SCHEMA storage TO authenticated;
GRANT ALL ON storage.objects TO authenticated;
GRANT ALL ON storage.buckets TO authenticated;

-- ============================================================================
-- STEP 7: Verification queries
-- ============================================================================

-- Check bucket configuration
SELECT 
    name,
    id,
    public,
    file_size_limit,
    allowed_mime_types,
    created_at
FROM storage.buckets 
WHERE name = 'test-files';

-- Check storage policies
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'objects' AND schemaname = 'storage'
ORDER BY policyname;

-- Check RLS status on storage.objects
SELECT 
    schemaname,
    tablename,
    rowsecurity
FROM pg_tables 
WHERE schemaname = 'storage' AND tablename = 'objects';

-- Test permissions (this should not fail)
SELECT 
    has_table_privilege('authenticated', 'storage.objects', 'INSERT') as can_insert,
    has_table_privilege('authenticated', 'storage.objects', 'SELECT') as can_select,
    has_table_privilege('authenticated', 'storage.objects', 'UPDATE') as can_update,
    has_table_privilege('authenticated', 'storage.objects', 'DELETE') as can_delete;

-- Final status
SELECT 'Storage RLS policies fixed successfully' as status;