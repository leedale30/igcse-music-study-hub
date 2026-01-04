import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0104TempoPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Tempo</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Tempo
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
<p>Tempo in Music and Words refers to the speed of musical performance and how it serves to enhance textual meaning, emotional expression, and dramatic effect. In this area of study, tempo is used strategically to support the natural flow of language, create emotional atmosphere, illustrate textual imagery, and serve the specific needs of different genres including art song, choral music, popular song, and musicals.</p>
</section>
 Key Characteristics Section 
<section id="key-characteristics">
<h3>Key Characteristics of Tempo in Music and Words</h3>
<div className="characteristic" id="expressive-tempo">
<h4>Expressive and Emotional Tempo</h4>
<p>Tempo choices that directly support and enhance the emotional content and meaning of the text being set to music.</p>
<ul>
<li><strong>Emotional tempo:</strong> Speed that matches the emotional state of the text</li>
<li><strong>Character tempo:</strong> Tempo that reflects character types or personalities</li>
<li><strong>Mood tempo:</strong> Speed that creates or supports specific atmospheric moods</li>
<li><strong>Dramatic tempo:</strong> Tempo that enhances theatrical or narrative elements</li>
</ul>
</div>
<div className="characteristic" id="text-tempo-relationship">
<h4>Text-Tempo Relationship</h4>
<p>The careful balance between musical tempo and the natural pace of speech, poetry, and textual delivery for optimal comprehension and expression.</p>
<ul>
<li><strong>Speech-based tempo:</strong> Tempo that follows natural speech patterns</li>
<li><strong>Syllabic tempo:</strong> Speed that allows clear articulation of text</li>
<li><strong>Poetic tempo:</strong> Tempo that serves the rhythm and flow of poetry</li>
<li><strong>Narrative tempo:</strong> Speed that supports storytelling and comprehension</li>
</ul>
</div>
<div className="characteristic" id="flexible-tempo">
<h4>Flexible and Variable Tempo</h4>
<p>The use of tempo changes, rubato, and flexibility to serve expressive and textual needs rather than maintaining strict metronomic consistency.</p>
<ul>
<li><strong>Rubato:</strong> Expressive flexibility in tempo for musical phrasing</li>
<li><strong>Tempo changes:</strong> Strategic shifts in speed within pieces</li>
<li><strong>Accelerando/Ritardando:</strong> Gradual tempo changes for expression</li>
<li><strong>Agogic accents:</strong> Slight tempo modifications for emphasis</li>
</ul>
</div>
<div className="characteristic" id="genre-tempo-conventions">
<h4>Genre-Specific Tempo Conventions</h4>
<p>Different genres within Music and Words have developed characteristic tempo approaches that serve their specific purposes and performance contexts.</p>
<ul>
<li><strong>Art Song:</strong> Sophisticated, flexible tempos for poetic expression</li>
<li><strong>Choral Music:</strong> Tempos suitable for group coordination and textual clarity</li>
<li><strong>Popular Song:</strong> Commercially viable tempos for recording and broadcast</li>
<li><strong>Musicals:</strong> Theatrical tempos that support dramatic action and dance</li>
</ul>
</div>
</section>
 Tempo Markings Section 
<section id="tempo-markings">
<h3>Common Tempo Markings in Music and Words</h3>
<div className="tempo-grid">
<div className="tempo-card">
<h4>Slow Tempos</h4>
<ul>
<li><strong>Largo:</strong> Very slow and broad (♩ = 40-60)</li>
<li><strong>Adagio:</strong> Slow and expressive (♩ = 66-76)</li>
<li><strong>Andante:</strong> Walking pace (♩ = 76-108)</li>
<li><strong>Andantino:</strong> Slightly faster than Andante</li>
</ul>
</div>
<div className="tempo-card">
<h4>Moderate Tempos</h4>
<ul>
<li><strong>Moderato:</strong> Moderate speed (♩ = 108-120)</li>
<li><strong>Allegretto:</strong> Moderately fast (♩ = 112-120)</li>
<li><strong>Andante con moto:</strong> Andante with motion</li>
<li><strong>Tempo comodo:</strong> Comfortable, convenient tempo</li>
</ul>
</div>
<div className="tempo-card">
<h4>Fast Tempos</h4>
<ul>
<li><strong>Allegro:</strong> Fast and lively (♩ = 120-168)</li>
<li><strong>Vivace:</strong> Lively and quick (♩ = 168-176)</li>
<li><strong>Presto:</strong> Very fast (♩ = 168-200)</li>
<li><strong>Prestissimo:</strong> As fast as possible</li>
</ul>
</div>
</div>
</section>
 Genre Applications 
