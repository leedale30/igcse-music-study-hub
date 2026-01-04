import React from 'react';
import { Link } from 'react-router-dom';

const Classical0107TonalityPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Tonality</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Tonality
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
<h2>Definition: Tonality</h2>
<p><strong>Tonality</strong> refers to the organization of music around a central pitch or tonic, creating a hierarchical system of pitch relationships. In Classical music, tonality is characterized by clear key centers, systematic modulation between related keys, and the use of major and minor scales to create contrast and structural organization.</p>
</section>
 Key Characteristics Section 
<section className="characteristics-section" id="key-characteristics">
<h2>Key Characteristics of Classical Tonality</h2>
<div className="characteristic-item" id="tonal-hierarchy">
<h3>Clear Tonal Hierarchy</h3>
<p>Classical music establishes and maintains clear tonal centers through systematic use of scale degrees and their functions.</p>
<h4>Scale Degree Functions</h4>
<p>Each degree of the major and minor scales has specific tonal functions:</p>
<ul>
<li><strong>Tonic (1st degree):</strong> The home note providing stability and resolution</li>
<li><strong>Dominant (5th degree):</strong> Creates tension and drives toward tonic</li>
<li><strong>Subdominant (4th degree):</strong> Provides contrast and preparation</li>
<li><strong>Leading tone (7th degree):</strong> Strong tendency to resolve upward to tonic</li>
</ul>
<h4>Major and Minor Systems</h4>
<p>Classical tonality employs both major and minor modes for expressive contrast:</p>
<ul>
<li><strong>Major keys:</strong> Generally associated with brightness and stability</li>
<li><strong>Minor keys:</strong> Often used for darker, more expressive character</li>
<li><strong>Parallel relationships:</strong> Major and minor keys sharing the same tonic</li>
<li><strong>Relative relationships:</strong> Major and minor keys sharing the same key signature</li>
</ul>
</div>
<div className="characteristic-item" id="key-relationships">
<h3>Systematic Key Relationships</h3>
<p>Classical music organizes keys according to their closeness on the circle of fifths and their functional relationships.</p>
<h4>Closely Related Keys</h4>
<p>Keys that differ by no more than one sharp or flat:</p>
<ul>
<li><strong>Dominant key:</strong> Fifth above the tonic (one sharp more)</li>
<li><strong>Subdominant key:</strong> Fifth below the tonic (one flat more)</li>
<li><strong>Relative major/minor:</strong> Sharing the same key signature</li>
<li><strong>Parallel major/minor:</strong> Sharing the same tonic note</li>
</ul>
<h4>Distant Key Relationships</h4>
<p>Keys separated by multiple steps on the circle of fifths:</p>
<ul>
<li><strong>Chromatic mediant:</strong> Keys a third apart with different key signatures</li>
<li><strong>Tritone relationships:</strong> Keys separated by six semitones</li>
<li><strong>Enharmonic relationships:</strong> Keys that sound the same but are spelled differently</li>
<li><strong>Neapolitan relationships:</strong> Keys based on the flattened second degree</li>
</ul>
</div>
</section>
 Modulation Techniques Section 
