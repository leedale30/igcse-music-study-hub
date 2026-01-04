import React from 'react';
import { Link } from 'react-router-dom';

const Dance0504HybridizationPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Hybridization</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Hybridization
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>5.4. Hybridization: Fusion of traditional and modern elements through technology or cross-cultural collaboration.</h3>
<p>Hybridization is highly applicable to the historical and stylistic development of the Latin American genres within this Area of Study.</p>
<ul>
<li> <strong>Cross-Cultural Fusion (Tango and Salsa):</strong> The creation of Tango and Salsa exemplifies <strong>cross-cultural collaboration</strong> and fusion. These styles are the product of blending <strong>African and Western music</strong> influences, resulting in the distinctive <strong>Latin American sound</strong>.</li>
<li> <strong>Technological Fusion (EDM):</strong> Modern EDM frequently involves the fusion of electronically generated sounds with traditional acoustic elements, such as using <strong>samples</strong> of instruments (e.g., low brass/tuba, as suggested for the F-777 starting point) within an electronic framework.</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default Dance0504HybridizationPage;
