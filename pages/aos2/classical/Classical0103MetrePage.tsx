import React from 'react';
import { Link } from 'react-router-dom';

const Classical0103MetrePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Metre</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Metre
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
<h2>Definition: Metre</h2>
<p><strong>Metre</strong> refers to the organization of beats into regular patterns of strong and weak pulses, creating the underlying rhythmic framework of music. In Classical music, metre provides the structural foundation that supports the elegant balance and proportion characteristic of the period.</p>
</section>
 Key Characteristics Section 
<section className="characteristics-section" id="key-characteristics">
<h2>Key Characteristics of Classical Metre</h2>
<div className="characteristic-item" id="regular-patterns">
<h3>Regular Metrical Patterns</h3>
<p>Classical music is characterized by clear, consistent metrical organization that provides stability and predictability, supporting the period's emphasis on balance and formal structure.</p>
<h4>Consistent Time Signatures</h4>
<p>Classical compositions typically maintain:</p>
<ul>
<li><strong>Single time signature</strong> throughout entire movements</li>
<li><strong>Clear metrical hierarchy</strong> with strong and weak beats</li>
<li><strong>Predictable accent patterns</strong> that support phrase structure</li>
<li><strong>Stable metrical foundation</strong> for melodic and harmonic development</li>
</ul>
<h4>Metrical Clarity</h4>
<p>The Classical style emphasizes metrical clarity through:</p>
<ul>
<li>Clear articulation of strong beats</li>
<li>Consistent grouping of beats into bars</li>
<li>Metrical patterns that support formal structure</li>
<li>Alignment of harmonic changes with metrical accents</li>
</ul>
</div>
<div className="characteristic-item" id="common-meters">
<h3>Common Classical Metres</h3>
<p>Classical composers favored certain metrical patterns that became standard for different types of movements and forms.</p>
<h4>Duple Metres</h4>
<p>Duple metres (2/4, 4/4, alla breve) are fundamental to Classical style:</p>
<ul>
<li><strong>4/4 (Common Time):</strong> Most frequently used, especially in sonata form movements</li>
<li><strong>2/4:</strong> Often used for lively, dance-like movements</li>
<li><strong>Alla breve (Cut time):</strong> For faster movements with a sense of two main beats per bar</li>
<li><strong>Strong-weak pattern:</strong> Creates forward momentum and structural clarity</li>
</ul>
<h4>Triple Metres</h4>
<p>Triple metres (3/4, 3/8) provide contrast and dance character:</p>
<ul>
<li><strong>3/4:</strong> Standard for minuets, waltzes, and slow movements</li>
<li><strong>3/8:</strong> Used for faster, lighter movements</li>
<li><strong>Strong-weak-weak pattern:</strong> Creates lilting, dance-like character</li>
<li><strong>Elegant phrasing:</strong> Supports graceful melodic lines</li>
</ul>
</div>
</section>
 Metrical Functions Section 
<section className="functions-section" id="metrical-functions">
<h2>Metrical Functions in Classical Music</h2>
<div className="function-item" id="structural-support">
<h3>Structural Support</h3>
<p>Metre in Classical music serves important structural functions:</p>
<h4>Formal Organization</h4>
<ul>
<li><strong>Phrase structure:</strong> Metrical patterns support regular phrase lengths (4, 8, 16 bars)</li>
<li><strong>Sectional divisions:</strong> Strong beats often coincide with formal boundaries</li>
<li><strong>Cadential preparation:</strong> Metrical patterns build toward cadential points</li>
<li><strong>Developmental processes:</strong> Metre provides framework for thematic development</li>
</ul>
<h4>Harmonic Support</h4>
<ul>
<li><strong>Chord changes:</strong> Typically occur on strong beats</li>
<li><strong>Cadential patterns:</strong> Aligned with metrical accents</li>
<li><strong>Harmonic rhythm:</strong> Rate of chord change relates to metrical structure</li>
<li><strong>Tonal stability:</strong> Strong beats often feature stable harmonies</li>
</ul>
</div>
<div className="function-item" id="expressive-functions">
<h3>Expressive Functions</h3>
<p>Metre contributes to the expressive character of Classical music:</p>
<h4>Character and Mood</h4>
<ul>
<li><strong>Dance associations:</strong> Different metres evoke specific dance types</li>
<li><strong>Tempo relationships:</strong> Metre influences perceived speed and energy</li>
<li><strong>Emotional character:</strong> Duple vs. triple metres create different moods</li>
<li><strong>Movement types:</strong> Specific metres associated with particular movement types</li>
</ul>
</div>
</section>
 Dance Influences Section 
