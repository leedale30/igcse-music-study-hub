import React from 'react';
import { Link } from 'react-router-dom';

const Romantic0110StructureFormPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Structure Form</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Structure Form
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
<p>Structure and form in Romantic music refer to the overall organization and architecture of musical compositions. Romantic composers approached form with greater flexibility than their Classical predecessors, often modifying traditional forms or creating entirely new structures to serve their expressive and programmatic needs. Form becomes a vehicle for storytelling, emotional expression, and the development of musical ideas over extended time spans.</p>
</section>
 Key Characteristics Section 
<section id="key-characteristics">
<h3>Key Characteristics of Romantic Structure/Form</h3>
<div className="characteristic" id="programmatic-form">
<h4>Programmatic and Narrative Forms</h4>
<p>Romantic composers often created forms that followed literary or pictorial programs, with the musical structure reflecting the narrative or descriptive content rather than abstract musical logic.</p>
<ul>
<li><strong>Programme music:</strong> Music that tells a story or depicts scenes</li>
<li><strong>Tone poems:</strong> Single-movement orchestral works with programmatic content</li>
<li><strong>Narrative structure:</strong> Musical form following a story line</li>
<li><strong>Descriptive sections:</strong> Musical episodes depicting specific scenes</li>
</ul>
</div>
<div className="characteristic" id="flexible-forms">
<h4>Flexible and Modified Traditional Forms</h4>
<p>While Romantic composers used traditional forms like sonata form, they modified them extensively to serve their expressive needs, creating more flexible and personalized structures.</p>
<ul>
<li><strong>Modified sonata form:</strong> Traditional form adapted for expression</li>
<li><strong>Through-composed:</strong> Continuous development without repetition</li>
<li><strong>Cyclic form:</strong> Themes returning throughout multi-movement works</li>
<li><strong>Free form:</strong> Structure determined by content rather than convention</li>
</ul>
</div>
<div className="characteristic" id="thematic-transformation">
<h4>Thematic Transformation and Development</h4>
<p>Romantic composers used sophisticated techniques of thematic transformation, where musical themes are varied and developed throughout a work to create unity and support programmatic content.</p>
<ul>
<li><strong>Leitmotif:</strong> Recurring themes associated with characters or ideas</li>
<li><strong>Thematic metamorphosis:</strong> Gradual transformation of themes</li>
<li><strong>Motivic development:</strong> Extensive development of small musical ideas</li>
<li><strong>Cyclic themes:</strong> Themes that return in different movements</li>
</ul>
</div>
<div className="characteristic" id="extended-structures">
<h4>Extended and Expanded Structures</h4>
<p>Romantic forms tend to be longer and more expansive than Classical forms, with extended development sections, longer transitions, and more elaborate codas that serve expressive purposes.</p>
<ul>
<li><strong>Extended development:</strong> Longer, more complex development sections</li>
<li><strong>Elaborate transitions:</strong> Extended passages connecting sections</li>
<li><strong>Expanded codas:</strong> Lengthy concluding sections</li>
<li><strong>Monumental scale:</strong> Large-scale structures for dramatic effect</li>
</ul>
</div>
</section>
 Terminology Section 
<section id="terminology">
<h3>Essential Structure/Form Terminology</h3>
<div className="terminology-grid">
<div className="term-card">
<h4>Basic Form Terms</h4>
<ul>
<li><strong>Form:</strong> The overall structure of a musical work</li>
<li><strong>Section:</strong> A distinct part of a musical form</li>
<li><strong>Theme:</strong> A main musical idea</li>
<li><strong>Episode:</strong> A contrasting section</li>
<li><strong>Transition:</strong> A passage connecting sections</li>
</ul>
</div>
<div className="term-card">
<h4>Programmatic Terms</h4>
<ul>
<li><strong>Programme music:</strong> Music with extra-musical content</li>
<li><strong>Tone poem:</strong> Single-movement programmatic work</li>
<li><strong>Leitmotif:</strong> Recurring theme for character/idea</li>
<li><strong>Idée fixe:</strong> Obsessive recurring theme</li>
<li><strong>Thematic transformation:</strong> Variation of themes</li>
</ul>
</div>
<div className="term-card">
<h4>Structural Terms</h4>
<ul>
<li><strong>Exposition:</strong> Initial presentation of themes</li>
<li><strong>Development:</strong> Working out of themes</li>
<li><strong>Recapitulation:</strong> Return of opening material</li>
<li><strong>Coda:</strong> Concluding section</li>
<li><strong>Through-composed:</strong> Continuous, non-repetitive form</li>
</ul>
</div>
</div>
</section>
 Comparison Section 
<section id="comparison">
<h3>Comparison with Baroque Structure/Form</h3>
<div className="comparison-table">
<div className="baroque-column">
<h4>Baroque Structure/Form</h4>
<ul>
<li>Clear, predictable formal patterns</li>
<li>Balanced, symmetrical structures</li>
<li>Functional approach to form</li>
<li>Limited thematic development</li>
<li>Consistent formal procedures</li>
</ul>
</div>
<div className="romantic-column">
<h4>Romantic Structure/Form</h4>
<ul>
<li>Flexible, expressive formal patterns</li>
<li>Asymmetrical, organic structures</li>
<li>Expressive approach to form</li>
<li>Extensive thematic development</li>
<li>Individualized formal procedures</li>
</ul>
</div>
</div>
</section>
 Focus Work Examples 
