import React from 'react';
import { Link } from 'react-router-dom';

const Dance0602AestheticValuesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Aesthetic Values</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Aesthetic Values
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 5 • Music for Dance
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
<p>The aesthetic value of dance music is measured by its capacity to induce movement, express kinetic energy, and achieve specific sonic qualities.</p>
<ul>
<li> <strong>Kinetic Energy and Drive:</strong> Meaningfulness is derived from the music's ability to maintain a strong, relentless pulse and rhythmic continuity, essential for dancing.</li>
<li> <strong>Emotional Intensity:</strong> In Tango, aesthetic power is achieved through expressive musical devices like <em>glissando</em> and <em>portamento</em>, conveying passion and melancholia, often supported by minor keys.</li>
<li> <strong>Sonic Engineering (EDM):</strong> Aesthetic value relies heavily on technical execution and <em>sound manipulation</em>. Power is built through the effective use of production effects like <em>filtering</em> (e.g., low-pass filters for builds), <em>reverb</em> (for spaciousness), and <em>delay</em> (for rhythmic interest). The dramatic tension and euphoric release of the <em>builds and drops</em> are central aesthetic devices.</li>
</ul>
<p>&gt; [PLACEHOLDER 2: Audio Extract illustrating the melancholic, lyrical tone and distinct timbre of the Bandoneon in a Tango piece, highlighting the expressive aesthetic.]</p>` }} />
      </div>
    </article>
  );
};

export default Dance0602AestheticValuesPage;
