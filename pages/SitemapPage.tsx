import React from 'react';
import { Link } from 'react-router-dom';

interface SiteSection {
    title: string;
    path: string;
    external?: boolean;
    children?: SiteSection[];
}

const siteMapData: SiteSection[] = [
    {
        title: '🏠 Home',
        path: '/',
    },
    {
        title: '📚 Areas of Study (Paper 1)',
        path: '/areas-of-study',
        children: [
            {
                title: '🎻 AOS1: Baroque Music',
                path: '/areas-of-study/aos1-baroque-music',
                children: [
                    { title: 'Introduction to Baroque Music', path: '/aos1/introduction' },
                    { title: 'Key Features of Baroque', path: '/aos1/key-features' },
                    { title: 'Vivaldi Focus Work', path: '/aos1/vivaldi' },
                    { title: 'Handel Focus Work', path: '/aos1/handel' },
                    {
                        title: '📚 Detailed Study Materials',
                        path: 'https://www.schoolclass.net/aos/aos01-baroque-music',
                        external: true,
                        children: [
                            { title: 'Core Musical Elements', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-01-core-musical-elements', external: true },
                            { title: 'Sound Sources & Techniques', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-02-sound-sources-and-techniques', external: true },
                            { title: 'Cultural & Historical Context', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-03-cultural-and-historical-context', external: true },
                            { title: 'Language, Literacy & Theory', path: 'https://www.schoolclass.net/aos/aos01-baroque-music/aos01-04-language-literacy-and-theory', external: true },
                        ]
                    },
                    {
                        title: '🎯 Topic Quizzes',
                        path: '/aos/aos01-baroque-music',
                        children: [
                            { title: 'Texture & Continuo', path: '/aos/aos01-baroque-music/texture-continuo' },
                            { title: 'Terraced Dynamics', path: '/aos/aos01-baroque-music/terraced-dynamics' },
                            { title: 'Vivaldi Ritornello', path: '/aos/aos01-baroque-music/vivaldi-ritornello' },
                            { title: 'Vivaldi Storm', path: '/aos/aos01-baroque-music/vivaldi-storm' },
                            { title: 'Handel Hornpipe', path: '/aos/aos01-baroque-music/handel-hornpipe' },
                            { title: 'Corelli Pastorale', path: '/aos/aos01-baroque-music/corelli' },
                            { title: 'Bach Air', path: '/aos/aos01-baroque-music/bach-air' },
                            { title: 'Ornaments', path: '/aos/aos01-baroque-music/ornaments' },
                            { title: 'Specimen Allegro', path: '/aos/aos01-baroque-music/specimen-allegro' },
                        ]
                    },
                    {
                        title: '📋 Assessment Quizzes (22)',
                        path: '/aos/aos01-baroque-music/assessment-quizzes',
                        children: Array.from({ length: 22 }, (_, i) => ({
                            title: `Quiz ${i + 1}`,
                            path: `/aos/aos01-baroque-music/assessment/quiz-${i + 1}`
                        }))
                    },
                    { title: '⚡ Rapid Fire', path: '/aos/aos01-baroque-music/rapid-fire' },
                ]
            },
            { title: '🎼 AOS2: Classical Music', path: '/areas-of-study/aos2-classical-music' },
            { title: '🎹 AOS3: Romantic Music', path: '/areas-of-study/aos3-romantic-music' },
            { title: '🎤 AOS4: Music and Words', path: '/areas-of-study/aos4-music-and-words' },
            { title: '💃 AOS5: Music for Dance', path: '/areas-of-study/aos5-music-for-dance' },
            { title: '🎺 AOS6: Small Ensemble', path: '/areas-of-study/aos6-small-ensemble' },
            { title: '🎬 AOS7: Stage and Screen', path: '/areas-of-study/aos7-stage-and-screen' },
        ]
    },
    {
        title: '📝 Coursework',
        path: '/coursework',
        children: [
            { title: 'Performing', path: '/coursework/performing' },
            { title: 'Composing', path: '/coursework/composing' },
        ]
    },
    {
        title: '🛠️ Music Tools',
        path: '/tools',
        children: [
            { title: 'Metronome', path: '/tools/metronome' },
            { title: 'Virtual Piano', path: '/tools/piano' },
            { title: 'Ear Training', path: '/tools/ear-training' },
            { title: 'Circle of Fifths', path: '/tools/circle-of-fifths' },
            { title: 'Functional Ear Training', path: '/tools/bemol-ear-training' },
            { title: 'Sight Reading Trainer', path: '/tools/sight-reading' },
        ]
    },
    {
        title: '📖 Musical Glossary',
        path: '/glossary',
    },
    {
        title: '🔗 Useful Links',
        path: '/links',
    },
];

const SectionList: React.FC<{ sections: SiteSection[]; level?: number }> = ({ sections, level = 0 }) => {
    const paddingLeft = level * 16;

    return (
        <ul className={`space-y-1 ${level === 0 ? 'mt-4' : 'mt-1'}`} style={{ paddingLeft }}>
            {sections.map((section) => (
                <li key={section.path}>
                    {section.external ? (
                        <a
                            href={section.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200 hover:underline text-sm flex items-center"
                        >
                            {section.title}
                            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    ) : (
                        <Link
                            to={section.path}
                            className="text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200 hover:underline text-sm"
                        >
                            {section.title}
                        </Link>
                    )}
                    {section.children && section.children.length > 0 && (
                        <SectionList sections={section.children} level={level + 1} />
                    )}
                </li>
            ))}
        </ul>
    );
};

const SitemapPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                        📍 Site Map
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Complete navigation of all pages and sections in the IGCSE Music Study Hub.
                    </p>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                        <SectionList sections={siteMapData} />
                    </div>

                    <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">External Links</h3>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                            Links marked with an external icon (↗) open in a new tab on schoolclass.net for detailed study materials.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SitemapPage;
