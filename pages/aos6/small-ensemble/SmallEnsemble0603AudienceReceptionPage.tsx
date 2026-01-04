import React from 'react';
import { Link } from 'react-router-dom';

const SmallEnsemble0603AudienceReceptionPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/small-ensemble" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Small Ensemble</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Audience Reception</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Audience Reception
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>6.3. Audience Reception: How listeners and communities engage with and interpret the music.</h3>
<p>Audience engagement requires an understanding of the social environment and the methods by which the music is learned and shared.</p>
<ul>
<li> <strong>Social and Performance Contexts:</strong> Traditionally, performances occurred in courts, private homes, and teahouses. In the 20th century, following European influence, takht ensembles began playing in <strong>concert halls</strong> and were disseminated widely via <strong>radio, television, and film</strong>. Candidates must comment on these contexts.</li>
<li> <strong>Transmission and Learning:</strong> Historically, music transmission was often <strong>oral/aural</strong> (by listening and imitation), such as the <strong>guru-shishya</strong> (teacher-disciple) system in India or informal learning in Chinese amateur clubs. This contrasts with modern study in conservatoires using formal <strong>notation</strong> systems like Western staff notation or <strong>cipher notation</strong> (numbers 1-7 representing pitches).</li>
</ul>
<p>&gt; [PLACEHOLDER 2: Image or Diagram illustrating Chinese <strong>Cipher Notation</strong> (numbered scale degrees), representing a system of musical transmission different from Western staff notation.]</p>` }} />
      </div>
    </article>
  );
};

export default SmallEnsemble0603AudienceReceptionPage;
