-- ============================================================================
-- FIX PROGRESS TABLE - Complete Schema Update
-- Run this in Supabase SQL Editor
-- ============================================================================

-- First, let's see what columns exist
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_schema = 'public' AND table_name = 'progress'
ORDER BY ordinal_position;

-- Add missing columns with correct names
-- The frontend expects: user_id, quiz_id, section, score, total_questions, percentage, time_taken, completed_at, answers

-- If section_id exists but we need section, rename it
ALTER TABLE public.progress RENAME COLUMN section_id TO section;

-- Or if section doesn't exist at all, add it
ALTER TABLE public.progress ADD COLUMN IF NOT EXISTS section TEXT DEFAULT 'general';

-- Add other required columns
ALTER TABLE public.progress ADD COLUMN IF NOT EXISTS score INTEGER;
ALTER TABLE public.progress ADD COLUMN IF NOT EXISTS total_questions INTEGER;
ALTER TABLE public.progress ADD COLUMN IF NOT EXISTS percentage DECIMAL(5,2);
ALTER TABLE public.progress ADD COLUMN IF NOT EXISTS time_taken INTEGER DEFAULT 0;
ALTER TABLE public.progress ADD COLUMN IF NOT EXISTS completed_at TIMESTAMPTZ DEFAULT NOW();
ALTER TABLE public.progress ADD COLUMN IF NOT EXISTS answers JSONB;

-- Remove NOT NULL constraint from section if it exists
ALTER TABLE public.progress ALTER COLUMN section DROP NOT NULL;

-- Verify the updated schema
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_schema = 'public' AND table_name = 'progress'
ORDER BY ordinal_position;
