-- Fix for "infinite recursion" in RLS policies by using SECURITY DEFINER functions.
-- Copy and run this entire script block in your Supabase SQL Editor.

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

-- 2. Drop potential recursive policies on 'profiles' and re-create them safely
DROP POLICY IF EXISTS "Teachers can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can do everything on profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can see own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;

CREATE POLICY "Users can see own profile"
ON public.profiles FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
ON public.profiles FOR UPDATE
USING (auth.uid() = id);

-- Use the secure function to prevent recursion
CREATE POLICY "Teachers can view all profiles"
ON public.profiles FOR SELECT
USING (public.is_teacher_or_admin());

CREATE POLICY "Admins can do everything on profiles"
ON public.profiles FOR ALL
USING (public.is_admin());

-- 3. Fix policies for 'progress' table as well
DROP POLICY IF EXISTS "Teachers can view all progress" ON public.progress;
DROP POLICY IF EXISTS "Admins can view all progress" ON public.progress;
DROP POLICY IF EXISTS "Users can view own progress" ON public.progress;

CREATE POLICY "Users can view own progress"
ON public.progress FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Teachers can view all progress"
ON public.progress FOR SELECT
USING (public.is_teacher_or_admin());

-- 4. Fix policies for 'achievements' if it exists
DO $$ 
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'achievements') THEN
    DROP POLICY IF EXISTS "Teachers can view all achievements" ON public.achievements;
    EXECUTE 'CREATE POLICY "Teachers can view all achievements" ON public.achievements FOR SELECT USING (public.is_teacher_or_admin())';
  END IF;
END $$;
