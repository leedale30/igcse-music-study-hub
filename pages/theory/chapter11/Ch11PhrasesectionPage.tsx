import React from 'react';
import { Link } from 'react-router-dom';

const Ch11PhrasesectionPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 11</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Phrase</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 11
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Melody
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Phrase
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="PhraseSection"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">11.4</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Phrase</span>
</h2>
<div className="para" id="PhraseSection-2">Musical form is full of sections, and the <dfn className="terminology">phrase</dfn> is the smallest category of section. Unlike a motive, a phrase gives the sense of completing a formal unit.<div className="autopermalink" data-description="Paragraph"><a href="#PhraseSection-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="PhraseSection-3">In classical music, phrases always end with <a href="07-04-cadences.html" className="internal" title="Section 7.4: Cadences">cadences</a>; if you have encountered a cadence, you have just witnessed the completion of a phrase. In popular music, a phrase might be completed by a melody reaching four measures in length or by completing a line of lyric instead of by a cadence.<div className="autopermalink" data-description="Paragraph"><a href="#PhraseSection-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="PhraseSection-4">To generalize (or perhaps over-generalize), most of the phrases you encounter will be four measures in length and will end with one of <a href="07-04-cadences.html" className="internal" title="Section 7.4: Cadences">the four cadence types</a> (authentic cadence, half cadence, deceptive cadence, and, less commonly, the plagal cadence). While four- and eight-measure phrases are the most common, you will also encounter phrases that are five, six, and seven measures in length. Less commonly, you will encounter three-measure phrases.<div className="autopermalink" data-description="Paragraph"><a href="#PhraseSection-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="PhraseSection-5">Here are examples of four-measure phrases. Notice that these phrases have a sense of completion even though they do not end with cadences.<div className="autopermalink" data-description="Paragraph"><a href="#PhraseSection-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="PhraseSection-6"><div className="image-box"><img src="/theory/external/images/unit2/phrase-4bar-my-girl.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/1hZSulcsImQ?&amp;modestbranding=1&amp;rel=0&amp;start=16&amp;end=26" id="PhraseSection-6-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">11.4.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Smokey Robinson and Ronald White, “My Girl”(1964)<div className="autopermalink" data-description="Figure 11.4.1"><a href="#PhraseSection-6" title="Copy heading and permalink for Figure 11.4.1" aria-label="Copy heading and permalink for Figure 11.4.1">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="PhraseSection-7"><div className="image-box"><img src="/theory/external/images/unit2/phrase-4bar-im-every-woman.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/vNAq7Cv34l4?&amp;modestbranding=1&amp;rel=0&amp;start=17&amp;end=26" id="PhraseSection-7-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">11.4.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Nickolas Ashford and Valerie Simpson, “I’m Every Woman” (1978)<div className="autopermalink" data-description="Figure 11.4.2"><a href="#PhraseSection-7" title="Copy heading and permalink for Figure 11.4.2" aria-label="Copy heading and permalink for Figure 11.4.2">🔗</a></div></figcaption></figure><div className="para" id="PhraseSection-8">Here is an example of a five-measure phrase. Notice that the final chord (a minor iv chord, which will be discussed in the chapter on mode mixture) is part of a half cadence or deceptive cadence, yet the phrase has a feeling of completion, especially considering its relation to the phrases before and after it.<div className="autopermalink" data-description="Paragraph"><a href="#PhraseSection-8" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="PhraseSection-9"><div className="image-box"><img src="/theory/external/images/unit2/phrase-5bar-irreplaceable.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/2EwViQxSJJQ?&amp;modestbranding=1&amp;rel=0&amp;start=73&amp;end=88" id="PhraseSection-9-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">11.4.3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Shaffer Smith, Mikkel Eriksen, Tor Erik Hermansen, Espen Lind, Beyoncé Knowles, “Irreplaceable” (2006)<div className="autopermalink" data-description="Figure 11.4.3"><a href="#PhraseSection-9" title="Copy heading and permalink for Figure 11.4.3" aria-label="Copy heading and permalink for Figure 11.4.3">🔗</a></div></figcaption></figure><div className="para" id="PhraseSection-10">Here is an example of a six-measure phrase that ends with a <span className="process-math">\\(\\left.\\text{V}^{7}\\right.\\)</span>-<span className="process-math">\\(\\left.\\text{i}\\right.\\)</span> cadence in <span className="process-math">\\(\\text{G}\\)</span> minor.<div className="autopermalink" data-description="Paragraph"><a href="#PhraseSection-10" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="PhraseSection-11"><div className="image-box"><img src="/theory/external/images/unit2/phrase-6bar-k550iii.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/PbwJhFGUiFc?&amp;modestbranding=1&amp;rel=0&amp;start=43&amp;end=49" id="PhraseSection-11-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">11.4.4<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>W.A. Mozart, Symphony No. 40, K. 550, III (1788)<div className="autopermalink" data-description="Figure 11.4.4"><a href="#PhraseSection-11" title="Copy heading and permalink for Figure 11.4.4" aria-label="Copy heading and permalink for Figure 11.4.4">🔗</a></div></figcaption></figure><div className="para" id="PhraseSection-12">Here is an example of an 8-measure phrase.<div className="autopermalink" data-description="Paragraph"><a href="#PhraseSection-12" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="PhraseSection-13"><div className="image-box"><img src="/theory/external/images/unit2/phrase-8bar-k545ii.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/1vDxlnJVvW8?&amp;modestbranding=1&amp;rel=0&amp;start=180&amp;end=206" id="PhraseSection-13-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">11.4.5<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>W.A. Mozart, Piano Sonata in C Major, K. 545, II<div className="autopermalink" data-description="Figure 11.4.5"><a href="#PhraseSection-13" title="Copy heading and permalink for Figure 11.4.5" aria-label="Copy heading and permalink for Figure 11.4.5">🔗</a></div></figcaption></figure><div className="para" id="PhraseSection-14">Examples of seven-measure phrases are rare and often involve <a href="13-07-Elision.html" className="internal" title="Section 13.7: The Elision">elisions</a>, which will be covered in a later <a href="PhrasesInCombination.html" className="internal" title="Chapter 13: Phrases in Combination">chapter</a> when we discuss how phrases are combined to create small forms like <a href="13-03-PeriodForm.html" className="internal" title="Section 13.3: The Period">periods</a> and <a href="13-06-PhraseGroupsAndPhraseChains.html" className="internal" title="Section 13.6: Phrase Groups and Phrase Chains">phrase groups</a>.<div className="autopermalink" data-description="Paragraph"><a href="#PhraseSection-14" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Section 11.4: Phrase"><a href="#PhraseSection" title="Copy heading and permalink for Section 11.4: Phrase" aria-label="Copy heading and permalink for Section 11.4: Phrase">🔗</a></div></section></div>
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

export default Ch11PhrasesectionPage;
