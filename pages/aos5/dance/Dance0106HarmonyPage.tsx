import React from 'react';
import { Link } from 'react-router-dom';

const Dance0106HarmonyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Harmony</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Harmony
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
<h1>Harmony in Music for Dance</h1>
<h2>Area of Study 5: Music for Dance</h2>
<p className="element-definition">
<strong>Definition:</strong> The vertical combination of pitches and the progression of chords that provides harmonic support and color
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
<a href="../aos05-01-07-tonality/aos05-01-07-tonality.html">7. Tonality</a>
<a href="../aos05-01-08-texture/aos05-01-08-texture.html">8. Texture</a>
<a href="../aos05-01-09-timbre/aos05-01-09-timbre.html">9. Timbre</a>
<a href="../aos05-01-10-structure-form/aos05-01-10-structure-form.html">10. Structure/Form</a>
</div>
</section>
<!-- Key Characteristics -->
<section id="key-characteristics">
<h3>Key Characteristics of Harmony in Music for Dance</h3>
<p>Dance music harmony serves both functional and expressive purposes, providing harmonic foundation while creating the emotional atmosphere necessary for different dance styles. The harmonic language varies significantly between traditional and contemporary dance forms.</p>
<!-- Tango Harmony -->
<div className="dance-style-section">
<h4>Tango Harmony</h4>
<div className="characteristics-grid">
<div className="characteristic-item">
<h5>Traditional Harmonic Foundation</h5>
<p>Tango harmony is built on <strong>functional harmony</strong> using primary triads (I, IV, V) and their extensions. Common progressions include <strong>I-V-I</strong> and <strong>ii-V-I</strong> patterns that provide strong tonal centers.</p>
</div>
<div className="characteristic-item">
<h5>Chromatic Harmony and Dissonance</h5>
<p>Tango frequently employs <strong>chromatic harmony</strong> and <strong>dissonance</strong> to create emotional tension. <strong>Diminished chords</strong>, <strong>augmented chords</strong>, and <strong>secondary dominants</strong> add harmonic color and intensity.</p>
</div>
<div className="characteristic-item">
<h5>Harmonic Rhythm</h5>
<p>The <strong>harmonic rhythm</strong> (rate of chord change) varies to support the dance's dramatic character, with slower changes during lyrical sections and more frequent changes during rhythmic passages.</p>
</div>
</div>
</div>
<!-- Salsa Harmony -->
<div className="dance-style-section">
<h4>Salsa Harmony</h4>
<div className="characteristics-grid">
<div className="characteristic-item">
<h5>Latin Jazz Influences</h5>
<p>Salsa harmony draws from <strong>Latin jazz</strong> traditions, featuring <strong>extended chords</strong> (7ths, 9ths, 11ths) and <strong>altered dominants</strong> that create sophisticated harmonic colors while maintaining danceability.</p>
</div>
<div className="characteristic-item">
<h5>Montuno and Harmonic Patterns</h5>
<p>The piano <strong>montuno</strong> provides harmonic foundation through repetitive chord patterns, often using <strong>two-chord vamps</strong> or simple progressions that allow for rhythmic emphasis and improvisation.</p>
</div>
<div className="characteristic-item">
<h5>Modal Harmony</h5>
<p>Salsa sometimes incorporates <strong>modal harmony</strong>, particularly <strong>Dorian</strong> and <strong>Mixolydian modes</strong>, which provide distinctive harmonic flavors different from traditional major/minor tonality.</p>
</div>
</div>
</div>
<!-- EDM Harmony -->
<div className="dance-style-section">
<h4>Electronic Dance Music (EDM) Harmony</h4>
<div className="characteristics-grid">
<div className="characteristic-item">
<h5>Simple but Effective Progressions</h5>
<p>EDM often uses <strong>simple chord progressions</strong> that repeat throughout sections, such as <strong>vi-IV-I-V</strong> or <strong>I-V-vi-IV</strong>, creating familiarity and allowing focus on rhythm and production elements.</p>
</div>
<div className="characteristic-item">
<h5>Harmonic Layering</h5>
<p>Multiple harmonic layers are created through <strong>synthesizer pads</strong>, <strong>bass lines</strong>, and <strong>lead synths</strong>, with each layer contributing different harmonic content that builds throughout the track.</p>
</div>
<div className="characteristic-item">
<h5>Tension and Release</h5>
<p>Harmonic <strong>tension and release</strong> is crucial in EDM structure, with harmonic changes often coinciding with <strong>builds</strong> and <strong>drops</strong> to maximize emotional impact on the dance floor.</p>
</div>
</div>
</div>
</section>
<!-- Harmonic Devices and Techniques -->
<section id="harmonic-techniques">
<h3>Essential Harmonic Devices and Techniques</h3>
<div className="techniques-grid">
<div className="technique-category">
<h4>Chord Types</h4>
<ul>
<li><strong>Triads</strong> - Basic three-note chords (major, minor, diminished, augmented)</li>
<li><strong>Seventh Chords</strong> - Four-note chords adding harmonic richness</li>
<li><strong>Extended Chords</strong> - 9ths, 11ths, 13ths for jazz-influenced styles</li>
<li><strong>Altered Chords</strong> - Modified chord tones for increased tension</li>
</ul>
</div>
<div className="technique-category">
<h4>Harmonic Progressions</h4>
<ul>
<li><strong>Functional Progressions</strong> - Traditional tonic-dominant relationships</li>
<li><strong>Circle of Fifths</strong> - Progressions moving by perfect fifths</li>
<li><strong>Chromatic Progressions</strong> - Chords connected by semitone movement</li>
<li><strong>Modal Progressions</strong> - Based on church modes rather than major/minor</li>
</ul>
</div>
<div className="technique-category">
<h4>Harmonic Rhythm</h4>
<ul>
<li><strong>Slow Harmonic Rhythm</strong> - Infrequent chord changes</li>
<li><strong>Fast Harmonic Rhythm</strong> - Frequent chord changes</li>
<li><strong>Syncopated Changes</strong> - Chord changes on weak beats</li>
<li><strong>Pedal Points</strong> - Sustained notes while harmony changes above</li>
</ul>
</div>
</div>
</section>
<!-- Analysis Focus -->
<section id="analysis-focus">
<h3>Key Points for Analysis</h3>
<div className="analysis-points">
<div className="analysis-category">
<h4>Harmonic Language</h4>
<ul>
<li>Are the harmonies simple or complex?</li>
<li>What types of chords are predominantly used?</li>
<li>How does the harmonic language support the dance style?</li>
</ul>
</div>
<div className="analysis-category">
<h4>Harmonic Function</h4>
<ul>
<li>How do chord progressions create tension and release?</li>
<li>What is the rate of harmonic change (harmonic rhythm)?</li>
<li>How do harmonic changes relate to the formal structure?</li>
</ul>
</div>
<div className="analysis-category">
<h4>Cultural Context</h4>
<ul>
<li>How does the harmony reflect the cultural origins of the dance?</li>
<li>What harmonic instruments provide the foundation?</li>
<li>How does harmony interact with rhythm and melody?</li>
</ul>
</div>
</div>
</section>
<!-- Assessment Focus -->
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<div className="assessment-note">
<p><strong>Important:</strong> For Area of Study 5 (Music for Dance), candidates will <strong>not</strong> be expected to identify specific composers, performers, or sub-genres. The focus remains on recognizing and describing the <em>musical features</em> and <em>stylistic elements</em> present in the recording.</p>
<p>Listen for how harmonic characteristics support the dance function and create the appropriate emotional and cultural context within Tango, Salsa, and EDM styles.</p>
</div>
</section>
</div>` }} />
      </div>
    </article>
  );
};

export default Dance0106HarmonyPage;
