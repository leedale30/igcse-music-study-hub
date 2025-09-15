import { 
  EnhancedBadge, 
  Achievement, 
  BadgeRequirement, 
  ProgressIndicator, 
  StreakData, 
  BadgeStats,
  EnhancedStudentProgress,
  ShareableBadge
} from '../types/badges';
import { StudentProgress, QuizResult } from '../types';
import { BADGE_CONFIGS, BADGE_COLLECTIONS, getBadgeById } from './badgeConfig';

export class BadgeManager {
  private static instance: BadgeManager;
  
  private constructor() {}
  
  public static getInstance(): BadgeManager {
    if (!BadgeManager.instance) {
      BadgeManager.instance = new BadgeManager();
    }
    return BadgeManager.instance;
  }

  // Check if a requirement is met
  private checkRequirement(
    requirement: BadgeRequirement, 
    progress: StudentProgress,
    context?: any
  ): boolean {
    const { type, value, comparison, timeframe, additionalCriteria } = requirement;
    let currentValue = 0;

    switch (type) {
      case 'quiz_count':
        currentValue = progress.totalQuizzesCompleted;
        break;
        
      case 'quiz_score':
        if (context?.latestQuiz) {
          currentValue = context.latestQuiz.percentage;
        }
        break;
        
      case 'average_score':
        currentValue = progress.averageQuizScore;
        break;
        
      case 'time_spent':
        currentValue = progress.totalStudyTime;
        break;
        
      case 'page_visits':
        currentValue = progress.totalPagesVisited;
        break;
        
      case 'perfect_scores':
        currentValue = progress.quizResults.filter(quiz => quiz.percentage === 100).length;
        break;
        
      case 'consecutive_days':
        currentValue = this.calculateCurrentStreak(progress);
        break;
        
      case 'specific_quiz':
        if (context?.latestQuiz && additionalCriteria) {
          if (additionalCriteria.timeRange === 'midnight') {
            const hour = new Date(context.latestQuiz.completedAt).getHours();
            return hour >= 0 && hour < 6; // Between midnight and 6 AM
          }
          if (additionalCriteria.maxTime) {
            return context.latestQuiz.timeSpent <= additionalCriteria.maxTime;
          }
        }
        return false;
        
      case 'improvement':
        // Check if latest score is better than previous attempts
        if (context?.latestQuiz && progress.quizResults.length > 1) {
          const sameQuizResults = progress.quizResults
            .filter(quiz => quiz.quizId === context.latestQuiz.quizId)
            .sort((a, b) => new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime());
          
          if (sameQuizResults.length > 1) {
            const previousBest = Math.max(...sameQuizResults.slice(0, -1).map(q => q.percentage));
            return context.latestQuiz.percentage > previousBest;
          }
        }
        return false;
        
      default:
        return false;
    }

    // Apply comparison logic
    switch (comparison) {
      case 'equals':
        return currentValue === value;
      case 'greater_than':
        return currentValue > value;
      case 'less_than':
        return currentValue < value;
      case 'greater_equal':
        return currentValue >= value;
      case 'less_equal':
        return currentValue <= value;
      default:
        return false;
    }
  }

  // Calculate current study streak
  private calculateCurrentStreak(progress: StudentProgress): number {
    if (progress.quizResults.length === 0) return 0;

    const sortedResults = progress.quizResults
      .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime());

    let streak = 0;
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    for (const result of sortedResults) {
      const resultDate = new Date(result.completedAt);
      resultDate.setHours(0, 0, 0, 0);
      
      const daysDiff = Math.floor((currentDate.getTime() - resultDate.getTime()) / (1000 * 60 * 60 * 24));
      
      if (daysDiff === streak) {
        streak++;
      } else if (daysDiff > streak) {
        break;
      }
    }

