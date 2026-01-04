import React from 'react';
import { Link } from 'react-router-dom';

const Classical02SoundSourcesAndTechniquesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Sound Sources And Techniques</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Sound Sources And Techniques
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
        <div dangerouslySetInnerHTML={{ __html: `<section id="introduction">
<h2>Introduction</h2>
<p>The Classical era is defined by its pursuit of clarity, balance, and structural coherence. This philosophical shift dramatically impacted the assembly, utilization, and techniques applied to musical instruments, creating a sound world significantly distinct from the Baroque era.</p>
<p>This comprehensive analysis examines how Classical composers expanded the sonic possibilities of the orchestra and employed technical skill for refined musical expression, focusing on the standardization and measured growth of orchestral forces and the elevation of intimate chamber ensembles.</p>
</section>
<section id="overview">
<h2>Overview of Sound Sources and Techniques</h2>
<p>The Classical period witnessed significant developments in:</p>
<ul>
<li><strong>Orchestral expansion:</strong> Increased size and independence of wind and brass sections</li>
<li><strong>Chamber music elevation:</strong> Intimate ensembles with one performer per part</li>
<li><strong>Keyboard transition:</strong> From harpsichord to fortepiano for dynamic expression</li>
<li><strong>Articulation precision:</strong> Highly controlled performance techniques</li>
<li><strong>Structural clarity:</strong> Compositional techniques emphasizing form and balance</li>
<li><strong>Ornamental refinement:</strong> Sophisticated melodic decoration</li>
</ul>
</section>
<section id="navigation">
<h2>Detailed Study Sections</h2>
<div className="section-grid">
<div className="section-card">
<h3><a href="aos02-02-sound-sources-and-techniques/aos02-02-01-instrumentation.html">2.1 Instrumentation</a></h3>
<p>Explore the specific instruments and vocal types used in Classical music, including orchestral composition, chamber ensembles, and the unique instrumentation of Mozart's K. 452.</p>
</div>
<div className="section-card">
<h3><a href="aos02-02-sound-sources-and-techniques/aos02-02-02-organology.html">2.2 Organology</a></h3>
<p>Understand the classification and development of Classical instruments, focusing on the keyboard transition and the evolution of orchestral function.</p>
</div>
<div className="section-card">
<h3><a href="aos02-02-sound-sources-and-techniques/aos02-02-03-vocal-techniques.html">2.3 Vocal Techniques</a></h3>
<p>Study vocal techniques in Classical music, including recitative and aria forms, melismatic expression, and vibrato usage.</p>
</div>
<div className="section-card">
<h3><a href="aos02-02-sound-sources-and-techniques/aos02-02-04-extended-techniques.html">2.4 Extended Techniques</a></h3>
<p>Examine instrumental techniques and articulation methods, including ornamentation, string techniques, and precise articulation markings.</p>
</div>
<div className="section-card">
<h3><a href="aos02-02-sound-sources-and-techniques/aos02-02-05-improvisation.html">2.5 Improvisation</a></h3>
<p>Discover the role of improvisation in Classical music, particularly the cadenza as a formalized outlet for spontaneous creation.</p>
</div>
<div className="section-card">
<h3><a href="aos02-02-sound-sources-and-techniques/aos02-02-06-composition-techniques.html">2.6 Composition Techniques</a></h3>
<p>Analyze the compositional methods of the Classical era, including sonata form, thematic devices, and structural forms.</p>
</div>
</div>
</section>
<section id="key-characteristics">
<h2>Key Characteristics of Classical Sound Sources</h2>
<div className="characteristics-grid">
<div className="characteristic">
<h3>Orchestral Balance</h3>
<p>The Classical orchestra achieved a new level of balance between string, wind, and brass sections, with each section gaining independence and expressive capability.</p>
</div>
<div className="characteristic">
<h3>Dynamic Expression</h3>
<p>The transition from harpsichord to fortepiano enabled composers to write precise dynamic markings, creating the characteristic crescendo and diminuendo passages of the era.</p>
</div>
<div className="characteristic">
<h3>Chamber Intimacy</h3>
<p>Chamber music ensembles with one performer per part created intimate musical conversations, exemplified by the string quartet and piano trio.</p>
</div>
<div className="characteristic">
<h3>Structural Clarity</h3>
<p>Compositional techniques prioritized clear, predictable, and structurally robust forms, with sonata form becoming the paramount structure of the era.</p>
</div>
</div>
</section>
<section id="focus-work">
<h2>Focus Work: Mozart K. 452</h2>
<p>Mozart's <em>Quintet for piano and winds in E flat major</em> (K. 452) exemplifies the Classical approach to sound sources and techniques:</p>
<ul>
<li><strong>Unique Instrumentation:</strong> Piano, oboe, clarinet, horn, and bassoon</li>
<li><strong>Equal Partnership:</strong> Piano acts as an equal partner to the winds rather than accompanist</li>
<li><strong>Wind Independence:</strong> Demonstrates the expressive capabilities of wind instruments</li>
<li><strong>Chamber Texture:</strong> One performer per part creating intimate musical dialogue</li>
<li><strong>Classical Balance:</strong> Perfect equilibrium between keyboard and wind timbres</li>
</ul>
</section>
<section id="assessment-focus">
<h2>Assessment Focus Points</h2>
<h3>Students should be able to:</h3>
<ul>
<li>Identify and describe Classical orchestral instrumentation and its expansion from the Baroque era</li>
<li>Explain the significance of the harpsichord to fortepiano transition</li>
<li>Recognize chamber music ensembles and their characteristic textures</li>
<li>Understand transposing instruments and their notation</li>
<li>Identify Classical vocal techniques in opera and oratorio</li>
<li>Recognize ornamental techniques and their expressive functions</li>
<li>Understand the role of the cadenza in Classical concertos</li>
<li>Analyze sonata form and other Classical structural techniques</li>
<li>Identify thematic devices used in Classical composition</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default Classical02SoundSourcesAndTechniquesPage;
