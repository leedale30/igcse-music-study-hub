import { 
  CharacterClassInfo, 
  CharacterClass, 
  Item, 
  RPGChallenge, 
  LootTable, 
  RPGTheme,
  ItemRarity,
  DifficultyLevel
} from '../types/rpg';

// Character Classes Configuration
export const CHARACTER_CLASSES: Record<CharacterClass, CharacterClassInfo> = {
  bard: {
    id: 'bard',
    name: 'Musical Bard',
    description: 'A versatile performer who excels at rhythm and creativity. Masters of musical storytelling and performance.',
    icon: '🎭',
    primaryStat: 'rhythm',
    secondaryStat: 'creativity',
    startingStats: {
      knowledge: 12,
      rhythm: 18,
      harmony: 14,
      creativity: 16,
      focus: 10
    },
    statGrowth: {
      knowledge: 1.2,
      rhythm: 1.8,
      harmony: 1.4,
      creativity: 1.6,
      focus: 1.0
    },
    classAbilities: [
      {
        id: 'inspiring_performance',
        name: 'Inspiring Performance',
        description: 'Gain 50% bonus XP for the next 30 minutes',
        icon: '🎪',
        unlockLevel: 1,
        cooldown: 180, // 3 hours
        effect: {
          type: 'xp_multiplier',
          value: 1.5,
          duration: 30
        }
      },
      {
        id: 'rhythmic_mastery',
        name: 'Rhythmic Mastery',
        description: 'Perfect timing on rhythm-based challenges',
        icon: '🥁',
        unlockLevel: 5,
        effect: {
          type: 'stat_boost',
          value: 10 // +10 rhythm for challenges
        }
      },
      {
        id: 'creative_burst',
        name: 'Creative Burst',
        description: 'Instantly complete any creative challenge',
        icon: '✨',
        unlockLevel: 10,
        cooldown: 360, // 6 hours
        effect: {
          type: 'challenge_skip',
          value: 1
        }
      }
    ]
  },
  
  scholar: {
    id: 'scholar',
    name: 'Music Scholar',
    description: 'A dedicated student of music theory and history. Excels at knowledge-based challenges and learning.',
    icon: '📚',
    primaryStat: 'knowledge',
    secondaryStat: 'focus',
    startingStats: {
      knowledge: 20,
      rhythm: 10,
      harmony: 16,
      creativity: 12,
      focus: 18
    },
    statGrowth: {
      knowledge: 2.0,
      rhythm: 1.0,
      harmony: 1.6,
      creativity: 1.2,
      focus: 1.8
    },
    classAbilities: [
      {
        id: 'deep_study',
        name: 'Deep Study',
        description: 'Double XP from quiz completion for 1 hour',
        icon: '🔍',
        unlockLevel: 1,
        cooldown: 240, // 4 hours
        effect: {
          type: 'xp_multiplier',
          value: 2.0,
          duration: 60
        }
      },
      {
        id: 'perfect_recall',
        name: 'Perfect Recall',
        description: 'Automatically get perfect score on next quiz',
        icon: '🧠',
        unlockLevel: 7,
        cooldown: 480, // 8 hours
        effect: {
          type: 'special',
          value: 1
        }
      }
    ]
  },
  
  virtuoso: {
    id: 'virtuoso',
    name: 'Virtuoso Performer',
    description: 'A master performer with exceptional technical skill. Balanced in all musical aspects.',
    icon: '🎻',
    primaryStat: 'harmony',
    secondaryStat: 'knowledge',
    startingStats: {
      knowledge: 16,
      rhythm: 16,
      harmony: 20,
      creativity: 14,
      focus: 14
    },
    statGrowth: {
      knowledge: 1.6,
      rhythm: 1.6,
      harmony: 2.0,
      creativity: 1.4,
      focus: 1.4
    },
    classAbilities: [
      {
        id: 'harmonic_mastery',
        name: 'Harmonic Mastery',
        description: 'Gain bonus gold from harmony-based challenges',
        icon: '🎼',
        unlockLevel: 1,
        effect: {
          type: 'loot_bonus',
          value: 1.5
        }
      },
      {
        id: 'technical_precision',
        name: 'Technical Precision',
        description: 'Reduce all ability cooldowns by 25%',
        icon: '⚡',
        unlockLevel: 8,
        effect: {
          type: 'special',
          value: 0.75 // Cooldown multiplier
        }
      }
    ],
    unlockRequirement: {
      level: 5,
      achievements: ['high-achiever']
    }
  },
  
  composer: {
    id: 'composer',
    name: 'Master Composer',
    description: 'A creative genius who excels at musical composition and innovation. High creativity and knowledge.',
    icon: '🎹',
    primaryStat: 'creativity',
    secondaryStat: 'knowledge',
    startingStats: {
      knowledge: 18,
      rhythm: 12,
      harmony: 16,
      creativity: 20,
      focus: 14
    },
    statGrowth: {
      knowledge: 1.8,
      rhythm: 1.2,
      harmony: 1.6,
      creativity: 2.0,
      focus: 1.4
    },
    classAbilities: [
      {
        id: 'creative_inspiration',
        name: 'Creative Inspiration',
        description: 'Generate random rare item based on creativity',
        icon: '💡',
        unlockLevel: 1,
        cooldown: 300, // 5 hours
        effect: {
          type: 'loot_bonus',
          value: 2.0
        }
      },
      {
        id: 'masterpiece',
        name: 'Masterpiece',
        description: 'Create a legendary item once per run',
        icon: '👑',
        unlockLevel: 12,
        effect: {
          type: 'special',
          value: 1
        }
      }
    ],
    unlockRequirement: {
      level: 8,
      achievements: ['perfectionist']
    }
  },
  
  conductor: {
    id: 'conductor',
    name: 'Grand Conductor',
    description: 'A master of musical leadership and coordination. Exceptional focus and harmony skills.',
    icon: '🎯',
    primaryStat: 'focus',
    secondaryStat: 'harmony',
    startingStats: {
      knowledge: 16,
      rhythm: 14,
      harmony: 18,
      creativity: 12,
      focus: 20
    },
    statGrowth: {
      knowledge: 1.6,
      rhythm: 1.4,
      harmony: 1.8,
      creativity: 1.2,
      focus: 2.0
    },
    classAbilities: [
      {
        id: 'orchestral_command',
        name: 'Orchestral Command',
        description: 'Boost all stats by 20% for 45 minutes',
        icon: '🎺',
        unlockLevel: 1,
        cooldown: 360, // 6 hours
        effect: {
          type: 'stat_boost',
          value: 1.2,
          duration: 45
        }
      },
      {
        id: 'second_chance',
        name: 'Second Chance',
        description: 'Revive from permadeath once per run',
        icon: '🔄',
        unlockLevel: 15,
        effect: {
          type: 'revival',
          value: 1
        }
      }
    ],
    unlockRequirement: {
      level: 12,
      achievements: ['music-master'],
      questsCompleted: 10
    }
  }
};

