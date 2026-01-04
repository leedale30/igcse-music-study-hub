import React from 'react';
import { Link } from 'react-router-dom';

const Ch12AabaformPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 12</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">AABA Form</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 12
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Pop/Popular Form
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          AABA Form
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="AABAForm"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">12.2</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">AABA Form</span>
</h2>
<div className="para" id="AABAForm-2">The AABA form is associated with the hits from Broadway musicals in the 1930s and remained one of the most popular forms of popular music until the 1950s, when Rock ‘n’ Roll became popular. Each section (A or B) is typically 8 measures long. The A sections contain the primary melody we associate with the song while the B section provides contrast and is often called the “bridge” or “middle eight.”<div className="autopermalink" data-description="Paragraph"><a href="#AABAForm-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="table table-like" id="AABAForm-3"><figcaption><span className="type">Table</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">12.2.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>George Gershwin, “I Got Rhythm” (1930)<div className="autopermalink" data-description='Table 12.2.1: George Gershwin, "I Got Rhythm" (1930)'><a href="#AABAForm-3" title='Copy heading and permalink for Table 12.2.1: George Gershwin, "I Got Rhythm" (1930)' aria-label='Copy heading and permalink for Table 12.2.1: George Gershwin, "I Got Rhythm" (1930)'>🔗</a></div></figcaption><div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="l m b0 r0 l0 t0 lines">0:00–0:10</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Introduction</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines"> </td>
<td className="l m b0 r0 l0 t0 lines"></td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">0:10–0:18</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">A section (A1)</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">0:18–0:26</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">A section (A2)</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">0:26–0:35</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">B section</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">0:35–0:45</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">A section (A3)</em>, 10 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines"> </td>
<td className="l m b0 r0 l0 t0 lines"></td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">0:45–0:53</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">A section</em>, 8 bars (instrumental shout chorus)</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">0:53–1:02</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Introduction</em>, 8 bars (shout chorus continues)</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines"> </td>
<td className="l m b0 r0 l0 t0 lines"></td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">1:02–1:10</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">A section (A1)</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">1:10–1:19</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">A section (A2)</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">1:19–1:27</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">B section</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">1:27–1:35</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">A section (A3)</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines"> </td>
<td className="l m b0 r0 l0 t0 lines"></td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">1:35–1:54</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Coda</em>, 12 bars</td>
</tr>
</table></div></figure><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/BjT6k8BGjEM?&amp;modestbranding=1&amp;rel=0" id="AABAForm-4"></iframe></div>
</div>
<div className="para" id="AABAForm-5">It is common for one or more of the A sections to be instrumental, and it is also common to eliminate an A section on the repeat of the entire AABA form (AABAABA, for example).<div className="autopermalink" data-description="Paragraph"><a href="#AABAForm-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="AABAForm-6">Other well known songs with AABA form include “Over the Rainbow” from <span className="booktitle">The Wizard of Oz</span> as well as many famous songs from the <span className="booktitle">Great American Songbook</span> by George Gershwin (“Let’s Call the Whole Thing Off,” “Someone to Watch Over Me”), Cole Porter (“Anything Goes,” “Love for Sale,” “I Get A Kick Out of You”), Irving Berlin (“Blue Skies,” “Puttin’ on the Ritz”), and Jerome Kern (“The Way You Look Tonight,” “Smoke Gets In Your Eyes”).<div className="autopermalink" data-description="Paragraph"><a href="#AABAForm-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="AABAForm-7">The AABA form continued to be dominant into the 1960s (including Beatles songs like “Yesterday,” “Norwegian Wood,” and “<a className="external" href="https://youtu.be/A_MjCqQoLLA" target="_blank">Hey Jude</a>,” to name a few). The AABA form is less common in the present day but can be found in songs like The Cure’s “<a className="external" href="https://youtu.be/0thnAQKadpo" target="_blank">Friday, I’m in Love</a>” (1992) and Norah Jones’s “<a className="external" href="https://youtu.be/tO4dxvguQDk" target="_blank">Don’t Know Why</a>” (1999).<div className="autopermalink" data-description="Paragraph"><a href="#AABAForm-7" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="AABAForm-8">A note on terminology: the entire 32-bar AABA form is sometimes called a “refrain” or “chorus,” and some AABA songs are preceded by a “verse.” This means a song like “<a className="external" href="https://youtu.be/gjUXG-Fz8pc" target="_blank">Someone To Watch Over Me</a>” begins with a verse and is followed by a “refrain” (which could also be called a “chorus”). Other synonymous terms you may encounter for “verse” in the context of AABA form are “prelude” and “introduction.”<div className="autopermalink" data-description="Paragraph"><a href="#AABAForm-8" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Section 12.2: AABA Form"><a href="#AABAForm" title="Copy heading and permalink for Section 12.2: AABA Form" aria-label="Copy heading and permalink for Section 12.2: AABA Form">🔗</a></div></section></div>
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

export default Ch12AabaformPage;
