import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0106HarmonyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Harmony</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Harmony
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 4 • Music and Words
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
      ">
        <div dangerouslySetInnerHTML={{ __html: `Definition Section 
<section id="definition">
<h3>Definition</h3>
<p>Harmony in Music and Words refers to the vertical combination of pitches and chords that provides harmonic support for the melody and text, creating emotional context, illustrating textual imagery, and enhancing the overall expressive impact of the music. In this area of study, harmony serves not only as musical accompaniment but as an active participant in conveying textual meaning through chord choice, harmonic rhythm, and harmonic progression.</p>
</section>
 Key Characteristics Section 
<section id="key-characteristics">
<h3>Key Characteristics of Harmony in Music and Words</h3>
<div className="characteristic" id="text-supportive-harmony">
<h4>Text-Supportive Harmony</h4>
<p>Harmonic choices that directly support and enhance the meaning, emotion, and imagery of the text being set to music.</p>
<ul>
<li><strong>Emotional harmony:</strong> Chord choices that reflect textual emotion</li>
<li><strong>Descriptive harmony:</strong> Harmonic colors that paint textual images</li>
<li><strong>Narrative harmony:</strong> Harmonic progressions that support storytelling</li>
<li><strong>Character harmony:</strong> Distinctive harmonic styles for different characters</li>
</ul>
</div>
<div className="characteristic" id="expressive-harmony">
<h4>Expressive and Coloristic Harmony</h4>
<p>The use of harmonic color, dissonance, and resolution to create specific moods, atmospheres, and emotional responses that enhance textual expression.</p>
<ul>
<li><strong>Chromatic harmony:</strong> Use of altered chords for emotional intensity</li>
<li><strong>Modal harmony:</strong> Use of modes for specific character or atmosphere</li>
<li><strong>Extended harmony:</strong> Added notes for sophisticated color</li>
<li><strong>Dissonant harmony:</strong> Tension and resolution for dramatic effect</li>
</ul>
</div>
<div className="characteristic" id="word-painting-harmony">
<h4>Word-Painting Through Harmony</h4>
<p>The use of specific harmonic techniques to directly illustrate or paint the images, concepts, and emotions described in the text.</p>
<ul>
<li><strong>Pictorial harmony:</strong> Harmonic colors that paint visual images</li>
<li><strong>Symbolic harmony:</strong> Harmonic progressions with symbolic meaning</li>
<li><strong>Onomatopoeic harmony:</strong> Harmonic imitation of sounds</li>
<li><strong>Metaphorical harmony:</strong> Abstract concepts expressed through harmony</li>
</ul>
</div>
<div className="characteristic" id="genre-harmonic-conventions">
<h4>Genre-Specific Harmonic Conventions</h4>
<p>Different genres within Music and Words have developed characteristic harmonic languages that serve their specific purposes and performance contexts.</p>
<ul>
<li><strong>Art Song:</strong> Sophisticated harmonic language for poetic expression</li>
<li><strong>Choral Music:</strong> Harmonic writing suitable for vocal ensemble</li>
<li><strong>Popular Song:</strong> Accessible harmonic progressions for commercial appeal</li>
<li><strong>Musicals:</strong> Theatrical harmony that supports dramatic action</li>
</ul>
</div>
</section>
 Harmonic Elements Section 
<section id="harmonic-elements">
<h3>Key Harmonic Elements in Music and Words</h3>
<div className="element-grid">
<div className="element-card">
<h4>Chord Types</h4>
<ul>
<li><strong>Triads:</strong> Basic three-note chords (major, minor, diminished)</li>
<li><strong>Seventh chords:</strong> Four-note chords for added color</li>
<li><strong>Extended chords:</strong> Ninth, eleventh, thirteenth chords</li>
<li><strong>Altered chords:</strong> Chromatic modifications for expression</li>
</ul>
</div>
<div className="element-card">
<h4>Harmonic Progressions</h4>
<ul>
<li><strong>Functional progressions:</strong> Traditional tonic-dominant relationships</li>
<li><strong>Modal progressions:</strong> Non-functional harmonic movement</li>
<li><strong>Chromatic progressions:</strong> Smooth voice-leading through chromaticism</li>
<li><strong>Circular progressions:</strong> Harmonic cycles and sequences</li>
</ul>
</div>
<div className="element-card">
<h4>Harmonic Rhythm</h4>
<ul>
<li><strong>Slow harmonic rhythm:</strong> Stable, contemplative harmony</li>
<li><strong>Fast harmonic rhythm:</strong> Active, energetic harmony</li>
<li><strong>Variable rhythm:</strong> Changing harmonic pace for expression</li>
<li><strong>Text-aligned rhythm:</strong> Harmonic changes that support text</li>
</ul>
</div>
</div>
</section>
 Genre Applications 
<section id="genre-applications">
<h3>Harmony in Different Genres</h3>
<div className="genre-example" id="art-song-harmony">
<h4>Art Song</h4>
<p>Art songs use harmony with great sophistication to create intimate musical experiences that serve poetic expression and enhance textual meaning.</p>
<ul>
<li><strong>Through-composed harmony:</strong> Continuous harmonic development</li>
<li><strong>Poetic harmony:</strong> Harmonic choices that serve poetic structure</li>
<li><strong>Expressive harmony:</strong> Sophisticated harmonic language for emotion</li>
<li><strong>Chamber harmony:</strong> Intimate harmonic style for small venues</li>
<li><strong>Art harmony:</strong> Complex harmonic construction and voice-leading</li>
</ul>
</div>
<div className="genre-example" id="choral-harmony">
<h4>Choral Music</h4>
<p>Choral works use harmony to create powerful collective musical experiences while ensuring textual clarity and vocal accessibility.</p>
<ul>
<li><strong>Vocal harmony:</strong> Harmonic writing suitable for voices</li>
<li><strong>Homophonic harmony:</strong> Clear harmonic support for melody</li>
<li><strong>Polyphonic harmony:</strong> Independent harmonic lines</li>
<li><strong>Congregational harmony:</strong> Simple harmony for participation</li>
<li><strong>Ceremonial harmony:</strong> Appropriate for worship or celebration</li>
</ul>
</div>
<div className="genre-example" id="popular-song-harmony">
<h4>Popular Song</h4>
<p>Popular songs use harmony strategically to create memorable, commercially appealing music that works well in recorded and broadcast media.</p>
<ul>
<li><strong>Hook harmony:</strong> Memorable harmonic progressions</li>
<li><strong>Verse harmony:</strong> Supportive harmony for storytelling</li>
<li><strong>Chorus harmony:</strong> Strong harmonic foundation for refrains</li>
<li><strong>Commercial harmony:</strong> Accessible harmonic language</li>
<li><strong>Production harmony:</strong> Harmony that works well in recording</li>
</ul>
</div>
<div className="genre-example" id="musical-theatre-harmony">
<h4>Songs from Musicals</h4>
<p>Musical theatre songs use harmony theatrically to support dramatic action, character development, and storytelling within stage performance.</p>
<ul>
<li><strong>Character harmony:</strong> Distinctive harmonic styles for characters</li>
<li><strong>Dramatic harmony:</strong> Harmonic choices that support theatrical action</li>
<li><strong>Ensemble harmony:</strong> Harmony that works for group numbers</li>
<li><strong>Dance harmony:</strong> Harmonic foundation suitable for choreography</li>
<li><strong>Recitative harmony:</strong> Simple harmonic support for speech-like delivery</li>
</ul>
</div>
</section>
 Word-Painting Through Harmony 
<section id="harmonic-word-painting">
<h3>Word-Painting Through Harmony</h3>
<div className="example" id="emotional-painting">
<h4>Emotional Word-Painting</h4>
<ul>
<li><strong>Major chords:</strong> For joy, happiness, triumph, celebration</li>
<li><strong>Minor chords:</strong> For sadness, melancholy, introspection, sorrow</li>
<li><strong>Diminished chords:</strong> For tension, fear, uncertainty, darkness</li>
<li><strong>Augmented chords:</strong> For mystery, otherworldliness, instability</li>
</ul>
</div>
<div className="example" id="descriptive-painting">
<h4>Descriptive Word-Painting</h4>
<ul>
<li><strong>Open fifths:</strong> For emptiness, vastness, medieval atmosphere</li>
<li><strong>Cluster chords:</strong> For chaos, confusion, modern sounds</li>
<li><strong>Quartal harmony:</strong> For modern, sophisticated atmosphere</li>
<li><strong>Pedal points:</strong> For stability, drone effects, pastoral scenes</li>
</ul>
</div>
<div className="example" id="movement-painting">
<h4>Movement and Direction</h4>
<ul>
<li><strong>Rising progressions:</strong> For ascent, hope, aspiration, climbing</li>
<li><strong>Falling progressions:</strong> For descent, despair, falling, decline</li>
<li><strong>Circular progressions:</strong> For cycles, eternity, repetition</li>
<li><strong>Chromatic progressions:</strong> For smooth movement, sophistication</li>
</ul>
</div>
<div className="example" id="symbolic-painting">
<h4>Symbolic Word-Painting</h4>
<ul>
<li><strong>Cross relations:</strong> False relations for religious or mystical texts</li>
<li><strong>Neapolitan chords:</strong> For exotic or foreign references</li>
<li><strong>Augmented sixth chords:</strong> For dramatic tension or passion</li>
<li><strong>Modal harmony:</strong> For archaic, folk, or spiritual references</li>
</ul>
</div>
</section>
 Harmonic Techniques 
<section id="harmonic-techniques">
<h3>Harmonic Techniques in Music and Words</h3>
<div className="technique" id="voice-leading">
<h4>Voice Leading</h4>
<p>The smooth and logical movement of individual harmonic voices to create effective harmonic progressions.</p>
<ul>
<li><strong>Smooth voice leading:</strong> Minimal movement between chords</li>
<li><strong>Contrary motion:</strong> Voices moving in opposite directions</li>
<li><strong>Parallel motion:</strong> Voices moving in the same direction</li>
<li><strong>Oblique motion:</strong> One voice moving while another stays</li>
</ul>
</div>
<div className="technique" id="modulation">
<h4>Modulation and Key Change</h4>
<p>The movement from one key to another to support textual development and create structural variety.</p>
<ul>
<li><strong>Pivot chord modulation:</strong> Using common chords to change keys</li>
<li><strong>Direct modulation:</strong> Immediate key change without preparation</li>
<li><strong>Sequential modulation:</strong> Key changes through sequence</li>
<li><strong>Chromatic modulation:</strong> Key changes through chromatic harmony</li>
</ul>
</div>
<div className="technique" id="harmonic-substitution">
<h4>Harmonic Substitution</h4>
<p>The replacement of expected chords with alternative harmonies to create interest and support textual expression.</p>
<ul>
<li><strong>Tritone substitution:</strong> Replacing dominant chords</li>
<li><strong>Chromatic substitution:</strong> Using chromatic alternatives</li>
<li><strong>Modal substitution:</strong> Borrowing chords from parallel modes</li>
<li><strong>Secondary dominants:</strong> Temporary tonicization of other keys</li>
</ul>
</div>
</section>
 Harmonic Analysis 
<section id="harmonic-analysis">
<h3>Analyzing Harmony in Music and Words</h3>
<div className="analysis-approach" id="functional-analysis">
<h4>Functional Analysis</h4>
<p>Understanding how chords function within a key and how they create harmonic motion and resolution.</p>
<ul>
<li><strong>Tonic function:</strong> Chords that provide stability and rest</li>
<li><strong>Dominant function:</strong> Chords that create tension and drive to resolution</li>
<li><strong>Subdominant function:</strong> Chords that provide departure from tonic</li>
<li><strong>Pre-dominant function:</strong> Chords that prepare dominant harmony</li>
</ul>
</div>
<div className="analysis-approach" id="roman-numeral-analysis">
<h4>Roman Numeral Analysis</h4>
<p>A system for identifying and labeling chords within a key using Roman numerals.</p>
<ul>
<li><strong>Major key analysis:</strong> I, ii, iii, IV, V, vi, vii°</li>
<li><strong>Minor key analysis:</strong> i, ii°, III, iv, V, VI, vii°</li>
<li><strong>Secondary dominants:</strong> V/V, V/vi, etc.</li>
<li><strong>Borrowed chords:</strong> Chords from parallel modes</li>
</ul>
</div>
<div className="analysis-approach" id="lead-sheet-analysis">
<h4>Lead Sheet Analysis</h4>
<p>Popular music chord symbols used to indicate harmony in commercial and jazz contexts.</p>
<ul>
<li><strong>Basic triads:</strong> C, Dm, Em, F, G, Am, B°</li>
<li><strong>Seventh chords:</strong> Cmaj7, Dm7, Em7, Fmaj7, G7, Am7, Bm7♭5</li>
<li><strong>Extended chords:</strong> C9, Dm11, G13, etc.</li>
<li><strong>Altered chords:</strong> C♯°7, F♯dim, G7♯5, etc.</li>
</ul>
</div>
</section>
 Performance Practice 
<section id="performance-practice">
<h3>Performance Practice</h3>
<h4>Vocal Considerations</h4>
<ul>
<li><strong>Harmonic support:</strong> Harmony that supports vocal lines</li>
<li><strong>Voice leading:</strong> Smooth harmonic movement for singers</li>
<li><strong>Range considerations:</strong> Harmonic writing within vocal ranges</li>
<li><strong>Blend and balance:</strong> Harmonic parts that blend well</li>
</ul>
<h4>Interpretive Considerations</h4>
<ul>
<li><strong>Textual support:</strong> Harmony serves textual expression</li>
<li><strong>Emotional enhancement:</strong> Harmonic choices enhance emotion</li>
<li><strong>Character portrayal:</strong> Harmony reflects character types</li>
<li><strong>Dramatic context:</strong> Harmony supports theatrical elements</li>
</ul>
<h4>Technical Considerations</h4>
<ul>
<li><strong>Chord voicing:</strong> Effective distribution of harmonic notes</li>
<li><strong>Harmonic rhythm:</strong> Appropriate pace of harmonic change</li>
<li><strong>Voice independence:</strong> Clear individual harmonic lines</li>
<li><strong>Harmonic clarity:</strong> Clear harmonic function and progression</li>
</ul>
</section>
 Assessment Focus 
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<h4>What You Need to Know</h4>
<ul>
<li>Identify different types of chords and their expressive effects</li>
<li>Understand how harmony supports and enhances textual meaning</li>
<li>Recognize word-painting through harmonic choices</li>
<li>Compare harmonic approaches across different genres</li>
<li>Analyze harmonic progressions using appropriate terminology</li>
<li>Use correct chord symbols and Roman numeral analysis</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Identify chord types and qualities in recordings</li>
<li>Recognize harmonic progressions and their functions</li>
<li>Hear how harmony supports textual meaning and emotion</li>
<li>Distinguish between different harmonic styles and genres</li>
<li>Follow harmonic development and modulation</li>
</ul>
<h4>Analysis Skills</h4>
<ul>
<li>Explain how harmonic choices enhance specific texts</li>
<li>Compare harmonic approaches in different genres and styles</li>
<li>Evaluate the effectiveness of harmonic word-painting</li>
<li>Identify the relationship between harmony and other musical elements</li>
<li>Describe how harmony contributes to overall musical expression</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0106HarmonyPage;