// RPG Items Configuration
export const RPG_ITEMS: Record<string, Item> = {
  // Common Instruments
  'wooden_flute': {
    id: 'wooden_flute',
    name: 'Wooden Flute',
    description: 'A simple wooden flute that enhances rhythm understanding.',
    icon: '🪈',
    type: 'instrument',
    rarity: 'common',
    level: 1,
    value: 25,
    stats: { rhythm: 2, focus: 1 }
  },
  
  'practice_piano': {
    id: 'practice_piano',
    name: 'Practice Piano',
    description: 'A basic piano for harmony practice.',
    icon: '🎹',
    type: 'instrument',
    rarity: 'common',
    level: 1,
    value: 50,
    stats: { harmony: 3, knowledge: 1 }
  },
  
  // Uncommon Items
  'silver_trumpet': {
    id: 'silver_trumpet',
    name: 'Silver Trumpet',
    description: 'A polished silver trumpet that boosts performance confidence.',
    icon: '🎺',
    type: 'instrument',
    rarity: 'uncommon',
    level: 5,
    value: 150,
    stats: { rhythm: 4, creativity: 3, focus: 2 },
    effects: [{
      type: 'xp_bonus',
      value: 0.1,
      condition: 'rhythm_challenges'
    }]
  },
  
  'theory_textbook': {
    id: 'theory_textbook',
    name: 'Advanced Theory Textbook',
    description: 'A comprehensive guide to music theory.',
    icon: '📖',
    type: 'scroll',
    rarity: 'uncommon',
    level: 3,
    value: 100,
    stats: { knowledge: 5, harmony: 2 },
    effects: [{
      type: 'xp_bonus',
      value: 0.15,
      condition: 'quiz_completion'
    }]
  },
  
  // Rare Items
  'golden_violin': {
    id: 'golden_violin',
    name: 'Golden Violin',
    description: 'An exquisite golden violin that resonates with perfect harmony.',
    icon: '🎻',
    type: 'instrument',
    rarity: 'rare',
    level: 10,
    value: 500,
    stats: { harmony: 8, creativity: 6, rhythm: 4 },
    effects: [
      {
        type: 'xp_bonus',
        value: 0.25
      },
      {
        type: 'gold_bonus',
        value: 0.2
      }
    ]
  },
  
  'composers_quill': {
    id: 'composers_quill',
    name: "Composer's Enchanted Quill",
    description: 'A magical quill that enhances creative composition.',
    icon: '🪶',
    type: 'accessory',
    rarity: 'rare',
    level: 8,
    value: 400,
    stats: { creativity: 10, knowledge: 5 },
    effects: [{
      type: 'ability_cooldown',
      value: -0.2 // 20% cooldown reduction
    }],
    requirements: {
      class: ['composer', 'scholar']
    }
  },
  
  // Epic Items
  'stradivarius_replica': {
    id: 'stradivarius_replica',
    name: 'Stradivarius Replica',
    description: 'A masterfully crafted replica of the legendary Stradivarius violin.',
    icon: '🎻',
    type: 'instrument',
    rarity: 'epic',
    level: 15,
    value: 1500,
    stats: { harmony: 15, creativity: 10, rhythm: 8, focus: 5 },
    effects: [
      {
        type: 'xp_bonus',
        value: 0.5
      },
      {
        type: 'special',
        value: 1 // Grants "Perfect Pitch" ability
      }
    ],
    requirements: {
      level: 15,
      class: ['virtuoso', 'conductor']
    },
    lore: 'Crafted by a master luthier, this violin carries the essence of musical perfection.'
  },
  
  'conductors_baton': {
    id: 'conductors_baton',
    name: "Maestro's Conducting Baton",
    description: 'A legendary baton that commands respect and enhances leadership.',
    icon: '🎯',
    type: 'instrument',
    rarity: 'epic',
    level: 18,
    value: 2000,
    stats: { focus: 20, harmony: 12, knowledge: 8 },
    effects: [
      {
        type: 'stat_bonus',
        value: 1.3 // 30% stat bonus to all stats
      }
    ],
    requirements: {
      level: 18,
      class: ['conductor']
    }
  },
  
  // Legendary Items
  'orpheus_lyre': {
    id: 'orpheus_lyre',
    name: 'Lyre of Orpheus',
    description: 'The mythical lyre that could charm even the gods themselves.',
    icon: '🪕',
    type: 'instrument',
    rarity: 'legendary',
    level: 25,
    value: 10000,
    stats: { creativity: 25, harmony: 20, rhythm: 15, knowledge: 15, focus: 10 },
    effects: [
      {
        type: 'xp_bonus',
        value: 1.0 // 100% XP bonus
      },
      {
        type: 'gold_bonus',
        value: 0.5
      },
      {
        type: 'special',
        value: 1 // Grants "Divine Inspiration" ability
      }
    ],
    isUnique: true,
    lore: 'Legend says this lyre was played by Orpheus himself, capable of moving stones and taming wild beasts with its melody.'
  },
  
  // Consumables
  'focus_potion': {
    id: 'focus_potion',
    name: 'Potion of Focus',
    description: 'A magical brew that sharpens concentration.',
    icon: '🧪',
    type: 'consumable',
    rarity: 'common',
    level: 1,
    value: 20,
    effects: [{
      type: 'stat_bonus',
      value: 5 // +5 focus for 30 minutes
    }]
  },
  
  'inspiration_elixir': {
    id: 'inspiration_elixir',
    name: 'Elixir of Inspiration',
    description: 'A rare elixir that boosts creativity and unlocks potential.',
    icon: '⚗️',
    type: 'consumable',
    rarity: 'rare',
    level: 10,
    value: 200,
    effects: [
      {
        type: 'stat_bonus',
        value: 10 // +10 creativity for 1 hour
      },
      {
        type: 'xp_bonus',
        value: 0.3 // 30% XP bonus for 1 hour
      }
    ]
  }
};

