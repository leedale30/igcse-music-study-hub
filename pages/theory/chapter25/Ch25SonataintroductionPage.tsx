import React from 'react';
import { Link } from 'react-router-dom';

const Ch25SonataintroductionPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 25</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Sonata Form</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 25
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Sonata & Rondo
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Sonata Form
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="SonataIntroduction"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">25.1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Sonata Form</span>
</h2>
<section className="introduction" id="SonataIntroduction-2"><div className="para" id="SonataIntroduction-2-1">
<dfn className="terminology">Sonata form</dfn>, also known as “first-movement form,” is “[t]he most important principle of musical form, or formal type, from the Classical period well into the 20th century,” according to the Grove Music Online. The purpose of this chapter is to serve as an introduction to formal, thematic, and harmonic aspects of sonata form. We will focus on sonata form as it existed during the height of the Classical era. Further and more detailed study of sonata form occurs in higher-level music theory courses.<div className="autopermalink" data-description="Paragraph"><a href="#SonataIntroduction-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></section><section className="subsection" id="DiagramOfSonataForm"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">25.1.1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Diagram of Sonata Form</span>
</h3>
<div className="para" id="DiagramOfSonataForm-2">Below is a generalized diagram of sonata form, which serves as our starting point. Real-world examples will contain differences and elaborations.<div className="autopermalink" data-description="Paragraph"><a href="#DiagramOfSonataForm-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit7/sonata-DIAGRAM.svg" role="img" className="contained" alt="" /></div>
<div className="para" id="DiagramOfSonataForm-4">It is fairly common for a piece in sonata form to have multiple secondary themes (ST<span className="process-math">\\(\\left.\\text{}^{1}\\right.\\)</span>, ST<span className="process-math">\\(\\left.\\text{}^{2}\\right.\\)</span>). In some sonatas, the development section features new material. Some sonatas will not have a closing theme. As we work with real world examples, you will see the ways in which composers realize sonata form.<div className="autopermalink" data-description="Paragraph"><a href="#DiagramOfSonataForm-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="DiagramOfSonataForm-5">While the diagram above designates three large sections (exposition, development, recapitulation), repeat signs in sonatas from the classical era designate the sonata as a two-reprise form—the exposition repeats, then the development and recapitulation repeat as a single unit. Douglass Green, in his book <span className="booktitle">Form in Tonal Music</span>, notes the sonata’s evolution from and synthesis of rounded binary and balanced binary:<div className="autopermalink" data-description="Paragraph"><a href="#DiagramOfSonataForm-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<blockquote className="blockquote" id="DiagramOfSonataForm-6">
<div className="para" id="DiagramOfSonataForm-6-1">The typical sonata form, as it appeared in the 18th century, is a combination of rounded and balanced binary. It begins the return with a restatement of the opening of part one, as in the rounded binary, and it closes with a restatement of the final sections (second and closing themes) of part one transposed to the tonic, as in the balanced binary.<div className="autopermalink" data-description="Paragraph"><a href="#DiagramOfSonataForm-6-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Quotation"><a href="#DiagramOfSonataForm-6" title="Copy heading and permalink for Quotation" aria-label="Copy heading and permalink for Quotation">🔗</a></div>
</blockquote>
<div className="autopermalink" data-description="Subsection 25.1.1: Diagram of Sonata Form"><a href="#DiagramOfSonataForm" title="Copy heading and permalink for Subsection 25.1.1: Diagram of Sonata Form" aria-label="Copy heading and permalink for Subsection 25.1.1: Diagram of Sonata Form">🔗</a></div></section><section className="subsection" id="SonatinaForm"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">25.1.2</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Sonatina Form</span>
</h3>
<div className="para" id="SonatinaForm-2">While “sonatina” is sometimes understood to mean a short sonata or an easy sonata for beginners, in terms of form, <dfn className="terminology">sonatina form</dfn> is sonata form without the development section. Sonatina form is sometimes encountered in the second, slow movement of a larger work like a symphony, as well as in overtures. A familiar piece in sonatina form is the “Miniature Overture” from <span className="booktitle">The Nutcracker</span> by Tchaikovsky.<div className="autopermalink" data-description="Paragraph"><a href="#SonatinaForm-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="SonatinaForm-3"><div className="video-box"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/y-WQ4MmfcOM?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=209" id="NutcrackerSonatina"></iframe></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">25.1.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Tchaikovsky, <span className="booktitle">The Nutcracker</span>, “Miniature Overture” (1892)<div className="autopermalink" data-description="Figure 25.1.1"><a href="#SonatinaForm-3" title="Copy heading and permalink for Figure 25.1.1" aria-label="Copy heading and permalink for Figure 25.1.1">🔗</a></div></figcaption></figure><div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="c m b3 r1 l3 t0 lines">Exposition</td>
<td className="c m b3 r1 l0 t0 lines"></td>
<td className="c m b3 r3 l0 t0 lines"></td>
<td className="c m b3 r1 l0 t0 lines">Recapitulation</td>
<td className="c m b3 r1 l0 t0 lines"></td>
<td className="c m b3 r3 l0 t0 lines"></td>
</tr>
<tr>
<td className="c m b0 r1 l3 t0 lines">PT</td>
<td className="c m b0 r1 l0 t0 lines">ST</td>
<td className="c m b0 r3 l0 t0 lines">CT</td>
<td className="c m b0 r1 l0 t0 lines">PT</td>
<td className="c m b0 r1 l0 t0 lines">ST</td>
<td className="c m b0 r3 l0 t0 lines">CT</td>
</tr>
<tr>
<td className="c m b0 r1 l3 t0 lines"><a className="external" href="https://youtu.be/JRXIDEpquCg?t=0m0s" target="_blank">0:00</a></td>
<td className="c m b0 r1 l0 t0 lines"><a className="external" href="https://youtu.be/JRXIDEpquCg?t=0m49s" target="_blank">0:49</a></td>
<td className="c m b0 r3 l0 t0 lines"><a className="external" href="https://youtu.be/JRXIDEpquCg?t=1m28s" target="_blank">1:28</a></td>
<td className="c m b0 r1 l0 t0 lines"><a className="external" href="https://youtu.be/JRXIDEpquCg?t=1m40s" target="_blank">1:40</a></td>
<td className="c m b0 r1 l0 t0 lines"><a className="external" href="https://youtu.be/JRXIDEpquCg?t=2m30s" target="_blank">2:30</a></td>
<td className="c m b0 r3 l0 t0 lines"><a className="external" href="https://youtu.be/JRXIDEpquCg?t=3m09s" target="_blank">3:09</a></td>
</tr>
</table></div>
<div className="autopermalink" data-description="Subsection 25.1.2: Sonatina Form"><a href="#SonatinaForm" title="Copy heading and permalink for Subsection 25.1.2: Sonatina Form" aria-label="Copy heading and permalink for Subsection 25.1.2: Sonatina Form">🔗</a></div></section><section className="subsection" id="SonataPrinciple"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">25.1.3</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Sonata Principle</span>
</h3>
<div className="para" id="SonataPrinciple-2">Important to sonata form is sonata principle, which Charles Rosen discusses in his book <span className="booktitle">Sonata Forms</span>.<div className="autopermalink" data-description="Paragraph"><a href="#SonataPrinciple-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<blockquote className="blockquote" id="SonataPrinciple-3">
<div className="para" id="SonataPrinciple-3-1">The exposition of a sonata form presents the thematic material and articulates the movement from tonic to dominant in various ways so that it takes on the character of a polarization or opposition. The essential character of this opposition may be defined as a large-scale dissonance: the material played outside the tonic (i.e., in the second group) is dissonant with respect to the center of stability, or tonic. Sonata style did not invent this concept of <em className="emphasis">dissonant section</em>, but it was the first style to make it the generating force of an entire movement.<details className="ptx-footnote" aria-live="polite" id="SonataPrinciple-3-1-2"><summary className="ptx-footnote__number" title="Footnote 25.1.1"><sup> 1 </sup></summary><div className="ptx-footnote__contents" id="SonataPrinciple-3-1-2">
<span className="booktitle">Sonata Forms</span>, Revised Edition, 1988, p. 229</div></details><div className="autopermalink" data-description="Paragraph"><a href="#SonataPrinciple-3-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Quotation"><a href="#SonataPrinciple-3" title="Copy heading and permalink for Quotation" aria-label="Copy heading and permalink for Quotation">🔗</a></div>
</blockquote>
<div className="para" id="SonataPrinciple-4">Rosen continues:<div className="autopermalink" data-description="Paragraph"><a href="#SonataPrinciple-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<blockquote className="blockquote" id="SonataPrinciple-5">
<div className="para" id="SonataPrinciple-5-1">The dominant is conceived as a <em className="emphasis">dissonant tonality</em> in the exposition....The polarization, in fact, leads to the concept of a <em className="emphasis">dissonant section</em>, which raises the dissonant interval or chord to a higher power: that is, a simple reintroduction of the tonic key will no longer serve as a resolution, but the section outside the tonic needs to be resolved as a whole.<details className="ptx-footnote" aria-live="polite" id="SonataPrinciple-5-1-3"><summary className="ptx-footnote__number" title="Footnote 25.1.2"><sup> 2 </sup></summary><div className="ptx-footnote__contents" id="SonataPrinciple-5-1-3">
<span className="booktitle">Sonata Forms</span>, Revised Edition, 1988, p. 244</div></details><div className="autopermalink" data-description="Paragraph"><a href="#SonataPrinciple-5-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Quotation"><a href="#SonataPrinciple-5" title="Copy heading and permalink for Quotation" aria-label="Copy heading and permalink for Quotation">🔗</a></div>
</blockquote>
<div className="autopermalink" data-description="Subsection 25.1.3: Sonata Principle"><a href="#SonataPrinciple" title="Copy heading and permalink for Subsection 25.1.3: Sonata Principle" aria-label="Copy heading and permalink for Subsection 25.1.3: Sonata Principle">🔗</a></div></section><section className="subsection" id="MonothematicSonata"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">25.1.4</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">The Monothematic Sonata</span>
</h3>
<div className="para" id="MonothematicSonata-2">Haydn was especially fond of restating the Primary Theme in the dominant where the Secondary Theme would normally occur. This reinforces the idea that the tonal design of a sonata was as important as thematic design.<div className="autopermalink" data-description="Paragraph"><a href="#MonothematicSonata-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Subsection 25.1.4: The Monothematic Sonata"><a href="#MonothematicSonata" title="Copy heading and permalink for Subsection 25.1.4: The Monothematic Sonata" aria-label="Copy heading and permalink for Subsection 25.1.4: The Monothematic Sonata">🔗</a></div></section><div className="autopermalink" data-description="Section 25.1: Sonata Form"><a href="#SonataIntroduction" title="Copy heading and permalink for Section 25.1: Sonata Form" aria-label="Copy heading and permalink for Section 25.1: Sonata Form">🔗</a></div></section></div>
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

export default Ch25SonataintroductionPage;
