import React from 'react';
import { Link } from 'react-router-dom';

const Classical0401SpecificTerminologyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Specific Terminology - Classical Music Language, Literacy, And Theory</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Specific Terminology - Classical Music Language, Literacy, And Theory
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 2 • Classical Music
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
        [&_.assessment-section]:bg-amber-50 [&_.assessment-section]:dark:bg-amber-900/20 [&_.assessment-section]:border [&_.assessment-section]:border-amber-200 [&_.assessment-section]:dark:border-amber-800
        [&_.definition-section]:bg-sky-50 [&_.definition-section]:dark:bg-sky-900/20 [&_.definition-section]:border [&_.definition-section]:border-sky-200 [&_.definition-section]:dark:border-sky-800
        [&_.characteristic-item]:bg-white [&_.characteristic-item]:dark:bg-slate-700 [&_.characteristic-item]:rounded-lg [&_.characteristic-item]:p-4 [&_.characteristic-item]:mb-4 [&_.characteristic-item]:border [&_.characteristic-item]:border-slate-200 [&_.characteristic-item]:dark:border-slate-600
        [&_.example-item]:bg-white [&_.example-item]:dark:bg-slate-700 [&_.example-item]:rounded-lg [&_.example-item]:p-4 [&_.example-item]:mb-4 [&_.example-item]:border [&_.example-item]:border-slate-200 [&_.example-item]:dark:border-slate-600
      ">
        <div dangerouslySetInnerHTML={{ __html: `<h2>Genre-specific vocabulary for Classical Music (c. 1750–1810)</h2>
<p>For Classical music, your analytical vocabulary must be precise, focusing on clear structures, balanced phrasing, and homophonic clarity.</p>
<h3>Form/Structure</h3>
<p>You must master <strong>sonata form</strong> terminology, including the <strong>Exposition</strong>, <strong>Development</strong>, and <strong>Recapitulation</strong>. Specific internal terms are required: <strong>First Subject</strong> (Tonic key), <strong>Second Subject</strong> (Dominant or Relative Major key), <strong>Transition</strong> (modulating passage), <strong>Codetta</strong>, <strong>Coda</strong>, and <strong>Introduction</strong>. Other essential structures include <strong>Rondo</strong> (ABACA, etc.), <strong>Minuet and Trio</strong>, and <strong>Theme and Variations</strong>.</p>
<h3>Accompaniment Devices</h3>
<p>The <strong>Alberti bass</strong> is a mandatory term, referring to the broken triad accompaniment pattern (lowest, highest, middle, highest note) characteristic of this era. You must also recognize <strong>pedal notes</strong> (tonic or dominant pedal).</p>
<h3>Melody and Devices</h3>
<p>Melodies are defined by <strong>balanced phrases</strong> (often in antecedent/consequent, or question-and-answer patterns). Mandatory devices include <strong>repetition</strong>, <strong>ascending sequence</strong>, <strong>descending sequence</strong>, and <strong>imitation</strong>.</p>
<h3>Ensemble</h3>
<p>The term <strong>Chamber music</strong> defines the primary focus of this unit: instrumental music played by a small group with <strong>one player per part</strong>. You must be familiar with common ensembles like the <strong>string quartet</strong> and <strong>piano trio</strong>.</p>
<p><a href="../aos02-04-language-literacy-and-theory.html">← Back to Language, Literacy, and Theory</a></p>
<p><a href="aos02-04-02-lyrics-text-analysis.html">Next: Lyrics &amp; Text Analysis →</a></p>` }} />
      </div>
    </article>
  );
};

export default Classical0401SpecificTerminologyPage;
