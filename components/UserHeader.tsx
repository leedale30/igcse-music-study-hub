import React from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggleButton from './LanguageToggleButton';
import ThemeToggleButton from './ThemeToggleButton';

interface UserHeaderProps {
  onMenuClick?: () => void;
}

const UserHeader: React.FC<UserHeaderProps> = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
  const { language } = useLanguage();
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

  const glossaryTitle = language === 'en-zh' ? 'Glossary / 词汇表' : 'Glossary';

  if (!user) {
    return null;
  }

  return (
    <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Site title and navigation */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            {onMenuClick && (
              <button 
                onClick={onMenuClick} 
                className="lg:hidden p-1 text-gray-300 hover:text-sky-400" 
                aria-label="Open menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            )}
            
            <Link 
              to="/" 
              className="text-xl sm:text-2xl font-bold tracking-tight hover:text-sky-400 transition-colors"
            >
              IGCSE Music 2026 Hub
            </Link>
            
            {/* Glossary link */}
            <nav className="hidden md:flex">
              <NavLink 
                to="/glossary" 
                className={({isActive}) => `text-sm px-2 ${isActive ? 'text-sky-400 font-semibold' : 'text-gray-300 hover:text-sky-400'} transition-colors`}
              >
                {glossaryTitle}
              </NavLink>
            </nav>
          </div>

          {/* Right side - User info and controls */}
          <div className="flex items-center space-x-4">
            {/* Theme and Language toggles */}
            <div className="flex items-center space-x-2">
              <LanguageToggleButton />
              <ThemeToggleButton />
            </div>

            {/* User info and actions */}
            <div className="flex items-center space-x-3 pl-4 border-l border-slate-600">
              {/* Welcome message */}
              <div className="hidden sm:block text-right">
                <p className="text-xs text-gray-400">
                  Welcome back,
                </p>
                <p className="text-sm font-medium text-white">
                  {user.nickname || user.firstName || user.name}
                </p>
              </div>

              {/* Mobile - just show nickname */}
              <div className="sm:hidden">
                <p className="text-sm font-medium text-white">
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

              {/* Achievements button */}
              <Link
                to="/achievements"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center space-x-1"
                title="View your badges and achievements"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="hidden sm:inline">Badges</span>
              </Link>

              {/* Presentations button - only for teachers */}
              {user?.role === 'teacher' && (
                <Link
                  to="/presentations"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center space-x-1"
                  title="Create and manage presentations"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h4zM9 3v1h6V3H9zm-4 3v12h14V6H5zm2 2h10v2H7V8zm0 4h10v2H7v-2z" />
                  </svg>
                  <span className="hidden sm:inline">Presentations</span>
                </Link>
              )}

              {/* Account Settings button */}
              <Link
                to="/account-settings"
                className="bg-slate-600 hover:bg-slate-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center space-x-1"
                title="Account settings"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="hidden sm:inline">Settings</span>
              </Link>

              {/* Logout button */}
              <button
                onClick={handleLogout}
                className="bg-slate-700 hover:bg-slate-600 text-gray-300 hover:text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center space-x-1"
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