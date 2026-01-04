import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0304EconomicsAndPatronagePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Economics And Patronage</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Economics And Patronage
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>3.4. Economics &amp; Patronage: The financial systems supporting the music's creation.</h3>
<p>The economy of music creation varies greatly between the traditional Art Song model and the modern Pop model.</p>
<ul>
<li> <strong>Traditional/Art Music:</strong> Composers of choral works and art songs rely on <strong>commissioning</strong> (patronage) for large works or income from the <strong>performance and publication</strong> of their music. Art songs are often written with <strong>piano accompaniment</strong>, though large orchestral commissions for solo voice also exist.</li>
<li> <strong>Commercial/Pop Music:</strong> Popular song production relies heavily on <strong>music technology</strong> (overdubbing, multi-tracking, double-tracking, effects like chorus and delay). Income is generated through <strong>live concerts and shows</strong> (often large, elaborate productions) and through the dissemination of music via <strong>radio, television, and digital streaming platforms</strong>.</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0304EconomicsAndPatronagePage;
