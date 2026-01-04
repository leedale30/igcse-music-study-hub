import React from 'react';
import { Link } from 'react-router-dom';

const Baroque0307PerformancePracticePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/baroque" className="hover:text-sky-600 dark:hover:text-sky-400">Baroque Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Performance Practice</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Performance Practice
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 1 • Baroque Music
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
        [&_.assessment-section]:bg-amber-50 [&_.assessment-section]:dark:bg-amber-900/20 [&_.assessment-section]:border [&_.assessment-section]:border-amber-200 [&_.assessment-section]:dark:border-amber-800
        [&_.definition-section]:bg-sky-50 [&_.definition-section]:dark:bg-sky-900/20 [&_.definition-section]:border [&_.definition-section]:border-sky-200 [&_.definition-section]:dark:border-sky-800
        [&_.characteristic-item]:bg-white [&_.characteristic-item]:dark:bg-slate-700 [&_.characteristic-item]:rounded-lg [&_.characteristic-item]:p-4 [&_.characteristic-item]:mb-4 [&_.characteristic-item]:border [&_.characteristic-item]:border-slate-200 [&_.characteristic-item]:dark:border-slate-600
        [&_.example-item]:bg-white [&_.example-item]:dark:bg-slate-700 [&_.example-item]:rounded-lg [&_.example-item]:p-4 [&_.example-item]:mb-4 [&_.example-item]:border [&_.example-item]:border-slate-200 [&_.example-item]:dark:border-slate-600
      ">
        <div dangerouslySetInnerHTML={{ __html: `<h3>3.7. Performance Practice: Traditional ways of interpreting and presenting music.</h3>
<p>Candidates must understand the typical aspects of Baroque performance practice.</p>
<ul>
<li> <strong>Basso Continuo:</strong> This is a primary distinguishing feature. It involves a bass line played by an instrument like a cello, double bass, or bassoon, along with a chord-playing instrument (harpsichord, organ, or lute) that improvises chords. The improvisation is often guided by a <strong>figured bass</strong> (numbers written below the notes).</li>
<li> <strong>Ensemble Direction:</strong> The harpsichord player often led the Baroque orchestra, as formal conductors were not commonly used yet.</li>
<li> <strong>Instrumentation:</strong> Orchestras were small and built around strings and continuo, sometimes with added wind (flutes, oboes) or brass (trumpets, horns) in small numbers.</li>
<li> <strong>Dynamics:</strong> <strong>Terraced dynamics</strong> (sudden changes from loud to quiet, or vice versa) were characteristic, as they stemmed from the physical capabilities of instruments and performance conventions.</li>
<li> <strong>Ornamentation:</strong> Performers were expected to add <strong>ornamentation</strong> (trills, turns, etc.) or extra notes, giving the music an ornate and decorated feel.</li>
<li> <strong>Virtuosity:</strong> The solo part in a concerto (like Vivaldi’s <em>Spring</em>) is typically much more <strong>virtuosic</strong> than the orchestral parts, often at a higher pitch.</li>
</ul>
<h4>3.7.1.1. Staging</h4>
<ul>
<li> <strong>Opera:</strong> A SECULAR drama set to music, which was acted and sung with costumes, scenery, and props, performed in theaters.</li>
<li> <strong>Oratorio:</strong> A SACRED setting, which was <em>not</em> staged, and performed mainly in churches or concert halls.</li>
</ul>
<h4>3.7.1.2. Performer/audience relationship</h4>
<p>Music performed in <strong>PRIVATE SALONS</strong> involved a small audience.</p>
<h4>3.7.1.3. Attire</h4>
<p>NOT APPLICABLE.</p>
<h4>3.7.1.4. Ritualistic elements</h4>
<p>Sacred genres such as <strong>Mass</strong> and <strong>Oratorio</strong> served a ritualistic function in church settings.</p>` }} />
      </div>
    </article>
  );
};

export default Baroque0307PerformancePracticePage;
