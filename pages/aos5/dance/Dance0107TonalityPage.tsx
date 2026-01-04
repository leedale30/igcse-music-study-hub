import React from 'react';
import { Link } from 'react-router-dom';

const Dance0107TonalityPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Tonality</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Tonality
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
<h1>Tonality in Music for Dance</h1>
<h2>Area of Study 5: Music for Dance</h2>
<p className="element-definition">
<strong>Definition:</strong> The organization of music around a central pitch or key center, establishing the tonal framework
                </p>
</section>
<!-- Navigation to Other Elements -->
<section id="element-navigation">
<h3>Other Core Musical Elements</h3>
<div className="nav-grid">
<a href="../aos05-01-01-dynamics/aos05-01-01-dynamics.html">1. Dynamics</a>
<a href="../aos05-01-02-rhythm/aos05-01-02-rhythm.html">2. Rhythm</a>
<a href="../aos05-01-03-metre/aos05-01-03-metre.html">3. Metre</a>
<a href="../aos05-01-04-tempo/aos05-01-04-tempo.html">4. Tempo</a>
<a href="../aos05-01-05-melody/aos05-01-05-melody.html">5. Melody</a>
<a href="../aos05-01-06-harmony/aos05-01-06-harmony.html">6. Harmony</a>
<a href="../aos05-01-08-texture/aos05-01-08-texture.html">8. Texture</a>
<a href="../aos05-01-09-timbre/aos05-01-09-timbre.html">9. Timbre</a>
<a href="../aos05-01-10-structure-form/aos05-01-10-structure-form.html">10. Structure/Form</a>
</div>
</section>
<!-- Key Characteristics -->
<section id="key-characteristics">
<h3>Key Characteristics of Tonality in Music for Dance</h3>
<p>Tonality in dance music provides the foundational framework that supports both harmonic progression and melodic development. Different dance styles employ various tonal systems that reflect their cultural origins and functional requirements.</p>
<!-- Tango Tonality -->
<div className="dance-style-section">
<h4>Tango Tonality</h4>
<div className="characteristics-grid">
<div className="characteristic-item">
<h5>Traditional Major and Minor Keys</h5>
<p>Tango primarily uses <strong>major</strong> and <strong>minor tonalities</strong>, with minor keys being particularly prominent to support the melancholic and passionate character. Common keys include <strong>D minor</strong>, <strong>G minor</strong>, and <strong>A minor</strong>.</p>
</div>
<div className="characteristic-item">
<h5>Chromatic Inflections</h5>
<p>While maintaining clear tonal centers, Tango incorporates <strong>chromatic alterations</strong> and <strong>temporary modulations</strong> that add harmonic color without abandoning the tonal framework.</p>
</div>
<div className="characteristic-item">
<h5>Modal Influences</h5>
<p>Some Tango pieces incorporate <strong>modal inflections</strong>, particularly the use of the <strong>natural 7th</strong> in minor keys, creating a Dorian flavor that adds to the distinctive Argentine character.</p>
</div>
</div>
</div>
<!-- Salsa Tonality -->
<div className="dance-style-section">
<h4>Salsa Tonality</h4>
<div className="characteristics-grid">
<div className="characteristic-item">
<h5>Major Key Dominance</h5>
<p>Salsa predominantly uses <strong>major tonalities</strong> that support the upbeat, celebratory nature of the dance. Keys like <strong>C major</strong>, <strong>F major</strong>, and <strong>Bb major</strong> are common for their bright, accessible character.</p>
</div>
<div className="characteristic-item">
<h5>Modal Harmony</h5>
<p>Salsa frequently incorporates <strong>modal elements</strong>, particularly <strong>Mixolydian</strong> and <strong>Dorian modes</strong>, which provide the characteristic Latin jazz flavor and allow for extended improvisation.</p>
</div>
<div className="characteristic-item">
<h5>Relative Minor Relationships</h5>
<p>Movement between <strong>relative major and minor</strong> keys is common, providing tonal variety while maintaining the overall energetic character essential for dancing.</p>
</div>
</div>
</div>
<!-- EDM Tonality -->
<div className="dance-style-section">
<h4>Electronic Dance Music (EDM) Tonality</h4>
<div className="characteristics-grid">
<div className="characteristic-item">
<h5>Clear Tonal Centers</h5>
<p>EDM typically maintains <strong>clear tonal centers</strong> throughout tracks, often staying in one key to create familiarity and allow dancers to connect with the music's harmonic foundation.</p>
</div>
<div className="characteristic-item">
<h5>Key Changes for Energy</h5>
<p>Strategic <strong>key changes</strong> (modulations) are used to increase energy, particularly moving up by <strong>semitone</strong> or <strong>whole tone</strong> during builds and drops to create excitement.</p>
</div>
<div className="characteristic-item">
<h5>Modal and Pentatonic Elements</h5>
<p>EDM often incorporates <strong>modal scales</strong> and <strong>pentatonic patterns</strong> that create distinctive melodic and harmonic colors while remaining accessible to a broad audience.</p>
</div>
</div>
</div>
</section>
<!-- Tonal Systems and Concepts -->
<section id="tonal-systems">
<h3>Essential Tonal Systems and Concepts</h3>
<div className="systems-grid">
<div className="system-category">
<h4>Major/Minor System</h4>
<ul>
<li><strong>Major Tonality</strong> - Bright, stable, often used for upbeat dances</li>
<li><strong>Minor Tonality</strong> - Darker, more emotional, common in Tango</li>
<li><strong>Relative Keys</strong> - Major and minor keys sharing the same key signature</li>
<li><strong>Parallel Keys</strong> - Major and minor keys with the same tonic</li>
</ul>
</div>
<div className="system-category">
<h4>Modal Systems</h4>
<ul>
<li><strong>Dorian Mode</strong> - Minor with raised 6th, common in Latin music</li>
<li><strong>Mixolydian Mode</strong> - Major with lowered 7th, jazz influence</li>
<li><strong>Aeolian Mode</strong> - Natural minor scale</li>
<li><strong>Pentatonic Scales</strong> - Five-note scales, often in EDM</li>
</ul>
</div>
<div className="system-category">
<h4>Tonal Techniques</h4>
<ul>
<li><strong>Modulation</strong> - Changing from one key to another</li>
<li><strong>Tonicization</strong> - Temporarily emphasizing a new tonal center</li>
<li><strong>Chromatic Alteration</strong> - Using notes outside the key</li>
<li><strong>Pedal Points</strong> - Sustained notes while harmony changes</li>
</ul>
</div>
</div>
</section>
<!-- Analysis Focus -->
<section id="analysis-focus">
<h3>Key Points for Analysis</h3>
<div className="analysis-points">
<div className="analysis-category">
<h4>Tonal Framework</h4>
<ul>
<li>What is the primary key or tonal center?</li>
<li>Is the tonality major, minor, or modal?</li>
<li>How does the tonality support the dance character?</li>
</ul>
</div>
<div className="analysis-category">
<h4>Tonal Movement</h4>
<ul>
<li>Are there key changes or modulations?</li>
<li>How do tonal changes relate to the formal structure?</li>
<li>What chromatic elements are present?</li>
</ul>
</div>
<div className="analysis-category">
<h4>Cultural Context</h4>
<ul>
<li>How does the tonality reflect the cultural origins?</li>
<li>What modal or scale systems are employed?</li>
<li>How does tonality interact with rhythm and harmony?</li>
</ul>
</div>
</div>
</section>
<!-- Assessment Focus -->
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<div className="assessment-note">
<p><strong>Important:</strong> For Area of Study 5 (Music for Dance), candidates will <strong>not</strong> be expected to identify specific composers, performers, or sub-genres. The focus remains on recognizing and describing the <em>musical features</em> and <em>stylistic elements</em> present in the recording.</p>
<p>Listen for how tonal characteristics support the dance function and create the appropriate emotional and cultural context within Tango, Salsa, and EDM styles.</p>
</div>
</section>
</div>` }} />
      </div>
    </article>
  );
};

export default Dance0107TonalityPage;