<section id="genre-applications">
<h3>Tempo in Different Genres</h3>
<div className="genre-example" id="art-song-tempo">
<h4>Art Song</h4>
<p>Art songs use tempo with great sophistication to serve poetic expression and create intimate musical experiences that enhance textual meaning.</p>
<ul>
<li><strong>Poetic tempo:</strong> Speed that serves the natural flow of poetry</li>
<li><strong>Expressive flexibility:</strong> Rubato and tempo changes for emotional effect</li>
<li><strong>Through-composed tempo:</strong> Continuous tempo development</li>
<li><strong>Intimate tempo:</strong> Speeds appropriate for chamber performance</li>
<li><strong>Text-driven tempo:</strong> Speed determined by textual needs</li>
</ul>
</div>
<div className="genre-example" id="choral-tempo">
<h4>Choral Music</h4>
<p>Choral works use tempo to ensure textual clarity and create powerful collective musical experiences suitable for group performance.</p>
<ul>
<li><strong>Ensemble tempo:</strong> Speeds that allow group coordination</li>
<li><strong>Ceremonial tempo:</strong> Appropriate for worship or celebration</li>
<li><strong>Text clarity tempo:</strong> Speed that ensures word comprehension</li>
<li><strong>Acoustic tempo:</strong> Consideration of performance space acoustics</li>
<li><strong>Congregational tempo:</strong> Speeds suitable for audience participation</li>
</ul>
</div>
<div className="genre-example" id="popular-song-tempo">
<h4>Popular Song</h4>
<p>Popular songs use tempo strategically to create commercially appealing music that works well in recorded and broadcast media.</p>
<ul>
<li><strong>Commercial tempo:</strong> Speeds that appeal to target audiences</li>
<li><strong>Dance tempo:</strong> Tempos that encourage movement and dancing</li>
<li><strong>Radio tempo:</strong> Speeds suitable for broadcast media</li>
<li><strong>Hook tempo:</strong> Memorable, catchy tempo choices</li>
<li><strong>Production tempo:</strong> Tempos that work well in recording</li>
</ul>
</div>
<div className="genre-example" id="musical-theatre-tempo">
<h4>Songs from Musicals</h4>
<p>Musical theatre songs use tempo theatrically to support dramatic action, character development, and storytelling within stage performance.</p>
<ul>
<li><strong>Dramatic tempo:</strong> Speeds that support theatrical action</li>
<li><strong>Character tempo:</strong> Distinctive tempos for different characters</li>
<li><strong>Scene tempo:</strong> Tempos that match dramatic situations</li>
<li><strong>Dance tempo:</strong> Speeds suitable for choreography</li>
<li><strong>Dialogue tempo:</strong> Speech-like tempos for recitative</li>
</ul>
</div>
</section>
 Tempo Word-Painting 
<section id="tempo-word-painting">
<h3>Word-Painting Through Tempo</h3>
<div className="example" id="emotional-tempos">
<h4>Emotional Expression</h4>
<ul>
<li><strong>Slow tempos:</strong> For sadness, contemplation, solemnity, love</li>
<li><strong>Fast tempos:</strong> For excitement, joy, anger, urgency</li>
<li><strong>Moderate tempos:</strong> For narrative, conversation, reflection</li>
<li><strong>Changing tempos:</strong> For emotional transformation or conflict</li>
</ul>
</div>
<div className="example" id="descriptive-tempos">
<h4>Descriptive and Pictorial</h4>
<ul>
<li><strong>Walking tempo:</strong> For journey, pilgrimage, or travel texts</li>
<li><strong>Flowing tempo:</strong> For water, wind, or movement imagery</li>
<li><strong>Stately tempo:</strong> For nobility, ceremony, or grandeur</li>
<li><strong>Agitated tempo:</strong> For storm, conflict, or turmoil</li>
</ul>
</div>
<div className="example" id="character-tempos">
<h4>Character Portrayal</h4>
<ul>
<li><strong>Elderly characters:</strong> Slower, more deliberate tempos</li>
<li><strong>Young characters:</strong> Faster, more energetic tempos</li>
<li><strong>Noble characters:</strong> Stately, measured tempos</li>
<li><strong>Comic characters:</strong> Playful, variable tempos</li>
</ul>
</div>
<div className="example" id="action-tempos">
<h4>Action and Movement</h4>
<ul>
<li><strong>Dance tempos:</strong> Specific speeds for different dance types</li>
<li><strong>March tempos:</strong> For military or processional movement</li>
<li><strong>Running tempos:</strong> Fast tempos for chase or escape scenes</li>
<li><strong>Stillness tempos:</strong> Very slow for meditation or death</li>
</ul>
</div>
</section>
 Tempo Modification Techniques 
