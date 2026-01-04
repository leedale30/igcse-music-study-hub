import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0103MetrePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Metre</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Metre
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
<p>Metre in Music and Words refers to the organization of beats into regular patterns of strong and weak pulses that support and enhance the structure and meaning of text. In this area of study, metre serves as a foundation that can either complement the natural metre of poetry and speech, or create interesting tensions and contrasts that enhance expressive meaning across art song, choral music, popular song, and musicals.</p>
</section>
 Key Characteristics Section 
<section id="key-characteristics">
<h3>Key Characteristics of Metre in Music and Words</h3>
<div className="characteristic" id="text-metre-alignment">
<h4>Text-Metre Alignment</h4>
<p>The relationship between musical metre and the natural metrical patterns found in poetry and speech, creating either harmony or creative tension.</p>
<ul>
<li><strong>Complementary metre:</strong> Musical metre supports poetic metre</li>
<li><strong>Contrasting metre:</strong> Musical metre creates tension with text metre</li>
<li><strong>Flexible metre:</strong> Metre adapts to serve textual expression</li>
<li><strong>Speech-based metre:</strong> Metre follows natural speech patterns</li>
</ul>
</div>
<div className="characteristic" id="expressive-metre">
<h4>Expressive and Descriptive Metre</h4>
<p>Metre used as a tool for word-painting and emotional expression, where metrical patterns directly illustrate or enhance textual meaning.</p>
<ul>
<li><strong>Character metre:</strong> Specific metres associated with character types</li>
<li><strong>Mood metre:</strong> Metres that evoke particular emotional states</li>
<li><strong>Descriptive metre:</strong> Metres that paint pictures or scenes</li>
<li><strong>Dramatic metre:</strong> Metres that support theatrical action</li>
</ul>
</div>
<div className="characteristic" id="genre-metrical-conventions">
<h4>Genre-Specific Metrical Conventions</h4>
<p>Each genre within Music and Words has developed characteristic metrical approaches that serve its specific purposes and contexts.</p>
<ul>
<li><strong>Art Song:</strong> Sophisticated, flexible metres that serve poetic expression</li>
<li><strong>Choral Music:</strong> Metres suitable for group singing and textual clarity</li>
<li><strong>Popular Song:</strong> Strong, memorable metrical patterns for commercial appeal</li>
<li><strong>Musicals:</strong> Theatrical metres that support dramatic action and dance</li>
</ul>
</div>
<div className="characteristic" id="metrical-complexity">
<h4>Metrical Complexity and Variation</h4>
<p>The use of complex metrical devices to create interest, support textual meaning, and demonstrate compositional sophistication.</p>
<ul>
<li><strong>Mixed metres:</strong> Changing time signatures within a piece</li>
<li><strong>Compound metres:</strong> Complex groupings of beats</li>
<li><strong>Irregular metres:</strong> Asymmetrical beat patterns</li>
<li><strong>Metrical modulation:</strong> Smooth transitions between different metres</li>
</ul>
</div>
</section>
 Common Metres Section 
<section id="common-metres">
<h3>Common Metres in Music and Words</h3>
<div className="metre-grid">
<div className="metre-card">
<h4>Simple Metres</h4>
<ul>
<li><strong>2/4:</strong> Two quarter-note beats per measure (march-like)</li>
<li><strong>3/4:</strong> Three quarter-note beats per measure (waltz-like)</li>
<li><strong>4/4:</strong> Four quarter-note beats per measure (common time)</li>
<li><strong>2/2:</strong> Two half-note beats per measure (cut time)</li>
</ul>
</div>
<div className="metre-card">
<h4>Compound Metres</h4>
<ul>
<li><strong>6/8:</strong> Two dotted quarter-note beats per measure</li>
<li><strong>9/8:</strong> Three dotted quarter-note beats per measure</li>
<li><strong>12/8:</strong> Four dotted quarter-note beats per measure</li>
<li><strong>6/4:</strong> Two dotted half-note beats per measure</li>
</ul>
</div>
<div className="metre-card">
<h4>Complex Metres</h4>
<ul>
<li><strong>5/4:</strong> Five quarter-note beats per measure</li>
<li><strong>7/8:</strong> Seven eighth-note beats per measure</li>
<li><strong>Mixed metres:</strong> Changing time signatures</li>
<li><strong>Additive metres:</strong> Irregular groupings (3+2, 2+3)</li>
</ul>
</div>
</div>
</section>
 Genre Applications 
