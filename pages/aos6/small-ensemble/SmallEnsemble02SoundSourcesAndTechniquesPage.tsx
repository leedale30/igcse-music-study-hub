import React from 'react';
import { Link } from 'react-router-dom';

const SmallEnsemble02SoundSourcesAndTechniquesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/small-ensemble" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Small Ensemble</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Sound Sources And Techniques</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Sound Sources And Techniques
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 6 • Music for Small Ensemble
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
<p>The diverse musical cultures studied in Area of Study 6 utilize acoustic instruments and performance techniques that contrast sharply with Western traditions, prioritizing ornamentation, modal integrity, and rhythmic complexity. These three distinct ensemble traditions—Silk and Bamboo from China, Hindustani Classical from India, and Arab Takht from the Middle East—each represent centuries of refined musical practice, with instruments specifically designed to serve their unique aesthetic and technical requirements.</p>
<p>Understanding the sound sources and techniques of these ensembles reveals how different cultures have developed sophisticated approaches to melody, rhythm, and improvisation. From the microtonal capabilities of the qanun to the drone-based textures of Hindustani music, these traditions demonstrate alternative approaches to musical organization that expand our understanding of what music can be and do.</p>
</section>
<section id="key-characteristics">
<h2>Key Characteristics of Small Ensemble Sound Sources</h2>
<div className="characteristics-grid">
<div className="characteristic">
<h3>Acoustic Instruments</h3>
<p>All three traditions rely exclusively on acoustic instruments, each with specific construction techniques that enable unique timbres and microtonal flexibility essential for their modal systems.</p>
</div>
<div className="characteristic">
<h3>Modal Systems</h3>
<p>Instruments are designed to serve sophisticated modal systems (raga, maqam, and Chinese modes) that require precise intonation and expressive flexibility beyond Western equal temperament.</p>
</div>
<div className="characteristic">
<h3>Oral Tradition</h3>
<p>Music transmission occurs through oral/aural methods, with instruments and techniques passed down through family lines or master-disciple relationships.</p>
</div>
<div className="characteristic">
<h3>Improvisation Focus</h3>
<p>Instruments and techniques are specifically designed to facilitate improvisation within structured frameworks, allowing for spontaneous creativity within traditional forms.</p>
</div>
</div>
</section>
<section id="study-sections">
<h2>Detailed Study Sections</h2>
<div className="study-grid">
<a className="study-card" href="aos06-02-sound-sources-and-techniques/aos06-02-01-instrumentation.html">
<h3>6.1 Instrumentation</h3>
<p>Explore the specific instruments used in Silk and Bamboo, Hindustani, and Arab Takht ensembles, including their roles and regional variations.</p>
<ul>
<li>Silk and Bamboo instruments (erhu, pipa, dizi)</li>
<li>Hindustani ensemble structure (sitar, tabla, tambura)</li>
<li>Arab Takht formation (ud, qanun, nay, riqq)</li>
<li>Functional roles within ensembles</li>
</ul>
</a>
<a className="study-card" href="aos06-02-sound-sources-and-techniques/aos06-02-02-organology.html">
<h3>6.2 Organology</h3>
<p>Study the classification, construction, and historical development of traditional instruments and their unique capabilities.</p>
<ul>
<li>Construction techniques and materials</li>
<li>Microtonal capabilities and design</li>
<li>Historical development and cultural significance</li>
<li>Acoustic properties and sound production</li>
</ul>
</a>
<a className="study-card" href="aos06-02-sound-sources-and-techniques/aos06-02-03-vocal-techniques.html">
<h3>6.3 Vocal Techniques</h3>
<p>Examine vocal approaches in traditional ensemble music, including improvisation and modal expression.</p>
<ul>
<li>Melismatic and syllabic techniques</li>
<li>Arabic layali improvisation</li>
<li>Rhythmic mnemonics and vocal percussion</li>
<li>Modal expression through voice</li>
</ul>
</a>
<a className="study-card" href="aos06-02-sound-sources-and-techniques/aos06-02-04-extended-techniques.html">
<h3>6.4 Extended Techniques</h3>
<p>Discover advanced performance techniques including ornamentation, pitch manipulation, and expressive devices.</p>
<ul>
<li>Pitch-bending and microtonal expression</li>
<li>Traditional ornamentation patterns</li>
<li>Bowing and plucking techniques</li>
<li>Expressive performance practices</li>
</ul>
</a>
<a className="study-card" href="aos06-02-sound-sources-and-techniques/aos06-02-05-improvisation.html">
<h3>6.5 Improvisation</h3>
<p>Understand structured improvisation systems including alap, taqsim, and rhythmic improvisation within traditional frameworks.</p>
<ul>
<li>Hindustani alap-jor-jhala structure</li>
<li>Arab taqsim and layali</li>
<li>Rhythmic improvisation in tabla</li>
<li>Modal exploration and development</li>
</ul>
</a>
<a className="study-card" href="aos06-02-sound-sources-and-techniques/aos06-02-06-composition-techniques.html">
<h3>6.6 Composition Techniques</h3>
<p>Learn traditional composition methods including modal systems, structural progression, and thematic elaboration.</p>
<ul>
<li>Modal composition principles</li>
<li>Structural forms and progressions</li>
<li>Thematic elaboration techniques</li>
<li>Layered texture creation</li>
</ul>
</a>
</div>
</section>
<section id="focus-works">
<h2>Focus Work Context</h2>
<div className="focus-works-grid">
<div className="focus-work">
<h3>Silk and Bamboo Ensembles</h3>
<p>Chinese sizhu tradition featuring the interplay between silk (string) and bamboo (wind) instruments, emphasizing refined chamber music aesthetics and subtle ornamentation.</p>
</div>
<div className="focus-work">
<h3>Hindustani Classical Music</h3>
<p>North Indian classical tradition built on raga (melodic framework) and tala (rhythmic cycle), featuring extensive improvisation and drone-based textures.</p>
</div>
<div className="focus-work">
<h3>Arab Takht Ensembles</h3>
<p>Traditional Middle Eastern chamber ensemble based on maqam (modal system), featuring sophisticated melodic improvisation and rhythmic modes.</p>
</div>
</div>
</section>
<section id="historical-context">
<h2>Historical and Cultural Context</h2>
<div className="context-timeline">
<div className="context-period">
<h3>Ancient Foundations</h3>
<p>These musical traditions trace their roots back centuries, with theoretical frameworks and instrumental designs refined over generations through oral transmission and master-disciple relationships.</p>
</div>
<div className="context-period">
<h3>Classical Development</h3>
<p>Each tradition developed sophisticated theoretical systems for organizing pitch, rhythm, and form, creating frameworks that balance structure with improvisational freedom.</p>
</div>
<div className="context-period">
<h3>Modern Preservation</h3>
<p>Contemporary efforts focus on preserving traditional practices while adapting to modern contexts, including notation systems and educational institutions.</p>
</div>
</div>
</section>
<section id="assessment-focus">
<h2>Assessment Focus Points</h2>
<div className="assessment-grid">
<div className="assessment-area">
<h3>Instrumental Knowledge</h3>
<ul>
<li>Identify instruments by sight and sound</li>
<li>Understand construction and playing techniques</li>
<li>Recognize ensemble roles and functions</li>
<li>Appreciate cultural significance</li>
</ul>
</div>
<div className="assessment-area">
<h3>Performance Techniques</h3>
<ul>
<li>Recognize ornamentation and expressive devices</li>
<li>Understand improvisation structures</li>
<li>Identify modal characteristics</li>
<li>Appreciate rhythmic complexity</li>
</ul>
</div>
<div className="assessment-area">
<h3>Cultural Understanding</h3>
<ul>
<li>Understand transmission methods</li>
<li>Recognize cultural contexts</li>
<li>Appreciate aesthetic values</li>
<li>Compare different traditions</li>
</ul>
</div>
<div className="assessment-area">
<h3>Musical Analysis</h3>
<ul>
<li>Analyze modal structures</li>
<li>Identify improvisation sections</li>
<li>Understand formal organization</li>
<li>Recognize stylistic features</li>
</ul>
</div>
</div>
</section>
<section id="navigation-footer">
<h2>Explore Each Section</h2>
<div className="nav-grid">
<a className="nav-card" href="aos06-02-sound-sources-and-techniques/aos06-02-01-instrumentation.html">
<h3>Start with Instrumentation →</h3>
<p>Begin your study with the instruments of small ensembles</p>
</a>
<a className="nav-card" href="../aos06-01-core-musical-elements.html">
<h3>← Core Musical Elements</h3>
<p>Review the fundamental musical elements</p>
</a>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default SmallEnsemble02SoundSourcesAndTechniquesPage;
