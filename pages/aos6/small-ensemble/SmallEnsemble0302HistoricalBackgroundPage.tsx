import React from 'react';
import { Link } from 'react-router-dom';

const SmallEnsemble0302HistoricalBackgroundPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/small-ensemble" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Small Ensemble</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Historical Background</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Historical Background
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>3.2. Historical Background: The evolution of the style or tradition and its socio-political influences.</h3>
<p>This covers how the musical traditions evolved and where they fit socially and historically.</p>
<ul>
<li> <strong>Transmission of Music:</strong> A key element is the method by which music is passed down. While Western music relies heavily on staff notation, many non-Western traditions rely on <strong>oral/aural transmission</strong>. For instance, Hindustani classical music utilizes the <em>guru-shishya</em> system (teacher-disciple).</li>
<li> <strong>Traditional vs. Modern Context (Chinese <em>Sizhu</em>):</strong> The Chinese <strong>Silk and Bamboo</strong> tradition has undergone significant evolution. It was originally characterized by being played by <strong>amateur musicians in tea-houses</strong> [67, 18(a)]. However, it has evolved into <strong>pure entertainment music</strong>, now performed by professional musicians in contexts like <strong>recording studios, TV, commercial settings, dance halls, and films</strong> [67, 18(b)].</li>
<li> <strong>Specific Theory:</strong> These traditions rely on complex non-Western musical systems:</li>
<li> <strong>India:</strong> Music is built upon the concept of <strong>rāga</strong> (the melodic framework) and <strong>tāla</strong> (the rhythmic cycle).</li>
<li> <strong>Arab World:</strong> Music uses the <strong>maqām</strong> system (melodic modes) and <strong>īqā'āt</strong> (rhythmic modes).</li>
<li> <strong>China:</strong> The music frequently uses the <strong>pentatonic scale</strong>.</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default SmallEnsemble0302HistoricalBackgroundPage;
