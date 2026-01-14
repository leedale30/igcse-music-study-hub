import React from 'react';
import { Link } from 'react-router-dom';
import AbcDisplayComponent from '../../../components/AbcDisplayComponent';
import QuizComponent from '../../../components/QuizComponent';
import { Quiz } from '../../../types';

const filmQuiz: Quiz = {
    id: 'aos7-film-quiz',
    title: 'Film Music Masterclass Quiz',
    questions: [
        {
            id: 'fq1',
            text: 'What is "Diegetic Music" in a film?',
            options: [
                { id: 'fq1a1', text: 'Music that only the audience can hear' },
                { id: 'fq1a2', text: 'Music that exists within the world of the characters (e.g., a radio)' },
                { id: 'fq1a3', text: 'Music written by a dead composer' },
                { id: 'fq1a4', text: 'Music with no melody' },
            ],
            correctAnswerId: 'fq1a2',
            explanation: 'Diegetic music is "source music" that characters in the scene can actually hear and react to.'
        },
        {
            id: 'fq2',
            text: 'What is "Non-Diegetic Music" (Underscore)?',
            options: [
                { id: 'fq2a1', text: 'Music that the characters can hear' },
                { id: 'fq2a2', text: 'Background music added for the audience to create mood or tension' },
                { id: 'fq2a3', text: 'Music played during the end credits only' },
                { id: 'fq2a4', text: 'Silent film music' },
            ],
            correctAnswerId: 'fq2a2',
            explanation: 'Non-diegetic music is "the score," which exists outside the reality of the scene.'
        },
        {
            id: 'fq3',
            text: 'Which term describes a recurring musical theme for a specific character?',
            options: [
                { id: 'fq3a1', text: 'Ostinato' },
                { id: 'fq3a2', text: 'Leitmotif' },
                { id: 'fq3a3', text: 'Cadence' },
                { id: 'fq3a4', text: 'Mickey-Mousing' },
            ],
            correctAnswerId: 'fq3a2',
            explanation: 'A Leitmotif is a short, memorable theme associated with a person, place, or idea.'
        },
        {
            id: 'fq4',
            text: 'What is "Mickey-Mousing"?',
            options: [
                { id: 'fq4a1', text: 'Playing Disney songs' },
                { id: 'fq4a2', text: 'Music that mimics the physical actions on screen (e.g., a slip or a jump)' },
                { id: 'fq4a3', text: 'High-pitched singing' },
                { id: 'fq4a4', text: 'Drawing cartoons to music' },
            ],
            correctAnswerId: 'fq4a2',
            explanation: 'Mickey-Mousing is common in cartoons and comedies, mirroring action with sound.'
        },
        {
            id: 'fq5',
            text: 'John Williams is known for which musical style?',
            options: [
                { id: 'fq5a1', text: 'Techno' },
                { id: 'fq5a2', text: 'Neoromantic / Symphonic' },
                { id: 'fq5a3', text: 'Atonal Jazz' },
                { id: 'fq5a4', text: 'Bare Minimalism' },
            ],
            correctAnswerId: 'fq5a2',
            explanation: 'Williams uses a large orchestra, rich harmonies, and clear themes, similar to late 19th-century composers.'
        },
        {
            id: 'fq6',
            text: 'Which technique is often used in horror films to create a sense of unease?',
            options: [
                { id: 'fq6a1', text: 'Major Triads' },
                { id: 'fq6a2', text: 'Dissonance and Atonality' },
                { id: 'fq6a3', text: 'Upbeat tempos' },
                { id: 'fq6a4', text: 'Acoustic guitar solos' },
            ],
            correctAnswerId: 'fq6a2',
            explanation: 'Dissonance creates psychological tension because the listener craves resolution.'
        },
        {
            id: 'fq7',
            text: 'What is a "Hit Point"?',
            options: [
                { id: 'fq7a1', text: 'A popular song in a movie' },
                { id: 'fq7a2', text: 'An exact moment on screen where the music must synchronize with an action' },
                { id: 'fq7a3', text: 'The end of the shoot' },
                { id: 'fq7a4', text: 'A punch in an action movie' },
            ],
            correctAnswerId: 'fq7a2',
            explanation: 'Hit points require precise timing from the conductor or software.'
        },
        {
            id: 'fq8',
            text: 'Which instrument family is typically used for a "Heroic Fanfare"?',
            options: [
                { id: 'fq8a1', text: 'Strings' },
                { id: 'fq8a2', text: 'Brass' },
                { id: 'fq8a3', text: 'Woodwinds' },
                { id: 'fq8a4', text: 'Keyboards' },
            ],
            correctAnswerId: 'fq8a2',
            explanation: 'Trumpets and Horns have a powerful, heraldic quality associated with heroism.'
        },
        {
            id: 'fq9',
            text: 'What does a "Pedal Point" (continuous low note) usually represent in a thriller?',
            options: [
                { id: 'fq9a1', text: 'Happiness' },
                { id: 'fq9a2', text: 'A sense of "stuckness," impending doom, or hidden tension' },
                { id: 'fq9a3', text: 'The end of the movie' },
                { id: 'fq9a4', text: 'A character dancing' },
            ],
            correctAnswerId: 'fq9a2',
            explanation: 'The static nature of a pedal point creates an uncomfortable "waiting" feeling.'
        },
        {
            id: 'fq10',
            text: 'Hans Zimmer often uses "Ostinatos". What are they?',
            options: [
                { id: 'fq10a1', text: 'One-time big bangs' },
                { id: 'fq10a2', text: 'Short, repeating rhythmic or melodic patterns' },
                { id: 'fq10a3', text: 'Types of flute' },
                { id: 'fq10a4', text: 'Violin solos' },
            ],
            correctAnswerId: 'fq10a2',
            explanation: 'Ostinatos build massive momentum and drive in modern action scores.'
        },
        {
            id: 'fq11',
            text: 'In "Jaws", the two-note motive is an example of what?',
            options: [
                { id: 'fq11a1', text: 'A major scale' },
                { id: 'fq11a2', text: 'A terrifying leitmotif' },
                { id: 'fq11a3', text: 'Source music' },
                { id: 'fq11a4', text: 'A pop song' },
            ],
            correctAnswerId: 'fq11a2',
            explanation: 'The simple semitone motive becomes synonymous with the shark\'s presence.'
        },
        {
            id: 'fq12',
            text: 'How does a composer ensure dialogue is audible over the score?',
            options: [
                { id: 'fq12a1', text: 'By playing louder' },
                { id: 'fq12a2', text: 'By using thin textures and avoiding the frequency range of human voices' },
                { id: 'fq12a3', text: 'By playing backwards' },
                { id: 'fq12a4', text: 'By using only cymbals' },
            ],
            correctAnswerId: 'fq12a2',
            explanation: 'Sonic transparency is a key technical skill for film composers.'
        },
        {
            id: 'fq13',
            text: 'Which instrument might be used to represent the "supernatural" or "alien" in older sci-fi?',
            options: [
                { id: 'fq13a1', text: 'Piano' },
                { id: 'fq13a2', text: 'Theremin or early Synthesizer' },
                { id: 'fq13a3', text: 'Banjo' },
                { id: 'fq13a4', text: 'Clarinet' },
            ],
            correctAnswerId: 'fq13a2',
            explanation: 'Electronic instruments provided sounds that were "unearthly" to early audiences.'
        },
        {
            id: 'fq14',
            text: 'What is "Parallelism" (or "Planar" harmony)?',
            options: [
                { id: 'fq14a1', text: 'Chords moving in the same direction and interval' },
                { id: 'fq14a2', text: 'Two different songs playing' },
                { id: 'fq14a3', text: 'Playing only white keys' },
                { id: 'fq14a4', text: 'A type of rhythm' },
            ],
            correctAnswerId: 'fq14a1',
            explanation: 'Often used in fantasy or "magical" scenes to create an ethereal floaty feel.'
        },
        {
            id: 'fq15',
            text: 'What is the "Temp Track"?',
            options: [
                { id: 'fq15a1', text: 'The final music' },
                { id: 'fq15a2', text: 'Temporary music used by the editor before the composer writes the final score' },
                { id: 'fq15a3', text: 'Music that is too fast' },
                { id: 'fq15a4', text: 'The weather report' },
            ],
            correctAnswerId: 'fq15a2',
            explanation: 'Temp tracks often influence the final style and tempo of the actual score.'
        },
        {
            id: 'fq16',
            text: 'Which texture describes multiple melodies clashing in a complex chase scene?',
            options: [
                { id: 'fq16a1', text: 'Monophonic' },
                { id: 'fq16a2', text: 'Polyphonic / Counterpoint' },
                { id: 'fq16a3', text: 'Homophonic' },
                { id: 'fq16a4', text: 'Silence' },
            ],
            correctAnswerId: 'fq16a2',
            explanation: 'Multiple independent lines create a sense of chaotic, high-energy movement.'
        },
        {
            id: 'fq17',
            text: 'A "Subito Piano" (suddenly quiet) moment after a loud climax might be used for:',
            options: [
                { id: 'fq17a1', text: 'A jump scare' },
                { id: 'fq17a2', text: 'A moment of shock, realization, or sudden loss' },
                { id: 'fq17a3', text: 'A happy ending' },
                { id: 'fq17a4', text: 'Saving battery' },
            ],
            correctAnswerId: 'fq17a2',
            explanation: 'Unexpected silence can be as dramatic as a loud explosion.'
        },
        {
            id: 'fq18',
            text: 'Bernard Herrmann\'s "Psycho" score uses which instrumental force only?',
            options: [
                { id: 'fq18a1', text: 'Full Orchestra with Brass' },
                { id: 'fq18a2', text: 'Strings only' },
                { id: 'fq18a3', text: 'Synthesizers' },
                { id: 'fq18a4', text: 'Percussion only' },
            ],
            correctAnswerId: 'fq18a2',
            explanation: 'Herrmann felt the "black and white" film needed a "black and white" sound—a monochrome string section.'
        },
        {
            id: 'fq19',
            text: 'What is "Chromaticism"?',
            options: [
                { id: 'fq19a1', text: 'Using only the notes of a major scale' },
                { id: 'fq19a2', text: 'Using notes from outside the home key (semitones)' },
                { id: 'fq19a3', text: 'Playing in tempo' },
                { id: 'fq19a4', text: 'A type of vocal effect' },
            ],
            correctAnswerId: 'fq19a2',
            explanation: 'Chromatic movement creates sliding, unstable, and often dark moods.'
        },
        {
            id: 'fq20',
            text: 'Which dynamic is most likely used for a "Jump Scare"?',
            options: [
                { id: 'fq20a1', text: 'Pianissimo' },
                { id: 'fq20a2', text: 'Sforzando / Fortissimo' },
                { id: 'fq20a3', text: 'Mezzo Piano' },
                { id: 'fq20a4', text: 'Fade out' },
            ],
            correctAnswerId: 'fq20a2',
            explanation: 'A sudden blast of volume triggers the human startle reflex.'
        }
    ]
};

