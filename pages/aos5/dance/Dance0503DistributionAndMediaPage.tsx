import React from 'react';
import { Link } from 'react-router-dom';

const Dance0503DistributionAndMediaPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Distribution And Media</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Distribution And Media
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>5.3. Distribution &amp; Media: How music is shared and consumed—streaming platforms, physical media, social media.</h3>
<p>All music in this area is heavily reliant on modern commercial distribution and media.</p>
<ul>
<li> <strong>Commercial Distribution:</strong> Recordings of all three dance styles (Tango, Salsa, and EDM) are widely available in <strong>digital, streaming, and physical formats</strong>.</li>
<li> <strong>Performance Context:</strong> EDM is primarily consumed through large-scale performances (live concerts/shows), club nights (DJ sets), and personal digital listening via streaming.</li>
<li> <strong>Learning Resources:</strong> Digital platforms are integral to the learning process for this area. <strong>YouTube</strong> is suggested as a source for finding further listening examples and information about the characteristics of these styles. <strong>BBC Sounds</strong> is also a recommended streaming service for accessing global contemporary music examples.</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default Dance0503DistributionAndMediaPage;
