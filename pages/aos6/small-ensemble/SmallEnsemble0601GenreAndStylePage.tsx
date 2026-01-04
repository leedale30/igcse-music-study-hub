import React from 'react';
import { Link } from 'react-router-dom';

const SmallEnsemble0601GenreAndStylePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/small-ensemble" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Small Ensemble</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Genre And Style</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Genre And Style
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 6 • Music for Small Ensemble
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
<h4>Classification</h4>
<p>Area of Study 6 encompasses music from cultures around the world. The focus is on three specific non-Western traditions, typically performed by small ensembles:</p>
<p>1.  <strong>Silk and Bamboo Ensembles (Sizhu):</strong> Chinese music emphasizing strings (silk) and winds (bamboo).</p>
<p>2.  <strong>Hindustani Classical Music:</strong> Instrumental music from Northern India, structured by melodic and rhythmic cycles.</p>
<p>3.  <strong>Arab Takht Ensembles:</strong> Instrumental music from the Eastern Arab world, traditionally a small ensemble.</p>
<h4>Stylistic Traits (Identifying Features)</h4>
<p>Candidates must identify features based on the specific music theory of each tradition:</p>
<div className="table-responsive"><table className="table table-bordered"><thead><tr><th>Element</th><th>Silk and Bamboo (Sizhu)</th><th>Hindustani Classical Music</th><th>Arab Takht Ensembles</th></tr></thead><tbody><tr><td><strong>Scale/Mode</strong></td><td>Basic melodies are largely <strong>pentatonic</strong> (five-note scale), though the system is heptatonic.</td><td>Structured around the <strong>Rāga</strong> (a melodic framework or scale of five or more notes).</td><td>Based on the <strong>Maqām</strong> (a melodic mode involving complex scales, including the use of <strong>quarter-tones</strong>).</td></tr><tr><td><strong>Texture</strong></td><td>Defining feature is <strong>Heterophony</strong>, where multiple instruments play variations of the main melody simultaneously, according to the idiom of their instrument.</td><td>Distinct <strong>Layered Texture</strong> composed of a melody, a rhythmic component, and a <strong>drone</strong> (sustained pitch, usually tonic/dominant).</td><td>Primarily <strong>Heterophony</strong> in ensemble sections, where spontaneous imitations of the main melody occur. Also uses <strong>Monophony</strong> in solo improvised passages.</td></tr><tr><td><strong>Rhythm/Metre</strong></td><td>Governed by the <strong>Banyan</strong> system (‘beat and eyes’), typically duple or quadruple metre. Tempo often progresses from slow to very fast.</td><td>Uses <strong>Tāla</strong> (a complex, often long, time cycle composed of cycles of beats called <strong>Mātras</strong>). The first beat, the <strong>Sam</strong>, is highly emphasized.</td><td>Uses <strong>Iqa</strong> (a rhythmic mode, e.g., Maqsum 8-beat pattern). Beats are often verbalized using mnemonic syllables like <strong>Dumm</strong> and <strong>Takk</strong>.</td></tr><tr><td><strong>Instrumentation</strong></td><td>Specific required instruments include the bowed <em>erhu</em>, plucked <em>pipa</em> and <em>yangqin</em>, and wind instruments like the <em>dizi</em> and <em>sheng</em>.</td><td>Instruments include the melodic <em>sitar</em> and <em>sarōd</em>, the bowed <em>sārangī</em> or <em>bānsurī</em> (flute), and the rhythmic <em>tablā</em> (drums) over a drone from the <em>tambūrā</em>.</td><td>Ensemble includes the plucked <em>ud</em> (lute) or <em>qanun</em> (zither), the end-blown <em>nay</em> (flute), and percussion like the <em>riqq</em> (tambourine).</td></tr></tbody></table></div>
<p>&gt; [PLACEHOLDER 1: Audio Extract demonstrating <strong>Heterophony</strong> in a Silk and Bamboo ensemble piece, showcasing the subtle variations in ornamentation between the <em>dizi</em> and <em>erhu</em>.]</p>
<p>&gt; [Link to Rāga khamāj, as performed by Ravi Shankar on YouTube (suggested Starting Point demonstrating Raga, Tala, and Drone): Candidates should listen for the shift from the unmetred <em>ālāp</em> section to the rhythmic <em>gat</em> section.]</p>` }} />
      </div>
    </article>
  );
};

export default SmallEnsemble0601GenreAndStylePage;
