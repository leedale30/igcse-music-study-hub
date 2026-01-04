import React from 'react';
import { Link } from 'react-router-dom';

const Ch13PeriodformPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 13</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">The Period</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 13
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Phrases in Combination
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          The Period
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="PeriodForm"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.3</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">The Period</span>
</h2>
<section className="introduction" id="PeriodForm-2"><div className="para" id="PeriodForm-2-1">In music, a <dfn className="terminology">period</dfn> consists of at least two phrases with the final phrase ending in a more conclusive cadence than the first phrase.<div className="autopermalink" data-description="Paragraph"><a href="#PeriodForm-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></section><section className="subsection" id="ConclusivenessOfCadence"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.3.1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Conclusiveness of Cadence</span>
</h3>
<div className="para" id="ConclusivenessOfCadence-2">Because period form involves “more conclusive” and “less conclusive” cadences, it is important to distinguish between inconclusive and conclusive cadences. Conclusive cadences end on the tonic chord, while inconclusive cadences do not.<div className="autopermalink" data-description="Paragraph"><a href="#ConclusivenessOfCadence-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="c m b3 r1 l0 t0 lines"><em className="emphasis">Inconclusive Cadences</em></td>
<td className="c m b3 r0 l0 t0 lines"><em className="emphasis">Conclusive Cadences</em></td>
</tr>
<tr>
<td className="c m b0 r1 l0 t0 lines">Deceptive Cadence (<span className="process-math">\\(\\left.\\text{V}\\right.\\)</span>–<span className="process-math">\\(\\left.\\text{vi}\\right.\\)</span>)</td>
<td className="c m b0 r0 l0 t0 lines">Authentic Cadence (<span className="process-math">\\(\\left.\\text{V}\\right.\\)</span>–<span className="process-math">\\(\\left.\\text{I}\\right.\\)</span>)</td>
</tr>
<tr>
<td className="c m b0 r1 l0 t0 lines">Half Cadence (ends on <span className="process-math">\\(\\left.\\text{V}\\right.\\)</span>)</td>
<td className="c m b0 r0 l0 t0 lines">Plagal Cadence (<span className="process-math">\\(\\left.\\text{IV}\\right.\\)</span>–<span className="process-math">\\(\\left.\\text{I}\\right.\\)</span>)</td>
</tr>
</table></div>
<div className="para" id="ConclusivenessOfCadence-4">In addition, the <a href="13-01-PerfectAuthenticCadence.html" className="internal" title="Section 13.1: The Perfect Authentic Cadence">perfect authentic cadence</a> (PAC) is more conclusive than the imperfect authentic cadence (IAC). While the plagal cadence (PC) occurs less frequently than the other three cadences listed in the table above, it will sometimes occur in root position at the end of a phrase after an inverted imperfect authentic cadence (IAC) has concluded a previous phrase, with the understanding that a root position PC could be considered more conclusive than an inverted IAC.<div className="autopermalink" data-description="Paragraph"><a href="#ConclusivenessOfCadence-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="ConclusivenessOfCadence-5">Generally, a period will either contain a phrase ending in a half cadence (HC) followed by a phrase ending in an authentic cadence (IAC or PAC), or it will contain a phrase ending in an IAC following by a phrase ending in a PAC.<div className="autopermalink" data-description="Paragraph"><a href="#ConclusivenessOfCadence-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Subsection 13.3.1: Conclusiveness of Cadence"><a href="#ConclusivenessOfCadence" title="Copy heading and permalink for Subsection 13.3.1: Conclusiveness of Cadence" aria-label="Copy heading and permalink for Subsection 13.3.1: Conclusiveness of Cadence">🔗</a></div></section><section className="subsection" id="PeriodExamples"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.3.2</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Examples of the “Less Conclusive-More Conclusive” Cadential Formula</span>
</h3>
<div className="para" id="PeriodExamples-2">In the first example, a HC concludes the first phrase and a PAC concludes the second phrase, making a period.<div className="autopermalink" data-description="Paragraph"><a href="#PeriodExamples-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="PeriodExamples-3"><div className="image-box"><img src="/theory/external/images/unit3/phrases-period-K331.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/vp_h649sZ9A?&amp;modestbranding=1&amp;rel=0&amp;start=3&amp;end=25" id="PeriodExamples-3-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.3.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Mozart, Piano Sonata K. 331, I<div className="autopermalink" data-description="Figure 13.3.1"><a href="#PeriodExamples-3" title="Copy heading and permalink for Figure 13.3.1" aria-label="Copy heading and permalink for Figure 13.3.1">🔗</a></div></figcaption></figure><div className="para" id="PeriodExamples-4">Here is a formal diagram of the above example.<div className="autopermalink" data-description="Paragraph"><a href="#PeriodExamples-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="PeriodExamples-5"><div className="image-box"><img src="/theory/external/images/unit3/phrases-period-diagram-par-HC-PAC.svg" role="img" className="contained" alt="" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.3.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Diagram of Mozart, K. 331, I, mm. 1-8<div className="autopermalink" data-description="Figure 13.3.2"><a href="#PeriodExamples-5" title="Copy heading and permalink for Figure 13.3.2" aria-label="Copy heading and permalink for Figure 13.3.2">🔗</a></div></figcaption></figure><div className="para" id="PeriodExamples-6">Notice that one or more phrases within a period can be a <a href="13-02-SentenceStructure.html" className="internal" title="Section 13.2: The Sentence">sentence</a>, as in the example above, since sentences are phrases with specific melodic structure.<div className="autopermalink" data-description="Paragraph"><a href="#PeriodExamples-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="PeriodExamples-7">In the next example, the first phrase concludes with an IAC and the second phrase concludes with a PAC.<div className="autopermalink" data-description="Paragraph"><a href="#PeriodExamples-7" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="PeriodExamples-8"><div className="image-box"><img src="/theory/external/images/unit3/phrases-period-haydn-pno.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/hmu-6FJT5Bw?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=8" id="PeriodExamples-8-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.3.3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Joseph Haydn, Piano Sonata in F Major, Hob. XVI:9, III. Scherzo<div className="autopermalink" data-description="Figure 13.3.3"><a href="#PeriodExamples-8" title="Copy heading and permalink for Figure 13.3.3" aria-label="Copy heading and permalink for Figure 13.3.3">🔗</a></div></figcaption></figure><div className="para" id="PeriodExamples-9">In the next example, the first phrase ends with an IAC and is followed by a second phrase ending with a PAC.<div className="autopermalink" data-description="Paragraph"><a href="#PeriodExamples-9" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="PeriodExamples-10"><div className="image-box"><img src="/theory/external/images/unit3/phrases-period-fur-elise.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/GwcyH-aWUc8?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=13" id="PeriodExamples-10-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.3.4<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Beethoven, Bagatelle in A minor, WoO 59, “Für Elise”<div className="autopermalink" data-description="Figure 13.3.4"><a href="#PeriodExamples-10" title="Copy heading and permalink for Figure 13.3.4" aria-label="Copy heading and permalink for Figure 13.3.4">🔗</a></div></figcaption></figure><div className="para" id="PeriodExamples-11">Another example with a less conclusive cadence followed by a more conclusive cadence is “Lean on Me” by Bill Withers.<div className="autopermalink" data-description="Paragraph"><a href="#PeriodExamples-11" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="PeriodExamples-12"><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/fOZ-MySzAac?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=27" id="PeriodExamples-12-2"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.3.5<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>“Lean on Me” (1972) by Bill Withers<div className="autopermalink" data-description="Figure 13.3.5"><a href="#PeriodExamples-12" title="Copy heading and permalink for Figure 13.3.5" aria-label="Copy heading and permalink for Figure 13.3.5">🔗</a></div></figcaption></figure><div className="autopermalink" data-description='Subsection 13.3.2: Examples of the "Less Conclusive-More Conclusive" Cadential Formula'><a href="#PeriodExamples" title='Copy heading and permalink for Subsection 13.3.2: Examples of the "Less Conclusive-More Conclusive" Cadential Formula' aria-label='Copy heading and permalink for Subsection 13.3.2: Examples of the "Less Conclusive-More Conclusive" Cadential Formula'>🔗</a></div></section><section className="subsection" id="AntecedentsAndConsequents"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.3.3</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Antecedents and Consequents</span>
</h3>
<div className="para" id="AntecedentsAndConsequents-2">In a period, the phrase ending with the less conclusive cadence is called the “<dfn className="terminology">antecedent</dfn>” and the phrase ending with the more conclusive cadence is called the “<dfn className="terminology">consequent</dfn>.” These can be thought of as being in a “question and answer” relationship.<div className="autopermalink" data-description="Paragraph"><a href="#AntecedentsAndConsequents-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="AntecedentsAndConsequents-3"><div className="image-box"><img src="/theory/external/images/unit3/phrases-period-331-w-antecedent-consequent.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/vp_h649sZ9A?&amp;modestbranding=1&amp;rel=0&amp;start=3&amp;end=25" id="AntecedentsAndConsequents-3-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.3.6<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Antecedent and Consequent in Mozart, Piano Sonata K. 331, I<div className="autopermalink" data-description="Figure 13.3.6"><a href="#AntecedentsAndConsequents-3" title="Copy heading and permalink for Figure 13.3.6" aria-label="Copy heading and permalink for Figure 13.3.6">🔗</a></div></figcaption></figure><div className="autopermalink" data-description="Subsection 13.3.3: Antecedents and Consequents"><a href="#AntecedentsAndConsequents" title="Copy heading and permalink for Subsection 13.3.3: Antecedents and Consequents" aria-label="Copy heading and permalink for Subsection 13.3.3: Antecedents and Consequents">🔗</a></div></section><section className="subsection" id="ParallelAndContrastingPeriods"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.3.4</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Parallel and Contrasting Periods</span>
</h3>
<div className="para" id="ParallelAndContrastingPeriods-2">Periods are labeled as “parallel” or “contrasting” based on the melodic material. In a <dfn className="terminology">parallel period</dfn>, the melodies in both phrases begin similarly. In a <dfn className="terminology">contrasting period</dfn>, the phrases begin differently.<div className="autopermalink" data-description="Paragraph"><a href="#ParallelAndContrastingPeriods-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="ParallelAndContrastingPeriods-3">The three preceding examples are parallel periods.<div className="autopermalink" data-description="Paragraph"><a href="#ParallelAndContrastingPeriods-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="ParallelAndContrastingPeriods-4">The apostrophe mark (’) is called “prime” and is used to show a phrase is similar to a previous phrase but ends with a different cadence. Therefore a’ is called “a prime” and a’’ is called “a double prime.” If you are analyzing a piece that requires triple and quadruple primes, it is clearer to use <span className="process-math">\\(\\left.\\text{a}^{1}\\right.\\)</span>, <span className="process-math">\\(\\left.\\text{a}^{2}\\right.\\)</span>, <span className="process-math">\\(\\left.\\text{a}^{3}\\right.\\)</span>, and so on.<div className="autopermalink" data-description="Paragraph"><a href="#ParallelAndContrastingPeriods-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="ParallelAndContrastingPeriods-5">Below is an example of a contrasting period.<div className="autopermalink" data-description="Paragraph"><a href="#ParallelAndContrastingPeriods-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="ParallelAndContrastingPeriods-6"><div className="image-box"><img src="/theory/external/images/unit3/phrases-period-contrasting-pathetique-ii.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/SrcOcKYQX3c?&amp;modestbranding=1&amp;rel=0&amp;start=586&amp;end=624" id="ParallelAndContrastingPeriods-6-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.3.7<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Beethoven, Piano Sonata in C minor, Op. 13, (Pathétique), II<div className="autopermalink" data-description="Figure 13.3.7"><a href="#ParallelAndContrastingPeriods-6" title="Copy heading and permalink for Figure 13.3.7" aria-label="Copy heading and permalink for Figure 13.3.7">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="ParallelAndContrastingPeriods-7"><div className="image-box"><img src="/theory/external/images/unit3/phrases-period-diagram-cont-HC-PAC.svg" role="img" className="contained" alt="" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.3.8<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Formal diagram of the example above (2nd movement of Beethoven Pathétique sonata)<div className="autopermalink" data-description="Figure 13.3.8"><a href="#ParallelAndContrastingPeriods-7" title="Copy heading and permalink for Figure 13.3.8" aria-label="Copy heading and permalink for Figure 13.3.8">🔗</a></div></figcaption></figure><div className="autopermalink" data-description="Subsection 13.3.4: Parallel and Contrasting Periods"><a href="#ParallelAndContrastingPeriods" title="Copy heading and permalink for Subsection 13.3.4: Parallel and Contrasting Periods" aria-label="Copy heading and permalink for Subsection 13.3.4: Parallel and Contrasting Periods">🔗</a></div></section><section className="subsection" id="RepeatedPhrase"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.3.5</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Repeated Phrase</span>
</h3>
<div className="para" id="RepeatedPhrase-2">If you encounter a section consisting of the same phrase occurring twice, call it a “repeated phrase.”<div className="autopermalink" data-description="Paragraph"><a href="#RepeatedPhrase-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="RepeatedPhrase-3"><div className="image-box"><img src="/theory/external/images/unit3/phrases-repeated-phrase-schumann.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/Qy8NLd7d6VE?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=17" id="RepeatedPhrase-3-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.3.9<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Robert Schumann, Album for the Young, Op. 68, No. 17, “Little Morning Wanderer”<div className="autopermalink" data-description="Figure 13.3.9"><a href="#RepeatedPhrase-3" title="Copy heading and permalink for Figure 13.3.9" aria-label="Copy heading and permalink for Figure 13.3.9">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="RepeatedPhrase-4"><div className="image-box"><img src="/theory/external/images/unit3/phrases-repeated-phrase-diagram.svg" role="img" className="contained" alt="" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.3.10<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Formal diagram of the example above (“Little Morning Wanderer”)<div className="autopermalink" data-description="Figure 13.3.10"><a href="#RepeatedPhrase-4" title="Copy heading and permalink for Figure 13.3.10" aria-label="Copy heading and permalink for Figure 13.3.10">🔗</a></div></figcaption></figure><div className="para" id="RepeatedPhrase-5">In following two sections, we will examine periods containing more than two phrases.<div className="autopermalink" data-description="Paragraph"><a href="#RepeatedPhrase-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Subsection 13.3.5: Repeated Phrase"><a href="#RepeatedPhrase" title="Copy heading and permalink for Subsection 13.3.5: Repeated Phrase" aria-label="Copy heading and permalink for Subsection 13.3.5: Repeated Phrase">🔗</a></div></section><div className="autopermalink" data-description="Section 13.3: The Period"><a href="#PeriodForm" title="Copy heading and permalink for Section 13.3: The Period" aria-label="Copy heading and permalink for Section 13.3: The Period">🔗</a></div></section></div>
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

export default Ch13PeriodformPage;
