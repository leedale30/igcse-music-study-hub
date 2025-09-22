-- Debug Storage Issue Script
-- Run this in your Supabase SQL Editor to diagnose the storage problem

-- 1. Check if the test-files bucket exists
SELECT 
  id,
  name,
  owner,
  public,
  avif_autodetection,
  file_size_limit,
  allowed_mime_types,
  created_at,
  updated_at
FROM storage.buckets 
WHERE name = 'test-files';

-- 2. Check RLS status on storage.objects
SELECT 
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables 
WHERE schemaname = 'storage' AND tablename = 'objects';

-- 3. List all RLS policies on storage.objects
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

-- 4. Check if there are any objects in the test-files bucket
SELECT 
  id,
  name,
  bucket_id,
  owner,
  created_at,
  updated_at,
  last_accessed_at,
  metadata
FROM storage.objects 
WHERE bucket_id = 'test-files'
LIMIT 5;

-- 5. Test if we can see storage buckets at all
SELECT COUNT(*) as total_buckets FROM storage.buckets;

-- 6. List all buckets to see what exists
SELECT name, public, created_at FROM storage.buckets ORDER BY created_at;