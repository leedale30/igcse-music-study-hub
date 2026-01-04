import React from 'react';
import { Link } from 'react-router-dom';

const Ch01BasicconceptspracticeexercisesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 01</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Practice Exercises</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 01
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Basic Concepts
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="exercises" id="BasicConceptsPracticeExercises"><h2 className="heading hide-type">
<span className="type">Exercises</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">1.6</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Practice Exercises</span>
</h2>
<article className="exercise exercise-like" id="BasicConceptsPracticeExercises-2"><h3 className="heading"><span className="codenumber">1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span></h3>
<div className="para" id="BasicConceptsPracticeExercises-2-1-1">For each note on the piano keyboard, specify the note name and octave register.<div className="autopermalink" data-description="Paragraph"><a href="#BasicConceptsPracticeExercises-2-1-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div> <div className="image-box"><img src="/theory/external/images/unit1/PRAC-EXER-note-registers-section-1.svg" role="img" className="contained" /></div>
<div className="solutions"><details id="BasicConceptsPracticeExercises-2-2" className="answer solution-like born-hidden-knowl"><summary className="knowl__link"><span className="type">Answer</span><span className="period heading-divison-mark heading-divison-mark__period">.</span></summary><div className="answer solution-like knowl__content">
<div className="para" id="BasicConceptsPracticeExercises-2-2-1">1. A0, 2. F1, 3. D2, 4. G2, 5. B3, 6. E4, 7. A4, 8. G5, 9. A6, 10. B7<div className="autopermalink" data-description="Paragraph"><a href="#BasicConceptsPracticeExercises-2-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Answer 1.6.1.1"><a href="#BasicConceptsPracticeExercises-2-2" title="Copy heading and permalink for Answer 1.6.1.1" aria-label="Copy heading and permalink for Answer 1.6.1.1">🔗</a></div>
</div></details></div>
<div className="autopermalink" data-description="Exercise 1.6.1"><a href="#BasicConceptsPracticeExercises-2" title="Copy heading and permalink for Exercise 1.6.1" aria-label="Copy heading and permalink for Exercise 1.6.1">🔗</a></div></article><article className="exercise exercise-like" id="BasicConceptsPracticeExercises-3"><h3 className="heading"><span className="codenumber">2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span></h3>
<div className="para" id="BasicConceptsPracticeExercises-3-1-1">For each note on the staff, specify the note name and octave register.<div className="autopermalink" data-description="Paragraph"><a href="#BasicConceptsPracticeExercises-3-1-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div> <div className="image-box"><img src="/theory/external/images/unit1/PRAC-EXER-note-registers-section-2.svg" role="img" className="contained" /></div>
<div className="solutions"><details id="BasicConceptsPracticeExercises-3-2" className="answer solution-like born-hidden-knowl"><summary className="knowl__link"><span className="type">Answer</span><span className="period heading-divison-mark heading-divison-mark__period">.</span></summary><div className="answer solution-like knowl__content">
<div className="para" id="BasicConceptsPracticeExercises-3-2-1">1. E5, 2. D6, 3. F4, 4. G3, 5. A4, 6. E4, 7. G3, 8. A2, 9. E4, 10. E4, 11. G3, 12. C4<div className="autopermalink" data-description="Paragraph"><a href="#BasicConceptsPracticeExercises-3-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Answer 1.6.2.1"><a href="#BasicConceptsPracticeExercises-3-2" title="Copy heading and permalink for Answer 1.6.2.1" aria-label="Copy heading and permalink for Answer 1.6.2.1">🔗</a></div>
</div></details></div>
<div className="autopermalink" data-description="Exercise 1.6.2"><a href="#BasicConceptsPracticeExercises-3" title="Copy heading and permalink for Exercise 1.6.2" aria-label="Copy heading and permalink for Exercise 1.6.2">🔗</a></div></article><article className="exercise exercise-like" id="BasicConceptsPracticeExercises-4"><h3 className="heading"><span className="codenumber">3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span></h3>
<div className="para" id="BasicConceptsPracticeExercises-4-1-1">Provide two enharmically equivalent notes for each given note.<div className="autopermalink" data-description="Paragraph"><a href="#BasicConceptsPracticeExercises-4-1-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div> <div className="image-box"><img src="/theory/external/images/unit1/PRAC-EXER-writing-enharmonic-notes.svg" role="img" className="contained" /></div>
<div className="solutions"><details id="BasicConceptsPracticeExercises-4-2" className="answer solution-like born-hidden-knowl"><summary className="knowl__link"><span className="type">Answer</span><span className="period heading-divison-mark heading-divison-mark__period">.</span></summary><div className="answer solution-like knowl__content">
<div className="para" id="BasicConceptsPracticeExercises-4-2-1">1. <span className="process-math">\\(\\text{G}^𝄫\\)</span> and <span className="process-math">\\(\\text{E}^♯\\)</span>; 2. <span className="process-math">\\(\\text{D}^♯\\)</span> and <span className="process-math">\\(\\text{F}^𝄫\\)</span>; 3. <span className="process-math">\\(\\text{G}^𝄪\\)</span> and <span className="process-math">\\(\\text{B}^𝄫\\)</span>; 4. <span className="process-math">\\(\\text{G}^♭\\)</span> and <span className="process-math">\\(\\text{E}^𝄪\\)</span><div className="autopermalink" data-description="Paragraph"><a href="#BasicConceptsPracticeExercises-4-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Answer 1.6.3.1"><a href="#BasicConceptsPracticeExercises-4-2" title="Copy heading and permalink for Answer 1.6.3.1" aria-label="Copy heading and permalink for Answer 1.6.3.1">🔗</a></div>
</div></details></div>
<div className="autopermalink" data-description="Exercise 1.6.3"><a href="#BasicConceptsPracticeExercises-4" title="Copy heading and permalink for Exercise 1.6.3" aria-label="Copy heading and permalink for Exercise 1.6.3">🔗</a></div></article><section className="conclusion" id="BasicConceptsPracticeExercises-5"><div className="para" id="BasicConceptsPracticeExercises-5-1">PDF versions of the textbook, homework exercises, and practice exercises can be found at <a className="external" href="http://musictheory.pugetsound.edu" target="_blank"><code className="code-inline tex2jax_ignore">musictheory.pugetsound.edu</code></a><div className="autopermalink" data-description="Paragraph"><a href="#BasicConceptsPracticeExercises-5-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></section><div className="autopermalink" data-description="Exercises 1.6: Practice Exercises"><a href="#BasicConceptsPracticeExercises" title="Copy heading and permalink for Exercises 1.6: Practice Exercises" aria-label="Copy heading and permalink for Exercises 1.6: Practice Exercises">🔗</a></div></section></div>
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

export default Ch01BasicconceptspracticeexercisesPage;
