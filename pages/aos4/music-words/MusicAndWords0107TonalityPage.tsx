import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0107TonalityPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Tonality</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Tonality
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
<p>Tonality in Music and Words refers to the system of key relationships, scales, and tonal centers that provide harmonic and melodic framework for text setting. In this area of study, tonality serves not only as a structural foundation but as an expressive tool that can enhance textual meaning, create emotional associations, support dramatic development, and provide symbolic or cultural references that enrich the relationship between music and words.</p>
</section>
 Key Characteristics Section 
<section id="key-characteristics">
<h3>Key Characteristics of Tonality in Music and Words</h3>
<div className="characteristic" id="expressive-tonality">
<h4>Expressive and Emotional Tonality</h4>
<p>The use of specific keys, modes, and tonal relationships to create emotional associations and enhance the expressive content of the text.</p>
<ul>
<li><strong>Key associations:</strong> Traditional emotional associations with specific keys</li>
<li><strong>Major/minor contrast:</strong> Tonal quality reflecting textual emotion</li>
<li><strong>Modal inflection:</strong> Use of modes for specific character or atmosphere</li>
<li><strong>Chromatic inflection:</strong> Altered notes for emotional intensity</li>
</ul>
</div>
<div className="characteristic" id="text-supportive-tonality">
<h4>Text-Supportive Tonality</h4>
<p>Tonal choices that directly support and enhance the meaning, imagery, and narrative development of the text being set to music.</p>
<ul>
<li><strong>Descriptive tonality:</strong> Tonal colors that paint textual images</li>
<li><strong>Narrative tonality:</strong> Key relationships that support storytelling</li>
<li><strong>Character tonality:</strong> Distinctive tonal areas for different characters</li>
<li><strong>Symbolic tonality:</strong> Keys with symbolic or cultural meaning</li>
</ul>
</div>
<div className="characteristic" id="structural-tonality">
<h4>Structural and Developmental Tonality</h4>
<p>The use of tonal relationships to create musical structure, support textual form, and provide developmental coherence throughout a work.</p>
<ul>
<li><strong>Tonal architecture:</strong> Key relationships that create musical structure</li>
<li><strong>Modulation patterns:</strong> Key changes that support textual development</li>
<li><strong>Tonal return:</strong> Return to home key for resolution or completion</li>
<li><strong>Tonal contrast:</strong> Key contrasts that highlight textual contrasts</li>
</ul>
</div>
<div className="characteristic" id="genre-tonal-conventions">
<h4>Genre-Specific Tonal Conventions</h4>
<p>Different genres within Music and Words have developed characteristic approaches to tonality that serve their specific purposes and performance contexts.</p>
<ul>
<li><strong>Art Song:</strong> Sophisticated tonal language for poetic expression</li>
<li><strong>Choral Music:</strong> Tonal writing suitable for vocal ensemble</li>
<li><strong>Popular Song:</strong> Accessible tonal language for commercial appeal</li>
<li><strong>Musicals:</strong> Theatrical tonality that supports dramatic action</li>
</ul>
</div>
</section>
 Tonal Systems Section 
<section id="tonal-systems">
<h3>Tonal Systems in Music and Words</h3>
<div className="element-grid">
<div className="element-card">
<h4>Major Tonality</h4>
<ul>
<li><strong>Bright character:</strong> Associated with joy, triumph, celebration</li>
<li><strong>Stable foundation:</strong> Clear tonal center and resolution</li>
<li><strong>Positive associations:</strong> Hope, love, happiness, success</li>
<li><strong>Common usage:</strong> Uplifting texts, celebratory songs</li>
</ul>
</div>
<div className="element-card">
<h4>Minor Tonality</h4>
<ul>
<li><strong>Dark character:</strong> Associated with sadness, introspection, mystery</li>
<li><strong>Expressive flexibility:</strong> Natural, harmonic, melodic minor variations</li>
<li><strong>Emotional depth:</strong> Melancholy, longing, tragedy, drama</li>
<li><strong>Common usage:</strong> Sad texts, dramatic songs, introspective pieces</li>
</ul>
</div>
<div className="element-card">
<h4>Modal Tonality</h4>
<ul>
<li><strong>Archaic character:</strong> Historical, folk, or spiritual associations</li>
<li><strong>Distinctive colors:</strong> Each mode has unique character</li>
<li><strong>Cultural associations:</strong> Folk traditions, religious music</li>
<li><strong>Common usage:</strong> Folk texts, spiritual songs, historical references</li>
</ul>
</div>
</div>
</section>
 Genre Applications 
