import React from 'react';
import { Link } from 'react-router-dom';

const Classical0202OrganologyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Organology</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Organology
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
<p>The major organological shift of the Classical era enabled the expressive dynamic range central to the new aesthetic. This period witnessed fundamental changes in instrument construction and function that directly supported the Classical ideals of clarity, balance, and expressive nuance.</p>
</section>
<section id="keyboard-transition">
<h2>The Great Keyboard Transition</h2>
<p>The most significant organological development of the Classical era was the transition from harpsichord to piano.</p>
<h3>From Harpsichord to Fortepiano</h3>
<div className="comparison-grid">
<div className="instrument-comparison">
<h4>Harpsichord (Baroque Era)</h4>
<ul>
<li><strong>Sound Production:</strong> Strings plucked by quills</li>
<li><strong>Dynamic Control:</strong> Terraced dynamics only</li>
<li><strong>Expression:</strong> Limited dynamic variation</li>
<li><strong>Touch Sensitivity:</strong> No touch sensitivity</li>
</ul>
</div>
<div className="instrument-comparison">
<h4>Fortepiano (Classical Era)</h4>
<ul>
<li><strong>Sound Production:</strong> Strings struck by hammers</li>
<li><strong>Dynamic Control:</strong> Continuous dynamic range</li>
<li><strong>Expression:</strong> Touch-sensitive dynamics</li>
<li><strong>Compositional Impact:</strong> Enabled crescendo and diminuendo</li>
</ul>
</div>
</div>
<h3>Impact on Composition</h3>
<p>The piano allowed composers to write precisely noted <strong>crescendo</strong> and <strong>diminuendo</strong> passages, fundamentally changing the expressive possibilities of keyboard music and chamber music involving piano.</p>
</section>
<section id="orchestral-function">
<h2>Evolution of Orchestral Function</h2>
<p>The Classical era saw a fundamental shift in how orchestral instruments were employed.</p>
<h3>From Doubling to Independence</h3>
<p>Woodwind and brass instruments transitioned from mainly doubling strings (as in the Baroque era) to holding independent roles, leading to a richer and more balanced sound.</p>
<h4>Baroque Approach</h4>
<ul>
<li>Winds primarily doubled string parts</li>
<li>Limited independent melodic material</li>
<li>Basso continuo provided harmonic foundation</li>
</ul>
<h4>Classical Innovation</h4>
<ul>
<li>Independent wind and brass parts</li>
<li>Melodic material shared between sections</li>
<li>Written-out accompaniment parts</li>
<li>Balanced orchestral texture</li>
</ul>
</section>
<section id="transposing-instruments">
<h2>Transposing Instruments</h2>
<p>Candidates must understand and be able to transpose parts for common orchestral instruments in this era.</p>
<h3>Common Transposing Instruments</h3>
<div className="transposition-grid">
<div className="instrument-transposition">
<h4>Clarinets</h4>
<p><strong>B♭ Clarinet:</strong> Sounds a major 2nd lower than written</p>
<p><strong>A Clarinet:</strong> Sounds a minor 3rd lower than written</p>
</div>
<div className="instrument-transposition">
<h4>Horns</h4>
<p><strong>Horn in F:</strong> Sounds a perfect 5th lower than written</p>
<p><strong>Horn in E♭:</strong> Sounds a major 6th lower than written</p>
</div>
<div className="instrument-transposition">
<h4>Trumpets</h4>
<p><strong>Trumpet in B♭:</strong> Sounds a major 2nd lower than written</p>
<p><strong>Trumpet in D:</strong> Sounds a major 2nd higher than written</p>
</div>
</div>
<h3>Concert Pitch Understanding</h3>
<p>Students must be able to write short musical fragments for these transposing instruments at their correct sounding pitch (concert pitch).</p>
</section>
<section id="obsolete-terminology">
<h2>Baroque vs. Classical Terminology</h2>
<p>The Baroque structural terms are distinct from typical Classical ensemble structure and are generally considered obsolete terminology for the Classical period.</p>
<h3>Baroque Terms (Not Applicable to Classical)</h3>
<ul>
<li><strong>Ripieno:</strong> Full ensemble in Baroque concerto grosso</li>
<li><strong>Concertino:</strong> Solo group in Baroque concerto grosso</li>
<li><strong>Basso Continuo:</strong> Improvised harmonic accompaniment</li>
</ul>
<h3>Classical Approach</h3>
<ul>
<li><strong>Written-out parts:</strong> All parts fully notated</li>
<li><strong>Balanced sections:</strong> Equal importance given to different orchestral sections</li>
<li><strong>Harmonic clarity:</strong> Clear harmonic progressions without continuo</li>
</ul>
</section>
<section id="instrument-development">
<h2>Specific Instrument Developments</h2>
<h3>String Instruments</h3>
<ul>
<li><strong>Violin family:</strong> Standardized construction and playing techniques</li>
<li><strong>Bow development:</strong> Tourte bow enabled greater dynamic control</li>
<li><strong>String technology:</strong> Improved string materials for better tone</li>
</ul>
<h3>Wind Instruments</h3>
<ul>
<li><strong>Clarinet:</strong> Became standard orchestral instrument</li>
<li><strong>Horn:</strong> Hand-stopping techniques expanded chromatic possibilities</li>
<li><strong>Flute:</strong> Transition from wooden to metal construction began</li>
</ul>
<h3>Brass Instruments</h3>
<ul>
<li><strong>Natural horns and trumpets:</strong> Limited to harmonic series</li>
<li><strong>Crook system:</strong> Allowed different keys but limited chromatic playing</li>
<li><strong>Hand-stopping:</strong> Technique for producing chromatic notes on horn</li>
</ul>
</section>
<section id="chamber-music-organology">
<h2>Chamber Music Organology</h2>
<p>The rise of chamber music required instruments capable of intimate expression and balance.</p>
<h3>String Quartet Ideal</h3>
<ul>
<li><strong>Homogeneous timbre:</strong> All instruments from violin family</li>
<li><strong>Balanced ranges:</strong> Overlapping but distinct registers</li>
<li><strong>Equal partnership:</strong> Each instrument capable of melody and accompaniment</li>
</ul>
<h3>Piano in Chamber Music</h3>
<ul>
<li><strong>Dynamic flexibility:</strong> Could match string dynamics</li>
<li><strong>Harmonic completeness:</strong> Capable of full harmonic support</li>
<li><strong>Melodic capability:</strong> Equal partner in musical dialogue</li>
</ul>
</section>
<section id="assessment-points">
<h2>Key Assessment Points</h2>
<h3>Students should be able to:</h3>
<ul>
<li>Explain the significance of the harpsichord to fortepiano transition</li>
<li>Understand how dynamic control influenced Classical composition</li>
<li>Identify the shift from Baroque doubling to Classical independence</li>
<li>Transpose parts for common Classical transposing instruments</li>
<li>Distinguish between Baroque and Classical orchestral terminology</li>
<li>Recognize the organological requirements of chamber music</li>
<li>Understand the limitations of natural brass instruments</li>
</ul>
</section>
<section id="navigation-footer">
<h2>Continue Your Study</h2>
<div className="nav-grid">
<a className="nav-card" href="aos02-02-01-instrumentation.html">
<h3>← Previous: 2.1 Instrumentation</h3>
<p>Review Classical instrumentation and ensembles</p>
</a>
<a className="nav-card" href="aos02-02-03-vocal-techniques.html">
<h3>Next: 2.3 Vocal Techniques →</h3>
<p>Explore vocal techniques in Classical music</p>
</a>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default Classical0202OrganologyPage;
