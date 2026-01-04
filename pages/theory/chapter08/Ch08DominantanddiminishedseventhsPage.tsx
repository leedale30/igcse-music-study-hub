import React from 'react';
import { Link } from 'react-router-dom';

const Ch08DominantanddiminishedseventhsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 08</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Dominant and Diminished Seventh Chords</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 08
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Seventh Chords
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Dominant and Diminished Seventh Chords
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="DominantAndDiminishedSevenths"><h2 className="heading hide-type">
<span className="type">Section</span> <span className="codenumber">8.5</span> <span className="title">Dominant and Diminished Seventh Chords</span>
</h2>
<div className="introduction">
<p>The dominant seventh (V⁷) and diminished seventh (vii°⁷) chords are among the most important and frequently used seventh chords in tonal harmony. Their strong tendency toward resolution and distinctive sound qualities make them essential tools for creating harmonic tension and forward motion in both diatonic and chromatic contexts.</p>
</div>
<article className="paragraphs" id="DominantSeventhChord"><h5 className="heading"><span className="title">The Dominant Seventh Chord (V⁷)</span></h5>
<div className="paragraphs" id="DominantConstruction"><h6 className="heading"><span className="title">Construction and Structure</span></h6>
<p>The dominant seventh chord is built on the fifth degree of the scale and consists of:</p>
<ul className="disc">
<li><p><strong>Root:</strong> The dominant note (5th degree)</p></li>
<li><p><strong>Third:</strong> The leading tone (7th degree)</p></li>
<li><p><strong>Fifth:</strong> The supertonic (2nd degree)</p></li>
<li><p><strong>Seventh:</strong> The subdominant (4th degree)</p></li>
</ul>
<p>This creates a major triad with an added minor seventh, producing the interval pattern: Major 3rd + Minor 3rd + Minor 3rd.</p>
</div>
<div className="paragraphs" id="DominantFunction"><h6 className="heading"><span className="title">Harmonic Function</span></h6>
<ul className="disc">
<li><p><strong>Primary function:</strong> Creates strong pull toward tonic resolution</p></li>
<li><p><strong>Tendency tones:</strong> Contains both leading tone (resolves up) and seventh (resolves down)</p></li>
<li><p><strong>Tritone interval:</strong> Between third and seventh creates harmonic instability</p></li>
<li><p><strong>Voice leading:</strong> Provides smooth resolution to tonic chord</p></li>
</ul>
</div>
<div className="paragraphs" id="DominantResolution"><h6 className="heading"><span className="title">Resolution Patterns</span></h6>
<p><strong>Standard Resolution (V⁷–I):</strong></p>
<ul className="disc">
<li><p><strong>Leading tone (3rd):</strong> Resolves up by semitone to tonic</p></li>
<li><p><strong>Seventh (7th):</strong> Resolves down by step to third of tonic</p></li>
<li><p><strong>Root:</strong> May leap down a fifth or up a fourth to tonic</p></li>
<li><p><strong>Fifth:</strong> Usually moves down by step or remains as common tone</p></li>
</ul>
<p><strong>Alternative Resolutions:</strong></p>
<ul className="disc">
<li><p><strong>V⁷–vi (deceptive):</strong> Resolves to submediant instead of tonic</p></li>
<li><p><strong>V⁷–IV:</strong> Less common, creates plagal effect</p></li>
<li><p><strong>V⁷–V⁷/V:</strong> Sequential progression to secondary dominant</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="DiminishedSeventhChord"><h5 className="heading"><span className="title">The Diminished Seventh Chord (vii°⁷)</span></h5>
<div className="paragraphs" id="DiminishedConstruction"><h6 className="heading"><span className="title">Construction and Structure</span></h6>
<p>The diminished seventh chord is built on the seventh degree of the scale and consists of:</p>
<ul className="disc">
<li><p><strong>Root:</strong> The leading tone (7th degree)</p></li>
<li><p><strong>Third:</strong> The supertonic (2nd degree)</p></li>
<li><p><strong>Fifth:</strong> The subdominant (4th degree)</p></li>
<li><p><strong>Seventh:</strong> The submediant (6th degree, often lowered)</p></li>
</ul>
<p>This creates a diminished triad with an added diminished seventh, producing the interval pattern: Minor 3rd + Minor 3rd + Minor 3rd.</p>
</div>
<div className="paragraphs" id="DiminishedTypes"><h6 className="heading"><span className="title">Types of Diminished Seventh Chords</span></h6>
<ul className="disc">
<li><p><strong>Fully diminished (°⁷):</strong> Contains diminished seventh interval from root</p></li>
<li><p><strong>Half diminished (ø⁷):</strong> Contains minor seventh interval from root</p></li>
<li><p><strong>Leading tone diminished seventh:</strong> Built on natural 7th degree in major</p></li>
<li><p><strong>Supertonic diminished seventh:</strong> Built on raised 2nd degree (Neapolitan function)</p></li>
</ul>
</div>
<div className="paragraphs" id="DiminishedFunction"><h6 className="heading"><span className="title">Harmonic Function and Properties</span></h6>
<ul className="disc">
<li><p><strong>Symmetrical structure:</strong> All intervals are minor thirds</p></li>
<li><p><strong>Enharmonic equivalence:</strong> Four possible spellings of same chord</p></li>
<li><p><strong>Multiple resolutions:</strong> Can resolve to four different tonic chords</p></li>
<li><p><strong>Chromatic voice leading:</strong> Enables smooth chromatic progressions</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="VoiceLeadingPrinciples"><h5 className="heading"><span className="title">Voice Leading Principles</span></h5>
<div className="paragraphs" id="DominantVoiceLeading"><h6 className="heading"><span className="title">Dominant Seventh Voice Leading</span></h6>
<ul className="disc">
<li><p><strong>Preparation:</strong> Seventh may be prepared by step or leap</p></li>
<li><p><strong>Resolution:</strong> Seventh must resolve down by step</p></li>
<li><p><strong>Leading tone:</strong> Must resolve up to tonic (except in inner voices)</p></li>
<li><p><strong>Doubling:</strong> Never double the leading tone or seventh</p></li>
</ul>
</div>
<div className="paragraphs" id="DiminishedVoiceLeading"><h6 className="heading"><span className="title">Diminished Seventh Voice Leading</span></h6>
<ul className="disc">
<li><p><strong>Tendency tones:</strong> All chord members have strong directional tendencies</p></li>
<li><p><strong>Resolution by step:</strong> Most voices resolve by semitone motion</p></li>
<li><p><strong>Enharmonic respelling:</strong> May require respelling for proper resolution</p></li>
<li><p><strong>Chromatic approach:</strong> Often approached and left chromatically</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="DiatonicApplications"><h5 className="heading"><span className="title">Diatonic Applications</span></h5>
<div className="paragraphs" id="MajorKeyUsage"><h6 className="heading"><span className="title">Usage in Major Keys</span></h6>
<ul className="disc">
<li><p><strong>V⁷:</strong> Primary dominant function, most common seventh chord</p></li>
<li><p><strong>vii°⁷:</strong> Leading tone diminished seventh, dominant substitute</p></li>
<li><p><strong>Cadential patterns:</strong> Essential in authentic and half cadences</p></li>
<li><p><strong>Phrase structure:</strong> Creates clear harmonic punctuation</p></li>
</ul>
</div>
<div className="paragraphs" id="MinorKeyUsage"><h6 className="heading"><span className="title">Usage in Minor Keys</span></h6>
<ul className="disc">
<li><p><strong>V⁷:</strong> Requires raised leading tone (harmonic minor)</p></li>
<li><p><strong>vii°⁷:</strong> Fully diminished, built on raised 7th degree</p></li>
<li><p><strong>Modal considerations:</strong> Natural minor vs. harmonic minor implications</p></li>
<li><p><strong>Cross-relations:</strong> Careful handling of raised and natural 7th degrees</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="ChromaticApplications"><h5 className="heading"><span className="title">Chromatic Applications</span></h5>
<div className="paragraphs" id="SecondaryDominants"><h6 className="heading"><span className="title">Secondary Dominants</span></h6>
<ul className="disc">
<li><p><strong>V⁷/V:</strong> Dominant of dominant, common tonicization</p></li>
<li><p><strong>V⁷/vi:</strong> Dominant of relative minor</p></li>
<li><p><strong>V⁷/IV:</strong> Dominant of subdominant</p></li>
<li><p><strong>Sequential patterns:</strong> Circle of fifths progressions</p></li>
</ul>
</div>
<div className="paragraphs" id="ChromaticDiminished"><h6 className="heading"><span className="title">Chromatic Diminished Sevenths</span></h6>
<ul className="disc">
<li><p><strong>Passing chords:</strong> Connecting diatonic harmonies chromatically</p></li>
<li><p><strong>Auxiliary chords:</strong> Embellishing stable harmonies</p></li>
<li><p><strong>Modulation:</strong> Pivot chords for distant key relationships</p></li>
<li><p><strong>Enharmonic modulation:</strong> Exploiting enharmonic equivalence</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="AnalyticalConsiderations"><h5 className="heading"><span className="title">Analytical Considerations</span></h5>
<p>When analyzing dominant and diminished seventh chords:</p>
<ol className="decimal">
<li><p><strong>Identify function:</strong> Determine whether chord serves diatonic or chromatic function</p></li>
<li><p><strong>Examine preparation:</strong> How is the seventh introduced?</p></li>
<li><p><strong>Trace resolution:</strong> Follow tendency tone resolutions</p></li>
<li><p><strong>Consider context:</strong> Relationship to surrounding harmonies</p></li>
<li><p><strong>Note inversions:</strong> Impact of bass note on harmonic effect</p></li>
</ol>
</article>
<article className="paragraphs" id="CompositionTechniques"><h5 className="heading"><span className="title">Compositional Techniques</span></h5>
<div className="paragraphs" id="EffectiveUsage"><h6 className="heading"><span className="title">Effective Usage Guidelines</span></h6>
<ul className="disc">
<li><p><strong>Strategic placement:</strong> Use at points requiring harmonic tension</p></li>
<li><p><strong>Voice leading:</strong> Ensure smooth resolution of all tendency tones</p></li>
<li><p><strong>Preparation:</strong> Consider how seventh is introduced</p></li>
<li><p><strong>Resolution:</strong> Plan continuation after chord resolution</p></li>
</ul>
</div>
<div className="paragraphs" id="StyleConsiderations"><h6 className="heading"><span className="title">Style Period Considerations</span></h6>
<ul className="disc">
<li><p><strong>Baroque:</strong> Frequent use, often with careful preparation</p></li>
<li><p><strong>Classical:</strong> More selective use, clear functional roles</p></li>
<li><p><strong>Romantic:</strong> Increased chromaticism, extended resolutions</p></li>
<li><p><strong>Contemporary:</strong> Expanded harmonic vocabulary, altered functions</p></li>
</ul>
</div>
</article>
<div className="conclusion">
<p>Dominant and diminished seventh chords form the backbone of tonal harmony, providing essential tools for creating harmonic tension, directing musical motion, and establishing tonal centers. Mastery of their construction, resolution patterns, and contextual applications is fundamental to understanding and creating effective tonal music.</p>
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

export default Ch08DominantanddiminishedseventhsPage;
