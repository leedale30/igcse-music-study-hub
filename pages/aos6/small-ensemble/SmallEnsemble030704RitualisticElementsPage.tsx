import React from 'react';
import { Link } from 'react-router-dom';

const SmallEnsemble030704RitualisticElementsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/small-ensemble" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Small Ensemble</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Ritualistic Elements - Music For Small Ensemble Performance Practice</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Ritualistic Elements - Music For Small Ensemble Performance Practice
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
        <div dangerouslySetInnerHTML={{ __html: `<p>As noted in the cultural function section, the music functions in the context of <strong><em>mangal</em></strong> (joyous and auspicious occasions) and <strong>religious celebrations</strong>, lending a ritualistic element to the performance setting.</p>
<h3>Hindustani Classical Music</h3>
<p>In the Hindustani tradition, musicians such as the <em>Langās</em> and <em>Mānganiyārs</em> were traditionally hired to perform for important family and religious events, including <strong>ritual feasts and marriage ceremonies</strong>.</p>
<h3>Cultural and Religious Context</h3>
<p>The ritualistic elements are embedded in the cultural and ceremonial contexts where these ensembles perform, rather than in specific performance practices or staging. The music serves to enhance and sanctify important life events and religious observances.</p>
<p>These traditions maintain their connection to ritual and ceremony through their continued use in traditional celebrations and their preservation of sacred musical structures and practices.</p>` }} />
      </div>
    </article>
  );
};

export default SmallEnsemble030704RitualisticElementsPage;
