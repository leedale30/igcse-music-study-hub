import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0102RhythmPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Rhythm</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Rhythm
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
<p>Rhythm in Music and Words refers to the patterns of duration and timing that are specifically designed to support, enhance, and interact with the natural rhythms of text. In this area of study, rhythm serves multiple functions: it can mirror speech patterns, create word-painting effects, establish genre characteristics, and provide emotional expression that complements the meaning of the lyrics.</p>
</section>
 Key Characteristics Section 
<section id="key-characteristics">
<h3>Key Characteristics of Rhythm in Music and Words</h3>
<div className="characteristic" id="text-rhythm-relationship">
<h4>Text-Rhythm Relationship</h4>
<p>The fundamental relationship between musical rhythm and the natural rhythm of spoken text, creating a seamless integration of words and music.</p>
<ul>
<li><strong>Natural speech patterns:</strong> Rhythm follows the stress and flow of spoken language</li>
<li><strong>Syllabic emphasis:</strong> Important syllables placed on strong beats</li>
<li><strong>Word stress:</strong> Musical accents align with linguistic stress</li>
<li><strong>Phrase rhythm:</strong> Musical phrases mirror textual phrases</li>
</ul>
</div>
<div className="characteristic" id="expressive-rhythm">
<h4>Expressive and Descriptive Rhythm</h4>
<p>Rhythm used as a tool for word-painting and emotional expression, where rhythmic patterns directly illustrate or enhance textual meaning.</p>
<ul>
<li><strong>Imitative rhythms:</strong> Musical rhythms that mimic described actions</li>
<li><strong>Emotional rhythms:</strong> Patterns that convey specific moods or feelings</li>
<li><strong>Descriptive patterns:</strong> Rhythms that paint pictures of scenes or events</li>
<li><strong>Character rhythms:</strong> Distinctive patterns associated with specific characters</li>
</ul>
</div>
<div className="characteristic" id="genre-rhythmic-conventions">
<h4>Genre-Specific Rhythmic Conventions</h4>
<p>Each genre within Music and Words has developed characteristic rhythmic approaches that serve its specific purposes and contexts.</p>
<ul>
<li><strong>Art Song:</strong> Flexible, speech-like rhythms with sophisticated patterns</li>
<li><strong>Choral Music:</strong> Rhythms suitable for group singing and textual clarity</li>
<li><strong>Popular Song:</strong> Strong, memorable rhythmic patterns and hooks</li>
<li><strong>Musicals:</strong> Theatrical rhythms that support dramatic action</li>
</ul>
</div>
<div className="characteristic" id="rhythmic-complexity">
<h4>Rhythmic Complexity and Sophistication</h4>
<p>The use of complex rhythmic devices to create interest, support textual meaning, and demonstrate compositional skill.</p>
<ul>
<li><strong>Syncopation:</strong> Off-beat accents for excitement or surprise</li>
<li><strong>Cross-rhythms:</strong> Conflicting rhythmic patterns for tension</li>
<li><strong>Polyrhythm:</strong> Multiple rhythmic layers for complexity</li>
<li><strong>Rhythmic variation:</strong> Changes to maintain interest and support text</li>
</ul>
</div>
</section>
 Terminology Section 
<section id="terminology">
<h3>Essential Rhythm Terminology</h3>
<div className="terminology-grid">
<div className="term-card">
<h4>Basic Rhythmic Values</h4>
<ul>
<li><strong>Whole note:</strong> Four beats duration</li>
<li><strong>Half note:</strong> Two beats duration</li>
<li><strong>Quarter note:</strong> One beat duration</li>
<li><strong>Eighth note:</strong> Half beat duration</li>
<li><strong>Sixteenth note:</strong> Quarter beat duration</li>
<li><strong>Dotted notes:</strong> Extended by half their value</li>
</ul>
</div>
<div className="term-card">
<h4>Rhythmic Techniques</h4>
<ul>
<li><strong>Syncopation:</strong> Emphasis on weak beats or off-beats</li>
<li><strong>Hemiola:</strong> Three against two rhythmic pattern</li>
<li><strong>Augmentation:</strong> Lengthening rhythmic values</li>
<li><strong>Diminution:</strong> Shortening rhythmic values</li>
<li><strong>Polyrhythm:</strong> Multiple rhythms simultaneously</li>
<li><strong>Cross-rhythm:</strong> Conflicting rhythmic patterns</li>
</ul>
</div>
<div className="term-card">
<h4>Text Setting Terms</h4>
<ul>
<li><strong>Syllabic:</strong> One note per syllable</li>
<li><strong>Melismatic:</strong> Multiple notes per syllable</li>
<li><strong>Neumatic:</strong> Few notes per syllable</li>
<li><strong>Word-painting:</strong> Musical illustration of text</li>
<li><strong>Text rhythm:</strong> Natural rhythm of spoken words</li>
<li><strong>Prosody:</strong> Proper text accentuation</li>
</ul>
</div>
</div>
</section>
 Genre Applications 
