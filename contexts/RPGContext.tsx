import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback, useMemo } from 'react';
import { RPGGameState, RPGCharacter, CharacterClass, RPGNotification } from '../types/rpg';
import { StudentProgress, QuizResult } from '../types';
import { useAuth } from './AuthContext';
import { rpgManager } from '../utils/rpgManager';

interface RPGContextType {
  gameState: RPGGameState | null;
  isRPGEnabled: boolean;
  notifications: RPGNotification[];
  enableRPG: (characterClass: CharacterClass) => Promise<boolean>;
  disableRPG: () => void;
  processQuizResult: (quizResult: QuizResult) => void;
  dismissNotification: (notificationId: string) => void;
  clearAllNotifications: () => void;
  getCharacter: () => RPGCharacter | null;
  isInitialized: boolean;
}

const RPGContext = createContext<RPGContextType | undefined>(undefined);

interface RPGProviderProps {
  children: ReactNode;
}

export const RPGProvider: React.FC<RPGProviderProps> = ({ children }) => {
  const { user } = useAuth();
  const [gameState, setGameState] = useState<RPGGameState | null>(null);
  const [isRPGEnabled, setIsRPGEnabled] = useState(false);
  const [notifications, setNotifications] = useState<RPGNotification[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  const loadRPGState = useCallback((userId: string) => {
    try {
      // Check if RPG is enabled for this user
      const rpgEnabled = localStorage.getItem(`rpg-enabled-${userId}`);
      if (rpgEnabled === 'true') {
        const existingState = rpgManager.loadGameState(userId);
        if (existingState) {
          setGameState(existingState);
          setIsRPGEnabled(true);
        } else {
          // RPG was enabled but no state found, reset
          setIsRPGEnabled(false);
          localStorage.removeItem(`rpg-enabled-${userId}`);
        }
      }
    } catch (error) {
      console.error('Error loading RPG state:', error);
      setIsRPGEnabled(false);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  const saveRPGState = useCallback((state: RPGGameState) => {
    if (user) {
      try {
        localStorage.setItem(`rpg-enabled-${user.id}`, 'true');
        // The rpgManager handles saving the actual game state
      } catch (error) {
        console.error('Error saving RPG state:', error);
      }
    }
  }, [user]);

  // Load RPG state when user changes
  useEffect(() => {
    if (user) {
      loadRPGState(user.id);
    } else {
      setGameState(null);
      setIsRPGEnabled(false);
      setNotifications([]);
      setIsInitialized(false);
    }
  }, [user, loadRPGState]);

  // Set up RPG manager event listeners
  useEffect(() => {
    const handleNotification = (notification: RPGNotification) => {
      if (gameState?.settings.notifications) {
        setNotifications(prev => [...prev, notification]);
      }
    };

    const handleStateChange = () => {
      const newState = rpgManager.getGameState();
      if (newState) {
        setGameState({ ...newState });
        saveRPGState(newState);
      }
    };

    const handleLevelUp = (data: any) => {
      handleStateChange();
      // Additional level up effects could go here
    };

    const handleItemFound = (data: any) => {
      handleStateChange();
      // Additional item found effects could go here
    };

    const handleCharacterDeath = (data: any) => {
      handleStateChange();
      // Handle death effects
      if (data.permadeath) {
        // Show permadeath modal or effects
      }
    };

    // Register event listeners
    rpgManager.on('notification', handleNotification);
    rpgManager.on('levelUp', handleLevelUp);
    rpgManager.on('experienceGained', handleStateChange);
    rpgManager.on('goldGained', handleStateChange);
    rpgManager.on('itemFound', handleItemFound);
    rpgManager.on('challengeCompleted', handleStateChange);
    rpgManager.on('characterDeath', handleCharacterDeath);
    rpgManager.on('newRunStarted', handleStateChange);

    return () => {
      // Cleanup event listeners
      rpgManager.off('notification', handleNotification);
      rpgManager.off('levelUp', handleLevelUp);
      rpgManager.off('experienceGained', handleStateChange);
      rpgManager.off('goldGained', handleStateChange);
      rpgManager.off('itemFound', handleItemFound);
      rpgManager.off('challengeCompleted', handleStateChange);
      rpgManager.off('characterDeath', handleCharacterDeath);
      rpgManager.off('newRunStarted', handleStateChange);
    };
  }, [gameState?.settings.notifications, saveRPGState]);

  const enableRPG = useCallback(async (characterClass: CharacterClass): Promise<boolean> => {
    if (!user) return false;

    try {
      const newGameState = rpgManager.initializeGameState(user.id, characterClass);
      setGameState(newGameState);
      setIsRPGEnabled(true);
      saveRPGState(newGameState);
      
      // Add welcome notification
      const welcomeNotification: RPGNotification = {
        id: `welcome-${Date.now()}`,
        type: 'achievement',
        title: 'Welcome to IGCSE Music RPG!',
        message: `Your ${newGameState.character.class} character has been created. Begin your musical adventure!`,
        icon: '🎭',
        duration: 6000,
        createdAt: new Date()
      };
      
      setTimeout(() => {
        rpgManager.addNotification(welcomeNotification);
      }, 1000);
      
      return true;
    } catch (error) {
      console.error('Error enabling RPG:', error);
      return false;
    }
  }, [user, saveRPGState]);

  const disableRPG = useCallback(() => {
    if (!user) return;

    try {
      setGameState(null);
      setIsRPGEnabled(false);
      setNotifications([]);
      
      // Clear stored data
      localStorage.removeItem(`rpg-enabled-${user.id}`);
      localStorage.removeItem(`rpg-game-state-${user.id}`);
    } catch (error) {
      console.error('Error disabling RPG:', error);
    }
  }, [user]);

  const processQuizResult = useCallback((quizResult: QuizResult) => {
    if (!isRPGEnabled || !gameState) return;

    try {
      rpgManager.processQuizResult(quizResult);
      // The state will be updated via event listeners
    } catch (error) {
      console.error('Error processing quiz result in RPG:', error);
    }
  }, [isRPGEnabled, gameState]);

  const dismissNotification = useCallback((notificationId: string) => {
    rpgManager.removeNotification(notificationId);
    setNotifications(prev => prev.filter(n => n.id !== notificationId));
  }, []);

  const clearAllNotifications = useCallback(() => {
    notifications.forEach(notification => {
      rpgManager.removeNotification(notification.id);
    });
    setNotifications([]);
  }, [notifications]);

  const getCharacter = useCallback((): RPGCharacter | null => {
    return gameState?.character || null;
  }, [gameState?.character]);

  const value: RPGContextType = useMemo(() => ({
    gameState,
    isRPGEnabled,
    notifications,
    enableRPG,
    disableRPG,
    processQuizResult,
    dismissNotification,
    clearAllNotifications,
    getCharacter,
    isInitialized
  }), [
    gameState,
    isRPGEnabled,
    notifications,
    enableRPG,
    disableRPG,
    processQuizResult,
    dismissNotification,
    clearAllNotifications,
    getCharacter,
    isInitialized
  ]);

  return (
    <RPGContext.Provider value={value}>
      {children}
    </RPGContext.Provider>
  );
};

export const useRPG = (): RPGContextType => {
  const context = useContext(RPGContext);
  if (context === undefined) {
    throw new Error('useRPG must be used within an RPGProvider');
  }
  return context;
};
