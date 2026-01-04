import React from 'react';
import { Link } from 'react-router-dom';

const Ch05HowtoidentifyintervalsPage: React.FC = () => {
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
        <span className="text-gray-700 dark:text-gray-300">How to Identify Perfect, Major, and Minor Intervals</span>
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
          How to Identify Perfect, Major, and Minor Intervals
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="HowToIdentifyIntervals"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">5.2</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">How to Identify Perfect, Major, and Minor Intervals</span>
</h2>
<div className="para" id="HowToIdentifyIntervals-2">Here are two methods for identifying intervals.<div className="autopermalink" data-description="Paragraph"><a href="#HowToIdentifyIntervals-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="HowToIdentifyIntervals-3">The first method involves thinking of the lower note of an interval as the tonic (the first note of the scale). Remember that all the notes above the tonic in a major scale are perfect or major. Determine if the upper note is in the major scale. If it is not, determine if the interval is a half step smaller than a major interval, in which case it is a minor interval.<div className="autopermalink" data-description="Paragraph"><a href="#HowToIdentifyIntervals-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/how-to-ID-interval.svg" role="img" className="contained" /></div>
<div className="para" id="HowToIdentifyIntervals-5">If the lower note of an interval has a sharp or flat on it, cover up the accidental, determine the interval, then factor the accidental back in.<div className="autopermalink" data-description="Paragraph"><a href="#HowToIdentifyIntervals-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/interval-ID-covering-lower-note.svg" role="img" className="contained" /></div>
<div className="para" id="HowToIdentifyIntervals-7">The second method is to memorize how many half steps there are in each interval. To determine the size of an interval, count the number of half steps between the two notes then refer to your memory.<div className="autopermalink" data-description="Paragraph"><a href="#HowToIdentifyIntervals-7" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="c m b3 r1 l3 t0 lines">Number of half steps</td>
<td className="c m b3 r3 l0 t0 lines">Name of interval</td>
<td className="c m b3 r1 l0 t0 lines">Number of half steps</td>
<td className="c m b3 r3 l0 t0 lines">Name of interval</td>
</tr>
<tr>
<td className="c m b0 r1 l3 t0 lines">1</td>
<td className="c m b0 r3 l0 t0 lines">m2</td>
<td className="c m b0 r1 l0 t0 lines">7</td>
<td className="c m b0 r3 l0 t0 lines">P5</td>
</tr>
<tr>
<td className="c m b0 r1 l3 t0 lines">2</td>
<td className="c m b0 r3 l0 t0 lines">M2</td>
<td className="c m b0 r1 l0 t0 lines">8</td>
<td className="c m b0 r3 l0 t0 lines">m6</td>
</tr>
<tr>
<td className="c m b0 r1 l3 t0 lines">3</td>
<td className="c m b0 r3 l0 t0 lines">m3</td>
<td className="c m b0 r1 l0 t0 lines">9</td>
<td className="c m b0 r3 l0 t0 lines">M6</td>
</tr>
<tr>
<td className="c m b0 r1 l3 t0 lines">4</td>
<td className="c m b0 r3 l0 t0 lines">M3</td>
<td className="c m b0 r1 l0 t0 lines">10</td>
<td className="c m b0 r3 l0 t0 lines">m7</td>
</tr>
<tr>
<td className="c m b0 r1 l3 t0 lines">5</td>
<td className="c m b0 r3 l0 t0 lines">P4</td>
<td className="c m b0 r1 l0 t0 lines">11</td>
<td className="c m b0 r3 l0 t0 lines">M7</td>
</tr>
<tr>
<td className="c m b0 r1 l3 t0 lines">6</td>
<td className="c m b0 r3 l0 t0 lines">Tritone*</td>
<td className="c m b0 r1 l0 t0 lines">12</td>
<td className="c m b0 r3 l0 t0 lines">P8</td>
</tr>
</table></div>
<div className="para" id="HowToIdentifyIntervals-9">* A “tritone” is a generic name for an augmented fourth (<span className="process-math">\\(\\left.\\text{}{+}\\right.\\)</span>4) or diminished fifth (<span className="process-math">\\(\\left.\\text{}^{\\circ}{}\\right.\\)</span>5). These two intervals are enharmonic. <a href="AugmentedAndDiminishedIntervals.html" className="internal" title="Section 5.5: Augmented and Diminished Intervals">Augmented and Diminished Intervals</a> are discussed later in this chapter.<div className="autopermalink" data-description="Paragraph"><a href="#HowToIdentifyIntervals-9" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/interval-ID-by-counting-half-steps.svg" role="img" className="contained" /></div>
<div className="autopermalink" data-description="Section 5.2: How to Identify Perfect, Major, and Minor Intervals"><a href="#HowToIdentifyIntervals" title="Copy heading and permalink for Section 5.2: How to Identify Perfect, Major, and Minor Intervals" aria-label="Copy heading and permalink for Section 5.2: How to Identify Perfect, Major, and Minor Intervals">🔗</a></div></section></div>
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

export default Ch05HowtoidentifyintervalsPage;
