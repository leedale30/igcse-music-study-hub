-- Complete Progress Table Fix
-- This script ensures the progress table exists with proper RLS policies

-- ============================================================================
-- STEP 1: Check if progress table exists and create if needed
-- ============================================================================
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'progress') THEN
        CREATE TABLE public.progress (
            id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
            user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
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
        RAISE NOTICE 'Progress table created successfully';
    ELSE
        RAISE NOTICE 'Progress table already exists';
    END IF;
END
$$;

-- ============================================================================
-- STEP 2: Enable Row Level Security
-- ============================================================================
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- STEP 3: Drop all existing policies to prevent conflicts
-- ============================================================================
DROP POLICY IF EXISTS "Users can view own progress" ON public.progress;
DROP POLICY IF EXISTS "Users can insert own progress" ON public.progress;
DROP POLICY IF EXISTS "Users can update own progress" ON public.progress;
DROP POLICY IF EXISTS "Users can delete own progress" ON public.progress;
DROP POLICY IF EXISTS "progress_select_own" ON public.progress;
DROP POLICY IF EXISTS "progress_insert_own" ON public.progress;
DROP POLICY IF EXISTS "progress_update_own" ON public.progress;
DROP POLICY IF EXISTS "progress_delete_own" ON public.progress;

-- ============================================================================
-- STEP 4: Create simple, non-recursive RLS policies
-- ============================================================================

-- Policy for SELECT: Users can read their own progress
CREATE POLICY "progress_select_policy" ON public.progress
    FOR SELECT
    USING (auth.uid() = user_id);

-- Policy for INSERT: Users can insert their own progress
CREATE POLICY "progress_insert_policy" ON public.progress
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Policy for UPDATE: Users can update their own progress
CREATE POLICY "progress_update_policy" ON public.progress
    FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Policy for DELETE: Users can delete their own progress (optional)
CREATE POLICY "progress_delete_policy" ON public.progress
    FOR DELETE
    USING (auth.uid() = user_id);

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
INSERT INTO public.progress (user_id, section, quiz_id, score, total_questions, percentage, time_taken, answers)
VALUES 
    ('00000000-0000-0000-0000-000000000001', 'test-section', 'test-quiz-1', 8, 10, 80.00, 120, '{"answers": ["A", "B", "C"]}'),
    ('00000000-0000-0000-0000-000000000002', 'test-section', 'test-quiz-2', 9, 10, 90.00, 150, '{"answers": ["B", "C", "D"]}')
ON CONFLICT (user_id, section, quiz_id) DO UPDATE SET
    score = EXCLUDED.score,
    total_questions = EXCLUDED.total_questions,
    percentage = EXCLUDED.percentage,
    time_taken = EXCLUDED.time_taken,
    answers = EXCLUDED.answers,
    updated_at = NOW();

-- ============================================================================
-- STEP 7: Verification queries
-- ============================================================================

-- Check table structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_schema = 'public' AND table_name = 'progress'
ORDER BY ordinal_position;

-- Check RLS status
SELECT schemaname, tablename, rowsecurity
FROM pg_tables
WHERE tablename = 'progress';

-- Check policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies
WHERE tablename = 'progress';

-- Test query (should work without recursion)
SELECT COUNT(*) as total_progress_records FROM public.progress;

-- Final status
SELECT 'Progress table setup completed successfully' as status;