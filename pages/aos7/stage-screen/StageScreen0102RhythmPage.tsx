import React from 'react';
import { Link } from 'react-router-dom';
import AbcDisplayComponent from '../../../components/AbcDisplayComponent';
import QuizComponent from '../../../components/QuizComponent';
import { Quiz } from '../../../types';

const rhythmQuiz: Quiz = {
  id: 'aos7-rhythm-quiz',
  title: 'Rhythm in Stage and Screen Quiz',
  questions: [
    {
      id: 'rq1',
      text: 'What is an "Ostinato"?',
      options: [
        { id: 'rq1a1', text: 'A type of musical instrument' },
        { id: 'rq1a2', text: 'A short, continually repeated musical phrase or rhythm' },
        { id: 'rq1a3', text: 'A sudden change in volume' },
        { id: 'rq1a4', text: 'The end of a scene' },
      ],
      correctAnswerId: 'rq1a2',
      explanation: 'Ostinatos (like in "Mars" or "Pirates of the Caribbean") are used to build relentless momentum and tension.'
    },
    {
      id: 'rq2',
      text: 'Which rhythmic technique is used to create excitement by accenting the weak beats?',
      options: [
        { id: 'rq2a1', text: 'Legato' },
        { id: 'rq2a2', text: 'Syncopation' },
        { id: 'rq2a3', text: 'Cadence' },
        { id: 'rq2a4', text: 'Monophony' },
      ],
      correctAnswerId: 'rq2a2',
      explanation: 'Syncopation shifts the natural pulse, creating a sense of energy and drive common in jazz-influenced film scores or action music.'
    },
    {
      id: 'rq3',
      text: 'Stravinsky\'s "The Rite of Spring" is famous for what rhythmic quality?',
      options: [
        { id: 'rq3a1', text: 'Very simple 4/4 time throughout' },
        { id: 'rq3a2', text: 'Irregular accents and rapidly changing time signatures' },
        { id: 'rq3a3', text: 'Using no percussion' },
        { id: 'rq3a4', text: 'No rhythm at all' },
      ],
      correctAnswerId: 'rq3a2',
      explanation: 'Stravinsky used "primitive" and irregular rhythms to create a sense of raw energy and chaos in the ballet.'
    },
    {
      id: 'rq4',
      text: 'What is "Hit Point" synchronization?',
      options: [
        { id: 'rq4a1', text: 'A loud drum roll at the end' },
        { id: 'rq4a2', text: 'Aligning a specific musical accent with a specific visual event (e.g., a punch)' },
        { id: 'rq4a3', text: 'The highest note in a melody' },
        { id: 'rq4a4', text: 'A scoring system for the composer' },
      ],
      correctAnswerId: 'rq4a2',
      explanation: 'Hit points require precise rhythmic timing to ensure the music "hits" exactly when the action occurs on screen.'
    },
    {
      id: 'rq5',
      text: 'In "Mickey-Mousing", if a character tiptoes, the rhythm would likely be:',
      options: [
        { id: 'rq5a1', text: 'Long, sustained whole notes' },
        { id: 'rq5a2', text: 'Short, staccato, rhythmic bursts' },
        { id: 'rq5a3', text: 'Loud brass fanfares' },
        { id: 'rq5a4', text: 'Silence' },
      ],
      correctAnswerId: 'rq5a2',
      explanation: 'Rhythmic mimicry is the core of Mickey-Mousing, matching the physical timing of actions with musical notes.'
    },
    {
      id: 'rq6',
      text: 'What is a "Polyrhythm"?',
      options: [
        { id: 'rq6a1', text: 'Two or more different rhythms played simultaneously' },
        { id: 'rq6a2', text: 'A rhythm played by a parrot' },
        { id: 'rq6a3', text: 'One single drum beat' },
        { id: 'rq6a4', text: 'No rhythm at all' },
      ],
      correctAnswerId: 'rq6a1',
      explanation: 'Polyrhythms (like 3 against 2) create complex, driving textures in modern film and ethnic-influenced scores.'
    },
    {
      id: 'rq7',
      text: 'What is "Augmentation" of a rhythm?',
      options: [
        { id: 'rq7a1', text: 'Making the note values twice as long (slower)' },
        { id: 'rq7a2', text: 'Making the note values twice as short (faster)' },
        { id: 'rq7a3', text: 'Deleting the rhythm' },
        { id: 'rq7a4', text: 'Playing it louder' },
      ],
      correctAnswerId: 'rq7a1',
      explanation: 'Augmentation makes a familiar theme sound more grand, slow, and significant.'
    },
    {
      id: 'rq8',
      text: 'What is "Diminution" of a rhythm?',
      options: [
        { id: 'rq8a1', text: 'Making the rhythm louder' },
        { id: 'rq8a2', text: 'Halving the note values to make the rhythm faster' },
        { id: 'rq8a3', text: 'Ending the piece' },
        { id: 'rq8a4', text: 'Changing to a minor key' },
      ],
      correctAnswerId: 'rq8a2',
      explanation: 'Diminution can make a theme feel urgent, frantic, or energetic.'
    },
    {
      id: 'rq9',
      text: 'Which term describes a "pickup" note or notes before the first downbeat?',
      options: [
        { id: 'rq9a1', text: 'Cadence' },
        { id: 'rq9a2', text: 'Anacrusis' },
        { id: 'rq9a3', text: 'Syncopation' },
        { id: 'rq9a4', text: 'Triplet' },
      ],
      correctAnswerId: 'rq9a2',
      explanation: 'An anacrusis provides a "breath" or lead-in to a main theme, common in fanfares.'
    },
    {
      id: 'rq10',
      text: 'What does "Accelerando" mean?',
      options: [
        { id: 'rq10a1', text: 'Gradually getting faster' },
        { id: 'rq10a2', text: 'Gradually getting slower' },
        { id: 'rq10a3', text: 'Instantly stopping' },
        { id: 'rq10a4', text: 'Getting louder' },
      ],
      correctAnswerId: 'rq10a1',
      explanation: 'Accelerando is a powerful tool to increase tension in chases or building climaxes.'
    },
    {
      id: 'rq11',
      text: 'What is "Tempo Rubato"?',
      options: [
        { id: 'rq11a1', text: 'A strictly mechanical beat' },
        { id: 'rq11a2', text: 'Flexible, "stolen" time used for expressive purposes' },
        { id: 'rq11a3', text: 'A type of percussion instrument' },
        { id: 'rq11a4', text: 'Silence' },
      ],
      correctAnswerId: 'rq11a2',
      explanation: 'Rubato is essential in romantic ballet or emotional film themes to feel more "human."'
    },
    {
      id: 'rq12',
      text: 'Which rhythmic device involves shifting the accents by a steady amount (e.g., half a beat)?',
      options: [
        { id: 'rq12a1', text: 'Rhythmic Displacement' },
        { id: 'rq12a2', text: 'Stopping' },
        { id: 'rq12a3', text: 'Legato' },
        { id: 'rq12a4', text: 'Whole-tone scale' },
      ],
      correctAnswerId: 'rq12a1',
      explanation: 'Rhythmic displacement makes a theme feel "off-kilter" and less stable.'
    },
    {
      id: 'rq13',
      text: 'A "Hemiola" is a rhythmic effect that makes 2 beats feel like:',
      options: [
        { id: 'rq13a1', text: 'One beat' },
        { id: 'rq13a2', text: 'Three beats (or vice versa)' },
        { id: 'rq13a3', text: 'Silence' },
        { id: 'rq13a4', text: 'Loud noise' },
      ],
      correctAnswerId: 'rq13a2',
      explanation: 'Hemiolas create a temporary shift in the feel of the meter, common in triple-time dance music.'
    },
    {
      id: 'rq14',
      text: 'What is a "Cross-Rhythm"?',
      options: [
        { id: 'rq14a1', text: 'The same rhythm played by everyone' },
        { id: 'rq14a2', text: 'Competing rhythms that clash across the beat' },
        { id: 'rq14a3', text: 'A rhythm only for crossing the street' },
        { id: 'rq14a4', text: 'Resting' },
      ],
      correctAnswerId: 'rq14a2',
      explanation: 'Cross-rhythms (like 3 against 4) create intense textural complexity.'
    },
    {
      id: 'rq15',
      text: 'Hans Zimmer often uses "Motoric" rhythms. These are:',
      options: [
        { id: 'rq15a1', text: 'Rhythms that sound like a car' },
        { id: 'rq15a2', text: 'Incessant, steady, driving patterns (often in eighth notes)' },
        { id: 'rq15a3', text: 'Very slow, sparse notes' },
        { id: 'rq15a4', text: 'Random noises' },
      ],
      correctAnswerId: 'rq15a2',
      explanation: 'Motoric rhythms build intense, industrial-style momentum in modern scores.'
    },
    {
      id: 'rq16',
      text: 'What does a "Fermata" (pause symbol) indicate?',
      options: [
        { id: 'rq16a1', text: 'Play the note louder' },
        { id: 'rq16a2', text: 'Hold the note longer than its written value for dramatic effect' },
        { id: 'rq16a3', text: 'Play the note backwards' },
        { id: 'rq16a4', text: 'Skip the note' },
      ],
      correctAnswerId: 'rq16a2',
      explanation: 'Fermatas create a sense of breath or suspension before a big resolution or change.'
    },
    {
      id: 'rq17',
      text: 'Which meter is considered "Irregular" or "Additive"?',
      options: [
        { id: 'rq17a1', text: '4/4' },
        { id: 'rq17a2', text: '5/4 or 7/8' },
        { id: 'rq17a3', text: '3/4' },
        { id: 'rq17a4', text: '2/4' },
      ],
      correctAnswerId: 'rq17a2',
      explanation: 'Irregular meters feel restless and can represent alien or chaotic environments (e.g., Mission Impossible theme).'
    },
    {
      id: 'rq18',
      text: 'What is the "Pulse" compared to the "Rhythm"?',
      options: [
        { id: 'rq18a1', text: 'The pulse is the underlying heartbeat; rhythm is the specific pattern of note lengths' },
        { id: 'rq18a2', text: 'They are exactly the same' },
        { id: 'rq18a3', text: 'The pulse is always faster' },
        { id: 'rq18a4', text: 'Rhythm is only for drums' },
      ],
      correctAnswerId: 'rq18a1',
      explanation: 'Rhythms dance on top of the pulse; without a pulse, the rhythm can feel lost.'
    },
    {
      id: 'rq19',
      text: 'In an action scene, a "Rhythmic Decrescendo" (getting quieter/simpler) might represent:',
      options: [
        { id: 'rq19a1', text: 'Success and victory' },
        { id: 'rq19a2', text: 'Fatigue, narrowing focus, or a character losing consciousness' },
        { id: 'rq19a3', text: 'A big explosion' },
        { id: 'rq19a4', text: 'Increased speed' },
      ],
      correctAnswerId: 'rq19a2',
      explanation: 'Stripping away rhythmic layers simulates a loss of cognitive energy or physical power.'
    },
    {
      id: 'rq20',
      text: 'What is a "Triplet"?',
      options: [
        { id: 'rq20a1', text: 'Three notes played in the time of two' },
        { id: 'rq20a2', text: 'Three identical songs' },
        { id: 'rq20a3', text: 'A loud noise' },
        { id: 'rq20a4', text: 'Resting for three beats' },
      ],
      correctAnswerId: 'rq20a1',
      explanation: 'Triplets add a "rolling" or "swinging" feel to a duple meter, common in fanfares.'
    }
  ]
};

