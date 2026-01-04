import React from 'react';
import { Link } from 'react-router-dom';

const Ch11SubphrasePage: React.FC = () => {
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
        <span className="text-gray-700 dark:text-gray-300">Subphrase</span>
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
          Subphrase
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="subphrase"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">11.5</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Subphrase</span>
</h2>
<div className="para" id="subphrase-2">Subphrases are smaller than phrases but larger than motives. Most of the subphrases we encounter will be two measures long. Subphrases are called “phrase segments” and “phrase members” in other texts.<div className="autopermalink" data-description="Paragraph"><a href="#subphrase-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="subphrase-3">We will label subphrases with letters (<em className="emphasis">a,</em> <em className="emphasis">b,</em> etc.). When a subphrase repeats but has slight alterations, we will put an apostrophe after the letter (e.g., <em className="emphasis">a’</em>) and refer to it as “a prime.” If another alteration to subphrase a occurs, we will label it as <em className="emphasis">a’’</em> and refer to it as “a double prime.” If the subphrase is merely transposed (in a sequence), we will label it as <em className="emphasis">a,</em> not <em className="emphasis">a’</em> in our analysis.<div className="autopermalink" data-description="Paragraph"><a href="#subphrase-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="subphrase-4">We are including analysis of subphrases in this text because many compositions have melodic units that are two measures long. Analyzing subphrases helps us understand the construction of melodies.<div className="autopermalink" data-description="Paragraph"><a href="#subphrase-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="subphrase-5">In the following example, notice that subphrases <em className="emphasis">a</em> and <em className="emphasis">a’</em> have the same first six notes (<span className="process-math">\\(\\text{G}^♯\\)</span>–<span className="process-math">\\(\\text{F}^♯\\)</span>–<span className="process-math">\\(\\text{B}\\)</span>–<span className="process-math">\\(\\text{C}^♯\\)</span>–<span className="process-math">\\(\\text{E}\\)</span>–<span className="process-math">\\(\\text{E}\\)</span>).<div className="autopermalink" data-description="Paragraph"><a href="#subphrase-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="subphrase-6"><div className="image-box"><img src="/theory/external/images/unit2/phrase-subphrase-dont-stop-thinking-about.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/OvSbZEYlfnM?&amp;modestbranding=1&amp;rel=0&amp;start=73&amp;end=81" id="subphrase-6-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">11.5.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Christine McVie, “Don’t Stop” (1977)<div className="autopermalink" data-description="Figure 11.5.1"><a href="#subphrase-6" title="Copy heading and permalink for Figure 11.5.1" aria-label="Copy heading and permalink for Figure 11.5.1">🔗</a></div></figcaption></figure><div className="para" id="subphrase-7">Here is an example of a four-measure phrase with subphrases <em className="emphasis">a</em> and <em className="emphasis">b</em>.<div className="autopermalink" data-description="Paragraph"><a href="#subphrase-7" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="subphrase-8"><div className="image-box"><img src="/theory/external/images/unit2/phrase-subphrase-party-rock.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/KQ6zr6kCPj8?&amp;modestbranding=1&amp;rel=0&amp;start=114&amp;end=122" id="subphrase-8-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">11.5.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Stefan Gordy and Skyler Gordy, “Party Rock Anthem” (2011)<div className="autopermalink" data-description="Figure 11.5.2"><a href="#subphrase-8" title="Copy heading and permalink for Figure 11.5.2" aria-label="Copy heading and permalink for Figure 11.5.2">🔗</a></div></figcaption></figure><div className="para" id="subphrase-9">Notice that we are not looking at the motives within these subphrases. This is because we are looking for melodic segments that are repeated. For some compositions it is more informative to look at subphrases and less informative to identify motives if motives are not extracted and developed.<div className="autopermalink" data-description="Paragraph"><a href="#subphrase-9" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="subphrase-10">There will be times when you will notice important melodic ideas happening at three levels of analysis (motive, subphrase, and phrase), as in the following example.<div className="autopermalink" data-description="Paragraph"><a href="#subphrase-10" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="subphrase-11"><div className="image-box"><img src="/theory/external/images/unit2/phrase-subphrase-dont-stop-believing.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/1k8craCGpgs?&amp;modestbranding=1&amp;rel=0&amp;start=82&amp;end=91" id="subphrase-11-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">11.5.3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Steve Perry, Jonathan Cain, Neil Schon, “Don’t Stop Believin’” (1981)<div className="autopermalink" data-description="Figure 11.5.3"><a href="#subphrase-11" title="Copy heading and permalink for Figure 11.5.3" aria-label="Copy heading and permalink for Figure 11.5.3">🔗</a></div></figcaption></figure><div className="para" id="subphrase-12">There is ambiguity between motive and subphrase. Reconsider the following example from the section on intervallic change:<div className="autopermalink" data-description="Paragraph"><a href="#subphrase-12" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="subphrase-13"><div className="image-box"><img src="/theory/external/images/unit2/motive-intervallic-change-the-very-thought.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/v9V98ECtsfY?&amp;modestbranding=1&amp;rel=0&amp;start=15&amp;end=25" id="subphrase-13-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">11.5.4<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Ray Noble, “The Very Thought of You” (1934)<div className="autopermalink" data-description="Figure 11.5.4"><a href="#subphrase-13" title="Copy heading and permalink for Figure 11.5.4" aria-label="Copy heading and permalink for Figure 11.5.4">🔗</a></div></figcaption></figure><div className="para" id="subphrase-14">When you listen to the music of “The Very Thought of You” you will hear that each motive lasts for two measures. The difference is that motives are typically short—two to seven notes—whereas subphrases will usually contain six or more notes and occupy two measures (half of a four-measure phrase).<div className="autopermalink" data-description="Paragraph"><a href="#subphrase-14" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Section 11.5: Subphrase"><a href="#subphrase" title="Copy heading and permalink for Section 11.5: Subphrase" aria-label="Copy heading and permalink for Section 11.5: Subphrase">🔗</a></div></section></div>
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

export default Ch11SubphrasePage;
