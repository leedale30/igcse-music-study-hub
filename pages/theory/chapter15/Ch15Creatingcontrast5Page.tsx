import React from 'react';
import { Link } from 'react-router-dom';

const Ch15Creatingcontrast5Page: React.FC = () => {
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
        <span className="text-gray-700 dark:text-gray-300">“Rude” by MAGIC!</span>
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
          “Rude” by MAGIC!
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="CreatingContrast-5"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">15.3</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">“Rude” by MAGIC!</span>
</h2>
<div className="para" id="CreatingContrast-5-2">Now we will examine contrast in recent popular music. Here is the musical example of the texture from the reggae section of this song, as seen in the previous chapter.<div className="autopermalink" data-description="Paragraph"><a href="#CreatingContrast-5-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit3/texture-reggae-rude.svg" role="img" className="contained" alt="" /></div>
<div className="para" id="CreatingContrast-5-4">In Verse 1 there is no bass drum, snare drum, or electric bass. All we hear are the voice part and the two guitar parts from the top two staves in the example above. There are fewer voices occurring on the vertical plane, creating a light texture.<div className="autopermalink" data-description="Paragraph"><a href="#CreatingContrast-5-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="CreatingContrast-5-5"><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/PIh2xe4jnpk?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=8" id="CreatingContrast-5-5-2"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">15.3.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Verse 1 of “Rude”<div className="autopermalink" data-description="Figure 15.3.1"><a href="#CreatingContrast-5-5" title="Copy heading and permalink for Figure 15.3.1" aria-label="Copy heading and permalink for Figure 15.3.1">🔗</a></div></figcaption></figure><div className="para" id="CreatingContrast-5-6">The bass guitar and drum groove enter in Verse 2, thickening the texture and adding the backbeat of the snare drum.<div className="autopermalink" data-description="Paragraph"><a href="#CreatingContrast-5-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="CreatingContrast-5-7"><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/PIh2xe4jnpk?&amp;modestbranding=1&amp;rel=0&amp;start=14&amp;end=22" id="CreatingContrast-5-7-2"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">15.3.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Verse 2 of “Rude”<div className="autopermalink" data-description="Figure 15.3.2"><a href="#CreatingContrast-5-7" title="Copy heading and permalink for Figure 15.3.2" aria-label="Copy heading and permalink for Figure 15.3.2">🔗</a></div></figcaption></figure><div className="para" id="CreatingContrast-5-8">In the pre-chorus, the guitars and bass have legato half notes and quarter notes while the drummer plays cross-stick eighth notes (if one is counting in a slow <span className="process-math">\\(\\begin{smallmatrix}4\\\\4\\end{smallmatrix}\\)</span>). Without the snare drum backbeat, the texture lightens.<div className="autopermalink" data-description="Paragraph"><a href="#CreatingContrast-5-8" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="CreatingContrast-5-9"><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/PIh2xe4jnpk?&amp;modestbranding=1&amp;rel=0&amp;start=27&amp;end=34" id="CreatingContrast-5-9-2"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">15.3.3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Pre-Chorus of “Rude”<div className="autopermalink" data-description="Figure 15.3.3"><a href="#CreatingContrast-5-9" title="Copy heading and permalink for Figure 15.3.3" aria-label="Copy heading and permalink for Figure 15.3.3">🔗</a></div></figcaption></figure><div className="para" id="CreatingContrast-5-10">The chorus has approximately the same accompaniment as Verse 2 but the voice parts are in a higher register, repeating a 2-measure subphrase containing the “hook.”<div className="autopermalink" data-description="Paragraph"><a href="#CreatingContrast-5-10" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="CreatingContrast-5-11"><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/PIh2xe4jnpk?&amp;modestbranding=1&amp;rel=0&amp;start=41&amp;end=52" id="CreatingContrast-5-11-2"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">15.3.4<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Chorus of “Rude”<div className="autopermalink" data-description="Figure 15.3.4"><a href="#CreatingContrast-5-11" title="Copy heading and permalink for Figure 15.3.4" aria-label="Copy heading and permalink for Figure 15.3.4">🔗</a></div></figcaption></figure><div className="para" id="CreatingContrast-5-12">The post-chorus emphasizes a (3+3+2)+(3+3+2) rhythm on all instruments (guitars, bass, and the bass drum, snare drum, and hi-hat of the drum set).<div className="autopermalink" data-description="Paragraph"><a href="#CreatingContrast-5-12" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="CreatingContrast-5-13"><div className="image-box"><img src="/theory/external/images/unit3/contrast-3-3-2-in-8ths.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/PIh2xe4jnpk?&amp;modestbranding=1&amp;rel=0&amp;start=54&amp;end=62" id="CreatingContrast-5-13-3"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">15.3.5<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Post-Chorus of “Rude”<div className="autopermalink" data-description="Figure 15.3.5"><a href="#CreatingContrast-5-13" title="Copy heading and permalink for Figure 15.3.5" aria-label="Copy heading and permalink for Figure 15.3.5">🔗</a></div></figcaption></figure><div className="para" id="CreatingContrast-5-14">Below is a formal diagram of the first five sections of “Rude.”<div className="autopermalink" data-description="Paragraph"><a href="#CreatingContrast-5-14" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="CreatingContrast-5-15"><div className="image-box"><img src="/theory/external/images/unit3/contrast-rude-diagram.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/PIh2xe4jnpk?&amp;modestbranding=1&amp;rel=0" id="CreatingContrast-5-15-3"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">15.3.6<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>First 5 Sections of “Rude”<div className="autopermalink" data-description="Figure 15.3.6"><a href="#CreatingContrast-5-15" title="Copy heading and permalink for Figure 15.3.6" aria-label="Copy heading and permalink for Figure 15.3.6">🔗</a></div></figcaption></figure><div className="para" id="CreatingContrast-5-16">This five-section unit repeats again with Verse 3, Verse 4, the Pre-Chorus, Chorus, and Post-Chorus.<div className="autopermalink" data-description="Paragraph"><a href="#CreatingContrast-5-16" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="CreatingContrast-5-17">When you listen to the entire piece, you hear how the musicians designate the form using the elements of articulation, rhythm, texture, and dynamics. One element that changes very little during entire song is the chord progression, which we examined in the chapter on harmonic progression, and is a rotation of the 50s progression.<div className="autopermalink" data-description="Paragraph"><a href="#CreatingContrast-5-17" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit2/harmony-I-vi-IV-V-rotated-rude.svg" role="img" className="contained" alt="" /></div>
<div className="para" id="CreatingContrast-5-19">While you are likely aware of successful songs in the which very few musical elements change, it is worth considering how you can articulate the form of your compositions and arrangements using the elements of music.<div className="autopermalink" data-description="Paragraph"><a href="#CreatingContrast-5-19" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description='Section 15.3: "Rude" by MAGIC!'><a href="#CreatingContrast-5" title='Copy heading and permalink for Section 15.3: "Rude" by MAGIC!' aria-label='Copy heading and permalink for Section 15.3: "Rude" by MAGIC!'>🔗</a></div></section></div>
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

export default Ch15Creatingcontrast5Page;
