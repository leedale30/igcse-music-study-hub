import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RPGLayout } from './RPGLayout';
import { THEMES, RPGTheme } from '../../types/rpg_themes';
import { UserService } from '../../src/services/userService';
import { getLeaderboard } from '../../services/rpgService';
import { useNavigate } from 'react-router-dom';
import { Trophy, Zap, Shield, Swords, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface LobbyViewProps {
    userId?: string;
}

export const LobbyView: React.FC<LobbyViewProps> = ({ userId }) => {
    const [theme, setTheme] = useState<RPGTheme>('nano');
    const [profile, setProfile] = useState<any>(null);
    const [leaderboard, setLeaderboard] = useState<any[]>([]);
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        // Load profile and leaderboard
        const loadData = async () => {
            const targetId = userId || user?.id;
            if (targetId) {
                try {
                    const p = await UserService.getUserProfile(targetId);
                    if (p) {
                        setProfile(p);
                    }
                } catch (e) {
                    console.error(e);
                }
            }
            const l = await getLeaderboard();
            setLeaderboard(l);
        };
        loadData();
    }, [userId, user]);

    const currentTheme = THEMES[theme];

    return (
        <RPGLayout theme={theme}>
            {/* Header */}
            <header className="flex justify-between items-center p-6 border-b border-white/10 bg-black/20">
                <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10`}>
                        <Shield className={`w-8 h-8 ${currentTheme.accentClass.split(' ')[0]}`} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-wider font-mono">BATTLE ARENA</h1>
                        <p className="text-xs text-white/50 tracking-[0.2em]">{currentTheme.description}</p>
                    </div>
                </div>

                {/* Theme Switcher for Demo */}
                <div className="flex gap-2">
                    {(Object.keys(THEMES) as RPGTheme[]).map((t) => (
                        <button
                            key={t}
                            onClick={() => setTheme(t)}
                            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border transition-all
                    ${theme === t
                                    ? `bg-white/20 border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.3)]`
                                    : 'border-white/10 text-white/40 hover:text-white/80 hover:border-white/30'
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </header>

            <main className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Character Card (Left Col) */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="lg:col-span-4 flex flex-col gap-6"
                >
                    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-1`}>
                        <div className="absolute top-0 right-0 p-4 opacity-50">
                            <User className="w-48 h-48 text-white/5" />
                        </div>

                        <div className="relative z-10 p-6 flex flex-col items-center text-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className={`w-32 h-32 rounded-full border-4 border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden mb-4 ${currentTheme.accentClass.split(' ')[1]}`}
                            >
                                <img
                                    src={currentTheme.avatar}
                                    alt="Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            <h2 className="text-3xl font-black tracking-tight">{profile?.nickname || 'Student'}</h2>
                            <p className={`text-sm font-bold uppercase tracking-widest mb-6 ${currentTheme.accentClass.split(' ')[0]}`}>
                                Level {profile?.level || 1} {profile?.character_class || 'Novice'}
                            </p>

                            {/* XP Bar */}
                            <div className="w-full bg-black/40 h-4 rounded-full overflow-hidden border border-white/5">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(profile?.xp || 0) % 100}%` }}
                                    className={`h-full ${theme === 'nano' ? 'bg-cyan-500' : theme === 'banana' ? 'bg-yellow-400' : theme === 'flash' ? 'bg-red-500' : 'bg-white'}`}
                                />
                            </div>
                            <div className="flex justify-between w-full text-xs text-white/40 mt-2 font-mono">
                                <span>XP: {profile?.xp || 0}</span>
                                <span>NEXT: {((Math.floor((profile?.xp || 0) / 100) + 1) * 100)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Battle Button */}
                    <motion.button
                        whileHover={{ scale: 1.02, textShadow: "0 0 8px rgb(255,255,255)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate('/rpg/matchmaking')}
                        className={`relative group h-24 rounded-3xl border-2 overflow-hidden flex items-center justify-center gap-4 transition-all
                    ${theme === 'nano' ? 'border-cyan-500/30 bg-cyan-900/20 hover:bg-cyan-900/40' :
                                theme === 'banana' ? 'border-yellow-500/30 bg-yellow-900/20 hover:bg-yellow-900/40' :
                                    theme === 'flash' ? 'border-red-500/30 bg-red-900/20 hover:bg-red-900/40' :
                                        'border-white/30 bg-white/10 hover:bg-white/20'
                            }`}
                    >
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]`} />

                        <Swords className={`w-8 h-8 ${currentTheme.accentClass.split(' ')[0]}`} />
                        <span className="text-3xl font-black italic tracking-tighter">BATTLE NOW</span>
                    </motion.button>
                </motion.div>

                {/* Leaderboard (Right Col) */}
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-8 bg-black/20 rounded-3xl border border-white/5 p-6 backdrop-blur-md"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Trophy className={`w-6 h-6 ${currentTheme.accentClass.split(' ')[0]}`} />
                        <h3 className="text-xl font-bold tracking-wide">TOP PLAYERS</h3>
                    </div>

                    <div className="space-y-3">
                        {leaderboard.length === 0 ? (
                            <div className="text-white/30 text-center py-10">No champions yet...</div>
                        ) : (
                            leaderboard.map((player, idx) => (
                                <motion.div
                                    key={player.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`flex items-center p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-colors group
                                ${idx === 0 ? 'bg-gradient-to-r from-yellow-500/10 to-transparent border-yellow-500/20' : ''}
                            `}
                                >
                                    <div className={`w-8 h-8 flex items-center justify-center font-bold text-lg mr-4 
                                ${idx === 0 ? 'text-yellow-400' : idx === 1 ? 'text-gray-300' : idx === 2 ? 'text-amber-600' : 'text-white/20'}
                            `}>
                                        #{idx + 1}
                                    </div>

                                    <div className="w-10 h-10 rounded-full bg-white/10 mr-4 overflow-hidden">
                                        { /* Placeholder avatar logic */}
                                        <div className="w-full h-full flex items-center justify-center text-xs font-bold bg-gradient-to-br from-white/20 to-transparent">
                                            {player.nickname?.[0]}
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="font-bold flex items-center gap-2">
                                            {player.nickname}
                                            {idx === 0 && <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />}
                                        </div>
                                        <div className="text-xs text-white/40">Level {player.level} {player.character_class}</div>
                                    </div>

                                    <div className="font-mono font-bold text-xl opacity-80 group-hover:opacity-100 transition-opacity">
                                        {player.xp.toLocaleString()} XP
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                </motion.div>

            </main>
        </RPGLayout>
    );
};
