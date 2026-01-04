import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen0302HistoricalBackgroundPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Historical Background</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Historical Background
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>3.2. Historical Background: The evolution of the style or tradition and its socio-political influences.</h3>
<p>This area covers music from the beginning of the twentieth century to the modern day, tracking the profound influence of technology on music production:</p>
<ul>
<li> <strong>Early Film (Silent Era):</strong> In the early twentieth century, silent films relied on a <strong>live pianist, organist, or small instrumental ensemble</strong> in the movie theatre to enhance the action on screen.</li>
<li> <strong>Synchronized Sound:</strong> Experiments to synchronize audio failed until inventors discovered how to record sound directly onto rolls of film. <em>Don Juan</em> (1926) was the first full-length film to use this synchronized sound, but <em>The Jazz Singer</em> (1927) is famously known as the first ‘part-talkie’.</li>
<li> <strong>The Fully Scored Soundtrack:</strong> Max Steiner’s music for <em>King Kong</em> (1933) marked a revolution, becoming the first fully scored soundtrack for a feature-length motion picture. Steiner famously brought Richard Wagner’s operatic idea of the <strong>leitmotif</strong> (a recurring theme for a character or idea) into cinema.</li>
<li> <strong>Technological Expansion:</strong> Composers began using <strong>electronic synthesizers</strong> in the 1960s and 70s to expand the orchestral sound palette, or simply due to budget limitations. Electronic music alone can create "other-worldly atmospheres".</li>
<li> <strong>Game Music:</strong> Developed alongside technology, from simple analogue oscillators to complex compositions using MIDI, <strong>sampling</strong>, and eventually <strong>full orchestral arrangements</strong>. Modern scores incorporate professional software with internal <strong>timecodes</strong> for highly accurate synchronization.</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default StageScreen0302HistoricalBackgroundPage;
