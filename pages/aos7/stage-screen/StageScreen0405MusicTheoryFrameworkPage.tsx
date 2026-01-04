import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen0405MusicTheoryFrameworkPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Music Theory Framework - Music For Stage And Screen Language, Literacy, And Theory</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Music Theory Framework - Music For Stage And Screen Language, Literacy, And Theory
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
        <div dangerouslySetInnerHTML={{ __html: `<h2>The theoretical system underpinning the music</h2>
<p>The framework extends the Western tonal system to include the complex harmonic language of 20th and 21st-century composers.</p>
<h3>Tonality and Scales</h3>
<p>You must recognize <strong>major and minor</strong> tonalities. However, the repertoire frequently utilizes <strong>chromaticism</strong> and <strong>dissonance</strong>. Twentieth-century works may use <strong>modal scales</strong> or the <strong>whole-tone scale</strong> for atmospheric effects.</p>
<h3>Harmony</h3>
<p>You must identify conventional Western harmony, including <strong>primary and secondary chords</strong>, <strong>dominant seventh</strong>, and <strong>diminished seventh</strong> chords. Crucially, you must recognize and describe <strong>dissonant</strong> and <strong>chromatic harmony</strong> used for dramatic effect.</p>
<h3>Texture</h3>
<p>You must recognize all major textures, including <strong>monophonic, homophonic, and polyphonic</strong>. For modern music, <strong>cluster chords</strong> are an essential texture term.</p>
<h3>Devices</h3>
<p>Mandatory devices used to create pace and tension include <strong>ostinato, repetition, ascending/descending sequence</strong>, and <strong>pedal notes</strong> (tonic and dominant pedal).</p>
<p><a href="aos07-04-04-oral-aural-tradition.html">← Previous: Oral/Aural Tradition</a></p>
<p><a href="../aos07-04-language-literacy-and-theory.html">← Back to Language, Literacy, and Theory</a></p>` }} />
      </div>
    </article>
  );
};

export default StageScreen0405MusicTheoryFrameworkPage;
