import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RPGLayout } from './RPGLayout';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft, Shield, Sword, Heart, Zap, Star,
    Package, Users, Settings, ChevronRight, Plus
} from 'lucide-react';
import {
    RPGPlayerStats, RPGClass, AttributeId,
    ATTRIBUTE_INFO, CLASS_INFO, CURRENCY_INFO
} from '../../types/rpg_classes';
import { getPlayerStats, getClasses, selectClass, allocateAttributePoint } from '../../services/classService';
import { supabase } from '../../src/lib/supabase';

export const CharacterSheet: React.FC = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [stats, setStats] = useState<RPGPlayerStats | null>(null);
    const [classes, setClasses] = useState<RPGClass[]>([]);
    const [selectedClass, setSelectedClass] = useState<RPGClass | null>(null);
    const [loading, setLoading] = useState(true);
    const [showClassPicker, setShowClassPicker] = useState(false);
    const [allocating, setAllocating] = useState<AttributeId | null>(null);

    useEffect(() => {
        loadData();
    }, [user]);

    const loadData = async () => {
        if (!user?.id) return;

        const [playerStats, allClasses] = await Promise.all([
            getPlayerStats(user.id),
            getClasses()
        ]);

        setStats(playerStats);
        setClasses(allClasses);

        if (playerStats && allClasses.length > 0) {
            const currentClass = allClasses.find(c => c.id === playerStats.class_id);
            setSelectedClass(currentClass || null);
        }

        setLoading(false);
    };

    const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || event.target.files.length === 0) return;
        if (!user) return;

        const file = event.target.files[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${user.id}-${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        try {
            setLoading(true);

            // 1. Upload to Supabase Storage
            const { error: uploadError } = await supabase.storage
                .from('avatars')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            // 2. Get Public URL
            const { data: { publicUrl } } = supabase.storage
                .from('avatars')
                .getPublicUrl(filePath);

            // 3. Update Profile
            // Check if profile has avatar_url column first implicitly by trying update
            const { error: updateError } = await supabase
                .from('profiles')
                .update({ avatar_url: publicUrl })
                .eq('id', user.id);

            if (updateError) throw updateError;

            await loadData(); // Reload to see change

        } catch (error) {
            console.error('Error uploading avatar:', error);
            alert('Failed to upload avatar. Ensure the database migration has been run.');
        } finally {
            setLoading(false);
        }
    };

    const handleClassSelect = async (classId: string) => {
        if (!user?.id) return;

        const result = await selectClass(user.id, classId as any);
        if (result.success) {
            await loadData();
            setShowClassPicker(false);
        }
    };

    const handleAllocatePoint = async (attribute: AttributeId) => {
        if (!user?.id || !stats || stats.attribute_points < 1) return;

        setAllocating(attribute);
        const result = await allocateAttributePoint(user.id, attribute);
        if (result.success) {
            await loadData();
        }
        setAllocating(null);
    };

    if (loading) {
        return (
            <RPGLayout theme="nano">
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-2xl text-white/50 animate-pulse">Loading character...</div>
                </div>
            </RPGLayout>
        );
    }

    return (
        <RPGLayout theme="nano">
            {/* Header */}
            <header className="flex justify-between items-center p-4 border-b border-white/10 bg-black/20">
                <button
                    onClick={() => navigate('/rpg')}
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Lobby
                </button>

                <h1 className="text-xl font-bold">Character Sheet</h1>

                <div className="w-24" /> {/* Spacer */}
            </header>

            <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-4xl mx-auto space-y-6">

                    {/* Class & Basic Info Card */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className={`rounded-2xl border p-6 bg-gradient-to-br ${selectedClass ? CLASS_INFO[selectedClass.id as keyof typeof CLASS_INFO]?.bgGradient : 'from-white/5'
                            } ${selectedClass ? CLASS_INFO[selectedClass.id as keyof typeof CLASS_INFO]?.borderColor : 'border-white/10'}`}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div className="relative group">
                                    <div className="w-24 h-24 rounded-full border-4 border-white/10 bg-black/40 overflow-hidden flex items-center justify-center">
                                        {(stats as any)?.avatar_url ? (
                                            <img src={(stats as any).avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="text-4xl">{selectedClass?.icon || '❓'}</div>
                                        )}
                                    </div>
                                    <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-full cursor-pointer transition-opacity">
                                        <div className="text-xs font-bold text-white flex flex-col items-center">
                                            <span>Change</span>
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleAvatarUpload}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">{selectedClass?.name || 'No Class'}</h2>
                                    <p className="text-white/60">{selectedClass?.specialty}</p>
                                    <p className="text-sm text-white/40 mt-1">{selectedClass?.music_link}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowClassPicker(true)}
                                className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-sm"
                            >
                                Change Class
                            </button>
                        </div>

                        {/* HP Bar */}
                        <div className="mt-6">
                            <div className="flex justify-between text-sm mb-1">
                                <span className="flex items-center gap-1">
                                    <Heart className="w-4 h-4 text-red-400" />
                                    HP
                                </span>
                                <span>{stats?.current_hp || 0} / {stats?.max_hp || 100}</span>
                            </div>
                            <div className="h-4 bg-black/40 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-red-600 to-red-400"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((stats?.current_hp || 0) / (stats?.max_hp || 100)) * 100}%` }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Currencies */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-3 gap-4"
                    >
                        {Object.entries(CURRENCY_INFO).map(([key, info]) => (
                            <div key={key} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                                <div className="text-2xl mb-1">{info.icon}</div>
                                <div className={`text-xl font-bold ${info.color}`}>
                                    {(stats?.[key as keyof RPGPlayerStats] as number || 0).toLocaleString()}
                                </div>
                                <div className="text-xs text-white/40">{info.name}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Attributes */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-400" />
                                Attributes
                            </h3>
                            {(stats?.attribute_points || 0) > 0 && (
                                <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-bold">
                                    {stats?.attribute_points} points available
                                </span>
                            )}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {(Object.entries(ATTRIBUTE_INFO) as [AttributeId, typeof ATTRIBUTE_INFO[AttributeId]][]).map(([id, info]) => (
                                <div key={id} className="rounded-xl border border-white/10 bg-black/20 p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl">{info.icon}</span>
                                            <span className="font-bold">{info.name}</span>
                                        </div>
                                        <span className={`text-2xl font-bold ${info.color}`}>
                                            {stats?.[id] || 10}
                                        </span>
                                    </div>
                                    <div className="text-xs text-white/40 mb-3">{info.effect}</div>

                                    {(stats?.attribute_points || 0) > 0 && (
                                        <button
                                            onClick={() => handleAllocatePoint(id)}
                                            disabled={allocating !== null}
                                            className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center gap-1 text-sm"
                                        >
                                            {allocating === id ? (
                                                <span className="animate-pulse">...</span>
                                            ) : (
                                                <>
                                                    <Plus className="w-4 h-4" />
                                                    Add Point
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {[
                            { icon: Package, label: 'Inventory', path: '/rpg/inventory', color: 'text-amber-400' },
                            { icon: Sword, label: 'Equipment', path: '/rpg/equipment', color: 'text-red-400' },
                            { icon: Package, label: 'Shop', path: '/rpg/shop', color: 'text-yellow-400' }, // Added Shop
                            { icon: Users, label: 'Team', path: '/rpg/team', color: 'text-green-400' },
                            { icon: Settings, label: 'Skills', path: '/rpg/skills', color: 'text-purple-400' },
                        ].map((link) => (
                            <button
                                key={link.path}
                                onClick={() => navigate(link.path)}
                                className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <link.icon className={`w-5 h-5 ${link.color}`} />
                                    <span>{link.label}</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-white/40" />
                            </button>
                        ))}
                    </motion.div>

                    {/* Stats Summary */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6"
                    >
                        <h3 className="text-lg font-bold mb-4">Progression Stats</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div>
                                <div className="text-2xl font-bold text-cyan-400">{stats?.bosses_defeated || 0}</div>
                                <div className="text-xs text-white/40">Bosses Defeated</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-yellow-400">{stats?.chests_opened || 0}</div>
                                <div className="text-xs text-white/40">Chests Opened</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-red-400">{(stats?.total_damage_dealt || 0).toLocaleString()}</div>
                                <div className="text-xs text-white/40">Total Damage</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-green-400">{stats?.highest_streak || 0}</div>
                                <div className="text-xs text-white/40">Best Streak</div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Class Picker Modal */}
            {showClassPicker && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-gray-900 rounded-2xl border border-white/10 p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Class</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {classes.map((cls) => (
                                <button
                                    key={cls.id}
                                    onClick={() => handleClassSelect(cls.id)}
                                    className={`rounded-xl border p-4 text-left transition-all hover:scale-[1.02] ${CLASS_INFO[cls.id as keyof typeof CLASS_INFO]?.borderColor
                                        } bg-gradient-to-br ${CLASS_INFO[cls.id as keyof typeof CLASS_INFO]?.bgGradient}`}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-3xl">{cls.icon}</span>
                                        <div>
                                            <div className="font-bold text-lg">{cls.name}</div>
                                            <div className="text-xs text-white/60">{cls.specialty}</div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-white/70 mb-3">{cls.description}</p>
                                    <div className="text-xs text-white/40">{cls.music_link}</div>
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setShowClassPicker(false)}
                            className="w-full mt-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors"
                        >
                            Cancel
                        </button>
                    </motion.div>
                </div>
            )}
        </RPGLayout>
    );
};
