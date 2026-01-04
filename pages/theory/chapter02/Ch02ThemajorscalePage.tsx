import React from 'react';
import { Link } from 'react-router-dom';

const Ch02ThemajorscalePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 02</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">The Major Scale</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 02
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Major Keys
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          The Major Scale
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="TheMajorScale"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">2.2</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">The Major Scale</span>
</h2>
<div className="para" id="TheMajorScale-2">A major scale contains a specific succession of whole and half steps. It is helpful to think of the pattern as consisting of two tetrachords. (A <dfn className="terminology">tetrachord</dfn> is a four-note scale segment.) The lower tetrachord consists of the pattern whole step, whole step, half step. A whole step joins the lower tetrachord to the upper tetrachord. The upper tetrachord duplicates the pattern in the lower one: whole step, whole step, half step. If we use W for whole step and H for half step, the major scale pattern is W–W–H, Whole–step connection, W–W–H.<div className="autopermalink" data-description="Paragraph"><a href="#TheMajorScale-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="TheMajorScale-3"><div className="image-box"><img src="/theory/external/images/unit1/tetrachords-on-piano.svg" role="img" className="contained" alt="The D major scale on a keyboard, shown as two tetrachords" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">2.2.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>The D major scale on a keyboard<div className="autopermalink" data-description="Figure 2.2.1"><a href="#TheMajorScale-3" title="Copy heading and permalink for Figure 2.2.1" aria-label="Copy heading and permalink for Figure 2.2.1">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="TheMajorScale-4"><div className="image-box"><img src="/theory/external/images/unit1/tetrachords-on-staff.svg" role="img" className="contained" alt="The D major scale on the staff, shown as two tetrachords" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">2.2.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>The D major scale in treble clef<div className="autopermalink" data-description="Figure 2.2.2"><a href="#TheMajorScale-4" title="Copy heading and permalink for Figure 2.2.2" aria-label="Copy heading and permalink for Figure 2.2.2">🔗</a></div></figcaption></figure><div className="audio-box"><audio id="TheMajorScale-5" className="audio" controls=""><source src="/theory/external/images/unit1/MajorScale-D-major-scale-audio.mp3" type="audio/mp3" /></source>Your browser does not support the &lt;audio&gt; tag.</audio></div>
<div className="para" id="TheMajorScale-6">All major scales use the notes of the musical alphabet in order; no notes are skipped and no notes occur twice. In the example above, the first four notes are <span className="process-math">\\(\\text{D}\\)</span>–<span className="process-math">\\(\\text{E}\\)</span>–<span className="process-math">\\(\\text{F}^♯\\)</span>–<span className="process-math">\\(\\text{G}\\)</span>, not <span className="process-math">\\(\\text{D}\\)</span>–<span className="process-math">\\(\\text{E}\\)</span>–<span className="process-math">\\(\\text{G}^♭\\)</span>–<span className="process-math">\\(\\text{G}\\)</span>. In <span className="process-math">\\(\\text{D}\\)</span>–<span className="process-math">\\(\\text{E}\\)</span>–<span className="process-math">\\(\\text{G}^♭\\)</span>–<span className="process-math">\\(\\text{G}\\)</span>, <span className="process-math">\\(\\text{G}\\)</span> erroneously occurs twice and the <span className="process-math">\\(\\text{F}^♯\\)</span> between <span className="process-math">\\(\\text{E}\\)</span> and <span className="process-math">\\(\\text{G}\\)</span> is skipped.<div className="autopermalink" data-description="Paragraph"><a href="#TheMajorScale-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Section 2.2: The Major Scale"><a href="#TheMajorScale" title="Copy heading and permalink for Section 2.2: The Major Scale" aria-label="Copy heading and permalink for Section 2.2: The Major Scale">🔗</a></div></section></div>
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

export default Ch02ThemajorscalePage;