<section className="dance-section" id="dance-influences">
<h2>Dance Influences on Classical Metre</h2>
<p>Classical music was heavily influenced by popular social dances, which contributed specific metrical characteristics:</p>
<div className="dance-list" id="dance-metres">
<h3>Key Dance Metres</h3>
<h4>Minuet (3/4)</h4>
<ul>
<li><strong>Moderate triple metre</strong> with elegant character</li>
<li><strong>Clear strong-weak-weak pattern</strong> supporting dance steps</li>
<li><strong>Balanced phrases</strong> typically in 8-bar units</li>
<li><strong>Courtly associations</strong> with refined, aristocratic character</li>
</ul>
<h4>Country Dance (2/4 or 4/4)</h4>
<ul>
<li><strong>Lively duple metre</strong> with energetic character</li>
<li><strong>Clear, strong beats</strong> suitable for dancing</li>
<li><strong>Folk influences</strong> bringing simplicity and directness</li>
<li><strong>Regular phrase structure</strong> for predictable dance patterns</li>
</ul>
<h4>March (4/4 or 2/4)</h4>
<ul>
<li><strong>Strong duple metre</strong> with processional character</li>
<li><strong>Emphasized strong beats</strong> for marching rhythm</li>
<li><strong>Ceremonial associations</strong> with formal occasions</li>
<li><strong>Clear articulation</strong> of metrical patterns</li>
</ul>
</div>
</section>
 Metrical Techniques Section 
<section className="techniques-section" id="metrical-techniques">
<h2>Classical Metrical Techniques</h2>
<div className="technique-list" id="technique-types">
<h3>Advanced Metrical Devices</h3>
<h4>Hemiola</h4>
<p>A sophisticated metrical technique used for expressive effect:</p>
<ul>
<li><strong>Definition:</strong> Temporary shift from triple to duple feel (or vice versa)</li>
<li><strong>Common usage:</strong> Often appears before cadences</li>
<li><strong>Effect:</strong> Creates rhythmic tension and forward momentum</li>
<li><strong>Resolution:</strong> Returns to original metrical pattern</li>
</ul>
<h4>Metrical Displacement</h4>
<p>Subtle shifts in metrical emphasis:</p>
<ul>
<li><strong>Syncopation:</strong> Emphasis on normally weak beats</li>
<li><strong>Cross-rhythms:</strong> Conflicting metrical patterns</li>
<li><strong>Elision:</strong> Overlapping of phrase endings and beginnings</li>
<li><strong>Metric modulation:</strong> Gradual shift to new metrical feeling</li>
</ul>
<h4>Phrase Extension and Compression</h4>
<p>Manipulation of expected metrical patterns:</p>
<ul>
<li><strong>Extension:</strong> Adding extra bars to expected phrase lengths</li>
<li><strong>Compression:</strong> Shortening expected phrase lengths</li>
<li><strong>Irregular groupings:</strong> 5, 6, or 7-bar phrases for special effect</li>
<li><strong>Developmental function:</strong> Supporting formal and expressive goals</li>
</ul>
</div>
</section>
 Focus Work Examples Section 
