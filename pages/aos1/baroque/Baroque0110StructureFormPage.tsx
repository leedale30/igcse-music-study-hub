import React from 'react';
import { Link } from 'react-router-dom';

const Baroque0110StructureFormPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/baroque" className="hover:text-sky-600 dark:hover:text-sky-400">Baroque Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Structure Form</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Structure Form
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
<p>Structure/Form refers to the overall shape and organisation of musical sections. Baroque structure is defined by the proliferation of new instrumental forms that established clear, replicable plans, often centered on contrast.</p>
</section>
 Ritornello Form - Primary Focus 
<section>
<h2>Ritornello Form - The Primary Focus</h2>
<h3>Definition and Characteristics</h3>
<p>The defining structural principle of the concerto (solo or grosso). Ritornello form is based on the alternation of two contrasting sections:</p>
<h4>Ritornello Sections</h4>
<ul>
<li>The recurring orchestral <strong>ritornello</strong> theme</li>
<li>Played <strong>tutti</strong> (full orchestra) or <strong>ripieno</strong></li>
<li>Usually in the tonic key when it returns</li>
<li>Provides structural stability and thematic unity</li>
</ul>
<h4>Episode Sections</h4>
<ul>
<li>Contrasting solo-dominated <strong>episodes</strong></li>
<li>Played by the <strong>concertino</strong> (small group) or soloist</li>
<li>Often modulate to related keys</li>
<li>Feature virtuosic writing and development</li>
</ul>
<h3>Structural Pattern</h3>
<p>A typical ritornello form follows this pattern:</p>
<p><strong>Ritornello - Episode - Ritornello - Episode - Ritornello - Episode - Final Ritornello</strong></p>
</section>
 The Concerto Genre 
<section>
<h2>The Concerto - Defined by Contrast</h2>
<h3>Fundamental Principle</h3>
<p>The genre itself is defined by the <strong>contrast</strong> between soloists and the larger orchestra. This contrast operates on multiple levels:</p>
<h4>Textural Contrast</h4>
<ul>
<li>Thick orchestral texture vs. thin solo texture</li>
<li>Polyphonic tutti sections vs. homophonic solo sections</li>
</ul>
<h4>Dynamic Contrast</h4>
<ul>
<li>Loud orchestral passages vs. softer solo passages</li>
<li>Terraced dynamics between sections</li>
</ul>
<h4>Tonal Contrast</h4>
<ul>
<li>Ritornellos typically in tonic key</li>
<li>Episodes often modulate to related keys</li>
</ul>
<h4>Technical Contrast</h4>
<ul>
<li>Thematic ritornello material vs. virtuosic episode material</li>
<li>Memorable themes vs. technical passagework</li>
</ul>
</section>
 French Overture 
<section>
<h2>French Overture</h2>
<h3>Structure and Characteristics</h3>
<p>A common structure featuring two contrasting sections:</p>
<h4>Opening Section</h4>
<ul>
<li>Characteristic <strong>slow, majestic</strong> tempo</li>
<li>Features distinctive <strong>dotted rhythms</strong></li>
<li>Creates ceremonial, stately character</li>
<li>Often homophonic texture</li>
</ul>
<h4>Main Section</h4>
<ul>
<li><strong>Faster</strong> tempo following the slow introduction</li>
<li>Often in <strong>fugal style</strong> with imitative entries</li>
<li>More complex polyphonic texture</li>
<li>Provides energetic contrast to the opening</li>
</ul>
</section>
 Other Baroque Structures 
<section>
<h2>Other Important Baroque Structures</h2>
<h3>Binary Form</h3>
<ul>
<li>Two-part structure: A - B</li>
<li>Each section usually repeated</li>
<li>Common in dance movements</li>
<li>First section modulates away from tonic</li>
<li>Second section returns to tonic</li>
</ul>
<h3>Ternary Form</h3>
<ul>
<li>Three-part structure: A - B - A</li>
<li>Clear return of opening material</li>
<li>Middle section provides contrast</li>
<li>Often used in da capo arias</li>
</ul>
<h3>Rondo Form</h3>
<ul>
<li>Based on recurring refrain: A - B - A - C - A</li>
<li>Similar principle to ritornello but in different context</li>
<li>Episodes provide contrasting material</li>
</ul>
<h3>Ground Bass (Passacaglia/Chaconne)</h3>
<ul>
<li>Continuous variation over repeated bass pattern</li>
<li>Bass line (ground) remains constant</li>
<li>Upper voices provide variation and development</li>
</ul>
<h3>Fugue</h3>
<ul>
<li>Imitative polyphonic structure</li>
<li>Subject presented in different voices</li>
<li>Episodes provide developmental material</li>
<li>Complex contrapuntal organization</li>
</ul>
<h3>Minuet and Trio</h3>
<ul>
<li>Three-part structure: Minuet - Trio - Minuet</li>
<li>Each section in binary form</li>
<li>Trio provides contrast (often thinner texture)</li>
<li>Final minuet usually played without repeats</li>
</ul>
</section>
 Focus Work Examples 
