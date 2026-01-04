import React from 'react';
import { Link } from 'react-router-dom';

const Ch10SuspensionwritingandanalysisPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 10</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Suspension Writing and Analysis</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 10
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Non-Chord Tones
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Suspension Writing and Analysis
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="SuspensionWritingAndAnalysis"><h2 className="heading hide-type">
<span className="type">Section</span> <span className="codenumber">10.13</span> <span className="title">Suspension Writing and Analysis</span>
</h2>
<div className="introduction">
<p>Suspensions are among the most expressive and structurally important non-chord tones in tonal music. They create harmonic tension through delayed resolution and are essential for understanding Baroque counterpoint, Classical phrase structure, and Romantic harmonic expression. This section provides comprehensive instruction on suspension theory, identification, and analytical applications.</p>
</div>
<article className="paragraphs" id="SuspensionDefinition"><h5 className="heading"><span className="title">Definition and Basic Principles</span></h5>
<div className="paragraphs" id="WhatIsASuspension"><h6 className="heading"><span className="title">What is a Suspension?</span></h6>
<p>A suspension is a non-chord tone that:</p>
<ul className="disc">
<li><p><strong>Preparation:</strong> Appears as a chord tone in the preceding harmony</p></li>
<li><p><strong>Suspension:</strong> Is held over (or repeated) into the next chord where it becomes dissonant</p></li>
<li><p><strong>Resolution:</strong> Moves by step (usually downward) to a chord tone</p></li>
</ul>
<p>The three-part process of <em>preparation-suspension-resolution</em> is fundamental to understanding how suspensions function in tonal music.</p>
</div>
<div className="paragraphs" id="SuspensionTypes"><h6 className="heading"><span className="title">Common Suspension Types</span></h6>
<p>Suspensions are typically identified by the intervals they form with the bass:</p>
<ul className="disc">
<li><p><strong>4-3 suspension:</strong> Fourth resolves down to third</p></li>
<li><p><strong>7-6 suspension:</strong> Seventh resolves down to sixth</p></li>
<li><p><strong>9-8 suspension:</strong> Ninth resolves down to octave</p></li>
<li><p><strong>2-3 suspension:</strong> Second resolves up to third (less common)</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="DetailedSuspensionTypes"><h5 className="heading"><span className="title">Detailed Analysis of Suspension Types</span></h5>
<div className="paragraphs" id="FourThreeSuspension"><h6 className="heading"><span className="title">The 4-3 Suspension</span></h6>
<p><strong>Characteristics:</strong></p>
<ul className="disc">
<li><p><strong>Most common type:</strong> Frequently found in all musical periods</p></li>
<li><p><strong>Strong dissonance:</strong> Perfect fourth against bass creates notable tension</p></li>
<li><p><strong>Typical contexts:</strong> Cadential passages, phrase endings, sequential patterns</p></li>
<li><p><strong>Voice leading:</strong> Usually occurs in upper voices</p></li>
</ul>
<p><strong>Analytical considerations:</strong></p>
<ul className="disc">
<li><p>Often found at cadences (V-I progressions)</p></li>
<li><p>May be prepared by step or leap in previous chord</p></li>
<li><p>Resolution to third is typically smooth and satisfying</p></li>
</ul>
</div>
<div className="paragraphs" id="SevenSixSuspension"><h6 className="heading"><span className="title">The 7-6 Suspension</span></h6>
<p><strong>Characteristics:</strong></p>
<ul className="disc">
<li><p><strong>Moderate dissonance:</strong> Seventh creates tension without being overly harsh</p></li>
<li><p><strong>Expressive quality:</strong> Often used for emotional or lyrical effects</p></li>
<li><p><strong>Common in sequences:</strong> Particularly effective in descending sequences</p></li>
<li><p><strong>Baroque preference:</strong> Especially prominent in Bach's works</p></li>
</ul>
<p><strong>Analytical considerations:</strong></p>
<ul className="disc">
<li><p>Frequently appears in soprano voice</p></li>
<li><p>Often part of longer melodic lines</p></li>
<li><p>May be combined with other non-chord tones</p></li>
</ul>
</div>
<div className="paragraphs" id="NineEightSuspension"><h6 className="heading"><span className="title">The 9-8 Suspension</span></h6>
<p><strong>Characteristics:</strong></p>
<ul className="disc">
<li><p><strong>Strong dissonance:</strong> Ninth creates significant harmonic tension</p></li>
<li><p><strong>Bass considerations:</strong> Requires careful handling due to interval size</p></li>
<li><p><strong>Dramatic effect:</strong> Often used for climactic moments</p></li>
<li><p><strong>Less frequent:</strong> More specialized than 4-3 or 7-6 types</p></li>
</ul>
<p><strong>Analytical considerations:</strong></p>
<ul className="disc">
<li><p>Usually found in upper voices</p></li>
<li><p>May require compound interval analysis</p></li>
<li><p>Often signals important structural moments</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="SuspensionInContext"><h5 className="heading"><span className="title">Suspensions in Musical Context</span></h5>
<div className="paragraphs" id="BaroqueUsage"><h6 className="heading"><span className="title">Baroque Period Applications</span></h6>
<p><strong>Bach's Chorale Harmonizations:</strong></p>
<ul className="disc">
<li><p>Systematic use of suspensions for text expression</p></li>
<li><p>Careful preparation and resolution in four-part writing</p></li>
<li><p>Integration with other non-chord tones</p></li>
<li><p>Structural role in phrase organization</p></li>
</ul>
<p><strong>Instrumental Works:</strong></p>
<ul className="disc">
<li><p>Suspensions in fugal subjects and episodes</p></li>
<li><p>Sequential patterns using suspension chains</p></li>
<li><p>Expressive use in slow movements</p></li>
</ul>
</div>
<div className="paragraphs" id="ClassicalUsage"><h6 className="heading"><span className="title">Classical Period Applications</span></h6>
<ul className="disc">
<li><p><strong>Cadential emphasis:</strong> Suspensions at phrase endings</p></li>
<li><p><strong>Motivic development:</strong> Suspensions as thematic elements</p></li>
<li><p><strong>Formal articulation:</strong> Marking important structural points</p></li>
<li><p><strong>Orchestral writing:</strong> Suspensions across instrumental families</p></li>
</ul>
</div>
<div className="paragraphs" id="RomanticExpansion"><h6 className="heading"><span className="title">Romantic Period Expansion</span></h6>
<ul className="disc">
<li><p><strong>Extended resolutions:</strong> Delayed or interrupted resolution patterns</p></li>
<li><p><strong>Chromatic suspensions:</strong> Integration with chromatic harmony</p></li>
<li><p><strong>Chain suspensions:</strong> Multiple suspensions in succession</p></li>
<li><p><strong>Expressive intensity:</strong> Heightened emotional effect</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="AnalyticalTechniques"><h5 className="heading"><span className="title">Analytical Techniques and Identification</span></h5>
<div className="paragraphs" id="IdentificationSteps"><h6 className="heading"><span className="title">Step-by-Step Identification Process</span></h6>
<ol className="decimal">
<li><p><strong>Locate the dissonance:</strong> Find notes that don't belong to the underlying chord</p></li>
<li><p><strong>Check preparation:</strong> Verify that the dissonant note appeared in the previous chord</p></li>
<li><p><strong>Confirm resolution:</strong> Ensure the note resolves by step to a chord tone</p></li>
<li><p><strong>Measure intervals:</strong> Determine the suspension type (4-3, 7-6, etc.)</p></li>
<li><p><strong>Consider context:</strong> Evaluate the suspension's role in the phrase</p></li>
</ol>
</div>
<div className="paragraphs" id="AnalyticalNotation"><h6 className="heading"><span className="title">Analytical Notation Methods</span></h6>
<ul className="disc">
<li><p><strong>Roman numeral analysis:</strong> Show suspension figures above chord symbols</p></li>
<li><p><strong>Figured bass notation:</strong> Use traditional suspension figures</p></li>
<li><p><strong>Linear analysis:</strong> Show voice-leading connections</p></li>
<li><p><strong>Reduction techniques:</strong> Remove suspensions to reveal underlying harmony</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="WritingGuidelines"><h5 className="heading"><span className="title">Guidelines for Writing Suspensions</span></h5>
<div className="paragraphs" id="PreparationRules"><h6 className="heading"><span className="title">Preparation Requirements</span></h6>
<ul className="disc">
<li><p><strong>Same voice:</strong> Suspension must be prepared in the same voice</p></li>
<li><p><strong>Strong beat preparation:</strong> Preparation typically occurs on strong beat</p></li>
<li><p><strong>Consonant preparation:</strong> Prepared note must be consonant in previous chord</p></li>
<li><p><strong>Duration:</strong> Preparation should be at least as long as suspension</p></li>
</ul>
</div>
<div className="paragraphs" id="ResolutionRules"><h6 className="heading"><span className="title">Resolution Requirements</span></h6>
<ul className="disc">
<li><p><strong>Stepwise motion:</strong> Resolution must be by step (usually downward)</p></li>
<li><p><strong>Consonant resolution:</strong> Resolution note must be consonant with bass</p></li>
<li><p><strong>Same voice:</strong> Resolution occurs in same voice as suspension</p></li>
<li><p><strong>Weaker beat:</strong> Resolution typically occurs on weaker beat than suspension</p></li>
</ul>
</div>
<div className="paragraphs" id="VoiceLeadingConsiderations"><h6 className="heading"><span className="title">Voice Leading Considerations</span></h6>
<ul className="disc">
<li><p><strong>Avoid doubling:</strong> Don't double the resolution note during suspension</p></li>
<li><p><strong>Bass movement:</strong> Consider bass line motion during suspension</p></li>
<li><p><strong>Other voices:</strong> Ensure smooth voice leading in non-suspended voices</p></li>
<li><p><strong>Harmonic rhythm:</strong> Consider timing of harmonic changes</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="SpecialCases"><h5 className="heading"><span className="title">Special Cases and Variations</span></h5>
<div className="paragraphs" id="ChainSuspensions"><h6 className="heading"><span className="title">Chain Suspensions</span></h6>
<p>Multiple suspensions occurring in succession:</p>
<ul className="disc">
<li><p><strong>Sequential patterns:</strong> Suspensions in descending or ascending sequences</p></li>
<li><p><strong>Voice overlap:</strong> Different voices entering with suspensions</p></li>
<li><p><strong>Cumulative effect:</strong> Building tension through multiple suspensions</p></li>
</ul>
</div>
<div className="paragraphs" id="OrnamentedSuspensions"><h6 className="heading"><span className="title">Ornamented Suspensions</span></h6>
<ul className="disc">
<li><p><strong>Decorated resolution:</strong> Resolution note approached through ornaments</p></li>
<li><p><strong>Suspension figures:</strong> Suspensions combined with other non-chord tones</p></li>
<li><p><strong>Compound suspensions:</strong> Multiple suspension types simultaneously</p></li>
</ul>
</div>
<div className="paragraphs" id="FalseSuspensions"><h6 className="heading"><span className="title">False Suspensions and Related Figures</span></h6>
<ul className="disc">
<li><p><strong>Unprepared suspensions:</strong> Suspension effect without proper preparation</p></li>
<li><p><strong>Upward resolving suspensions:</strong> 2-3 and similar patterns</p></li>
<li><p><strong>Suspension-like figures:</strong> Similar effect through different means</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="PracticalExercises"><h5 className="heading"><span className="title">Practical Analysis Exercises</span></h5>
<p>To develop suspension analysis skills:</p>
<ol className="decimal">
<li><p><strong>Bach Chorales:</strong> Analyze suspension usage in four-part settings</p></li>
<li><p><strong>Classical sonatas:</strong> Identify suspensions in development sections</p></li>
<li><p><strong>Baroque instrumental works:</strong> Study suspension chains in sequences</p></li>
<li><p><strong>Romantic songs:</strong> Examine expressive suspension usage</p></li>
<li><p><strong>Composition exercises:</strong> Write original passages using various suspension types</p></li>
</ol>
</article>
<div className="conclusion">
<p>Mastery of suspension writing and analysis is essential for understanding tonal music across all periods. The systematic approach of preparation-suspension-resolution provides a framework for both analytical understanding and creative application. Through careful study of suspension types, contexts, and voice-leading principles, students develop the skills necessary for sophisticated musical analysis and composition.</p>
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

export default Ch10SuspensionwritingandanalysisPage;
