import React from 'react';
import { Link } from 'react-router-dom';

const Romantic0106HarmonyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Harmony</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Harmony
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 3 • Romantic Music
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
        <div dangerouslySetInnerHTML={{ __html: `Definition Section 
<section id="definition">
<h3>Definition</h3>
<p>In Romantic music, harmony becomes increasingly complex and expressive, serving as a primary means of creating emotional intensity and color. Romantic harmony expands beyond traditional functional harmony to include chromatic chords, extended harmonies, and innovative progressions that create rich, expressive soundscapes and support the emotional and programmatic content of the music.</p>
</section>
 Key Characteristics Section 
<section id="key-characteristics">
<h3>Key Characteristics of Romantic Harmony</h3>
<div className="characteristic" id="chromatic-harmony">
<h4>Chromatic and Extended Harmony</h4>
<p>Romantic composers expanded the harmonic palette by using chromatic chords, altered chords, and extended harmonies that create richer, more colorful sounds and increased emotional expression.</p>
<ul>
<li><strong>Chromatic chords:</strong> Chords using notes outside the key</li>
<li><strong>Altered dominants:</strong> Modified dominant chords for color</li>
<li><strong>Diminished 7th chords:</strong> For dramatic tension</li>
<li><strong>Augmented 6th chords:</strong> For expressive harmonic color</li>
<li><strong>Extended chords:</strong> 9ths, 11ths, and 13ths for richness</li>
</ul>
</div>
<div className="characteristic" id="expressive-harmony">
<h4>Expressive and Emotional Harmony</h4>
<p>Harmony in Romantic music is chosen primarily for its emotional effect rather than purely structural function, with composers using specific chord progressions to evoke particular feelings and moods.</p>
<ul>
<li><strong>Emotional associations:</strong> Specific chords linked to feelings</li>
<li><strong>Harmonic color:</strong> Chords chosen for their sound quality</li>
<li><strong>Tension and release:</strong> Dramatic harmonic progressions</li>
<li><strong>Harmonic rhythm:</strong> Varied pace of chord changes</li>
</ul>
</div>
<div className="characteristic" id="programmatic-harmony">
<h4>Programmatic and Descriptive Harmony</h4>
<p>In programme music like <em>Vltava</em>, harmony is used descriptively to represent different scenes, characters, and emotions, making the musical narrative more vivid and meaningful.</p>
<ul>
<li><strong>Scene painting:</strong> Harmony reflecting visual imagery</li>
<li><strong>Character representation:</strong> Different harmonies for different characters</li>
<li><strong>Mood creation:</strong> Harmony establishing atmosphere</li>
<li><strong>Narrative support:</strong> Harmony following the story</li>
</ul>
</div>
<div className="characteristic" id="national-harmony">
<h4>National and Folk Influences</h4>
<p>Romantic composers, especially nationalists like Smetana, incorporated folk harmonies and modal inflections that reflect their national musical traditions and create distinctive harmonic flavors.</p>
<ul>
<li><strong>Modal harmonies:</strong> Use of church modes and folk modes</li>
<li><strong>Folk progressions:</strong> Harmonic patterns from folk music</li>
<li><strong>National characteristics:</strong> Harmonies reflecting cultural identity</li>
<li><strong>Pentatonic influences:</strong> Five-note scale harmonizations</li>
</ul>
</div>
</section>
 Terminology Section 
<section id="terminology">
<h3>Essential Harmony Terminology</h3>
<div className="terminology-grid">
<div className="term-card">
<h4>Basic Harmonic Terms</h4>
<ul>
<li><strong>Triad:</strong> Three-note chord (root, 3rd, 5th)</li>
<li><strong>7th chord:</strong> Four-note chord adding the 7th</li>
<li><strong>Inversion:</strong> Chord with different bass note</li>
<li><strong>Cadence:</strong> Harmonic conclusion or pause</li>
<li><strong>Modulation:</strong> Change of key</li>
</ul>
</div>
<div className="term-card">
<h4>Chromatic Harmony</h4>
<ul>
<li><strong>Chromatic:</strong> Using notes outside the key</li>
<li><strong>Diminished 7th:</strong> Chord built on diminished intervals</li>
<li><strong>Augmented 6th:</strong> Chord with augmented 6th interval</li>
<li><strong>Neapolitan 6th:</strong> Flattened supertonic chord</li>
<li><strong>Secondary dominant:</strong> Dominant of a degree other than tonic</li>
</ul>
</div>
<div className="term-card">
<h4>Harmonic Function</h4>
<ul>
<li><strong>Tonic:</strong> Home chord (I)</li>
<li><strong>Dominant:</strong> Tension chord (V)</li>
<li><strong>Subdominant:</strong> Departure chord (IV)</li>
<li><strong>Progression:</strong> Movement between chords</li>
<li><strong>Resolution:</strong> Movement from tension to rest</li>
</ul>
</div>
</div>
</section>
 Comparison Section 
<section id="comparison">
<h3>Comparison with Baroque Harmony</h3>
<div className="comparison-table">
<div className="baroque-column">
<h4>Baroque Harmony</h4>
<ul>
<li>Functional tonal harmony</li>
<li>Clear chord progressions</li>
<li>Limited chromatic harmony</li>
<li>Structural harmonic rhythm</li>
<li>Figured bass foundation</li>
</ul>
</div>
<div className="romantic-column">
<h4>Romantic Harmony</h4>
<ul>
<li>Expressive, coloristic harmony</li>
<li>Complex chromatic progressions</li>
<li>Extensive chromatic harmony</li>
<li>Flexible harmonic rhythm</li>
<li>Rich orchestral harmonization</li>
</ul>
</div>
</div>
</section>
 Focus Work Examples 
<section id="focus-work-examples">
<h3>Focus Work: Smetana's <em>Vltava</em></h3>
<h4>Harmonic Examples in <em>Vltava</em></h4>
<div className="example" id="river-source-harmony">
<h5>1. The River Source</h5>
<p><strong>Harmony:</strong> Simple, clear harmonies in E minor</p>
<p><strong>Effect:</strong> The transparent, uncomplicated harmony creates a sense of purity and freshness, representing the clean, clear water of the mountain springs.</p>
</div>
<div className="example" id="main-theme-harmony">
<h5>2. Main River Theme</h5>
<p><strong>Harmony:</strong> Rich, flowing harmonies supporting the melody</p>
<p><strong>Effect:</strong> The harmony moves in gentle waves, supporting the melodic line with warm, consonant chords that create a sense of majesty and beauty. The harmonic rhythm matches the flowing character of the river.</p>
</div>
<div className="example" id="hunting-harmony">
<h5>3. Hunting Scene</h5>
<p><strong>Harmony:</strong> Bold, martial harmonies in major keys</p>
<p><strong>Effect:</strong> Strong, confident harmonic progressions with clear tonic-dominant relationships create the heroic, outdoor character of the hunt. The harmony supports the fanfare-like melodies.</p>
</div>
<div className="example" id="wedding-harmony">
<h5>4. Peasant Wedding</h5>
<p><strong>Harmony:</strong> Simple, folk-like harmonic progressions</p>
<p><strong>Effect:</strong> Basic triadic harmony with modal inflections reflects the folk character of the music. The harmony is deliberately simple and rustic, representing the peasant celebration.</p>
</div>
<div className="example" id="nymphs-harmony">
<h5>5. Moonlight Dance of Water Nymphs</h5>
<p><strong>Harmony:</strong> Mysterious, chromatic harmonies</p>
<p><strong>Effect:</strong> Unusual chord progressions with chromatic movement create an otherworldly, supernatural atmosphere. Diminished and augmented chords add to the mysterious character.</p>
</div>
<div className="example" id="rapids-harmony">
<h5>6. St. John's Rapids</h5>
<p><strong>Harmony:</strong> Turbulent, dissonant harmonies</p>
<p><strong>Effect:</strong> Clashing harmonies and rapid harmonic changes create musical chaos, representing the dangerous, turbulent waters of the rapids. Dissonance builds tension and excitement.</p>
</div>
<div className="example" id="final-harmony">
<h5>7. Final Statement</h5>
<p><strong>Harmony:</strong> Triumphant, expanded harmonies in E major</p>
<p><strong>Effect:</strong> The transformation from minor to major, combined with rich, full harmonization, creates a sense of triumph and grandeur as the river reaches Prague.</p>
</div>
</section>
 Performance Practice 
<section id="performance-practice">
<h3>Performance Practice</h3>
<h4>Interpreting Romantic Harmony</h4>
<ul>
<li><strong>Harmonic Balance:</strong> Ensure all chord tones are clearly heard</li>
<li><strong>Voice Leading:</strong> Smooth connection between chord changes</li>
<li><strong>Harmonic Rhythm:</strong> Vary the pace of chord changes expressively</li>
<li><strong>Chromatic Clarity:</strong> Make chromatic harmonies clear but not harsh</li>
<li><strong>Emotional Expression:</strong> Use harmony to support the emotional content</li>
</ul>
<h4>Ensemble Considerations</h4>
<ul>
<li><strong>Intonation:</strong> Careful tuning of chromatic harmonies</li>
<li><strong>Balance:</strong> Proper balance between melody and harmony</li>
<li><strong>Blend:</strong> Smooth blending of harmonic voices</li>
<li><strong>Timing:</strong> Coordinated chord changes across the ensemble</li>
</ul>
</section>
 Assessment Focus 
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<h4>What You Need to Know</h4>
<ul>
<li>Identify basic chord types (major, minor, diminished, augmented)</li>
<li>Recognize chromatic harmony and its expressive effects</li>
<li>Understand how harmony supports programmatic content in <em>Vltava</em></li>
<li>Compare Romantic harmony with other musical periods</li>
<li>Analyze harmonic progressions and their emotional effects</li>
<li>Use correct terminology when describing harmonic features</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Distinguish between major and minor harmonies</li>
<li>Recognize consonant and dissonant harmonies</li>
<li>Identify harmonic changes and progressions</li>
<li>Understand how harmony creates mood and character</li>
<li>Recognize the relationship between harmony and melody</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default Romantic0106HarmonyPage;
