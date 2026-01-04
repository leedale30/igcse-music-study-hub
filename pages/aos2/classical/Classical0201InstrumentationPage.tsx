import React from 'react';
import { Link } from 'react-router-dom';

const Classical0201InstrumentationPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Instrumentation</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Instrumentation
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 2 • Classical Music
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
        <div dangerouslySetInnerHTML={{ __html: `<section id="introduction">
<h2>Introduction</h2>
<p>The Classical period saw the standardization and measured growth of the orchestra and the elevation of intimate chamber ensembles. This era marked a significant shift from the Baroque approach to instrumentation, emphasizing balance, clarity, and the independence of different instrumental sections.</p>
</section>
<section id="orchestral-composition">
<h2>Orchestral Composition</h2>
<p>The orchestra increased in size compared to the Baroque era, notably expanding the capability and independence of the wind and brass sections.</p>
<h3>String Section Foundation</h3>
<p>The <strong>string section</strong> (violins, violas, cellos, double basses) remained the foundational core, often dominating the melodic lines. However, unlike the Baroque era, strings now shared melodic responsibility with other sections.</p>
<h3>Expanded Wind Section</h3>
<p>Woodwind and brass instruments transitioned from mainly doubling strings (as in the Baroque era) to holding independent roles, leading to a richer and more balanced sound. The typical Classical orchestra included:</p>
<ul>
<li><strong>Woodwinds:</strong> Pairs of flutes, oboes, clarinets, and bassoons</li>
<li><strong>Brass:</strong> Pairs of horns and trumpets</li>
<li><strong>Percussion:</strong> Timpani (usually a pair)</li>
</ul>
</section>
<section id="chamber-ensembles">
<h2>Chamber Ensembles</h2>
<p>Instrumental music intended for small venues gained massive importance. Chamber music is defined by <strong>chamber music ensembles</strong> having precisely <strong>one performer on each part</strong>.</p>
<h3>Key Chamber Ensembles</h3>
<div className="ensemble-grid">
<div className="ensemble">
<h4>String Quartet</h4>
<p><strong>Instrumentation:</strong> Two violins, viola, cello</p>
<p>The most important chamber ensemble of the Classical era, perfected by Haydn and Mozart.</p>
</div>
<div className="ensemble">
<h4>Piano Trio</h4>
<p><strong>Instrumentation:</strong> Piano, violin, cello</p>
<p>Combined keyboard and strings in intimate musical conversation.</p>
</div>
<div className="ensemble">
<h4>Wind Quintet</h4>
<p><strong>Instrumentation:</strong> Flute, oboe, clarinet, horn, bassoon</p>
<p>Showcased the independence and expressive capabilities of wind instruments.</p>
</div>
</div>
</section>
<section id="focus-work-instrumentation">
<h2>Focus Work Instrumentation: Mozart K. 452</h2>
<p>The prescribed Focus Work, Mozart's <em>Quintet for piano and winds in E flat major</em>, exemplifies the expressive use of winds, scored unusually for:</p>
<div className="instrumentation-detail">
<h3>Unique Scoring</h3>
<ul>
<li><strong>Piano</strong> - Acts as an equal partner rather than accompanist</li>
<li><strong>Oboe</strong> - Provides lyrical melodic lines and harmonic support</li>
<li><strong>Clarinet</strong> - Offers warm, expressive timbres across its range</li>
<li><strong>Horn</strong> - Contributes both melodic and harmonic elements</li>
<li><strong>Bassoon</strong> - Provides bass foundation and melodic participation</li>
</ul>
<h3>Revolutionary Approach</h3>
<p>In this ensemble, the piano acts as an equal partner to the winds rather than simply an accompanist. This represents a significant departure from the typical keyboard-dominated texture of earlier periods.</p>
</div>
</section>
<section id="vocal-classification">
<h2>Vocal Classification</h2>
<p>For analysis of vocal genres (like opera or oratorio), candidates are required to recognize standard voice types:</p>
<div className="voice-types">
<div className="voice-type">
<h3>Soprano</h3>
<p>Highest female voice, often assigned leading roles and coloratura passages</p>
</div>
<div className="voice-type">
<h3>Alto</h3>
<p>Lower female voice, providing harmonic support and character roles</p>
</div>
<div className="voice-type">
<h3>Tenor</h3>
<p>Higher male voice, frequently the heroic male lead in operas</p>
</div>
<div className="voice-type">
<h3>Bass</h3>
<p>Lowest male voice, often portraying authority figures or comic characters</p>
</div>
</div>
</section>
<section id="instrumental-characteristics">
<h2>Classical Instrumental Characteristics</h2>
<h3>Balance and Proportion</h3>
<p>Classical instrumentation emphasized balance between sections, with no single instrument or section dominating throughout an entire work.</p>
<h3>Clarity of Texture</h3>
<p>Instruments were used to create clear, transparent textures where individual lines could be easily distinguished.</p>
<h3>Functional Harmony</h3>
<p>Instrumentation supported the clear harmonic progressions characteristic of Classical style, with instruments assigned specific harmonic roles.</p>
</section>
<section id="assessment-points">
<h2>Key Assessment Points</h2>
<h3>Students should be able to:</h3>
<ul>
<li>Identify the standard Classical orchestra instrumentation</li>
<li>Distinguish between orchestral and chamber music ensembles</li>
<li>Recognize the unique instrumentation of Mozart K. 452</li>
<li>Understand the principle of "one performer per part" in chamber music</li>
<li>Identify standard vocal classifications in Classical vocal music</li>
<li>Explain the increased independence of wind and brass sections</li>
<li>Compare Classical orchestration with Baroque practices</li>
</ul>
</section>
<section id="navigation-footer">
<h2>Continue Your Study</h2>
<div className="nav-grid">
<a className="nav-card" href="aos02-02-02-organology.html">
<h3>Next: 2.2 Organology →</h3>
<p>Explore the classification and development of Classical instruments</p>
</a>
<a className="nav-card" href="../aos02-02-sound-sources-and-techniques.html">
<h3>← Back to Overview</h3>
<p>Return to Sound Sources and Techniques overview</p>
</a>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default Classical0201InstrumentationPage;
