import React from 'react';
import { Link } from 'react-router-dom';

const Ch01OctaveregistersPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 01</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Octave Registers</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 01
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Basic Concepts
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Octave Registers
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="OctaveRegisters"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">1.3</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Octave Registers</span>
</h2>
<div className="para" id="OctaveRegisters-2">The note names used in music are <span className="process-math">\\(\\text{A}\\)</span><span className="process-math">\\(\\text{B}\\)</span><span className="process-math">\\(\\text{C}\\)</span><span className="process-math">\\(\\text{D}\\)</span><span className="process-math">\\(\\text{E}\\)</span><span className="process-math">\\(\\text{F}\\)</span><span className="process-math">\\(\\text{G}\\)</span> (known as the “musical alphabet”). After <span className="process-math">\\(\\text{G}\\)</span>, the note <span className="process-math">\\(\\text{A}\\)</span> returns and <span className="process-math">\\(\\text{A}\\)</span><span className="process-math">\\(\\text{B}\\)</span><span className="process-math">\\(\\text{C}\\)</span><span className="process-math">\\(\\text{D}\\)</span><span className="process-math">\\(\\text{E}\\)</span><span className="process-math">\\(\\text{F}\\)</span><span className="process-math">\\(\\text{G}\\)</span> occurs again and again. The distance from the first <span className="process-math">\\(\\text{A}\\)</span> to the second <span className="process-math">\\(\\text{A}\\)</span> is an octave (which means the notes are eight steps apart.)<div className="autopermalink" data-description="Paragraph"><a href="#OctaveRegisters-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{A}\\)</span></td>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{B}\\)</span></td>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{C}\\)</span></td>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{D}\\)</span></td>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{E}\\)</span></td>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{F}\\)</span></td>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{G}\\)</span></td>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(\\text{A}\\)</span></td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(1\\)</span></td>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(2\\)</span></td>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(3\\)</span></td>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(4\\)</span></td>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(5\\)</span></td>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(6\\)</span></td>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(7\\)</span></td>
<td className="l m b0 r0 l0 t0 lines">
<span className="process-math">\\(8\\)</span> (octave)</td>
</tr>
</table></div>
<div className="para" id="OctaveRegisters-4">The distance from any note to a note of the same name in the next register above or below is called an <dfn className="terminology">octave</dfn> (abbreviated “<dfn className="terminology">8ve</dfn>”).<div className="autopermalink" data-description="Paragraph"><a href="#OctaveRegisters-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="OctaveRegisters-5">How can the piano keyboard have 88 notes when there are only seven note names? The musical alphabet repeats 7 times (with an extra <span className="process-math">\\(\\text{A}\\)</span><span className="process-math">\\(\\text{B}\\)</span><span className="process-math">\\(\\text{C}\\)</span> at the top), which means we have at least seven octave registers. (There are also five chromatic notes in each register, which we will learn about when we discuss <a href="01-04-Accidentals.html" className="internal" title="Section 1.4: Accidentals">Accidentals</a>.) When learning about octave registers, we will focus on the note <span className="process-math">\\(\\text{C}\\)</span> for reasons that will soon become clear when we learn about the major scale.<div className="autopermalink" data-description="Paragraph"><a href="#OctaveRegisters-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="OctaveRegisters-6">We use <dfn className="terminology">octave registers</dfn> (<span className="process-math">\\(\\text{C}_{4}\\)</span>, <span className="process-math">\\(\\text{D}_{5}\\)</span>, etc.) to specify the exact register of a note. The note  <span className="process-math">\\(\\text{C}_{4}\\)</span> is known as “<dfn className="terminology">middle C</dfn>” and is an important reference point. See the keyboard in the example below.<div className="autopermalink" data-description="Paragraph"><a href="#OctaveRegisters-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/keyboard-octave-registers.svg" role="img" className="contained" alt="Picture of keyboard with C1 through C8 identified" /></div>
<div className="para" id="OctaveRegisters-8">Note that <em className="emphasis">the register number changes after the note</em><span className="process-math">\\(\\text{B}\\)</span> each time (<span className="process-math">\\(\\text{B}_{4}\\)</span> is followed by <span className="process-math">\\(\\text{C}_{5}\\)</span>).<div className="autopermalink" data-description="Paragraph"><a href="#OctaveRegisters-8" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="OctaveRegisters-9">In treble clef, middle <span className="process-math">\\(\\text{C}\\)</span> is notated on the ledger line below the staff. In bass clef, middle <span className="process-math">\\(\\text{C}\\)</span> is notated on the ledger line above the staff.<div className="autopermalink" data-description="Paragraph"><a href="#OctaveRegisters-9" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="OctaveRegisters-10"><div className="sidebyside"><div className="sbsrow">
<div className="sbspanel sbspanel--top top"><img src="/theory/external/images/unit1/treble-clef-middle-c.svg" role="img" className="contained" /></div>
<div className="sbspanel sbspanel--top top"><img src="/theory/external/images/unit1/bass-clef-middle-c.svg" role="img" className="contained" /></div>
</div></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">1.3.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Middle C (C4) in treble clef and bass clef<div className="autopermalink" data-description="Figure 1.3.1"><a href="#OctaveRegisters-10" title="Copy heading and permalink for Figure 1.3.1" aria-label="Copy heading and permalink for Figure 1.3.1">🔗</a></div></figcaption></figure><div className="para" id="OctaveRegisters-11">The other two commonly used clefs are <dfn className="terminology">alto clef</dfn> and <dfn className="terminology">tenor clef</dfn>. Each use a <span className="process-math">\\(\\text{C}\\)</span> clef that, when placed on a staff, designate the placement of middle <span className="process-math">\\(\\text{C}\\)</span>.<div className="autopermalink" data-description="Paragraph"><a href="#OctaveRegisters-11" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="OctaveRegisters-12"><div className="sidebyside"><div className="sbsrow">
<div className="sbspanel sbspanel--top top"><img src="/theory/external/images/unit1/alto-clef-middle-c.svg" role="img" className="contained" /></div>
<div className="sbspanel sbspanel--top top"><img src="/theory/external/images/unit1/tenor-clef-middle-c.svg" role="img" className="contained" /></div>
</div></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">1.3.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Middle C in alto clef and tenor clef<div className="autopermalink" data-description="Figure 1.3.2"><a href="#OctaveRegisters-12" title="Copy heading and permalink for Figure 1.3.2" aria-label="Copy heading and permalink for Figure 1.3.2">🔗</a></div></figcaption></figure><div className="para" id="OctaveRegisters-13">The <dfn className="terminology">grand staff</dfn>, which is a treble and bass clef joined together by a bracket, is how piano music is written.<div className="autopermalink" data-description="Paragraph"><a href="#OctaveRegisters-13" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/grand-staff-basic.svg" role="img" className="contained" /></div>
<div className="para" id="OctaveRegisters-15">Note that middle <span className="process-math">\\(\\text{C}\\)</span> is always clearly notated in either the upper or lower staff and never floats between the two staves.<div className="autopermalink" data-description="Paragraph"><a href="#OctaveRegisters-15" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Section 1.3: Octave Registers"><a href="#OctaveRegisters" title="Copy heading and permalink for Section 1.3: Octave Registers" aria-label="Copy heading and permalink for Section 1.3: Octave Registers">🔗</a></div></section></div>
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

export default Ch01OctaveregistersPage;
