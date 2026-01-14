import React from 'react';
import { Link } from 'react-router-dom';
import AbcDisplayComponent from '../../../components/AbcDisplayComponent';
import QuizComponent from '../../../components/QuizComponent';
import { Quiz } from '../../../types';

const balletQuiz: Quiz = {
    id: 'aos7-ballet-quiz',
    title: 'Ballet Music Mastery Quiz',
    questions: [
        {
            id: 'bq1',
            text: 'What is the primary function of music in a ballet?',
            options: [
                { id: 'bq1a1', text: 'To compete with the dancers for attention' },
                { id: 'bq1a2', text: 'To support and accompany the choreography and narrative' },
                { id: 'bq1a3', text: 'To provide a break for the audience' },
                { id: 'bq1a4', text: 'To replace the need for movement' },
            ],
            correctAnswerId: 'bq1a2',
            explanation: 'Ballet music is essential for setting the tempo, mood, and storytelling for the dancers.'
        },
        {
            id: 'bq2',
            text: 'Which 19th-century composer is famous for "The Nutcracker" and "Swan Lake"?',
            options: [
                { id: 'bq2a1', text: 'Igor Stravinsky' },
                { id: 'bq2a2', text: 'P.I. Tchaikovsky' },
                { id: 'bq2a3', text: 'Aaron Copland' },
                { id: 'bq2a4', text: 'Ludwig van Beethoven' },
            ],
            correctAnswerId: 'bq2a2',
            explanation: 'Tchaikovsky redefined the symphonic scale and emotional depth of ballet music.'
        },
        {
            id: 'bq3',
            text: 'What instrument did Tchaikovsky famously use to represent the Sugar Plum Fairy?',
            options: [
                { id: 'bq3a1', text: 'Pipe Organ' },
                { id: 'bq3a2', text: 'Electric Guitar' },
                { id: 'bq3a3', text: 'Celesta' },
                { id: 'bq3a4', text: 'Tuba' },
            ],
            correctAnswerId: 'bq3a3',
            explanation: 'The Celesta\'s bell-like tone created a magical, ethereal atmosphere.'
        },
        {
            id: 'bq4',
            text: 'How does a composer typically indicate a "Pas de Deux" (dance for two)?',
            options: [
                { id: 'bq4a1', text: 'With loud, aggressive drums' },
                { id: 'bq4a2', text: 'With lyrical melodies, often featuring solo cello or violin' },
                { id: 'bq4a3', text: 'By stopping the music entirely' },
                { id: 'bq4a4', text: 'By using only dissonant chords' },
            ],
            correctAnswerId: 'bq4a2',
            explanation: 'Pas de Deux sections are usually romantic and lyrical, emphasizing the connection between the two leads.'
        },
        {
            id: 'bq5',
            text: 'Which 20th-century ballet by Stravinsky caused a riot due to its revolutionary rhythms?',
            options: [
                { id: 'bq5a1', text: 'The Firebird' },
                { id: 'bq5a2', text: 'The Rite of Spring' },
                { id: 'bq5a3', text: 'Petrushka' },
                { id: 'bq5a4', text: 'Appalachian Spring' },
            ],
            correctAnswerId: 'bq5a2',
            explanation: 'The Rite of Spring used heavy syncopation and bitonality, shocking its first audience in 1913.'
        },
        {
            id: 'bq6',
            text: 'What rhythmic device is common in "The Rite of Spring" to create a sense of primitive energy?',
            options: [
                { id: 'bq6a1', text: 'Long, smooth legato passages' },
                { id: 'bq6a2', text: 'Constant, unpredictable accents and ostinatos' },
                { id: 'bq6a3', text: 'Total silence' },
                { id: 'bq6a4', text: 'Waltz rhythms' },
            ],
            correctAnswerId: 'bq6a2',
            explanation: 'Stravinsky used irregular accents to keep the audience and dancers on edge.'
        },
        {
            id: 'bq7',
            text: 'Aaron Copland\'s "Appalachian Spring" uses which traditional Shaker melody?',
            options: [
                { id: 'bq7a1', text: 'Greensleeves' },
                { id: 'bq7a2', text: 'Simple Gifts' },
                { id: 'bq7a3', text: 'Amazing Grace' },
                { id: 'bq7a4', text: 'Danny Boy' },
            ],
            correctAnswerId: 'bq7a2',
            explanation: 'Copland used "Simple Gifts" to represent the American pioneer spirit.'
        },
        {
            id: 'bq8',
            text: 'In ballet music, what does the term "Pantomime" refer to?',
            options: [
                { id: 'bq8a1', text: 'The dancers singing while they move' },
                { id: 'bq8a2', text: 'Musical sections that accompany expressive gestures and acting (no formal dance)' },
                { id: 'bq8a3', text: 'The intermission music' },
                { id: 'bq8a4', text: 'The lighting cues' },
            ],
            correctAnswerId: 'bq8a2',
            explanation: 'Pantomime sections move the plot forward through silent acting accompanied by evocative music.'
        },
        {
            id: 'bq9',
            text: 'Which texture is most common in a grand ballet waltz?',
            options: [
                { id: 'bq9a1', text: 'Monophonic' },
                { id: 'bq9a2', text: 'Melody and accompaniment (Homophonic)' },
                { id: 'bq9a3', text: 'Complex 8-part Fugue' },
                { id: 'bq9a4', text: 'Static drone' },
            ],
            correctAnswerId: 'bq9a2',
            explanation: 'Homophonic texture allows the sweeping waltz melody to be heard clearly above the "oom-pah-pah" rhythm.'
        },
        {
            id: 'bq10',
            text: 'What is the "Divertissement" in a ballet?',
            options: [
                { id: 'bq10a1', text: 'The main tragedy of the story' },
                { id: 'bq10a2', text: 'A series of "variety" dances that don\'t necessarily advance the plot' },
                { id: 'bq10a3', text: 'The moment the orchestra stops' },
                { id: 'bq10a4', text: 'A type of violin bow' },
            ],
            correctAnswerId: 'bq10a2',
            explanation: 'Divertissements (like the "Coffee" or "Tea" dances in Nutcracker) showcase technical skill.'
        },
        {
            id: 'bq11',
            text: 'How does Prokovief characterize "Peter" in "Peter and the Wolf"?',
            options: [
                { id: 'bq11a1', text: 'With dark, low bassoons' },
                { id: 'bq11a2', text: 'With a bright, quartal melody on the strings' },
                { id: 'bq11a3', text: 'With a solitary oboe' },
                { id: 'bq11a4', text: 'With heavy cymbals' },
            ],
            correctAnswerId: 'bq11a2',
            explanation: 'Strings provide a youthful and heroic sound for the main character.'
        },
        {
            id: 'bq12',
            text: 'Which instrument family often represents the "villain" or "threat" in Romantic ballets?',
            options: [
                { id: 'bq12a1', text: 'High woodwinds (Piccolo)' },
                { id: 'bq12a2', text: 'Low Brass and Cellos' },
                { id: 'bq12a3', text: 'Glockenspiel' },
                { id: 'bq12a4', text: 'Harp' },
            ],
            correctAnswerId: 'bq12a2',
            explanation: 'Lower registers an darker timbres are traditionally associated with danger or evil.'
        },
        {
            id: 'bq13',
            text: 'What is the characteristic meter of a "Waltz"?',
            options: [
                { id: 'bq13a1', text: '4/4' },
                { id: 'bq13a2', text: '3/4' },
                { id: 'bq13a3', text: '5/8' },
                { id: 'bq13a4', text: '2/4' },
            ],
            correctAnswerId: 'bq13a2',
            explanation: 'A waltz is defined by its triple meter with a heavy first beat.'
        },
        {
            id: 'bq14',
            text: 'Stravinsky used "Bitonality". What does this mean?',
            options: [
                { id: 'bq14a1', text: 'Using no key at all' },
                { id: 'bq14a2', text: 'Using two different keys at the same time' },
                { id: 'bq14a3', text: 'Playing twice as fast' },
                { id: 'bq14a4', text: 'Singing in two languages' },
            ],
            correctAnswerId: 'bq14a2',
            explanation: 'Bitonality creates the harsh, clashing dissonance famous in The Rite of Spring.'
        },
        {
            id: 'bq15',
            text: 'In Copland\'s "Rodeo", what musical style does he imitate to show the setting?',
            options: [
                { id: 'bq15a1', text: 'Space-age techno' },
                { id: 'bq15a2', text: 'American Folk Dance / Square Dance' },
                { id: 'bq15a3', text: 'Chinese Opera' },
                { id: 'bq15a4', text: 'Gregorian Chant' },
            ],
            correctAnswerId: 'bq15a2',
            explanation: 'Copland used fiddling styles and open intervals to represent the "Wild West."'
        },
        {
            id: 'bq16',
            text: 'What is "Through-composed" ballet music?',
            options: [
                { id: 'bq16a1', text: 'Music that repeats the same theme for 2 hours' },
                { id: 'bq16a2', text: 'Music that evolves continuously without standard verse/chorus repeats' },
                { id: 'bq16a3', text: 'Music written on transparent paper' },
                { id: 'bq16a4', text: 'Music with no instruments' },
            ],
            correctAnswerId: 'bq16a2',
            explanation: 'Through-composed music allows the narrative to flow without being stuck in rigid cycles.'
        },
        {
            id: 'bq17',
            text: 'Which composer wrote "Romeo and Juliet" (the ballet), famous for "Dance of the Knights"?',
            options: [
                { id: 'bq17a1', text: 'Sergei Prokofiev' },
                { id: 'bq17a2', text: 'John Williams' },
                { id: 'bq17a3', text: 'Hans Zimmer' },
                { id: 'bq17a4', text: 'Philip Glass' },
            ],
            correctAnswerId: 'bq17a1',
            explanation: 'Prokofiev\'s score is famous for its heavy, dissonant brass and sharp rhythmic pulse.'
        },
        {
            id: 'bq18',
            text: 'How does a "Crescendo" affect the emotion of a ballet scene?',
            options: [
                { id: 'bq18a1', text: 'It always makes it more relaxing' },
                { id: 'bq18a2', text: 'It builds excitement, tension, or a sense of approaching climax' },
                { id: 'bq18a3', text: 'It means the dancers should stop' },
                { id: 'bq18a4', text: 'It has no effect' },
            ],
            correctAnswerId: 'bq18a2',
            explanation: 'Getting louder mimics the physiological response to rising adrenaline.'
        },
        {
            id: 'bq19',
            text: 'What is a "Syncopation" in ballet music?',
            options: [
                { id: 'bq19a1', text: 'A smooth, predictable beat' },
                { id: 'bq19a2', text: 'An accent on a weak beat or "off-beat"' },
                { id: 'bq19a3', text: 'A type of singing' },
                { id: 'bq19a4', text: 'A slow tempo' },
            ],
            correctAnswerId: 'bq19a2',
            explanation: 'Syncopation makes the music feel more energetic and modern, as seen in Stravinsky.'
        },
        {
            id: 'bq20',
            text: 'If you hear a solo flute playing a fluttering, high-pitched melody in a ballet, it likely represents:',
            options: [
                { id: 'bq20a1', text: 'A heavy giant' },
                { id: 'bq20a2', text: 'A bird or a delicate, light character' },
                { id: 'bq20a3', text: 'A thunderstorm' },
                { id: 'bq20a4', text: 'A battle' },
            ],
            correctAnswerId: 'bq20a2',
            explanation: 'Flutes and woodwinds are traditionally used for "birds" or light, agile figures (e.g., Peter and the Wolf).'
        }
    ]
};

