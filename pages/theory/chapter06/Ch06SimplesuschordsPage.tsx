import React from 'react';
import { Link } from 'react-router-dom';

const Ch06SimplesuschordsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 06</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Simple “Sus” Chords</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 06
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Triads
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Simple “Sus” Chords
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="SimpleSusChords"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">6.5</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Simple “Sus” Chords</span>
</h2>
<div className="para" id="SimpleSusChords-2">Common in popular music are “sus” chords, with “sus” being a shortening of “suspended,” a term we will study in the chapter on <a href="NonChordTones.html" className="internal" title="Chapter 10: Non-Chord Tones">non-chord tones</a>.<div className="autopermalink" data-description="Paragraph"><a href="#SimpleSusChords-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="SimpleSusChords-3">The two basic sus chords are the sus4 and sus2 chords. In the <dfn className="terminology">sus4</dfn> chord (also labeled simply as “sus”), a perfect 4th replaces the 3rd of the chord. In the <dfn className="terminology">sus2</dfn> chord (sometimes called “sus9”), a major 2nd replaces the 3rd of the chord. Both of these sus chords have a perfect 5th from the root to the fifth.<div className="autopermalink" data-description="Paragraph"><a href="#SimpleSusChords-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/lead-sheet-sus-chords.svg" role="img" className="contained" /></div>
<div className="para" id="SimpleSusChords-5">Here is a musical example with a sus4 chord.<div className="autopermalink" data-description="Paragraph"><a href="#SimpleSusChords-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="SimpleSusChords-6"><div className="image-box"><img src="/theory/external/images/unit1/lead-sheet-sus4-hard-to-say-im-sorry-B.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/kNlVIMrUU6w?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=13" id="SimpleSusChords-6-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">6.5.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Peter Cetera and David Foster, “Hard to Say I’m Sorry”<div className="autopermalink" data-description="Figure 6.5.1"><a href="#SimpleSusChords-6" title="Copy heading and permalink for Figure 6.5.1" aria-label="Copy heading and permalink for Figure 6.5.1">🔗</a></div></figcaption></figure><div className="para" id="SimpleSusChords-7">Here is a musical example with a sus2 chord.<div className="autopermalink" data-description="Paragraph"><a href="#SimpleSusChords-7" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="SimpleSusChords-8"><div className="image-box"><img src="/theory/external/images/unit1/leadsheet-sus2-love-song.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/qi7Yh16dA0w?&amp;modestbranding=1&amp;rel=0&amp;start=7&amp;end=16" id="SimpleSusChords-8-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">6.5.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Sara Bareilles, “Love Song”<div className="autopermalink" data-description="Figure 6.5.2"><a href="#SimpleSusChords-8" title="Copy heading and permalink for Figure 6.5.2" aria-label="Copy heading and permalink for Figure 6.5.2">🔗</a></div></figcaption></figure><div className="para" id="SimpleSusChords-9">We will not invert sus chords in this text. In a later chapter, there is <a href="ChordLabels.html#sus-chord-examples" className="xref" data-knowl="./knowl/xref/sus-chord-examples.html" data-reveal-label="Reveal" data-close-label="Close" title="Figure 31.4.6">a section on more sophisticated sus chords</a> like <span className="process-math">\\(\\left.\\text{C}^{9}\\text{sus}\\right.\\)</span> and <span className="process-math">\\(\\left.\\text{C}^{7}\\text{sus}\\left(\\text{♭9}\\right)\\right.\\)</span>.<div className="autopermalink" data-description="Paragraph"><a href="#SimpleSusChords-9" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description='Section 6.5: Simple "Sus" Chords'><a href="#SimpleSusChords" title='Copy heading and permalink for Section 6.5: Simple "Sus" Chords' aria-label='Copy heading and permalink for Section 6.5: Simple "Sus" Chords'>🔗</a></div></section></div>
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

export default Ch06SimplesuschordsPage;
