import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import { syllabusStructure } from '../services/syllabusData';
import { useLanguage } from '../contexts/LanguageContext';
import ThemeToggleButton from './ThemeToggleButton';

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);


const Header: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  const { language } = useLanguage();
  const glossaryTitle = language === 'en-zh' ? 'Glossary / 词汇表' : 'Glossary';
  return (
    <header className="bg-slate-900 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
            <button onClick={onMenuClick} className="lg:hidden p-1 text-gray-300 hover:text-sky-400" aria-label="Open menu">
                <MenuIcon className="w-6 h-6" />
            </button>
            <NavLink to="/" className="text-xl sm:text-2xl font-bold tracking-tight hover:text-sky-400 transition-colors">
            IGCSE Music 2026 Hub
            </NavLink>
        </div>
        <nav className="flex items-center space-x-2">
           <NavLink to="/glossary" className={({isActive}) => `text-sm px-2 ${isActive ? 'text-sky-400 font-semibold' : 'text-gray-300 hover:text-sky-400'}`}>
            {glossaryTitle}
          </NavLink>
          <ThemeToggleButton />
        </nav>
    </div>
  </header>
);
}
const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-gray-400 text-center p-4 mt-auto text-sm">
    © {new Date().getFullYear()} IGCSE Music Study Hub. All rights reserved.
  </footer>
);

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <div className="flex flex-1 container mx-auto my-4 max-w-screen-xl w-full px-2 sm:px-4">
        <Sidebar structure={syllabusStructure} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <main className="flex-1 p-3 sm:p-6 bg-white dark:bg-slate-800 shadow-lg lg:rounded-r-lg overflow-y-auto w-full lg:ml-72">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;