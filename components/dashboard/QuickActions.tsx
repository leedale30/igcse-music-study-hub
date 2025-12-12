import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle } from '../ui/Card';
import { BookOpenIcon, ChartBarIcon, CogIcon } from '../ui/Icon';

interface QuickAction {
    to: string;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    bgColor: string;
    hoverBgColor: string;
    iconBgColor: string;
    iconHoverBgColor: string;
}

const defaultActions: QuickAction[] = [
    {
        to: '/',
        title: 'Browse Content',
        subtitle: 'Explore IGCSE topics',
        icon: <BookOpenIcon className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
        bgColor: 'bg-sky-50 dark:bg-sky-900/20',
        hoverBgColor: 'hover:bg-sky-100 dark:hover:bg-sky-900/30',
        iconBgColor: 'bg-sky-100 dark:bg-sky-900/40',
        iconHoverBgColor: 'group-hover:bg-sky-200 dark:group-hover:bg-sky-900/60',
    },
    {
        to: '/areas-of-study',
        title: 'Areas of Study',
        subtitle: 'Structured learning',
        icon: <ChartBarIcon className="w-5 h-5 text-green-600 dark:text-green-400" />,
        bgColor: 'bg-green-50 dark:bg-green-900/20',
        hoverBgColor: 'hover:bg-green-100 dark:hover:bg-green-900/30',
        iconBgColor: 'bg-green-100 dark:bg-green-900/40',
        iconHoverBgColor: 'group-hover:bg-green-200 dark:group-hover:bg-green-900/60',
    },
    {
        to: '/tools',
        title: 'Music Tools',
        subtitle: 'Practice & training',
        icon: <CogIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
        bgColor: 'bg-purple-50 dark:bg-purple-900/20',
        hoverBgColor: 'hover:bg-purple-100 dark:hover:bg-purple-900/30',
        iconBgColor: 'bg-purple-100 dark:bg-purple-900/40',
        iconHoverBgColor: 'group-hover:bg-purple-200 dark:group-hover:bg-purple-900/60',
    },
    {
        to: '/glossary',
        title: 'Glossary',
        subtitle: 'Music terminology',
        icon: <BookOpenIcon className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
        bgColor: 'bg-orange-50 dark:bg-orange-900/20',
        hoverBgColor: 'hover:bg-orange-100 dark:hover:bg-orange-900/30',
        iconBgColor: 'bg-orange-100 dark:bg-orange-900/40',
        iconHoverBgColor: 'group-hover:bg-orange-200 dark:group-hover:bg-orange-900/60',
    },
];

interface QuickActionsProps {
    actions?: QuickAction[];
}

/**
 * Quick actions grid component.
 * Provides navigation shortcuts to key areas of the app.
 */
export const QuickActions: React.FC<QuickActionsProps> = ({ actions = defaultActions }) => {
    return (
        <Card>
            <CardTitle className="mb-4">Quick Actions</CardTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {actions.map((action) => (
                    <Link
                        key={action.to}
                        to={action.to}
                        className={`flex items-center p-4 ${action.bgColor} ${action.hoverBgColor} rounded-lg transition-colors group`}
                    >
                        <div className={`p-2 ${action.iconBgColor} rounded-lg ${action.iconHoverBgColor} transition-colors`}>
                            {action.icon}
                        </div>
                        <div className="ml-3">
                            <p className="font-medium text-slate-900 dark:text-slate-100">{action.title}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{action.subtitle}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </Card>
    );
};

export default QuickActions;
