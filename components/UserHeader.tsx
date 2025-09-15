import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LanguageToggleButton from './LanguageToggleButton';
import ThemeToggleButton from './ThemeToggleButton';

const UserHeader: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getDashboardUrl = () => {
    if (user?.role === 'teacher') {
      return '/admin';
    }
    return '/dashboard';
  };

  if (!user) {
    return null;
  }

  return (
    <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Left side - Site title */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-bold text-slate-800 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              IGCSE Music Hub
            </Link>
          </div>

          {/* Right side - User info and controls */}
          <div className="flex items-center space-x-4">
            {/* Theme and Language toggles */}
            <div className="flex items-center space-x-2">
              <LanguageToggleButton />
              <ThemeToggleButton />
            </div>

            {/* User info and actions */}
            <div className="flex items-center space-x-3 pl-4 border-l border-slate-200 dark:border-slate-600">
              {/* Welcome message */}
              <div className="hidden sm:block text-right">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Welcome back,
                </p>
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                  {user.nickname || user.firstName || user.name}
                </p>
              </div>

              {/* Mobile - just show nickname */}
              <div className="sm:hidden">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                  {user.nickname || user.firstName || user.name}
                </p>
              </div>

              {/* Dashboard button */}
              <Link
                to={getDashboardUrl()}
                className="bg-sky-600 hover:bg-sky-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center space-x-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="hidden sm:inline">Dashboard</span>
              </Link>

              {/* Logout button */}
              <button
                onClick={handleLogout}
                className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center space-x-1"
                title="Sign out"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;