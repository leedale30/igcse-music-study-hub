import React from 'react';
import { Link } from 'react-router-dom';
import AbcDisplayComponent from '../../../components/AbcDisplayComponent';
import QuizComponent from '../../../components/QuizComponent';
import { Quiz } from '../../../types';

const melodyQuiz: Quiz = {
  id: 'aos7-melody-quiz',
  title: 'Melody in Stage and Screen Quiz',
  questions: [
    {
      id: 'mq1',
      text: 'What is a "Leitmotif"?',
      options: [
        { id: 'mq1a1', text: 'A long orchestral work' },
        { id: 'mq1a2', text: 'A recurring musical theme associated with a character or idea' },
        { id: 'mq1a3', text: 'A type of harmony' },
        { id: 'mq1a4', text: 'The end credits music' },
      ],
      correctAnswerId: 'mq1a2',
      explanation: 'Leitmotifs are used to identify characters (like Darth Vader) or concepts (like the Force) throughout a film.'
    },
    {
      id: 'mq2',
      text: 'How does the "Jaws" theme create tension using melody?',
      options: [
        { id: 'mq2a1', text: 'Using a wide-ranging, fast melody' },
        { id: 'mq2a2', text: 'Using only two notes (E and F) in a rhythmic pattern that accelerates' },
        { id: 'mq2a3', text: 'Using happy major chords' },
        { id: 'mq2a4', text: 'Using a vocal choir' },
      ],
      correctAnswerId: 'mq2a2',
      explanation: 'John Williams used just two semitones to represent the nearing danger of the shark.'
    },
    {
      id: 'mq3',
      text: 'Which composer is most famous for reviving the Romantic style of Leitmotif in modern film?',
      options: [
        { id: 'mq3a1', text: 'Hans Zimmer' },
        { id: 'mq3a2', text: 'John Williams' },
        { id: 'mq3a3', text: 'Ennio Morricone' },
        { id: 'mq3a4', text: 'Danny Elfman' },
      ],
      correctAnswerId: 'mq3a2',
      explanation: 'John Williams\' scores for Star Wars, Superman, and Indiana Jones are prime examples of the Leitmotif technique.'
    },
    {
      id: 'mq4',
      text: 'What is "Mickey-Mousing"?',
      options: [
        { id: 'mq4a1', text: 'Music that is only in major keys' },
        { id: 'mq4a2', text: 'Music that mimics every physical action on screen' },
        { id: 'mq4a3', text: 'Music with lyrics about mice' },
        { id: 'mq4a4', text: 'Loud brass music' },
      ],
      correctAnswerId: 'mq4a2',
      explanation: 'This technique, common in cartoons, uses melodic gestures to mimic movements like falling or tiptoeing.'
    },
    {
      id: 'mq5',
      text: 'A "Fanfare" melody is usually associated with:',
      options: [
        { id: 'mq5a1', text: 'Romance and sadness' },
        { id: 'mq5a2', text: 'Heroism, royalty, and grand arrivals' },
        { id: 'mq5a3', text: 'Horror and suspense' },
        { id: 'mq5a4', text: 'Silence' },
      ],
      correctAnswerId: 'mq5a2',
      explanation: 'Fanfares typically use brass instruments and triadic melodies to signal importance or heroism.'
    },
    {
      id: 'mq6',
      text: 'What does "Conjunct" movement mean in a melody?',
      options: [
        { id: 'mq6a1', text: 'Moving in large leaps' },
        { id: 'mq6a2', text: 'Moving by step (scalic movement)' },
        { id: 'mq6a3', text: 'Staying on the same note' },
        { id: 'mq6a4', text: 'The melody played backwards' },
      ],
      correctAnswerId: 'mq6a2',
      explanation: 'Conjunct melodies sound smooth and singable, often used for romantic or peaceful themes.'
    },
    {
      id: 'mq7',
      text: 'What is a musical "Sequence"?',
      options: [
        { id: 'mq7a1', text: 'A series of different songs' },
        { id: 'mq7a2', text: 'The repetition of a melodic pattern at a higher or lower pitch' },
        { id: 'mq7a3', text: 'Playing the melody twice as fast' },
        { id: 'mq7a4', text: 'A type of orchestral chord' },
      ],
      correctAnswerId: 'mq7a2',
      explanation: 'Sequences help build momentum and logic in a theme, common in both John Williams and Tchaikovsky.'
    },
    {
      id: 'mq8',
      text: 'When a melody is "Inverted," what happens?',
      options: [
        { id: 'mq8a1', text: 'It is played by different instruments' },
        { id: 'mq8a2', text: 'The intervals are turned upside down (rising becomes falling)' },
        { id: 'mq8a3', text: 'It is played at the end of the film' },
        { id: 'mq8a4', text: 'It is played in a minor key' },
      ],
      correctAnswerId: 'mq8a2',
      explanation: 'Inversion is a clever way to vary a leitmotif while keeping it recognizable.'
    },
    {
      id: 'mq9',
      text: 'Which scale is often used to represent dreams, underwater scenes, or magical mystery?',
      options: [
        { id: 'mq9a1', text: 'Major scale' },
        { id: 'mq9a2', text: 'Whole-tone scale' },
        { id: 'mq9a3', text: 'Chromatic scale' },
        { id: 'mq9a4', text: 'Pentatonic scale' },
      ],
      correctAnswerId: 'mq9a2',
      explanation: 'The absence of leading notes in a whole-tone scale creates a "floating," unresolved feeling.'
    },
    {
      id: 'mq10',
      text: 'What does "Thematic Transformation" involve?',
      options: [
        { id: 'mq10a1', text: 'Changing a theme\'s character (e.g., from happy to sad) while keeping the core melody' },
        { id: 'mq10a2', text: 'Deleting the theme' },
        { id: 'mq10a3', text: 'Hiring a different composer' },
        { id: 'mq10a4', text: 'Adding lyrics to a melody' },
      ],
      correctAnswerId: 'mq10a1',
      explanation: 'Composers might change the rhythm or harmony of a leitmotif to show a character\'s internal change.'
    },
    {
      id: 'mq11',
      text: 'A "Pentatonic" melody uses how many notes?',
      options: [
        { id: 'mq11a1', text: 'Seven' },
        { id: 'mq11a2', text: 'Five' },
        { id: 'mq11a3', text: 'Twelve' },
        { id: 'mq11a4', text: 'Three' },
      ],
      correctAnswerId: 'mq11a2',
      explanation: 'Pentatonic scales are common in folk music and often used to suggest specific geographic settings.'
    },
    {
      id: 'mq12',
      text: 'What is a "Blue Note" in the context of film noir or jazz-influenced scores?',
      options: [
        { id: 'mq12a1', text: 'A note played by the trumpets' },
        { id: 'mq12a2', text: 'A flattened 3rd, 5th, or 7th that creates a "bluesy" feel' },
        { id: 'mq12a3', text: 'The highest note in the melody' },
        { id: 'mq12a4', text: 'A note colored blue on the sheet music' },
      ],
      correctAnswerId: 'mq12a2',
      explanation: 'Blue notes add a sense of grit, melancholy, or urban sophistication.'
    },
    {
      id: 'mq13',
      text: 'What is "Retrograde" in melodic development?',
      options: [
        { id: 'mq13a1', text: 'Playing the melody faster' },
        { id: 'mq13a2', text: 'Playing the melody backwards' },
        { id: 'mq13a3', text: 'Playing the melody in the bass register' },
        { id: 'mq13a4', text: 'Repeating the melody 10 times' },
      ],
      correctAnswerId: 'mq13a2',
      explanation: 'While rare in popular film, retrograde is a core "intellectual" development technique.'
    },
    {
      id: 'mq14',
      text: 'Which term describes a small, ornamental note played just before the main note?',
      options: [
        { id: 'mq14a1', text: 'Sequence' },
        { id: 'mq14a2', text: 'Appoggiatura or Acciaccatura' },
        { id: 'mq14a3', text: 'Chord' },
        { id: 'mq14a4', text: 'Rhythm' },
      ],
      correctAnswerId: 'mq14a2',
      explanation: 'Ornaments like these add grace and detail, often seen in ballet scores.'
    },
    {
      id: 'mq15',
      text: 'What does a "Wide Melodic Range" often convey in a film theme?',
      options: [
        { id: 'mq15a1', text: 'Small, claustrophobic spaces' },
        { id: 'mq15a2', text: 'Epic scale, high emotion, or vast landscapes' },
        { id: 'mq15a3', text: 'Total silence' },
        { id: 'mq15a4', text: 'A character who is bored' },
      ],
      correctAnswerId: 'mq15a2',
      explanation: 'Themes like the "Superman" or "Star Wars" themes use wide intervals to feel legendary.'
    },
    {
      id: 'mq16',
      text: 'What is a "Passing Note"?',
      options: [
        { id: 'mq16a1', text: 'A note that doesn\'t belong in the scale' },
        { id: 'mq16a2', text: 'A bridging note that links two chord notes stepwise' },
        { id: 'mq16a3', text: 'The last note of the film' },
        { id: 'mq16a4', text: 'A note played very loudly' },
      ],
      correctAnswerId: 'mq16a2',
      explanation: 'Passing notes help melodies flow smoothly from one harmony to the next.'
    },
    {
      id: 'mq17',
      text: 'In "Mickey-Mousing," what would a rapidly rising glissando represent?',
      options: [
        { id: 'mq17a1', text: 'Someone falling down' },
        { id: 'mq17a2', text: 'Something zooming up high or a sudden surprise' },
        { id: 'mq17a3', text: 'Sleep' },
        { id: 'mq17a4', text: 'A funeral' },
      ],
      correctAnswerId: 'mq17a2',
      explanation: 'The upward "swoosh" effect is a classic literal sound-to-visual link.'
    },
    {
      id: 'mq18',
      text: 'What is a "Motif" compared to a "Theme"?',
      options: [
        { id: 'mq18a1', text: 'A motif is a short fragment (2-4 notes), while a theme is a complete musical sentence' },
        { id: 'mq18a2', text: 'They are exactly the same thing' },
        { id: 'mq18a3', text: 'A motif has no rhythm' },
        { id: 'mq18a4', text: 'A theme is always louder' },
      ],
      correctAnswerId: 'mq18a1',
      explanation: 'Motifs (like the Jaws theme) are the "building blocks" that can grow into larger themes.'
    },
    {
      id: 'mq19',
      text: 'If a melody is "Syllabic," it means:',
      options: [
        { id: 'mq19a1', text: 'One note for every syllable of text' },
        { id: 'mq19a2', text: 'Many notes for one syllable' },
        { id: 'mq19a3', text: 'No notes' },
        { id: 'mq19a4', text: 'A melody played on a drum' },
      ],
      correctAnswerId: 'mq19a1',
      explanation: 'In Musical Theatre, syllabic singing ensures the audience can understand the lyrics.'
    },
    {
      id: 'mq20',
      text: 'Which rhythmic effect is often paired with a melody to make it feel more "unpredictable" and "modern"?',
      options: [
        { id: 'mq20a1', text: 'Steady pulse' },
        { id: 'mq20a2', text: 'Syncopation (shifting accents)' },
        { id: 'mq20a3', text: 'Silence' },
        { id: 'mq20a4', text: 'A waltz beat' },
      ],
      correctAnswerId: 'mq20a2',
      explanation: 'Syncopated melodies feel energetic and can heighten tension in action scenes.'
    }
  ]
};

