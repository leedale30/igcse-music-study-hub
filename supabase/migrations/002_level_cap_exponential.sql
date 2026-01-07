-- ================================================
-- RPG Level System Update: Level 100 Cap + Exponential XP Curve
-- ================================================
-- This migration updates the level calculation to use an exponential curve
-- making higher levels progressively harder to reach.
--
-- XP Requirements (approximate):
-- Level 1:      0 XP
-- Level 10:     1,350 XP
-- Level 25:     9,375 XP
-- Level 50:     49,000 XP
-- Level 75:     138,375 XP
-- Level 100:    297,000 XP (very hard!)
--
-- Formula: XP needed for level L = 30 * L * L
-- ================================================

-- Drop the old function if it exists
DROP FUNCTION IF EXISTS calculate_level(INTEGER);

-- Create new level calculation function with exponential curve
CREATE OR REPLACE FUNCTION calculate_level(xp_amount INTEGER)
RETURNS INTEGER AS $$
DECLARE
    calc_level INTEGER;
BEGIN
    -- Exponential formula: level = floor(sqrt(xp / 30))
    -- This means XP needed for level L = 30 * L * L
    -- Capped at level 100
    calc_level := LEAST(100, GREATEST(1, FLOOR(SQRT(xp_amount::FLOAT / 30)) + 1));
    RETURN calc_level;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Update the trigger function to use the new calculation
CREATE OR REPLACE FUNCTION update_level_on_xp_change()
RETURNS TRIGGER AS $$
BEGIN
    NEW.level := calculate_level(NEW.xp);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Make sure trigger exists
DROP TRIGGER IF EXISTS trigger_update_level ON profiles;
CREATE TRIGGER trigger_update_level
    BEFORE UPDATE OF xp ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_level_on_xp_change();

-- Helper function to get XP required for a specific level
CREATE OR REPLACE FUNCTION xp_for_level(target_level INTEGER)
RETURNS INTEGER AS $$
BEGIN
    IF target_level <= 1 THEN
        RETURN 0;
    ELSIF target_level > 100 THEN
        RETURN 30 * 100 * 100; -- Max XP for level 100
    ELSE
        RETURN 30 * (target_level - 1) * (target_level - 1);
    END IF;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Helper function to get XP needed for next level
CREATE OR REPLACE FUNCTION xp_to_next_level(current_xp INTEGER)
RETURNS INTEGER AS $$
DECLARE
    current_level INTEGER;
    next_level_xp INTEGER;
BEGIN
    current_level := calculate_level(current_xp);
    IF current_level >= 100 THEN
        RETURN 0; -- Already at max level
    END IF;
    next_level_xp := xp_for_level(current_level + 1);
    RETURN GREATEST(0, next_level_xp - current_xp);
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Update all existing users' levels based on new formula
UPDATE profiles SET level = calculate_level(xp);

-- Add comment explaining the system
COMMENT ON FUNCTION calculate_level(INTEGER) IS 
'Calculates player level from XP using exponential curve. 
Formula: level = floor(sqrt(xp/30)) + 1, capped at 100.
Level milestones: L10=1350XP, L25=9375XP, L50=49000XP, L100=297000XP';
