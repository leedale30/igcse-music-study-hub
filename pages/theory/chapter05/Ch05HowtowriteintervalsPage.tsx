import React from 'react';
import { Link } from 'react-router-dom';

const Ch05HowtowriteintervalsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 05</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">How to Write Perfect, Major, and Minor Intervals</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 05
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Intervals
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          How to Write Perfect, Major, and Minor Intervals
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="HowToWriteIntervals"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">5.3</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">How to Write Perfect, Major, and Minor Intervals</span>
</h2>
<div className="para" id="HowToWriteIntervals-2">To write an interval <em className="emphasis">above</em> a given note, use the two methods given below.<div className="autopermalink" data-description="Paragraph"><a href="#HowToWriteIntervals-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="HowToWriteIntervals-3">If you are asked to write a minor sixth above the note <span className="process-math">\\(\\text{A}\\)</span>, start with the <span className="process-math">\\(\\text{A}\\)</span> major scale and key signature. In <span className="process-math">\\(\\text{A}\\)</span> major, there is an <span className="process-math">\\(\\text{F}^♯\\)</span>, which is a major sixth above the note <span className="process-math">\\(\\text{A}\\)</span>. Therefore, <span className="process-math">\\(\\text{F}^♮\\)</span> is a minor sixth above <span className="process-math">\\(\\text{A}\\)</span>.<div className="autopermalink" data-description="Paragraph"><a href="#HowToWriteIntervals-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/interval-writing-above.svg" role="img" className="contained" /></div>
<div className="para" id="HowToWriteIntervals-5">Alternatively, you can simply count the number of half steps. If you know there are 8 half steps in a minor sixth, you can count from <span className="process-math">\\(\\text{A}\\)</span> up to <span className="process-math">\\(\\text{F}\\)</span>.<div className="autopermalink" data-description="Paragraph"><a href="#HowToWriteIntervals-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="HowToWriteIntervals-6">Writing small intervals up to a major third <em className="emphasis">below</em> a given note is straightforward using a combination of whole and half steps. However, to write larger intervals below a given note, it is sometimes helpful to invert the interval first (<a href="05-04-InversionOfIntervals.html" className="internal" title="Section 5.4: Inversion of Intervals Explained">Inversion of Intervals Explained</a> is discussed in the next section).<div className="autopermalink" data-description="Paragraph"><a href="#HowToWriteIntervals-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Section 5.3: How to Write Perfect, Major, and Minor Intervals"><a href="#HowToWriteIntervals" title="Copy heading and permalink for Section 5.3: How to Write Perfect, Major, and Minor Intervals" aria-label="Copy heading and permalink for Section 5.3: How to Write Perfect, Major, and Minor Intervals">🔗</a></div></section></div>
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

export default Ch05HowtowriteintervalsPage;
