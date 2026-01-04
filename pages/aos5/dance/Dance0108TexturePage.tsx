import React from 'react';
import { Link } from 'react-router-dom';

const Dance0108TexturePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Texture</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Texture
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
<h1>Texture in Music for Dance</h1>
<h2>Area of Study 5: Music for Dance</h2>
<p className="element-definition">
<strong>Definition:</strong> The way musical lines and layers are woven together to create the overall musical fabric
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
<a href="../aos05-01-07-tonality/aos05-01-07-tonality.html">7. Tonality</a>
<a href="../aos05-01-09-timbre/aos05-01-09-timbre.html">9. Timbre</a>
<a href="../aos05-01-10-structure-form/aos05-01-10-structure-form.html">10. Structure/Form</a>
</div>
</section>
<!-- Key Characteristics -->
<section id="key-characteristics">
<h3>Key Characteristics of Texture in Music for Dance</h3>
<p>Texture in dance music is carefully crafted to support movement while maintaining musical interest. The layering of instruments and voices creates the sonic environment that enables and enhances the dance experience.</p>
<!-- Tango Texture -->
<div className="dance-style-section">
<h4>Tango Texture</h4>
<div className="characteristics-grid">
<div className="characteristic-item">
<h5>Melody and Accompaniment</h5>
<p>Tango typically features a <strong>homophonic texture</strong> with a clear melodic line (often played by <em>bandoneon</em> or violin) supported by harmonic accompaniment from piano, guitar, and bass.</p>
</div>
<div className="characteristic-item">
<h5>Contrapuntal Elements</h5>
<p>More sophisticated Tangos incorporate <strong>countermelodies</strong> and <strong>contrapuntal lines</strong>, particularly between the bandoneon and violin, creating a richer polyphonic texture.</p>
</div>
<div className="characteristic-item">
<h5>Rhythmic Layering</h5>
<p>The texture includes distinct <strong>rhythmic layers</strong>: the bass providing the fundamental pulse, piano marking the harmonic rhythm, and percussion (when present) adding syncopated accents.</p>
</div>
</div>
</div>
<!-- Salsa Texture -->
<div className="dance-style-section">
<h4>Salsa Texture</h4>
<div className="characteristics-grid">
<div className="characteristic-item">
<h5>Complex Polyrhythmic Layers</h5>
<p>Salsa features <strong>polyrhythmic texture</strong> with multiple percussion instruments creating interlocking rhythmic patterns. The <strong>clavé</strong> provides the foundational layer while congas, timbales, and other percussion add complexity.</p>
</div>
<div className="characteristic-item">
<h5>Call and Response</h5>
<p>Vocal texture often employs <strong>call and response</strong> between lead singer and chorus, creating an antiphonal texture that engages listeners and supports the social aspect of dancing.</p>
</div>
<div className="characteristic-item">
<h5>Brass Section Arrangements</h5>
<p>The <strong>horn section</strong> (trumpets and trombones) creates thick, harmonized textures during ensemble sections, contrasting with thinner textures during solos and verses.</p>
</div>
</div>
</div>
<!-- EDM Texture -->
<div className="dance-style-section">
<h4>Electronic Dance Music (EDM) Texture</h4>
<div className="characteristics-grid">
<div className="characteristic-item">
<h5>Layered Electronic Elements</h5>
<p>EDM builds texture through <strong>electronic layers</strong>: bass lines, drum patterns, synthesizer pads, lead synths, and effects, each occupying specific frequency ranges to avoid sonic conflicts.</p>
</div>
<div className="characteristic-item">
<h5>Build and Drop Structure</h5>
<p>Texture changes dramatically between sections, with <strong>builds</strong> adding layers progressively and <strong>drops</strong> featuring full, dense textures that maximize energy for dancing.</p>
</div>
<div className="characteristic-item">
<h5>Spatial and Stereo Effects</h5>
<p>Electronic production allows for <strong>spatial textures</strong> using stereo panning, reverb, and delay effects to create wide, immersive soundscapes that enhance the dance floor experience.</p>
</div>
</div>
</div>
</section>
<!-- Textural Types and Techniques -->
<section id="textural-techniques">
<h3>Essential Textural Types and Techniques</h3>
<div className="techniques-grid">
<div className="technique-category">
<h4>Basic Texture Types</h4>
<ul>
<li><strong>Monophonic</strong> - Single melodic line without accompaniment</li>
<li><strong>Homophonic</strong> - Melody with harmonic accompaniment</li>
<li><strong>Polyphonic</strong> - Multiple independent melodic lines</li>
<li><strong>Heterophonic</strong> - Variations of the same melody played simultaneously</li>
</ul>
</div>
<div className="technique-category">
<h4>Layering Techniques</h4>
<ul>
<li><strong>Rhythmic Layering</strong> - Different rhythmic patterns combined</li>
<li><strong>Melodic Layering</strong> - Multiple melodic lines at different pitch levels</li>
<li><strong>Harmonic Layering</strong> - Chord tones distributed across instruments</li>
<li><strong>Timbral Layering</strong> - Different tone colors combined</li>
</ul>
</div>
<div className="technique-category">
<h4>Textural Devices</h4>
<ul>
<li><strong>Call and Response</strong> - Alternating musical phrases</li>
<li><strong>Countermelody</strong> - Secondary melodic line</li>
<li><strong>Ostinato</strong> - Repeated musical pattern</li>
<li><strong>Unison</strong> - Multiple parts playing the same line</li>
</ul>
</div>
</div>
</section>
<!-- Analysis Focus -->
<section id="analysis-focus">
<h3>Key Points for Analysis</h3>
<div className="analysis-points">
<div className="analysis-category">
<h4>Textural Density</h4>
<ul>
<li>How many musical layers are present?</li>
<li>Does the texture change throughout the piece?</li>
<li>How does textural density support the dance function?</li>
</ul>
</div>
<div className="analysis-category">
<h4>Instrumental Roles</h4>
<ul>
<li>Which instruments carry the melody?</li>
<li>How is the accompaniment organized?</li>
<li>What role does each instrument play in the overall texture?</li>
</ul>
</div>
<div className="analysis-category">
<h4>Textural Relationships</h4>
<ul>
<li>How do different musical lines interact?</li>
<li>Are there examples of call and response or counterpoint?</li>
<li>How does texture relate to the formal structure?</li>
</ul>
</div>
</div>
</section>
<!-- Assessment Focus -->
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<div className="assessment-note">
<p><strong>Important:</strong> For Area of Study 5 (Music for Dance), candidates will <strong>not</strong> be expected to identify specific composers, performers, or sub-genres. The focus remains on recognizing and describing the <em>musical features</em> and <em>stylistic elements</em> present in the recording.</p>
<p>Listen for how textural characteristics support the dance function and create the appropriate sonic environment within Tango, Salsa, and EDM styles.</p>
</div>
</section>
</div>` }} />
      </div>
    </article>
  );
};

export default Dance0108TexturePage;
