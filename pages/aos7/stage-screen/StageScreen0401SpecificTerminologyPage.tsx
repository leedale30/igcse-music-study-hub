import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen0401SpecificTerminologyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Specific Terminology - Music For Stage And Screen Language, Literacy, And Theory</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Specific Terminology - Music For Stage And Screen Language, Literacy, And Theory
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 7 • Music for Stage and Screen
        </p>
      </header>

      {/* Main Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none
        prose-headings:text-slate-800 dark:prose-headings:text-slate-100
        prose-h2:text-2xl prose-h2:font-bold prose-h2:border-b prose-h2:border-slate-200 prose-h2:dark:border-slate-700 prose-h2:pb-2 prose-h2:mb-4
        prose-h3:text-xl prose-h3:font-semibold
        prose-h4:text-lg prose-h4:font-medium
        prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-p:leading-relaxed
        prose-li:text-gray-700 prose-li:dark:text-gray-300
        prose-strong:text-slate-800 prose-strong:dark:text-slate-200
        prose-em:text-gray-600 prose-em:dark:text-gray-400
        prose-a:text-sky-600 prose-a:dark:text-sky-400 prose-a:hover:underline
        [&_section]:mb-10 [&_section]:bg-slate-50 [&_section]:dark:bg-slate-800 [&_section]:rounded-lg [&_section]:p-6
      ">
        <div dangerouslySetInnerHTML={{ __html: `<h2>Genre-specific vocabulary</h2>
<p>You must apply sophisticated terminology to describe how music enhances the visual narrative and action.</p>
<h3>Narrative Devices</h3>
<p><strong>Leitmotif</strong>: A recurring musical theme associated with a specific character, idea, emotion, or scene, crucial for narrative development in film and stage music.</p>
<h3>Rhythmic/Repetitive Devices</h3>
<p><strong>Ostinato</strong>: A repeated musical pattern used to build tension and rhythmic drive. <strong>Loops</strong>: Short, repeated patterns of music, fundamental to computer game scores.</p>
<h3>Structural Tension</h3>
<p><strong>Breakdown, Build up, and Drop</strong>: Terms that originate in EDM (Area of Study 5) but describe the creation of intense tension followed by release, often used in film and game scores to punctuate action sequences.</p>
<h3>Orchestral Colour</h3>
<p><strong>Fanfare</strong>: A short, ceremonial piece typically played by brass instruments, often used in film for heroism or majesty. <strong>Cluster chords</strong>: Groups of dissonant notes played together, often used in 20th-century ballet (like Stravinsky) or film to create harsh, unsettling textures.</p>
<h3>Game-Specific Terminology</h3>
<p><strong>Adaptive music</strong>: Music in computer games that changes dynamically based on player actions or location, ensuring a continuous but relevant musical experience.</p>
<h3>Production/Effects</h3>
<p><strong>Sample, loop, chorus, reverb, delay, overdubbing, double-tracking, multi-tracking, drum machine</strong>: Techniques and devices essential for creating the full sound palette in both modern film/game scoring and recorded theatrical music.</p>
<p><a href="../aos07-04-language-literacy-and-theory.html">← Back to Language, Literacy, and Theory</a></p>
<p><a href="aos07-04-02-lyrics-text-analysis.html">Next: Lyrics &amp; Text Analysis →</a></p>` }} />
      </div>
    </article>
  );
};

export default StageScreen0401SpecificTerminologyPage;
