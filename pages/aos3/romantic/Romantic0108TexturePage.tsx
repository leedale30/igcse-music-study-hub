import React from 'react';
import { Link } from 'react-router-dom';

const Romantic0108TexturePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Texture</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Texture
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
<p>Texture in Romantic music refers to the way musical lines are woven together to create the fabric of the composition. Romantic composers used texture as a powerful expressive tool, creating rich, varied, and often complex musical textures that support the emotional and programmatic content of their works. Unlike the more predictable textures of earlier periods, Romantic texture is flexible and serves the expressive needs of the music.</p>
</section>
 Key Characteristics Section 
<section id="key-characteristics">
<h3>Key Characteristics of Romantic Texture</h3>
<div className="characteristic" id="expressive-texture">
<h4>Expressive and Programmatic Texture</h4>
<p>Romantic composers used texture to support the emotional and programmatic content of their music, with different textures representing different moods, characters, or scenes.</p>
<ul>
<li><strong>Mood representation:</strong> Texture chosen to match emotional content</li>
<li><strong>Character portrayal:</strong> Different textures for different characters</li>
<li><strong>Scene painting:</strong> Texture used to depict specific scenes</li>
<li><strong>Dramatic contrast:</strong> Sudden textural changes for effect</li>
</ul>
</div>
<div className="characteristic" id="rich-orchestration">
<h4>Rich Orchestral Textures</h4>
<p>The expanded Romantic orchestra allowed composers to create incredibly rich and varied textures, with multiple layers of sound and complex instrumental combinations.</p>
<ul>
<li><strong>Layered textures:</strong> Multiple independent musical lines</li>
<li><strong>Instrumental combinations:</strong> Creative use of orchestral sections</li>
<li><strong>Thick harmonies:</strong> Dense chord structures and voicings</li>
<li><strong>Coloristic effects:</strong> Texture used for orchestral color</li>
</ul>
</div>
<div className="characteristic" id="flexible-texture">
<h4>Flexible and Varied Texture</h4>
<p>Romantic music features constantly changing textures that serve the expressive needs of the music, moving fluidly between different textural types within a single piece.</p>
<ul>
<li><strong>Textural variety:</strong> Multiple texture types in one piece</li>
<li><strong>Smooth transitions:</strong> Gradual changes between textures</li>
<li><strong>Dramatic shifts:</strong> Sudden textural contrasts</li>
<li><strong>Developmental texture:</strong> Texture that evolves with the music</li>
</ul>
</div>
<div className="characteristic" id="melody-accompaniment">
<h4>Sophisticated Melody and Accompaniment</h4>
<p>While homophonic texture (melody with accompaniment) remains important in Romantic music, the accompaniment becomes much more sophisticated and expressive than in earlier periods.</p>
<ul>
<li><strong>Active accompaniment:</strong> Accompaniment with its own melodic interest</li>
<li><strong>Rhythmic complexity:</strong> Complex rhythmic patterns in accompaniment</li>
<li><strong>Harmonic richness:</strong> Rich harmonic support for melodies</li>
<li><strong>Textural dialogue:</strong> Conversation between melody and accompaniment</li>
</ul>
</div>
</section>
 Terminology Section 
<section id="terminology">
<h3>Essential Texture Terminology</h3>
<div className="terminology-grid">
<div className="term-card">
<h4>Basic Texture Types</h4>
<ul>
<li><strong>Monophonic:</strong> Single melodic line</li>
<li><strong>Homophonic:</strong> Melody with accompaniment</li>
<li><strong>Polyphonic:</strong> Multiple independent melodies</li>
<li><strong>Heterophonic:</strong> Variations of the same melody</li>
<li><strong>Homorhythmic:</strong> All parts moving together</li>
</ul>
</div>
<div className="term-card">
<h4>Orchestral Textures</h4>
<ul>
<li><strong>Tutti:</strong> Full orchestra playing</li>
<li><strong>Solo:</strong> Single instrument featured</li>
<li><strong>Sectional:</strong> Orchestra sections playing separately</li>
<li><strong>Chamber:</strong> Small group of instruments</li>
<li><strong>Divisi:</strong> String section divided into parts</li>
</ul>
</div>
<div className="term-card">
<h4>Textural Techniques</h4>
<ul>
<li><strong>Doubling:</strong> Same melody in multiple parts</li>
<li><strong>Countermelody:</strong> Secondary melody against main tune</li>
<li><strong>Ostinato:</strong> Repeated musical pattern</li>
<li><strong>Imitation:</strong> Melody repeated in different parts</li>
<li><strong>Canon:</strong> Strict imitation at regular intervals</li>
</ul>
</div>
</div>
</section>
 Comparison Section 
