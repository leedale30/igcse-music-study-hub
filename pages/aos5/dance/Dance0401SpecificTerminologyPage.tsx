import React from 'react';
import { Link } from 'react-router-dom';

const Dance0401SpecificTerminologyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Specific Terminology - Music For Dance Language, Literacy, And Theory</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Specific Terminology - Music For Dance Language, Literacy, And Theory
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
        <div dangerouslySetInnerHTML={{ __html: `<h2>Genre-specific vocabulary</h2>
<p>You must acquire and apply specialized terminology to articulate the rhythmic drive, instrumentation, and structural components unique to these dance styles.</p>
<h3>Rhythmic Devices</h3>
<p><strong>Syncopation</strong> is crucial, referring to rhythms that emphasize the weak beats of the bar, giving a 'jumpy' or off-beat feel. Specific rhythmic patterns mandatory for study include the <strong>Habanera rhythm</strong>, <strong>marcado</strong>, <strong>forward clave</strong>, and <strong>reverse clave</strong>. The <strong>four-to-the-floor</strong> pattern (kick drum on every beat in 4/4) defines EDM.</p>
<h3>Instrumental Terms</h3>
<p>Key instrumental terms necessary for describing Tango and Salsa include <strong>Bandoneon</strong> (the distinctive accordion-like instrument used in Tango), <strong>Clavés</strong> (hardwood sticks that play the fundamental rhythm of Salsa), <strong>Cuatro</strong> (a small Puerto Rican lute-like folk instrument used in Salsa), and instruments of the <strong>orquesta típica</strong> and <strong>salsa instruments</strong>.</p>
<h3>EDM/Technology</h3>
<p>Structural terms relating to electronic music tension and release: <strong>breakdown, build up, and drop</strong>. Production techniques and effects include <strong>sample, loop, chorus, reverb, delay, and filtering</strong>.</p>
<h3>Salsa Vocal/Structural</h3>
<p><strong>Call and response</strong> is a key musical device, often involving a lead vocalist and the <strong>coro</strong> (chorus singers). The <strong>anticipated bass pattern</strong> refers to a distinctive bass line rhythm that emphasizes off-beats in Salsa.</p>
<h3>Melodic Devices</h3>
<p>You must recognize the <strong>hook</strong> (a catchy, memorable sequence of notes) and <strong>riff</strong> (a short, repeated instrumental pattern).</p>
<p><a href="../aos05-04-language-literacy-and-theory.html">← Back to Language, Literacy, and Theory</a></p>
<p><a href="aos05-04-02-lyrics-text-analysis.html">Next: Lyrics &amp; Text Analysis →</a></p>` }} />
      </div>
    </article>
  );
};

export default Dance0401SpecificTerminologyPage;
