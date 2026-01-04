import React from 'react';
import { Link } from 'react-router-dom';

const Ch07InterruptedcadencePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 07</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Interrupted Cadence</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 07
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Roman Numerals & Cadences
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Interrupted Cadence
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="InterruptedCadence"><h2 className="heading hide-type">
<span className="type">Section</span> <span className="codenumber">7.7</span> <span className="title">Interrupted Cadence</span>
</h2>
<div className="introduction">
<p>The interrupted cadence (also known as the deceptive cadence) is a powerful harmonic device that avoids the expected resolution to the tonic, creating surprise and extending musical phrases. This cadence is fundamental to understanding tonal harmony and compositional technique.</p>
</div>
<article className="paragraphs" id="DefinitionAndStructure"><h5 className="heading"><span className="title">Definition and Structure</span></h5>
<p>An interrupted cadence occurs when the dominant chord (V or V7) resolves to a chord other than the expected tonic (I or i). The most common forms are:</p>
<ul className="disc">
<li><p><strong>V–VI in major keys:</strong> Dominant resolves to submediant major triad</p></li>
<li><p><strong>V–VI in minor keys:</strong> Dominant resolves to submediant major triad (♭VI)</p></li>
<li><p><strong>V7–vi in major keys:</strong> Dominant seventh resolves to submediant minor triad</p></li>
</ul>
<p>The term "interrupted" reflects how this cadence interrupts the expected authentic cadence, creating a sense of continuation rather than closure.</p>
</article>
<article className="paragraphs" id="VoiceLeadingPrinciples"><h5 className="heading"><span className="title">Voice Leading Principles</span></h5>
<div className="paragraphs" id="StandardResolution"><h6 className="heading"><span className="title">Standard Voice Leading</span></h6>
<ul className="disc">
<li><p><strong>Leading tone:</strong> Resolves up by semitone to the tonic (which becomes the third of VI)</p></li>
<li><p><strong>Seventh (if present):</strong> Resolves down by step</p></li>
<li><p><strong>Bass:</strong> Moves up by step from dominant to submediant</p></li>
<li><p><strong>Common tone:</strong> The fifth of V becomes the root of VI</p></li>
</ul>
</div>
<div className="paragraphs" id="DoubleThird"><h6 className="heading"><span className="title">Doubling Considerations</span></h6>
<p>In V–VI progressions, it's common to double the third of the VI chord (which is the tonic note) rather than the root, as this provides the smoothest voice leading from the dominant chord.</p>
</div>
</article>
<article className="paragraphs" id="HarmonicFunction"><h5 className="heading"><span className="title">Harmonic Function and Effect</span></h5>
<div className="paragraphs" id="PsychologicalEffect"><h6 className="heading"><span className="title">Psychological Impact</span></h6>
<ul className="disc">
<li><p><strong>Surprise:</strong> Subverts listener expectations established by dominant preparation</p></li>
<li><p><strong>Extension:</strong> Prolongs the phrase, delaying final resolution</p></li>
<li><p><strong>Emotional intensity:</strong> Often creates poignant or bittersweet moments</p></li>
</ul>
</div>
<div className="paragraphs" id="StructuralFunction"><h6 className="heading"><span className="title">Structural Function</span></h6>
<ul className="disc">
<li><p><strong>Phrase extension:</strong> Allows composers to extend phrases beyond expected lengths</p></li>
<li><p><strong>Modulation preparation:</strong> VI can serve as pivot chord to related keys</p></li>
<li><p><strong>Sequential patterns:</strong> Often part of longer harmonic sequences</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="HistoricalContext"><h5 className="heading"><span className="title">Historical Development and Usage</span></h5>
<div className="paragraphs" id="BaroquePeriod"><h6 className="heading"><span className="title">Baroque Period</span></h6>
<p>Bach frequently employed interrupted cadences in:</p>
<ul className="disc">
<li><p>Chorale harmonizations for expressive text painting</p></li>
<li><p>Fugal episodes to extend developmental sections</p></li>
<li><p>Instrumental works to create formal ambiguity</p></li>
</ul>
</div>
<div className="paragraphs" id="ClassicalPeriod"><h6 className="heading"><span className="title">Classical Period</span></h6>
<p>Classical composers used interrupted cadences for:</p>
<ul className="disc">
<li><p>Extending development sections in sonata form</p></li>
<li><p>Creating surprise in otherwise predictable progressions</p></li>
<li><p>Delaying resolution in closing themes</p></li>
</ul>
</div>
<div className="paragraphs" id="RomanticPeriod"><h6 className="heading"><span className="title">Romantic Period</span></h6>
<p>Romantic composers expanded the use of interrupted cadences:</p>
<ul className="disc">
<li><p>Increased emotional expression and dramatic effect</p></li>
<li><p>More frequent use in song literature</p></li>
<li><p>Integration with chromatic harmony and extended tonality</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="VariationsAndExtensions"><h5 className="heading"><span className="title">Variations and Extensions</span></h5>
<div className="paragraphs" id="AlternativeResolutions"><h6 className="heading"><span className="title">Alternative Resolutions</span></h6>
<p>While V–VI is most common, other interrupted cadences include:</p>
<ul className="disc">
<li><p><strong>V–IV:</strong> Less common, creates plagal flavor</p></li>
<li><p><strong>V–ii:</strong> Rare, often in minor keys (V–ii°)</p></li>
<li><p><strong>V–iii:</strong> Uncommon, typically in major keys</p></li>
</ul>
</div>
<div className="paragraphs" id="ChromaticVariants"><h6 className="heading"><span className="title">Chromatic Variants</span></h6>
<ul className="disc">
<li><p><strong>V–♭VI:</strong> In major keys, creates modal inflection</p></li>
<li><p><strong>V–vi with chromatic alteration:</strong> Enhanced expressive effect</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="AnalyticalApplications"><h5 className="heading"><span className="title">Analytical Applications</span></h5>
<p>When analyzing interrupted cadences, consider:</p>
<ol className="decimal">
<li><p><strong>Context:</strong> Where does the cadence occur in the phrase structure?</p></li>
<li><p><strong>Preparation:</strong> How is the dominant chord approached and prepared?</p></li>
<li><p><strong>Resolution:</strong> What follows the VI chord? Does it eventually resolve to tonic?</p></li>
<li><p><strong>Function:</strong> Does the cadence serve structural, expressive, or modulatory purposes?</p></li>
</ol>
</article>
<article className="paragraphs" id="CompositionTechniques"><h5 className="heading"><span className="title">Compositional Applications</span></h5>
<p>Effective use of interrupted cadences in composition:</p>
<ul className="disc">
<li><p><strong>Strategic placement:</strong> Use at moments requiring emotional emphasis or formal extension</p></li>
<li><p><strong>Voice leading:</strong> Ensure smooth resolution of tendency tones</p></li>
<li><p><strong>Follow-up:</strong> Plan the continuation after the deceptive resolution</p></li>
<li><p><strong>Frequency:</strong> Use sparingly to maintain effectiveness and surprise</p></li>
</ul>
</article>
<div className="conclusion">
<p>The interrupted cadence is an essential tool for creating sophisticated harmonic progressions and expressive musical moments. Understanding its structure, function, and historical usage provides insight into the craft of composition and the analysis of tonal music across all periods.</p>
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

export default Ch07InterruptedcadencePage;
