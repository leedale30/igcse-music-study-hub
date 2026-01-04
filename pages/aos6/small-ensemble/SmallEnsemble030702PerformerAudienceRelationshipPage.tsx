import React from 'react';
import { Link } from 'react-router-dom';

const SmallEnsemble030702PerformerAudienceRelationshipPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/small-ensemble" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Small Ensemble</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Performer/Audience Relationship - Music For Small Ensemble Performance Practice</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Performer/Audience Relationship - Music For Small Ensemble Performance Practice
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
        <div dangerouslySetInnerHTML={{ __html: `<p>The size of the ensemble (small, chamber-like) often facilitates a <strong>more intimate relationship</strong> with the audience than a large symphony orchestra.</p>
<h3>Traditional Settings</h3>
<p>Performances may take place in traditional settings such as:</p>
<ul>
<li><strong>Teahouses</strong> (Chinese <em>Sizhu</em> ensembles)</li>
<li><strong>Courts</strong> and private residences (Hindustani classical music)</li>
<li>Traditional cultural venues (Arab <em>takht</em> ensembles)</li>
</ul>
<h3>Modern Concert Halls</h3>
<p>Contemporary performances have moved to modern concert halls, cultural festivals, and educational institutions, while maintaining the intimate character that defines small ensemble music.</p>
<h3>Interactive Elements</h3>
<p>The small ensemble format allows for:</p>
<ul>
<li>Direct communication between performers and audience</li>
<li>Appreciation of individual instrumental techniques</li>
<li>Cultural exchange and educational opportunities</li>
<li>Preservation of traditional performance practices in contemporary settings</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default SmallEnsemble030702PerformerAudienceRelationshipPage;
