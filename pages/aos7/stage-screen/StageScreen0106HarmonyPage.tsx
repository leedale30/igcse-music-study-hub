import React from 'react';
import { Link } from 'react-router-dom';
import AbcDisplayComponent from '../../../components/AbcDisplayComponent';
import QuizComponent from '../../../components/QuizComponent';
import { Quiz } from '../../../types';

const harmonyQuiz: Quiz = {
  id: 'aos7-harmony-quiz',
  title: 'Harmony and Tonality in Stage and Screen Quiz',
  questions: [
    {
      id: 'hq1',
      text: 'Which tonality is most commonly used for "heroic" or "happy" scenes?',
      options: [
        { id: 'hq1a1', text: 'Minor Key' },
        { id: 'hq1a2', text: 'Major Key' },
        { id: 'hq1a3', text: 'Atonality' },
        { id: 'hq1a4', text: 'Silence' },
      ],
      correctAnswerId: 'hq1a2',
      explanation: 'Major tonalities are associated with brightness, stability, and heroism in Western film music.'
    },
    {
      id: 'hq2',
      text: 'What is "Dissonance" used for in film scoring?',
      options: [
        { id: 'hq2a1', text: 'To create a sense of peace and relaxation' },
        { id: 'hq2a2', text: 'To create tension, fear, or psychological instability' },
        { id: 'hq2a3', text: 'To make the actors sing better' },
        { id: 'hq2a4', text: 'To signal the end of the movie' },
      ],
      correctAnswerId: 'hq2a2',
      explanation: 'Clashing, "unfinished" sounds (dissonance) naturally create unease, making them perfect for horror or thriller genres.'
    },
    {
      id: 'hq3',
      text: 'What is a "Pedal Note" (or Pedal Point)?',
      options: [
        { id: 'hq3a1', text: 'A note played on a bicycle' },
        { id: 'hq3a2', text: 'A sustained or repeated note, often in the bass, while other harmonies change above it' },
        { id: 'hq3a3', text: 'A very fast melody' },
        { id: 'hq3a4', text: 'A type of guitar effect' },
      ],
      correctAnswerId: 'hq3a2',
      explanation: 'Pedal notes (especially low ones) are powerful tools for building suspense or providing a solid, unchanging foundation.'
    },
    {
      id: 'hq4',
      text: 'Bernard Herrmann\'s score for "Psycho" primarily uses what harmonic quality to create fear?',
      options: [
        { id: 'hq4a1', text: 'Sweet, consonant major chords on a harp' },
        { id: 'hq4a2', text: 'Sharp, dissonant string clusters and minor seconds' },
        { id: 'hq4a3', text: 'Electronic synthesized drones' },
        { id: 'hq4a4', text: 'Jazz harmonies' },
      ],
      correctAnswerId: 'hq4a2',
      explanation: 'Herrmann used high, clashing string notes to mimic the sound of a scream or a knife.'
    },
    {
      id: 'hq5',
      text: 'What does "Polytonality" mean?',
      options: [
        { id: 'hq5a1', text: 'Having no key at all' },
        { id: 'hq5a2', text: 'The use of two or more keys at the same time' },
        { id: 'hq5a3', text: 'A type of vocal harmony' },
        { id: 'hq5a4', text: 'Playing one key very loudly' },
      ],
      correctAnswerId: 'hq5a2',
      explanation: 'Polytonality (as seen in Stravinsky\'s "Petrushka") creates a complex, often confusing sound that can represent a character\'s internal conflict.'
    },
    {
      id: 'hq6',
      text: 'What is "Chromaticism" in a horror score?',
      options: [
        { id: 'hq6a1', text: 'Using only the notes of a major scale' },
        { id: 'hq6a2', text: 'Using notes outside the main key (semitones) to create instability' },
        { id: 'hq6a3', text: 'Playing in tempo' },
        { id: 'hq6a4', text: 'Using only the black keys' },
      ],
      correctAnswerId: 'hq6a2',
      explanation: 'Chromatic movement feels "slippery" and "unstable," ideal for representing supernatural threats.'
    },
    {
      id: 'hq7',
      text: 'Which chord type is often used for extreme suspense and "shiver" moments?',
      options: [
        { id: 'hq7a1', text: 'Major Triad' },
        { id: 'hq7a2', text: 'Diminished 7th Chord' },
        { id: 'hq7a3', text: 'Perfect 5th' },
        { id: 'hq7a4', text: 'Unison' },
      ],
      correctAnswerId: 'hq7a2',
      explanation: 'Diminished 7ths are made of minor 3rds, which sound inherently tense and unresolved.'
    },
    {
      id: 'hq8',
      text: 'What is "Parallel Harmony" (or Planar chords)?',
      options: [
        { id: 'hq8a1', text: 'Chords that never meet' },
        { id: 'hq8a2', text: 'Moving the same chord shape up or down the scale' },
        { id: 'hq8a3', text: 'Two people singing the same note' },
        { id: 'hq8a4', text: 'Playing the piano with two hands' },
      ],
      correctAnswerId: 'hq8a2',
      explanation: 'Parallel chords create an "impressionist" or floaty feel, often used in fantasy or "magical" scenes.'
    },
    {
      id: 'hq9',
      text: 'What is an "Interrupted Cadence"?',
      options: [
        { id: 'hq9a1', text: 'Ending on chord I (Happy)' },
        { id: 'hq9a2', text: 'Expected V-I ending that goes to chord VI instead (Surprise)' },
        { id: 'hq9a3', text: 'Stopping the music mid-bar' },
        { id: 'hq9a4', text: 'A loud drum hit' },
      ],
      correctAnswerId: 'hq9a2',
      explanation: 'Interrupted cadences create a "wait, what?" moment, perfect for plot twists.'
    },
    {
      id: 'hq10',
      text: 'What does "Modulation" mean in a film score?',
      options: [
        { id: 'hq10a1', text: 'Playing louder' },
        { id: 'hq10a2', text: 'Changing from one key to another' },
        { id: 'hq10a3', text: 'Adding more instruments' },
        { id: 'hq10a4', text: 'Turning off the music' },
      ],
      correctAnswerId: 'hq10a2',
      explanation: 'Modulation is used to signal a change in location, time, or a major shift in the character\'s luck.'
    },
    {
      id: 'hq11',
      text: 'Which term describes a very thick chord made of many adjacent notes?',
      options: [
        { id: 'hq11a1', text: 'Arpeggio' },
        { id: 'hq11a2', text: 'Tone Cluster' },
        { id: 'hq11a3', text: 'Interval' },
        { id: 'hq11a4', text: 'Scale' },
      ],
      correctAnswerId: 'hq11a2',
      explanation: 'Tone clusters (like those in *The Shining*) create a wall of dissonant sound.'
    },
    {
      id: 'hq12',
      text: 'What is a "Tierce de Picardie"?',
      options: [
        { id: 'hq12a1', text: 'A sad ending to a happy song' },
        { id: 'hq12a2', text: 'Ending a minor-key piece on a major chord' },
        { id: 'hq12a3', text: 'Playing three notes at once' },
        { id: 'hq12a4', text: 'A French dance' },
      ],
      correctAnswerId: 'hq12a2',
      explanation: 'Often used in historical films to provide a sense of "divine" or "holy" ending to a dark scene.'
    },
    {
      id: 'hq13',
      text: '"Harmonic Rhythm" refers to:',
      options: [
        { id: 'hq13a1', text: 'How many notes a drummer plays' },
        { id: 'hq13a2', text: 'The rate at which the chords change' },
        { id: 'hq13a3', text: 'The volume of the harmony' },
        { id: 'hq13a4', text: 'The speed of the melody' },
      ],
      correctAnswerId: 'hq13a2',
      explanation: 'Fast harmonic rhythm (changing chords every beat) creates intense energy; slow harmonic rhythm creates a sense of space.'
    },
    {
      id: 'hq14',
      text: 'Which of these is a "Standard Jazz Harmony" often used in urban film settings?',
      options: [
        { id: 'hq14a1', text: 'Added 6th or Major 7th chords' },
        { id: 'hq14a2', text: 'Simple Unisons' },
        { id: 'hq14a3', text: 'No chords' },
        { id: 'hq14a4', text: 'Square waves' },
      ],
      correctAnswerId: 'hq14a1',
      explanation: 'Added 7ths and 6ths provide the "cool," sophisticated sound associated with night scenes or detective stories.'
    },
    {
      id: 'hq15',
      text: 'What is "Atonality"?',
      options: [
        { id: 'hq15a1', text: 'Music with no clear home key or tonic' },
        { id: 'hq15a2', text: 'Music with only one note' },
        { id: 'hq15a3', text: 'Music played very softly' },
        { id: 'hq15a4', text: 'A type of guitar' },
      ],
      correctAnswerId: 'hq15a1',
      explanation: 'Atonality feels chaotic and disturbing, making it a staple of psychological horror.'
    },
    {
      id: 'hq16',
      text: 'The "Neapolitan 6th" is a chord used for:',
      options: [
        { id: 'hq16a1', text: 'Happy endings' },
        { id: 'hq16a2', text: 'Dramatic, mournful, or tragic emphasis' },
        { id: 'hq16a3', text: 'Racing scenes' },
        { id: 'hq16a4', text: 'Cartoon slips' },
      ],
      correctAnswerId: 'hq16a2',
      explanation: 'It is a flattened supertonic chord, which has a very specific "pathetic" or tragic emotional weight.'
    },
    {
      id: 'hq17',
      text: 'What is "Diatonic Harmony"?',
      options: [
        { id: 'hq17a1', text: 'Harmonies using only notes from the main scale/key' },
        { id: 'hq17a2', text: 'Harmonies using only black keys' },
        { id: 'hq17a3', text: 'No harmony' },
        { id: 'hq17a4', text: 'Loud harmony' },
      ],
      correctAnswerId: 'hq17a1',
      explanation: 'Diatonic harmony feels stable and conventional, common in light adventure or pop-influenced scores.'
    },
    {
      id: 'hq18',
      text: 'A "Pedal Point" in the *high* register (Inverted Pedal) can represent:',
      options: [
        { id: 'hq18a1', text: 'Relaxation' },
        { id: 'hq18a2', text: 'Eerie suspense, isolation, or a "ringing" in the ears' },
        { id: 'hq18a3', text: 'Increased strength' },
        { id: 'hq18a4', text: 'Total happiness' },
      ],
      correctAnswerId: 'hq18a2',
      explanation: 'High, static notes feel unnatural and can heighten psychological discomfort.'
    },
    {
      id: 'hq19',
      text: 'What is "Counterpoint" (or Polyphony)?',
      options: [
        { id: 'hq19a1', text: 'Two or more independent melodic lines occurring together' },
        { id: 'hq19a2', text: 'One person singing' },
        { id: 'hq19a3', text: 'Pointing at a counter' },
        { id: 'hq19a4', text: 'A drum solo' },
      ],
      correctAnswerId: 'hq19a1',
      explanation: 'Counterpoint creates complex, busy textures, often used in chase scenes or intellectual puzzles.'
    },
    {
      id: 'hq20',
      text: 'Which term describes a "Plagal Cadence"?',
      options: [
        { id: 'hq20a1', text: 'V to I (Final)' },
        { id: 'hq20a2', text: 'IV to I (Amen ending)' },
        { id: 'hq20a3', text: 'II to V' },
        { id: 'hq20a4', text: 'I to IV' },
      ],
      correctAnswerId: 'hq20a2',
      explanation: 'Plagal cadences have a "spiritual" or "gentle" resolution, often heard at the end of emotional scenes.'
    }
  ]
};

