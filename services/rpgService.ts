// ================================================
// RPG Service: Client-side API for Battle System
// ================================================
// This service provides React-friendly functions to
// interact with the RPG Edge Functions.
// ================================================

import { supabase } from '../src/lib/supabase'; // Your existing Supabase client

// Types
export interface RPGProfile {
    id: string;
    name: string;
    nickname: string;
    xp: number;
    level: number;
    character_class: string;
}

export interface RPGMatch {
    id: string;
    player_a: string;
    player_b: string | null;
    status: 'pending' | 'active' | 'finished' | 'cancelled';
    winner: string | null;
    player_a_health: number;
    player_b_health: number;
    current_turn: number;
    total_turns: number;
    question_ids: string[];
    started_at: string | null;
    ended_at: string | null;
}

export interface RPGQuestion {
    id: string;
    type: 'mcq' | 'short' | 'audio' | 'image' | 'listening';
    content: {
        prompt: string;
        choices?: string[];
        [key: string]: any;
    };
    media_path?: string;
    difficulty: number;
    subject_tag?: string;
}

export interface AnswerResult {
    correct: boolean;
    damage: number;
    streak: number;
    both_answered: boolean;
}

export interface MatchState {
    current_turn: number;
    total_turns: number;
    player_a_health: number;
    player_b_health: number;
    your_role: 'player_a' | 'player_b';
}

// ================================================
// API Functions
// ================================================

/**
 * Award XP to a user (teacher/admin only)
 */
