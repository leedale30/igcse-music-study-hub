import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RPGLayout } from './RPGLayout';
import { THEMES, RPGTheme } from '../../types/rpg_themes';
import { useNavigate } from 'react-router-dom';
import { Timer, CheckCircle, XCircle, Trophy, ArrowLeft, Zap, Target, Star } from 'lucide-react';
import { supabase } from '../../src/lib/supabase';
import { awardXP } from '../../services/rpgService';
import { useAuth } from '../../contexts/AuthContext';

interface Question {
    id: string;
    type: string;
    content: {
        prompt: string;
        choices: string[];
        questionType: string;
    };
    answer_key: {
        correct: number;
    };
    difficulty: number;
}

export const PracticeView: React.FC = () => {
    const [theme] = useState<RPGTheme>('nano');
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);
    const [timeLeft, setTimeLeft] = useState(15);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [loading, setLoading] = useState(true);
    const [totalAnswered, setTotalAnswered] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [xpEarned, setXpEarned] = useState(0);
    const [xpSaved, setXpSaved] = useState(false);
    const navigate = useNavigate();
    const { user } = useAuth();

    const currentTheme = THEMES[theme];

    // Fetch random questions
    useEffect(() => {
        const fetchQuestions = async () => {
            // Try to use the random RPC
            let { data, error } = await supabase.rpc('get_random_rpg_questions', { limit_count: 50 });

            if (error) {
                console.warn('RPC get_random_rpg_questions not found, using random range fallback');

                // Get total count for random offset
                const { count } = await supabase.from('rpg_questions').select('*', { count: 'exact', head: true });
                const total = count || 800;
                const offset = Math.floor(Math.random() * Math.max(0, total - 50));

                const result = await supabase
                    .from('rpg_questions')
                    .select('*')
                    .range(offset, offset + 49);
                data = result.data;
                error = result.error;
            }

            if (error) {
                console.error('Error fetching questions:', error);
                return;
            }

            // Shuffle the questions array for extra randomness
            const shuffled = (data || []).sort(() => Math.random() - 0.5);
            setQuestions(shuffled);
            setLoading(false);
        };

        fetchQuestions();
    }, []);

    // State for shuffled choices of current question
    const [currentChoices, setCurrentChoices] = useState<{ text: string; originalIndex: number }[]>([]);

    useEffect(() => {
        if (questions.length > 0 && currentIndex < questions.length) {
            const q = questions[currentIndex];
            if (q.content.choices) {
                const shuffled = q.content.choices.map((text, idx) => ({ text, originalIndex: idx }))
                    .sort(() => Math.random() - 0.5);
                setCurrentChoices(shuffled);
            }
        }
    }, [currentIndex, questions]);

    // Timer countdown
    useEffect(() => {
        if (loading || gameOver || showResult) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    // Time's up - treat as wrong answer
                    handleAnswer(-1);
                    return 15;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [loading, gameOver, showResult, currentIndex]);

    const handleAnswer = useCallback((shuffledIndex: number) => {
        if (showResult) return;

        const question = questions[currentIndex];

        // Map the clicked index back to the original index
        const originalIndex = shuffledIndex === -1 ? -1 : currentChoices[shuffledIndex].originalIndex;
        // Access .correct property from answer_key object
        const correct = originalIndex === Number(question.answer_key?.correct);

        setSelectedAnswer(shuffledIndex);
        setIsCorrect(correct);
        setShowResult(true);
        setTotalAnswered(prev => prev + 1);

        if (correct) {
            const points = 10 + (streak * 5) + (question.difficulty * 2);
            setScore(prev => prev + points);
            setStreak(prev => prev + 1);
            setBestStreak(prev => Math.max(prev, streak + 1));
            setCorrectAnswers(prev => prev + 1);
        } else {
            setStreak(0);
        }

        // Move to next question after delay
        setTimeout(() => {
            if (currentIndex >= questions.length - 1) {
                setGameOver(true);
            } else {
                setCurrentIndex(prev => prev + 1);
                setSelectedAnswer(null);
                setShowResult(false);
                setTimeLeft(15);
            }
        }, 1500);
    }, [currentIndex, questions, showResult, streak, currentChoices]);

    // Award XP when game ends
    useEffect(() => {
        if (gameOver && !xpSaved && user?.id) {
            const earnedXP = Math.floor(score / 10); // 10 points = 1 XP
            setXpEarned(earnedXP);

            if (earnedXP > 0) {
                awardXP({
                    user_id: user.id,
                    points: earnedXP,
                    source: 'quiz',
                    metadata: {
                        mode: 'practice',
                        score: score,
                        accuracy: totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0,
                        bestStreak: bestStreak,
                        questionsAnswered: totalAnswered
                    }
                }).then(result => {
                    if (result.success) {
                        // XP awarded successfully
                        setXpSaved(true);
                    } else {
                        console.error('Failed to award XP:', result.error);
                    }
                });
            } else {
                setXpSaved(true);
            }
        }
    }, [gameOver, xpSaved, user, score, totalAnswered, correctAnswers, bestStreak]);

    const restartGame = () => {
        setCurrentIndex(0);
        setScore(0);
        setStreak(0);
        setBestStreak(0);
        setTimeLeft(15);
        setSelectedAnswer(null);
        setShowResult(false);
        setGameOver(false);
        setTotalAnswered(0);
        setCorrectAnswers(0);
        setXpEarned(0);
        setXpSaved(false);
        // Reshuffle existing questions
        setQuestions(prev => [...prev].sort(() => Math.random() - 0.5));
    };

    if (loading) {
        return (
            <RPGLayout theme={theme}>
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-2xl text-white/50 animate-pulse">Loading questions...</div>
                </div>
            </RPGLayout>
        );
    }

    if (gameOver) {
        const accuracy = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0;

        return (
            <RPGLayout theme={theme}>
                <div className="flex-1 flex items-center justify-center p-6">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 p-8 max-w-md w-full text-center"
                    >
                        <Trophy className="w-20 h-20 mx-auto mb-6 text-yellow-400" />
                        <h1 className="text-4xl font-black mb-2">Practice Complete!</h1>

                        <div className="grid grid-cols-2 gap-4 my-8">
                            <div className="bg-white/5 rounded-xl p-4">
                                <div className="text-3xl font-bold text-cyan-400">{score}</div>
                                <div className="text-sm text-white/50">Total Score</div>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4">
                                <div className="text-3xl font-bold text-green-400">{accuracy}%</div>
                                <div className="text-sm text-white/50">Accuracy</div>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4">
                                <div className="text-3xl font-bold text-yellow-400">{bestStreak}</div>
                                <div className="text-sm text-white/50">Best Streak</div>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4">
                                <div className="text-3xl font-bold text-purple-400">{correctAnswers}/{totalAnswered}</div>
                                <div className="text-sm text-white/50">Correct</div>
                            </div>
                        </div>

                        {/* XP Earned Banner */}
                        {xpEarned > 0 && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3, type: 'spring' }}
                                className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-4 flex items-center justify-center gap-3"
                            >
                                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                                <span className="text-xl font-bold text-yellow-300">+{xpEarned} XP Earned!</span>
                                {xpSaved && <span className="text-xs text-green-400">(Saved)</span>}
                            </motion.div>
                        )}

                        <div className="flex gap-4">
                            <button
                                onClick={() => navigate('/rpg')}
                                className="flex-1 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5 inline mr-2" />
                                Lobby
                            </button>
                            <button
                                onClick={restartGame}
                                className="flex-1 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 transition-colors font-bold"
                            >
                                Play Again
                            </button>
                        </div>
                    </motion.div>
                </div>
            </RPGLayout>
        );
    }

    const question = questions[currentIndex];

    return (
        <RPGLayout theme={theme}>
            {/* Header */}
            <header className="flex justify-between items-center p-4 border-b border-white/10 bg-black/20">
                <button
                    onClick={() => navigate('/rpg')}
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Exit Practice
                </button>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        <span className="font-bold">{streak} streak</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-cyan-400" />
                        <span className="font-bold">{score} pts</span>
                    </div>
                </div>
            </header>

            {/* Progress Bar */}
            <div className="h-1 bg-white/10">
                <motion.div
                    className="h-full bg-cyan-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center p-6">
                {/* Timer */}
                <motion.div
                    key={timeLeft}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className={`flex items-center gap-2 mb-6 text-2xl font-bold ${timeLeft <= 5 ? 'text-red-400' : 'text-white/60'
                        }`}
                >
                    <Timer className="w-6 h-6" />
                    {timeLeft}s
                </motion.div>

                {/* Question Card */}
                <motion.div
                    key={currentIndex}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="w-full max-w-2xl bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 p-8"
                >
                    <div className="text-sm text-white/40 mb-2">
                        Question {currentIndex + 1} of {questions.length} • Difficulty: {'⭐'.repeat(question.difficulty)}
                    </div>

                    <h2 className="text-xl font-bold mb-8">{question.content.prompt}</h2>

                    <div className="space-y-3">
                        {currentChoices.map((choiceObj, index) => {
                            let buttonClass = 'w-full p-4 rounded-xl border text-left transition-all ';

                            if (showResult) {
                                if (choiceObj.originalIndex === Number(question.answer_key?.correct)) {
                                    buttonClass += 'border-green-500 bg-green-500/20 text-green-200';
                                } else if (index === selectedAnswer && !isCorrect) {
                                    buttonClass += 'border-red-500 bg-red-500/20 text-red-200';
                                } else {
                                    buttonClass += 'border-white/10 text-white/30';
                                }
                            } else {
                                buttonClass += 'border-white/10 hover:border-white/30 hover:bg-white/5';
                            }

                            return (
                                <motion.button
                                    key={index}
                                    onClick={() => handleAnswer(index)}
                                    disabled={showResult}
                                    whileHover={!showResult ? { scale: 1.02 } : {}}
                                    whileTap={!showResult ? { scale: 0.98 } : {}}
                                    className={buttonClass}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">
                                            {String.fromCharCode(65 + index)}
                                        </span>
                                        <span className="flex-1">{choiceObj.text}</span>
                                        {showResult && choiceObj.originalIndex === Number(question.answer_key?.correct) && (
                                            <CheckCircle className="w-6 h-6 text-green-400" />
                                        )}
                                        {showResult && index === selectedAnswer && !isCorrect && (
                                            <XCircle className="w-6 h-6 text-red-400" />
                                        )}
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Feedback */}
                <AnimatePresence>
                    {showResult && (
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className={`mt-6 text-2xl font-bold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}
                        >
                            {isCorrect ? `+${10 + (streak * 5) + (question.difficulty * 2)} points!` : 'Incorrect!'}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </RPGLayout>
    );
};
