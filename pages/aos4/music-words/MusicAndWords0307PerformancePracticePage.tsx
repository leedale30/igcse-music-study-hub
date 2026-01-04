import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0307PerformancePracticePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Performance Practice</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Performance Practice
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>3.7. Performance Practice: Traditional ways of interpreting and presenting music.</h3>
<p>Performance practices vary significantly depending on whether the music is written for a concert hall, church, or stage.</p>
<h4>3.7.1.1. Staging</h4>
<p><strong>Musicals</strong> are primarily performed in theatres, involving elaborate <strong>staging</strong> that may include <strong>special effects, projected visuals, puppetry, and automated sets</strong> to enhance the narrative. These pieces are written with live performance in mind, where <strong>vocal clarity and instrumental balance</strong> are paramount.</p>
<h4>3.7.1.2. Performer/audience relationship</h4>
<p>The performance context determines the relationship:</p>
<ul>
<li> <strong>Art Song/Choirs:</strong> Often performed in concert halls or churches, involving a defined performer-audience dynamic.</li>
<li> <strong>Popular Music:</strong> Performances often occur in large <strong>live concerts and shows</strong> (stadiums), featuring <strong>complex lighting, massive sound systems, and intricate visual effects</strong> designed to engage a large audience. The widespread distribution via <strong>digital streaming</strong> also defines a passive, broadcast audience relationship.</li>
</ul>
<h4>3.7.1.3. attire</h4>
<p>NOT APPLICABLE.</p>
<h4>3.7.1.4. ritualistic elements</h4>
<p>Sacred choral works (Masses) continue to serve a ritualistic function in church settings.</p>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0307PerformancePracticePage;
