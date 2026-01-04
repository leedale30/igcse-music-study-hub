import React from 'react';
import { Link } from 'react-router-dom';

const CourseworkPage: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <nav className="text-sm mb-8 text-gray-500 dark:text-gray-400">
                <Link to="/" className="hover:text-emerald-500">Home</Link>
                <span className="mx-2">›</span>
                <span className="text-gray-800 dark:text-gray-200">Coursework</span>
            </nav>

            {/* Header */}
            <header className="mb-10">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    ✏️ Coursework Guide
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                    Essential guide for the practical components of IGCSE Music: Performing and Composing.
                </p>
            </header>

            {/* Components Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Component 2 */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-2xl mb-6">
                        🎤
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                        Component 2: Performing
                    </h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                        You must record two performances:
                    </p>
                    <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            <span>
                                <strong className="text-slate-700 dark:text-slate-300">Solo Performance</strong>
                                <br />Playing or singing by yourself (with accompaniment if needed)
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            <span>
                                <strong className="text-slate-700 dark:text-slate-300">Ensemble Performance</strong>
                                <br />Performing with other musicians
                            </span>
                        </li>
                    </ul>
                    <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg text-sm text-purple-700 dark:text-purple-300">
                        ⏱ Each piece should be at least 2 minutes. Total maximum 10 minutes.
                    </div>
                </div>

                {/* Component 3 */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-2xl mb-6">
                        🎵
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                        Component 3: Composing
                    </h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                        You must create two original compositions:
                    </p>
                    <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>
                                <strong className="text-slate-700 dark:text-slate-300">Composition 1</strong>
                                <br />Free composition (your choice of style/genre)
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>
                                <strong className="text-slate-700 dark:text-slate-300">Composition 2</strong>
                                <br />Set brief (responding to a stimulus provided by Cambridge)
                            </span>
                        </li>
                    </ul>
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg text-sm text-blue-700 dark:text-blue-300">
                        📝 Each should be 1-3 minutes. You must include written commentaries.
                    </div>
                </div>
            </div>

            {/* Marking Criteria */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Marking Criteria Overview</h2>
                <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
                    <table className="w-full text-left border-collapse bg-white dark:bg-slate-800">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-700/50">
                                <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-200">Component</th>
                                <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-200">Weight</th>
                                <th className="p-4 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-200">Key Focus</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">Component 2: Performing</td>
                                <td className="p-4 border-b border-slate-200 dark:border-slate-700 font-mono text-slate-600 dark:text-slate-300">30%</td>
                                <td className="p-4 border-b border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">Technical control, expression, accuracy, ensemble coordination</td>
                            </tr>
                            <tr>
                                <td className="p-4 text-slate-600 dark:text-slate-300">Component 3: Composing</td>
                                <td className="p-4 font-mono text-slate-600 dark:text-slate-300">30%</td>
                                <td className="p-4 text-slate-600 dark:text-slate-300">Development of ideas, use of musical elements, consistency of style</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Submission Tips */}
            <section className="bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl p-8 border border-emerald-100 dark:border-emerald-900/30">
                <h2 className="text-xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">🚀 Submission Tips for Success</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                        <span className="text-xl">🎙️</span>
                        <span className="text-emerald-700 dark:text-emerald-400">Record in a quiet environment with good audio quality</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="text-xl">🎹</span>
                        <span className="text-emerald-700 dark:text-emerald-400">Practice thoroughly before recording</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="text-xl">🎼</span>
                        <span className="text-emerald-700 dark:text-emerald-400">Include clear scores or detailed notes with recordings</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="text-xl">✍️</span>
                        <span className="text-emerald-700 dark:text-emerald-400">Write clear commentaries explaining your creative choices</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CourseworkPage;
