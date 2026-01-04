import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0108TexturePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Texture</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Texture
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
<p>Texture in Music and Words refers to the way musical parts are layered and interact to support vocal delivery and enhance textual meaning. In this area of study, texture serves both practical and expressive functions: it must provide appropriate support for vocal performance while creating musical interest, supporting textual interpretation, and enhancing the overall communicative power of the music-text relationship.</p>
</section>
 Key Characteristics Section 
<section id="key-characteristics">
<h3>Key Characteristics of Texture in Music and Words</h3>
<div className="characteristic" id="text-supportive-texture">
<h4>Text-Supportive Texture</h4>
<p>Textural choices that prioritize clarity of text delivery while providing appropriate musical support and enhancement.</p>
<ul>
<li><strong>Vocal clarity:</strong> Texture that allows text to be clearly heard and understood</li>
<li><strong>Supportive accompaniment:</strong> Instrumental parts that support rather than compete with vocals</li>
<li><strong>Textual enhancement:</strong> Texture that reinforces and amplifies textual meaning</li>
<li><strong>Balanced interaction:</strong> Appropriate balance between vocal and instrumental elements</li>
</ul>
</div>
<div className="characteristic" id="expressive-texture">
<h4>Expressive and Descriptive Texture</h4>
<p>The use of texture to create emotional atmosphere, paint textual images, and enhance the expressive content of the words.</p>
<ul>
<li><strong>Atmospheric texture:</strong> Creating mood and atmosphere through textural choices</li>
<li><strong>Descriptive texture:</strong> Musical textures that paint textual images</li>
<li><strong>Emotional texture:</strong> Textural density and complexity reflecting emotional content</li>
<li><strong>Dynamic texture:</strong> Changing texture to follow textual development</li>
</ul>
</div>
<div className="characteristic" id="genre-specific-texture">
<h4>Genre-Specific Textural Conventions</h4>
<p>Different genres within Music and Words have developed characteristic textural approaches that serve their specific purposes and performance contexts.</p>
<ul>
<li><strong>Art Song:</strong> Sophisticated texture for intimate performance</li>
<li><strong>Choral Music:</strong> Vocal ensemble texture with optional accompaniment</li>
<li><strong>Popular Song:</strong> Commercial texture suitable for recording and broadcast</li>
<li><strong>Musicals:</strong> Theatrical texture that supports dramatic action</li>
</ul>
</div>
<div className="characteristic" id="flexible-texture">
<h4>Flexible and Adaptive Texture</h4>
<p>The ability to vary texture throughout a work to support changing textual content, dramatic development, and performance requirements.</p>
<ul>
<li><strong>Textural variety:</strong> Different textures for different sections or verses</li>
<li><strong>Adaptive texture:</strong> Texture that responds to textual changes</li>
<li><strong>Developmental texture:</strong> Textural growth and development throughout a work</li>
<li><strong>Contrasting texture:</strong> Textural contrasts that highlight textual contrasts</li>
</ul>
</div>
</section>
 Types of Texture 
<section id="texture-types">
<h3>Types of Texture in Music and Words</h3>
<div className="element-grid">
<div className="element-card">
<h4>Monophonic Texture</h4>
<ul>
<li><strong>Single melodic line:</strong> Voice alone without accompaniment</li>
<li><strong>Unison singing:</strong> Multiple voices singing the same melody</li>
<li><strong>Text clarity:</strong> Maximum clarity for text delivery</li>
<li><strong>Intimate character:</strong> Direct, personal communication</li>
<li><strong>Common usage:</strong> Folk songs, chant, a cappella sections</li>
</ul>
</div>
<div className="element-card">
<h4>Homophonic Texture</h4>
<ul>
<li><strong>Melody with accompaniment:</strong> Clear melodic line with harmonic support</li>
<li><strong>Chord-based accompaniment:</strong> Harmonic foundation for the melody</li>
<li><strong>Balanced texture:</strong> Clear hierarchy between melody and accompaniment</li>
<li><strong>Versatile texture:</strong> Suitable for many genres and styles</li>
<li><strong>Common usage:</strong> Art songs, popular songs, hymns</li>
</ul>
</div>
<div className="element-card">
<h4>Polyphonic Texture</h4>
<ul>
<li><strong>Multiple independent lines:</strong> Several melodic lines of equal importance</li>
<li><strong>Contrapuntal writing:</strong> Interweaving melodic lines</li>
<li><strong>Complex texture:</strong> Sophisticated musical interaction</li>
<li><strong>Intellectual appeal:</strong> Requires active listening</li>
<li><strong>Common usage:</strong> Choral works, madrigals, canons</li>
</ul>
</div>
</div>
</section>
 Genre Applications 