const StageScreen0102RhythmPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-emerald-600 dark:hover:text-emerald-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-emerald-600 dark:hover:text-emerald-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Rhythm and Synchronization</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-4">
          Rhythm & Drive
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 uppercase tracking-widest font-semibold">
          Area of Study 7 • Music for Stage and Screen
        </p>
      </header>

      {/* Main Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
        <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-emerald-100 dark:border-emerald-900">
          <h2 className="text-3xl font-bold mb-6 text-emerald-700 dark:text-emerald-400">The Clockwork of Drama</h2>
          <p className="text-lg leading-relaxed">
            Rhythm is the <strong>engine</strong> of stage and screen music. It controls the pulse of a chase,
            the heartbeat of a thriller, and the precise timing of a dancer's leap. In film, composers often use
            rhythm to "catch" specific visual moments, a process called <strong>synchronization</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">1. The Driving Ostinato</h2>
          <p className="mb-6">
            An <strong>Ostinato</strong> is a repeated musical pattern. In action movies, a rhythmic ostinato
            (often in the strings or percussion) creates a sense of "relentless momentum."
          </p>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800">
            <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">Action Ostinato Example</h3>
            <p className="text-sm mb-4">
              Similar to a "chase" rhythm, this pattern uses repeated eighth or sixteenth notes to build urgency.
            </p>
            <AbcDisplayComponent
              id="action-ostinato"
              title="Action Scene Ostinato"
              abcNotation={`X:1\nM:4/4\nL:1/8\nK:Cmin\nQ:" Fast and Driven"\nGGGG GGGG | GGGG GGGG | ^FG FG dG G G | GGGG GGGG |`}
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">2. Syncopation & Energy</h2>
          <p className="mb-6">
            <strong>Syncopation</strong>—stressing the weak beats—is used to make music feel more alive and less
            predictable. This is common in "City Life" scenes or sophisticated heist movies.
          </p>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-2xl border border-teal-100 dark:border-teal-800">
            <h3 className="text-xl font-bold text-teal-700 dark:text-teal-400 mb-2">Syncopated Theme</h3>
            <p className="text-sm mb-4">
              Notice how the accents fall between the main beats, creating a "bouncy" or energetic feel.
            </p>
            <AbcDisplayComponent
              id="syncopated-example"
              title="Syncopated Rhythmic Motif"
              abcNotation={`X:1\nM:4/4\nL:1/8\nK:C\nQ:" Bouncy"\nz G2 G- G E2 C | z A2 A- A F2 D |`}
            />
          </div>
        </section>

        <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
          <h2 className="text-3xl font-bold mb-6">3. Precise Sync: "The Hit Point"</h2>
          <p className="mb-4">
            A <strong>Hit Point</strong> is a moment in a film where the music must synchronize perfectly with a
            visual event.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>The Punch:</strong> A sudden sforzando (sfz) chord exactly as a fist connects.</li>
            <li><strong>The Door Slam:</strong> A silence or a rhythmic stop as a door hits the frame.</li>
            <li><strong>The Cut:</strong> A change in tempo or meter that aligns with a change in camera angle.</li>
          </ul>
        </section>

        <section className="py-12">
          <h2 className="text-4xl font-black text-center mb-12 uppercase tracking-tighter text-emerald-800 dark:text-emerald-200">Test Your Knowledge</h2>
          <QuizComponent quizData={rhythmQuiz} />
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-800 text-center">
        <Link to="/aos/stage-screen/core-musical-elements/harmony" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105">
          Next: Harmony and Tonality
          <span>→</span>
        </Link>
      </footer>
    </article>
  );
};

export default StageScreen0102RhythmPage;
