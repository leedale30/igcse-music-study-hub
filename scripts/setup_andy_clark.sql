-- ================================================
-- SUPABASE: Setup Andy Clark as Teacher
-- Run this in the Supabase SQL Editor AFTER creating the auth user
-- ================================================

-- !! STEP 1: Create user in Supabase Dashboard first !!
-- Go to: Authentication > Users > Add user > Create new user
-- Email: andyclarkmusic@icloud.com
-- Password: 123Music
-- 
-- After creation, note the UUID and proceed to Step 2.

-- ================================================
-- STEP 2: Update Andy's profile (run after auth user is created)
-- ================================================
-- The trigger should auto-create a profile. This updates it.

UPDATE public.profiles SET 
  name = 'Andy Clark',
  nickname = 'ANDY',
  group_name = 'Andys School', -- Different from your Grade 9/10
  role = 'teacher'
WHERE email = 'andyclarkmusic@icloud.com';

-- ================================================
-- IMPORTANT NOTE ABOUT ACCESS CONTROL
-- ================================================
-- Current RLS policy allows ALL teachers to see ALL students.
-- For true isolation, you would need to:
-- 1. Add a school_id column to profiles
-- 2. Update RLS to filter: teacher.school_id = student.school_id
--
-- If you want me to implement school-based isolation, let me know!
-- ================================================

-- Verify the profile was created correctly:
SELECT id, email, name, nickname, role, group_name 
FROM public.profiles 
WHERE email = 'andyclarkmusic@icloud.com';
