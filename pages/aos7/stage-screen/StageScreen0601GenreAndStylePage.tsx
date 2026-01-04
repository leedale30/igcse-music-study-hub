import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen0601GenreAndStylePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Genre And Style</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Genre And Style
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>6.1. Genre and Style: Classification and stylistic traits</h3>
<h4>Classification</h4>
<p>Area of Study 7 examines music written from the early twentieth century to the present day. This music belongs to various styles, including the latter end of the Western classical tradition (Ballet, Film scores) and contemporary genres (Computer Game music, using pop/electronic influences). Focus genres are <strong>Ballet Music</strong>, <strong>Film Music</strong>, and <strong>Computer Game Music</strong>.</p>
<h4>Stylistic Traits (How Music Supports Narrative and Action)</h4>
<p>Candidates must identify how musical elements are chosen to maximize dramatic effect and visual synchronization.</p>
<ul>
<li> <strong>Musical Devices (Thematic Material):</strong> Composers rely heavily on identifiable, recurring musical ideas:</li>
<li> <strong>Leitmotifs</strong> are essential—short, recurring musical themes associated with specific characters, ideas, emotions, or scenes (e.g., John Williams’ use of themes for characters in <em>Star Wars</em>).</li>
<li> <strong>Ostinatos</strong> (repeated patterns) and <strong>loops</strong> are frequently used, particularly in film and game music, to build tension and provide exciting accompaniment.</li>
<li> <strong>Polyrhythm</strong> and <strong>complex/constantly changing time signatures</strong> (e.g., Stravinsky’s <em>The Rite of Spring</em>) are stylistic markers in ballet music, used to create agitated or unpredictable effects.</li>
<li>  Specific techniques like <strong>hocketing</strong> (a single melody passed rapidly between different parts) may be heard in game scores.</li>
</ul>
<ul>
<li> <strong>Harmony and Tonality:</strong></li>
<li> <strong>Major</strong> or <strong>minor scales</strong> and tonality are used to represent <strong>binary emotions</strong> (e.g., happy/sad).</li>
<li> <strong>Dissonance</strong> and <strong>Chromaticism</strong> are utilized to create tension and dramatic effect.</li>
<li> <strong>Diminished</strong> or <strong>augmented intervals</strong> are critical for building suspense and drama.</li>
<li>  The <strong>whole-tone scale</strong> is frequently employed to support flashbacks or dream sequences, creating an unsettling atmosphere.</li>
</ul>
<ul>
<li> <strong>Instrumentation (Timbre and Palette):</strong> The selection of instruments is dictated by the visual needs of the action.</li>
<li> <strong>Orchestra Size:</strong> Composers employ orchestras of varying sizes, often large for loud, dynamic soundtracks.</li>
<li> <strong>Electronic Sounds:</strong> <strong>Electronic synthesizers</strong> (like the Moog) are commonly used to expand the sonic palette, create <strong>otherworldly atmospheres</strong>, or due to budget limitations.</li>
<li> <strong>Thematic Instruments:</strong> Specific instruments evoke themes (e.g., brass for military themes, horns for heroes, violins/high cellos for romance).</li>
</ul>
<p>&gt; [PLACEHOLDER 1: Audio Extract: John Williams: Imperial March from <em>Star Wars</em>. Candidates should listen for the minor key, homophonic texture, string <em>ostinato</em> in triplets, and fanfare melody in the brass.]</p>
<p>&gt; [Link to John Williams: Imperial March from Star Wars on YouTube: https://www.youtube.com/watch?v=-bzWSJG93P8]</p>` }} />
      </div>
    </article>
  );
};

export default StageScreen0601GenreAndStylePage;