// RPG Challenges Configuration
export const RPG_CHALLENGES: Record<string, RPGChallenge> = {
  'daily_scales': {
    id: 'daily_scales',
    name: 'Daily Scale Practice',
    description: 'Master your scales with perfect accuracy.',
    type: 'daily_quest',
    difficulty: 'novice',
    icon: '🎼',
    requirements: { level: 1 },
    objectives: [
      {
        id: 'complete_scale_quiz',
        description: 'Complete a scales quiz with 80%+ accuracy',
        type: 'quiz_score',
        target: 80,
        current: 0,
        isCompleted: false
      }
    ],
    rewards: [
      { type: 'experience', value: 50 },
      { type: 'gold', value: 25 },
      { type: 'item', value: 'focus_potion', rarity: 'common', guaranteed: true }
    ],
    isDaily: true,
    isRepeatable: true
  },
  
  'rhythm_master': {
    id: 'rhythm_master',
    name: 'Rhythm Master Challenge',
    description: 'Prove your rhythmic prowess in this timed challenge.',
    type: 'time_trial',
    difficulty: 'apprentice',
    icon: '🥁',
    requirements: { level: 3, stats: { rhythm: 15 } },
    objectives: [
      {
        id: 'complete_rhythm_quizzes',
        description: 'Complete 3 rhythm quizzes in under 10 minutes',
        type: 'quiz_count',
        target: 3,
        current: 0,
        isCompleted: false
      }
    ],
    rewards: [
      { type: 'experience', value: 100 },
      { type: 'gold', value: 75 },
      { type: 'stat_point', value: 2 }
    ],
    timeLimit: 10,
    attempts: 3
  },
  
  'perfect_harmony': {
    id: 'perfect_harmony',
    name: 'Perfect Harmony Quest',
    description: 'Achieve perfect scores on harmony-based challenges.',
    type: 'random_encounter',
    difficulty: 'adept',
    icon: '🎵',
    requirements: { level: 8, stats: { harmony: 25 } },
    objectives: [
      {
        id: 'perfect_harmony_scores',
        description: 'Get 100% on 2 harmony quizzes',
        type: 'perfect_score',
        target: 2,
        current: 0,
        isCompleted: false
      }
    ],
    rewards: [
      { type: 'experience', value: 200 },
      { type: 'gold', value: 150 },
      { type: 'item', value: 'golden_violin', rarity: 'rare' }
    ],
    lore: 'The ancient masters speak of a perfect harmony that resonates through all of creation...'
  },
  
  'boss_bach': {
    id: 'boss_bach',
    name: 'Challenge of Bach',
    description: 'Face the spirit of Johann Sebastian Bach in musical combat!',
    type: 'boss_battle',
    difficulty: 'expert',
    icon: '👻',
    requirements: { 
      level: 15, 
      stats: { knowledge: 30, harmony: 25 },
      questsCompleted: ['perfect_harmony', 'rhythm_master']
    },
    objectives: [
      {
        id: 'defeat_bach',
        description: 'Complete the Baroque Music Final Exam with 95%+ score',
        type: 'quiz_score',
        target: 95,
        current: 0,
        isCompleted: false
      },
      {
        id: 'survive_counterpoint',
        description: 'Maintain focus above 50% throughout the battle',
        type: 'survival',
        target: 50,
        current: 0,
        isCompleted: false
      }
    ],
    rewards: [
      { type: 'experience', value: 1000 },
      { type: 'gold', value: 500 },
      { type: 'item', value: 'stradivarius_replica', rarity: 'epic', guaranteed: true },
      { type: 'title', value: 'Bach Conqueror' }
    ],
    attempts: 1,
    lore: 'The ghost of the great composer challenges you to prove your worth in the realm of Baroque mastery.'
  }
};

