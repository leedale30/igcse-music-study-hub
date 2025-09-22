-- Final Storage RLS Policy Fix for IGCSE Music Study Hub
-- This addresses the "new row violates row-level security policy" error from the test log
-- Based on Supabase best practices and the specific error patterns observed

-- ============================================================================
-- STEP 1: Clean up existing policies to avoid conflicts
-- ============================================================================

-- Drop any existing policies that might conflict
DROP POLICY IF EXISTS "test_files_insert_policy" ON storage.objects;
DROP POLICY IF EXISTS "test_files_select_policy" ON storage.objects;
DROP POLICY IF EXISTS "test_files_update_policy" ON storage.objects;
DROP POLICY IF EXISTS "test_files_delete_policy" ON storage.objects;

-- Also drop policies with different naming conventions
DROP POLICY IF EXISTS "Allow authenticated users to upload files" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to read files" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to delete files" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to update files" ON storage.objects;

-- Drop any generic policies that might interfere
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON storage.objects;
DROP POLICY IF EXISTS "Enable select for authenticated users" ON storage.objects;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON storage.objects;
DROP POLICY IF EXISTS "Enable delete for authenticated users" ON storage.objects;

-- ============================================================================
-- STEP 2: Ensure RLS is enabled on storage.objects
-- ============================================================================

-- Enable RLS on storage.objects table (this is critical)
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- STEP 3: Create comprehensive RLS policies for test-files bucket
-- ============================================================================

-- Policy 1: INSERT - Allow authenticated users to upload files
CREATE POLICY "test_files_insert_policy" ON storage.objects
  FOR INSERT 
  TO authenticated
  WITH CHECK (
    bucket_id = 'test-files' 
    AND auth.uid() IS NOT NULL
  );

-- Policy 2: SELECT - Allow authenticated users to read/download files
CREATE POLICY "test_files_select_policy" ON storage.objects
  FOR SELECT 
  TO authenticated
  USING (
    bucket_id = 'test-files'
    AND auth.uid() IS NOT NULL
  );

-- Policy 3: UPDATE - Allow authenticated users to update file metadata
CREATE POLICY "test_files_update_policy" ON storage.objects
  FOR UPDATE 
  TO authenticated
  USING (
    bucket_id = 'test-files'
    AND auth.uid() IS NOT NULL
  )
  WITH CHECK (
    bucket_id = 'test-files'
    AND auth.uid() IS NOT NULL
  );

-- Policy 4: DELETE - Allow authenticated users to delete files
CREATE POLICY "test_files_delete_policy" ON storage.objects
  FOR DELETE 
  TO authenticated
  USING (
    bucket_id = 'test-files'
    AND auth.uid() IS NOT NULL
  );

-- ============================================================================
-- STEP 4: Create bucket if it doesn't exist (informational - manual step)
-- ============================================================================

-- NOTE: The test-files bucket must be created manually in Supabase Dashboard
-- Go to Storage > Create bucket > Name: "test-files" > Public: YES

-- ============================================================================
-- STEP 5: Verification queries
-- ============================================================================

-- Check if the test-files bucket exists
SELECT 
  'BUCKET STATUS' as check_type,
  CASE 
    WHEN EXISTS(SELECT 1 FROM storage.buckets WHERE name = 'test-files') 
    THEN '✅ test-files bucket exists'
    ELSE '❌ test-files bucket missing - create it manually in Supabase Dashboard'
  END as status;

-- Verify RLS is enabled
SELECT 
  'RLS STATUS' as check_type,
  CASE 
    WHEN rowsecurity = true 
    THEN '✅ RLS enabled on storage.objects'
    ELSE '❌ RLS disabled on storage.objects'
  END as status
FROM pg_tables 
WHERE schemaname = 'storage' AND tablename = 'objects';

-- List the policies we just created
SELECT 
  'POLICIES CREATED' as check_type,
  policyname,
  cmd as operation,
  roles
FROM pg_policies 
WHERE tablename = 'objects' 
  AND schemaname = 'storage'
  AND policyname LIKE 'test_files_%'
ORDER BY policyname;

-- Count total policies on storage.objects
SELECT 
  'TOTAL POLICIES' as check_type,
  COUNT(*) as policy_count
FROM pg_policies 
WHERE tablename = 'objects' AND schemaname = 'storage';

-- ============================================================================
-- STEP 6: Test the setup (diagnostic)
-- ============================================================================

-- This will help diagnose if the policies are working
-- Run this after creating the policies to test them

SELECT 
  'DIAGNOSTIC INFO' as check_type,
  'Current user: ' || COALESCE(auth.uid()::text, 'NULL') as user_info;

-- Final success message
SELECT '✅ Storage RLS policies setup complete!' as final_status,
       'Next: Create test-files bucket in Supabase Dashboard if it does not exist' as next_step;