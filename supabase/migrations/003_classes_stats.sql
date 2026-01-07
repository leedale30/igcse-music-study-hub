-- ================================================
-- Phase 1: COMPREHENSIVE RPG System
-- ================================================
-- Full MMO-lite system including:
-- - Character classes & attributes
-- - Currencies (Gold, Sound Crystals, Harmony Tokens)
-- - Items, equipment, weapons, armor
-- - Chests & loot system
-- - Trading between players
-- - Power-ups & consumables
-- - Level-up bonuses
-- - Teams/guilds
-- ================================================

-- ================================================
-- 1. Character Classes
-- ================================================
CREATE TABLE IF NOT EXISTS rpg_classes (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    specialty TEXT NOT NULL,
    music_link TEXT NOT NULL,
    icon TEXT NOT NULL,
    base_precision INTEGER DEFAULT 0,
    base_tempo INTEGER DEFAULT 0,
    base_resonance INTEGER DEFAULT 0,
    base_fortitude INTEGER DEFAULT 0,
    base_synergy INTEGER DEFAULT 0,
    base_luck INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO rpg_classes (id, name, description, specialty, music_link, icon, base_precision, base_tempo, base_resonance, base_fortitude, base_synergy, base_luck)
VALUES
    ('melodist', 'Melodist', 'Masters of melody who strike with precision. High damage but fragile.', 'High accuracy, glass cannon', 'Melody mastery', '🎼', 5, 2, 0, -2, 0, 3),
    ('rhythmancer', 'Rhythmancer', 'Rhythm specialists who build power through combos and streaks.', 'Balanced, streak bonuses', 'Rhythm specialist', '🥁', 2, 4, 2, 0, 0, 0),
    ('harmonauts', 'Harmonauts', 'Chord warriors with massive defenses. Protects the team.', 'Tank, high HP', 'Harmony/chords', '🎹', 0, -1, 0, 6, 3, 0),
    ('synthweaver', 'Synthweaver', 'Electronic support class that buffs allies and debuffs enemies.', 'Support, team buffs', 'Electronic/synth', '🎛️', 1, 1, 3, 0, 5, -2)
ON CONFLICT (id) DO NOTHING;

-- ================================================
-- 2. Player Stats & Currencies
-- ================================================
CREATE TABLE IF NOT EXISTS rpg_player_stats (
    user_id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
    class_id TEXT REFERENCES rpg_classes(id) DEFAULT 'melodist',
    
    -- Attributes
    precision INTEGER DEFAULT 10,
    tempo INTEGER DEFAULT 10,
    resonance INTEGER DEFAULT 10,
    fortitude INTEGER DEFAULT 10,
    synergy INTEGER DEFAULT 10,
    luck INTEGER DEFAULT 10,
    
    -- Points to allocate
    attribute_points INTEGER DEFAULT 0,
    skill_points INTEGER DEFAULT 0,
    
    -- CURRENCIES
    gold INTEGER DEFAULT 100,              -- Common currency, earned from battles
    sound_crystals INTEGER DEFAULT 0,      -- Premium currency, earned from bosses
    harmony_tokens INTEGER DEFAULT 0,      -- Weekly reward currency
    
    -- Combat stats
    max_hp INTEGER DEFAULT 100,
    current_hp INTEGER DEFAULT 100,
    
    -- Progression stats
    bosses_defeated INTEGER DEFAULT 0,
    chests_opened INTEGER DEFAULT 0,
    total_damage_dealt BIGINT DEFAULT 0,
    highest_streak INTEGER DEFAULT 0,
    trades_completed INTEGER DEFAULT 0,
    
    -- Team affiliation
    team_id UUID,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- 3. Items & Equipment
-- ================================================
CREATE TYPE item_rarity AS ENUM ('common', 'uncommon', 'rare', 'epic', 'legendary');
CREATE TYPE item_type AS ENUM ('weapon', 'armor', 'accessory', 'consumable', 'material', 'chest');
CREATE TYPE equipment_slot AS ENUM ('weapon', 'head', 'chest', 'legs', 'accessory1', 'accessory2');

CREATE TABLE IF NOT EXISTS rpg_items (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    type item_type NOT NULL,
    rarity item_rarity DEFAULT 'common',
    slot equipment_slot,                    -- NULL for non-equippable items
    icon TEXT NOT NULL,
    music_reference TEXT,                   -- How it relates to IGCSE music
    
    -- Stats (for equipment)
    precision_bonus INTEGER DEFAULT 0,
    tempo_bonus INTEGER DEFAULT 0,
    resonance_bonus INTEGER DEFAULT 0,
    fortitude_bonus INTEGER DEFAULT 0,
    synergy_bonus INTEGER DEFAULT 0,
    luck_bonus INTEGER DEFAULT 0,
    damage_bonus INTEGER DEFAULT 0,
    hp_bonus INTEGER DEFAULT 0,
    
    -- For consumables
    effect_type TEXT,                       -- 'heal', 'buff_precision', 'xp_boost', etc.
    effect_value INTEGER,
    effect_duration INTEGER,                -- In seconds, NULL for instant
    
    -- Economy
    buy_price INTEGER DEFAULT 0,            -- Gold cost to buy
    sell_price INTEGER DEFAULT 0,           -- Gold when sold
    tradeable BOOLEAN DEFAULT true,
    
    -- Upgrade info
    max_level INTEGER DEFAULT 10,
    upgrade_cost_base INTEGER DEFAULT 50,   -- Sound crystals per upgrade
    
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- 4. Player Inventory
-- ================================================
CREATE TABLE IF NOT EXISTS rpg_inventory (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    item_id TEXT REFERENCES rpg_items(id),
    quantity INTEGER DEFAULT 1,
    level INTEGER DEFAULT 1,                -- Upgrade level
    equipped BOOLEAN DEFAULT false,
    equipped_slot equipment_slot,
    obtained_at TIMESTAMPTZ DEFAULT NOW(),
    
    UNIQUE(user_id, item_id, level)         -- Stack same items at same level
);

-- ================================================
-- 5. Equipped Items (Quick Reference)
-- ================================================
CREATE TABLE IF NOT EXISTS rpg_equipment (
    user_id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
    weapon_id UUID REFERENCES rpg_inventory(id),
    head_id UUID REFERENCES rpg_inventory(id),
    chest_id UUID REFERENCES rpg_inventory(id),
    legs_id UUID REFERENCES rpg_inventory(id),
    accessory1_id UUID REFERENCES rpg_inventory(id),
    accessory2_id UUID REFERENCES rpg_inventory(id),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- 6. Chests & Loot Tables
-- ================================================
CREATE TABLE IF NOT EXISTS rpg_chests (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    rarity item_rarity NOT NULL,
    icon TEXT NOT NULL,
    cost_gold INTEGER DEFAULT 0,
    cost_crystals INTEGER DEFAULT 0,
    cost_tokens INTEGER DEFAULT 0,
    
    -- Loot configuration
    min_items INTEGER DEFAULT 1,
    max_items INTEGER DEFAULT 3,
    guaranteed_rarity item_rarity,          -- Minimum rarity guaranteed
    
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS rpg_loot_tables (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chest_id TEXT REFERENCES rpg_chests(id),
    item_id TEXT REFERENCES rpg_items(id),
    drop_chance DECIMAL(5,4) NOT NULL,      -- 0.0000 to 1.0000
    min_quantity INTEGER DEFAULT 1,
    max_quantity INTEGER DEFAULT 1
);

-- Sample chests
INSERT INTO rpg_chests (id, name, description, rarity, icon, cost_gold, min_items, max_items)
VALUES
    ('wooden_chest', 'Wooden Chest', 'A basic chest with common items', 'common', '📦', 100, 1, 2),
    ('silver_chest', 'Silver Chest', 'Contains uncommon to rare gear', 'uncommon', '🗄️', 500, 2, 3),
    ('golden_chest', 'Golden Chest', 'High chance of epic items', 'rare', '✨', 0, 3, 4),
    ('crystal_chest', 'Crystal Chest', 'Guaranteed epic or legendary', 'epic', '💎', 0, 3, 5),
    ('legendary_chest', 'Legendary Chest', 'The rarest treasures await', 'legendary', '👑', 0, 4, 6)
ON CONFLICT (id) DO NOTHING;

-- ================================================
-- 7. Trading System
-- ================================================
CREATE TYPE trade_status AS ENUM ('pending', 'accepted', 'declined', 'cancelled', 'completed');

CREATE TABLE IF NOT EXISTS rpg_trades (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sender_id UUID REFERENCES profiles(id),
    receiver_id UUID REFERENCES profiles(id),
    status trade_status DEFAULT 'pending',
    
    -- What sender offers
    sender_gold INTEGER DEFAULT 0,
    sender_crystals INTEGER DEFAULT 0,
    sender_items UUID[],                    -- Array of inventory IDs
    
    -- What receiver offers  
    receiver_gold INTEGER DEFAULT 0,
    receiver_crystals INTEGER DEFAULT 0,
    receiver_items UUID[],
    
    -- Trade finalization
    sender_confirmed BOOLEAN DEFAULT false,
    receiver_confirmed BOOLEAN DEFAULT false,
    
    message TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    expires_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '24 hours'),
    completed_at TIMESTAMPTZ
);

-- ================================================
-- 8. Power-Ups & Buffs
-- ================================================
CREATE TABLE IF NOT EXISTS rpg_powerups (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    icon TEXT NOT NULL,
    effect_type TEXT NOT NULL,              -- 'damage_boost', 'xp_boost', 'timer_extend', etc.
    effect_value INTEGER NOT NULL,
    duration_seconds INTEGER,               -- NULL = permanent once activated
    cooldown_seconds INTEGER DEFAULT 0,
    music_reference TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS rpg_active_buffs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    powerup_id TEXT REFERENCES rpg_powerups(id),
    stacks INTEGER DEFAULT 1,
    expires_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sample power-ups
INSERT INTO rpg_powerups (id, name, description, icon, effect_type, effect_value, duration_seconds, music_reference)
VALUES
    ('crescendo', 'Crescendo Surge', '+50% damage for 60 seconds', '📈', 'damage_boost', 50, 60, 'Crescendo - gradually getting louder'),
    ('fermata', 'Fermata Focus', '+10 seconds on timer', '⏸️', 'timer_extend', 10, NULL, 'Fermata - held note'),
    ('fortissimo', 'Fortissimo Strike', 'Next answer deals 3x damage', '💥', 'next_crit', 300, NULL, 'Fortissimo - very loud'),
    ('pianissimo', 'Pianissimo Shield', '-50% damage taken for 30s', '🛡️', 'damage_reduction', 50, 30, 'Pianissimo - very soft'),
    ('accelerando', 'Accelerando Rush', '+100% XP for 5 minutes', '🚀', 'xp_boost', 100, 300, 'Accelerando - speeding up'),
    ('ritardando', 'Ritardando Heal', 'Recover 50 HP', '💚', 'heal', 50, NULL, 'Ritardando - slowing down')
ON CONFLICT (id) DO NOTHING;

-- ================================================
-- 9. Teams/Guilds
-- ================================================
CREATE TABLE IF NOT EXISTS rpg_teams (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    tag TEXT NOT NULL UNIQUE,               -- Short tag like [MELO]
    description TEXT,
    icon TEXT DEFAULT '🎵',
    leader_id UUID REFERENCES profiles(id),
    
    -- Team stats
    total_xp BIGINT DEFAULT 0,
    total_bosses_killed INTEGER DEFAULT 0,
    member_count INTEGER DEFAULT 1,
    max_members INTEGER DEFAULT 10,
    
    -- Team bonuses
    xp_bonus INTEGER DEFAULT 0,             -- % bonus for team members
    
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS rpg_team_members (
    team_id UUID REFERENCES rpg_teams(id) ON DELETE CASCADE,
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    role TEXT DEFAULT 'member',             -- 'leader', 'officer', 'member'
    joined_at TIMESTAMPTZ DEFAULT NOW(),
    contribution_xp BIGINT DEFAULT 0,
    PRIMARY KEY (team_id, user_id)
);

-- ================================================
-- 10. Level-Up Bonuses
-- ================================================
CREATE TABLE IF NOT EXISTS rpg_level_rewards (
    level INTEGER PRIMARY KEY,
    gold_reward INTEGER DEFAULT 0,
    crystals_reward INTEGER DEFAULT 0,
    tokens_reward INTEGER DEFAULT 0,
    attribute_points INTEGER DEFAULT 1,
    skill_points INTEGER DEFAULT 1,
    chest_rewards TEXT[],                   -- Chest IDs to award
    title_unlock TEXT,                      -- Special title at this level
    special_item TEXT                       -- Special item ID at milestones
);

-- Level rewards (every 5 levels has bonus)
INSERT INTO rpg_level_rewards (level, gold_reward, crystals_reward, attribute_points, skill_points, chest_rewards, title_unlock)
SELECT 
    lvl,
    lvl * 50,                               -- Gold scales with level
    CASE WHEN lvl % 10 = 0 THEN lvl ELSE 0 END,  -- Crystals every 10 levels
    CASE WHEN lvl % 5 = 0 THEN 2 ELSE 1 END,     -- Bonus attribute points
    CASE WHEN lvl % 5 = 0 THEN 2 ELSE 1 END,     -- Bonus skill points
    CASE 
        WHEN lvl = 10 THEN ARRAY['silver_chest']
        WHEN lvl = 25 THEN ARRAY['golden_chest']
        WHEN lvl = 50 THEN ARRAY['crystal_chest']
        WHEN lvl = 75 THEN ARRAY['crystal_chest', 'golden_chest']
        WHEN lvl = 100 THEN ARRAY['legendary_chest']
        ELSE NULL
    END,
    CASE 
        WHEN lvl = 10 THEN 'Apprentice'
        WHEN lvl = 25 THEN 'Journeyman'
        WHEN lvl = 50 THEN 'Expert'
        WHEN lvl = 75 THEN 'Master'
        WHEN lvl = 100 THEN 'Grandmaster'
        ELSE NULL
    END
FROM generate_series(1, 100) AS lvl
ON CONFLICT (level) DO NOTHING;

-- ================================================
-- 11. Shop & Vendors
-- ================================================
CREATE TABLE IF NOT EXISTS rpg_shop_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    item_id TEXT REFERENCES rpg_items(id),
    currency TEXT NOT NULL,                 -- 'gold', 'crystals', 'tokens'
    price INTEGER NOT NULL,
    stock INTEGER,                          -- NULL = unlimited
    requires_level INTEGER DEFAULT 1,
    available_from TIMESTAMPTZ DEFAULT NOW(),
    available_until TIMESTAMPTZ,
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- 12. Weekly Competition
-- ================================================
CREATE TABLE IF NOT EXISTS rpg_weekly_leaderboard (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    week_start DATE NOT NULL,
    week_end DATE NOT NULL,
    user_id UUID REFERENCES profiles(id),
    xp_earned INTEGER DEFAULT 0,
    bosses_killed INTEGER DEFAULT 0,
    best_streak INTEGER DEFAULT 0,
    chests_opened INTEGER DEFAULT 0,
    trades_completed INTEGER DEFAULT 0,
    
    UNIQUE(week_start, user_id)
);

CREATE TABLE IF NOT EXISTS rpg_weekly_rewards (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    week_start DATE NOT NULL,
    user_id UUID REFERENCES profiles(id),
    rank INTEGER NOT NULL,
    reward_type TEXT NOT NULL,              -- 'coffee_voucher', 'crystals', 'chest', etc.
    reward_value TEXT,
    claimed BOOLEAN DEFAULT false,
    claimed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================
-- 13. Sample Items (Cyberpunk × Music)
-- ================================================
INSERT INTO rpg_items (id, name, description, type, rarity, slot, icon, music_reference, precision_bonus, tempo_bonus, fortitude_bonus, luck_bonus, damage_bonus, buy_price, sell_price)
VALUES
    -- Weapons
    ('neon_baton', 'Neon Baton', 'A conductors baton infused with neon energy', 'weapon', 'common', 'weapon', '🪄', 'Conductor directs orchestra', 3, 0, 0, 0, 5, 200, 50),
    ('synth_blade', 'Synth Blade', 'Keyboard-edged sword that hums with electronic power', 'weapon', 'uncommon', 'weapon', '⚔️', 'Synthesizer - electronic sound', 5, 3, 0, 0, 15, 500, 125),
    ('bass_cannon', 'Bass Cannon', 'A subwoofer converted into a devastating weapon', 'weapon', 'rare', 'weapon', '🔊', 'Bass - low frequency power', 8, 0, 2, 0, 30, 1500, 375),
    ('tuning_staff', 'Tuning Fork Staff', 'Resonates at perfect pitch for defensive power', 'weapon', 'uncommon', 'weapon', '🔱', 'Tuning fork - A440', 0, 0, 5, 2, 10, 400, 100),
    ('metronome_mace', 'Metronome Mace', 'Strikes with perfect timing', 'weapon', 'epic', 'weapon', '🔨', 'Metronome - keeps time', 10, 8, 0, 5, 50, 5000, 1250),
    
    -- Armor
    ('vivaldi_vest', 'Vivaldis Firewall Vest', 'Protection blessed by the seasons', 'armor', 'rare', 'chest', '🦺', 'Vivaldi - Four Seasons', 0, 0, 8, 3, 0, 2000, 500),
    ('bach_cloak', 'Bachs Contrapuntal Cloak', 'Layers of defense like polyphonic lines', 'armor', 'epic', 'chest', '🧥', 'Bach - Counterpoint master', 3, 3, 10, 3, 0, 6000, 1500),
    ('stravinsky_gear', 'Stravinskys Riot Gear', 'Chaotic energy for modern warriors', 'armor', 'legendary', 'chest', '🛡️', 'Stravinsky - Rite of Spring riots', 5, 5, 15, 8, 10, 15000, 3750),
    
    -- Accessories
    ('tempo_ring', 'Ring of Tempo', 'Quickens your responses', 'accessory', 'common', 'accessory1', '💍', 'Tempo - speed of music', 0, 5, 0, 0, 0, 300, 75),
    ('pitch_pendant', 'Perfect Pitch Pendant', 'Improves accuracy of all attacks', 'accessory', 'uncommon', 'accessory1', '📿', 'Perfect pitch - rare ability', 5, 0, 0, 3, 0, 600, 150),
    ('harmony_crystal', 'Harmony Crystal', 'Resonates with team members', 'accessory', 'rare', 'accessory2', '💎', 'Harmony - notes working together', 0, 0, 0, 0, 0, 1000, 250),
    
    -- Consumables
    ('health_potion', 'Minor Health Potion', 'Restores 25 HP', 'consumable', 'common', NULL, '🧪', 'Rest in music', 0, 0, 0, 0, 0, 50, 10),
    ('major_health', 'Major Health Potion', 'Restores 75 HP', 'consumable', 'uncommon', NULL, '⚗️', 'Grand pause', 0, 0, 0, 0, 0, 150, 30),
    ('xp_scroll', 'Scroll of Resonance', 'Double XP for 10 minutes', 'consumable', 'rare', NULL, '📜', 'Resonance - amplification', 0, 0, 0, 0, 0, 500, 100)
ON CONFLICT (id) DO NOTHING;

-- Update item effects for consumables
UPDATE rpg_items SET effect_type = 'heal', effect_value = 25 WHERE id = 'health_potion';
UPDATE rpg_items SET effect_type = 'heal', effect_value = 75 WHERE id = 'major_health';
UPDATE rpg_items SET effect_type = 'xp_boost', effect_value = 100, effect_duration = 600 WHERE id = 'xp_scroll';

-- ================================================
-- 14. Create Player Stats for Existing Users
-- ================================================
INSERT INTO rpg_player_stats (user_id)
SELECT id FROM profiles
WHERE id NOT IN (SELECT user_id FROM rpg_player_stats)
ON CONFLICT DO NOTHING;

-- ================================================
-- 15. Row Level Security
-- ================================================
ALTER TABLE rpg_classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE rpg_player_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE rpg_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE rpg_inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE rpg_equipment ENABLE ROW LEVEL SECURITY;
ALTER TABLE rpg_chests ENABLE ROW LEVEL SECURITY;
ALTER TABLE rpg_trades ENABLE ROW LEVEL SECURITY;
ALTER TABLE rpg_powerups ENABLE ROW LEVEL SECURITY;
ALTER TABLE rpg_active_buffs ENABLE ROW LEVEL SECURITY;
ALTER TABLE rpg_teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE rpg_team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE rpg_weekly_leaderboard ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Classes readable by all" ON rpg_classes FOR SELECT USING (true);
CREATE POLICY "Items readable by all" ON rpg_items FOR SELECT USING (true);
CREATE POLICY "Chests readable by all" ON rpg_chests FOR SELECT USING (true);
CREATE POLICY "Powerups readable by all" ON rpg_powerups FOR SELECT USING (true);
CREATE POLICY "Teams readable by all" ON rpg_teams FOR SELECT USING (true);
CREATE POLICY "Leaderboard readable by all" ON rpg_weekly_leaderboard FOR SELECT USING (true);

-- Player-specific policies
CREATE POLICY "Players view own stats" ON rpg_player_stats FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Players update own stats" ON rpg_player_stats FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Players view own inventory" ON rpg_inventory FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Players manage own inventory" ON rpg_inventory FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Players view own equipment" ON rpg_equipment FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Players manage own equipment" ON rpg_equipment FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Players view own buffs" ON rpg_active_buffs FOR SELECT USING (auth.uid() = user_id);

-- Trade policies
CREATE POLICY "View own trades" ON rpg_trades FOR SELECT 
    USING (auth.uid() = sender_id OR auth.uid() = receiver_id);
CREATE POLICY "Create trades" ON rpg_trades FOR INSERT 
    WITH CHECK (auth.uid() = sender_id);
CREATE POLICY "Update own trades" ON rpg_trades FOR UPDATE 
    USING (auth.uid() = sender_id OR auth.uid() = receiver_id);

COMMENT ON TABLE rpg_player_stats IS 'Complete player RPG stats, currencies, and progression';
COMMENT ON TABLE rpg_inventory IS 'Player item inventory with upgrade levels';
COMMENT ON TABLE rpg_trades IS 'Player-to-player trading system';
COMMENT ON TABLE rpg_teams IS 'Player teams/guilds for co-op play';

-- ================================================
-- 16. Stat Calculation Functions
-- ================================================

-- Calculate total equipment bonus for a specific stat
CREATE OR REPLACE FUNCTION get_equipment_bonus(p_user_id UUID, p_stat TEXT)
RETURNS INTEGER AS $$
DECLARE
    total_bonus INTEGER := 0;
    bonus_column TEXT;
BEGIN
    bonus_column := p_stat || '_bonus';
    
    EXECUTE format('
        SELECT COALESCE(SUM(i.%I * (1 + (inv.level - 1) * 0.1)::INTEGER), 0)
        FROM rpg_equipment eq
        JOIN rpg_inventory inv ON (
            inv.id = eq.weapon_id OR 
            inv.id = eq.head_id OR 
            inv.id = eq.chest_id OR 
            inv.id = eq.legs_id OR
            inv.id = eq.accessory1_id OR
            inv.id = eq.accessory2_id
        )
        JOIN rpg_items i ON i.id = inv.item_id
        WHERE eq.user_id = $1
    ', bonus_column)
    INTO total_bonus
    USING p_user_id;
    
    RETURN COALESCE(total_bonus, 0);
END;
$$ LANGUAGE plpgsql;

-- Calculate total buff bonus for a stat
CREATE OR REPLACE FUNCTION get_buff_bonus(p_user_id UUID, p_effect_type TEXT)
RETURNS INTEGER AS $$
DECLARE
    total_bonus INTEGER := 0;
BEGIN
    SELECT COALESCE(SUM(p.effect_value * ab.stacks), 0)
    INTO total_bonus
    FROM rpg_active_buffs ab
    JOIN rpg_powerups p ON p.id = ab.powerup_id
    WHERE ab.user_id = p_user_id
      AND p.effect_type = p_effect_type
      AND (ab.expires_at IS NULL OR ab.expires_at > NOW());
    
    RETURN total_bonus;
END;
$$ LANGUAGE plpgsql;

-- Get complete calculated stats for a player (base + equipment + buffs)
CREATE OR REPLACE FUNCTION get_player_battle_stats(p_user_id UUID)
RETURNS TABLE (
    base_precision INTEGER,
    base_tempo INTEGER,
    base_resonance INTEGER,
    base_fortitude INTEGER,
    base_synergy INTEGER,
    base_luck INTEGER,
    equipment_precision INTEGER,
    equipment_tempo INTEGER,
    equipment_resonance INTEGER,
    equipment_fortitude INTEGER,
    equipment_synergy INTEGER,
    equipment_luck INTEGER,
    equipment_damage INTEGER,
    equipment_hp INTEGER,
    total_precision INTEGER,
    total_tempo INTEGER,
    total_resonance INTEGER,
    total_fortitude INTEGER,
    total_synergy INTEGER,
    total_luck INTEGER,
    total_damage_bonus INTEGER,
    total_max_hp INTEGER,
    damage_multiplier DECIMAL,
    xp_multiplier DECIMAL,
    crit_chance DECIMAL,
    timer_bonus DECIMAL
) AS $$
BEGIN
    RETURN QUERY
    WITH base_stats AS (
        SELECT 
            ps.precision AS bp,
            ps.tempo AS bt,
            ps.resonance AS br,
            ps.fortitude AS bf,
            ps.synergy AS bs,
            ps.luck AS bl,
            ps.max_hp
        FROM rpg_player_stats ps
        WHERE ps.user_id = p_user_id
    ),
    equip_stats AS (
        SELECT
            get_equipment_bonus(p_user_id, 'precision') AS ep,
            get_equipment_bonus(p_user_id, 'tempo') AS et,
            get_equipment_bonus(p_user_id, 'resonance') AS er,
            get_equipment_bonus(p_user_id, 'fortitude') AS ef,
            get_equipment_bonus(p_user_id, 'synergy') AS es,
            get_equipment_bonus(p_user_id, 'luck') AS el,
            get_equipment_bonus(p_user_id, 'damage') AS ed,
            get_equipment_bonus(p_user_id, 'hp') AS eh
    )
    SELECT
        b.bp, b.bt, b.br, b.bf, b.bs, b.bl,
        e.ep, e.et, e.er, e.ef, e.es, e.el, e.ed, e.eh,
        (b.bp + e.ep)::INTEGER,
        (b.bt + e.et)::INTEGER,
        (b.br + e.er)::INTEGER,
        (b.bf + e.ef)::INTEGER,
        (b.bs + e.es)::INTEGER,
        (b.bl + e.el)::INTEGER,
        e.ed::INTEGER,
        (b.max_hp + e.eh + (e.ef * 5))::INTEGER,
        -- Damage multiplier: +2% per precision point + equipment damage
        (1.0 + ((b.bp + e.ep) * 0.02) + (e.ed * 0.01))::DECIMAL,
        -- XP multiplier: +2% per resonance point
        (1.0 + ((b.br + e.er) * 0.02))::DECIMAL,
        -- Crit chance: 1% per luck point
        ((b.bl + e.el) * 0.01)::DECIMAL,
        -- Timer bonus: +0.5s per tempo point
        ((b.bt + e.et) * 0.5)::DECIMAL
    FROM base_stats b, equip_stats e;
END;
$$ LANGUAGE plpgsql;

-- Calculate damage for an attack (considers precision, equipment, crits)
CREATE OR REPLACE FUNCTION calculate_attack_damage(
    p_user_id UUID,
    p_base_damage INTEGER,
    p_is_correct BOOLEAN,
    p_streak INTEGER DEFAULT 0
)
RETURNS TABLE (
    final_damage INTEGER,
    is_critical BOOLEAN,
    damage_breakdown TEXT
) AS $$
DECLARE
    stats RECORD;
    crit_roll DECIMAL;
    is_crit BOOLEAN := false;
    multiplier DECIMAL := 1.0;
    streak_bonus DECIMAL := 0;
    buff_bonus INTEGER := 0;
    calculated_damage INTEGER;
BEGIN
    IF NOT p_is_correct THEN
        RETURN QUERY SELECT 0, false, 'Incorrect answer - no damage';
        RETURN;
    END IF;
    
    -- Get battle stats
    SELECT * INTO stats FROM get_player_battle_stats(p_user_id);
    
    -- Check for critical hit
    crit_roll := random();
    IF crit_roll < stats.crit_chance THEN
        is_crit := true;
        multiplier := multiplier * 2.0;
    END IF;
    
    -- Apply precision damage multiplier
    multiplier := multiplier * stats.damage_multiplier;
    
    -- Streak bonus: +5% per streak, max 50%
    streak_bonus := LEAST(p_streak * 0.05, 0.5);
    multiplier := multiplier * (1 + streak_bonus);
    
    -- Active buff bonus
    buff_bonus := get_buff_bonus(p_user_id, 'damage_boost');
    multiplier := multiplier * (1 + buff_bonus / 100.0);
    
    -- Calculate final damage
    calculated_damage := FLOOR(p_base_damage * multiplier);
    
    RETURN QUERY SELECT 
        calculated_damage,
        is_crit,
        format('Base: %s × Precision: %.2f × Streak: %.2f × Buffs: +%s%% = %s%s',
            p_base_damage, stats.damage_multiplier, 1 + streak_bonus, buff_bonus,
            calculated_damage, CASE WHEN is_crit THEN ' (CRIT!)' ELSE '' END
        );
END;
$$ LANGUAGE plpgsql;

-- Calculate defense/damage reduction
CREATE OR REPLACE FUNCTION calculate_damage_taken(
    p_user_id UUID,
    p_incoming_damage INTEGER
)
RETURNS INTEGER AS $$
DECLARE
    stats RECORD;
    reduction_percent DECIMAL;
    buff_reduction INTEGER;
    final_damage INTEGER;
BEGIN
    SELECT * INTO stats FROM get_player_battle_stats(p_user_id);
    
    -- Fortitude reduces damage: 0.5% per point
    reduction_percent := stats.total_fortitude * 0.005;
    
    -- Active shield buffs
    buff_reduction := get_buff_bonus(p_user_id, 'damage_reduction');
    reduction_percent := reduction_percent + (buff_reduction / 100.0);
    
    -- Cap at 75% reduction
    reduction_percent := LEAST(reduction_percent, 0.75);
    
    final_damage := FLOOR(p_incoming_damage * (1 - reduction_percent));
    
    RETURN GREATEST(1, final_damage); -- Minimum 1 damage
END;
$$ LANGUAGE plpgsql;

-- Apply level-up rewards
CREATE OR REPLACE FUNCTION apply_level_rewards(p_user_id UUID, p_new_level INTEGER)
RETURNS JSON AS $$
DECLARE
    rewards RECORD;
    result JSON;
BEGIN
    SELECT * INTO rewards FROM rpg_level_rewards WHERE level = p_new_level;
    
    IF rewards IS NULL THEN
        RETURN json_build_object('success', false, 'error', 'No rewards for this level');
    END IF;
    
    UPDATE rpg_player_stats
    SET 
        gold = gold + COALESCE(rewards.gold_reward, 0),
        sound_crystals = sound_crystals + COALESCE(rewards.crystals_reward, 0),
        harmony_tokens = harmony_tokens + COALESCE(rewards.tokens_reward, 0),
        attribute_points = attribute_points + COALESCE(rewards.attribute_points, 1),
        skill_points = skill_points + COALESCE(rewards.skill_points, 1),
        updated_at = NOW()
    WHERE user_id = p_user_id;
    
    RETURN json_build_object(
        'success', true,
        'level', p_new_level,
        'gold', rewards.gold_reward,
        'crystals', rewards.crystals_reward,
        'tokens', rewards.tokens_reward,
        'attribute_points', rewards.attribute_points,
        'skill_points', rewards.skill_points,
        'chest_rewards', rewards.chest_rewards,
        'title_unlock', rewards.title_unlock
    );
END;
$$ LANGUAGE plpgsql;
