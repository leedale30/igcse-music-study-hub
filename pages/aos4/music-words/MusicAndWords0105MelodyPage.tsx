import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0105MelodyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Melody</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Melody
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
<p>Melody in Music and Words refers to the succession of musical pitches that carries the text and serves as the primary vehicle for textual expression and meaning. In this area of study, melody is crafted to enhance the natural inflections of speech, support emotional content, illustrate textual imagery through word-painting, and serve the specific needs of different genres including art song, choral music, popular song, and musicals.</p>
</section>
 Key Characteristics Section 
<section id="key-characteristics">
<h3>Key Characteristics of Melody in Music and Words</h3>
<div className="characteristic" id="text-melody-relationship">
<h4>Text-Melody Relationship</h4>
<p>The intimate connection between melodic contour, rhythm, and the natural patterns of speech and poetry, creating music that enhances rather than obscures textual meaning.</p>
<ul>
<li><strong>Speech-based melody:</strong> Melodic lines that follow natural speech patterns</li>
<li><strong>Syllabic setting:</strong> One note per syllable for textual clarity</li>
<li><strong>Melismatic setting:</strong> Multiple notes per syllable for expression</li>
<li><strong>Declamatory melody:</strong> Speech-like melodic delivery</li>
</ul>
</div>
<div className="characteristic" id="expressive-melody">
<h4>Expressive and Emotional Melody</h4>
<p>Melodic choices that directly support and enhance the emotional content and meaning of the text being set to music.</p>
<ul>
<li><strong>Emotional contour:</strong> Melodic shape that reflects textual emotion</li>
<li><strong>Character melody:</strong> Distinctive melodic styles for different characters</li>
<li><strong>Mood melody:</strong> Melodic choices that create specific atmospheres</li>
<li><strong>Dramatic melody:</strong> Melodic lines that support theatrical elements</li>
</ul>
</div>
<div className="characteristic" id="word-painting-melody">
<h4>Word-Painting and Descriptive Melody</h4>
<p>The use of melodic contour, intervals, and patterns to directly illustrate or paint the images and concepts described in the text.</p>
<ul>
<li><strong>Pictorial melody:</strong> Melodic lines that paint visual images</li>
<li><strong>Symbolic melody:</strong> Melodic patterns with symbolic meaning</li>
<li><strong>Onomatopoeic melody:</strong> Melodic imitation of sounds</li>
<li><strong>Metaphorical melody:</strong> Abstract concepts expressed through melody</li>
</ul>
</div>
<div className="characteristic" id="genre-melodic-conventions">
<h4>Genre-Specific Melodic Conventions</h4>
<p>Different genres within Music and Words have developed characteristic melodic approaches that serve their specific purposes and performance contexts.</p>
<ul>
<li><strong>Art Song:</strong> Sophisticated, through-composed melodies for poetic expression</li>
<li><strong>Choral Music:</strong> Singable melodies suitable for group performance</li>
<li><strong>Popular Song:</strong> Memorable, hook-based melodies for commercial appeal</li>
<li><strong>Musicals:</strong> Theatrical melodies that support dramatic action</li>
</ul>
</div>
</section>
 Melodic Elements Section 
<section id="melodic-elements">
<h3>Key Melodic Elements in Music and Words</h3>
<div className="element-grid">
<div className="element-card">
<h4>Melodic Contour</h4>
<ul>
<li><strong>Ascending:</strong> Rising melodies for uplifting texts</li>
<li><strong>Descending:</strong> Falling melodies for sadness or decline</li>
<li><strong>Arch-shaped:</strong> Rise and fall for complete thoughts</li>
<li><strong>Wave-like:</strong> Undulating contours for flowing texts</li>
</ul>
</div>
<div className="element-card">
<h4>Melodic Intervals</h4>
<ul>
<li><strong>Steps:</strong> Smooth, connected melodic movement</li>
<li><strong>Leaps:</strong> Dramatic jumps for emphasis</li>
<li><strong>Octave leaps:</strong> For dramatic effect or word-painting</li>
<li><strong>Chromatic movement:</strong> For tension or sophistication</li>
</ul>
</div>
<div className="element-card">
<h4>Melodic Range</h4>
<ul>
<li><strong>Narrow range:</strong> Intimate, conversational melodies</li>
<li><strong>Wide range:</strong> Dramatic, expressive melodies</li>
<li><strong>Vocal range:</strong> Consideration of singer capabilities</li>
<li><strong>Tessitura:</strong> Comfortable singing range placement</li>
</ul>
</div>
</div>
</section>
 Genre Applications 