<section className="techniques-section" id="modulation-techniques">
<h2>Classical Modulation Techniques</h2>
<div className="technique-item" id="common-modulations">
<h3>Common Modulation Methods</h3>
<p>Classical composers developed sophisticated techniques for moving between keys:</p>
<h4>Pivot Chord Modulation</h4>
<p>Using a chord that functions in both the old and new keys:</p>
<ul>
<li><strong>Common chord:</strong> A chord that exists in both keys</li>
<li><strong>Reinterpretation:</strong> The pivot chord changes function between keys</li>
<li><strong>Smooth transition:</strong> Creates seamless movement between keys</li>
<li><strong>Cadential confirmation:</strong> New key established through authentic cadence</li>
</ul>
<h4>Sequential Modulation</h4>
<p>Modulation through repetition of patterns at different pitch levels:</p>
<ul>
<li><strong>Circle of fifths:</strong> Sequential root movement by descending fifths</li>
<li><strong>Ascending sequences:</strong> Patterns moving upward by steps or thirds</li>
<li><strong>Descending sequences:</strong> Patterns moving downward systematically</li>
<li><strong>Chromatic sequences:</strong> Sequential patterns with chromatic voice leading</li>
</ul>
<h4>Direct Modulation</h4>
<p>Abrupt key changes without transitional preparation:</p>
<ul>
<li><strong>Phrase modulation:</strong> New key begins with new phrase or section</li>
<li><strong>Chromatic modulation:</strong> Sudden shift through chromatic voice leading</li>
<li><strong>Enharmonic modulation:</strong> Using enharmonic respelling to change key</li>
<li><strong>Common tone modulation:</strong> Single note connects different keys</li>
</ul>
</div>
<div className="technique-item" id="structural-modulation">
<h3>Structural Functions of Modulation</h3>
<p>Modulation serves specific formal and expressive purposes in Classical music:</p>
<h4>Formal Articulation</h4>
<ul>
<li><strong>Exposition modulation:</strong> Movement from tonic to dominant in sonata form</li>
<li><strong>Development exploration:</strong> Wide-ranging key exploration for contrast</li>
<li><strong>Recapitulation adjustment:</strong> Maintaining tonic key in return sections</li>
<li><strong>Coda confirmation:</strong> Final establishment of home key</li>
</ul>
<h4>Expressive Purposes</h4>
<ul>
<li><strong>Character contrast:</strong> Different keys for different emotional states</li>
<li><strong>Dramatic tension:</strong> Distant keys for climactic moments</li>
<li><strong>Textural variety:</strong> Key changes coordinated with texture changes</li>
<li><strong>Thematic development:</strong> Themes presented in different keys for variety</li>
</ul>
</div>
</section>
 Tonal Planning Section 
<section className="planning-section" id="tonal-planning">
<h2>Classical Tonal Planning</h2>
<div className="planning-item" id="large-scale-structure">
<h3>Large-Scale Tonal Architecture</h3>
<p>Classical works are organized around comprehensive tonal plans that support formal structure:</p>
<h4>Sonata Form Tonal Plan</h4>
<p>Standard key relationships in sonata form movements:</p>
<ul>
<li><strong>Exposition:</strong> Tonic → Dominant (major keys) or Tonic → Relative Major (minor keys)</li>
<li><strong>Development:</strong> Exploration of various keys, often including distant relationships</li>
<li><strong>Recapitulation:</strong> Both themes in tonic key for unity</li>
<li><strong>Coda:</strong> Confirmation and extension of tonic key</li>
</ul>
<h4>Multi-Movement Tonal Planning</h4>
<p>Key relationships across entire works:</p>
<ul>
<li><strong>Outer movements:</strong> Usually in the same key for unity</li>
<li><strong>Slow movements:</strong> Often in closely related keys (subdominant, dominant, relative)</li>
<li><strong>Minuet/Scherzo:</strong> Typically in tonic key with contrasting trio</li>
<li><strong>Overall unity:</strong> Return to home key for final resolution</li>
</ul>
</div>
<div className="planning-item" id="local-tonal-events">
<h3>Local Tonal Events</h3>
<p>Smaller-scale tonal procedures that support phrase and period structure:</p>
<h4>Tonicization</h4>
<p>Temporary emphasis of keys other than the main tonic:</p>
<ul>
<li><strong>Secondary dominants:</strong> V/V, V/vi, etc. for brief key emphasis</li>
<li><strong>Brief establishment:</strong> Short-term key centers within larger tonal areas</li>
<li><strong>Coloristic effect:</strong> Harmonic variety without true modulation</li>
<li><strong>Phrase-level organization:</strong> Supporting local phrase structure</li>
</ul>
<h4>Chromatic Harmony</h4>
<p>Use of altered chords for tonal color and expression:</p>
<ul>
<li><strong>Augmented sixth chords:</strong> Pre-dominant function with exotic color</li>
<li><strong>Neapolitan sixth:</strong> Flattened supertonic for dramatic effect</li>
<li><strong>Diminished seventh chords:</strong> For modulation and dramatic tension</li>
<li><strong>Chromatic voice leading:</strong> Smooth connections between distant harmonies</li>
</ul>
</div>
</section>
 Key Characteristics Section 
