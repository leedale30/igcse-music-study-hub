import React from 'react';
import { Link } from 'react-router-dom';

const Dance0105MelodyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Melody</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Melody
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
<h1>Melody in Music for Dance</h1>
<h2>Area of Study 5: Music for Dance</h2>
<p className="element-definition">
<strong>Definition:</strong> The main tune or linear sequence of pitches that forms the musical identity
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
<a href="../aos05-01-06-harmony/aos05-01-06-harmony.html">6. Harmony</a>
<a href="../aos05-01-07-tonality/aos05-01-07-tonality.html">7. Tonality</a>
<a href="../aos05-01-08-texture/aos05-01-08-texture.html">8. Texture</a>
<a href="../aos05-01-09-timbre/aos05-01-09-timbre.html">9. Timbre</a>
<a href="../aos05-01-10-structure-form/aos05-01-10-structure-form.html">10. Structure/Form</a>
</div>
</section>
<!-- Key Characteristics -->
<section id="key-characteristics">
<h3>Key Characteristics of Melody in Music for Dance</h3>
<p>Dance melodies are often lyrical, memorable, and extensively ornamented, frequently serving the dramatic or emotional needs of the text or atmosphere. They must be accessible and engaging to support the physical movement of dance.</p>
<!-- Tango Melodies -->
<div className="dance-style-section">
<h4>Tango Melodies</h4>
<div className="characteristics-grid">
<div className="characteristic-item">
<h5>Lyrical and Contrasting Styles</h5>
<p>Tango melodies balance <strong>lyrical, smooth, and legato</strong> styles (embodying melancholia) with <strong>ritmico</strong> (rhythmic, accented) styles. This creates the emotional depth characteristic of Argentine Tango.</p>
</div>
<div className="characteristic-item">
<h5>Ornamentation and Expression</h5>
<p>Melodic lines frequently use ornamentation such as <strong>trills</strong> and <strong>mordents</strong>, especially in Tango's <em>ritmico</em> style. Techniques like <strong>glissando</strong> and <strong>portamento</strong> (slides) are common in instruments like the <em>bandoneon</em> to express intensity.</p>
</div>
<div className="characteristic-item">
<h5>Melodic Movement</h5>
<p>Tango melodies employ both <strong>scalic</strong> (stepwise) movement and <strong>broken chord</strong> outlines. The melodic contour often reflects the passionate and dramatic nature of the dance.</p>
</div>
</div>
</div>
<!-- Salsa Melodies -->
<div className="dance-style-section">
<h4>Salsa Melodies</h4>
<div className="characteristics-grid">
<div className="characteristic-item">
<h5>Call and Response</h5>
<p>Salsa melodies often feature <strong>call and response</strong> patterns between lead vocals and backing singers, creating an interactive and engaging melodic structure that supports the social nature of the dance.</p>
</div>
<div className="characteristic-item">
<h5>Rhythmic Integration</h5>
<p>Melodic phrases are closely integrated with the underlying <strong>clavé</strong> rhythm, with melodic accents often falling on syncopated beats rather than strong beats, creating the characteristic Salsa groove.</p>
</div>
<div className="characteristic-item">
<h5>Instrumental Hooks</h5>
<p>Salsa features memorable instrumental <strong>hooks</strong> and <strong>riffs</strong>, particularly in brass sections (trumpets, trombones) and piano <em>montuno</em> patterns that provide recognizable melodic fragments.</p>
</div>
</div>
</div>
<!-- EDM Melodies -->
<div className="dance-style-section">
<h4>Electronic Dance Music (EDM) Melodies</h4>
<div className="characteristics-grid">
<div className="characteristic-item">
<h5>Hooks and Drops</h5>
<p>EDM relies heavily on catchy <strong>hooks</strong> - short, memorable melodic sequences that are repeated and varied throughout the track. These often coincide with the <strong>drop</strong> sections for maximum impact.</p>
</div>
<div className="characteristic-item">
<h5>Synthesized Timbres</h5>
<p>Melodies are created using <strong>synthesizers</strong> with various electronic timbres, from warm pads to sharp leads. <strong>Pitch-bending</strong> and <strong>filter sweeps</strong> are common melodic techniques.</p>
</div>
<div className="characteristic-item">
<h5>Layered Construction</h5>
<p>EDM melodies are often built in layers, with multiple melodic elements entering and leaving throughout the track's progression, creating complex but danceable melodic textures.</p>
</div>
</div>
</div>
</section>
<!-- Melodic Devices and Techniques -->
<section id="melodic-techniques">
<h3>Essential Melodic Devices and Techniques</h3>
<div className="techniques-grid">
<div className="technique-category">
<h4>Melodic Movement</h4>
<ul>
<li><strong>Scalic (Stepwise)</strong> - Moving by adjacent pitches</li>
<li><strong>Leaps</strong> - Jumping between non-adjacent pitches</li>
<li><strong>Broken Chords</strong> - Melodic outlines of harmonic structures</li>
<li><strong>Arpeggios</strong> - Chord tones played in succession</li>
</ul>
</div>
<div className="technique-category">
<h4>Ornamentation</h4>
<ul>
<li><strong>Trill</strong> - Rapid alternation between two adjacent notes</li>
<li><strong>Mordent</strong> - Quick ornamental note</li>
<li><strong>Glissando</strong> - Sliding between pitches</li>
<li><strong>Portamento</strong> - Smooth slide between notes</li>
</ul>
</div>
<div className="technique-category">
<h4>Structural Elements</h4>
<ul>
<li><strong>Hook</strong> - Catchy, memorable melodic phrase</li>
<li><strong>Riff</strong> - Recurring melodic motif</li>
<li><strong>Sequence</strong> - Melodic pattern repeated at different pitch levels</li>
<li><strong>Motif</strong> - Short melodic idea that can be developed</li>
</ul>
</div>
</div>
</section>
<!-- Analysis Focus -->
<section id="analysis-focus">
<h3>Key Points for Analysis</h3>
<div className="analysis-points">
<div className="analysis-category">
<h4>Melodic Character</h4>
<ul>
<li>Is the melody lyrical and smooth or rhythmic and accented?</li>
<li>How does the melodic style support the dance characteristics?</li>
<li>What is the overall melodic contour (rising, falling, arch-shaped)?</li>
</ul>
</div>
<div className="analysis-category">
<h4>Technical Features</h4>
<ul>
<li>What types of melodic movement are used (stepwise vs. leaps)?</li>
<li>Are there ornaments or expressive techniques present?</li>
<li>How do hooks and riffs contribute to memorability?</li>
</ul>
</div>
<div className="analysis-category">
<h4>Cultural Context</h4>
<ul>
<li>How does the melody reflect the cultural origins of the dance style?</li>
<li>What instrumental timbres carry the main melodic lines?</li>
<li>How does the melody interact with the rhythmic foundation?</li>
</ul>
</div>
</div>
</section>
<!-- Assessment Focus -->
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<div className="assessment-note">
<p><strong>Important:</strong> For Area of Study 5 (Music for Dance), candidates will <strong>not</strong> be expected to identify specific composers, performers, or sub-genres. The focus remains on recognizing and describing the <em>musical features</em> and <em>stylistic elements</em> present in the recording.</p>
<p>Listen for how melodic characteristics support the dance function and create the appropriate cultural and emotional context within Tango, Salsa, and EDM styles.</p>
</div>
</section>
</div>` }} />
      </div>
    </article>
  );
};

export default Dance0105MelodyPage;
