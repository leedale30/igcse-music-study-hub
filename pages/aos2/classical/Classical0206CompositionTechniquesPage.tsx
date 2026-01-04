import React from 'react';
import { Link } from 'react-router-dom';

const Classical0206CompositionTechniquesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Composition Techniques</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Composition Techniques
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 2 • Classical Music
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
        [&_.assessment-section]:bg-amber-50 [&_.assessment-section]:dark:bg-amber-900/20 [&_.assessment-section]:border [&_.assessment-section]:border-amber-200 [&_.assessment-section]:dark:border-amber-800
        [&_.definition-section]:bg-sky-50 [&_.definition-section]:dark:bg-sky-900/20 [&_.definition-section]:border [&_.definition-section]:border-sky-200 [&_.definition-section]:dark:border-sky-800
        [&_.characteristic-item]:bg-white [&_.characteristic-item]:dark:bg-slate-700 [&_.characteristic-item]:rounded-lg [&_.characteristic-item]:p-4 [&_.characteristic-item]:mb-4 [&_.characteristic-item]:border [&_.characteristic-item]:border-slate-200 [&_.characteristic-item]:dark:border-slate-600
        [&_.example-item]:bg-white [&_.example-item]:dark:bg-slate-700 [&_.example-item]:rounded-lg [&_.example-item]:p-4 [&_.example-item]:mb-4 [&_.example-item]:border [&_.example-item]:border-slate-200 [&_.example-item]:dark:border-slate-600
      ">
        <div dangerouslySetInnerHTML={{ __html: `<section id="introduction">
<h2>Introduction</h2>
<p>Classical composition techniques represent a sophisticated balance between formal structure and expressive content. Composers developed systematic approaches to musical organization that emphasized clarity, proportion, and logical development of musical ideas.</p>
</section>
<section id="sonata-form">
<h2>Sonata Form</h2>
<p>The most important structural innovation of the Classical period, sonata form provides a framework for large-scale musical organization.</p>
<h3>Sonata Form Structure</h3>
<div className="sonata-form-diagram">
<div className="section exposition">
<h4>Exposition</h4>
<ul>
<li><strong>First Theme:</strong> Tonic key, stable and memorable</li>
<li><strong>Transition:</strong> Modulation to dominant (or relative major)</li>
<li><strong>Second Theme:</strong> Contrasting character in new key</li>
<li><strong>Codetta:</strong> Closing material, often repeated</li>
</ul>
</div>
<div className="section development">
<h4>Development</h4>
<ul>
<li><strong>Motivic fragmentation:</strong> Breaking themes into smaller units</li>
<li><strong>Sequential treatment:</strong> Repetition at different pitch levels</li>
<li><strong>Key exploration:</strong> Modulation through various keys</li>
<li><strong>Textural variation:</strong> Different instrumental combinations</li>
</ul>
</div>
<div className="section recapitulation">
<h4>Recapitulation</h4>
<ul>
<li><strong>First Theme:</strong> Return in tonic key</li>
<li><strong>Transition:</strong> Modified to stay in tonic</li>
<li><strong>Second Theme:</strong> Now in tonic key</li>
<li><strong>Coda:</strong> Extended closing section</li>
</ul>
</div>
</div>
<h3>Key Relationships in Sonata Form</h3>
<ul>
<li><strong>Major key works:</strong> Tonic → Dominant → Tonic</li>
<li><strong>Minor key works:</strong> Tonic → Relative Major → Tonic</li>
<li><strong>Development section:</strong> Exploration of related keys</li>
<li><strong>Harmonic tension:</strong> Created through key contrast and resolution</li>
</ul>
</section>
<section id="thematic-development">
<h2>Thematic Development Techniques</h2>
<p>Classical composers developed sophisticated methods for transforming and developing musical themes.</p>
<h3>Primary Development Methods</h3>
<div className="development-techniques">
<div className="technique">
<h4>Fragmentation</h4>
<p><strong>Process:</strong> Breaking themes into smaller motivic units</p>
<p><strong>Purpose:</strong> Creates developmental momentum</p>
<p><strong>Example:</strong> Beethoven Symphony No. 5, first movement</p>
<p><strong>Effect:</strong> Increases rhythmic and harmonic activity</p>
</div>
<div className="technique">
<h4>Sequence</h4>
<p><strong>Process:</strong> Repetition of patterns at different pitch levels</p>
<p><strong>Purpose:</strong> Drives harmonic progression</p>
<p><strong>Types:</strong> Real sequence (exact) or tonal sequence (adjusted)</p>
<p><strong>Effect:</strong> Creates sense of forward motion</p>
</div>
<div className="technique">
<h4>Inversion</h4>
<p><strong>Process:</strong> Turning melodic intervals upside down</p>
<p><strong>Purpose:</strong> Provides thematic variation</p>
<p><strong>Application:</strong> Often combined with other techniques</p>
<p><strong>Effect:</strong> Maintains identity while creating novelty</p>
</div>
<div className="technique">
<h4>Augmentation/Diminution</h4>
<p><strong>Process:</strong> Lengthening or shortening note values</p>
<p><strong>Purpose:</strong> Changes character and pace</p>
<p><strong>Usage:</strong> Often in development sections</p>
<p><strong>Effect:</strong> Creates rhythmic transformation</p>
</div>
</div>
<h3>Advanced Development Techniques</h3>
<ul>
<li><strong>Stretto:</strong> Overlapping entries of thematic material</li>
<li><strong>Liquidation:</strong> Gradual reduction of motivic content</li>
<li><strong>Combination:</strong> Simultaneous presentation of different themes</li>
<li><strong>Transformation:</strong> Character change through mode, rhythm, or harmony</li>
</ul>
</section>
<section id="formal-structures">
<h2>Classical Formal Structures</h2>
<p>Beyond sonata form, Classical composers employed various structural principles for different musical contexts.</p>
<h3>Binary Form</h3>
<div className="binary-form">
<h4>Simple Binary</h4>
<ul>
<li><strong>Structure:</strong> A : B</li>
<li><strong>Key scheme:</strong> Tonic → Dominant : Dominant → Tonic</li>
<li><strong>Usage:</strong> Dance movements, simple pieces</li>
<li><strong>Characteristics:</strong> Both sections usually repeated</li>
</ul>
<h4>Rounded Binary</h4>
<ul>
<li><strong>Structure:</strong> A : B A'</li>
<li><strong>Return:</strong> Opening material returns in tonic</li>
<li><strong>Usage:</strong> Sonata form movements, dance forms</li>
<li><strong>Development:</strong> B section often developmental</li>
</ul>
</div>
<h3>Ternary Form</h3>
<ul>
<li><strong>Structure:</strong> A B A</li>
<li><strong>Contrast:</strong> B section in contrasting key and character</li>
<li><strong>Return:</strong> Exact or varied return of A section</li>
<li><strong>Usage:</strong> Slow movements, character pieces</li>
</ul>
<h3>Rondo Form</h3>
<ul>
<li><strong>Basic structure:</strong> A B A C A (and variations)</li>
<li><strong>Refrain:</strong> A section returns in tonic key</li>
<li><strong>Episodes:</strong> B and C sections in contrasting keys</li>
<li><strong>Usage:</strong> Final movements, light character pieces</li>
</ul>
<h3>Theme and Variations</h3>
<ul>
<li><strong>Structure:</strong> Theme + Variation 1 + Variation 2 + etc.</li>
<li><strong>Variation types:</strong> Melodic, harmonic, rhythmic, textural</li>
<li><strong>Unity:</strong> Maintained through harmonic structure</li>
<li><strong>Variety:</strong> Created through surface changes</li>
</ul>
</section>
<section id="harmonic-techniques">
<h2>Harmonic Composition Techniques</h2>
<p>Classical harmony follows systematic principles that create both stability and forward motion.</p>
<h3>Fundamental Harmonic Principles</h3>
<div className="harmonic-principles">
<div className="principle">
<h4>Functional Harmony</h4>
<ul>
<li><strong>Tonic function:</strong> Stability and resolution (I, vi)</li>
<li><strong>Predominant function:</strong> Preparation for dominant (ii, IV)</li>
<li><strong>Dominant function:</strong> Tension requiring resolution (V, vii°)</li>
<li><strong>Progression:</strong> Logical movement between functions</li>
</ul>
</div>
<div className="principle">
<h4>Voice Leading</h4>
<ul>
<li><strong>Smooth motion:</strong> Minimal movement in individual voices</li>
<li><strong>Contrary motion:</strong> Voices moving in opposite directions</li>
<li><strong>Resolution:</strong> Proper handling of dissonance</li>
<li><strong>Independence:</strong> Each voice maintains melodic integrity</li>
</ul>
</div>
</div>
<h3>Modulation Techniques</h3>
<ul>
<li><strong>Pivot chord modulation:</strong> Common chord between keys</li>
<li><strong>Sequential modulation:</strong> Through sequence patterns</li>
<li><strong>Direct modulation:</strong> Immediate shift to new key</li>
<li><strong>Chromatic modulation:</strong> Through chromatic voice leading</li>
</ul>
<h3>Cadential Formulas</h3>
<ul>
<li><strong>Authentic cadence:</strong> V-I (strongest closure)</li>
<li><strong>Plagal cadence:</strong> IV-I (softer resolution)</li>
<li><strong>Half cadence:</strong> Ends on V (creates expectation)</li>
<li><strong>Deceptive cadence:</strong> V-vi (avoids expected resolution)</li>
</ul>
</section>
<section id="textural-techniques">
<h2>Textural Composition Techniques</h2>
<p>Classical composers employed various textural approaches to create interest and variety.</p>
<h3>Primary Textures</h3>
<div className="texture-types">
<div className="texture">
<h4>Homophony</h4>
<p><strong>Definition:</strong> Melody with harmonic accompaniment</p>
<p><strong>Usage:</strong> Most common Classical texture</p>
<p><strong>Varieties:</strong> Alberti bass, block chords, arpeggiated accompaniment</p>
<p><strong>Effect:</strong> Clear melodic focus with harmonic support</p>
</div>
<div className="texture">
<h4>Polyphony</h4>
<p><strong>Definition:</strong> Multiple independent melodic lines</p>
<p><strong>Usage:</strong> Development sections, fugal passages</p>
<p><strong>Techniques:</strong> Imitation, canon, fugue</p>
<p><strong>Effect:</strong> Creates complexity and developmental interest</p>
</div>
<div className="texture">
<h4>Monophony</h4>
<p><strong>Definition:</strong> Single melodic line</p>
<p><strong>Usage:</strong> Special effects, transitions</p>
<p><strong>Application:</strong> Solo passages, unison sections</p>
<p><strong>Effect:</strong> Creates focus and dramatic impact</p>
</div>
</div>
<h3>Textural Variation Techniques</h3>
<ul>
<li><strong>Dialogue:</strong> Alternation between different instrumental groups</li>
<li><strong>Echo effects:</strong> Repetition at different dynamic levels</li>
<li><strong>Layering:</strong> Gradual addition or subtraction of voices</li>
<li><strong>Contrast:</strong> Sudden changes in textural density</li>
</ul>
</section>
<section id="orchestration-principles">
<h2>Orchestration and Scoring Techniques</h2>
<p>Classical orchestration emphasizes clarity, balance, and effective use of instrumental colors.</p>
<h3>Orchestral Balance</h3>
<ul>
<li><strong>String foundation:</strong> Strings provide harmonic and melodic basis</li>
<li><strong>Wind color:</strong> Winds add timbral variety and melodic interest</li>
<li><strong>Brass support:</strong> Brass provide harmonic reinforcement and fanfares</li>
<li><strong>Percussion accent:</strong> Timpani emphasize structural points</li>
</ul>
<h3>Instrumental Combinations</h3>
<ul>
<li><strong>Doubling:</strong> Reinforcing melodies across instrument families</li>
<li><strong>Contrast:</strong> Alternating between different timbral groups</li>
<li><strong>Blend:</strong> Combining instruments for unified sound</li>
<li><strong>Solo writing:</strong> Featuring individual instruments</li>
</ul>
<h3>Dynamic and Articulation Planning</h3>
<ul>
<li><strong>Terraced dynamics:</strong> Clear dynamic levels and contrasts</li>
<li><strong>Crescendo/diminuendo:</strong> Gradual dynamic changes</li>
<li><strong>Articulation variety:</strong> Different attack styles for character</li>
<li><strong>Accent placement:</strong> Emphasis on structurally important notes</li>
</ul>
</section>
<section id="compositional-process">
<h2>Classical Compositional Process</h2>
<h3>Planning and Structure</h3>
<ul>
<li><strong>Formal design:</strong> Choose appropriate structural framework</li>
<li><strong>Key relationships:</strong> Plan modulation scheme</li>
<li><strong>Thematic material:</strong> Develop memorable, workable themes</li>
<li><strong>Proportions:</strong> Balance section lengths appropriately</li>
</ul>
<h3>Development Strategy</h3>
<ul>
<li><strong>Motivic potential:</strong> Choose themes suitable for development</li>
<li><strong>Developmental techniques:</strong> Plan specific transformation methods</li>
<li><strong>Climax placement:</strong> Build to appropriate high points</li>
<li><strong>Resolution strategy:</strong> Ensure satisfying conclusions</li>
</ul>
<h3>Revision and Refinement</h3>
<ul>
<li><strong>Voice leading:</strong> Check for smooth harmonic progression</li>
<li><strong>Balance:</strong> Ensure proper textural relationships</li>
<li><strong>Clarity:</strong> Verify that important elements are audible</li>
<li><strong>Unity:</strong> Maintain coherent stylistic approach</li>
</ul>
</section>
<section id="genre-specific-techniques">
<h2>Genre-Specific Composition Techniques</h2>
<h3>Symphony</h3>
<ul>
<li><strong>Four-movement structure:</strong> Fast-Slow-Minuet-Fast</li>
<li><strong>Orchestral writing:</strong> Full exploitation of orchestral resources</li>
<li><strong>Developmental scope:</strong> Extended development sections</li>
<li><strong>Public character:</strong> Bold, accessible musical language</li>
</ul>
<h3>String Quartet</h3>
<ul>
<li><strong>Four-part writing:</strong> Each instrument as equal partner</li>
<li><strong>Intimate character:</strong> Subtle, refined musical discourse</li>
<li><strong>Textural variety:</strong> Exploitation of different combinations</li>
<li><strong>Conversational style:</strong> Dialogue between instruments</li>
</ul>
<h3>Piano Sonata</h3>
<ul>
<li><strong>Keyboard idiom:</strong> Writing suited to piano capabilities</li>
<li><strong>Textural flexibility:</strong> From simple to complex textures</li>
<li><strong>Dynamic range:</strong> Exploitation of fortepiano capabilities</li>
<li><strong>Virtuosic elements:</strong> Display of technical skill</li>
</ul>
<h3>Concerto</h3>
<ul>
<li><strong>Solo-orchestra dialogue:</strong> Interaction between forces</li>
<li><strong>Virtuosic display:</strong> Showcase for soloist</li>
<li><strong>Orchestral accompaniment:</strong> Supportive yet interesting</li>
<li><strong>Cadenza placement:</strong> Opportunities for improvisation</li>
</ul>
</section>
<section id="assessment-points">
<h2>Key Assessment Points</h2>
<h3>Students should be able to:</h3>
<ul>
<li>Identify the three main sections of sonata form</li>
<li>Understand key relationships in sonata form</li>
<li>Recognize basic thematic development techniques</li>
<li>Distinguish between different formal structures (binary, ternary, rondo)</li>
<li>Understand functional harmony principles</li>
<li>Identify different textural approaches in Classical music</li>
<li>Recognize cadential formulas and their functions</li>
<li>Understand the relationship between form and content in Classical music</li>
</ul>
</section>
<section id="navigation-footer">
<h2>Continue Your Study</h2>
<div className="nav-grid">
<a className="nav-card" href="aos02-02-05-improvisation.html">
<h3>← Previous: 2.5 Improvisation</h3>
<p>Review improvisation practices in Classical music</p>
</a>
<a className="nav-card" href="../aos02-02-sound-sources-and-techniques.html">
<h3>Back to Overview</h3>
<p>Return to Sound Sources and Techniques overview</p>
</a>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default Classical0206CompositionTechniquesPage;