const StageScreen0308BalletPage: React.FC = () => {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            {/* Breadcrumb Navigation */}
            <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                <Link to="/" className="hover:text-pink-600 dark:hover:text-pink-400">Home</Link>
                <span className="mx-2">›</span>
                <Link to="/aos/stage-screen" className="hover:text-pink-600 dark:hover:text-pink-400">Music for Stage and Screen</Link>
                <span className="mx-2">›</span>
                <span className="text-gray-700 dark:text-gray-300">Ballet Music</span>
            </nav>

            {/* Page Header */}
            <header className="mb-10 text-center">
                <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-bold tracking-widest uppercase">
                    Focus Area
                </div>
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
                    Ballet Music
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
                    The Art of Narrative Dance
                </p>
            </header>

            {/* Main Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
                <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-pink-100 dark:border-pink-900/40">
                    <h2 className="text-3xl font-bold mb-6 text-pink-700 dark:text-pink-400 italic">Music for Movement</h2>
                    <p className="text-lg leading-relaxed">
                        Ballet music is unique because it must be <strong>physically functional</strong>.
                        The tempo must be consistent enough for a dancer to land a jump, yet dramatic enough
                        to tell a complex story without a single spoken word.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6">1. The Classical Era (Tchaikovsky)</h2>
                    <p className="mb-6">
                        In the 19th century, Tchaikovsky elevated ballet music from simple "time-keeping"
                        to a serious symphonic art form. He used <strong>colorful orchestration</strong> and
                        memorable melodies.
                    </p>

                    <AbcDisplayComponent
                        id="nutcracker-theme"
                        title="Dance of the Sugar Plum Fairy (Celesta)"
                        abcNotation={`X:1\nM:2/4\nL:1/8\nK:C\nQ:" Vivace"\ne c' b g | ^f g e c | B c A F | E4 |`}
                    />

                    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border-l-4 border-pink-500">
                        <h4 className="font-bold mb-2">Key Feature: The Pas de Deux</h4>
                        <p className="text-sm">
                            The "dance for two" is the emotional peak. Music is usually <strong>Triple Meter (3/4)</strong>
                            or a grand 4/4 with long, soaring melodies in the strings.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6">2. The 20th Century Revolution</h2>
                    <p className="mb-4">
                        Composers like <strong>Stravinsky</strong> changed everything by introducing
                        harsh dissonances and unpredictable rhythms.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl">
                            <h3 className="text-xl font-bold mb-2">Igor Stravinsky</h3>
                            <p className="text-sm">
                                Used <strong>Bitonality</strong> (two keys at once) and <strong>Syncopation</strong>.
                                "The Rite of Spring" used primitive, driving rhythms that felt visceral and violent.
                            </p>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl">
                            <h3 className="text-xl font-bold mb-2">Aaron Copland</h3>
                            <p className="text-sm">
                                Represented the "American" sound. Used <strong>Folk Melodies</strong> and
                                "Open" intervals (Perfect 4ths and 5ths) to create a sense of vast landscapes.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-pink-900 text-white p-8 rounded-3xl shadow-2xl">
                    <h2 className="text-3xl font-bold mb-6 text-pink-200 text-center">Summary Table</h2>
                    <table className="w-full text-left text-sm text-pink-100">
                        <thead>
                            <tr className="border-b border-pink-700 text-pink-300">
                                <th className="pb-2">Feature</th>
                                <th className="pb-2">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 font-bold">Waltz</td>
                                <td className="py-2 italic">Elegant dance in 3/4 time.</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-bold">Leitmotif</td>
                                <td className="py-2 italic">A recurring theme for a character (e.g., Swan theme).</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-bold">Orchestration</td>
                                <td className="py-2 italic">Vivid use of harp, celesta, and orchestral colors.</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-bold">Divertissement</td>
                                <td className="py-2 italic">Variety dances showcasing technical skills.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="py-12">
                    <h2 className="text-4xl font-black text-center mb-12 uppercase tracking-tighter text-pink-800 dark:text-pink-200">Ultimate Ballet Quiz</h2>
                    <p className="text-center text-gray-500 mb-8 font-medium italic">20 Questions to test your expertise</p>
                    <QuizComponent quizData={balletQuiz} />
                </section>
            </div>

            <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-800 text-center">
                <Link to="/aos/stage-screen/cultural-historical/key-works-pieces" className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105">
                    Next: Key Works & Pieces
                    <span>→</span>
                </Link>
            </footer>
        </article>
    );
};

export default StageScreen0308BalletPage;