<section id="focus-work-examples">
<h3>Focus Work: Smetana's <em>Vltava</em></h3>
<h4>Structural Analysis of <em>Vltava</em></h4>
<div className="example" id="overall-structure">
<h5>Overall Form: Programmatic Tone Poem</h5>
<p><strong>Structure:</strong> Through-composed form following the river's journey</p>
<p><strong>Characteristics:</strong> The work follows a narrative structure rather than a traditional musical form, with each section representing a different stage of the river's journey from source to Prague.</p>
</div>
<div className="example" id="river-source-structure">
<h5>1. The River Source (Opening)</h5>
<p><strong>Structure:</strong> Introduction - two separate streams converging</p>
<p><strong>Musical Form:</strong> Two independent melodic lines (flutes) that gradually combine, representing the two mountain streams that form the river's source.</p>
</div>
<div className="example" id="main-theme-structure">
<h5>2. Main River Theme (Primary Section)</h5>
<p><strong>Structure:</strong> Statement and development of the river theme</p>
<p><strong>Musical Form:</strong> The famous river melody is presented and then developed through various orchestral treatments, establishing the main musical character of the work.</p>
</div>
<div className="example" id="hunting-structure">
<h5>3. Hunting Scene (Episode 1)</h5>
<p><strong>Structure:</strong> Contrasting episode in different key and character</p>
<p><strong>Musical Form:</strong> A complete contrasting section with its own themes and development, representing the royal hunt, before returning to the river theme.</p>
</div>
<div className="example" id="wedding-structure">
<h5>4. Peasant Wedding (Episode 2)</h5>
<p><strong>Structure:</strong> Folk-style episode with dance characteristics</p>
<p><strong>Musical Form:</strong> A section based on Czech folk dance patterns, with repetitive structures typical of folk music, contrasting with the flowing river theme.</p>
</div>
<div className="example" id="nymphs-structure">
<h5>5. Moonlight Dance of Water Nymphs (Episode 3)</h5>
<p><strong>Structure:</strong> Ethereal, atmospheric section</p>
<p><strong>Musical Form:</strong> A mysterious, floating section with less defined formal structure, creating an otherworldly atmosphere through impressionistic techniques.</p>
</div>
<div className="example" id="rapids-structure">
<h5>6. St. John's Rapids (Development/Crisis)</h5>
<p><strong>Structure:</strong> Turbulent development section</p>
<p><strong>Musical Form:</strong> An intense development of the river theme in a chaotic, fragmented manner, representing the dangerous rapids and serving as the work's climactic crisis point.</p>
</div>
<div className="example" id="final-structure">
<h5>7. Final Statement (Coda)</h5>
<p><strong>Structure:</strong> Triumphant conclusion and apotheosis</p>
<p><strong>Musical Form:</strong> The river theme returns in a triumphant, expanded form, representing the river's arrival in Prague and its historical significance, serving as a massive, celebratory coda.</p>
</div>
<div className="example" id="thematic-unity">
<h5>Thematic Unity</h5>
<p><strong>Unifying Elements:</strong> The river theme provides structural coherence</p>
<p><strong>Technique:</strong> Despite the episodic nature of the work, the recurring river theme and its transformations provide overall unity, demonstrating sophisticated thematic development techniques.</p>
</div>
</section>
 Performance Practice 
<section id="performance-practice">
<h3>Performance Practice</h3>
<h4>Interpreting Romantic Structure/Form</h4>
<ul>
<li><strong>Narrative awareness:</strong> Understand the programmatic content and how it shapes the form</li>
<li><strong>Sectional clarity:</strong> Make formal divisions clear through performance choices</li>
<li><strong>Thematic recognition:</strong> Highlight important themes and their transformations</li>
<li><strong>Structural pacing:</strong> Understand the large-scale pacing of the work</li>
<li><strong>Climax building:</strong> Build toward structural climaxes effectively</li>
</ul>
<h4>Ensemble Considerations</h4>
<ul>
<li><strong>Communication:</strong> Clear cues for formal transitions and changes</li>
<li><strong>Balance:</strong> Proper balance to clarify formal structure</li>
<li><strong>Timing:</strong> Coordinated execution of formal transitions</li>
<li><strong>Character:</strong> Distinct character for different formal sections</li>
</ul>
</section>
 Assessment Focus 
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<h4>What You Need to Know</h4>
<ul>
<li>Identify the overall form and structure of <em>Vltava</em></li>
<li>Understand how programmatic content shapes musical form</li>
<li>Compare Romantic forms with other musical periods</li>
<li>Analyze how themes are developed and transformed</li>
<li>Recognize different sections and their characteristics</li>
<li>Use correct terminology when describing musical form</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Identify when new sections begin in a piece</li>
<li>Recognize the return of themes and their variations</li>
<li>Understand how different sections relate to each other</li>
<li>Follow the narrative structure of programmatic works</li>
<li>Identify climactic points and their structural function</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default Romantic0110StructureFormPage;
