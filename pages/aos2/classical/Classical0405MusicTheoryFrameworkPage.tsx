import React from 'react';
import { Link } from 'react-router-dom';

const Classical0405MusicTheoryFrameworkPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Music Theory Framework - Classical Music Language, Literacy, And Theory</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Music Theory Framework - Classical Music Language, Literacy, And Theory
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
        <div dangerouslySetInnerHTML={{ __html: `<h2>The theoretical system underpinning the music</h2>
<p>The Classical period consolidated the rules of Western Tonality that you must understand.</p>
<h3>Tonality and Scales</h3>
<p>The framework is built upon the <strong>major and minor key system</strong>. You must recognize when a melody is <strong>diatonic</strong> (using notes from the key).</p>
<h3>Harmony</h3>
<p>Harmony is highly <strong>functional</strong> and reliant on <strong>primary and secondary chords</strong>. You must distinguish between <strong>consonant</strong> (stable) and <strong>dissonant</strong> (unstable) harmony.</p>
<h3>Chord Types</h3>
<p>You must identify <strong>dominant seventh</strong> and <strong>diminished seventh</strong> chords.</p>
<h3>Cadences</h3>
<p>Essential knowledge includes recognizing and naming the function of <strong>perfect, imperfect, and interrupted</strong> cadences by ear.</p>
<h3>Modulation</h3>
<p>You must recognize <strong>modulation to related keys</strong> (dominant, subdominant, relative major, and relative minor).</p>
<h3>Ornamentation</h3>
<p>You must be able to aurally identify and name ornaments, including the <strong>trill, mordent, turn, appoggiatura, and acciaccatura</strong>.</p>
<h3>Suspensions</h3>
<p>Understanding and recognition of <strong>suspensions</strong> is required.</p>
<p><a href="aos02-04-04-oral-aural-tradition.html">← Previous: Oral/Aural Tradition</a></p>
<p><a href="../aos02-04-language-literacy-and-theory.html">← Back to Language, Literacy, and Theory</a></p>` }} />
      </div>
    </article>
  );
};

export default Classical0405MusicTheoryFrameworkPage;
