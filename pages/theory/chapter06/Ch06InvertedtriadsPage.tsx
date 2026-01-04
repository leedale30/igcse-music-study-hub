import React from 'react';
import { Link } from 'react-router-dom';

const Ch06InvertedtriadsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 06</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Inverted Triads</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 06
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Triads
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Inverted Triads
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="InvertedTriads"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">6.3</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Inverted Triads</span>
</h2>
<section className="introduction" id="InvertedTriads-2"><div className="para" id="InvertedTriads-2-1">An <dfn className="terminology">inverted triad</dfn> does not have the root as the lowest note. It is important to distinguish between <em className="emphasis">root</em> and <em className="emphasis">bass</em>. The root of a chord is the lowest note <em className="emphasis">when the notes are stacked in thirds</em>. The <em className="emphasis">bass</em> is the lowest note, which might be the root, third, or fifth.<div className="autopermalink" data-description="Paragraph"><a href="#InvertedTriads-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="InvertedTriads-2-2">A triad is in “<dfn className="terminology">root position</dfn>” when the root is the lowest note, “<dfn className="terminology">first inversion</dfn>” when the third of the chord is the lowest note, and “<dfn className="terminology">second inversion</dfn>” when the fifth of the chord is the lowest note.<div className="autopermalink" data-description="Paragraph"><a href="#InvertedTriads-2-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/triads-intro-to-inversion.svg" role="img" className="contained" /></div></section><section className="subsection" id="SlashChords"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">6.3.1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">"Slash" Chords</span>
</h3>
<div className="para" id="SlashChords-2">In lead-sheet notation, an inverted chord has the triad before the slash (/) and the bass note after it. “<span className="process-math">\\(\\left.\\text{C}\\middle/\\text{E}\\right.\\)</span>” means a <span className="process-math">\\(\\text{C}\\)</span> triad with an <span className="process-math">\\(\\text{E}\\)</span> as the lowest note.  Therefore, a <dfn className="terminology">slash chord</dfn> has a bass note that is not the root of the chord. In fact, it is possible to have slash chords where the bass note is not one of the chord tones (e.g., <span className="process-math">\\(\\left.\\text{C}\\middle/\\text{F}^{♯}\\right.\\)</span>).<div className="autopermalink" data-description="Paragraph"><a href="#SlashChords-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/leadsheet-infograph-on-slash-chord.svg" role="img" className="contained" /></div>
<div className="para" id="SlashChords-4">Remember, in a slash chord, <em className="emphasis">the first letter you see represents the root of the chord</em>. The letter <em className="emphasis">after</em> the slash is the <em className="emphasis">lowest</em> note (the bass).<div className="autopermalink" data-description="Paragraph"><a href="#SlashChords-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="c m b3 r0 l0 t0 lines"><em className="emphasis">Lead-sheet Symbol</em></td>
<td className="c m b3 r0 l0 t0 lines"><em className="emphasis">Root of Chord</em></td>
<td className="c m b3 r0 l0 t0 lines"><em className="emphasis">Notes in the Chord</em></td>
<td className="c m b3 r0 l0 t0 lines"><em className="emphasis">Bass Note (Lowest Note)</em></td>
</tr>
<tr>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\left.\\text{F}\\middle/\\text{A}\\right.\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{F}\\)</span></td>
<td className="c m b0 r0 l0 t0 lines">
<span className="process-math">\\(\\text{F}\\)</span>–<span className="process-math">\\(\\text{A}\\)</span>–<span className="process-math">\\(\\text{C}\\)</span>
</td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{A}\\)</span></td>
</tr>
<tr>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\left.\\text{D}\\text{m}\\middle/\\text{A}\\right.\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{D}\\)</span></td>
<td className="c m b0 r0 l0 t0 lines">
<span className="process-math">\\(\\text{D}\\)</span>–<span className="process-math">\\(\\text{F}\\)</span>–<span className="process-math">\\(\\text{A}\\)</span>
</td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{A}\\)</span></td>
</tr>
<tr>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\left.\\text{G}^{\\circ}{}\\middle/\\text{D}^{♭}\\right.\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{G}\\)</span></td>
<td className="c m b0 r0 l0 t0 lines">
<span className="process-math">\\(\\text{G}\\)</span>–<span className="process-math">\\(\\text{B}^♭\\)</span>–<span className="process-math">\\(\\text{D}^♭\\)</span>
</td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{D}^♭\\)</span></td>
</tr>
<tr>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\left.\\text{C}{+}\\middle/\\text{G}^{♯}\\right.\\)</span></td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{C}\\)</span></td>
<td className="c m b0 r0 l0 t0 lines">
<span className="process-math">\\(\\text{C}\\)</span>–<span className="process-math">\\(\\text{E}\\)</span>–<span className="process-math">\\(\\text{G}^♯\\)</span>
</td>
<td className="c m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{G}^♯\\)</span></td>
</tr>
</table></div>
<div className="autopermalink" data-description='Subsection 6.3.1: "Slash" Chords'><a href="#SlashChords" title='Copy heading and permalink for Subsection 6.3.1: "Slash" Chords' aria-label='Copy heading and permalink for Subsection 6.3.1: "Slash" Chords'>🔗</a></div></section><div className="autopermalink" data-description="Section 6.3: Inverted Triads"><a href="#InvertedTriads" title="Copy heading and permalink for Section 6.3: Inverted Triads" aria-label="Copy heading and permalink for Section 6.3: Inverted Triads">🔗</a></div></section></div>
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

export default Ch06InvertedtriadsPage;
