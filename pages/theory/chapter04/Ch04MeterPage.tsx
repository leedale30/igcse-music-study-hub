import React from 'react';
import { Link } from 'react-router-dom';

const Ch04MeterPage: React.FC = () => {
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
        <span className="text-gray-700 dark:text-gray-300">Meter</span>
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
          Meter
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="meter"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">4.4</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Meter</span>
</h2>
<div className="para" id="meter-2">
<dfn className="terminology">Meter</dfn> describes the number of beats in a measure (also know as a “bar”) and how the beats are normally divided.<div className="autopermalink" data-description="Paragraph"><a href="#meter-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="meter-3">
<dfn className="terminology">Beat</dfn> is "[t]he basic pulse underlying measured music and thus the unit by which musical time is reckoned..." according to Barry Kernfeld in <em className="emphasis">The New Grove Dictionary of Jazz</em>, 2nd edition. <dfn className="terminology">Pulse</dfn> and beat are synonymous.<div className="autopermalink" data-description="Paragraph"><a href="#meter-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="meter-4">
<dfn className="terminology">Tempo</dfn> refers to the speed of the beat or pulse. Tempo can be referred to in <dfn className="terminology">beats per minute</dfn> (<dfn className="terminology">bpm</dfn>), such as 60bpm (where the rate of the beat would be equal to a second), or, in classical music, with terms like Allegro, Andante, and Adagio, sometimes in combinations with "<dfn className="terminology">M.M.</dfn>" for <dfn className="terminology">Maelzel’s Metronome</dfn>.<div className="autopermalink" data-description="Paragraph"><a href="#meter-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="meter-5">Meters with two beats in a bar are described as <em className="emphasis">duple</em>. If there are three beats in a bar, the meter is described as <em className="emphasis">triple</em>, and if there are four beats in a bar, the meter is described as <em className="emphasis">quadruple</em>.<div className="autopermalink" data-description="Paragraph"><a href="#meter-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="meter-6">If the beats are normally divided into two parts, the meter is described as <dfn className="terminology">simple</dfn>. If the beats are normally divided into three parts, the meter is described as <dfn className="terminology">compound</dfn>.<div className="autopermalink" data-description="Paragraph"><a href="#meter-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/simple-meters.svg" role="img" className="contained" alt="Examples time signatures with simple duple, simple triple, and simple quadruple meter" /></div>
<div className="para" id="meter-8">The time signature <span className="process-math">\\(\\begin{smallmatrix}2\\\\8\\end{smallmatrix}\\)</span> is “simple duple meter.” The time signature <span className="process-math">\\(\\begin{smallmatrix}3\\\\2\\end{smallmatrix}\\)</span> is “simple triple meter.” Finally, <span className="process-math">\\(\\begin{smallmatrix}4\\\\4\\end{smallmatrix}\\)</span> is “simple quadruple meter.”<div className="autopermalink" data-description="Paragraph"><a href="#meter-8" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="meter-9">When describing meter, we say how the beat is divided before the number of beats in the measure.<div className="autopermalink" data-description="Paragraph"><a href="#meter-9" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/meter-explanation.svg" role="img" className="contained" alt='Graphic showing "simple" and "compound" occur before "duple," "triple," or "quadruple"' /></div>
<div className="para" id="meter-11">With compound meters the bottom number specifies <em className="emphasis">the division of the beat</em>. The beat value is a dotted note. We say <span className="process-math">\\(\\begin{smallmatrix}6\\\\16\\end{smallmatrix}\\)</span> is “compound duple meter” because it has two beats. The time signature <span className="process-math">\\(\\begin{smallmatrix}6\\\\8\\end{smallmatrix}\\)</span> is also compound duple. Compound time signatures have a top number greater than four that is divisible by 3 (6, 9, 12).<div className="autopermalink" data-description="Paragraph"><a href="#meter-11" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/compound-meters.svg" role="img" className="contained" alt="Example showing time signatures with compound meter, such as 6/16, 9/8, and 12/4" /></div>
<div className="para" id="meter-13">The following table summarizes meter and time signatures.<div className="autopermalink" data-description="Paragraph"><a href="#meter-13" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="r m b0 r1 l0 t0 lines">Top number of time signature:</td>
<td className="c m b1 r1 l0 t1 lines">2</td>
<td className="c m b1 r1 l0 t1 lines">3</td>
<td className="c m b1 r1 l0 t1 lines">4</td>
<td className="l m b0 r0 l0 t0 lines">= Simple</td>
</tr>
<tr>
<td className="r m b0 r1 l0 t0 lines">Top number of time signature:</td>
<td className="c m b1 r1 l0 t0 lines">6</td>
<td className="c m b1 r1 l0 t0 lines">9</td>
<td className="c m b1 r1 l0 t0 lines">12</td>
<td className="l m b0 r0 l0 t0 lines">= Compound</td>
</tr>
<tr>
<td className="r m b0 r0 l0 t0 lines">Number of beats:</td>
<td className="c m b0 r0 l0 t0 lines">Duple</td>
<td className="c m b0 r0 l0 t0 lines">Triple</td>
<td className="c m b0 r0 l0 t0 lines">Quadruple</td>
<td className="c m b0 r0 l0 t0 lines"></td>
</tr>
</table></div>
<div className="autopermalink" data-description="Section 4.4: Meter"><a href="#meter" title="Copy heading and permalink for Section 4.4: Meter" aria-label="Copy heading and permalink for Section 4.4: Meter">🔗</a></div></section></div>
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

export default Ch04MeterPage;
