import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { StudentProgress, QuizResult, PageProgress, Badge } from '../types';
import { useAuth } from './AuthContext';

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
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

interface ProgressProviderProps {
  children: ReactNode;
}

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ children }) => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<StudentProgress | null>(null);

  // Load progress when user changes
  useEffect(() => {
    if (user) {
      loadUserProgress(user.id);
    } else {
      setProgress(null);
    }
  }, [user]);

  const loadUserProgress = (userId: string) => {
    const savedProgress = localStorage.getItem(`igcse-progress-${userId}`);
    if (savedProgress) {
      try {
        const progressData = JSON.parse(savedProgress);
        // Convert date strings back to Date objects
        progressData.lastUpdated = new Date(progressData.lastUpdated);
        progressData.quizResults = progressData.quizResults.map((result: any) => ({
          ...result,
          completedAt: new Date(result.completedAt)
        }));
        progressData.pageProgress = progressData.pageProgress.map((page: any) => ({
          ...page,
          visitedAt: new Date(page.visitedAt)
        }));
        progressData.badges = progressData.badges.map((badge: any) => ({
          ...badge,
          earnedAt: new Date(badge.earnedAt)
        }));
        setProgress(progressData);
      } catch (error) {
        console.error('Error parsing progress data:', error);
        initializeProgress(userId);
      }
    } else {
      initializeProgress(userId);
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
    saveProgress(newProgress);
  };

  const saveProgress = (progressData: StudentProgress) => {
    if (progressData.userId) {
      localStorage.setItem(`igcse-progress-${progressData.userId}`, JSON.stringify(progressData));
    }
  };

  const addQuizResult = (result: Omit<QuizResult, 'completedAt'>) => {
    if (!progress || !user) return;

    const newResult: QuizResult = {
      ...result,
      completedAt: new Date()
    };

    const updatedProgress: StudentProgress = {
      ...progress,
      totalQuizzesCompleted: progress.totalQuizzesCompleted + 1,
      quizResults: [...progress.quizResults, newResult],
      lastUpdated: new Date()
    };

    // Recalculate average score
    const totalScore = updatedProgress.quizResults.reduce((sum, quiz) => sum + quiz.percentage, 0);
    updatedProgress.averageQuizScore = totalScore / updatedProgress.quizResults.length;

    // Add total time spent on quiz
    updatedProgress.totalStudyTime += result.timeSpent;

    setProgress(updatedProgress);
    saveProgress(updatedProgress);

    // Check for new badges
    checkForNewBadges(updatedProgress);
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

  const resetProgress = () => {
    if (!user) return;
    localStorage.removeItem(`igcse-progress-${user.id}`);
    initializeProgress(user.id);
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
    resetProgress
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