<section>
<h2>Focus Work Examples</h2>
<h3>Vivaldi: Spring (Movement 1) from The Four Seasons</h3>
<ul>
<li>Perfect example of <strong>ritornello form</strong></li>
<li>Clear alternation between orchestral ritornellos and solo episodes</li>
<li>Ritornellos return in tonic key (E major)</li>
<li>Episodes modulate to related keys and feature virtuosic violin writing</li>
<li>Structure supports the programmatic content</li>
</ul>
<h3>Handel: Concerto Grosso in D major Op. 6, No. 5</h3>
<ul>
<li>Multi-movement work demonstrating various Baroque forms</li>
<li>Shows contrast between concertino and ripieno</li>
<li>Different movements employ different structural principles</li>
<li>Demonstrates how form supports musical expression</li>
</ul>
</section>
 Structural Analysis 
<section>
<h2>Analyzing Baroque Structure</h2>
<h3>Key Questions for Analysis</h3>
<p>When analyzing structure in Baroque music, consider:</p>
<ul>
<li>What is the overall formal plan?</li>
<li>How are sections differentiated (key, texture, dynamics, instrumentation)?</li>
<li>What material returns and what is new?</li>
<li>How does the structure create contrast and unity?</li>
<li>What role does modulation play in defining sections?</li>
<li>How do performing forces change between sections?</li>
</ul>
<h3>Identifying Formal Boundaries</h3>
<p>Section boundaries are typically marked by:</p>
<ul>
<li>Cadences (especially perfect cadences)</li>
<li>Changes in key</li>
<li>Changes in texture or instrumentation</li>
<li>Return of familiar thematic material</li>
<li>Dynamic contrasts</li>
</ul>
</section>
 Essential Terminology 
<section>
<h2>Essential Terminology</h2>
<p>Students must recognize and understand these structural terms:</p>
<ul>
<li><strong>Ritornello</strong> - Recurring orchestral theme in concerto form</li>
<li><strong>Episode</strong> - Contrasting solo sections between ritornellos</li>
<li><strong>Fugue</strong> - Imitative polyphonic form</li>
<li><strong>Basso Continuo</strong> - Harmonic foundation present throughout</li>
<li><strong>French Overture</strong> - Slow-fast two-part structure</li>
<li><strong>Solo</strong> - Individual instrument or small group featured</li>
<li><strong>Tutti</strong> - Full ensemble playing together</li>
<li><strong>Ripieno</strong> - Full orchestra in concerto grosso</li>
<li><strong>Concertino</strong> - Small solo group in concerto grosso</li>
<li><strong>Binary Form</strong> - Two-part structure (A-B)</li>
<li><strong>Ternary Form</strong> - Three-part structure (A-B-A)</li>
<li><strong>Ground Bass</strong> - Repeated bass pattern with variations above</li>
</ul>
</section>
 Assessment Focus 
<section>
<h2>Assessment Focus</h2>
<p>For IGCSE examination purposes, students should be able to:</p>
<ul>
<li>Identify ritornello form and its characteristic alternating sections</li>
<li>Recognize the contrast between ritornello and episode sections</li>
<li>Understand how different performing forces define structural sections</li>
<li>Identify other Baroque forms (binary, ternary, rondo, ground bass, fugue)</li>
<li>Analyze how key relationships support formal structure</li>
<li>Recognize the role of cadences in defining formal boundaries</li>
<li>Understand how texture and dynamics support structural organization</li>
<li>Connect structural principles to specific focus work examples</li>
<li>Analyze how form supports musical expression and programmatic content</li>
</ul>
<p><strong>Important Note:</strong> Candidates must concentrate their analytical responses on the musical features actually heard in the recorded extracts, rather than generalizing based solely on knowledge of the Baroque period.</p>
</section>` }} />
      </div>
    </article>
  );
};

export default Baroque0110StructureFormPage;
