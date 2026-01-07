// ================================================
// RPG Class & Stats Service
// ================================================

import { supabase } from '../src/lib/supabase';
import {
    RPGClass, RPGPlayerStats, RPGPlayerFullStats, RPGClassId, AttributeId,
    BattleStats, InventoryItem, RPGChest, RPGTrade, ActiveBuff, RPGTeam
} from '../types/rpg_classes';

// ============ CLASS FUNCTIONS ============

export async function getClasses(): Promise<RPGClass[]> {
    const { data, error } = await supabase
        .from('rpg_classes')
        .select('*');

    if (error) {
        console.error('Error fetching classes:', error);
        return [];
    }
    return data || [];
}

export async function getClass(classId: RPGClassId): Promise<RPGClass | null> {
    const { data, error } = await supabase
        .from('rpg_classes')
        .select('*')
        .eq('id', classId)
        .single();

    if (error) {
        console.error('Error fetching class:', error);
        return null;
    }
    return data;
}

// ============ PLAYER STATS FUNCTIONS ============

export async function getPlayerStats(userId: string): Promise<RPGPlayerStats | null> {
    const { data, error } = await supabase
        .from('rpg_player_stats')
        .select('*')
        .eq('user_id', userId)
        .single();

    if (error) {
        console.error('Error fetching player stats:', error);
        return null;
    }
    return data;
}

export async function getPlayerFullStats(userId: string): Promise<RPGPlayerFullStats | null> {
    const { data, error } = await supabase
        .from('rpg_player_full_stats')
        .select('*')
        .eq('user_id', userId)
        .single();

    if (error) {
        console.error('Error fetching full player stats:', error);
        return null;
    }
    return data;
}

export async function selectClass(userId: string, classId: RPGClassId): Promise<{ success: boolean; error?: string }> {
    const classData = await getClass(classId);
    if (!classData) {
        return { success: false, error: 'Class not found' };
    }

    const { error } = await supabase
        .from('rpg_player_stats')
        .update({
            class_id: classId,
            precision: 10 + classData.base_precision,
            tempo: 10 + classData.base_tempo,
            resonance: 10 + classData.base_resonance,
            fortitude: 10 + classData.base_fortitude,
            synergy: 10 + classData.base_synergy,
            luck: 10 + classData.base_luck,
            max_hp: 100 + ((10 + classData.base_fortitude) * 5),
            current_hp: 100 + ((10 + classData.base_fortitude) * 5),
            updated_at: new Date().toISOString(),
        })
        .eq('user_id', userId);

    if (error) {
        console.error('Error selecting class:', error);
        return { success: false, error: error.message };
    }
    return { success: true };
}

export async function allocateAttributePoint(
    userId: string,
    attribute: AttributeId
): Promise<{ success: boolean; error?: string }> {
    const { data, error } = await supabase.rpc('allocate_attribute_point', {
        p_user_id: userId,
        p_attribute: attribute,
    });

    if (error) {
        console.error('Error allocating attribute:', error);
        return { success: false, error: error.message };
    }
    return data as { success: boolean; error?: string };
}

// ============ BATTLE STATS ============

export async function getBattleStats(userId: string): Promise<BattleStats | null> {
    const { data, error } = await supabase.rpc('get_player_battle_stats', {
        p_user_id: userId,
    });

    if (error) {
        console.error('Error fetching battle stats:', error);
        return null;
    }
    return data?.[0] || null;
}

// ============ INVENTORY FUNCTIONS ============

export async function getInventory(userId: string): Promise<InventoryItem[]> {
    const { data, error } = await supabase
        .from('rpg_inventory')
        .select(`
      *,
      item:rpg_items(*)
    `)
        .eq('user_id', userId)
        .order('obtained_at', { ascending: false });

    if (error) {
        console.error('Error fetching inventory:', error);
        return [];
    }
    return data || [];
}

