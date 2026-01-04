import React from 'react';
import { Link } from 'react-router-dom';

const Romantic0104TempoPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Tempo</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Tempo
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 3 • Romantic Music
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
<p>In Romantic music, tempo refers to the speed of the music and its expressive variations. Romantic composers revolutionized the use of tempo, moving beyond the relatively stable tempos of earlier periods to employ tempo as a primary means of emotional expression, dramatic effect, and programmatic storytelling.</p>
</section>
 Key Characteristics Section 
<section id="key-characteristics">
<h3>Key Characteristics of Romantic Tempo</h3>
<div className="characteristic" id="flexible-tempo">
<h4>Flexible and Expressive Tempo</h4>
<p>Romantic music is characterized by frequent tempo changes and the use of <strong>rubato</strong> - the flexible manipulation of tempo for expressive purposes. This flexibility allows performers to shape phrases emotionally and create more personal interpretations.</p>
<ul>
<li><strong>Rubato:</strong> "Stolen time" - flexible tempo for expression</li>
<li><strong>Tempo fluctuations:</strong> Subtle speeding up and slowing down</li>
<li><strong>Expressive timing:</strong> Tempo serving emotional content</li>
<li><strong>Phrase shaping:</strong> Using tempo to sculpt musical lines</li>
</ul>
</div>
<div className="characteristic" id="dramatic-tempo">
<h4>Dramatic Tempo Changes</h4>
<p>Romantic composers used sudden and gradual tempo changes to create dramatic effects, build tension, and support the emotional narrative of their music. These changes are often more extreme than in earlier periods.</p>
<ul>
<li><strong>Accelerando:</strong> Gradually speeding up for excitement</li>
<li><strong>Ritardando:</strong> Gradually slowing down for emphasis</li>
<li><strong>Sudden changes:</strong> Immediate tempo shifts for dramatic effect</li>
<li><strong>Tempo contrasts:</strong> Extreme differences between sections</li>
</ul>
</div>
<div className="characteristic" id="programmatic-tempo">
<h4>Programmatic and Descriptive Tempo</h4>
<p>In programme music like <em>Vltava</em>, tempo is used descriptively to represent different scenes, activities, and natural phenomena, making the musical narrative more vivid and realistic.</p>
<ul>
<li><strong>Scene painting:</strong> Tempo reflecting visual imagery</li>
<li><strong>Character portrayal:</strong> Different tempos for different characters</li>
<li><strong>Natural phenomena:</strong> Tempo mimicking natural processes</li>
<li><strong>Emotional states:</strong> Tempo reflecting psychological content</li>
</ul>
</div>
</section>
 Terminology Section 
<section id="terminology">
<h3>Essential Tempo Terminology</h3>
<div className="terminology-grid">
<div className="term-card">
<h4>Basic Tempo Markings</h4>
<ul>
<li><strong>Largo:</strong> Very slow and broad</li>
<li><strong>Adagio:</strong> Slow and leisurely</li>
<li><strong>Andante:</strong> Walking pace</li>
<li><strong>Moderato:</strong> Moderate speed</li>
<li><strong>Allegro:</strong> Fast and lively</li>
<li><strong>Presto:</strong> Very fast</li>
</ul>
</div>
<div className="term-card">
<h4>Tempo Changes</h4>
<ul>
<li><strong>Accelerando (accel.):</strong> Gradually faster</li>
<li><strong>Ritardando (rit.):</strong> Gradually slower</li>
<li><strong>Rallentando (rall.):</strong> Gradually slower</li>
<li><strong>Stringendo:</strong> Pressing forward, faster</li>
<li><strong>Rubato:</strong> Flexible tempo</li>
</ul>
</div>
<div className="term-card">
<h4>Expressive Terms</h4>
<ul>
<li><strong>A tempo:</strong> Return to original tempo</li>
<li><strong>Tempo primo:</strong> Return to first tempo</li>
<li><strong>Ritenuto:</strong> Held back, slower</li>
<li><strong>Fermata:</strong> Hold/pause</li>
<li><strong>Ad libitum:</strong> At the performer's discretion</li>
</ul>
</div>
</div>
</section>
 Comparison Section 
