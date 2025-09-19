import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SyllabusItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface SidebarItemProps {
  item: SyllabusItem;
  level: number;
}

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 ${className}`}>
    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
);

const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 ${className}`}>
    <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const SidebarItem: React.FC<SidebarItemProps> = ({ item, level }) => {
  const [isOpen, setIsOpen] = useState(level < 1); // Auto-open top levels
  const { language } = useLanguage();

  if (item.isTerm && item.path.includes(':termId')) return null; // Don't render generic term routes in sidebar

  const hasChildren = item.children && item.children.filter(child => !(child.isTerm && child.path.includes(':termId'))).length > 0;

  const paddingLeft = `${1 + level * 0.75}rem`; // Indentation based on level

  const displayTitle = language === 'en-zh' && item.title_zh ? `${item.title} / ${item.title_zh}` : item.title;

  return (
    <li className="mb-1 last:mb-0">
      {hasChildren ? (
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between text-left px-2 py-2.5 text-sm text-gray-200 hover:bg-slate-700 rounded-md transition-colors duration-150"
            style={{ paddingLeft }}
            title={displayTitle}
          >
            <span className="truncate">{displayTitle}</span>
            {isOpen ? <ChevronDownIcon className="text-gray-400" /> : <ChevronRightIcon className="text-gray-400" />}
          </button>
          {isOpen && (
            <ul className="mt-1">
              {item.children?.map(child => (
                <SidebarItem key={child.id} item={child} level={level + 1} />
              ))}
            </ul>
          )}
        </div>
      ) : (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `block px-2 py-2.5 text-sm rounded-md transition-colors duration-150 truncate ${
              isActive ? 'bg-sky-600 dark:bg-sky-500 text-white font-medium' : 'text-gray-300 hover:bg-slate-700 hover:text-gray-100'
            }`
          }
          style={{ paddingLeft }}
          title={displayTitle}
        >
          {displayTitle}
        </NavLink>
      )}
    </li>
  );
};


interface SidebarProps {
  structure: SyllabusItem[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ structure, isOpen, setIsOpen }) => {
  return (
    <>
        {/* Overlay for mobile */}
        <div
            className={`fixed inset-0 bg-black/60 z-30 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
        />

        {/* Sidebar */}
        <div className={`fixed top-0 left-0 h-full w-72 z-40 transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:h-auto lg:z-auto lg:rounded-l-lg lg:shadow-lg ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <aside className="w-full bg-slate-800 text-gray-100 p-4 space-y-2 overflow-y-auto h-full">
            <div className="flex justify-end lg:hidden mb-2">
                <button onClick={() => setIsOpen(false)} className="p-1 text-gray-400 hover:text-white" aria-label="Close menu">
                    <CloseIcon className="w-6 h-6" />
                </button>
            </div>
            <nav>
                <ul>
                {structure.filter(item => !(item.isTerm && item.path.includes(':termId'))).map(item => (
                    <SidebarItem key={item.id} item={item} level={0} />
                ))}
                <li className="mt-4 pt-4 border-t border-slate-700">
                    <NavLink
                        to="/instruments"
                        className={({ isActive }) =>
                            `block px-2 py-2.5 text-sm rounded-md transition-colors duration-150 truncate ${
                            isActive ? 'bg-sky-600 dark:bg-sky-500 text-white font-medium' : 'text-gray-300 hover:bg-slate-700 hover:text-gray-100'
                            }`
                        }
                        style={{ paddingLeft: '1rem' }}
                        title="Instruments"
                    >
                        Instruments
                    </NavLink>
                </li>
                </ul>
            </nav>
            </aside>
        </div>
    </>
  );
};

export default Sidebar;