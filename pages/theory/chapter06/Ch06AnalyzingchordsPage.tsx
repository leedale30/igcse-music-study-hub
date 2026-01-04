import React from 'react';
import { Link } from 'react-router-dom';

const Ch06AnalyzingchordsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 06</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Analyzing Chords</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 06
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Triads
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Analyzing Chords
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="AnalyzingChords"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">6.4</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Analyzing Chords</span>
</h2>
<div className="para" id="AnalyzingChords-2">When a three-note chord is represented by four or more notes (some of which are duplicates of the original three notes) and spread out across a grand staff, we can arrive at a lead-sheet symbol by answering three questions:<div className="autopermalink" data-description="Paragraph"><a href="#AnalyzingChords-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<ol className="decimal" id="AnalyzingChords-3">
<li id="AnalyzingChords-3-1">
<div className="para" id="AnalyzingChords-3-1-1">What is the root of the chord?<div className="autopermalink" data-description="Paragraph"><a href="#AnalyzingChords-3-1-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item 1"><a href="#AnalyzingChords-3-1" title="Copy heading and permalink for Item 1" aria-label="Copy heading and permalink for Item 1">🔗</a></div>
</li>
<li id="AnalyzingChords-3-2">
<div className="para" id="AnalyzingChords-3-2-1">What is the quality of the chord (i.e., is the chord major, minor, diminished, or augmented)?<div className="autopermalink" data-description="Paragraph"><a href="#AnalyzingChords-3-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item 2"><a href="#AnalyzingChords-3-2" title="Copy heading and permalink for Item 2" aria-label="Copy heading and permalink for Item 2">🔗</a></div>
</li>
<li id="AnalyzingChords-3-3">
<div className="para" id="AnalyzingChords-3-3-1">What is the bass note (i.e., is the chord inverted)?<div className="autopermalink" data-description="Paragraph"><a href="#AnalyzingChords-3-3-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item 3"><a href="#AnalyzingChords-3-3" title="Copy heading and permalink for Item 3" aria-label="Copy heading and permalink for Item 3">🔗</a></div>
</li>
</ol>
<div className="para" id="AnalyzingChords-4">To determine the root of the chord, write all the notes only on the lines of the staff in treble clef (you may need to use ledger lines).<div className="autopermalink" data-description="Paragraph"><a href="#AnalyzingChords-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/triads-analyzing-stacking-on-lines.svg" role="img" className="contained" /></div>
<div className="para" id="AnalyzingChords-6">You could also choose to write all the notes only on the spaces in a staff.<div className="autopermalink" data-description="Paragraph"><a href="#AnalyzingChords-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/triads-analyzing-stacking-on-spaces.svg" role="img" className="contained" /></div>
<div className="para" id="AnalyzingChords-8">The bottom note is the root when the chord is stacked as a triad. In this case, the root is <span className="process-math">\\(\\text{D}\\)</span>.<div className="autopermalink" data-description="Paragraph"><a href="#AnalyzingChords-8" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="AnalyzingChords-9">Next, determine the quality of the triad (major, minor, diminished, or augmented) by analyzing if there is a M3 or m3 from the root to the 3rd, and if there is a M3 or m3 from the 3rd to 5th.<div className="autopermalink" data-description="Paragraph"><a href="#AnalyzingChords-9" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="sidebyside"><div className="sbsrow">
<div className="sbspanel sbspanel--top top"><img src="/theory/external/images/unit1/triads-analyzing-3rd-from-D-to-F.svg" role="img" className="contained" /></div>
<div className="sbspanel sbspanel--top top"><img src="/theory/external/images/unit1/triads-analyzing-3rd-from-F-to-A.svg" role="img" className="contained" /></div>
</div></div>
<div className="para" id="AnalyzingChords-11">Since there is a m3 (3 half steps) from <span className="process-math">\\(\\text{D}\\)</span> to <span className="process-math">\\(\\text{F}\\)</span> and a M3 (4 half steps) from <span className="process-math">\\(\\text{F}\\)</span> to <span className="process-math">\\(\\text{A}\\)</span>, the triad is minor.<div className="autopermalink" data-description="Paragraph"><a href="#AnalyzingChords-11" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="AnalyzingChords-12">Finally, determine if the chord is inverted by checking to see if a note other than the root is the lowest note. Since the bass note (lowest note) is the root <span className="process-math">\\(\\text{D}\\)</span>, the chord is not inverted. The chord is in root position, so the lead-sheet symbol is <span className="process-math">\\(\\left.\\text{D}\\text{m}\\right.\\)</span>.<div className="autopermalink" data-description="Paragraph"><a href="#AnalyzingChords-12" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="AnalyzingChords-13">Now, try the process again.<div className="autopermalink" data-description="Paragraph"><a href="#AnalyzingChords-13" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/triads-analyzing-2nd-chord-to-try.svg" role="img" className="contained" /></div>
<div className="para" id="AnalyzingChords-15">On scratch paper, stack the notes only on lines in the treble clef to determine the root.<div className="autopermalink" data-description="Paragraph"><a href="#AnalyzingChords-15" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/triads-analyzing-2nd-chord-stacked.svg" role="img" className="contained" /></div>
<div className="para" id="AnalyzingChords-17">The root is <span className="process-math">\\(\\text{E}\\)</span>.<div className="autopermalink" data-description="Paragraph"><a href="#AnalyzingChords-17" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="AnalyzingChords-18">Analyze the quality of the triad by measuring from <span className="process-math">\\(\\text{E}\\)</span> to <span className="process-math">\\(\\text{G}\\)</span> and from <span className="process-math">\\(\\text{G}\\)</span> to <span className="process-math">\\(\\text{B}^♭\\)</span>.<div className="autopermalink" data-description="Paragraph"><a href="#AnalyzingChords-18" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/triads-analyzing-2nd-chord-on-piano.svg" role="img" className="contained" /></div>
<div className="para" id="AnalyzingChords-20">It is an <span className="process-math">\\(\\text{E}\\)</span> diminished triad (<span className="process-math">\\(\\left.\\text{E}^{\\circ}{}\\right.\\)</span>).<div className="autopermalink" data-description="Paragraph"><a href="#AnalyzingChords-20" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="AnalyzingChords-21">Finally, determine if the chord is inverted. Is the root (<span className="process-math">\\(\\text{E}\\)</span>) the lowest note?<div className="autopermalink" data-description="Paragraph"><a href="#AnalyzingChords-21" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/triads-analyzing-2nd-chord-to-try.svg" role="img" className="contained" /></div>
<div className="para" id="AnalyzingChords-23">Since the lowest note is <span className="process-math">\\(\\text{G}\\)</span>, the chord is inverted. Our lead-sheet symbol is <span className="process-math">\\(\\left.\\text{E}^{\\circ}{}\\middle/\\text{G}\\right.\\)</span>, which means we have an <span className="process-math">\\(\\left.\\text{E}^{\\circ}{}\\right.\\)</span> chord with a <span className="process-math">\\(\\text{G}\\)</span> in the bass.<div className="autopermalink" data-description="Paragraph"><a href="#AnalyzingChords-23" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Section 6.4: Analyzing Chords"><a href="#AnalyzingChords" title="Copy heading and permalink for Section 6.4: Analyzing Chords" aria-label="Copy heading and permalink for Section 6.4: Analyzing Chords">🔗</a></div></section></div>
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

export default Ch06AnalyzingchordsPage;
