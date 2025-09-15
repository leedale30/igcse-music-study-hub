// Enhanced Badge and Achievement System Types

export type BadgeRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type BadgeCategory = 'quiz' | 'progress' | 'achievement' | 'streak' | 'milestone' | 'challenge' | 'special';
export type AchievementType = 'milestone' | 'streak' | 'challenge' | 'collection' | 'mastery' | 'time_based' | 'social';

export interface BadgeDesign {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  borderColor: string;
  glowColor?: string;
  pattern?: 'solid' | 'gradient' | 'radial' | 'striped' | 'dotted';
  shape?: 'circle' | 'shield' | 'star' | 'hexagon' | 'diamond' | 'crown';
  animation?: 'none' | 'pulse' | 'glow' | 'bounce' | 'rotate' | 'shimmer';
}

export interface BadgeRequirement {
  type: 'quiz_count' | 'quiz_score' | 'streak' | 'time_spent' | 'perfect_scores' | 'page_visits' | 'consecutive_days' | 'specific_quiz' | 'average_score' | 'improvement';
  value: number;
  comparison: 'equals' | 'greater_than' | 'less_than' | 'greater_equal' | 'less_equal';
  timeframe?: 'daily' | 'weekly' | 'monthly' | 'all_time';
  additionalCriteria?: Record<string, any>;
}

export interface ProgressIndicator {
  current: number;
  target: number;
  unit: string;
  percentage: number;
  isCompleted: boolean;
  nextMilestone?: number;
}

export interface EnhancedBadge {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  icon: string;
  category: BadgeCategory;
  rarity: BadgeRarity;
  design: BadgeDesign;
  requirements: BadgeRequirement[];
  points: number;
  isHidden: boolean; // Secret badges
  isRepeatable: boolean;
  maxEarnings?: number;
  earnedAt?: Date;
  earnedCount?: number;
  shareableText?: string;
  unlockMessage?: string;
  prerequisites?: string[]; // Badge IDs that must be earned first
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  type: AchievementType;
  category: BadgeCategory;
  badge: EnhancedBadge;
  progress: ProgressIndicator;
  isUnlocked: boolean;
  isCompleted: boolean;
  unlockedAt?: Date;
  completedAt?: Date;
  difficulty: 1 | 2 | 3 | 4 | 5; // 1 = Easy, 5 = Legendary
  estimatedTime?: string; // "5 minutes", "1 hour", "1 week"
  hints?: string[];
}

export interface BadgeCollection {
  id: string;
  name: string;
  description: string;
  badges: string[]; // Badge IDs
  completionReward?: EnhancedBadge;
  progress: {
    earned: number;
    total: number;
    percentage: number;
  };
}

export interface StreakData {
  type: 'daily_quiz' | 'perfect_scores' | 'study_time' | 'login';
  current: number;
  longest: number;
  lastActivity: Date;
  isActive: boolean;
}

export interface ChallengeData {
  id: string;
  name: string;
  description: string;
  type: 'time_limited' | 'score_based' | 'completion_based';
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  participants: number;
  leaderboard?: {
    userId: string;
    score: number;
    rank: number;
  }[];
  rewards: EnhancedBadge[];
}

export interface BadgeStats {
  totalBadges: number;
  totalPoints: number;
  badgesByRarity: Record<BadgeRarity, number>;
  badgesByCategory: Record<BadgeCategory, number>;
  completionRate: number;
  rank?: number;
  level: number;
  nextLevelPoints: number;
}

export interface ShareableBadge {
  badge: EnhancedBadge;
  studentName: string;
  earnedDate: Date;
  shareUrl: string;
  imageUrl: string;
  socialText: string;
}

// Enhanced Student Progress with new badge system
export interface EnhancedStudentProgress {
  userId: string;
  badges: EnhancedBadge[];
  achievements: Achievement[];
  collections: BadgeCollection[];
  streaks: StreakData[];
  challenges: ChallengeData[];
  stats: BadgeStats;
  lastBadgeEarned?: Date;
  totalPoints: number;
  level: number;
  nextLevelProgress: ProgressIndicator;
}