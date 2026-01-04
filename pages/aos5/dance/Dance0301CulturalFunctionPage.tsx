import React from 'react';
import { Link } from 'react-router-dom';

const Dance0301CulturalFunctionPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Cultural Function</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Cultural Function
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>3.1. Cultural Function: The role music plays in society.</h3>
<h4>3.1.1.1. Ritual</h4>
<p>NOT APPLICABLE.</p>
<h4>3.1.1.2. Celebration</h4>
<p>Music for Dance, by its very nature, serves the function of <strong>celebration and entertainment</strong>. These styles are fundamentally designed for social interaction and public enjoyment:</p>
<ul>
<li> <strong>Tango and Salsa:</strong> These styles are performed socially and publicly as traditional and popular dances.</li>
<li> <strong>EDM:</strong> This is music created specifically for dancing in clubs, festivals, and large <strong>live concerts and shows</strong> (stadiums), which often feature complex lighting and sound systems.</li>
</ul>
<h4>3.1.1.3. work, protest</h4>
<p>NOT APPLICABLE.</p>
<h4>3.1.1.4. healing</h4>
<p>NOT APPLICABLE.</p>
<h4>3.1.1.5. Social Identity</h4>
<p>The study of Tango and Salsa is crucial because the blend of <strong>African and Western music</strong> has created a distinctive <strong>Latin American sound</strong>. The music thus reflects a significant element of <strong>social and regional identity</strong>. Similarly, EDM is tied to modern global youth culture and digital identity.</p>` }} />
      </div>
    </article>
  );
};

export default Dance0301CulturalFunctionPage;
