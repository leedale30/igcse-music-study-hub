import React from 'react';
import { RPGChallenge } from '../../types/rpg';

interface ChallengesTabProps {
    challenges: RPGChallenge[];
}

/**
 * Challenges tab for RPG Dashboard.
 * Displays available challenges with objectives and rewards.
 */
export const ChallengesTab: React.FC<ChallengesTabProps> = ({ challenges }) => {
    const getDifficultyColor = (difficulty: string): string => {
        switch (difficulty) {
            case 'legendary': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
            case 'master': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
            case 'expert': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
            case 'adept': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
            case 'apprentice': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold mb-4">Available Challenges</h3>
                {challenges.length === 0 ? (
                    <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                        <div className="text-4xl mb-2">⚔️</div>
                        <p>No challenges available. Check back tomorrow for new daily quests!</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {challenges.map((challenge) => (
                            <div
                                key={challenge.id}
                                className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="text-3xl">{challenge.icon}</div>
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <h4 className="font-semibold">{challenge.name}</h4>
                                            <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(challenge.difficulty)}`}>
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
};

export default ChallengesTab;
