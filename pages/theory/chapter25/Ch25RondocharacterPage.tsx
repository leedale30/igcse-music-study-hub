import React from 'react';
import { Link } from 'react-router-dom';

const Ch25RondocharacterPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 25</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Rondo Character</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 25
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Sonata & Rondo
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Rondo Character
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="RondoCharacter"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">25.4</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Rondo Character</span>
</h2>
<div className="para" id="RondoCharacter-2">Rondo character is characterized by quick tempo in duple meter with light character, typically achieved through the use of staccato articulation. This duple meter could be either simple (<span className="process-math">\\(\\begin{smallmatrix}2\\\\4\\end{smallmatrix}\\)</span>) or compound (<span className="process-math">\\(\\begin{smallmatrix}6\\\\8\\end{smallmatrix}\\)</span>). During the Classical era, the final movement of a multi-movement composition, e.g. a sonata, quartet, or symphony, was often in rondo character. Not all pieces in rondo form are in rondo character.<div className="autopermalink" data-description="Paragraph"><a href="#RondoCharacter-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="RondoCharacter-3">Listen to the following seven examples to develop familiarity with rondo character.<div className="autopermalink" data-description="Paragraph"><a href="#RondoCharacter-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<ol className="decimal" id="RondoCharacter-4">
<li id="RondoCharacter-4-1">
<figure className="figure figure-like" id="RondoCharacter-4-1-1"><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/kmiuh_OL2Zg?&amp;modestbranding=1&amp;rel=0&amp;start=1043&amp;end=1068" id="RondoCharacter-4-1-1-3"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">25.4.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Joseph Bologne, Chevalier de Saint-Georges, Violin Concerto No. 9 in G major, Op. 8, III.<div className="autopermalink" data-description="Figure 25.4.1"><a href="#RondoCharacter-4-1-1" title="Copy heading and permalink for Figure 25.4.1" aria-label="Copy heading and permalink for Figure 25.4.1">🔗</a></div></figcaption></figure><div className="autopermalink" data-description="Item 1"><a href="#RondoCharacter-4-1" title="Copy heading and permalink for Item 1" aria-label="Copy heading and permalink for Item 1">🔗</a></div>
</li>
<li id="RondoCharacter-4-2">
<figure className="figure figure-like" id="RondoCharacter-4-2-1"><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/ysB5SeaJp6s?&amp;modestbranding=1&amp;rel=0" id="RondoCharacter-4-2-1-3"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">25.4.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Haydn, Piano Sonata in D major, H. XVI:37, III.<div className="autopermalink" data-description="Figure 25.4.2"><a href="#RondoCharacter-4-2-1" title="Copy heading and permalink for Figure 25.4.2" aria-label="Copy heading and permalink for Figure 25.4.2">🔗</a></div></figcaption></figure><div className="autopermalink" data-description="Item 2"><a href="#RondoCharacter-4-2" title="Copy heading and permalink for Item 2" aria-label="Copy heading and permalink for Item 2">🔗</a></div>
</li>
<li id="RondoCharacter-4-3">
<figure className="figure figure-like" id="RondoCharacter-4-3-1"><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/QYUANirkakg?&amp;modestbranding=1&amp;rel=0" id="RondoCharacter-4-3-1-3"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">25.4.3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Haydn, Symphony No. 104 in D major, Hob. I:104, IV.<div className="autopermalink" data-description="Figure 25.4.3"><a href="#RondoCharacter-4-3-1" title="Copy heading and permalink for Figure 25.4.3" aria-label="Copy heading and permalink for Figure 25.4.3">🔗</a></div></figcaption></figure><div className="autopermalink" data-description="Item 3"><a href="#RondoCharacter-4-3" title="Copy heading and permalink for Item 3" aria-label="Copy heading and permalink for Item 3">🔗</a></div>
</li>
<li id="RondoCharacter-4-4">
<figure className="figure figure-like" id="RondoCharacter-4-4-1"><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/YhGkLPqWjBc?&amp;modestbranding=1&amp;rel=0" id="RondoCharacter-4-4-1-3"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">25.4.4<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Haydn, String Quartet in E-flat major, Op. 33, No. 2, IV.<div className="autopermalink" data-description="Figure 25.4.4"><a href="#RondoCharacter-4-4-1" title="Copy heading and permalink for Figure 25.4.4" aria-label="Copy heading and permalink for Figure 25.4.4">🔗</a></div></figcaption></figure><div className="autopermalink" data-description="Item 4"><a href="#RondoCharacter-4-4" title="Copy heading and permalink for Item 4" aria-label="Copy heading and permalink for Item 4">🔗</a></div>
</li>
<li id="RondoCharacter-4-5">
<figure className="figure figure-like" id="RondoCharacter-4-5-1"><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/hwxNp-LzDYo?&amp;modestbranding=1&amp;rel=0&amp;start=1265&amp;end=1300" id="RondoCharacter-4-5-1-3"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">25.4.5<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Mozart, Symphony No. 36 in C major, K.425, IV.<div className="autopermalink" data-description="Figure 25.4.5"><a href="#RondoCharacter-4-5-1" title="Copy heading and permalink for Figure 25.4.5" aria-label="Copy heading and permalink for Figure 25.4.5">🔗</a></div></figcaption></figure><div className="autopermalink" data-description="Item 5"><a href="#RondoCharacter-4-5" title="Copy heading and permalink for Item 5" aria-label="Copy heading and permalink for Item 5">🔗</a></div>
</li>
<li id="RondoCharacter-4-6">
<figure className="figure figure-like" id="RondoCharacter-4-6-1"><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/H0x_dCrKd4w?&amp;modestbranding=1&amp;rel=0&amp;start=1369&amp;end=1429" id="RondoCharacter-4-6-1-3"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">25.4.6<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Mozart, Symphony No. 39 in E-flat major, K.543, IV.<div className="autopermalink" data-description="Figure 25.4.6"><a href="#RondoCharacter-4-6-1" title="Copy heading and permalink for Figure 25.4.6" aria-label="Copy heading and permalink for Figure 25.4.6">🔗</a></div></figcaption></figure><div className="autopermalink" data-description="Item 6"><a href="#RondoCharacter-4-6" title="Copy heading and permalink for Item 6" aria-label="Copy heading and permalink for Item 6">🔗</a></div>
</li>
<li id="RondoCharacter-4-7">
<figure className="figure figure-like" id="RondoCharacter-4-7-1"><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/zuMs8kD5Des?&amp;modestbranding=1&amp;rel=0&amp;start=1431&amp;end=1470" id="RondoCharacter-4-7-1-3"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">25.4.7<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Mozart, String Quartet No. 19 in C major, K.465, IV.<div className="autopermalink" data-description="Figure 25.4.7"><a href="#RondoCharacter-4-7-1" title="Copy heading and permalink for Figure 25.4.7" aria-label="Copy heading and permalink for Figure 25.4.7">🔗</a></div></figcaption></figure><div className="autopermalink" data-description="Item 7"><a href="#RondoCharacter-4-7" title="Copy heading and permalink for Item 7" aria-label="Copy heading and permalink for Item 7">🔗</a></div>
</li>
</ol>
<div className="autopermalink" data-description="Section 25.4: Rondo Character"><a href="#RondoCharacter" title="Copy heading and permalink for Section 25.4: Rondo Character" aria-label="Copy heading and permalink for Section 25.4: Rondo Character">🔗</a></div></section></div>
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

export default Ch25RondocharacterPage;