const StageScreen0105MelodyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-blue-600 dark:hover:text-blue-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Melody</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          Melodic Storytelling
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 uppercase tracking-widest font-semibold">
          Area of Study 7 • Music for Stage and Screen
        </p>
      </header>

      {/* Main Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
        <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-blue-100 dark:border-blue-900">
          <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400">The Power of Theme</h2>
          <p className="text-lg leading-relaxed">
            In stage and screen music, a melody is more than just a tune—it's a <strong>narrative tool</strong>.
            Composers use melodies to represent characters, signal danger, or evoke deep nostalgia.
            Unlike a symphony where a melody might be developed over 20 minutes, film melodies (themes) often need to
            work in short, flexible fragments.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">1. The Leitmotif</h2>
          <p className="mb-6">
            A <strong>Leitmotif</strong> is a recurring musical idea associated with a specific person, place, or concept.
            This technique was perfected by Richard Wagner in opera and later adopted by Hollywood composers like Max Steiner and John Williams.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-100 dark:border-red-800">
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-2">The Shark (Jaws)</h3>
              <p className="text-sm mb-4">
                One of the most famous 2-note melodies in history. It uses a low-register <strong>semitone</strong> (E to F)
                to represent the relentless nearing of the predator.
              </p>
              <AbcDisplayComponent
                id="jaws-theme"
                title="Jaws Theme (Leitmotif)"
                abcNotation={`X:1\nM:4/4\nL:1/4\nK:C\nQ:" Very Slow and Ominous"\n,,E ,,F | ,,E ,,F | ,,E/ ,,F/ ,,E/ ,,F/ | ,,E/ ,,F/ ,,E/ ,,F/ |`}
              />
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">The Force (Star Wars)</h3>
              <p className="text-sm mb-4">
                A more lyrical, spiritual melody. It often features wide leaps (intervals) and a minor tonality that feels both epic and melancholic.
              </p>
              <AbcDisplayComponent
                id="force-theme"
                title="The Force Theme Fragment"
                abcNotation={`X:1\nM:4/4\nL:1/8\nK:Gm\nQ:" Lyrical"\nG2 d2 (3:2:2c2 B2 | A2 (3:2:2G2 F2 G4 |`}
              />
            </div>
          </div>
        </section>

        <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
          <h2 className="text-3xl font-bold mb-6">2. Mickey-Mousing</h2>
          <p className="mb-4">
            Named after early Disney cartoons, this technique involves the melody <strong>exactly mimicking</strong>
            physical movements on screen.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Rising chromatic scales:</strong> Suggesting someone walking upstairs.</li>
            <li><strong>Rapid descending runs:</strong> Suggesting a fall.</li>
            <li><strong>Staccato "Tiptoe" notes:</strong> Suggesting stealth or sneaky movement.</li>
          </ul>
        </section>

        <section className="py-12">
          <h2 className="text-4xl font-black text-center mb-12 uppercase tracking-tighter">Test Your Knowledge</h2>
          <QuizComponent quizData={melodyQuiz} />
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-800 text-center">
        <Link to="/aos/stage-screen/core-musical-elements/rhythm" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105">
          Next: Rhythm and Synchronization
          <span>→</span>
        </Link>
      </footer>
    </article>
  );
};

export default StageScreen0105MelodyPage;
