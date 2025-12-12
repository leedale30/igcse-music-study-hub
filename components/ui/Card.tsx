import React, { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    hover?: boolean;
}

const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
};

/**
 * A reusable card component with consistent styling.
 * Replaces repeated patterns like:
 * `<div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border...">`
 */
export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    padding = 'md',
    hover = false,
}) => {
    const baseClasses = 'bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700';
    const hoverClasses = hover ? 'hover:shadow-md transition-shadow' : '';
    const paddingClass = paddingClasses[padding];

    return (
        <div className={`${baseClasses} ${hoverClasses} ${paddingClass} ${className}`.trim()}>
            {children}
        </div>
    );
};

interface CardHeaderProps {
    children: ReactNode;
    className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
    return (
        <div className={`p-6 border-b border-slate-200 dark:border-slate-700 ${className}`.trim()}>
            {children}
        </div>
    );
};

interface CardTitleProps {
    children: ReactNode;
    className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => {
    return (
        <h2 className={`text-xl font-semibold text-slate-900 dark:text-slate-100 ${className}`.trim()}>
            {children}
        </h2>
    );
};

interface CardContentProps {
    children: ReactNode;
    className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
    return (
        <div className={`p-6 ${className}`.trim()}>
            {children}
        </div>
    );
};

export default Card;