<section id="genre-applications">
<h3>Texture in Different Genres</h3>
<div className="genre-example" id="art-song-texture">
<h4>Art Song</h4>
<p>Art songs use texture with great sophistication to create intimate musical experiences that serve poetic expression and enhance textual meaning.</p>
<ul>
<li><strong>Piano-voice partnership:</strong> Equal partnership between voice and piano</li>
<li><strong>Through-composed texture:</strong> Continuously developing textural approach</li>
<li><strong>Poetic texture:</strong> Texture that serves poetic structure and meaning</li>
<li><strong>Expressive texture:</strong> Sophisticated textural language for emotional expression</li>
<li><strong>Chamber texture:</strong> Intimate textural style for small venues</li>
</ul>
</div>
<div className="genre-example" id="choral-texture">
<h4>Choral Music</h4>
<p>Choral works use texture to create powerful collective musical experiences while ensuring textual clarity and vocal accessibility.</p>
<ul>
<li><strong>SATB texture:</strong> Four-part vocal writing (Soprano, Alto, Tenor, Bass)</li>
<li><strong>A cappella texture:</strong> Unaccompanied vocal texture</li>
<li><strong>Accompanied texture:</strong> Choral voices with instrumental accompaniment</li>
<li><strong>Antiphonal texture:</strong> Call and response between different vocal groups</li>
<li><strong>Unison texture:</strong> All voices singing together for emphasis</li>
</ul>
</div>
<div className="genre-example" id="popular-song-texture">
<h4>Popular Song</h4>
<p>Popular songs use texture strategically to create memorable, commercially appealing music that works well in recorded and broadcast media.</p>
<ul>
<li><strong>Lead vocal texture:</strong> Prominent vocal line with instrumental backing</li>
<li><strong>Rhythm section texture:</strong> Bass, drums, and harmonic instruments</li>
<li><strong>Production texture:</strong> Layered texture created through recording techniques</li>
<li><strong>Hook texture:</strong> Memorable textural elements that catch attention</li>
<li><strong>Commercial texture:</strong> Accessible textural approach for broad appeal</li>
</ul>
</div>
<div className="genre-example" id="musical-theatre-texture">
<h4>Songs from Musicals</h4>
<p>Musical theatre songs use texture theatrically to support dramatic action, character development, and storytelling within stage performance.</p>
<ul>
<li><strong>Solo texture:</strong> Single character expressing thoughts or emotions</li>
<li><strong>Duet texture:</strong> Two characters in musical dialogue</li>
<li><strong>Ensemble texture:</strong> Multiple characters singing together</li>
<li><strong>Chorus texture:</strong> Large group numbers with complex vocal arrangements</li>
<li><strong>Orchestral texture:</strong> Full orchestra supporting theatrical vocals</li>
</ul>
</div>
</section>
 Word-Painting Through Texture 
<section id="textural-word-painting">
<h3>Word-Painting Through Texture</h3>
<div className="example" id="descriptive-texture-painting">
<h4>Descriptive Texture</h4>
<ul>
<li><strong>Thick texture:</strong> For crowds, storms, complexity, richness</li>
<li><strong>Thin texture:</strong> For loneliness, simplicity, emptiness, clarity</li>
<li><strong>Layered texture:</strong> For building excitement, complexity, development</li>
<li><strong>Sparse texture:</strong> For sadness, reflection, intimacy, space</li>
</ul>
</div>
<div className="example" id="emotional-texture-painting">
<h4>Emotional Texture</h4>
<ul>
<li><strong>Dense texture:</strong> For overwhelming emotions, passion, intensity</li>
<li><strong>Light texture:</strong> For joy, playfulness, delicacy, grace</li>
<li><strong>Heavy texture:</strong> For sorrow, weight, burden, seriousness</li>
<li><strong>Flowing texture:</strong> For movement, continuity, smoothness</li>
</ul>
</div>
<div className="example" id="dramatic-texture-painting">
<h4>Dramatic Texture</h4>
<ul>
<li><strong>Building texture:</strong> For crescendo of emotion or action</li>
<li><strong>Contrasting texture:</strong> For conflict, dialogue, opposition</li>
<li><strong>Unified texture:</strong> For agreement, harmony, resolution</li>
<li><strong>Fragmented texture:</strong> For confusion, breakdown, chaos</li>
</ul>
</div>
<div className="example" id="character-texture-painting">
<h4>Character Texture</h4>
<ul>
<li><strong>Solo texture:</strong> For individual character, personal expression</li>
<li><strong>Dialogue texture:</strong> For conversation, interaction, relationship</li>
<li><strong>Ensemble texture:</strong> For community, group identity, collective action</li>
<li><strong>Contrasting textures:</strong> For different characters or perspectives</li>
</ul>
</div>
</section>
 Textural Techniques 
