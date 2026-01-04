import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen02SoundSourcesAndTechniquesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Sound Sources And Techniques</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Sound Sources And Techniques
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 7 • Music for Stage and Screen
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
        <div dangerouslySetInnerHTML={{ __html: `<section id="introduction">
<h2>Introduction</h2>
<p>Music for Stage and Screen represents one of the most dynamic and technologically advanced areas of musical composition and performance. This field encompasses Ballet Music, Film Music, and Computer Game Music, each requiring sophisticated understanding of how sound sources and techniques can enhance dramatic narrative, create atmosphere, increase tension, and highlight specific moments of visual action. The deliberate choices composers make regarding instrumentation and techniques are fundamental to the success of multimedia musical experiences.</p>
<p>Unlike traditional concert music, stage and screen music must serve multiple masters: the visual narrative, the emotional journey of the audience, the technical requirements of synchronization, and the artistic vision of directors and choreographers. This creates unique challenges and opportunities for composers, who must master both traditional orchestral writing and cutting-edge technology to create effective multimedia musical experiences.</p>
</section>
<section id="key-characteristics">
<h2>Key Characteristics of Stage and Screen Sound Sources</h2>
<div className="characteristics-grid">
<div className="characteristic">
<h3>Dramatic Scope</h3>
<p>Extended symphony orchestras with modern electronic capabilities, carefully selected to match on-screen action and narrative requirements.</p>
</div>
<div className="characteristic">
<h3>Technological Integration</h3>
<p>Sophisticated use of synthesizers, digital audio workstations, and production technology for precise synchronization and atmospheric effects.</p>
</div>
<div className="characteristic">
<h3>Narrative Function</h3>
<p>Every musical choice serves the story, with instruments and techniques selected to support character development, plot advancement, and emotional impact.</p>
</div>
<div className="characteristic">
<h3>Flexible Orchestration</h3>
<p>Ability to add or subtract instruments as needed, from intimate chamber scoring to massive orchestral forces for blockbuster soundtracks.</p>
</div>
</div>
</section>
<section id="study-sections">
<h2>Detailed Study Sections</h2>
<div className="study-grid">
<div className="study-card">
<h3><a href="aos07-02-sound-sources-and-techniques/aos07-02-01-instrumentation.html">7.2.1 Instrumentation</a></h3>
<p>Extended symphony orchestras, modern electronic instruments, and vocal components specifically chosen for dramatic impact and narrative support.</p>
<ul>
<li>Extended Symphony Orchestra</li>
<li>Modern and Electronic Instruments</li>
<li>Vocal Components</li>
<li>Pop/Rock Integration</li>
</ul>
</div>
<div className="study-card">
<h3><a href="aos07-02-sound-sources-and-techniques/aos07-02-02-organology.html">7.2.2 Organology</a></h3>
<p>Classification and technological development of instruments, focusing on how function and capabilities achieve dramatic goals.</p>
<ul>
<li>Technological Integration</li>
<li>Timbral Selection</li>
<li>Historical Context</li>
<li>Digital Audio Workstations</li>
</ul>
</div>
<div className="study-card">
<h3><a href="aos07-02-sound-sources-and-techniques/aos07-02-03-vocal-techniques.html">7.2.3 Vocal Techniques</a></h3>
<p>Vocal approaches chosen to maximize narrative and emotional clarity in musicals, film songs, and dramatic contexts.</p>
<ul>
<li>Word-Setting Techniques</li>
<li>Delivery Styles</li>
<li>Expression Techniques</li>
<li>Dramatic Vocal Effects</li>
</ul>
</div>
<div className="study-card">
<h3><a href="aos07-02-sound-sources-and-techniques/aos07-02-04-extended-techniques.html">7.2.4 Extended Techniques</a></h3>
<p>Unconventional methods of sound production, including specialized instrumental effects and music production technology.</p>
<ul>
<li>Instrumental Effects</li>
<li>Music Production Technology</li>
<li>Atmospheric Effects</li>
<li>Synchronization Techniques</li>
</ul>
</div>
<div className="study-card">
<h3><a href="aos07-02-sound-sources-and-techniques/aos07-02-05-improvisation.html">7.2.5 Improvisation</a></h3>
<p>Spontaneous creation within highly prescribed scores, including rubato, cadenza, and live performance elements.</p>
<ul>
<li>Rubato and Flexible Tempo</li>
<li>Cadenza and Virtuosic Solos</li>
<li>Live Performance Improvisation</li>
<li>Jazz-Influenced Elements</li>
</ul>
</div>
<div className="study-card">
<h3><a href="aos07-02-sound-sources-and-techniques/aos07-02-06-composition-techniques.html">7.2.6 Composition Techniques</a></h3>
<p>Methods oriented toward narrative support, maximizing dramatic impact, and creating unity through sophisticated compositional approaches.</p>
<ul>
<li>Thematic Devices and Leitmotifs</li>
<li>Rhythmic Techniques</li>
<li>Structural Devices</li>
<li>Harmonic and Atonal Techniques</li>
</ul>
</div>
</div>
</section>
<section id="focus-works-context">
<h2>Focus Work Context</h2>
<div className="context-grid">
<div className="context-item">
<h3>Ballet Music</h3>
<p>Traditional orchestral scoring with emphasis on dance rhythms, dramatic narrative support, and choreographic coordination. Often utilizes structural forms like rondo to support dance sequences.</p>
</div>
<div className="context-item">
<h3>Film Music</h3>
<p>Sophisticated orchestral and electronic scoring designed for precise synchronization with visual action, character development through leitmotifs, and atmospheric enhancement of cinematic narrative.</p>
</div>
<div className="context-item">
<h3>Computer Game Music</h3>
<p>Interactive and adaptive scoring combining orchestral and electronic elements, utilizing loops, ostinatos, and EDM techniques like breakdown, build-up, and drop for dynamic gameplay enhancement.</p>
</div>
</div>
</section>
<section id="historical-cultural-context">
<h2>Historical and Cultural Context</h2>
<p>Music for Stage and Screen has evolved dramatically from the early days of silent film accompaniment and classical ballet to today's sophisticated multimedia experiences. The development of recording technology, synthesizers, and digital audio workstations has revolutionized the field, allowing composers to create increasingly complex and nuanced soundscapes.</p>
<p>The tradition of ballet music, established by composers like Tchaikovsky and Stravinsky, provided the foundation for understanding how music can support and enhance visual narrative. Film music pioneers like Max Steiner and Bernard Herrmann developed the language of cinematic scoring, including the use of leitmotifs and synchronized musical effects. Contemporary composers continue to push boundaries, incorporating world music elements, electronic manipulation, and interactive technologies.</p>
<p>Computer game music represents the newest frontier, requiring composers to create adaptive scores that respond to player actions while maintaining musical coherence and dramatic effectiveness. This has led to innovative approaches to musical structure and the development of new compositional techniques specifically designed for interactive media.</p>
</section>
<section id="assessment-focus">
<h2>Assessment Focus Points</h2>
<h3>Students should be able to:</h3>
<ul>
<li>Identify and analyze the use of extended symphony orchestras in dramatic contexts</li>
<li>Understand the integration of electronic and traditional instruments in multimedia scoring</li>
<li>Recognize how vocal techniques serve narrative and emotional clarity</li>
<li>Analyze the use of extended techniques and production technology for atmospheric effects</li>
<li>Understand the role of improvisation and flexible interpretation in performance</li>
<li>Recognize and analyze leitmotifs and their dramatic function</li>
<li>Understand how compositional techniques support visual narrative</li>
<li>Analyze the relationship between musical structure and dramatic pacing</li>
<li>Recognize the use of technology for synchronization and special effects</li>
<li>Understand the evolution of stage and screen music from historical to contemporary practices</li>
</ul>
</section>
<section id="navigation-footer">
<h2>Explore Each Section</h2>
<div className="nav-grid">
<a className="nav-card" href="aos07-02-sound-sources-and-techniques/aos07-02-01-instrumentation.html">
<h3>7.2.1 Instrumentation →</h3>
<p>Begin with extended orchestral and electronic instrumentation</p>
</a>
<a className="nav-card" href="../aos07-01-core-musical-elements.html">
<h3>← 7.1 Core Musical Elements</h3>
<p>Review fundamental musical elements</p>
</a>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default StageScreen02SoundSourcesAndTechniquesPage;
