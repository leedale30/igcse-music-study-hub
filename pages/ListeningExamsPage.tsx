import React from 'react';
import { Link } from 'react-router-dom';

const ListeningExamsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Listening Exams
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Practice your listening skills with these interactive exams. Each exam focuses on different aspects of music theory and analysis.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/listening-exams/melody"
            className="block p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Melody
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Test your understanding of melodic elements
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Practice identifying hooks, riffs, melodic contour, and other key melodic features in popular music.
            </p>
          </Link>

          {/* Baroque Period Tests */}
          <Link
            to="/listening-exams/handel-sonata"
            className="block p-6 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg border border-amber-200 dark:border-amber-700 hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Handel Sonata
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Baroque Period Analysis
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Analyze melodic features in Handel's Keyboard Sonata in F major.
            </p>
          </Link>

          {/* Classical Period Tests */}
          <Link
            to="/listening-exams/haydn-quartet"
            className="block p-6 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-700 hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Haydn Quartet
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Classical Period Analysis
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Study melodic development in Haydn's String Quartet.
            </p>
          </Link>

          {/* Romantic Period Tests */}
          <Link
            to="/listening-exams/mendelssohn-overture"
            className="block p-6 bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Mendelssohn Overture
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Romantic Period Analysis
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Explore melodic expression in Mendelssohn's Hebrides Overture.
            </p>
          </Link>

          {/* Popular Music Tests */}
          <Link
            to="/listening-exams/sam-smith"
            className="block p-6 bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg border border-pink-200 dark:border-pink-700 hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Sam Smith
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Popular Music Analysis
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Analyze contemporary melodic techniques in Sam Smith's music.
            </p>
          </Link>

          <Link
            to="/listening-exams/coldplay"
            className="block p-6 bg-gradient-to-br from-cyan-50 to-teal-100 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-lg border border-cyan-200 dark:border-cyan-700 hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Coldplay
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Popular Music Analysis
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Study melodic patterns and hooks in Coldplay's compositions.
            </p>
          </Link>

          {/* Stage and Screen Tests */}
          <Link
            to="/listening-exams/godspell"
            className="block p-6 bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg border border-red-200 dark:border-red-700 hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v1a1 1 0 01-1 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7a1 1 0 01-1-1V5a1 1 0 011-1h4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Godspell
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Stage and Screen Analysis
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Explore melodic storytelling in the musical Godspell.
            </p>
          </Link>

          <Link
            to="/listening-exams/pirates-caribbean"
            className="block p-6 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900/20 dark:to-gray-900/20 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-slate-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v1a1 1 0 01-1 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7a1 1 0 01-1-1V5a1 1 0 011-1h4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Pirates of the Caribbean
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Film Score Analysis
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Analyze adventure themes and melodic motifs in film music.
            </p>
          </Link>

          <Link
            to="/listening-exams/moon-river"
            className="block p-6 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700 hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v1a1 1 0 01-1 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7a1 1 0 01-1-1V5a1 1 0 011-1h4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Moon River
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Classic Film Song Analysis
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Study melodic beauty and emotional expression in this classic film song.
            </p>
          </Link>

          {/* Placeholder for future exams */}
          <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 opacity-60">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400">
                  Harmony
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Coming Soon
                </p>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Harmonic analysis and chord progression identification.
            </p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 opacity-60">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400">
                  Rhythm
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Coming Soon
                </p>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Rhythmic patterns and time signature identification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeningExamsPage;