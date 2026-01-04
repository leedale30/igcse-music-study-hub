import React from 'react';
import { Link } from 'react-router-dom';

const Ch05IntervalspracticeexercisesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 05</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Practice Exercises</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 05
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Intervals
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="exercises" id="IntervalsPracticeExercises"><h2 className="heading hide-type">
<span className="type">Exercises</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">5.6</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Practice Exercises</span>
</h2>
<article className="exercise exercise-like" id="IntervalsPracticeExercises-2"><h3 className="heading"><span className="codenumber">1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span></h3>
<div className="para" id="IntervalsPracticeExercises-2-1-1">Specify only the number, not the quality, for each example.<div className="autopermalink" data-description="Paragraph"><a href="#IntervalsPracticeExercises-2-1-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div> <div className="image-box"><img src="/theory/external/images/unit1/PRAC-EXER-Intervals-number-only.svg" role="img" className="contained" /></div>
<div className="solutions"><details id="IntervalsPracticeExercises-2-2" className="answer solution-like born-hidden-knowl"><summary className="knowl__link"><span className="type">Answer</span><span className="period heading-divison-mark heading-divison-mark__period">.</span></summary><div className="answer solution-like knowl__content">
<div className="para" id="IntervalsPracticeExercises-2-2-1">1. 6, 2. 4, 3. 2, 4. 8, 5. 7<div className="autopermalink" data-description="Paragraph"><a href="#IntervalsPracticeExercises-2-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Answer 5.6.1.1"><a href="#IntervalsPracticeExercises-2-2" title="Copy heading and permalink for Answer 5.6.1.1" aria-label="Copy heading and permalink for Answer 5.6.1.1">🔗</a></div>
</div></details></div>
<div className="autopermalink" data-description="Exercise 5.6.1"><a href="#IntervalsPracticeExercises-2" title="Copy heading and permalink for Exercise 5.6.1" aria-label="Copy heading and permalink for Exercise 5.6.1">🔗</a></div></article><article className="exercise exercise-like" id="IntervalsPracticeExercises-3"><h3 className="heading"><span className="codenumber">2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span></h3>
<div className="para" id="IntervalsPracticeExercises-3-1-1">Identify the interval quality and size for each example.<div className="autopermalink" data-description="Paragraph"><a href="#IntervalsPracticeExercises-3-1-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div> <div className="image-box"><img src="/theory/external/images/unit1/PRAC-EXER-Interval-ID.svg" role="img" className="contained" /></div>
<div className="solutions"><details id="IntervalsPracticeExercises-3-2" className="answer solution-like born-hidden-knowl"><summary className="knowl__link"><span className="type">Answer</span><span className="period heading-divison-mark heading-divison-mark__period">.</span></summary><div className="answer solution-like knowl__content">
<div className="para" id="IntervalsPracticeExercises-3-2-1">1. M6, 2. M3, 3. M2, 4. P5, 5. P8, 6. +4<div className="autopermalink" data-description="Paragraph"><a href="#IntervalsPracticeExercises-3-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Answer 5.6.2.1"><a href="#IntervalsPracticeExercises-3-2" title="Copy heading and permalink for Answer 5.6.2.1" aria-label="Copy heading and permalink for Answer 5.6.2.1">🔗</a></div>
</div></details></div>
<div className="autopermalink" data-description="Exercise 5.6.2"><a href="#IntervalsPracticeExercises-3" title="Copy heading and permalink for Exercise 5.6.2" aria-label="Copy heading and permalink for Exercise 5.6.2">🔗</a></div></article><article className="exercise exercise-like" id="IntervalsPracticeExercises-4"><h3 className="heading"><span className="codenumber">3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span></h3>
<div className="para" id="IntervalsPracticeExercises-4-1-1">Write the following intervals <em className="emphasis">above</em> the given note.<div className="autopermalink" data-description="Paragraph"><a href="#IntervalsPracticeExercises-4-1-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div> <div className="image-box"><img src="/theory/external/images/unit1/PRAC-EXER-Intervals-above.svg" role="img" className="contained" /></div>
<div className="solutions"><details id="IntervalsPracticeExercises-4-2" className="answer solution-like born-hidden-knowl"><summary className="knowl__link"><span className="type">Answer</span><span className="period heading-divison-mark heading-divison-mark__period">.</span></summary><div className="answer solution-like knowl__content">
<div className="para" id="IntervalsPracticeExercises-4-2-1">Upper notes: 1. <span className="process-math">\\(\\text{D}^♭\\)</span>, 2.  <span className="process-math">\\(\\text{G}^♭\\)</span>, 3. <span className="process-math">\\(\\text{A}^♯\\)</span>, 4. <span className="process-math">\\(\\text{B}\\)</span>, 5. <span className="process-math">\\(\\text{A}\\)</span>, 6. <span className="process-math">\\(\\text{F}^♭\\)</span><div className="autopermalink" data-description="Paragraph"><a href="#IntervalsPracticeExercises-4-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Answer 5.6.3.1"><a href="#IntervalsPracticeExercises-4-2" title="Copy heading and permalink for Answer 5.6.3.1" aria-label="Copy heading and permalink for Answer 5.6.3.1">🔗</a></div>
</div></details></div>
<div className="autopermalink" data-description="Exercise 5.6.3"><a href="#IntervalsPracticeExercises-4" title="Copy heading and permalink for Exercise 5.6.3" aria-label="Copy heading and permalink for Exercise 5.6.3">🔗</a></div></article><article className="exercise exercise-like" id="IntervalsPracticeExercises-5"><h3 className="heading"><span className="codenumber">4<span className="period heading-divison-mark heading-divison-mark__period">.</span></span></h3>
<div className="para" id="IntervalsPracticeExercises-5-1-1">Write the following intervals <em className="emphasis">below</em> the given note.<div className="autopermalink" data-description="Paragraph"><a href="#IntervalsPracticeExercises-5-1-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div> <div className="image-box"><img src="/theory/external/images/unit1/PRAC-EXER-Intervals-below.svg" role="img" className="contained" /></div>
<div className="solutions"><details id="IntervalsPracticeExercises-5-2" className="answer solution-like born-hidden-knowl"><summary className="knowl__link"><span className="type">Answer</span><span className="period heading-divison-mark heading-divison-mark__period">.</span></summary><div className="answer solution-like knowl__content">
<div className="para" id="IntervalsPracticeExercises-5-2-1">Lower notes: 1. <span className="process-math">\\(\\text{G}^♯\\)</span>, 2.  <span className="process-math">\\(\\text{E}\\)</span>, 3. <span className="process-math">\\(\\text{F}\\)</span>, 4. <span className="process-math">\\(\\text{G}^♭\\)</span>, 5. <span className="process-math">\\(\\text{F}^♯\\)</span>, 6. <span className="process-math">\\(\\text{B}\\)</span><div className="autopermalink" data-description="Paragraph"><a href="#IntervalsPracticeExercises-5-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Answer 5.6.4.1"><a href="#IntervalsPracticeExercises-5-2" title="Copy heading and permalink for Answer 5.6.4.1" aria-label="Copy heading and permalink for Answer 5.6.4.1">🔗</a></div>
</div></details></div>
<div className="autopermalink" data-description="Exercise 5.6.4"><a href="#IntervalsPracticeExercises-5" title="Copy heading and permalink for Exercise 5.6.4" aria-label="Copy heading and permalink for Exercise 5.6.4">🔗</a></div></article><section className="conclusion" id="IntervalsPracticeExercises-6"><div className="para" id="IntervalsPracticeExercises-6-1">Click <a className="external" href="http://musictheory.pugetsound.edu/hw/MT21C_HW_4.pdf" target="_blank">here to download the homework.</a><div className="autopermalink" data-description="Paragraph"><a href="#IntervalsPracticeExercises-6-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="IntervalsPracticeExercises-6-2">PDF versions of the textbook, homework exercises, and practice exercises can be found at <a className="external" href="http://musictheory.pugetsound.edu" target="_blank"><code className="code-inline tex2jax_ignore">musictheory.pugetsound.edu</code></a><div className="autopermalink" data-description="Paragraph"><a href="#IntervalsPracticeExercises-6-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></section><div className="autopermalink" data-description="Exercises 5.6: Practice Exercises"><a href="#IntervalsPracticeExercises" title="Copy heading and permalink for Exercises 5.6: Practice Exercises" aria-label="Copy heading and permalink for Exercises 5.6: Practice Exercises">🔗</a></div></section></div>
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

export default Ch05IntervalspracticeexercisesPage;