<section className="key-detail-section" id="key-characteristics-detail">
<h2>Classical Key Characteristics</h2>
<div className="key-category" id="major-keys">
<h3>Major Key Characteristics</h3>
<p>Different major keys were associated with specific characters and affects:</p>
<h4>Sharp Keys</h4>
<ul>
<li><strong>C major:</strong> Pure, simple, natural character</li>
<li><strong>G major:</strong> Pastoral, rustic, cheerful</li>
<li><strong>D major:</strong> Brilliant, triumphant, festive</li>
<li><strong>A major:</strong> Bright, confident, heroic</li>
<li><strong>E major:</strong> Radiant, joyful, celestial</li>
</ul>
<h4>Flat Keys</h4>
<ul>
<li><strong>F major:</strong> Gentle, pastoral, peaceful</li>
<li><strong>B♭ major:</strong> Noble, majestic, ceremonial</li>
<li><strong>E♭ major:</strong> Warm, rich, expansive</li>
<li><strong>A♭ major:</strong> Tender, lyrical, intimate</li>
<li><strong>D♭ major:</strong> Exotic, mysterious, otherworldly</li>
</ul>
</div>
<div className="key-category" id="minor-keys">
<h3>Minor Key Characteristics</h3>
<p>Minor keys provided contrast and were associated with more serious or expressive characters:</p>
<h4>Sharp Minor Keys</h4>
<ul>
<li><strong>A minor:</strong> Natural, simple, melancholy</li>
<li><strong>E minor:</strong> Pensive, introspective, gentle sadness</li>
<li><strong>B minor:</strong> Passionate, intense, dramatic</li>
<li><strong>F# minor:</strong> Yearning, expressive, romantic</li>
<li><strong>C# minor:</strong> Profound, mysterious, tragic</li>
</ul>
<h4>Flat Minor Keys</h4>
<ul>
<li><strong>D minor:</strong> Serious, noble, tragic (Mozart's favorite)</li>
<li><strong>G minor:</strong> Passionate, stormy, dramatic</li>
<li><strong>C minor:</strong> Heroic struggle, fate, destiny</li>
<li><strong>F minor:</strong> Dark, brooding, mysterious</li>
<li><strong>B♭ minor:</strong> Exotic, remote, otherworldly</li>
</ul>
</div>
</section>
 Focus Work Examples Section 
<section className="examples-section" id="focus-examples">
<h2>Focus Work Examples</h2>
<div className="example-item" id="mozart-example">
<h3>Mozart: <em>Quintet for Piano and Winds in E flat major, K. 452</em></h3>
<p>Mozart's Quintet demonstrates sophisticated Classical tonal organization:</p>
<h4>Overall Tonal Plan</h4>
<ul>
<li><strong>First Movement:</strong> E♭ major with modulation to B♭ major in exposition</li>
<li><strong>Second Movement:</strong> A♭ major (subdominant relationship) for lyrical contrast</li>
<li><strong>Third Movement:</strong> Return to E♭ major with episodes in related keys</li>
<li><strong>Tonal unity:</strong> E♭ major frames the work with contrasting middle movement</li>
</ul>
<h4>First Movement Tonal Structure</h4>
<ul>
<li><strong>Exposition:</strong> E♭ major → B♭ major (dominant relationship)</li>
<li><strong>Development:</strong> Exploration of C minor, F minor, and other related keys</li>
<li><strong>Recapitulation:</strong> Both themes in E♭ major for tonal resolution</li>
<li><strong>Modulation techniques:</strong> Smooth pivot chord modulations and sequential passages</li>
</ul>
<h4>Characteristic Tonal Features</h4>
<ul>
<li><strong>Key relationships:</strong> Systematic use of closely related keys</li>
<li><strong>Chromatic harmony:</strong> Strategic use of altered chords for color</li>
<li><strong>Tonicization:</strong> Brief emphasis of secondary key centers</li>
<li><strong>Tonal return:</strong> Satisfying resolution to home key in each movement</li>
</ul>
</div>
</section>
 Comparison with Baroque Section 
<section className="comparison-section" id="baroque-comparison">
<h2>Classical vs. Baroque Tonality</h2>
<p>Understanding the evolution from Baroque to Classical tonal practice:</p>
<div className="comparison-list" id="comparison-points">
<h3>Key Differences</h3>
<h4>Tonal Stability</h4>
<ul>
<li><strong>Baroque:</strong> Frequent modulation, often every few phrases</li>
<li><strong>Classical:</strong> Longer periods of tonal stability with planned modulations</li>
<li><strong>Baroque:</strong> Modulation as continuous process</li>
<li><strong>Classical:</strong> Modulation as structural articulation</li>
</ul>
<h4>Key Relationships</h4>
<ul>
<li><strong>Baroque:</strong> Emphasis on circle of fifths progressions</li>
<li><strong>Classical:</strong> Systematic use of closely related keys</li>
<li><strong>Baroque:</strong> Sequential modulation patterns</li>
<li><strong>Classical:</strong> Pivot chord and smooth modulation techniques</li>
</ul>
<h4>Formal Function</h4>
<ul>
<li><strong>Baroque:</strong> Tonality supports continuous formal processes</li>
<li><strong>Classical:</strong> Tonality articulates clear formal divisions</li>
<li><strong>Baroque:</strong> Tonal plan often follows harmonic sequence</li>
<li><strong>Classical:</strong> Tonal plan supports balanced formal structures</li>
</ul>
</div>
</section>
 Performance Practice Section 
<section className="practice-section" id="performance-practice">
<h2>Performance Practice</h2>
<p>Guidelines for realizing Classical tonality in performance:</p>
<div className="practice-list" id="practice-guidelines">
<h3>Key Considerations</h3>
<h4>Tonal Clarity</h4>
<ul>
<li><strong>Key establishment:</strong> Clearly establish tonic at beginnings and returns</li>
<li><strong>Modulation emphasis:</strong> Make key changes audible through phrasing and dynamics</li>
<li><strong>Cadential clarity:</strong> Emphasize cadences that confirm new keys</li>
<li><strong>Leading tone emphasis:</strong> Ensure leading tones resolve clearly to tonic</li>
</ul>
<h4>Expressive Use of Keys</h4>
<ul>
<li><strong>Character differentiation:</strong> Adjust performance style for different keys</li>
<li><strong>Dynamic coordination:</strong> Use dynamics to support tonal tension and resolution</li>
<li><strong>Tempo flexibility:</strong> Slight tempo adjustments for key changes</li>
<li><strong>Articulation variety:</strong> Different articulations for different tonal areas</li>
</ul>
<h4>Ensemble Coordination</h4>
<ul>
<li><strong>Intonation accuracy:</strong> Pure intervals essential for tonal clarity</li>
<li><strong>Balance adjustment:</strong> Emphasize voices that establish key centers</li>
<li><strong>Harmonic awareness:</strong> All players must understand their tonal function</li>
<li><strong>Phrase coordination:</strong> Align phrasing with tonal structure</li>
</ul>
</div>
</section>
 Assessment Focus Section 
<section className="assessment-section" id="assessment-focus">
<h2>Assessment Focus</h2>
<p>Key points for IGCSE Music assessment regarding tonality in Classical music:</p>
<div className="assessment-list" id="assessment-points">
<h3>Essential Knowledge</h3>
<ul>
<li><strong>Key relationships:</strong> Understand closely related and distant key relationships</li>
<li><strong>Modulation techniques:</strong> Identify pivot chord, sequential, and direct modulations</li>
<li><strong>Tonal functions:</strong> Recognize tonic, dominant, and subdominant functions</li>
<li><strong>Scale degree functions:</strong> Understand the role of each scale degree</li>
<li><strong>Formal coordination:</strong> How tonality supports Classical forms</li>
<li><strong>Historical context:</strong> Compare Classical tonality with Baroque practices</li>
</ul>
<h3>Analytical Skills</h3>
<ul>
<li>Identify key centers and modulations in musical examples</li>
<li>Analyze the relationship between keys in multi-movement works</li>
<li>Trace modulation techniques through musical passages</li>
<li>Evaluate how tonality supports formal structure</li>
<li>Compare tonal treatment across different Classical composers</li>
</ul>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default Classical0107TonalityPage;
