import React from 'react';
import { Link } from 'react-router-dom';

const Baroque0101DynamicsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/baroque" className="hover:text-sky-600 dark:hover:text-sky-400">Baroque Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Dynamics</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Dynamics
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
<h2>Definition: Dynamics</h2>
<p><strong>Dynamics</strong> refers to the volume levels and expressive changes throughout a piece of music. In the context of Baroque music, dynamics play a crucial role in creating contrast and defining the structural elements of compositions.</p>
</section>
 Key Characteristics Section 
<section className="characteristics-section" id="key-characteristics">
<h2>Key Characteristics of Baroque Dynamics</h2>
<div className="characteristic-item" id="terraced-dynamics">
<h3>Terraced Dynamics</h3>
<p>The Baroque period is famously characterized by the use of <strong>terraced dynamics</strong>. This is the most crucial dynamic feature for understanding Baroque music.</p>
<h4>What are Terraced Dynamics?</h4>
<p>Terraced dynamics refer to <strong>sudden, abrupt changes</strong> from loud (<em>forte</em>) to quiet (<em>piano</em>) or vice versa, without the gradual changes found in Classical and Romantic periods. These changes create distinct "terraces" or levels of volume, much like steps on a staircase.</p>
<h4>Why Terraced Dynamics Developed</h4>
<p>This practice was a result of several factors:</p>
<ul>
<li>The musical conventions of the era</li>
<li>The nature of instruments used (such as the harpsichord, which cannot create gradual volume changes)</li>
<li>Performance traditions where dynamics were often understood implicitly or directed by the composer leading the performance</li>
</ul>
</div>
<div className="characteristic-item" id="concerto-dynamics">
<h3>Dynamics in Concerto Forms</h3>
<p>Terraced dynamics are particularly evident in the concerto genre (solo concerto and concerto grosso), where contrast is fundamental to the form:</p>
<h4>Tutti (Ripieno) Sections</h4>
<p>When the full orchestra plays (<strong>tutti</strong> or <strong>ripieno</strong>), the dynamic is typically <strong>forte (f)</strong> or louder. These sections provide power and grandeur to the musical statement.</p>
<h4>Solo (Concertino) Sections</h4>
<p>When the smaller group of soloists (<strong>concertino</strong>) or a single soloist plays alone, the dynamic drops sharply to <strong>piano (p)</strong> or <strong>mezzo piano (mp)</strong>. This creates intimate, contrasting passages that highlight the virtuosity of the soloists.</p>
</div>
</section>
 Terminology Section 
<section className="terminology-section" id="terminology">
<h2>Essential Dynamic Terminology</h2>
<p>Candidates must understand the full range of Italian dynamic markings, which apply to music from all periods tested in the syllabus:</p>
<div className="terminology-list" id="dynamic-markings">
<h3>Basic Dynamic Markings</h3>
<ul>
<li><strong>pianissimo (pp)</strong> - Very quiet</li>
<li><strong>piano (p)</strong> - Quiet</li>
<li><strong>mezzo piano (mp)</strong> - Moderately quiet</li>
<li><strong>mezzo forte (mf)</strong> - Moderately loud</li>
<li><strong>forte (f)</strong> - Loud</li>
<li><strong>fortissimo (ff)</strong> - Very loud</li>
</ul>
<h3>Dynamic Changes</h3>
<p>While Baroque performance practice emphasizes the abrupt changes of terraced dynamics, candidates should also understand general terminology for gradual changes:</p>
<ul>
<li><strong>crescendo</strong> - Gradually getting louder</li>
<li><strong>diminuendo</strong> - Gradually getting quieter</li>
</ul>
<p><em>Note: These gradual changes are less characteristic of authentic Baroque performance practice but are important terms for the broader curriculum.</em></p>
</div>
</section>
 Focus Work Examples Section 
<section className="examples-section" id="focus-examples">
<h2>Focus Work Examples</h2>
<div className="example-item" id="vivaldi-example">
<h3>Vivaldi: <em>Spring</em> (Movement 1)</h3>
<p>In Vivaldi's <em>Spring</em> (Movement 1), the music demonstrates terraced dynamics explicitly. Key examples include:</p>
<ul>
<li>The opening musical material is initially stated <em>forte</em> by the full orchestra</li>
<li>The same material is then repeated <em>piano</em>, creating a clear terrace effect</li>
<li>Solo violin passages typically occur at a quieter dynamic level, contrasting with the full orchestral <em>tutti</em> sections</li>
</ul>
</div>
<div className="example-item" id="handel-example">
<h3>Handel: <em>Concerto Grosso Op. 6 No. 5</em></h3>
<p>Handel's <em>Menuet</em> (Movement 6 of Op. 6, No. 5) also includes clear indications of terraced dynamics:</p>
<ul>
<li>Alternation between full orchestra and smaller concertino group</li>
<li>Clear dynamic contrasts that define the structure of the movement</li>
<li>Sudden shifts in volume that emphasize the dance-like character of the menuet</li>
</ul>
</div>
</section>
 Performance Practice Section 
<section className="practice-section" id="performance-practice">
<h2>Baroque Performance Practice</h2>
<p>Understanding Baroque dynamic practice is essential for authentic interpretation:</p>
<ul>
<li><strong>Immediate Changes:</strong> Dynamics change instantly, not gradually</li>
<li><strong>Structural Function:</strong> Dynamic changes often coincide with textural changes (solo vs. tutti)</li>
<li><strong>Expressive Purpose:</strong> Terraced dynamics create dramatic contrast and highlight the architecture of the music</li>
<li><strong>Instrumental Limitations:</strong> Many Baroque instruments (especially keyboard instruments like the harpsichord) were incapable of gradual dynamic changes</li>
</ul>
</section>
 Assessment Focus Section 
<section className="assessment-section" id="assessment-focus">
<h2>Assessment Focus</h2>
<p><strong>Important for Examination:</strong> When analyzing Baroque music in the listening examination, candidates should:</p>
<ul>
<li>Listen for sudden changes in volume rather than gradual ones</li>
<li>Identify the relationship between dynamic changes and textural changes (solo/tutti alternation)</li>
<li>Use correct Italian terminology when describing dynamic levels</li>
<li>Recognize how terraced dynamics contribute to the overall structure and character of the music</li>
<li>Focus on the musical features <em>actually heard</em> in the recorded extracts, rather than making general assumptions about Baroque practice</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default Baroque0101DynamicsPage;
