import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0305KeyWorksPiecesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Key Works Pieces</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Key Works Pieces
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>3.5. Key Works/Pieces: Canonical or representative compositions that define the genre or tradition.</h3>
<p>The syllabus provides <em>Starting Points</em> that are intended to exemplify the main features of each style; they are <strong>not prescribed set works</strong> and will <strong>not</strong> be used in the examination.</p>
<ul>
<li> <strong>Art Song Focus:</strong> The starting point is <strong>Libby Larsen: <em>Chanting to Paradise</em></strong>. Candidates are also encouraged to study works from the tradition, such as Ralph Vaughan Williams’s <strong><em>Songs of Travel</em></strong>, where the piano is used as an equal partner to portray meaning (e.g., a "striding bass" for the traveller’s determination or chromaticism for melancholy).</li>
<li> <strong>Music for Choirs Focus:</strong> The starting point is <strong>Jonathan Dove: <em>The Passing of the Year</em></strong>. This piece is exemplary in its use of complex textures, including antiphony and polyrhythms.</li>
<li> <strong>Popular Song/Musicals Focus:</strong> The starting point is <strong>Benj Pasek and Justin Paul: <em>A Million Dreams</em> from <em>The Greatest Showman</em></strong>. This is used to demonstrate common structures (verse/chorus) and the use of the orchestra to build drama.</li>
<li>  [YOUTUBE LINK: Libby Larsen: Out of Sight from Chanting to Paradise (Suggested listening example)]</li>
<li>  [YOUTUBE LINK: Jonathan Dove: III. Answer July from The Passing of the Year (Suggested listening example)]</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0305KeyWorksPiecesPage;
