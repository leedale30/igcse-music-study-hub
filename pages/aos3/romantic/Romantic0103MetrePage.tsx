import React from 'react';
import { Link } from 'react-router-dom';

const Romantic0103MetrePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Metre</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Metre
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
<p>In Romantic music, metre refers to the organization of beats into regular patterns, creating the underlying pulse and rhythmic framework. Romantic composers expanded metrical possibilities beyond the simple patterns of earlier periods, using metre as an expressive tool to enhance emotional content and support programmatic narratives.</p>
</section>
 Key Characteristics Section 
<section id="key-characteristics">
<h3>Key Characteristics of Romantic Metre</h3>
<div className="characteristic" id="varied-metres">
<h4>Varied and Complex Metres</h4>
<p>Romantic composers employed a wider range of metres than their predecessors, including compound metres, irregular metres, and frequent metre changes to create expressive variety and support dramatic content.</p>
<ul>
<li><strong>Simple metres:</strong> 2/4, 3/4, 4/4 (basic patterns)</li>
<li><strong>Compound metres:</strong> 6/8, 9/8, 12/8 (grouped in threes)</li>
<li><strong>Mixed metres:</strong> Alternating between different metres</li>
<li><strong>Irregular metres:</strong> 5/4, 7/8, and other asymmetrical patterns</li>
</ul>
</div>
<div className="characteristic" id="expressive-metre">
<h4>Expressive Use of Metre</h4>
<p>Metre in Romantic music serves expressive purposes, with different metres chosen to evoke specific moods, characters, or dramatic situations. The choice of metre becomes part of the emotional language of the music.</p>
<ul>
<li><strong>3/4 metre:</strong> Often used for waltzes, creating elegance and flow</li>
<li><strong>6/8 metre:</strong> Creates lilting, flowing character</li>
<li><strong>4/4 metre:</strong> Provides stability and grandeur</li>
<li><strong>2/4 metre:</strong> Creates march-like or dance-like character</li>
</ul>
</div>
<div className="characteristic" id="programmatic-metre">
<h4>Programmatic and Descriptive Metre</h4>
<p>In programme music like <em>Vltava</em>, metre is used descriptively to represent different scenes, activities, and natural phenomena, making the musical narrative more vivid and comprehensible.</p>
<ul>
<li><strong>Flowing metres:</strong> Representing water movement</li>
<li><strong>Dance metres:</strong> Depicting folk celebrations</li>
<li><strong>March metres:</strong> Suggesting processions or ceremonies</li>
<li><strong>Irregular metres:</strong> Creating tension or supernatural effects</li>
</ul>
</div>
</section>
 Terminology Section 
<section id="terminology">
<h3>Essential Metre Terminology</h3>
<div className="terminology-grid">
<div className="term-card">
<h4>Simple Metres</h4>
<ul>
<li><strong>2/4:</strong> Two quarter-note beats per bar</li>
<li><strong>3/4:</strong> Three quarter-note beats per bar</li>
<li><strong>4/4:</strong> Four quarter-note beats per bar</li>
<li><strong>2/2:</strong> Two half-note beats per bar</li>
</ul>
</div>
<div className="term-card">
<h4>Compound Metres</h4>
<ul>
<li><strong>6/8:</strong> Two dotted quarter-note beats</li>
<li><strong>9/8:</strong> Three dotted quarter-note beats</li>
<li><strong>12/8:</strong> Four dotted quarter-note beats</li>
<li><strong>6/4:</strong> Two dotted half-note beats</li>
</ul>
</div>
<div className="term-card">
<h4>Metrical Concepts</h4>
<ul>
<li><strong>Downbeat:</strong> First beat of the bar</li>
<li><strong>Upbeat:</strong> Weak beat before downbeat</li>
<li><strong>Strong beat:</strong> Emphasized beats</li>
<li><strong>Weak beat:</strong> Unemphasized beats</li>
<li><strong>Syncopation:</strong> Off-beat emphasis</li>
</ul>
</div>
</div>
</section>
 Comparison Section 
