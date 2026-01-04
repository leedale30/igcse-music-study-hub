import React from 'react';
import { Link } from 'react-router-dom';

const Romantic0107TonalityPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Tonality</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Tonality
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
<p>In Romantic music, tonality becomes more flexible and expressive than in earlier periods. While still fundamentally tonal, Romantic composers expanded the tonal language through chromatic harmony, distant modulations, and the exploration of major-minor relationships. Tonality serves not only structural purposes but also expressive and programmatic functions, with specific keys often associated with particular emotions or characters.</p>
</section>
 Key Characteristics Section 
<section id="key-characteristics">
<h3>Key Characteristics of Romantic Tonality</h3>
<div className="characteristic" id="chromatic-tonality">
<h4>Chromatic Expansion of Tonality</h4>
<p>Romantic composers expanded traditional tonality by incorporating extensive chromatic harmony, which stretched the boundaries of key centers while maintaining tonal coherence.</p>
<ul>
<li><strong>Chromatic harmony:</strong> Extensive use of notes outside the key</li>
<li><strong>Altered chords:</strong> Modified traditional chords for color</li>
<li><strong>Enharmonic modulation:</strong> Key changes using enharmonic equivalents</li>
<li><strong>Tonal ambiguity:</strong> Temporary uncertainty about key center</li>
</ul>
</div>
<div className="characteristic" id="expressive-keys">
<h4>Expressive Key Relationships</h4>
<p>Romantic composers used specific keys and key relationships to convey emotions, create dramatic effects, and support programmatic content, with keys often having symbolic or emotional associations.</p>
<ul>
<li><strong>Key symbolism:</strong> Specific keys associated with emotions</li>
<li><strong>Major-minor contrast:</strong> Dramatic shifts between major and minor</li>
<li><strong>Distant modulations:</strong> Moves to remote keys for effect</li>
<li><strong>Tonal painting:</strong> Keys chosen for descriptive purposes</li>
</ul>
</div>
<div className="characteristic" id="programmatic-tonality">
<h4>Programmatic and Descriptive Tonality</h4>
<p>In programme music like <em>Vltava</em>, tonality is used descriptively to represent different scenes, characters, and emotions, making the musical narrative more vivid and meaningful.</p>
<ul>
<li><strong>Scene representation:</strong> Different keys for different scenes</li>
<li><strong>Character keys:</strong> Specific tonalities for characters</li>
<li><strong>Emotional mapping:</strong> Keys reflecting emotional states</li>
<li><strong>Narrative structure:</strong> Tonal journey following the story</li>
</ul>
</div>
<div className="characteristic" id="national-tonality">
<h4>National and Folk Influences</h4>
<p>Romantic composers, especially nationalists like Smetana, incorporated modal elements and folk scales that reflect their national musical traditions, creating distinctive tonal flavors.</p>
<ul>
<li><strong>Modal inflections:</strong> Use of church modes and folk modes</li>
<li><strong>Pentatonic scales:</strong> Five-note scales from folk traditions</li>
<li><strong>National characteristics:</strong> Tonal features reflecting cultural identity</li>
<li><strong>Folk scales:</strong> Traditional scales incorporated into art music</li>
</ul>
</div>
</section>
 Terminology Section 
<section id="terminology">
<h3>Essential Tonality Terminology</h3>
<div className="terminology-grid">
<div className="term-card">
<h4>Basic Tonal Terms</h4>
<ul>
<li><strong>Key:</strong> The tonal center of a piece</li>
<li><strong>Tonic:</strong> The home note/chord of a key</li>
<li><strong>Major:</strong> Bright-sounding key type</li>
<li><strong>Minor:</strong> Darker-sounding key type</li>
<li><strong>Scale:</strong> The notes that belong to a key</li>
</ul>
</div>
<div className="term-card">
<h4>Modulation Terms</h4>
<ul>
<li><strong>Modulation:</strong> Change from one key to another</li>
<li><strong>Related keys:</strong> Keys sharing many common notes</li>
<li><strong>Distant keys:</strong> Keys with few common notes</li>
<li><strong>Pivot chord:</strong> Chord common to both keys</li>
<li><strong>Enharmonic:</strong> Same pitch with different names</li>
</ul>
</div>
<div className="term-card">
<h4>Advanced Tonal Terms</h4>
<ul>
<li><strong>Chromatic:</strong> Using notes outside the key</li>
<li><strong>Modal:</strong> Using church modes or folk modes</li>
<li><strong>Pentatonic:</strong> Five-note scale</li>
<li><strong>Whole tone:</strong> Scale of whole steps only</li>
<li><strong>Tonal center:</strong> The perceived home key</li>
</ul>
</div>
</div>
</section>
 Comparison Section 