// Loot Tables
export const LOOT_TABLES: Record<string, LootTable> = {
  'common_chest': {
    id: 'common_chest',
    name: 'Common Treasure Chest',
    goldRange: [10, 50],
    experienceRange: [20, 80],
    items: [
      { itemId: 'wooden_flute', weight: 30, quantity: [1, 1] },
      { itemId: 'practice_piano', weight: 25, quantity: [1, 1] },
      { itemId: 'focus_potion', weight: 40, quantity: [1, 3] },
      { itemId: 'theory_textbook', weight: 5, quantity: [1, 1] }
    ]
  },
  
  'rare_chest': {
    id: 'rare_chest',
    name: 'Rare Treasure Chest',
    goldRange: [100, 300],
    experienceRange: [150, 400],
    items: [
      { itemId: 'silver_trumpet', weight: 25, quantity: [1, 1] },
      { itemId: 'golden_violin', weight: 15, quantity: [1, 1] },
      { itemId: 'composers_quill', weight: 10, quantity: [1, 1] },
      { itemId: 'inspiration_elixir', weight: 30, quantity: [1, 2] },
      { itemId: 'stradivarius_replica', weight: 5, quantity: [1, 1], condition: { level: 15 } }
    ]
  },
  
  'legendary_chest': {
    id: 'legendary_chest',
    name: 'Legendary Treasure Vault',
    goldRange: [500, 1500],
    experienceRange: [800, 2000],
    items: [
      { itemId: 'orpheus_lyre', weight: 5, quantity: [1, 1], condition: { level: 25 } },
      { itemId: 'conductors_baton', weight: 10, quantity: [1, 1], condition: { level: 18 } },
      { itemId: 'stradivarius_replica', weight: 20, quantity: [1, 1] },
      { itemId: 'inspiration_elixir', weight: 35, quantity: [2, 5] }
    ],
    guaranteedItems: ['inspiration_elixir']
  }
};