const StageScreen0309FilmMusicPage: React.FC = () => {
    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            {/* Breadcrumb Navigation */}
            <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
                <span className="mx-2">›</span>
                <Link to="/aos/stage-screen" className="hover:text-indigo-600 dark:hover:text-indigo-400">Music for Stage and Screen</Link>
                <span className="mx-2">›</span>
                <span className="text-gray-700 dark:text-gray-300">Film Music</span>
            </nav>

            {/* Page Header */}
            <header className="mb-10 text-center">
                <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-bold tracking-widest uppercase">
                    Focus Area
                </div>
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 mb-4">
                    Film Music
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
                    The Language of Modern Myth
                </p>
            </header>

            {/* Main Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
                <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-indigo-100 dark:border-indigo-900/40">
                    <h2 className="text-3xl font-bold mb-6 text-indigo-700 dark:text-indigo-400">Sound as Storyteller</h2>
                    <p className="text-lg leading-relaxed">
                        In film, music isn't just background noise. It is often the <strong>"Hidden Narrator"</strong>,
                        telling us things the visuals can't—like a character's internal fear or a subtext that
                        contradicts what we see on screen.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6">1. Essential Techniques</h2>
                    <div className="space-y-6">
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border-l-4 border-indigo-600">
                            <h3 className="font-bold text-xl mb-2">The Leitmotif</h3>
                            <p className="mb-4">
                                A recurring theme for a character. When the theme returns, it brings back all the
                                emotional baggage of that character.
                            </p>
                            <AbcDisplayComponent
                                id="bond-motif"
                                title="Generic Spy Motif (The Bond Sound)"
                                abcNotation={`X:1\nM:4/4\nL:1/8\nK:Em\nQ:" Slinking"\nE2 G2 B2 _B2 | E2 G2 B2 _B2 |`}
                            />
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border-l-4 border-blue-600">
                            <h3 className="font-bold text-xl mb-2">Dissonance & Tension</h3>
                            <p className="mb-4">
                                Horror and thriller scores use semitones and clashing intervals to create
                                psychological unease.
                            </p>
                            <AbcDisplayComponent
                                id="horror-dissonance"
                                title="Suspenseful Minor Seconds"
                                abcNotation={`X:1\nM:4/4\nL:1/4\nK:C\nQ:" Uneasy"\n[_E_F]4 | [_G_A]4 | [^c=B]4 |`}
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-indigo-900 text-white p-8 rounded-3xl shadow-2xl">
                    <h2 className="text-3xl font-bold mb-6 text-indigo-200">2. Diegetic vs Non-Diegetic</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-indigo-300 font-bold text-xl mb-2 underline decoration-indigo-500 underline-offset-4">Diegetic (Source)</h4>
                            <p className="text-sm opacity-90 leading-relaxed">
                                Music that exists <strong>inside</strong> the movie world. Characters can hear it.
                                Examples: A band in a club, a car radio, or a character humming.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-indigo-300 font-bold text-xl mb-2 underline decoration-indigo-500 underline-offset-4">Non-Diegetic (Score)</h4>
                            <p className="text-sm opacity-90 leading-relaxed">
                                Music added for the <strong>audience</strong> only. Characters are unaware of it.
                                This is the primary way themes and moods are established.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-12">
                    <h2 className="text-4xl font-black text-center mb-12 uppercase tracking-tighter text-indigo-800 dark:text-indigo-200">Film Scoring Challenge</h2>
                    <p className="text-center text-gray-500 mb-8 font-medium italic text-lg">20 Questions to test your film music IQ</p>
                    <QuizComponent quizData={filmQuiz} />
                </section>
            </div>

            <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-800 text-center">
                <Link to="/aos/stage-screen/cultural-historical/key-composers" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105">
                    Next: Key Composers & Artists
                    <span>→</span>
                </Link>
            </footer>
        </article>
    );
};

export default StageScreen0309FilmMusicPage;
