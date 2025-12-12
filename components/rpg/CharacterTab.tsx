import React from 'react';
import { RPGCharacter, RPGGameState } from '../../types/rpg';
import { CHARACTER_CLASSES } from '../../utils/rpgConfig';

interface CharacterTabProps {
    character: RPGCharacter;
    gameState: RPGGameState;
}

/**
 * Character tab for RPG Dashboard.
 * Displays character stats, abilities, health/XP bars, and current run statistics.
 */
export const CharacterTab: React.FC<CharacterTabProps> = ({ character, gameState }) => {
    const classInfo = CHARACTER_CLASSES[character.class];

    return (
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
                    <div className="w-full bg-red-200 dark:bg-red-900 rounded-full h-3">
                        <div
                            className="bg-red-500 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${(character.health / character.maxHealth) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Experience Bar */}
                <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                        <span>Experience</span>
                        <span>{character.experience} / {character.experience + character.experienceToNext}</span>
                    </div>
                    <div className="w-full bg-blue-200 dark:bg-blue-900 rounded-full h-3">
                        <div
                            className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${(character.experience / (character.experience + character.experienceToNext)) * 100}%` }}
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
};

export default CharacterTab;
