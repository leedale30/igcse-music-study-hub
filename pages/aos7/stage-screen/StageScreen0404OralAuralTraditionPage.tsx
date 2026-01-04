import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen0404OralAuralTraditionPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Oral/Aural Tradition - Music For Stage And Screen Language, Literacy, And Theory</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Oral/Aural Tradition - Music For Stage And Screen Language, Literacy, And Theory
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
        <div dangerouslySetInnerHTML={{ __html: `<h2>Transmission of music through listening and imitation rather than written form</h2>
<p>While the music is extensively notated, aural skills (AO1) are critical for analysis, and technological and game music relies on a unique form of aural transmission.</p>
<h3>Aural Recognition</h3>
<p>The exam focuses entirely on your <strong>aural perception</strong> of complex musical events. You must be able to identify, purely by listening, when a <strong>leitmotif</strong> changes, when <strong>dissonance</strong> peaks, or what <strong>textures</strong> (like <strong>cluster chords</strong>) are used to match the action.</p>
<h3>Adaptive Transmission</h3>
<p>In computer game music, the musical output (soundtrack) often changes in real-time based on player input (<strong>adaptive music</strong>). This process is highly reliant on aural timing and programming rather than static score reading.</p>
<p><a href="aos07-04-03-notation-system.html">← Previous: Notation System</a></p>
<p><a href="../aos07-04-language-literacy-and-theory.html">← Back to Language, Literacy, and Theory</a></p>
<p><a href="aos07-04-05-music-theory-framework.html">Next: Music Theory Framework →</a></p>` }} />
      </div>
    </article>
  );
};

export default StageScreen0404OralAuralTraditionPage;
