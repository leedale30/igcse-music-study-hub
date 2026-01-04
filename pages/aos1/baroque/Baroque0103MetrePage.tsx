import React from 'react';
import { Link } from 'react-router-dom';

const Baroque0103MetrePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/baroque" className="hover:text-sky-600 dark:hover:text-sky-400">Baroque Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Metre</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Metre
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 1 • Baroque Music
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
<p><strong>Metre</strong> refers to the underlying pulse and time signature that organizes rhythmic patterns. It is the framework that governs how beats are grouped and accented within musical time. Understanding metre is vital for setting the performance tempo and context in Baroque music.</p>
</section>
 Key Characteristics Section 
<section className="characteristics-section" id="key-characteristics">
<h2>Key Characteristics of Baroque Metre</h2>
<div className="characteristic-item" id="regular-metre">
<h3>Regular Metrical Organization</h3>
<p>Metre in the Baroque era is typically <strong>regular</strong> and fundamentally dictates the organization of rhythm within a movement. This regularity provides a stable foundation upon which the complex rhythmic patterns of Baroque music can be built.</p>
</div>
<div className="characteristic-item" id="dance-influence">
<h3>Dance Form Influence</h3>
<p>Many Baroque metres are derived from or influenced by dance forms, which required specific metrical patterns for proper execution. This connection between metre and dance gives Baroque music much of its characteristic rhythmic vitality.</p>
</div>
</section>
 Metre Recognition Section 
<section className="recognition-section" id="metre-recognition">
<h2>Metre Recognition</h2>
<p>Candidates must be able to recognize and distinguish between the following metrical organizations:</p>
<div className="metre-type" id="basic-metres">
<h3>Basic Metrical Types</h3>
<h4>Duple Metre</h4>
<p><strong>Duple metre</strong> organizes beats into groups of two, with a strong-weak pattern of accents.</p>
<ul>
<li><strong>Common time signatures:</strong> 2/4, 2/2</li>
<li><strong>Characteristics:</strong> March-like quality, strong sense of forward motion</li>
<li><strong>Usage:</strong> Often found in energetic movements and dance forms</li>
</ul>
<h4>Triple Metre</h4>
<p><strong>Triple metre</strong> organizes beats into groups of three, with a strong-weak-weak pattern of accents.</p>
<ul>
<li><strong>Common time signatures:</strong> 3/4, 3/8, 3/2</li>
<li><strong>Characteristics:</strong> Lilting, dance-like quality</li>
<li><strong>Usage:</strong> Essential for dance forms like the menuet, sarabande, and courante</li>
</ul>
<h4>Quadruple Metre</h4>
<p><strong>Quadruple metre</strong> organizes beats into groups of four, with a strong-weak-medium-weak pattern of accents.</p>
<ul>
<li><strong>Common time signatures:</strong> 4/4, 4/2</li>
<li><strong>Characteristics:</strong> Stable, balanced feeling</li>
<li><strong>Usage:</strong> Common in ceremonial music and substantial movements</li>
</ul>
</div>
<div className="metre-type" id="time-signatures">
<h3>Simple and Compound Time Signatures</h3>
<p>Candidates must be aware of both types of time signatures and their characteristics:</p>
<h4>Simple Time</h4>
<p>In <strong>simple time</strong>, the beat divides naturally into two equal parts:</p>
<ul>
<li><strong>Examples:</strong> 2/4, 3/4, 4/4</li>
<li><strong>Beat subdivision:</strong> Each beat divides into two eighth notes</li>
<li><strong>Feel:</strong> Straightforward, clear pulse</li>
</ul>
<h4>Compound Time</h4>
<p>In <strong>compound time</strong>, the beat divides naturally into three equal parts:</p>
<ul>
<li><strong>Examples:</strong> 6/8, 9/8, 12/8</li>
<li><strong>Beat subdivision:</strong> Each beat divides into three eighth notes</li>
<li><strong>Feel:</strong> Lilting, flowing quality</li>
</ul>
</div>
<div className="metre-type" id="irregular-metre">
<h3>Irregular Metre</h3>
<p>While less common in Baroque music than in 20th-century or World Music, the term <strong>irregular metre</strong> must be known for general syllabus comprehension.</p>
<ul>
<li><strong>Definition:</strong> Metres that do not follow regular patterns of 2, 3, or 4 beats</li>
<li><strong>Examples:</strong> 5/4, 7/8, mixed metres</li>
<li><strong>Baroque usage:</strong> Rare, but understanding the concept is important</li>
</ul>
</div>
</section>
 Focus Work Examples Section 
