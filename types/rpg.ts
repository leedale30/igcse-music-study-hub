// RPG and Roguelike Game Elements Types

export type CharacterClass = 'bard' | 'scholar' | 'virtuoso' | 'composer' | 'conductor';
export type StatType = 'knowledge' | 'rhythm' | 'harmony' | 'creativity' | 'focus';
export type ItemRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'artifact';
export type ItemType = 'instrument' | 'scroll' | 'accessory' | 'consumable' | 'special';
export type ChallengeType = 'daily_quest' | 'random_encounter' | 'boss_battle' | 'treasure_hunt' | 'time_trial';
export type DifficultyLevel = 'novice' | 'apprentice' | 'adept' | 'expert' | 'master' | 'legendary';

// Character Stats and Progression
export interface CharacterStats {
  knowledge: number;     // Affects quiz accuracy and learning speed
  rhythm: number;        // Affects timing-based challenges
  harmony: number;       // Affects music theory understanding
  creativity: number;    // Affects composition and creative tasks
  focus: number;         // Affects streak maintenance and concentration
}

export interface CharacterClassInfo {
  id: CharacterClass;
  name: string;
  description: string;
  icon: string;
  primaryStat: StatType;
  secondaryStat: StatType;
  startingStats: CharacterStats;
  statGrowth: CharacterStats; // Per level multipliers
  classAbilities: ClassAbility[];
  unlockRequirement?: {
    level?: number;
    achievements?: string[];
    questsCompleted?: number;
  };
}

export interface ClassAbility {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockLevel: number;
  cooldown?: number; // in hours
  effect: {
    type: 'stat_boost' | 'xp_multiplier' | 'loot_bonus' | 'challenge_skip' | 'revival' | 'special';
    value: number;
    duration?: number; // in minutes
  };
}

// Character Progression
export interface RPGCharacter {
  id: string;
  userId: string;
  class: CharacterClass;
  level: number;
  experience: number;
  experienceToNext: number;
  stats: CharacterStats;
  totalStats: CharacterStats; // Including equipment bonuses
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  gold: number;
  inventory: InventoryItem[];
  equipment: Equipment;
  abilities: string[]; // Unlocked ability IDs
  activeEffects: ActiveEffect[];
  createdAt: Date;
  lastActive: Date;
  permadeathCount: number;
  currentRun: RunData;
}

// Equipment and Items
export interface Item {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: ItemType;
  rarity: ItemRarity;
  level: number;
  value: number;
  stats?: Partial<CharacterStats>;
  effects?: ItemEffect[];
  requirements?: {
    level?: number;
    class?: CharacterClass[];
    stats?: Partial<CharacterStats>;
  };
  isUnique?: boolean;
  lore?: string;
}

export interface InventoryItem {
  item: Item;
  quantity: number;
  durability?: number;
  enchantments?: Enchantment[];
  acquiredAt: Date;
}

export interface Equipment {
  mainHand?: InventoryItem; // Primary instrument
  offHand?: InventoryItem;  // Secondary instrument or sheet music
  head?: InventoryItem;     // Hat, headphones
  chest?: InventoryItem;    // Robes, jacket
  hands?: InventoryItem;    // Gloves, rings
  feet?: InventoryItem;     // Shoes, boots
  accessory1?: InventoryItem; // Necklace, badge
  accessory2?: InventoryItem; // Ring, charm
}

export interface ItemEffect {
  type: 'stat_bonus' | 'xp_bonus' | 'gold_bonus' | 'ability_cooldown' | 'special';
  value: number;
  condition?: string;
}

export interface Enchantment {
  id: string;
  name: string;
  description: string;
  effect: ItemEffect;
  rarity: ItemRarity;
}

export interface ActiveEffect {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: 'buff' | 'debuff' | 'neutral';
  duration: number; // in minutes, -1 for permanent
  effect: {
    stats?: Partial<CharacterStats>;
    multipliers?: {
      xp?: number;
      gold?: number;
      loot?: number;
    };
  };
  appliedAt: Date;
}

