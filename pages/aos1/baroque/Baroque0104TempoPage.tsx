import React from 'react';
import { Link } from 'react-router-dom';

const Baroque0104TempoPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/baroque" className="hover:text-sky-600 dark:hover:text-sky-400">Baroque Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Tempo</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Tempo
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
        <div dangerouslySetInnerHTML={{ __html: `Introduction 
<section>
<h2>Definition</h2>
<p>Tempo refers to the speed at which the music is performed, often affecting mood and style. In Baroque music, tempo selection was vital, often dictated by the chosen form or dance, and governed by Italian terminology.</p>
</section>
 Key Characteristics 
<section>
<h2>Key Characteristics of Tempo in Baroque Music</h2>
<h3>The Doctrine of Affection</h3>
<p>Composers generally adhered to the doctrine of "affection," holding the idea that a single emotional mood (or feeling) should persist throughout an entire piece or movement, strongly influenced by the chosen tempo.</p>
<h3>Consistency Within Movements</h3>
<p>Although overall tempo often remains constant throughout a movement, the syllabus requires knowledge of tempo changes such as accelerando, rallentando, and rubato.</p>
</section>
 Italian Tempo Markings 
<section>
<h2>Essential Italian Tempo Markings</h2>
<p>Candidates must recognize established Italian terms that indicate the speed of performance:</p>
<h3>Basic Tempo Terms</h3>
<ul>
<li><strong>Largo</strong> - Very slow</li>
<li><strong>Adagio</strong> - Slow</li>
<li><strong>Andante</strong> - Moderate/walking pace</li>
<li><strong>Allegro</strong> - Fast</li>
</ul>
<h3>Tempo Modifications</h3>
<ul>
<li><strong>Accelerando</strong> - Gradually getting faster</li>
<li><strong>Rallentando</strong> - Gradually getting slower</li>
<li><strong>Rubato</strong> - Flexible tempo for expressive effect</li>
</ul>
</section>
 Focus Work Examples 
<section>
<h2>Focus Work Examples</h2>
<h3>Handel: Concerto Grosso in D major Op. 6, No. 5</h3>
<p>Handel's concerto demonstrates various tempo markings throughout its movements:</p>
<ul>
<li>Opens with <strong>Larghetto e staccato</strong> - A moderately slow tempo with detached articulation</li>
<li>Features an <strong>Allegro</strong> second movement - Fast and lively</li>
</ul>
<h3>Vivaldi: Spring (from The Four Seasons)</h3>
<p>Vivaldi's set work movement is marked <strong>Allegro</strong>, creating the energetic and vibrant character appropriate for depicting spring's arrival.</p>
</section>
 Performance Practice 
<section>
<h2>Performance Practice</h2>
<p>In Baroque performance practice, tempo was often determined by:</p>
<ul>
<li>The character and mood intended by the composer</li>
<li>The technical demands of the music</li>
<li>The dance forms being referenced</li>
<li>The size and acoustics of the performance venue</li>
<li>The capabilities of the instruments and performers</li>
</ul>
</section>
 Assessment Focus 
<section>
<h2>Assessment Focus</h2>
<p>For IGCSE examination purposes, students should be able to:</p>
<ul>
<li>Identify and define Italian tempo markings</li>
<li>Recognize how tempo affects the character and mood of music</li>
<li>Understand the relationship between tempo and the doctrine of affection</li>
<li>Analyze how tempo choices support the overall structure and form</li>
<li>Identify tempo changes and modifications within movements</li>
<li>Connect tempo markings to specific examples from the focus works</li>
</ul>
<p><strong>Important Note:</strong> Candidates must concentrate their analytical responses on the musical features actually heard in the recorded extracts, rather than generalizing based solely on knowledge of the Baroque period.</p>
</section>` }} />
      </div>
    </article>
  );
};

export default Baroque0104TempoPage;
