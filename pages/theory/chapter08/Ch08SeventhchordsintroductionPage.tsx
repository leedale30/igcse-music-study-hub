import React from 'react';
import { Link } from 'react-router-dom';

const Ch08SeventhchordsintroductionPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 08</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Introduction to Seventh Chords</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 08
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Seventh Chords
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Introduction to Seventh Chords
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="SeventhChordsIntroduction"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">8.1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Introduction to Seventh Chords</span>
</h2>
<div className="para" id="SeventhChordsIntroduction-2">A <dfn className="terminology">seventh chord</dfn> adds to a triad another note a third higher than the fifth. Chords, being built in thirds, have members that are odd numbers—third, fifth, seventh, and we will eventually discuss extensions of the ninth, eleventh, and thirteenth. The fifteenth would be the double octave, so chords only extend as high as the thirteenth.<div className="autopermalink" data-description="Paragraph"><a href="#SeventhChordsIntroduction-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit2/7th-chords-basic-intro.svg" role="img" className="contained" alt="Example showing chords built in 3rds up to the 13th" /></div>
<div className="para logical" id="SeventhChordsIntroduction-4">
<div className="para">In classical and popular music, there are five types of seventh chords commonly encountered:</div>
<ul className="disc" id="SeventhChordsIntroduction-4-1">
<li id="SeventhChordsIntroduction-4-1-1">
<div className="para" id="SeventhChordsIntroduction-4-1-1-1">the major seventh chord<div className="autopermalink" data-description="Paragraph"><a href="#SeventhChordsIntroduction-4-1-1-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#SeventhChordsIntroduction-4-1-1" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="SeventhChordsIntroduction-4-1-2">
<div className="para" id="SeventhChordsIntroduction-4-1-2-1">the major-minor seventh chord (also known as a dominant seventh chord)<div className="autopermalink" data-description="Paragraph"><a href="#SeventhChordsIntroduction-4-1-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#SeventhChordsIntroduction-4-1-2" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="SeventhChordsIntroduction-4-1-3">
<div className="para" id="SeventhChordsIntroduction-4-1-3-1">the minor seventh chord<div className="autopermalink" data-description="Paragraph"><a href="#SeventhChordsIntroduction-4-1-3-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#SeventhChordsIntroduction-4-1-3" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="SeventhChordsIntroduction-4-1-4">
<div className="para" id="SeventhChordsIntroduction-4-1-4-1">the half-diminished seventh chord<div className="autopermalink" data-description="Paragraph"><a href="#SeventhChordsIntroduction-4-1-4-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#SeventhChordsIntroduction-4-1-4" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="SeventhChordsIntroduction-4-1-5">
<div className="para" id="SeventhChordsIntroduction-4-1-5-1">the fully-diminished seventh chord (often called diminished seventh chord)<div className="autopermalink" data-description="Paragraph"><a href="#SeventhChordsIntroduction-4-1-5-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#SeventhChordsIntroduction-4-1-5" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
</ul>
<div className="autopermalink" data-description="Paragraph"><a href="#SeventhChordsIntroduction-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="SeventhChordsIntroduction-5"><div className="image-box"><img src="/theory/external/images/unit2/7th-chords-all-five-types.svg" role="img" className="contained" alt="All five types of seventh chords, with their abbreviated labels" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">8.1.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span><div className="autopermalink" data-description="Figure 8.1.1"><a href="#SeventhChordsIntroduction-5" title="Copy heading and permalink for Figure 8.1.1" aria-label="Copy heading and permalink for Figure 8.1.1">🔗</a></div></figcaption></figure><div className="para" id="SeventhChordsIntroduction-6">Another way to differentiate between the five types of seventh chords is by learning how the thirds are stacked in each one.<div className="autopermalink" data-description="Paragraph"><a href="#SeventhChordsIntroduction-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit2/7th-chords-stacking-of-3rds.svg" role="img" className="contained" alt="All five types of seventh chords, shown with the types of thirds in each chord" /></div>
<div className="para" id="SeventhChordsIntroduction-8">In later chapters we will discuss other seventh chords built on augmented triads and minor triads.<div className="autopermalink" data-description="Paragraph"><a href="#SeventhChordsIntroduction-8" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Section 8.1: Introduction to Seventh Chords"><a href="#SeventhChordsIntroduction" title="Copy heading and permalink for Section 8.1: Introduction to Seventh Chords" aria-label="Copy heading and permalink for Section 8.1: Introduction to Seventh Chords">🔗</a></div></section></div>
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

export default Ch08SeventhchordsintroductionPage;
