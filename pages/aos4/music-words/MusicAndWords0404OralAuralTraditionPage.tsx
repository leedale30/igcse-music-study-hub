import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0404OralAuralTraditionPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Oral/Aural Tradition - Music And Words Language, Literacy, And Theory</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Oral/Aural Tradition - Music And Words Language, Literacy, And Theory
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 4 • Music and Words
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
<p>Aural skills are paramount in this area, both for analysis and transmission in contemporary and popular contexts.</p>
<h3>Aural Analysis (AO1)</h3>
<p>The examination requires accurate <strong>aural recognition</strong> of key elements, such as <strong>structure</strong> (identifying where the chorus returns or a bridge occurs) and <strong>texture</strong> (recognizing homophonic texture or antiphonal choral singing).</p>
<h3>Pop/Digital Transmission</h3>
<p>Popular songs and often pieces from Musicals are widely distributed via <strong>broadcast media</strong> and <strong>digital streaming platforms</strong>, where the primary mode of transmission and consumption is aural, not written.</p>
<h3>Improvisation</h3>
<p>Solo vocal parts, particularly in popular song and some Art Song traditions, may incorporate <strong>improvisation</strong>.</p>
<p><a href="aos04-04-03-notation-system.html">← Previous: Notation System</a></p>
<p><a href="../aos04-04-language-literacy-and-theory.html">← Back to Language, Literacy, and Theory</a></p>
<p><a href="aos04-04-05-music-theory-framework.html">Next: Music Theory Framework →</a></p>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0404OralAuralTraditionPage;
