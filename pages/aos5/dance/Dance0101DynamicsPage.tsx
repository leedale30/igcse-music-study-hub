import React from 'react';
import { Link } from 'react-router-dom';

const Dance0101DynamicsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Dynamics</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Dynamics
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
<h1>Dynamics in Music for Dance</h1>
<h2>Area of Study 5: Music for Dance</h2>
<p className="element-definition">
<strong>Definition:</strong> The volume levels and expressive changes throughout a piece
                </p>
</section>
<!-- Navigation to Other Elements -->
<section id="element-navigation">
<h3>Other Core Musical Elements</h3>
<div className="nav-grid">
<a href="../aos05-01-02-rhythm/aos05-01-02-rhythm.html">2. Rhythm</a>
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
<h3>Key Characteristics of Dynamics in Music for Dance</h3>
<p>
                    In Music for Dance, dynamics are predominantly functional, serving to heighten emotional intensity 
                    and signal structural changes, particularly in Tango and Electronic Dance Music (EDM). The use of 
                    dynamics is closely tied to the physical and emotional demands of dance movement.
                </p>
<div className="characteristics-grid">
<div className="characteristic-card">
<h4>Expressive Range</h4>
<p>Candidates must be able to identify the full range of dynamic markings, including:</p>
<ul>
<li><strong>pp</strong> (pianissimo) - very soft</li>
<li><strong>p</strong> (piano) - soft</li>
<li><strong>mp</strong> (mezzo-piano) - moderately soft</li>
<li><strong>mf</strong> (mezzo-forte) - moderately loud</li>
<li><strong>f</strong> (forte) - loud</li>
<li><strong>ff</strong> (fortissimo) - very loud</li>
</ul>
</div>
<div className="characteristic-card">
<h4>Gradual Changes</h4>
<p>Essential dynamic processes in dance music:</p>
<ul>
<li><strong>Crescendo</strong> - gradually getting louder</li>
<li><strong>Diminuendo</strong> (or decrescendo) - gradually getting quieter</li>
<li>Used to build tension and create emotional peaks</li>
<li>Critical for structural development in EDM builds and drops</li>
</ul>
</div>
<div className="characteristic-card">
<h4>Sudden Changes</h4>
<p>Dramatic dynamic shifts for impact:</p>
<ul>
<li><strong>Sforzando (sfz)</strong> - sudden strong accent</li>
<li>Sudden loud dynamics for punctuating action</li>
<li>Sharp contrasts between sections</li>
<li>Used for dramatic emphasis in all dance styles</li>
</ul>
</div>
</div>
</section>
<!-- Dance Style Applications -->
<section id="dance-styles">
<h3>Dynamics in Different Dance Styles</h3>
<div className="style-section">
<h4>Tango Dynamics</h4>
<p>
                        Tango music relies on intense and dramatic shifts in dynamics to support the passionate, 
                        dramatic nature of the dance. These dynamic contrasts are integral to the emotional expression 
                        and physical intensity of tango performance.
                    </p>
<div className="style-features">
<h5>Key Features:</h5>
<ul>
<li><strong>Sudden Bursts:</strong> Explosive forte passages with strong chordal accompaniment</li>
<li><strong>Sultry Passages:</strong> Soft (piano) and slow sections for intimate moments</li>
<li><strong>Marcado Rhythm:</strong> Short staccato phrases with sharp dynamic contrasts</li>
<li><strong>Dramatic Shifts:</strong> Rapid alternation between loud and soft dynamics</li>
<li><strong>Expressive Function:</strong> Dynamics directly support the emotional narrative of the dance</li>
</ul>
</div>
</div>
<div className="style-section">
<h4>Salsa Dynamics</h4>
<p>
                        Salsa dynamics are generally more consistent than Tango, focusing on maintaining energy 
                        and drive for continuous dancing. Dynamic changes often coincide with structural sections 
                        and call-and-response patterns.
                    </p>
<div className="style-features">
<h5>Key Features:</h5>
<ul>
<li><strong>Consistent Energy:</strong> Maintained dynamic level to support continuous movement</li>
<li><strong>Sectional Changes:</strong> Dynamic shifts between verse and chorus (montuno)</li>
<li><strong>Call and Response:</strong> Dynamic contrasts between lead vocals and ensemble responses</li>
<li><strong>Instrumental Breaks:</strong> Dynamic build-ups during mambo sections</li>
<li><strong>Polyrhythmic Layers:</strong> Different dynamic levels in layered rhythmic parts</li>
</ul>
</div>
</div>
<div className="style-section">
<h4>Electronic Dance Music (EDM) Dynamics</h4>
<p>
                        EDM uses dynamics as a critical structural mechanism, with builds and drops forming the 
                        fundamental architecture of the music. Dynamic change is essential to creating the tension 
                        and release that drives dance floor energy.
                    </p>