<section id="comparison">
<h3>Comparison with Baroque Metre</h3>
<div className="comparison-table">
<div className="baroque-column">
<h4>Baroque Metre</h4>
<ul>
<li>Consistent metre throughout movements</li>
<li>Limited variety of metres</li>
<li>Functional rather than expressive</li>
<li>Clear, regular patterns</li>
<li>Metre determined by dance forms</li>
</ul>
</div>
<div className="romantic-column">
<h4>Romantic Metre</h4>
<ul>
<li>Frequent metre changes within pieces</li>
<li>Wide variety of metres used</li>
<li>Highly expressive and character-driven</li>
<li>Flexible and varied patterns</li>
<li>Metre chosen for emotional effect</li>
</ul>
</div>
</div>
</section>
 Focus Work Examples 
<section id="focus-work-examples">
<h3>Focus Work: Smetana's <em>Vltava</em></h3>
<h4>Metrical Examples in <em>Vltava</em></h4>
<div className="example" id="river-source-metre">
<h5>1. The River Source</h5>
<p><strong>Metre:</strong> 6/8 (compound duple)</p>
<p><strong>Effect:</strong> The 6/8 metre creates a gentle, flowing character that perfectly represents the bubbling springs. The compound metre gives a lilting quality that mimics the natural movement of water.</p>
</div>
<div className="example" id="main-theme-metre">
<h5>2. Main River Theme</h5>
<p><strong>Metre:</strong> 6/8 continuing</p>
<p><strong>Effect:</strong> The consistent 6/8 metre throughout the main river theme creates a sense of continuous flow, representing the river's steady journey through the landscape.</p>
</div>
<div className="example" id="hunting-scene-metre">
<h5>3. Hunting Scene</h5>
<p><strong>Metre:</strong> 6/8 with strong emphasis</p>
<p><strong>Effect:</strong> The same 6/8 metre is transformed through rhythmic emphasis and orchestration to create the excitement of the hunt, showing how metre can be varied expressively.</p>
</div>
<div className="example" id="peasant-wedding-metre">
<h5>4. Peasant Wedding</h5>
<p><strong>Metre:</strong> 2/4 (simple duple)</p>
<p><strong>Effect:</strong> The change to 2/4 metre creates a lively, dance-like character typical of Czech folk music, contrasting with the flowing 6/8 of the river music.</p>
</div>
<div className="example" id="moonlight-metre">
<h5>5. Moonlight Dance of Water Nymphs</h5>
<p><strong>Metre:</strong> 3/4 (simple triple)</p>
<p><strong>Effect:</strong> The 3/4 metre creates a waltz-like, ethereal quality that enhances the supernatural, otherworldly atmosphere of the nymphs' dance.</p>
</div>
<div className="example" id="rapids-metre">
<h5>6. St. John's Rapids</h5>
<p><strong>Metre:</strong> 6/8 with irregular accents</p>
<p><strong>Effect:</strong> The return to 6/8 metre but with irregular accents and cross-rhythms creates the turbulent, chaotic character of the dangerous rapids.</p>
</div>
</section>
 Performance Practice 
<section id="performance-practice">
<h3>Performance Practice</h3>
<h4>Interpreting Romantic Metre</h4>
<ul>
<li><strong>Metrical Flexibility:</strong> Allow for expressive rubato within the metrical framework</li>
<li><strong>Character Recognition:</strong> Understand how different metres create different characters</li>
<li><strong>Transition Smoothness:</strong> Make metre changes smooth and musical</li>
<li><strong>Programmatic Support:</strong> Use metre to support the musical narrative</li>
<li><strong>Ensemble Coordination:</strong> Maintain clear metrical pulse in ensemble playing</li>
</ul>
<h4>Modern Performance Considerations</h4>
<ul>
<li><strong>Conductor's Beat:</strong> Clear conducting patterns for complex metres</li>
<li><strong>Metronome Use:</strong> Balance mechanical precision with expressive freedom</li>
<li><strong>Recording Standards:</strong> Modern expectations for metrical accuracy</li>
</ul>
</section>
 Assessment Focus 
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<h4>What You Need to Know</h4>
<ul>
<li>Identify simple and compound metres</li>
<li>Recognize metre changes within pieces</li>
<li>Understand how metre creates musical character</li>
<li>Compare Romantic metre with other musical periods</li>
<li>Analyze how metre supports programmatic content in <em>Vltava</em></li>
<li>Use correct terminology when describing metrical effects</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Count beats and identify metre signatures</li>
<li>Recognize strong and weak beats</li>
<li>Distinguish between simple and compound metres</li>
<li>Identify metre changes and their expressive effects</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default Romantic0103MetrePage;
