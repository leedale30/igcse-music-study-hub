import React from 'react';
import { Link } from 'react-router-dom';

const Ch15EineKleineIiPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 15</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Music Theory Content</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 15
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Musical Elements & Analysis
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Music Theory Content
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="Eine-kleine-ii"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">15.2</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Mozart, <span className="booktitle">Eine kleine Nachtmusik</span>, K. 525, II.</span>
</h2>
<div className="para" id="Eine-kleine-ii-2">The second movement of Mozart’s <span className="booktitle">Eine kleine Nachtmusik</span> is a five-part <a href="25-03-RondoForm.html" className="internal" title="Section 25.3: Rondo Form">rondo form</a> (ABACA).<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="Eine-kleine-ii-3">Let us examine the elements of music in the first section (the A section).<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="Eine-kleine-ii-4"><div className="image-box"><img src="/theory/external/images/unit3/contrast-eine-3-a-idea.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/o1FSN8_pp_o?&amp;modestbranding=1&amp;rel=0&amp;start=482&amp;end=497" id="Eine-kleine-ii-4-3"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">15.2.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span><div className="autopermalink" data-description="Figure 15.2.1: A Section, Second Movement, Eine kleine Nachtmusik"><a href="#Eine-kleine-ii-4" title="Copy heading and permalink for Figure 15.2.1: A Section, Second Movement, Eine kleine Nachtmusik" aria-label="Copy heading and permalink for Figure 15.2.1: A Section, Second Movement, Eine kleine Nachtmusik">🔗</a></div></figcaption></figure><div className="para" id="Eine-kleine-ii-5">Notice how Mozart expresses the various musical elements:<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="table table-like" id="Eine-kleine-ii-6"><figcaption><span className="type">Table</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">15.2.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>A Section, Second Movement, <span className="booktitle">Eine kleine Nachtmusik</span><div className="autopermalink" data-description="Table 15.2.2: A Section, Second Movement, Eine kleine Nachtmusik"><a href="#Eine-kleine-ii-6" title="Copy heading and permalink for Table 15.2.2: A Section, Second Movement, Eine kleine Nachtmusik" aria-label="Copy heading and permalink for Table 15.2.2: A Section, Second Movement, Eine kleine Nachtmusik">🔗</a></div></figcaption><div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="c t b1 r1 l1 t1 lines"><em className="emphasis">Harmony</em></td>
<td className="l t b1 r1 l0 t1"><div className="para" id="Eine-kleine-ii-6-2-3-2-1">The key is C major<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-6-2-3-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
<tr>
<td className="c t b1 r1 l1 t0 lines"><em className="emphasis">Rhythm</em></td>
<td className="l t b1 r1 l0 t0"><div className="para" id="Eine-kleine-ii-6-2-4-2-1">The 8th note is most common rhythmic value, though the phrase begins with quarter-note values<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-6-2-4-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
<tr>
<td className="c t b1 r1 l1 t0 lines"><em className="emphasis">Texture</em></td>
<td className="l t b1 r1 l0 t0"><div className="para" id="Eine-kleine-ii-6-2-5-2-1">The top two instruments are grouped together against a simple bass part<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-6-2-5-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
<tr>
<td className="c t b1 r1 l1 t0 lines"><em className="emphasis">Articulation</em></td>
<td className="l t b1 r1 l0 t0"><div className="para" id="Eine-kleine-ii-6-2-6-2-1">Generally legato<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-6-2-6-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
<tr>
<td className="c t b1 r1 l1 t0 lines"><em className="emphasis">Dynamics</em></td>
<td className="l t b1 r1 l0 t0 lines">Soft</td>
</tr>
<tr>
<td className="c t b1 r1 l1 t0 lines"><em className="emphasis">Register</em></td>
<td className="l t b1 r1 l0 t0"><div className="para" id="Eine-kleine-ii-6-2-8-2-1">Neither extremely high nor low<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-6-2-8-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
</table></div></figure><div className="para" id="Eine-kleine-ii-7">Here is the beginning of the second section (the B section):<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-7" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="Eine-kleine-ii-8"><div className="image-box"><img src="/theory/external/images/unit3/contrast-eine-3-b-idea.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/o1FSN8_pp_o?&amp;modestbranding=1&amp;rel=0&amp;start=594&amp;end=613" id="Eine-kleine-ii-8-3"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">15.2.3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>B Section, Second Movement, <span className="booktitle">Eine kleine Nachtmusik</span><div className="autopermalink" data-description="Figure 15.2.3"><a href="#Eine-kleine-ii-8" title="Copy heading and permalink for Figure 15.2.3" aria-label="Copy heading and permalink for Figure 15.2.3">🔗</a></div></figcaption></figure><div className="para" id="Eine-kleine-ii-9">Here are the most noticeable differences:<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-9" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="table table-like" id="Eine-kleine-ii-10"><figcaption><span className="type">Table</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">15.2.4<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>B Section, Second Movement, <span className="booktitle">Eine kleine Nachtmusik</span><div className="autopermalink" data-description="Table 15.2.4: B Section, Second Movement, Eine kleine Nachtmusik"><a href="#Eine-kleine-ii-10" title="Copy heading and permalink for Table 15.2.4: B Section, Second Movement, Eine kleine Nachtmusik" aria-label="Copy heading and permalink for Table 15.2.4: B Section, Second Movement, Eine kleine Nachtmusik">🔗</a></div></figcaption><div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="c t b1 r1 l1 t1 lines"><em className="emphasis">Rhythm</em></td>
<td className="l t b1 r1 l0 t1"><div className="para" id="Eine-kleine-ii-10-2-3-2-1">8th notes are the most common rhythmic value, with some 16th-note runs<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-10-2-3-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
<tr>
<td className="c t b1 r1 l1 t0 lines"><em className="emphasis">Texture</em></td>
<td className="l t b1 r1 l0 t0"><div className="para" id="Eine-kleine-ii-10-2-4-2-1">All four voices move in the same rhythm at the beginning of each subphrase<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-10-2-4-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
<tr>
<td className="c t b1 r1 l1 t0 lines"><em className="emphasis">Articulation</em></td>
<td className="l t b1 r1 l0 t0"><div className="para" id="Eine-kleine-ii-10-2-5-2-1">Four staccato notes start each subphrase<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-10-2-5-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
</table></div></figure><div className="para" id="Eine-kleine-ii-11">Now, look at the beginning of the next contrasting section (the C section):<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-11" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="Eine-kleine-ii-12"><div className="image-box"><img src="/theory/external/images/unit3/contrast-eine-3-c-idea.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/o1FSN8_pp_o?&amp;modestbranding=1&amp;rel=0&amp;start=680&amp;end=693" id="Eine-kleine-ii-12-3"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">15.2.5<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>C Section, Second Movement, <span className="booktitle">Eine kleine Nachtmusik</span><div className="autopermalink" data-description="Figure 15.2.5"><a href="#Eine-kleine-ii-12" title="Copy heading and permalink for Figure 15.2.5" aria-label="Copy heading and permalink for Figure 15.2.5">🔗</a></div></figcaption></figure><div className="para" id="Eine-kleine-ii-13">The following elements are noticeably changed:<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-13" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="table table-like" id="Eine-kleine-ii-14"><figcaption><span className="type">Table</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">15.2.6<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>C Section, Second Movement, <span className="booktitle">Eine kleine Nachtmusik</span><div className="autopermalink" data-description="Table 15.2.6: C Section, Second Movement, Eine kleine Nachtmusik"><a href="#Eine-kleine-ii-14" title="Copy heading and permalink for Table 15.2.6: C Section, Second Movement, Eine kleine Nachtmusik" aria-label="Copy heading and permalink for Table 15.2.6: C Section, Second Movement, Eine kleine Nachtmusik">🔗</a></div></figcaption><div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="c t b1 r1 l1 t1 lines"><em className="emphasis">Harmony</em></td>
<td className="l t b1 r1 l0 t1"><div className="para" id="Eine-kleine-ii-14-2-3-2-1">This section begins in C minor<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-14-2-3-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
<tr>
<td className="c t b1 r1 l1 t0 lines"><em className="emphasis">Rhythm</em></td>
<td className="l t b1 r1 l0 t0"><div className="para" id="Eine-kleine-ii-14-2-4-2-1">The accompaniment moves in 16th notes and the ornamentation of the second melody note (the turn) in the outer parts sounds as four 32nd notes<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-14-2-4-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
<tr>
<td className="c t b1 r1 l1 t0 lines"><em className="emphasis">Texture</em></td>
<td className="l t b1 r1 l0 t0"><div className="para" id="Eine-kleine-ii-14-2-5-2-1">The middle two parts (Violin II and Viola) are paired together and the Violin I and Cello/Bass part engage in imitation<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-14-2-5-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
<tr>
<td className="c t b1 r1 l1 t0 lines"><em className="emphasis">Articulation</em></td>
<td className="l t b1 r1 l0 t0"><div className="para" id="Eine-kleine-ii-14-2-6-2-1">The middle parts are played in a “separated” manner (more staccato than legato) and the motive in the outer voices starts with a staccato note<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-14-2-6-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
</table></div></figure><div className="para" id="Eine-kleine-ii-15">Listen to how Mozart puts the entire form together, including transitional material to smooth out the changes from one section to another.<div className="autopermalink" data-description="Paragraph"><a href="#Eine-kleine-ii-15" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="Eine-kleine-ii-16"><div className="image-box"><img src="/theory/external/images/unit3/contrast-eine-ABACA-diagram.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/o1FSN8_pp_o?&amp;modestbranding=1&amp;rel=0&amp;start=482&amp;end=814" id="Eine-kleine-ii-16-3"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">15.2.7<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Formal Diagram of Second Movement, <span className="booktitle">Eine kleine Nachtmusik</span><div className="autopermalink" data-description="Figure 15.2.7"><a href="#Eine-kleine-ii-16" title="Copy heading and permalink for Figure 15.2.7" aria-label="Copy heading and permalink for Figure 15.2.7">🔗</a></div></figcaption></figure><div className="autopermalink" data-description="Section 15.2: Mozart, Eine kleine Nachtmusik, K. 525, II."><a href="#Eine-kleine-ii" title="Copy heading and permalink for Section 15.2: Mozart, Eine kleine Nachtmusik, K. 525, II." aria-label="Copy heading and permalink for Section 15.2: Mozart, Eine kleine Nachtmusik, K. 525, II.">🔗</a></div></section></div>
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

export default Ch15EineKleineIiPage;
