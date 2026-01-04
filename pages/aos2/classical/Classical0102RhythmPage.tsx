import React from 'react';
import { Link } from 'react-router-dom';

const Classical0102RhythmPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Rhythm</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Rhythm
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
<h2>Definition: Rhythm</h2>
<p><strong>Rhythm</strong> refers to the patterns of long and short sounds and silences in music, creating the temporal framework that gives music its sense of movement and pulse. In Classical music, rhythm plays a fundamental role in creating elegance, balance, and expressive character.</p>
</section>
 Key Characteristics Section 
<section className="characteristics-section" id="key-characteristics">
<h2>Key Characteristics of Classical Rhythm</h2>
<div className="characteristic-item" id="balanced-patterns">
<h3>Balanced and Elegant Rhythmic Patterns</h3>
<p>Classical music is characterized by rhythmic patterns that create a sense of balance and proportion, reflecting the period's emphasis on clarity and elegance.</p>
<h4>Regular Pulse and Meter</h4>
<p>Classical rhythm typically maintains:</p>
<ul>
<li><strong>Clear, steady pulse</strong> that provides a stable foundation</li>
<li><strong>Regular metrical patterns</strong> that support formal structure</li>
<li><strong>Predictable rhythmic groupings</strong> that create symmetry</li>
<li><strong>Balanced phrase lengths</strong> (often 4 or 8 bars)</li>
</ul>
<h4>Rhythmic Variety Within Structure</h4>
<p>While maintaining overall regularity, Classical music incorporates:</p>
<ul>
<li>Contrasting rhythmic patterns between sections</li>
<li>Rhythmic acceleration and deceleration for expressive effect</li>
<li>Varied note values to create interest and momentum</li>
<li>Rhythmic motifs that unify musical ideas</li>
</ul>
</div>
<div className="characteristic-item" id="dotted-rhythms">
<h3>Dotted Rhythms and Syncopation</h3>
<p>Classical composers frequently employed specific rhythmic devices to create character and expression.</p>
<h4>Dotted Rhythms</h4>
<p>Dotted rhythms are particularly characteristic of Classical style:</p>
<ul>
<li><strong>Dotted quarter-eighth patterns</strong> create elegance and forward momentum</li>
<li><strong>Dotted eighth-sixteenth patterns</strong> add brilliance and energy</li>
<li><strong>French overture style</strong> dotted rhythms for ceremonial character</li>
<li><strong>Dance-influenced patterns</strong> reflecting popular social dances</li>
</ul>
<h4>Controlled Syncopation</h4>
<p>Classical music uses syncopation more subtly than later periods:</p>
<ul>
<li>Occasional displacement of accents for expressive effect</li>
<li>Syncopation within regular metrical framework</li>
<li>Rhythmic surprises that enhance musical interest</li>
<li>Careful balance between predictability and surprise</li>
</ul>
</div>
</section>
 Rhythmic Patterns Section 
<section className="patterns-section" id="rhythmic-patterns">
<h2>Common Classical Rhythmic Patterns</h2>
<div className="pattern-list" id="pattern-types">
<h3>Characteristic Patterns</h3>
<h4>1. Alberti Bass Rhythm</h4>
<p>A fundamental Classical accompaniment pattern:</p>
<ul>
<li>Broken chord patterns in steady eighth notes</li>
<li>Creates harmonic support with rhythmic momentum</li>
<li>Particularly associated with keyboard music</li>
<li>Named after Domenico Alberti</li>
</ul>
<h4>2. Galant Style Rhythms</h4>
<p>Elegant, dance-influenced patterns:</p>
<ul>
<li>Clear, regular groupings</li>
<li>Graceful combinations of note values</li>
<li>Emphasis on melodic rhythm</li>
<li>Balanced phrase structures</li>
</ul>
<h4>3. Developmental Rhythmic Techniques</h4>
<p>Rhythmic manipulation for structural purposes:</p>
<ul>
<li><strong>Augmentation:</strong> Lengthening note values</li>
<li><strong>Diminution:</strong> Shortening note values</li>
<li><strong>Rhythmic displacement:</strong> Shifting patterns within the bar</li>
<li><strong>Hemiola:</strong> Temporary shift from duple to triple feel</li>
</ul>
</div>
</section>
 Dance Influences Section 
<section className="dance-section" id="dance-influences">
<h2>Dance Influences on Classical Rhythm</h2>
<p>Classical music was heavily influenced by popular social dances of the period, which contributed distinctive rhythmic characteristics:</p>
<div className="dance-list" id="dance-types">
<h3>Key Dance Forms</h3>
<h4>Minuet and Trio</h4>
<ul>
<li><strong>Triple meter (3/4)</strong> with elegant, moderate tempo</li>
<li><strong>Balanced phrases</strong> typically in 8-bar units</li>
<li><strong>Graceful rhythmic patterns</strong> suitable for courtly dancing</li>
<li><strong>Clear metrical accents</strong> on beat one of each bar</li>
</ul>
<h4>Country Dance Influences</h4>
<ul>
<li><strong>Lively, energetic rhythms</strong> in duple meter</li>
<li><strong>Simple, memorable patterns</strong> suitable for social dancing</li>
<li><strong>Regular phrase lengths</strong> for predictable dance steps</li>
<li><strong>Folk-influenced simplicity</strong> contrasting with courtly complexity</li>
</ul>
<h4>March Rhythms</h4>
<ul>
<li><strong>Strong, regular pulse</strong> in duple meter</li>
<li><strong>Dotted rhythms</strong> for ceremonial character</li>
<li><strong>Clear articulation</strong> of rhythmic patterns</li>
<li><strong>Processional character</strong> suitable for formal occasions</li>
</ul>
</div>
</section>
 Focus Work Examples Section 
