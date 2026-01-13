import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RPGLayout } from './RPGLayout';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuestion, submitAnswer, subscribeToMatch, subscribeToMatchTurns, RPGMatch, RPGQuestion } from '../../services/rpgService';
import { useAuth } from '../../contexts/AuthContext';
import { cn } from '../../src/lib/utils';
import { Heart, Timer, Sword, ShieldAlert } from 'lucide-react';
import { THEMES } from '../../types/rpg_themes';

export const BattleView: React.FC = () => {
    const { matchId } = useParams<{ matchId: string }>();
    const navigate = useNavigate();
    const { user } = useAuth();

    // State
    const [match, setMatch] = useState<RPGMatch | null>(null);
    const [question, setQuestion] = useState<RPGQuestion | null>(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [feedback, setFeedback] = useState<{ correct: boolean; damage: number } | null>(null);
    const [timeLeft, setTimeLeft] = useState(30);
    const [waitingForOpponent, setWaitingForOpponent] = useState(false);

    // Refs for timer
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const timeTakenRef = useRef(0);
    const startTimeRef = useRef(Date.now());

    // Load initial match state
    useEffect(() => {
        if (!matchId) return;

        const init = async () => {
            const { success, question: q, match_state, already_answered } = await getQuestion(matchId);
            if (success) {
                setQuestion(q || null);
                // We need to fetch the full match object separately or construct it from match_state
                // For simplicity assuming subscriptions will fill in the details shortly
            }
            // Also need to get initial match state purely for health bars 
            // The subscription will handle updates
        };

        init();

        // Subscriptions
        const unsubMatch = subscribeToMatch(matchId, (updatedMatch) => {
            setMatch(updatedMatch);

            // Check for match end
            if (updatedMatch.status === 'finished') {
                setTimeout(() => navigate(`/rpg/results/${matchId}`), 2000);
            }

            // Check for turn change (reset for next question)
            if (match && updatedMatch.current_turn > match.current_turn) {
                // New Turn!
                setFeedback(null);
                setSelectedAnswer(null);
                setWaitingForOpponent(false);
                setLoading(true); // Fetch new question
                getQuestion(matchId).then(({ question }) => {
                    setQuestion(question || null);
                    setLoading(false);
                    setTimeLeft(30);
                    startTimeRef.current = Date.now();
                });
            }
        });

        // Simulating the match fetch for initial render since the subscription only creates updates
        // In a real app we'd fetch the match once here too.

        return () => {
            unsubMatch();
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [matchId]);

    // Timer Logic
    useEffect(() => {
        if (loading || waitingForOpponent || feedback) return;

        // Reset timer
        startTimeRef.current = Date.now();
        timeTakenRef.current = 0;

        timerRef.current = setInterval(() => {
            const passed = Math.floor((Date.now() - startTimeRef.current) / 1000);
            const remaining = 30 - passed;
            if (remaining <= 0) {
                setTimeLeft(0);
                if (timerRef.current) clearInterval(timerRef.current);
                handleTimeout();
            } else {
                setTimeLeft(remaining);
            }
        }, 1000);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [question, loading, waitingForOpponent, feedback]);

    const handleTimeout = () => {
        handleSubmit(-1); // Timeout treated as wrong answer
    };

    const handleSubmit = async (answerPayload: any) => {
        if (submitting || waitingForOpponent || !matchId || !question) return;

        setSubmitting(true);
        timeTakenRef.current = Date.now() - startTimeRef.current;
        if (timerRef.current) clearInterval(timerRef.current);

        // Optimistic UI update
        setSelectedAnswer(answerPayload);

        try {
            const { success, result } = await submitAnswer({
                match_id: matchId!,
                question_id: question!.id,
                answer: answerPayload,
                time_taken_ms: timeTakenRef.current
            });

            if (success && result) {
                if (result.both_answered) {
                    // Show feedback immediately then wait for turn update via subscription
                    setFeedback({ correct: result.correct, damage: result.damage });
                    // Trigger shake effect via match update
                } else {
                    // Waiting for opponent
                    setWaitingForOpponent(true);
                }
            } else {
                // Error handling
            }
        } catch (e) {
            console.error(e);
        } finally {
            setSubmitting(false);
        }
    };

    // State for shuffled choices
    const [shuffledChoices, setShuffledChoices] = useState<{ text: string; originalIndex: number }[]>([]);

    useEffect(() => {
        if (question && question.content.choices) {
            const shuffled = question.content.choices.map((text: string, idx: number) => ({ text, originalIndex: idx }))
                .sort(() => Math.random() - 0.5);
            setShuffledChoices(shuffled);
        }
    }, [question]);

    const isPlayerA = user?.id === match?.player_a;
    const myHealth = isPlayerA ? match?.player_a_health : match?.player_b_health;
    const oppHealth = isPlayerA ? match?.player_b_health : match?.player_a_health;

    return (
        <RPGLayout theme="flash" className="overflow-hidden">
            {/* Battle UI */}
            <div className="flex flex-col h-full relative">

                {/* HUD: Health Bars */}
                <div className="absolute top-0 w-full p-6 flex justify-between items-start z-20 pointer-events-none">
                    {/* Player Health */}
                    <div className="w-1/3 space-y-2">
                        <div className="flex justify-between text-cyan-400 font-bold tracking-widest text-sm uppercase">
                            <span>YOU</span>
                            <span>{myHealth}%</span>
                        </div>
                        <div className="h-4 bg-black/60 border border-cyan-500/30 skew-x-[-15deg]">
                            <motion.div
                                animate={{ width: `${myHealth}%` }}
                                className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                            />
                        </div>
                    </div>

                    {/* Timer */}
                    <div className="flex flex-col items-center">
                        <div className={`text-4xl font-black font-mono ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
                            {timeLeft}
                        </div>
                        <div className="text-[10px] text-white/40 tracking-widest mt-1">SECONDS</div>
                    </div>

                    {/* Opponent Health */}
                    <div className="w-1/3 space-y-2 text-right">
                        <div className="flex justify-between text-red-400 font-bold tracking-widest text-sm uppercase">
                            <span>{oppHealth}%</span>
                            <span>OPPONENT</span>
                        </div>
                        <div className="h-4 bg-black/60 border border-red-500/30 skew-x-[15deg] ml-auto">
                            <motion.div
                                animate={{ width: `${oppHealth}%` }}
                                className="h-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] float-right"
                            />
                        </div>
                    </div>
                </div>

                {/* Main Battle Area (Split Screen Effect) */}
                <div className="flex-1 grid grid-cols-2 relative">
                    {/* Left Side (Player) */}
                    <div className="relative border-r border-white/5 bg-gradient-to-r from-cyan-900/10 to-transparent">
                        <img src="/assets/rpg/nano.png" alt="Player Avatar" className="absolute bottom-[-10%] left-[-10%] w-[80%] opacity-50 blur-[2px] pointer-events-none" />
                        <AnimatePresence>
                            {feedback && feedback.damage > 0 && (
                                <motion.div
                                    initial={{ y: 0, opacity: 1, scale: 0.5 }}
                                    animate={{ y: -100, opacity: 0, scale: 1.5 }}
                                    className="absolute top-1/2 left-1/2 text-6xl font-black text-cyan-400 italic drop-shadow-[0_0_10px_rgba(6,182,212,1)]"
                                >
                                    HIT!
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right Side (Opponent) */}
                    <div className="relative bg-gradient-to-l from-red-900/10 to-transparent">
                        <img src="/assets/rpg/flash.png" alt="Opponent Avatar" className="absolute top-[-10%] right-[-10%] w-[80%] opacity-50 blur-[2px] rotate-180 pointer-events-none" />
                        <AnimatePresence>
                            {/* Damage Number on Opponent */}
                            {feedback && feedback.damage > 0 && (
                                <motion.div
                                    initial={{ y: 0, opacity: 1, scale: 0.5 }}
                                    animate={{ y: -50, opacity: 0, scale: 2 }}
                                    className="absolute top-1/2 right-1/2 text-8xl font-black text-white italic"
                                >
                                    -{feedback.damage}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Question Area */}
                <AnimatePresence mode='wait'>
                    {waitingForOpponent ? (
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            className="absolute bottom-0 w-full h-1/2 bg-black/80 backdrop-blur-md border-t border-white/20 flex flex-col items-center justify-center z-30"
                        >
                            <div className="text-2xl font-bold animate-pulse text-cyan-400">WAITING FOR OPPONENT...</div>
                            <div className="w-16 h-1 bg-cyan-500/30 mt-4 rounded-full overflow-hidden">
                                <motion.div
                                    animate={{ x: [-64, 64] }}
                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                    className="w-8 h-full bg-cyan-400"
                                />
                            </div>
                        </motion.div>
                    ) : question && (
                        <motion.div
                            key={question.id}
                            initial={{ y: 200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 200, opacity: 0 }}
                            className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl z-30 flex gap-8"
                        >
                            <div className="flex-1 space-y-6">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-bold leading-relaxed">
                                        {question.content.prompt}
                                    </h3>
                                    <button
                                        onClick={() => alert('Abilities coming in next update!')}
                                        className="bg-yellow-600/20 text-yellow-400 border border-yellow-500/50 px-4 py-2 rounded-lg font-bold hover:bg-yellow-600/40 transition-colors flex items-center gap-2"
                                    >
                                        <Zap className="w-5 h-5" />
                                        ACTIONS
                                    </button>
                                </div>

                                {/* Audio Player */}
                                {(question.type === 'audio' || question.type === 'listening') && question.media_path && (
                                    <div className="w-full bg-black/40 p-4 rounded-xl border border-white/10">
                                        <audio controls autoPlay className="w-full">
                                            <source src={question.media_path} type="audio/mpeg" />
                                            Your browser does not support the audio element.
                                        </audio>
                                    </div>
                                )}

                                {/* Determine input type based on question */}
                                {question.type === 'mcq' && (
                                    <div className="grid grid-cols-2 gap-4">
                                        {shuffledChoices.map((choice, idx) => (
                                            <button
                                                key={idx}
                                                disabled={submitting || selectedAnswer !== null}
                                                onClick={() => handleSubmit(choice.originalIndex)}
                                                className={`p-4 rounded-xl text-left border transition-all
                                                    ${selectedAnswer === choice.originalIndex
                                                        ? 'bg-cyan-500 border-cyan-400 text-black font-bold scale-[1.02]'
                                                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30'
                                                    }
                                                `}
                                            >
                                                <span className="opacity-50 mr-4 font-mono">{String.fromCharCode(65 + idx)}.</span>
                                                {choice.text}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </RPGLayout>
    );
};
