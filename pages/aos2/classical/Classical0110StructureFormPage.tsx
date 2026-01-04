import React from 'react';
import { Link } from 'react-router-dom';

const Classical0110StructureFormPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Structure Form</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Structure Form
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
<h2>Definition: Structure and Form</h2>
<p><strong>Structure and Form</strong> refer to the architectural organization of musical material over time. In Classical music, form represents the large-scale design of a composition, while structure encompasses both the overall plan and the detailed organization of themes, keys, and developmental processes. Classical forms are characterized by clarity, balance, and logical progression of musical ideas.</p>
</section>
 Key Characteristics Section 
<section className="characteristics-section" id="key-characteristics">
<h2>Key Characteristics of Classical Structure and Form</h2>
<div className="feature-list" id="classical-formal-features">
<h3>Formal Principles</h3>
<ul>
<li><strong>Clarity and balance:</strong> Clear sectional divisions with proportional relationships</li>
<li><strong>Thematic contrast:</strong> Distinct themes with contrasting characters and keys</li>
<li><strong>Developmental processes:</strong> Systematic transformation and elaboration of themes</li>
<li><strong>Tonal architecture:</strong> Key relationships that support formal structure</li>
<li><strong>Periodic phrasing:</strong> Regular phrase lengths creating predictable patterns</li>
</ul>
<h3>Sonata Form Elements</h3>
<ul>
<li><strong>Exposition:</strong> Presentation of primary and secondary themes in contrasting keys</li>
<li><strong>Development:</strong> Fragmentation, combination, and transformation of thematic material</li>
<li><strong>Recapitulation:</strong> Return of exposition material, typically in the tonic key</li>
<li><strong>Coda:</strong> Concluding section that provides closure and finality</li>
<li><strong>Transitions:</strong> Modulatory passages connecting main thematic areas</li>
</ul>
<h3>Other Classical Forms</h3>
<ul>
<li><strong>Rondo form:</strong> Recurring main theme alternating with contrasting episodes</li>
<li><strong>Theme and variations:</strong> Systematic transformation of a single theme</li>
<li><strong>Minuet and trio:</strong> ABA dance form with contrasting middle section</li>
<li><strong>Binary form:</strong> Two-part structure with modulation and return</li>
<li><strong>Ternary form:</strong> Three-part ABA structure with clear return</li>
</ul>
</div>
</section>
 Terminology Section 
<section className="terminology-section" id="terminology">
<h2>Essential Structure and Form Terminology</h2>
<div className="terminology-list" id="form-terms">
<h3>Formal Sections</h3>
<ul>
<li><strong>Exposition:</strong> Initial presentation of thematic material</li>
<li><strong>Development:</strong> Section devoted to thematic transformation</li>
<li><strong>Recapitulation:</strong> Return of exposition material</li>
<li><strong>Coda:</strong> Concluding section</li>
<li><strong>Episode:</strong> Contrasting section in rondo form</li>
</ul>
<h3>Thematic Elements</h3>
<ul>
<li><strong>Primary theme:</strong> First main theme, typically in tonic key</li>
<li><strong>Secondary theme:</strong> Second main theme, typically in dominant or relative major</li>
<li><strong>Closing theme:</strong> Concluding thematic material</li>
<li><strong>Transition:</strong> Modulatory passage between themes</li>
<li><strong>Codetta:</strong> Small concluding passage within a section</li>
</ul>
<h3>Developmental Techniques</h3>
<ul>
<li><strong>Fragmentation:</strong> Breaking themes into smaller units</li>
<li><strong>Sequence:</strong> Repetition of patterns at different pitch levels</li>
<li><strong>Inversion:</strong> Turning melodic intervals upside down</li>
<li><strong>Augmentation:</strong> Lengthening note values</li>
<li><strong>Diminution:</strong> Shortening note values</li>
</ul>
</div>
</section>
 Focus Work Examples Section 
