import React, { useState, useMemo } from 'react';
import { glossaryTerms } from '../services/glossaryData';
import { Link } from 'react-router-dom';

const GlossaryPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Quick Reference Categories (Hardcoded based on legacy content)
    const categories = [
        { name: 'Dynamics', terms: ['pianissimo', 'piano', 'mezzo piano', 'mezzo forte', 'forte', 'fortissimo', 'crescendo', 'diminuendo'] },
        { name: 'Tempo', terms: ['largo', 'adagio', 'andante', 'moderato', 'allegro', 'presto', 'accelerando', 'rallentando'] },
        { name: 'Texture', terms: ['monophonic', 'homophonic', 'polyphonic', 'contrapuntal', 'heterophonic'] },
        { name: 'Form', terms: ['binary form', 'ternary form', 'rondo form', 'sonata form', 'theme and variations', 'fugue'] },
        { name: 'Harmony', terms: ['consonance', 'dissonance', 'cadence', 'tonic', 'dominant', 'subdominant'] },
        { name: 'Articulation', terms: ['legato', 'staccato', 'accent', 'tenuto', 'sforzando'] },
    ];

    const filteredTerms = useMemo(() => {
        let results = glossaryTerms;

        if (searchTerm) {
            const lowerSearch = searchTerm.toLowerCase();
            results = results.filter(
                (item) =>
                    item.term.toLowerCase().includes(lowerSearch) ||
                    item.definition.toLowerCase().includes(lowerSearch)
            );
        } else if (selectedCategory) {
            const categoryTerms = categories.find(c => c.name === selectedCategory)?.terms || [];
            // Filter primarily by term name match for category
            // This is a rough match since glossaryData might have "piano (p)" vs just "piano"
            results = results.filter(item =>
                categoryTerms.some(catTerm => item.term.toLowerCase().includes(catTerm.toLowerCase()))
            );
        }

        return results;
    }, [searchTerm, selectedCategory]);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header */}
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 mb-4">
                    Music Glossary
                </h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Comprehensive dictionary of over {glossaryTerms.length} music theory terms, definitions, and concepts for IGCSE Music.
                </p>
            </header>

            {/* Search Bar */}
            <div className="mb-10 max-w-2xl mx-auto">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search for a term (e.g., 'sonata', 'allegro')..."
                        className="w-full px-6 py-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-lg text-lg"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setSelectedCategory(null); // Clear category when searching
                        }}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        🔍
                    </div>
                </div>
            </div>

            {/* Quick Categories */}
            {!searchTerm && (
                <div className="mb-12">
                    <h2 className="text-xl font-semibold mb-4 text-center">Quick Reference</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
                                className={`px-4 py-2 rounded-full transition-all ${selectedCategory === cat.name
                                        ? 'bg-teal-500 text-white shadow-md'
                                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-teal-100 dark:hover:bg-teal-900/30'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Results */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredTerms.length > 0 ? (
                    filteredTerms.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-lg font-bold text-teal-600 dark:text-teal-400 mb-2">
                                {item.term}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                {item.definition}
                            </p>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-10 text-gray-500">
                        <p className="text-lg">No Definitions Found</p>
                        <p className="text-sm">Try checking your spelling or search for a different term.</p>
                    </div>
                )}
            </div>

            {/* Search limit warning if showing all */}
            {!searchTerm && !selectedCategory && filteredTerms.length > 100 && (
                <div className="mt-8 text-center text-sm text-gray-400 italic">
                    Showing all {filteredTerms.length} terms. Use search to filter.
                </div>
            )}
        </div>
    );
};

export default GlossaryPage;
