import React from 'react';
import { Link } from 'react-router-dom';
import QuizComponent from '../../../components/QuizComponent';
import { Quiz } from '../../../types';

const composersQuiz: Quiz = {
  id: 'aos7-composers-quiz',
  title: 'Key Composers & Styles Quiz',
  questions: [
    {
      id: 'cq1',
      text: 'Which composer is famous for the "Star Wars" and "Indiana Jones" scores, using a Neoromantic orchestral style?',
      options: [
        { id: 'cq1a1', text: 'Hans Zimmer' },
        { id: 'cq1a2', text: 'John Williams' },
        { id: 'cq1a3', text: 'Koji Kondo' },
        { id: 'cq1a4', text: 'Danny Elfman' },
      ],
      correctAnswerId: 'cq1a2',
      explanation: 'John Williams revitalized the large-scale symphonic score in the 1970s.'
    },
    {
      id: 'cq2',
      text: 'Who composed the music for "The Lion King" and "Interstellar", known for integrating synthesizers with live orchestra?',
      options: [
        { id: 'cq2a1', text: 'John Williams' },
        { id: 'cq2a2', text: 'Hans Zimmer' },
        { id: 'cq2a3', text: 'Tchaikovsky' },
        { id: 'cq2a4', text: 'Andrew Lloyd Webber' },
      ],
      correctAnswerId: 'cq2a2',
      explanation: 'Hans Zimmer is a pioneer of the "Hybrid Score," blending electronic and acoustic sounds.'
    },
    {
      id: 'cq3',
      text: 'Which 19th-century composer wrote the classic ballets "Swan Lake" and "The Nutcracker"?',
      options: [
        { id: 'cq3a1', text: 'Igor Stravinsky' },
        { id: 'cq3a2', text: 'Pyotr Ilyich Tchaikovsky' },
        { id: 'cq3a3', text: 'Leonard Bernstein' },
        { id: 'cq3a4', text: 'Lin-Manuel Miranda' },
      ],
      correctAnswerId: 'cq3a2',
      explanation: 'Tchaikovsky is the most celebrated composer of the Romantic ballet tradition.'
    },
    {
      id: 'cq4',
      text: 'Danny Elfman is well-known for his long-term collaboration with which film director?',
      options: [
        { id: 'cq4a1', text: 'Steven Spielberg' },
        { id: 'cq4a2', text: 'Tim Burton' },
        { id: 'cq4a3', text: 'Christopher Nolan' },
        { id: 'cq4a4', text: 'George Lucas' },
      ],
      correctAnswerId: 'cq4a2',
      explanation: 'Elfman\'s quirky, dark orchestral style is a perfect match for Tim Burton\'s visual aesthetic (e.g., Batman, Edward Scissorhands).'
    },
    {
      id: 'cq5',
      text: 'Koji Kondo is a legendary composer for which medium?',
      options: [
        { id: 'cq5a1', text: 'Broadway Musicals' },
        { id: 'cq5a2', text: 'Russian Ballet' },
        { id: 'cq5a3', text: 'Video Games (Super Mario, Zelda)' },
        { id: 'cq5a4', text: 'Documentaries' },
      ],
      correctAnswerId: 'cq5a3',
      explanation: 'Koji Kondo defined the "chiptune" and early interactive styles of video game music.'
    },
    {
      id: 'cq6',
      text: 'Which composer wrote the minimalist, repetitive score for "Inception" and "Dunkirk"?',
      options: [
        { id: 'cq6a1', text: 'Hans Zimmer' },
        { id: 'cq6a2', text: 'Ennio Morricone' },
        { id: 'cq6a3', text: 'Alan Menken' },
        { id: 'cq6a4', text: 'Danny Elfman' },
      ],
      correctAnswerId: 'cq6a1',
      explanation: 'Zimmer uses repetition and "clock-like" rhythms to build intense psychological pressure.'
    },
    {
      id: 'cq7',
      text: 'Who is known for the "Spaghetti Western" sound, using whistles, electric guitars, and vocal grunts?',
      options: [
        { id: 'cq7a1', text: 'Ennio Morricone' },
        { id: 'cq7a2', text: 'John Williams' },
        { id: 'cq7a3', text: 'Hans Zimmer' },
        { id: 'cq7a4', text: 'Andrew Lloyd Webber' },
      ],
      correctAnswerId: 'cq7a1',
      explanation: 'Morricone\'s innovative use of non-traditional instruments defined the sound of the Western genre.'
    },
    {
      id: 'cq8',
      text: 'Which composer is responsible for the "Disney Renaissance" scores like "The Little Mermaid" and "Aladdin"?',
      options: [
        { id: 'cq8a1', text: 'Alan Menken' },
        { id: 'cq8a2', text: 'Howard Shore' },
        { id: 'cq8a3', text: 'Jeremy Soule' },
        { id: 'cq8a4', text: 'Stephen Sondheim' },
      ],
      correctAnswerId: 'cq8a1',
      explanation: 'Alan Menken brought Broadway-style structure and infectious melodies back to Disney animation.'
    },
    {
      id: 'cq9',
      text: 'Who composed the sprawling, Wagnerian score for "The Lord of the Rings" trilogy?',
      options: [
        { id: 'cq9a1', text: 'Howard Shore' },
        { id: 'cq9a2', text: 'John Williams' },
        { id: 'cq9a3', text: 'Nobuo Uematsu' },
        { id: 'cq9a4', text: 'Tchaikovsky' },
      ],
      correctAnswerId: 'cq9a1',
      explanation: 'Howard Shore created over 80 distinct leitmotifs for Middle-earth, one of the most complex systems in film history.'
    },
    {
      id: 'cq10',
      text: 'Which Japanese composer is best known for the "Final Fantasy" series?',
      options: [
        { id: 'cq10a1', text: 'Nobuo Uematsu' },
        { id: 'cq10a2', text: 'Koji Kondo' },
        { id: 'cq10a3', text: 'Joe Hisaishi' },
        { id: 'cq10a4', text: 'Akira Yamaoka' },
      ],
      correctAnswerId: 'cq10a1',
      explanation: 'Uematsu is often called the "Beethoven of video game music" for his emotive and melodic RPG scores.'
    },
    {
      id: 'cq11',
      text: 'Who wrote the dark, dissonant score for "Psycho", using only a string orchestra?',
      options: [
        { id: 'cq11a1', text: 'Bernard Herrmann' },
        { id: 'cq11a2', text: 'Max Steiner' },
        { id: 'cq11a3', text: 'James Horner' },
        { id: 'cq11a4', text: 'Thomas Newman' },
      ],
      correctAnswerId: 'cq11a1',
      explanation: 'Herrmann\'s "black and white" palette for the strings perfectly matched Hitchcock\'s visual style.'
    },
    {
      id: 'cq12',
      text: 'Which composer is a master of the "English Pastoral" and "Choral" sound in films like "The Fellowship of the Ring"?',
      options: [
        { id: 'cq12a1', text: 'Howard Shore' },
        { id: 'cq12a2', text: 'Edward Elgar' },
        { id: 'cq12a3', text: 'Ralph Vaughan Williams' },
        { id: 'cq12a4', text: 'Hans Zimmer' },
      ],
      correctAnswerId: 'cq12a1',
      explanation: 'Shore utilized folk instruments and choirs to ground the fantasy world in an "Old World" European sound.'
    },
    {
      id: 'cq13',
      text: 'Who composed the music for "The Phantom of the Opera" and "Cats"?',
      options: [
        { id: 'cq13a1', text: 'Andrew Lloyd Webber' },
        { id: 'cq13a2', text: 'Stephen Sondheim' },
        { id: 'cq13a3', text: 'Lin-Manuel Miranda' },
        { id: 'cq13a4', text: 'Rogers and Hammerstein' },
      ],
      correctAnswerId: 'cq13a1',
      explanation: 'Lloyd Webber is the most commercially successful composer of modern "Mega-Musicals."'
    },
    {
      id: 'cq14',
      text: 'Which composer wrote the sophisticated, polyphonic music for "Sweeney Todd" and "Into the Woods"?',
      options: [
        { id: 'cq14a1', text: 'Stephen Sondheim' },
        { id: 'cq14a2', text: 'Cole Porter' },
        { id: 'cq14a3', text: 'George Gershwin' },
        { id: 'cq14a4', text: 'Andrew Lloyd Webber' },
      ],
      correctAnswerId: 'cq14a1',
      explanation: 'Sondheim is revered for his lyrical complexity and intricate use of leitmotif on Broadway.'
    },
    {
      id: 'cq15',
      text: 'Who composed the modernist, often chaotic ballet "The Rite of Spring"?',
      options: [
        { id: 'cq15a1', text: 'Igor Stravinsky' },
        { id: 'cq15a2', text: 'Sergei Prokofiev' },
        { id: 'cq15a3', text: 'Aaron Copland' },
        { id: 'cq15a4', text: 'John Cage' },
      ],
      correctAnswerId: 'cq15a1',
      explanation: 'Stravinsky\'s use of irregular rhythms and bitonality famously caused a riot at its 1913 premiere.'
    },
    {
      id: 'cq16',
      text: 'Which composer is known for his "Whimsical" and "Quirky" scores for Studio Ghibli films like "Spirited Away"?',
      options: [
        { id: 'cq16a1', text: 'Joe Hisaishi' },
        { id: 'cq16a2', text: 'Koji Kondo' },
        { id: 'cq16a3', text: 'Ryuichi Sakamoto' },
        { id: 'cq16a4', text: 'Yoko Kanno' },
      ],
      correctAnswerId: 'cq16a1',
      explanation: 'Hisaishi\'s blend of minimalism and lush Romanticism is the signature sound of Studio Ghibli.'
    },
    {
      id: 'cq17',
      text: 'Who composed the rhythmic, jazz-influenced music for "West Side Story"?',
      options: [
        { id: 'cq17a1', text: 'Leonard Bernstein' },
        { id: 'cq17a2', text: 'George Gershwin' },
        { id: 'cq17a3', text: 'Duke Ellington' },
        { id: 'cq17a4', text: 'Quincy Jones' },
      ],
      correctAnswerId: 'cq17a1',
      explanation: 'Bernstein fused symphonic music with Latin jazz and street rhythms to create a uniquely American sound.'
    },
    {
      id: 'cq18',
      text: 'Which composer created the "Choral" and "Electronic" textures for the game "Halo"?',
      options: [
        { id: 'cq18a1', text: 'Martin O\'Donnell' },
        { id: 'cq18a2', text: 'Grant Kirkhope' },
        { id: 'cq18a3', text: 'Bear McCreary' },
        { id: 'cq18a4', text: 'Garry Schyman' },
      ],
      correctAnswerId: 'cq18a1',
      explanation: 'The "Halo Theme" Gregorian chant is one of the most recognizable melodies in gaming history.'
    },
    {
      id: 'cq19',
      text: 'Who is the "father of film music" who wrote the massive orchestral score for "King Kong" (1933)?',
      options: [
        { id: 'cq19a1', text: 'Max Steiner' },
        { id: 'cq19a2', text: 'Erich Korngold' },
        { id: 'cq19a3', text: 'Dimitri Tiomkin' },
        { id: 'cq19a4', text: 'Alfred Newman' },
      ],
      correctAnswerId: 'cq19a1',
      explanation: 'Steiner established the convention of the through-composed, leitmotif-driven symphonic score.'
    },
    {
      id: 'cq20',
      text: 'Which composer is known for the "Hamilton" and "In the Heights" scores, blending Hip-Hop with Theatre?',
      options: [
        { id: 'cq20a1', text: 'Lin-Manuel Miranda' },
        { id: 'cq20a2', text: 'Jonathan Larson' },
        { id: 'cq20a3', text: 'Pasek and Paul' },
        { id: 'cq20a4', text: 'Jason Robert Brown' },
      ],
      correctAnswerId: 'cq20a1',
      explanation: 'Miranda revolutionized the modern musical by integrating contemporary rap and R&B into traditional structures.'
    }
  ]
};

