import React from 'react';
import { Link } from 'react-router-dom';

const Classical0101DynamicsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Dynamics</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Dynamics
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
<h2>Definition: Dynamics</h2>
<p><strong>Dynamics</strong> refers to the volume levels and expressive changes throughout a piece of music. In the context of Classical music, dynamics play a crucial role in creating expressive nuance and emotional depth through sophisticated control of volume.</p>
</section>
 Key Characteristics Section 
<section className="characteristics-section" id="key-characteristics">
<h2>Key Characteristics of Classical Dynamics</h2>
<div className="characteristic-item" id="graded-dynamics">
<h3>Graded Dynamics</h3>
<p>The Classical period significantly expanded dynamic control, moving beyond the abrupt shifts typical of the Baroque style. This represents one of the most important innovations of the Classical era.</p>
<h4>The Fortepiano Revolution</h4>
<p>The replacement of the harpsichord by the <strong>fortepiano</strong> (early piano) was revolutionary for dynamic expression. Unlike the harpsichord, which could only produce sudden changes in volume, the fortepiano allowed for:</p>
<ul>
<li>Gradual increases in volume (<strong>crescendo</strong>)</li>
<li>Gradual decreases in volume (<strong>diminuendo</strong> or <strong>decrescendo</strong>)</li>
<li>Subtle variations in touch and expression</li>
<li>Immediate response to the performer's finger pressure</li>
</ul>
<h4>Fundamental Stylistic Markers</h4>
<p>Candidates must recognize <strong>crescendo</strong> (gradually louder) and <strong>diminuendo</strong> or <strong>decrescendo</strong> (gradually quieter) as fundamental stylistic markers of the Classical period. These gradual changes create smooth transitions and expressive shaping that define Classical style.</p>
</div>
<div className="characteristic-item" id="dynamic-range">
<h3>Extended Dynamic Range</h3>
<p>The Classical period utilized the full range of standard dynamic markings with greater precision and frequency than previous eras.</p>
<h4>Frequent Dynamic Changes</h4>
<p>Classical music is characterized by:</p>
<ul>
<li>Frequent changes in mood through dynamic variation</li>
<li>Precise use of dynamic markings even within short passages</li>
<li>Dynamic contrasts that support the formal structure</li>
<li>Expressive use of dynamics to highlight melodic phrases</li>
</ul>
</div>
</section>
 Terminology Section 
<section className="terminology-section" id="terminology">
<h2>Essential Dynamic Terminology</h2>
<p>The full range of standard dynamic markings is utilized often and precisely in Classical music:</p>
<div className="terminology-list" id="dynamic-markings">
<h3>Basic Dynamic Markings</h3>
<ul>
<li><strong>pp (pianissimo)</strong> - Very quiet</li>
<li><strong>p (piano)</strong> - Quiet</li>
<li><strong>mp (mezzo piano)</strong> - Moderately quiet</li>
<li><strong>mf (mezzo forte)</strong> - Moderately loud</li>
<li><strong>f (forte)</strong> - Loud</li>
<li><strong>ff (fortissimo)</strong> - Very loud</li>
</ul>
<h3>Gradual Dynamic Changes</h3>
<p>These are the defining characteristics of Classical dynamic practice:</p>
<ul>
<li><strong>crescendo</strong> - Gradually getting louder (fundamental Classical marker)</li>
<li><strong>diminuendo</strong> - Gradually getting quieter (fundamental Classical marker)</li>
<li><strong>decrescendo</strong> - Alternative term for diminuendo</li>
</ul>
<p><em>Note: The ability to create these gradual changes was made possible by the fortepiano and represents a key difference from Baroque terraced dynamics.</em></p>
</div>
</section>
 Comparison with Baroque Section 
<section className="comparison-section" id="baroque-comparison">
<h2>Contrast with Baroque Dynamics</h2>
<div className="comparison-item" id="baroque-vs-classical">
<h3>Baroque vs. Classical Dynamic Practice</h3>
<h4>Baroque Characteristics:</h4>
<ul>
<li><strong>Terraced dynamics</strong> - Sudden, abrupt changes</li>
<li>Limited to forte/piano contrasts</li>
<li>Changes coincided with textural changes (solo/tutti)</li>
<li>Harpsichord limitations prevented gradual changes</li>
</ul>
<h4>Classical Innovations:</h4>
<ul>
<li><strong>Graded dynamics</strong> - Smooth, gradual changes</li>
<li>Full range of dynamic markings used precisely</li>
<li>Dynamic changes for expressive purposes</li>
<li>Fortepiano enabled sophisticated dynamic control</li>
</ul>
</div>
</section>
 Focus Work Examples Section 
<section className="examples-section" id="focus-examples">
<h2>Focus Work Examples</h2>
<div className="example-item" id="mozart-example">
<h3>Mozart: <em>Quintet for Piano and Winds in E flat major, K. 452</em></h3>
<p>Mozart's Quintet demonstrates sophisticated Classical dynamic practice:</p>
<ul>
<li><strong>Expressive crescendos</strong> that build tension and excitement</li>
<li><strong>Delicate diminuendos</strong> that create intimate, conversational passages</li>
<li><strong>Precise dynamic markings</strong> that support the formal structure</li>
<li><strong>Contrasts between piano and winds</strong> that highlight different instrumental colors</li>
<li><strong>Dynamic shaping of phrases</strong> that enhances melodic expression</li>
</ul>
<h4>Specific Examples in the Quintet:</h4>
<ul>
<li>Opening movement: Gradual dynamic build-ups in development sections</li>
<li>Slow movement: Subtle dynamic nuances that enhance lyrical expression</li>
<li>Finale: Dramatic dynamic contrasts that support the rondo structure</li>
</ul>
</div>
</section>
 Performance Practice Section 
<section className="practice-section" id="performance-practice">
<h2>Classical Performance Practice</h2>
<p>Understanding Classical dynamic practice is essential for authentic interpretation:</p>
<ul>
<li><strong>Gradual Changes:</strong> Dynamics change smoothly and expressively, not abruptly</li>
<li><strong>Expressive Function:</strong> Dynamic changes serve to enhance melodic expression and formal structure</li>
<li><strong>Instrumental Capability:</strong> The fortepiano's touch-sensitive mechanism enabled sophisticated dynamic control</li>
<li><strong>Frequent Variation:</strong> Dynamic levels change more frequently than in Baroque music</li>
<li><strong>Structural Support:</strong> Dynamics help to articulate formal sections and phrase structures</li>
</ul>
</section>
 Assessment Relevance Section 
<section className="assessment-section" id="assessment-relevance">
<h2>Assessment Relevance</h2>
<div className="assessment-item" id="component-2">
<h3>Component 2: Performing</h3>
<p>In performing (Component 2), candidates are assessed on their technical control and interpretation of dynamic markings. This includes:</p>
<ul>
<li>Accurate execution of written dynamic markings</li>
<li>Appropriate use of crescendo and diminuendo</li>
<li>Stylistically appropriate dynamic interpretation</li>
<li>Technical control of gradual dynamic changes</li>
</ul>
</div>
<div className="assessment-item" id="listening-exam">
<h3>Component 1: Listening Examination</h3>
<p>When analyzing Classical music in the listening examination, candidates should:</p>
<ul>
<li>Identify gradual dynamic changes (crescendo/diminuendo)</li>
<li>Recognize the expressive function of dynamic variation</li>
<li>Use correct Italian terminology when describing dynamics</li>
<li>Understand how dynamics support formal structure</li>
<li>Focus on the musical features <em>actually heard</em> in the recorded extracts</li>
</ul>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default Classical0101DynamicsPage;
