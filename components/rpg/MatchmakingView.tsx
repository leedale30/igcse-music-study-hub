import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RPGLayout } from './RPGLayout';
import { startMatch, joinMatch, getPendingMatches, RPGMatch } from '../../services/rpgService';
import { useNavigate } from 'react-router-dom';
import { Radar, User, Sword } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export const MatchmakingView: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [status, setStatus] = useState<'searching' | 'found' | 'joining'>('searching');
    const [pendingMatches, setPendingMatches] = useState<RPGMatch[]>([]);
    const [error, setError] = useState('');

    // Initial search effect
    useEffect(() => {
        const search = async () => {
            // Fetch open lobbies
            const matches = await getPendingMatches();
            // Filter out own matches
            const joinable = matches.filter(m => m.player_a !== user?.id);
            setPendingMatches(joinable);
        };

        search();
        const interval = setInterval(search, 3000);
        return () => clearInterval(interval);
    }, [user]);

    const handleCreateMatch = async () => {
        setStatus('joining');
        // Create new match
        try {
            const { success, match, error } = await startMatch({ total_turns: 5 });
            if (success && match) {
                setStatus('found');
                setTimeout(() => {
                    navigate(`/rpg/battle/${match.id}`);
                }, 1500);
            } else {
                setError(error || 'Failed to start match');
                setStatus('searching');
            }
        } catch (e) {
            setError('Network error');
            setStatus('searching');
        }
    };

    const handleJoinMatch = async (matchId: string) => {
        setStatus('joining');
        try {
            const { success, match, error } = await joinMatch(matchId);
            if (success && match) {
                setStatus('found');
                setTimeout(() => {
                    navigate(`/rpg/battle/${match.id}`);
                }, 1500);
            } else {
                setError(error || 'Failed to join match');
                setStatus('searching');
            }
        } catch (e) {
            setError('Network error');
            setStatus('searching');
        }
    };

    return (
        <RPGLayout theme="nano" className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-8 w-full max-w-lg">

                {/* Radar Animation */}
                <div className="relative w-64 h-64 flex items-center justify-center">
                    {/* Ping Circles */}
                    <motion.div
                        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        className="absolute w-full h-full rounded-full border border-cyan-500/50"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                        className="absolute w-2/3 h-2/3 rounded-full border border-cyan-500/30"
                    />

                    {/* Scanning Line */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-cyan-500/20 to-transparent"
                        style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 50%)' }}
                    />

                    {/* Central Icon */}
                    <div className="absolute z-10 w-20 h-20 bg-black rounded-full border-2 border-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                        <Radar className="w-10 h-10 text-cyan-400 animate-pulse" />
                    </div>
                </div>

                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">
                        {status === 'searching' && "SCANNING FOR OPPONENTS..."}
                        {status === 'joining' && "ESTABLISHING UPLINK..."}
                        {status === 'found' && "MATCH FOUND!"}
                    </h2>
                    <p className="text-cyan-400/60 font-mono text-sm tracking-widest">
                        ZONE: SECTOR 7 // LATENCY: 12ms
                    </p>
                    {error && <p className="text-red-500 font-bold">{error}</p>}
                </div>

                {/* Action Buttons */}
                <div className="w-full space-y-4">
                    {/* Pending Matches List */}
                    {pendingMatches.length > 0 && (
                        <div className="w-full max-h-48 overflow-y-auto space-y-2 bg-black/40 p-2 rounded-xl border border-white/10">
                            <p className="text-xs text-white/30 text-center sticky top-0 bg-black/80 py-1">AVAILABLE CHALLENGERS</p>
                            {pendingMatches.map(m => (
                                <motion.button
                                    key={m.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    onClick={() => handleJoinMatch(m.id)}
                                    className="w-full p-3 flex items-center justify-between rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/5 hover:border-cyan-500/50 transition-all text-sm"
                                >
                                    <span className="flex items-center gap-2">
                                        <User className="w-4 h-4 text-white/40" />
                                        Player (Level ?)
                                    </span>
                                    <span className="flex items-center text-cyan-400 font-bold text-xs bg-cyan-900/40 px-2 py-1 rounded">
                                        JOIN <Sword className="w-3 h-3 ml-1" />
                                    </span>
                                </motion.button>
                            ))}
                        </div>
                    )}

                    <button
                        onClick={handleCreateMatch}
                        className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        CREATE NEW LOBBY
                    </button>

                    <button
                        onClick={() => navigate('/rpg')}
                        className="w-full py-3 text-white/40 hover:text-white transition-colors text-sm tracking-widest uppercase hover:underline"
                    >
                        Cancel Search
                    </button>
                </div>

            </div>
        </RPGLayout>
    );
};
