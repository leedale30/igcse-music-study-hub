import React from 'react';
import { Link } from 'react-router-dom';

const Romantic0305KeyWorksPiecesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Key Works Pieces</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Key Works Pieces
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>3.5. Key Works/Pieces: Canonical or representative compositions that define the genre or tradition.</h3>
<p>You are required to study the Focus Work to understand the Romantic style, particularly its programmatic elements and orchestral treatment.</p>
<ul>
<li> <strong>Focus Work:</strong> <strong>Smetana: <em>Vltava</em> from <em>Ma Vlast</em></strong>. This programmatic work should be used to exemplify:</li>
<li>  The expansion of the orchestra.</li>
<li>  The importance of programme music.</li>
<li>  The expression of national identity (Nationalism).</li>
<li> <strong>Wider Listening Examples (for reference, not examined):</strong></li>
<li> <strong>Mendelssohn: <em>A Midsummer Night's Dream overture</em></strong>: An example of a concert overture and programme music.</li>
<li> <strong>Chopin: <em>Étude in E, Op 10. No 3</em></strong>: Demonstrates Romantic piano music, focusing on <strong>ternary structure</strong> (ABA) and rich <strong>chromatic harmony</strong>.</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default Romantic0305KeyWorksPiecesPage;
