import React from 'react';
import { Link } from 'react-router-dom';

const Classical0305KeyWorksPiecesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Key Works Pieces</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Key Works Pieces
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>3.5. Key Works/Pieces: Canonical or representative compositions that define the genre or tradition.</h3>
<p>Your learning in this Area of Study focuses on chamber music and the structure of <strong>sonata form</strong>.</p>
<ul>
<li> <strong>Focus Work (for learning skills):</strong> You are expected to study <strong>Mozart: <em>Quintet for piano and winds in E flat major, K. 452</em>, movement 1 (Largo – Allegro moderato)</strong>. The purpose of studying this work is to teach you about the main features of <strong>sonata form</strong> (Exposition, Development, Recapitulation) and the overall Classical style. (Remember: the focus works are used for <em>learning</em> the material, but they will <strong>not</strong> appear in the examination itself).</li>
<li> <strong>Key Structures:</strong> Mandatory knowledge includes identifying the features of:</li>
<li> <strong>Sonata Form</strong> (including Exposition, Development, Recapitulation, First Subject, Second Subject, and Transition).</li>
<li> <strong>Rondo Form</strong> (ABACA, etc.).</li>
<li> <strong>Minuet and Trio</strong>.</li>
<li> <strong>Theme and Variations</strong>.</li>
<li> <strong>Wider Listening Examples:</strong> Other important pieces you are encouraged to listen to in order to broaden your understanding include Haydn’s <em>Piano Trio No. 39 in G, Hob. XV:25 ‘Gypsy’</em> and Beethoven’s <em>Piano Concerto No. 1 in C, Op. 15</em>.</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default Classical0305KeyWorksPiecesPage;
