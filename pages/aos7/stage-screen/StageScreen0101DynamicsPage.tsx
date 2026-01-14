import React from 'react';
import { Link } from 'react-router-dom';
import AbcDisplayComponent from '../../../components/AbcDisplayComponent';
import QuizComponent from '../../../components/QuizComponent';
import { Quiz } from '../../../types';

const dynamicsQuiz: Quiz = {
  id: 'aos7-dynamics-quiz',
  title: 'Dynamics & Expression Quiz',
  questions: [
    {
      id: 'dq1',
      text: 'Which term describes a sudden, loud accent used for dramatic punctuation?',
      options: [
        { id: 'dq1a1', text: 'Piano' },
        { id: 'dq1a2', text: 'Sforzando (sfz)' },
        { id: 'dq1a3', text: 'Diminuendo' },
        { id: 'dq1a4', text: 'Legato' },
      ],
      correctAnswerId: 'dq1a2',
      explanation: 'Sforzando (sfz) means "suddenly with force" and is often used as a "sting" when something scary appears on screen.'
    },
    {
      id: 'dq2',
      text: 'What is a "Crescendo" used for in a suspenseful movie scene?',
      options: [
        { id: 'dq2a1', text: 'To release tension' },
        { id: 'dq2a2', text: 'To build tension and anticipation' },
        { id: 'dq2a3', text: 'To make the audience fall asleep' },
        { id: 'dq2a4', text: 'To indicate the end of the film' },
      ],
      correctAnswerId: 'dq2a2',
      explanation: 'Gradually getting louder (Crescendo) effectively mimics the feeling of a threat approaching.'
    },
    {
      id: 'dq3',
      text: 'What does "Pianissimo" (pp) usually represent on stage or screen?',
      options: [
        { id: 'dq3a1', text: 'A massive battle' },
        { id: 'dq3a2', text: 'An intimate, quiet, or vulnerable moment' },
        { id: 'dq3a3', text: 'A loud explosion' },
        { id: 'dq3a4', text: 'The main hero' },
      ],
      correctAnswerId: 'dq3a2',
      explanation: 'Very quiet dynamics draw the audience in for emotional, personal dialogue or character moments.'
    },
    {
      id: 'dq4',
      text: 'In John Williams\' scores, "Marcato" accents are often used in which section to create power?',
      options: [
        { id: 'dq4a1', text: 'Flutes' },
        { id: 'dq4a2', text: 'Harp' },
        { id: 'dq4a3', text: 'Brass (Trumpets/Horns)' },
        { id: 'dq4a4', text: 'Triangle' },
      ],
      correctAnswerId: 'dq4a3',
      explanation: 'Marcato means "marked" or "accentuated," giving the brass section a powerful, driving edge for fanfares.'
    },
    {
      id: 'dq5',
      text: 'Which dynamic is most likely used for a "Jump Scare"?',
      options: [
        { id: 'dq5a1', text: 'Subito Forte (Suddenly Loud)' },
        { id: 'dq5a2', text: 'Gradual Diminuendo' },
        { id: 'dq5a3', text: 'Silencio' },
        { id: 'dq5a4', text: 'Mezzo Piano' },
      ],
      correctAnswerId: 'dq5a1',
      explanation: 'A sudden blast of sound (Subito Forte) triggers a physical startle response in the audience.'
    },
    {
      id: 'dq6',
      text: 'What does "Diminuendo" mean?',
      options: [
        { id: 'dq6a1', text: 'Gradually getting louder' },
        { id: 'dq6a2', text: 'Gradually getting softer' },
        { id: 'dq6a3', text: 'Staying at the same volume' },
        { id: 'dq6a4', text: 'Speeding up' },
      ],
      correctAnswerId: 'dq6a2',
      explanation: 'Diminuendos can represent a character moving away, a loss of energy, or a calming resolution.'
    },
    {
      id: 'dq7',
      text: 'What is "Subito Piano"?',
      options: [
        { id: 'dq7a1', text: 'Suddenly quiet' },
        { id: 'dq7a2', text: 'Slowly quiet' },
        { id: 'dq7a3', text: 'Loud piano' },
        { id: 'dq7a4', text: 'Very fast piano' },
      ],
      correctAnswerId: 'dq7a1',
      explanation: 'A sudden drop to piano (quiet) creates a "hushed" surprise or a vacuum effect that heightens tension.'
    },
    {
      id: 'dq8',
      text: 'Which marking indicates a volume that is "Medium Loud"?',
      options: [
        { id: 'dq8a1', text: 'mf (Mezzo-Forte)' },
        { id: 'dq8a2', text: 'mp (Mezzo-Piano)' },
        { id: 'dq8a3', text: 'ff' },
        { id: 'dq8a4', text: 'p' },
      ],
      correctAnswerId: 'dq8a1',
      explanation: 'Mezzo-forte is the standard "speaking volume" for many orchestral underscores.'
    },
    {
      id: 'dq9',
      text: 'What does "fff" (Forte-fortissimo) demand?',
      options: [
        { id: 'dq9a1', text: 'As loud as possible' },
        { id: 'dq9a2', text: 'Moderately soft' },
        { id: 'dq9a3', text: 'Very quiet' },
        { id: 'dq9a4', text: 'Fast' },
      ],
      correctAnswerId: 'dq9a1',
      explanation: 'Triple-forte is reserved for massive explosions, galactic battles, or major musical theatre climaxes.'
    },
    {
      id: 'dq10',
      text: 'What is a "Forte-Piano" (fp) marking?',
      options: [
        { id: 'dq10a1', text: 'Loud, then immediately soft' },
        { id: 'dq10a2', text: 'Soft, then immediately loud' },
        { id: 'dq10a3', text: 'Loud and soft at the same time' },
        { id: 'dq10a4', text: 'A heavy piano' },
      ],
      correctAnswerId: 'dq10a1',
      explanation: 'The fp accent provides a sharp impact followed by a quiet, expectant sustain.'
    },
    {
      id: 'dq11',
      text: 'What is "Terraced Dynamics"?',
      options: [
        { id: 'dq11a1', text: 'Sudden shifts between loud and soft sections without a crescendo' },
        { id: 'dq11a2', text: 'Dynamics that sound like stairs' },
        { id: 'dq11a3', text: 'Gradual changes' },
        { id: 'dq11a4', text: 'Playing on a terrace' },
      ],
      correctAnswerId: 'dq11a1',
      explanation: 'A technique from the Baroque era, now often used in chiptune or neo-classic stage scores.'
    },
    {
      id: 'dq12',
      text: 'In sound design, a "Fade In" is a dynamic change that:',
      options: [
        { id: 'dq12a1', text: 'Starts silent and gradually increases in volume' },
        { id: 'dq12a2', text: 'Starts loud and disappears' },
        { id: 'dq12a3', text: 'Changes the pitch' },
        { id: 'dq12a4', text: 'Stops the music' },
      ],
      correctAnswerId: 'dq12a1',
      explanation: 'Fade-ins are often used to introduce an ambient atmosphere as a scene begins.'
    },
    {
      id: 'dq13',
      text: 'Which term describes a dynamic that "swells" (gets louder then softer)?',
      options: [
        { id: 'dq13a1', text: 'Hairpin' },
        { id: 'dq13a2', text: 'Loop' },
        { id: 'dq13a3', text: 'Staccato' },
        { id: 'dq13a4', text: 'Rest' },
      ],
      correctAnswerId: 'dq13a1',
      explanation: 'The symbol ( < > ) looks like a hairpin and represents an expressive surge in volume.'
    },
    {
      id: 'dq14',
      text: 'What does "ppp" (Piano-pianissimo) indicate?',
      options: [
        { id: 'dq14a1', text: 'Exceedingly quiet' },
        { id: 'dq14a2', text: 'Moderately loud' },
        { id: 'dq14a3', text: 'Very fast' },
        { id: 'dq14a4', text: 'Loud and short' },
      ],
      correctAnswerId: 'dq14a1',
      explanation: 'Used for the most delicate "whisper" moments in a score.'
    },
    {
      id: 'dq15',
      text: 'What is "Rinforzando" (rf / rinf)?',
      options: [
        { id: 'dq15a1', text: 'A reinforced accent or sudden surge in volume' },
        { id: 'dq15a2', text: 'Gradually getting slower' },
        { id: 'dq15a3', text: 'A type of string instrument' },
        { id: 'dq15a4', text: 'The end' },
      ],
      correctAnswerId: 'dq15a1',
      explanation: 'It acts like a very strong, emphasized crescendo over a short phrase.'
    },
    {
      id: 'dq16',
      text: 'In musical theatre, why are dynamics crucial for "Belting"?',
      options: [
        { id: 'dq16a1', text: 'To balance with a loud orchestra while maintaining emotional power' },
        { id: 'dq16a2', text: 'To sing quieter' },
        { id: 'dq16a3', text: 'To hide the lyrics' },
        { id: 'dq16a4', text: 'To sound like a flute' },
      ],
      correctAnswerId: 'dq16a1',
      explanation: 'Belting is a high-energy, loud vocal technique that requires precise dynamic control and amplification.'
    },
    {
      id: 'dq17',
      text: 'What happens in "Dynamic Masking"?',
      options: [
        { id: 'dq17a1', text: 'One sound is too loud and makes another sound impossible to hear' },
        { id: 'dq17a2', text: 'Characters wear masks' },
        { id: 'dq17a3', text: 'The screen goes dark' },
        { id: 'dq17a4', text: 'Music is played backwards' },
      ],
      correctAnswerId: 'dq17a1',
      explanation: 'Composers must avoid masking dialogue with loud instrumental frequencies.'
    },
    {
      id: 'dq18',
      text: 'A "Grand Pause" (G.P.) in a score usually results in what dynamic?',
      options: [
        { id: 'dq18a1', text: 'Complete silence for all performers' },
        { id: 'dq18a2', text: 'Loudest possible noise' },
        { id: 'dq18a3', text: 'Very fast tempo' },
        { id: 'dq18a4', text: 'Singing' },
      ],
      correctAnswerId: 'dq18a1',
      explanation: 'The sudden total silence creates a massive dramatic impact or a "cliffhanger" moment.'
    },
    {
      id: 'dq19',
      text: 'What does "Dynamics" primarily control in the audience\'s psychology?',
      options: [
        { id: 'dq19a1', text: 'The level of arousal and physical presence' },
        { id: 'dq19a2', text: 'The key of the music' },
        { id: 'dq19a3', text: 'The color of the lighting' },
        { id: 'dq19a4', text: 'The price of the ticket' },
      ],
      correctAnswerId: 'dq19a1',
      explanation: 'Volume communicates "size" and "energy," directly affecting the listener’s nervous system.'
    },
    {
      id: 'dq20',
      text: 'In an action sequence, what dynamic profile is most common?',
      options: [
        { id: 'dq20a1', text: 'Mf to F with sudden SFZ accents' },
        { id: 'dq20a2', text: 'Pianissimo throughout' },
        { id: 'dq20a3', text: 'Silent' },
        { id: 'dq20a4', text: 'Only Crescendos' },
      ],
      correctAnswerId: 'dq20a1',
      explanation: 'High energy requires louder baseline dynamics with sudden bursts of impact.'
    }
  ]
};

