import React from 'react';
import { Link } from 'react-router-dom';
import AbcDisplayComponent from '../../../components/AbcDisplayComponent';
import QuizComponent from '../../../components/QuizComponent';
import { Quiz } from '../../../types';

const instrumentationQuiz: Quiz = {
  id: 'aos7-instrumentation-quiz',
  title: 'Instrumentation and Timbre Quiz',
  questions: [
    {
      id: 'iq1',
      text: 'Which instrument family is traditionally used for heroic "Fanfares"?',
      options: [
        { id: 'iq1a1', text: 'Strings' },
        { id: 'iq1a2', text: 'Brass' },
        { id: 'iq1a3', text: 'Woodwinds' },
        { id: 'iq1a4', text: 'Electronic Synths' },
      ],
      correctAnswerId: 'iq1a2',
      explanation: 'Brass instruments like trumpets and horns have the power and brilliance required for fanfares.'
    },
    {
      id: 'iq2',
      text: 'What instrument did Tchaikovsky use to represent the "Sugar Plum Fairy"?',
      options: [
        { id: 'iq2a1', text: 'Tuba' },
        { id: 'iq2a2', text: 'Celesta' },
        { id: 'iq2a3', text: 'Electric Guitar' },
        { id: 'iq2a4', text: 'Oboe' },
      ],
      correctAnswerId: 'iq2a2',
      explanation: 'The Celesta, with its bell-like, ethereal sound, was perfect for the magical fairy character.'
    },
    {
      id: 'iq3',
      text: 'What is "Foley" in the context of film and games?',
      options: [
        { id: 'iq3a1', text: 'A type of orchestral conductor' },
        { id: 'iq3a2', text: 'The reproduction of everyday sound effects (footsteps, cloth) added in post-production' },
        { id: 'iq3a3', text: 'A fast violin technique' },
        { id: 'iq3a4', text: 'A digital music format' },
      ],
      correctAnswerId: 'iq3a2',
      explanation: 'Foley enhances the realism of the scene by adding specific sound effects that might not have been captured clearly during filming.'
    },
    {
      id: 'iq4',
      text: 'In John Williams\' "Jaws", the shark is represented by which section of the orchestra?',
      options: [
        { id: 'iq4a1', text: 'High woodwinds' },
        { id: 'iq4a2', text: 'Low-register strings and brass (Tuba/Cellos/Basses)' },
        { id: 'iq4a3', text: 'Electronic drum machines' },
        { id: 'iq4a4', text: 'Children\'s choir' },
      ],
      correctAnswerId: 'iq4a2',
      explanation: 'The low register creates a sense of size, power, and deep-seated threat.'
    },
    {
      id: 'iq5',
      text: 'What is a "Synthesizer"?',
      options: [
        { id: 'iq5a1', text: 'An electronic musical instrument that generates audio signals' },
        { id: 'iq5a2', text: 'A person who writes scripts' },
        { id: 'iq5a3', text: 'A type of wooden flute' },
        { id: 'iq5a4', text: 'The name of the projector' },
      ],
      correctAnswerId: 'iq5a1',
      explanation: 'Synthesizers allow composers to create entirely new sounds that don\'t exist in the natural world.'
    },
    {
      id: 'iq6',
      text: 'Which "World Instrument" is often used to suggest an Ancient Chinese or mystical setting?',
      options: [
        { id: 'iq6a1', text: 'Erhu (Two-stringed fiddle)' },
        { id: 'iq6a2', text: 'Banjo' },
        { id: 'iq6a3', text: 'Accordion' },
        { id: 'iq6a4', text: 'Saxophone' },
      ],
      correctAnswerId: 'iq6a1',
      explanation: 'The Erhu\'s vocal-like quality is frequently used in soundtracks like *Crouching Tiger, Hidden Dragon*.'
    },
    {
      id: 'iq7',
      text: 'What does "Con Sordino" mean?',
      options: [
        { id: 'iq7a1', text: 'Play with a mute' },
        { id: 'iq7a2', text: 'Play with the loud pedal' },
        { id: 'iq7a3', text: 'Sing very loudly' },
        { id: 'iq7a4', text: 'Stop playing' },
      ],
      correctAnswerId: 'iq7a1',
      explanation: 'Mutes change the timbre of brass or strings, making them sound distant, muffled, or eerie.'
    },
    {
      id: 'iq8',
      text: 'What is "Pizzicato"?',
      options: [
        { id: 'iq8a1', text: 'Plucking the strings with fingers' },
        { id: 'iq8a2', text: 'Bowing the strings' },
        { id: 'iq8a3', text: 'Hitting the strings with the wood of the bow' },
        { id: 'iq8a4', text: 'A type of pizza' },
      ],
      correctAnswerId: 'iq8a1',
      explanation: 'Pizzicato creates a short, percussive sound often used for "sneaking" themes or lighthearted moments.'
    },
    {
      id: 'iq9',
      text: 'Which instrument produces an "unearthly" sliding sound and was a staple of early Sci-Fi?',
      options: [
        { id: 'iq9a1', text: 'Theremin' },
        { id: 'iq9a2', text: 'Pipe Organ' },
        { id: 'iq9a3', text: 'Timpani' },
        { id: 'iq9a4', text: 'Oboe' },
      ],
      correctAnswerId: 'iq9a1',
      explanation: 'The Theremin is played without physical contact and provides a ghostly, electronic vibrato.'
    },
    {
      id: 'iq10',
      text: 'What is "Vocalise"?',
      options: [
        { id: 'iq10a1', text: 'Singing without words (e.g., "Ah" or "Oo")' },
        { id: 'iq10a2', text: 'Speaking the lyrics' },
        { id: 'iq10a3', text: 'Shouting' },
        { id: 'iq10a4', text: 'Singing in a foreign language' },
      ],
      correctAnswerId: 'iq10a1',
      explanation: 'Vocalise is used for haunting, spiritual, or ethereal atmosphere in films like *The Gladiator* or *The Lord of the Rings*.'
    },
    {
      id: 'iq11',
      text: 'What does "Double" mean in orchestration?',
      options: [
        { id: 'iq11a1', text: 'Playing the same melody on two or more different instruments' },
        { id: 'iq11a2', text: 'Playing twice as fast' },
        { id: 'iq11a3', text: 'Getting a second job' },
        { id: 'iq11a4', text: 'Playing twice as loud' },
      ],
      correctAnswerId: 'iq11a1',
      explanation: 'Doubling (e.g., Flute and Violin) creates a new composite timbre and makes the melody stronger.'
    },
    {
      id: 'iq12',
      text: 'What is "Flutter-tonguing"?',
      options: [
        { id: 'iq12a1', text: 'A woodwind/brass technique that creates a growling or whirring sound' },
        { id: 'iq12a2', text: 'A type of singing' },
        { id: 'iq12a3', text: 'A percussion effect' },
        { id: 'iq12a4', text: 'Licking the instrument' },
      ],
      correctAnswerId: 'iq12a1',
      explanation: 'Flutter-tonguing (Frullato) adds a chaotic or aggressive texture to wind instruments.'
    },
    {
      id: 'iq13',
      text: 'Which keyboard instrument is often used in period-dramas set in the 18th century?',
      options: [
        { id: 'iq13a1', text: 'Harpsichord' },
        { id: 'iq13a2', text: 'Electric Piano' },
        { id: 'iq13a3', text: 'Hammond Organ' },
        { id: 'iq13a4', text: 'Synthesizer' },
      ],
      correctAnswerId: 'iq13a1',
      explanation: 'The Harpsichord immediately signals the "Baroque" or "Classical" era to the audience.'
    },
    {
      id: 'iq14',
      text: 'What is "Col Legno"?',
      options: [
        { id: 'iq14a1', text: 'Hitting the strings with the wooden part of the bow' },
        { id: 'iq14a2', text: 'Bowing with high pressure' },
        { id: 'iq14a3', text: 'Playing with the fingers' },
        { id: 'iq14a4', text: 'Throwing the bow away' },
      ],
      correctAnswerId: 'iq14a1',
      explanation: 'Col Legno creates a dry, clicking, skeletal sound—famously used in Mars from *The Planets*.'
    },
    {
      id: 'iq15',
      text: 'In a "Standard Rock Band" setup, what are the four core instruments?',
      options: [
        { id: 'iq15a1', text: 'Guitar, Bass, Drums, Vocals' },
        { id: 'iq15a2', text: 'Violin, Cello, Flute, Oboe' },
        { id: 'iq15a3', text: 'Trumpet, Trombone, Tuba, Sax' },
        { id: 'iq15a4', text: 'Harp, Piano, Celesta, Xylophone' },
      ],
      correctAnswerId: 'iq15a1',
      explanation: 'This setup is the foundation of modern musical theatre and many contemporary film scores.'
    },
    {
      id: 'iq16',
      text: 'What is "Soli" in an orchestral score?',
      options: [
        { id: 'iq16a1', text: 'A whole section playing a featured melody' },
        { id: 'iq16a2', text: 'Only one person playing' },
        { id: 'iq16a3', text: 'Everyone playing' },
        { id: 'iq16a4', text: 'No one playing' },
      ],
      correctAnswerId: 'iq16a1',
      explanation: '"Soli" (plural of solo) indicates that a specific section (like the horns) has the most important part.'
    },
    {
      id: 'iq17',
      text: 'What are "String Harmonics"?',
      options: [
        { id: 'iq17a1', text: 'High-pitched, "glassy" notes created by lightly touching the string' },
        { id: 'iq17a2', text: 'Singing along with the violin' },
        { id: 'iq17a3', text: 'Playing the wrong notes together' },
        { id: 'iq17a4', text: 'A type of string brand' },
      ],
      correctAnswerId: 'iq17a1',
      explanation: 'Harmonics sound fragile and ethereal, often used for icy or spiritual moments.'
    },
    {
      id: 'iq18',
      text: 'Which vocal range is the highest female voice?',
      options: [
        { id: 'iq18a1', text: 'Soprano' },
        { id: 'iq18a2', text: 'Alto' },
        { id: 'iq18a3', text: 'Tenor' },
        { id: 'iq18a4', text: 'Bass' },
      ],
      correctAnswerId: 'iq18a1',
      explanation: 'Sopranos often handle the soaring, "angelic" lead melodies in choral soundtracks.'
    },
    {
      id: 'iq19',
      text: 'A "Glockenspiel" or "Xylophone" belongs to which family?',
      options: [
        { id: 'iq19a1', text: 'Tunable Percussion' },
        { id: 'iq19a2', text: 'Untuned Percussion' },
        { id: 'iq19a3', text: 'Brass' },
        { id: 'iq19a4', text: 'Woodwind' },
      ],
      correctAnswerId: 'iq19a1',
      explanation: 'These instruments can play specific notes (melodies) rather than just broad rhythmic hits.'
    },
    {
      id: 'iq20',
      text: 'What is a "Glissando"?',
      options: [
        { id: 'iq20a1', text: 'A rapid slide from one pitch to another' },
        { id: 'iq20a2', text: 'A type of frozen dessert' },
        { id: 'iq20a3', text: 'Holding a note for 10 bars' },
        { id: 'iq20a4', text: 'Playing as fast as possible' },
      ],
      correctAnswerId: 'iq20a1',
      explanation: 'Glissandos add a "whoosh" or dramatic sliding effect, commonly used on Harps and Trombones.'
    }
  ]
};

