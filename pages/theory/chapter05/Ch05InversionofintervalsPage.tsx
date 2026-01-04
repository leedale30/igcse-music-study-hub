import React from 'react';
import { Link } from 'react-router-dom';

const Ch05InversionofintervalsPage: React.FC = () => {
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
        <span className="text-gray-700 dark:text-gray-300">Inversion of Intervals Explained</span>
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
          Inversion of Intervals Explained
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="InversionOfIntervals"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">5.4</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Inversion of Intervals Explained</span>
</h2>
<div className="para" id="InversionOfIntervals-2">There are only two notes in an interval, one lower and one higher. To invert an interval, change the position of the notes so the note that was lower is now higher.<div className="autopermalink" data-description="Paragraph"><a href="#InversionOfIntervals-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/inversion-of-intervals.svg" role="img" className="contained" /></div>
<div className="para" id="InversionOfIntervals-4">In the above example, a m6 inverts to a M3. This is true for all notes a M3 (or m6) away from each other. Below are examples of how intervals invert.<div className="autopermalink" data-description="Paragraph"><a href="#InversionOfIntervals-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/interval-inversions-on-staff.svg" role="img" className="contained" /></div>
<div className="para" id="InversionOfIntervals-6">Note that the symbol <span className="process-math">\\(\\left.\\text{}^{\\circ}{}\\right.\\)</span> represents “diminished” (one half step smaller than perfect or minor) and the symbol <span className="process-math">\\(\\left.\\text{}{+}\\right.\\)</span> represents “augmented” (one half step larger than perfect or major).<div className="autopermalink" data-description="Paragraph"><a href="#InversionOfIntervals-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="InversionOfIntervals-7">Below is a chart of how intervals invert.<div className="autopermalink" data-description="Paragraph"><a href="#InversionOfIntervals-7" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/interval-inversion-chart.svg" role="img" className="contained" /></div>
<div className="para" id="InversionOfIntervals-9">To write a small interval <em className="emphasis">below</em> a given note, you should be able to combine whole steps and half steps up to the interval of a perfect fourth (two whole steps plus one half step). To write a larger interval below a given note, invert the interval size, determine the note <em className="emphasis">above</em>, then write it <em className="emphasis">below</em> the given note.<div className="autopermalink" data-description="Paragraph"><a href="#InversionOfIntervals-9" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/interval-inversion-staff-example.svg" role="img" className="contained" /></div>
<div className="autopermalink" data-description="Section 5.4: Inversion of Intervals Explained"><a href="#InversionOfIntervals" title="Copy heading and permalink for Section 5.4: Inversion of Intervals Explained" aria-label="Copy heading and permalink for Section 5.4: Inversion of Intervals Explained">🔗</a></div></section></div>
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

export default Ch05InversionofintervalsPage;
