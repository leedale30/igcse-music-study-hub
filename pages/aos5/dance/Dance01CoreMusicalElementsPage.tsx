import React from 'react';
import { Link } from 'react-router-dom';

const Dance01CoreMusicalElementsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Core Musical Elements</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Core Musical Elements
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
<h1>Area of Study 5: Music for Dance</h1>
<h2>Core Musical Elements</h2>
<p className="page-description">
                    Explore how the ten core musical elements function within various dance styles that utilize consistent tempos, driving rhythms, and characteristic instrumentation. This area of study covers Tango, Salsa, and Electronic Dance Music (EDM), examining how these elements combine to create appropriate cultural and emotional contexts.
                </p>
</section>
<!-- Navigation to Individual Elements -->
<section id="elements-navigation">
<h3>Core Musical Elements</h3>
<div className="elements-grid">
<div className="element-card">
<h4><a href="aos05-01-01-dynamics.html">1. Dynamics</a></h4>
<p>Volume levels and expressive changes that heighten emotional intensity and signal structural changes</p>
</div>
<div className="element-card">
<h4><a href="aos05-01-02-rhythm.html">2. Rhythm</a></h4>
<p>Foundational patterns including habanera, clavé, and four-to-the-floor rhythms</p>
</div>
<div className="element-card">
<h4><a href="aos05-01-03-metre.html">3. Metre</a></h4>
<p>Regular pulse and time signatures that support specific dance movements</p>
</div>
<div className="element-card">
<h4><a href="aos05-01-04-tempo.html">4. Tempo</a></h4>
<p>BPM-based speeds that must be maintained consistently to support dance activity</p>
</div>
<div className="element-card">
<h4><a href="aos05-01-05-melody.html">5. Melody</a></h4>
<p>Lyrical, memorable tunes with extensive ornamentation serving dramatic needs</p>
</div>
<div className="element-card">
<h4><a href="aos05-01-06-harmony.html">6. Harmony</a></h4>
<p>Simple progressions enriched with chromaticism for emotional depth</p>
</div>
<div className="element-card">
<h4><a href="aos05-01-07-tonality.html">7. Tonality</a></h4>
<p>Key centres that dictate mood, moving fluidly between major and minor</p>
</div>
<div className="element-card">
<h4><a href="aos05-01-08-texture.html">8. Texture</a></h4>
<p>Clear homophonic arrangements with complex polyrhythmic layering</p>
</div>
<div className="element-card">
<h4><a href="aos05-01-09-timbre.html">9. Timbre</a></h4>
<p>Distinctive acoustic instruments and unique synthetic electronic sounds</p>
</div>
<div className="element-card">
<h4><a href="aos05-01-10-structure-form.html">10. Structure/Form</a></h4>
<p>Sectional organization serving choreography and dramatic tension</p>
</div>
</div>
</section>
<!-- Overview of Area of Study -->
<section id="aos-overview">
<h3>Area of Study Overview</h3>
<p>
                    Music for Dance requires candidates to explore musical features within various dance styles that utilize consistent tempos, driving rhythms, and characteristic instrumentation. Understanding how these elements are combined to create the appropriate cultural and emotional context is essential for listening and appraisal.
                </p>