<section id="genre-applications">
<h3>Rhythm in Different Genres</h3>
<div className="genre-example" id="art-song-rhythm">
<h4>Art Song</h4>
<p>Art songs use rhythm with great sophistication to enhance poetic meaning and create expressive musical settings of high-quality texts.</p>
<ul>
<li><strong>Speech-like rhythms:</strong> Natural, conversational rhythmic patterns</li>
<li><strong>Poetic meter:</strong> Musical rhythm reflects poetic structure</li>
<li><strong>Expressive flexibility:</strong> Rubato and rhythmic freedom for expression</li>
<li><strong>Word-painting:</strong> Rhythmic patterns illustrate textual imagery</li>
<li><strong>Sophisticated patterns:</strong> Complex rhythms for artistic effect</li>
</ul>
</div>
<div className="genre-example" id="choral-rhythm">
<h4>Choral Music</h4>
<p>Choral works use rhythm to ensure textual clarity while creating powerful collective musical experiences suitable for group performance.</p>
<ul>
<li><strong>Clear declamation:</strong> Rhythms that ensure text understanding</li>
<li><strong>Homophonic rhythm:</strong> All voices moving together</li>
<li><strong>Polyphonic rhythm:</strong> Independent rhythmic lines</li>
<li><strong>Antiphonal rhythm:</strong> Rhythmic dialogue between groups</li>
<li><strong>Ceremonial patterns:</strong> Rhythms appropriate for worship or celebration</li>
</ul>
</div>
<div className="genre-example" id="popular-song-rhythm">
<h4>Popular Song</h4>
<p>Popular songs use rhythm strategically to create memorable, commercially appealing music that works well in recorded and broadcast media.</p>
<ul>
<li><strong>Strong beat patterns:</strong> Clear, driving rhythmic foundations</li>
<li><strong>Hook rhythms:</strong> Memorable rhythmic patterns in choruses</li>
<li><strong>Verse-chorus contrast:</strong> Different rhythmic feels for sections</li>
<li><strong>Groove-based:</strong> Rhythms that encourage movement or dancing</li>
<li><strong>Production rhythms:</strong> Rhythmic effects created in recording</li>
</ul>
</div>
<div className="genre-example" id="musical-theatre-rhythm">
<h4>Songs from Musicals</h4>
<p>Musical theatre songs use rhythm theatrically to support dramatic action, character development, and storytelling within the context of stage performance.</p>
<ul>
<li><strong>Dramatic rhythms:</strong> Patterns that support theatrical action</li>
<li><strong>Character rhythms:</strong> Distinctive patterns for different characters</li>
<li><strong>Dance rhythms:</strong> Patterns suitable for choreography</li>
<li><strong>Dialogue rhythms:</strong> Speech-like patterns for recitative sections</li>
<li><strong>Ensemble rhythms:</strong> Patterns that work for group numbers</li>
</ul>
</div>
</section>
 Word-Painting Examples 
<section id="word-painting-examples">
<h3>Word-Painting Through Rhythm</h3>
<div className="example" id="movement-actions">
<h4>Movement and Actions</h4>
<ul>
<li><strong>"Running" or "racing":</strong> Fast, repeated short notes</li>
<li><strong>"Walking" or "marching":</strong> Steady, regular quarter note patterns</li>
<li><strong>"Skipping" or "dancing":</strong> Light, syncopated rhythms</li>
<li><strong>"Stumbling" or "falling":</strong> Irregular, broken rhythmic patterns</li>
<li><strong>"Heartbeat":</strong> Steady, pulsing rhythmic pattern</li>
</ul>
</div>
<div className="example" id="natural-phenomena">
<h4>Natural Phenomena</h4>
<ul>
<li><strong>"Waves" or "flowing water":</strong> Undulating, flowing rhythmic patterns</li>
<li><strong>"Thunder":</strong> Sudden, powerful rhythmic accents</li>
<li><strong>"Rain":</strong> Rapid, light, repeated patterns</li>
<li><strong>"Wind":</strong> Swirling, irregular rhythmic figures</li>
<li><strong>"Clock ticking":</strong> Regular, mechanical rhythmic pulse</li>
</ul>
</div>
<div className="example" id="emotional-states">
<h4>Emotional States</h4>
<ul>
<li><strong>"Excitement" or "joy":</strong> Fast, energetic rhythmic patterns</li>
<li><strong>"Sadness" or "grief":</strong> Slow, dragging rhythmic patterns</li>
<li><strong>"Anxiety" or "nervousness":</strong> Irregular, agitated rhythms</li>
<li><strong>"Peace" or "calm":</strong> Smooth, regular rhythmic flow</li>
<li><strong>"Anger" or "rage":</strong> Sharp, aggressive rhythmic accents</li>
</ul>
</div>
</section>
 Text Setting Principles 
