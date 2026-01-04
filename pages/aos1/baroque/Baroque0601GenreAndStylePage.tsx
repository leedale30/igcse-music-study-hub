import React from 'react';
import { Link } from 'react-router-dom';

const Baroque0601GenreAndStylePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/baroque" className="hover:text-sky-600 dark:hover:text-sky-400">Baroque Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Genre And Style</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Genre And Style
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 1 • Baroque Music
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
        [&_.assessment-section]:bg-amber-50 [&_.assessment-section]:dark:bg-amber-900/20 [&_.assessment-section]:border [&_.assessment-section]:border-amber-200 [&_.assessment-section]:dark:border-amber-800
        [&_.definition-section]:bg-sky-50 [&_.definition-section]:dark:bg-sky-900/20 [&_.definition-section]:border [&_.definition-section]:border-sky-200 [&_.definition-section]:dark:border-sky-800
        [&_.characteristic-item]:bg-white [&_.characteristic-item]:dark:bg-slate-700 [&_.characteristic-item]:rounded-lg [&_.characteristic-item]:p-4 [&_.characteristic-item]:mb-4 [&_.characteristic-item]:border [&_.characteristic-item]:border-slate-200 [&_.characteristic-item]:dark:border-slate-600
        [&_.example-item]:bg-white [&_.example-item]:dark:bg-slate-700 [&_.example-item]:rounded-lg [&_.example-item]:p-4 [&_.example-item]:mb-4 [&_.example-item]:border [&_.example-item]:border-slate-200 [&_.example-item]:dark:border-slate-600
      ">
        <div dangerouslySetInnerHTML={{ __html: `<h3>6.1. Genre and Style: Classification and stylistic traits—baroque, reggae, gamelan, trap, etc.</h3>
<h4>Classification and Context</h4>
<p>Baroque music is classified as part of the <strong>Western classical tradition</strong> (Areas of Study 1–3). This period witnessed significant structural developments, including the establishment of the major-minor key system and the increased importance of instrumental music. Candidates must study repertoire focusing on the <strong>solo concerto</strong> and the <strong>concerto grosso</strong>.</p>
<h4>Stylistic Traits (Features to Identify)</h4>
<p>Candidates must be able to recognize the features that define the Baroque style, applying precise musical terminology when describing recorded extracts:</p>
<ul>
<li> <strong>Instrumentation (Timbre):</strong> The orchestra began to take shape, centrally featuring the <strong>string section</strong> (violins, violas, cellos). Wind and brass instruments (flutes, oboes, trumpets) were sometimes included, but in small numbers.</li>
<li> <strong>Basso Continuo:</strong> This is a fundamental, distinguishing feature. It involves a bass instrument (e.g., cello, double bass) and a chord-playing instrument (e.g., <strong>harpsichord</strong> or lute) that improvises the harmonies, providing the harmonic and textural foundation.</li>
<li> <strong>Structure and Form:</strong> Composers frequently used <strong>Ritornello Form</strong> (where a main orchestral theme, the <em>ritornello</em>, alternates with solo-dominated sections, the <em>episodes</em>), often demonstrated through focus works like Vivaldi’s <em>Spring</em> or Handel’s <em>Concerto Grosso</em>. The movement may also exhibit <strong>fugal style</strong> (contrapuntal imitation of a melody).</li>
<li> <strong>Texture:</strong> Textures are frequently complex and layered, often described as <strong>Polyphonic</strong> or <strong>Contrapuntal</strong>, where several independent melodic lines weave together.</li>
<li> <strong>Dynamics:</strong> Changes in volume are often sudden, known as <strong>Terraced Dynamics</strong>, switching sharply from loud to quiet without gradual transitions like <em>crescendo</em> or <em>diminuendo</em>.</li>
<li> <strong>Melody and Ornamentation:</strong> Melodies are often highly <strong>ornamented</strong>, using devices such as <strong>trills</strong> and <strong>mordents</strong>. Composers make significant use of sequential writing (where a pattern is immediately repeated at a higher or lower pitch).</li>
</ul>
<p>&gt; [PLACEHOLDER 1: Music Score or Notation showing a segment of the Basso Continuo part with Figured Bass notation beneath the staff, illustrating the core harmonic foundation of Baroque music.]</p>` }} />
      </div>
    </article>
  );
};

export default Baroque0601GenreAndStylePage;