const StageScreen0101DynamicsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-red-600 dark:hover:text-red-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-red-600 dark:hover:text-red-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Dynamics & Expression</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600 mb-4">
          Dynamics & Articulation
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 uppercase tracking-widest font-semibold">
          Area of Study 7 • Music for Stage and Screen
        </p>
      </header>

      {/* Main Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
        <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-red-100 dark:border-red-900/40">
          <h2 className="text-3xl font-bold mb-6 text-red-700 dark:text-red-400">Volume as a Narrative Tool</h2>
          <p className="text-lg leading-relaxed">
            <strong>Dynamics</strong> (volume) and <strong>Articulation</strong> (how notes are played)
            are the most direct ways composers control the "energy" of a scene. A sudden loud noise
            can shock us, while a long, slow increase in volume makes our hearts beat faster in
            anticipation.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">1. Sudden Impact: The "Sting"</h2>
          <p className="mb-4">
            In horror and thrillers, composers use <strong>Sforzando (sfz)</strong> or <strong>Subito Forte</strong>
            to punctuate a visual shock.
          </p>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border-l-4 border-red-600">
            <AbcDisplayComponent
              id="sfz-sting"
              title="Dissonant Sting (sfz)"
              abcNotation={`X:1\nM:4/4\nL:1/8\nK:C\nQ:" Violent"\n!sfz![_B_df]2 z6 |`}
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">2. Building Suspense: The Crescendo</h2>
          <p className="mb-4">
            A <strong>Crescendo</strong> is the ultimate tool for a chase or a rising threat.
            It creates the physical sensation of something getting closer.
          </p>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border-l-4 border-orange-600">
            <AbcDisplayComponent
              id="cresc-suspense"
              title="Building Tension (Crescendo)"
              abcNotation={`X:1\nM:4/4\nL:1/8\nK:C\nQ:" Rising"\n!p!CCCC !mf!CCCC | !f!CCCC !ff!C2 z2 |`}
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">3. Intimacy: Pianissimo</h2>
          <p className="mb-4">
            Very quiet music (<strong>pp</strong>) is used for personal dialogue and tender moments.
            It forces the audience to "lean in" and listen closely.
          </p>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border-l-4 border-rose-400">
            <AbcDisplayComponent
              id="pp-intimacy"
              title="Intimate Solo"
              abcNotation={`X:1\nM:3/4\nL:1/4\nK:C\nQ:" Tender"\n!pp!E2 G | F2 E | D2 C | C3 |`}
            />
          </div>
        </section>

        <section className="bg-red-900 text-white p-8 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-red-200">4. Articulation & Character</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-red-300">Staccato</h4>
              <p className="text-sm opacity-90">Short, detached notes. Used for light, playful characters or "Mickey-Mousing" tip-toeing.</p>
            </div>
            <div>
              <h4 className="font-bold text-red-300">Legato</h4>
              <p className="text-sm opacity-90">Smooth and connected. Used for romantic themes and flowing landscapes.</p>
            </div>
            <div>
              <h4 className="font-bold text-red-300">Marcato</h4>
              <p className="text-sm opacity-90">Heavily accented and forceful. Used for heroic fanfares and military marches.</p>
            </div>
            <div>
              <h4 className="font-bold text-red-300">Tenuto</h4>
              <p className="text-sm opacity-90">Holding notes for their full value, adding a "weighted" or serious feel to a melody.</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-4xl font-black text-center mb-12 uppercase tracking-tighter text-red-800 dark:text-red-200">Test Your Knowledge</h2>
          <QuizComponent quizData={dynamicsQuiz} />
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-800 text-center">
        <Link to="/aos/stage-screen/core-musical-elements/structure-form" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105">
          Next: Structure & Form
          <span>→</span>
        </Link>
      </footer>
    </article>
  );
};

export default StageScreen0101DynamicsPage;
