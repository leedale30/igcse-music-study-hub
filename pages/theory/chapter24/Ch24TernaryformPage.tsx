import React from 'react';
import { Link } from 'react-router-dom';

const Ch24TernaryformPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 24</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Ternary Form</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 24
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Binary & Ternary Form
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Ternary Form
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="TernaryForm"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">24.7</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Ternary Form</span>
</h2>
<section className="introduction" id="TernaryForm-2"><div className="para" id="TernaryForm-2-1">
<dfn className="terminology">Ternary form</dfn> is usually diagrammed as ABA and is described as “statement, digression, restatement.”<details className="ptx-footnote" aria-live="polite" id="TernaryForm-2-1-4"><summary className="ptx-footnote__number" title="Footnote 24.7.1"><sup> 1 </sup></summary><div className="ptx-footnote__contents" id="TernaryForm-2-1-4">Green, Douglass M. <span className="booktitle">Form in Tonal Music: an Introduction to Analysis</span>. 2d ed., Holt, Rinehart and Winston, 1979, p. 84</div></details> A piece in a rather simple and straightforward ternary is shown below.<div className="autopermalink" data-description="Paragraph"><a href="#TernaryForm-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit7/bin-tern-ternary-mozart-k15mm-A.svg" role="img" className="contained" alt="" /></div>
<div className="image-box"><img src="/theory/external/images/unit7/bin-tern-ternary-mozart-k15mm-B.svg" role="img" className="contained" alt="" /></div>
<div className="image-box"><img src="/theory/external/images/unit7/bin-tern-ternary-mozart-k15mm-C.svg" role="img" className="contained" alt="" /></div>
<div className="image-box"><img src="/theory/external/images/unit7/bin-tern-ternary-mozart-k15mm-D.svg" role="img" className="contained" alt="" /></div>
<div className="image-box"><img src="/theory/external/images/unit7/bin-tern-ternary-mozart-k15mm-E.svg" role="img" className="contained" alt="" /></div>
<div className="image-box"><img src="/theory/external/images/unit7/bin-tern-ternary-mozart-k15mm-F.svg" role="img" className="contained" alt="" /></div>
<figure className="figure figure-like" id="TernaryForm-2-9"><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/BJviMnAB_jg?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=55" id="TernaryForm-2-9-2"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">24.7.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Mozart, Andante in E-flat major, K. 15mm<div className="autopermalink" data-description="Figure 24.7.1"><a href="#TernaryForm-2-9" title="Copy heading and permalink for Figure 24.7.1" aria-label="Copy heading and permalink for Figure 24.7.1">🔗</a></div></figcaption></figure><div className="para" id="TernaryForm-2-10">Below is a diagram of K. 15mm by Mozart.<div className="autopermalink" data-description="Paragraph"><a href="#TernaryForm-2-10" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="TernaryForm-2-11"><div className="image-box"><img src="/theory/external/images/unit7/bin-tern-ternary-mozart-k15mm-DIAGRAM.svg" role="img" className="contained" alt="" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">24.7.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Diagram illustrating Binary Principle<div className="autopermalink" data-description="Figure 24.7.2"><a href="#TernaryForm-2-11" title="Copy heading and permalink for Figure 24.7.2" aria-label="Copy heading and permalink for Figure 24.7.2">🔗</a></div></figcaption></figure><div className="para" id="TernaryForm-2-12">Character pieces from the Romantic era with titles such as “Nocturne,” “Intermezzo,” and “Song Without Words,” among others, by composers such as Schubert, Chopin, Mendelssohn, Schumann, and Brahms, are often in a larger ternary form where each section might be longer than eight bars.<div className="autopermalink" data-description="Paragraph"><a href="#TernaryForm-2-12" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="TernaryForm-2-13">Below are examples from a larger ternary piece, Rachmaninov’s Prelude in C-sharp minor, Op.3 No.2.<div className="autopermalink" data-description="Paragraph"><a href="#TernaryForm-2-13" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="TernaryForm-2-14"><div className="image-box"><img src="/theory/external/images/unit7/bin-tern-ternary-Rachmaninoff-A1.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/sCtixpIWBto?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=84" id="TernaryForm-2-14-4"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">24.7.3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Sergei Rachmaninoff, Prelude in C-sharp minor, Op. 3 No. 2, First A section bars 1–13<div className="autopermalink" data-description="Figure 24.7.3"><a href="#TernaryForm-2-14" title="Copy heading and permalink for Figure 24.7.3" aria-label="Copy heading and permalink for Figure 24.7.3">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="TernaryForm-2-15"><div className="image-box"><img src="/theory/external/images/unit7/bin-tern-ternary-Rachmaninoff-B.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/sCtixpIWBto?&amp;modestbranding=1&amp;rel=0&amp;start=84&amp;end=129" id="TernaryForm-2-15-3"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">24.7.4<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Rachmaninov, Prelude in C-sharp minor, Op.3 No.2, B section bars 14–42<div className="autopermalink" data-description="Figure 24.7.4"><a href="#TernaryForm-2-15" title="Copy heading and permalink for Figure 24.7.4" aria-label="Copy heading and permalink for Figure 24.7.4">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="TernaryForm-2-16"><div className="image-box"><img src="/theory/external/images/unit7/bin-tern-ternary-Rachmaninoff-A2.svg" role="img" className="contained" alt="" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/sCtixpIWBto?&amp;modestbranding=1&amp;rel=0&amp;start=129&amp;end=232" id="TernaryForm-2-16-3"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">24.7.5<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Rachmaninov, Prelude in C-sharp minor, Op.3 No.2, Second A section bars 45–61<div className="autopermalink" data-description="Figure 24.7.5"><a href="#TernaryForm-2-16" title="Copy heading and permalink for Figure 24.7.5" aria-label="Copy heading and permalink for Figure 24.7.5">🔗</a></div></figcaption></figure></section><section className="subsection" id="CompoundTernary"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">24.7.1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Compound Ternary</span>
</h3>
<div className="para" id="CompoundTernary-2">A <dfn className="terminology">compound ternary</dfn> is a ternary form in which one of the sections (the A or the B) is itself a binary or ternary form. Examples can be found in the minuet and trio as well as the da capo aria.<div className="autopermalink" data-description="Paragraph"><a href="#CompoundTernary-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Subsection 24.7.1: Compound Ternary"><a href="#CompoundTernary" title="Copy heading and permalink for Subsection 24.7.1: Compound Ternary" aria-label="Copy heading and permalink for Subsection 24.7.1: Compound Ternary">🔗</a></div></section><section className="conclusion" id="TernaryForm-4"><div className="para" id="TernaryForm-4-1">In the next section, we will examine the differences between rounded binary and ternary.<div className="autopermalink" data-description="Paragraph"><a href="#TernaryForm-4-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></section><div className="autopermalink" data-description="Section 24.7: Ternary Form"><a href="#TernaryForm" title="Copy heading and permalink for Section 24.7: Ternary Form" aria-label="Copy heading and permalink for Section 24.7: Ternary Form">🔗</a></div></section></div>
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

export default Ch24TernaryformPage;
