import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0501MusicTechnologyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Music Technology</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Music Technology
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 4 • Music and Words
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
<p>Modern music technology is essential to the sound of contemporary vocal genres, specifically <strong>Popular Song</strong> and <strong>Songs from Musicals</strong>.</p>
<ul>
<li> <strong>Electronic Instrumentation:</strong> Popular song typically utilizes <strong>synthesizers</strong> and <strong>drum machines</strong>. Songs from musicals may blend a traditional orchestra with contemporary electronic instruments and effects to suit the show's style.</li>
<li> <strong>Audio Effects:</strong> Composers and producers frequently employ digital effects to shape and enhance the vocal and instrumental parts. You must recognize the sound and function of key effects:</li>
<li> <strong>Chorus:</strong> An effect that duplicates a sound with slight variations in pitch and timing, creating a fuller, richer sound.</li>
<li> <strong>Reverb:</strong> Simulates the natural acoustic reflections of sound in a space, adding depth and spaciousness.</li>
<li> <strong>Delay:</strong> Creates an echo effect by repeating a sound after a short interval.</li>
<li> <strong>Sample:</strong> A recorded portion of music or sound that is incorporated into a composition.</li>
</ul>
<ul>
<li>  [PLACEHOLDER: DIAGRAM showing a Digital Audio Workstation (DAW) interface with labeled tracks for vocals, synthesized instruments, and effects Sends (Reverb/Delay).]</li>
<li>  [YOUTUBE LINK: Example of a popular song vocal track with clearly audible effects (Chorus and Reverb) applied.]</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0501MusicTechnologyPage;
