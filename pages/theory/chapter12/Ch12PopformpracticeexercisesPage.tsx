import React from 'react';
import { Link } from 'react-router-dom';

const Ch12PopformpracticeexercisesPage: React.FC = () => {
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
        <span className="text-gray-700 dark:text-gray-300">Practice Exercises</span>
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
          Practice Exercises
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="exercises" id="PopFormPracticeExercises"><h2 className="heading hide-type">
<span className="type">Exercises</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">12.6</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Practice Exercises</span>
</h2>
<article className="exercise exercise-like" id="PopFormPracticeExercises-2"><h3 className="heading"><span className="codenumber">1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span></h3>
<div className="para" id="PopFormPracticeExercises-2-1-1">For each song, fill in the beginning time for each section, label each section type (verse, pre-chorus, chorus, post-chorus, interlude, introduction, A, B, or C section, etc.), and the number of bars in each section of the form.<div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-2-1-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div> <ol className="lower-alpha lower-alpha-level-1" id="PopFormPracticeExercises-2-1-2">
<li id="PopFormPracticeExercises-2-1-2-1"> <figure className="table table-like" id="PopFormPracticeExercises-2-1-2-1-2"><figcaption><span className="type">Table</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">12.6.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Tom Bahler, “She’s Out of My Life” (1980)<div className="autopermalink" data-description='Table 12.6.1: Tom Bahler, "She’s Out of My Life" (1980)'><a href="#PopFormPracticeExercises-2-1-2-1-2" title='Copy heading and permalink for Table 12.6.1: Tom Bahler, "She’s Out of My Life" (1980)' aria-label='Copy heading and permalink for Table 12.6.1: Tom Bahler, "She’s Out of My Life" (1980)'>🔗</a></div></figcaption><div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="l m b0 r0 l0 t0 lines">Time:</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="2-character blank"></span> : <span className="fillin underline" role="img" aria-label="2-character blank"></span> <span className="fillin underline" role="img" aria-label="2-character blank"></span>
</td>
<td className="l m b0 r0 l0 t0 lines">Section Type: <span className="fillin underline" role="img" aria-label="20-character blank"></span>,</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="5-character blank"></span> bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Time:</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="2-character blank"></span> : <span className="fillin underline" role="img" aria-label="2-character blank"></span> <span className="fillin underline" role="img" aria-label="2-character blank"></span>
</td>
<td className="l m b0 r0 l0 t0 lines">Section Type: <span className="fillin underline" role="img" aria-label="20-character blank"></span>,</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="5-character blank"></span> bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Time:</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="2-character blank"></span> : <span className="fillin underline" role="img" aria-label="2-character blank"></span> <span className="fillin underline" role="img" aria-label="2-character blank"></span>
</td>
<td className="l m b0 r0 l0 t0 lines">Section Type: <span className="fillin underline" role="img" aria-label="20-character blank"></span>,</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="5-character blank"></span> bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Time:</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="2-character blank"></span> : <span className="fillin underline" role="img" aria-label="2-character blank"></span> <span className="fillin underline" role="img" aria-label="2-character blank"></span>
</td>
<td className="l m b0 r0 l0 t0 lines">Section Type: <span className="fillin underline" role="img" aria-label="20-character blank"></span>,</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="5-character blank"></span> bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Time:</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="2-character blank"></span> : <span className="fillin underline" role="img" aria-label="2-character blank"></span> <span className="fillin underline" role="img" aria-label="2-character blank"></span>
</td>
<td className="l m b0 r0 l0 t0 lines">Section Type: <span className="fillin underline" role="img" aria-label="20-character blank"></span>,</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="5-character blank"></span> bars</td>
</tr>
</table></div></figure> <div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/6DQJPL9Yuq0?&amp;modestbranding=1&amp;rel=0" id="PopFormPracticeExercises-2-1-2-1-3"></iframe></div>
</div>
<div className="autopermalink" data-description="Item 12.6.1.a"><a href="#PopFormPracticeExercises-2-1-2-1" title="Copy heading and permalink for Item 12.6.1.a" aria-label="Copy heading and permalink for Item 12.6.1.a">🔗</a></div>
</li>
<li id="PopFormPracticeExercises-2-1-2-2"> <figure className="table table-like" id="PopFormPracticeExercises-2-1-2-2-2"><figcaption><span className="type">Table</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">12.6.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Lennon-McCartney, “Penny Lane”<div className="autopermalink" data-description='Table 12.6.2: Lennon-McCartney, "Penny Lane"'><a href="#PopFormPracticeExercises-2-1-2-2-2" title='Copy heading and permalink for Table 12.6.2: Lennon-McCartney, "Penny Lane"' aria-label='Copy heading and permalink for Table 12.6.2: Lennon-McCartney, "Penny Lane"'>🔗</a></div></figcaption><div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="l m b0 r0 l0 t0 lines">Time:</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="2-character blank"></span> : <span className="fillin underline" role="img" aria-label="2-character blank"></span> <span className="fillin underline" role="img" aria-label="2-character blank"></span>
</td>
<td className="l m b0 r0 l0 t0 lines">Section Type: <span className="fillin underline" role="img" aria-label="20-character blank"></span>,</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="5-character blank"></span> bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Time:</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="2-character blank"></span> : <span className="fillin underline" role="img" aria-label="2-character blank"></span> <span className="fillin underline" role="img" aria-label="2-character blank"></span>
</td>
<td className="l m b0 r0 l0 t0 lines">Section Type: <span className="fillin underline" role="img" aria-label="20-character blank"></span>,</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="5-character blank"></span> bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Time:</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="2-character blank"></span> : <span className="fillin underline" role="img" aria-label="2-character blank"></span> <span className="fillin underline" role="img" aria-label="2-character blank"></span>
</td>
<td className="l m b0 r0 l0 t0 lines">Section Type: <span className="fillin underline" role="img" aria-label="20-character blank"></span>,</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="5-character blank"></span> bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Time:</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="2-character blank"></span> : <span className="fillin underline" role="img" aria-label="2-character blank"></span> <span className="fillin underline" role="img" aria-label="2-character blank"></span>
</td>
<td className="l m b0 r0 l0 t0 lines">Section Type: <span className="fillin underline" role="img" aria-label="20-character blank"></span>,</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="5-character blank"></span> bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Time:</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="2-character blank"></span> : <span className="fillin underline" role="img" aria-label="2-character blank"></span> <span className="fillin underline" role="img" aria-label="2-character blank"></span>
</td>
<td className="l m b0 r0 l0 t0 lines">Section Type: <span className="fillin underline" role="img" aria-label="20-character blank"></span>,</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="5-character blank"></span> bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Time:</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="2-character blank"></span> : <span className="fillin underline" role="img" aria-label="2-character blank"></span> <span className="fillin underline" role="img" aria-label="2-character blank"></span>
</td>
<td className="l m b0 r0 l0 t0 lines">Section Type: <span className="fillin underline" role="img" aria-label="20-character blank"></span>,</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="5-character blank"></span> bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Time:</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="2-character blank"></span> : <span className="fillin underline" role="img" aria-label="2-character blank"></span> <span className="fillin underline" role="img" aria-label="2-character blank"></span>
</td>
<td className="l m b0 r0 l0 t0 lines">Section Type: <span className="fillin underline" role="img" aria-label="20-character blank"></span>,</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="5-character blank"></span> bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Time:</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="2-character blank"></span> : <span className="fillin underline" role="img" aria-label="2-character blank"></span> <span className="fillin underline" role="img" aria-label="2-character blank"></span>
</td>
<td className="l m b0 r0 l0 t0 lines">Section Type: <span className="fillin underline" role="img" aria-label="20-character blank"></span>,</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="5-character blank"></span> bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Time:</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="2-character blank"></span> : <span className="fillin underline" role="img" aria-label="2-character blank"></span> <span className="fillin underline" role="img" aria-label="2-character blank"></span>
</td>
<td className="l m b0 r0 l0 t0 lines">Section Type: <span className="fillin underline" role="img" aria-label="20-character blank"></span>,</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="5-character blank"></span> bars</td>
</tr>
<tr>
<td className="l m b0 r0 l0 t0 lines">Time:</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="2-character blank"></span> : <span className="fillin underline" role="img" aria-label="2-character blank"></span> <span className="fillin underline" role="img" aria-label="2-character blank"></span>
</td>
<td className="l m b0 r0 l0 t0 lines">Section Type: <span className="fillin underline" role="img" aria-label="20-character blank"></span>,</td>
<td className="l m b0 r0 l0 t0 lines">
<span className="fillin underline" role="img" aria-label="5-character blank"></span> bars</td>
</tr>
</table></div></figure> <div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/S-rB0pHI9fU?&amp;modestbranding=1&amp;rel=0" id="PopFormPracticeExercises-2-1-2-2-3"></iframe></div>
</div>
<div className="autopermalink" data-description="Item 12.6.1.b"><a href="#PopFormPracticeExercises-2-1-2-2" title="Copy heading and permalink for Item 12.6.1.b" aria-label="Copy heading and permalink for Item 12.6.1.b">🔗</a></div>
</li>
</ol>
<div className="solutions"><details id="PopFormPracticeExercises-2-2" className="answer solution-like born-hidden-knowl"><summary className="knowl__link"><span className="type">Answer</span><span className="period heading-divison-mark heading-divison-mark__period">.</span></summary><div className="answer solution-like knowl__content">
<div className="para" id="PopFormPracticeExercises-2-2-1">She’s Out of My Life:<div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-2-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<ul className="disc" id="PopFormPracticeExercises-2-2-2">
<li id="PopFormPracticeExercises-2-2-2-1">
<div className="para" id="PopFormPracticeExercises-2-2-2-1-1">0:00–0:40, Introduction, approx. 4 bars of keyboard<div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-2-2-2-1-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PopFormPracticeExercises-2-2-2-1" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PopFormPracticeExercises-2-2-2-2">
<div className="para" id="PopFormPracticeExercises-2-2-2-2-1">0:40–1:25, A, 12 bars<div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-2-2-2-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PopFormPracticeExercises-2-2-2-2" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PopFormPracticeExercises-2-2-2-3">
<div className="para" id="PopFormPracticeExercises-2-2-2-3-1">1:25–2:05, A, 11 bars<div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-2-2-2-3-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PopFormPracticeExercises-2-2-2-3" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PopFormPracticeExercises-2-2-2-4">
<div className="para" id="PopFormPracticeExercises-2-2-2-4-1">2:05–2:35, B, 8 bars<div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-2-2-2-4-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PopFormPracticeExercises-2-2-2-4" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PopFormPracticeExercises-2-2-2-5">
<div className="para" id="PopFormPracticeExercises-2-2-2-5-1">2:35–3:33, A, 13 bars<div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-2-2-2-5-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PopFormPracticeExercises-2-2-2-5" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
</ul>
<div className="para" id="PopFormPracticeExercises-2-2-3">Penny Lane:<div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-2-2-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<ul className="disc" id="PopFormPracticeExercises-2-2-4">
<li id="PopFormPracticeExercises-2-2-4-1">
<div className="para" id="PopFormPracticeExercises-2-2-4-1-1">0:00–0:20, Verse 1, 8 bars<div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-2-2-4-1-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PopFormPracticeExercises-2-2-4-1" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PopFormPracticeExercises-2-2-4-2">
<div className="para" id="PopFormPracticeExercises-2-2-4-2-1">0:20–0:38, Verse 2, 8 bars<div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-2-2-4-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PopFormPracticeExercises-2-2-4-2" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PopFormPracticeExercises-2-2-4-3">
<div className="para" id="PopFormPracticeExercises-2-2-4-3-1">0:38–0:54, Chorus, 8 bars<div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-2-2-4-3-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PopFormPracticeExercises-2-2-4-3" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PopFormPracticeExercises-2-2-4-4">
<div className="para" id="PopFormPracticeExercises-2-2-4-4-1">0:54–1:11, Verse 3, 8 bars<div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-2-2-4-4-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PopFormPracticeExercises-2-2-4-4" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PopFormPracticeExercises-2-2-4-5">
<div className="para" id="PopFormPracticeExercises-2-2-4-5-1">1:11–1:28, Trumpet Solo on Verse progression, 8 bars<div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-2-2-4-5-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PopFormPracticeExercises-2-2-4-5" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PopFormPracticeExercises-2-2-4-6">
<div className="para" id="PopFormPracticeExercises-2-2-4-6-1">1:28–1:45, Chorus, 8 bars<div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-2-2-4-6-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PopFormPracticeExercises-2-2-4-6" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PopFormPracticeExercises-2-2-4-7">
<div className="para" id="PopFormPracticeExercises-2-2-4-7-1">1:45–2:02, Verse 4, 8 bars<div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-2-2-4-7-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PopFormPracticeExercises-2-2-4-7" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PopFormPracticeExercises-2-2-4-8">
<div className="para" id="PopFormPracticeExercises-2-2-4-8-1">2:02–2:19, Verse 5, 8 bars<div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-2-2-4-8-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PopFormPracticeExercises-2-2-4-8" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PopFormPracticeExercises-2-2-4-9">
<div className="para" id="PopFormPracticeExercises-2-2-4-9-1">2:19–2:36, Chorus, 8 bars<div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-2-2-4-9-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PopFormPracticeExercises-2-2-4-9" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PopFormPracticeExercises-2-2-4-10">
<div className="para" id="PopFormPracticeExercises-2-2-4-10-1">2:36–3:02, Chorus a whole step higher, 9 bars<div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-2-2-4-10-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PopFormPracticeExercises-2-2-4-10" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
</ul>
<div className="autopermalink" data-description="Answer 12.6.1.1"><a href="#PopFormPracticeExercises-2-2" title="Copy heading and permalink for Answer 12.6.1.1" aria-label="Copy heading and permalink for Answer 12.6.1.1">🔗</a></div>
</div></details></div>
<div className="autopermalink" data-description="Exercise 12.6.1"><a href="#PopFormPracticeExercises-2" title="Copy heading and permalink for Exercise 12.6.1" aria-label="Copy heading and permalink for Exercise 12.6.1">🔗</a></div></article><section className="conclusion" id="PopFormPracticeExercises-3"><div className="para" id="PopFormPracticeExercises-3-1">Click <a className="external" href="http://musictheory.pugetsound.edu/hw/MT21C_HW_13.pdf" target="_blank">here to download the homework assignment for this chapter.</a><div className="autopermalink" data-description="Paragraph"><a href="#PopFormPracticeExercises-3-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></section><div className="autopermalink" data-description="Exercises 12.6: Practice Exercises"><a href="#PopFormPracticeExercises" title="Copy heading and permalink for Exercises 12.6: Practice Exercises" aria-label="Copy heading and permalink for Exercises 12.6: Practice Exercises">🔗</a></div></section></div>
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

export default Ch12PopformpracticeexercisesPage;
