import React from 'react';
import { Link } from 'react-router-dom';

const Dance030702PerformerAudienceRelationshipPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Performer-Audience Relationship - Aosmusic For Dance</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Performer-Audience Relationship - Aosmusic For Dance
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
        <div dangerouslySetInnerHTML={{ __html: `<p>The relationship between performers and audiences varies significantly between Latin American dance music and EDM:</p>
<ul>
<li><strong>Latin American Styles (Tango/Salsa):</strong>
<ul>
<li>Live ensemble performances create direct interaction between musicians and dancers</li>
<li>Musicians respond to the energy and movement of the dancers</li>
<li>Traditional social dance settings foster community participation</li>
</ul>
</li>
<li><strong>EDM:</strong>
<ul>
<li>DJ/producer acts as intermediary between recorded music and audience</li>
<li>Club and festival environments emphasize collective experience</li>
<li>Technology enables real-time manipulation of pre-recorded elements</li>
</ul>
</li>
</ul>
<p>Both styles prioritize the physical response of the audience through dance, but achieve this through different performance approaches.</p>` }} />
      </div>
    </article>
  );
};

export default Dance030702PerformerAudienceRelationshipPage;
