import React from 'react';
import { Link } from 'react-router-dom';

const Baroque0301CulturalFunctionPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/baroque" className="hover:text-sky-600 dark:hover:text-sky-400">Baroque Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Cultural Function</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Cultural Function
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>3.1. Cultural Function: The role music plays in society.</h3>
<p>The Baroque period spanned approximately 150 years, from 1600 to 1750, and was a time of significant musical developments. Music generally served institutional (Church) or private (Aristocratic) functions.</p>
<h4>3.1.1.1. Ritual</h4>
<p>Music played a key role in sacred settings, where <strong>Oratorios</strong> (sacred settings of religious words, often from the Bible) and <strong>Masses</strong> were performed, typically in churches, using solo singers, chorus, and orchestra. Other sacred vocal forms included <strong>Cantatas</strong> (vocal work in several movements with choir accompanied by orchestra), <strong>Chorales</strong>, <strong>Passions</strong>, and <strong>Anthems</strong>.</p>
<h4>3.1.1.2. Celebration</h4>
<p>Instrumental music designed for dancing was popular and often performed separately as a standalone instrumental <strong>Suite</strong>. The use of instruments like <strong>Trumpets</strong> and <strong>Timpani</strong> (kettle drums) was generally reserved for special occasions and dramatic effects.</p>
<ul>
<li>  [AUDIO: Handel's celebratory brass from Op. 6 No. 5, Movement 2]</li>
</ul>
<h4>3.1.1.3. Work, protest</h4>
<p>NOT APPLICABLE.</p>
<h4>3.1.1.4. Healing</h4>
<p>NOT APPLICABLE.</p>
<h4>3.1.1.5. Social Identity</h4>
<p>NOT APPLICABLE. While the concept of <em>nationalism</em> is related to social identity, it emerged later in the Romantic period, and is not a focus of Baroque study.</p>` }} />
      </div>
    </article>
  );
};

export default Baroque0301CulturalFunctionPage;
