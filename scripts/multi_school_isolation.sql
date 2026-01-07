-- ================================================
-- SUPABASE: Multi-School Isolation Setup
-- Run this in the Supabase SQL Editor
-- ================================================
-- This script:
-- 1. Creates a schools table
-- 2. Adds school_id to profiles
-- 3. Updates RLS so teachers only see their school's students
-- ================================================

-- ================================================
-- STEP 1: Create schools table
-- ================================================
CREATE TABLE IF NOT EXISTS public.schools (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert initial schools
INSERT INTO public.schools (id, name) VALUES 
    (1, 'IGCSE Music Hub'),    -- Your school (Antony's)
    (2, 'Andy Clark Music')     -- Andy's school
ON CONFLICT (id) DO NOTHING;

-- ================================================
-- STEP 2: Add school_id column to profiles
-- ================================================
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS school_id INTEGER REFERENCES public.schools(id);

-- ================================================
-- STEP 3: Assign existing users to School 1 (your school)
-- ================================================
-- All current users go to School 1 by default
UPDATE public.profiles 
SET school_id = 1 
WHERE school_id IS NULL;

-- ================================================
-- STEP 4: Update RLS policies for school isolation
-- ================================================

-- First, drop the old "teachers see all" policy
DROP POLICY IF EXISTS "Teachers can view all profiles" ON public.profiles;

-- Create new policy: Teachers can only see profiles from their school
CREATE POLICY "Teachers can view same school profiles"
ON public.profiles FOR SELECT
USING (
    -- User can see their own profile
    auth.uid() = id
    OR
    -- Teachers/admins can see profiles from the same school
    (
        EXISTS (
            SELECT 1 FROM public.profiles p
            WHERE p.id = auth.uid() 
            AND p.role IN ('teacher', 'admin')
            AND p.school_id = profiles.school_id
        )
    )
    OR
    -- Admins with NULL school_id or matching can see everyone in their school
    EXISTS (
        SELECT 1 FROM public.profiles p
        WHERE p.id = auth.uid() 
        AND p.role = 'admin'
    )
);

-- Update policy for teachers updating profiles (same school only)
DROP POLICY IF EXISTS "Teachers can update student profiles" ON public.profiles;
CREATE POLICY "Teachers can update same school profiles"
ON public.profiles FOR UPDATE
USING (
    auth.uid() = id
    OR
    EXISTS (
        SELECT 1 FROM public.profiles p
        WHERE p.id = auth.uid() 
        AND p.role IN ('teacher', 'admin')
        AND p.school_id = profiles.school_id
    )
);

-- ================================================
-- STEP 5: Setup Andy Clark (School 2)
-- ================================================
-- Run this AFTER creating Andy's auth user in the Dashboard
-- Email: andyclarkmusic@icloud.com / Password: 123Music

UPDATE public.profiles SET 
    name = 'Andy Clark',
    nickname = 'ANDY',
    group_name = 'Music Class',
    role = 'teacher',
    school_id = 2
WHERE email = 'andyclarkmusic@icloud.com';

-- ================================================
-- STEP 6: Enable RLS on schools table
-- ================================================
ALTER TABLE public.schools ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view schools"
ON public.schools FOR SELECT
USING (true);

CREATE POLICY "Only admins can modify schools"
ON public.schools FOR ALL
USING (
    EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin'
    )
);

-- ================================================
-- VERIFICATION QUERIES
-- ================================================
-- Check schools
SELECT * FROM public.schools;

-- Check profile school assignments
SELECT id, email, name, role, group_name, school_id 
FROM public.profiles 
ORDER BY school_id, role, name;
