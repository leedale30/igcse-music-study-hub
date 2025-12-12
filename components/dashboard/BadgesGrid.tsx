import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { StarIcon } from '../ui/Icon';

interface Badge {
    id: string;
    name: string;
    description: string;
    icon: string;
}

interface BadgesGridProps {
    badges: Badge[];
    maxDisplay?: number;
}

/**
 * Badges and achievements grid component.
 * Shows earned badges in a responsive grid.
 */
export const BadgesGrid: React.FC<BadgesGridProps> = ({ badges, maxDisplay = 6 }) => {
    const displayedBadges = badges.slice(0, maxDisplay);

    return (
        <Card padding="none">
            <CardHeader>
                <CardTitle>Badges & Achievements</CardTitle>
            </CardHeader>
            <CardContent>
                {displayedBadges.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4">
                        {displayedBadges.map((badge, index) => (
                            <div key={`${badge.id}-${index}`} className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                                <div className="text-3xl mb-2">{badge.icon}</div>
                                <h3 className="font-medium text-slate-900 dark:text-slate-100 text-sm mb-1">
                                    {badge.name}
                                </h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    {badge.description}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8">
                        <StarIcon className="w-12 h-12 text-slate-400 dark:text-slate-500 mx-auto mb-4" />
                        <p className="text-slate-500 dark:text-slate-400">Complete quizzes to earn badges!</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default BadgesGrid;