const StageScreen0106HarmonyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-amber-600 dark:hover:text-amber-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-amber-600 dark:hover:text-amber-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Harmony and Tonality</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-4">
          Atmospheric Harmony
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 uppercase tracking-widest font-semibold">
          Area of Study 7 • Music for Stage and Screen
        </p>
      </header>

      {/* Main Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
        <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-amber-100 dark:border-amber-900">
          <h2 className="text-3xl font-bold mb-6 text-amber-700 dark:text-amber-400">The Color of Emotion</h2>
          <p className="text-lg leading-relaxed">
            Harmony is the "color" of the music. While melody provides the theme, harmony provides the
            <strong>emotional context</strong>. A simple melody over a major chord feels safe and heroic;
            the same melody over a minor or dissonant chord feels tragic or threatening.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">1. Major vs. Minor</h2>
          <p className="mb-6">
            Film and stage composers rely heavily on our cultural associations with tonality.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-800">
              <h3 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-2">Major (Heroic)</h3>
              <p className="text-sm mb-4">
                Bright and stable. Used for victory, sweeping landscapes, or romantic leads.
              </p>
              <AbcDisplayComponent
                id="major-harmony"
                title="C Major Triad"
                abcNotation="X:1\nM:4/4\nL:1\nK:C\n[CEG] |"
              />
            </div>

            <div className="bg-slate-100 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-700 dark:text-slate-400 mb-2">Minor (Tragic/Mysterious)</h3>
              <p className="text-sm mb-4">
                Darker and more shadowed. Used for sadness, mystery, or the antagonist's theme.
              </p>
              <AbcDisplayComponent
                id="minor-harmony"
                title="C Minor Triad"
                abcNotation="X:1\nM:4/4\nL:1\nK:Cmin\n[CE_G] |"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">2. Dissonance & Suspense</h2>
          <p className="mb-6">
            <strong>Dissonance</strong> occurs when notes clash, creating a sound that wants to "resolve."
            Horror composers use dissonance to keep the audience on edge.
          </p>

          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-100 dark:border-orange-800">
            <h3 className="text-xl font-bold text-orange-700 dark:text-orange-400 mb-2">The Tension Chord</h3>
            <p className="text-sm mb-4">
              Using small intervals like <strong>Minor Seconds</strong> creates an immediate, visceral sense of fear.
            </p>
            <AbcDisplayComponent
              id="dissonance-example"
              title="Dissonant Tension"
              abcNotation={`X:1\nM:4/4\nL:1\nK:C\nQ:" Piercing"\n[E^F] | ^F4 |`}
            />
          </div>
        </section>

        <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
          <h2 className="text-3xl font-bold mb-6">3. Harmonic Devices</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Pedal Point:</strong> A long sustained bass note. A low pedal note can build immense tension as the orchestral harmonies shift wildly above it.</li>
            <li><strong>Chromaticism:</strong> Using notes outside the main key to create a "slippery" or uncertain feeling.</li>
            <li><strong>Atonality:</strong> Using all 12 notes equally without a central "home" key. Frequently used for psychological horror (e.g., *The Shining*).</li>
          </ul>
        </section>

        <section className="py-12">
          <h2 className="text-4xl font-black text-center mb-12 uppercase tracking-tighter text-amber-800 dark:text-amber-200">Test Your Knowledge</h2>
          <QuizComponent quizData={harmonyQuiz} />
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-800 text-center">
        <Link to="/aos/stage-screen/core-musical-elements/instrumentation" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105">
          Next: Instrumentation and Timbre
          <span>→</span>
        </Link>
      </footer>
    </article>
  );
};

export default StageScreen0106HarmonyPage;
