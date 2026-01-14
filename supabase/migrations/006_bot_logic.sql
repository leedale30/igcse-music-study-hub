-- ================================================
-- RPG BOT LOGIC (CORRECTED)
-- ================================================

-- 1. Create Bot User in auth.users (Required for foreign key)
INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    created_at,
    updated_at
) VALUES (
    '00000000-0000-0000-0000-000000000000',
    '00000000-0000-0000-0000-000000000001',
    'authenticated',
    'authenticated',
    'bot@system.local',
    '$2a$10$wT.f.q.q.q.q.q.q.q.q.q.q.q.q.q.q.q.q.q.q.q.q.q.q.q.q', -- Dummy hash
    NOW(),
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

-- 2. Create Bot Profile (System User)
INSERT INTO public.profiles (id, name, nickname, avatar_url, email)
VALUES (
    '00000000-0000-0000-0000-000000000001',
    'Training Bot',
    'Bot',
    '/assets/rpg/nano.png',
    'bot@system.local'
)
ON CONFLICT (id) DO NOTHING;

-- 2. Create Bot Stats (in rpg_player_stats)
INSERT INTO public.rpg_player_stats (
    user_id,
    class_id,
    precision,
    tempo,
    resonance,
    fortitude,
    synergy,
    luck,
    max_hp,
    current_hp,
    gold
)
VALUES (
    '00000000-0000-0000-0000-000000000001',
    'melodist', -- Bot class
    5, -- Precision (Attack)
    5, -- Tempo (Speed)
    5, -- Resonance
    5, -- Fortitude (Defense-ish)
    5, -- Synergy
    5, -- Luck
    100, -- Max HP
    100, -- Current HP
    0    -- Gold
)
ON CONFLICT (user_id) DO NOTHING;


-- 3. RPC to Start Bot Match (includes question selection)
CREATE OR REPLACE FUNCTION public.start_bot_match()
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    new_match_id UUID;
    bot_id UUID := '00000000-0000-0000-0000-000000000001';
    selected_questions UUID[];
BEGIN
    -- Select 5 random active questions
    SELECT ARRAY_AGG(id) INTO selected_questions
    FROM (
        SELECT id FROM public.rpg_questions
        WHERE is_active = true
        ORDER BY RANDOM()
        LIMIT 5
    ) AS q;

    -- Ensure we have enough questions
    IF array_length(selected_questions, 1) IS NULL OR array_length(selected_questions, 1) < 5 THEN
        RETURN jsonb_build_object('success', false, 'error', 'Not enough questions available');
    END IF;

    INSERT INTO public.rpg_matches (
        player_a,
        player_b,
        current_turn,
        total_turns,
        status,
        player_a_health,
        player_b_health,
        question_ids,
        started_at
    )
    VALUES (
        auth.uid(),
        bot_id,
        0,
        5,
        'active',
        100,
        100,
        selected_questions,
        NOW()
    )
    RETURNING id INTO new_match_id;

    RETURN jsonb_build_object('success', true, 'match_id', new_match_id);
END;
$$;

-- 4. RPC to Submit Bot Answer
-- This allows the player (auth.uid()) to trigger a move for the bot in their match
CREATE OR REPLACE FUNCTION public.submit_bot_answer(
    match_id UUID,
    question_id UUID,
    is_correct BOOLEAN
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    match_record RECORD;
    damage_dealt INT := 0;
    bot_id UUID := '00000000-0000-0000-0000-000000000001';
BEGIN
    -- Verify match exists and user is in it
    SELECT * INTO match_record FROM public.rpg_matches WHERE id = match_id AND player_a = auth.uid();
    
    IF match_record.id IS NULL THEN
        RETURN jsonb_build_object('success', false, 'error', 'Match not found');
    END IF;

    IF match_record.status != 'active' THEN
        RETURN jsonb_build_object('success', false, 'error', 'Match not active');
    END IF;

    -- Calculate Damage based on correctness
    IF is_correct THEN
        -- Bot hits Player
        -- Simple calculation: 10 damage fixed for now
        damage_dealt := 10;
        UPDATE public.rpg_matches
        SET player_a_health = GREATEST(0, player_a_health - damage_dealt),
            last_action_b = jsonb_build_object('action', 'attack', 'damage', damage_dealt),
            updated_at = NOW()
        WHERE id = match_id;
    ELSE
        -- Bot Misses
           UPDATE public.rpg_matches
        SET last_action_b = jsonb_build_object('action', 'miss', 'damage', 0),
            updated_at = NOW()
        WHERE id = match_id;
    END IF;

    -- Log Turn for Bot
    INSERT INTO public.rpg_match_turns (match_id, turn_number, player_id, question_id, answer, is_correct, time_taken_ms, points_earned)
    VALUES (
        match_id,
        match_record.current_turn,
        bot_id,
        question_id,
        jsonb_build_object('generated', true),
        is_correct,
        2000,
        0
    );

    -- Check if turn should advance (if player A also answered for this turn)
    IF EXISTS (
        SELECT 1 FROM public.rpg_match_turns 
        WHERE match_id = match_id 
        AND turn_number = match_record.current_turn 
        AND player_id = auth.uid()
    ) THEN
        -- Advance Turn
        UPDATE public.rpg_matches
        SET current_turn = current_turn + 1,
            updated_at = NOW()
        WHERE id = match_id;
    END IF;

    RETURN jsonb_build_object('success', true, 'damage', damage_dealt);
END;
$$;
