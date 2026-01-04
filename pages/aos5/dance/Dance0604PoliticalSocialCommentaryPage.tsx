import React from 'react';
import { Link } from 'react-router-dom';

const Dance0604PoliticalSocialCommentaryPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Political Social Commentary</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Political Social Commentary
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>6.4. Political/Social Commentary: Messages or movements embedded in the music (e.g., protest songs, feminist punk).</h3>
<p>This perspective is particularly relevant for Tango and Salsa, which emerged from distinct social environments.</p>
<ul>
<li> <strong>Salsa and Social Identity:</strong> Salsa became a symbol of <em>pan-Latino ethnic identity</em> among immigrants in New York. Early salsa lyrics frequently recounted the <em>hard lives and discontent</em> of working-class Spanish-speaking immigrants, using <em>strong rhythmic drive</em> and strident <em>brass</em> to reflect the experiences of <em>violence and discontent</em>. Later, lyrics focused more on <em>romantic themes</em>.</li>
<li> <strong>Tango and Migration:</strong> The development of Tango was intrinsically linked to the social environment of Buenos Aires and the <em>arrival of immigrants</em> and African slaves, whose cultural traditions merged to shape the genre.</li>
<li> <strong>Wider Relevance:</strong> The syllabus encourages using <em>local and popular musical styles and examples</em>, affirming that dance music can reflect <em>contemporary social trends and cultural shifts</em>.</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default Dance0604PoliticalSocialCommentaryPage;
