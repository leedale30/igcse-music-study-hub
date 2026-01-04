import React from 'react';
import { Link } from 'react-router-dom';

const Romantic0401SpecificTerminologyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Specific Terminology - Romantic Music Language, Literacy, And Theory</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Specific Terminology - Romantic Music Language, Literacy, And Theory
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
        <div dangerouslySetInnerHTML={{ __html: `<h2>Genre-specific vocabulary</h2>
<p>You must acquire and use advanced musical vocabulary to accurately describe the expressive, large-scale, and programmatic nature of Romantic music.</p>
<h3>Genre</h3>
<p><strong>Programme Music:</strong> Instrumental music that tells a story or sets a scene without using words. The Focus Work, Smetana's <em>Vltava</em>, is an example of a <strong>Symphonic Poem</strong> (or tone poem), a single-movement orchestral work, typically programmatic.</p>
<h3>Orchestration &amp; Timbre</h3>
<p>Terminology related to the <strong>expansion of the orchestra</strong>. This includes instruments like the <strong>Tuba</strong> (lowest brass instrument), <strong>Piccolo</strong> (highest woodwind), <strong>Cor Anglais</strong> (alto oboe), <strong>Contrabassoon</strong> (lowest woodwind), and <strong>Harp</strong>. You must be able to describe orchestration and arrangement using terms like <strong>Scored</strong>.</p>
<h3>Melody &amp; Device</h3>
<p><strong>Leitmotif:</strong> A recurring musical theme associated with a particular person, idea, object, or emotion, highly prominent in Romantic music. Melodies are often <strong>Lyrical</strong> (rich and song-like).</p>
<h3>Rhythm</h3>
<p><strong>Rubato:</strong> A flexible approach to tempo where the speed is slightly varied for intense expressive purposes. You must also recognize traditional dance forms integrated for national identity, such as the <strong>Polka</strong>.</p>
<h3>Structure</h3>
<p>When dealing with overtures (like Mendelssohn's <em>A Midsummer Night's Dream overture</em>), you must apply the full vocabulary of <strong>Sonata Form</strong> (Exposition, Development, Recapitulation, Transition, Coda). You must also recognize <strong>Concert Overture</strong>.</p>
<p><a href="../aos03-04-language-literacy-and-theory.html">← Back to Language, Literacy, and Theory</a></p>
<p><a href="aos03-04-02-lyrics-text-analysis.html">Next: Lyrics &amp; Text Analysis →</a></p>` }} />
      </div>
    </article>
  );
};

export default Romantic0401SpecificTerminologyPage;
