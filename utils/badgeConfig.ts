import { EnhancedBadge, BadgeRarity, BadgeCategory, BadgeDesign, BadgeRequirement } from '../types/badges';

// Badge Design Templates
export const BADGE_DESIGNS: Record<BadgeRarity, BadgeDesign> = {
  common: {
    primaryColor: '#6B7280',
    secondaryColor: '#9CA3AF',
    backgroundColor: '#F3F4F6',
    borderColor: '#D1D5DB',
    shape: 'circle',
    pattern: 'solid',
    animation: 'none'
  },
  uncommon: {
    primaryColor: '#10B981',
    secondaryColor: '#34D399',
    backgroundColor: '#ECFDF5',
    borderColor: '#10B981',
    glowColor: '#10B981',
    shape: 'shield',
    pattern: 'gradient',
    animation: 'pulse'
  },
  rare: {
    primaryColor: '#3B82F6',
    secondaryColor: '#60A5FA',
    backgroundColor: '#EFF6FF',
    borderColor: '#3B82F6',
    glowColor: '#3B82F6',
    shape: 'hexagon',
    pattern: 'radial',
    animation: 'glow'
  },
  epic: {
    primaryColor: '#8B5CF6',
    secondaryColor: '#A78BFA',
    backgroundColor: '#F5F3FF',
    borderColor: '#8B5CF6',
    glowColor: '#8B5CF6',
    shape: 'star',
    pattern: 'gradient',
    animation: 'shimmer'
  },
  legendary: {
    primaryColor: '#F59E0B',
    secondaryColor: '#FBBF24',
    backgroundColor: '#FFFBEB',
    borderColor: '#F59E0B',
    glowColor: '#F59E0B',
    shape: 'crown',
    pattern: 'radial',
    animation: 'rotate'
  }
};

