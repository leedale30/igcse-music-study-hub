import React from 'react';
import { Link } from 'react-router-dom';

const Ch01AltoandtenorclefregistersPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 01</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Alto and Tenor Clef Registers</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 01
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Basic Concepts
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Alto and Tenor Clef Registers
        </h1>
      </header>

      {/* Main Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none
        prose-headings:text-slate-800 dark:prose-headings:text-slate-100
        prose-h2:text-2xl prose-h2:font-bold prose-h2:border-b prose-h2:border-slate-200 dark:prose-h2:border-slate-700 prose-h2:pb-2 prose-h2:mb-4
        prose-h3:text-xl prose-h3:font-semibold
        prose-h4:text-lg prose-h4:font-medium
        prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
        prose-li:text-gray-700 dark:prose-li:text-gray-300
        prose-strong:text-slate-800 dark:prose-strong:text-slate-200
        prose-a:text-sky-600 dark:prose-a:text-sky-400 prose-a:hover:underline
        prose-img:rounded-lg prose-img:shadow-md prose-img:mx-auto
        prose-figure:my-6
        prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-gray-500 dark:prose-figcaption:text-gray-400
        [&_section]:mb-8 [&_section]:bg-slate-50 dark:[&_section]:bg-slate-800/50 [&_section]:rounded-lg [&_section]:p-6
        [&_table]:w-full [&_th]:bg-slate-100 dark:[&_th]:bg-slate-700 [&_th]:p-2 [&_td]:p-2 [&_td]:border [&_td]:border-slate-200 dark:[&_td]:border-slate-600
      ">
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="AltoAndTenorClefRegisters"><h2 className="heading hide-type">
<span className="type">Section</span> <span className="codenumber">1.7</span> <span className="title">Alto and Tenor Clef Registers</span>
</h2>
<div className="introduction">
<p>The alto and tenor clefs are essential for reading music written for instruments such as viola, cello, bassoon, and trombone. Understanding these clefs and their registers is crucial for score-following and transposition in orchestral and chamber music contexts.</p>
</div>
<article className="paragraphs" id="AltoClef"><h5 className="heading"><span className="title">Alto Clef (C Clef)</span></h5>
<p>The alto clef, also known as the C clef, places middle C on the middle line of the staff. This clef is primarily used for:</p>
<ul className="disc">
<li><p><strong>Viola:</strong> The primary instrument using alto clef notation</p></li>
<li><p><strong>Alto voice parts:</strong> In choral music and vocal scores</p></li>
<li><p><strong>Historical instruments:</strong> Such as the alto trombone</p></li>
</ul>
<p>The alto clef register typically spans from approximately C3 to E6, making it ideal for instruments with a middle register range.</p>
</article>
<article className="paragraphs" id="TenorClef"><h5 className="heading"><span className="title">Tenor Clef</span></h5>
<p>The tenor clef places middle C on the fourth line of the staff. This clef is commonly used for:</p>
<ul className="disc">
<li><p><strong>Cello:</strong> For higher passages to avoid excessive ledger lines</p></li>
<li><p><strong>Bassoon:</strong> For upper register passages</p></li>
<li><p><strong>Trombone:</strong> For higher melodic lines</p></li>
<li><p><strong>Tenor voice parts:</strong> In choral arrangements</p></li>
</ul>
<p>The tenor clef register typically spans from approximately A2 to C6, bridging the gap between bass and treble clef ranges.</p>
</article>
<article className="paragraphs" id="TranspositionConcepts"><h5 className="heading"><span className="title">Preliminary Transposition Concepts</span></h5>
<p>Understanding alto and tenor clefs is fundamental for transposition skills needed in advanced music study:</p>
<ul className="disc">
<li><p><strong>Score Reading:</strong> Essential for conducting and analysis of orchestral scores</p></li>
<li><p><strong>Instrument Doubling:</strong> Musicians often need to read multiple clefs</p></li>
<li><p><strong>Transposition Practice:</strong> Moving between clefs develops interval recognition</p></li>
<li><p><strong>Historical Performance:</strong> Many Baroque and Classical works require C clef reading</p></li>
</ul>
</article>
<article className="paragraphs" id="PracticalApplications"><h5 className="heading"><span className="title">Practical Applications</span></h5>
<p>Mastery of these clefs enables:</p>
<ol className="decimal">
<li><p>Reading viola parts in string quartets and orchestral works</p></li>
<li><p>Following cello parts that move into higher registers</p></li>
<li><p>Understanding bassoon notation in wind ensemble and orchestral literature</p></li>
<li><p>Developing comprehensive score-reading abilities for conductors and composers</p></li>
</ol>
<p>This foundation prepares students for advanced harmonic analysis and transposition work required in upper-level music theory courses.</p>
</article>
<div className="conclusion">
<p>Alto and tenor clefs are indispensable tools for the complete musician. Regular practice with these clefs develops the flexibility needed for professional music-making and advanced theoretical study.</p>
</div>
</section></div>` }} />
      </div>

      {/* Back to Theory Index */}
      <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
        <Link
          to="/theory"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg transition-colors"
        >
          ← Back to Theory Index
        </Link>
      </div>
    </article>
  );
};

export default Ch01AltoandtenorclefregistersPage;
