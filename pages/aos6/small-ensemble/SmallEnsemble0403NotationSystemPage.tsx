import React from 'react';
import { Link } from 'react-router-dom';

const SmallEnsemble0403NotationSystemPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/small-ensemble" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Small Ensemble</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Notation System - Music For Small Ensemble Language, Literacy, And Theory</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Notation System - Music For Small Ensemble Language, Literacy, And Theory
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 6 • Music for Small Ensemble
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
<p>While Western <strong>staff notation</strong> is required generally across the syllabus, this area opens up the possibility of engaging with non-Western literacy methods for composition (Component 3).</p>
<h3>Staff Notation</h3>
<p>Standard staff notation is the primary system for reading written music, including all required rhythmic values, accidentals, and transposing requirements.</p>
<h3>Alternative Notation</h3>
<p>For Composition 2 (which can relate to this area), candidates may submit a recording with a <strong>written commentary</strong> instead of a formal score. However, if a score is used, it can be written in a notation system <strong>appropriate to the style/tradition</strong> of the music. This implies that notation systems such as <strong>cipher notation</strong> (which uses numbers 1–7 to represent scale degrees, commonly used for pentatonic melodies) may be encountered in teaching or used in composition submissions.</p>
<p><a href="aos06-04-02-lyrics-text-analysis.html">← Previous: Lyrics &amp; Text Analysis</a></p>
<p><a href="../aos06-04-language-literacy-and-theory.html">← Back to Language, Literacy, and Theory</a></p>
<p><a href="aos06-04-04-oral-aural-tradition.html">Next: Oral/Aural Tradition →</a></p>` }} />
      </div>
    </article>
  );
};

export default SmallEnsemble0403NotationSystemPage;
