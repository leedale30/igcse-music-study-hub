import React from 'react';
import { Link } from 'react-router-dom';

const Romantic0102RhythmPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Rhythm</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Rhythm
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
<p>In Romantic music, rhythm refers to the pattern of long and short sounds in time. Romantic composers expanded rhythmic expression beyond the regular patterns of earlier periods, using rhythm as a powerful tool for emotional expression, character portrayal, and programmatic storytelling.</p>
</section>
 Key Characteristics Section 
<section id="key-characteristics">
<h3>Key Characteristics of Romantic Rhythm</h3>
<div className="characteristic" id="expressive-flexibility">
<h4>Expressive Flexibility</h4>
<p>Romantic rhythm is characterized by greater flexibility and freedom compared to Classical period regularity. Composers used rhythmic variation to enhance emotional expression and create more personal, individualistic musical statements.</p>
<ul>
<li><strong>Rubato:</strong> Flexible tempo allowing expressive timing</li>
<li><strong>Irregular phrasing:</strong> Phrases of varying lengths</li>
<li><strong>Rhythmic acceleration:</strong> Speeding up for excitement</li>
<li><strong>Rhythmic deceleration:</strong> Slowing down for emphasis</li>
</ul>
</div>
<div className="characteristic" id="complex-patterns">
<h4>Complex Rhythmic Patterns</h4>
<p>Romantic composers employed more sophisticated rhythmic techniques, including cross-rhythms, syncopation, and irregular groupings to create interest and support programmatic content.</p>
<ul>
<li><strong>Syncopation:</strong> Emphasis on off-beats</li>
<li><strong>Cross-rhythms:</strong> Conflicting rhythmic patterns</li>
<li><strong>Hemiola:</strong> Three against two rhythmic patterns</li>
<li><strong>Polyrhythm:</strong> Multiple rhythms simultaneously</li>
</ul>
</div>
<div className="characteristic" id="programmatic-rhythm">
<h4>Programmatic and Descriptive Rhythm</h4>
<p>In programme music like <em>Vltava</em>, rhythm is used descriptively to represent natural phenomena, human activities, and narrative elements, making the music more vivid and pictorial.</p>
<ul>
<li><strong>Imitative rhythms:</strong> Mimicking natural sounds</li>
<li><strong>Dance rhythms:</strong> Representing folk traditions</li>
<li><strong>Flowing rhythms:</strong> Depicting water or movement</li>
<li><strong>Dramatic rhythms:</strong> Supporting narrative tension</li>
</ul>
</div>
</section>
 Terminology Section 
<section id="terminology">
<h3>Essential Rhythmic Terminology</h3>
<div className="terminology-grid">
<div className="term-card">
<h4>Basic Rhythmic Values</h4>
<ul>
<li><strong>Whole note (semibreve):</strong> 4 beats</li>
<li><strong>Half note (minim):</strong> 2 beats</li>
<li><strong>Quarter note (crotchet):</strong> 1 beat</li>
<li><strong>Eighth note (quaver):</strong> 1/2 beat</li>
<li><strong>Sixteenth note (semiquaver):</strong> 1/4 beat</li>
</ul>
</div>
<div className="term-card">
<h4>Rhythmic Techniques</h4>
<ul>
<li><strong>Syncopation:</strong> Off-beat emphasis</li>
<li><strong>Rubato:</strong> Flexible tempo</li>
<li><strong>Hemiola:</strong> 3 against 2 pattern</li>
<li><strong>Cross-rhythm:</strong> Conflicting patterns</li>
<li><strong>Augmentation:</strong> Lengthening note values</li>
<li><strong>Diminution:</strong> Shortening note values</li>
</ul>
</div>
<div className="term-card">
<h4>Expressive Elements</h4>
<ul>
<li><strong>Accelerando:</strong> Gradually speeding up</li>
<li><strong>Ritardando:</strong> Gradually slowing down</li>
<li><strong>Fermata:</strong> Held note or pause</li>
<li><strong>Agogic accent:</strong> Emphasis through duration</li>
</ul>
</div>
</div>
</section>
 Comparison Section 
