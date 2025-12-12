import React from 'react';
import { RPGCharacter } from '../../types/rpg';

interface InventoryTabProps {
    character: RPGCharacter;
}

/**
 * Inventory tab for RPG Dashboard.
 * Displays equipped items and inventory grid.
 */
export const InventoryTab: React.FC<InventoryTabProps> = ({ character }) => {
    const equipmentSlots = ['mainHand', 'offHand', 'head', 'chest', 'hands', 'feet', 'accessory1', 'accessory2'];

    return (
        <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold mb-4">Equipment</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {equipmentSlots.map((slot) => {
                        const equippedItem = character.equipment[slot as keyof typeof character.equipment];
                        return (
                            <div
                                key={slot}
                                className="aspect-square border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg flex items-center justify-center bg-slate-50 dark:bg-slate-700"
                            >
                                {equippedItem ? (
                                    <div className="text-center">
                                        <div className="text-2xl mb-1">{equippedItem.item.icon}</div>
                                        <div className="text-xs font-medium">{equippedItem.item.name}</div>
                                    </div>
                                ) : (
                                    <div className="text-center text-slate-400">
                                        <div className="text-xs capitalize">{slot.replace(/([A-Z])/g, ' $1').trim()}</div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold mb-4">Inventory ({character.inventory.length} items)</h3>
                {character.inventory.length === 0 ? (
                    <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                        <div className="text-4xl mb-2">🎒</div>
                        <p>Your inventory is empty. Complete quizzes and challenges to find items!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {character.inventory.map((invItem, index) => (
                            <div
                                key={`${invItem.item.id}-${index}`}
                                className={`p-3 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${invItem.item.rarity === 'legendary'
                                        ? 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20'
                                        : invItem.item.rarity === 'epic'
                                            ? 'border-purple-400 bg-purple-50 dark:bg-purple-900/20'
                                            : invItem.item.rarity === 'rare'
                                                ? 'border-blue-400 bg-blue-50 dark:bg-blue-900/20'
                                                : invItem.item.rarity === 'uncommon'
                                                    ? 'border-green-400 bg-green-50 dark:bg-green-900/20'
                                                    : 'border-gray-400 bg-gray-50 dark:bg-gray-900/20'
                                    }`}
                                title={`${invItem.item.name}\n${invItem.item.description}`}
                            >
                                <div className="text-center">
                                    <div className="text-2xl mb-1">{invItem.item.icon}</div>
                                    <div className="text-xs font-medium truncate">{invItem.item.name}</div>
                                    {invItem.quantity > 1 && (
                                        <div className="text-xs text-slate-600 dark:text-slate-400">x{invItem.quantity}</div>
                                    )}
                                    <div className="text-xs text-slate-500 dark:text-slate-500 capitalize">
                                        {invItem.item.rarity}
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

export default InventoryTab;
