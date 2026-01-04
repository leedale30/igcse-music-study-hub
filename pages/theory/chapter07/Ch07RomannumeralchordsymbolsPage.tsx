import React from 'react';
import { Link } from 'react-router-dom';

const Ch07RomannumeralchordsymbolsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 07</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Roman Numeral Chord Symbols</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 07
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Roman Numerals & Cadences
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Roman Numeral Chord Symbols
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="RomanNumeralChordSymbols"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Roman Numeral Chord Symbols</span>
</h2>
<div className="para" id="RomanNumeralChordSymbols-2">Music is full of patterns that are similar from one piece to the next. As we saw with minor scales, we were able to use scale degree numbers to show the different patterns for harmonic, melodic, and natural minor, despite the fact that there are 15 minor key signatures. Using numbers instead of note names helps us see these patterns. Thinking of music in terms of numbers is also helpful with <dfn className="terminology">transposition</dfn>, which means moving melodies and/or chord progressions from one key to another. Thinking of music in terms of numbers also helps us to analyze it and to spot similar patterns between many different pieces in different keys.<div className="autopermalink" data-description="Paragraph"><a href="#RomanNumeralChordSymbols-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="RomanNumeralChordSymbols-3">We will use Roman numerals to represent chords within a specified key. The Roman numeral “<span className="process-math">\\(\\left.\\text{I}\\right.\\)</span>” represents a triad built on <span className="process-math">\\(\\hat{1} \\)</span>, or the 1st note of the scale. Uppercase Roman numerals represent major triads and lowercase Roman numerals (e.g., “<span className="process-math">\\(\\left.\\text{i}\\right.\\)</span>”) represent minor triads. Uppercase Roman numerals with a “<span className="process-math">\\(\\left.\\text{}{+}\\right.\\)</span>” are augmented (e.g., “<span className="process-math">\\(\\left.\\text{III}{+}\\right.\\)</span>”), and lowercase Roman numerals with a “<span className="process-math">\\(\\left.\\text{}^{\\circ}{}\\right.\\)</span>” are diminished (e.g., “<span className="process-math">\\(\\left.\\text{vii}^{\\circ}{}\\right.\\)</span>”). (There is also the <a className="external" href="https://en.wikipedia.org/wiki/Nashville_number_system" target="_blank">Nashville Number System</a>, which uses Arabic numbers for chords instead of Roman numerals.)<div className="autopermalink" data-description="Paragraph"><a href="#RomanNumeralChordSymbols-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="c m b3 r0 l0 t0 lines"><em className="emphasis">Key</em></td>
<td className="c m b3 r0 l0 t0 lines"><em className="emphasis">Lead-Sheet</em></td>
<td className="c m b3 r0 l0 t0 lines"><em className="emphasis">Root</em></td>
<td className="c m b3 r0 l0 t0 lines"><em className="emphasis">Scale Degree of Root</em></td>
<td className="c m b3 r0 l0 t0 lines"><em className="emphasis">Roman Numeral</em></td>
<td className="c m b3 r0 l0 t0 lines"><em className="emphasis">Notes in Chord</em></td>
</tr>
<tr>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{G}\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\left.\\text{B}\\text{m}\\right.\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{B}\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\hat{3} \\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\left.\\text{iii}\\right.\\)</span></td>
<td className="c m b0 r0 l0 t0 lines">
<span className="process-math">\\(\\text{B}\\)</span>–<span className="process-math">\\(\\text{D}\\)</span>–<span className="process-math">\\(\\text{F}^♯\\)</span>
</td>
</tr>
<tr>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{f}\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\left.\\text{G}^{\\circ}{}\\right.\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{G}\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\hat{2} \\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\left.\\text{ii}^{\\circ}{}\\right.\\)</span></td>
<td className="c m b0 r0 l0 t0 lines">
<span className="process-math">\\(\\text{G}\\)</span>–<span className="process-math">\\(\\text{B}^♭\\)</span>–<span className="process-math">\\(\\text{D}^♭\\)</span>
</td>
</tr>
<tr>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{c}\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\left.\\text{E}^♭{}\\right.\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{E}^♭\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\hat{3} \\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\left.\\text{III}\\right.\\)</span></td>
<td className="c m b0 r0 l0 t0 lines">
<span className="process-math">\\(\\text{E}^♭\\)</span>–<span className="process-math">\\(\\text{G}\\)</span>–<span className="process-math">\\(\\text{B}^♭\\)</span>
</td>
</tr>
</table></div>
<div className="para" id="RomanNumeralChordSymbols-5">For inversion of Roman numerals, we will use a modified “slash chord” notation until we study <a href="FiguredBass.html" className="internal" title="Chapter 16: Figured Bass">Figured Bass</a>. For now, we will write “<span className="process-math">\\(\\left.\\text{I}\\right.\\)</span>/3rd” if the 3rd of the <span className="process-math">\\(\\left.\\text{I}\\right.\\)</span> chord is the bass note, for example.<div className="autopermalink" data-description="Paragraph"><a href="#RomanNumeralChordSymbols-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit2/RN-inversions-for-now.svg" role="img" className="contained" alt="C: I/3rd means E is the bass note for C-E-G" /></div>
<div className="para" id="RomanNumeralChordSymbols-7">The following table offers more examples.<div className="autopermalink" data-description="Paragraph"><a href="#RomanNumeralChordSymbols-7" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="c m b3 r0 l0 t0 lines"><em className="emphasis">Key</em></td>
<td className="c m b3 r0 l0 t0 lines"><em className="emphasis">Roman Num.</em></td>
<td className="c m b3 r0 l0 t0 lines"><em className="emphasis">Root</em></td>
<td className="c m b3 r0 l0 t0 lines"><em className="emphasis">Scale Deg. of Root</em></td>
<td className="c m b3 r0 l0 t0 lines"><em className="emphasis">Notes in Chord</em></td>
<td className="c m b3 r0 l0 t0 lines"><em className="emphasis">Bass Note</em></td>
</tr>
<tr>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{g}\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\left.\\text{V}\\middle/\\text{3rd}\\right.\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{D}\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\hat{5} \\)</span></td>
<td className="c m b0 r0 l0 t0 lines">
<span className="process-math">\\(\\text{D}\\)</span>–<span className="process-math">\\(\\text{F}^♯\\)</span>–<span className="process-math">\\(\\text{A}\\)</span>
</td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{F}^♯\\)</span></td>
</tr>
<tr>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{a}\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\left.\\text{iv}\\middle/\\text{5th}\\right.\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{D}\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\hat{4} \\)</span></td>
<td className="c m b0 r0 l0 t0 lines">
<span className="process-math">\\(\\text{D}\\)</span>–<span className="process-math">\\(\\text{F}\\)</span>–<span className="process-math">\\(\\text{A}\\)</span>
</td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{A}\\)</span></td>
</tr>
<tr>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{D}\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\left.\\text{vii}^{\\circ}{}\\middle/\\text{3rd}\\right.\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{C}^♯\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\hat{7} \\)</span></td>
<td className="c m b0 r0 l0 t0 lines">
<span className="process-math">\\(\\text{C}^♯\\)</span>–<span className="process-math">\\(\\text{E}\\)</span>–<span className="process-math">\\(\\text{G}\\)</span>
</td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{E}\\)</span></td>
</tr>
</table></div>
<div className="autopermalink" data-description="Section 7.1: Roman Numeral Chord Symbols"><a href="#RomanNumeralChordSymbols" title="Copy heading and permalink for Section 7.1: Roman Numeral Chord Symbols" aria-label="Copy heading and permalink for Section 7.1: Roman Numeral Chord Symbols">🔗</a></div></section></div>
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

export default Ch07RomannumeralchordsymbolsPage;
