import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
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
        createdAt: new Date('2024-01-01'),
        lastLoginAt: new Date()
      };
      existingUsers.push(demoUser);
      localStorage.setItem('igcse-music-users', JSON.stringify(existingUsers));
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

  const logout = () => {
    setUser(null);
    localStorage.removeItem('igcse-music-user');
    setError(null);
  };

  const value: AuthContextType = {
    user,
    login,
    signup,
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