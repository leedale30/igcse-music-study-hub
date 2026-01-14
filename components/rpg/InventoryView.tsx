import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RPGLayout } from './RPGLayout';
import { useAuth } from '../../contexts/AuthContext';
import { Shield, Sword, Zap, Package, Info, Search } from 'lucide-react';
import { supabase } from '../../src/lib/supabase';

interface InventoryItem {
    id: string;
    name: string;
    description: string;
    type: 'weapon' | 'armor' | 'accessory' | 'consumable';
    rarity: 'common' | 'rare' | 'epic' | 'legendary';
    quantity: number;
    stats: any;
    image_url?: string;
}

export const InventoryView: React.FC = () => {
    const { user } = useAuth();
    const [items, setItems] = useState<InventoryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<string>('all');
    const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);

    useEffect(() => {
        loadInventory();
    }, [user]);

    const loadInventory = async () => {
        if (!user) return;
        try {
            // Join inventory with items table
            const { data, error } = await supabase
                .from('rpg_inventory')
                .select(`
                    quantity,
                    item:rpg_items (
                        id, name, description, type, rarity, stats, image_url
                    )
                `)
                .eq('user_id', user.id);

            if (error) throw error;

            if (data) {
                const formatted: InventoryItem[] = data.map((row: any) => ({
                    ...row.item,
                    quantity: row.quantity
                }));
                setItems(formatted);
            }
        } catch (e) {
            console.error('Error loading inventory:', e);
            // Fallback for dev if table missing
            setItems([]);
        } finally {
            setLoading(false);
        }
    };

    const getRarityColor = (rarity: string) => {
        switch (rarity) {
            case 'legendary': return 'text-yellow-400 border-yellow-500/50 bg-yellow-900/20';
            case 'epic': return 'text-purple-400 border-purple-500/50 bg-purple-900/20';
            case 'rare': return 'text-cyan-400 border-cyan-500/50 bg-cyan-900/20';
            default: return 'text-white/60 border-white/10 bg-white/5';
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'weapon': return <Sword className="w-5 h-5" />;
            case 'armor': return <Shield className="w-5 h-5" />;
            case 'accessory': return <Zap className="w-5 h-5" />;
            default: return <Package className="w-5 h-5" />;
        }
    };

    const filteredItems = items.filter(item =>
        filter === 'all' || item.type === filter
    );

    return (
        <RPGLayout theme="nano">
            <div className="flex h-full md:flex-row flex-col overflow-hidden">
                {/* Inventory List */}
                <div className="flex-1 p-6 flex flex-col min-h-0">
                    <header className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <Package className="w-6 h-6 text-cyan-400" />
                            Inventory
                        </h1>
                        <div className="flex gap-2 bg-black/40 p-1 rounded-lg">
                            {['all', 'weapon', 'armor', 'consumable'].map(f => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={`px-3 py-1 rounded text-xs uppercase font-bold transition-all ${filter === f ? 'bg-cyan-600 text-white' : 'text-white/40 hover:text-white'
                                        }`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </header>

                    {loading ? (
                        <div className="flex-1 flex items-center justify-center text-white/30">Loading...</div>
                    ) : filteredItems.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-white/30 gap-4">
                            <Package className="w-16 h-16 opacity-20" />
                            <p>Empty Inventory</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 overflow-y-auto pr-2">
                            {filteredItems.map(item => (
                                <motion.button
                                    layout
                                    key={item.id}
                                    onClick={() => setSelectedItem(item)}
                                    className={`p-4 rounded-xl border text-left flex flex-col gap-2 relative group transition-all ${selectedItem?.id === item.id ? 'ring-2 ring-cyan-400' : ''
                                        } ${getRarityColor(item.rarity)}`}
                                >
                                    <div className="flex justify-between items-start">
                                        {getTypeIcon(item.type)}
                                        {item.quantity > 1 && (
                                            <span className="text-xs font-mono bg-black/40 px-2 py-0.5 rounded">
                                                x{item.quantity}
                                            </span>
                                        )}
                                    </div>
                                    <div className="font-bold truncate">{item.name}</div>
                                </motion.button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Details Panel */}
                <div className={`w-full md:w-80 border-t md:border-t-0 md:border-l border-white/10 bg-black/40 p-6 flex flex-col ${selectedItem ? 'translate-y-0' : 'translate-y-full md:translate-y-0 md:translate-x-full'
                    } transition-transform`}>
                    {selectedItem ? (
                        <>
                            <div className="w-full aspect-square bg-white/5 rounded-2xl mb-6 flex items-center justify-center border border-white/10">
                                {selectedItem.image_url ? (
                                    <img src={selectedItem.image_url} alt={selectedItem.name} className="w-full h-full object-cover rounded-2xl" />
                                ) : (
                                    <Package className="w-24 h-24 text-white/10" />
                                )}
                            </div>

                            <div className="mb-2">
                                <span className={`text-xs font-bold px-2 py-1 rounded uppercase ${getRarityColor(selectedItem.rarity)}`}>
                                    {selectedItem.rarity}
                                </span>
                                <span className="text-xs text-white/40 ml-2 uppercase">{selectedItem.type}</span>
                            </div>

                            <h2 className="text-2xl font-bold mb-4">{selectedItem.name}</h2>
                            <p className="text-sm text-white/60 leading-relaxed mb-6">
                                {selectedItem.description}
                            </p>

                            {selectedItem.stats && Object.keys(selectedItem.stats).length > 0 && (
                                <div className="space-y-2 mb-6">
                                    <h3 className="text-xs font-bold uppercase text-white/40">Stats</h3>
                                    {Object.entries(selectedItem.stats).map(([key, val]) => (
                                        <div key={key} className="flex justify-between text-sm border-b border-white/10 pb-1">
                                            <span className="capitalize text-white/70">{key}</span>
                                            <span className="font-mono font-bold text-cyan-400">+{String(val)}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="mt-auto space-y-2">
                                {selectedItem.type === 'consumable' && (
                                    <button className="w-full py-3 bg-green-600 hover:bg-green-500 rounded-xl font-bold transition-colors">
                                        Use Item
                                    </button>
                                )}
                                {(selectedItem.type === 'weapon' || selectedItem.type === 'armor') && (
                                    <button className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-bold transition-colors">
                                        Equip
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-white/20">
                            <Info className="w-12 h-12 mb-2" />
                            <p>Select an item to view details</p>
                        </div>
                    )}
                </div>
            </div>
        </RPGLayout>
    );
};
