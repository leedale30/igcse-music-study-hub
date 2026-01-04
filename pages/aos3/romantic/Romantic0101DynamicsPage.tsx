import React from 'react';
import { Link } from 'react-router-dom';

const Romantic0101DynamicsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Dynamics</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Dynamics
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
<p>In Romantic music, dynamics refer to the volume levels and expressive changes throughout a piece. Romantic composers dramatically expanded the expressive range of dynamics, moving far beyond the Baroque era's functional terraced dynamics to create intense emotional expression and dramatic storytelling.</p>
</section>
 Key Characteristics Section 
<section id="key-characteristics">
<h3>Key Characteristics of Romantic Dynamics</h3>
<div className="characteristic" id="extreme-range">
<h4>Extreme Dynamic Range</h4>
<p>Romantic composers utilized the full spectrum of dynamic markings, from <em>pianissimo</em> (pp) up to <em>fortissimo</em> (ff). This extreme range allowed for unprecedented emotional expression and dramatic contrast.</p>
<ul>
<li><strong>pp (pianissimo):</strong> Very soft, used for intimate, mysterious, or distant effects</li>
<li><strong>p (piano):</strong> Soft, creating gentle or contemplative moods</li>
<li><strong>mp (mezzo-piano):</strong> Moderately soft</li>
<li><strong>mf (mezzo-forte):</strong> Moderately loud</li>
<li><strong>f (forte):</strong> Loud, for dramatic emphasis</li>
<li><strong>ff (fortissimo):</strong> Very loud, for climactic moments and grandeur</li>
</ul>
</div>
<div className="characteristic" id="gradual-dynamics">
<h4>Gradual Dynamic Changes</h4>
<p>The defining characteristic of Romantic dynamics is the frequent use of <strong>crescendo</strong> and <strong>diminuendo</strong> (or <em>decrescendo</em>) to gradually build and release emotional tension, supporting the intense expression central to the Romantic style.</p>
<ul>
<li><strong>Crescendo:</strong> Gradually getting louder, building tension and excitement</li>
<li><strong>Diminuendo/Decrescendo:</strong> Gradually getting softer, creating release or fade-away effects</li>
<li><strong>Extended builds:</strong> Long crescendos that span entire sections</li>
</ul>
</div>
<div className="characteristic" id="expressive-function">
<h4>Expressive and Dramatic Function</h4>
<p>Dynamics are employed dramatically to convey atmosphere, grandeur, and personal emotion. In programme music like <em>Vltava</em>, wide dynamic contrasts are used explicitly to illustrate the narrative and create vivid musical pictures.</p>
<ul>
<li><strong>Atmospheric effects:</strong> Soft dynamics for mysterious or peaceful scenes</li>
<li><strong>Dramatic climaxes:</strong> Loud dynamics for moments of triumph or conflict</li>
<li><strong>Emotional expression:</strong> Dynamic changes reflecting inner feelings</li>
</ul>
</div>
</section>
 Terminology Section 
<section id="terminology">
<h3>Essential Dynamic Terminology</h3>
<div className="terminology-grid">
<div className="term-card">
<h4>Basic Dynamics</h4>
<ul>
<li><strong>pp:</strong> pianissimo (very soft)</li>
<li><strong>p:</strong> piano (soft)</li>
<li><strong>mp:</strong> mezzo-piano (moderately soft)</li>
<li><strong>mf:</strong> mezzo-forte (moderately loud)</li>
<li><strong>f:</strong> forte (loud)</li>
<li><strong>ff:</strong> fortissimo (very loud)</li>
</ul>
</div>
<div className="term-card">
<h4>Gradual Changes</h4>
<ul>
<li><strong>crescendo (cresc.):</strong> gradually getting louder</li>
<li><strong>diminuendo (dim.):</strong> gradually getting softer</li>
<li><strong>decrescendo (decresc.):</strong> gradually getting softer</li>
</ul>
</div>
<div className="term-card">
<h4>Special Effects</h4>
<ul>
<li><strong>sforzando (sf/sfz):</strong> sudden strong accent</li>
<li><strong>fortepiano (fp):</strong> loud then immediately soft</li>
<li><strong>rinforzando (rf/rfz):</strong> sudden reinforcement</li>
</ul>
</div>
</div>
</section>
 Comparison Section 
