import React from 'react';
import { Link } from 'react-router-dom';

const Dance0103MetrePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Metre</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Metre
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
        <div dangerouslySetInnerHTML={{ __html: `<div className="content-container">
<!-- Page Header -->
<section id="page-header">
<h1>Metre in Music for Dance</h1>
<h2>Area of Study 5: Music for Dance</h2>
<p className="element-definition">
<strong>Definition:</strong> The organization of beats into regular groups, indicated by time signatures
                </p>
</section>
<!-- Navigation to Other Elements -->
<section id="element-navigation">
<h3>Other Core Musical Elements</h3>
<div className="nav-grid">
<a href="../aos05-01-01-dynamics/aos05-01-01-dynamics.html">1. Dynamics</a>
<a href="../aos05-01-02-rhythm/aos05-01-02-rhythm.html">2. Rhythm</a>
<a href="../aos05-01-04-tempo/aos05-01-04-tempo.html">4. Tempo</a>
<a href="../aos05-01-05-melody/aos05-01-05-melody.html">5. Melody</a>
<a href="../aos05-01-06-harmony/aos05-01-06-harmony.html">6. Harmony</a>
<a href="../aos05-01-07-tonality/aos05-01-07-tonality.html">7. Tonality</a>
<a href="../aos05-01-08-texture/aos05-01-08-texture.html">8. Texture</a>
<a href="../aos05-01-09-timbre/aos05-01-09-timbre.html">9. Timbre</a>
<a href="../aos05-01-10-structure-form/aos05-01-10-structure-form.html">10. Structure/Form</a>
</div>
</section>
<!-- Key Characteristics -->
<section id="key-characteristics">
<h3>Key Characteristics of Metre in Music for Dance</h3>
<p>
                    Metre in Music for Dance provides the fundamental framework for movement and choreography. 
                    Different dance styles favor specific metres that support their characteristic movements and 
                    cultural traditions. Understanding metre is essential for both dancers and musicians.
                </p>
<div className="characteristics-grid">
<div className="characteristic-card">
<h4>Dance-Specific Metres</h4>
<p>Each dance style has preferred time signatures:</p>
<ul>
<li><strong>Tango:</strong> Primarily 2/4 and 4/4 time</li>
<li><strong>Salsa:</strong> Predominantly 4/4 time</li>
<li><strong>EDM:</strong> Almost exclusively 4/4 time</li>
<li><strong>Functional Choice:</strong> Metres support specific dance steps</li>
</ul>
</div>
<div className="characteristic-card">
<h4>Strong Beat Patterns</h4>
<p>Clear metric organization for dance coordination:</p>
<ul>
<li><strong>Primary Accents:</strong> Strong beats on beat 1</li>
<li><strong>Secondary Accents:</strong> Emphasis patterns within measures</li>
<li><strong>Metric Hierarchy:</strong> Strong and weak beat relationships</li>
<li><strong>Predictable Patterns:</strong> Regular metric cycles</li>
</ul>
</div>
<div className="characteristic-card">
<h4>Movement Alignment</h4>
<p>Metre directly supports physical movement:</p>
<ul>
<li><strong>Step Coordination:</strong> Dance steps align with metric beats</li>
<li><strong>Phrase Structure:</strong> Musical phrases match dance phrases</li>
<li><strong>Choreographic Planning:</strong> Metre enables movement planning</li>
<li><strong>Partner Coordination:</strong> Shared metric framework</li>
</ul>
</div>
</div>
</section>
<!-- Dance Style Applications -->
<section id="dance-styles">
<h3>Metre in Different Dance Styles</h3>
<div className="style-section">
<h4>Tango Metre</h4>
<p>
                        Tango uses both 2/4 and 4/4 time signatures, with the choice often depending on the 
                        specific style and tempo of the piece. The metric organization supports the dramatic, 
                        precise movements characteristic of tango dance.
                    </p>
<div className="style-features">
<h5>Metric Characteristics:</h5>
<ul>
<li><strong>2/4 Time:</strong> Two quarter-note beats per measure, common in traditional tango</li>
<li><strong>4/4 Time:</strong> Four quarter-note beats per measure, used in modern tango</li>
<li><strong>Strong Downbeats:</strong> Emphasis on beat 1 for dramatic effect</li>
<li><strong>Clear Metric Structure:</strong> Well-defined measure boundaries</li>
<li><strong>Accent Patterns:</strong> Strong-weak or Strong-weak-medium-weak patterns</li>
<li><strong>Metric Flexibility:</strong> Some rubato within the metric framework</li>
</ul>
<h5>Dance Movement Alignment:</h5>
<p><strong>2/4 Tango:</strong> Each measure typically corresponds to one basic tango step</p>
<p><strong>4/4 Tango:</strong> Two measures often form a complete movement phrase</p>
<p><strong>Dramatic Pauses:</strong> Metric structure allows for expressive timing</p>
</div>
</div>
<div className="style-section">
<h4>Salsa Metre</h4>
<p>
                        Salsa is almost exclusively in 4/4 time, with the clave pattern providing additional 
                        metric organization beyond the basic time signature. The 4/4 metre supports the 
                        continuous, flowing nature of salsa dancing.
                    </p>
<div className="style-features">
<h5>Metric Characteristics:</h5>
<ul>
<li><strong>4/4 Time Signature:</strong> Four quarter-note beats per measure</li>
<li><strong>Clave Cycle:</strong> Two-measure rhythmic cycle overlaying the metre</li>
<li><strong>Son Clave:</strong> 3-2 or 2-3 pattern across two measures</li>
<li><strong>Polyrhythmic Layers:</strong> Multiple metric levels simultaneously</li>
<li><strong>Consistent Pulse:</strong> Steady quarter-note beat throughout</li>
<li><strong>Sectional Organization:</strong> Metric phrases align with song sections</li>
</ul>
<h5>Clave and Metre Relationship:</h5>
<p><strong>Basic 4/4:</strong> Standard four beats per measure</p>
<p><strong>Clave Overlay:</strong> Two-measure pattern creates larger metric unit</p>
<p><strong>Dance Steps:</strong> Basic salsa step spans two measures (8 beats)</p>
</div>
</div>
<div className="style-section">
<h4>Electronic Dance Music (EDM) Metre</h4>
<p>
                        EDM is almost universally in 4/4 time, with the four-on-the-floor kick drum pattern 
                        reinforcing the metric structure. This consistent metre supports continuous dancing 
                        and creates predictable patterns for DJ mixing.
                    </p>
<div className="style-features">
<h5>Metric Characteristics:</h5>
<ul>
<li><strong>4/4 Time Signature:</strong> Universal standard in EDM</li>
<li><strong>Four-on-the-Floor:</strong> Kick drum on every quarter note</li>
<li><strong>16-Beat Phrases:</strong> Four-measure phrases (16 beats) are common</li>
<li><strong>32-Beat Sections:</strong> Eight-measure sections for structural organization</li>
<li><strong>Metric Precision:</strong> Quantized beats for exact timing</li>
<li><strong>BPM Consistency:</strong> Steady tempo throughout for mixing</li>
</ul>
<h5>Structural Metric Organization:</h5>
<p><strong>Measure Level:</strong> 4 beats per measure</p>
<p><strong>Phrase Level:</strong> 4 measures (16 beats) per phrase</p>
<p><strong>Section Level:</strong> 8 measures (32 beats) per section</p>
<p><strong>Song Level:</strong> Multiple 32-beat sections create full tracks</p>
</div>
</div>
</section>
<!-- Technical Terminology -->
<section id="terminology">
<h3>Essential Metric Terminology</h3>
<div className="terminology-grid">
<div className="term-card">
<h4>Time Signatures</h4>
<ul>
<li><strong>2/4:</strong> Two quarter-note beats per measure</li>
<li><strong>3/4:</strong> Three quarter-note beats per measure</li>
<li><strong>4/4:</strong> Four quarter-note beats per measure</li>
<li><strong>6/8:</strong> Six eighth-note beats per measure</li>
<li><strong>Common Time (C):</strong> Another notation for 4/4</li>
<li><strong>Cut Time (₵):</strong> Another notation for 2/2</li>
</ul>
</div>
<div className="term-card">
<h4>Metric Organization</h4>
<ul>
<li><strong>Measure (Bar):</strong> Group of beats organized by time signature</li>
<li><strong>Downbeat:</strong> The first beat of a measure</li>
<li><strong>Upbeat:</strong> Weak beats, especially the last beat of a measure</li>
<li><strong>Strong Beat:</strong> Accented beats (usually 1 and 3 in 4/4)</li>
<li><strong>Weak Beat:</strong> Unaccented beats (usually 2 and 4 in 4/4)</li>
<li><strong>Metric Accent:</strong> Natural emphasis from metric position</li>
</ul>
</div>
<div className="term-card">
<h4>Dance-Specific Terms</h4>
<ul>
<li><strong>Clave Cycle:</strong> Two-measure rhythmic pattern in salsa</li>
<li><strong>Four-on-the-Floor:</strong> Kick drum on every quarter note</li>
<li><strong>16-Beat Phrase:</strong> Four-measure phrase common in EDM</li>
<li><strong>32-Beat Section:</strong> Eight-measure section in electronic music</li>
<li><strong>Basic Step:</strong> Fundamental dance step aligned with metre</li>
<li><strong>Dance Phrase:</strong> Complete movement sequence within metric framework</li>
</ul>
</div>
</div>
</section>
<!-- Performance Practice -->
<section id="performance-practice">
<h3>Performance Practice and Metre</h3>
<div className="practice-content">
<h4>Metric Execution in Different Styles</h4>
<p>How musicians and dancers work with metre in each style:</p>
<div className="technique-grid">
<div className="technique-card">
<h5>Tango Metric Practice</h5>
<ul>
<li><strong>Clear Downbeats:</strong> Strong emphasis on beat 1</li>
<li><strong>Metric Precision:</strong> Exact timing for dramatic effect</li>
<li><strong>Rubato Within Metre:</strong> Expressive timing while maintaining pulse</li>
<li><strong>Ensemble Coordination:</strong> All instruments align metrically</li>
</ul>
</div>
<div className="technique-card">
<h5>Salsa Metric Practice</h5>
<ul>
<li><strong>Clave Awareness:</strong> All parts relate to clave cycle</li>
<li><strong>Polyrhythmic Coordination:</strong> Multiple metric levels</li>
<li><strong>Steady Pulse:</strong> Consistent 4/4 beat throughout</li>
<li><strong>Section Transitions:</strong> Metric organization of song structure</li>
</ul>
</div>
<div className="technique-card">
<h5>EDM Metric Production</h5>
<ul>
<li><strong>Quantization:</strong> Precise metric alignment</li>
<li><strong>Loop-Based Structure:</strong> Metric patterns in loops</li>
<li><strong>BPM Consistency:</strong> Steady tempo for DJ mixing</li>
<li><strong>Phrase Alignment:</strong> Musical elements align with metric phrases</li>
</ul>
</div>
</div>
</div>
</section>
<!-- Assessment Focus -->
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<div className="assessment-content">
<h4>What You Need to Know</h4>
<ul>
<li>Identify time signatures in different dance styles</li>
<li>Understand the relationship between metre and dance movement</li>
<li>Recognize strong and weak beats within measures</li>
<li>Explain how metre supports choreography</li>
<li>Distinguish between 2/4 and 4/4 time in tango</li>
<li>Understand the clave cycle in salsa music</li>
<li>Recognize 16-beat and 32-beat phrases in EDM</li>
<li>Analyze how metre contributes to musical structure</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Count beats and identify time signatures</li>
<li>Recognize downbeats and measure boundaries</li>
<li>Identify strong and weak beat patterns</li>
<li>Track metric organization throughout a piece</li>
<li>Distinguish between different time signatures</li>
<li>Understand how metre affects musical flow</li>
<li>Recognize metric changes or irregularities</li>
</ul>
</div>
</section>
</div>` }} />
      </div>
    </article>
  );
};

export default Dance0103MetrePage;
