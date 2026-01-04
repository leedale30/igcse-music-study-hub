import React from 'react';
import { Link } from 'react-router-dom';

const Ch14ArpeggiatedaccompanimentsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 14</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Arpeggiated Accompaniments</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 14
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Texture & Accompaniment
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Arpeggiated Accompaniments
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="ArpeggiatedAccompaniments"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">14.3</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Arpeggiated Accompaniments</span>
</h2>
<section className="subsection" id="Arpeggios"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">14.3.1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Arpeggios</span>
</h3>
<div className="para" id="Arpeggios-2">One way to express chords rhythmically is through arpeggios in one part and a bass line in octaves in a lower part, as in the following example from Beethoven’s <span className="booktitle">Moonlight Sonata</span>.<div className="autopermalink" data-description="Paragraph"><a href="#Arpeggios-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="Arpeggios-3"><div className="image-box"><img src="/theory/external/images/unit3/texture-arpeggios-moonlight.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/4Tr0otuiQuU?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=23" id="Arpeggios-3-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">14.3.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Ludwig van Beethoven, <span className="booktitle">Moonlight Sonata</span>, Op. 27, No. 2, I (1802)<div className="autopermalink" data-description="Figure 14.3.1"><a href="#Arpeggios-3" title="Copy heading and permalink for Figure 14.3.1" aria-label="Copy heading and permalink for Figure 14.3.1">🔗</a></div></figcaption></figure><div className="para" id="Arpeggios-4">The next example has descending arpeggios.<div className="autopermalink" data-description="Paragraph"><a href="#Arpeggios-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="Arpeggios-5"><div className="image-box"><img src="/theory/external/images/unit3/texture-arpeggios-alicia-keys.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/Ju8Hr50Ckwk?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=23" id="Arpeggios-5-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">14.3.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Alicia Keys, “If I Ain’t Got You” (2004)<div className="autopermalink" data-description="Figure 14.3.2"><a href="#Arpeggios-5" title="Copy heading and permalink for Figure 14.3.2" aria-label="Copy heading and permalink for Figure 14.3.2">🔗</a></div></figcaption></figure><div className="para" id="Arpeggios-6">Notice that in both the Beethoven and Alicia Keys examples there is the harmonious interval of a tenth (an octave plus a third) between the bass (lowest) voice and the soprano (highest) voice.<div className="autopermalink" data-description="Paragraph"><a href="#Arpeggios-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="Arpeggios-7">The following examples have arpeggios that ascend and descend through a chord.<div className="autopermalink" data-description="Paragraph"><a href="#Arpeggios-7" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="Arpeggios-8"><div className="image-box"><img src="/theory/external/images/unit3/texture-arpeggios-colour.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/cWkXmx-0phc?&amp;modestbranding=1&amp;rel=0&amp;start=4&amp;end=14" id="Arpeggios-8-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">14.3.3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>James Pankow, “Colour My World” (1970)<div className="autopermalink" data-description="Figure 14.3.3"><a href="#Arpeggios-8" title="Copy heading and permalink for Figure 14.3.3" aria-label="Copy heading and permalink for Figure 14.3.3">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="Arpeggios-9"><div className="image-box"><img src="/theory/external/images/unit3/texture-arpeggios-rihanna.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/zA-upjFaHvw?&amp;modestbranding=1&amp;rel=0&amp;start=31&amp;end=42" id="Arpeggios-9-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">14.3.4<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Fred Ball, Joseph Angel, and Robyn Fenty, “Love on the Brain” (2016)<div className="autopermalink" data-description="Figure 14.3.4"><a href="#Arpeggios-9" title="Copy heading and permalink for Figure 14.3.4" aria-label="Copy heading and permalink for Figure 14.3.4">🔗</a></div></figcaption></figure><div className="para" id="Arpeggios-10">Notice in the above example that there is also an organ playing block chords to create a sense of legato in the texture.<div className="autopermalink" data-description="Paragraph"><a href="#Arpeggios-10" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="Arpeggios-11">The next two examples are from more recent popular music.<div className="autopermalink" data-description="Paragraph"><a href="#Arpeggios-11" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="Arpeggios-12"><div className="image-box"><img src="/theory/external/images/unit3/textures-alberti-adele.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/hLQl3WQQoQ0?&amp;modestbranding=1&amp;rel=0&amp;start=73&amp;end=81" id="Arpeggios-12-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">14.3.5<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Adele Adkins and Dan Wilson, “Someone Like You” (2011)<div className="autopermalink" data-description="Figure 14.3.5"><a href="#Arpeggios-12" title="Copy heading and permalink for Figure 14.3.5" aria-label="Copy heading and permalink for Figure 14.3.5">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="Arpeggios-13"><div className="image-box"><img src="/theory/external/images/unit3/texture-alberti-one-republic.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/qHm9MG9xw1o?&amp;modestbranding=1&amp;rel=0&amp;start=8&amp;end=24" id="Arpeggios-13-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">14.3.6<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Ryan Tedder, “Secrets” (2009)<div className="autopermalink" data-description="Figure 14.3.6"><a href="#Arpeggios-13" title="Copy heading and permalink for Figure 14.3.6" aria-label="Copy heading and permalink for Figure 14.3.6">🔗</a></div></figcaption></figure><div className="para" id="Arpeggios-14">Below is an example in <span className="process-math">\\(\\begin{smallmatrix}4\\\\4\\end{smallmatrix}\\)</span> with arpeggios in sixteenth notes.<div className="autopermalink" data-description="Paragraph"><a href="#Arpeggios-14" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="Arpeggios-15"><div className="image-box"><img src="/theory/external/images/unit3/texture-arpeggios-no-scrubs.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/FrLequ6dUdM?&amp;modestbranding=1&amp;rel=0&amp;start=8&amp;end=19" id="Arpeggios-15-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">14.3.7<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Kevin Briggs, Kandi Burress, Tameka Cottle, Lisa Lopes, “No Scrubs” (1999)<div className="autopermalink" data-description="Figure 14.3.7"><a href="#Arpeggios-15" title="Copy heading and permalink for Figure 14.3.7" aria-label="Copy heading and permalink for Figure 14.3.7">🔗</a></div></figcaption></figure><div className="autopermalink" data-description="Subsection 14.3.1: Arpeggios"><a href="#Arpeggios" title="Copy heading and permalink for Subsection 14.3.1: Arpeggios" aria-label="Copy heading and permalink for Subsection 14.3.1: Arpeggios">🔗</a></div></section><section className="subsection" id="AlbertiBass"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">14.3.2</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Alberti Bass</span>
</h3>
<div className="para" id="AlbertiBass-2">Alberti bass accompaniment patterns involve arpeggios that do not arpeggiate chords in a simple upward or downward motion, but in a “low–high–middle–high” pattern as you can see in the examples below.<div className="autopermalink" data-description="Paragraph"><a href="#AlbertiBass-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="AlbertiBass-3"><div className="image-box"><img src="/theory/external/images/unit3/texture-alberti-k545.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/5NkzTTkqTB4?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=08" id="AlbertiBass-3-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">14.3.8<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Mozart, Piano Sonata K. 545, I (1788)<div className="autopermalink" data-description="Figure 14.3.8"><a href="#AlbertiBass-3" title="Copy heading and permalink for Figure 14.3.8" aria-label="Copy heading and permalink for Figure 14.3.8">🔗</a></div></figcaption></figure><div className="para" id="AlbertiBass-4">The next example uses the same Alberti pattern as in the Mozart example above, but transposed to E minor and in a lower register.<div className="autopermalink" data-description="Paragraph"><a href="#AlbertiBass-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="AlbertiBass-5"><div className="image-box"><img src="/theory/external/images/unit3/texture-alberti-pipeline.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/L6zR7qJ9frA?&amp;modestbranding=1&amp;rel=0&amp;start=13&amp;end=21" id="AlbertiBass-5-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">14.3.9<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Brian Carman and Bob Spickard, “Pipeline” (1962)<div className="autopermalink" data-description="Figure 14.3.9"><a href="#AlbertiBass-5" title="Copy heading and permalink for Figure 14.3.9" aria-label="Copy heading and permalink for Figure 14.3.9">🔗</a></div></figcaption></figure><div className="autopermalink" data-description="Subsection 14.3.2: Alberti Bass"><a href="#AlbertiBass" title="Copy heading and permalink for Subsection 14.3.2: Alberti Bass" aria-label="Copy heading and permalink for Subsection 14.3.2: Alberti Bass">🔗</a></div></section><div className="autopermalink" data-description="Section 14.3: Arpeggiated Accompaniments"><a href="#ArpeggiatedAccompaniments" title="Copy heading and permalink for Section 14.3: Arpeggiated Accompaniments" aria-label="Copy heading and permalink for Section 14.3: Arpeggiated Accompaniments">🔗</a></div></section></div>
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

export default Ch14ArpeggiatedaccompanimentsPage;
