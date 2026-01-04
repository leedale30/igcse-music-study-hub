import React from 'react';
import { Link } from 'react-router-dom';

const Ch13DoubleperiodformPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 13</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">The Double Period</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 13
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Phrases in Combination
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          The Double Period
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="DoublePeriodForm"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.5</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">The Double Period</span>
</h2>
<section className="introduction" id="DoublePeriodForm-2"><h3 className="heading">The Double Period.<span></span>
</h3>
<div className="para" id="DoublePeriodForm-2-2">A <dfn className="terminology">double period</dfn> consists of at least 4 phrases and is comprised of an <dfn className="terminology">antecedent group</dfn> and a <dfn className="terminology">consequent group</dfn>. The first two phrases in a double period are the antecedent group and the final two phrases are the consequent group, which ends with a cadence that “answers” the less conclusive cadence (or “question”) that ended the antecedent group.<div className="autopermalink" data-description="Paragraph"><a href="#DoublePeriodForm-2-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="DoublePeriodForm-2-3">The melodic scheme of <em className="emphasis">abab’</em> (four phrases) is commonly encountered in a double period. A double period with this melodic scheme would be described as a “<em className="emphasis">parallel</em> double period” because both the antecedent group and consequent group begin with the same melody.<div className="autopermalink" data-description="Paragraph"><a href="#DoublePeriodForm-2-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="DoublePeriodForm-2-4"><div className="image-box"><img src="/theory/external/images/unit3/phrases-double-period-op-10-no-1-II-A.svg" role="img" className="contained" alt="" /></div>
<div className="image-box"><img src="/theory/external/images/unit3/phrases-double-period-op-10-no-1-II-B.svg" role="img" className="contained" alt="" /></div>
<div className="image-box"><img src="/theory/external/images/unit3/phrases-double-period-op-10-no-1-II-C.svg" role="img" className="contained" alt="" /></div>
<div className="image-box"><img src="/theory/external/images/unit3/phrases-double-period-op-10-no-1-II-D.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/VlfL9LWtCls?&amp;modestbranding=1&amp;rel=0&amp;start=365&amp;end=440" id="DoublePeriodForm-2-4-7"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.5.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Beethoven, Piano Sonata Op. 10, No. 1, II<div className="autopermalink" data-description="Figure 13.5.1"><a href="#DoublePeriodForm-2-4" title="Copy heading and permalink for Figure 13.5.1" aria-label="Copy heading and permalink for Figure 13.5.1">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="DoublePeriodForm-2-5"><div className="image-box"><img src="/theory/external/images/unit3/phrases-double-period-op-10-diagram.svg" role="img" className="contained" alt="" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.5.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Formal diagram of a double period (Beethoven, Op. 10, No. 1, II)<div className="autopermalink" data-description="Figure 13.5.2"><a href="#DoublePeriodForm-2-5" title="Copy heading and permalink for Figure 13.5.2" aria-label="Copy heading and permalink for Figure 13.5.2">🔗</a></div></figcaption></figure><div className="para" id="DoublePeriodForm-2-6">A double period will typically have one of the following cadential schemes:<div className="autopermalink" data-description="Paragraph"><a href="#DoublePeriodForm-2-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="DoublePeriodForm-2-7"><div className="image-box"><img src="/theory/external/images/unit3/phrases-double-period-cadential-schemes-diagram.svg" role="img" className="contained" alt="" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.5.3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Possible cadential schemes in a double period<div className="autopermalink" data-description="Figure 13.5.3"><a href="#DoublePeriodForm-2-7" title="Copy heading and permalink for Figure 13.5.3" aria-label="Copy heading and permalink for Figure 13.5.3">🔗</a></div></figcaption></figure><div className="para" id="DoublePeriodForm-2-8">Notice that the first two phrases of an antecedent group can consist of an IAC followed by a HC (“Scheme 3” in the above example). This may seem confusing if you are focused on analyzing phrases solely in groups of two instead considering how many phrases are in a section before analyzing the cadential scheme and the form.<div className="autopermalink" data-description="Paragraph"><a href="#DoublePeriodForm-2-8" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></section><section className="subsection" id="RepeatedPeriod"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.5.1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Repeated Period</span>
</h3>
<div className="para" id="RepeatedPeriod-2">You may encounter a section consisting of four phrases that is not a double period but instead is a <dfn className="terminology">repeated period</dfn>.<div className="autopermalink" data-description="Paragraph"><a href="#RepeatedPeriod-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="RepeatedPeriod-3"><div className="image-box"><img src="/theory/external/images/unit3/phrases-repeated-period-waldstein.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/lbblMw6k1cU?&amp;modestbranding=1&amp;rel=0&amp;start=52&amp;end=80" id="RepeatedPeriod-3-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.5.4<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Beethoven, Piano Sonata Op. 53, I<div className="autopermalink" data-description="Figure 13.5.4"><a href="#RepeatedPeriod-3" title="Copy heading and permalink for Figure 13.5.4" aria-label="Copy heading and permalink for Figure 13.5.4">🔗</a></div></figcaption></figure><div className="para" id="RepeatedPeriod-4">Examine the difference between these two formal diagrams, noting the cadence after the <em className="emphasis">second</em> phrase in each:<div className="autopermalink" data-description="Paragraph"><a href="#RepeatedPeriod-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="RepeatedPeriod-5"><div className="image-box"><img src="/theory/external/images/unit3/phrases-repeated-period-waldstein-diagram.svg" role="img" className="contained" alt="" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.5.5<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Formal diagram of a repeated period (Beethoven, Op. 53, I)<div className="autopermalink" data-description="Figure 13.5.5"><a href="#RepeatedPeriod-5" title="Copy heading and permalink for Figure 13.5.5" aria-label="Copy heading and permalink for Figure 13.5.5">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="RepeatedPeriod-6"><div className="image-box"><img src="/theory/external/images/unit3/phrases-double-period-op-10-diagram.svg" role="img" className="contained" alt="" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.5.6<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Formal diagram of a double period (Beethoven, Op. 10, No. 1, II)<div className="autopermalink" data-description="Figure 13.5.6"><a href="#RepeatedPeriod-6" title="Copy heading and permalink for Figure 13.5.6" aria-label="Copy heading and permalink for Figure 13.5.6">🔗</a></div></figcaption></figure><div className="para" id="RepeatedPeriod-7">In the next section we will examine phrase combinations that are not periods.<div className="autopermalink" data-description="Paragraph"><a href="#RepeatedPeriod-7" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Subsection 13.5.1: Repeated Period"><a href="#RepeatedPeriod" title="Copy heading and permalink for Subsection 13.5.1: Repeated Period" aria-label="Copy heading and permalink for Subsection 13.5.1: Repeated Period">🔗</a></div></section><div className="autopermalink" data-description="Section 13.5: The Double Period"><a href="#DoublePeriodForm" title="Copy heading and permalink for Section 13.5: The Double Period" aria-label="Copy heading and permalink for Section 13.5: The Double Period">🔗</a></div></section></div>
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

export default Ch13DoubleperiodformPage;
