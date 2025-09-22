-- Comprehensive Storage Debug Script
-- Run this in Supabase SQL Editor to diagnose RLS policy issues

-- 1. Check if the test-files bucket exists
SELECT 
  'BUCKET CHECK' as check_type,
  id,
  name,
  public,
  created_at
FROM storage.buckets 
WHERE name = 'test-files';

-- 2. Check RLS status on storage.objects table
SELECT 
  'RLS STATUS' as check_type,
  schemaname,
  tablename,
  rowsecurity as rls_enabled
FROM pg_tables 
WHERE schemaname = 'storage' AND tablename = 'objects';

-- 3. List all existing policies on storage.objects
SELECT 
  'EXISTING POLICIES' as check_type,
  policyname,
  roles,
  cmd as operation,
  qual as using_condition,
  with_check as with_check_condition
FROM pg_policies 
WHERE tablename = 'objects' 
  AND schemaname = 'storage'
ORDER BY policyname;

-- 4. Check specifically for test-files policies
SELECT 
  'TEST-FILES POLICIES' as check_type,
  policyname,
  roles,
  cmd as operation,
  qual as using_condition,
  with_check as with_check_condition
FROM pg_policies 
WHERE tablename = 'objects' 
  AND schemaname = 'storage'
  AND (policyname LIKE '%test%files%' OR policyname LIKE '%test_files%')
ORDER BY policyname;

-- 5. Check current user and role
SELECT 
  'CURRENT USER' as check_type,
  current_user as username,
  current_role as role,
  session_user as session_user;

-- 6. Check if authenticated role exists
SELECT 
  'AUTHENTICATED ROLE' as check_type,
  rolname as role_name,
  rolsuper as is_superuser,
  rolcreaterole as can_create_roles,
  rolcreatedb as can_create_db
FROM pg_roles 
WHERE rolname = 'authenticated';

-- 7. Test INSERT permission simulation (this won't actually insert)
EXPLAIN (FORMAT TEXT) 
INSERT INTO storage.objects (bucket_id, name, owner, metadata) 
VALUES ('test-files', 'debug-test.txt', auth.uid(), '{}');

-- 8. Check auth.uid() function availability
SELECT 
  'AUTH UID CHECK' as check_type,
  CASE 
    WHEN auth.uid() IS NOT NULL THEN 'User authenticated: ' || auth.uid()::text
    ELSE 'No authenticated user (auth.uid() is NULL)'
  END as auth_status;

-- 9. Check if there are any objects in the test-files bucket
SELECT 
  'EXISTING OBJECTS' as check_type,
  COUNT(*) as object_count,
  array_agg(name) as object_names
FROM storage.objects 
WHERE bucket_id = 'test-files';

-- 10. Final summary
SELECT 
  'SUMMARY' as check_type,
  'Debug script completed. Review all sections above for issues.' as message;