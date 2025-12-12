import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { DocumentIcon } from '../ui/Icon';

interface QuizResult {
    quizId: string;
    quizTitle: string;
    score: number;
    totalQuestions: number;
    percentage: number;
    completedAt: Date;
}

interface RecentQuizzesProps {
    quizzes: QuizResult[];
}

/**
 * Helper function to determine badge color based on score percentage.
 */
const getScoreBadgeColor = (percentage: number): string => {
    if (percentage >= 90) return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
    if (percentage >= 70) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
    return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
};

/**
 * Recent quiz results component.
 * Displays the last 5 quiz attempts with scores.
 */
export const RecentQuizzes: React.FC<RecentQuizzesProps> = ({ quizzes }) => {
    return (
        <Card padding="none">
            <CardHeader>
                <CardTitle>Recent Quiz Results</CardTitle>
            </CardHeader>
            <CardContent>
                {quizzes.length > 0 ? (
                    <div className="space-y-4">
                        {quizzes.map((quiz, index) => (
                            <div key={`${quiz.quizId}-${index}`} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                                <div className="flex-1">
                                    <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-1">
                                        {quiz.quizTitle}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        {quiz.completedAt.toLocaleDateString()} • {quiz.score}/{quiz.totalQuestions} correct
                                    </p>
                                </div>
                                <div className="ml-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getScoreBadgeColor(quiz.percentage)}`}>
                                        {quiz.percentage.toFixed(0)}%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8">
                        <DocumentIcon className="w-12 h-12 text-slate-400 dark:text-slate-500 mx-auto mb-4" />
                        <p className="text-slate-500 dark:text-slate-400 mb-4">No quizzes completed yet</p>
                        <Link
                            to="/"
                            className="inline-flex items-center px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-colors"
                        >
                            Start Learning
                        </Link>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default RecentQuizzes;
