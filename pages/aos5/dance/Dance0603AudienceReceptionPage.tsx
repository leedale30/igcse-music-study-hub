import React from 'react';
import { Link } from 'react-router-dom';

const Dance0603AudienceReceptionPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Audience Reception</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Audience Reception
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>6.3. Audience Reception: How listeners and communities engage with and interpret the music.</h3>
<p>Audience engagement is actively physical, defined by the venue and the global method of distribution. Candidates must possess the <em>aural awareness, perception, and discrimination</em> to analyze recorded extracts.</p>
<ul>
<li> <strong>Performance Contexts:</strong></li>
<li> <strong>Tango/Salsa:</strong> Initially associated with local, lower-middle-class community spaces (bars, cafés, bodegas, streets). Following globalization (via film, radio, and commercial recordings), they shifted to cosmopolitan public theatres, large stadium venues, and concert halls worldwide.</li>
<li> <strong>EDM:</strong> Engaged through <em>DJ sets</em> (mixing pre-recorded tracks) or <em>live production sets</em> (real-time manipulation using electronic instruments/software) in clubs and massive festivals.</li>
<li> <strong>Interpretation through Movement:</strong> The primary interpretation is physical movement and dance, influenced by the DJ's goal to create a continuous flow of music.</li>
<li> <strong>Global Transmission:</strong> All modern dance forms are widely distributed through <em>digital streaming platforms</em> (YouTube, Spotify, Apple Music), allowing for global access and recognition. EDM producers often learn through 'recreating' popular tracks, which acts as an entry point into a <em>community of practice</em>.</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default Dance0603AudienceReceptionPage;
