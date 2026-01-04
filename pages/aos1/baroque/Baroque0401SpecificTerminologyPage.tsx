import React from 'react';
import { Link } from 'react-router-dom';

const Baroque0401SpecificTerminologyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/baroque" className="hover:text-sky-600 dark:hover:text-sky-400">Baroque Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Specific Terminology - Baroque Music Language, Literacy, And Theory</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Specific Terminology - Baroque Music Language, Literacy, And Theory
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 1 • Baroque Music
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
        [&_.assessment-section]:bg-amber-50 [&_.assessment-section]:dark:bg-amber-900/20 [&_.assessment-section]:border [&_.assessment-section]:border-amber-200 [&_.assessment-section]:dark:border-amber-800
        [&_.definition-section]:bg-sky-50 [&_.definition-section]:dark:bg-sky-900/20 [&_.definition-section]:border [&_.definition-section]:border-sky-200 [&_.definition-section]:dark:border-sky-800
        [&_.characteristic-item]:bg-white [&_.characteristic-item]:dark:bg-slate-700 [&_.characteristic-item]:rounded-lg [&_.characteristic-item]:p-4 [&_.characteristic-item]:mb-4 [&_.characteristic-item]:border [&_.characteristic-item]:border-slate-200 [&_.characteristic-item]:dark:border-slate-600
        [&_.example-item]:bg-white [&_.example-item]:dark:bg-slate-700 [&_.example-item]:rounded-lg [&_.example-item]:p-4 [&_.example-item]:mb-4 [&_.example-item]:border [&_.example-item]:border-slate-200 [&_.example-item]:dark:border-slate-600
      ">
        <div dangerouslySetInnerHTML={{ __html: `<h2>Genre-specific vocabulary for Baroque Music (c. 1600–1750)</h2>
<p>You must acquire and use terminology specific to Baroque structure, ensemble, and performance practices to accurately describe music from this era.</p>
<h3>Ensemble &amp; Roles</h3>
<p>The ensemble is divided into the <strong>ripieno</strong> (the full orchestral group, also called <em>tutti</em>) and the <strong>concertino</strong> (the small group of soloists in a concerto grosso). The <strong>ripieno</strong> performs the main <strong>ritornello</strong> theme.</p>
<h3>Structure</h3>
<p><strong>Ritornello form</strong> is a common structure, especially in concertos, where the orchestral <strong>ritornello</strong> theme alternates with solo sections called <strong>episodes</strong>. You must also know structures like <strong>fugue</strong> and <strong>French overture</strong>.</p>
<h3>Texture &amp; Devices</h3>
<p><strong>Polyphonic</strong> or <strong>contrapuntal</strong> texture is highly characteristic, often involving <strong>imitation</strong>. Other essential devices include <strong>suspensions</strong>, <strong>sequence</strong>, and the rhythmic device <strong>hemiola</strong>.</p>
<h3>Dynamics</h3>
<p>You must know <strong>terraced dynamics</strong>, which refers to sudden changes from loud (<em>forte</em>) to quiet (<em>piano</em>) or vice versa, stemming from performance conventions of the time.</p>
<h3>Ornaments</h3>
<p><strong>Ornamentation</strong> is central to Baroque melody. Specific ornaments you must be able to recognize and name include the <strong>trill</strong> and <strong>mordent</strong>.</p>
<p><a href="../aos01-04-language-literacy-and-theory.html">← Back to Language, Literacy, and Theory</a></p>
<p><a href="aos01-04-02-lyrics-text-analysis.html">Next: Lyrics &amp; Text Analysis →</a></p>` }} />
      </div>
    </article>
  );
};

export default Baroque0401SpecificTerminologyPage;