// Challenges and Quests
export interface RPGChallenge {
  id: string;
  name: string;
  description: string;
  type: ChallengeType;
  difficulty: DifficultyLevel;
  icon: string;
  requirements: {
    level?: number;
    stats?: Partial<CharacterStats>;
    items?: string[];
    questsCompleted?: string[];
  };
  objectives: ChallengeObjective[];
  rewards: ChallengeReward[];
  timeLimit?: number; // in minutes
  attempts?: number; // -1 for unlimited
  isDaily?: boolean;
  isRepeatable?: boolean;
  lore?: string;
}

export interface ChallengeObjective {
  id: string;
  description: string;
  type: 'quiz_score' | 'quiz_count' | 'streak' | 'time_limit' | 'perfect_score' | 'survival' | 'collection';
  target: number;
  current: number;
  isCompleted: boolean;
  isOptional?: boolean;
}

export interface ChallengeReward {
  type: 'experience' | 'gold' | 'item' | 'stat_point' | 'ability' | 'title';
  value: number | string;
  rarity?: ItemRarity;
  guaranteed?: boolean;
}

// Permadeath and Run System
export interface RunData {
  id: string;
  startDate: Date;
  endDate?: Date;
  isActive: boolean;
  difficulty: DifficultyLevel;
  seed: string; // For procedural generation
  stats: {
    quizzesCompleted: number;
    challengesCompleted: number;
    experienceGained: number;
    goldEarned: number;
    itemsFound: number;
    deathCount: number;
    reviveCount: number;
  };
  milestones: RunMilestone[];
  cause?: DeathCause;
}

export interface RunMilestone {
  id: string;
  name: string;
  description: string;
  achievedAt: Date;
  reward?: ChallengeReward;
}

export interface DeathCause {
  type: 'quiz_failure' | 'challenge_failure' | 'time_limit' | 'stat_depletion' | 'boss_defeat';
  description: string;
  context?: {
    quizId?: string;
    challengeId?: string;
    score?: number;
  };
}

// Loot and Treasure
export interface LootTable {
  id: string;
  name: string;
  items: LootEntry[];
  goldRange: [number, number];
  experienceRange: [number, number];
  guaranteedItems?: string[];
}

export interface LootEntry {
  itemId: string;
  weight: number;
  quantity: [number, number];
  condition?: {
    level?: number;
    class?: CharacterClass[];
    luck?: number;
  };
}

// RPG UI and Visual Elements
export interface RPGTheme {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  };
  fonts: {
    primary: string;
    secondary: string;
    display: string;
  };
  effects: {
    particles: boolean;
    animations: boolean;
    sounds: boolean;
  };
}

export interface RPGNotification {
  id: string;
  type: 'level_up' | 'item_found' | 'quest_complete' | 'death' | 'revival' | 'achievement';
  title: string;
  message: string;
  icon: string;
  rarity?: ItemRarity;
  duration: number;
  actions?: {
    label: string;
    action: () => void;
  }[];
  createdAt: Date;
}

// Game State and Progress
export interface RPGGameState {
  character: RPGCharacter;
  availableChallenges: RPGChallenge[];
  activeChallenges: string[];
  completedChallenges: string[];
  discoveredItems: string[];
  unlockedClasses: CharacterClass[];
  currentTheme: string;
  settings: {
    permadeathEnabled: boolean;
    difficultyLevel: DifficultyLevel;
    autoSave: boolean;
    notifications: boolean;
    sounds: boolean;
    particles: boolean;
  };
  statistics: {
    totalPlayTime: number;
    totalRuns: number;
    longestRun: number;
    totalDeaths: number;
    totalRevivals: number;
    itemsCollected: number;
    legendaryItemsFound: number;
    bossesDefeated: number;
  };
}

// Integration with existing systems
export interface RPGIntegration {
  // Map quiz results to RPG rewards
  quizRewards: {
    [quizId: string]: {
      baseExperience: number;
      bonusExperience: number; // For perfect scores
      goldReward: number;
      lootChance: number;
      statGains?: Partial<CharacterStats>;
    };
  };
  
  // Map badges to RPG achievements
  badgeIntegration: {
    [badgeId: string]: {
      experienceReward: number;
      itemReward?: string;
      abilityUnlock?: string;
      statBonus?: Partial<CharacterStats>;
    };
  };
  
  // Study time to RPG benefits
  studyTimeRewards: {
    experiencePerMinute: number;
    manaRegenPerMinute: number;
    focusStatGain: number;
  };
}