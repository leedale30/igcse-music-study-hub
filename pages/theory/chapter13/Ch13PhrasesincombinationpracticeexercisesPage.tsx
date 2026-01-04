import React from 'react';
import { Link } from 'react-router-dom';

const Ch13PhrasesincombinationpracticeexercisesPage: React.FC = () => {
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
        <span className="text-gray-700 dark:text-gray-300">Practice Exercises</span>
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="exercises" id="PhrasesInCombinationPracticeExercises"><h2 className="heading hide-type">
<span className="type">Exercises</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.9</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Practice Exercises</span>
</h2>
<section className="introduction" id="PhrasesInCombinationPracticeExercises-2"><div className="para" id="PhrasesInCombinationPracticeExercises-2-1">For each excerpt below, do the following:<div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<ul className="disc" id="PhrasesInCombinationPracticeExercises-2-2">
<li id="PhrasesInCombinationPracticeExercises-2-2-1">
<div className="para" id="PhrasesInCombinationPracticeExercises-2-2-1-1">Label chords with Roman numerals at the ends of phrases to determine cadences<div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-2-2-1-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-2-2-1" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PhrasesInCombinationPracticeExercises-2-2-2">
<div className="para" id="PhrasesInCombinationPracticeExercises-2-2-2-1">Label cadences by type (PAC, IAC, HC, PC, DC)<div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-2-2-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-2-2-2" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PhrasesInCombinationPracticeExercises-2-2-3">
<div className="para" id="PhrasesInCombinationPracticeExercises-2-2-3-1">Examine the motivic structure to determine if a phrase is a sentence<div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-2-2-3-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-2-2-3" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PhrasesInCombinationPracticeExercises-2-2-4">
<div className="para" id="PhrasesInCombinationPracticeExercises-2-2-4-1">Create a diagram of the form using cadence abbreviations (HC, DC, PC, IAC, and PAC) and letters to designate melody (<em className="emphasis">a</em>, <em className="emphasis">a’</em>, <em className="emphasis">b</em>, etc.). Use the “prime” symbol (’) to show if a melody ends with a different cadence. In this chapter, the prime symbol should not be used to represent embellishment of the melody or changes in the harmonization or register.<div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-2-2-4-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-2-2-4" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PhrasesInCombinationPracticeExercises-2-2-5">
<div className="para" id="PhrasesInCombinationPracticeExercises-2-2-5-1">Name the form of the excerpt (sentence, parallel period, contrasting period, asymmetrical period, parallel double period, repeated phrase, repeated period).<div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-2-2-5-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-2-2-5" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
</ul></section><article className="subexercises" id="PhrasesInCombinationPracticeExercises-3"><article className="exercise exercise-like" id="PhrasesInCombinationPracticeExercises-3-2"><h4 className="heading">
<span className="codenumber">1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Mozart, “Ein Mädchen oder Weibchen,”<span className="booktitle">The Magic Flute</span>.</span>
</h4>
<div className="image-box"><img src="/theory/external/images/unit3/PRAC-EXER-phrases-mozart-ein-madchenA.svg" role="img" className="contained" alt="" /></div> <div className="image-box"><img src="/theory/external/images/unit3/PRAC-EXER-phrases-mozart-ein-madchenB.svg" role="img" className="contained" alt="" /></div> <figure className="figure figure-like" id="PhrasesInCombinationPracticeExercises-3-2-3-3"><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/CI0hJLioGF0?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=15" id="PhrasesInCombinationPracticeExercises-3-2-3-3-2"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.9.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span><div className="autopermalink" data-description="Figure 13.9.1"><a href="#PhrasesInCombinationPracticeExercises-3-2-3-3" title="Copy heading and permalink for Figure 13.9.1" aria-label="Copy heading and permalink for Figure 13.9.1">🔗</a></div></figcaption></figure><div className="solutions"><details id="PhrasesInCombinationPracticeExercises-3-2-4" className="answer solution-like born-hidden-knowl"><summary className="knowl__link"><span className="type">Answer</span><span className="period heading-divison-mark heading-divison-mark__period">.</span></summary><div className="answer solution-like knowl__content">
<div className="para" id="PhrasesInCombinationPracticeExercises-3-2-4-1">Mozart, <span className="booktitle">The Magic Flute</span>, “Ein Mädchen oder Weibchen”:<div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-3-2-4-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<ul className="disc" id="PhrasesInCombinationPracticeExercises-3-2-4-2">
<li id="PhrasesInCombinationPracticeExercises-3-2-4-2-1">
<div className="para" id="PhrasesInCombinationPracticeExercises-3-2-4-2-1-1">Chords: <span className="process-math">\\(\\left.\\text{I}\\right.\\)</span>–<span className="process-math">\\(\\left.\\text{V}\\right.\\)</span>, <span className="process-math">\\(\\left.\\text{V}\\right.\\)</span>–<span className="process-math">\\(\\left.\\text{I}\\right.\\)</span><div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-3-2-4-2-1-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-3-2-4-2-1" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PhrasesInCombinationPracticeExercises-3-2-4-2-2">
<div className="para" id="PhrasesInCombinationPracticeExercises-3-2-4-2-2-1">Cadences: HC, PAC<div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-3-2-4-2-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-3-2-4-2-2" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PhrasesInCombinationPracticeExercises-3-2-4-2-3">
<div className="para" id="PhrasesInCombinationPracticeExercises-3-2-4-2-3-1">No Sentences<div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-3-2-4-2-3-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-3-2-4-2-3" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PhrasesInCombinationPracticeExercises-3-2-4-2-4">
<div className="para" id="PhrasesInCombinationPracticeExercises-3-2-4-2-4-1">Melodic labels: <em className="emphasis">a</em>, <em className="emphasis">b</em><div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-3-2-4-2-4-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-3-2-4-2-4" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PhrasesInCombinationPracticeExercises-3-2-4-2-5">
<div className="para" id="PhrasesInCombinationPracticeExercises-3-2-4-2-5-1">Form: contrasting period<div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-3-2-4-2-5-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-3-2-4-2-5" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
</ul>
<div className="autopermalink" data-description="Answer 13.9.1.1"><a href="#PhrasesInCombinationPracticeExercises-3-2-4" title="Copy heading and permalink for Answer 13.9.1.1" aria-label="Copy heading and permalink for Answer 13.9.1.1">🔗</a></div>
</div></details></div>
<div className="autopermalink" data-description='Exercise 13.9.1: Mozart, "Ein Mädchen oder Weibchen,"The Magic Flute'><a href="#PhrasesInCombinationPracticeExercises-3-2" title='Copy heading and permalink for Exercise 13.9.1: Mozart, "Ein Mädchen oder Weibchen,"The Magic Flute' aria-label='Copy heading and permalink for Exercise 13.9.1: Mozart, "Ein Mädchen oder Weibchen,"The Magic Flute'>🔗</a></div></article><article className="exercise exercise-like" id="PhrasesInCombinationPracticeExercises-3-3"><h4 className="heading">
<span className="codenumber">2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Mozart, Piano Sonata K. 333, I.</span>
</h4>
<div className="image-box"><img src="/theory/external/images/unit3/PRAC-EXER-phrases-mozart-K333-ST1-A.svg" role="img" className="contained" alt="" /></div> <div className="image-box"><img src="/theory/external/images/unit3/PRAC-EXER-phrases-mozart-K333-ST1-B.svg" role="img" className="contained" alt="" /></div> <div className="image-box"><img src="/theory/external/images/unit3/PRAC-EXER-phrases-mozart-K333-ST1-C.svg" role="img" className="contained" alt="" /></div> <div className="image-box"><img src="/theory/external/images/unit3/PRAC-EXER-phrases-mozart-K333-ST1-D.svg" role="img" className="contained" alt="" /></div> <figure className="figure figure-like" id="PhrasesInCombinationPracticeExercises-3-3-3-5"><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/PmO3Wlono6w?&amp;modestbranding=1&amp;rel=0&amp;start=351&amp;end=381" id="PhrasesInCombinationPracticeExercises-3-3-3-5-2"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.9.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span><div className="autopermalink" data-description="Figure 13.9.2"><a href="#PhrasesInCombinationPracticeExercises-3-3-3-5" title="Copy heading and permalink for Figure 13.9.2" aria-label="Copy heading and permalink for Figure 13.9.2">🔗</a></div></figcaption></figure><div className="solutions"><details id="PhrasesInCombinationPracticeExercises-3-3-4" className="answer solution-like born-hidden-knowl"><summary className="knowl__link"><span className="type">Answer</span><span className="period heading-divison-mark heading-divison-mark__period">.</span></summary><div className="answer solution-like knowl__content">
<div className="para" id="PhrasesInCombinationPracticeExercises-3-3-4-1">Mozart, Piano Sonata K. 333, I:<div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-3-3-4-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<ul className="disc" id="PhrasesInCombinationPracticeExercises-3-3-4-2">
<li id="PhrasesInCombinationPracticeExercises-3-3-4-2-1">
<div className="para" id="PhrasesInCombinationPracticeExercises-3-3-4-2-1-1">Chords: <span className="process-math">\\(\\left.\\text{vii}^{\\circ}{}\\right.\\)</span>–<span className="process-math">\\(\\left.\\text{I}\\right.\\)</span>, <span className="process-math">\\(\\left.\\text{vi}\\right.\\)</span>–<span className="process-math">\\(\\left.\\text{V}\\right.\\)</span>, <span className="process-math">\\(\\left.\\text{vii}^{\\circ}{}\\right.\\)</span>–<span className="process-math">\\(\\left.\\text{I}\\right.\\)</span>, <span className="process-math">\\(\\left.\\text{V}\\right.\\)</span>–<span className="process-math">\\(\\left.\\text{I}\\right.\\)</span><div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-3-3-4-2-1-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-3-3-4-2-1" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PhrasesInCombinationPracticeExercises-3-3-4-2-2">
<div className="para" id="PhrasesInCombinationPracticeExercises-3-3-4-2-2-1">Cadences: IAC, HC, IAC, PAC<div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-3-3-4-2-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-3-3-4-2-2" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PhrasesInCombinationPracticeExercises-3-3-4-2-3">
<div className="para" id="PhrasesInCombinationPracticeExercises-3-3-4-2-3-1">The 2nd phrase is a sentence<div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-3-3-4-2-3-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-3-3-4-2-3" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PhrasesInCombinationPracticeExercises-3-3-4-2-4">
<div className="para" id="PhrasesInCombinationPracticeExercises-3-3-4-2-4-1">Melodic labels: <em className="emphasis">a</em>, <em className="emphasis">b</em>, <em className="emphasis">a</em>, <em className="emphasis">b’</em><div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-3-3-4-2-4-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-3-3-4-2-4" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PhrasesInCombinationPracticeExercises-3-3-4-2-5">
<div className="para" id="PhrasesInCombinationPracticeExercises-3-3-4-2-5-1">Form: parallel double period<div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-3-3-4-2-5-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-3-3-4-2-5" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
</ul>
<div className="autopermalink" data-description="Answer 13.9.2.1"><a href="#PhrasesInCombinationPracticeExercises-3-3-4" title="Copy heading and permalink for Answer 13.9.2.1" aria-label="Copy heading and permalink for Answer 13.9.2.1">🔗</a></div>
</div></details></div>
<div className="autopermalink" data-description="Exercise 13.9.2: Mozart, Piano Sonata K. 333, I"><a href="#PhrasesInCombinationPracticeExercises-3-3" title="Copy heading and permalink for Exercise 13.9.2: Mozart, Piano Sonata K. 333, I" aria-label="Copy heading and permalink for Exercise 13.9.2: Mozart, Piano Sonata K. 333, I">🔗</a></div></article><article className="exercise exercise-like" id="PhrasesInCombinationPracticeExercises-3-4"><h4 className="heading">
<span className="codenumber">3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Edmond Dédé, <span className="booktitle">Chicago, Grande Valse à l’Américaine</span>.</span>
</h4>
<div className="image-box"><img src="/theory/external/images/unit3/PRAC-EXER-phrases-dede-chicago-A.svg" role="img" className="contained" alt="" /></div> <div className="image-box"><img src="/theory/external/images/unit3/PRAC-EXER-phrases-dede-chicago-B.svg" role="img" className="contained" alt="" /></div> <div className="image-box"><img src="/theory/external/images/unit3/PRAC-EXER-phrases-dede-chicago-C.svg" role="img" className="contained" alt="" /></div> <figure className="figure figure-like" id="PhrasesInCombinationPracticeExercises-3-4-3-4"><div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/gBeigjxviQc?&amp;modestbranding=1&amp;rel=0&amp;start=39&amp;end=75" id="PhrasesInCombinationPracticeExercises-3-4-3-4-2"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">13.9.3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span><div className="autopermalink" data-description="Figure 13.9.3"><a href="#PhrasesInCombinationPracticeExercises-3-4-3-4" title="Copy heading and permalink for Figure 13.9.3" aria-label="Copy heading and permalink for Figure 13.9.3">🔗</a></div></figcaption></figure><div className="solutions"><details id="PhrasesInCombinationPracticeExercises-3-4-4" className="answer solution-like born-hidden-knowl"><summary className="knowl__link"><span className="type">Answer</span><span className="period heading-divison-mark heading-divison-mark__period">.</span></summary><div className="answer solution-like knowl__content">
<div className="para" id="PhrasesInCombinationPracticeExercises-3-4-4-1">Dédé, <span className="booktitle">Chicago</span>:<div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-3-4-4-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<ul className="disc" id="PhrasesInCombinationPracticeExercises-3-4-4-2">
<li id="PhrasesInCombinationPracticeExercises-3-4-4-2-1">
<div className="para" id="PhrasesInCombinationPracticeExercises-3-4-4-2-1-1">Chords: <span className="process-math">\\(\\left.\\text{V}\\right.\\)</span>, <span className="process-math">\\(\\left.\\text{V}\\right.\\)</span>, <span className="process-math">\\(\\left.\\text{V}\\right.\\)</span>, <span className="process-math">\\(\\left.\\text{V}\\right.\\)</span>–<span className="process-math">\\(\\left.\\text{I}\\right.\\)</span><div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-3-4-4-2-1-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-3-4-4-2-1" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PhrasesInCombinationPracticeExercises-3-4-4-2-2">
<div className="para" id="PhrasesInCombinationPracticeExercises-3-4-4-2-2-1">Cadences: HC, HC, HC, PAC<div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-3-4-4-2-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-3-4-4-2-2" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PhrasesInCombinationPracticeExercises-3-4-4-2-3">
<div className="para" id="PhrasesInCombinationPracticeExercises-3-4-4-2-3-1">All four phrases are sentences<div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-3-4-4-2-3-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-3-4-4-2-3" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PhrasesInCombinationPracticeExercises-3-4-4-2-4">
<div className="para" id="PhrasesInCombinationPracticeExercises-3-4-4-2-4-1">Melodic labels: <em className="emphasis">a</em>, <em className="emphasis">a</em>, <em className="emphasis">a</em>, <em className="emphasis">a’</em><div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-3-4-4-2-4-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-3-4-4-2-4" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
<li id="PhrasesInCombinationPracticeExercises-3-4-4-2-5">
<div className="para" id="PhrasesInCombinationPracticeExercises-3-4-4-2-5-1">Form: parallel double period<div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-3-4-4-2-5-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item"><a href="#PhrasesInCombinationPracticeExercises-3-4-4-2-5" title="Copy heading and permalink for Item" aria-label="Copy heading and permalink for Item">🔗</a></div>
</li>
</ul>
<div className="autopermalink" data-description="Answer 13.9.3.1"><a href="#PhrasesInCombinationPracticeExercises-3-4-4" title="Copy heading and permalink for Answer 13.9.3.1" aria-label="Copy heading and permalink for Answer 13.9.3.1">🔗</a></div>
</div></details></div>
<div className="autopermalink" data-description="Exercise 13.9.3: Edmond Dédé, Chicago, Grande Valse à l’Américaine"><a href="#PhrasesInCombinationPracticeExercises-3-4" title="Copy heading and permalink for Exercise 13.9.3: Edmond Dédé, Chicago, Grande Valse à l’Américaine" aria-label="Copy heading and permalink for Exercise 13.9.3: Edmond Dédé, Chicago, Grande Valse à l’Américaine">🔗</a></div></article><div className="autopermalink" data-description="Subexercises: "><a href="#PhrasesInCombinationPracticeExercises-3" title="Copy heading and permalink for Subexercises: " aria-label="Copy heading and permalink for Subexercises: ">🔗</a></div></article><section className="conclusion" id="PhrasesInCombinationPracticeExercises-4"><div className="para" id="PhrasesInCombinationPracticeExercises-4-1">Click <a className="external" href="http://musictheory.pugetsound.edu/hw/MT21C_HW_14.pdf" target="_blank">here to download the first homework assignment for this chapter.</a><div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-4-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="PhrasesInCombinationPracticeExercises-4-2">Click <a className="external" href="http://musictheory.pugetsound.edu/hw/MT21C_HW_15.pdf" target="_blank">here to download the second homework assignment for this chapter.</a><div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-4-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="PhrasesInCombinationPracticeExercises-4-3">Click <a className="external" href="http://musictheory.pugetsound.edu/hw/MT21C_Unit_3_Practice_Test.pdf" target="_blank">here to download the Unit 3 Practice Test.</a><div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-4-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="PhrasesInCombinationPracticeExercises-4-4">PDF versions of the textbook, homework exercises, and practice exercises can be found at <a className="external" href="http://musictheory.pugetsound.edu" target="_blank"><code className="code-inline tex2jax_ignore">musictheory.pugetsound.edu</code></a><div className="autopermalink" data-description="Paragraph"><a href="#PhrasesInCombinationPracticeExercises-4-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></section><div className="autopermalink" data-description="Exercises 13.9: Practice Exercises"><a href="#PhrasesInCombinationPracticeExercises" title="Copy heading and permalink for Exercises 13.9: Practice Exercises" aria-label="Copy heading and permalink for Exercises 13.9: Practice Exercises">🔗</a></div></section></div>
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

export default Ch13PhrasesincombinationpracticeexercisesPage;
