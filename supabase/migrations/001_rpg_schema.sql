-- ================================================
-- RPG BATTLE SYSTEM: Database Schema Migration
-- Run this in Supabase SQL Editor
-- ================================================
-- This extends your existing profiles table and adds
-- new tables for the RPG battle system.
-- ================================================

-- ================================================
-- STEP 1: Extend profiles table with RPG fields
-- ================================================
-- Add XP and level columns to existing profiles
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS xp INT DEFAULT 0,
ADD COLUMN IF NOT EXISTS level INT DEFAULT 1,
ADD COLUMN IF NOT EXISTS character_class TEXT DEFAULT 'bard';

-- ================================================
-- STEP 2: Create classes table (for grouping students)
-- ================================================
-- Note: You already have group_name + school_id in profiles,
-- but this provides more structure if needed
CREATE TABLE IF NOT EXISTS public.rpg_classes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    teacher_id UUID REFERENCES auth.users(id),
    name TEXT NOT NULL,
    school_id INT, -- Optional: link to schools table if it exists
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- STEP 3: Create questions table
-- ================================================
CREATE TABLE IF NOT EXISTS public.rpg_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    author_id UUID REFERENCES auth.users(id),
    class_id UUID REFERENCES public.rpg_classes(id),
    subject_tag TEXT, -- e.g., 'baroque', 'cadences', 'intervals'
    type TEXT CHECK (type IN ('mcq', 'short', 'audio', 'image', 'listening')) DEFAULT 'mcq',
    content JSONB NOT NULL, -- { prompt, choices[], etc. }
    media_path TEXT, -- Storage path for audio/image
    answer_key JSONB NOT NULL, -- { correct: 2 } or { text: ["cadence", "plagal"] }
    difficulty INT DEFAULT 3 CHECK (difficulty BETWEEN 1 AND 5),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- STEP 4: Create XP events table
-- ================================================
CREATE TABLE IF NOT EXISTS public.xp_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    source TEXT NOT NULL CHECK (source IN ('test', 'match', 'teacher', 'quiz', 'achievement')),
    points INT NOT NULL,
    metadata JSONB, -- { test_id, match_id, reason, etc. }
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- STEP 5: Create matches table
-- ================================================
CREATE TABLE IF NOT EXISTS public.rpg_matches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    class_id UUID REFERENCES public.rpg_classes(id),
    player_a UUID REFERENCES public.profiles(id) NOT NULL,
    player_b UUID REFERENCES public.profiles(id),
    status TEXT CHECK (status IN ('pending', 'active', 'finished', 'cancelled')) DEFAULT 'pending',
    winner UUID REFERENCES public.profiles(id),
    -- Health tracking
    player_a_health INT DEFAULT 100,
    player_b_health INT DEFAULT 100,
    -- Match config
    total_turns INT DEFAULT 5,
    current_turn INT DEFAULT 0,
    -- Question IDs for this match (preselected)
    question_ids UUID[] DEFAULT '{}',
    -- Timing
    started_at TIMESTAMPTZ,
    ended_at TIMESTAMPTZ,
    -- Additional metadata
    meta JSONB DEFAULT '{}'
);

-- ================================================
-- STEP 6: Create match turns table
-- ================================================
CREATE TABLE IF NOT EXISTS public.rpg_match_turns (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    match_id UUID REFERENCES public.rpg_matches(id) ON DELETE CASCADE,
    turn_number INT NOT NULL,
    question_id UUID REFERENCES public.rpg_questions(id),
    player_id UUID REFERENCES public.profiles(id) NOT NULL,
    answer JSONB, -- Player's submitted answer
    correct BOOLEAN,
    time_taken_ms INT, -- How long they took to answer
    damage INT DEFAULT 0, -- Damage dealt this turn
    streak INT DEFAULT 0, -- Consecutive correct answers
    created_at TIMESTAMPTZ DEFAULT NOW(),
    -- Ensure unique answer per player per turn
    UNIQUE(match_id, turn_number, player_id)
);

-- ================================================
-- STEP 7: Create XP trigger function
-- ================================================
CREATE OR REPLACE FUNCTION public.add_xp_on_event()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    new_xp INT;
    new_level INT;
    xp_per_level INT := 100; -- XP needed per level
BEGIN
    -- Update user's XP
    UPDATE public.profiles 
    SET xp = xp + NEW.points
    WHERE id = NEW.user_id
    RETURNING xp INTO new_xp;
    
    -- Calculate new level (simple formula: level = 1 + floor(xp/100))
    new_level := 1 + FLOOR(new_xp::FLOAT / xp_per_level);
    
    -- Update level if changed
    UPDATE public.profiles 
    SET level = new_level
    WHERE id = NEW.user_id AND level != new_level;
    
    RETURN NEW;
END;
$$;

-- Create trigger
DROP TRIGGER IF EXISTS trg_add_xp ON public.xp_events;
CREATE TRIGGER trg_add_xp
    AFTER INSERT ON public.xp_events
    FOR EACH ROW
    EXECUTE FUNCTION public.add_xp_on_event();

