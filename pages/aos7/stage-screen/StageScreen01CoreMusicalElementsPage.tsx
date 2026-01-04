import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen01CoreMusicalElementsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Core Musical Elements</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Core Musical Elements
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
        <div dangerouslySetInnerHTML={{ __html: `Introduction section 
<section>
<h3>Introduction to Music for Stage and Screen</h3>
<p>Music for Stage and Screen represents one of the most dynamic and expressive areas of musical composition, where sound directly serves visual storytelling. This area of study focuses on how musical features are chosen and combined to create atmosphere, tension, and excitement, supporting visual action in three key contexts: ballet, film music, and computer game music.</p>
<p>In this area, composers must master the art of musical storytelling, using every element of music to enhance the emotional impact of what audiences see on stage or screen. From the sweeping orchestral scores of epic films to the intricate electronic soundscapes of modern video games, music for stage and screen demands both technical mastery and deep understanding of dramatic narrative.</p>
</section>
 Overview of core musical elements 
<section>
<h3>Overview of Core Musical Elements</h3>
<p>The ten core musical elements take on special significance in music for stage and screen, each serving specific dramatic and narrative functions:</p>
<h4>Key Features of Each Element:</h4>
<ul>
<li><strong>Dynamics:</strong> Used to reflect dramatic events, build tension, and underscore action with extreme contrasts and gradual changes</li>
<li><strong>Rhythm:</strong> Drives action and emotion through ostinatos, loops, syncopation, and "Mickey Mousing" techniques</li>
<li><strong>Metre:</strong> Establishes mood and pace, from regular patterns to irregular metres for instability</li>
<li><strong>Tempo:</strong> Controlled to match visual pacing, with frequent changes and rubato for expression</li>
<li><strong>Pitch:</strong> Creates melodic identity and harmonic tension to support narrative development</li>
<li><strong>Melody:</strong> Features leitmotifs, fanfares, hooks, and ornamental techniques for character and thematic identity</li>
<li><strong>Harmony:</strong> Shapes emotional environment through dissonance, consonance, and chromatic relationships</li>
<li><strong>Tonality:</strong> Reflects mood through major/minor contrasts, modulation, and complex tonal relationships</li>
<li><strong>Timbre:</strong> Creates atmosphere through orchestral colors, extended techniques, and electronic sounds</li>
<li><strong>Structure/Form:</strong> Serves visual narrative through flexible, often through-composed forms</li>
</ul>
</section>
 Key characteristics 
<section>
<h3>Key Characteristics of Music for Stage and Screen</h3>
<h4>Ballet Music</h4>
<ul>
<li>Music precisely choreographed to support dance movement and dramatic narrative</li>
<li>Clear rhythmic patterns and melodic themes for dancers to follow</li>
<li>Orchestral scoring that creates atmosphere and emotional depth</li>
<li>Structural flexibility to accommodate choreographic requirements</li>
</ul>
<h4>Film Music</h4>
<ul>
<li>Leitmotif technique for character and thematic identification</li>
<li>Synchronization with visual action and dialogue</li>
<li>Emotional enhancement and atmospheric creation</li>
<li>Large orchestral forces and advanced recording techniques</li>
</ul>
<h4>Computer Game Music</h4>
<ul>
<li>Interactive and adaptive music that responds to player actions</li>
<li>Electronic and synthesized timbres alongside traditional instruments</li>
<li>Looping structures and seamless transitions</li>
<li>Integration with sound effects and environmental audio</li>
</ul>
</section>
 Focus concepts 
<section>
<h3>Essential Concepts for Analysis</h3>
<dl>
<dt><strong>Leitmotif</strong></dt>
<dd>Recurring musical theme associated with specific characters, ideas, or emotions</dd>
<dt><strong>Mickey Mousing</strong></dt>
<dd>Musical technique where music directly mirrors visual action</dd>
<dt><strong>Underscoring</strong></dt>
<dd>Background music that supports dialogue and action without overwhelming</dd>
<dt><strong>Diegetic vs. Non-diegetic</strong></dt>
<dd>Music that exists within the story world versus music added for audience</dd>
<dt><strong>Stinger</strong></dt>
<dd>Short musical accent that punctuates specific visual moments</dd>
<dt><strong>Build-up and Drop</strong></dt>
<dd>Tension-building techniques followed by release, common in game music</dd>
</dl>
</section>
 Assessment focus 
<section>
<h3>Assessment Focus</h3>
<p>When analyzing music for stage and screen, consider:</p>
<ul>
<li>How does the music support and enhance the visual narrative?</li>
<li>What techniques are used to create atmosphere and emotion?</li>
<li>How do musical elements synchronize with visual action?</li>
<li>What role do leitmotifs play in character and thematic development?</li>
<li>How does the composer balance musical interest with dramatic function?</li>
<li>What technologies and techniques are specific to the medium (ballet, film, games)?</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default StageScreen01CoreMusicalElementsPage;
