import React, { ReactNode } from 'react';
import { Card } from './Card';

interface StatCardProps {
    icon: ReactNode;
    label: string;
    value: string | number;
    iconBgColor?: string;
    iconColor?: string;
    valueColor?: string;
}

/**
 * A stat card component for displaying metrics like "Quizzes Completed", "Average Score", etc.
 * Extracted from DashboardPage to be reusable.
 */
export const StatCard: React.FC<StatCardProps> = ({
    icon,
    label,
    value,
    iconBgColor = 'bg-sky-100 dark:bg-sky-900/20',
    iconColor = 'text-sky-600 dark:text-sky-400',
    valueColor = 'text-slate-900 dark:text-slate-100',
}) => {
    return (
        <Card>
            <div className="flex items-center">
                <div className={`p-2 ${iconBgColor} rounded-lg`}>
                    <div className={`w-6 h-6 ${iconColor}`}>
                        {icon}
                    </div>
                </div>
                <div className="ml-4">
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{label}</p>
                    <p className={`text-2xl font-bold ${valueColor}`}>{value}</p>
                </div>
            </div>
        </Card>
    );
};

export default StatCard;
