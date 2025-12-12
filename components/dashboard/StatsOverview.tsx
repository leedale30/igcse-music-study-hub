import React from 'react';
import { Card } from '../ui/Card';
import { CheckCircleIcon, TrendingUpIcon, ClockIcon, StarIcon } from '../ui/Icon';

interface StatsOverviewProps {
    totalQuizzesCompleted: number;
    averageScore: number;
    totalStudyTime: string;
    badgesCount: number;
}

/**
 * Helper function to determine score color based on percentage.
 */
const getScoreColor = (percentage: number): string => {
    if (percentage >= 90) return 'text-green-600 dark:text-green-400';
    if (percentage >= 70) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
};

/**
 * Stats overview grid component showing key metrics.
 * Extracted from DashboardPage for reusability.
 */
export const StatsOverview: React.FC<StatsOverviewProps> = ({
    totalQuizzesCompleted,
    averageScore,
    totalStudyTime,
    badgesCount,
}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Quizzes Completed */}
            <Card>
                <div className="flex items-center">
                    <div className="p-2 bg-sky-100 dark:bg-sky-900/20 rounded-lg">
                        <CheckCircleIcon className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                    </div>
                    <div className="ml-4">
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Quizzes Completed</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{totalQuizzesCompleted}</p>
                    </div>
                </div>
            </Card>

            {/* Average Score */}
            <Card>
                <div className="flex items-center">
                    <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                        <TrendingUpIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="ml-4">
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Average Score</p>
                        <p className={`text-2xl font-bold ${getScoreColor(averageScore)}`}>
                            {averageScore.toFixed(1)}%
                        </p>
                    </div>
                </div>
            </Card>

            {/* Study Time */}
            <Card>
                <div className="flex items-center">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                        <ClockIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="ml-4">
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Study Time</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{totalStudyTime}</p>
                    </div>
                </div>
            </Card>

            {/* Badges Earned */}
            <Card>
                <div className="flex items-center">
                    <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                        <StarIcon className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div className="ml-4">
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Badges Earned</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{badgesCount}</p>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default StatsOverview;
