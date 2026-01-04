import React from 'react';
import { Link } from 'react-router-dom';

const SmallEnsemble0301CulturalFunctionPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/small-ensemble" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Small Ensemble</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Cultural Function</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Cultural Function
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>3.1. Cultural Function: The role music plays in society.</h3>
<p>This section explores the crucial roles that music from these specific small ensembles plays within its native society, moving beyond pure entertainment.</p>
<h4>3.1.1.1. Ritual</h4>
<p>Music is often tied to <strong>ritualistic or auspicious occasions</strong> in these cultures. For example, in the Hindustani tradition, musicians such as the <em>Langās</em> and <em>Mānganiyārs</em> were traditionally hired to perform for important family and religious events, including <strong>ritual feasts and marriage ceremonies</strong>.</p>
<h4>3.1.1.2. Celebration</h4>
<p>All three ensemble types serve a function of celebration and social gathering:</p>
<ul>
<li> <strong>Hindustani Music:</strong> Music performed by <em>Langās</em> and <em>Mānganiyārs</em> musicians was traditionally played for <strong>mangal</strong> (joyous and auspicious occasions), such as birthdays and religious celebrations.</li>
<li> <strong>Chinese Music:</strong> Silk and Bamboo (<em>Sizhu</em>) music was traditionally performed in social settings like <strong>tea-houses</strong> [67, 18(a)].</li>
</ul>
<h4>3.1.1.3. work, protest</h4>
<p>NOT APPLICABLE.</p>
<h4>3.1.1.4. healing</h4>
<p>NOT APPLICABLE.</p>
<h4>3.1.1.5. Social Identity</h4>
<p>The music of these ensembles is integral to reflecting and maintaining distinct <strong>social and regional identity</strong>. Candidates are studying the characteristic sounds and structures that define Chinese, Indian, and Arab musical language.</p>` }} />
      </div>
    </article>
  );
};

export default SmallEnsemble0301CulturalFunctionPage;
