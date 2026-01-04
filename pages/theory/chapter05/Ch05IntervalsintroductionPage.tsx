import React from 'react';
import { Link } from 'react-router-dom';

const Ch05IntervalsintroductionPage: React.FC = () => {
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
        <span className="text-gray-700 dark:text-gray-300">Introduction to Intervals</span>
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
          Introduction to Intervals
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="IntervalsIntroduction"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">5.1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Introduction to Intervals</span>
</h2>
<section className="introduction" id="IntervalsIntroduction-2"><div className="para" id="IntervalsIntroduction-2-1">Intervals are the building blocks of scales, chords (or harmonies), and melodies. <dfn className="terminology">Intervals</dfn> are a measurement between two pitches, either vertically or horizontally. When measuring vertically, we refer to <dfn className="terminology">harmonic intervals</dfn> because the two notes sound simultaneously. When measuring horizontally, we refer to <dfn className="terminology">melodic intervals</dfn> because the notes occur one after the other.<div className="autopermalink" data-description="Paragraph"><a href="#IntervalsIntroduction-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/harmonic-and-melodic-intervals.svg" role="img" className="contained" /></div>
<div className="para" id="IntervalsIntroduction-2-3">When you measure from the tonic up to each scale degree of a major scale, you find the following intervals:<div className="autopermalink" data-description="Paragraph"><a href="#IntervalsIntroduction-2-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/intervals-of-major-scale.svg" role="img" className="contained" /></div>
<div className="para" id="IntervalsIntroduction-2-5">All intervals in the example above are either “perfect” or “major.”<div className="autopermalink" data-description="Paragraph"><a href="#IntervalsIntroduction-2-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></section><section className="subsection" id="NumericSizeOfInterval"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">5.1.1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Numeric Size of Interval</span>
</h3>
<div className="para" id="NumericSizeOfInterval-2">There are two elements to naming intervals: the quality and the number (for example, “major sixth,” abbreviated as “M6”). Let us first focus on the numeric size of intervals.<div className="autopermalink" data-description="Paragraph"><a href="#NumericSizeOfInterval-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="NumericSizeOfInterval-3">Odd-numbered intervals will always be a line to a line or a space to a space.<div className="autopermalink" data-description="Paragraph"><a href="#NumericSizeOfInterval-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/intervals-numeric-odd-only.svg" role="img" className="contained" /></div>
<div className="para" id="NumericSizeOfInterval-5">Even-numbered intervals will always be a space to a line or a line to a space.<div className="autopermalink" data-description="Paragraph"><a href="#NumericSizeOfInterval-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/intervals-numeric-even-only.svg" role="img" className="contained" /></div>
<div className="autopermalink" data-description="Subsection 5.1.1: Numeric Size of Interval"><a href="#NumericSizeOfInterval" title="Copy heading and permalink for Subsection 5.1.1: Numeric Size of Interval" aria-label="Copy heading and permalink for Subsection 5.1.1: Numeric Size of Interval">🔗</a></div></section><section className="subsection" id="IntervalQuality"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">5.1.2</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Interval Quality: Perfect versus Major/Minor</span>
</h3>
<div className="para" id="IntervalQuality-2">Intervals such as the unison, fourth, fifth, and octave can be classified as “<dfn className="terminology">perfect</dfn>” but never “major” or “minor”. Conversely, the intervals of the second, third, sixth, and seventh can be <dfn className="terminology">major</dfn> or minor but never perfect in quality.<div className="autopermalink" data-description="Paragraph"><a href="#IntervalQuality-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="c m b0 r0 l0 t0 lines">
<em className="emphasis">Perfect Intervals</em>:</td>
<td className="c m b0 r0 l0 t0 lines">Unison, 4th, 5th, 8ve</td>
</tr>
<tr>
<td className="c m b0 r0 l0 t0 lines">
<em className="emphasis">Major or Minor Intervals</em>:</td>
<td className="c m b0 r0 l0 t0 lines">2nd, 3rd, 6th, 7th</td>
</tr>
</table></div>
<div className="para" id="IntervalQuality-4">Perfect intervals are always natural to natural, sharp to sharp, and flat to flat except for the fourths and fifths between <span className="process-math">\\(\\text{B}\\)</span> and <span className="process-math">\\(\\text{F}\\)</span>, which involve <span className="process-math">\\(\\text{B}\\)</span> to <span className="process-math">\\(\\text{F}^♯\\)</span> and <span className="process-math">\\(\\text{B}^♭\\)</span> to <span className="process-math">\\(\\text{F}\\)</span>.<div className="autopermalink" data-description="Paragraph"><a href="#IntervalQuality-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/intervals-perfect-except-B-to-F.svg" role="img" className="contained" /></div>
<div className="para" id="IntervalQuality-6">
<dfn className="terminology">Minor intervals</dfn> are one half step smaller than major intervals.<div className="autopermalink" data-description="Paragraph"><a href="#IntervalQuality-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/intervals-major-versus-minor.svg" role="img" className="contained" /></div>
<div className="autopermalink" data-description="Subsection 5.1.2: Interval Quality: Perfect versus Major/Minor"><a href="#IntervalQuality" title="Copy heading and permalink for Subsection 5.1.2: Interval Quality: Perfect versus Major/Minor" aria-label="Copy heading and permalink for Subsection 5.1.2: Interval Quality: Perfect versus Major/Minor">🔗</a></div></section><div className="autopermalink" data-description="Section 5.1: Introduction to Intervals"><a href="#IntervalsIntroduction" title="Copy heading and permalink for Section 5.1: Introduction to Intervals" aria-label="Copy heading and permalink for Section 5.1: Introduction to Intervals">🔗</a></div></section></div>
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

export default Ch05IntervalsintroductionPage;
