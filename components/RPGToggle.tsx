import React, { useState } from 'react';
import { useRPG } from '../contexts/RPGContext';
import { CharacterClass } from '../types/rpg';
import { CHARACTER_CLASSES } from '../utils/rpgConfig';
import { RPGButton, RPGCard, RPGModal, RPGLoading } from './RPGVisualEffects';
import RPGDashboard from './RPGDashboard';

interface RPGToggleProps {
  className?: string;
}

const RPGToggle: React.FC<RPGToggleProps> = ({ className = '' }) => {
  const { 
    isRPGEnabled, 
    gameState, 
    enableRPG, 
    disableRPG, 
    isInitialized 
  } = useRPG();
  
  const [showClassSelection, setShowClassSelection] = useState(false);
  const [showRPGDashboard, setShowRPGDashboard] = useState(false);
  const [isEnabling, setIsEnabling] = useState(false);
  const [showDisableConfirm, setShowDisableConfirm] = useState(false);

  if (!isInitialized) {
    return (
      <div className={`flex items-center justify-center p-4 ${className}`}>
        <RPGLoading message="Loading RPG system..." size="sm" />
      </div>
    );
  }

  const handleEnableRPG = () => {
    setShowClassSelection(true);
  };

  const handleClassSelection = async (characterClass: CharacterClass) => {
    setIsEnabling(true);
    try {
      const success = await enableRPG(characterClass);
      if (success) {
        setShowClassSelection(false);
        setShowRPGDashboard(true);
      } else {
        alert('Failed to enable RPG mode. Please try again.');
      }
    } catch (error) {
      console.error('Error enabling RPG:', error);
      alert('An error occurred while enabling RPG mode.');
    } finally {
      setIsEnabling(false);
    }
  };

  const handleDisableRPG = () => {
    setShowDisableConfirm(true);
  };

  const confirmDisableRPG = () => {
    disableRPG();
    setShowDisableConfirm(false);
    setShowRPGDashboard(false);
  };

  const character = gameState?.character;
  const classInfo = character ? CHARACTER_CLASSES[character.class] : null;

  return (
    <>
      <div className={`${className}`}>
        {!isRPGEnabled ? (
          <RPGButton
            onClick={handleEnableRPG}
            variant="primary"
            size="md"
            className="w-full"
          >
            <span className="flex items-center space-x-2">
              <span>🎭</span>
              <span>Enable RPG Mode</span>
            </span>
          </RPGButton>
        ) : (
          <div className="space-y-4">
            {/* Character Summary */}
            <RPGCard 
              title="Your Character" 
              rarity={character?.level && character.level >= 20 ? 'legendary' : character?.level && character.level >= 10 ? 'epic' : 'rare'}
              className="cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-4" onClick={() => setShowRPGDashboard(true)}>
                <div className="text-4xl">{classInfo?.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">
                    Level {character?.level} {classInfo?.name}
                  </h3>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {character?.gold} 💰 • {character?.experience} XP
                  </div>
                  <div className="w-full bg-blue-200 dark:bg-blue-900 rounded-full h-2 mt-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${character ? (character.experience / (character.experience + character.experienceToNext)) * 100 : 0}%` 
                      }}
                    />
                  </div>
                </div>
              </div>
            </RPGCard>
            
            {/* Action Buttons */}
            <div className="flex space-x-2">
              <RPGButton
                onClick={() => setShowRPGDashboard(true)}
                variant="primary"
                size="sm"
                className="flex-1"
              >
                Open RPG Dashboard
              </RPGButton>
              <RPGButton
                onClick={handleDisableRPG}
                variant="danger"
                size="sm"
              >
                Disable
              </RPGButton>
            </div>
          </div>
        )}
      </div>

      {/* Class Selection Modal */}
      <RPGModal
        isOpen={showClassSelection}
        onClose={() => !isEnabling && setShowClassSelection(false)}
        title="Choose Your Musical Path"
        size="xl"
      >
        {isEnabling ? (
          <div className="text-center py-8">
            <RPGLoading message="Creating your character..." size="lg" />
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Select a character class to begin your IGCSE Music RPG adventure!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.values(CHARACTER_CLASSES).map((classInfo) => {
                const isLocked = classInfo.unlockRequirement !== undefined;
                return (
                  <RPGCard
                    key={classInfo.id}
                    rarity={isLocked ? 'common' : 'uncommon'}
                    className={`cursor-pointer transition-all duration-200 ${
                      isLocked
                        ? 'opacity-60 cursor-not-allowed'
                        : 'hover:scale-105 hover:shadow-xl'
                    }`}
                  >
                    <div 
                      className="text-center"
                      onClick={() => !isLocked && handleClassSelection(classInfo.id)}
                    >
                      {isLocked && (
                        <div className="absolute top-2 right-2 text-2xl">🔒</div>
                      )}
                      
                      <div className="text-6xl mb-4">{classInfo.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{classInfo.name}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        {classInfo.description}
                      </p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-medium">Primary:</span>
                          <span className="capitalize">{classInfo.primaryStat}</span>
                        </div>
                        <div className="flex justify-between">
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
                  </RPGCard>
                );
              })}
            </div>
          </div>
        )}
      </RPGModal>

      {/* Disable Confirmation Modal */}
      <RPGModal
        isOpen={showDisableConfirm}
        onClose={() => setShowDisableConfirm(false)}
        title="Disable RPG Mode"
        size="md"
      >
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h3 className="text-xl font-bold mb-4">Are you sure?</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Disabling RPG mode will remove your character and all RPG progress. 
            This action cannot be undone.
          </p>
          <div className="flex space-x-4 justify-center">
            <RPGButton
              onClick={() => setShowDisableConfirm(false)}
              variant="secondary"
              size="md"
            >
              Cancel
            </RPGButton>
            <RPGButton
              onClick={confirmDisableRPG}
              variant="danger"
              size="md"
            >
              Disable RPG Mode
            </RPGButton>
          </div>
        </div>
      </RPGModal>

      {/* RPG Dashboard */}
      {showRPGDashboard && gameState && (
        <RPGDashboard
          userId={gameState.character.userId}
          onClose={() => setShowRPGDashboard(false)}
        />
      )}
    </>
  );
};

export default RPGToggle;