const StageScreen0306KeyComposersArtistsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-blue-600 dark:hover:text-blue-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Key Composers & Artists</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
          Masters of the Screen & Stage
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 uppercase tracking-widest font-semibold">
          Area of Study 7 • Music for Stage and Screen
        </p>
      </header>

      {/* Main Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">

        <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-800">
          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-4">Examination Note</h2>
          <p className="italic text-slate-700 dark:text-slate-300">
            For the IGCSE Music exam, you are <strong>not</strong> expected to identify specific composers
            by name from an extract. However, studying these masters is the best way to understand the
            <strong>musical features</strong> and <strong>styles</strong> that you <em>will</em> be asked about.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          {/* John Williams */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
            <h3 className="text-xl font-bold text-blue-600 mb-2">John Williams</h3>
            <p className="text-sm font-semibold text-slate-500 mb-4">Style: Neoromantic / Symphonic</p>
            <p className="text-sm leading-relaxed">
              Famous for reviving the large-scale orchestral score. He uses <strong>Leitmotifs</strong>
              (character themes) like Wagner and writes sweeping, lyrical melodies with heavy brass
              and percussion.
            </p>
            <div className="mt-4 text-xs font-mono bg-slate-100 dark:bg-slate-900 p-2 rounded">
              Works: Star Wars, Jaws, Harry Potter
            </div>
          </div>

          {/* Hans Zimmer */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Hans Zimmer</h3>
            <p className="text-sm font-semibold text-slate-500 mb-4">Style: Hybrid / Minimalist</p>
            <p className="text-sm leading-relaxed">
              A pioneer of the <strong>Hybrid Score</strong>. He blends electronic synthesizers,
              ethnic instruments, and live orchestra. His work often relies on <strong>Ostinatos</strong>
              and deep, sub-bass textures.
            </p>
            <div className="mt-4 text-xs font-mono bg-slate-100 dark:bg-slate-900 p-2 rounded">
              Works: Inception, The Lion King, Interstellar
            </div>
          </div>

          {/* Tchaikovsky */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
            <h3 className="text-xl font-bold text-blue-600 mb-2">P.I. Tchaikovsky</h3>
            <p className="text-sm font-semibold text-slate-500 mb-4">Style: Romantic Ballet</p>
            <p className="text-sm leading-relaxed">
              Defined the sound of 19th-century ballet. He used <strong>colorful orchestration</strong>
              (e.g., the Celesta in Nutcracker) and clear, symmetrical forms suited for dance.
            </p>
            <div className="mt-4 text-xs font-mono bg-slate-100 dark:bg-slate-900 p-2 rounded">
              Works: Swan Lake, Nutcracker, Sleeping Beauty
            </div>
          </div>

          {/* Koji Kondo */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Koji Kondo</h3>
            <p className="text-sm font-semibold text-slate-500 mb-4">Style: Interactive / Video Game</p>
            <p className="text-sm leading-relaxed">
              The architect of Nintendo\'s sound. He mastered writing memorable melodies for
              <strong>limited synthesis</strong> (NES/SNES) and pioneered music that changes
              based on player action.
            </p>
            <div className="mt-4 text-xs font-mono bg-slate-100 dark:bg-slate-900 p-2 rounded">
              Works: Super Mario, The Legend of Zelda
            </div>
          </div>
        </div>

        <section className="bg-blue-900 text-white p-8 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-blue-200">Key Takeaway for Exams</h2>
          <p className="mb-4">
            If you hear a large orchestra with heroic brass and clear themes, you are likely listening
            to a <strong>Neoromantic</strong> style (like Williams). If you hear dark, atmospheric pads
            with heavy rhythmic drive, it is likely a <strong>Modern Hybrid</strong> style (like Zimmer).
          </p>
        </section>

        <section className="py-12">
          <h2 className="text-4xl font-black text-center mb-12 uppercase tracking-tighter text-blue-800 dark:text-blue-200">Test Your Knowledge</h2>
          <QuizComponent quizData={composersQuiz} />
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-800 text-center">
        <Link to="/aos/stage-screen/cultural-historical/cultural-function" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105">
          Next: Cultural Function
          <span>→</span>
        </Link>
      </footer>
    </article>
  );
};

export default StageScreen0306KeyComposersArtistsPage;
