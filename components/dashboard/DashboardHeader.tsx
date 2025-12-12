import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../types';
import LanguageToggleButton from '../LanguageToggleButton';
import ThemeToggleButton from '../ThemeToggleButton';
import RPGToggle from '../RPGToggle';

interface DashboardHeaderProps {
    user: User;
    onLogout: () => void;
}

/**
 * Header component for the Dashboard page.
 * Contains logo, user info, and toggle buttons.
 */
export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ user, onLogout }) => {
    return (
        <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-slate-800 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                            IGCSE Music Hub
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <LanguageToggleButton />
                        <ThemeToggleButton />
                        <RPGToggle />
                        <div className="flex items-center space-x-3">
                            <div className="text-right">
                                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{user.name}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{user.email}</p>
                            </div>
                            <button
                                onClick={onLogout}
                                className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