<section id="comparison">
<h3>Comparison with Baroque Dynamics</h3>
<div className="comparison-table">
<div className="baroque-column">
<h4>Baroque Dynamics</h4>
<ul>
<li>Terraced dynamics (sudden changes)</li>
<li>Limited dynamic range</li>
<li>Functional rather than expressive</li>
<li>Echo effects and contrasts</li>
<li>Dynamics determined by instrumentation</li>
</ul>
</div>
<div className="romantic-column">
<h4>Romantic Dynamics</h4>
<ul>
<li>Gradual dynamic changes</li>
<li>Extreme dynamic range (pp to ff)</li>
<li>Highly expressive and emotional</li>
<li>Long crescendos and diminuendos</li>
<li>Dynamics as primary expressive tool</li>
</ul>
</div>
</div>
</section>
 Focus Work Examples 
<section id="focus-work-examples">
<h3>Focus Work: Smetana's <em>Vltava</em></h3>
<h4>Dynamic Examples in <em>Vltava</em></h4>
<div className="example" id="river-source">
<h5>1. The River Source</h5>
<p><strong>Dynamic Level:</strong> pp (pianissimo)</p>
<p><strong>Effect:</strong> The piece begins very softly with two flutes representing the two springs that form the river's source. The quiet dynamics create a sense of the river's humble beginnings.</p>
</div>
<div className="example" id="river-grows">
<h5>2. The River Grows</h5>
<p><strong>Dynamic Technique:</strong> Gradual crescendo</p>
<p><strong>Effect:</strong> As more instruments join, the dynamics gradually increase, musically depicting the river growing larger as tributaries join it.</p>
</div>
<div className="example" id="peasant-wedding">
<h5>3. Peasant Wedding</h5>
<p><strong>Dynamic Level:</strong> f (forte)</p>
<p><strong>Effect:</strong> The wedding scene is depicted with loud, celebratory dynamics, contrasting with the gentler river music.</p>
</div>
<div className="example" id="moonlight-dance">
<h5>4. Moonlight Dance of Water Nymphs</h5>
<p><strong>Dynamic Level:</strong> p to mp (piano to mezzo-piano)</p>
<p><strong>Effect:</strong> Soft, mysterious dynamics create the ethereal atmosphere of the supernatural dance.</p>
</div>
<div className="example" id="rapids">
<h5>5. St. John's Rapids</h5>
<p><strong>Dynamic Level:</strong> ff (fortissimo)</p>
<p><strong>Effect:</strong> The most dramatic section uses very loud dynamics to depict the turbulent, dangerous rapids.</p>
</div>
<div className="example" id="broad-river">
<h5>6. The Broad River</h5>
<p><strong>Dynamic Technique:</strong> Sustained f to ff</p>
<p><strong>Effect:</strong> The finale maintains loud dynamics to represent the river's grandeur as it flows through Prague.</p>
</div>
</section>
 Performance Practice 
<section id="performance-practice">
<h3>Performance Practice</h3>
<h4>Interpreting Romantic Dynamics</h4>
<ul>
<li><strong>Expressive Freedom:</strong> Performers have more interpretive freedom with dynamics than in earlier periods</li>
<li><strong>Gradual Changes:</strong> Crescendos and diminuendos should be smooth and expressive, not mechanical</li>
<li><strong>Extreme Contrasts:</strong> Don't be afraid of the full dynamic range - Romantic music requires bold contrasts</li>
<li><strong>Orchestral Balance:</strong> In orchestral music, dynamics must be balanced across all sections</li>
<li><strong>Emotional Connection:</strong> Dynamics should serve the emotional content of the music</li>
</ul>
<h4>Modern Performance Considerations</h4>
<ul>
<li><strong>Venue Acoustics:</strong> Adjust dynamic levels to suit the performance space</li>
<li><strong>Instrument Capabilities:</strong> Modern instruments can achieve greater dynamic ranges than period instruments</li>
<li><strong>Ensemble Size:</strong> Larger orchestras can achieve more extreme dynamics</li>
</ul>
</section>
 Assessment Focus 
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<h4>What You Need to Know</h4>
<ul>
<li>Identify dynamic markings from pp to ff</li>
<li>Recognize crescendo and diminuendo in musical examples</li>
<li>Understand how dynamics create emotional expression in Romantic music</li>
<li>Compare Romantic dynamics with other musical periods</li>
<li>Analyze the use of dynamics in programme music like <em>Vltava</em></li>
<li>Use correct terminology when describing dynamic effects</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Identify sudden dynamic changes vs. gradual changes</li>
<li>Recognize extreme dynamic contrasts</li>
<li>Understand how dynamics support musical narrative</li>
<li>Distinguish between functional and expressive use of dynamics</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default Romantic0101DynamicsPage;
