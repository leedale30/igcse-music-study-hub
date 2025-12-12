import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { theoryChapters } from '../services/theoryData';

const TheoryListPage: React.FC = () => {
    const [expandedChapters, setExpandedChapters] = useState<number[]>([]);

    const toggleChapter = (chapterNum: number) => {
        setExpandedChapters(prev =>
            prev.includes(chapterNum)
                ? prev.filter(n => n !== chapterNum)
                : [...prev, chapterNum]
        );
    };

    const expandAll = () => {
        setExpandedChapters(theoryChapters.map(c => c.number));
    };

    const collapseAll = () => {
        setExpandedChapters([]);
    };

    return (
        <div className="p-4 md:p-6 max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <nav className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-800 dark:text-gray-200">Music Theory</span>
                </nav>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    📚 Music Theory
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Comprehensive music theory lessons covering fundamental concepts to advanced analysis.
                </p>

                {/* Expand/Collapse controls */}
                <div className="flex gap-3">
                    <button
                        onClick={expandAll}
                        className="px-4 py-2 text-sm bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-colors"
                    >
                        Expand All
                    </button>
                    <button
                        onClick={collapseAll}
                        className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg transition-colors"
                    >
                        Collapse All
                    </button>
                </div>
            </div>

            {/* Chapters */}
            <div className="space-y-4">
                {theoryChapters.map((chapter) => {
                    const isExpanded = expandedChapters.includes(chapter.number);

                    return (
                        <div
                            key={chapter.number}
                            className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Chapter Header */}
                            <button
                                onClick={() => toggleChapter(chapter.number)}
                                className="w-full px-5 py-4 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-750 hover:from-sky-50 hover:to-white dark:hover:from-gray-700 dark:hover:to-gray-750 transition-colors text-left"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-10 h-10 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-lg font-bold text-lg">
                                        {chapter.number}
                                    </span>
                                    <span className="font-semibold text-lg text-gray-800 dark:text-white">
                                        {chapter.title}
                                    </span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        ({chapter.topics.length} topics)
                                    </span>
                                </div>
                                <svg
                                    className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Topics List */}
                            {isExpanded && (
                                <div className="border-t border-gray-100 dark:border-gray-700">
                                    <ul className="divide-y divide-gray-100 dark:divide-gray-700">
                                        {chapter.topics.map((topic, index) => (
                                            <li key={topic.id}>
                                                <Link
                                                    to={`/theory/${topic.id}`}
                                                    className="flex items-center gap-3 px-5 py-3 hover:bg-sky-50 dark:hover:bg-gray-700 transition-colors group"
                                                >
                                                    <span className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-sm font-medium group-hover:bg-sky-100 group-hover:text-sky-600 dark:group-hover:bg-sky-900 dark:group-hover:text-sky-300 transition-colors">
                                                        {index + 1}
                                                    </span>
                                                    <span className="text-gray-700 dark:text-gray-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors flex-1">
                                                        {topic.title}
                                                    </span>
                                                    <svg
                                                        className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Stats Footer */}
            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex justify-center gap-8 text-center">
                    <div>
                        <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">
                            {theoryChapters.length}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Chapters</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">
                            {theoryChapters.reduce((sum, ch) => sum + ch.topics.length, 0)}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Topics</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheoryListPage;
