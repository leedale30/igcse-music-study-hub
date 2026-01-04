import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen0501MusicTechnologyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Music Technology</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Music Technology
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>5.1. Music Technology: Tools used in production—DAWs, synthesizers, samplers, effects.</h3>
<p>Music technology is integral to contemporary composition for film, television, and computer games, often expanding the palette beyond traditional orchestral instruments.</p>
<ul>
<li> <strong>Instrumentation and Sound Generation:</strong> Composers utilize <strong>synthesizers</strong> to create new sounds, often blending them with acoustic instruments. The <strong>drum machine</strong> is employed for rhythmic precision, especially in generating <strong>loops</strong> and <strong>ostinatos</strong>.</li>
<li> <strong>Compositional Tools:</strong> <strong>Digital Audio Workstations (DAWs)</strong> are the standard software used for composing, arranging, mixing, and mastering complex scores for visual media.</li>
<li> <strong>Audio Effects:</strong> Digital effects are critical for shaping the atmosphere and texture of the sound, and you must recognize them aurally:</li>
<li> <strong>Reverb</strong> and <strong>delay</strong> are used to add space and depth.</li>
<li>  The use of <strong>sample</strong> and <strong>loop</strong> is foundational in game music and often integral to developing a score efficiently.</li>
</ul>
<ul>
<li>  [PLACEHOLDER: IMAGE of a professional Digital Audio Workstation (DAW) interface displaying a complex arrangement of MIDI and audio tracks used for film scoring.]</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default StageScreen0501MusicTechnologyPage;