<section id="comparison">
<h3>Comparison with Baroque Texture</h3>
<div className="comparison-table">
<div className="baroque-column">
<h4>Baroque Texture</h4>
<ul>
<li>Consistent textural approach</li>
<li>Clear polyphonic or homophonic style</li>
<li>Functional accompaniment patterns</li>
<li>Structural use of texture</li>
<li>Limited textural variety</li>
</ul>
</div>
<div className="romantic-column">
<h4>Romantic Texture</h4>
<ul>
<li>Constantly changing texture</li>
<li>Mixed and flexible textural styles</li>
<li>Expressive accompaniment patterns</li>
<li>Programmatic use of texture</li>
<li>Rich textural variety</li>
</ul>
</div>
</div>
</section>
 Focus Work Examples 
<section id="focus-work-examples">
<h3>Focus Work: Smetana's <em>Vltava</em></h3>
<h4>Textural Examples in <em>Vltava</em></h4>
<div className="example" id="river-source-texture">
<h5>1. The River Source</h5>
<p><strong>Texture:</strong> Thin, transparent texture with solo flutes</p>
<p><strong>Effect:</strong> The sparse, delicate texture of two solo flutes creates an image of the small, clear streams that form the river's source, with the thin texture representing the modest beginning of the great river.</p>
</div>
<div className="example" id="main-theme-texture">
<h5>2. Main River Theme</h5>
<p><strong>Texture:</strong> Rich homophonic texture with melody and full orchestral accompaniment</p>
<p><strong>Effect:</strong> The full, rich texture represents the river in its mature state, flowing powerfully through the Czech countryside, with the orchestral accompaniment providing the sense of flowing water.</p>
</div>
<div className="example" id="hunting-texture">
<h5>3. Hunting Scene</h5>
<p><strong>Texture:</strong> Bright, energetic texture with prominent brass and horn calls</p>
<p><strong>Effect:</strong> The bold, outdoor texture with prominent horns and brass creates the atmosphere of a royal hunt, with the texture evoking the sounds of hunting horns echoing through the forest.</p>
</div>
<div className="example" id="wedding-texture">
<h5>4. Peasant Wedding</h5>
<p><strong>Texture:</strong> Folk-like homophonic texture with simple accompaniment</p>
<p><strong>Effect:</strong> The straightforward, unpretentious texture reflects the simple, honest character of Czech peasant life, with the accompaniment patterns imitating folk instruments like the accordion or fiddle.</p>
</div>
<div className="example" id="nymphs-texture">
<h5>5. Moonlight Dance of Water Nymphs</h5>
<p><strong>Texture:</strong> Ethereal, floating texture with delicate orchestration</p>
<p><strong>Effect:</strong> The light, shimmering texture creates a supernatural, otherworldly atmosphere, with delicate string techniques and soft winds evoking the mysterious dance of mythical water spirits.</p>
</div>
<div className="example" id="rapids-texture">
<h5>6. St. John's Rapids</h5>
<p><strong>Texture:</strong> Turbulent, complex texture with rapid scales and arpeggios</p>
<p><strong>Effect:</strong> The chaotic, dense texture represents the dangerous rapids, with multiple instrumental lines creating a sense of musical turbulence that mirrors the churning, dangerous water.</p>
</div>
<div className="example" id="final-texture">
<h5>7. Final Statement</h5>
<p><strong>Texture:</strong> Triumphant, full orchestral texture with brass fanfares</p>
<p><strong>Effect:</strong> The massive, celebratory texture represents the river's arrival in Prague and its historical significance, with the full orchestra creating a sense of national pride and triumph.</p>
</div>
</section>
 Performance Practice 
<section id="performance-practice">
<h3>Performance Practice</h3>
<h4>Interpreting Romantic Texture</h4>
<ul>
<li><strong>Balance:</strong> Maintain proper balance between melodic and accompanying parts</li>
<li><strong>Clarity:</strong> Ensure all important musical lines are clearly heard</li>
<li><strong>Blend:</strong> Create smooth, unified sound in homophonic passages</li>
<li><strong>Independence:</strong> Maintain independence of parts in polyphonic sections</li>
<li><strong>Expression:</strong> Use texture to support the emotional content</li>
</ul>
<h4>Ensemble Considerations</h4>
<ul>
<li><strong>Listening:</strong> Musicians must listen carefully to other parts</li>
<li><strong>Flexibility:</strong> Adapt playing style to different textural requirements</li>
<li><strong>Communication:</strong> Clear visual and musical communication between players</li>
<li><strong>Timing:</strong> Precise coordination in complex textural passages</li>
</ul>
</section>
 Assessment Focus 
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<h4>What You Need to Know</h4>
<ul>
<li>Identify different types of musical texture</li>
<li>Understand how texture supports programmatic content in <em>Vltava</em></li>
<li>Compare Romantic texture with other musical periods</li>
<li>Analyze how texture creates mood and character</li>
<li>Recognize textural changes and their effects</li>
<li>Use correct terminology when describing texture</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Distinguish between monophonic, homophonic, and polyphonic textures</li>
<li>Identify the main melody and accompaniment parts</li>
<li>Recognize when texture changes in a piece</li>
<li>Understand how texture contributes to the overall effect</li>
<li>Identify solo instruments and orchestral sections</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default Romantic0108TexturePage;
