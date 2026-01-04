import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen0108TexturePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Texture</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Texture
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 7 • Music for Stage and Screen
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
        <div dangerouslySetInnerHTML={{ __html: `<section id="introduction">
<h3>Understanding Texture in Music for Stage and Screen</h3>
<p>Texture in music for stage and screen refers to the way musical lines and layers are combined and arranged. It plays a crucial role in creating atmosphere, supporting dramatic action, and enhancing the visual elements of ballet, film, and computer games. The choice of texture can dramatically affect the emotional impact and clarity of the musical message.</p>
</section>
<section id="ballet-texture">
<h3>Texture in Ballet</h3>
<h4>Classical Ballet Texture</h4>
<ul>
<li><strong>Homophonic texture:</strong> Melody with harmonic accompaniment for clear character themes</li>
<li><strong>Orchestral layers:</strong> Different instrument families providing distinct textural layers</li>
<li><strong>Solo passages:</strong> Single instruments highlighting individual characters</li>
<li><strong>Tutti sections:</strong> Full orchestra for dramatic climaxes</li>
</ul>
<h4>Character-Based Texture</h4>
<ul>
<li><strong>Principal dancers:</strong> Clear melodic lines with supportive accompaniment</li>
<li><strong>Corps de ballet:</strong> Rhythmic, homophonic textures for group scenes</li>
<li><strong>Pas de deux:</strong> Interweaving melodic lines representing two characters</li>
<li><strong>Ensemble scenes:</strong> Complex polyphonic textures for crowd scenes</li>
</ul>
<h4>Modern Ballet Texture</h4>
<ul>
<li><strong>Minimalist textures:</strong> Sparse arrangements with focus on rhythm and movement</li>
<li><strong>Electronic layers:</strong> Synthesized sounds combined with acoustic instruments</li>
<li><strong>Prepared instruments:</strong> Extended techniques creating new textural possibilities</li>
<li><strong>Aleatoric textures:</strong> Controlled improvisation creating unpredictable layers</li>
</ul>
</section>
<section id="film-texture">
<h3>Texture in Film Music</h3>
<h4>Narrative Texture</h4>
<ul>
<li><strong>Leitmotif layering:</strong> Multiple character themes sounding simultaneously</li>
<li><strong>Dialogue support:</strong> Sparse textures that don't compete with speech</li>
<li><strong>Action sequences:</strong> Dense, driving textures for excitement</li>
<li><strong>Emotional scenes:</strong> Rich, lush textures for maximum impact</li>
</ul>
<h4>Cinematic Texture Techniques</h4>
<ul>
<li><strong>Ostinato patterns:</strong> Repeated figures creating tension and momentum</li>
<li><strong>Countermelodies:</strong> Secondary melodic lines adding complexity</li>
<li><strong>Pedal points:</strong> Sustained notes providing harmonic foundation</li>
<li><strong>Textural crescendo:</strong> Gradual addition of layers for building tension</li>
</ul>
<h4>Genre-Specific Texture</h4>
<ul>
<li><strong>Horror films:</strong> Sparse, unsettling textures with sudden dense passages</li>
<li><strong>Romance films:</strong> Lush, warm textures with flowing melodic lines</li>
<li><strong>Action films:</strong> Rhythmic, percussive textures with driving momentum</li>
<li><strong>Drama films:</strong> Varied textures reflecting emotional complexity</li>
</ul>
</section>
<section id="computer-game-texture">
<h3>Texture in Computer Game Music</h3>
<h4>Interactive Texture</h4>
<ul>
<li><strong>Adaptive layers:</strong> Textural complexity that changes based on gameplay</li>
<li><strong>Seamless transitions:</strong> Smooth textural changes for continuous play</li>
<li><strong>Modular composition:</strong> Textural elements that can be combined in different ways</li>
</ul>
<h4>Environmental Texture</h4>
<ul>
<li><strong>Ambient textures:</strong> Atmospheric backgrounds for exploration</li>
<li><strong>Combat textures:</strong> Intense, driving layers for battle sequences</li>
<li><strong>Puzzle textures:</strong> Minimal, non-distracting arrangements</li>
<li><strong>Cutscene textures:</strong> Cinematic arrangements for story sequences</li>
</ul>
<h4>Technical Considerations</h4>
<ul>
<li><strong>Memory limitations:</strong> Efficient use of textural elements</li>
<li><strong>Looping requirements:</strong> Textures designed for seamless repetition</li>
<li><strong>Dynamic range:</strong> Textures that work across different audio systems</li>
<li><strong>Player agency:</strong> Textures that respond to player actions</li>
</ul>
</section>
<section id="textural-types">
<h3>Essential Textural Types and Techniques</h3>
<h4>Basic Texture Types</h4>
<ul>
<li><strong>Monophonic:</strong> Single melodic line without accompaniment</li>
<li><strong>Homophonic:</strong> Melody with harmonic accompaniment</li>
<li><strong>Polyphonic:</strong> Multiple independent melodic lines</li>
<li><strong>Heterophonic:</strong> Variations of the same melody played simultaneously</li>
</ul>
<h4>Orchestral Textures</h4>
<ul>
<li><strong>Unison:</strong> All instruments playing the same melody</li>
<li><strong>Octave doubling:</strong> Melody played in multiple octaves</li>
<li><strong>Homorhythmic:</strong> All parts moving in the same rhythm</li>
<li><strong>Contrapuntal:</strong> Independent rhythmic and melodic lines</li>
</ul>
<h4>Modern Textural Techniques</h4>
<ul>
<li><strong>Klangfarbenmelodie:</strong> Melody distributed across different timbres</li>
<li><strong>Pointillism:</strong> Sparse texture with isolated notes</li>
<li><strong>Clusters:</strong> Dense groupings of adjacent pitches</li>
<li><strong>Micropolyphony:</strong> Many independent lines creating textural mass</li>
</ul>
<h4>Electronic Textures</h4>
<ul>
<li><strong>Layered synthesis:</strong> Multiple synthesized sounds combined</li>
<li><strong>Sampling textures:</strong> Recorded sounds manipulated and layered</li>
<li><strong>Granular synthesis:</strong> Textures created from tiny sound particles</li>
<li><strong>Algorithmic textures:</strong> Computer-generated textural patterns</li>
</ul>
</section>
<section id="analysis-points">
<h3>Key Points for Analysis and Assessment</h3>
<h4>Textural Analysis</h4>
<ul>
<li>Identify the basic texture type (monophonic, homophonic, polyphonic)</li>
<li>Analyze how textural layers support the dramatic content</li>
<li>Examine the relationship between texture and other musical elements</li>
<li>Consider how texture changes throughout the piece</li>
</ul>
<h4>Contextual Understanding</h4>
<ul>
<li>How does texture serve the dramatic narrative?</li>
<li>What textural techniques create specific moods or atmospheres?</li>
<li>How do textural changes support character or plot development?</li>
<li>What is the relationship between texture and visual elements?</li>
</ul>
<h4>Technical Terminology</h4>
<ul>
<li>Use appropriate textural terminology in analysis</li>
<li>Identify specific textural techniques and their effects</li>
<li>Describe the role of different instrumental layers</li>
<li>Explain the function of texture within the dramatic context</li>
</ul>
</section>
<section id="assessment-focus">
<h3>Assessment Focus Areas</h3>
<p><strong>Note:</strong> While all core musical elements are important for understanding music for stage and screen, assessment will focus on specific elements as outlined in the syllabus. Students should be prepared to analyze and discuss texture in the context of the prescribed focus works and their understanding of how textural techniques serve dramatic and narrative purposes.</p>
</section>` }} />
      </div>
    </article>
  );
};

export default StageScreen0108TexturePage;
