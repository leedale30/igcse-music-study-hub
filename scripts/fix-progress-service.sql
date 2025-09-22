-- Fix Progress Service - Create Missing Progress Table
-- This script creates the progress table that the ProgressService needs

-- ============================================================================
-- STEP 1: Create the progress table
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.progress (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL, -- References auth.users(id) in Supabase
    section TEXT NOT NULL,
    quiz_id TEXT NOT NULL,
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    time_taken INTEGER, -- in seconds
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    answers JSONB, -- store quiz answers
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, section, quiz_id)
);

-- ============================================================================
-- STEP 2: Enable Row Level Security
-- ============================================================================
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- STEP 3: Drop existing policies if they exist (to avoid conflicts)
-- ============================================================================
DROP POLICY IF EXISTS "Users can view own progress" ON public.progress;
DROP POLICY IF EXISTS "Users can insert own progress" ON public.progress;
DROP POLICY IF EXISTS "Users can update own progress" ON public.progress;
DROP POLICY IF EXISTS "Teachers can view all progress" ON public.progress;

-- ============================================================================
-- STEP 4: Create RLS policies for progress table
-- ============================================================================

-- Policy for users to view their own progress
CREATE POLICY "Users can view own progress" ON public.progress
    FOR SELECT USING (auth.uid() = user_id);

-- Policy for users to insert their own progress
CREATE POLICY "Users can insert own progress" ON public.progress
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policy for users to update their own progress
CREATE POLICY "Users can update own progress" ON public.progress
    FOR UPDATE USING (auth.uid() = user_id);

-- Optional: Policy for teachers/admins to view all progress (uncomment if needed)
-- CREATE POLICY "Teachers can view all progress" ON public.progress
--     FOR SELECT USING (
--         EXISTS (
--             SELECT 1 FROM public.users 
--             WHERE id = auth.uid() 
--             AND role IN ('teacher', 'admin')
--         )
--     );

-- ============================================================================
-- STEP 5: Create performance indexes
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_progress_user_id ON public.progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_section ON public.progress(section);
CREATE INDEX IF NOT EXISTS idx_progress_quiz_id ON public.progress(quiz_id);
CREATE INDEX IF NOT EXISTS idx_progress_completed_at ON public.progress(completed_at DESC);
CREATE INDEX IF NOT EXISTS idx_progress_user_section ON public.progress(user_id, section);

-- ============================================================================
-- STEP 6: Insert test data for verification
-- ============================================================================
-- This will only work if there's an authenticated user
-- The actual test will be done from the application

-- ============================================================================
-- STEP 7: Verification queries
-- ============================================================================

-- Check if table was created successfully
SELECT 
    'Progress table created successfully!' as result,
    COUNT(*) as existing_records
FROM public.progress;

-- Show table structure
SELECT 
    'Table Structure:' as info,
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'progress' AND table_schema = 'public'
ORDER BY ordinal_position;

-- Check RLS status
SELECT 
    'RLS Status:' as info,
    schemaname,
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables 
WHERE schemaname = 'public' AND tablename = 'progress';

-- List policies
SELECT 
    'Policies:' as info,
    policyname,
    cmd as policy_type,
    roles
FROM pg_policies 
WHERE schemaname = 'public' AND tablename = 'progress';

-- Show indexes
SELECT 
    'Indexes:' as info,
    indexname,
    indexdef
FROM pg_indexes 
WHERE schemaname = 'public' AND tablename = 'progress';

SELECT '🎉 Progress service fix completed! The progress table is now ready.' as final_status;