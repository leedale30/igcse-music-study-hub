import React from 'react';
import { Link } from 'react-router-dom';

const Classical0106HarmonyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Harmony</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Harmony
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 2 • Classical Music
        </p>
      </header>

      {/* Main Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none
        prose-headings:text-slate-800 dark:prose-headings:text-slate-100
        prose-h2:text-2xl prose-h2:font-bold prose-h2:border-b prose-h2:border-slate-200 prose-h2:dark:border-slate-700 prose-h2:pb-2 prose-h2:mb-4
        prose-h3:text-xl prose-h3:font-semibold
        prose-h4:text-lg prose-h4:font-medium
        prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-p:leading-relaxed
        prose-li:text-gray-700 prose-li:dark:text-gray-300
        prose-strong:text-slate-800 prose-strong:dark:text-slate-200
        prose-em:text-gray-600 prose-em:dark:text-gray-400
        prose-a:text-sky-600 prose-a:dark:text-sky-400 prose-a:hover:underline
        [&_section]:mb-10 [&_section]:bg-slate-50 [&_section]:dark:bg-slate-800 [&_section]:rounded-lg [&_section]:p-6
        [&_.assessment-section]:bg-amber-50 [&_.assessment-section]:dark:bg-amber-900/20 [&_.assessment-section]:border [&_.assessment-section]:border-amber-200 [&_.assessment-section]:dark:border-amber-800
        [&_.definition-section]:bg-sky-50 [&_.definition-section]:dark:bg-sky-900/20 [&_.definition-section]:border [&_.definition-section]:border-sky-200 [&_.definition-section]:dark:border-sky-800
        [&_.characteristic-item]:bg-white [&_.characteristic-item]:dark:bg-slate-700 [&_.characteristic-item]:rounded-lg [&_.characteristic-item]:p-4 [&_.characteristic-item]:mb-4 [&_.characteristic-item]:border [&_.characteristic-item]:border-slate-200 [&_.characteristic-item]:dark:border-slate-600
        [&_.example-item]:bg-white [&_.example-item]:dark:bg-slate-700 [&_.example-item]:rounded-lg [&_.example-item]:p-4 [&_.example-item]:mb-4 [&_.example-item]:border [&_.example-item]:border-slate-200 [&_.example-item]:dark:border-slate-600
      ">
        <div dangerouslySetInnerHTML={{ __html: `Definition Section 
<section className="definition-section" id="definition">
<h2>Definition: Harmony</h2>
<p><strong>Harmony</strong> refers to the simultaneous combination of different musical notes to create chords and the progression of these chords through time. In Classical music, harmony is characterized by functional tonal relationships, clear cadential patterns, and a sophisticated understanding of chord progressions that support and enhance melodic lines.</p>
</section>
 Key Characteristics Section 
<section className="characteristics-section" id="key-characteristics">
<h2>Key Characteristics of Classical Harmony</h2>
<div className="characteristic-item" id="functional-harmony">
<h3>Functional Tonal Harmony</h3>
<p>Classical harmony is built on the principle of functional tonality, where chords have specific roles and relationships within a key.</p>
<h4>Primary Triads</h4>
<p>The foundation of Classical harmony rests on three primary triads:</p>
<ul>
<li><strong>Tonic (I):</strong> The home chord providing stability and resolution</li>
<li><strong>Dominant (V):</strong> Creates tension and drives toward tonic resolution</li>
<li><strong>Subdominant (IV):</strong> Provides contrast and preparation for dominant</li>
<li><strong>Functional relationships:</strong> Clear progression patterns between these chords</li>
</ul>
<h4>Secondary Triads</h4>
<p>Additional triads that enrich harmonic vocabulary:</p>
<ul>
<li><strong>Supertonic (ii):</strong> Often used in pre-dominant function</li>
<li><strong>Mediant (iii):</strong> Provides tonic substitute or bridge function</li>
<li><strong>Submediant (vi):</strong> Relative minor, deceptive resolution target</li>
<li><strong>Leading tone (vii°):</strong> Diminished chord with dominant function</li>
</ul>
</div>
<div className="characteristic-item" id="cadential-patterns">
<h3>Sophisticated Cadential Language</h3>
<p>Classical music developed a refined system of cadences that articulate phrase structure and formal divisions.</p>
<h4>Authentic Cadences</h4>
<p>The strongest cadential progressions providing definitive closure:</p>
<ul>
<li><strong>Perfect Authentic Cadence (PAC):</strong> V-I with both chords in root position, tonic in soprano</li>
<li><strong>Imperfect Authentic Cadence (IAC):</strong> V-I with inversions or non-tonic soprano</li>
<li><strong>Dominant preparation:</strong> Often preceded by pre-dominant harmony (ii or IV)</li>
<li><strong>Structural significance:</strong> Marks important formal boundaries</li>
</ul>
<h4>Half Cadences and Other Types</h4>
<p>Cadences that create continuation rather than closure:</p>
<ul>
<li><strong>Half Cadence (HC):</strong> Ends on dominant, creating expectation of continuation</li>
<li><strong>Deceptive Cadence:</strong> V-vi, avoiding expected tonic resolution</li>
<li><strong>Plagal Cadence:</strong> IV-I, the "Amen" cadence</li>
<li><strong>Phrygian Half Cadence:</strong> iv6-V in minor keys</li>
</ul>
</div>
</section>
 Harmonic Techniques Section 
<section className="techniques-section" id="harmonic-techniques">
<h2>Classical Harmonic Techniques</h2>
<div className="technique-item" id="chord-extensions">
<h3>Chord Extensions and Alterations</h3>
<p>Classical composers expanded basic triads with additional tones for expressive effect:</p>
<h4>Seventh Chords</h4>
<ul>
<li><strong>Dominant seventh (V7):</strong> Adds urgency to dominant function</li>
<li><strong>Leading-tone seventh (vii°7):</strong> Fully diminished seventh chord</li>
<li><strong>Supertonic seventh (ii7):</strong> Common pre-dominant harmony</li>
<li><strong>Resolution patterns:</strong> Specific voice-leading rules for seventh resolution</li>
</ul>
<h4>Non-Chord Tones</h4>
<p>Melodic embellishments that create harmonic color:</p>
<ul>
<li><strong>Passing tones:</strong> Connect chord tones by step</li>
<li><strong>Neighbor tones:</strong> Brief departure from and return to chord tone</li>
<li><strong>Appoggiatura:</strong> Accented dissonance resolving by step</li>
<li><strong>Suspension:</strong> Delayed resolution of chord tone</li>
</ul>
</div>
<div className="technique-item" id="harmonic-rhythm">
<h3>Harmonic Rhythm and Pacing</h3>
<p>Classical harmony is characterized by carefully controlled harmonic rhythm:</p>
<h4>Harmonic Acceleration</h4>
<ul>
<li><strong>Phrase beginnings:</strong> Often slower harmonic rhythm for stability</li>
<li><strong>Phrase endings:</strong> Accelerated harmonic rhythm toward cadences</li>
<li><strong>Developmental sections:</strong> Increased harmonic activity for tension</li>
<li><strong>Structural coordination:</strong> Harmonic rhythm supports formal design</li>
</ul>
<h4>Harmonic Sequence</h4>
<ul>
<li><strong>Circle of fifths:</strong> Root progressions by descending fifth</li>
<li><strong>Ascending 5-6 sequence:</strong> Common melodic-harmonic pattern</li>
<li><strong>Descending thirds:</strong> Root motion by descending third</li>
<li><strong>Sequential modulation:</strong> Sequences that effect key changes</li>
</ul>
</div>
</section>
 Harmonic Progressions Section 
<section className="progressions-section" id="harmonic-progressions">
<h2>Common Classical Harmonic Progressions</h2>
<div className="progression-list" id="standard-progressions">
<h3>Fundamental Progressions</h3>
<h4>Basic Tonal Progressions</h4>
<p>Essential harmonic patterns in Classical music:</p>
<ul>
<li><strong>I-V-I:</strong> Basic tonic-dominant-tonic progression</li>
<li><strong>I-IV-V-I:</strong> Complete functional progression</li>
<li><strong>vi-IV-V-I:</strong> Popular progression with deceptive beginning</li>
<li><strong>I-vi-IV-V:</strong> Circle progression with smooth voice leading</li>
</ul>
<h4>Pre-Dominant Expansions</h4>
<p>Elaborations of the subdominant function:</p>
<ul>
<li><strong>I-ii6-V-I:</strong> Supertonic as pre-dominant</li>
<li><strong>I-IV-ii6-V-I:</strong> Extended pre-dominant area</li>
<li><strong>I-vi-ii6-V-I:</strong> Deceptive motion to pre-dominant</li>
<li><strong>Neapolitan sixth:</strong> ♭II6 as exotic pre-dominant</li>
</ul>
<h4>Developmental Progressions</h4>
<p>Harmonic patterns used in developmental sections:</p>
<ul>
<li><strong>Sequential progressions:</strong> Patterns repeated at different pitch levels</li>
<li><strong>Chromatic harmony:</strong> Altered chords for expressive effect</li>
<li><strong>Diminished seventh chords:</strong> For dramatic tension and modulation</li>
<li><strong>Augmented sixth chords:</strong> Pre-dominant chords with exotic color</li>
</ul>
</div>
</section>
 Voice Leading Section 
<section className="voice-leading-section" id="voice-leading">
<h2>Classical Voice Leading</h2>
<div className="voice-leading-list" id="voice-leading-principles">
<h3>Fundamental Principles</h3>
<h4>Smooth Voice Leading</h4>
<p>Classical harmony emphasizes smooth connection between chords:</p>
<ul>
<li><strong>Common tones:</strong> Hold common tones between chords when possible</li>
<li><strong>Step-wise motion:</strong> Move other voices by step when possible</li>
<li><strong>Contrary motion:</strong> Outer voices moving in opposite directions</li>
<li><strong>Voice independence:</strong> Each voice maintains melodic integrity</li>
</ul>
<h4>Resolution Patterns</h4>
<p>Specific rules for resolving dissonant intervals:</p>
<ul>
<li><strong>Leading tone resolution:</strong> Leading tone resolves up to tonic</li>
<li><strong>Seventh resolution:</strong> Chord sevenths resolve down by step</li>
<li><strong>Tritone resolution:</strong> Augmented fourths expand, diminished fifths contract</li>
<li><strong>Suspension resolution:</strong> Suspended notes resolve down by step</li>
</ul>
<h4>Prohibited Motions</h4>
<p>Voice-leading practices to avoid in Classical style:</p>
<ul>
<li><strong>Parallel fifths and octaves:</strong> Between any two voices</li>
<li><strong>Direct fifths and octaves:</strong> In outer voices by similar motion</li>
<li><strong>Voice crossing:</strong> Lower voice moving above higher voice</li>
<li><strong>Unresolved dissonances:</strong> Dissonant intervals must resolve properly</li>
</ul>
</div>
</section>
 Focus Work Examples Section 
<section className="examples-section" id="focus-examples">
<h2>Focus Work Examples</h2>
<div className="example-item" id="mozart-example">
<h3>Mozart: <em>Quintet for Piano and Winds in E flat major, K. 452</em></h3>
<p>Mozart's Quintet demonstrates sophisticated Classical harmonic practice:</p>
<h4>First Movement Harmonic Structure</h4>
<ul>
<li><strong>Exposition harmony:</strong> Clear tonic-dominant relationship between E♭ major and B♭ major</li>
<li><strong>Transitional harmony:</strong> Sophisticated modulation techniques between key areas</li>
<li><strong>Development harmony:</strong> Extensive use of sequence and chromatic harmony</li>
<li><strong>Recapitulation:</strong> Harmonic adjustments to maintain tonic key</li>
</ul>
<h4>Characteristic Harmonic Features</h4>
<ul>
<li><strong>Functional progressions:</strong> Clear I-IV-V-I patterns with elaborations</li>
<li><strong>Secondary dominants:</strong> V/V and other tonicizations for color</li>
<li><strong>Deceptive resolutions:</strong> V-vi progressions for expressive effect</li>
<li><strong>Chromatic voice leading:</strong> Smooth chromatic connections between chords</li>
</ul>
<h4>Cadential Treatment</h4>
<ul>
<li><strong>Perfect authentic cadences:</strong> Mark major structural divisions</li>
<li><strong>Half cadences:</strong> Create expectation and forward momentum</li>
<li><strong>Deceptive cadences:</strong> Extend phrases and create surprise</li>
<li><strong>Elided cadences:</strong> Overlap phrase endings with new beginnings</li>
</ul>
</div>
</section>
 Comparison with Baroque Section 
<section className="comparison-section" id="baroque-comparison">
<h2>Classical vs. Baroque Harmony</h2>
<p>Understanding the evolution from Baroque to Classical harmonic practice:</p>
<div className="comparison-list" id="comparison-points">
<h3>Key Differences</h3>
<h4>Harmonic Language</h4>
<ul>
<li><strong>Baroque:</strong> Emphasis on figured bass and continuo realization</li>
<li><strong>Classical:</strong> Fully written-out harmonic parts with clear voice leading</li>
<li><strong>Baroque:</strong> More linear, contrapuntal approach to harmony</li>
<li><strong>Classical:</strong> Vertical, chordal approach with functional relationships</li>
</ul>
<h4>Cadential Practice</h4>
<ul>
<li><strong>Baroque:</strong> Frequent cadences, often every few measures</li>
<li><strong>Classical:</strong> Cadences articulate larger phrase structures</li>
<li><strong>Baroque:</strong> Emphasis on authentic cadences and sequences</li>
<li><strong>Classical:</strong> Variety of cadence types for different expressive purposes</li>
</ul>
<h4>Harmonic Rhythm</h4>
<ul>
<li><strong>Baroque:</strong> Generally steady harmonic rhythm</li>
<li><strong>Classical:</strong> Variable harmonic rhythm supporting phrase structure</li>
<li><strong>Baroque:</strong> Harmonic rhythm often matches surface rhythm</li>
<li><strong>Classical:</strong> Harmonic acceleration toward cadences</li>
</ul>
</div>
</section>
 Performance Practice Section 
<section className="practice-section" id="performance-practice">
<h2>Performance Practice</h2>
<p>Guidelines for realizing Classical harmony in performance:</p>
<div className="practice-list" id="practice-guidelines">
<h3>Key Considerations</h3>
<h4>Harmonic Clarity</h4>
<ul>
<li><strong>Voice balance:</strong> Ensure all harmonic voices are audible</li>
<li><strong>Bass line prominence:</strong> Harmonic foundation should be clear</li>
<li><strong>Chord spacing:</strong> Appropriate distribution of chord tones</li>
<li><strong>Harmonic rhythm:</strong> Emphasize important harmonic changes</li>
</ul>
<h4>Cadential Emphasis</h4>
<ul>
<li><strong>Cadential preparation:</strong> Build tension toward cadential points</li>
<li><strong>Resolution clarity:</strong> Make harmonic resolutions audible</li>
<li><strong>Phrase articulation:</strong> Use harmony to clarify phrase structure</li>
<li><strong>Dynamic coordination:</strong> Align dynamics with harmonic tension</li>
</ul>
<h4>Ensemble Coordination</h4>
<ul>
<li><strong>Harmonic listening:</strong> Players must hear their harmonic role</li>
<li><strong>Intonation:</strong> Pure intervals essential for harmonic clarity</li>
<li><strong>Timing coordination:</strong> Precise attacks for chord clarity</li>
<li><strong>Balance adjustment:</strong> Adapt balance to harmonic function</li>
</ul>
</div>
</section>
 Assessment Focus Section 
<section className="assessment-section" id="assessment-focus">
<h2>Assessment Focus</h2>
<p>Key points for IGCSE Music assessment regarding harmony in Classical music:</p>
<div className="assessment-list" id="assessment-points">
<h3>Essential Knowledge</h3>
<ul>
<li><strong>Functional harmony:</strong> Understand tonic, dominant, and subdominant functions</li>
<li><strong>Cadence types:</strong> Identify and analyze different cadential patterns</li>
<li><strong>Chord progressions:</strong> Recognize common Classical harmonic progressions</li>
<li><strong>Voice leading:</strong> Understand principles of smooth voice connection</li>
<li><strong>Non-chord tones:</strong> Identify and analyze melodic embellishments</li>
<li><strong>Historical context:</strong> Compare Classical harmony with Baroque practices</li>
</ul>
<h3>Analytical Skills</h3>
<ul>
<li>Analyze chord progressions using Roman numeral notation</li>
<li>Identify cadence types and their structural functions</li>
<li>Trace voice leading through harmonic progressions</li>
<li>Evaluate the relationship between harmony and form</li>
<li>Compare harmonic treatment across different Classical works</li>
</ul>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default Classical0106HarmonyPage;