export async function awardXP(params: {
    user_id: string;
    points: number;
    source: 'test' | 'match' | 'teacher' | 'quiz' | 'achievement';
    metadata?: Record<string, any>;
}): Promise<{ success: boolean; profile?: RPGProfile; error?: string }> {
    const { data: { session } } = await supabase.auth.getSession();

    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/award-xp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.access_token}`,
        },
        body: JSON.stringify(params),
    });

    const data = await response.json();

    if (!response.ok) {
        return { success: false, error: data.error };
    }

    return { success: true, profile: data.profile };
}

/**
 * Start a new match
 */
export async function startMatch(params: {
    opponent_id?: string;
    class_id?: string;
    subject_tag?: string;
    total_turns?: number;
}): Promise<{
    success: boolean;
    match?: RPGMatch;
    first_question?: RPGQuestion;
    error?: string
}> {
    const { data: { session } } = await supabase.auth.getSession();

    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/start-match`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.access_token}`,
        },
        body: JSON.stringify(params),
    });

    const data = await response.json();

    if (!response.ok) {
        return { success: false, error: data.error };
    }

    return {
        success: true,
        match: data.match,
        first_question: data.first_question
    };
}

/**
 * Join a pending match
 */
export async function joinMatch(match_id: string): Promise<{
    success: boolean;
    match?: RPGMatch;
    first_question?: RPGQuestion;
    opponent?: RPGProfile;
    error?: string
}> {
    const { data: { session } } = await supabase.auth.getSession();

    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/join-match`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.access_token}`,
        },
        body: JSON.stringify({ match_id }),
    });

    const data = await response.json();

    if (!response.ok) {
        return { success: false, error: data.error };
    }

    return {
        success: true,
        match: data.match,
        first_question: data.first_question,
        opponent: data.opponent
    };
}

/**
 * Get current question for a match (without answer key)
 */
export async function getQuestion(match_id: string): Promise<{
    success: boolean;
    question?: RPGQuestion;
    match_state?: MatchState;
    already_answered?: boolean;
    error?: string
}> {
    const { data: { session } } = await supabase.auth.getSession();

    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/get-question`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.access_token}`,
        },
        body: JSON.stringify({ match_id }),
    });

    const data = await response.json();

    if (!response.ok) {
        return { success: false, error: data.error };
    }

    return {
        success: true,
        question: data.question,
        match_state: data.match_state,
        already_answered: data.already_answered
    };
}

/**
 * Submit an answer for the current turn
 */
export async function submitAnswer(params: {
    match_id: string;
    question_id: string;
    answer: any;
    time_taken_ms: number;
}): Promise<{
    success: boolean;
    result?: AnswerResult;
    match?: RPGMatch;
    error?: string
}> {
    const { data: { session } } = await supabase.auth.getSession();

    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-answer`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.access_token}`,
        },
        body: JSON.stringify(params),
    });

    const data = await response.json();

    if (!response.ok) {
        return { success: false, error: data.error };
    }

    return {
        success: true,
        result: data.result,
        match: data.match
    };
}

/**
 * Start a match against the Bot
 */
export async function startBotMatch(): Promise<{ success: boolean; match_id?: string; error?: string }> {
    const { data: { session } } = await supabase.auth.getSession();

    const { data, error } = await supabase.rpc('start_bot_match');

    if (error) {
        return { success: false, error: error.message };
    }

    return { success: true, match_id: data.match_id };
}

/**
 * Submit an answer/action on behalf of the Bot
 */
export async function submitBotAnswer(params: {
    match_id: string;
    question_id: string;
    is_correct: boolean;
}): Promise<{ success: boolean; damage?: number; error?: string }> {
    const { data, error } = await supabase.rpc('submit_bot_answer', params);

    if (error) {
        return { success: false, error: error.message };
    }

    return { success: true, damage: data.damage };
}

// ================================================
// Realtime Subscriptions
// ================================================

/**
 * Subscribe to match updates in real-time
 */
export function subscribeToMatch(
    match_id: string,
    callback: (match: RPGMatch) => void
): () => void {
    const channel = supabase
        .channel(`match-${match_id}`)
        .on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'rpg_matches',
                filter: `id=eq.${match_id}`
            },
            (payload) => {
                callback(payload.new as RPGMatch);
            }
        )
        .subscribe();

    // Return unsubscribe function
    return () => {
        supabase.removeChannel(channel);
    };
}

/**
 * Subscribe to match turn updates
 */
export function subscribeToMatchTurns(
    match_id: string,
    callback: (turn: any) => void
): () => void {
    const channel = supabase
        .channel(`match-turns-${match_id}`)
        .on(
            'postgres_changes',
            {
                event: 'INSERT',
                schema: 'public',
                table: 'rpg_match_turns',
                filter: `match_id=eq.${match_id}`
            },
            (payload) => {
                callback(payload.new);
            }
        )
        .subscribe();

    return () => {
        supabase.removeChannel(channel);
    };
}

// ================================================
// Utility Functions
// ================================================

/**
 * Get leaderboard for a school
 */
export async function getLeaderboard(school_id?: number, limit = 10): Promise<RPGProfile[]> {
    let query = supabase
        .from('rpg_leaderboard')
        .select('*')
        .order('xp', { ascending: false })
        .limit(limit);

    if (school_id) {
        query = query.eq('school_id', school_id);
    }

    const { data, error } = await query;

    if (error) {
        console.error('Error fetching leaderboard:', error);
        return [];
    }

    return data || [];
}

/**
 * Get pending matches available to join
 */
export async function getPendingMatches(): Promise<RPGMatch[]> {
    const { data, error } = await supabase
        .from('rpg_matches')
        .select('*')
        .eq('status', 'pending')
        .is('player_b', null)
        .order('created_at', { ascending: false })
        .limit(20);

    if (error) {
        console.error('Error fetching pending matches:', error);
        return [];
    }

    return data || [];
}

/**
 * Get user's match history
 */
export async function getMatchHistory(user_id: string, limit = 20): Promise<RPGMatch[]> {
    const { data, error } = await supabase
        .from('rpg_matches')
        .select('*')
        .or(`player_a.eq.${user_id},player_b.eq.${user_id}`)
        .eq('status', 'finished')
        .order('ended_at', { ascending: false })
        .limit(limit);

    if (error) {
        console.error('Error fetching match history:', error);
        return [];
    }

    return data || [];
}

/**
 * Get full character profile including stats, inventory, and equipment
 */
export async function getCharacterProfile(user_id: string): Promise<{
    success: boolean;
    character?: any; // We'll type this properly in the implementation
    error?: string;
}> {
    const { data: { session } } = await supabase.auth.getSession();

    // 1. Get Base Stats
    const { data: stats, error: statsError } = await supabase
        .from('rpg_player_stats')
        .select('*')
        .eq('user_id', user_id)
        .single();

    if (statsError || !stats) {
        // Handle case where stats don't exist yet (new user)
        if (statsError?.code === 'PGRST116') {
            // Create default stats via Edge Function or direct insert if policy allows
            // For now, return specific error so UI can trigger initialization
            return { success: false, error: 'CHARACTER_NOT_FOUND' };
        }
        return { success: false, error: statsError?.message };
    }

    // 2. Get Inventory
    const { data: inventory, error: invError } = await supabase
        .from('rpg_inventory')
        .select(`
            *,
            item:rpg_items(*)
        `)
        .eq('user_id', user_id);

    if (invError) return { success: false, error: invError.message };

    // 3. Get Equipment
    const { data: equipment, error: equipError } = await supabase
        .from('rpg_equipment')
        .select('*')
        .eq('user_id', user_id)
        .single();

    // 4. Get Active Buffs
    const { data: hacks, error: hacksError } = await supabase
        .from('rpg_active_buffs')
        .select(`
            *,
            powerup:rpg_powerups(*)
        `)
        .eq('user_id', user_id);

    // Construct the RPGCharacter object
    // This maps the DB shape to the Frontend types/rpg.ts shape
    // Note: Some fields like 'abilities' might need a separate table or column in stats

    // Helper to shape inventory
    const formattedInventory = inventory?.map((inv: any) => ({
        id: inv.id,
        item: {
            id: inv.item.id,
            name: inv.item.name,
            description: inv.item.description,
            icon: inv.item.icon,
            type: inv.item.type,
            rarity: inv.item.rarity,
            level: inv.level,
            value: inv.item.sell_price, // Mapping sell_price to value
            stats: {
                // Map bonus columns to stats object
                knowledge: inv.item.precision_bonus, // Mapping precision to knowledge for now?
                // Or stick closer to the new DB schema which uses precision/tempo etc.
                // We need to align the frontend types with the DB schema eventually.
            }
        },
        quantity: inv.quantity,
        acquiredAt: new Date(inv.obtained_at)
    })) || [];

    // Helper to shape equipment
    // We need to map the flat equipment row (weapon_id, head_id etc) to the Equipment interface
    // yielding { mainHand: InventoryItem, ... }
    const formattedEquipment: any = {};
    const slotsMap: Record<string, string> = {
        'weapon_id': 'mainHand',
        'head_id': 'head',
        'chest_id': 'chest',
        'legs_id': 'feet', // mapping legs to feet
        'accessory1_id': 'accessory1',
        'accessory2_id': 'accessory2'
    };

    if (equipment) {
        for (const [dbCol, stateKey] of Object.entries(slotsMap)) {
            const itemId = equipment[dbCol];
            if (itemId) {
                // Find full item details from inventory array
                const invItem = formattedInventory.find((i: any) => i.item.id === itemId || i.id === itemId); // Careful with IDs here. 
                // The equipment table stores Inventory IDs (UUIDs), not Item IDs (strings)
                const correctInvItem = formatInventoryItemFromId(inventory as any[], itemId);

                if (correctInvItem) {
                    formattedEquipment[stateKey] = correctInvItem;
                }
            }
        }
    }

    const character = {
        id: stats.user_id,
        userId: stats.user_id,
        class: stats.class_id,
        level: getLevelFromXp(stats.total_xp || 0), // If xp is stored, or calculate
        // ... mapping other fields
        // Since the DB schema is slightly different from the frontend types (Precision/Tempo vs Knowledge/Rhythm),
        // we might need a translation layer here or update the frontend types.
        // For Phase 1, we will verify the data flow.
        stats: {
            knowledge: stats.precision,
            rhythm: stats.tempo,
            harmony: stats.resonance,
            creativity: stats.synergy,
            focus: stats.fortitude
        },
        health: stats.current_hp,
        maxHealth: stats.max_hp,
        gold: stats.gold,
        inventory: formattedInventory,
        equipment: formattedEquipment,
        // ... fill rest with defaults or fetched data
    };

    return { success: true, character };
}

// Helper
function formatInventoryItemFromId(rawInventory: any[], inventoryUuid: string) {
    const found = rawInventory.find(i => i.id === inventoryUuid);
    if (!found) return null;
    return {
        item: {
            id: found.item.id,
            name: found.item.name,
            icon: found.item.icon,
            rarity: found.item.rarity,
            // ... other item props
        },
        quantity: found.quantity,
        acquiredAt: new Date(found.obtained_at)
    };
}

function getLevelFromXp(xp: number) {
    return Math.floor(Math.sqrt(xp / 100)) + 1; // Simplified placeholder
}


/**
 * Equip an item
 */
export async function equipItem(userId: string, inventoryId: string, slot: string): Promise<{ success: boolean; error?: string }> {
    const { data: { session } } = await supabase.auth.getSession();

    // Map frontend slot names to DB column names
    const slotMap: Record<string, string> = {
        'mainHand': 'weapon_id',
        'offHand': 'offhand_id', // Note: DB might not have offhand yet, check schema
        'head': 'head_id',
        'chest': 'chest_id',
        'feet': 'legs_id',
        'accessory1': 'accessory1_id',
        'accessory2': 'accessory2_id'
    };

    const dbColumn = slotMap[slot];
    if (!dbColumn) return { success: false, error: 'Invalid slot' };

    // 1. Check if equipment row exists, create if not
    const { data: existing } = await supabase.from('rpg_equipment').select('user_id').eq('user_id', userId).single();
    if (!existing) {
        await supabase.from('rpg_equipment').insert({ user_id: userId });
    }

    // 2. Update the slot
    const { error } = await supabase
        .from('rpg_equipment')
        .update({ [dbColumn]: inventoryId, updated_at: new Date().toISOString() })
        .eq('user_id', userId);

    if (error) return { success: false, error: error.message };

    // 3. Mark item as equipped in inventory (optional, for UI filtering)
    // The DB schema had an 'equipped' boolean in rpg_inventory. Let's update that too.

    // First unmark whatever was there before (complex without knowing what it was, but we can just rely on the equipment table for now 
    // or run a stored procedure. For a simple client-side implementation:)

    // Mark new item as equipped
    await supabase.from('rpg_inventory').update({ equipped: true, equipped_slot: slot }).eq('id', inventoryId);

    return { success: true };
}

/**
 * Unequip an item
 */
export async function unequipItem(userId: string, slot: string): Promise<{ success: boolean; error?: string }> {
    const { data: { session } } = await supabase.auth.getSession();

    const slotMap: Record<string, string> = {
        'mainHand': 'weapon_id',
        'offHand': 'offhand_id',
        'head': 'head_id',
        'chest': 'chest_id',
        'feet': 'legs_id',
        'accessory1': 'accessory1_id',
        'accessory2': 'accessory2_id'
    };

    const dbColumn = slotMap[slot];
    if (!dbColumn) return { success: false, error: 'Invalid slot' };

    // Update equipment table
    const { error } = await supabase
        .from('rpg_equipment')
        .update({ [dbColumn]: null, updated_at: new Date().toISOString() })
        .eq('user_id', userId);

    if (error) return { success: false, error: error.message };

    // Update inventory table (unmark equipped)
    await supabase
        .from('rpg_inventory')
        .update({ equipped: false, equipped_slot: null })
        .eq('user_id', userId)
        .eq('equipped_slot', slot); // Unmark whatever was in that slot

    return { success: true };
}
