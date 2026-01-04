import React from 'react';
import { Link } from 'react-router-dom';

const Romantic0307PerformancePracticePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Performance Practice</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Performance Practice
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 3 • Romantic Music
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
<h4>3.7.1.1. Staging</h4>
<p>NOT APPLICABLE (The focus works are orchestral pieces intended for the concert hall, not staged theatre).</p>
<h4>3.7.1.2. Performer/audience relationship</h4>
<p>The relationship became less intimate and more hierarchical than in the Baroque and Classical chamber settings.</p>
<ul>
<li> <strong>Public Concerts:</strong> Music shifted from private salons to large public concert halls.</li>
<li> <strong>The Virtuoso:</strong> Audiences developed a love for brilliant soloists, who commanded the stage and demonstrated extraordinary technical skill (<strong>virtuosity</strong>).</li>
<li> <strong>Conductors:</strong> The larger orchestra and complex scores required a formal <strong>conductor</strong> to lead and interpret the work, a role that became increasingly important in this era.</li>
<li> <strong>Expressive Interpretation:</strong> Performers were expected to convey intense emotion, often using <strong>rubato</strong> (flexible tempo) to vary the speed expressively.</li>
</ul>
<h4>3.7.1.3. Attire</h4>
<p>NOT APPLICABLE.</p>
<h4>3.7.1.4. Ritualistic elements</h4>
<p>NOT APPLICABLE (Focus is on secular orchestral music.)</p>` }} />
      </div>
    </article>
  );
};

export default Romantic0307PerformancePracticePage;
