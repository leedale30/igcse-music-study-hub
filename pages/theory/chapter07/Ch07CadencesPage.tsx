import React from 'react';
import { Link } from 'react-router-dom';

const Ch07CadencesPage: React.FC = () => {
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
        <span className="text-gray-700 dark:text-gray-300">Cadences</span>
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
          Cadences
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="cadences"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.4</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Cadences</span>
</h2>
<section className="introduction" id="cadences-2"><div className="para logical" id="cadences-2-1">
<div className="para">We’ve been studying harmony—triads and chords. A <dfn className="terminology">cadence</dfn> is a harmonic arrival point, a harmonic moment of stasis. A cadence can be compared to a comma or period in written language—the ear gets a moment to process a short passage of music, then the music continues. We will differentiate between four basic cadences now, adding <a href="13-01-PerfectAuthenticCadence.html" className="internal" title="Section 13.1: The Perfect Authentic Cadence">more specificity in a later chapter</a>.</div>
<ol className="decimal" id="cadences-2-1-6">
<li id="AuthenticCadence">
<div className="para" id="AuthenticCadence-1">
<dfn className="terminology">Authentic Cadence</dfn> (AC): a phrase ending with the chords <span className="process-math">\\(\\left.\\text{V}\\right.\\)</span>–<span className="process-math">\\(\\left.\\text{I}\\right.\\)</span><div className="autopermalink" data-description="Paragraph"><a href="#AuthenticCadence-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item 1"><a href="#AuthenticCadence" title="Copy heading and permalink for Item 1" aria-label="Copy heading and permalink for Item 1">🔗</a></div>
</li>
<li id="PlagalCadence">
<div className="para" id="PlagalCadence-1">
<dfn className="terminology">Plagal Cadence</dfn> (PC): a phrase ending with the chords <span className="process-math">\\(\\left.\\text{IV}\\right.\\)</span>–<span className="process-math">\\(\\left.\\text{I}\\right.\\)</span><div className="autopermalink" data-description="Paragraph"><a href="#PlagalCadence-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item 2"><a href="#PlagalCadence" title="Copy heading and permalink for Item 2" aria-label="Copy heading and permalink for Item 2">🔗</a></div>
</li>
<li id="DeceptiveCadence">
<div className="para" id="DeceptiveCadence-1">
<dfn className="terminology">Deceptive Cadence</dfn> (DC): a phrase ending with the chords <span className="process-math">\\(\\left.\\text{V}\\right.\\)</span>–<span className="process-math">\\(\\left.\\text{vi}\\right.\\)</span><div className="autopermalink" data-description="Paragraph"><a href="#DeceptiveCadence-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item 3"><a href="#DeceptiveCadence" title="Copy heading and permalink for Item 3" aria-label="Copy heading and permalink for Item 3">🔗</a></div>
</li>
<li id="cadences-2-1-6-4">
<div className="para" id="cadences-2-1-6-4-1">
<dfn className="terminology">Half Cadence</dfn> (HC): a phrase ending on the <span className="process-math">\\(\\left.\\text{V}\\right.\\)</span> chord<div className="autopermalink" data-description="Paragraph"><a href="#cadences-2-1-6-4-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item 4"><a href="#cadences-2-1-6-4" title="Copy heading and permalink for Item 4" aria-label="Copy heading and permalink for Item 4">🔗</a></div>
</li>
</ol>
<div className="autopermalink" data-description="Paragraph"><a href="#cadences-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></section><section className="subsection" id="AuthenticCadenceExamples"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.4.1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Examples of Authentic Cadences</span>
</h3>
<figure className="figure figure-like" id="AuthenticCadenceExamples-3"><div className="image-box"><img src="/theory/external/images/unit2/cadences-auth-cad-star-spangled.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/LGvW6jHUHiY?&amp;modestbranding=1&amp;rel=0&amp;start=77&amp;end=93" id="AuthenticCadenceExamples-3-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.4.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Francis Scott Key and John Stafford Smith, “Star-Spangled Banner”<div className="autopermalink" data-description="Figure 7.4.1"><a href="#AuthenticCadenceExamples-3" title="Copy heading and permalink for Figure 7.4.1" aria-label="Copy heading and permalink for Figure 7.4.1">🔗</a></div></figcaption></figure><div className="para" id="AuthenticCadenceExamples-4">In the example above, the notes surrounded by parentheses are <a href="NonChordTones.html" className="internal" title="Chapter 10: Non-Chord Tones">non-chord tones</a>, which will be studied later. Also, there are <a href="SeventhChords.html" className="internal" title="Chapter 8: Seventh Chords">seventh chords</a> in this example, which we will study in the next chapter.<div className="autopermalink" data-description="Paragraph"><a href="#AuthenticCadenceExamples-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="AuthenticCadenceExamples-5">Here is another example ending with an authentic cadence.<div className="autopermalink" data-description="Paragraph"><a href="#AuthenticCadenceExamples-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="AuthenticCadenceExamples-6"><div className="image-box"><img src="/theory/external/images/unit2/cadences-auth-cad-i-want-to-hold.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/jenWdylTtzs?&amp;modestbranding=1&amp;rel=0&amp;start=21&amp;end=29" id="AuthenticCadenceExamples-6-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.4.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Lennon-McCartney, “I Want to Hold Your Hand”<div className="autopermalink" data-description="Figure 7.4.2"><a href="#AuthenticCadenceExamples-6" title="Copy heading and permalink for Figure 7.4.2" aria-label="Copy heading and permalink for Figure 7.4.2">🔗</a></div></figcaption></figure><div className="autopermalink" data-description="Subsection 7.4.1: Examples of Authentic Cadences"><a href="#AuthenticCadenceExamples" title="Copy heading and permalink for Subsection 7.4.1: Examples of Authentic Cadences" aria-label="Copy heading and permalink for Subsection 7.4.1: Examples of Authentic Cadences">🔗</a></div></section><section className="subsection" id="PlagalCadenceExamples"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.4.2</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Examples of Plagal Cadences</span>
</h3>
<div className="para" id="PlagalCadenceExamples-2">Here are examples with plagal cadences.<div className="autopermalink" data-description="Paragraph"><a href="#PlagalCadenceExamples-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="PlagalCadenceExamples-3"><div className="image-box"><img src="/theory/external/images/unit2/cadences-plagal-cad-amazing-grace.svg" role="img" className="contained" alt='Plagal cadence during "Amen" at end of "Amazing Grace"' /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.4.3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span><div className="autopermalink" data-description="Figure 7.4.3"><a href="#PlagalCadenceExamples-3" title="Copy heading and permalink for Figure 7.4.3" aria-label="Copy heading and permalink for Figure 7.4.3">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="PlagalCadenceExamples-4"><div className="image-box"><img src="/theory/external/images/unit2/cadences-plagal-cad-just-give-me.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/OpQFFLBMEPI?&amp;modestbranding=1&amp;rel=0&amp;start=19&amp;end=30" id="PlagalCadenceExamples-4-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.4.4<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Pink, Bhasker, and Ruess, “Just Give Me a Reason”<div className="autopermalink" data-description="Figure 7.4.4"><a href="#PlagalCadenceExamples-4" title="Copy heading and permalink for Figure 7.4.4" aria-label="Copy heading and permalink for Figure 7.4.4">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="PlagalCadenceExamples-5"><div className="image-box"><img src="/theory/external/images/unit2/cadences-plagal-cad-take-me-to-church.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/PVjiKRfKpPI?&amp;modestbranding=1&amp;rel=0&amp;start=47&amp;end=58" id="PlagalCadenceExamples-5-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.4.5<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Hozer-Byrne, “Take Me to Church”<div className="autopermalink" data-description="Figure 7.4.5"><a href="#PlagalCadenceExamples-5" title="Copy heading and permalink for Figure 7.4.5" aria-label="Copy heading and permalink for Figure 7.4.5">🔗</a></div></figcaption></figure><div className="autopermalink" data-description="Subsection 7.4.2: Examples of Plagal Cadences"><a href="#PlagalCadenceExamples" title="Copy heading and permalink for Subsection 7.4.2: Examples of Plagal Cadences" aria-label="Copy heading and permalink for Subsection 7.4.2: Examples of Plagal Cadences">🔗</a></div></section><section className="subsection" id="DeceptiveCadenceExamples"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.4.3</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Examples of Deceptive Cadences</span>
</h3>
<figure className="figure figure-like" id="DeceptiveCadenceExamples-3"><div className="image-box"><img src="/theory/external/images/unit2/cadences-deceptive-cad-voi-che.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/53geSxS8-Ak?&amp;modestbranding=1&amp;rel=0&amp;start=142&amp;end=152" id="DeceptiveCadenceExamples-3-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.4.6<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Mozart, <span className="booktitle">The Marriage of Figaro</span>, “Voi che sapete”<div className="autopermalink" data-description="Figure 7.4.6"><a href="#DeceptiveCadenceExamples-3" title="Copy heading and permalink for Figure 7.4.6" aria-label="Copy heading and permalink for Figure 7.4.6">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="DeceptiveCadenceExamples-4"><div className="image-box"><img src="/theory/external/images/unit2/cadences-deceptive-cad-true-colors.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/LPn0KFlbqX8?&amp;modestbranding=1&amp;rel=0&amp;start=60&amp;end=75" id="DeceptiveCadenceExamples-4-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.4.7<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Kelly and Steinberg, “True Colors”<div className="autopermalink" data-description="Figure 7.4.7"><a href="#DeceptiveCadenceExamples-4" title="Copy heading and permalink for Figure 7.4.7" aria-label="Copy heading and permalink for Figure 7.4.7">🔗</a></div></figcaption></figure><div className="para" id="DeceptiveCadenceExamples-5">The following example, from the prelude to Act I of Richard Wagner’s opera <span className="booktitle">Tristan und Isolde</span>, is arguably one of the most famous deceptive cadences in the history of classical music.<div className="autopermalink" data-description="Paragraph"><a href="#DeceptiveCadenceExamples-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="DeceptiveCadenceExamples-6"><div className="image-box"><img src="/theory/external/images/unit2/cadences-deceptive-cad-tristan.svg" role="img" className="contained" alt="Deceptive cadence at bar 17 of prelude to Act One of Tristan und Isolde by Richard Wagner" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/ghjz6D34HPQ?&amp;modestbranding=1&amp;rel=0&amp;start=110&amp;end=125" id="DeceptiveCadenceExamples-6-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.4.8<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Wagner, <span className="booktitle">Tristan und Isolde</span>, Prelude to Act I<div className="autopermalink" data-description="Figure 7.4.8"><a href="#DeceptiveCadenceExamples-6" title="Copy heading and permalink for Figure 7.4.8" aria-label="Copy heading and permalink for Figure 7.4.8">🔗</a></div></figcaption></figure><div className="para" id="DeceptiveCadenceExamples-7">A deceptive cadence means <span className="process-math">\\(\\left.\\text{V}\\right.\\)</span> did not go to <span className="process-math">\\(\\left.\\text{I}\\right.\\)</span>. This means that “<span className="process-math">\\(\\left.\\text{V}\\right.\\)</span> to not-<span className="process-math">\\(\\left.\\text{I}\\right.\\)</span>” is technically a more correct description for a deceptive cadence than <span className="process-math">\\(\\left.\\text{V}\\right.\\)</span>-<span className="process-math">\\(\\left.\\text{vi}\\right.\\)</span>, which is the most common realization of “<span className="process-math">\\(\\left.\\text{V}\\right.\\)</span> to not-<span className="process-math">\\(\\left.\\text{I}\\right.\\)</span>.”<div className="autopermalink" data-description="Paragraph"><a href="#DeceptiveCadenceExamples-7" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="DeceptiveCadenceExamples-8">In the example below, <span className="process-math">\\(\\left.\\text{V}\\right.\\)</span> goes to <span className="process-math">\\(\\left.\\text{IV}\\middle/\\text{3rd}\\right.\\)</span>.<div className="autopermalink" data-description="Paragraph"><a href="#DeceptiveCadenceExamples-8" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="DeceptiveCadenceExamples-9"><div className="image-box"><img src="/theory/external/images/unit2/cadences-deceptive-cad-ave-verum.svg" role="img" className="contained" alt='Deceptive cadence near end of "Ave verum corpus" by Mozart' /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/1Qxrru15jfo?&amp;modestbranding=1&amp;rel=0&amp;start=113&amp;end=142" id="DeceptiveCadenceExamples-9-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.4.9<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Mozart, <span className="booktitle">Ave Verum Corpus</span>, K. 618<div className="autopermalink" data-description="Figure 7.4.9"><a href="#DeceptiveCadenceExamples-9" title="Copy heading and permalink for Figure 7.4.9" aria-label="Copy heading and permalink for Figure 7.4.9">🔗</a></div></figcaption></figure><div className="autopermalink" data-description="Subsection 7.4.3: Examples of Deceptive Cadences"><a href="#DeceptiveCadenceExamples" title="Copy heading and permalink for Subsection 7.4.3: Examples of Deceptive Cadences" aria-label="Copy heading and permalink for Subsection 7.4.3: Examples of Deceptive Cadences">🔗</a></div></section><section className="subsection" id="HalfCadenceExamples"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.4.4</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Examples of Half Cadences</span>
</h3>
<figure className="figure figure-like" id="HalfCadenceExamples-3"><div className="image-box"><img src="/theory/external/images/unit2/cadences-half-cad-eine-kleine.svg" role="img" className="contained" alt="Half cadence at end of transition in first movement of Eine Kleine Nachtmusik, K. 525, by Mozart" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/TpPuLwtDQrY?&amp;modestbranding=1&amp;rel=0&amp;start=43&amp;end=51" id="HalfCadenceExamples-3-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.4.10<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Mozart, <span className="booktitle">Eine kleine Nachtmusik</span>, K. 525, I.<div className="autopermalink" data-description="Figure 7.4.10"><a href="#HalfCadenceExamples-3" title="Copy heading and permalink for Figure 7.4.10" aria-label="Copy heading and permalink for Figure 7.4.10">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="HalfCadenceExamples-4"><div className="image-box"><img src="/theory/external/images/unit2/cadences-half-cad-thinking-out-loud.svg" role="img" className="contained" alt='Half cadence at end of prechorus of "Thinking Out Loud" by Ed Sheeran' /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/lp-EO5I60KA?&amp;modestbranding=1&amp;rel=0&amp;start=68&amp;end=80" id="HalfCadenceExamples-4-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.4.11<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Sheeran and Wadge, “Thinking Out Loud”<div className="autopermalink" data-description="Figure 7.4.11"><a href="#HalfCadenceExamples-4" title="Copy heading and permalink for Figure 7.4.11" aria-label="Copy heading and permalink for Figure 7.4.11">🔗</a></div></figcaption></figure><div className="para" id="HalfCadenceExamples-5">You may encounter chords with no thirds in rock and pop music. If you encounter a chord that has only a root and fifth, label it with a “5” after the root in lead sheet labeling (e.g., <span className="process-math">\\(\\left.\\text{B}^{5}\\right.\\)</span>, as in the next example).<div className="autopermalink" data-description="Paragraph"><a href="#HalfCadenceExamples-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="HalfCadenceExamples-6">Additionally, you may encounter incomplete chords.<div className="autopermalink" data-description="Paragraph"><a href="#HalfCadenceExamples-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<article className="definition definition-like" id="IncompleteChords"><h4 className="heading">
<span className="type">Definition</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.4.12</span><span className="period heading-divison-mark heading-divison-mark__period">.</span>
</h4>
<div className="para" id="IncompleteChords-2-1">
<dfn className="terminology">Incomplete chords</dfn> are chords containing only the root and third but no fifth.<div className="autopermalink" data-description="Paragraph"><a href="#IncompleteChords-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Definition 7.4.12"><a href="#IncompleteChords" title="Copy heading and permalink for Definition 7.4.12" aria-label="Copy heading and permalink for Definition 7.4.12">🔗</a></div></article><figure className="figure figure-like" id="HalfCadenceExamples-8"><div className="image-box"><img src="/theory/external/images/unit2/cadences-half-cad-love-yourself.svg" role="img" className="contained" alt='Half cadence at end of prechorus of "Love Yourself" by Justin Bieber' /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/oyEuk8j8imI?&amp;modestbranding=1&amp;rel=0&amp;start=57&amp;end=69" id="HalfCadenceExamples-8-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.4.13<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Bieber, Blanco, and Sheeran, “Love Yourself”<div className="autopermalink" data-description="Figure 7.4.13"><a href="#HalfCadenceExamples-8" title="Copy heading and permalink for Figure 7.4.13" aria-label="Copy heading and permalink for Figure 7.4.13">🔗</a></div></figcaption></figure><div className="autopermalink" data-description="Subsection 7.4.4: Examples of Half Cadences"><a href="#HalfCadenceExamples" title="Copy heading and permalink for Subsection 7.4.4: Examples of Half Cadences" aria-label="Copy heading and permalink for Subsection 7.4.4: Examples of Half Cadences">🔗</a></div></section><div className="autopermalink" data-description="Section 7.4: Cadences"><a href="#cadences" title="Copy heading and permalink for Section 7.4: Cadences" aria-label="Copy heading and permalink for Section 7.4: Cadences">🔗</a></div></section></div>
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

export default Ch07CadencesPage;
