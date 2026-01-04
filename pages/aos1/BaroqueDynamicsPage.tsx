import React from 'react';
import { Link } from 'react-router-dom';

const BaroqueDynamicsPage: React.FC = () => {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            {/* Breadcrumb Navigation */}
            <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
                <span className="mx-2">›</span>
                <Link to="/aos/baroque" className="hover:text-sky-600 dark:hover:text-sky-400">Baroque Music</Link>
                <span className="mx-2">›</span>
                <span className="text-gray-700 dark:text-gray-300">Dynamics</span>
            </nav>

            {/* Page Header */}
            <header className="mb-10">
                <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                    Dynamics in Baroque Music
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Area of Study 1 • Core Musical Elements
                </p>
            </header>

            {/* Definition Section */}
            <section className="mb-10" id="definition">
                <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
                    Definition
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>Dynamics</strong> refers to the volume levels and expressive changes throughout a piece of music. In the context of Baroque music, dynamics play a crucial role in creating contrast and defining the structural elements of compositions.
                </p>
            </section>

            {/* Key Characteristics Section */}
            <section className="mb-10" id="key-characteristics">
                <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
                    Key Characteristics
                </h2>

                {/* Terraced Dynamics */}
                <div className="mb-8 bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3">
                        🎼 Terraced Dynamics
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        The Baroque period is famously characterized by <strong>terraced dynamics</strong>. This is the most crucial dynamic feature for understanding Baroque music.
                    </p>

                    <h4 className="text-lg font-medium text-slate-600 dark:text-slate-300 mb-2">What are Terraced Dynamics?</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Terraced dynamics refer to <strong>sudden, abrupt changes</strong> from loud (<em>forte</em>) to quiet (<em>piano</em>) or vice versa, without the gradual changes found in Classical and Romantic periods. These changes create distinct "terraces" or levels of volume, much like steps on a staircase.
                    </p>

                    <h4 className="text-lg font-medium text-slate-600 dark:text-slate-300 mb-2">Why Terraced Dynamics Developed</h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                        <li>The musical conventions of the era</li>
                        <li>The nature of instruments used (such as the harpsichord, which cannot create gradual volume changes)</li>
                        <li>Performance traditions where dynamics were often understood implicitly or directed by the composer leading the performance</li>
                    </ul>
                </div>

                {/* Dynamics in Concerto Forms */}
                <div className="mb-8 bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3">
                        🎻 Dynamics in Concerto Forms
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Terraced dynamics are particularly evident in the concerto genre (solo concerto and concerto grosso), where contrast is fundamental to the form:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-slate-700 rounded-lg p-4 border-l-4 border-sky-500">
                            <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-2">Tutti (Ripieno) Sections</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                When the full orchestra plays, the dynamic is typically <strong>forte (f)</strong> or louder. These sections provide power and grandeur.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-700 rounded-lg p-4 border-l-4 border-amber-500">
                            <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-2">Solo (Concertino) Sections</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                When soloists play alone, the dynamic drops to <strong>piano (p)</strong> or <strong>mezzo piano (mp)</strong>, highlighting virtuosity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Terminology Section */}
            <section className="mb-10" id="terminology">
                <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
                    Essential Dynamic Terminology
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Candidates must understand the full range of Italian dynamic markings:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Basic Markings */}
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-4">Basic Dynamic Markings</h3>
                        <div className="space-y-2">
                            {[
                                { symbol: 'pp', name: 'pianissimo', meaning: 'Very quiet' },
                                { symbol: 'p', name: 'piano', meaning: 'Quiet' },
                                { symbol: 'mp', name: 'mezzo piano', meaning: 'Moderately quiet' },
                                { symbol: 'mf', name: 'mezzo forte', meaning: 'Moderately loud' },
                                { symbol: 'f', name: 'forte', meaning: 'Loud' },
                                { symbol: 'ff', name: 'fortissimo', meaning: 'Very loud' },
                            ].map((item) => (
                                <div key={item.symbol} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                    <span className="font-mono font-bold text-sky-600 dark:text-sky-400 w-8">{item.symbol}</span>
                                    <span className="font-medium">{item.name}</span>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm">— {item.meaning}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Changes */}
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-4">Dynamic Changes</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                <span className="font-medium text-sky-600 dark:text-sky-400">crescendo</span>
                                <span>— Gradually getting louder</span>
                            </div>
                            <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                <span className="font-medium text-sky-600 dark:text-sky-400">diminuendo</span>
                                <span>— Gradually getting quieter</span>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic">
                            Note: These gradual changes are less characteristic of authentic Baroque performance practice but are important terms for the broader curriculum.
                        </p>
                    </div>
                </div>
            </section>

            {/* Focus Work Examples */}
            <section className="mb-10" id="focus-examples">
                <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
                    Focus Work Examples
                </h2>

                <div className="space-y-6">
                    {/* Vivaldi */}
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                        <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3">
                            Vivaldi: <em>Spring</em> (Movement 1)
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                            <li>The opening musical material is initially stated <em>forte</em> by the full orchestra</li>
                            <li>The same material is then repeated <em>piano</em>, creating a clear terrace effect</li>
                            <li>Solo violin passages typically occur at a quieter dynamic level, contrasting with the full orchestral <em>tutti</em> sections</li>
                        </ul>
                    </div>

                    {/* Handel */}
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                        <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-3">
                            Handel: <em>Concerto Grosso Op. 6 No. 5</em>
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                            <li>Alternation between full orchestra and smaller concertino group</li>
                            <li>Clear dynamic contrasts that define the structure of the movement</li>
                            <li>Sudden shifts in volume that emphasize the dance-like character of the menuet</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Performance Practice */}
            <section className="mb-10" id="performance-practice">
                <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
                    Baroque Performance Practice
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Understanding Baroque dynamic practice is essential for authentic interpretation:
                </p>
                <ul className="space-y-3">
                    {[
                        { title: 'Immediate Changes', desc: 'Dynamics change instantly, not gradually' },
                        { title: 'Structural Function', desc: 'Dynamic changes often coincide with textural changes (solo vs. tutti)' },
                        { title: 'Expressive Purpose', desc: 'Terraced dynamics create dramatic contrast and highlight the architecture of the music' },
                        { title: 'Instrumental Limitations', desc: 'Many Baroque instruments (especially keyboard instruments like the harpsichord) were incapable of gradual dynamic changes' },
                    ].map((item) => (
                        <li key={item.title} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                            <span className="text-sky-500 mt-1">•</span>
                            <div>
                                <strong>{item.title}:</strong> {item.desc}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Assessment Focus */}
            <section className="mb-10 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 border border-amber-200 dark:border-amber-800" id="assessment-focus">
                <h2 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-4 flex items-center gap-2">
                    📝 Assessment Focus
                </h2>
                <p className="text-amber-900 dark:text-amber-100 mb-4 font-medium">
                    Important for Examination: When analyzing Baroque music in the listening examination, candidates should:
                </p>
                <ul className="list-disc list-inside text-amber-800 dark:text-amber-200 space-y-2">
                    <li>Listen for sudden changes in volume rather than gradual ones</li>
                    <li>Identify the relationship between dynamic changes and textural changes (solo/tutti alternation)</li>
                    <li>Use correct Italian terminology when describing dynamic levels</li>
                    <li>Recognize how terraced dynamics contribute to the overall structure and character of the music</li>
                    <li>Focus on the musical features <em>actually heard</em> in the recorded extracts, rather than making general assumptions about Baroque practice</li>
                </ul>
            </section>
        </article>
    );
};

export default BaroqueDynamicsPage;
