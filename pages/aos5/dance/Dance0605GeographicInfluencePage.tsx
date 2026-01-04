import React from 'react';
import { Link } from 'react-router-dom';

const Dance0605GeographicInfluencePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Geographic Influence</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Geographic Influence
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 5 • Music for Dance
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>6.5. Geographic Influence: How climate, landscape, and migration shape musical identity.</h3>
<p>Geographic and demographic influences are key to understanding the origins of Tango and Salsa.</p>
<ul>
<li> <strong>Migration and Hybridization:</strong> Tango’s identity was shaped by the <em>migration</em> of a large number of immigrants from Italy, Spain, Eastern Europe, and African slaves into Buenos Aires, resulting in the <em>merging</em> of diverse music and dance traditions.</li>
<li> <strong>Urban Origins (Salsa):</strong> Salsa’s identity is rooted in the specific urban geography of <em>East Harlem, NYC</em>, emerging after WWII due to the <em>arrival of Puerto Rican and other Central/Latin American immigrants</em>.</li>
<li> <strong>Globalized Production (EDM):</strong> While geographically diffused, EDM’s identity is primarily shaped by <em>Music Technology and Digital Audio Workstations (DAWs)</em>, rather than traditional landscape influences. It is defined as a <em>global cultural movement</em>.</li>
</ul>
<p>&gt; [PLACEHOLDER 3: Diagram illustrating the waves of migration (Italy, Spain, Africa) into Buenos Aires that fused to create the Tango musical identity.]</p>
<p>&gt; [Link to Hector Lavoe: El Cantante on YouTube, exemplifying Salsa instrumentation and rhythmic drive: https://youtu.be/PyLZYNB_kVs?si=7piDy3iB4xos4TbG]</p>` }} />
      </div>
    </article>
  );
};

export default Dance0605GeographicInfluencePage;
