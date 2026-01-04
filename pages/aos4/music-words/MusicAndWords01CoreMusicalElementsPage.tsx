import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords01CoreMusicalElementsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Core Musical Elements</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Core Musical Elements
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
        <div dangerouslySetInnerHTML={{ __html: `Introduction Section 
<section id="introduction">
<h3>Introduction to Music and Words</h3>
<p>Area of Study 4 focuses on how musical characteristics are specifically used to enhance the meaning of words across four main genres: art song, music for choirs, popular song, and songs from musicals, primarily from the 20th century onwards. Every musical element is examined through its function in conveying narrative, emotion, or drama.</p>
<p>This area of study demonstrates how composers and songwriters use musical techniques to support, enhance, and sometimes contrast with textual content, creating powerful combinations of music and words that communicate meaning more effectively than either medium alone.</p>
</section>
 Core Elements Overview 
<section id="elements-overview">
<h3>Core Musical Elements Overview</h3>
<div className="element-card" id="dynamics-overview">
<h4><a href="aos04-01-01-dynamics/aos04-01-01-dynamics.html">1. Dynamics</a></h4>
<p><strong>Definition:</strong> Volume levels and expressive changes throughout a piece</p>
<p><strong>Key Features:</strong> Expressive range from pp to ff, gradual changes for emotional tension, word-painting through dynamic contrasts, dramatic build-up in popular music and musicals</p>
</div>
<div className="element-card" id="rhythm-overview">
<h4><a href="aos04-01-02-rhythm/aos04-01-02-rhythm.html">2. Rhythm</a></h4>
<p><strong>Definition:</strong> Pattern of beats, accents, and durations that drive the music forward</p>
<p><strong>Key Features:</strong> Rhythmic variety from long sustained notes to rapid melisma, syncopation in popular music, syllabic vs. melismatic vocal delivery, complex rhythms in choral works</p>
</div>
<div className="element-card" id="metre-overview">
<h4><a href="aos04-01-03-metre/aos04-01-03-metre.html">3. Metre</a></h4>
<p><strong>Definition:</strong> Underlying pulse and time signature that organises rhythmic patterns</p>
<p><strong>Key Features:</strong> Standard metres (duple, triple, quadruple), irregular metre for textual flexibility, clear consistent meters in popular song, anacrusis for phrase initiation</p>
</div>
<div className="element-card" id="tempo-overview">
<h4><a href="aos04-01-04-tempo/aos04-01-04-tempo.html">4. Tempo</a></h4>
<p><strong>Definition:</strong> Speed of performance, affecting mood and style</p>
<p><strong>Key Features:</strong> Italian tempo markings, BPM measurements in popular music, tempo flexibility and rubato in art song, tempo changes for dramatic effect</p>
</div>
<div className="element-card" id="melody-overview">
<h4><a href="aos04-01-05-melody/aos04-01-05-melody.html">5. Melody</a></h4>
<p><strong>Definition:</strong> Main tune or linear sequence of pitches forming musical identity</p>
<p><strong>Key Features:</strong> Word-painting through melodic contour, hooks and riffs in popular music, leitmotifs in musicals, ornamentation and melisma for expression</p>
</div>
<div className="element-card" id="harmony-overview">
<h4><a href="aos04-01-06-harmony/aos04-01-06-harmony.html">6. Harmony</a></h4>
<p><strong>Definition:</strong> Vertical stacking of pitches supporting or contrasting melody</p>
<p><strong>Key Features:</strong> Diatonic and chromatic harmony, tension through seventh chords, harmonic devices like suspensions, cadences defining phrase endings</p>
</div>
<div className="element-card" id="tonality-overview">
<h4><a href="aos04-01-07-tonality/aos04-01-07-tonality.html">7. Tonality</a></h4>
<p><strong>Definition:</strong> Key centre or modal system governing pitch relationships</p>
<p><strong>Key Features:</strong> Major/minor emotional associations, modal scales in contemporary works, modulation for emotional transitions, chromatic scales for expression</p>
</div>
<div className="element-card" id="texture-overview">
<h4><a href="aos04-01-08-texture/aos04-01-08-texture.html">8. Texture</a></h4>
<p><strong>Definition:</strong> Layering of musical lines—monophonic, polyphonic, homophonic</p>
<p><strong>Key Features:</strong> Homophony in pop/art song, complex choral textures (SATB, antiphonal), polyphonic and imitative textures, unison for dramatic emphasis</p>
</div>
<div className="element-card" id="timbre-overview">
<h4><a href="aos04-01-09-timbre/aos04-01-09-timbre.html">9. Timbre</a></h4>
<p><strong>Definition:</strong> Unique sound quality or colour of voices and instruments</p>
<p><strong>Key Features:</strong> Vocal timbres (SATB), orchestral vs. pop instrumentation, performance techniques and effects, music production technology in recorded music</p>
</div>
<div className="element-card" id="structure-form-overview">
<h4><a href="aos04-01-10-structure-form/aos04-01-10-structure-form.html">10. Structure/Form</a></h4>
<p><strong>Definition:</strong> Overall shape and organisation of musical sections</p>
<p><strong>Key Features:</strong> Strophic and through-composed forms, popular song structures (verse-chorus), choral forms (canon, ternary), compositional devices for unity</p>
</div>
</section>
 Genre Focus Section 
<section id="genre-focus">
<h3>Genre Focus Areas</h3>
<div className="genre-card" id="art-song">
<h4>Art Song</h4>
<p>Sophisticated vocal compositions that combine poetry with music, typically for solo voice and piano. Art songs demonstrate intimate word-music relationships through careful attention to textual meaning, melodic word-painting, and expressive harmonic language.</p>
<ul>
<li>Expressive use of dynamics and tempo flexibility (rubato)</li>
<li>Sophisticated harmonic language with chromaticism</li>
<li>Through-composed or modified strophic forms</li>
<li>Intimate vocal and piano textures</li>
</ul>
</div>
<div className="genre-card" id="choral-music">
<h4>Music for Choirs</h4>
<p>Compositions for multiple voices that explore complex textures and harmonies. Choral music demonstrates how multiple vocal lines can work together to enhance textual meaning through varied textures, from simple homophony to complex polyphony.</p>
<ul>
<li>Complex textures: SATB, divided parts, antiphonal</li>
<li>Polyphonic and imitative writing</li>
<li>Dynamic contrasts for dramatic effect</li>
<li>Structural forms like canon and ternary</li>
</ul>
</div>
<div className="genre-card" id="popular-song">
<h4>Popular Song</h4>
<p>Contemporary songs designed for mass appeal, featuring memorable melodies, clear structures, and modern production techniques. Popular songs demonstrate how commercial music uses musical elements to create memorable and emotionally engaging experiences.</p>
<ul>
<li>Clear verse-chorus structures</li>
<li>Hooks and riffs for memorability</li>
<li>BPM-based tempo considerations</li>
<li>Modern production techniques and effects</li>
</ul>
</div>
<div className="genre-card" id="musicals">
<h4>Songs from Musicals</h4>
<p>Theatrical songs that advance plot, develop character, or express emotion within dramatic contexts. Musical theatre songs demonstrate how music can serve narrative functions while maintaining entertainment value and emotional impact.</p>
<ul>
<li>Leitmotifs for character and plot association</li>
<li>Dramatic dynamic and tempo changes</li>
<li>Varied textures supporting dramatic needs</li>
<li>Flexible forms serving theatrical purposes</li>
</ul>
</div>
</section>
 Key Concepts Section 
<section id="key-concepts">
<h3>Key Concepts in Music and Words</h3>
<div className="concept-card" id="word-painting">
<h4>Word-Painting</h4>
<p>The musical technique of using musical elements to directly illustrate or enhance the meaning of specific words or phrases in the text. This can include melodic contour (ascending lines for "heaven"), dynamic changes (forte for "thunder"), or rhythmic patterns (fast notes for "running").</p>
</div>
<div className="concept-card" id="text-setting">
<h4>Text Setting</h4>
<p>The relationship between words and music, including syllabic setting (one note per syllable) for clarity and melismatic setting (many notes per syllable) for expression. The choice affects both intelligibility and emotional impact.</p>
</div>
<div className="concept-card" id="emotional-expression">
<h4>Emotional Expression</h4>
<p>How musical elements work together to convey and enhance the emotional content of the text. This includes harmonic choices (major/minor), dynamic levels, tempo flexibility, and timbral colors that support the mood and meaning of the words.</p>
</div>
<div className="concept-card" id="narrative-function">
<h4>Narrative Function</h4>
<p>How music serves storytelling purposes, particularly in musicals where songs advance plot, develop character, or provide commentary. Musical elements can establish setting, indicate time passage, or create dramatic tension.</p>
</div>
</section>
 Assessment Focus 
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<h4>What You Need to Know</h4>
<ul>
<li>Understand how each musical element enhances textual meaning</li>
<li>Identify word-painting techniques in various genres</li>
<li>Compare how different genres approach text-music relationships</li>
<li>Analyze the effectiveness of musical choices in supporting words</li>
<li>Recognize structural patterns in different song forms</li>
<li>Use appropriate terminology for vocal and instrumental techniques</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Identify how dynamics support textual meaning</li>
<li>Recognize different text-setting approaches (syllabic vs. melismatic)</li>
<li>Distinguish between different vocal timbres and techniques</li>
<li>Follow structural patterns in songs and choral works</li>
<li>Understand how production techniques affect meaning in recorded music</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords01CoreMusicalElementsPage;
