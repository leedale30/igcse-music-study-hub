import React, { useState, useEffect } from 'react';
import { RPGCharacter, RPGGameState, CharacterClass, Item, RPGChallenge, RPGNotification } from '../types/rpg';
import { rpgManager } from '../utils/rpgManager';
import { getCharacterProfile, equipItem, unequipItem } from '../services/rpgService';
import { InventoryTab } from './rpg/InventoryTab';
import { CHARACTER_CLASSES, RPG_ITEMS } from '../utils/rpgConfig';

interface RPGDashboardProps {
  userId: string;
  onClose?: () => void;
}

const RPGDashboard: React.FC<RPGDashboardProps> = ({ userId, onClose }) => {
  const [gameState, setGameState] = useState<RPGGameState | null>(null);
  const [activeTab, setActiveTab] = useState<'character' | 'inventory' | 'challenges' | 'settings'>('character');
  const [notifications, setNotifications] = useState<RPGNotification[]>([]);
  const [showClassSelection, setShowClassSelection] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);

  useEffect(() => {
    const init = async () => {
      setIsInitializing(true);
      try {
        // 1. Try to load from Supabase
        const { success, character, error } = await getCharacterProfile(userId);

        if (success && character) {
          // 2. Sync Manager with Remote Data
          const newState = rpgManager.syncWithRemote(character);
          setGameState(newState);
        } else {
          console.warn('Could not load remote character:', error);

          // 3. Fallback to local storage or new character flow
          const existingState = rpgManager.loadGameState(userId);
          if (existingState) {
            setGameState(existingState);
          } else {
            setShowClassSelection(true);
          }
        }
      } catch (e) {
        console.error('Failed to initialize RPG:', e);
        // Fallback
        const existingState = rpgManager.loadGameState(userId);
        if (existingState) setGameState(existingState);
        else setShowClassSelection(true);
      } finally {
        setIsInitializing(false);
      }
    };

    init();

    // Set up event listeners
    const handleNotification = (notification: RPGNotification) => {
      setNotifications(prev => [...prev, notification]);
    };

    const handleStateChange = () => {
      setGameState(rpgManager.getGameState());
    };

    rpgManager.on('notification', handleNotification);
    rpgManager.on('levelUp', handleStateChange);
    rpgManager.on('experienceGained', handleStateChange);
    rpgManager.on('goldGained', handleStateChange);
    rpgManager.on('itemFound', handleStateChange);

    return () => {
      // Cleanup would go here if we had a proper event system cleanup
    };
  }, [userId]);

  const handleClassSelection = async (characterClass: CharacterClass) => {
    setIsInitializing(true);
    try {
      const newGameState = rpgManager.initializeGameState(userId, characterClass);
      setGameState(newGameState);
      setShowClassSelection(false);
    } catch (error) {
      console.error('Error initializing RPG character:', error);
    } finally {
      setIsInitializing(false);
    }
  };

  const dismissNotification = (notificationId: string) => {
    rpgManager.removeNotification(notificationId);
    setNotifications(prev => prev.filter(n => n.id !== notificationId));
  };

  const handleEquip = async (item: any, slot: string) => {
    if (!gameState) return;
    try {
      // Optimistic UI update could go here, but for now we'll wait for server
      const inventoryId = item.id;
      if (!inventoryId) {
        console.error('Cannot equip item without ID');
        return;
      }

      const { success, error } = await equipItem(userId, inventoryId, slot);

      if (success) {
        // Refresh character state
        const { character } = await getCharacterProfile(userId);
        if (character) {
          const newState = rpgManager.syncWithRemote(character);
          setGameState(newState);
          rpgManager.addNotification({
            id: Date.now().toString(),
            type: 'item_found', // Reusing icon
            title: 'Equipped Item',
            message: `Equipped ${item.item.name}`,
            icon: '🛡️',
            duration: 3000,
            createdAt: new Date()
          });
        }
      } else {
        console.error('Failed to equip:', error);
        rpgManager.addNotification({
          id: Date.now().toString(),
          type: 'death', // Error icon
          title: 'Equip Failed',
          message: error || 'Unknown error',
          icon: '❌',
          duration: 3000,
          createdAt: new Date()
        });
      }
    } catch (e) {
      console.error('Equip error:', e);
    }
  };

  const handleUnequip = async (slot: string) => {
    if (!gameState) return;
    try {
      const { success, error } = await unequipItem(userId, slot);
      if (success) {
        // Refresh character state
        const { character } = await getCharacterProfile(userId);
        if (character) {
          const newState = rpgManager.syncWithRemote(character);
          setGameState(newState);
        }
      } else {
        console.error('Failed to unequip:', error);
      }
    } catch (e) {
      console.error('Unequip error:', e);
    }
  };

  // Class Selection Screen
  if (showClassSelection) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-slate-800 dark:to-slate-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border-4 border-amber-600 dark:border-amber-400">
          <div className="p-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-amber-900 dark:text-amber-100 mb-2">
                🎭 Choose Your Musical Path 🎭
              </h1>
              <p className="text-lg text-amber-700 dark:text-amber-300">
                Select a character class to begin your IGCSE Music RPG adventure!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.values(CHARACTER_CLASSES).map((classInfo) => {
                const isLocked = classInfo.unlockRequirement !== undefined;
                return (
                  <div
                    key={classInfo.id}
                    className={`relative p-6 rounded-lg border-2 transition-all duration-200 ${isLocked
                      ? 'bg-gray-200 dark:bg-gray-700 border-gray-400 opacity-60 cursor-not-allowed'
                      : 'bg-white dark:bg-slate-700 border-amber-400 hover:border-amber-600 hover:shadow-lg cursor-pointer transform hover:scale-105'
                      }`}
                    onClick={() => !isLocked && !isInitializing && handleClassSelection(classInfo.id)}
                  >
                    {isLocked && (
                      <div className="absolute top-2 right-2 text-2xl">🔒</div>
                    )}

                    <div className="text-center mb-4">
                      <div className="text-6xl mb-2">{classInfo.icon}</div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        {classInfo.name}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 text-center">
                      {classInfo.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Primary:</span>
                        <span className="capitalize">{classInfo.primaryStat}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Secondary:</span>
                        <span className="capitalize">{classInfo.secondaryStat}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-600">
                      <h4 className="font-medium text-sm mb-2">Starting Stats:</h4>
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        <div>Knowledge: {classInfo.startingStats.knowledge}</div>
                        <div>Rhythm: {classInfo.startingStats.rhythm}</div>
                        <div>Harmony: {classInfo.startingStats.harmony}</div>
                        <div>Creativity: {classInfo.startingStats.creativity}</div>
                        <div>Focus: {classInfo.startingStats.focus}</div>
                      </div>
                    </div>

                    {isLocked && classInfo.unlockRequirement && (
                      <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-600">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Unlock: Level {classInfo.unlockRequirement.level || 'N/A'}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {onClose && (
              <div className="text-center mt-8">
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (!gameState || isInitializing) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">
            {isInitializing ? 'Creating your character...' : 'Loading RPG data...'}
          </p>
        </div>
      </div>
    );
  }

  const character = gameState.character;
  const classInfo = CHARACTER_CLASSES[character.class];

  // Character Tab
  const CharacterTab = () => (
    <div className="space-y-6">
      {/* Character Header */}
      <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-slate-700 dark:to-slate-800 rounded-lg p-6 border border-amber-300 dark:border-amber-600">
        <div className="flex items-center space-x-4">
          <div className="text-6xl">{classInfo.icon}</div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Level {character.level} {classInfo.name}
            </h2>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-600">💰</span>
                <span className="font-medium">{character.gold} Gold</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-600">💎</span>
                <span className="font-medium">{character.mana}/{character.maxMana} Mana</span>
              </div>
            </div>
            {/* Added Equipment Bonus Display */}
            <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              {Object.values(character.equipment).filter(e => e).length > 0 &&
                `Bonus Stats from Equipment: ${(Object.values(character.totalStats) as number[]).reduce((a, b) => a + b, 0) -
                (Object.values(character.stats) as number[]).reduce((a, b) => a + b, 0)
                }`
              }
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-600 dark:text-slate-400">Run #{gameState.statistics.totalRuns}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              {character.currentRun.isActive ? 'Active' : 'Completed'}
            </div>
          </div>
        </div>

        {/* Health Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Health</span>
            <span>{character.health}/{character.maxHealth}</span>
          </div>
          <div className="w-full bg-red-200 dark:bg-red-900 rounded-full h-3 overflow-hidden">
            <div
              className="bg-red-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${Math.round((character.health / character.maxHealth) * 100)}%` }}
            />
          </div>
        </div>

        {/* Experience Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Experience</span>
            <span>{character.experience} / {character.experience + character.experienceToNext}</span>
          </div>
          <div className="w-full bg-blue-200 dark:bg-blue-900 rounded-full h-3 overflow-hidden">
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${Math.round((character.experience / (character.experience + character.experienceToNext)) * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold mb-4">Character Stats</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.entries(character.totalStats).map(([stat, value]) => (
            <div key={stat} className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{value}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 capitalize">{stat}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Abilities */}
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold mb-4">Class Abilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {classInfo.classAbilities.map((ability) => {
            const isUnlocked = character.abilities.includes(ability.id);
            const isAvailable = character.level >= ability.unlockLevel;

            return (
              <div
                key={ability.id}
                className={`p-4 rounded-lg border ${isUnlocked
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                  : isAvailable
                    ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
                    : 'bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800 opacity-60'
                  }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{ability.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-medium">{ability.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{ability.description}</p>
                    <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                      Unlock Level: {ability.unlockLevel}
                      {ability.cooldown && ` • Cooldown: ${ability.cooldown / 60}h`}
                    </div>
                  </div>
                  <div className="text-right">
                    {isUnlocked ? (
                      <span className="text-green-600 text-sm">✓ Active</span>
                    ) : isAvailable ? (
                      <span className="text-yellow-600 text-sm">Available</span>
                    ) : (
                      <span className="text-gray-500 text-sm">Locked</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Current Run Stats */}
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold mb-4">Current Run Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-xl font-bold text-blue-600">{character.currentRun.stats.quizzesCompleted}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Quizzes</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-green-600">{character.currentRun.stats.challengesCompleted}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Challenges</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-purple-600">{character.currentRun.stats.itemsFound}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Items Found</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-red-600">{character.currentRun.stats.deathCount}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Deaths</div>
          </div>
        </div>
      </div>
    </div>
  );

  // Challenges Tab
  const ChallengesTab = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold mb-4">Available Challenges</h3>
        {gameState.availableChallenges.length === 0 ? (
          <div className="text-center py-8 text-slate-500 dark:text-slate-400">
            <div className="text-4xl mb-2">⚔️</div>
            <p>No challenges available. Check back tomorrow for new daily quests!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {gameState.availableChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{challenge.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold">{challenge.name}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${challenge.difficulty === 'legendary'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                        : challenge.difficulty === 'master'
                          ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                          : challenge.difficulty === 'expert'
                            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
                            : challenge.difficulty === 'adept'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                              : challenge.difficulty === 'apprentice'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                        }`}>
                        {challenge.difficulty}
                      </span>
                      {challenge.isDaily && (
                        <span className="px-2 py-1 text-xs bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400 rounded-full">
                          Daily
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{challenge.description}</p>

                    {/* Objectives */}
                    <div className="space-y-2 mb-3">
                      {challenge.objectives.map((objective) => (
                        <div key={objective.id} className="flex items-center space-x-2">
                          <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${objective.isCompleted
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'border-slate-300 dark:border-slate-600'
                            }`}>
                            {objective.isCompleted && <span className="text-xs">✓</span>}
                          </div>
                          <span className="text-sm">{objective.description}</span>
                          <span className="text-xs text-slate-500 dark:text-slate-500">
                            ({objective.current}/{objective.target})
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Rewards */}
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="font-medium">Rewards:</span>
                      {challenge.rewards.map((reward, index) => (
                        <span key={index} className="flex items-center space-x-1">
                          <span>
                            {reward.type === 'experience' && '⭐'}
                            {reward.type === 'gold' && '💰'}
                            {reward.type === 'item' && '🎁'}
                            {reward.type === 'stat_point' && '📈'}
                          </span>
                          <span>{reward.value}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Settings Tab
  const SettingsTab = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold mb-4">RPG Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Permadeath Mode</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Enable permanent character death on failure
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={gameState.settings.permadeathEnabled}
                onChange={(e) => {
                  if (gameState) {
                    gameState.settings.permadeathEnabled = e.target.checked;
                    setGameState({ ...gameState });
                  }
                }}
                className="sr-only peer"
                aria-label="Toggle Permadeath Mode"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Notifications</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Show RPG notifications for events
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={gameState.settings.notifications}
                onChange={(e) => {
                  if (gameState) {
                    gameState.settings.notifications = e.target.checked;
                    setGameState({ ...gameState });
                  }
                }}
                className="sr-only peer"
                aria-label="Toggle Notifications"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Visual Effects</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Enable particle effects and animations
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={gameState.settings.particles}
                onChange={(e) => {
                  if (gameState) {
                    gameState.settings.particles = e.target.checked;
                    setGameState({ ...gameState });
                  }
                }}
                className="sr-only peer"
                aria-label="Toggle Visual Effects"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold mb-4">Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{gameState.statistics.totalRuns}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Total Runs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{gameState.statistics.totalDeaths}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Total Deaths</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{gameState.statistics.totalRevivals}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Revivals</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{gameState.statistics.legendaryItemsFound}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Legendary Items</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* RPG Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg shadow-lg border-l-4 bg-white dark:bg-slate-800 animate-slide-in-right cursor-pointer ${notification.rarity === 'legendary'
              ? 'border-yellow-500'
              : notification.rarity === 'epic'
                ? 'border-purple-500'
                : notification.rarity === 'rare'
                  ? 'border-blue-500'
                  : notification.type === 'level_up'
                    ? 'border-green-500'
                    : 'border-gray-500'
              }`}
            onClick={() => dismissNotification(notification.id)}
          >
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{notification.icon}</div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                  {notification.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {notification.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main RPG Dashboard */}
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40 p-4">
        <div className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-slate-800 dark:to-slate-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden border-4 border-amber-600 dark:border-amber-400">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 p-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white flex items-center space-x-2">
              <span>🎭</span>
              <span>IGCSE Music RPG</span>
            </h1>
            {onClose && (
              <button
                onClick={onClose}
                className="text-white hover:text-amber-200 transition-colors"
                aria-label="Close RPG Dashboard"
                title="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Navigation Tabs */}
          <div className="bg-amber-100 dark:bg-slate-700 px-4 py-2 flex space-x-1">
            {[
              { id: 'character', label: 'Character', icon: '👤' },
              { id: 'inventory', label: 'Inventory', icon: '🎒' },
              { id: 'challenges', label: 'Challenges', icon: '⚔️' },
              { id: 'settings', label: 'Settings', icon: '⚙️' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.id
                  ? 'bg-white dark:bg-slate-600 text-amber-900 dark:text-amber-100 shadow-sm'
                  : 'text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 hover:bg-amber-200 dark:hover:bg-slate-600'
                  }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
            {activeTab === 'character' && <CharacterTab />}
            {activeTab === 'inventory' && <InventoryTab character={gameState.character} onEquip={handleEquip} onUnequip={handleUnequip} />}
            {activeTab === 'challenges' && <ChallengesTab />}
            {activeTab === 'settings' && <SettingsTab />}
          </div>
        </div>
      </div>
    </>
  );
};

export default RPGDashboard;