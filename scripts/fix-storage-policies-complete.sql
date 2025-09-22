-- Complete Storage RLS Policy Fix
-- This addresses the "new row violates row-level security policy" error
-- Based on: https://stackoverflow.com/questions/74302341/supabase-bucket-new-row-violates-row-level-security-policy-for-table-objects

-- First, drop any existing policies to avoid conflicts
DROP POLICY IF EXISTS "test_files_insert_policy" ON storage.objects;
DROP POLICY IF EXISTS "test_files_select_policy" ON storage.objects;
DROP POLICY IF EXISTS "test_files_update_policy" ON storage.objects;
DROP POLICY IF EXISTS "test_files_delete_policy" ON storage.objects;

-- Create comprehensive RLS policies for the test-files bucket
-- These policies allow authenticated users to perform all operations

-- 1. INSERT Policy (for uploading new files)
CREATE POLICY "test_files_insert_policy" ON storage.objects
  FOR INSERT 
  TO authenticated
  WITH CHECK (bucket_id = 'test-files');

-- 2. SELECT Policy (for reading/downloading files)
CREATE POLICY "test_files_select_policy" ON storage.objects
  FOR SELECT 
  TO authenticated
  USING (bucket_id = 'test-files');

-- 3. UPDATE Policy (required for upsert operations and metadata updates)
CREATE POLICY "test_files_update_policy" ON storage.objects
  FOR UPDATE 
  TO authenticated
  USING (bucket_id = 'test-files')
  WITH CHECK (bucket_id = 'test-files');

-- 4. DELETE Policy (required for file deletion and upsert operations)
CREATE POLICY "test_files_delete_policy" ON storage.objects
  FOR DELETE 
  TO authenticated
  USING (bucket_id = 'test-files');

-- Ensure RLS is enabled on storage.objects
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Verify the policies were created
SELECT 
  policyname,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'objects' 
  AND schemaname = 'storage'
  AND policyname LIKE 'test_files_%'
ORDER BY policyname;

-- Test query to verify setup
SELECT 'Storage policies created successfully for test-files bucket' as status;