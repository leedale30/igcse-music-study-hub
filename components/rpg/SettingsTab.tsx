import React from 'react';
import { RPGGameState } from '../../types/rpg';

interface SettingsTabProps {
    gameState: RPGGameState;
    onUpdateSettings: (settings: Partial<RPGGameState['settings']>) => void;
}

/**
 * Settings tab for RPG Dashboard.
 * Controls for permadeath, notifications, visual effects, and displays statistics.
 */
export const SettingsTab: React.FC<SettingsTabProps> = ({ gameState, onUpdateSettings }) => {
    return (
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
                                onChange={(e) => onUpdateSettings({ permadeathEnabled: e.target.checked })}
                                className="sr-only peer"
                                aria-label="Toggle permadeath mode"
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
                                onChange={(e) => onUpdateSettings({ notifications: e.target.checked })}
                                className="sr-only peer"
                                aria-label="Toggle notifications"
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
                                onChange={(e) => onUpdateSettings({ particles: e.target.checked })}
                                className="sr-only peer"
                                aria-label="Toggle visual effects"
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
};

export default SettingsTab;
