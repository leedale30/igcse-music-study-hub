
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
  id?: string; // Optional for now as many static quizzes don't have IDs yet
  title: string;
  abcNotation?: string; // Optional ABC notation for music quizzes
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
  role: 'student' | 'teacher' | 'admin';
  group?: string; // Grade level or class group (e.g., 'Grade 9', 'Grade 10')
  profileCompleted: boolean;
  createdAt: Date;
  lastLoginAt: Date;
}

// IGCSE Assessment Types
export interface IGCSEComponent {
  id: string;
  name: string;
  maxMarks: number;
  weighting: number; // percentage of total grade
}

export interface IGCSEAssessment {
  id: string;
  studentId: string;
  componentId: string;
  componentName: string;
  marks: number;
  maxMarks: number;
  percentage: number;
  grade: string;
  dateAssessed: Date;
  assessmentType: 'mock' | 'coursework' | 'final';
  notes?: string;
}

export interface IGCSEGradeBoundaries {
  astar: number;
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
  g: number;
  // U is anything below G
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
  igcseAssessments: IGCSEAssessment[];
  overallIGCSEGrade?: string;
  overallIGCSEPercentage?: number;
  mockRevisionPercentage?: number;
  mockAverageScore?: number;
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
  sectionId?: string;
  answers?: Record<string, any>;
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
  updatePassword: (currentPassword: string, newPassword: string) => Promise<boolean>;
  updateEmail: (newEmail: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}