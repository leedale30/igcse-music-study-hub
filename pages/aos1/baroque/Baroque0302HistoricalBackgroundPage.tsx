import React from 'react';
import { Link } from 'react-router-dom';

const Baroque0302HistoricalBackgroundPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/baroque" className="hover:text-sky-600 dark:hover:text-sky-400">Baroque Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Historical Background</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Historical Background
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>3.2. Historical Background: The evolution of the style or tradition and its socio-political influences.</h3>
<p>The Baroque era is characterised by its distinctive stylistic developments, departing from earlier music and setting the stage for the Classical period.</p>
<ul>
<li> <strong>Period Definition:</strong> The era spans 1600 to 1750, ending with the death of J.S. Bach.</li>
<li> <strong>Aesthetic:</strong> Composers were guided by the aesthetic ideal that a single <strong>‘affection’</strong> (musical mood or feeling) should persist throughout an entire piece or movement.</li>
<li> <strong>Key Systems:</strong> The widespread use of the <strong>major-minor key system</strong> became established.</li>
<li> <strong>Instrumental Importance:</strong> Instrumental music gained increased importance, with works including <strong>sonatas</strong> and the rise of the <strong>concerto</strong>.</li>
<li> <strong>New Structures:</strong> New structures and types of music introduced included the <strong>solo concerto</strong>, <strong>concerto grosso</strong>, <strong>ritornello form</strong>, <strong>trio sonata</strong>, <strong>overture</strong>, and <strong>fugue</strong>.</li>
<li> <strong>Orchestra Formation:</strong> The orchestra began to take shape, with the <strong>string section at its centre</strong>.</li>
<li> <strong>Stylistic Description:</strong> The term "Baroque" itself refers to music that is <strong>ORNATE</strong> and <strong>DECORATED</strong>.</li>
</ul>
<ul>
<li>  [DIAGRAM: Evolution of musical texture from Polyphonic (1450–1750) to Homophonic (1750–1950)]</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default Baroque0302HistoricalBackgroundPage;
