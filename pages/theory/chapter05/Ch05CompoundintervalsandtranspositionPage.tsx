import React from 'react';
import { Link } from 'react-router-dom';

const Ch05CompoundintervalsandtranspositionPage: React.FC = () => {
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
        <span className="text-gray-700 dark:text-gray-300">Compound Intervals and Transposition</span>
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
          Compound Intervals and Transposition
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="CompoundIntervalsAndTransposition"><h2 className="heading hide-type">
<span className="type">Section</span> <span className="codenumber">5.5</span> <span className="title">Compound Intervals and Transposition</span>
</h2>
<div className="introduction">
<p>Compound intervals extend beyond the octave and are essential for understanding advanced harmonic relationships. This section also introduces practical transposition skills required for standard orchestral and band instruments.</p>
</div>
<article className="paragraphs" id="CompoundIntervals"><h5 className="heading"><span className="title">Defining Compound Intervals</span></h5>
<p>Compound intervals are intervals larger than an octave. They are formed by adding seven to the simple interval number:</p>
<ul className="disc">
<li><p><strong>9th (Compound 2nd):</strong> Octave + 2nd = 9th</p></li>
<li><p><strong>10th (Compound 3rd):</strong> Octave + 3rd = 10th</p></li>
<li><p><strong>11th (Compound 4th):</strong> Octave + 4th = 11th</p></li>
<li><p><strong>12th (Compound 5th):</strong> Octave + 5th = 12th</p></li>
<li><p><strong>13th (Compound 6th):</strong> Octave + 6th = 13th</p></li>
<li><p><strong>14th (Compound 7th):</strong> Octave + 7th = 14th</p></li>
<li><p><strong>15th (Double Octave):</strong> Two octaves = 15th</p></li>
</ul>
<p>The quality of compound intervals matches their simple interval counterparts (major, minor, perfect, augmented, diminished).</p>
</article>
<article className="paragraphs" id="TransposingInstruments"><h5 className="heading"><span className="title">Standard Transposing Instruments</span></h5>
<p>Understanding transposition is crucial for orchestral and band music. Common transposing instruments include:</p>
<div className="paragraphs" id="BFlatInstruments"><h6 className="heading"><span className="title">B♭ Instruments</span></h6>
<ul className="disc">
<li><p><strong>Trumpet in B♭:</strong> Sounds a major 2nd lower than written</p></li>
<li><p><strong>Clarinet in B♭:</strong> Sounds a major 2nd lower than written</p></li>
<li><p><strong>Tenor Saxophone:</strong> Sounds a major 9th lower than written</p></li>
</ul>
</div>
<div className="paragraphs" id="AInstruments"><h6 className="heading"><span className="title">A Instruments</span></h6>
<ul className="disc">
<li><p><strong>Clarinet in A:</strong> Sounds a minor 3rd lower than written</p></li>
<li><p><strong>Trumpet in A:</strong> Sounds a minor 3rd lower than written (historical)</p></li>
</ul>
</div>
<div className="paragraphs" id="FInstruments"><h6 className="heading"><span className="title">F Instruments</span></h6>
<ul className="disc">
<li><p><strong>Horn in F:</strong> Sounds a perfect 5th lower than written</p></li>
<li><p><strong>English Horn:</strong> Sounds a perfect 5th lower than written</p></li>
</ul>
</div>
<div className="paragraphs" id="EFlatInstruments"><h6 className="heading"><span className="title">E♭ Instruments</span></h6>
<ul className="disc">
<li><p><strong>Horn in E♭:</strong> Sounds a major 6th lower than written</p></li>
<li><p><strong>Alto Saxophone:</strong> Sounds a major 6th lower than written</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="TranspositionPractice"><h5 className="heading"><span className="title">Practical Transposition Applications</span></h5>
<p>Transposition skills are essential for:</p>
<ol className="decimal">
<li><p><strong>Score Reading:</strong> Understanding what pitches instruments actually produce</p></li>
<li><p><strong>Arranging:</strong> Writing parts for transposing instruments</p></li>
<li><p><strong>Performance:</strong> Playing piano reductions of orchestral scores</p></li>
<li><p><strong>Analysis:</strong> Understanding harmonic relationships in orchestral music</p></li>
</ol>
</article>
<article className="paragraphs" id="TranspositionMethods"><h5 className="heading"><span className="title">Transposition Methods</span></h5>
<div className="paragraphs" id="IntervalMethod"><h6 className="heading"><span className="title">Interval Method</span></h6>
<p>Move each note by the required interval:</p>
<ul className="disc">
<li><p>For B♭ instruments: transpose up a major 2nd</p></li>
<li><p>For F instruments: transpose up a perfect 5th</p></li>
<li><p>For A instruments: transpose up a minor 3rd</p></li>
</ul>
</div>
<div className="paragraphs" id="KeySignatureMethod"><h6 className="heading"><span className="title">Key Signature Method</span></h6>
<p>Change the key signature and adjust accidentals:</p>
<ul className="disc">
<li><p>Identify the concert pitch key</p></li>
<li><p>Apply the transposition interval to find the new key</p></li>
<li><p>Write the music in the new key signature</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="CompoundIntervalApplications"><h5 className="heading"><span className="title">Compound Intervals in Music</span></h5>
<p>Compound intervals appear frequently in:</p>
<ul className="disc">
<li><p><strong>Extended Chords:</strong> 9th, 11th, and 13th chords in jazz and contemporary music</p></li>
<li><p><strong>Orchestral Writing:</strong> Wide spacing between instrumental parts</p></li>
<li><p><strong>Piano Music:</strong> Left hand bass notes with right hand melodies</p></li>
<li><p><strong>Vocal Music:</strong> Wide intervals between voice parts</p></li>
</ul>
</article>
<div className="conclusion">
<p>Mastery of compound intervals and transposition provides the foundation for advanced harmonic study and practical musicianship. These skills are essential for composers, arrangers, conductors, and performers working with diverse instrumental ensembles.</p>
</div>
</section></div>` }} />
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

export default Ch05CompoundintervalsandtranspositionPage;
