import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '../types';
import { supabase, isSupabaseConfigured } from '../src/lib/supabase';
import { dataBackupManager } from '../utils/dataBackup';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize auth state
  useEffect(() => {
    if (!isSupabaseConfigured) {
      // Fallback to localStorage for demo/development
      console.log('Supabase not configured, using localStorage fallback');
      initializeLocalAuth();
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        fetchUserProfile(session.user.id);
      } else {
        setIsLoading(false);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event);
      if (session?.user) {
        await fetchUserProfile(session.user.id);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch user profile from Supabase
  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;

      if (data) {
        const userProfile: User = {
          id: data.id,
          email: data.email,
          name: data.name,
          firstName: data.first_name,
          lastName: data.last_name,
          nickname: data.nickname,
          role: data.role as 'student' | 'teacher' | 'admin',
          group: data.group_name,
          profileCompleted: data.profile_completed,
          createdAt: new Date(data.created_at),
          lastLoginAt: new Date(data.last_login_at)
        };
        setUser(userProfile);
      }
    } catch (err) {
      console.error('Error fetching user profile:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Initialize localStorage-based auth (fallback)
  const initializeLocalAuth = () => {
    // Create demo users if they don't exist
    const existingUsers = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
    if (!existingUsers.some((u: any) => u.email === 'demo@student.com')) {
      const demoUsers = [
        {
          id: 'demo-user-001',
          email: 'demo@student.com',
          password: 'demo123',
          name: 'Demo Student',
          role: 'student',
          createdAt: new Date(),
          lastLoginAt: new Date(),
          profileCompleted: true
        },
        {
          id: 'teacher-001',
          email: 'teacher@school.com',
          password: 'teacher123',
          name: 'Music Teacher',
          role: 'teacher',
          createdAt: new Date(),
          lastLoginAt: new Date(),
          profileCompleted: true
        },
        {
          id: 'admin-001',
          email: 'admin@school.com',
          password: 'admin123',
          name: 'Administrator',
          role: 'admin',
          createdAt: new Date(),
          lastLoginAt: new Date(),
          profileCompleted: true
        }
      ];
      localStorage.setItem('igcse-music-users', JSON.stringify([...existingUsers, ...demoUsers]));
    }

    // Check for saved session
    const savedUser = localStorage.getItem('igcse-music-user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        userData.createdAt = new Date(userData.createdAt);
        userData.lastLoginAt = new Date(userData.lastLoginAt);
        setUser(userData);
      } catch (e) {
        localStorage.removeItem('igcse-music-user');
      }
    }
    setIsLoading(false);
  };

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      if (isSupabaseConfigured) {
        // Supabase login
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (error) {
          setError(error.message);
          return false;
        }

        if (data.user) {
          await fetchUserProfile(data.user.id);

          // Update last login time
          await supabase
            .from('profiles')
            .update({ last_login_at: new Date().toISOString() })
            .eq('id', data.user.id);

          return true;
        }
        return false;
      } else {
        // localStorage fallback
        await new Promise(resolve => setTimeout(resolve, 500));
        const existingUsers = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
        const foundUser = existingUsers.find((u: any) => u.email === email && u.password === password);

        if (!foundUser) {
          setError('Invalid email or password');
          return false;
        }

        foundUser.lastLoginAt = new Date();
        const { password: _, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem('igcse-music-user', JSON.stringify(userWithoutPassword));
        return true;
      }
    } catch (err: any) {
      setError(err.message || 'Login failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Signup function
  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      if (isSupabaseConfigured) {
        // Supabase signup
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name: name,
              role: 'student'
            }
          }
        });

        if (error) {
          setError(error.message);
          return false;
        }

        if (data.user) {
          // Profile is auto-created by database trigger
          await fetchUserProfile(data.user.id);
          return true;
        }
        return false;
      } else {
        // localStorage fallback
        await new Promise(resolve => setTimeout(resolve, 500));
        const existingUsers = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');

        if (existingUsers.some((u: any) => u.email === email)) {
          setError('Email already exists');
          return false;
        }

        const newUser = {
          id: `user_${Date.now()}`,
          email,
          password,
          name,
          role: 'student' as const,
          profileCompleted: false,
          createdAt: new Date(),
          lastLoginAt: new Date()
        };

        existingUsers.push(newUser);
        localStorage.setItem('igcse-music-users', JSON.stringify(existingUsers));

        const { password: _, ...userWithoutPassword } = newUser;
        setUser(userWithoutPassword);
        localStorage.setItem('igcse-music-user', JSON.stringify(userWithoutPassword));
        return true;
      }
    } catch (err: any) {
      setError(err.message || 'Signup failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Update profile
  const updateProfile = async (profileData: Partial<User>): Promise<boolean> => {
    if (!user) return false;
    setIsLoading(true);
    setError(null);

    try {
      if (isSupabaseConfigured) {
        const updateData: Record<string, any> = {};
        if (profileData.name) updateData.name = profileData.name;
        if (profileData.firstName) updateData.first_name = profileData.firstName;
        if (profileData.lastName) updateData.last_name = profileData.lastName;
        if (profileData.nickname) updateData.nickname = profileData.nickname;
        if (profileData.group) updateData.group_name = profileData.group;
        if (profileData.profileCompleted !== undefined) updateData.profile_completed = profileData.profileCompleted;

        const { error } = await supabase
          .from('profiles')
          .update(updateData)
          .eq('id', user.id);

        if (error) throw error;

        await fetchUserProfile(user.id);
        return true;
      } else {
        // localStorage fallback
        const updatedUser = { ...user, ...profileData };
        setUser(updatedUser);
        localStorage.setItem('igcse-music-user', JSON.stringify(updatedUser));
        return true;
      }
    } catch (err: any) {
      setError(err.message || 'Update failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Update password
  const updatePassword = async (currentPassword: string, newPassword: string): Promise<boolean> => {
    if (!user) return false;
    setIsLoading(true);
    setError(null);

    try {
      if (isSupabaseConfigured) {
        const { error } = await supabase.auth.updateUser({
          password: newPassword
        });

        if (error) throw error;
        return true;
      } else {
        // localStorage fallback - verify current password first
        const existingUsers = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
        const currentUser = existingUsers.find((u: any) => u.id === user.id);

        if (!currentUser || currentUser.password !== currentPassword) {
          setError('Current password is incorrect');
          return false;
        }

        const updatedUsers = existingUsers.map((u: any) =>
          u.id === user.id ? { ...u, password: newPassword } : u
        );
        localStorage.setItem('igcse-music-users', JSON.stringify(updatedUsers));
        return true;
      }
    } catch (err: any) {
      setError(err.message || 'Password update failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout
  const logout = async () => {
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
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