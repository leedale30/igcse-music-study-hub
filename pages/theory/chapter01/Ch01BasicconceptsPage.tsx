import React from 'react';
import { Link } from 'react-router-dom';

const Ch01BasicconceptsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 01</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Basic Concepts</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 01
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Basic Concepts
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Basic Concepts
        </h1>
      </header>

      {/* Main Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none
        prose-headings:text-slate-800 dark:prose-headings:text-slate-100
        prose-h2:text-2xl prose-h2:font-bold prose-h2:border-b prose-h2:border-slate-200 dark:prose-h2:border-slate-700 prose-h2:pb-2 prose-h2:mb-4
        prose-h3:text-xl prose-h3:font-semibold
        prose-h4:text-lg prose-h4:font-medium
        prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
        prose-li:text-gray-700 dark:prose-li:text-gray-300
        prose-strong:text-slate-800 dark:prose-strong:text-slate-200
        prose-a:text-sky-600 dark:prose-a:text-sky-400 prose-a:hover:underline
        prose-img:rounded-lg prose-img:shadow-md prose-img:mx-auto
        prose-figure:my-6
        prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-gray-500 dark:prose-figcaption:text-gray-400
        [&_section]:mb-8 [&_section]:bg-slate-50 dark:[&_section]:bg-slate-800/50 [&_section]:rounded-lg [&_section]:p-6
        [&_table]:w-full [&_th]:bg-slate-100 dark:[&_th]:bg-slate-700 [&_th]:p-2 [&_td]:p-2 [&_td]:border [&_td]:border-slate-200 dark:[&_td]:border-slate-600
      ">
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="chapter" id="BasicConcepts"><h2 className="heading">
<span className="type">Chapter</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Basic Concepts</span>
</h2>
<nav className="summary-links"><ul>
<li><a href="01-01-Pitch.html" className="internal"><span className="codenumber">1.1</span> <span className="title">Pitch</span></a></li>
<li><a href="01-02-Notation.html" className="internal"><span className="codenumber">1.2</span> <span className="title">Notation</span></a></li>
<li><a href="01-03-OctaveRegisters.html" className="internal"><span className="codenumber">1.3</span> <span className="title">Octave Registers</span></a></li>
<li><a href="01-04-Accidentals.html" className="internal"><span className="codenumber">1.4</span> <span className="title">Accidentals</span></a></li>
<li><a href="01-05-EnharmonicNotes.html" className="internal"><span className="codenumber">1.5</span> <span className="title">Enharmonic Notes</span></a></li>
<li><a href="01-06-BasicConceptsPracticeExercises.html" className="internal"><span className="codenumber">1.6</span> <span className="title">Practice Exercises</span></a></li>
</ul></nav><div className="autopermalink" data-description="Chapter 1: Basic Concepts"><a href="#BasicConcepts" title="Copy heading and permalink for Chapter 1: Basic Concepts" aria-label="Copy heading and permalink for Chapter 1: Basic Concepts">🔗</a></div></section></div>
<div id="ptx-content-footer" className="ptx-content-footer">
</div>` }} />
      </div>

      {/* Back to Theory Index */}
      <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
        <Link
          to="/theory"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg transition-colors"
        >
          ← Back to Theory Index
        </Link>
      </div>
    </article>
  );
};

export default Ch01BasicconceptsPage;
