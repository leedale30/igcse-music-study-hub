import React from 'react';
import { Link } from 'react-router-dom';

const Dance0501MusicTechnologyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Music Technology</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Music Technology
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>5.1. Music Technology: Tools used in production—DAWs, synthesizers, samplers, effects.</h3>
<p>Music technology is <strong>central</strong> to the composition and performance of contemporary dance music, especially Electronic Dance Music (EDM).</p>
<ul>
<li> <strong>Electronic Instrumentation:</strong> EDM relies heavily on electronic instruments such as <strong>synthesizers</strong> and <strong>drum machines</strong>.</li>
<li> <strong>Production Tools:</strong> Digital Audio Workstations (<strong>DAWs</strong>) are the software platforms used for composing, arranging, mixing, and mastering EDM tracks. Candidates engaging in composition (Component 3) are encouraged to use open-source software like <strong>LMMS</strong> to imitate these tracks.</li>
<li> <strong>Compositional Devices:</strong> The core musical material in EDM is built upon technological devices:</li>
<li> <strong>Sample:</strong> A recorded portion of music or sound incorporated into the composition.</li>
<li> <strong>Loop:</strong> A short, repeated pattern of music that forms the foundation of the track, often providing continuous rhythmic or melodic material.</li>
<li> <strong>Audio Effects:</strong> Digital effects are vital for shaping the texture, sound quality, and atmosphere of the music. You must recognize and understand the function of:</li>
<li> <strong>Chorus:</strong> An effect that duplicates a sound with slight pitch variations to create a thicker, swirling effect.</li>
<li> <strong>Reverb:</strong> Simulates reflections of sound in a space, adding depth.</li>
<li> <strong>Delay:</strong> Creates a controlled echo effect.</li>
<li> <strong>Filtering:</strong> A production effect used to selectively alter frequencies, crucial for shaping sound and atmosphere, often utilized during "builds".</li>
</ul>
<ul>
<li>  [PLACEHOLDER: IMAGE: A visual representation of a Digital Audio Workstation (DAW) interface displaying multiple tracks utilizing synthesized sounds, loops, and effects.]</li>
<li>  [YOUTUBE LINK: LMMS open-source software download link for composing EDM tracks: https://lmms.io/download]</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default Dance0501MusicTechnologyPage;