<div className="overview-content">
<div className="overview-section">
<h4>Key Characteristics</h4>
<ul>
<li><strong>Functional Dynamics:</strong> Serving to heighten emotional intensity and signal structural changes</li>
<li><strong>Driving Rhythms:</strong> Insistent, repetitive patterns with intentional displacement of the beat</li>
<li><strong>Consistent Tempos:</strong> BPM-based speeds maintained throughout to support dance activity</li>
<li><strong>Memorable Melodies:</strong> Lyrical and extensively ornamented, serving dramatic or emotional needs</li>
<li><strong>Simple Harmony:</strong> Basic progressions often enriched with chromaticism</li>
<li><strong>Clear Tonality:</strong> Moving fluidly between major and minor to dictate mood</li>
<li><strong>Homophonic Texture:</strong> Clear melody with harmonic support, complex through polyrhythm</li>
<li><strong>Distinctive Timbres:</strong> Specific acoustic instruments or unique synthetic sounds</li>
<li><strong>Sectional Structure:</strong> Clearly serving choreography or dramatic arc of tension and release</li>
</ul>
</div>
</div>
</section>
<!-- Dance Styles Focus -->
<section id="dance-styles">
<h3>Dance Styles</h3>
<div className="styles-grid">
<div className="style-card">
<h4>Tango</h4>
<ul>
<li><strong>Rhythm:</strong> Habanera rhythm and syncopated patterns (sincopa)</li>
<li><strong>Dynamics:</strong> Intense dramatic shifts with sudden bursts and sultry passages</li>
<li><strong>Melody:</strong> Balance of lyrical legato and rhythmic ritmico styles</li>
<li><strong>Harmony:</strong> Basic chords enriched with chromaticism</li>
<li><strong>Tonality:</strong> Often minor keys reflecting melancholic nature</li>
<li><strong>Timbre:</strong> Distinctive bandoneon with orquesta tipica ensemble</li>
<li><strong>Structure:</strong> Sectional A-B-A forms with regular phrasing</li>
</ul>
</div>
<div className="style-card">
<h4>Salsa</h4>
<ul>
<li><strong>Rhythm:</strong> Interlocking polyrhythmic patterns based on son clavé</li>
<li><strong>Clavé Patterns:</strong> Forward clave (3:2) or reverse clave (2:3)</li>
<li><strong>Bass:</strong> Anticipated bass pattern emphasizing off-beats</li>
<li><strong>Harmony:</strong> Simple progressions with single tonal center</li>
<li><strong>Texture:</strong> Complex polyrhythm through layered rhythmic lines</li>
<li><strong>Timbre:</strong> Clavés, cuatro, bongos, and timbales</li>
<li><strong>Structure:</strong> Intro, verse, chorus (montuno), call-and-response</li>
</ul>
</div>
<div className="style-card">
<h4>Electronic Dance Music (EDM)</h4>
<ul>
<li><strong>Rhythm:</strong> Four-to-the-floor pattern with layered offbeat rhythms</li>
<li><strong>Tempo:</strong> Varies by sub-genre (House: 120-140 BPM, Dubstep: 140-175 BPM)</li>
<li><strong>Dynamics:</strong> Builds (crescendo) and drops (sudden release)</li>
<li><strong>Texture:</strong> Dense layering of rhythmic and harmonic elements</li>
<li><strong>Timbre:</strong> Electronic sounds, synthesizers, and drum machines</li>
<li><strong>Effects:</strong> Reverb, delay, and filtering</li>
<li><strong>Structure:</strong> Intro, build, drop, breakdown, build, drop, outro</li>
</ul>
</div>
</div>
</section>
<!-- Key Concepts -->
<section id="key-concepts">
<h3>Key Concepts</h3>
<div className="concepts-grid">
<div className="concept-card">
<h4>Rhythmic Foundation</h4>
<p>Understanding how specific rhythmic patterns (habanera, clavé, four-to-the-floor) define each dance style and create the necessary drive for movement.</p>
</div>
<div className="concept-card">
<h4>Cultural Context</h4>
<p>Recognizing how musical elements combine to create appropriate cultural and emotional contexts specific to each dance tradition.</p>
</div>
<div className="concept-card">
<h4>Functional Music</h4>
<p>Understanding how all musical elements serve the primary function of supporting and enhancing dance movement and choreography.</p>
</div>
<div className="concept-card">
<h4>Polyrhythmic Complexity</h4>
<p>Analyzing how multiple independent rhythmic layers create complex textures while maintaining clear homophonic structure.</p>
</div>
<div className="concept-card">
<h4>Electronic Innovation</h4>
<p>Exploring how technology shapes timbre, structure, and production techniques in contemporary dance music.</p>
</div>
<div className="concept-card">
<h4>Tempo Consistency</h4>
<p>Understanding the importance of maintaining consistent BPM throughout dance tracks to support choreographic requirements.</p>
</div>
</div>
</section>
<!-- Assessment Focus -->
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<div className="assessment-content">
<h4>What You Need to Know</h4>
<ul>
<li>Identify and describe musical features and stylistic elements present in recordings</li>
<li>Recognize characteristic rhythmic patterns (habanera, clavé, four-to-the-floor)</li>
<li>Understand how dynamics create tension and release in dance music</li>
<li>Identify distinctive timbres of key instruments (bandoneon, clavés, synthesizers)</li>
<li>Analyze how structure serves choreographic and dramatic needs</li>
<li>Recognize BPM ranges for different EDM sub-genres</li>
<li>Understand polyrhythmic layering in Salsa music</li>
<li>Identify major/minor tonality and its emotional impact</li>
</ul>
<h4>Assessment Scope</h4>
<p><strong>Note:</strong> For Area of Study 5 (Music for Dance), candidates will <strong>not</strong> be expected to:</p>
<ul>
<li>Identify or name specific composers or performers</li>
<li>Identify any sub-genres (e.g., specific type of Tango or Salsa)</li>
<li>Identify the specific time period of an extract</li>
</ul>
<p>The focus remains purely on recognizing and describing the <em>musical features</em> and <em>stylistic elements</em> actually present in the recording.</p>
</div>
</section>
</div>` }} />
      </div>
    </article>
  );
};

export default Dance01CoreMusicalElementsPage;
