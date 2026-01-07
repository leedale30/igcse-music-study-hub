// ================================================
// Comprehensive RPG Type Definitions
// ================================================

// ---- Class Types ----
export type RPGClassId = 'melodist' | 'rhythmancer' | 'harmonauts' | 'synthweaver';

export interface RPGClass {
    id: RPGClassId;
    name: string;
    description: string;
    specialty: string;
    music_link: string;
    icon: string;
    base_precision: number;
    base_tempo: number;
    base_resonance: number;
    base_fortitude: number;
    base_synergy: number;
    base_luck: number;
}

// ---- Attribute Types ----
export type AttributeId = 'precision' | 'tempo' | 'resonance' | 'fortitude' | 'synergy' | 'luck';

export interface RPGAttribute {
    id: AttributeId;
    name: string;
    description: string;
    icon: string;
    effect_per_point: string;
}

// ---- Item Types ----
export type ItemRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type ItemType = 'weapon' | 'armor' | 'accessory' | 'consumable' | 'material' | 'chest';
export type EquipmentSlot = 'weapon' | 'head' | 'chest' | 'legs' | 'accessory1' | 'accessory2';

export interface RPGItem {
    id: string;
    name: string;
    description: string;
    type: ItemType;
    rarity: ItemRarity;
    slot?: EquipmentSlot;
    icon: string;
    music_reference?: string;

    // Stat bonuses
    precision_bonus: number;
    tempo_bonus: number;
    resonance_bonus: number;
    fortitude_bonus: number;
    synergy_bonus: number;
    luck_bonus: number;
    damage_bonus: number;
    hp_bonus: number;

    // Consumable effects
    effect_type?: string;
    effect_value?: number;
    effect_duration?: number;

    // Economy
    buy_price: number;
    sell_price: number;
    tradeable: boolean;
    max_level: number;
}

export interface InventoryItem {
    id: string;
    user_id: string;
    item_id: string;
    quantity: number;
    level: number;
    equipped: boolean;
    equipped_slot?: EquipmentSlot;
    obtained_at: string;
    item?: RPGItem; // Joined item data
}

// ---- Player Stats ----
export interface RPGPlayerStats {
    user_id: string;
    class_id: RPGClassId;

    // Attributes
    precision: number;
    tempo: number;
    resonance: number;
    fortitude: number;
    synergy: number;
    luck: number;

    // Points
    attribute_points: number;
    skill_points: number;

    // Currencies
    gold: number;
    sound_crystals: number;
    harmony_tokens: number;

    // Combat
    max_hp: number;
    current_hp: number;

    // Progression
    bosses_defeated: number;
    chests_opened: number;
    total_damage_dealt: number;
    highest_streak: number;
    trades_completed: number;

    // Team
    team_id?: string;
}

export interface RPGPlayerFullStats extends RPGPlayerStats {
    // Class info
    class_name: string;
    class_description: string;
    class_specialty: string;
    class_icon: string;

    // Profile info
    nickname: string;
    xp: number;
    level: number;
}

// ---- Battle Stats (calculated) ----
export interface BattleStats {
    base_precision: number;
    base_tempo: number;
    base_resonance: number;
    base_fortitude: number;
    base_synergy: number;
    base_luck: number;

    equipment_precision: number;
    equipment_tempo: number;
    equipment_resonance: number;
    equipment_fortitude: number;
    equipment_synergy: number;
    equipment_luck: number;
    equipment_damage: number;
    equipment_hp: number;

    total_precision: number;
    total_tempo: number;
    total_resonance: number;
    total_fortitude: number;
    total_synergy: number;
    total_luck: number;
    total_damage_bonus: number;
    total_max_hp: number;

    damage_multiplier: number;
    xp_multiplier: number;
    crit_chance: number;
    timer_bonus: number;
}

// ---- Chest Types ----
export interface RPGChest {
    id: string;
    name: string;
    description: string;
    rarity: ItemRarity;
    icon: string;
    cost_gold: number;
    cost_crystals: number;
    cost_tokens: number;
    min_items: number;
    max_items: number;
    guaranteed_rarity?: ItemRarity;
}

// ---- Trade Types ----
export type TradeStatus = 'pending' | 'accepted' | 'declined' | 'cancelled' | 'completed';

export interface RPGTrade {
    id: string;
    sender_id: string;
    receiver_id: string;
    status: TradeStatus;

    sender_gold: number;
    sender_crystals: number;
    sender_items: string[];

    receiver_gold: number;
    receiver_crystals: number;
    receiver_items: string[];

    sender_confirmed: boolean;
    receiver_confirmed: boolean;

    message?: string;
    created_at: string;
    expires_at: string;
    completed_at?: string;
}