// RPG Themes
export const RPG_THEMES: Record<string, RPGTheme> = {
  'classic_fantasy': {
    id: 'classic_fantasy',
    name: 'Classic Fantasy',
    description: 'Traditional RPG styling with medieval fantasy elements',
    colors: {
      primary: '#8B4513',
      secondary: '#DAA520',
      accent: '#FF6347',
      background: '#2F1B14',
      surface: '#3D2817',
      text: '#F5DEB3',
      textSecondary: '#D2B48C'
    },
    fonts: {
      primary: 'Cinzel',
      secondary: 'Crimson Text',
      display: 'Uncial Antiqua'
    },
    effects: {
      particles: true,
      animations: true,
      sounds: true
    }
  },
  
  'musical_realm': {
    id: 'musical_realm',
    name: 'Musical Realm',
    description: 'Music-themed fantasy with notes and instruments',
    colors: {
      primary: '#4A148C',
      secondary: '#7B1FA2',
      accent: '#E1BEE7',
      background: '#1A0E27',
      surface: '#2D1B3D',
      text: '#E8EAF6',
      textSecondary: '#C5CAE9'
    },
    fonts: {
      primary: 'Playfair Display',
      secondary: 'Lora',
      display: 'Dancing Script'
    },
    effects: {
      particles: true,
      animations: true,
      sounds: true
    }
  },
  
  'dark_academia': {
    id: 'dark_academia',
    name: 'Dark Academia',
    description: 'Scholarly dark theme with gothic elements',
    colors: {
      primary: '#1B1B1B',
      secondary: '#8B4513',
      accent: '#DAA520',
      background: '#0D0D0D',
      surface: '#1A1A1A',
      text: '#F5F5DC',
      textSecondary: '#D3D3D3'
    },
    fonts: {
      primary: 'Libre Baskerville',
      secondary: 'Crimson Pro',
      display: 'Cormorant Garamond'
    },
    effects: {
      particles: false,
      animations: true,
      sounds: false
    }
  }
};

// Experience and Level Calculations
export const LEVEL_REQUIREMENTS = {
  baseExperience: 100,
  experienceMultiplier: 1.5,
  maxLevel: 50
};

export const calculateExperienceForLevel = (level: number): number => {
  if (level <= 1) return 0;
  return Math.floor(LEVEL_REQUIREMENTS.baseExperience * Math.pow(LEVEL_REQUIREMENTS.experienceMultiplier, level - 2));
};

export const calculateLevelFromExperience = (experience: number): number => {
  let level = 1;
  let totalExp = 0;
  
  while (level < LEVEL_REQUIREMENTS.maxLevel) {
    const expForNextLevel = calculateExperienceForLevel(level + 1);
    if (totalExp + expForNextLevel > experience) break;
    totalExp += expForNextLevel;
    level++;
  }
  
  return level;
};

// Helper Functions
export const getItemsByRarity = (rarity: ItemRarity): Item[] => {
  return Object.values(RPG_ITEMS).filter(item => item.rarity === rarity);
};

export const getChallengesByDifficulty = (difficulty: DifficultyLevel): RPGChallenge[] => {
  return Object.values(RPG_CHALLENGES).filter(challenge => challenge.difficulty === difficulty);
};

export const getClassById = (classId: CharacterClass): CharacterClassInfo => {
  return CHARACTER_CLASSES[classId];
};