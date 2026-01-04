import React from 'react';
import { Link } from 'react-router-dom';

const SmallEnsemble0404OralAuralTraditionPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/small-ensemble" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Small Ensemble</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Oral/Aural Tradition - Music For Small Ensemble Language, Literacy, And Theory</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Oral/Aural Tradition - Music For Small Ensemble Language, Literacy, And Theory
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
        <div dangerouslySetInnerHTML={{ __html: `<h2>Transmission of music through listening and imitation rather than written form</h2>
<p>The traditions in AOS 6 strongly emphasize teaching and learning by ear, making aural skills paramount.</p>
<h3>Aural Transmission</h3>
<p>The music in these traditions is often passed down via <strong>oral/aural tradition</strong> (listening and imitation) rather than solely through written notation.</p>
<h3>Aural Analysis (AO1)</h3>
<p>For the examination, your <strong>aural familiarity</strong> is crucial. You must be able to accurately identify and describe:</p>
<ul>
<li>The unique <strong>texture</strong> (e.g., <strong>heterophony</strong>).</li>
<li>The specific <strong>instruments</strong> of each ensemble (e.g., <em>dizi, sitār, ūd, tablā</em>).</li>
<li>The structural shifts (e.g., the entry of the <em>tablā</em> to start the <em>gat</em> section in Hindustani music).</li>
</ul>
<h3>Performance Practice</h3>
<p>The use of extensive <strong>ornamentation</strong> (<strong>pitch-bending, glissando, tremolo</strong>) is often passed on through imitation, as these subtle expressive techniques are difficult to fully capture in Western notation.</p>
<p><a href="aos06-04-03-notation-system.html">← Previous: Notation System</a></p>
<p><a href="../aos06-04-language-literacy-and-theory.html">← Back to Language, Literacy, and Theory</a></p>
<p><a href="aos06-04-05-music-theory-framework.html">Next: Music Theory Framework →</a></p>` }} />
      </div>
    </article>
  );
};

export default SmallEnsemble0404OralAuralTraditionPage;
