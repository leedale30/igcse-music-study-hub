import React from 'react';
import { Link } from 'react-router-dom';

const Ch22ModulationswithdiatonicpivotchordsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 22</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Modulations with Diatonic Pivot Chords</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 22
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Modulation
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Modulations with Diatonic Pivot Chords
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="ModulationsWithDiatonicPivotChords"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.4</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Modulations with Diatonic Pivot Chords</span>
</h2>
<section className="introduction" id="ModulationsWithDiatonicPivotChords-2"><div className="para" id="ModulationsWithDiatonicPivotChords-2-1">Modulations with pivot chords will be analyzed using a pivot bracket, as we’ve seen earlier in the chapter.<div className="autopermalink" data-description="Paragraph"><a href="#ModulationsWithDiatonicPivotChords-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="ModulationsWithDiatonicPivotChords-2-2">In a <dfn className="terminology">diatonic common chord modulation</dfn>, the pivot chords will be diatonic in both keys.<div className="autopermalink" data-description="Paragraph"><a href="#ModulationsWithDiatonicPivotChords-2-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="ModulationsWithDiatonicPivotChords-2-3"><div className="image-box"><img src="/theory/external/images/unit5/mod-dia-cc-ermuntre.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/tVJy904MiIY?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=7" id="ModulationsWithDiatonicPivotChords-2-3-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.4.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>J.S. Bach, <span className="booktitle">Christmas Oratorio</span>, BWV 248, “Ermuntre dich, mein schwacher Geist,” (Chorale) (1734)<div className="autopermalink" data-description="Figure 22.4.1"><a href="#ModulationsWithDiatonicPivotChords-2-3" title="Copy heading and permalink for Figure 22.4.1" aria-label="Copy heading and permalink for Figure 22.4.1">🔗</a></div></figcaption></figure></section><section className="subsection" id="DeterminingDiatonicCommonChords"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.4.1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Determining Common Chords Between Keys</span>
</h3>
<div className="para" id="DeterminingDiatonicCommonChords-2">In order to compose a diatonic common chord modulation, you need to determine which chords are diatonic—having the same root <em className="emphasis">and quality</em>—in both keys.<div className="autopermalink" data-description="Paragraph"><a href="#DeterminingDiatonicCommonChords-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="DeterminingDiatonicCommonChords-3"><div className="image-box"><img src="/theory/external/images/unit5/mod-determining-cc-w-lead-sheet.svg" role="img" className="contained" alt="" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.4.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Diatonic Common Chords in G major and D major<div className="autopermalink" data-description="Figure 22.4.2"><a href="#DeterminingDiatonicCommonChords-3" title="Copy heading and permalink for Figure 22.4.2" aria-label="Copy heading and permalink for Figure 22.4.2">🔗</a></div></figcaption></figure><div className="para" id="DeterminingDiatonicCommonChords-4">We can repeat this process with Roman numerals, aligning the roots of the chords in the two keys.<div className="autopermalink" data-description="Paragraph"><a href="#DeterminingDiatonicCommonChords-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="DeterminingDiatonicCommonChords-5"><div className="image-box"><img src="/theory/external/images/unit5/mod-determining-cc-w-RN.svg" role="img" className="contained" alt="" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.4.3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Roman Numerals for Diatonic Common Chords in G major and D major<div className="autopermalink" data-description="Figure 22.4.3"><a href="#DeterminingDiatonicCommonChords-5" title="Copy heading and permalink for Figure 22.4.3" aria-label="Copy heading and permalink for Figure 22.4.3">🔗</a></div></figcaption></figure><div className="para" id="DeterminingDiatonicCommonChords-6">If you are a composer wanting to write a diatonic common chord modulation, you need to determine the best place within a progression to pivot to the new key. To do this, you need to consider the harmonic function of the pivot chords.<div className="autopermalink" data-description="Paragraph"><a href="#DeterminingDiatonicCommonChords-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Subsection 22.4.1: Determining Common Chords Between Keys"><a href="#DeterminingDiatonicCommonChords" title="Copy heading and permalink for Subsection 22.4.1: Determining Common Chords Between Keys" aria-label="Copy heading and permalink for Subsection 22.4.1: Determining Common Chords Between Keys">🔗</a></div></section><section className="subsection" id="HarmonicFunctionsofDiatonicPivotChords"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.4.2</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Harmonic Functions of Diatonic Pivot Chords</span>
</h3>
<div className="para" id="HarmonicFunctionsofDiatonicPivotChords-2">In terms of <a href="09-04-HarmonicFunction.html" className="internal" title="Section 9.4: Harmonic Function">harmonic function</a>, composers typically do not use a pivot chord that has <a href="HarmonicFunction.html#DominantFunction" className="xref" data-knowl="./knowl/xref/DominantFunction.html" data-reveal-label="Reveal" data-close-label="Close" title="Item 2">dominant function</a> in the new key because such a modulation might sound abrupt and unconvincing. Instead, the pivot chord in the first key often has tonic or <a href="HarmonicFunction.html#TonicProlongationFunction" className="xref" data-knowl="./knowl/xref/TonicProlongationFunction.html" data-reveal-label="Reveal" data-close-label="Close" title="Item 4">tonic prolongation function</a>.<div className="autopermalink" data-description="Paragraph"><a href="#HarmonicFunctionsofDiatonicPivotChords-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="HarmonicFunctionsofDiatonicPivotChords-3">In the following example, the pivot chord simultaneously has tonic function in the first key and pre-dominant function in the second key. This creates a more seamless and less jarring progression to the second key.<div className="autopermalink" data-description="Paragraph"><a href="#HarmonicFunctionsofDiatonicPivotChords-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="HarmonicFunctionsofDiatonicPivotChords-4"><div className="image-box"><img src="/theory/external/images/unit5/mod-harm-func-of-pivots-ermuntre.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/tVJy904MiIY?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=7" id="HarmonicFunctionsofDiatonicPivotChords-4-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.4.4<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>J.S. Bach, <span className="booktitle">Christmas Oratorio</span>, BWV 248, “Ermuntre dich, mein schwacher Geist,” (Chorale) (1734)<div className="autopermalink" data-description="Figure 22.4.4"><a href="#HarmonicFunctionsofDiatonicPivotChords-4" title="Copy heading and permalink for Figure 22.4.4" aria-label="Copy heading and permalink for Figure 22.4.4">🔗</a></div></figcaption></figure><div className="para" id="HarmonicFunctionsofDiatonicPivotChords-5">The pivot chord in the first key, G, has tonic harmonic function, while in the second key, D major, the G chord has pre-dominant function.<div className="autopermalink" data-description="Paragraph"><a href="#HarmonicFunctionsofDiatonicPivotChords-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="HarmonicFunctionsofDiatonicPivotChords-6">Observe the harmonic function of the pivot chords in the following examples from Bach chorales.<div className="autopermalink" data-description="Paragraph"><a href="#HarmonicFunctionsofDiatonicPivotChords-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="HarmonicFunctionsofDiatonicPivotChords-7"><div className="image-box"><img src="/theory/external/images/unit5/mod-harm-func-of-pivots-es-ist-das-heil.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/gl4FNanCrbc?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=9" id="HarmonicFunctionsofDiatonicPivotChords-7-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.4.5<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>J.S. Bach, Chorale 4, “Es ist das Heil uns kommen her”, BWV 9<div className="autopermalink" data-description="Figure 22.4.5"><a href="#HarmonicFunctionsofDiatonicPivotChords-7" title="Copy heading and permalink for Figure 22.4.5" aria-label="Copy heading and permalink for Figure 22.4.5">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="HarmonicFunctionsofDiatonicPivotChords-8"><div className="image-box"><img src="/theory/external/images/unit5/mod-harm-func-of-pivots-freuet-euch.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/NE-uciPxYFE?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=12" id="HarmonicFunctionsofDiatonicPivotChords-8-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.4.6<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>J.S. Bach, Chorale 8, “Freuet euch, ihr Christen”, BWV 40<div className="autopermalink" data-description="Figure 22.4.6"><a href="#HarmonicFunctionsofDiatonicPivotChords-8" title="Copy heading and permalink for Figure 22.4.6" aria-label="Copy heading and permalink for Figure 22.4.6">🔗</a></div></figcaption></figure><div className="autopermalink" data-description="Subsection 22.4.2: Harmonic Functions of Diatonic Pivot Chords"><a href="#HarmonicFunctionsofDiatonicPivotChords" title="Copy heading and permalink for Subsection 22.4.2: Harmonic Functions of Diatonic Pivot Chords" aria-label="Copy heading and permalink for Subsection 22.4.2: Harmonic Functions of Diatonic Pivot Chords">🔗</a></div></section><div className="autopermalink" data-description="Section 22.4: Modulations with Diatonic Pivot Chords"><a href="#ModulationsWithDiatonicPivotChords" title="Copy heading and permalink for Section 22.4: Modulations with Diatonic Pivot Chords" aria-label="Copy heading and permalink for Section 22.4: Modulations with Diatonic Pivot Chords">🔗</a></div></section></div>
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

export default Ch22ModulationswithdiatonicpivotchordsPage;
