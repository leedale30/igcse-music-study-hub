import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggleButton: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={toggleLanguage}
        className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 border border-slate-300 rounded-lg hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75 transition-colors dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 dark:hover:bg-slate-600"
        aria-live="polite"
      >
        {language === 'en' ? '中文 / English' : 'English Only'}
      </button>
    </div>
  );
};

export default LanguageToggleButton;
