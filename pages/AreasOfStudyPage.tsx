import React from 'react';
import { Link } from 'react-router-dom';

const AreasOfStudyPage: React.FC = () => {
    const areas = [
        {
            id: 1,
            name: 'Baroque Music',
            icon: '🎻',
            description: 'Explore the ornate and expressive music of the 17th-18th centuries (c.1600-1750).',
            path: '/aos/baroque',
            color: 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
        },
        {
            id: 2,
            name: 'Classical Music',
            icon: '🎹',
            description: 'Study the refined elegance, balance, and formal structures of the Classical period (c.1750-1820).',
            path: '/aos/classical',
            color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
        },
        {
            id: 3,
            name: 'Romantic Music',
            icon: '🎼',
            description: 'Discover the emotional depth, expanded orchestras, and programmatic storytelling of the 19th century.',
            path: '/aos/romantic',
            color: 'bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800'
        },
        {
            id: 4,
            name: 'Music and Words',
            icon: '📖',
            description: 'Examine the relationship between lyrics and melody in Lieder, Musicals, and other vocal genres.',
            path: '/aos/music-and-words',
            color: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
        },
        {
            id: 5,
            name: 'Music for Dance',
            icon: '💃',
            description: 'Learn how music drives movement, rhythm, and choreography across cultures and time periods.',
            path: '/aos/dance',
            color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
        },
        {
            id: 6,
            name: 'Small Ensemble',
            icon: '🎺',
            description: 'Study the interplay and textures of intimate chamber music groups and small ensembles.',
            path: '/aos/small-ensemble',
            color: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
        },
        {
            id: 7,
            name: 'Stage & Screen',
            icon: '🎬',
            description: 'Explore the dramatic role of music in theatre, film, video games, and multimedia.',
            path: '/aos/stage-and-screen',
            color: 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800'
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <section className="text-center mb-16 px-4">
                <div className="inline-block px-4 py-1.5 mb-4 rounded-full text-sm font-semibold tracking-wide bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg">
                    Cambridge IGCSE 0410
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                    Seven Areas of Study
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    The core curriculum broken down into seven interactive modules. Master each area through detailed notes, audio examples, and quizzes.
                </p>
            </section>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {areas.map((area) => (
                    <Link
                        key={area.id}
                        to={area.path}
                        className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${area.color} bg-opacity-50 dark:bg-opacity-10 hover:bg-opacity-100 dark:hover:bg-opacity-20`}
                    >
                        <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                            {area.icon}
                        </div>
                        <div className="text-4xl font-bold opacity-30 mb-4 font-mono">
                            {area.id}
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{area.name}</h3>
                        <p className="text-sm opacity-90 leading-relaxed max-w-[90%]">
                            {area.description}
                        </p>
                        <div className="mt-6 flex items-center font-medium opacity-70 group-hover:opacity-100">
                            Start Learning <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Footer Info */}
            <div className="mt-20 text-center border-t border-slate-200 dark:border-slate-800 pt-10">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Complete Curriculum Coverage</h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    These seven areas of study encompass the entire written listening paper content. Combined with our <Link to="/theory" className="text-emerald-600 hover:underline">Music Theory</Link> section and <Link to="/instruments" className="text-emerald-600 hover:underline">Instruments Guide</Link>, you have everything needed for exam success.
                </p>
            </div>
        </div>
    );
};

export default AreasOfStudyPage;
