
export interface AnswerOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  options: AnswerOption[];
  correctAnswerId: string;
  explanation?: string; // Optional explanation for the correct answer
}

export interface Quiz {
  title: string;
  questions: Question[];
}

export interface SyllabusItem {
  id: string;
  title: string;
  title_zh?: string;
  path: string;
  content?: string; 
  content_zh?: string;
  longDescription?: string; 
  longDescription_zh?: string;
  imageUrl?: string; 
  imageAlt?: string; 
  children?: SyllabusItem[];
  isExternal?: boolean; 
  isTerm?: boolean; 
  quiz?: Quiz; // Add optional quiz property
  audioSources?: { url: string; type: string }[];
  audioSources_zh?: { url: string; type: string }[];
  audioCredit?: string;
  audioCredit_zh?: string;
}

export interface ProcessedSyllabusItem extends SyllabusItem {
  level: number;
}

// User Authentication Types
export interface User {
  id: string;
  email: string;
  name: string;
  firstName?: string;
  lastName?: string;
  nickname?: string;
  role: 'student' | 'teacher';
  profileCompleted: boolean;
  createdAt: Date;
  lastLoginAt: Date;
}

// Admin/Teacher Types
export interface StudentSummary {
  user: User;
  progress: StudentProgress;
  lastActivity: Date;
  totalQuizzes: number;
  averageScore: number;
  totalStudyTime: string;
  recentQuizzes: QuizResult[];
  badges: Badge[];
}

// Progress Tracking Types
export interface QuizResult {
  quizId: string;
  quizTitle: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  completedAt: Date;
  timeSpent: number; // in seconds
}

export interface PageProgress {
  pageId: string;
  pageTitle: string;
  visitedAt: Date;
  timeSpent: number; // in seconds
  completed: boolean;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: Date;
  category: 'quiz' | 'progress' | 'achievement';
}

export interface StudentProgress {
  userId: string;
  totalQuizzesCompleted: number;
  totalPagesVisited: number;
  averageQuizScore: number;
  totalStudyTime: number; // in seconds
  quizResults: QuizResult[];
  pageProgress: PageProgress[];
  badges: Badge[];
  lastUpdated: Date;
}

// Authentication Context Types
export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  updateProfile: (profileData: Partial<User>) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}