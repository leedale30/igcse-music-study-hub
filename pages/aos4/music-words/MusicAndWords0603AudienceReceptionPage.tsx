import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0603AudienceReceptionPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Audience Reception</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Audience Reception
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>6.3. Audience Reception: How listeners and communities engage with and interpret the music.</h3>
<p>Audience reception varies significantly based on the performance context of the genre.</p>
<ul>
<li> <strong>Engagement via Media:</strong> Modern vocal music is globally distributed through broadcast media and digital streaming platforms, allowing for widespread access and engagement.</li>
<li> <strong>Context of Performance:</strong></li>
<li> <strong>Art Song/Choirs:</strong> Historically performed in intimate settings, courts, or churches; modern reception includes concert halls and recorded media.</li>
<li> <strong>Musicals:</strong> Primarily received in large theatres (e.g., West End, Broadway), involving complex production elements like automated sets and orchestral/band accompaniment.</li>
<li> <strong>Popular Song:</strong> Consumed in venues ranging from intimate clubs to large-scale stadium concerts.</li>
<li> <strong>Interpretation:</strong> Listeners interpret the narrative and emotional arc by following the specific structural signals (verse-to-chorus contrast, dramatic bridge sections) and the way the music reinforces the text. Candidates, specifically, must demonstrate <strong>aural awareness, perception, and discrimination</strong> by recognizing musical features and describing them using appropriate terminology.</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0603AudienceReceptionPage;
