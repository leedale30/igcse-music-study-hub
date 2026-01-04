import React from 'react';
import { Link } from 'react-router-dom';

const Romantic0602AestheticValuesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Aesthetic Values</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Aesthetic Values
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>6.2. Aesthetic Values: What is considered beautiful, powerful, or meaningful within the tradition.</h3>
<p>The aesthetic of Romantic music centers on intense, subjective emotion and the capacity of music to evoke imagination.</p>
<ul>
<li> <strong>Expressive Depth:</strong> Meaning and beauty reside in the music’s power to express profound emotional states (e.g., love, fear, nationalism). This subjective focus contrasts directly with the structural order valued in the Classical period.</li>
<li> <strong>Narrative and Programme:</strong> The greatest aesthetic significance is often attached to <strong>Programme Music</strong>—music that explicitly tells a story, sets a scene, or suggests extra-musical ideas without relying on words. The ability of the composer to paint vivid scenes (e.g., Smetana depicting the springs, the river, or ancient ruins) using orchestral color and specific musical devices is highly valued.</li>
<li> <strong>Virtuosity:</strong> Technical mastery, demonstrated through <strong>virtuosic</strong> solo writing (often utilizing scales and arpeggios, as seen in the wider listening example Chopin: <em>Étude</em>), is aesthetically important as a vehicle for elevated emotional display.</li>
</ul>
<p>&gt; [PLACEHOLDER 2: Diagram or Image illustrating the different sections of the Vltava river (The Two Springs, The River Theme, Hunting Scene, Country Wedding, Rapids, Ancient Ruins), showing the narrative framework that guides the music's meaning.]</p>` }} />
      </div>
    </article>
  );
};

export default Romantic0602AestheticValuesPage;
