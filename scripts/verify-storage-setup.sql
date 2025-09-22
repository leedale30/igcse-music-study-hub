-- Verify Storage Setup Script
-- Run this to check the exact configuration and identify the issue

-- 1. Verify the test-files bucket configuration
SELECT 
  id,
  name,
  public,
  owner,
  created_at
FROM storage.buckets 
WHERE name = 'test-files';

-- 2. Check all RLS policies on storage.objects for test-files bucket
SELECT 
  policyname,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'objects' 
  AND schemaname = 'storage'
  AND (qual LIKE '%test-files%' OR with_check LIKE '%test-files%')
ORDER BY policyname;

-- 3. Test if we can insert into storage.objects (this simulates the upload)
-- This will show us the exact error
DO $$
BEGIN
  -- Try to insert a test record (this will fail but show us why)
  INSERT INTO storage.objects (
    bucket_id,
    name,
    owner,
    metadata
  ) VALUES (
    'test-files',
    'debug-test.txt',
    auth.uid(),
    '{}'::jsonb
  );
  
  RAISE NOTICE 'Insert successful - this means RLS policies are working';
  
  -- Clean up the test record
  DELETE FROM storage.objects 
  WHERE bucket_id = 'test-files' AND name = 'debug-test.txt';
  
EXCEPTION WHEN OTHERS THEN
  RAISE NOTICE 'Insert failed with error: %', SQLERRM;
END $$;

-- 4. Check if auth.uid() returns a value (user must be authenticated)
SELECT 
  auth.uid() as current_user_id,
  auth.role() as current_role;

-- 5. Show all policies on storage.objects (to see if there are conflicting policies)
SELECT 
  policyname,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'objects' AND schemaname = 'storage'
ORDER BY policyname;