<section id="tempo-modifications">
<h3>Tempo Modification Techniques</h3>
<div className="technique" id="gradual-changes">
<h4>Gradual Tempo Changes</h4>
<ul>
<li><strong>Accelerando (accel.):</strong> Gradually getting faster</li>
<li><strong>Ritardando (rit.):</strong> Gradually getting slower</li>
<li><strong>Rallentando (rall.):</strong> Gradually slowing down and relaxing</li>
<li><strong>Stringendo:</strong> Gradually faster with increasing intensity</li>
</ul>
</div>
<div className="technique" id="sudden-changes">
<h4>Sudden Tempo Changes</h4>
<ul>
<li><strong>Subito:</strong> Suddenly (e.g., allegro subito)</li>
<li><strong>Tempo primo:</strong> Return to the original tempo</li>
<li><strong>L'istesso tempo:</strong> The same tempo (despite notation changes)</li>
<li><strong>Doppio movimento:</strong> Twice as fast</li>
</ul>
</div>
<div className="technique" id="expressive-flexibility">
<h4>Expressive Flexibility</h4>
<ul>
<li><strong>Rubato:</strong> Flexible tempo for expressive phrasing</li>
<li><strong>Ad libitum:</strong> At the performer's discretion</li>
<li><strong>Senza tempo:</strong> Without strict tempo</li>
<li><strong>Tempo rubato:</strong> Stolen time for expression</li>
</ul>
</div>
</section>
 Performance Practice 
<section id="performance-practice">
<h3>Performance Practice</h3>
<h4>Conducting Considerations</h4>
<ul>
<li><strong>Clear tempo:</strong> Establish and maintain appropriate tempo</li>
<li><strong>Flexible tempo:</strong> Allow for expressive tempo modifications</li>
<li><strong>Text sensitivity:</strong> Tempo serves textual expression</li>
<li><strong>Ensemble coordination:</strong> Maintain tempo unity in groups</li>
</ul>
<h4>Solo Performance</h4>
<ul>
<li><strong>Expressive freedom:</strong> Appropriate use of rubato and flexibility</li>
<li><strong>Text-tempo balance:</strong> Speed serves textual comprehension</li>
<li><strong>Accompaniment coordination:</strong> Maintain tempo relationship with piano</li>
<li><strong>Stylistic appropriateness:</strong> Tempo matches genre expectations</li>
</ul>
<h4>Recording Considerations</h4>
<ul>
<li><strong>Microphone tempo:</strong> Intimate tempos for close recording</li>
<li><strong>Clarity tempo:</strong> Speed that ensures textual comprehension</li>
<li><strong>Commercial tempo:</strong> Speeds appropriate for target audience</li>
<li><strong>Technical tempo:</strong> Consideration of recording limitations</li>
</ul>
</section>
 Assessment Focus 
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<h4>What You Need to Know</h4>
<ul>
<li>Identify different tempo markings and their approximate speeds</li>
<li>Understand how tempo supports and enhances textual meaning</li>
<li>Recognize word-painting through tempo choices</li>
<li>Compare tempo approaches across different genres</li>
<li>Analyze the relationship between tempo and text comprehension</li>
<li>Use correct terminology when describing tempo elements</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Identify different tempos in recordings</li>
<li>Recognize tempo changes within pieces</li>
<li>Hear how tempo supports textual meaning and emotion</li>
<li>Distinguish between strict and flexible tempo approaches</li>
<li>Follow gradual tempo modifications (accelerando, ritardando)</li>
</ul>
<h4>Analysis Skills</h4>
<ul>
<li>Explain how tempo choices enhance specific texts</li>
<li>Compare tempo approaches in different genres and styles</li>
<li>Evaluate the effectiveness of tempo choices for textual expression</li>
<li>Identify the relationship between tempo and other musical elements</li>
<li>Describe how tempo contributes to overall musical character</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0104TempoPage;
