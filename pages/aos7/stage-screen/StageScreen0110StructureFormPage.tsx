import React from 'react';
import { Link } from 'react-router-dom';
import AbcDisplayComponent from '../../../components/AbcDisplayComponent';
import QuizComponent from '../../../components/QuizComponent';
import { Quiz } from '../../../types';

const structureQuiz: Quiz = {
  id: 'aos7-structure-quiz',
  title: 'Structure & Form Quiz',
  questions: [
    {
      id: 'sq1',
      text: 'What does "Through-composed" mean in a film score?',
      options: [
        { id: 'sq1a1', text: 'The music repeats the same section over and over' },
        { id: 'sq1a2', text: 'The music is continuous and changes to follow the visual action without large repeats' },
        { id: 'sq1a3', text: 'The music is only played at the end' },
        { id: 'sq1a4', text: 'The music is written by a computer' },
      ],
      correctAnswerId: 'sq1a2',
      explanation: 'Through-composed music is essential for film because it must adapt precisely to "hits" and scene changes on screen.'
    },
    {
      id: 'sq2',
      text: 'Which form is most typical for a stand-alone "Show Tune" in Musical Theatre?',
      options: [
        { id: 'sq2a1', text: 'Fugue' },
        { id: 'sq2a2', text: 'Verse-Chorus (Strophic)' },
        { id: 'sq2a3', text: 'Sonata Form' },
        { id: 'sq2a4', text: '12-Bar Blues' },
      ],
      correctAnswerId: 'sq2a2',
      explanation: 'Verse-Chorus form provides a familiar structure that allows the audience to follow the story and remember the hook.'
    },
    {
      id: 'sq3',
      text: 'In Ballet, a "Divertissement" is often in which simple form?',
      options: [
        { id: 'sq3a1', text: 'Binary (A-B) or Ternary (A-B-A)' },
        { id: 'sq3a2', text: 'Total Randomness' },
        { id: 'sq3a3', text: 'Heavy Metal' },
        { id: 'sq3a4', text: 'Opera' },
      ],
      correctAnswerId: 'sq3a1',
      explanation: 'Symmetrical forms like Binary and Ternary provide the balanced structure needed for classical choreography.'
    },
    {
      id: 'sq4',
      text: 'What is a "Leitmotif System" in terms of structure?',
      options: [
        { id: 'sq4a1', text: 'A random collection of sounds' },
        { id: 'sq4a2', text: 'A network of recurring themes that provide unity across a long film or opera' },
        { id: 'sq4a3', text: 'A type of microphone' },
        { id: 'sq4a4', text: 'A way of tuning a piano' },
      ],
      correctAnswerId: 'sq4a2',
      explanation: 'By repeating and varying themes for specific characters, the composer gives the long-form work a "cyclic" structure.'
    },
    {
      id: 'sq5',
      text: 'In Video Games, "Modular" structure allows for what?',
      options: [
        { id: 'sq5a1', text: 'The music to never end' },
        { id: 'sq5a2', text: 'The music to change layers or sections seamlessly based on player actions' },
        { id: 'sq5a3', text: 'The player to write the music' },
        { id: 'sq5a4', text: 'Better graphics' },
      ],
      correctAnswerId: 'sq5a2',
      explanation: 'Modular design (Adaptive Audio) ensures the music feels reactive to the player\'s choices.'
    },
    {
      id: 'sq6',
      text: 'What is "Ternary Form"?',
      options: [
        { id: 'sq6a1', text: 'A-B-A (Statement, Contrast, Return)' },
        { id: 'sq6a2', text: 'A-B (Statement, Contrast)' },
        { id: 'sq6a3', text: 'Repeating the same section 10 times' },
        { id: 'sq6a4', text: 'Music with three instruments' },
      ],
      correctAnswerId: 'sq6a1',
      explanation: 'Ternary form is very common in character pieces within a ballet or musical.'
    },
    {
      id: 'sq7',
      text: 'Which form features a recurring "Main Theme" alternating with contrasting sections?',
      options: [
        { id: 'sq7a1', text: 'Binary' },
        { id: 'sq7a2', text: 'Rondo (ABACA)' },
        { id: 'sq7a3', text: 'Through-composed' },
        { id: 'sq7a4', text: 'Silence' },
      ],
      correctAnswerId: 'sq7a2',
      explanation: 'The return of the "A" section in Rondo form provides a sense of familiarity and homecoming.'
    },
    {
      id: 'sq8',
      text: 'What is a "Reprise" in Musical Theatre?',
      options: [
        { id: 'sq8a1', text: 'When a character sings a new song' },
        { id: 'sq8a2', text: 'The repetition of an earlier song, often with new lyrics or emotional context' },
        { id: 'sq8a3', text: 'The end credits' },
        { id: 'sq8a4', text: 'A dance break' },
      ],
      correctAnswerId: 'sq8a2',
      explanation: 'Reprises allow composers to show how a character has changed since the song was first heard.'
    },
    {
      id: 'sq9',
      text: 'Which structure is most common for a Pop-influenced Musical Theatre song?',
      options: [
        { id: 'sq9a1', text: 'Verse-Chorus-Bridge (Strophic)' },
        { id: 'sq9a2', text: 'Fugue' },
        { id: 'sq9a3', text: 'Sonata Allegro' },
        { id: 'sq9a4', text: 'Free Jazz' },
      ],
      correctAnswerId: 'sq9a1',
      explanation: 'This "Strophic" structure focuses on a memorable chorus that anchor the listener.'
    },
    {
      id: 'sq10',
      text: 'What does "AABA" refer to in songwriting structure?',
      options: [
        { id: 'sq10a1', text: 'Four identical sections' },
        { id: 'sq10a2', text: '32-Bar Song Form (Theme, Theme, Bridge, Theme)' },
        { id: 'sq10a3', text: 'A type of fruit' },
        { id: 'sq10a4', text: 'Always All Big Accents' },
      ],
      correctAnswerId: 'sq10a2',
      explanation: 'AABA was the standard form for Golden Age musicals (like Rodgers & Hammerstein).'
    },
    {
      id: 'sq11',
      text: 'What is an "Overture"?',
      options: [
        { id: 'sq11a1', text: 'The music played before the show begins to introduce the main themes' },
        { id: 'sq11a2', text: 'The music played at the end' },
        { id: 'sq11a3', text: 'The intermission music' },
        { id: 'sq11a4', text: 'When the conductor bows' },
      ],
      correctAnswerId: 'sq11a1',
      explanation: 'Overtures "set the scene" and prepare the audience for the musical journey ahead.'
    },
    {
      id: 'sq12',
      text: 'In Musical Theatre, what is the purpose of a "Bridge" (or Middle 8)?',
      options: [
        { id: 'sq12a1', text: 'To provide a contrasting section before returning to the final chorus' },
        { id: 'sq12a2', text: 'To walk across the stage' },
        { id: 'sq12a3', text: 'To end the song' },
        { id: 'sq12a4', text: 'To be played by the drums' },
      ],
      correctAnswerId: 'sq12a1',
      explanation: 'Bridges often provide a new perspective or a "turning point" in the character\'s thoughts.'
    },
    {
      id: 'sq13',
      text: 'What is a "Coda"?',
      options: [
        { id: 'sq13a1', text: 'An introductory section' },
        { id: 'sq13a2', text: 'A concluding passage that brings the piece to a satisfying end' },
        { id: 'sq13a3', text: 'A type of code' },
        { id: 'sq13a4', text: 'The middle of the song' },
      ],
      correctAnswerId: 'sq13a2',
      explanation: 'Codas can be short flourishes or long orchestral climaxes at the very end of a theme.'
    },
    {
      id: 'sq14',
      text: 'What is "Theme and Variations"?',
      options: [
        { id: 'sq14a1', text: 'Playing the same thing exactly the same way 10 times' },
        { id: 'sq14a2', text: 'Presenting a main theme and then changing it in different ways (rhythm, harmony, etc.)' },
        { id: 'sq14a3', text: 'Having no theme' },
        { id: 'sq14a4', text: 'Buying different versions of the film' },
      ],
      correctAnswerId: 'sq14a2',
      explanation: 'Theme and Variations is a core structural tool for exploring different moods from a single melody.'
    },
    {
      id: 'sq15',
      text: 'In an Opera or Musical, what is the role of the "Entr\'acte"?',
      options: [
        { id: 'sq15a1', text: 'Music played at the very beginning' },
        { id: 'sq15a2', text: 'Music played between the acts (usually after the intermission)' },
        { id: 'sq15a3', text: 'When the actors go home' },
        { id: 'sq15a4', text: 'A sword fight' },
      ],
      correctAnswerId: 'sq15a2',
      explanation: 'The Entr\'acte refocuses the audience\'s attention as they return to their seats.'
    },
    {
      id: 'sq16',
      text: 'What is "Propulsive Structure" in a chase scene?',
      options: [
        { id: 'sq16a1', text: 'Music that gets slower' },
        { id: 'sq16a2', text: 'Music that builds intensity through layering and accelerating developments' },
        { id: 'sq16a3', text: 'Silence' },
        { id: 'sq16a4', text: 'A lullaby' },
      ],
      correctAnswerId: 'sq16a2',
      explanation: 'Propulsive structures push the listener forward, matching the high-speed visuals.'
    },
    {
      id: 'sq17',
      text: 'A "Vocal Aria" in a musical is usually:',
      options: [
        { id: 'sq17a1', text: 'A conversation between two people' },
        { id: 'sq17a2', text: 'A solo song focused on a character\'s internal emotions' },
        { id: 'sq17a3', text: 'The end credits' },
        { id: 'sq17a4', text: 'The orchestra tuning up' },
      ],
      correctAnswerId: 'sq17a2',
      explanation: 'Arias (or "11 o\'clock numbers") are the structural highlights of the score.'
    },
    {
      id: 'sq18',
      text: 'What is "Ground Bass" (Chaconne/Passacaglia) as a structural tool?',
      options: [
        { id: 'sq18a1', text: 'A repeating bass line upon which variations are built' },
        { id: 'sq18a2', text: 'Playing on the floor' },
        { id: 'sq18a3', text: 'No bass allowed' },
        { id: 'sq18a4', text: 'A loud bass drum' },
      ],
      correctAnswerId: 'sq18a1',
      explanation: 'Ground Bass provides an inescapable, inevitable structural feel, often used in tragic scenes.'
    },
    {
      id: 'sq19',
      text: 'Which term describes a "Transition" in a film score?',
      options: [
        { id: 'sq19a1', text: 'Music that helps bridge the gap between two different scenes or locations' },
        { id: 'sq19a2', text: 'Ending the movie' },
        { id: 'sq19a3', text: 'Starting the movie' },
        { id: 'sq19a4', text: 'Deleting a file' },
      ],
      correctAnswerId: 'sq19a1',
      explanation: 'Transitions smooth over the "jolt" of a camera cut or scene change.'
    },
    {
      id: 'sq20',
      text: 'What is "Cyclic Form"?',
      options: [
        { id: 'sq20a1', text: 'Music that is played on a bicycle' },
        { id: 'sq20a2', text: 'Bringing back themes from the beginning at the very end of the work' },
        { id: 'sq20a3', text: 'Never-ending music' },
        { id: 'sq20a4', text: 'A circular score' },
      ],
      correctAnswerId: 'sq20a2',
      explanation: 'Cyclic returns create a powerful sense of "coming full circle" for the audience.'
    }
  ]
};