export async function equipItem(userId: string, inventoryId: string, slot: string): Promise<{ success: boolean; error?: string }> {
    // First unequip any item in that slot
    await supabase
        .from('rpg_inventory')
        .update({ equipped: false, equipped_slot: null })
        .eq('user_id', userId)
        .eq('equipped_slot', slot);

    // Then equip the new item
    const { error } = await supabase
        .from('rpg_inventory')
        .update({ equipped: true, equipped_slot: slot })
        .eq('id', inventoryId);

    if (error) {
        return { success: false, error: error.message };
    }
    return { success: true };
}

// ============ CURRENCY FUNCTIONS ============

export async function spendCurrency(
    userId: string,
    currency: 'gold' | 'sound_crystals' | 'harmony_tokens',
    amount: number
): Promise<{ success: boolean; error?: string }> {
    const stats = await getPlayerStats(userId);
    if (!stats) return { success: false, error: 'Player not found' };

    const currentAmount = stats[currency] as number;
    if (currentAmount < amount) {
        return { success: false, error: `Not enough ${currency}` };
    }

    const { error } = await supabase
        .from('rpg_player_stats')
        .update({ [currency]: currentAmount - amount })
        .eq('user_id', userId);

    if (error) {
        return { success: false, error: error.message };
    }
    return { success: true };
}

export async function addCurrency(
    userId: string,
    currency: 'gold' | 'sound_crystals' | 'harmony_tokens',
    amount: number
): Promise<{ success: boolean; error?: string }> {
    const { error } = await supabase.rpc('add_currency', {
        p_user_id: userId,
        p_currency: currency,
        p_amount: amount,
    });

    if (error) {
        // Fallback to manual update
        const stats = await getPlayerStats(userId);
        if (!stats) return { success: false, error: 'Player not found' };

        const { error: updateError } = await supabase
            .from('rpg_player_stats')
            .update({ [currency]: (stats[currency] as number) + amount })
            .eq('user_id', userId);

        if (updateError) return { success: false, error: updateError.message };
    }
    return { success: true };
}

// ============ CHEST FUNCTIONS ============

export async function getChests(): Promise<RPGChest[]> {
    const { data, error } = await supabase
        .from('rpg_chests')
        .select('*');

    if (error) {
        console.error('Error fetching chests:', error);
        return [];
    }
    return data || [];
}

// ============ BUFF FUNCTIONS ============

export async function getActiveBuffs(userId: string): Promise<ActiveBuff[]> {
    const { data, error } = await supabase
        .from('rpg_active_buffs')
        .select(`
      *,
      powerup:rpg_powerups(*)
    `)
        .eq('user_id', userId)
        .or('expires_at.is.null,expires_at.gt.now()');

    if (error) {
        console.error('Error fetching active buffs:', error);
        return [];
    }
    return data || [];
}

// ============ TEAM FUNCTIONS ============

export async function getTeam(teamId: string): Promise<RPGTeam | null> {
    const { data, error } = await supabase
        .from('rpg_teams')
        .select('*')
        .eq('id', teamId)
        .single();

    if (error) {
        console.error('Error fetching team:', error);
        return null;
    }
    return data;
}

export async function getPlayerTeam(userId: string): Promise<RPGTeam | null> {
    const stats = await getPlayerStats(userId);
    if (!stats?.team_id) return null;
    return getTeam(stats.team_id);
}

// ============ CALCULATION UTILITIES ============

export function calculateDamageBonus(precision: number): number {
    return 1 + (precision * 0.02);
}

export function calculateXPBonus(resonance: number): number {
    return 1 + (resonance * 0.02);
}

export function calculateCritChance(luck: number): number {
    return luck * 0.01;
}

export function calculateTimerBonus(tempo: number): number {
    return tempo * 0.5;
}

export function calculateDefenseReduction(fortitude: number): number {
    return Math.min(0.75, fortitude * 0.005); // Cap at 75%
}
