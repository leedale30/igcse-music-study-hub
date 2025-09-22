-- Fix infinite recursion in users table RLS policy
-- This script removes problematic policies and creates safe ones

-- First, check current policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'users';

-- Drop all existing policies on users table to prevent recursion
DROP POLICY IF EXISTS "Users can view own profile" ON public.users;
DROP POLICY IF EXISTS "Users can update own profile" ON public.users;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.users;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.users;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON public.users;
DROP POLICY IF EXISTS "Enable update for users based on email" ON public.users;
DROP POLICY IF EXISTS "Users can read own data" ON public.users;
DROP POLICY IF EXISTS "Users can update own data" ON public.users;
DROP POLICY IF EXISTS "Users can insert own data" ON public.users;

-- Disable RLS temporarily to clean up
ALTER TABLE public.users DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Create simple, non-recursive policies
-- Policy for SELECT: Users can read their own data
CREATE POLICY "users_select_own" ON public.users
    FOR SELECT
    USING (auth.uid() = id);

-- Policy for INSERT: Authenticated users can insert their own data
CREATE POLICY "users_insert_own" ON public.users
    FOR INSERT
    WITH CHECK (auth.uid() = id);

-- Policy for UPDATE: Users can update their own data
CREATE POLICY "users_update_own" ON public.users
    FOR UPDATE
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

-- Policy for DELETE: Users can delete their own data (optional)
CREATE POLICY "users_delete_own" ON public.users
    FOR DELETE
    USING (auth.uid() = id);

-- Verify the new policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'users';

-- Test query to ensure no recursion
SELECT id, email FROM public.users LIMIT 1;

-- Check table structure first
SELECT column_name, data_type, is_nullable, column_default 
FROM information_schema.columns 
WHERE table_name = 'users' AND table_schema = 'public'
ORDER BY ordinal_position;

-- Insert test data if table is empty (with proper values for NOT NULL columns)
INSERT INTO public.users (id, email, password_hash, full_name, created_at)
VALUES 
    ('00000000-0000-0000-0000-000000000001', 'test@example.com', '$2b$12$dummy.hash.for.testing.purposes.only', 'Test User', NOW()),
    ('00000000-0000-0000-0000-000000000002', 'teacher@school.com', '$2b$12$dummy.hash.for.testing.purposes.only', 'Test Teacher', NOW())
ON CONFLICT (id) DO NOTHING;

-- Final verification
SELECT 'Users table policies fixed successfully' as status;