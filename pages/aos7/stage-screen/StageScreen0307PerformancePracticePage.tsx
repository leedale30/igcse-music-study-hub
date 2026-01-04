import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen0307PerformancePracticePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Performance Practice</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Performance Practice
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 7 • Music for Stage and Screen
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
<ul>
<li> <strong>Ballet:</strong> Requires full <strong>staging</strong> in a theatre, including sets, costumes, and elaborate choreography. The music must support the visual effects, projected visuals, puppetry, and automated sets. Orchestral ballet suites were arranged to be performed in concert <strong>without</strong> choreography.</li>
<li> <strong>Film:</strong> Music recording is highly technical, with composers traditionally conducting ensembles in studios to edited movie reels containing a <strong>timecode</strong> for synchronization.</li>
<li>  [PLACEHOLDER: IMAGE or DIAGRAM showing a composer/conductor working with a film reel and timecode in a recording studio.]</li>
</ul>
<h4>3.7.1.2. performer/audience relationship</h4>
<p>The distribution of music determines the audience relationship.</p>
<ul>
<li> <strong>Mass Media:</strong> Film music and game music are disseminated through <strong>radio, television, and film</strong>.</li>
<li> <strong>Live Performance:</strong> Ballet is performed in theatres (like the West End). Pop songs from musicals are performed in large live concerts/shows.</li>
<li> <strong>Synchronization:</strong> Coordination between audio and visuals is crucial in modern film scoring, making the process much easier than it had been previously.</li>
</ul>
<h4>3.7.1.3. attire</h4>
<p>NOT APPLICABLE.</p>
<h4>3.7.1.4. ritualistic elements</h4>
<p>As noted above, music for stage works may depict <strong>pagan rituals</strong>.</p>` }} />
      </div>
    </article>
  );
};

export default StageScreen0307PerformancePracticePage;