<section id="genre-applications">
<h3>Melody in Different Genres</h3>
<div className="genre-example" id="art-song-melody">
<h4>Art Song</h4>
<p>Art songs use melody with great sophistication to create intimate musical experiences that serve poetic expression and enhance textual meaning.</p>
<ul>
<li><strong>Through-composed melody:</strong> Continuous melodic development</li>
<li><strong>Poetic melody:</strong> Melodic lines that serve poetic structure</li>
<li><strong>Expressive melody:</strong> Sophisticated melodic choices for emotion</li>
<li><strong>Chamber melody:</strong> Intimate melodic style for small venues</li>
<li><strong>Art melody:</strong> Sophisticated melodic construction</li>
</ul>
</div>
<div className="genre-example" id="choral-melody">
<h4>Choral Music</h4>
<p>Choral works use melody to ensure textual clarity and create powerful collective musical experiences suitable for group performance.</p>
<ul>
<li><strong>Singable melody:</strong> Melodic lines suitable for group singing</li>
<li><strong>Homophonic melody:</strong> Clear melodic lines with harmonic support</li>
<li><strong>Antiphonal melody:</strong> Melodic dialogue between groups</li>
<li><strong>Congregational melody:</strong> Simple melodies for participation</li>
<li><strong>Ceremonial melody:</strong> Appropriate for worship or celebration</li>
</ul>
</div>
<div className="genre-example" id="popular-song-melody">
<h4>Popular Song</h4>
<p>Popular songs use melody strategically to create memorable, commercially appealing music that works well in recorded and broadcast media.</p>
<ul>
<li><strong>Hook melody:</strong> Memorable, catchy melodic phrases</li>
<li><strong>Verse melody:</strong> Narrative melodic lines for storytelling</li>
<li><strong>Chorus melody:</strong> Strong, memorable melodic refrains</li>
<li><strong>Commercial melody:</strong> Melodic appeal for target audiences</li>
<li><strong>Production melody:</strong> Melodies that work well in recording</li>
</ul>
</div>
<div className="genre-example" id="musical-theatre-melody">
<h4>Songs from Musicals</h4>
<p>Musical theatre songs use melody theatrically to support dramatic action, character development, and storytelling within stage performance.</p>
<ul>
<li><strong>Character melody:</strong> Distinctive melodic styles for characters</li>
<li><strong>Dramatic melody:</strong> Melodic lines that support theatrical action</li>
<li><strong>Ensemble melody:</strong> Melodies that work for group numbers</li>
<li><strong>Dance melody:</strong> Melodic lines suitable for choreography</li>
<li><strong>Recitative melody:</strong> Speech-like melodic delivery</li>
</ul>
</div>
</section>
 Word-Painting Through Melody 
<section id="melodic-word-painting">
<h3>Word-Painting Through Melody</h3>
<div className="example" id="directional-painting">
<h4>Directional Word-Painting</h4>
<ul>
<li><strong>Rising melodies:</strong> For "up," "heaven," "joy," "hope," "ascend"</li>
<li><strong>Falling melodies:</strong> For "down," "fall," "death," "despair," "descend"</li>
<li><strong>Circular melodies:</strong> For "around," "cycle," "eternal," "return"</li>
<li><strong>Angular melodies:</strong> For "sharp," "jagged," "broken," "conflict"</li>
</ul>
</div>
<div className="example" id="emotional-painting">
<h4>Emotional Word-Painting</h4>
<ul>
<li><strong>Smooth melodies:</strong> For peace, love, contentment, flowing</li>
<li><strong>Jagged melodies:</strong> For anger, conflict, pain, disruption</li>
<li><strong>Soaring melodies:</strong> For ecstasy, triumph, freedom, flight</li>
<li><strong>Sighing melodies:</strong> For sadness, longing, resignation</li>
</ul>
</div>
<div className="example" id="descriptive-painting">
<h4>Descriptive Word-Painting</h4>
<ul>
<li><strong>Wave-like melodies:</strong> For water, ocean, flowing, undulation</li>
<li><strong>Stepwise melodies:</strong> For walking, gradual movement, scales</li>
<li><strong>Leaping melodies:</strong> For jumping, sudden movement, surprise</li>
<li><strong>Chromatic melodies:</strong> For slithering, sliding, sophistication</li>
</ul>
</div>
<div className="example" id="symbolic-painting">
<h4>Symbolic Word-Painting</h4>
<ul>
<li><strong>Cross motifs:</strong> Four-note patterns for religious texts</li>
<li><strong>Sighing figures:</strong> Descending seconds for lament</li>
<li><strong>Trumpet calls:</strong> Fanfare-like patterns for heroic texts</li>
<li><strong>Pastoral melodies:</strong> Simple, folk-like tunes for nature</li>
</ul>
</div>
</section>
 Text Setting Approaches 
