import React from 'react';
import { Link } from 'react-router-dom';

const Dance0403NotationSystemPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Notation System - Music For Dance Language, Literacy, And Theory</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Notation System - Music For Dance Language, Literacy, And Theory
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 5 • Music for Dance
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
        <div dangerouslySetInnerHTML={{ __html: `<h2>How music is recorded—staff notation, cipher, neumes, graphic scores, etc.</h2>
<p>While Latin American dance music can be transcribed using traditional staff notation, EDM relies on contemporary technology, which affects its literacy requirements.</p>
<h3>Staff Notation</h3>
<p>Standard <strong>staff notation</strong> is used for instrumental arrangements of Tango and Salsa. You must be able to read and understand rhythmic complexity, including <strong>syncopation</strong>, <strong>dotted rhythms</strong>, and sometimes <strong>irregular metre</strong>. Many Tango phrases begin with an <strong>anacrusis</strong> (upbeat).</p>
<h3>Music Technology and Commentary</h3>
<p>EDM composition primarily relies on <strong>Digital Audio Workstations (DAWs)</strong> and <strong>drum machines</strong> rather than traditional staff notation. If candidates choose to compose in an EDM style (Component 3), they may submit a <strong>written commentary</strong> instead of a formal score, detailing the composition's structure and content, and how effects were achieved through technology.</p>
<p><a href="aos05-04-02-lyrics-text-analysis.html">← Previous: Lyrics &amp; Text Analysis</a></p>
<p><a href="../aos05-04-language-literacy-and-theory.html">← Back to Language, Literacy, and Theory</a></p>
<p><a href="aos05-04-04-oral-aural-tradition.html">Next: Oral/Aural Tradition →</a></p>` }} />
      </div>
    </article>
  );
};

export default Dance0403NotationSystemPage;
