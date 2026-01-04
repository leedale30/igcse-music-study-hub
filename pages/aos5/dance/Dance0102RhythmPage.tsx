import React from 'react';
import { Link } from 'react-router-dom';

const Dance0102RhythmPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Rhythm</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Rhythm
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
<h1>Rhythm in Music for Dance</h1>
<h2>Area of Study 5: Music for Dance</h2>
<p className="element-definition">
<strong>Definition:</strong> The pattern of beats and durations that create the temporal structure of music
                </p>
</section>
<!-- Navigation to Other Elements -->
<section id="element-navigation">
<h3>Other Core Musical Elements</h3>
<div className="nav-grid">
<a href="../aos05-01-01-dynamics/aos05-01-01-dynamics.html">1. Dynamics</a>
<a href="../aos05-01-03-metre/aos05-01-03-metre.html">3. Metre</a>
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
<h3>Key Characteristics of Rhythm in Music for Dance</h3>
<p>
                    Rhythm in Music for Dance is fundamentally functional, designed to facilitate and enhance physical movement. 
                    Each dance style has distinctive rhythmic patterns that define its character and support specific dance steps 
                    and movements. Understanding these rhythmic foundations is essential for both performance and analysis.
                </p>
<div className="characteristics-grid">
<div className="characteristic-card">
<h4>Functional Rhythm</h4>
<p>Dance rhythms serve specific purposes:</p>
<ul>
<li><strong>Movement Support:</strong> Rhythms align with dance steps and gestures</li>
<li><strong>Energy Creation:</strong> Driving rhythms maintain dance momentum</li>
<li><strong>Structural Organization:</strong> Rhythmic patterns define musical sections</li>
<li><strong>Cultural Identity:</strong> Distinctive rhythms identify specific dance styles</li>
</ul>
</div>
<div className="characteristic-card">
<h4>Rhythmic Complexity</h4>
<p>Different levels of rhythmic sophistication:</p>
<ul>
<li><strong>Simple Patterns:</strong> Basic beat patterns for accessibility</li>
<li><strong>Syncopation:</strong> Off-beat accents for rhythmic interest</li>
<li><strong>Polyrhythm:</strong> Multiple rhythmic layers (especially in Salsa)</li>
<li><strong>Cross-rhythms:</strong> Conflicting rhythmic patterns for complexity</li>
</ul>
</div>
<div className="characteristic-card">
<h4>Rhythmic Drive</h4>
<p>Elements that create forward momentum:</p>
<ul>
<li><strong>Consistent Pulse:</strong> Steady beat for dance coordination</li>
<li><strong>Rhythmic Accents:</strong> Emphasis on key beats</li>
<li><strong>Repetitive Patterns:</strong> Cyclical rhythms for predictability</li>
<li><strong>Rhythmic Variation:</strong> Subtle changes to maintain interest</li>
</ul>
</div>
</div>
</section>
<!-- Dance Style Applications -->
<section id="dance-styles">
<h3>Rhythm in Different Dance Styles</h3>
<div className="style-section">
<h4>Tango Rhythm</h4>
<p>
                        Tango rhythm is characterized by its distinctive 2/4 or 4/4 meter with specific accent patterns 
                        that support the dramatic, staccato movements of the dance. The rhythm creates the foundation 
                        for the passionate and intense character of tango.
                    </p>
<div className="style-features">
<h5>Key Rhythmic Features:</h5>
<ul>
<li><strong>Marcado Rhythm:</strong> Strong, marked beats with clear articulation</li>
<li><strong>Staccato Patterns:</strong> Short, detached rhythmic figures</li>
<li><strong>Syncopated Accents:</strong> Off-beat emphasis for dramatic effect</li>
<li><strong>Rhythmic Contrasts:</strong> Alternation between driving and lyrical sections</li>
<li><strong>Habanera Influence:</strong> Dotted rhythm patterns from Cuban origins</li>
<li><strong>Rubato Elements:</strong> Flexible timing for expressive phrasing</li>
</ul>
<h5>Typical Tango Rhythmic Pattern:</h5>
<p><strong>Basic Pattern:</strong> Strong-weak-Strong-weak (in 2/4) or Strong-weak-medium-weak (in 4/4)</p>
<p><strong>Characteristic Accent:</strong> Emphasis on beats 1 and 3, with syncopated off-beat accents</p>
</div>
</div>
<div className="style-section">
<h4>Salsa Rhythm</h4>
<p>
                        Salsa rhythm is built on complex Afro-Cuban polyrhythmic foundations, featuring multiple 
                        interlocking rhythmic layers that create a rich, driving texture. The clave pattern serves 
                        as the rhythmic foundation for all other elements.
                    </p>
<div className="style-features">
<h5>Key Rhythmic Features:</h5>
<ul>
<li><strong>Clave Pattern:</strong> Fundamental 3-2 or 2-3 rhythmic cycle</li>
<li><strong>Polyrhythmic Texture:</strong> Multiple simultaneous rhythmic patterns</li>
<li><strong>Montuno Rhythm:</strong> Repetitive piano patterns in syncopated style</li>
<li><strong>Tumbao Bass:</strong> Distinctive bass rhythm pattern</li>
<li><strong>Percussion Layers:</strong> Congas, timbales, and other percussion in complex interaction</li>
<li><strong>Cross-rhythms:</strong> 3-against-2 and other polyrhythmic relationships</li>
</ul>
<h5>Clave Patterns:</h5>
<p><strong>Son Clave (3-2):</strong> Three beats in first measure, two in second</p>
<p><strong>Son Clave (2-3):</strong> Two beats in first measure, three in second</p>
<p><strong>Rumba Clave:</strong> Variation with different accent placement</p>
</div>
</div>
<div className="style-section">
<h4>Electronic Dance Music (EDM) Rhythm</h4>
<p>
                        EDM rhythm is typically built around a strong, consistent four-on-the-floor kick drum pattern, 
                        with additional rhythmic layers created through electronic programming. The rhythm is designed 
                        for continuous dancing and high-energy movement.
                    </p>