<section id="genre-applications">
<h3>Metre in Different Genres</h3>
<div className="genre-example" id="art-song-metre">
<h4>Art Song</h4>
<p>Art songs use metre with great sophistication to enhance poetic meaning and create expressive musical settings that serve the text.</p>
<ul>
<li><strong>Poetic metre alignment:</strong> Musical metre reflects poetic structure</li>
<li><strong>Flexible metre:</strong> Changes to serve textual expression</li>
<li><strong>Through-composed metre:</strong> Continuous metrical development</li>
<li><strong>Expressive metre:</strong> Metrical choices enhance emotional content</li>
<li><strong>Sophisticated patterns:</strong> Complex metres for artistic effect</li>
</ul>
</div>
<div className="genre-example" id="choral-metre">
<h4>Choral Music</h4>
<p>Choral works use metre to ensure textual clarity and create powerful collective musical experiences suitable for group performance.</p>
<ul>
<li><strong>Clear metre:</strong> Strong metrical patterns for ensemble coordination</li>
<li><strong>Ceremonial metres:</strong> Appropriate for worship or celebration</li>
<li><strong>Text-driven metre:</strong> Metre serves textual meaning</li>
<li><strong>Traditional metres:</strong> Familiar patterns for congregation participation</li>
<li><strong>Antiphonal metre:</strong> Metrical dialogue between groups</li>
</ul>
</div>
<div className="genre-example" id="popular-song-metre">
<h4>Popular Song</h4>
<p>Popular songs use metre strategically to create memorable, commercially appealing music that works well in recorded and broadcast media.</p>
<ul>
<li><strong>Strong metre:</strong> Clear, driving metrical foundations</li>
<li><strong>Dance metres:</strong> Metres that encourage movement</li>
<li><strong>Verse-chorus metre:</strong> Consistent metre for structural clarity</li>
<li><strong>Hook metre:</strong> Memorable metrical patterns</li>
<li><strong>Production metre:</strong> Metres suitable for recording</li>
</ul>
</div>
<div className="genre-example" id="musical-theatre-metre">
<h4>Songs from Musicals</h4>
<p>Musical theatre songs use metre theatrically to support dramatic action, character development, and storytelling within stage performance.</p>
<ul>
<li><strong>Dramatic metre:</strong> Metres that support theatrical action</li>
<li><strong>Character metre:</strong> Distinctive metres for different characters</li>
<li><strong>Dance metre:</strong> Metres suitable for choreography</li>
<li><strong>Dialogue metre:</strong> Speech-like metres for recitative</li>
<li><strong>Ensemble metre:</strong> Metres that work for group numbers</li>
</ul>
</div>
</section>
 Metrical Word-Painting 
<section id="metrical-word-painting">
<h3>Word-Painting Through Metre</h3>
<div className="example" id="movement-metres">
<h4>Movement and Dance</h4>
<ul>
<li><strong>Waltz (3/4):</strong> For graceful, flowing movement</li>
<li><strong>March (2/4 or 4/4):</strong> For military or processional movement</li>
<li><strong>Compound metres (6/8, 12/8):</strong> For lilting, swaying motion</li>
<li><strong>Irregular metres:</strong> For stumbling, uncertain movement</li>
</ul>
</div>
<div className="example" id="emotional-metres">
<h4>Emotional States</h4>
<ul>
<li><strong>Simple metres:</strong> For straightforward, honest emotions</li>
<li><strong>Complex metres:</strong> For confusion, anxiety, or sophistication</li>
<li><strong>Compound metres:</strong> For gentle, flowing emotions</li>
<li><strong>Mixed metres:</strong> For changing or conflicted emotions</li>
</ul>
</div>
<div className="example" id="character-metres">
<h4>Character Types</h4>
<ul>
<li><strong>Military characters:</strong> Strong duple metres (2/4, 4/4)</li>
<li><strong>Pastoral characters:</strong> Compound metres (6/8, 12/8)</li>
<li><strong>Noble characters:</strong> Stately triple metres (3/4, 3/2)</li>
<li><strong>Comic characters:</strong> Irregular or unexpected metres</li>
</ul>
</div>
</section>
 Text Setting and Metre 
