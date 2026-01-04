import React from 'react';
import { Link } from 'react-router-dom';

const Ch10SuspensionPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 10</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Suspension</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 10
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Non-Chord Tones
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Suspension
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="Suspension"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">10.9</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Suspension</span>
</h2>
<div className="para" id="Suspension-2">Suspensions are accented non-chord tones occurring on downbeats. A <dfn className="terminology">suspension</dfn> is approached by the same note and resolves down by step. A suspension is made up of a preparation, suspension, and resolution. Sometimes the preparation is tied to the suspension.<div className="autopermalink" data-description="Paragraph"><a href="#Suspension-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="Suspension-3"><div className="image-box"><img src="/theory/external/images/unit2/NCT-sus-basic.svg" role="img" className="contained" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">10.9.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Introductory Suspension example with and without tie<div className="autopermalink" data-description="Figure 10.9.1"><a href="#Suspension-3" title="Copy heading and permalink for Figure 10.9.1" aria-label="Copy heading and permalink for Figure 10.9.1">🔗</a></div></figcaption></figure><div className="para" id="Suspension-4">Suspensions are classified by numbers (9-8, 7-6, 4-3, 2-3, and sometimes 6-5) that specify the interval distance of the suspended note and its resolution to the bass note<div className="autopermalink" data-description="Paragraph"><a href="#Suspension-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="sus-all-numbers"><div className="image-box"><img src="/theory/external/images/unit2/NCT-sus-all-numbers.svg" role="img" className="contained" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">10.9.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Examples of the 9-8, 7-6, 4-3, 2-3, and 6-5 suspensions<div className="autopermalink" data-description="Figure 10.9.2"><a href="#sus-all-numbers" title="Copy heading and permalink for Figure 10.9.2" aria-label="Copy heading and permalink for Figure 10.9.2">🔗</a></div></figcaption></figure><div className="para" id="Suspension-6">In the example above, the notes in the 4-3 suspension are an 11th and 10th higher than the bass. Reduce all intervals larger than an octave to the numbers 7-6, 4-3, and 6-5.<div className="autopermalink" data-description="Paragraph"><a href="#Suspension-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="Suspension-7">Here is an example with a 4-3 suspension.<div className="autopermalink" data-description="Paragraph"><a href="#Suspension-7" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="Suspension-8"><div className="image-box"><img src="/theory/external/images/unit2/NCT-sus-4-3-barber.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/b8G9vRqq3RI?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=15" id="Suspension-8-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">10.9.3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Samuel Barber, <span className="booktitle">Adagio for Strings</span> (1936)<div className="autopermalink" data-description="Figure 10.9.3"><a href="#Suspension-8" title="Copy heading and permalink for Figure 10.9.3" aria-label="Copy heading and permalink for Figure 10.9.3">🔗</a></div></figcaption></figure><div className="para" id="Suspension-9">Here is an example with 7-6 and 9-8 suspensions.<div className="autopermalink" data-description="Paragraph"><a href="#Suspension-9" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="Suspension-10"><div className="image-box"><img src="/theory/external/images/unit2/NCT-sus-7-6-hornpipe.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/HawWrnUGH_0?&amp;modestbranding=1&amp;rel=0&amp;start=7&amp;end=13" id="Suspension-10-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">10.9.4<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>George Frideric Handel, Suite No. 2 in D Major, HWV 349: II. Alla Hornpipe (1717)<div className="autopermalink" data-description="Figure 10.9.4"><a href="#Suspension-10" title="Copy heading and permalink for Figure 10.9.4" aria-label="Copy heading and permalink for Figure 10.9.4">🔗</a></div></figcaption></figure><div className="para" id="Suspension-11">The 2-3 suspension is the “bass suspension” and is measured against an upper voice. Again, you may encounter the literal intervals 10-9 but should label the suspension as 2-3.<div className="autopermalink" data-description="Paragraph"><a href="#Suspension-11" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="Suspension-12"><div className="image-box"><img src="/theory/external/images/unit2/NCT-sus-2-3-bach.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/VKNcvMcGlvI?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=8" id="Suspension-12-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">10.9.5<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Bach, J.S., Chorale 238, “Liebster Jesu, wir sind hier,” BWV 373<div className="autopermalink" data-description="Figure 10.9.5"><a href="#Suspension-12" title="Copy heading and permalink for Figure 10.9.5" aria-label="Copy heading and permalink for Figure 10.9.5">🔗</a></div></figcaption></figure><div className="para" id="Suspension-13">When a chord is inverted, you will sometimes encounter non-standard suspension numbers like 5-4 or 3-2.<div className="autopermalink" data-description="Paragraph"><a href="#Suspension-13" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="Suspension-14"><div className="image-box"><img src="/theory/external/images/unit2/NCT-sus-3-2-and-5-4.svg" role="img" className="contained" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">10.9.6<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Non-standard suspension numbers because of inverted chords<div className="autopermalink" data-description="Figure 10.9.6"><a href="#Suspension-14" title="Copy heading and permalink for Figure 10.9.6" aria-label="Copy heading and permalink for Figure 10.9.6">🔗</a></div></figcaption></figure><div className="para" id="Suspension-15">You will sometimes encounter decorations of suspensions where other notes occur before the resolution, as in the following example.<div className="autopermalink" data-description="Paragraph"><a href="#Suspension-15" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="Suspension-16"><div className="image-box"><img src="/theory/external/images/unit2/NCT-sus-decorated-bach.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/fTwkVsECg9w?&amp;modestbranding=1&amp;rel=0&amp;start=13&amp;end=25" id="Suspension-16-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">10.9.7<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Bach, J.S., French Suite No. 1 in D Minor, BWV 812, Sarabande (1722)<div className="autopermalink" data-description="Figure 10.9.7"><a href="#Suspension-16" title="Copy heading and permalink for Figure 10.9.7" aria-label="Copy heading and permalink for Figure 10.9.7">🔗</a></div></figcaption></figure><div className="para" id="Suspension-17">The “ret.” in the tenor part in the second measure is a retardation, which is covered in the next section.<div className="autopermalink" data-description="Paragraph"><a href="#Suspension-17" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Section 10.9: Suspension"><a href="#Suspension" title="Copy heading and permalink for Section 10.9: Suspension" aria-label="Copy heading and permalink for Section 10.9: Suspension">🔗</a></div></section></div>
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

export default Ch10SuspensionPage;