<div className="style-features">
<h5>Key Rhythmic Features:</h5>
<ul>
<li><strong>Four-on-the-Floor:</strong> Kick drum on every quarter note beat</li>
<li><strong>Quantized Rhythm:</strong> Precisely timed electronic beats</li>
<li><strong>Layered Percussion:</strong> Multiple electronic drum sounds in layers</li>
<li><strong>Rhythmic Builds:</strong> Gradual addition of rhythmic elements</li>
<li><strong>Breakbeats:</strong> Complex drum patterns in certain EDM subgenres</li>
<li><strong>Sidechain Compression:</strong> Rhythmic pumping effect</li>
</ul>
<h5>Common EDM Rhythmic Patterns:</h5>
<p><strong>House Pattern:</strong> Kick on 1 and 3, snare/clap on 2 and 4</p>
<p><strong>Techno Pattern:</strong> Driving kick drum with hi-hat patterns</p>
<p><strong>Dubstep Pattern:</strong> Syncopated rhythms with emphasis on beat 3</p>
</div>
</div>
</section>
<!-- Technical Terminology -->
<section id="terminology">
<h3>Essential Rhythmic Terminology</h3>
<div className="terminology-grid">
<div className="term-card">
<h4>Basic Rhythmic Terms</h4>
<ul>
<li><strong>Beat:</strong> The basic unit of time in music</li>
<li><strong>Pulse:</strong> The steady underlying beat</li>
<li><strong>Accent:</strong> Emphasis on a particular beat</li>
<li><strong>Syncopation:</strong> Emphasis on off-beats or weak beats</li>
<li><strong>Polyrhythm:</strong> Multiple rhythms played simultaneously</li>
<li><strong>Cross-rhythm:</strong> Conflicting rhythmic patterns</li>
</ul>
</div>
<div className="term-card">
<h4>Dance-Specific Terms</h4>
<ul>
<li><strong>Clave:</strong> Fundamental rhythmic pattern in Latin music</li>
<li><strong>Montuno:</strong> Syncopated piano rhythm in salsa</li>
<li><strong>Tumbao:</strong> Bass rhythm pattern in Latin music</li>
<li><strong>Marcado:</strong> Marked, accented rhythm in tango</li>
<li><strong>Four-on-the-floor:</strong> Kick drum on every quarter note</li>
<li><strong>Breakbeat:</strong> Complex drum pattern with breaks</li>
</ul>
</div>
<div className="term-card">
<h4>Rhythmic Notation</h4>
<ul>
<li><strong>Whole note:</strong> Four beats duration</li>
<li><strong>Half note:</strong> Two beats duration</li>
<li><strong>Quarter note:</strong> One beat duration</li>
<li><strong>Eighth note:</strong> Half beat duration</li>
<li><strong>Sixteenth note:</strong> Quarter beat duration</li>
<li><strong>Dotted rhythms:</strong> Extended note values</li>
</ul>
</div>
</div>
</section>
<!-- Performance Practice -->
<section id="performance-practice">
<h3>Performance Practice and Rhythm</h3>
<div className="practice-content">
<h4>Rhythmic Execution Techniques</h4>
<p>Different approaches to performing dance rhythms:</p>
<div className="technique-grid">
<div className="technique-card">
<h5>Tango Rhythm Performance</h5>
<ul>
<li><strong>Precise Articulation:</strong> Clear, defined rhythmic attacks</li>
<li><strong>Dynamic Accents:</strong> Strong emphasis on key beats</li>
<li><strong>Rubato Application:</strong> Flexible timing for expression</li>
<li><strong>Staccato Technique:</strong> Short, detached note execution</li>
</ul>
</div>
<div className="technique-card">
<h5>Salsa Rhythm Performance</h5>
<ul>
<li><strong>Clave Awareness:</strong> All parts relate to clave pattern</li>
<li><strong>Polyrhythmic Coordination:</strong> Multiple rhythms simultaneously</li>
<li><strong>Swing Feel:</strong> Subtle rhythmic inflection</li>
<li><strong>Ensemble Precision:</strong> Tight rhythmic coordination</li>
</ul>
</div>
<div className="technique-card">
<h5>EDM Rhythm Production</h5>
<ul>
<li><strong>Quantization:</strong> Precise timing alignment</li>
<li><strong>Layering:</strong> Building complex rhythmic textures</li>
<li><strong>Programming:</strong> Electronic rhythm creation</li>
<li><strong>Processing:</strong> Effects applied to rhythmic elements</li>
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
<li>Identify basic rhythmic patterns and note values</li>
<li>Recognize syncopation and its effect on dance music</li>
<li>Understand the role of clave in Latin dance music</li>
<li>Distinguish between different dance rhythm styles</li>
<li>Explain how rhythm supports dance movement</li>
<li>Identify polyrhythmic textures in salsa music</li>
<li>Recognize four-on-the-floor patterns in EDM</li>
<li>Understand the relationship between rhythm and metre</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Identify the underlying beat and pulse</li>
<li>Recognize rhythmic patterns and their repetition</li>
<li>Distinguish between simple and complex rhythms</li>
<li>Identify syncopated rhythms and off-beat accents</li>
<li>Recognize characteristic rhythms of different dance styles</li>
<li>Track rhythmic changes throughout a piece</li>
<li>Understand how rhythm contributes to musical structure</li>
</ul>
</div>
</section>
</div>` }} />
      </div>
    </article>
  );
};

export default Dance0102RhythmPage;