<section id="comparison">
<h3>Comparison with Baroque Tempo</h3>
<div className="comparison-table">
<div className="baroque-column">
<h4>Baroque Tempo</h4>
<ul>
<li>Relatively stable tempos</li>
<li>Limited tempo changes within movements</li>
<li>Functional rather than expressive</li>
<li>Tempo determined by dance forms</li>
<li>Mechanical regularity preferred</li>
</ul>
</div>
<div className="romantic-column">
<h4>Romantic Tempo</h4>
<ul>
<li>Highly flexible and variable tempos</li>
<li>Frequent tempo changes within pieces</li>
<li>Highly expressive and emotional</li>
<li>Tempo chosen for dramatic effect</li>
<li>Rubato and expressive timing</li>
</ul>
</div>
</div>
</section>
 Focus Work Examples 
<section id="focus-work-examples">
<h3>Focus Work: Smetana's <em>Vltava</em></h3>
<h4>Tempo Examples in <em>Vltava</em></h4>
<div className="example" id="river-source-tempo">
<h5>1. The River Source</h5>
<p><strong>Tempo:</strong> Allegro commodo (comfortable fast pace)</p>
<p><strong>Effect:</strong> The moderate-fast tempo creates the impression of gently bubbling springs, with the speed suggesting the lively movement of water without being rushed.</p>
</div>
<div className="example" id="main-theme-tempo">
<h5>2. Main River Theme</h5>
<p><strong>Tempo:</strong> Allegro commodo continuing</p>
<p><strong>Effect:</strong> The consistent tempo represents the river's steady, majestic flow, with subtle rubato allowing for expressive phrasing of the beautiful melody.</p>
</div>
<div className="example" id="hunting-scene-tempo">
<h5>3. Hunting Scene</h5>
<p><strong>Tempo:</strong> Più mosso (more movement, faster)</p>
<p><strong>Effect:</strong> The increased tempo creates excitement and energy, representing the thrill of the hunt with horn calls echoing through the forest.</p>
</div>
<div className="example" id="peasant-wedding-tempo">
<h5>4. Peasant Wedding</h5>
<p><strong>Tempo:</strong> L'istesso tempo (same tempo, but feels different)</p>
<p><strong>Effect:</strong> While maintaining the basic tempo, the change to 2/4 metre and folk-like rhythms creates a lively, dance-like character for the wedding celebration.</p>
</div>
<div className="example" id="moonlight-tempo">
<h5>5. Moonlight Dance of Water Nymphs</h5>
<p><strong>Tempo:</strong> Largo (very slow and broad)</p>
<p><strong>Effect:</strong> The dramatically slower tempo creates a mysterious, otherworldly atmosphere, with the slow pace enhancing the supernatural quality of the nymphs' dance.</p>
</div>
<div className="example" id="rapids-tempo">
<h5>6. St. John's Rapids</h5>
<p><strong>Tempo:</strong> Presto (very fast)</p>
<p><strong>Effect:</strong> The very fast tempo creates intense excitement and danger, representing the turbulent, chaotic waters of the rapids with accelerando building to the climax.</p>
</div>
</section>
 Performance Practice 
<section id="performance-practice">
<h3>Performance Practice</h3>
<h4>Interpreting Romantic Tempo</h4>
<ul>
<li><strong>Expressive Freedom:</strong> Use rubato to enhance emotional expression</li>
<li><strong>Tempo Relationships:</strong> Understand how tempo changes support the musical narrative</li>
<li><strong>Gradual Changes:</strong> Make accelerandos and ritardandos smooth and musical</li>
<li><strong>Character Differentiation:</strong> Use tempo to distinguish between different musical characters</li>
<li><strong>Ensemble Coordination:</strong> Maintain unity while allowing expressive flexibility</li>
</ul>
<h4>Modern Performance Considerations</h4>
<ul>
<li><strong>Conductor's Role:</strong> Clear communication of tempo changes and rubato</li>
<li><strong>Recording Influence:</strong> Balance historical performance practice with modern expectations</li>
<li><strong>Metronome Markings:</strong> Use as guidelines rather than rigid requirements</li>
<li><strong>Venue Acoustics:</strong> Adjust tempos to suit the performance space</li>
</ul>
</section>
 Assessment Focus 
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<h4>What You Need to Know</h4>
<ul>
<li>Identify basic tempo markings and their meanings</li>
<li>Recognize tempo changes (accelerando, ritardando)</li>
<li>Understand the concept and use of rubato</li>
<li>Compare Romantic tempo with other musical periods</li>
<li>Analyze how tempo supports programmatic content in <em>Vltava</em></li>
<li>Use correct terminology when describing tempo effects</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Identify fast, moderate, and slow tempos</li>
<li>Recognize gradual tempo changes</li>
<li>Distinguish between mechanical and expressive timing</li>
<li>Understand how tempo creates musical character and narrative</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default Romantic0104TempoPage;