<section className="examples-section" id="focus-examples">
<h2>Focus Work Examples</h2>
<div className="example-item" id="mozart-example">
<h3>Mozart: <em>Quintet for Piano and Winds in E flat major, K. 452</em></h3>
<p>Mozart's Quintet demonstrates sophisticated Classical rhythmic practice:</p>
<h4>First Movement (Largo - Allegro moderato)</h4>
<ul>
<li><strong>Contrasting rhythmic characters:</strong> Slow introduction vs. lively Allegro</li>
<li><strong>Dotted rhythms:</strong> Creating elegance and forward momentum</li>
<li><strong>Syncopated passages:</strong> Adding expressive tension in development</li>
<li><strong>Rhythmic dialogue:</strong> Between piano and wind instruments</li>
</ul>
<h4>Second Movement (Larghetto)</h4>
<ul>
<li><strong>Flowing rhythmic patterns:</strong> Supporting lyrical melodic lines</li>
<li><strong>Subtle rhythmic variations:</strong> Creating expressive nuance</li>
<li><strong>Accompaniment rhythms:</strong> Providing harmonic and rhythmic support</li>
</ul>
<h4>Third Movement (Allegretto)</h4>
<ul>
<li><strong>Rondo rhythmic patterns:</strong> Clear, memorable rhythmic themes</li>
<li><strong>Contrasting episodes:</strong> Different rhythmic characters for variety</li>
<li><strong>Developmental techniques:</strong> Rhythmic transformation of themes</li>
</ul>
</div>
</section>
 Comparison with Baroque Section 
<section className="comparison-section" id="baroque-comparison">
<h2>Contrast with Baroque Rhythm</h2>
<div className="comparison-item" id="baroque-vs-classical">
<h3>Baroque vs. Classical Rhythmic Practice</h3>
<h4>Baroque Characteristics:</h4>
<ul>
<li><strong>Motor rhythm:</strong> Continuous, driving rhythmic patterns</li>
<li><strong>Single rhythmic character:</strong> Maintained throughout movements</li>
<li><strong>Complex polyphonic rhythms:</strong> Multiple independent rhythmic lines</li>
<li><strong>Terraced dynamics:</strong> Affecting rhythmic perception through volume changes</li>
</ul>
<h4>Classical Innovations:</h4>
<ul>
<li><strong>Varied rhythmic characters:</strong> Contrasting sections within movements</li>
<li><strong>Homophonic clarity:</strong> Clear melody with rhythmic accompaniment</li>
<li><strong>Balanced phrase structures:</strong> Regular, symmetrical rhythmic groupings</li>
<li><strong>Expressive rhythmic flexibility:</strong> Tempo and rhythmic variations for expression</li>
</ul>
</div>
</section>
 Performance Practice Section 
<section className="practice-section" id="performance-practice">
<h2>Classical Rhythmic Performance Practice</h2>
<p>Understanding Classical rhythmic style is essential for authentic interpretation:</p>
<ul>
<li><strong>Clear Articulation:</strong> Rhythmic patterns should be clearly defined and elegant</li>
<li><strong>Balanced Phrasing:</strong> Maintain the sense of balanced, symmetrical phrase structures</li>
<li><strong>Expressive Flexibility:</strong> Allow for subtle rhythmic flexibility within the overall pulse</li>
<li><strong>Dance Character:</strong> Recognize and interpret dance-influenced rhythmic patterns appropriately</li>
<li><strong>Structural Awareness:</strong> Use rhythmic patterns to support formal structure and harmonic progression</li>
</ul>
</section>
 Assessment Relevance Section 
<section className="assessment-section" id="assessment-relevance">
<h2>Assessment Relevance</h2>
<div className="assessment-item" id="component-2">
<h3>Component 2: Performing</h3>
<p>In performing (Component 2), candidates are assessed on their rhythmic accuracy and stylistic interpretation:</p>
<ul>
<li>Accurate execution of rhythmic patterns and note values</li>
<li>Appropriate interpretation of dotted rhythms and syncopation</li>
<li>Stylistically appropriate rhythmic character and phrasing</li>
<li>Technical control of complex rhythmic passages</li>
</ul>
</div>
<div className="assessment-item" id="listening-exam">
<h3>Component 1: Listening Examination</h3>
<p>When analyzing Classical music in the listening examination, candidates should:</p>
<ul>
<li>Identify characteristic rhythmic patterns (dotted rhythms, Alberti bass, etc.)</li>
<li>Recognize dance influences and their rhythmic characteristics</li>
<li>Describe rhythmic techniques used for structural and expressive purposes</li>
<li>Understand how rhythm supports the overall Classical style</li>
<li>Focus on the rhythmic features <em>actually heard</em> in the recorded extracts</li>
</ul>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default Classical0102RhythmPage;
