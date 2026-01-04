import React from 'react';
import { Link } from 'react-router-dom';

const Ch07SecondarytriadsinmajorandminorPage: React.FC = () => {
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
        <span className="text-gray-700 dark:text-gray-300">Secondary Triads in Major and Minor</span>
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
          Secondary Triads in Major and Minor
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="SecondaryTriadsInMajorAndMinor"><h2 className="heading hide-type">
<span className="type">Section</span> <span className="codenumber">7.6</span> <span className="title">Secondary Triads in Major and Minor</span>
</h2>
<div className="introduction">
<p>Secondary triads are the diatonic chords built on scale degrees other than the primary triads (I, IV, V). Understanding their function and characteristics is essential for analyzing Western tonal repertoire and developing sophisticated harmonic progressions.</p>
</div>
<article className="paragraphs" id="SecondaryTriadsInMajor"><h5 className="heading"><span className="title">Secondary Triads in Major Keys</span></h5>
<p>In major keys, the secondary triads are built on scale degrees 2, 3, and 6:</p>
<ul className="disc">
<li><p><strong>ii (Supertonic):</strong> Minor triad built on the second degree</p></li>
<li><p><strong>iii (Mediant):</strong> Minor triad built on the third degree</p></li>
<li><p><strong>vi (Submediant):</strong> Minor triad built on the sixth degree</p></li>
</ul>
<div className="paragraphs" id="FunctionInMajor"><h6 className="heading"><span className="title">Harmonic Functions in Major</span></h6>
<ul className="disc">
<li><p><strong>ii:</strong> Predominant function, commonly progresses to V or V7</p></li>
<li><p><strong>iii:</strong> Tonic substitute, often used in deceptive progressions</p></li>
<li><p><strong>vi:</strong> Tonic substitute, frequently used in deceptive cadences (V-vi)</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="SecondaryTriadsInMinor"><h5 className="heading"><span className="title">Secondary Triads in Minor Keys</span></h5>
<p>In minor keys, the secondary triads show more variety due to the raised leading tone:</p>
<ul className="disc">
<li><p><strong>ii° (Supertonic):</strong> Diminished triad built on the second degree</p></li>
<li><p><strong>III (Mediant):</strong> Major triad built on the third degree (♭3)</p></li>
<li><p><strong>VI (Submediant):</strong> Major triad built on the sixth degree (♭6)</p></li>
<li><p><strong>vii° (Leading Tone):</strong> Diminished triad built on the seventh degree</p></li>
</ul>
<div className="paragraphs" id="FunctionInMinor"><h6 className="heading"><span className="title">Harmonic Functions in Minor</span></h6>
<ul className="disc">
<li><p><strong>ii°:</strong> Predominant function, requires careful voice leading due to diminished quality</p></li>
<li><p><strong>III:</strong> Tonic substitute, provides stability and contrast</p></li>
<li><p><strong>VI:</strong> Tonic substitute, common in modal progressions</p></li>
<li><p><strong>vii°:</strong> Dominant function, strong tendency toward tonic</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="CommonProgressions"><h5 className="heading"><span className="title">Common Progressions with Secondary Triads</span></h5>
<div className="paragraphs" id="MajorKeyProgressions"><h6 className="heading"><span className="title">Major Key Progressions</span></h6>
<ul className="disc">
<li><p><strong>I-vi-IV-V:</strong> Classic progression using vi as tonic substitute</p></li>
<li><p><strong>I-ii-V-I:</strong> Strong predominant-dominant-tonic motion</p></li>
<li><p><strong>I-iii-vi-IV:</strong> Descending sequence using secondary triads</p></li>
<li><p><strong>V-vi:</strong> Deceptive cadence avoiding expected resolution to I</p></li>
</ul>
</div>
<div className="paragraphs" id="MinorKeyProgressions"><h6 className="heading"><span className="title">Minor Key Progressions</span></h6>
<ul className="disc">
<li><p><strong>i-VI-III-VII:</strong> Modal progression emphasizing ♭6 and ♭7</p></li>
<li><p><strong>i-ii°-V-i:</strong> Using diminished supertonic as predominant</p></li>
<li><p><strong>i-III-VI-ii°:</strong> Ascending progression through secondary triads</p></li>
<li><p><strong>V-VI:</strong> Deceptive cadence in minor, avoiding resolution to i</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="VoiceLeadingConsiderations"><h5 className="heading"><span className="title">Voice Leading with Secondary Triads</span></h5>
<div className="paragraphs" id="DiminishedTriads"><h6 className="heading"><span className="title">Diminished Triads (ii° and vii°)</span></h6>
<ul className="disc">
<li><p>Avoid doubling the diminished fifth</p></li>
<li><p>Double the root when possible</p></li>
<li><p>Resolve tendency tones carefully (leading tone up, diminished fifth down)</p></li>
</ul>
</div>
<div className="paragraphs" id="MinorTriads"><h6 className="heading"><span className="title">Minor Triads (ii, iii, vi)</span></h6>
<ul className="disc">
<li><p>Standard doubling rules apply (root preferred)</p></li>
<li><p>Smooth voice leading between chords</p></li>
<li><p>Consider melodic implications of chord choices</p></li>
</ul>
</div>
</article>
<article className="paragraphs" id="AnalyticalApplications"><h5 className="heading"><span className="title">Analytical Applications</span></h5>
<p>Secondary triads are essential for analyzing:</p>
<ul className="disc">
<li><p><strong>Baroque Music:</strong> Bach chorales and instrumental works</p></li>
<li><p><strong>Classical Period:</strong> Sonata forms and development sections</p></li>
<li><p><strong>Romantic Music:</strong> Extended harmonic progressions</p></li>
<li><p><strong>Popular Music:</strong> Contemporary chord progressions and song forms</p></li>
</ul>
</article>
<article className="paragraphs" id="PracticalExercises"><h5 className="heading"><span className="title">Practice Strategies</span></h5>
<ol className="decimal">
<li><p>Identify secondary triads in musical excerpts</p></li>
<li><p>Practice voice leading between primary and secondary triads</p></li>
<li><p>Compose short progressions using secondary triads</p></li>
<li><p>Analyze the harmonic rhythm and function of secondary triads in repertoire</p></li>
</ol>
</article>
<div className="conclusion">
<p>Mastery of secondary triads expands harmonic vocabulary and provides deeper insight into tonal music. These chords create variety, support melodic lines, and enable sophisticated voice leading in both composition and analysis.</p>
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

export default Ch07SecondarytriadsinmajorandminorPage;
