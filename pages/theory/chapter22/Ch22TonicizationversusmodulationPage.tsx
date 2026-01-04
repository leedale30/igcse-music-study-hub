import React from 'react';
import { Link } from 'react-router-dom';

const Ch22TonicizationversusmodulationPage: React.FC = () => {
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
        <span className="text-gray-700 dark:text-gray-300">Tonicization versus Modulation</span>
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
          Tonicization versus Modulation
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="TonicizationVersusModulation"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.2</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Tonicization versus Modulation</span>
</h2>
<div className="para" id="TonicizationVersusModulation-2">Studying modulation will require us to distinguish between <a href="Tonicization.html" className="internal" title="Section 17.2: Tonicization">tonicization</a>, which we studied recently, and modulation. Tonicization, involving secondary chords, can be as short as two chords (<span className="process-math">\\(\\left.\\text{V}\\middle/\\text{V}\\right.\\)</span> to <span className="process-math">\\(\\left.\\text{V}\\right.\\)</span>, for example) but can sometimes encompass several measures as in the following example.<div className="autopermalink" data-description="Paragraph"><a href="#TonicizationVersusModulation-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit5/mod-ton-vs-mod-abschied-A.svg" role="img" className="contained" alt="" /></div>
<div className="image-box"><img src="/theory/external/images/unit5/mod-ton-vs-mod-abschied-B.svg" role="img" className="contained" alt="" /></div>
<div className="image-box"><img src="/theory/external/images/unit5/mod-ton-vs-mod-abschied-C.svg" role="img" className="contained" alt="" /></div>
<figure className="figure figure-like" id="TonicizationVersusModulation-7"><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/Wod-JellQ88?&amp;modestbranding=1&amp;rel=0&amp;start=26&amp;end=41" id="TonicizationVersusModulation-7-2"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.2.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Schubert, <span className="booktitle">Schwanegesang</span>, D. 957, “Abschied” (1828)<div className="autopermalink" data-description="Figure 22.2.1"><a href="#TonicizationVersusModulation-7" title="Copy heading and permalink for Figure 22.2.1" aria-label="Copy heading and permalink for Figure 22.2.1">🔗</a></div></figcaption></figure><div className="para" id="TonicizationVersusModulation-8">Below is a reduction showing the underlying diatonic progression of the example above.<div className="autopermalink" data-description="Paragraph"><a href="#TonicizationVersusModulation-8" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="TonicizationVersusModulation-9"><div className="image-box"><img src="/theory/external/images/unit5/mod-ton-vs-mod-abschied-reduction.svg" role="img" className="contained" alt="" /></div>
<div className="audio-box"><audio id="TonicizationVersusModulation-9-3" className="audio" controls=""><source src="/theory/external/images/unit5/Abschied-harmonic-reduction.mp3" type="audio/mp3" /></source>Your browser does not support the &lt;audio&gt; tag.</audio></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.2.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Reduction of Harmonies from “Abschied”<div className="autopermalink" data-description="Figure 22.2.2"><a href="#TonicizationVersusModulation-9" title="Copy heading and permalink for Figure 22.2.2" aria-label="Copy heading and permalink for Figure 22.2.2">🔗</a></div></figcaption></figure><div className="para" id="TonicizationVersusModulation-10">A modulation to a new key requires an eventual cadence to confirm that new key. This cadence will often (though not always) have the following cadential formula:<div className="autopermalink" data-description="Paragraph"><a href="#TonicizationVersusModulation-10" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="table table-like" id="TonicizationVersusModulation-11"><figcaption><span className="type">Table</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.2.3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Cadential Formula to Establish a Key<div className="autopermalink" data-description="Table 22.2.3: Cadential Formula to Establish a Key"><a href="#TonicizationVersusModulation-11" title="Copy heading and permalink for Table 22.2.3: Cadential Formula to Establish a Key" aria-label="Copy heading and permalink for Table 22.2.3: Cadential Formula to Establish a Key">🔗</a></div></figcaption><div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(\\left.\\text{ii}^{6}\\right.\\)</span></td>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(\\left.\\text{I}^{6}_{4}\\right.\\)</span></td>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(\\left.\\text{V}\\right.\\)</span></td>
<td className="l m b0 r0 l0 t0 lines"><span className="process-math">\\(\\left.\\text{I}\\right.\\)</span></td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Pre-Dom.</td>
<td className="l m b0 r0 l0 t0 lines">Dom.</td>
<td className="l m b0 r0 l0 t0 lines">Dom.</td>
<td className="l m b0 r0 l0 t0 lines">Ton.</td>
</tr>
</table></div></figure><figure className="figure figure-like" id="TonicizationVersusModulation-12"><div className="audio-box"><audio id="TonicizationVersusModulation-12-2" className="audio" controls=""><source src="/theory/external/images/unit5/cadential-formula-for-mod-audio.mp3" type="audio/mp3" /></source>Your browser does not support the &lt;audio&gt; tag.</audio></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.2.4<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Audio Realization of Cadential Formula to Establish a Key<div className="autopermalink" data-description="Figure 22.2.4"><a href="#TonicizationVersusModulation-12" title="Copy heading and permalink for Figure 22.2.4" aria-label="Copy heading and permalink for Figure 22.2.4">🔗</a></div></figcaption></figure><div className="para" id="TonicizationVersusModulation-13">In his book <span className="booktitle">Form in Tonal Music</span>, Douglass Green defines a <span className="process-math">\\(\\left.\\text{V}\\right.\\)</span>–<span className="process-math">\\(\\left.\\text{I}\\right.\\)</span> authentic cadence with a pre-dominant prefix as a “full cadence.”<div className="autopermalink" data-description="Paragraph"><a href="#TonicizationVersusModulation-13" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="TonicizationVersusModulation-14">The cadential formula above is found in the following example.<div className="autopermalink" data-description="Paragraph"><a href="#TonicizationVersusModulation-14" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="TonicizationVersusModulation-15"><div className="image-box"><img src="/theory/external/images/unit5/mod-ton-vs-mod-bach-eng4-sarabande.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/9WQbN91tpWI?&amp;modestbranding=1&amp;rel=0&amp;start=13&amp;end=39" id="TonicizationVersusModulation-15-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.2.5<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>J.S. Bach, English Suite No. 4 in F Major, BWV 809, Sarabande (ca. 1715)<div className="autopermalink" data-description="Figure 22.2.5"><a href="#TonicizationVersusModulation-15" title="Copy heading and permalink for Figure 22.2.5" aria-label="Copy heading and permalink for Figure 22.2.5">🔗</a></div></figcaption></figure><div className="para" id="TonicizationVersusModulation-16">Notice that this cadential formula establishes a key more strongly than the simple <span className="process-math">\\(\\left.\\text{V}\\right.\\)</span>–<span className="process-math">\\(\\left.\\text{I}\\right.\\)</span> of an <a href="cadences.html#AuthenticCadence" className="xref" data-knowl="./knowl/xref/AuthenticCadence.html" data-reveal-label="Reveal" data-close-label="Close" title="Item 1">authentic cadence</a>. This means there will be ambiguity between a tonicization and a short modulation ending in an authentic cadence, especially in music with fast harmonic rhythm, like Bach chorales (usually in quarter-note <a href="09-02-HarmonicRhythm.html" className="internal" title="Section 9.2: Harmonic Rhythm">harmonic rhythm</a>).<div className="autopermalink" data-description="Paragraph"><a href="#TonicizationVersusModulation-16" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="TonicizationVersusModulation-17"><div className="image-box"><img src="/theory/external/images/unit5/mod-ton-vs-mod-ermuntre.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/tVJy904MiIY?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=7" id="TonicizationVersusModulation-17-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.2.6<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>J.S. Bach, <span className="booktitle">Christmas Oratorio</span>, BWV 248, “Ermuntre dich, mein schwacher Geist,” (Chorale) (1734)<div className="autopermalink" data-description="Figure 22.2.6"><a href="#TonicizationVersusModulation-17" title="Copy heading and permalink for Figure 22.2.6" aria-label="Copy heading and permalink for Figure 22.2.6">🔗</a></div></figcaption></figure><div className="para" id="TonicizationVersusModulation-18">To determine pivot chords and the new key, listen to the music to hear the cadence in the new key, then work backward from the cadence to see if the dominant in the new key was approached by pre-dominant chords (<span className="process-math">\\(\\left.\\text{ii}\\right.\\)</span> or <span className="process-math">\\(\\left.\\text{IV}\\right.\\)</span>) in the new key. Then, analyze from the beginning of the phrase until you reach the new key. Finally, look for a logical pivot point. Sometimes two successive chords could logically be pivot chords. If so, include two chords on either side of your pivot bracket.<div className="autopermalink" data-description="Paragraph"><a href="#TonicizationVersusModulation-18" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="TonicizationVersusModulation-19"><div className="image-box"><img src="/theory/external/images/unit5/mod-ton-vs-mod-little-wanderer.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/Qy8NLd7d6VE?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=9" id="TonicizationVersusModulation-19-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.2.7<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Robert Schumann, Album for the Young, Op. 68, No. 17, “Little Morning Wanderer” (1848)<div className="autopermalink" data-description="Figure 22.2.7"><a href="#TonicizationVersusModulation-19" title="Copy heading and permalink for Figure 22.2.7" aria-label="Copy heading and permalink for Figure 22.2.7">🔗</a></div></figcaption></figure><div className="para" id="TonicizationVersusModulation-20">Before we start analyzing and writing modulations, we will examine key relationships and pivot chords.<div className="autopermalink" data-description="Paragraph"><a href="#TonicizationVersusModulation-20" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Section 22.2: Tonicization versus Modulation"><a href="#TonicizationVersusModulation" title="Copy heading and permalink for Section 22.2: Tonicization versus Modulation" aria-label="Copy heading and permalink for Section 22.2: Tonicization versus Modulation">🔗</a></div></section></div>
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

export default Ch22TonicizationversusmodulationPage;
