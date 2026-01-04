import React from 'react';
import { Link } from 'react-router-dom';

const Ch12VersechorusformPage: React.FC = () => {
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
        <span className="text-gray-700 dark:text-gray-300">Verse-Chorus Form</span>
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
          Verse-Chorus Form
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="VerseChorusForm"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">12.1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Verse-Chorus Form</span>
</h2>
<div className="para" id="VerseChorusForm-2">The <dfn className="terminology">Verse-Chorus form</dfn> is arguably the most common musical form of present day popular music and is probably familiar to most readers of this text. In Verse-Chorus form, the chorus contains the “hook”—the memorable refrain—while the verse typically contains less memorable melodic material. A clear example can be found in the 1985 song “We Are the World.”<div className="autopermalink" data-description="Paragraph"><a href="#VerseChorusForm-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="table table-like" id="VerseChorusForm-3"><figcaption><span className="type">Table</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">12.1.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Michael Jackson and Lionel Richie, “We Are The World” (1985)<div className="autopermalink" data-description='Table 12.1.1: Michael Jackson and Lionel Richie, "We Are The World" (1985)'><a href="#VerseChorusForm-3" title='Copy heading and permalink for Table 12.1.1: Michael Jackson and Lionel Richie, "We Are The World" (1985)' aria-label='Copy heading and permalink for Table 12.1.1: Michael Jackson and Lionel Richie, "We Are The World" (1985)'>🔗</a></div></figcaption><div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="l m b0 r0 l0 t0 lines">0:00–0:26</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Introduction</em>, 6 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines"> </td>
<td className="l m b0 r0 l0 t0 lines"> </td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">0:26–0:53</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Verse 1</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">0:53–1:18</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Verse 2</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">1:18–1:49</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Chorus</em>, 9 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines"> </td>
<td className="l m b0 r0 l0 t0 lines"> </td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">1:49–2:14</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Verse 3</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">2:14–2:41</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Chorus</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines"> </td>
<td className="l m b0 r0 l0 t0 lines"> </td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">2:41–3:08</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Bridge</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines"> </td>
<td className="l m b0 r0 l0 t0 lines"> </td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">3:08–3:35</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Chorus</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">3:35–4:02</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Chorus</em>, 8 bars ending with key change</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">4:02–end</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Chorus</em>, 7 times in F major with fade out</td>
</tr>
</table></div></figure><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/9AjkUyX0rVw?&amp;modestbranding=1&amp;rel=0" id="VerseChorusForm-4"></iframe></div>
</div>
<div className="para" id="VerseChorusForm-5">Common additions to the Verse-Chorus form, beside the bridge, are the pre-chorus and post-chorus.<div className="autopermalink" data-description="Paragraph"><a href="#VerseChorusForm-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="table table-like" id="VerseChorusForm-6"><figcaption><span className="type">Table</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">12.1.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Kurt Cobain, Krist Novoselic, and Dave Grohl, “Smells Like Teen Spirit” (1991)<div className="autopermalink" data-description='Table 12.1.2: Kurt Cobain, Krist Novoselic, and Dave Grohl, "Smells Like Teen Spirit" (1991)'><a href="#VerseChorusForm-6" title='Copy heading and permalink for Table 12.1.2: Kurt Cobain, Krist Novoselic, and Dave Grohl, "Smells Like Teen Spirit" (1991)' aria-label='Copy heading and permalink for Table 12.1.2: Kurt Cobain, Krist Novoselic, and Dave Grohl, "Smells Like Teen Spirit" (1991)'>🔗</a></div></figcaption><div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="l m b0 r0 l0 t0 lines">0:00–0:25</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Introduction</em>, 12 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">0:25–0:42</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Verse 1</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">0:42–0:58</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Pre-chorus</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">0:58–1:23</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Chorus</em>, 12 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">1:23–1:31</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Post-chorus</em>, 4 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines"> </td>
<td className="l m b0 r0 l0 t0 lines"></td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">1:31–1:39</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Interlude</em>, 4 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">1:39–1:56</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Verse 2</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">1:56–2:12</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Pre-chorus</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">2:12–2:37</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Chorus</em>, 12 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">2:37–2:45</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Post-chorus</em>, 4 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines"> </td>
<td className="l m b0 r0 l0 t0 lines"></td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">2:45–3:02</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Guitar solo</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines"> </td>
<td className="l m b0 r0 l0 t0 lines"></td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">3:02–3:10</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Interlude</em>, 4 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">3:10–3:26</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Verse 3</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">3:26–3:42</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Pre-chorus</em>, 8 bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">3:42–4:37</td>
<td className="l m b0 r0 l0 t0 lines">
<em className="emphasis">Chorus</em>, 21 bars</td>
</tr>
</table></div></figure><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/hTWKbfoikeg?&amp;modestbranding=1&amp;rel=0" id="VerseChorusForm-7"></iframe></div>
</div>
<div className="para" id="VerseChorusForm-8">It is worth noting that there may disagreement about labeling sections in a form. One person may call a section a “pre-chorus,” another may call it a “first chorus,” while another may call it “verse part b.” There is ambiguity in naming sections and disagreement is to be expected.<div className="autopermalink" data-description="Paragraph"><a href="#VerseChorusForm-8" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="VerseChorusForm-9">There are “simple” and “contrasting” verse-chorus forms. A <dfn className="terminology">simple verse-chorus</dfn> form has the same harmonic progression for the verse and chorus (e.g., “<a className="external" href="https://youtu.be/7PCkvCPvDXk" target="_blank">All About That Bass</a>”). The chord progressions for the verse and chorus are different in a <dfn className="terminology">contrasting verse-chorus</dfn> form like “We Are the World.”<div className="autopermalink" data-description="Paragraph"><a href="#VerseChorusForm-9" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Section 12.1: Verse-Chorus Form"><a href="#VerseChorusForm" title="Copy heading and permalink for Section 12.1: Verse-Chorus Form" aria-label="Copy heading and permalink for Section 12.1: Verse-Chorus Form">🔗</a></div></section></div>
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

export default Ch12VersechorusformPage;
