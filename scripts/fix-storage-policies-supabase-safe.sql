-- Supabase-Safe Storage RLS Policy Fix
-- This addresses the "new row violates row-level security policy" error
-- Uses Supabase's recommended approach for storage policies

-- Note: Run this in Supabase SQL Editor with your project's service role key
-- or as a database administrator

-- First, check if policies exist and drop them safely
DO $$
BEGIN
    -- Drop existing policies if they exist
    DROP POLICY IF EXISTS "test_files_insert_policy" ON storage.objects;
    DROP POLICY IF EXISTS "test_files_select_policy" ON storage.objects;
    DROP POLICY IF EXISTS "test_files_update_policy" ON storage.objects;
    DROP POLICY IF EXISTS "test_files_delete_policy" ON storage.objects;
    
    -- Also drop any policies with different naming conventions
    DROP POLICY IF EXISTS "Enable insert for authenticated users" ON storage.objects;
    DROP POLICY IF EXISTS "Enable select for authenticated users" ON storage.objects;
    DROP POLICY IF EXISTS "Enable update for authenticated users" ON storage.objects;
    DROP POLICY IF EXISTS "Enable delete for authenticated users" ON storage.objects;
    
EXCEPTION
    WHEN insufficient_privilege THEN
        RAISE NOTICE 'Insufficient privileges to drop policies. Please run as database owner or use Supabase Dashboard.';
    WHEN OTHERS THEN
        RAISE NOTICE 'Error dropping policies: %', SQLERRM;
END $$;

-- Create comprehensive RLS policies for the test-files bucket
-- These policies allow authenticated users to perform all operations

-- 1. INSERT Policy (for uploading new files)
CREATE POLICY "test_files_insert_policy" ON storage.objects
  FOR INSERT 
  TO authenticated
  WITH CHECK (bucket_id = 'test-files');

-- 2. SELECT Policy (for reading/downloading files and getting public URLs)
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