const StageScreen0201InstrumentationPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-indigo-600 dark:hover:text-indigo-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Instrumentation and Timbre</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 mb-4">
          Sound Sources & Timbre
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 uppercase tracking-widest font-semibold">
          Area of Study 7 • Music for Stage and Screen
        </p>
      </header>

      {/* Main Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
        <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-indigo-100 dark:border-indigo-900">
          <h2 className="text-3xl font-bold mb-6 text-indigo-700 dark:text-indigo-400">The Palette of Sound</h2>
          <p className="text-lg leading-relaxed">
            Instrumentation (or <strong>Orchestration</strong>) is choosing exactly which instruments will
            play the notes. In stage and screen music, certain "colors" (<strong>timbre</strong>) have
            specific meanings. A high violin can sound sweet or terrifying depending on the technique,
            while a low tuba almost always suggests something massive or threatening.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">1. Orchestral Colors</h2>
          <p className="mb-6">
            Even in the digital age, the symphony orchestra remains the primary tool for cinematic scale.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800">
              <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">High Strings (Tension)</h3>
              <p className="text-sm mb-4">
                Using <strong>Tremolo</strong> (rapid bowing) in the high register creates a "shimmering"
                tension common in thrillers.
              </p>
              <AbcDisplayComponent
                id="high-strings"
                title="String Tremolo Tension"
                abcNotation={`X:1\nM:4/4\nL:1/8\nK:C\nQ:" Agitated"\n!tremolo!c8 | !tremolo!_B8 |`}
              />
            </div>

            <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-2xl border border-violet-100 dark:border-violet-800">
              <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400 mb-2">Low Brass (Threat)</h3>
              <p className="text-sm mb-4">
                Instruments like the <strong>Tuba</strong> and <strong>Bass Trombone</strong> provide a
                weighted, dangerous foundation.
              </p>
              <AbcDisplayComponent
                id="low-brass"
                title="Deep Brass Threat"
                abcNotation={`X:1\nM:4/4\nL:1\nK:C\nQ:" Low and Heavy"\n,,C | ,,_D | ,,C |`}
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">2. Magical Timbres</h2>
          <p className="mb-6">
            Small, "glittery" sounds are used to represent magic, childhood, or the supernatural.
            The <strong>Celesta</strong> and <strong>Harp</strong> are essential here.
          </p>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-400 mb-2">The Magic Fragment</h3>
            <p className="text-sm mb-4">
              High-pitched, bell-like notes suggest wonder or a magical transformation.
            </p>
            <AbcDisplayComponent
              id="magic-celesta"
              title="Celesta Magic Motif"
              abcNotation={`X:1\nM:3/4\nL:1/8\nK:C\nQ:" Glittering"\nc' g e c' g e | (3abc' (3bag (3fed | c6 |`}
            />
          </div>
        </section>

        <section className="bg-indigo-900 text-white p-8 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-indigo-300">3. Electronic Soundscapes</h2>
          <p className="mb-4">
            Modern film and game music often uses <strong>Synthesizers</strong> to blend with or replace
            the orchestra.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-indigo-100">
            <li><strong>Sub-Bass:</strong> Used in theaters to create a physical "feeling" of vibration during impacts.</li>
            <li><strong>Pads:</strong> Sustained electronic chords that provide a "wash" of atmospheric sound.</li>
            <li><strong>Sound Design:</strong> Blurring the line between music and sound effects (e.g., Hans Zimmer's *Inception* braams).</li>
          </ul>
        </section>

        <section className="py-12">
          <h2 className="text-4xl font-black text-center mb-12 uppercase tracking-tighter text-indigo-800 dark:text-indigo-200">Test Your Knowledge</h2>
          <QuizComponent quizData={instrumentationQuiz} />
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

export default StageScreen0201InstrumentationPage;
