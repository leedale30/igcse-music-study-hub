import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { StudentProgress, QuizResult, PageProgress, Badge } from '../types';
import { EnhancedBadge, Achievement, BadgeStats } from '../types/badges';
import { useAuth } from './AuthContext';
import { badgeManager } from '../utils/badgeManager';
import { useRPG } from './RPGContext';
import { dataBackupManager } from '../utils/dataBackup';
import { supabase } from '../src/lib/supabase';

interface ProgressContextType {
  progress: StudentProgress | null;
  addQuizResult: (result: Omit<QuizResult, 'completedAt'>) => void;
  addPageProgress: (pageId: string, pageTitle: string, timeSpent: number, completed?: boolean) => void;
  awardBadge: (badge: Omit<Badge, 'earnedAt'>) => void;
  getQuizHistory: () => QuizResult[];
  getAverageScore: () => number;
  getTotalStudyTime: () => string;
  getBadgesByCategory: (category: Badge['category']) => Badge[];
  resetProgress: () => void;
  // Enhanced badge system
  enhancedBadges: EnhancedBadge[];
  achievements: Achievement[];
  badgeStats: BadgeStats | null;
  newBadgeIds: string[];
  checkForNewAchievements: () => void;
  markBadgesAsSeen: (badgeIds: string[]) => void;
  getNextAchievableBadges: (limit?: number) => Achievement[];
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

interface ProgressProviderProps {
  children: ReactNode;
}

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ children }) => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<StudentProgress | null>(null);
  const [enhancedBadges, setEnhancedBadges] = useState<EnhancedBadge[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [badgeStats, setBadgeStats] = useState<BadgeStats | null>(null);
  const [newBadgeIds, setNewBadgeIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Get RPG context (will be null if RPG is not enabled)
  let rpgContext: any = null;
  try {
    rpgContext = useRPG();
  } catch {
    // RPG context not available, continue without RPG integration
  }

  // Load progress when user changes
  useEffect(() => {
    if (user) {
      loadUserProgress(user.id);
      loadEnhancedBadges(user.id);
    } else {
      setProgress(null);
      setEnhancedBadges([]);
      setAchievements([]);
      setBadgeStats(null);
      setNewBadgeIds([]);
    }
  }, [user]);

  const loadEnhancedBadges = (userId: string) => {
    const savedBadges = localStorage.getItem(`enhanced-badges-${userId}`);
    if (savedBadges) {
      try {
        const badges = JSON.parse(savedBadges).map((badge: any) => ({
          ...badge,
          earnedAt: new Date(badge.earnedAt)
        }));
        setEnhancedBadges(badges);
      } catch (error) {
        console.error('Error loading enhanced badges:', error);
        setEnhancedBadges([]);
      }
    } else {
      setEnhancedBadges([]);
    }
  };

  // Check for new achievements when progress changes
  useEffect(() => {
    if (progress && user) {
      checkForNewAchievements();
    }
  }, [progress?.totalQuizzesCompleted, progress?.averageQuizScore, progress?.totalStudyTime]);

  const loadUserProgress = async (userId: string) => {
    try {
      setLoading(true);
      // Fetch progress from Supabase
      const { data: progressData, error } = await supabase
        .from('progress')
        .select('*')
        .eq('user_id', userId);

      if (error) throw error;

      // Transform DB data to frontend structure
      const quizResults: QuizResult[] = progressData?.map(item => ({
        quizId: item.quiz_id,
        quizTitle: item.answers?.quizTitle || `Quiz ${item.quiz_id}`, // Fallback if title not saved
        sectionId: item.section,
        score: item.score,
        totalQuestions: item.total_questions,
        percentage: item.percentage,
        timeSpent: item.time_taken || 0,
        completedAt: new Date(item.completed_at),
        answers: item.answers
      })) || [];

      // Calculate aggregated stats
      const totalQuizzes = quizResults.length;
      const totalTime = quizResults.reduce((acc, curr) => acc + curr.timeSpent, 0);
      const avgScore = totalQuizzes > 0
        ? quizResults.reduce((acc, curr) => acc + curr.percentage, 0) / totalQuizzes
        : 0;

      // Initialize progress object
      const newProgress: StudentProgress = {
        userId,
        totalQuizzesCompleted: totalQuizzes,
        totalPagesVisited: 0, // Page visits not yet in DB, keeping 0 for now or fetch from another table if added
        averageQuizScore: avgScore,
        totalStudyTime: totalTime,
        quizResults: quizResults,
        pageProgress: [], // Page progress not migrated yet
        badges: [], // Badges stored separately or locally for now
        lastUpdated: new Date()
      };

      setProgress(newProgress);
    } catch (error) {
      console.error('Error loading progress from Supabase:', error);
      // Fallback to local storage or empty initialization handled here if needed
      initializeProgress(userId);
    } finally {
      setLoading(false);
    }
  };

  const initializeProgress = (userId: string) => {
    const newProgress: StudentProgress = {
      userId,
      totalQuizzesCompleted: 0,
      totalPagesVisited: 0,
      averageQuizScore: 0,
      totalStudyTime: 0,
      quizResults: [],
      pageProgress: [],
      badges: [],
      lastUpdated: new Date()
    };
    setProgress(newProgress);
    // No need to save to DB on init, wait for first activity
  };

  const saveProgress = async (progressData: StudentProgress) => {
    // This function is now mainly a placeholder or could be used to save non-quiz data if we add tables
    // Quiz results are saved individually in addQuizResult
  };

  const addQuizResult = async (result: Omit<QuizResult, 'completedAt'>) => {
    if (!progress || !user) return;

    const completedAt = new Date();
    const newResult: QuizResult = {
      ...result,
      completedAt
    };

    // Optimistic update
    const updatedQuizResults = [...progress.quizResults, newResult];
    const totalQuizzes = updatedQuizResults.length;
    const totalTime = progress.totalStudyTime + result.timeSpent;
    const avgScore = updatedQuizResults.reduce((acc, curr) => acc + curr.percentage, 0) / totalQuizzes;

    const updatedProgress: StudentProgress = {
      ...progress,
      totalQuizzesCompleted: totalQuizzes,
      quizResults: updatedQuizResults,
      averageQuizScore: avgScore,
      totalStudyTime: totalTime,
      lastUpdated: new Date()
    };

    setProgress(updatedProgress);

    // Save to Supabase
    try {
      const payload = {
        user_id: user.id,
        quiz_id: result.quizId,
        section: result.sectionId || 'general',
        score: result.score,
        total_questions: result.totalQuestions,
        percentage: result.percentage,
        time_taken: result.timeSpent,
        completed_at: completedAt.toISOString(),
        answers: {
          ...result.answers,
          quizTitle: result.quizTitle // Store title in JSONB for retrieval
        }
      };

      const { error } = await supabase
        .from('progress')
        .upsert(payload, { onConflict: 'user_id, section, quiz_id' });

      if (error) throw error;

    } catch (error) {
      console.error('Error saving quiz result to Supabase:', error);
      // Could add logic to queue retry or show error to user
    }

    // Create backup after quiz completion (if using local backups, otherwise remove)
    if (user?.role === 'student') {
      dataBackupManager.createStudentBackup(user.id);
    }

    // Check for new badges (legacy system)
    checkForNewBadges(updatedProgress);

    // Check for new achievements (enhanced system)
    setTimeout(() => {
      const newBadges = badgeManager.checkForNewBadges(updatedProgress, enhancedBadges, { latestQuiz: newResult });
      if (newBadges.length > 0) {
        setEnhancedBadges(prev => {
          const updated = [...prev, ...newBadges];
          localStorage.setItem(`enhanced-badges-${user?.id}`, JSON.stringify(updated));
          return updated;
        });
        setNewBadgeIds(prev => [...prev, ...newBadges.map(b => b.id)]);
      }
    }, 100);

    // Process quiz result through RPG system if enabled
    if (rpgContext?.isRPGEnabled) {
      try {
        rpgContext.processQuizResult(newResult);
      } catch (error) {
        console.error('Error processing quiz result in RPG system:', error);
      }
    }
  };

  const addPageProgress = (pageId: string, pageTitle: string, timeSpent: number, completed = true) => {
    if (!progress || !user) return;

    // Check if page already visited
    const existingPageIndex = progress.pageProgress.findIndex(p => p.pageId === pageId);

    let updatedPageProgress: PageProgress[];
    let totalPagesVisited = progress.totalPagesVisited;

    if (existingPageIndex >= 0) {
      // Update existing page progress
      updatedPageProgress = progress.pageProgress.map((page, index) =>
        index === existingPageIndex
          ? { ...page, visitedAt: new Date(), timeSpent: page.timeSpent + timeSpent, completed }
          : page
      );
    } else {
      // Add new page progress
      const newPageProgress: PageProgress = {
        pageId,
        pageTitle,
        visitedAt: new Date(),
        timeSpent,
        completed
      };
      updatedPageProgress = [...progress.pageProgress, newPageProgress];
      totalPagesVisited += 1;
    }

    const updatedProgress: StudentProgress = {
      ...progress,
      totalPagesVisited,
      pageProgress: updatedPageProgress,
      totalStudyTime: progress.totalStudyTime + timeSpent,
      lastUpdated: new Date()
    };

    setProgress(updatedProgress);

    // Note: Page progress saving to Supabase is not yet implemented in the schema
    // We could add a 'study_sessions' table insert here if desired, 
    // or just leave it local/in-memory for now if critical tracking isn't needed.
    // For now, retaining local update logic but not saving to DB to avoid errors.
    saveProgress(updatedProgress);
  };

  const awardBadge = (badge: Omit<Badge, 'earnedAt'>) => {
    if (!progress || !user) return;

    // Check if badge already earned
    const badgeExists = progress.badges.some(b => b.id === badge.id);
    if (badgeExists) return;

    const newBadge: Badge = {
      ...badge,
      earnedAt: new Date()
    };

    const updatedProgress: StudentProgress = {
      ...progress,
      badges: [...progress.badges, newBadge],
      lastUpdated: new Date()
    };

    setProgress(updatedProgress);
    saveProgress(updatedProgress);

    // TODO: persist badges to 'achievements' table in Supabase
  };

  const checkForNewBadges = (currentProgress: StudentProgress) => {
    // First Quiz Badge
    if (currentProgress.totalQuizzesCompleted === 1) {
      awardBadge({
        id: 'first-quiz',
        name: 'First Steps',
        description: 'Completed your first quiz!',
        icon: '🎯',
        category: 'quiz'
      });
    }

    // Perfect Score Badge
    const latestQuiz = currentProgress.quizResults[currentProgress.quizResults.length - 1];
    if (latestQuiz && latestQuiz.percentage === 100) {
      awardBadge({
        id: `perfect-${latestQuiz.quizId}`,
        name: 'Perfect Score',
        description: `Got 100% on ${latestQuiz.quizTitle}!`,
        icon: '⭐',
        category: 'achievement'
      });
    }

    // Quiz Master Badge (10 quizzes)
    if (currentProgress.totalQuizzesCompleted === 10) {
      awardBadge({
        id: 'quiz-master',
        name: 'Quiz Master',
        description: 'Completed 10 quizzes!',
        icon: '🏆',
        category: 'achievement'
      });
    }

    // High Achiever Badge (average score > 80%)
    if (currentProgress.averageQuizScore > 80 && currentProgress.totalQuizzesCompleted >= 5) {
      awardBadge({
        id: 'high-achiever',
        name: 'High Achiever',
        description: 'Maintained an average score above 80%!',
        icon: '🌟',
        category: 'achievement'
      });
    }
  };

  const getQuizHistory = (): QuizResult[] => {
    return progress?.quizResults || [];
  };

  const getAverageScore = (): number => {
    // Use the calculated average from state which is based on latest results from DB
    return progress?.averageQuizScore || 0;
  };

  const getTotalStudyTime = (): string => {
    if (!progress) return '0 minutes';

    const totalMinutes = Math.floor(progress.totalStudyTime / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes} minutes`;
  };

  const getBadgesByCategory = (category: Badge['category']): Badge[] => {
    return progress?.badges.filter(badge => badge.category === category) || [];
  };

  const resetProgress = async () => {
    if (!user) return;

    // Clear local
    localStorage.removeItem(`igcse-progress-${user.id}`);

    // Clear DB (optional, but 'reset' implies wiping data)
    try {
      await supabase.from('progress').delete().eq('user_id', user.id);
    } catch (e) {
      console.error('Error resetting progress in DB:', e);
    }

    initializeProgress(user.id);
  };

  // Enhanced badge system methods
  const checkForNewAchievements = () => {
    if (!progress) return;

    const newBadges = badgeManager.checkForNewBadges(progress, enhancedBadges);
    if (newBadges.length > 0) {
      setEnhancedBadges(prev => [...prev, ...newBadges]);
      setNewBadgeIds(prev => [...prev, ...newBadges.map(b => b.id)]);

      // Save enhanced badges to localStorage
      localStorage.setItem(`enhanced-badges-${user?.id}`, JSON.stringify([...enhancedBadges, ...newBadges]));
    }

    // Update achievements and stats
    const updatedAchievements = badgeManager.generateAchievements(progress, [...enhancedBadges, ...newBadges]);
    const updatedStats = badgeManager.calculateBadgeStats([...enhancedBadges, ...newBadges]);

    setAchievements(updatedAchievements);
    setBadgeStats(updatedStats);
  };

  const markBadgesAsSeen = (badgeIds: string[]) => {
    setNewBadgeIds(prev => prev.filter(id => !badgeIds.includes(id)));
  };

  const getNextAchievableBadges = (limit: number = 5): Achievement[] => {
    if (!progress) return [];
    return badgeManager.getNextAchievableBadges(progress, enhancedBadges, limit);
  };

  const value: ProgressContextType = {
    progress,
    addQuizResult,
    addPageProgress,
    awardBadge,
    getQuizHistory,
    getAverageScore,
    getTotalStudyTime,
    getBadgesByCategory,
    resetProgress,
    enhancedBadges,
    achievements,
    badgeStats,
    newBadgeIds,
    checkForNewAchievements,
    markBadgesAsSeen,
    getNextAchievableBadges
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};