import React from 'react';
import { Link } from 'react-router-dom';

const Classical0104TempoPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Tempo</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Tempo
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
        <div dangerouslySetInnerHTML={{ __html: `Definition Section 
<section className="definition-section" id="definition">
<h2>Definition: Tempo</h2>
<p><strong>Tempo</strong> refers to the speed of music, determining how fast or slow a piece is performed. In Classical music, tempo serves both structural and expressive functions, with composers using specific tempo markings and allowing for controlled flexibility to enhance musical expression.</p>
</section>
 Key Characteristics Section 
<section className="characteristics-section" id="key-characteristics">
<h2>Key Characteristics of Classical Tempo</h2>
<div className="characteristic-item" id="tempo-markings">
<h3>Standardized Tempo Markings</h3>
<p>The Classical period saw the development and standardization of Italian tempo markings that provided composers with precise ways to indicate desired speeds.</p>
<h4>Common Classical Tempo Markings</h4>
<p>Classical composers used a range of tempo indications:</p>
<ul>
<li><strong>Largo:</strong> Very slow and broad (around 40-60 BPM)</li>
<li><strong>Adagio:</strong> Slow and leisurely (around 66-76 BPM)</li>
<li><strong>Andante:</strong> Walking pace, moderate (around 76-108 BPM)</li>
<li><strong>Moderato:</strong> Moderate speed (around 108-120 BPM)</li>
<li><strong>Allegro:</strong> Fast and lively (around 120-168 BPM)</li>
<li><strong>Presto:</strong> Very fast (around 168-200 BPM)</li>
</ul>
<h4>Tempo Modifications</h4>
<p>Classical composers also used modifying terms:</p>
<ul>
<li><strong>Molto:</strong> Very (molto allegro = very fast)</li>
<li><strong>Poco:</strong> A little (poco adagio = a little slow)</li>
<li><strong>Più:</strong> More (più mosso = more motion)</li>
<li><strong>Meno:</strong> Less (meno mosso = less motion)</li>
</ul>
</div>
<div className="characteristic-item" id="tempo-flexibility">
<h3>Controlled Tempo Flexibility</h3>
<p>While Classical music maintained overall tempo stability, composers incorporated controlled flexibility for expressive purposes.</p>
<h4>Rubato in Classical Style</h4>
<p>Classical rubato was more restrained than in later periods:</p>
<ul>
<li><strong>Subtle timing variations:</strong> Small accelerations and decelerations</li>
<li><strong>Phrase-sensitive rubato:</strong> Flexibility that supports phrase structure</li>
<li><strong>Cadential ritardando:</strong> Slight slowing at phrase endings</li>
<li><strong>Return to tempo:</strong> Quick restoration of original speed</li>
</ul>
<h4>Structural Tempo Changes</h4>
<p>Tempo changes served formal and expressive functions:</p>
<ul>
<li><strong>Slow introductions:</strong> Leading to faster main sections</li>
<li><strong>Contrasting sections:</strong> Different tempos for formal contrast</li>
<li><strong>Development techniques:</strong> Tempo changes in developmental passages</li>
<li><strong>Codas:</strong> Often featuring tempo modifications</li>
</ul>
</div>
</section>
 Tempo Functions Section 
<section className="functions-section" id="tempo-functions">
<h2>Functions of Tempo in Classical Music</h2>
<div className="function-item" id="structural-functions">
<h3>Structural Functions</h3>
<p>Tempo serves important structural roles in Classical compositions:</p>
<h4>Movement Characterization</h4>
<ul>
<li><strong>First movements:</strong> Often Allegro, establishing energy and momentum</li>
<li><strong>Slow movements:</strong> Adagio or Andante for lyrical, expressive character</li>
<li><strong>Minuets:</strong> Moderate tempo suitable for dance character</li>
<li><strong>Finales:</strong> Fast tempos (Allegro, Presto) for energetic conclusions</li>
</ul>
<h4>Formal Articulation</h4>
<ul>
<li><strong>Section boundaries:</strong> Tempo changes mark formal divisions</li>
<li><strong>Development sections:</strong> Often feature tempo modifications</li>
<li><strong>Transitions:</strong> Gradual tempo changes link sections</li>
<li><strong>Codas:</strong> Tempo changes create climactic effects</li>
</ul>
</div>
<div className="function-item" id="expressive-functions">
<h3>Expressive Functions</h3>
<p>Tempo contributes significantly to the emotional character of Classical music:</p>
<h4>Character and Mood</h4>
<ul>
<li><strong>Slow tempos:</strong> Create contemplative, lyrical moods</li>
<li><strong>Moderate tempos:</strong> Suggest elegance and balance</li>
<li><strong>Fast tempos:</strong> Generate excitement and energy</li>
<li><strong>Tempo contrasts:</strong> Enhance dramatic effect</li>
</ul>
<h4>Performance Practice</h4>
<ul>
<li><strong>Interpretive flexibility:</strong> Performers make subtle tempo adjustments</li>
<li><strong>Historical context:</strong> Understanding period performance practices</li>
<li><strong>Instrument considerations:</strong> Tempo choices based on instrumental capabilities</li>
<li><strong>Ensemble coordination:</strong> Tempo stability for group performance</li>
</ul>
</div>
</section>
 Tempo Techniques Section 
<section className="techniques-section" id="tempo-techniques">
<h2>Classical Tempo Techniques</h2>
<div className="technique-list" id="technique-types">
<h3>Advanced Tempo Devices</h3>
<h4>Accelerando and Ritardando</h4>
<p>Gradual tempo changes for expressive effect:</p>
<ul>
<li><strong>Accelerando:</strong> Gradual speeding up, often building excitement</li>
<li><strong>Ritardando:</strong> Gradual slowing down, often at phrase endings</li>
<li><strong>Rallentando:</strong> Becoming gradually slower and broader</li>
<li><strong>Stringendo:</strong> Pressing forward, becoming more urgent</li>
</ul>
<h4>Tempo Relationships</h4>
<p>Mathematical relationships between different tempos:</p>
<ul>
<li><strong>Proportional tempos:</strong> New tempo related to previous (e.g., half note = quarter note)</li>
<li><strong>Metric modulation:</strong> Smooth transitions between different tempos</li>
<li><strong>Tempo giusto:</strong> Strict, measured tempo</li>
<li><strong>A tempo:</strong> Return to original tempo after modification</li>
</ul>
<h4>Character Indications</h4>
<p>Tempo markings combined with character descriptions:</p>
<ul>
<li><strong>Allegro con brio:</strong> Fast with vigor and spirit</li>
<li><strong>Andante cantabile:</strong> Walking pace in a singing style</li>
<li><strong>Allegro ma non troppo:</strong> Fast but not too much</li>
<li><strong>Adagio sostenuto:</strong> Slow and sustained</li>
</ul>
</div>
</section>
 Focus Work Examples Section 
<section className="examples-section" id="focus-examples">
<h2>Focus Work Examples</h2>
<div className="example-item" id="mozart-example">
<h3>Mozart: <em>Quintet for Piano and Winds in E flat major, K. 452</em></h3>
<p>Mozart's Quintet demonstrates sophisticated Classical tempo practice:</p>
<h4>First Movement (Largo - Allegro moderato)</h4>
<ul>
<li><strong>Slow introduction (Largo):</strong> Creates anticipation and gravitas</li>
<li><strong>Main section (Allegro moderato):</strong> Balanced, not too fast, allowing for intricate interplay</li>
<li><strong>Tempo relationships:</strong> Contrast between introduction and main section</li>
<li><strong>Development tempo flexibility:</strong> Subtle modifications for expressive effect</li>
</ul>
<h4>Second Movement (Larghetto)</h4>
<ul>
<li><strong>Lyrical tempo:</strong> Slow enough for expressive melody</li>
<li><strong>Rubato opportunities:</strong> Flexibility for phrasing and expression</li>
<li><strong>Accompaniment tempo:</strong> Steady pulse supporting melodic freedom</li>
<li><strong>Cadential ritardandos:</strong> Gentle slowing at phrase endings</li>
</ul>
<h4>Third Movement (Allegretto)</h4>
<ul>
<li><strong>Moderate fast tempo:</strong> Energetic but controlled</li>
<li><strong>Rondo tempo consistency:</strong> Stable tempo for recurring theme</li>
<li><strong>Episode contrasts:</strong> Subtle tempo modifications in contrasting sections</li>
<li><strong>Final acceleration:</strong> Building energy toward conclusion</li>
</ul>
</div>
</section>
 Comparison with Baroque Section 
<section className="comparison-section" id="baroque-comparison">
<h2>Classical vs. Baroque Tempo</h2>
<p>Understanding the differences between Classical and Baroque approaches to tempo:</p>
<div className="comparison-list" id="comparison-points">
<h3>Key Differences</h3>
<h4>Tempo Markings</h4>
<ul>
<li><strong>Baroque:</strong> Fewer specific tempo markings, often implied by style</li>
<li><strong>Classical:</strong> More precise Italian tempo markings</li>
<li><strong>Baroque:</strong> Tempo often determined by dance type or affect</li>
<li><strong>Classical:</strong> Tempo markings combined with character indications</li>
</ul>
<h4>Tempo Flexibility</h4>
<ul>
<li><strong>Baroque:</strong> Generally steady tempo with minimal rubato</li>
<li><strong>Classical:</strong> More controlled flexibility for expression</li>
<li><strong>Baroque:</strong> Tempo changes mainly at formal boundaries</li>
<li><strong>Classical:</strong> Gradual tempo changes within sections</li>
</ul>
</div>
</section>
 Performance Practice Section 
<section className="practice-section" id="performance-practice">
<h2>Performance Practice</h2>
<p>Guidelines for performing Classical music with appropriate tempo:</p>
<div className="practice-list" id="practice-guidelines">
<h3>Key Considerations</h3>
<h4>Historical Awareness</h4>
<ul>
<li><strong>Period instruments:</strong> Consider capabilities of Classical-era instruments</li>
<li><strong>Venue acoustics:</strong> Adjust tempo for performance space</li>
<li><strong>Ensemble size:</strong> Larger groups may require slightly slower tempos</li>
<li><strong>Technical demands:</strong> Balance virtuosity with musical expression</li>
</ul>
<h4>Interpretive Decisions</h4>
<ul>
<li><strong>Character consistency:</strong> Maintain tempo appropriate to movement character</li>
<li><strong>Structural clarity:</strong> Use tempo to articulate formal structure</li>
<li><strong>Expressive timing:</strong> Apply rubato judiciously and tastefully</li>
<li><strong>Ensemble coordination:</strong> Ensure all performers share tempo conception</li>
</ul>
</div>
</section>
 Assessment Focus Section 
<section className="assessment-section" id="assessment-focus">
<h2>Assessment Focus</h2>
<p>Key points for IGCSE Music assessment regarding tempo in Classical music:</p>
<div className="assessment-list" id="assessment-points">
<h3>Essential Knowledge</h3>
<ul>
<li><strong>Tempo markings:</strong> Recognize and understand Italian tempo terms</li>
<li><strong>Structural function:</strong> How tempo serves formal organization</li>
<li><strong>Expressive role:</strong> Tempo's contribution to musical character</li>
<li><strong>Performance practice:</strong> Appropriate tempo flexibility in Classical style</li>
<li><strong>Historical context:</strong> Tempo practices of the Classical period</li>
<li><strong>Comparative analysis:</strong> Differences from Baroque tempo practices</li>
</ul>
<h3>Analytical Skills</h3>
<ul>
<li>Identify tempo markings and their meanings</li>
<li>Analyze how tempo supports musical structure</li>
<li>Evaluate the expressive effect of tempo choices</li>
<li>Compare tempo usage across different Classical works</li>
</ul>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default Classical0104TempoPage;
