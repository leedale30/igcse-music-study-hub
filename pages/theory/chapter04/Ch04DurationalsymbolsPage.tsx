import React from 'react';
import { Link } from 'react-router-dom';

const Ch04DurationalsymbolsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 04</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Durational Symbols</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 04
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Rhythm
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Durational Symbols
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="DurationalSymbols"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">4.2</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Durational Symbols</span>
</h2>
<div className="para" id="DurationalSymbols-2">In the present day, the most common time signature is <span className="process-math">\\(\\begin{smallmatrix}4\\\\4\\end{smallmatrix}\\)</span> (also known as “common time”). It makes sense to introduce durational symbols in the context of <span className="process-math">\\(\\begin{smallmatrix}4\\\\4\\end{smallmatrix}\\)</span> because a whole note takes up a whole measure in <span className="process-math">\\(\\begin{smallmatrix}4\\\\4\\end{smallmatrix}\\)</span>, a half note takes up half a measure of <span className="process-math">\\(\\begin{smallmatrix}4\\\\4\\end{smallmatrix}\\)</span>, a quarter note takes up <span className="process-math">\\({1\\over 4}\\)</span> of a measure, and so on.<div className="autopermalink" data-description="Paragraph"><a href="#DurationalSymbols-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="DurationalSymbols-3"><div className="image-box"><img src="/theory/external/images/unit1/durational-symbols.svg" role="img" className="contained" alt="An illustration of the above paragraph in musical symbols" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">4.2.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span><div className="autopermalink" data-description="Figure 4.2.1"><a href="#DurationalSymbols-3" title="Copy heading and permalink for Figure 4.2.1" aria-label="Copy heading and permalink for Figure 4.2.1">🔗</a></div></figcaption></figure><div className="para" id="DurationalSymbols-4">Here are durational symbols for rests.<div className="autopermalink" data-description="Paragraph"><a href="#DurationalSymbols-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/rests-whole-through-32nd.svg" role="img" className="contained" alt="Musical symbols for rests" /></div>
<div className="para" id="DurationalSymbols-6">To put this information into practice, listen to the durational values double in speed in each measure of the following example.<div className="autopermalink" data-description="Paragraph"><a href="#DurationalSymbols-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/durational-values-doubling.svg" role="img" className="contained" alt="Each measure has values twice as fast as the previous, from quarter notes to 32nd notes" /></div>
<div className="para" id="DurationalSymbols-8">Two rare durational values are the double whole note (also called a “breve”) and the 64th note, which is twice as fast as a 32nd note.<div className="autopermalink" data-description="Paragraph"><a href="#DurationalSymbols-8" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/double-whole-notes-and-64th-notes.svg" role="img" className="contained" alt="musical symbols for double whole notes and 64th notes" /></div>
<div className="autopermalink" data-description="Section 4.2: Durational Symbols"><a href="#DurationalSymbols" title="Copy heading and permalink for Section 4.2: Durational Symbols" aria-label="Copy heading and permalink for Section 4.2: Durational Symbols">🔗</a></div></section></div>
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

export default Ch04DurationalsymbolsPage;
