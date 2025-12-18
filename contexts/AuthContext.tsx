import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '../types';
import { dataBackupManager } from '../utils/dataBackup';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [error, setError] = useState<string | null>(null);

  // Initialize demo user and load saved user
  useEffect(() => {
    // Create demo user if it doesn't exist
    const existingUsers = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
    const demoUserExists = existingUsers.some((u: any) => u.email === 'demo@student.com');

    if (!demoUserExists) {
      const demoUser = {
        id: 'demo-user-001',
        email: 'demo@student.com',
        password: 'demo123',
        name: 'Demo Student',
        role: 'student' as const,
        createdAt: new Date('2024-01-01'),
        lastLoginAt: new Date(),
        profileCompleted: true
      };
      existingUsers.push(demoUser);

      // Create demo teacher account
      const demoTeacher = {
        id: 'teacher-001',
        email: 'teacher@school.com',
        password: 'teacher123',
        name: 'Music Teacher',
        role: 'teacher' as const,
        createdAt: new Date('2024-01-01'),
        lastLoginAt: new Date(),
        profileCompleted: true
      };
      existingUsers.push(demoTeacher);

      // Create Grade 9 student accounts
      const grade9Students = [
        {
          id: 'student-emily-chan-001',
          email: 'emily.chan@school.com',
          password: 'emily123',
          name: 'Emily Chan',
          firstName: 'Emily',
          lastName: 'Chan',
          nickname: 'EMILY',
          role: 'student' as const,
          group: 'Grade 9',
          profileCompleted: true,
          createdAt: new Date('2024-01-01'),
          lastLoginAt: new Date()
        },
        {
          id: 'student-christina-wang-001',
          email: 'christina.wang@school.com',
          password: 'christina123',
          name: 'Christina Wang',
          firstName: 'Jue',
          lastName: 'Wang',
          nickname: 'CHRISTINA',
          role: 'student' as const,
          group: 'Grade 9',
          profileCompleted: true,
          createdAt: new Date('2024-01-01'),
          lastLoginAt: new Date()
        },
        {
          id: 'student-steven-zhang-001',
          email: 'steven.zhang@school.com',
          password: 'steven123',
          name: 'Steven Zhang',
          firstName: 'Jiaxin',
          lastName: 'Zhang',
          nickname: 'STEVEN',
          role: 'student' as const,
          group: 'Grade 9',
          profileCompleted: true,
          createdAt: new Date('2024-01-01'),
          lastLoginAt: new Date()
        },
        {
          id: 'student-vengie-guan-001',
          email: 'vengie.guan@school.com',
          password: 'vengie123',
          name: 'Vengie Guan',
          firstName: 'Vengie',
          lastName: 'Guan',
          nickname: 'VENGIE',
          role: 'student' as const,
          group: 'Grade 9',
          profileCompleted: true,
          createdAt: new Date('2024-01-01'),
          lastLoginAt: new Date()
        }
      ];

      // Add Grade 9 students to existing users
      existingUsers.push(...grade9Students);

      // Create Grade 10 student accounts
      const grade10Students = [
        {
          id: 'student-ziyao-dong-001',
          email: 'ziyao.dong@school.com',
          password: 'ella123',
          name: 'Ziyao Dong',
          firstName: 'Ziyao',
          lastName: 'Dong',
          nickname: 'ELLA',
          role: 'student' as const,
          group: 'Grade 10',
          profileCompleted: true,
          createdAt: new Date('2024-01-01'),
          lastLoginAt: new Date()
        },
        {
          id: 'student-yixin-huang-001',
          email: 'yixin.huang@school.com',
          password: 'azrael123',
          name: 'Yixin Huang',
          firstName: 'Yixin',
          lastName: 'Huang',
          nickname: 'AZRAEL',
          role: 'student' as const,
          group: 'Grade 10',
          profileCompleted: true,
          createdAt: new Date('2024-01-01'),
          lastLoginAt: new Date()
        },
        {
          id: 'student-yibo-liu-001',
          email: 'yibo.liu@school.com',
          password: 'jackson123',
          name: 'Yibo Liu',
          firstName: 'Yibo',
          lastName: 'Liu',
          nickname: 'JACKSON',
          role: 'student' as const,
          group: 'Grade 10',
          profileCompleted: true,
          createdAt: new Date('2024-01-01'),
          lastLoginAt: new Date()
        },
        {
          id: 'student-shengchen-ma-001',
          email: 'shengchen.ma@school.com',
          password: 'mark123',
          name: 'Shengchen Ma',
          firstName: 'Shengchen',
          lastName: 'Ma',
          nickname: 'MARK',
          role: 'student' as const,
          group: 'Grade 10',
          profileCompleted: true,
          createdAt: new Date('2024-01-01'),
          lastLoginAt: new Date()
        },
        {
          id: 'student-yucan-wang-001',
          email: 'yucan.wang@school.com',
          password: 'justin123',
          name: 'Yucan Wang',
          firstName: 'Yucan',
          lastName: 'Wang',
          nickname: 'JUSTIN',
          role: 'student' as const,
          group: 'Grade 10',
          profileCompleted: true,
          createdAt: new Date('2024-01-01'),
          lastLoginAt: new Date()
        },
        {
          id: 'student-junhao-xu-001',
          email: 'junhao.xu@school.com',
          password: 'simon123',
          name: 'Junhao Xu',
          firstName: 'Junhao',
          lastName: 'Xu',
          nickname: 'SIMON',
          role: 'student' as const,
          group: 'Grade 10',
          profileCompleted: true,
          createdAt: new Date('2024-01-01'),
          lastLoginAt: new Date()
        }
      ];

      // Add Grade 10 students to existing users
      existingUsers.push(...grade10Students);

      localStorage.setItem('igcse-music-users', JSON.stringify(existingUsers));

      // Create sample progress data for demo user
      const demoProgressExists = localStorage.getItem('igcse-progress-demo-user-001');
      if (!demoProgressExists) {
        const sampleProgress = {
          userId: 'demo-user-001',
          totalQuizzesCompleted: 3,
          totalPagesVisited: 8,
          averageQuizScore: 85.7,
          totalStudyTime: 2340, // 39 minutes
          quizResults: [
            {
              quizId: 'quiz-baroque-music-introduction',
              quizTitle: 'Baroque Music Introduction',
              score: 8,
              totalQuestions: 10,
              percentage: 80,
              completedAt: new Date('2024-12-01T10:30:00'),
              timeSpent: 420
            },
            {
              quizId: 'quiz-classical-period-overview',
              quizTitle: 'Classical Period Overview',
              score: 9,
              totalQuestions: 10,
              percentage: 90,
              completedAt: new Date('2024-12-02T14:15:00'),
              timeSpent: 380
            },
            {
              quizId: 'quiz-romantic-composers',
              quizTitle: 'Romantic Composers',
              score: 9,
              totalQuestions: 12,
              percentage: 87.5,
              completedAt: new Date('2024-12-03T16:45:00'),
              timeSpent: 520
            }
          ],
          pageProgress: [
            {
              pageId: 'baroque-introduction',
              pageTitle: 'Baroque Music Introduction',
              visitedAt: new Date('2024-12-01T10:00:00'),
              timeSpent: 600,
              completed: true
            },
            {
              pageId: 'classical-overview',
              pageTitle: 'Classical Period Overview',
              visitedAt: new Date('2024-12-02T14:00:00'),
              timeSpent: 720,
              completed: true
            }
          ],
          badges: [
            {
              id: 'first-quiz',
              name: 'First Steps',
              description: 'Completed your first quiz!',
              icon: '🎯',
              earnedAt: new Date('2024-12-01T10:30:00'),
              category: 'quiz'
            },
            {
              id: 'perfect-classical-period-overview',
              name: 'Perfect Score',
              description: 'Got 100% on Classical Period Overview!',
              icon: '⭐',
              earnedAt: new Date('2024-12-02T14:15:00'),
              category: 'achievement'
            },
            {
              id: 'high-achiever',
              name: 'High Achiever',
              description: 'Maintained an average score above 80%!',
              icon: '🌟',
              earnedAt: new Date('2024-12-03T16:45:00'),
              category: 'achievement'
            }
          ],
          lastUpdated: new Date()
        };
        localStorage.setItem('igcse-progress-demo-user-001', JSON.stringify(sampleProgress));
      }

      // Create initial progress data for Grade 9 students
      const grade9StudentIds = [
        'student-emily-chan-001',
        'student-christina-wang-001',
        'student-steven-zhang-001',
        'student-vengie-guan-001'
      ];

      grade9StudentIds.forEach(studentId => {
        const progressExists = localStorage.getItem(`igcse-progress-${studentId}`);
        if (!progressExists) {
          const initialProgress = {
            userId: studentId,
            totalQuizzesCompleted: 0,
            totalPagesVisited: 0,
            averageQuizScore: 0,
            totalStudyTime: 0,
            quizResults: [],
            pageProgress: [],
            badges: [],
            lastUpdated: new Date()
          };
          localStorage.setItem(`igcse-progress-${studentId}`, JSON.stringify(initialProgress));
        }
      });

      // Create initial progress data for Grade 10 students
      const grade10StudentIds = [
        'student-ziyao-dong-001',
        'student-yixin-huang-001',
        'student-yibo-liu-001',
        'student-shengchen-ma-001',
        'student-yucan-wang-001',
        'student-junhao-xu-001'
      ];

      grade10StudentIds.forEach(studentId => {
        const progressExists = localStorage.getItem(`igcse-progress-${studentId}`);
        if (!progressExists) {
          const initialProgress = {
            userId: studentId,
            totalQuizzesCompleted: 0,
            totalPagesVisited: 0,
            averageQuizScore: 0,
            totalStudyTime: 0,
            quizResults: [],
            pageProgress: [],
            badges: [],
            lastUpdated: new Date()
          };
          localStorage.setItem(`igcse-progress-${studentId}`, JSON.stringify(initialProgress));
        }
      });
    }

    // Load saved user
    const savedUser = localStorage.getItem('igcse-music-user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        // Convert date strings back to Date objects
        userData.createdAt = new Date(userData.createdAt);
        userData.lastLoginAt = new Date(userData.lastLoginAt);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('igcse-music-user');
      }
    }

    // Set loading to false after checking authentication
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Get existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');

      // Find user with matching email and password
      const foundUser = existingUsers.find((u: any) =>
        u.email === email && u.password === password
      );

      if (!foundUser) {
        setError('Invalid email or password');
        return false;
      }

      // Update last login time
      foundUser.lastLoginAt = new Date();

      // Update user in storage
      const updatedUsers = existingUsers.map((u: any) =>
        u.id === foundUser.id ? foundUser : u
      );
      localStorage.setItem('igcse-music-users', JSON.stringify(updatedUsers));

      // Remove password from user object for security
      const { password: _, ...userWithoutPassword } = foundUser;

      setUser(userWithoutPassword);
      localStorage.setItem('igcse-music-user', JSON.stringify(userWithoutPassword));

      return true;
    } catch (error) {
      setError('Login failed. Please try again.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Get existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');

      // Check if user already exists
      const userExists = existingUsers.some((u: any) => u.email === email);
      if (userExists) {
        setError('An account with this email already exists');
        return false;
      }

      // Create new user
      const newUser = {
        id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        email,
        password, // In a real app, this would be hashed
        name,
        role: 'student' as const,
        profileCompleted: false,
        createdAt: new Date(),
        lastLoginAt: new Date()
      };

      // Save to users list
      existingUsers.push(newUser);
      localStorage.setItem('igcse-music-users', JSON.stringify(existingUsers));

      // Remove password from user object for security
      const { password: _, ...userWithoutPassword } = newUser;

      setUser(userWithoutPassword);
      localStorage.setItem('igcse-music-user', JSON.stringify(userWithoutPassword));

      return true;
    } catch (error) {
      setError('Signup failed. Please try again.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (profileData: Partial<User>): Promise<boolean> => {
    if (!user) return false;

    setIsLoading(true);
    setError(null);

    try {
      // Update user object
      const updatedUser = { ...user, ...profileData };

      // Update in users list
      const existingUsers = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
      const updatedUsers = existingUsers.map((u: any) =>
        u.id === user.id ? { ...u, ...profileData } : u
      );
      localStorage.setItem('igcse-music-users', JSON.stringify(updatedUsers));

      // Update current user
      setUser(updatedUser);
      localStorage.setItem('igcse-music-user', JSON.stringify(updatedUser));

      // Create backup after profile update
      if (user.role === 'student') {
        dataBackupManager.createStudentBackup(user.id);
      }

      return true;
    } catch (error) {
      setError('Failed to update profile. Please try again.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const updatePassword = async (currentPassword: string, newPassword: string): Promise<boolean> => {
    if (!user) return false;

    setIsLoading(true);
    setError(null);

    try {
      // Get existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');

      // Find current user and verify password
      const currentUser = existingUsers.find((u: any) => u.id === user.id);
      if (!currentUser || currentUser.password !== currentPassword) {
        setError('Current password is incorrect');
        return false;
      }

      // Update password in users list
      const updatedUsers = existingUsers.map((u: any) =>
        u.id === user.id ? { ...u, password: newPassword } : u
      );
      localStorage.setItem('igcse-music-users', JSON.stringify(updatedUsers));

      // Create backup after password update
      if (user.role === 'student') {
        dataBackupManager.createStudentBackup(user.id);
      }

      return true;
    } catch (error) {
      setError('Failed to update password. Please try again.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('igcse-music-user');
    setError(null);
  };

  const value: AuthContextType = {
    user,
    login,
    signup,
    updateProfile,
    updatePassword,
    logout,
    isLoading,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};