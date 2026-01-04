import React from 'react';
import { Link } from 'react-router-dom';

const Ch10NonchordtonesintroductionPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 10</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Introduction to Non-Chord Tones</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 10
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Non-Chord Tones
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Introduction to Non-Chord Tones
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="NonChordTonesIntroduction"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">10.1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Introduction to Non-Chord Tones</span>
</h2>
<div className="para" id="NonChordTonesIntroduction-2">
<dfn className="terminology">Non-chord tones</dfn> are notes that do not belong to the chord. Sometimes referred to as “embellishing tones” and “non-harmonic tones,” non-chord tones are classified by how they are approached and left (either by same tone, step, or leap).<div className="autopermalink" data-description="Paragraph"><a href="#NonChordTonesIntroduction-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="NonChordTonesIntroduction-3">There are nine types of non-chord tones.<div className="autopermalink" data-description="Paragraph"><a href="#NonChordTonesIntroduction-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="table table-like" id="NonChordTonesIntroduction-4"><figcaption><span className="type">Table</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">10.1.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span><div className="autopermalink" data-description="Table 10.1.1: "><a href="#NonChordTonesIntroduction-4" title="Copy heading and permalink for Table 10.1.1: " aria-label="Copy heading and permalink for Table 10.1.1: ">🔗</a></div></figcaption><div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="l m b3 r0 l0 t0 lines"><em className="emphasis">Non-Chord Tone</em></td>
<td className="l m b3 r0 l0 t0 lines"><em className="emphasis">Approached by</em></td>
<td className="l m b3 r0 l0 t0 lines"><em className="emphasis">Left by</em></td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Passing Tone</td>
<td className="l m b0 r0 l0 t0 lines">step</td>
<td className="l m b0 r0 l0 t0 lines">step in same direction</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Neighbor Tone</td>
<td className="l m b0 r0 l0 t0 lines">step</td>
<td className="l m b0 r0 l0 t0 lines">step in opposite direction</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Appoggiatura</td>
<td className="l m b0 r0 l0 t0 lines">leap</td>
<td className="l m b0 r0 l0 t0 lines">step</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Escape Tone</td>
<td className="l m b0 r0 l0 t0 lines">step</td>
<td className="l m b0 r0 l0 t0 lines">leap in opposite direction</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Double Neighbor</td>
<td className="l m b0 r0 l0 t0 lines">see text</td>
<td className="l m b0 r0 l0 t0 lines">see text</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Anticipation</td>
<td className="l m b0 r0 l0 t0 lines">step</td>
<td className="l m b0 r0 l0 t0 lines">same note</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Pedal Point</td>
<td className="l m b0 r0 l0 t0 lines">same note</td>
<td className="l m b0 r0 l0 t0 lines">same note</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Suspension</td>
<td className="l m b0 r0 l0 t0 lines">same note</td>
<td className="l m b0 r0 l0 t0 lines">step down</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Retardation</td>
<td className="l m b0 r0 l0 t0 lines">same note</td>
<td className="l m b0 r0 l0 t0 lines">step up</td>
</tr>
</table></div></figure><div className="para" id="NonChordTonesIntroduction-5">The following qualifiers can be applied to non-chord tones:<div className="autopermalink" data-description="Paragraph"><a href="#NonChordTonesIntroduction-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<ul className="disc" id="NonChordTonesIntroduction-6">
<li id="NonChordTonesIntroduction-6-1">
<div className="para" id="NonChordTonesIntroduction-6-1-1">Accented—occurring on the beat<div className="autopermalink" data-description="Paragraph"><a href="#NonChordTonesIntroduction-6-1-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#NonChordTonesIntroduction-6-1" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="NonChordTonesIntroduction-6-2">
<div className="para" id="NonChordTonesIntroduction-6-2-1">Unaccented—occurring on the weak part of the beat (on the offbeat)<div className="autopermalink" data-description="Paragraph"><a href="#NonChordTonesIntroduction-6-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#NonChordTonesIntroduction-6-2" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="NonChordTonesIntroduction-6-3">
<div className="para" id="NonChordTonesIntroduction-6-3-1">Chromatic—not belonging to the key<div className="autopermalink" data-description="Paragraph"><a href="#NonChordTonesIntroduction-6-3-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#NonChordTonesIntroduction-6-3" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="NonChordTonesIntroduction-6-4">
<div className="para" id="NonChordTonesIntroduction-6-4-1">Metrical—equal to the duration of the beat<div className="autopermalink" data-description="Paragraph"><a href="#NonChordTonesIntroduction-6-4-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#NonChordTonesIntroduction-6-4" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="NonChordTonesIntroduction-6-5">
<div className="para" id="NonChordTonesIntroduction-6-5-1">Sub-metrical—smaller than the beat<div className="autopermalink" data-description="Paragraph"><a href="#NonChordTonesIntroduction-6-5-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#NonChordTonesIntroduction-6-5" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="NonChordTonesIntroduction-6-6">
<div className="para" id="NonChordTonesIntroduction-6-6-1">Super-metrical—larger than the beat<div className="autopermalink" data-description="Paragraph"><a href="#NonChordTonesIntroduction-6-6-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#NonChordTonesIntroduction-6-6" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
</ul>
<div className="autopermalink" data-description="Section 10.1: Introduction to Non-Chord Tones"><a href="#NonChordTonesIntroduction" title="Copy heading and permalink for Section 10.1: Introduction to Non-Chord Tones" aria-label="Copy heading and permalink for Section 10.1: Introduction to Non-Chord Tones">🔗</a></div></section></div>
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

export default Ch10NonchordtonesintroductionPage;
