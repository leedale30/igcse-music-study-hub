import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RPGLayout } from './RPGLayout';
import { useParams, useNavigate } from 'react-router-dom';
import { getMatchHistory } from '../../services/rpgService'; // OR getMatchDetails
import { useAuth } from '../../contexts/AuthContext';
import { Trophy, Star, RefreshCcw, Home } from 'lucide-react';

// You might need a specific fetch for one match if history isn't enough
// For now assuming we can pass state or fetch it. 
// Ideally we'd have getMatch(id) in the service.

export const ResultsView: React.FC = () => {
    const { matchId } = useParams<{ matchId: string }>();
    const navigate = useNavigate();
    const { user } = useAuth();

    // Mock result state (replace with real fetch)
    const [result, setResult] = useState<'win' | 'loss' | 'draw' | null>(null);
    const [xpGained, setXpGained] = useState(0);

    useEffect(() => {
        // In a real implementation:
        // const match = await getMatch(matchId);
        // if (match.winner === user.id) setResult('win'); ...

        // Simulating for visual check
        setResult('win');
        setXpGained(50);
    }, [matchId, user]);

    if (!result) return <div>Loading...</div>;

    const isWin = result === 'win';

    return (
        <RPGLayout theme={isWin ? 'light' : 'nano'}>
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">

                {/* Animated Trophy/Result */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className={`w-40 h-40 rounded-full flex items-center justify-center border-4 shadow-2xl
                ${isWin ? 'bg-yellow-500/20 border-yellow-400 shadow-yellow-500/50' : 'bg-red-500/20 border-red-500 shadow-red-500/50'}
            `}
                >
                    {isWin ? (
                        <Trophy className="w-20 h-20 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
                    ) : (
                        <Star className="w-20 h-20 text-red-500 opacity-50" />
                    )}
                </motion.div>

                {/* Text */}
                <div className="space-y-2">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className={`text-6xl font-black tracking-tighter italic uppercase
                    ${isWin ? 'text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-amber-600' : 'text-gray-400'}
                `}
                    >
                        {isWin ? 'VICTORY!' : 'DEFEAT'}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-white/50 tracking-widest text-sm"
                    >
                        MATCH ID: {matchId}
                    </motion.p>
                </div>

                {/* XP Gain Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="bg-white/10 px-8 py-4 rounded-2xl border border-white/10 flex flex-col items-center"
                >
                    <span className="text-xs text-white/50 uppercase tracking-widest mb-1">Rewards</span>
                    <div className="text-4xl font-black text-cyan-400 flex items-center gap-2">
                        +{xpGained} <span className="text-sm text-cyan-500/50 mt-2">XP</span>
                    </div>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex gap-4 mt-8"
                >
                    <button
                        onClick={() => navigate('/rpg/matchmaking')}
                        className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform flex items-center gap-2 group"
                    >
                        <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                        PLAY AGAIN
                    </button>
                    <button
                        onClick={() => navigate('/rpg')}
                        className="px-8 py-4 bg-black/40 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2"
                    >
                        <Home className="w-4 h-4" />
                        LOBBY
                    </button>
                </motion.div>

            </div>
        </RPGLayout>
    );
};
