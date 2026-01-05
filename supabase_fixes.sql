-- Fix for "infinite recursion" in RLS policies
-- Run this in the Supabase SQL Editor

-- 1. Create secure functions to check roles (bypassing RLS)
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE id = auth.uid()
    AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.is_teacher_or_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE id = auth.uid()
    AND (role = 'teacher' OR role = 'admin')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 2. Update Policies to use these functions
-- (You may need to drop existing policies first if they conflict, or these might just work if you update the policy definitions)

-- Example Policy Updates (Adjust names if yours are different):

-- Allow admins to do everything on profiles
DROP POLICY IF EXISTS "Admins can do everything on profiles" ON public.profiles;
CREATE POLICY "Admins can do everything on profiles"
ON public.profiles
FOR ALL
USING (public.is_admin());

-- Allow teachers to view all profiles
DROP POLICY IF EXISTS "Teachers can view all profiles" ON public.profiles;
CREATE POLICY "Teachers can view all profiles"
ON public.profiles
FOR SELECT
USING (public.is_teacher_or_admin());

-- 3. Ensure "Users can see own profile" is safe (usually doesn't cause recursion, but good to check)
-- This one usually doesn't need a special function as it compares id directly
DROP POLICY IF EXISTS "Users can see own profile" ON public.profiles;
CREATE POLICY "Users can see own profile"
ON public.profiles
FOR SELECT
USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
ON public.profiles
FOR UPDATE
USING (auth.uid() = id);
