import React from 'react';
import { Link } from 'react-router-dom';

const Ch04TupletsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 04</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Tuplets</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 04
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Rhythm
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Tuplets
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="Tuplets"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">4.5</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Tuplets</span>
</h2>
<div className="para" id="Tuplets-2">
<dfn className="terminology">Tuplet</dfn> is a generic term that describes a grouping of notes that would not normally occur within a beat.<div className="autopermalink" data-description="Paragraph"><a href="#Tuplets-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="Tuplets-3">A quarter note naturally divides into two eighth notes or four sixteenth notes. A <dfn className="terminology">triplet</dfn> is a grouping of three eighth notes that occurs within the span of the quarter note. A <dfn className="terminology">quintuplet</dfn> would be a grouping of five sixteenth notes to occur within the span of one quarter note. It is not uncommon to see quintuplets, sextuplets, and septuplets.<div className="autopermalink" data-description="Paragraph"><a href="#Tuplets-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/tuplets.svg" role="img" className="contained" alt="An example with triplets, quintuplets, and sextuplets" /></div>
<div className="para" id="Tuplets-5">If you write a piece of music that naturally has a triplet division to the beat, you should use <span className="process-math">\\(\\begin{smallmatrix}6\\\\8\\end{smallmatrix}\\)</span>, <span className="process-math">\\(\\begin{smallmatrix}9\\\\8\\end{smallmatrix}\\)</span> or <span className="process-math">\\(\\begin{smallmatrix}12\\\\8\\end{smallmatrix}\\)</span> depending on the number of beats in each measure.<div className="autopermalink" data-description="Paragraph"><a href="#Tuplets-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="Tuplets-6"><div className="sidebyside"><div className="sbsrow">
<div className="sbspanel sbspanel--top top"><img src="/theory/external/images/unit1/triplets-in-2-4.svg" role="img" className="contained" /></div>
<div className="sbspanel sbspanel--top top"><img src="/theory/external/images/unit1/triplets-in-6-8.svg" role="img" className="contained" /></div>
</div></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">4.5.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Two measures that sound the same<div className="autopermalink" data-description="Figure 4.5.1"><a href="#Tuplets-6" title="Copy heading and permalink for Figure 4.5.1" aria-label="Copy heading and permalink for Figure 4.5.1">🔗</a></div></figcaption></figure><div className="para" id="Tuplets-7">In compound meter, a <dfn className="terminology">duplet</dfn> is a grouping of two eighth notes to occur within the span of a dotted quarter note and a <dfn className="terminology">quadruplet</dfn> is a grouping of four eighth notes to occur with the span of a dotted quarter note.<div className="autopermalink" data-description="Paragraph"><a href="#Tuplets-7" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/duplet-and-quadruplet.svg" role="img" className="contained" alt="An example with duplets and quadruplets in compound meter, 6/8" /></div>
<div className="autopermalink" data-description="Section 4.5: Tuplets"><a href="#Tuplets" title="Copy heading and permalink for Section 4.5: Tuplets" aria-label="Copy heading and permalink for Section 4.5: Tuplets">🔗</a></div></section></div>
<div id="ptx-content-footer" className="ptx-content-footer">
</div>` }} />
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

export default Ch04TupletsPage;