-- ================================================
-- STEP 8: Create helper function for calculating damage
-- ================================================
CREATE OR REPLACE FUNCTION public.calculate_damage(
    is_correct BOOLEAN,
    time_taken_ms INT,
    streak INT,
    max_time_ms INT DEFAULT 30000
)
RETURNS INT
LANGUAGE plpgsql
AS $$
DECLARE
    base_damage INT := 0;
    speed_bonus INT := 0;
    streak_multiplier FLOAT := 1.0;
    total_damage INT;
BEGIN
    IF NOT is_correct THEN
        RETURN 0;
    END IF;
    
    -- Base damage for correct answer
    base_damage := 15;
    
    -- Speed bonus: faster answers = more damage (max +10)
    IF time_taken_ms < max_time_ms THEN
        speed_bonus := GREATEST(0, FLOOR((max_time_ms - time_taken_ms)::FLOAT / 3000));
        speed_bonus := LEAST(speed_bonus, 10); -- Cap at 10
    END IF;
    
    -- Streak multiplier: consecutive correct = more damage
    IF streak >= 3 THEN
        streak_multiplier := 1.5;
    ELSIF streak >= 2 THEN
        streak_multiplier := 1.25;
    END IF;
    
    total_damage := FLOOR((base_damage + speed_bonus) * streak_multiplier);
    
    RETURN total_damage;
END;
$$;

-- ================================================
-- STEP 9: Enable RLS on new tables
-- ================================================
ALTER TABLE public.rpg_classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rpg_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.xp_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rpg_matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rpg_match_turns ENABLE ROW LEVEL SECURITY;

-- ================================================
-- STEP 10: RLS Policies
-- ================================================

-- RPG Classes: Teachers can CRUD their classes, students can view
CREATE POLICY "Teachers can manage their classes"
ON public.rpg_classes FOR ALL
USING (auth.uid() = teacher_id);

CREATE POLICY "Users can view classes"
ON public.rpg_classes FOR SELECT
USING (true);

-- Questions: Teachers can CRUD, students can view during matches only
CREATE POLICY "Teachers can manage questions"
ON public.rpg_questions FOR ALL
USING (auth.uid() = author_id);

CREATE POLICY "Users can view active questions"
ON public.rpg_questions FOR SELECT
USING (is_active = true);

-- XP Events: Users can view their own events
CREATE POLICY "Users can view own xp events"
ON public.xp_events FOR SELECT
USING (auth.uid() = user_id);

-- Matches: Players can view their matches
CREATE POLICY "Players can view their matches"
ON public.rpg_matches FOR SELECT
USING (auth.uid() = player_a OR auth.uid() = player_b);

-- Match Turns: Players can view turns in their matches
CREATE POLICY "Players can view their match turns"
ON public.rpg_match_turns FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM public.rpg_matches m
        WHERE m.id = match_id
        AND (m.player_a = auth.uid() OR m.player_b = auth.uid())
    )
);

-- Teachers can view all matches and turns for their school
CREATE POLICY "Teachers can view school matches"
ON public.rpg_matches FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM public.profiles p
        WHERE p.id = auth.uid()
        AND p.role IN ('teacher', 'admin')
    )
);

CREATE POLICY "Teachers can view all match turns"
ON public.rpg_match_turns FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM public.profiles p
        WHERE p.id = auth.uid()
        AND p.role IN ('teacher', 'admin')
    )
);

-- ================================================
-- STEP 11: Create indexes for performance
-- ================================================
CREATE INDEX IF NOT EXISTS idx_xp_events_user ON public.xp_events(user_id);
CREATE INDEX IF NOT EXISTS idx_xp_events_created ON public.xp_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_matches_status ON public.rpg_matches(status);
CREATE INDEX IF NOT EXISTS idx_matches_players ON public.rpg_matches(player_a, player_b);
CREATE INDEX IF NOT EXISTS idx_match_turns_match ON public.rpg_match_turns(match_id);
CREATE INDEX IF NOT EXISTS idx_questions_subject ON public.rpg_questions(subject_tag);

-- ================================================
-- STEP 12: Create leaderboard view
-- ================================================
CREATE OR REPLACE VIEW public.rpg_leaderboard AS
SELECT 
    p.id,
    p.name,
    p.nickname,
    p.xp,
    p.level,
    p.character_class,
    p.group_name,
    COUNT(DISTINCT m.id) FILTER (WHERE m.winner = p.id) AS wins,
    COUNT(DISTINCT m.id) FILTER (WHERE m.status = 'finished' AND (m.player_a = p.id OR m.player_b = p.id)) AS total_matches,
    RANK() OVER (PARTITION BY p.group_name ORDER BY p.xp DESC) AS group_rank,
    RANK() OVER (ORDER BY p.xp DESC) AS global_rank
FROM public.profiles p
LEFT JOIN public.rpg_matches m ON m.player_a = p.id OR m.player_b = p.id
WHERE p.role = 'student'
GROUP BY p.id, p.name, p.nickname, p.xp, p.level, p.character_class, p.group_name;

-- ================================================
-- VERIFICATION
-- ================================================
SELECT 'RPG Schema Created Successfully!' AS status;