// Predefined Badge Configurations
export const BADGE_CONFIGS: EnhancedBadge[] = [
  // Quiz Achievement Badges
  {
    id: 'first-quiz',
    name: 'First Steps',
    description: 'Completed your first quiz',
    longDescription: 'Welcome to your IGCSE Music journey! You\'ve taken the first step by completing your very first quiz.',
    icon: '🎯',
    category: 'quiz',
    rarity: 'common',
    design: BADGE_DESIGNS.common,
    requirements: [{
      type: 'quiz_count',
      value: 1,
      comparison: 'greater_equal'
    }],
    points: 10,
    isHidden: false,
    isRepeatable: false,
    shareableText: 'I just started my IGCSE Music journey! 🎯',
    unlockMessage: 'Congratulations! You\'ve completed your first quiz and earned your first badge!'
  },
  {
    id: 'perfect-score',
    name: 'Perfect Score',
    description: 'Achieved 100% on a quiz',
    longDescription: 'Excellence achieved! You demonstrated perfect understanding by scoring 100% on a quiz.',
    icon: '⭐',
    category: 'achievement',
    rarity: 'uncommon',
    design: BADGE_DESIGNS.uncommon,
    requirements: [{
      type: 'quiz_score',
      value: 100,
      comparison: 'equals'
    }],
    points: 25,
    isHidden: false,
    isRepeatable: true,
    maxEarnings: 50,
    shareableText: 'I just scored 100% on an IGCSE Music quiz! ⭐',
    unlockMessage: 'Perfect! Your dedication to learning has paid off with a flawless performance!'
  },
  {
    id: 'quiz-master',
    name: 'Quiz Master',
    description: 'Completed 10 quizzes',
    longDescription: 'Your commitment to learning is impressive! You\'ve completed 10 quizzes and are well on your way to mastery.',
    icon: '🏆',
    category: 'milestone',
    rarity: 'rare',
    design: BADGE_DESIGNS.rare,
    requirements: [{
      type: 'quiz_count',
      value: 10,
      comparison: 'greater_equal'
    }],
    points: 50,
    isHidden: false,
    isRepeatable: false,
    shareableText: 'I\'ve completed 10 IGCSE Music quizzes! 🏆',
    unlockMessage: 'Outstanding! You\'ve proven your dedication with 10 completed quizzes!'
  },
  {
    id: 'high-achiever',
    name: 'High Achiever',
    description: 'Maintained 80%+ average score',
    longDescription: 'Exceptional performance! You\'ve maintained an average score above 80% across multiple quizzes.',
    icon: '🌟',
    category: 'achievement',
    rarity: 'rare',
    design: BADGE_DESIGNS.rare,
    requirements: [
      {
        type: 'average_score',
        value: 80,
        comparison: 'greater_than'
      },
      {
        type: 'quiz_count',
        value: 5,
        comparison: 'greater_equal'
      }
    ],
    points: 75,
    isHidden: false,
    isRepeatable: false,
    shareableText: 'I\'m maintaining an 80%+ average in IGCSE Music! 🌟',
    unlockMessage: 'Remarkable consistency! Your high performance across multiple quizzes is truly impressive!'
  },
  
  // Streak Badges
  {
    id: 'daily-streak-3',
    name: 'Getting Started',
    description: '3-day study streak',
    longDescription: 'Building good habits! You\'ve studied for 3 consecutive days.',
    icon: '🔥',
    category: 'streak',
    rarity: 'common',
    design: BADGE_DESIGNS.common,
    requirements: [{
      type: 'consecutive_days',
      value: 3,
      comparison: 'greater_equal'
    }],
    points: 15,
    isHidden: false,
    isRepeatable: false,
    shareableText: 'I\'ve been studying IGCSE Music for 3 days straight! 🔥',
    unlockMessage: 'Great start! Consistency is key to mastering music theory!'
  },
  {
    id: 'daily-streak-7',
    name: 'Week Warrior',
    description: '7-day study streak',
    longDescription: 'Impressive dedication! A full week of consistent study shows real commitment.',
    icon: '🔥',
    category: 'streak',
    rarity: 'uncommon',
    design: BADGE_DESIGNS.uncommon,
    requirements: [{
      type: 'consecutive_days',
      value: 7,
      comparison: 'greater_equal'
    }],
    points: 35,
    isHidden: false,
    isRepeatable: false,
    shareableText: 'I\'ve maintained a 7-day IGCSE Music study streak! 🔥',
    unlockMessage: 'Fantastic! A full week of dedication - you\'re building excellent study habits!'
  },
  {
    id: 'daily-streak-30',
    name: 'Monthly Master',
    description: '30-day study streak',
    longDescription: 'Extraordinary commitment! Thirty consecutive days of study demonstrates true dedication to your IGCSE Music journey.',
    icon: '🔥',
    category: 'streak',
    rarity: 'epic',
    design: BADGE_DESIGNS.epic,
    requirements: [{
      type: 'consecutive_days',
      value: 30,
      comparison: 'greater_equal'
    }],
    points: 150,
    isHidden: false,
    isRepeatable: false,
    shareableText: 'I\'ve achieved a 30-day IGCSE Music study streak! 🔥',
    unlockMessage: 'Incredible! Your month-long dedication is truly inspiring!'
  },
  
  // Milestone Badges
  {
    id: 'century-club',
    name: 'Century Club',
    description: 'Completed 100 quizzes',
    longDescription: 'Phenomenal achievement! You\'ve completed 100 quizzes, demonstrating exceptional commitment to learning.',
    icon: '💯',
    category: 'milestone',
    rarity: 'epic',
    design: BADGE_DESIGNS.epic,
    requirements: [{
      type: 'quiz_count',
      value: 100,
      comparison: 'greater_equal'
    }],
    points: 200,
    isHidden: false,
    isRepeatable: false,
    shareableText: 'I\'ve completed 100 IGCSE Music quizzes! 💯',
    unlockMessage: 'Phenomenal! 100 quizzes completed - you\'re a true music theory scholar!'
  },
  {
    id: 'time-master',
    name: 'Time Master',
    description: 'Spent 10+ hours studying',
    longDescription: 'Dedicated learner! You\'ve invested over 10 hours in your IGCSE Music studies.',
    icon: '⏰',
    category: 'milestone',
    rarity: 'rare',
    design: BADGE_DESIGNS.rare,
    requirements: [{
      type: 'time_spent',
      value: 36000, // 10 hours in seconds
      comparison: 'greater_equal'
    }],
    points: 60,
    isHidden: false,
    isRepeatable: false,
    shareableText: 'I\'ve spent 10+ hours studying IGCSE Music! ⏰',
    unlockMessage: 'Impressive dedication! Your time investment in learning is paying off!'
  },
  
  // Special Achievement Badges
  {
    id: 'perfectionist',
    name: 'Perfectionist',
    description: 'Achieved 5 perfect scores',
    longDescription: 'Exceptional excellence! You\'ve demonstrated mastery by achieving 5 perfect quiz scores.',
    icon: '💎',
    category: 'achievement',
    rarity: 'epic',
    design: BADGE_DESIGNS.epic,
    requirements: [{
      type: 'perfect_scores',
      value: 5,
      comparison: 'greater_equal'
    }],
    points: 125,
    isHidden: false,
    isRepeatable: false,
    shareableText: 'I\'ve achieved 5 perfect scores in IGCSE Music! 💎',
    unlockMessage: 'Brilliant! Your pursuit of perfection has earned you this prestigious badge!'
  },
  {
    id: 'explorer',
    name: 'Explorer',
    description: 'Visited 50+ study pages',
    longDescription: 'Curious learner! You\'ve explored over 50 different study pages, showing great enthusiasm for learning.',
    icon: '🗺️',
    category: 'progress',
    rarity: 'uncommon',
    design: BADGE_DESIGNS.uncommon,
    requirements: [{
      type: 'page_visits',
      value: 50,
      comparison: 'greater_equal'
    }],
    points: 40,
    isHidden: false,
    isRepeatable: false,
    shareableText: 'I\'ve explored 50+ IGCSE Music study pages! 🗺️',
    unlockMessage: 'Wonderful exploration! Your curiosity is leading you to great discoveries!'
  },
  
  // Hidden/Secret Badges
  {
    id: 'night-owl',
    name: 'Night Owl',
    description: 'Completed quiz after midnight',
    longDescription: 'Dedicated night student! You\'ve shown commitment by studying late into the night.',
    icon: '🦉',
    category: 'special',
    rarity: 'rare',
    design: BADGE_DESIGNS.rare,
    requirements: [{
      type: 'specific_quiz',
      value: 1,
      comparison: 'greater_equal',
      additionalCriteria: { timeRange: 'midnight' }
    }],
    points: 30,
    isHidden: true,
    isRepeatable: false,
    shareableText: 'I earned the secret Night Owl badge! 🦉',
    unlockMessage: 'Secret badge unlocked! Your late-night dedication hasn\'t gone unnoticed!'
  },
  {
    id: 'speed-demon',
    name: 'Speed Demon',
    description: 'Completed quiz in under 2 minutes',
    longDescription: 'Lightning fast! You demonstrated both speed and accuracy by completing a quiz in record time.',
    icon: '⚡',
    category: 'special',
    rarity: 'rare',
    design: BADGE_DESIGNS.rare,
    requirements: [{
      type: 'specific_quiz',
      value: 1,
      comparison: 'greater_equal',
      additionalCriteria: { maxTime: 120 } // 2 minutes in seconds
    }],
    points: 35,
    isHidden: true,
    isRepeatable: false,
    shareableText: 'I earned the secret Speed Demon badge! ⚡',
    unlockMessage: 'Secret badge unlocked! Your speed and accuracy are remarkable!'
  },
  
  // Legendary Achievement
  {
    id: 'music-master',
    name: 'Music Master',
    description: 'Ultimate IGCSE Music achievement',
    longDescription: 'The pinnacle of achievement! You\'ve demonstrated exceptional mastery across all areas of IGCSE Music study.',
    icon: '👑',
    category: 'achievement',
    rarity: 'legendary',
    design: BADGE_DESIGNS.legendary,
    requirements: [
      {
        type: 'quiz_count',
        value: 50,
        comparison: 'greater_equal'
      },
      {
        type: 'average_score',
        value: 90,
        comparison: 'greater_equal'
      },
      {
        type: 'perfect_scores',
        value: 10,
        comparison: 'greater_equal'
      },
      {
        type: 'time_spent',
        value: 72000, // 20 hours
        comparison: 'greater_equal'
      }
    ],
    points: 500,
    isHidden: false,
    isRepeatable: false,
    prerequisites: ['quiz-master', 'high-achiever', 'perfectionist', 'time-master'],
    shareableText: 'I\'ve achieved Music Master status in IGCSE Music! 👑',
    unlockMessage: 'LEGENDARY! You have achieved the ultimate badge - you are truly a Music Master!'
  }
];

