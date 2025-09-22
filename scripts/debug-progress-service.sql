-- Debug Progress Service Failure
-- Run this in Supabase SQL Editor to diagnose the issue

-- ============================================================================
-- CHECK 1: Does the progress table exist?
-- ============================================================================
SELECT 
    CASE 
        WHEN EXISTS (
            SELECT 1 FROM information_schema.tables 
            WHERE table_schema = 'public' AND table_name = 'progress'
        ) 
        THEN '✅ Progress table EXISTS'
        ELSE '❌ Progress table MISSING - This is likely the problem!'
    END as progress_table_status;

-- ============================================================================
-- CHECK 2: What tables do exist in the public schema?
-- ============================================================================
SELECT 
    '📋 Available tables:' as info,
    string_agg(table_name, ', ') as existing_tables
FROM information_schema.tables 
WHERE table_schema = 'public';

-- ============================================================================
-- CHECK 3: If progress table exists, check its structure
-- ============================================================================
SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_schema = 'public' AND table_name = 'progress'
ORDER BY ordinal_position;

-- ============================================================================
-- CHECK 4: Check RLS status on progress table (if it exists)
-- ============================================================================
SELECT 
    schemaname,
    tablename,
    rowsecurity as rls_enabled,
    CASE 
        WHEN rowsecurity THEN '✅ RLS is enabled'
        ELSE '⚠️ RLS is disabled'
    END as rls_status
FROM pg_tables 
WHERE schemaname = 'public' AND tablename = 'progress';

-- ============================================================================
-- CHECK 5: Check existing policies on progress table (if it exists)
-- ============================================================================
SELECT 
    policyname,
    cmd,
    roles,
    qual,
    with_check
FROM pg_policies 
WHERE schemaname = 'public' AND tablename = 'progress';

-- ============================================================================
-- CHECK 6: Test current user authentication
-- ============================================================================
SELECT 
    CASE 
        WHEN auth.uid() IS NOT NULL 
        THEN '✅ User is authenticated: ' || auth.uid()::text
        ELSE '❌ No authenticated user (auth.uid() is NULL)'
    END as auth_status;

-- ============================================================================
-- CHECK 7: Check if users table exists (progress table references it)
-- ============================================================================
SELECT 
    CASE 
        WHEN EXISTS (
            SELECT 1 FROM information_schema.tables 
            WHERE table_schema = 'public' AND table_name = 'users'
        ) 
        THEN '✅ Users table EXISTS'
        ELSE '❌ Users table MISSING - Progress table needs this!'
    END as users_table_status;

-- ============================================================================
-- SUMMARY AND RECOMMENDATIONS
-- ============================================================================
SELECT '🔍 DIAGNOSIS COMPLETE' as status, 
       'Check the results above to identify the issue' as next_steps;

-- ============================================================================
-- QUICK FIX: Create progress table if missing
-- ============================================================================
-- Uncomment and run this section if the progress table is missing:

/*
-- Create progress table
CREATE TABLE IF NOT EXISTS public.progress (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL, -- Will reference auth.users(id) in Supabase
    section TEXT NOT NULL,
    quiz_id TEXT NOT NULL,
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    time_taken INTEGER, -- in seconds
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    answers JSONB, -- store quiz answers
    UNIQUE(user_id, section, quiz_id)
);

-- Enable RLS
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;

-- Create policies for progress table
CREATE POLICY "Users can view own progress" ON public.progress
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON public.progress
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON public.progress
    FOR UPDATE USING (auth.uid() = user_id);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_progress_user_id ON public.progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_section ON public.progress(section);

-- Verify the table was created
SELECT 'Progress table created successfully!' as result;
*/