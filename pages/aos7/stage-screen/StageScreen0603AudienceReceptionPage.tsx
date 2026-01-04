import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen0603AudienceReceptionPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Audience Reception</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Audience Reception
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>6.3. Audience Reception: How listeners and communities engage with and interpret the music.</h3>
<p>Audience reception in this area is fundamentally linked to the visual experience and narrative context.</p>
<ul>
<li> <strong>Interpretation through Synchronisation:</strong> Listeners interpret the music by relating the sound palette and musical features directly to the visual action on screen, scene, or emotion. This involves recognizing techniques like <strong>leitmotif development</strong> and <strong>rhythmic ostinatos</strong> that match the pace of the storyline.</li>
<li> <strong>Context of Performance:</strong> Performance contexts differ by genre:</li>
<li> <strong>Film/Ballet:</strong> Performed in cinemas or theatres (e.g., West End, Broadway), often featuring full orchestras, elaborate lighting, and projected visuals.</li>
<li> <strong>Computer Game Music:</strong> This is unique as the music is integrated into an interactive medium; the audience (player) influences the music, which uses <strong>adaptive music</strong> principles.</li>
<li> <strong>Engagement:</strong> Candidates are required to listen with <strong>careful attention to detail</strong> and develop their <strong>recognition and understanding of musical features and concepts</strong> using appropriate terminology in response to these extracts.</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default StageScreen0603AudienceReceptionPage;