<section id="text-setting">
<h3>Text Setting Approaches</h3>
<div className="approach" id="syllabic-setting">
<h4>Syllabic Setting</h4>
<p>One note per syllable, emphasizing textual clarity and comprehension.</p>
<ul>
<li><strong>Advantages:</strong> Clear text delivery, easy to sing, natural speech rhythm</li>
<li><strong>Uses:</strong> Narrative texts, recitative, popular songs, hymns</li>
<li><strong>Characteristics:</strong> Speech-like, conversational, accessible</li>
<li><strong>Examples:</strong> Folk songs, hymns, recitative passages</li>
</ul>
</div>
<div className="approach" id="neumatic-setting">
<h4>Neumatic Setting</h4>
<p>Small groups of notes (2-4) per syllable, balancing text clarity with melodic expression.</p>
<ul>
<li><strong>Advantages:</strong> Moderate expression, still clear text, melodic interest</li>
<li><strong>Uses:</strong> Art songs, choral music, moderate expression</li>
<li><strong>Characteristics:</strong> Balanced, expressive yet clear</li>
<li><strong>Examples:</strong> Many art songs, choral anthems</li>
</ul>
</div>
<div className="approach" id="melismatic-setting">
<h4>Melismatic Setting</h4>
<p>Many notes per syllable, emphasizing melodic expression and virtuosity over textual clarity.</p>
<ul>
<li><strong>Advantages:</strong> High expression, vocal display, emotional intensity</li>
<li><strong>Uses:</strong> Climactic moments, emotional peaks, virtuoso passages</li>
<li><strong>Characteristics:</strong> Expressive, virtuosic, emotionally intense</li>
<li><strong>Examples:</strong> Operatic arias, gospel melismas, art song climaxes</li>
</ul>
</div>
</section>
 Melodic Phrase Structure 
<section id="phrase-structure">
<h3>Melodic Phrase Structure</h3>
<div className="structure" id="phrase-types">
<h4>Types of Melodic Phrases</h4>
<ul>
<li><strong>Antecedent-Consequent:</strong> Question-answer phrase pairs</li>
<li><strong>Period structure:</strong> Balanced phrase pairs with cadences</li>
<li><strong>Sentence structure:</strong> Statement, repetition, continuation</li>
<li><strong>Through-composed:</strong> Continuous melodic development</li>
</ul>
</div>
<div className="structure" id="phrase-relationships">
<h4>Phrase Relationships</h4>
<ul>
<li><strong>Parallel phrases:</strong> Similar melodic contours</li>
<li><strong>Contrasting phrases:</strong> Different melodic characters</li>
<li><strong>Sequential phrases:</strong> Repeated patterns at different pitch levels</li>
<li><strong>Developmental phrases:</strong> Motivic transformation and growth</li>
</ul>
</div>
</section>
 Performance Practice 
<section id="performance-practice">
<h3>Performance Practice</h3>
<h4>Vocal Considerations</h4>
<ul>
<li><strong>Text clarity:</strong> Clear articulation and pronunciation</li>
<li><strong>Melodic expression:</strong> Appropriate phrasing and dynamics</li>
<li><strong>Vocal health:</strong> Sustainable melodic writing for voice</li>
<li><strong>Style appropriateness:</strong> Melodic delivery matches genre</li>
</ul>
<h4>Interpretive Considerations</h4>
<ul>
<li><strong>Textual meaning:</strong> Melody serves textual expression</li>
<li><strong>Emotional content:</strong> Melodic choices enhance emotion</li>
<li><strong>Character portrayal:</strong> Melody reflects character types</li>
<li><strong>Dramatic context:</strong> Melody supports theatrical elements</li>
</ul>
<h4>Technical Considerations</h4>
<ul>
<li><strong>Range management:</strong> Appropriate use of vocal range</li>
<li><strong>Interval execution:</strong> Accurate pitch relationships</li>
<li><strong>Rhythmic precision:</strong> Accurate melodic rhythm</li>
<li><strong>Breath management:</strong> Phrasing that allows for breathing</li>
</ul>
</section>
 Assessment Focus 
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<h4>What You Need to Know</h4>
<ul>
<li>Identify different types of melodic contour and their expressive effects</li>
<li>Understand how melody supports and enhances textual meaning</li>
<li>Recognize word-painting through melodic choices</li>
<li>Compare melodic approaches across different genres</li>
<li>Analyze the relationship between melody and text setting</li>
<li>Use correct terminology when describing melodic elements</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Identify melodic contour and direction in recordings</li>
<li>Recognize different text setting approaches (syllabic, melismatic)</li>
<li>Hear how melody supports textual meaning and emotion</li>
<li>Distinguish between different melodic styles and genres</li>
<li>Follow melodic development and phrase structure</li>
</ul>
<h4>Analysis Skills</h4>
<ul>
<li>Explain how melodic choices enhance specific texts</li>
<li>Compare melodic approaches in different genres and styles</li>
<li>Evaluate the effectiveness of melodic word-painting</li>
<li>Identify the relationship between melody and other musical elements</li>
<li>Describe how melody contributes to overall musical expression</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0105MelodyPage;