// Badge Collections
export const BADGE_COLLECTIONS = [
  {
    id: 'quiz-champion',
    name: 'Quiz Champion Collection',
    description: 'Master all quiz-related achievements',
    badges: ['first-quiz', 'perfect-score', 'quiz-master', 'century-club'],
    completionReward: {
      id: 'quiz-champion-master',
      name: 'Quiz Champion',
      description: 'Completed the Quiz Champion collection',
      icon: '🏅',
      category: 'collection' as BadgeCategory,
      rarity: 'epic' as BadgeRarity,
      design: BADGE_DESIGNS.epic,
      requirements: [],
      points: 100,
      isHidden: false,
      isRepeatable: false
    }
  },
  {
    id: 'streak-master',
    name: 'Streak Master Collection',
    description: 'Achieve all streak milestones',
    badges: ['daily-streak-3', 'daily-streak-7', 'daily-streak-30'],
    completionReward: {
      id: 'streak-master-badge',
      name: 'Streak Master',
      description: 'Completed the Streak Master collection',
      icon: '🔥',
      category: 'collection' as BadgeCategory,
      rarity: 'epic' as BadgeRarity,
      design: BADGE_DESIGNS.epic,
      requirements: [],
      points: 75,
      isHidden: false,
      isRepeatable: false
    }
  }
];

// Helper function to get badge by ID
export const getBadgeById = (id: string): EnhancedBadge | undefined => {
  return BADGE_CONFIGS.find(badge => badge.id === id);
};

// Helper function to get badges by category
export const getBadgesByCategory = (category: BadgeCategory): EnhancedBadge[] => {
  return BADGE_CONFIGS.filter(badge => badge.category === category);
};

// Helper function to get badges by rarity
export const getBadgesByRarity = (rarity: BadgeRarity): EnhancedBadge[] => {
  return BADGE_CONFIGS.filter(badge => badge.rarity === rarity);
};