import React from 'react';
import { Link } from 'react-router-dom';

const Dance0303MovementAndDancePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Movement And Dance</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Movement And Dance
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>3.3. Movement &amp; Dance: The physical embodiment of the music and its relationship with specific dance forms.</h3>
<p>Movement is the absolute core of this Area of Study, as candidates must understand how music drives specific dance styles.</p>
<ul>
<li> <strong>Rhythmic Foundation:</strong> Dance music requires <strong>consistent tempo</strong> and reliance on driving rhythms.</li>
<li> <strong>Latin Styles (Tango/Salsa):</strong> Characterized by strong <strong>syncopation</strong>, <em>offbeat rhythms</em>, and often beginning with an <strong>anacrusis</strong> (upbeat). Key rhythmic patterns include the <em>habanera</em> rhythm (Tango) and the distinctive beat of the <em>clavés</em> (Salsa).</li>
<li> <strong>EDM:</strong> Characterized by the <strong>four-to-the-floor</strong> kick drum pattern (a bass drum hit on every beat in 4/4 time).</li>
<li> <strong>Structural Elements for Movement:</strong> EDM uses compositional techniques to manipulate tension related to movement:</li>
<li> <strong>Builds and Drops:</strong> Creating <strong>tension</strong> (builds) followed by <strong>release</strong> (drops).</li>
<li> <strong>Loops and Repetition:</strong> Fundamental compositional techniques in EDM for continuous flow.</li>
</ul>
<ul>
<li>  [DIAGRAM: Notation showing the four-to-the-floor rhythm or the Habanera rhythm pattern used in Tango and early Salsa]</li>
<li>  [YOUTUBE LINK: Instructional video demonstrating a basic Salsa rhythm and clave pattern (Suggested contextual resource)]</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default Dance0303MovementAndDancePage;
