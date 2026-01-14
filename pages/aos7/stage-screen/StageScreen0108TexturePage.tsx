import React from 'react';
import { Link } from 'react-router-dom';
import AbcDisplayComponent from '../../../components/AbcDisplayComponent';
import QuizComponent from '../../../components/QuizComponent';
import { Quiz } from '../../../types';

const textureQuiz: Quiz = {
  id: 'aos7-texture-quiz',
  title: 'Texture & Layers Quiz',
  questions: [
    {
      id: 'tq1',
      text: 'Which texture describes a single, unaccompanied melodic line?',
      options: [
        { id: 'tq1a1', text: 'Homophonic' },
        { id: 'tq1a2', text: 'Monophonic' },
        { id: 'tq1a3', text: 'Polyphonic' },
        { id: 'tq1a4', text: 'Heterophonic' },
      ],
      correctAnswerId: 'tq1a2',
      explanation: 'Monophonic comes from "mono" (one) and "phone" (sound/voice).'
    },
    {
      id: 'tq2',
      text: 'What type of texture is most common in Hollywood film scores (melody with orchestral backing)?',
      options: [
        { id: 'tq2a1', text: 'Monophonic' },
        { id: 'tq2a2', text: 'Polyphonic' },
        { id: 'tq2a3', text: 'Homophonic' },
        { id: 'tq2a4', text: 'Silence' },
      ],
      correctAnswerId: 'tq2a3',
      explanation: 'Homophonic texture allows the main melody to be heard clearly while providing harmonic support.'
    },
    {
      id: 'tq3',
      text: '"Micropolyphony" is a dense texture often found in horror or sci-fi. Which composer is famous for it?',
      options: [
        { id: 'tq3a1', text: 'John Williams' },
        { id: 'tq3a2', text: 'György Ligeti (e.g., 2001: A Space Odyssey)' },
        { id: 'tq3a3', text: 'Lin-Manuel Miranda' },
        { id: 'tq3a4', text: 'Elvis Presley' },
      ],
      correctAnswerId: 'tq3a2',
      explanation: 'Ligeti used hundreds of tiny, interweaving lines to create a "cloud" of sound.'
    },
    {
      id: 'tq4',
      text: 'How does a composer ensure the dialogue remains audible?',
      options: [
        { id: 'tq4a1', text: 'By making the music as dense as possible' },
        { id: 'tq4a2', text: 'By using thin, sparse textures that don\'t occupy many frequencies' },
        { id: 'tq4a3', text: 'By playing as loud as possible' },
        { id: 'tq4a4', text: 'By using only tubas' },
      ],
      correctAnswerId: 'tq4a2',
      explanation: 'Sparse textures leave "sonic space" for the actors\' voices.'
    },
    {
      id: 'tq5',
      text: 'What is "Octave Doubling"?',
      options: [
        { id: 'tq5a1', text: 'Playing the same melody in two or more octaves simultaneously' },
        { id: 'tq5a2', text: 'Deleting half the notes' },
        { id: 'tq5a3', text: 'Playing twice as fast' },
        { id: 'tq5a4', text: 'A type of vocal effect' },
      ],
      correctAnswerId: 'tq5a1',
      explanation: 'Octave doubling adds weight and power to a melody without making the harmony more complex.'
    },
    {
      id: 'tq6',
      text: 'What is "Antiphony"?',
      options: [
        { id: 'tq6a1', text: 'A type of single-note rhythm' },
        { id: 'tq6a2', text: 'Call and response between different groups of instruments' },
        { id: 'tq6a3', text: 'Playing with no instruments' },
        { id: 'tq6a4', text: 'A type of low-pitched singer' },
      ],
      correctAnswerId: 'tq6a2',
      explanation: 'Antiphonal textures create a sense of dialogue and space, common in epic orchestral battle scenes.'
    },
    {
      id: 'tq7',
      text: 'What is a "Countermelody"?',
      options: [
        { id: 'tq7a1', text: 'A secondary melody played against the main theme' },
        { id: 'tq7a2', text: 'A computer-generated theme' },
        { id: 'tq7a3', text: 'The end music' },
        { id: 'tq7a4', text: 'A louder version of the melody' },
      ],
      correctAnswerId: 'tq7a1',
      explanation: 'Countermelodies add interest and emotion, often heard in romantic duets in musicals.'
    },
    {
      id: 'tq8',
      text: 'Which term describes a texture where everyone plays the same rhythm and notes?',
      options: [
        { id: 'tq8a1', text: 'Unison' },
        { id: 'tq8a2', text: 'Polyphony' },
        { id: 'tq8a3', text: 'Dissonance' },
        { id: 'tq8a4', text: 'Syncopation' },
      ],
      correctAnswerId: 'tq8a1',
      explanation: 'Unison is a powerful way to make an orchestral statement feel focused and massive.'
    },
    {
      id: 'tq9',
      text: 'What is "Imitation"?',
      options: [
        { id: 'tq9a1', text: 'When one instrument copies a melody shortly after another' },
        { id: 'tq9a2', text: 'When an actor mimes singing' },
        { id: 'tq9a3', text: 'When the music stops' },
        { id: 'tq9a4', text: 'Playing the wrong notes on purpose' },
      ],
      correctAnswerId: 'tq9a1',
      explanation: 'Imitative textures (like a fugue or canon) create a sense of complex, interweaving movement.'
    },
    {
      id: 'tq10',
      text: 'What does "Tutti" mean?',
      options: [
        { id: 'tq10a1', text: 'Only the soloist plays' },
        { id: 'tq10a2', text: 'The whole ensemble/orchestra plays together' },
        { id: 'tq10a3', text: 'The music is very fast' },
        { id: 'tq10a4', text: 'A type of dessert' },
      ],
      correctAnswerId: 'tq10a2',
      explanation: 'Tutti sections provide the "big," full sound required for climactic movie moments.'
    },
    {
      id: 'tq11',
      text: 'In "Vertical Layering" (Video Games), what is being added?',
      options: [
        { id: 'tq11a1', text: 'New melodies' },
        { id: 'tq11a2', text: 'New instrumental tracks (layers) to increase the density' },
        { id: 'tq11a3', text: 'New game characters' },
        { id: 'tq11a4', text: 'New colors' },
      ],
      correctAnswerId: 'tq11a2',
      explanation: 'Layering allows the music to grow in texture (e.g., adding drums) based on player action.'
    },
    {
      id: 'tq12',
      text: 'What is "Heterophony"?',
      options: [
        { id: 'tq12a1', text: 'One single voice' },
        { id: 'tq12a2', text: 'Multiple versions of the same melody played simultaneously with slight variations' },
        { id: 'tq12a3', text: 'Different songs playing at once' },
        { id: 'tq12a4', text: 'A type of rhythm' },
      ],
      correctAnswerId: 'tq12a2',
      explanation: 'Common in some world music traditions, heterophony creates a "richer" version of a single melody.'
    },
    {
      id: 'tq13',
      text: 'Which texture is most likely used for a "Sneaking" or "Stealth" scene?',
      options: [
        { id: 'tq13a1', text: 'Dense, loud Tutti' },
        { id: 'tq13a2', text: 'Thin, sparse, often solo-based with lots of silence' },
        { id: 'tq13a3', text: 'Polyphonic choir' },
        { id: 'tq13a4', text: 'Heavy metal band' },
      ],
      correctAnswerId: 'tq13a2',
      explanation: 'Sparse textures heighten the audience\'s senses and emphasize every small sound (like a rustle).'
    },
    {
      id: 'tq14',
      text: 'What "Texture" is fundamentally used in monologues or intimate character reveals?',
      options: [
        { id: 'tq14a1', text: 'Monophony or very light Homophony' },
        { id: 'tq14a2', text: 'Heavy brass fanfares' },
        { id: 'tq14a3', text: 'Wall of sound' },
        { id: 'tq14a4', text: 'Drum solos' },
      ],
      correctAnswerId: 'tq14a1',
      explanation: 'Simplicity in texture allows the emotional weight of the character\'s words or expression to take center stage.'
    },
    {
      id: 'tq15',
      text: 'What is a "Drone"?',
      options: [
        { id: 'tq15a1', text: 'A flying camera' },
        { id: 'tq15a2', text: 'A continuous, unchanging low note (type of pedal)' },
        { id: 'tq15a3', text: 'A high-pitched noise' },
        { id: 'tq15a4', text: 'A fast melody' },
      ],
      correctAnswerId: 'tq15a2',
      explanation: 'Drones provide a solid, atmospheric foundation, often used in ethnic or ancient-themed scores (e.g., *Braveheart*).'
    },
    {
      id: 'tq16',
      text: 'What does "Transparency" mean in a mix?',
      options: [
        { id: 'tq16a1', text: 'You can see through the score' },
        { id: 'tq16a2', text: 'The texture is balanced so all parts (melody, harmony, dialogue) are clear' },
        { id: 'tq16a3', text: 'The music has no instruments' },
        { id: 'tq16a4', text: 'The speakers are clear' },
      ],
      correctAnswerId: 'tq16a2',
      explanation: 'A transparent texture ensures the audience isn\'t overwhelmed by a "mush" of sound.'
    },
    {
      id: 'tq17',
      text: 'Which term describes a melody with a "Block Chord" accompaniment?',
      options: [
        { id: 'tq17a1', text: 'Homophonic (Chordal)' },
        { id: 'tq17a2', text: 'Polyphonic' },
        { id: 'tq17a3', text: 'Monophonic' },
        { id: 'tq17a4', text: 'Octatonic' },
      ],
      correctAnswerId: 'tq17a1',
      explanation: 'Block chords move at the same time as the melody, providing a solid, hymn-like or stable feel.'
    },
    {
      id: 'tq18',
      text: 'What is "Textural Contrast"?',
      options: [
        { id: 'tq18a1', text: 'Mixing different colors on screen' },
        { id: 'tq18a2', text: 'Moving suddenly from a thin texture to a thick texture (or vice-versa)' },
        { id: 'tq18a3', text: 'The difference between loud and soft' },
        { id: 'tq18a4', text: 'Using two different computers' },
      ],
      correctAnswerId: 'tq18a2',
      explanation: 'Sudden shifts in texture are used to signal major events or changes in the narrative.'
    },
    {
      id: 'tq19',
      text: 'Can "Silence" be considered a part of texture?',
      options: [
        { id: 'tq19a1', text: 'No, silence is nothing' },
        { id: 'tq19a2', text: 'Yes, it is the "zero" layer that emphasizes surrounding sound' },
        { id: 'tq19a3', text: 'Only if it is loud' },
        { id: 'tq19a4', text: 'Only in the credits' },
      ],
      correctAnswerId: 'tq19a2',
      explanation: 'Silence is a powerful "textural" tool used for shock, awe, or tension.'
    },
    {
      id: 'tq20',
      text: 'An "Arpeggio" texture involves:',
      options: [
        { id: 'tq20a1', text: 'A single low note' },
        { id: 'tq20a2', text: 'Broken chords (notes played one after another)' },
        { id: 'tq20a3', text: 'Hitting the piano' },
        { id: 'tq20a4', text: 'Screaming' },
      ],
      correctAnswerId: 'tq20a2',
      explanation: 'Arpeggios create a "rippling" or flowing texture, common in ballet and emotional underscores.'
    }
  ]
};

