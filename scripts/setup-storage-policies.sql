-- Storage RLS Policies for test-files bucket
-- Run this in your Supabase SQL Editor to fix storage test failures

-- Enable RLS on the storage.objects table (if not already enabled)
-- ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Policy to allow authenticated users to upload files to test-files bucket
CREATE POLICY "Allow authenticated users to upload files" ON storage.objects
FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'test-files');

-- Policy to allow authenticated users to read/download files from test-files bucket  
CREATE POLICY "Allow authenticated users to read files" ON storage.objects
FOR SELECT TO authenticated
USING (bucket_id = 'test-files');

-- Policy to allow authenticated users to delete files from test-files bucket
CREATE POLICY "Allow authenticated users to delete files" ON storage.objects
FOR DELETE TO authenticated
USING (bucket_id = 'test-files');

-- Policy to allow authenticated users to update files in test-files bucket
CREATE POLICY "Allow authenticated users to update files" ON storage.objects
FOR UPDATE TO authenticated
USING (bucket_id = 'test-files')
WITH CHECK (bucket_id = 'test-files');

-- Verify the policies were created
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