<section className="examples-section" id="focus-examples">
<h2>Focus Work Examples</h2>
<div className="example-item" id="mozart-example">
<h3>Mozart: <em>Quintet for Piano and Winds in E flat major, K. 452</em></h3>
<p>Mozart's Quintet demonstrates sophisticated Classical metrical practice:</p>
<h4>First Movement (Largo - Allegro moderato)</h4>
<ul>
<li><strong>Contrasting metres:</strong> Slow introduction vs. main Allegro section</li>
<li><strong>4/4 metre:</strong> Provides stable foundation for sonata form</li>
<li><strong>Metrical clarity:</strong> Clear strong beats supporting harmonic changes</li>
<li><strong>Phrase structure:</strong> Regular 4 and 8-bar groupings with occasional extensions</li>
</ul>
<h4>Second Movement (Larghetto)</h4>
<ul>
<li><strong>Lyrical metre:</strong> Supporting flowing melodic lines</li>
<li><strong>Flexible phrasing:</strong> Metrical patterns adapted to expressive needs</li>
<li><strong>Harmonic alignment:</strong> Chord changes coordinated with metrical accents</li>
</ul>
<h4>Third Movement (Allegretto)</h4>
<ul>
<li><strong>Rondo metre:</strong> Clear metrical patterns for recurring themes</li>
<li><strong>Contrasting episodes:</strong> Different metrical characters for variety</li>
<li><strong>Dance influences:</strong> Metrical patterns reflecting popular dance styles</li>
</ul>
</div>
</section>
 Comparison with Baroque Section 
<section className="comparison-section" id="baroque-comparison">
<h2>Contrast with Baroque Metre</h2>
<div className="comparison-item" id="baroque-vs-classical">
<h3>Baroque vs. Classical Metrical Practice</h3>
<h4>Baroque Characteristics:</h4>
<ul>
<li><strong>Motor rhythm:</strong> Continuous, driving metrical patterns</li>
<li><strong>Single character:</strong> Consistent metrical feeling throughout movements</li>
<li><strong>Complex polyphony:</strong> Multiple independent metrical lines</li>
<li><strong>Functional metre:</strong> Primarily structural rather than expressive</li>
</ul>
<h4>Classical Innovations:</h4>
<ul>
<li><strong>Varied metrical characters:</strong> Contrasting sections within movements</li>
<li><strong>Expressive metre:</strong> Metrical patterns chosen for character and mood</li>
<li><strong>Clear hierarchy:</strong> Distinct strong and weak beats</li>
<li><strong>Dance influences:</strong> Metrical patterns reflecting social dance forms</li>
</ul>
</div>
</section>
 Performance Practice Section 
<section className="practice-section" id="performance-practice">
<h2>Classical Metrical Performance Practice</h2>
<p>Understanding Classical metrical style is essential for authentic interpretation:</p>
<ul>
<li><strong>Clear Metrical Hierarchy:</strong> Emphasize strong beats appropriately without being heavy-handed</li>
<li><strong>Dance Character:</strong> Recognize and interpret dance-influenced metrical patterns</li>
<li><strong>Phrase Structure:</strong> Use metrical patterns to support balanced phrase groupings</li>
<li><strong>Harmonic Coordination:</strong> Align harmonic changes with metrical accents</li>
<li><strong>Expressive Flexibility:</strong> Allow for subtle metrical flexibility within overall stability</li>
</ul>
</section>
 Assessment Relevance Section 
<section className="assessment-section" id="assessment-relevance">
<h2>Assessment Relevance</h2>
<div className="assessment-item" id="component-2">
<h3>Component 2: Performing</h3>
<p>In performing (Component 2), candidates are assessed on their metrical accuracy and stylistic interpretation:</p>
<ul>
<li>Accurate maintenance of time signatures and metrical patterns</li>
<li>Appropriate emphasis of strong and weak beats</li>
<li>Stylistically appropriate metrical interpretation</li>
<li>Technical control of complex metrical passages</li>
</ul>
</div>
<div className="assessment-item" id="listening-exam">
<h3>Component 1: Listening Examination</h3>
<p>When analyzing Classical music in the listening examination, candidates should:</p>
<ul>
<li>Identify time signatures and metrical patterns</li>
<li>Recognize dance influences and their metrical characteristics</li>
<li>Describe how metre supports formal structure and phrase organization</li>
<li>Understand the relationship between metre and harmonic rhythm</li>
<li>Focus on the metrical features <em>actually heard</em> in the recorded extracts</li>
</ul>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default Classical0103MetrePage;