const StageScreen0108TexturePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-amber-600 dark:hover:text-amber-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-amber-600 dark:hover:text-amber-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Musical Texture</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-4">
          Musical Texture
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 uppercase tracking-widest font-semibold">
          Area of Study 7 • Music for Stage and Screen
        </p>
      </header>

      {/* Main Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
        <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-amber-100 dark:border-amber-900/40">
          <h2 className="text-3xl font-bold mb-6 text-amber-700 dark:text-amber-400">Layers of the Soundtrack</h2>
          <p className="text-lg leading-relaxed">
            <strong>Texture</strong> describes how different layers of sound are combined. It’s like the "fabric"
            of the music. In film and stage, texture is the key to managing <strong>transparency</strong> (making
            sure dialogue is heard) and <strong>intensity</strong> (making battle scenes feel overwhelming).
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">1. The Three Primary Textures</h2>

          <div className="space-y-8">
            {/* Monophonic */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border-l-4 border-amber-500">
              <h3 className="text-xl font-bold mb-2">Monophonic (Thin/Lonely)</h3>
              <p className="text-sm mb-4">
                A single line of music. Used for moments of extreme isolation, vulnerability, or a haunting
                solo call.
              </p>
              <AbcDisplayComponent
                id="mono-texture"
                title="Monophonic Solo Flute"
                abcNotation={`X:1\nM:4/4\nL:1/8\nK:C\nQ:" Lonely"\nE G B d | e4 | d B G E | C4 |`}
              />
            </div>

            {/* Homophonic */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border-l-4 border-orange-500">
              <h3 className="text-xl font-bold mb-2">Homophonic (Clear/Cinematic)</h3>
              <p className="text-sm mb-4">
                A clear melody supported by chords. This is the "standard" orchestral soundtrack texture,
                allowing the hero's theme to shine over the accompaniment.
              </p>
              <AbcDisplayComponent
                id="homo-texture"
                title="Homophonic Hero Theme"
                abcNotation="X:1\nM:4/4\nL:1/4\nK:C\nV:1\nC G E2 | F/2E/2 D C2 |[V:2] [CEG]4 | [DFA]2 [CEG]2 |"
              />
            </div>

            {/* Polyphonic */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold mb-2">Polyphonic (Complex/Chase)</h3>
              <p className="text-sm mb-4">
                Two or more independent melodies playing at once. Used for complex chases or when
                different characters' themes (leitmotifs) clash together.
              </p>
              <AbcDisplayComponent
                id="poly-texture"
                title="Polyphonic Counterpoint"
                abcNotation="X:1\nM:4/4\nL:1/8\nK:C\nV:1\nC2 E2 G2 c2 | B2 G2 E2 C2 |\nV:2\nG2 B2 d2 g2 | f2 d2 B2 G2 |"
              />
            </div>
          </div>
        </section>

        <section className="bg-amber-900 text-white p-8 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-amber-200">2. Textural Devices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-amber-300">Octave Doubling</h4>
              <p className="text-sm opacity-90">Playing the same melody in multiple registers to add power without changing the harmony.</p>
            </div>
            <div>
              <h4 className="font-bold text-amber-300">Antiphony</h4>
              <p className="text-sm opacity-90">"Call and response" between different sections of the orchestra (e.g., Brass calls, Woodwinds answer).</p>
            </div>
            <div>
              <h4 className="font-bold text-amber-300">Transparency</h4>
              <p className="text-sm opacity-90">Thinning the texture (reducing layers) so that the actors' dialogue can be clearly heard by the audience.</p>
            </div>
            <div>
              <h4 className="font-bold text-amber-300">Sonic Clutter</h4>
              <p className="text-sm opacity-90">Using dense, dissonant clusters to create a sense of chaos or psychological distress (Horror).</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-4xl font-black text-center mb-12 uppercase tracking-tighter text-amber-800 dark:text-amber-200">Test Your Knowledge</h2>
          <QuizComponent quizData={textureQuiz} />
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-800 text-center">
        <Link to="/aos/stage-screen/core-musical-elements/dynamics" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105">
          Next: Dynamics & Expression
          <span>→</span>
        </Link>
      </footer>
    </article>
  );
};

export default StageScreen0108TexturePage;