const StageScreen0110StructureFormPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-emerald-600 dark:hover:text-emerald-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-emerald-600 dark:hover:text-emerald-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Structure & Form</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-4">
          Structure & Narrative Form
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 uppercase tracking-widest font-semibold">
          Area of Study 7 • Music for Stage and Screen
        </p>
      </header>

      {/* Main Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
        <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-emerald-100 dark:border-emerald-900/40">
          <h2 className="text-3xl font-bold mb-6 text-emerald-700 dark:text-emerald-400">Organizing the Story</h2>
          <p className="text-lg leading-relaxed">
            <strong>Structure</strong> (or Form) is the "blueprint" of a piece of music. While some
            stage music uses traditional forms (like Verse-Chorus in Musicals), film and games
            often use <strong>through-composed</strong> structures to match the unpredictable
            timing of the visuals.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">1. Sectional Forms (Ballet & Theatre)</h2>
          <p className="mb-4">
            Classical Ballet and Musical Theatre often use predictable, repeating forms to aid
            choreography and lyrical clarity.
          </p>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border-l-4 border-emerald-500 mb-8">
            <h3 className="text-xl font-bold mb-2">Binary Form (A-B)</h3>
            <p className="text-sm mb-4">
              Two distinct sections. Common in short character dances or "National Dances" within a ballet.
            </p>
            <AbcDisplayComponent
              id="binary-form"
              title="Simple Binary Dance (A-B)"
              abcNotation={`X:1\nM:2/4\nL:1/8\nK:C\nQ:" A-Section"\nc G c G | e2 d2 | c G c G | c4 ||\nQ:"B-Section"\nd G d G | f2 e2 | d G d G | d4 |`}
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">2. Through-Composed (Film & Screen)</h2>
          <p className="mb-4">
            In film, the music must follow "hit points" (exact timings of visual events). This
            results in music that doesn't repeat large sections but constantly evolves.
          </p>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border-l-4 border-teal-500">
            <h3 className="text-xl font-bold mb-2">The Evolving Score</h3>
            <p className="text-sm mb-4">
              Notice how the music changes style and mood every few bars to match hypothetical
              scene changes.
            </p>
            <AbcDisplayComponent
              id="through-composed"
              title="Through-Composed Mockup"
              abcNotation={`X:1\nM:4/4\nL:1/4\nK:C\nQ:" Mysterioso"\n_e _B _A2 |[M:3/4] Q:"Action!" _D/2_E/2 _F2 |[M:4/4] Q:"Heroic Finish" c G E C | C4 |`}
            />
          </div>
        </section>

        <section className="bg-emerald-900 text-white p-8 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-emerald-200">3. Cyclic Unity: The Leitmotif</h2>
          <p className="mb-4">
            A <strong>Cyclic</strong> structure is created when a composer brings back the same
            themes over several hours. This provides a sense of "closure" and "unity" to the
            overall experience.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-emerald-100">
            <li><strong>Thematic Transformation:</strong> Changing a heroic theme into a sad one to show a character's defeat.</li>
            <li><strong>Recitatives:</strong> In Musicals, the "spoken-sung" sections that move the plot between songs.</li>
            <li><strong>Underscore:</strong> Continuous background music that ties multiple short scenes together structurally.</li>
          </ul>
        </section>

        <section className="py-12">
          <h2 className="text-4xl font-black text-center mb-12 uppercase tracking-tighter text-emerald-800 dark:text-emerald-200">Test Your Knowledge</h2>
          <QuizComponent quizData={structureQuiz} />
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-800 text-center">
        <Link to="/aos/stage-screen/cultural-historical/key-composers" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105">
          Next: Key Composers & Artists
          <span>→</span>
        </Link>
      </footer>
    </article>
  );
};

export default StageScreen0110StructureFormPage;