<section id="text-setting-metre">
<h3>Text Setting and Metre</h3>
<div className="principle" id="poetic-metre">
<h4>Poetic Metre Considerations</h4>
<p>Understanding how musical metre can support or contrast with the natural metre of poetry.</p>
<ul>
<li><strong>Iambic metre:</strong> Weak-strong patterns (da-DUM)</li>
<li><strong>Trochaic metre:</strong> Strong-weak patterns (DUM-da)</li>
<li><strong>Anapestic metre:</strong> Weak-weak-strong patterns (da-da-DUM)</li>
<li><strong>Dactylic metre:</strong> Strong-weak-weak patterns (DUM-da-da)</li>
</ul>
</div>
<div className="principle" id="stress-placement">
<h4>Stress Placement</h4>
<p>How important syllables and words are placed within the metrical framework.</p>
<ul>
<li><strong>Strong beats:</strong> Important words and stressed syllables</li>
<li><strong>Weak beats:</strong> Less important words and unstressed syllables</li>
<li><strong>Syncopated stress:</strong> Important words on weak beats for emphasis</li>
<li><strong>Metrical accent:</strong> Musical stress that supports textual stress</li>
</ul>
</div>
<div className="principle" id="phrase-structure">
<h4>Phrase Structure</h4>
<p>How textual phrases align with metrical patterns and musical phrases.</p>
<ul>
<li><strong>Regular phrases:</strong> Text phrases align with metrical patterns</li>
<li><strong>Irregular phrases:</strong> Text phrases create metrical tension</li>
<li><strong>Enjambment:</strong> Text phrases continue across metrical boundaries</li>
<li><strong>Caesura:</strong> Textual pauses within metrical patterns</li>
</ul>
</div>
</section>
 Performance Practice 
<section id="performance-practice">
<h3>Performance Practice</h3>
<h4>Conducting Considerations</h4>
<ul>
<li><strong>Clear metre:</strong> Establish and maintain metrical clarity</li>
<li><strong>Flexible metre:</strong> Allow for expressive metrical flexibility</li>
<li><strong>Metrical changes:</strong> Smooth transitions between different metres</li>
<li><strong>Text sensitivity:</strong> Metre serves textual expression</li>
</ul>
<h4>Ensemble Considerations</h4>
<ul>
<li><strong>Metrical unity:</strong> All performers feel the same metre</li>
<li><strong>Text coordination:</strong> Metrical patterns support text clarity</li>
<li><strong>Rhythmic precision:</strong> Accurate execution within metrical framework</li>
<li><strong>Expressive metre:</strong> Use metre for musical expression</li>
</ul>
<h4>Solo Performance</h4>
<ul>
<li><strong>Metrical freedom:</strong> Appropriate flexibility for expression</li>
<li><strong>Text-metre relationship:</strong> Balance musical and textual metre</li>
<li><strong>Accompaniment coordination:</strong> Maintain metrical relationship with piano</li>
<li><strong>Stylistic appropriateness:</strong> Metre matches genre expectations</li>
</ul>
</section>
 Assessment Focus 
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<h4>What You Need to Know</h4>
<ul>
<li>Identify different time signatures and their characteristics</li>
<li>Understand how metre supports and enhances textual meaning</li>
<li>Recognize word-painting through metrical choices</li>
<li>Compare metrical approaches across different genres</li>
<li>Analyze the relationship between poetic metre and musical metre</li>
<li>Use correct terminology when describing metrical elements</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Identify different metres in recordings</li>
<li>Recognize changes in metre within pieces</li>
<li>Hear how metre supports textual stress and meaning</li>
<li>Distinguish between simple and compound metres</li>
<li>Follow complex and irregular metrical patterns</li>
</ul>
<h4>Analysis Skills</h4>
<ul>
<li>Explain how metrical patterns enhance specific texts</li>
<li>Compare metrical approaches in different genres and styles</li>
<li>Evaluate the effectiveness of metrical choices</li>
<li>Identify the relationship between metre and other musical elements</li>
<li>Describe how metre contributes to overall musical expression</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0103MetrePage;