<section id="comparison">
<h3>Comparison with Baroque Rhythm</h3>
<div className="comparison-table">
<div className="baroque-column">
<h4>Baroque Rhythm</h4>
<ul>
<li>Motor rhythm (continuous patterns)</li>
<li>Regular, predictable patterns</li>
<li>Functional rhythmic drive</li>
<li>Limited rhythmic variety</li>
<li>Steady pulse throughout</li>
</ul>
</div>
<div className="romantic-column">
<h4>Romantic Rhythm</h4>
<ul>
<li>Flexible, expressive rhythms</li>
<li>Irregular and varied patterns</li>
<li>Emotionally expressive rhythms</li>
<li>Complex rhythmic techniques</li>
<li>Rubato and tempo flexibility</li>
</ul>
</div>
</div>
</section>
 Focus Work Examples 
<section id="focus-work-examples">
<h3>Focus Work: Smetana's <em>Vltava</em></h3>
<h4>Rhythmic Examples in <em>Vltava</em></h4>
<div className="example" id="river-source-rhythm">
<h5>1. The River Source</h5>
<p><strong>Rhythmic Pattern:</strong> Gentle, flowing eighth notes</p>
<p><strong>Effect:</strong> The continuous eighth-note patterns in the flutes create the impression of gently bubbling springs, with the rhythm mimicking the natural flow of water.</p>
</div>
<div className="example" id="main-theme-rhythm">
<h5>2. Main River Theme</h5>
<p><strong>Rhythmic Pattern:</strong> Broad, flowing quarter and half notes</p>
<p><strong>Effect:</strong> The majestic river theme uses longer note values to create a sense of the river's grandeur and steady flow.</p>
</div>
<div className="example" id="hunting-scene">
<h5>3. Hunting Scene</h5>
<p><strong>Rhythmic Pattern:</strong> Dotted rhythms and fanfare patterns</p>
<p><strong>Effect:</strong> The horn calls use characteristic hunting rhythms with dotted patterns that evoke the excitement of the chase.</p>
</div>
<div className="example" id="peasant-wedding-rhythm">
<h5>4. Peasant Wedding</h5>
<p><strong>Rhythmic Pattern:</strong> Folk dance rhythms (polka-like)</p>
<p><strong>Effect:</strong> The wedding scene features lively dance rhythms typical of Czech folk music, with strong downbeats and syncopated patterns.</p>
</div>
<div className="example" id="moonlight-rhythm">
<h5>5. Moonlight Dance of Water Nymphs</h5>
<p><strong>Rhythmic Pattern:</strong> Ethereal, floating rhythms</p>
<p><strong>Effect:</strong> Delicate, irregular rhythmic patterns create the supernatural, otherworldly atmosphere of the nymphs' dance.</p>
</div>
<div className="example" id="rapids-rhythm">
<h5>6. St. John's Rapids</h5>
<p><strong>Rhythmic Pattern:</strong> Turbulent, irregular patterns</p>
<p><strong>Effect:</strong> Rapid, chaotic rhythmic patterns with cross-rhythms and syncopation depict the dangerous, churning waters of the rapids.</p>
</div>
</section>
 Performance Practice 
<section id="performance-practice">
<h3>Performance Practice</h3>
<h4>Interpreting Romantic Rhythm</h4>
<ul>
<li><strong>Expressive Timing:</strong> Use rubato to enhance emotional expression</li>
<li><strong>Rhythmic Character:</strong> Each rhythmic pattern should have distinct character</li>
<li><strong>Flexibility:</strong> Allow for natural ebb and flow in rhythmic pulse</li>
<li><strong>Programmatic Support:</strong> Rhythm should support the musical narrative</li>
<li><strong>Ensemble Coordination:</strong> Maintain ensemble unity while allowing expressive freedom</li>
</ul>
<h4>Modern Performance Considerations</h4>
<ul>
<li><strong>Conductor's Role:</strong> Clear communication of rhythmic flexibility</li>
<li><strong>Recording Influence:</strong> Balance historical performance practice with modern expectations</li>
<li><strong>Instrument Capabilities:</strong> Utilize modern instruments' rhythmic precision</li>
</ul>
</section>
 Assessment Focus 
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<h4>What You Need to Know</h4>
<ul>
<li>Identify basic rhythmic values and patterns</li>
<li>Recognize syncopation and cross-rhythms</li>
<li>Understand the use of rubato in Romantic music</li>
<li>Compare Romantic rhythm with other musical periods</li>
<li>Analyze how rhythm supports programmatic content in <em>Vltava</em></li>
<li>Use correct terminology when describing rhythmic effects</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Identify regular vs. irregular rhythmic patterns</li>
<li>Recognize tempo changes and rubato</li>
<li>Distinguish between different rhythmic characters</li>
<li>Understand how rhythm creates musical narrative</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default Romantic0102RhythmPage;
