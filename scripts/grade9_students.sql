-- ================================================
-- SUPABASE ADMIN: Grade 9 Student Account Management
-- Run this in the Supabase SQL Editor
-- ================================================

-- STEP 1: Delete old Grade 9 accounts (if any exist)
-- This deletes profiles where group_name is 'Grade 9'
DELETE FROM public.profiles WHERE group_name = 'Grade 9';

-- Note: To fully delete users from auth.users, you need to do that 
-- via the Supabase Dashboard > Authentication > Users, or use the Admin API.

-- STEP 2: Insert new Grade 9 student profiles
-- IMPORTANT: You must first create these users in Supabase Auth.
-- Go to Authentication > Users > Add user (or use the invite flow)
-- Then run this SQL to update their profiles with nicknames.

-- After creating the auth users, get their UUIDs and update below:
-- (The trigger should auto-create profiles, but we'll update nicknames)

-- ================================================
-- MANUAL STEPS REQUIRED:
-- ================================================
-- 1. Go to Supabase Dashboard > Authentication > Users
-- 2. Click "Add user" > "Create new user"
-- 3. Create each of these users:
--    - emily.chan@schoolclass.com / emily123
--    - christina.wang@schoolclass.com / christina123
--    - steven.zhang@schoolclass.com / steven123
--    - vengie.guan@schoolclass.com / vengie123
-- 4. After creation, their UUIDs will be shown
-- 5. Then run the UPDATE statements below with the correct UUIDs

-- ================================================
-- UPDATE PROFILES (run after creating auth users)
-- ================================================
-- Replace 'UUID_HERE' with actual UUIDs from step 4

/*
UPDATE public.profiles SET 
  name = 'Emily Chan',
  nickname = 'EMILY',
  group_name = 'Grade 9',
  role = 'student'
WHERE email = 'emily.chan@schoolclass.com';

UPDATE public.profiles SET 
  name = 'Christina Wang',
  nickname = 'CHRISTINA',
  group_name = 'Grade 9',
  role = 'student'
WHERE email = 'christina.wang@schoolclass.com';

UPDATE public.profiles SET 
  name = 'Steven Zhang',
  nickname = 'STEVEN',
  group_name = 'Grade 9',
  role = 'student'
WHERE email = 'steven.zhang@schoolclass.com';

UPDATE public.profiles SET 
  name = 'Vengie Guan',
  nickname = 'VENGIE',
  group_name = 'Grade 9',
  role = 'student'
WHERE email = 'vengie.guan@schoolclass.com';
*/