<section id="comparison">
<h3>Comparison with Baroque Tonality</h3>
<div className="comparison-table">
<div className="baroque-column">
<h4>Baroque Tonality</h4>
<ul>
<li>Clear, stable key centers</li>
<li>Limited chromatic harmony</li>
<li>Functional tonal relationships</li>
<li>Modulations to related keys</li>
<li>Structural use of tonality</li>
</ul>
</div>
<div className="romantic-column">
<h4>Romantic Tonality</h4>
<ul>
<li>Flexible, expressive key centers</li>
<li>Extensive chromatic harmony</li>
<li>Expressive tonal relationships</li>
<li>Modulations to distant keys</li>
<li>Programmatic use of tonality</li>
</ul>
</div>
</div>
</section>
 Focus Work Examples 
<section id="focus-work-examples">
<h3>Focus Work: Smetana's <em>Vltava</em></h3>
<h4>Tonal Examples in <em>Vltava</em></h4>
<div className="example" id="river-source-tonality">
<h5>1. The River Source</h5>
<p><strong>Tonality:</strong> E minor (clear, simple tonality)</p>
<p><strong>Effect:</strong> The clear, uncomplicated E minor tonality creates a sense of purity and freshness, representing the clean, natural source of the river in the mountains.</p>
</div>
<div className="example" id="main-theme-tonality">
<h5>2. Main River Theme</h5>
<p><strong>Tonality:</strong> E minor with rich harmonic support</p>
<p><strong>Effect:</strong> The established E minor key provides a strong tonal foundation for the famous river melody, creating a sense of home and belonging that represents the Czech homeland.</p>
</div>
<div className="example" id="hunting-tonality">
<h5>3. Hunting Scene</h5>
<p><strong>Tonality:</strong> Modulation to C major</p>
<p><strong>Effect:</strong> The shift to the bright, heroic key of C major creates a contrast with the minor-mode river theme, representing the outdoor, aristocratic world of the hunt.</p>
</div>
<div className="example" id="wedding-tonality">
<h5>4. Peasant Wedding</h5>
<p><strong>Tonality:</strong> G major with modal inflections</p>
<p><strong>Effect:</strong> The major key creates a joyful, celebratory mood, while modal inflections (particularly the flattened 7th) give the music its folk character and Czech national identity.</p>
</div>
<div className="example" id="nymphs-tonality">
<h5>5. Moonlight Dance of Water Nymphs</h5>
<p><strong>Tonality:</strong> A♭ major with chromatic harmony</p>
<p><strong>Effect:</strong> The distant key of A♭ major (far from the home key of E minor) creates an otherworldly, supernatural atmosphere, enhanced by chromatic harmony that blurs the tonal center.</p>
</div>
<div className="example" id="rapids-tonality">
<h5>6. St. John's Rapids</h5>
<p><strong>Tonality:</strong> Turbulent modulations and tonal instability</p>
<p><strong>Effect:</strong> Rapid key changes and tonal instability create musical chaos, representing the dangerous, unpredictable nature of the rapids where the river loses its peaceful character.</p>
</div>
<div className="example" id="final-tonality">
<h5>7. Final Statement</h5>
<p><strong>Tonality:</strong> Triumphant E major (transformation from minor to major)</p>
<p><strong>Effect:</strong> The transformation from E minor to E major creates a sense of triumph and fulfillment, representing the river's successful journey to Prague and its historical significance.</p>
</div>
</section>
 Performance Practice 
<section id="performance-practice">
<h3>Performance Practice</h3>
<h4>Interpreting Romantic Tonality</h4>
<ul>
<li><strong>Key Character:</strong> Understand the expressive character of different keys</li>
<li><strong>Modulation Clarity:</strong> Make key changes clear and meaningful</li>
<li><strong>Chromatic Intonation:</strong> Careful tuning of chromatic notes</li>
<li><strong>Tonal Direction:</strong> Understand the tonal journey of the piece</li>
<li><strong>Harmonic Sensitivity:</strong> Respond to harmonic implications of tonality</li>
</ul>
<h4>Ensemble Considerations</h4>
<ul>
<li><strong>Intonation:</strong> Precise tuning in all keys and modulations</li>
<li><strong>Balance:</strong> Proper balance to clarify tonal relationships</li>
<li><strong>Blend:</strong> Smooth ensemble sound in all keys</li>
<li><strong>Timing:</strong> Coordinated execution of modulations</li>
</ul>
</section>
 Assessment Focus 
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<h4>What You Need to Know</h4>
<ul>
<li>Identify major and minor keys and their characteristics</li>
<li>Recognize modulations and key changes</li>
<li>Understand how tonality supports programmatic content in <em>Vltava</em></li>
<li>Compare Romantic tonality with other musical periods</li>
<li>Analyze the expressive use of key relationships</li>
<li>Use correct terminology when describing tonal features</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Distinguish between major and minor keys</li>
<li>Recognize key changes and modulations</li>
<li>Identify the home key (tonic) of a piece</li>
<li>Understand how tonality creates mood and character</li>
<li>Recognize chromatic harmony and its effects</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default Romantic0107TonalityPage;
