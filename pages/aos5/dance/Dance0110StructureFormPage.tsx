import React from 'react';
import { Link } from 'react-router-dom';

const Dance0110StructureFormPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Structure Form</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Structure Form
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 5 • Music for Dance
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
      ">
        <div dangerouslySetInnerHTML={{ __html: `Definition section 
<section>
<h3>What is Structure/Form in Music for Dance?</h3>
<p>Structure or form refers to the overall organization and architecture of a musical piece - how different sections are arranged and related to create a complete work. In dance music, structure is particularly important as it provides a framework for choreography, creates predictable patterns that dancers can follow, and builds energy through repetition, contrast, and development.</p>
</section>
 Key characteristics 
<section>
<h3>Key Characteristics of Structure in Dance Music</h3>
<ul>
<li><strong>Sectional Organization:</strong> Clear divisions into verses, choruses, bridges, etc.</li>
<li><strong>Repetition:</strong> Recurring sections that provide familiarity and danceability</li>
<li><strong>Contrast:</strong> Different sections that provide variety and interest</li>
<li><strong>Build and Release:</strong> Tension and energy patterns throughout the piece</li>
<li><strong>Phrase Structure:</strong> Regular phrase lengths that match dance patterns</li>
<li><strong>Functional Sections:</strong> Introduction, development, climax, and conclusion</li>
</ul>
</section>
 Applications in focus genres 
<section>
<h3>Structure in Our Focus Genres</h3>
<h4>Tango</h4>
<ul>
<li><strong>Binary Form:</strong> Often AB or AABA structure</li>
<li><strong>Introduction:</strong> Sets the mood and tempo</li>
<li><strong>Main Sections:</strong> Contrasting melodic and rhythmic material</li>
<li><strong>Instrumental Solos:</strong> Featured sections for bandoneón or violin</li>
<li><strong>Coda:</strong> Dramatic conclusion, often with ritardando</li>
<li><strong>Phrase Length:</strong> Often irregular to allow for expressive rubato</li>
</ul>
<h4>Salsa</h4>
<ul>
<li><strong>Verse-Chorus Structure:</strong> Clear alternation between sections</li>
<li><strong>Montuno Section:</strong> Call-and-response between lead and chorus</li>
<li><strong>Instrumental Breaks:</strong> Solos for piano, brass, or percussion</li>
<li><strong>Mambo Section:</strong> Instrumental section for dancing</li>
<li><strong>Coro:</strong> Repeated chorus sections with variations</li>
<li><strong>Regular Phrases:</strong> Typically 8 or 16-bar phrases</li>
</ul>
<h4>Electronic Dance Music (EDM)</h4>
<ul>
<li><strong>Intro-Build-Drop-Outro:</strong> Standard EDM structure</li>
<li><strong>Build-ups:</strong> Gradual increase in energy leading to drops</li>
<li><strong>Drops:</strong> High-energy sections with full instrumentation</li>
<li><strong>Breakdowns:</strong> Reduced sections creating contrast</li>
<li><strong>Loops:</strong> Repetitive sections designed for continuous dancing</li>
<li><strong>32-bar Phrases:</strong> Extended phrases for DJ mixing</li>
</ul>
</section>
 Essential terminology 
<section>
<h3>Essential Structure Terminology</h3>
<dl>
<dt><strong>Section</strong></dt>
<dd>A distinct part of a musical piece (verse, chorus, bridge)</dd>
<dt><strong>Phrase</strong></dt>
<dd>A complete musical thought, usually 4 or 8 bars</dd>
<dt><strong>Period</strong></dt>
<dd>Two related phrases forming a larger unit</dd>
<dt><strong>Bridge</strong></dt>
<dd>A contrasting section that connects other parts</dd>
<dt><strong>Coda</strong></dt>
<dd>A concluding section that brings the piece to an end</dd>
<dt><strong>Ostinato</strong></dt>
<dd>A repeated musical pattern or phrase</dd>
</dl>
</section>
 Performance practice 
<section>
<h3>Performance Practice</h3>
<h4>For Musicians:</h4>
<ul>
<li>Clearly articulate section changes and transitions</li>
<li>Build energy appropriately throughout the structure</li>
<li>Maintain consistent tempo and feel across sections</li>
<li>Use dynamics and instrumentation to define sections</li>
</ul>
<h4>For Dancers:</h4>
<ul>
<li>Learn to recognize and anticipate structural changes</li>
<li>Use different sections for varied choreographic material</li>
<li>Build energy and intensity with the musical structure</li>
<li>Use phrase structure to organize movement patterns</li>
</ul>
</section>
 Assessment focus 
<section>
<h3>Assessment Focus</h3>
<p>When analyzing structure in dance music, consider:</p>
<ul>
<li>What is the overall form of the piece (AABA, verse-chorus, etc.)?</li>
<li>How are different sections distinguished from each other?</li>
<li>What is the typical phrase length and how does it support dancing?</li>
<li>How does the structure build energy and create climax?</li>
<li>Are there any special structural features unique to the genre?</li>
<li>How do transitions between sections work musically?</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default Dance0110StructureFormPage;
