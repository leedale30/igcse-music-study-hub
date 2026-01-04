import React from 'react';
import { Link } from 'react-router-dom';

const Ch10TonicanddominantpedalsPage: React.FC = () => {
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
        <span className="text-gray-700 dark:text-gray-300">Tonic and Dominant Pedals</span>
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
          Tonic and Dominant Pedals
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="TonicAndDominantPedals"><h2 className="heading hide-type">
<span className="type">Section</span> <span className="codenumber">10.14</span> <span className="title">Tonic and Dominant Pedals</span>
</h2>
<div className="introduction">
<p>Pedal notes (or pedal points) are sustained or repeated notes that persist while harmonies change above or around them. Tonic and dominant pedals are among the most important and frequently used types, serving crucial structural and expressive functions in tonal music. Understanding their compositional applications and analytical significance is essential for comprehensive musical understanding.</p>
</div>
<article className="paragraphs" id="PedalDefinition"><h5 className="heading"><span className="title">Definition and Basic Principles</span></h5>
<div className="paragraphs" id="WhatIsAPedal"><h6 className="heading"><span className="title">What is a Pedal Note?</span></h6>
<p>A pedal note is a sustained or repeated pitch that:</p>
<ul className="disc">
<li><p><strong>Maintains its pitch:</strong> Remains constant while other voices move</p></li>
<li><p><strong>Creates harmonic tension:</strong> May be consonant or dissonant with changing harmonies</p></li>
<li><p><strong>Provides stability:</strong> Acts as an anchor point in the harmonic progression</p></li>
<li><p><strong>Serves structural function:</strong> Often marks important formal sections</p></li>
</ul>
</div>
<div className="paragraphs" id="PedalTypes"><h6 className="heading"><span className="title">Types of Pedal Notes</span></h6>
<ul className="disc">
<li><p><strong>Bass pedal:</strong> Sustained note in the lowest voice (most common)</p></li>
<li><p><strong>Soprano pedal:</strong> Sustained note in the highest voice</p></li>
<li><p><strong>Inner pedal:</strong> Sustained note in middle voices</p></li>
<li><p><strong>Inverted pedal:</strong> Pedal note in upper voice while bass moves</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="TonicPedal"><h5 className="heading"><span className="title">The Tonic Pedal</span></h5>
<div className="paragraphs" id="TonicCharacteristics"><h6 className="heading"><span className="title">Characteristics and Function</span></h6>
<p>A tonic pedal is built on the first degree of the scale and typically:</p>
<ul className="disc">
<li><p><strong>Establishes key center:</strong> Reinforces the tonic as the primary pitch center</p></li>
<li><p><strong>Creates stability:</strong> Provides harmonic grounding even during complex progressions</p></li>
<li><p><strong>Supports various harmonies:</strong> Can accommodate I, vi, IV, and other compatible chords</p></li>
<li><p><strong>Builds anticipation:</strong> Creates expectation for harmonic resolution</p></li>
</ul>
</div>
<div className="paragraphs" id="TonicContexts"><h6 className="heading"><span className="title">Common Contexts for Tonic Pedals</span></h6>
<div className="paragraphs" id="OpeningPedals"><h6 className="heading"><span className="title">Opening Sections</span></h6>
<ul className="disc">
<li><p><strong>Establishing tonality:</strong> Beginning of pieces or movements</p></li>
<li><p><strong>Introductory passages:</strong> Setting the harmonic foundation</p></li>
<li><p><strong>Theme presentations:</strong> Supporting initial melodic statements</p></li>
</ul>
</div>
<div className="paragraphs" id="ClosingPedals"><h6 className="heading"><span className="title">Closing Sections</span></h6>
<ul className="disc">
<li><p><strong>Final confirmations:</strong> Reinforcing tonic at piece endings</p></li>
<li><p><strong>Codas:</strong> Extended final sections over tonic pedal</p></li>
<li><p><strong>Cadential extensions:</strong> Prolonging final tonic harmony</p></li>
</ul>
</div>
<div className="paragraphs" id="DevelopmentalPedals"><h6 className="heading"><span className="title">Developmental Sections</span></h6>
<ul className="disc">
<li><p><strong>Variation techniques:</strong> Maintaining tonic while varying upper voices</p></li>
<li><p><strong>Contrapuntal passages:</strong> Supporting complex voice leading</p></li>
<li><p><strong>Transitional moments:</strong> Bridging between formal sections</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="DominantPedal"><h5 className="heading"><span className="title">The Dominant Pedal</span></h5>
<div className="paragraphs" id="DominantCharacteristics"><h6 className="heading"><span className="title">Characteristics and Function</span></h6>
<p>A dominant pedal is built on the fifth degree of the scale and typically:</p>
<ul className="disc">
<li><p><strong>Creates tension:</strong> Builds harmonic expectation for tonic resolution</p></li>
<li><p><strong>Supports dominant harmony:</strong> Reinforces V and V7 chord functions</p></li>
<li><p><strong>Enables retransition:</strong> Prepares return to tonic in formal structures</p></li>
<li><p><strong>Allows harmonic exploration:</strong> Permits various harmonies over dominant bass</p></li>
</ul>
</div>
<div className="paragraphs" id="DominantContexts"><h6 className="heading"><span className="title">Common Contexts for Dominant Pedals</span></h6>
<div className="paragraphs" id="RetransitionPedals"><h6 className="heading"><span className="title">Retransition Passages</span></h6>
<ul className="disc">
<li><p><strong>Development sections:</strong> Preparing return to recapitulation in sonata form</p></li>
<li><p><strong>Episode endings:</strong> Leading back to main themes in rondo form</p></li>
<li><p><strong>Variation transitions:</strong> Connecting variations or returning to theme</p></li>
</ul>
</div>
<div className="paragraphs" id="CadentialPedals"><h6 className="heading"><span className="title">Cadential Preparation</span></h6>
<ul className="disc">
<li><p><strong>Extended dominants:</strong> Prolonging dominant function before resolution</p></li>
<li><p><strong>Climactic build-up:</strong> Creating tension before important arrivals</p></li>
<li><p><strong>Phrase extensions:</strong> Delaying expected tonic arrivals</p></li>
</ul>
</div>
<div className="paragraphs" id="FugalPedals"><h6 className="heading"><span className="title">Fugal Applications</span></h6>
<ul className="disc">
<li><p><strong>Stretto preparation:</strong> Building tension before final entries</p></li>
<li><p><strong>Climactic passages:</strong> Supporting dense contrapuntal writing</p></li>
<li><p><strong>Structural articulation:</strong> Marking important formal divisions</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="CompositionTechniques"><h5 className="heading"><span className="title">Compositional Techniques and Applications</span></h5>
<div className="paragraphs" id="HarmonicTreatment"><h6 className="heading"><span className="title">Harmonic Treatment Over Pedals</span></h6>
<div className="paragraphs" id="ConsonantHarmonies"><h6 className="heading"><span className="title">Consonant Harmonies</span></h6>
<ul className="disc">
<li><p><strong>Tonic pedal:</strong> I, vi, iii chords work naturally</p></li>
<li><p><strong>Dominant pedal:</strong> V, V7, vii° chords are consonant</p></li>
<li><p><strong>Smooth voice leading:</strong> Upper voices move stepwise when possible</p></li>
</ul>
</div>
<div className="paragraphs" id="DissonantHarmonies"><h6 className="heading"><span className="title">Dissonant Harmonies</span></h6>
<ul className="disc">
<li><p><strong>Passing harmonies:</strong> Brief dissonances between consonant chords</p></li>
<li><p><strong>Suspension effects:</strong> Pedal creates suspension-like dissonances</p></li>
<li><p><strong>Chromatic harmonies:</strong> Secondary dominants and altered chords</p></li>
</ul>
</div>
</div>
<div className="paragraphs" id="TexturalConsiderations"><h6 className="heading"><span className="title">Textural Considerations</span></h6>
<ul className="disc">
<li><p><strong>Voice independence:</strong> Maintain clear melodic lines in upper voices</p></li>
<li><p><strong>Rhythmic variety:</strong> Contrast sustained pedal with active upper voices</p></li>
<li><p><strong>Dynamic shaping:</strong> Use pedals to support crescendos and diminuendos</p></li>
<li><p><strong>Articulation:</strong> Consider how pedal is sustained (tied, repeated, tremolo)</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="HistoricalExamples"><h5 className="heading"><span className="title">Historical Examples and Style Periods</span></h5>
<div className="paragraphs" id="BaroquePedals"><h6 className="heading"><span className="title">Baroque Period</span></h6>
<p><strong>Bach's Usage:</strong></p>
<ul className="disc">
<li><p><strong>Organ works:</strong> Extensive use of pedal notes in chorale preludes</p></li>
<li><p><strong>Fugues:</strong> Pedal points in final sections for climactic effect</p></li>
<li><p><strong>Cantatas:</strong> Pedal notes supporting choral and orchestral textures</p></li>
</ul>
<p><strong>Other Baroque Composers:</strong></p>
<ul className="disc">
<li><p>Handel's use in oratorios and concerti grossi</p></li>
<li><p>Vivaldi's pedal points in concerto ritornellos</p></li>
<li><p>Purcell's ground bass techniques</p></li>
</ul>
</div>
<div className="paragraphs" id="ClassicalPedals"><h6 className="heading"><span className="title">Classical Period</span></h6>
<ul className="disc">
<li><p><strong>Mozart:</strong> Elegant pedal usage in piano sonatas and symphonies</p></li>
<li><p><strong>Haydn:</strong> Witty and surprising pedal applications</p></li>
<li><p><strong>Beethoven:</strong> Dramatic pedal points in symphonies and sonatas</p></li>
<li><p><strong>Formal functions:</strong> Pedals marking structural boundaries</p></li>
</ul>
</div>
<div className="paragraphs" id="RomanticPedals"><h6 className="heading"><span className="title">Romantic Period</span></h6>
<ul className="disc">
<li><p><strong>Extended pedals:</strong> Longer duration and more complex harmonies</p></li>
<li><p><strong>Chromatic treatment:</strong> Pedals supporting advanced harmonic language</p></li>
<li><p><strong>Orchestral color:</strong> Pedals as timbral and textural devices</p></li>
<li><p><strong>Programmatic effects:</strong> Pedals supporting extra-musical associations</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="AnalyticalApproach"><h5 className="heading"><span className="title">Analytical Approach to Pedal Notes</span></h5>
<div className="paragraphs" id="IdentificationSteps"><h6 className="heading"><span className="title">Identification Process</span></h6>
<ol className="decimal">
<li><p><strong>Locate sustained notes:</strong> Find pitches that persist through harmonic changes</p></li>
<li><p><strong>Determine pedal type:</strong> Identify whether tonic, dominant, or other type</p></li>
<li><p><strong>Analyze harmonic context:</strong> Examine chords built above the pedal</p></li>
<li><p><strong>Assess function:</strong> Determine structural and expressive role</p></li>
<li><p><strong>Consider voice leading:</strong> Trace movement in non-pedal voices</p></li>
</ol>
</div>
<div className="paragraphs" id="AnalyticalNotation"><h6 className="heading"><span className="title">Analytical Notation</span></h6>
<ul className="disc">
<li><p><strong>Roman numeral analysis:</strong> Show pedal with horizontal line or bracket</p></li>
<li><p><strong>Figured bass:</strong> Indicate intervals above pedal note</p></li>
<li><p><strong>Reduction techniques:</strong> Show underlying harmonic progression</p></li>
<li><p><strong>Voice-leading graphs:</strong> Illustrate linear motion over pedal</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="PracticalApplications"><h5 className="heading"><span className="title">Practical Applications and Exercises</span></h5>
<div className="paragraphs" id="CompositionExercises"><h6 className="heading"><span className="title">Composition Exercises</span></h6>
<ol className="decimal">
<li><p><strong>Simple pedal harmonization:</strong> Write chord progressions over given pedal notes</p></li>
<li><p><strong>Melodic composition:</strong> Create melodies over tonic and dominant pedals</p></li>
<li><p><strong>Four-part writing:</strong> Harmonize chorales with pedal point sections</p></li>
<li><p><strong>Instrumental pieces:</strong> Compose short pieces featuring prominent pedals</p></li>
</ol>
</div>
<div className="paragraphs" id="AnalysisExercises"><h6 className="heading"><span className="title">Analysis Exercises</span></h6>
<ol className="decimal">
<li><p><strong>Bach chorales:</strong> Identify pedal points in chorale harmonizations</p></li>
<li><p><strong>Classical sonatas:</strong> Locate pedals in development and retransition sections</p></li>
<li><p><strong>Romantic works:</strong> Analyze extended pedal passages in symphonic literature</p></li>
<li><p><strong>Contemporary music:</strong> Examine modern applications of pedal techniques</p></li>
</ol>
</div>
</article>
<article className="paragraphs" id="AdvancedTechniques"><h5 className="heading"><span className="title">Advanced Techniques and Variations</span></h5>
<div className="paragraphs" id="ChromaticPedals"><h6 className="heading"><span className="title">Chromatic Pedal Applications</span></h6>
<ul className="disc">
<li><p><strong>Altered pedal notes:</strong> Raised or lowered pedal tones for special effects</p></li>
<li><p><strong>Enharmonic pedals:</strong> Same pitch spelled differently for harmonic clarity</p></li>
<li><p><strong>Sequential pedals:</strong> Pedal points at different pitch levels</p></li>
</ul>
</div>
<div className="paragraphs" id="CompoundPedals"><h6 className="heading"><span className="title">Multiple and Compound Pedals</span></h6>
<ul className="disc">
<li><p><strong>Double pedals:</strong> Two sustained notes simultaneously</p></li>
<li><p><strong>Alternating pedals:</strong> Pedal notes that change between voices</p></li>
<li><p><strong>Layered pedals:</strong> Different pedal notes in different octaves</p></li>
</ul>
</div>
</article>
<div className="conclusion">
<p>Tonic and dominant pedals are fundamental compositional devices that provide harmonic stability, create structural articulation, and enable sophisticated voice-leading techniques. Their mastery is essential for understanding tonal music across all periods and for developing skills in both analysis and composition. Through systematic study of their functions, contexts, and applications, students gain insight into the architectural principles that govern tonal music structure.</p>
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

export default Ch10TonicanddominantpedalsPage;
