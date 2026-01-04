import React from 'react';
import { Link } from 'react-router-dom';

const Ch07DiatonicchordsinminorPage: React.FC = () => {
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
        <span className="text-gray-700 dark:text-gray-300">Diatonic Chords in Minor</span>
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
          Diatonic Chords in Minor
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="DiatonicChordsInMinor"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.3</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Diatonic Chords in Minor</span>
</h2>
<div className="para" id="DiatonicChordsInMinor-2">Because there are three versions of the minor scale, there are more than seven diatonic chords in minor. The sixth and seventh scale degrees affect all of the triads except the tonic, making 13 possible diatonic triads in minor.<div className="autopermalink" data-description="Paragraph"><a href="#DiatonicChordsInMinor-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="DiatonicChordsInMinor-3"><div className="image-box"><img src="/theory/external/images/unit2/Roman-numerals-dia-chords-all-minor.svg" role="img" className="contained" alt="All diatonic triads in A natural minor, A harmonic minor, and A melodic minor" /></div>
<div className="audio-box"><audio id="DiatonicChordsInMinor-3-3" className="audio" controls=""><source src="/theory/external/images/unit2/DiatonicTriadsNatMinorAudio.mp3" type="audio/mp3" /></source>Your browser does not support the &lt;audio&gt; tag.</audio></div>
<div className="audio-box"><audio id="DiatonicChordsInMinor-3-4" className="audio" controls=""><source src="/theory/external/images/unit2/DiatonicTriadsHarmMinorAudio.mp3" type="audio/mp3" /></source>Your browser does not support the &lt;audio&gt; tag.</audio></div>
<div className="audio-box"><audio id="DiatonicChordsInMinor-3-5" className="audio" controls=""><source src="/theory/external/images/unit2/DiatonicTriadsMelMinorAudio.mp3" type="audio/mp3" /></source>Your browser does not support the &lt;audio&gt; tag.</audio></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.3.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span><div className="autopermalink" data-description="Figure 7.3.1"><a href="#DiatonicChordsInMinor-3" title="Copy heading and permalink for Figure 7.3.1" aria-label="Copy heading and permalink for Figure 7.3.1">🔗</a></div></figcaption></figure><div className="para" id="DiatonicChordsInMinor-4">However, when one analyzes a large amount of tonal music, one finds the following Roman numerals are most commonly used in minor.<div className="autopermalink" data-description="Paragraph"><a href="#DiatonicChordsInMinor-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit2/Roman-numerals-most-common-in-minor.svg" role="img" className="contained" alt="The most commonly used diatonic triads in A minor: A minor, B diminished, C major, D minor, E major, F major, and G-sharp diminished, with Roman numerals" /></div>
<div className="para" id="DiatonicChordsInMinor-6">Notice that both <span className="process-math">\\(\\left.\\text{VII}\\right.\\)</span> (the “subtonic triad”) and <span className="process-math">\\(\\left.\\text{vii}^{\\circ}{}\\right.\\)</span> (the “leading-tone triad”) are included.<div className="autopermalink" data-description="Paragraph"><a href="#DiatonicChordsInMinor-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<article className="definition definition-like" id="subtonic-triad-vs-leading-tone-triad"><h3 className="heading">
<span className="type">Definition</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">7.3.2</span><span className="period heading-divison-mark heading-divison-mark__period">.</span>
</h3>
<div className="para" id="subtonic-triad-vs-leading-tone-triad-2-1">The <dfn className="terminology">subtonic triad</dfn> (<span className="process-math">\\(\\left.\\text{VII}\\right.\\)</span>) is built on the lowered <span className="process-math">\\(\\hat{7} \\)</span> that occurs in <em className="emphasis">natural</em> minor and requires no accidentals in minor keys.<div className="autopermalink" data-description="Paragraph"><a href="#subtonic-triad-vs-leading-tone-triad-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Definition 7.3.2"><a href="#subtonic-triad-vs-leading-tone-triad" title="Copy heading and permalink for Definition 7.3.2" aria-label="Copy heading and permalink for Definition 7.3.2">🔗</a></div></article><div className="para" id="DiatonicChordsInMinor-8">The subtonic triad regularly occurs in circle of fifth progressions in minor (see <a href="09-01-CircleOfFifths.html" className="internal" title="Section 9.1: The Circle of Fifths Progression">Section 9.1</a>) and in rock and pop music (see <a href="09-06-SubtonicVIIinPopMusic.html" className="internal" title="Section 9.6: The Subtonic VII Chord in Popular Music">Section 9.6</a>). The leading-tone triad (<span className="process-math">\\(\\left.\\text{vii}^{\\circ}{}\\right.\\)</span>) is built on raised <span className="process-math">\\(\\hat{7} \\)</span> and is usually either a passing harmony or has dominant function (see <a href="09-04-HarmonicFunction.html" className="internal" title="Section 9.4: Harmonic Function">Section 9.4</a>).<div className="autopermalink" data-description="Paragraph"><a href="#DiatonicChordsInMinor-8" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Section 7.3: Diatonic Chords in Minor"><a href="#DiatonicChordsInMinor" title="Copy heading and permalink for Section 7.3: Diatonic Chords in Minor" aria-label="Copy heading and permalink for Section 7.3: Diatonic Chords in Minor">🔗</a></div></section></div>
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

export default Ch07DiatonicchordsinminorPage;
