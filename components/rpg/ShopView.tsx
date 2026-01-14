import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RPGLayout } from './RPGLayout';
import { useAuth } from '../../contexts/AuthContext';
import { ShoppingBag, Coins, Shield, Sword, Zap, Package, AlertCircle } from 'lucide-react';
import { supabase } from '../../src/lib/supabase';

interface ShopItem {
    id: string;
    name: string;
    description: string;
    type: 'weapon' | 'armor' | 'accessory' | 'consumable';
    rarity: 'common' | 'rare' | 'epic' | 'legendary';
    price: number;
    stats: any;
    image_url?: string;
}

export const ShopView: React.FC = () => {
    const { user } = useAuth();
    const [items, setItems] = useState<ShopItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [gold, setGold] = useState(0);
    const [selectedItem, setSelectedItem] = useState<ShopItem | null>(null);
    const [purchasing, setPurchasing] = useState(false);
    const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

    useEffect(() => {
        loadShopData();
    }, [user]);

    const loadShopData = async () => {
        if (!user) return;
        try {
            // 1. Get User Gold
            const { data: profile } = await supabase
                .from('profiles')
                .select('gold')
                .eq('id', user.id)
                .single();

            setGold(profile?.gold || 0);

            // 2. Get Shop Items
            const { data: shopItems, error } = await supabase
                .from('rpg_items')
                .select('*')
                .order('price', { ascending: true });

            if (error) throw error;
            if (shopItems) setItems(shopItems);

        } catch (e) {
            console.error('Error loading shop:', e);
            // Mock data for dev if empty
            if (items.length === 0) {
                setItems([
                    { id: '1', name: 'Health Potion', description: 'Restores 50 HP', type: 'consumable', rarity: 'common', price: 50, stats: { hp: 50 }, image_url: '' },
                    { id: '2', name: 'Iron Sword', description: 'A basic sword', type: 'weapon', rarity: 'common', price: 150, stats: { attack: 5 }, image_url: '' },
                    { id: '3', name: 'Leather Armor', description: 'Basic protection', type: 'armor', rarity: 'common', price: 120, stats: { defense: 3 }, image_url: '' },
                    { id: '4', name: 'Magic Ring', description: 'Grants minor power', type: 'accessory', rarity: 'rare', price: 500, stats: { mana: 20 }, image_url: '' },
                ]);
            }
        } finally {
            setLoading(false);
        }
    };

    const handlePurchase = async (item: ShopItem) => {
        if (!user) return;
        if (gold < item.price) {
            setMessage({ text: 'Not enough gold!', type: 'error' });
            return;
        }

        setPurchasing(true);
        setMessage(null);

        try {
            const { data, error } = await supabase.rpc('purchase_item', {
                item_id: item.id
            });

            if (error) throw error;

            if (data && data.success) {
                setGold(prev => prev - item.price);
                setMessage({ text: `Successfully bought ${item.name}!`, type: 'success' });
                // Optional: Sound effect here
            } else {
                setMessage({ text: data?.error || 'Purchase failed', type: 'error' });
            }
        } catch (e: any) {
            console.error('Purchase error:', e);
            setMessage({ text: e.message || 'Error occurred', type: 'error' });
        } finally {
            setPurchasing(false);
            setTimeout(() => setMessage(null), 3000);
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

    return (
        <RPGLayout theme="nano">
            <div className="flex h-full flex-col md:flex-row overflow-hidden relative">
                {/* Feedback Message Toast */}
                <AnimatePresence>
                    {message && (
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            className={`absolute top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl font-bold border backdrop-blur-md shadow-2xl ${message.type === 'success' ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-red-500/20 border-red-500 text-red-400'
                                }`}
                        >
                            {message.text}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Shop List */}
                <div className="flex-1 p-6 flex flex-col min-h-0">
                    <header className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <ShoppingBag className="w-6 h-6 text-yellow-400" />
                            Item Shop
                        </h1>
                        <div className="flex items-center gap-2 bg-yellow-900/20 border border-yellow-500/30 px-4 py-2 rounded-xl">
                            <Coins className="w-5 h-5 text-yellow-400" />
                            <span className="text-xl font-bold text-yellow-100">{gold.toLocaleString()}</span>
                            <span className="text-xs text-yellow-400/60 font-medium">GOLD</span>
                        </div>
                    </header>

                    {loading ? (
                        <div className="flex-1 flex items-center justify-center text-white/30">Opening Shop...</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto pr-2 pb-20">
                            {items.map(item => (
                                <motion.div
                                    key={item.id}
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => setSelectedItem(item)}
                                    className={`p-4 rounded-xl border relative group cursor-pointer transition-all flex flex-col gap-3 ${selectedItem?.id === item.id ? 'ring-2 ring-yellow-400' : ''
                                        } ${getRarityColor(item.rarity)}`}
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="p-2 rounded-lg bg-black/40">
                                            {item.type === 'weapon' && <Sword className="w-6 h-6" />}
                                            {item.type === 'armor' && <Shield className="w-6 h-6" />}
                                            {item.type === 'accessory' && <Zap className="w-6 h-6" />}
                                            {item.type === 'consumable' && <Package className="w-6 h-6" />}
                                        </div>
                                        <span className="text-xs font-bold uppercase px-2 py-1 rounded bg-black/40">
                                            {item.type}
                                        </span>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg leading-tight mb-1">{item.name}</h3>
                                        {/* Mock Image Placeholder if needed */}
                                        <div className="w-full h-32 bg-black/20 rounded-lg mb-2 overflow-hidden">
                                            {item.image_url ? (
                                                <img src={item.image_url} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-white/10 text-4xl">?</div>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-1 text-yellow-400 font-mono font-bold text-xl">
                                            <Coins className="w-4 h-4" />
                                            {item.price}
                                        </div>
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handlePurchase(item);
                                        }}
                                        disabled={purchasing || gold < item.price}
                                        className={`w-full py-2 rounded-lg font-bold text-sm transition-all ${gold >= item.price
                                            ? 'bg-yellow-500 hover:bg-yellow-400 text-black shadow-lg shadow-yellow-500/20'
                                            : 'bg-white/5 text-white/20 cursor-not-allowed'
                                            }`}
                                    >
                                        {gold >= item.price ? 'BUY NOW' : 'NOT ENOUGH GOLD'}
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </RPGLayout>
    );
};