<section id="genre-applications">
<h3>Tonality in Different Genres</h3>
<div className="genre-example" id="art-song-tonality">
<h4>Art Song</h4>
<p>Art songs use tonality with great sophistication to create intimate musical experiences that serve poetic expression and enhance textual meaning.</p>
<ul>
<li><strong>Through-composed tonality:</strong> Continuous tonal development</li>
<li><strong>Poetic tonality:</strong> Tonal choices that serve poetic structure</li>
<li><strong>Expressive tonality:</strong> Sophisticated tonal language for emotion</li>
<li><strong>Chamber tonality:</strong> Intimate tonal style for small venues</li>
<li><strong>Art tonality:</strong> Complex tonal relationships and development</li>
</ul>
</div>
<div className="genre-example" id="choral-tonality">
<h4>Choral Music</h4>
<p>Choral works use tonality to create powerful collective musical experiences while ensuring vocal accessibility and textual clarity.</p>
<ul>
<li><strong>Vocal tonality:</strong> Tonal writing suitable for voices</li>
<li><strong>Congregational tonality:</strong> Accessible tonal language for participation</li>
<li><strong>Ceremonial tonality:</strong> Appropriate for worship or celebration</li>
<li><strong>Traditional tonality:</strong> Familiar tonal patterns for group singing</li>
<li><strong>Modal tonality:</strong> Use of modes for spiritual or historical character</li>
</ul>
</div>
<div className="genre-example" id="popular-song-tonality">
<h4>Popular Song</h4>
<p>Popular songs use tonality strategically to create memorable, commercially appealing music that works well in recorded and broadcast media.</p>
<ul>
<li><strong>Commercial tonality:</strong> Accessible tonal language for broad appeal</li>
<li><strong>Hook tonality:</strong> Memorable tonal patterns and progressions</li>
<li><strong>Production tonality:</strong> Tonal choices that work well in recording</li>
<li><strong>Genre tonality:</strong> Tonal conventions specific to popular music styles</li>
<li><strong>Radio tonality:</strong> Tonal choices suitable for broadcast media</li>
</ul>
</div>
<div className="genre-example" id="musical-theatre-tonality">
<h4>Songs from Musicals</h4>
<p>Musical theatre songs use tonality theatrically to support dramatic action, character development, and storytelling within stage performance.</p>
<ul>
<li><strong>Character tonality:</strong> Distinctive tonal areas for different characters</li>
<li><strong>Dramatic tonality:</strong> Tonal choices that support theatrical action</li>
<li><strong>Narrative tonality:</strong> Key relationships that support storytelling</li>
<li><strong>Ensemble tonality:</strong> Tonal writing that works for group numbers</li>
<li><strong>Dance tonality:</strong> Tonal foundation suitable for choreography</li>
</ul>
</div>
</section>
 Word-Painting Through Tonality 
<section id="tonal-word-painting">
<h3>Word-Painting Through Tonality</h3>
<div className="example" id="emotional-painting">
<h4>Emotional Word-Painting</h4>
<ul>
<li><strong>Major keys:</strong> For joy, triumph, celebration, hope, love</li>
<li><strong>Minor keys:</strong> For sadness, tragedy, introspection, mystery</li>
<li><strong>Chromatic harmony:</strong> For tension, uncertainty, sophistication</li>
<li><strong>Modal inflections:</strong> For archaic, folk, or spiritual character</li>
</ul>
</div>
<div className="example" id="descriptive-painting">
<h4>Descriptive Word-Painting</h4>
<ul>
<li><strong>Pastoral keys:</strong> F major, G major for nature, countryside</li>
<li><strong>Heroic keys:</strong> C major, D major for triumph, nobility</li>
<li><strong>Mysterious keys:</strong> F# minor, C# minor for darkness, mystery</li>
<li><strong>Exotic scales:</strong> Pentatonic, whole-tone for foreign lands</li>
</ul>
</div>
<div className="example" id="cultural-painting">
<h4>Cultural and Historical References</h4>
<ul>
<li><strong>Church modes:</strong> For religious, medieval, or spiritual texts</li>
<li><strong>Folk scales:</strong> For national, ethnic, or traditional references</li>
<li><strong>Blues scales:</strong> For African-American cultural references</li>
<li><strong>Exotic modes:</strong> For foreign, oriental, or mystical references</li>
</ul>
</div>
<div className="example" id="symbolic-painting">
<h4>Symbolic Word-Painting</h4>
<ul>
<li><strong>Key symbolism:</strong> Traditional associations with specific keys</li>
<li><strong>Tonal relationships:</strong> Symbolic meaning in key relationships</li>
<li><strong>Modulation patterns:</strong> Symbolic journey through different keys</li>
<li><strong>Tonal return:</strong> Return to home key for resolution or completion</li>
</ul>
</div>
</section>
 Key Relationships and Modulation 