<section className="examples-section" id="focus-examples">
<h2>Focus Work Examples</h2>
<div className="example-item" id="handel-menuet">
<h3>Handel: <em>Menuet</em> (Movement 6, Op. 6 No. 5)</h3>
<p>Handel's <em>Menuet</em> exemplifies the <strong>triple time</strong> signature typical of that dance form:</p>
<ul>
<li><strong>Time signature:</strong> 3/4 (triple metre)</li>
<li><strong>Characteristics:</strong> Elegant, dance-like quality with clear strong-weak-weak pattern</li>
<li><strong>Metrical emphasis:</strong> Strong first beat of each bar, creating the characteristic menuet rhythm</li>
<li><strong>Dance origins:</strong> Reflects the courtly dance tradition of the Baroque period</li>
</ul>
</div>
<div className="example-item" id="vivaldi-spring">
<h3>Vivaldi: <em>Spring</em> (Movement 1)</h3>
<p>Vivaldi's <em>Spring</em> demonstrates effective use of quadruple metre:</p>
<ul>
<li><strong>Time signature:</strong> 4/4 (quadruple metre)</li>
<li><strong>Characteristics:</strong> Provides stable foundation for the programmatic elements</li>
<li><strong>Rhythmic variety:</strong> Allows for complex rhythmic patterns within the regular metrical framework</li>
<li><strong>Structural function:</strong> Clear metrical organization supports the ritornello form</li>
</ul>
</div>
<div className="example-item" id="handel-allegro">
<h3>Handel: <em>Allegro</em> (Movement 2, Op. 6 No. 5)</h3>
<p>This movement demonstrates how metre supports complex contrapuntal writing:</p>
<ul>
<li><strong>Metrical foundation:</strong> Regular metre provides framework for fugal entries</li>
<li><strong>Rhythmic complexity:</strong> Complex rhythms work within clear metrical structure</li>
<li><strong>Imitative entries:</strong> Different parts enter at metrically significant points</li>
</ul>
</div>
</section>
 Hemiola Section 
<section className="special-feature-section" id="hemiola">
<h2>Hemiola: A Special Metrical Device</h2>
<p>A highly characteristic rhythmic/metrical device in Baroque music is the <strong>hemiola</strong>:</p>
<div className="feature-explanation" id="hemiola-definition">
<h3>What is Hemiola?</h3>
<p>Hemiola involves a momentary shift in the perceived accentuation. For example, it can temporarily displace the natural triple meter to feel like duple meter, creating a cross-rhythm effect.</p>
<h4>How Hemiola Works:</h4>
<ul>
<li><strong>In triple metre:</strong> Two bars of 3/4 time can be made to feel like three bars of 2/4 time</li>
<li><strong>Accent displacement:</strong> The natural strong beats are temporarily shifted</li>
<li><strong>Rhythmic tension:</strong> Creates excitement and anticipation</li>
</ul>
<h4>Common Usage:</h4>
<ul>
<li><strong>Cadential approach:</strong> Often used immediately prior to important cadences</li>
<li><strong>Structural emphasis:</strong> Highlights important musical moments</li>
<li><strong>Expressive effect:</strong> Adds sophistication and rhythmic interest</li>
</ul>
</div>
</section>
 Terminology Section 
<section className="terminology-section" id="terminology">
<h2>Essential Metrical Terminology</h2>
<div className="terminology-list" id="metre-terms">
<h3>Basic Metrical Terms</h3>
<ul>
<li><strong>Metre</strong> - The organization of beats into regular patterns</li>
<li><strong>Time signature</strong> - The numerical indication of metre (e.g., 3/4, 4/4)</li>
<li><strong>Beat</strong> - The basic unit of time in music</li>
<li><strong>Bar/Measure</strong> - A group of beats organized by the metre</li>
<li><strong>Accent</strong> - Emphasis placed on certain beats</li>
</ul>
<h3>Metrical Types</h3>
<ul>
<li><strong>Duple metre</strong> - Groups of two beats (2/4, 2/2)</li>
<li><strong>Triple metre</strong> - Groups of three beats (3/4, 3/8)</li>
<li><strong>Quadruple metre</strong> - Groups of four beats (4/4, 4/2)</li>
<li><strong>Simple time</strong> - Beats divide into two equal parts</li>
<li><strong>Compound time</strong> - Beats divide into three equal parts</li>
<li><strong>Irregular metre</strong> - Non-standard groupings of beats</li>
</ul>
<h3>Special Devices</h3>
<ul>
<li><strong>Hemiola</strong> - Temporary shift in metrical emphasis</li>
<li><strong>Cross-rhythm</strong> - Conflicting rhythmic patterns</li>
<li><strong>Syncopation</strong> - Emphasis on weak beats (related to rhythm)</li>
</ul>
</div>
</section>
 Performance Practice Section 
<section className="practice-section" id="performance-practice">
<h2>Baroque Metrical Performance Practice</h2>
<p>Understanding Baroque metrical conventions enhances musical interpretation:</p>
<ul>
<li><strong>Clear Hierarchy:</strong> Strong and weak beats are clearly differentiated</li>
<li><strong>Dance Character:</strong> Many metres derive from specific dance forms with characteristic feels</li>
<li><strong>Structural Function:</strong> Metre supports the overall architecture of the music</li>
<li><strong>Flexibility within Structure:</strong> While metre is regular, subtle variations add interest</li>
<li><strong>Cadential Emphasis:</strong> Important structural points often coincide with strong metrical positions</li>
</ul>
</section>
 Assessment Focus Section 
<section className="assessment-section" id="assessment-focus">
<h2>Assessment Focus</h2>
<p><strong>Important for Examination:</strong> When analyzing metre in Baroque music, candidates should:</p>
<ul>
<li>Identify the time signature and metrical type (duple, triple, quadruple)</li>
<li>Distinguish between simple and compound time signatures</li>
<li>Recognize the use of hemiola and its effect on the music</li>
<li>Understand how metre relates to dance forms and character</li>
<li>Listen for metrical accents and their role in shaping phrases</li>
<li>Describe how metre supports the overall structure of the music</li>
<li>Use correct terminology when discussing metrical features</li>
<li>Focus on the metrical features <em>actually heard</em> in the recorded extracts</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default Baroque0103MetrePage;