<section id="text-setting">
<h3>Text Setting Principles</h3>
<div className="principle" id="natural-accentuation">
<h4>Natural Accentuation</h4>
<p>Ensuring that musical rhythm supports the natural stress patterns of the language.</p>
<ul>
<li><strong>Strong syllables:</strong> Placed on strong beats</li>
<li><strong>Weak syllables:</strong> Placed on weak beats or off-beats</li>
<li><strong>Word stress:</strong> Musical accents align with linguistic stress</li>
<li><strong>Phrase stress:</strong> Important words receive rhythmic emphasis</li>
</ul>
</div>
<div className="principle" id="syllabic-distribution">
<h4>Syllabic Distribution</h4>
<p>How syllables are distributed across musical time to create effective text setting.</p>
<ul>
<li><strong>One syllable per beat:</strong> Clear, simple text delivery</li>
<li><strong>Multiple syllables per beat:</strong> Rapid text delivery</li>
<li><strong>Syllable extension:</strong> Important words held longer</li>
<li><strong>Melismatic treatment:</strong> Single syllables extended over multiple notes</li>
</ul>
</div>
<div className="principle" id="rhythmic-variety">
<h4>Rhythmic Variety</h4>
<p>Using different rhythmic patterns to maintain interest and support textual meaning.</p>
<ul>
<li><strong>Pattern variation:</strong> Changing rhythmic patterns for different verses</li>
<li><strong>Sectional contrast:</strong> Different rhythms for verses and choruses</li>
<li><strong>Developmental rhythm:</strong> Rhythmic patterns that evolve throughout the song</li>
<li><strong>Motivic rhythm:</strong> Short rhythmic ideas that recur and develop</li>
</ul>
</div>
</section>
 Performance Practice 
<section id="performance-practice">
<h3>Performance Practice</h3>
<h4>Vocal Considerations</h4>
<ul>
<li><strong>Text clarity:</strong> Ensure rhythmic precision supports clear diction</li>
<li><strong>Natural flow:</strong> Maintain speech-like rhythm where appropriate</li>
<li><strong>Rhythmic accuracy:</strong> Precise execution of complex rhythmic patterns</li>
<li><strong>Expressive timing:</strong> Use rubato and rhythmic flexibility for expression</li>
</ul>
<h4>Ensemble Considerations</h4>
<ul>
<li><strong>Rhythmic unity:</strong> Precise ensemble rhythm for clarity</li>
<li><strong>Text coordination:</strong> All voices articulating text together</li>
<li><strong>Polyrhythmic balance:</strong> Clear execution of multiple rhythmic layers</li>
<li><strong>Conducting clarity:</strong> Clear rhythmic direction from conductor</li>
</ul>
<h4>Accompaniment Considerations</h4>
<ul>
<li><strong>Supportive rhythm:</strong> Accompaniment supports vocal rhythm</li>
<li><strong>Rhythmic independence:</strong> Accompaniment provides rhythmic interest</li>
<li><strong>Text sensitivity:</strong> Accompaniment rhythm enhances text meaning</li>
<li><strong>Genre appropriateness:</strong> Rhythmic style matches genre expectations</li>
</ul>
</section>
 Assessment Focus 
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<h4>What You Need to Know</h4>
<ul>
<li>Identify different rhythmic patterns and their notation</li>
<li>Understand how rhythm supports and enhances textual meaning</li>
<li>Recognize word-painting through rhythmic choices</li>
<li>Compare rhythmic approaches across different genres</li>
<li>Analyze the relationship between text rhythm and musical rhythm</li>
<li>Use correct terminology when describing rhythmic elements</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Identify different rhythmic patterns in recordings</li>
<li>Recognize syncopation and other rhythmic techniques</li>
<li>Hear how rhythm supports textual stress and meaning</li>
<li>Distinguish between different rhythmic styles in various genres</li>
<li>Follow complex rhythmic patterns and polyrhythms</li>
</ul>
<h4>Analysis Skills</h4>
<ul>
<li>Explain how rhythmic patterns enhance specific words or phrases</li>
<li>Compare rhythmic approaches in different genres and styles</li>
<li>Evaluate the effectiveness of text setting choices</li>
<li>Identify the relationship between rhythm and other musical elements</li>
<li>Describe how rhythm contributes to overall musical expression</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0102RhythmPage;