<section id="key-relationships">
<h3>Key Relationships and Modulation</h3>
<div className="relationship" id="closely-related-keys">
<h4>Closely Related Keys</h4>
<p>Keys that share many common notes and provide smooth, natural modulation possibilities.</p>
<ul>
<li><strong>Relative major/minor:</strong> Same key signature, different tonal center</li>
<li><strong>Parallel major/minor:</strong> Same tonic, different quality</li>
<li><strong>Dominant key:</strong> Fifth above, one sharp/flat difference</li>
<li><strong>Subdominant key:</strong> Fourth above, one flat/sharp difference</li>
</ul>
</div>
<div className="relationship" id="distant-keys">
<h4>Distant Key Relationships</h4>
<p>Keys that share few common notes and create dramatic, surprising modulation effects.</p>
<ul>
<li><strong>Chromatic mediant:</strong> Third relationships with chromatic alteration</li>
<li><strong>Tritone relationships:</strong> Keys a tritone apart for maximum contrast</li>
<li><strong>Enharmonic relationships:</strong> Same pitch, different spelling</li>
<li><strong>Foreign keys:</strong> Keys with many accidentals for exotic effect</li>
</ul>
</div>
<div className="relationship" id="modulation-techniques">
<h4>Modulation Techniques</h4>
<p>Methods for moving from one key to another to support textual development and create structural variety.</p>
<ul>
<li><strong>Pivot chord modulation:</strong> Using common chords to change keys</li>
<li><strong>Direct modulation:</strong> Immediate key change without preparation</li>
<li><strong>Sequential modulation:</strong> Key changes through melodic or harmonic sequence</li>
<li><strong>Chromatic modulation:</strong> Key changes through chromatic voice-leading</li>
</ul>
</div>
</section>
 Tonal Analysis 
<section id="tonal-analysis">
<h3>Analyzing Tonality in Music and Words</h3>
<div className="analysis-approach" id="key-identification">
<h4>Key Identification</h4>
<p>Methods for determining the tonal center and key of a musical passage.</p>
<ul>
<li><strong>Key signature:</strong> Sharps or flats at the beginning of the staff</li>
<li><strong>Cadences:</strong> Harmonic progressions that confirm key</li>
<li><strong>Tonic emphasis:</strong> Melodic and harmonic emphasis on tonic note</li>
<li><strong>Scale patterns:</strong> Melodic patterns that outline specific scales</li>
</ul>
</div>
<div className="analysis-approach" id="tonal-function">
<h4>Tonal Function Analysis</h4>
<p>Understanding how different keys and tonal areas function within a larger work.</p>
<ul>
<li><strong>Home key:</strong> Primary tonal center of the work</li>
<li><strong>Contrasting keys:</strong> Secondary keys for variety and development</li>
<li><strong>Transitional keys:</strong> Keys used for modulation and connection</li>
<li><strong>Return key:</strong> Return to home key for resolution</li>
</ul>
</div>
<div className="analysis-approach" id="modal-analysis">
<h4>Modal Analysis</h4>
<p>Identifying and understanding the use of modes in music and words.</p>
<ul>
<li><strong>Church modes:</strong> Dorian, Phrygian, Lydian, Mixolydian</li>
<li><strong>Folk modes:</strong> Natural minor, pentatonic, blues scales</li>
<li><strong>Exotic modes:</strong> Whole-tone, octatonic, synthetic scales</li>
<li><strong>Modal characteristics:</strong> Distinctive intervals and patterns</li>
</ul>
</div>
</section>
 Performance Practice 
<section id="performance-practice">
<h3>Performance Practice</h3>
<h4>Vocal Considerations</h4>
<ul>
<li><strong>Key suitability:</strong> Choosing keys appropriate for vocal range</li>
<li><strong>Transposition:</strong> Adjusting keys for different voices</li>
<li><strong>Intonation:</strong> Accurate pitch relationships in different keys</li>
<li><strong>Vocal comfort:</strong> Keys that work well for specific voice types</li>
</ul>
<h4>Interpretive Considerations</h4>
<ul>
<li><strong>Tonal character:</strong> Understanding the expressive character of keys</li>
<li><strong>Key relationships:</strong> Highlighting important modulations</li>
<li><strong>Modal inflection:</strong> Bringing out modal characteristics</li>
<li><strong>Tonal drama:</strong> Using tonality to support dramatic development</li>
</ul>
<h4>Technical Considerations</h4>
<ul>
<li><strong>Accidentals:</strong> Accurate performance of chromatic alterations</li>
<li><strong>Modulation clarity:</strong> Clear execution of key changes</li>
<li><strong>Tonal stability:</strong> Maintaining clear sense of key center</li>
<li><strong>Ensemble intonation:</strong> Coordinated pitch accuracy in groups</li>
</ul>
</section>
 Assessment Focus 
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<h4>What You Need to Know</h4>
<ul>
<li>Identify keys and key signatures in musical examples</li>
<li>Understand how tonality supports and enhances textual meaning</li>
<li>Recognize different types of scales and modes</li>
<li>Compare tonal approaches across different genres</li>
<li>Analyze key relationships and modulation patterns</li>
<li>Use correct terminology when describing tonal elements</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Identify major and minor keys in recordings</li>
<li>Recognize modulations and key changes</li>
<li>Hear how tonality supports textual meaning and emotion</li>
<li>Distinguish between different scales and modes</li>
<li>Follow tonal development and key relationships</li>
</ul>
<h4>Analysis Skills</h4>
<ul>
<li>Explain how tonal choices enhance specific texts</li>
<li>Compare tonal approaches in different genres and styles</li>
<li>Evaluate the effectiveness of tonal word-painting</li>
<li>Identify the relationship between tonality and other musical elements</li>
<li>Describe how tonality contributes to overall musical structure</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0107TonalityPage;
