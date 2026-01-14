import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { marked } from 'marked';
import { ArrowLeft, CheckCircle, XCircle, AlertCircle, Award, BookOpen, Bot, Link as LinkIcon, Loader2 } from 'lucide-react';
import { AbcRenderer } from '../components/tutor/AbcRenderer';
import { mock1Quizzes } from '../services/syllabusContent/mock1Quizzes';
import { mock1BaroqueQuizzes } from '../services/syllabusContent/mock1BaroqueQuizzes';
import { useAuth } from '../contexts/AuthContext';
import { useProgress } from '../contexts/ProgressContext';

// Combine all quiz data
const allQuizData = { ...mock1Quizzes, ...mock1BaroqueQuizzes };

const ExamQuizPage: React.FC = () => {
    const { quizId } = useParams<{ quizId: string }>();
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuth();
    const { addQuizResult } = useProgress();

    const [templateId, setTemplateId] = useState<string | null>(null);
    const [quizStartTime] = useState<Date>(new Date());

    // Find the matching quiz ID from all available data
    useEffect(() => {
        if (!quizId) return;

        // 1. Direct match
        if (allQuizData[quizId]) {
            setTemplateId(quizId);
            return;
        }

        // 2. Prefix match (e.g., 'vivaldi-spring' -> 'baroque-vivaldi-spring')
        const foundId = Object.keys(allQuizData).find(key =>
            key === quizId || key.endsWith(`-${quizId}`) || key === `quiz-${quizId}`
        );

        if (foundId) {
            setTemplateId(foundId);
        } else {
            console.error(`Quiz not found for ID: ${quizId}`);
        }
    }, [quizId]);

    const quiz = templateId ? (allQuizData as any)[templateId] : null;

    const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    if (!quiz) {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-center">
                <Loader2 className="w-8 h-8 animate-spin text-indigo-500 mb-4" />
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Loading Quiz...</h2>
            </div>
        );
    }

    const handleOptionSelect = (questionId: number, optionIndex: number) => {
        if (isSubmitted) return;
        setUserAnswers(prev => ({
            ...prev,
            [questionId]: optionIndex
        }));
    };

    const handleSubmit = async () => {
        let newScore = 0;
        quiz.questions.forEach(q => {
            if (userAnswers[q.id] === q.correctAnswer) {
                newScore++;
            }
        });

        setScore(newScore);
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Save progress to Supabase for logged-in users
        if (user && quiz) {
            const timeSpent = Math.floor((new Date().getTime() - quizStartTime.getTime()) / 1000);
            const percentage = (newScore / quiz.questions.length) * 100;

            try {
                addQuizResult({
                    quizId: quiz.id,
                    quizTitle: quiz.title,
                    sectionId: location.pathname.split('/')[2] || 'general', // e.g., '1st-year'
                    score: newScore,
                    totalQuestions: quiz.questions.length,
                    percentage,
                    timeSpent,
                    answers: userAnswers
                });
                console.log('Quiz progress saved to Supabase');
            } catch (error) {
                console.error('Failed to save quiz progress:', error);
            }
        }
    };

    const getScoreColor = () => {
        const percentage = (score / quiz.questions.length) * 100;
        if (percentage >= 80) return 'text-green-500';
        if (percentage >= 60) return 'text-yellow-500';
        return 'text-red-500';
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate(-1)}
                            aria-label="Go back"
                            className="p-2 -ml-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-500 dark:text-gray-400"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div>
                            <h1 className="text-lg font-bold text-gray-900 dark:text-white truncate max-w-md">
                                {quiz.title}
                            </h1>
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                                {quiz.topicCode}
                            </p>
                        </div>
                    </div>
                    {isSubmitted && (
                        <div className="flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-full border border-indigo-100 dark:border-indigo-800">
                            <Award className={`w-5 h-5 ${getScoreColor()}`} />
                            <span className="font-bold text-gray-900 dark:text-white">
                                {score} / {quiz.questions.length}
                            </span>
                        </div>
                    )}
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
                {/* Description & Audio */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {quiz.description}
                    </p>

                    {/* Revision Notes */}
                    {quiz.revisionNotes && (
                        <div className="mb-8 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-800/50 overflow-hidden">
                            <div className="bg-indigo-100/50 dark:bg-indigo-900/30 px-6 py-3 border-b border-indigo-200/50 dark:border-indigo-800/50 flex items-center gap-3">
                                <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                <h3 className="font-bold text-indigo-900 dark:text-indigo-100">Revision Notes</h3>
                            </div>
                            <div
                                className="p-6 prose prose-indigo dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-indigo-900 dark:prose-headings:text-indigo-100 prose-p:text-gray-700 dark:prose-p:text-gray-300"
                                dangerouslySetInnerHTML={{ __html: marked.parse(quiz.revisionNotes) as string }}
                            />
                        </div>
                    )}

                    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
                        <div className="bg-gray-950 px-4 py-3 border-b border-gray-800 flex items-center gap-2">
                            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Audio Stimulus</span>
                        </div>
                        <div className="p-1">
                            <AbcRenderer abc={quiz.abcNotation} id={`quiz-${quiz.id}`} />
                        </div>
                    </div>
                </div>



                {/* AI Tutor Reminder */}
                {
                    quiz.aiReminder && (
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800/50 rounded-xl p-4 flex items-start gap-4 shadow-sm">
                            <div className="bg-amber-100 dark:bg-amber-800/50 p-2 rounded-lg">
                                <Bot className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-amber-800 dark:text-amber-200 text-sm mb-1">Stuck on a question?</h4>
                                <p className="text-amber-700 dark:text-amber-300 text-sm">
                                    Ask <strong>Maestro AI</strong> for help! It can explain complex concepts, analyze the score with you, or clarify any musical terms.
                                </p>
                            </div>
                        </div>
                    )
                }

                {/* Related Links */}
                {
                    quiz.relatedLinks && quiz.relatedLinks.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {quiz.relatedLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.url}
                                    target="_blank"
                                    className="group flex items-center gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-700 transition-all shadow-sm hover:shadow-md"
                                >
                                    <div className="bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded-lg group-hover:bg-indigo-100 dark:group-hover:bg-indigo-800/50 transition-colors">
                                        <LinkIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">Recommended Resource</p>
                                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {link.text}
                                        </h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )
                }
                <div className="space-y-6">
                    {quiz.questions.map((q, index) => {
                        const isCorrect = userAnswers[q.id] === q.correctAnswer;
                        const isWrong = userAnswers[q.id] !== undefined && userAnswers[q.id] !== q.correctAnswer;

                        return (
                            <div
                                key={q.id}
                                className={`bg-white dark:bg-gray-800 rounded-xl border p-6 transition-all duration-300 ${isSubmitted
                                    ? isCorrect
                                        ? 'border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.1)]'
                                        : 'border-red-500/50'
                                    : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700'
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-sm font-bold text-gray-500 dark:text-gray-400 mt-0.5">
                                        {index + 1}
                                    </span>
                                    <div className="flex-1 space-y-4">
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                            {q.question}
                                        </h3>

                                        <div className="space-y-3">
                                            {q.options.map((option, optIndex) => {
                                                const isSelected = userAnswers[q.id] === optIndex;
                                                // Styling logic for options
                                                let optionStyle = "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750";

                                                if (isSubmitted) {
                                                    if (optIndex === q.correctAnswer) {
                                                        optionStyle = "bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-300";
                                                    } else if (isSelected && optIndex !== q.correctAnswer) {
                                                        optionStyle = "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-300";
                                                    } else {
                                                        optionStyle = "opacity-50 border-gray-200 dark:border-gray-700";
                                                    }
                                                } else if (isSelected) {
                                                    optionStyle = "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 ring-1 ring-indigo-500";
                                                }

                                                return (
                                                    <button
                                                        key={optIndex}
                                                        onClick={() => handleOptionSelect(q.id, optIndex)}
                                                        disabled={isSubmitted}
                                                        className={`w-full text-left p-4 rounded-lg border transition-all flex items-center justify-between group ${optionStyle}`}
                                                    >
                                                        <span className="flex-1">{option}</span>
                                                        {isSubmitted && optIndex === q.correctAnswer && (
                                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 ml-2" />
                                                        )}
                                                        {isSubmitted && isSelected && optIndex !== q.correctAnswer && (
                                                            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 ml-2" />
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        {isSubmitted && (
                                            <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800 text-sm">
                                                <div className="flex items-start gap-2">
                                                    <AlertCircle className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                                                    <div>
                                                        <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-1">Rationale:</span>
                                                        <p className="text-gray-700 dark:text-gray-300">
                                                            {q.rationale}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer / Submit Button */}
                {
                    !isSubmitted && (
                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={handleSubmit}
                                disabled={Object.keys(userAnswers).length !== quiz.questions.length}
                                className={`px-8 py-4 rounded-xl font-bold text-white shadow-lg transform transition-all 
                                ${Object.keys(userAnswers).length === quiz.questions.length
                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 hover:shadow-xl'
                                        : 'bg-gray-400 cursor-not-allowed opacity-70'
                                    }`}
                            >
                                {Object.keys(userAnswers).length === quiz.questions.length
                                    ? 'Submit Quiz'
                                    : `Answer all questions (${Object.keys(userAnswers).length}/${quiz.questions.length})`
                                }
                            </button>
                        </div>
                    )
                }

                {
                    isSubmitted && (
                        <div className="mt-8 flex justify-center">
                            <button
                                onClick={() => {
                                    setIsSubmitted(false);
                                    setUserAnswers({});
                                    setScore(0);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                Retake Quiz
                            </button>
                        </div>
                    )
                }
            </main >
        </div >
    );
};


export default ExamQuizPage;
