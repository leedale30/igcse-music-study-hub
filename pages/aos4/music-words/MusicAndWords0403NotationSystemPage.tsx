import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0403NotationSystemPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Notation System - Music And Words Language, Literacy, And Theory</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Notation System - Music And Words Language, Literacy, And Theory
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
        <div dangerouslySetInnerHTML={{ __html: `<h2>How music is recorded—staff notation, cipher, neumes, graphic scores, etc.</h2>
<p>While Western music is traditionally documented using staff notation, modern genres rely heavily on recording techniques and non-traditional methods.</p>
<h3>Staff Notation</h3>
<p>Standard Western notation is used for Art Song, Choral music, and scores from Musicals. Candidates must be able to read notation that includes all rhythmic note values (including <strong>triplets</strong> and <strong>dotted rhythms</strong>), common time signatures (duple, triple, quadruple, simple, and compound).</p>
<h3>Commentary Alternative</h3>
<p>For composition (Component 3), a detailed <strong>written commentary</strong> describing the composition's structure and content can be submitted as an alternative to a written score, which is particularly relevant when composing in genres like popular song or EDM where traditional notation may be less appropriate.</p>
<p><a href="aos04-04-02-lyrics-text-analysis.html">← Previous: Lyrics &amp; Text Analysis</a></p>
<p><a href="../aos04-04-language-literacy-and-theory.html">← Back to Language, Literacy, and Theory</a></p>
<p><a href="aos04-04-04-oral-aural-tradition.html">Next: Oral/Aural Tradition →</a></p>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0403NotationSystemPage;