<div className="style-features">
<h5>Key Features:</h5>
<ul>
<li><strong>Builds:</strong> Dramatic crescendo with increasing texture and rising volume to maximize tension</li>
<li><strong>Drops:</strong> Sudden release of tension with extreme, often loud dynamics marking structural shifts</li>
<li><strong>Breakdowns:</strong> Reduced dynamics and texture to create contrast</li>
<li><strong>Layered Dynamics:</strong> Different dynamic levels for various electronic elements</li>
<li><strong>Filter Effects:</strong> Dynamic changes achieved through electronic filtering and processing</li>
</ul>
</div>
</div>
</section>
<!-- Technical Terminology -->
<section id="terminology">
<h3>Essential Dynamic Terminology</h3>
<div className="terminology-grid">
<div className="term-card">
<h4>Volume Levels</h4>
<ul>
<li><strong>Pianissimo (pp):</strong> Very soft</li>
<li><strong>Piano (p):</strong> Soft</li>
<li><strong>Mezzo-piano (mp):</strong> Moderately soft</li>
<li><strong>Mezzo-forte (mf):</strong> Moderately loud</li>
<li><strong>Forte (f):</strong> Loud</li>
<li><strong>Fortissimo (ff):</strong> Very loud</li>
</ul>
</div>
<div className="term-card">
<h4>Dynamic Changes</h4>
<ul>
<li><strong>Crescendo (cresc.):</strong> Gradually getting louder</li>
<li><strong>Diminuendo (dim.):</strong> Gradually getting quieter</li>
<li><strong>Decrescendo (decresc.):</strong> Gradually getting quieter</li>
<li><strong>Sforzando (sfz):</strong> Sudden strong accent</li>
<li><strong>Accent (&gt;):</strong> Emphasis on a particular note</li>
</ul>
</div>
<div className="term-card">
<h4>EDM-Specific Terms</h4>
<ul>
<li><strong>Build:</strong> Gradual increase in dynamics and texture</li>
<li><strong>Drop:</strong> Sudden dynamic and textural change</li>
<li><strong>Breakdown:</strong> Reduction in dynamics and elements</li>
<li><strong>Filter Sweep:</strong> Dynamic change through electronic filtering</li>
<li><strong>Sidechain:</strong> Dynamic pumping effect</li>
</ul>
</div>
</div>
</section>
<!-- Performance Practice -->
<section id="performance-practice">
<h3>Performance Practice and Dynamics</h3>
<div className="practice-content">
<h4>Instrumental Techniques</h4>
<p>Different instruments achieve dynamic effects through various techniques:</p>
<div className="technique-grid">
<div className="technique-card">
<h5>Tango Instruments</h5>
<ul>
<li><strong>Bandoneon:</strong> Bellows pressure controls dynamics</li>
<li><strong>Strings:</strong> Bow pressure and speed for dynamic variation</li>
<li><strong>Piano:</strong> Touch sensitivity for dynamic expression</li>
</ul>
</div>
<div className="technique-card">
<h5>Salsa Instruments</h5>
<ul>
<li><strong>Brass:</strong> Breath control and embouchure for dynamics</li>
<li><strong>Percussion:</strong> Strike intensity and technique variation</li>
<li><strong>Vocals:</strong> Breath support and projection control</li>
</ul>
</div>
<div className="technique-card">
<h5>EDM Production</h5>
<ul>
<li><strong>Volume Automation:</strong> Precise dynamic control</li>
<li><strong>Compression:</strong> Dynamic range manipulation</li>
<li><strong>Filtering:</strong> Frequency-based dynamic effects</li>
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
<li>Identify and describe dynamic markings from pp to ff</li>
<li>Recognize crescendo and diminuendo in musical examples</li>
<li>Understand how dynamics support dance movement and emotional expression</li>
<li>Distinguish between sudden and gradual dynamic changes</li>
<li>Explain the role of builds and drops in EDM structure</li>
<li>Describe how different dance styles use dynamics characteristically</li>
<li>Analyze the relationship between dynamics and musical structure</li>
<li>Use appropriate terminology when describing dynamic effects</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Identify dynamic levels in recorded examples</li>
<li>Track dynamic changes throughout a piece</li>
<li>Recognize the structural function of dynamic changes</li>
<li>Distinguish between natural and electronically produced dynamics</li>
<li>Understand how dynamics contribute to style identification</li>
</ul>
</div>
</section>
</div>` }} />
      </div>
    </article>
  );
};

export default Dance0101DynamicsPage;
