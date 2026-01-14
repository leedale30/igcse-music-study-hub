import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RPGLayout } from './RPGLayout';
import { useAuth } from '../../contexts/AuthContext';
import { Shield, Sword, Zap, Heart, User, ArrowRight } from 'lucide-react';
import { supabase } from '../../src/lib/supabase';

interface EquipmentSlot {
    id: string; // item id
    name: string;
    type: 'weapon' | 'armor' | 'accessory';
    stats: any;
    image_url?: string;
    rarity: string;
}

export const EquipmentView: React.FC = () => {
    const { user } = useAuth();
    const [equipped, setEquipped] = useState<{
        weapon: EquipmentSlot | null;
        armor: EquipmentSlot | null;
        accessory: EquipmentSlot | null;
    }>({ weapon: null, armor: null, accessory: null });

    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState<any>(null);

    useEffect(() => {
        loadEquipment();
    }, [user]);

    const loadEquipment = async () => {
        if (!user) return;
        try {
            // 1. Get User Stats
            const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();
            setStats(profile?.stats || { hp: 100, attack: 10, defense: 0 });

            // 2. Get Equipped Items
            const { data: inventory, error } = await supabase
                .from('rpg_inventory')
                .select('*, item:rpg_items(*)')
                .eq('user_id', user.id)
                .eq('is_equipped', true);

            if (error) throw error;

            const newEquipped = { weapon: null, armor: null, accessory: null };

            inventory?.forEach((invItem: any) => {
                const item = invItem.item;
                if (item.type === 'weapon') newEquipped.weapon = item;
                if (item.type === 'armor') newEquipped.armor = item;
                if (item.type === 'accessory') newEquipped.accessory = item;
            });

            setEquipped(newEquipped);

        } catch (e) {
            console.error('Error loading equipment:', e);
        } finally {
            setLoading(false);
        }
    };

    const handleUnequip = async (type: string) => {
        // Call backend RPC to unequip
        // For visual feedback we'll just reload for now or optimistic update
        const item = equipped[type as keyof typeof equipped];
        if (!item) return;

        try {
            await supabase.rpc('unequip_item', { item_id: item.id });
            setEquipped(prev => ({ ...prev, [type]: null }));
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <RPGLayout theme="nano">
            <div className="h-full flex flex-col items-center justify-center p-6">
                <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <User className="w-8 h-8 text-cyan-400" />
                    Equipment & Loadout
                </h1>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Paper Doll */}
                    <div className="relative w-80 h-96 bg-black/40 rounded-3xl border border-white/10 flex items-center justify-center">
                        <img src={(user?.user_metadata?.avatar_url) || "/assets/rpg/nano.png"} className="h-full object-contain opacity-50" />

                        {/* Slots */}
                        {/* Weapon (Left) */}
                        <div className="absolute top-1/2 -left-16 -translate-y-1/2 flex flex-col items-center gap-2">
                            <div className="w-20 h-20 rounded-xl border-2 border-dashed border-white/20 bg-black/60 flex items-center justify-center cursor-pointer hover:border-cyan-400 transition-colors relative group">
                                {equipped.weapon ? (
                                    <div className="w-full h-full p-2 flex flex-col items-center justify-center text-xs text-center" onClick={() => handleUnequip('weapon')}>
                                        <Sword className="w-6 h-6 mb-1 text-red-400" />
                                        {equipped.weapon.name}
                                    </div>
                                ) : (
                                    <Sword className="w-8 h-8 text-white/10" />
                                )}
                                <div className="absolute -bottom-8 text-xs font-bold text-white/40">WEAPON</div>
                            </div>
                        </div>

                        {/* Armor (Center Body) */}
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                            <div className="w-20 h-20 rounded-xl border-2 border-dashed border-white/20 bg-black/60 flex items-center justify-center cursor-pointer hover:border-cyan-400 transition-colors relative">
                                {equipped.armor ? (
                                    <div className="w-full h-full p-2 flex flex-col items-center justify-center text-xs text-center" onClick={() => handleUnequip('armor')}>
                                        <Shield className="w-6 h-6 mb-1 text-cyan-400" />
                                        {equipped.armor.name}
                                    </div>
                                ) : (
                                    <Shield className="w-8 h-8 text-white/10" />
                                )}
                                <div className="absolute -bottom-8 text-xs font-bold text-white/40">ARMOR</div>
                            </div>
                        </div>

                        {/* Accessory (Right) */}
                        <div className="absolute top-1/2 -right-16 -translate-y-1/2 flex flex-col items-center gap-2">
                            <div className="w-20 h-20 rounded-xl border-2 border-dashed border-white/20 bg-black/60 flex items-center justify-center cursor-pointer hover:border-cyan-400 transition-colors relative">
                                {equipped.accessory ? (
                                    <div className="w-full h-full p-2 flex flex-col items-center justify-center text-xs text-center" onClick={() => handleUnequip('accessory')}>
                                        <Zap className="w-6 h-6 mb-1 text-yellow-400" />
                                        {equipped.accessory.name}
                                    </div>
                                ) : (
                                    <Zap className="w-8 h-8 text-white/10" />
                                )}
                                <div className="absolute -bottom-8 text-xs font-bold text-white/40">ACCESSORY</div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Panel */}
                    <div className="w-80 space-y-4">
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                            <h3 className="text-sm font-bold text-white/40 mb-4 uppercase tracking-wider">Combat Stats</h3>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Heart className="w-5 h-5 text-red-500" />
                                        <span>Max HP</span>
                                    </div>
                                    <span className="font-mono text-xl">{stats?.hp || 100}</span>
                                </div>
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-red-500 w-[60%]" />
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Sword className="w-5 h-5 text-cyan-500" />
                                        <span>Attack Power</span>
                                    </div>
                                    <span className="font-mono text-xl">{stats?.attack || 10}</span>
                                </div>
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-cyan-500 w-[40%]" />
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-5 h-5 text-green-500" />
                                        <span>Defense</span>
                                    </div>
                                    <span className="font-mono text-xl">{stats?.defense || 0}</span>
                                </div>
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-[20%]" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/30 text-center">
                            <p className="text-yellow-200 text-sm">
                                Go to <strong className="text-yellow-400 cursor-pointer hover:underline" onClick={() => window.location.href = '/rpg/inventory'}>Inventory</strong> to equip items!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </RPGLayout>
    );
};
