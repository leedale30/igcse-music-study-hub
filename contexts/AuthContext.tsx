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
      console.error('Supabase is not configured. Authentication will not work.');
      setIsLoading(false);
      return;
    }

    // Timeout wrapper to prevent infinite loading
    const withTimeout = <T,>(promise: Promise<T>, timeoutMs: number): Promise<T> => {
      return Promise.race([
        promise,
        new Promise<T>((_, reject) =>
          setTimeout(() => reject(new Error('Request timed out')), timeoutMs)
        )
      ]);
    };

    // Get initial session with timeout
    const initializeSession = async () => {
      try {
        const { data: { session } } = await withTimeout(
          supabase.auth.getSession(),
          10000 // 10 second timeout
        );

        if (session?.user) {
          await withTimeout(fetchUserProfile(session.user.id), 10000);
        } else {
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Session initialization failed or timed out:', err);
        // On timeout/error, allow user to access login page
        setIsLoading(false);
      }
    };

    initializeSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event);
      if (session?.user) {
        try {
          await withTimeout(fetchUserProfile(session.user.id), 10000);
        } catch (err) {
          console.error('Profile fetch timed out:', err);
          setIsLoading(false);
        }
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

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      if (!isSupabaseConfigured) {
        setError('Authentication service is not configured');
        return false;
      }

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
      if (!isSupabaseConfigured) {
        setError('Authentication service is not configured');
        return false;
      }

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
      if (!isSupabaseConfigured) {
        setError('Authentication service is not configured');
        return false;
      }

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
      if (!isSupabaseConfigured) {
        setError('Authentication service is not configured');
        return false;
      }

      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) throw error;
      return true;
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
    // Clearing local storage user data just in case
    localStorage.removeItem('igcse-music-user');
    localStorage.removeItem('sb-access-token'); // Clear Supabase token if stored manually (though Supabase client handles this)
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