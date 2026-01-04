import React from 'react';
import { Link } from 'react-router-dom';

const Romantic0405MusicTheoryFrameworkPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Music Theory Framework - Romantic Music Language, Literacy, And Theory</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Music Theory Framework - Romantic Music Language, Literacy, And Theory
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
        <div dangerouslySetInnerHTML={{ __html: `<h2>The theoretical system underpinning the music</h2>
<p>Romantic music operates within an expanded and harmonically enriched Western theoretical framework.</p>
<h3>Tonality and Modulation</h3>
<p>Music is based on the <strong>major and minor key system</strong>, but modulation is frequent and complex. You must be able to recognize modulation to <strong>related keys</strong> (dominant, subdominant, relative major/minor). Harmony often employs <strong>Chromaticism</strong> and <strong>Dissonance</strong> to increase emotional impact and tension.</p>
<h3>Harmony</h3>
<p>You must identify <strong>Dominant Seventh</strong> and <strong>Diminished Seventh</strong> chords, which are used to create suspense and facilitate modulation. The use of <strong>pedal notes</strong> (tonic pedal, dominant pedal) is also required knowledge. You must be able to identify all three major cadences: <strong>perfect, imperfect, and interrupted</strong>.</p>
<h3>Structure</h3>
<p>Single-movement orchestral works frequently follow classical forms like <strong>Sonata Form</strong>, or are <strong>Through-composed</strong> if they strictly follow a narrative.</p>
<h3>Devices and Texture</h3>
<p>You must recognize <strong>Homophonic</strong> texture (melody and accompaniment) and technical devices such as <strong>repetition</strong>, <strong>ascending/descending sequence</strong>, <strong>imitation</strong>, and <strong>ostinato</strong>.</p>
<p><a href="aos03-04-04-oral-aural-tradition.html">← Previous: Oral/Aural Tradition</a></p>
<p><a href="../aos03-04-language-literacy-and-theory.html">← Back to Language, Literacy, and Theory</a></p>` }} />
      </div>
    </article>
  );
};

export default Romantic0405MusicTheoryFrameworkPage;
