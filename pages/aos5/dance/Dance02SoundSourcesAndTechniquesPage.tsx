import React from 'react';
import { Link } from 'react-router-dom';

const Dance02SoundSourcesAndTechniquesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Sound Sources And Techniques</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Sound Sources And Techniques
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
        <div dangerouslySetInnerHTML={{ __html: `<section id="introduction">
<h2>Introduction</h2>
<p>Music for Dance represents a diverse and vibrant area of study that encompasses traditional Latin American genres alongside contemporary electronic music. This area requires students to move beyond traditional Western orchestral classification to recognize specific Latin American folk instruments and understand the central role of music production technology in creating contemporary dance music. The sound palette ranges from the intimate acoustic timbres of Tango ensembles to the synthetic textures of Electronic Dance Music (EDM), each with its own distinctive instrumentation, techniques, and cultural significance.</p>
<p>Understanding the sound sources and techniques in Music for Dance involves appreciating how different musical traditions have developed unique approaches to rhythm, melody, and texture. From the passionate expressiveness of the bandoneon in Tango to the rhythmic complexity of Salsa percussion and the technological innovation of EDM production, each genre contributes to a rich tapestry of musical expression designed to move both body and spirit.</p>
</section>
<section id="key-characteristics">
<h2>Key Characteristics of Music for Dance Sound Sources</h2>
<h3>Rhythmic Foundation</h3>
<p>All dance music genres share a fundamental emphasis on rhythm as the driving force. Whether it's the complex polyrhythms of Salsa, the passionate syncopations of Tango, or the steady four-on-the-floor pulse of EDM, rhythm serves as the primary organizing principle that connects music to movement.</p>
<h3>Cultural Authenticity</h3>
<p>Each dance genre maintains strong connections to its cultural origins. Tango reflects the melancholic passion of Buenos Aires, Salsa embodies the vibrant energy of Caribbean and Latin American communities, while EDM represents the global electronic music culture that emerged from club and rave scenes.</p>
<h3>Technological Integration</h3>
<p>Modern dance music demonstrates varying degrees of technological integration, from the purely acoustic traditions of early Tango to the completely electronic realm of EDM, with Salsa often incorporating both acoustic and amplified elements in contemporary performances.</p>
<h3>Expressive Techniques</h3>
<p>Each genre has developed specific techniques for emotional expression: Tango uses slides and dynamic contrasts, Salsa employs complex rhythmic layering and call-and-response patterns, while EDM utilizes filtering, effects processing, and dynamic builds and drops.</p>
</section>
<section id="detailed-study-sections">
<h2>Detailed Study Sections</h2>
<p>Explore each aspect of sound sources and techniques in Music for Dance through these comprehensive sections:</p>
<div className="study-grid">
<div className="study-card">
<h3><a href="aos05-02-sound-sources-and-techniques/aos05-02-01-instrumentation.html">5.1 Instrumentation</a></h3>
<p>Study the specific instruments used in Tango (bandoneon, strings, piano), Salsa (clavés, bongos, timbales, cuatro), and EDM (synthesizers, drum machines, pop/rock instruments). Learn about regional variations and ensemble configurations.</p>
<ul>
<li>Tango orquesta típica instrumentation</li>
<li>Salsa percussion and melodic instruments</li>
<li>EDM electronic and amplified sources</li>
<li>Regional and stylistic variations</li>
</ul>
</div>
<div className="study-card">
<h3><a href="aos05-02-sound-sources-and-techniques/aos05-02-02-organology.html">5.2 Organology</a></h3>
<p>Understand the classification and historical development of dance music instruments, from traditional acoustic instruments to modern electronic devices. Focus on how technology has transformed instrument design and sound production.</p>
<ul>
<li>Traditional instrument classification</li>
<li>Electronic instrument development</li>
<li>Synthesizer technology and function</li>
<li>Drum machine evolution</li>
</ul>
</div>
<div className="study-card">
<h3><a href="aos05-02-sound-sources-and-techniques/aos05-02-03-vocal-techniques.html">5.3 Vocal Techniques</a></h3>
<p>Explore vocal approaches in dance music, including traditional singing styles in Tango and Salsa, contemporary techniques like rap, and the use of vocal samples in EDM. Study text setting and vocal expression.</p>
<ul>
<li>Melismatic and syllabic text setting</li>
<li>Traditional Latin American vocal styles</li>
<li>Contemporary rap and spoken delivery</li>
<li>Vocal sampling and processing</li>
</ul>
</div>
<div className="study-card">
<h3><a href="aos05-02-sound-sources-and-techniques/aos05-02-04-extended-techniques.html">5.4 Extended Techniques</a></h3>
<p>Study unconventional methods of sound production, including acoustic techniques (arco, pizzicato, glissando, tremolo) and electronic manipulation (filtering, effects processing, pitch-bending).</p>
<ul>
<li>String techniques in Tango</li>
<li>Percussion techniques in Salsa</li>
<li>Electronic sound manipulation</li>
<li>Audio effects and processing</li>
</ul>
</div>
<div className="study-card">
<h3><a href="aos05-02-sound-sources-and-techniques/aos05-02-05-improvisation.html">5.5 Improvisation</a></h3>
<p>Understand spontaneous creation in dance music contexts, from instrumental solos in Tango and Salsa to live EDM performance and DJ techniques. Study the role of improvisation in maintaining musical vitality.</p>
<ul>
<li>Tango and Salsa instrumental solos</li>
<li>Montuno patterns and cadenzas</li>
<li>Live EDM performance techniques</li>
<li>DJ mixing and manipulation</li>
</ul>
</div>
<div className="study-card">
<h3><a href="aos05-02-sound-sources-and-techniques/aos05-02-06-composition-techniques.html">5.6 Composition Techniques</a></h3>
<p>Explore methods used to create dance music, including traditional compositional approaches and modern production techniques. Study rhythmic patterns, structural devices, and technological composition methods.</p>
<ul>
<li>Clave rhythms and ostinato patterns</li>
<li>EDM structural devices (build-up, drop, breakdown)</li>
<li>Multi-tracking and layering techniques</li>
<li>Sampling and loop-based composition</li>
</ul>
</div>
</div>
</section>
<section id="focus-works">
<h2>Focus Work Context</h2>
<p>The study of sound sources and techniques in Music for Dance is enhanced through analysis of representative works from each genre:</p>
<h3>Tango</h3>
<p>Traditional and modern Tango compositions demonstrate the evolution of instrumentation and technique, from early acoustic ensembles to contemporary arrangements that may incorporate electronic elements while maintaining the genre's essential character.</p>
<h3>Salsa</h3>
<p>Salsa recordings showcase the complex layering of percussion instruments, the interplay between rhythm section and melodic instruments, and the integration of vocal and instrumental elements in creating the genre's distinctive energy.</p>
<h3>Electronic Dance Music (EDM)</h3>
<p>EDM tracks illustrate the creative possibilities of electronic sound sources, demonstrating how producers use synthesizers, samples, and effects to create immersive sonic experiences designed for dance floor environments.</p>
</section>
<section id="historical-cultural-context">
<h2>Historical and Cultural Context</h2>
<h3>Latin American Traditions (Late 19th - 20th Century)</h3>
<p>The development of Tango in Argentina and Uruguay, and Salsa in Caribbean and Latin American communities, reflects the cultural fusion of European, African, and indigenous musical elements. These genres maintain strong connections to their social and cultural origins while adapting to contemporary contexts.</p>
<h3>Electronic Music Revolution (1970s - Present)</h3>
<p>The emergence of electronic dance music represents a fundamental shift in how music is created, performed, and experienced. From early synthesizer experiments to modern digital production, EDM has continuously pushed the boundaries of sound creation and manipulation.</p>
<h3>Globalization and Fusion (1990s - Present)</h3>
<p>Contemporary dance music increasingly incorporates elements from multiple traditions, creating fusion genres that blend acoustic and electronic elements, traditional and modern techniques, and local and global influences.</p>
</section>
<section id="assessment-focus">
<h2>Assessment Focus Points</h2>
<h3>Students should be able to:</h3>
<ul>
<li>Identify characteristic instruments of Tango, Salsa, and EDM</li>
<li>Understand the role of technology in modern dance music production</li>
<li>Recognize specific playing techniques and their expressive functions</li>
<li>Analyze how rhythm serves as the foundation for dance music</li>
<li>Evaluate the cultural significance of different dance music traditions</li>
<li>Compare acoustic and electronic approaches to sound creation</li>
<li>Understand the evolution of dance music instrumentation and techniques</li>
<li>Recognize the impact of globalization on contemporary dance music</li>
<li>Analyze how technology has expanded creative possibilities in music</li>
<li>Appreciate the relationship between music and movement in dance genres</li>
</ul>
</section>
<section id="navigation-footer">
<h2>Begin Your Detailed Study</h2>
<div className="nav-grid">
<a className="nav-card" href="aos05-02-sound-sources-and-techniques/aos05-02-01-instrumentation.html">
<h3>Start with: 5.1 Instrumentation →</h3>
<p>Begin your study with the specific instruments used in dance music</p>
</a>
<a className="nav-card" href="../aos05-01-core-musical-elements.html">
<h3>← Core Musical Elements</h3>
<p>Review the fundamental musical elements in dance music</p>
</a>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default Dance02SoundSourcesAndTechniquesPage;