// ---- Power-up Types ----
export interface RPGPowerup {
    id: string;
    name: string;
    description: string;
    icon: string;
    effect_type: string;
    effect_value: number;
    duration_seconds?: number;
    cooldown_seconds: number;
    music_reference?: string;
}

export interface ActiveBuff {
    id: string;
    user_id: string;
    powerup_id: string;
    stacks: number;
    expires_at?: string;
    powerup?: RPGPowerup;
}

// ---- Team Types ----
export interface RPGTeam {
    id: string;
    name: string;
    tag: string;
    description?: string;
    icon: string;
    leader_id: string;
    total_xp: number;
    total_bosses_killed: number;
    member_count: number;
    max_members: number;
    xp_bonus: number;
}

export interface RPGTeamMember {
    team_id: string;
    user_id: string;
    role: 'leader' | 'officer' | 'member';
    joined_at: string;
    contribution_xp: number;
}

// ---- Level Rewards ----
export interface LevelReward {
    level: number;
    gold_reward: number;
    crystals_reward: number;
    tokens_reward: number;
    attribute_points: number;
    skill_points: number;
    chest_rewards?: string[];
    title_unlock?: string;
    special_item?: string;
}

// ---- Weekly Competition ----
export interface WeeklyLeaderboardEntry {
    id: string;
    week_start: string;
    week_end: string;
    user_id: string;
    xp_earned: number;
    bosses_killed: number;
    best_streak: number;
    chests_opened: number;
    trades_completed: number;
    nickname?: string;
    level?: number;
}

export interface WeeklyReward {
    id: string;
    week_start: string;
    user_id: string;
    rank: number;
    reward_type: 'coffee_voucher' | 'crystals' | 'chest' | 'gold';
    reward_value?: string;
    claimed: boolean;
    claimed_at?: string;
}

// ---- Display Constants ----
export const ATTRIBUTE_INFO: Record<AttributeId, { name: string; icon: string; color: string; effect: string }> = {
    precision: { name: 'Precision', icon: '🎯', color: 'text-red-400', effect: '+2% damage per point' },
    tempo: { name: 'Tempo', icon: '⚡', color: 'text-yellow-400', effect: '+0.5s timer per point' },
    resonance: { name: 'Resonance', icon: '✨', color: 'text-purple-400', effect: '+2% XP gain per point' },
    fortitude: { name: 'Fortitude', icon: '🛡️', color: 'text-blue-400', effect: '+5 max HP per point' },
    synergy: { name: 'Synergy', icon: '🤝', color: 'text-green-400', effect: '+3% team buff per point' },
    luck: { name: 'Luck', icon: '🍀', color: 'text-emerald-400', effect: '+1% crit chance per point' },
};

export const CLASS_INFO: Record<RPGClassId, { color: string; bgGradient: string; borderColor: string; avatar: string }> = {
    melodist: {
        color: 'text-pink-400',
        bgGradient: 'from-pink-600/20 to-purple-600/20',
        borderColor: 'border-pink-500/30',
        avatar: '/assets/avatars/melodist.png'
    },
    rhythmancer: {
        color: 'text-orange-400',
        bgGradient: 'from-orange-600/20 to-red-600/20',
        borderColor: 'border-orange-500/30',
        avatar: '/assets/avatars/rhythmancer.png'
    },
    harmonauts: {
        color: 'text-cyan-400',
        bgGradient: 'from-cyan-600/20 to-blue-600/20',
        borderColor: 'border-cyan-500/30',
        avatar: '/assets/avatars/harmonauts.png'
    },
    synthweaver: {
        color: 'text-green-400',
        bgGradient: 'from-green-600/20 to-teal-600/20',
        borderColor: 'border-green-500/30',
        avatar: '/assets/avatars/synthweaver.png'
    },
};

export const RARITY_COLORS: Record<ItemRarity, { text: string; bg: string; border: string; glow: string }> = {
    common: { text: 'text-gray-300', bg: 'bg-gray-500/20', border: 'border-gray-500/30', glow: '' },
    uncommon: { text: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30', glow: '' },
    rare: { text: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/30', glow: 'shadow-blue-500/20' },
    epic: { text: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-500/30', glow: 'shadow-purple-500/30' },
    legendary: { text: 'text-yellow-400', bg: 'bg-yellow-500/20', border: 'border-yellow-500/30', glow: 'shadow-yellow-500/40' },
};

export const CURRENCY_INFO = {
    gold: { name: 'Gold', icon: '🪙', color: 'text-yellow-400' },
    sound_crystals: { name: 'Sound Crystals', icon: '💎', color: 'text-cyan-400' },
    harmony_tokens: { name: 'Harmony Tokens', icon: '🎵', color: 'text-purple-400' },
};
