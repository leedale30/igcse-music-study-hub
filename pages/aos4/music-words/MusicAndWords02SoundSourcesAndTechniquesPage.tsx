import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords02SoundSourcesAndTechniquesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Sound Sources And Techniques</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Sound Sources And Techniques
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 4 • Music and Words
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
<p>Area of Study 4: Music and Words encompasses the rich diversity of vocal music from the early twentieth century to the present day. This area is defined by the deliberate choices composers make regarding performers, instruments, and production methods to enhance the emotional and narrative meaning of lyrical text. The relationship between music and words becomes paramount, with composers using sophisticated techniques to illuminate textual meaning and create powerful emotional connections with audiences.</p>
<p>The sound sources and techniques in this area span an extraordinary range, from intimate acoustic pairings in art song to complex electronic and amplified ensembles in popular music and contemporary musicals. Understanding these diverse approaches is essential for appreciating how modern composers and songwriters craft their musical messages.</p>
</section>
<section id="key-characteristics">
<h2>Key Characteristics of Music and Words Sound Sources</h2>
<div className="characteristics-grid">
<div className="characteristic">
<h3>Diverse Vocal Genres</h3>
<ul>
<li><strong>Art Song:</strong> Sophisticated classical vocal music with piano accompaniment</li>
<li><strong>Choral Music:</strong> Complex multi-part vocal arrangements</li>
<li><strong>Popular Song:</strong> Commercial music with broad appeal</li>
<li><strong>Musicals:</strong> Theatrical vocal music serving dramatic narrative</li>
</ul>
</div>
<div className="characteristic">
<h3>Technology Integration</h3>
<ul>
<li><strong>Electronic instruments:</strong> Synthesizers, drum machines, samplers</li>
<li><strong>Production techniques:</strong> Multi-tracking, overdubbing, effects processing</li>
<li><strong>Amplification:</strong> Electric guitars, bass, and vocal enhancement</li>
<li><strong>Digital manipulation:</strong> Auto-tune, pitch correction, time-stretching</li>
</ul>
</div>
<div className="characteristic">
<h3>Text-Music Relationship</h3>
<ul>
<li><strong>Word-painting:</strong> Musical illustration of textual meaning</li>
<li><strong>Syllabic vs. melismatic:</strong> Different approaches to text setting</li>
<li><strong>Rhythmic speech:</strong> Rap and spoken-word techniques</li>
<li><strong>Emotional expression:</strong> Music serving textual emotion</li>
</ul>
</div>
<div className="characteristic">
<h3>Contemporary Techniques</h3>
<ul>
<li><strong>Extended vocal techniques:</strong> Non-traditional vocal sounds</li>
<li><strong>Aleatoric elements:</strong> Controlled chance in performance</li>
<li><strong>Cross-genre fusion:</strong> Blending classical and popular elements</li>
<li><strong>Global influences:</strong> World music integration</li>
</ul>
</div>
</div>
</section>
<section id="detailed-study">
<h2>Detailed Study Sections</h2>
<p>Explore each aspect of sound sources and techniques in Music and Words through these comprehensive sections:</p>
<div className="study-sections">
<div className="section-card">
<h3><a href="aos04-02-sound-sources-and-techniques/aos04-02-01-instrumentation.html">4.1 Instrumentation</a></h3>
<p>Examine the diverse range of instruments and vocal types used in Music and Words, from traditional acoustic instruments to modern electronic sources. Understand how instrumentation choices serve textual and emotional purposes across different genres.</p>
<ul>
<li>Vocal classifications and choral arrangements</li>
<li>Acoustic vs. electronic instrumentation</li>
<li>Pop and rock instrument combinations</li>
<li>Regional and stylistic variations</li>
</ul>
</div>
<div className="section-card">
<h3><a href="aos04-02-sound-sources-and-techniques/aos04-02-02-organology.html">4.2 Organology</a></h3>
<p>Study the classification, construction, and development of instruments used in contemporary vocal music. Explore how technology has revolutionized sound production and manipulation in modern music.</p>
<ul>
<li>Traditional acoustic instruments</li>
<li>Electronic sound generation</li>
<li>Music technology and production tools</li>
<li>Acoustic vs. electric distinctions</li>
</ul>
</div>
<div className="section-card">
<h3><a href="aos04-02-sound-sources-and-techniques/aos04-02-03-vocal-techniques.html">4.3 Vocal Techniques</a></h3>
<p>Analyze the various vocal techniques used to enhance textual expression, from traditional classical approaches to contemporary popular styles. Understand how different text-setting methods affect musical meaning.</p>
<ul>
<li>Syllabic and melismatic text setting</li>
<li>Rap and rhythmic speech</li>
<li>Vibrato and expressive techniques</li>
<li>Genre-specific vocal styles</li>
</ul>
</div>
<div className="section-card">
<h3><a href="aos04-02-sound-sources-and-techniques/aos04-02-04-extended-techniques.html">4.4 Extended Techniques</a></h3>
<p>Explore advanced instrumental and production techniques that expand the sonic palette of contemporary vocal music. Understand how technology enables new forms of musical expression.</p>
<ul>
<li>Instrumental extended techniques</li>
<li>Studio production methods</li>
<li>Audio effects and processing</li>
<li>Multi-tracking and layering</li>
</ul>
</div>
<div className="section-card">
<h3><a href="aos04-02-sound-sources-and-techniques/aos04-02-05-improvisation.html">4.5 Improvisation</a></h3>
<p>Examine the role of improvisation in contemporary vocal music, from jazz-influenced vocal techniques to instrumental solos in popular music. Understand how spontaneous creation enhances musical expression.</p>
<ul>
<li>Vocal improvisation techniques</li>
<li>Instrumental solos and breaks</li>
<li>Jazz and folk influences</li>
<li>Expressive freedom in performance</li>
</ul>
</div>
<div className="section-card">
<h3><a href="aos04-02-sound-sources-and-techniques/aos04-02-06-composition-techniques.html">4.6 Composition Techniques</a></h3>
<p>Study the compositional methods used to create effective relationships between music and words. Explore how contemporary composers use both traditional and innovative techniques to serve textual meaning.</p>
<ul>
<li>Word-painting and textual illustration</li>
<li>Contrapuntal and layered techniques</li>
<li>Aleatoric and chance elements</li>
<li>Contemporary compositional approaches</li>
</ul>
</div>
</div>
</section>
<section id="focus-work">
<h2>Focus Work Context</h2>
<p>The techniques studied in this area can be observed and analyzed in various focus works that represent different aspects of Music and Words:</p>
<div className="focus-works">
<div className="focus-work">
<h3>Art Song Examples</h3>
<p>Classical art songs demonstrate sophisticated relationships between piano accompaniment and vocal line, with careful attention to textual meaning and emotional expression.</p>
</div>
<div className="focus-work">
<h3>Choral Works</h3>
<p>Contemporary choral compositions showcase complex vocal arrangements, innovative text setting, and the integration of traditional and modern compositional techniques.</p>
</div>
<div className="focus-work">
<h3>Popular Songs</h3>
<p>Commercial popular music demonstrates the use of technology, production techniques, and accessible musical language to create broad emotional appeal.</p>
</div>
<div className="focus-work">
<h3>Musical Theatre</h3>
<p>Songs from musicals illustrate how vocal music serves dramatic narrative, character development, and theatrical storytelling.</p>
</div>
</div>
</section>
<section id="historical-context">
<h2>Historical and Cultural Context</h2>
<p>Music and Words as an area of study reflects the dramatic changes in musical culture from the early 20th century to the present day:</p>
<div className="historical-periods">
<div className="period">
<h3>Early 20th Century (1900-1950)</h3>
<ul>
<li>Development of recording technology</li>
<li>Rise of popular song and musical theatre</li>
<li>Modernist approaches to art song</li>
<li>Jazz influences on vocal music</li>
</ul>
</div>
<div className="period">
<h3>Mid-Century (1950-1980)</h3>
<ul>
<li>Rock and roll revolution</li>
<li>Electronic music development</li>
<li>Studio as instrument concept</li>
<li>Folk revival and protest songs</li>
</ul>
</div>
<div className="period">
<h3>Contemporary Era (1980-Present)</h3>
<ul>
<li>Digital technology integration</li>
<li>Global music fusion</li>
<li>Hip-hop and rap emergence</li>
<li>Internet and streaming impact</li>
</ul>
</div>
</div>
</section>
<section id="assessment-focus">
<h2>Assessment Focus Points</h2>
<h3>Students should be able to:</h3>
<ul>
<li>Identify and describe various vocal types and instrumental combinations used in different genres</li>
<li>Understand the role of technology in contemporary music production</li>
<li>Analyze different approaches to text setting and their expressive effects</li>
<li>Recognize extended techniques and production methods in recorded music</li>
<li>Understand how improvisation contributes to musical expression</li>
<li>Analyze compositional techniques that serve textual meaning</li>
<li>Compare and contrast approaches across different genres within Music and Words</li>
<li>Evaluate how sound sources and techniques serve the relationship between music and text</li>
</ul>
</section>
<section id="navigation-footer">
<h2>Begin Your Detailed Study</h2>
<div className="nav-grid">
<a className="nav-card" href="aos04-02-sound-sources-and-techniques/aos04-02-01-instrumentation.html">
<h3>Start with 4.1 Instrumentation →</h3>
<p>Begin your study with vocal types and instrumental combinations</p>
</a>
<a className="nav-card" href="../aos04-01-core-musical-elements.html">
<h3>← Core Musical Elements</h3>
<p>Review the fundamental musical elements in Music and Words</p>
</a>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords02SoundSourcesAndTechniquesPage;
