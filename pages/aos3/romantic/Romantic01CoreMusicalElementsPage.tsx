import React from 'react';
import { Link } from 'react-router-dom';

const Romantic01CoreMusicalElementsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Core Musical Elements</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Core Musical Elements
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
        <div dangerouslySetInnerHTML={{ __html: `Introduction Section 
<section id="introduction">
<h3>Introduction to Romantic Music</h3>
<p>Romantic music (c. 1810–1900) is characterized by intensive emotional expression, expansive structural freedom, and the unprecedented growth of orchestral resources. This period represents a dramatic shift from the balanced restraint of the Classical era to music that prioritizes individual emotion, programmatic content, and nationalist identity.</p>
<p>The Romantic era saw composers pushing the boundaries of musical expression through expanded orchestras, complex harmonies, and innovative forms. Music became a vehicle for storytelling, with programme music and symphonic poems becoming prominent genres.</p>
</section>
 Overview Section 
<section id="overview">
<h3>Overview of Core Musical Elements</h3>
<div className="elements-grid">
<!-- Each element will have its own card-like section -->
<div className="element-card" id="dynamics-overview">
<h4>1. Dynamics</h4>
<p><strong>Definition:</strong> The volume levels and expressive changes throughout a piece</p>
<p><strong>Key Features:</strong> Extreme range from pp to ff, frequent use of crescendo and diminuendo, dramatic contrasts for emotional expression</p>
</div>
<div className="element-card" id="rhythm-overview">
<h4>2. Rhythm</h4>
<p><strong>Definition:</strong> The pattern of beats, accents, and durations that drive the music forward</p>
<p><strong>Key Features:</strong> Rhythmic flexibility with rubato, complex patterns including syncopation and cross-rhythm, nationalist dance rhythms</p>
</div>
<div className="element-card" id="metre-overview">
<h4>3. Metre</h4>
<p><strong>Definition:</strong> The underlying pulse and time signature that organises rhythmic patterns</p>
<p><strong>Key Features:</strong> Standard metres with metric ambiguity, use of hemiola, irregular metre for expressive freedom</p>
</div>
<div className="element-card" id="tempo-overview">
<h4>4. Tempo</h4>
<p><strong>Definition:</strong> The speed at which the music is performed, often affecting mood and style</p>
<p><strong>Key Features:</strong> Tempo as dramatic tool, frequent fluctuations, expressive rubato for individual interpretation</p>
</div>
<div className="element-card" id="melody-overview">
<h4>5. Melody</h4>
<p><strong>Definition:</strong> The main tune or linear sequence of pitches that forms the musical identity</p>
<p><strong>Key Features:</strong> Highly lyrical and song-like, extensive ornamentation, use of leitmotifs, folk melody influences</p>
</div>
<div className="element-card" id="harmony-overview">
<h4>6. Harmony</h4>
<p><strong>Definition:</strong> The vertical stacking of pitches that supports or contrasts the melody</p>
<p><strong>Key Features:</strong> Rich chromaticism, increased dissonance, diminished seventh chords, complex modulations</p>
</div>
<div className="element-card" id="tonality-overview">
<h4>7. Tonality</h4>
<p><strong>Definition:</strong> The key centre or modal system that governs pitch relationships</p>
<p><strong>Key Features:</strong> Major/minor system with increased freedom, rapid modulation to distant keys, tertiary relationships</p>
</div>
<div className="element-card" id="texture-overview">
<h4>8. Texture</h4>
<p><strong>Definition:</strong> The layering of musical lines—monophonic, polyphonic, homophonic, etc.</p>
<p><strong>Key Features:</strong> Rich homophonic texture, unprecedented density from expanded orchestra, complex layering</p>
</div>
<div className="element-card" id="timbre-overview">
<h4>9. Timbre</h4>
<p><strong>Definition:</strong> The unique sound quality or colour of voices and instruments</p>
<p><strong>Key Features:</strong> Massive orchestral expansion, new instruments, valve brass innovation, expressive colour pursuit</p>
</div>
<div className="element-card" id="structure-overview">
<h4>10. Structure/Form</h4>
<p><strong>Definition:</strong> The overall shape and organisation of musical sections</p>
<p><strong>Key Features:</strong> Programme music forms, symphonic poems, sectional structures following narrative rather than rigid classical forms</p>
</div>
</div>
</section>
 Focus Work Section 
<section id="focus-work">
<h3>Focus Work: Smetana's <em>Vltava</em></h3>
<p><strong>Composer:</strong> Bedřich Smetana (1824-1884)</p>
<p><strong>Genre:</strong> Symphonic Poem (Tone Poem)</p>
<p><strong>Date:</strong> 1874</p>
<h4>About the Work</h4>
<p><em>Vltava</em> (The Moldau) is the second of six symphonic poems in Smetana's cycle <em>Má vlast</em> (My Homeland). This programmatic work follows the course of the Vltava River from its source in the Bohemian Forest through the Czech countryside to Prague.</p>
<h4>Musical Characteristics</h4>
<ul>
<li><strong>Programme Music:</strong> Depicts the river's journey with specific musical episodes</li>
<li><strong>Nationalist Elements:</strong> Incorporates Czech folk melodies and dance rhythms</li>
<li><strong>Orchestral Expansion:</strong> Uses the full resources of the Romantic orchestra</li>
<li><strong>Thematic Transformation:</strong> The main river theme appears in various forms throughout</li>
<li><strong>Descriptive Sections:</strong> Forest hunt, peasant wedding, moonlight dance of water nymphs, St. John's Rapids, broad river finale</li>
</ul>
<h4>Relevance to Core Elements</h4>
<p><em>Vltava</em> exemplifies all ten core musical elements of the Romantic period, from its dramatic dynamic contrasts and flexible rhythms to its rich orchestral timbres and programmatic structure. The work demonstrates how Romantic composers used musical elements to tell stories and express national identity.</p>
</section>
 Assessment Focus 
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<p>For IGCSE Music Component 1 (Listening), students must be able to:</p>
<ul>
<li>Identify and describe the characteristic features of Romantic music</li>
<li>Recognize how musical elements are used for emotional and programmatic expression</li>
<li>Understand the expansion of orchestral resources and their impact on timbre</li>
<li>Analyze the relationship between music and extra-musical ideas</li>
<li>Compare Romantic characteristics with other musical periods</li>
<li>Use appropriate musical terminology when describing Romantic music</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default Romantic01CoreMusicalElementsPage;
