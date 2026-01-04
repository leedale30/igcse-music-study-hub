import React from 'react';
import { Link } from 'react-router-dom';

const Romantic0601GenreAndStylePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Genre And Style</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Genre And Style
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>6.1. Genre and Style: Classification and stylistic traits—baroque, reggae, gamelan, trap, etc.</h3>
<h4>Classification and Repertoire</h4>
<p>Romantic music continues the <strong>Western classical tradition</strong> (Areas of Study 1–3). The primary focus for this area is <strong>instrumental music</strong>, particularly large-scale, single-movement orchestral works and genres that allow for immense expressive freedom. The study focuses on movements such as the Symphonic Poem or Concert Overture.</p>
<h4>Stylistic Traits (Identifying Romantic Music)</h4>
<p>Candidates must identify features that highlight a move towards greater drama and subjectivity:</p>
<ul>
<li> <strong>Instrumentation and Orchestration:</strong> A central characteristic is the <strong>expansion of the orchestra</strong> (often referred to as the symphony orchestra or large orchestra). This expansion includes a wider range of percussion and the establishment of new wind instruments for distinct timbres, such as the <strong>piccolo, cor anglais, contrabassoon, and harp</strong>. Composers utilized orchestration as an artistic tool to achieve richer colors and textures.</li>
<li> <strong>Harmony and Tonality:</strong> Harmony becomes significantly more complex and colorful due to increased <strong>chromaticism</strong> (use of notes outside the main key) and <strong>dissonance</strong>. Key techniques include the frequent use of <strong>diminished seventh chords</strong> (for dramatic tension) and numerous, sometimes <strong>unexpected modulations</strong> (changes of key). Functional harmony is still used, but with added complexity.</li>
<li> <strong>Melody:</strong> Melodies are often <strong>long, lyrical (song-like), sweeping</strong>, and highly expressive, reflecting intense emotion. Melodic lines use a wide range to maximize dramatic impact.</li>
<li> <strong>Dynamics:</strong> Composers exploited the full dynamic range of the expanded orchestra, resulting in <strong>extreme or dramatic dynamics</strong>, ranging from quiet (<em>pp</em>) to very, very loud (<em>fff</em>). <strong>Gradual dynamic changes</strong> (crescendo and diminuendo) are paramount for building and releasing emotional tension.</li>
<li> <strong>Rhythm and Tempo:</strong> Composers often employed <strong>rubato</strong> (a flexible tempo) to allow performers expressive freedom. Rhythmic devices such as <strong>anacrusis</strong> (upbeat) and complex <strong>dotted rhythms</strong> may also be prominent.</li>
</ul>
<p>&gt; <strong>Example Focus Work:</strong> Smetana: <em>Vltava</em> (The Moldau) from <em>Ma Vlast</em>.</p>
<p>&gt; [PLACEHOLDER 1: Audio Extract illustrating the powerful, loud climax of the Vltava river theme played by the full, expanded orchestra, demonstrating the large dynamic range of the era.]</p>
<p>&gt; [Link to Smetana: Vltava (The Moldau) from Ma Vlast on YouTube (suggested for study): Candidates should listen for the development of the main theme, dramatic dynamic changes, and expansive orchestration.]</p>` }} />
      </div>
    </article>
  );
};

export default Romantic0601GenreAndStylePage;