<section className="examples-section" id="focus-work-examples">
<h2>Structure and Form in Mozart's Quintet for Piano and Winds, K. 452</h2>
<div className="work-analysis" id="mozart-form-analysis">
<h3>Overall Structure</h3>
<p>Mozart's Quintet follows a three-movement structure typical of Classical chamber music: fast-slow-fast, with each movement employing different formal principles.</p>
<h4>First Movement - Largo/Allegro moderato (Sonata Form)</h4>
<ul>
<li><strong>Slow introduction (Largo):</strong> Sets dramatic tone and introduces key thematic material</li>
<li><strong>Exposition:</strong> Primary theme in Eb major, transition, secondary theme in Bb major</li>
<li><strong>Development:</strong> Fragmentation and combination of themes from both introduction and exposition</li>
<li><strong>Recapitulation:</strong> Return of exposition material, both themes now in Eb major</li>
<li><strong>Coda:</strong> Extended conclusion incorporating material from the slow introduction</li>
</ul>
<h4>Second Movement - Larghetto (Ternary Form)</h4>
<ul>
<li><strong>A section:</strong> Lyrical theme in Bb major with elaborate ornamentation</li>
<li><strong>B section:</strong> Contrasting material in G minor with increased harmonic tension</li>
<li><strong>A' section:</strong> Return of opening material with varied instrumentation and decoration</li>
<li><strong>Formal balance:</strong> Clear proportional relationships between sections</li>
</ul>
<h4>Third Movement - Rondo: Allegretto (Rondo Form)</h4>
<ul>
<li><strong>Rondo theme (A):</strong> Playful, dance-like character in Eb major</li>
<li><strong>First episode (B):</strong> Contrasting material in Bb major</li>
<li><strong>Return of A:</strong> Rondo theme with slight variations</li>
<li><strong>Second episode (C):</strong> Development-like section with thematic transformation</li>
<li><strong>Final return:</strong> Rondo theme leading to extended coda</li>
</ul>
</div>
<div className="additional-examples" id="other-classical-examples">
<h3>Other Classical Examples</h3>
<ul>
<li><strong>Mozart Symphony No. 40, first movement:</strong> Dramatic sonata form with integrated development</li>
<li><strong>Haydn "Surprise" Symphony, second movement:</strong> Theme and variations form</li>
<li><strong>Beethoven Piano Sonata Op. 27 No. 2, first movement:</strong> Modified sonata form</li>
<li><strong>Mozart Piano Sonata K. 331, first movement:</strong> Theme and variations replacing sonata form</li>
</ul>
</div>
</section>
 Performance Practice Section 
<section className="practice-section" id="performance-practice">
<h2>Performance Practice and Form</h2>
<div className="practice-guidelines" id="formal-performance">
<h3>Structural Awareness</h3>
<ul>
<li><strong>Formal articulation:</strong> Clear delineation of sections through phrasing and dynamics</li>
<li><strong>Thematic character:</strong> Distinct interpretation of different themes and their returns</li>
<li><strong>Developmental intensity:</strong> Building tension through development sections</li>
<li><strong>Proportional balance:</strong> Maintaining appropriate relationships between sections</li>
<li><strong>Cadential emphasis:</strong> Highlighting structural cadences and formal boundaries</li>
</ul>
<h3>Interpretive Considerations</h3>
<ul>
<li><strong>Tempo relationships:</strong> Appropriate tempo choices that support formal structure</li>
<li><strong>Dynamic architecture:</strong> Long-term dynamic planning across entire movements</li>
<li><strong>Textural clarity:</strong> Bringing out important voices and thematic material</li>
<li><strong>Harmonic awareness:</strong> Understanding tonal relationships that support form</li>
</ul>
<h4>Ensemble Coordination</h4>
<ul>
<li><strong>Formal communication:</strong> Ensemble members must understand structural landmarks</li>
<li><strong>Thematic responsibility:</strong> Clear presentation when carrying main themes</li>
<li><strong>Transitional smoothness:</strong> Seamless connections between formal sections</li>
<li><strong>Collective phrasing:</strong> Unified approach to phrase structure and articulation</li>
</ul>
</div>
</section>
 Assessment Focus Section 
<section className="assessment-section" id="assessment-focus">
<h2>Assessment Focus</h2>
<p>Key points for IGCSE Music assessment regarding structure and form in Classical music:</p>
<div className="assessment-list" id="assessment-points">
<h3>Essential Knowledge</h3>
<ul>
<li><strong>Formal types:</strong> Identify and understand sonata form, rondo, theme and variations</li>
<li><strong>Structural sections:</strong> Recognize exposition, development, recapitulation, and other formal divisions</li>
<li><strong>Thematic relationships:</strong> Understand how themes are presented, developed, and returned</li>
<li><strong>Tonal architecture:</strong> Key relationships that support formal structure</li>
<li><strong>Developmental techniques:</strong> Methods of thematic transformation and elaboration</li>
<li><strong>Historical context:</strong> Classical formal principles and their evolution</li>
</ul>
<h3>Analytical Skills</h3>
<ul>
<li>Identify formal structures in Classical compositions</li>
<li>Trace thematic development and transformation processes</li>
<li>Analyze the relationship between form and tonal structure</li>
<li>Evaluate the effectiveness of formal proportions and balance</li>
<li>Compare formal treatment across different Classical works and composers</li>
</ul>
<h3>Listening Examination Focus</h3>
<ul>
<li>Recognition of formal sections and their boundaries</li>
<li>Identification of thematic material and its transformations</li>
<li>Understanding of how other musical elements support formal structure</li>
<li>Analysis of developmental techniques and their effects</li>
<li>Focus on the formal features <em>actually heard</em> in the recorded extracts</li>
</ul>
<h3>Composition and Performance</h3>
<ul>
<li>Application of Classical formal principles in original compositions</li>
<li>Demonstration of structural awareness in performance</li>
<li>Understanding of how form affects interpretation and expression</li>
<li>Ability to communicate formal structure through performance choices</li>
</ul>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default Classical0110StructureFormPage;