    return streak;
  }

  // Check if all requirements for a badge are met
  private checkBadgeRequirements(
    badge: EnhancedBadge, 
    progress: StudentProgress, 
    context?: any
  ): boolean {
    return badge.requirements.every(req => this.checkRequirement(req, progress, context));
  }

  // Check prerequisites
  private checkPrerequisites(badge: EnhancedBadge, earnedBadges: EnhancedBadge[]): boolean {
    if (!badge.prerequisites || badge.prerequisites.length === 0) {
      return true;
    }
    
    const earnedBadgeIds = earnedBadges.map(b => b.id);
    return badge.prerequisites.every(prereqId => earnedBadgeIds.includes(prereqId));
  }

  // Calculate progress for a specific badge
  public calculateBadgeProgress(
    badge: EnhancedBadge, 
    progress: StudentProgress
  ): ProgressIndicator {
    if (badge.requirements.length === 0) {
      return {
        current: 1,
        target: 1,
        unit: 'requirement',
        percentage: 100,
        isCompleted: true
      };
    }

    // For badges with multiple requirements, calculate overall progress
    const requirementProgress = badge.requirements.map(req => {
      let current = 0;
      let target = req.value;

      switch (req.type) {
        case 'quiz_count':
          current = progress.totalQuizzesCompleted;
          break;
        case 'average_score':
          current = progress.averageQuizScore;
          break;
        case 'time_spent':
          current = progress.totalStudyTime;
          break;
        case 'page_visits':
          current = progress.totalPagesVisited;
          break;
        case 'perfect_scores':
          current = progress.quizResults.filter(quiz => quiz.percentage === 100).length;
          break;
        case 'consecutive_days':
          current = this.calculateCurrentStreak(progress);
          break;
        default:
          current = 0;
      }

      return {
        current: Math.min(current, target),
        target,
        percentage: Math.min((current / target) * 100, 100)
      };
    });

    // Use the minimum progress across all requirements
    const minProgress = requirementProgress.reduce((min, curr) => 
      curr.percentage < min.percentage ? curr : min
    );

    return {
      current: minProgress.current,
      target: minProgress.target,
      unit: this.getUnitForRequirement(badge.requirements[0].type),
      percentage: minProgress.percentage,
      isCompleted: minProgress.percentage >= 100
    };
  }

  private getUnitForRequirement(type: string): string {
    switch (type) {
      case 'quiz_count': return 'quizzes';
      case 'quiz_score': return '%';
      case 'average_score': return '% average';
      case 'time_spent': return 'seconds';
      case 'page_visits': return 'pages';
      case 'perfect_scores': return 'perfect scores';
      case 'consecutive_days': return 'days';
      default: return 'points';
    }
  }

  // Check for newly earned badges
  public checkForNewBadges(
    progress: StudentProgress, 
    earnedBadges: EnhancedBadge[] = [],
    context?: any
  ): EnhancedBadge[] {
    const newBadges: EnhancedBadge[] = [];
    const earnedBadgeIds = earnedBadges.map(b => b.id);

    for (const badge of BADGE_CONFIGS) {
      // Skip if already earned (unless repeatable)
      if (earnedBadgeIds.includes(badge.id) && !badge.isRepeatable) {
        continue;
      }

      // Check if max earnings reached
      if (badge.isRepeatable && badge.maxEarnings) {
        const earnedCount = earnedBadges.filter(b => b.id === badge.id).length;
        if (earnedCount >= badge.maxEarnings) {
          continue;
        }
      }

      // Check prerequisites
      if (!this.checkPrerequisites(badge, earnedBadges)) {
        continue;
      }

      // Check if requirements are met
      if (this.checkBadgeRequirements(badge, progress, context)) {
        const earnedBadge = {
          ...badge,
          earnedAt: new Date(),
          earnedCount: badge.isRepeatable ? 
            (earnedBadges.filter(b => b.id === badge.id).length + 1) : 1
        };
        newBadges.push(earnedBadge);
      }
    }

    return newBadges;
  }

  // Generate achievements list with progress
  public generateAchievements(
    progress: StudentProgress, 
    earnedBadges: EnhancedBadge[] = []
  ): Achievement[] {
    const earnedBadgeIds = earnedBadges.map(b => b.id);
    
    return BADGE_CONFIGS.map(badge => {
      const isCompleted = earnedBadgeIds.includes(badge.id);
      const isUnlocked = !badge.isHidden || isCompleted || this.checkPrerequisites(badge, earnedBadges);
      const badgeProgress = this.calculateBadgeProgress(badge, progress);
      
      return {
        id: badge.id,
        name: badge.name,
        description: badge.description,
        type: this.mapCategoryToAchievementType(badge.category),
        category: badge.category,
        badge,
        progress: badgeProgress,
        isUnlocked,
        isCompleted,
        completedAt: isCompleted ? earnedBadges.find(b => b.id === badge.id)?.earnedAt : undefined,
        difficulty: this.mapRarityToDifficulty(badge.rarity),
        estimatedTime: this.estimateTimeToComplete(badge, badgeProgress),
        hints: this.generateHints(badge, badgeProgress)
      };
    }).sort((a, b) => {
      // Sort by: completed first, then by difficulty, then by progress
      if (a.isCompleted !== b.isCompleted) {
        return a.isCompleted ? -1 : 1;
      }
      if (a.difficulty !== b.difficulty) {
        return a.difficulty - b.difficulty;
      }
      return b.progress.percentage - a.progress.percentage;
    });
  }

  private mapCategoryToAchievementType(category: string): any {
    switch (category) {
      case 'milestone': return 'milestone';
      case 'streak': return 'streak';
      case 'challenge': return 'challenge';
      default: return 'milestone';
    }
  }

  private mapRarityToDifficulty(rarity: string): 1 | 2 | 3 | 4 | 5 {
    switch (rarity) {
      case 'common': return 1;
      case 'uncommon': return 2;
      case 'rare': return 3;
      case 'epic': return 4;
      case 'legendary': return 5;
      default: return 1;
    }
  }

  private estimateTimeToComplete(badge: EnhancedBadge, progress: ProgressIndicator): string {
    if (progress.isCompleted) return 'Completed';
    
    const remaining = progress.target - progress.current;
    
    switch (badge.requirements[0]?.type) {
      case 'quiz_count':
        if (remaining <= 1) return '5 minutes';
        if (remaining <= 5) return '30 minutes';
        if (remaining <= 10) return '1 hour';
        return '2+ hours';
      case 'consecutive_days':
        return `${remaining} days`;
      case 'time_spent':
        const hours = Math.ceil(remaining / 3600);
        return `${hours} hours`;
      default:
        return 'Varies';
    }
  }

  private generateHints(badge: EnhancedBadge, progress: ProgressIndicator): string[] {
    if (progress.isCompleted) return [];
    
    const hints: string[] = [];
    const req = badge.requirements[0];
    
    switch (req?.type) {
      case 'quiz_count':
        hints.push(`Complete ${progress.target - progress.current} more quizzes`);
        break;
      case 'average_score':
        hints.push(`Maintain an average score of ${req.value}% or higher`);
        break;
      case 'consecutive_days':
        hints.push('Study every day to build your streak');
        break;
      case 'perfect_scores':
        hints.push('Review material carefully before taking quizzes');
        break;
    }
    
    return hints;
  }

  // Calculate badge statistics
  public calculateBadgeStats(earnedBadges: EnhancedBadge[]): BadgeStats {
    const totalPoints = earnedBadges.reduce((sum, badge) => sum + badge.points, 0);
    const level = Math.floor(totalPoints / 100) + 1;
    const nextLevelPoints = (level * 100) - totalPoints;
    
    const badgesByRarity = {
      common: earnedBadges.filter(b => b.rarity === 'common').length,
      uncommon: earnedBadges.filter(b => b.rarity === 'uncommon').length,
      rare: earnedBadges.filter(b => b.rarity === 'rare').length,
      epic: earnedBadges.filter(b => b.rarity === 'epic').length,
      legendary: earnedBadges.filter(b => b.rarity === 'legendary').length
    };
    
    const badgesByCategory = {
      quiz: earnedBadges.filter(b => b.category === 'quiz').length,
      progress: earnedBadges.filter(b => b.category === 'progress').length,
      achievement: earnedBadges.filter(b => b.category === 'achievement').length,
      streak: earnedBadges.filter(b => b.category === 'streak').length,
      milestone: earnedBadges.filter(b => b.category === 'milestone').length,
      challenge: earnedBadges.filter(b => b.category === 'challenge').length,
      special: earnedBadges.filter(b => b.category === 'special').length
    };
    
    return {
      totalBadges: earnedBadges.length,
      totalPoints,
      badgesByRarity,
      badgesByCategory,
      completionRate: (earnedBadges.length / BADGE_CONFIGS.length) * 100,
      level,
      nextLevelPoints
    };
  }

  // Generate shareable badge
  public generateShareableBadge(
    badge: EnhancedBadge, 
    studentName: string
  ): ShareableBadge {
    const shareUrl = `${window.location.origin}/badge/${badge.id}`;
    const imageUrl = `${window.location.origin}/api/badge-image/${badge.id}`;
    
    return {
      badge,
      studentName,
      earnedDate: badge.earnedAt || new Date(),
      shareUrl,
      imageUrl,
      socialText: badge.shareableText || `I earned the ${badge.name} badge in IGCSE Music! ${badge.icon}`
    };
  }

  // Get next achievable badges
  public getNextAchievableBadges(
    progress: StudentProgress, 
    earnedBadges: EnhancedBadge[] = [],
    limit: number = 5
  ): Achievement[] {
    const achievements = this.generateAchievements(progress, earnedBadges);
    
    return achievements
      .filter(achievement => !achievement.isCompleted && achievement.isUnlocked)
      .sort((a, b) => b.progress.percentage - a.progress.percentage)
      .slice(0, limit);
  }
}

// Export singleton instance
export const badgeManager = BadgeManager.getInstance();