<section id="textural-techniques">
<h3>Textural Techniques in Music and Words</h3>
<div className="technique" id="accompaniment-patterns">
<h4>Accompaniment Patterns</h4>
<p>Different ways of organizing the accompaniment to support the vocal line and enhance textual delivery.</p>
<ul>
<li><strong>Alberti bass:</strong> Broken chord accompaniment pattern</li>
<li><strong>Arpeggiated accompaniment:</strong> Flowing, harp-like accompaniment</li>
<li><strong>Chordal accompaniment:</strong> Block chord support</li>
<li><strong>Countermelodic accompaniment:</strong> Independent melodic line in accompaniment</li>
</ul>
</div>
<div className="technique" id="vocal-arrangements">
<h4>Vocal Arrangements</h4>
<p>Different ways of organizing multiple vocal parts to create effective choral texture.</p>
<ul>
<li><strong>Homophonic arrangement:</strong> All voices moving together rhythmically</li>
<li><strong>Polyphonic arrangement:</strong> Independent melodic lines in each voice</li>
<li><strong>Call and response:</strong> Alternating between different vocal groups</li>
<li><strong>Canonic arrangement:</strong> Voices entering with the same melody at different times</li>
</ul>
</div>
<div className="technique" id="textural-development">
<h4>Textural Development</h4>
<p>Ways of varying and developing texture throughout a work to support textual and musical development.</p>
<ul>
<li><strong>Additive texture:</strong> Gradually adding more parts or layers</li>
<li><strong>Subtractive texture:</strong> Gradually removing parts for simplification</li>
<li><strong>Alternating texture:</strong> Switching between different textural approaches</li>
<li><strong>Transformative texture:</strong> Gradually changing the character of the texture</li>
</ul>
</div>
</section>
 Textural Analysis 
<section id="textural-analysis">
<h3>Analyzing Texture in Music and Words</h3>
<div className="analysis-approach" id="texture-identification">
<h4>Texture Identification</h4>
<p>Methods for identifying and describing the type of texture in a musical passage.</p>
<ul>
<li><strong>Part counting:</strong> How many independent musical lines are present</li>
<li><strong>Relationship analysis:</strong> How the parts relate to each other</li>
<li><strong>Hierarchy identification:</strong> Which parts are primary and which are secondary</li>
<li><strong>Function analysis:</strong> What role each part plays in the overall texture</li>
</ul>
</div>
<div className="analysis-approach" id="text-texture-relationship">
<h4>Text-Texture Relationship</h4>
<p>Understanding how textural choices support and enhance the text being set to music.</p>
<ul>
<li><strong>Clarity assessment:</strong> How well the texture allows text to be understood</li>
<li><strong>Support evaluation:</strong> How the texture supports the vocal line</li>
<li><strong>Enhancement analysis:</strong> How texture enhances textual meaning</li>
<li><strong>Appropriateness judgment:</strong> How suitable the texture is for the text and genre</li>
</ul>
</div>
<div className="analysis-approach" id="textural-development-analysis">
<h4>Textural Development Analysis</h4>
<p>Tracking how texture changes and develops throughout a work to support musical and textual structure.</p>
<ul>
<li><strong>Sectional analysis:</strong> How texture differs between sections</li>
<li><strong>Developmental tracking:</strong> How texture grows and changes</li>
<li><strong>Contrast identification:</strong> Where textural contrasts occur and why</li>
<li><strong>Unity assessment:</strong> How textural variety contributes to overall unity</li>
</ul>
</div>
</section>
 Performance Practice 
<section id="performance-practice">
<h3>Performance Practice</h3>
<h4>Vocal Considerations</h4>
<ul>
<li><strong>Text clarity:</strong> Ensuring words are clearly articulated and understood</li>
<li><strong>Balance:</strong> Maintaining appropriate balance between vocal and instrumental parts</li>
<li><strong>Blend:</strong> Creating unified sound in ensemble singing</li>
<li><strong>Independence:</strong> Maintaining individual lines in polyphonic texture</li>
</ul>
<h4>Instrumental Considerations</h4>
<ul>
<li><strong>Accompaniment role:</strong> Supporting rather than competing with vocals</li>
<li><strong>Textural clarity:</strong> Maintaining clear distinction between different parts</li>
<li><strong>Dynamic sensitivity:</strong> Adjusting volume to support vocal delivery</li>
<li><strong>Rhythmic precision:</strong> Maintaining accurate timing in complex textures</li>
</ul>
<h4>Ensemble Considerations</h4>
<ul>
<li><strong>Communication:</strong> Clear musical communication between performers</li>
<li><strong>Coordination:</strong> Precise coordination of different textural elements</li>
<li><strong>Flexibility:</strong> Ability to adjust texture for different performance contexts</li>
<li><strong>Unity:</strong> Creating cohesive musical experience despite textural complexity</li>
</ul>
</section>
 Assessment Focus 
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<h4>What You Need to Know</h4>
<ul>
<li>Identify different types of texture in musical examples</li>
<li>Understand how texture supports and enhances textual delivery</li>
<li>Recognize textural techniques and their effects</li>
<li>Compare textural approaches across different genres</li>
<li>Analyze how texture contributes to word-painting and expression</li>
<li>Use correct terminology when describing textural elements</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Identify monophonic, homophonic, and polyphonic textures</li>
<li>Recognize changes in texture throughout a work</li>
<li>Hear how texture supports textual meaning and clarity</li>
<li>Distinguish between different accompaniment patterns</li>
<li>Follow individual parts in complex textures</li>
</ul>
<h4>Analysis Skills</h4>
<ul>
<li>Explain how textural choices enhance specific texts</li>
<li>Compare textural approaches in different genres and styles</li>
<li>Evaluate the effectiveness of textural word-painting</li>
<li>Identify the relationship between texture and other musical elements</li>
<li>Describe how texture contributes to overall musical structure</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0108TexturePage;
