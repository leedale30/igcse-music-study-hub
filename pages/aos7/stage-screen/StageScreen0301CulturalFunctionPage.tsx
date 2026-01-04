import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen0301CulturalFunctionPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Cultural Function</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Cultural Function
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 7 • Music for Stage and Screen
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
<p>Music for stage and screen is primarily secular, but some works incorporate dramatic or thematic rituals.</p>
<ul>
<li> <strong>Ballet:</strong> Some modernist ballets, such as Stravinsky’s <em>The Rite of Spring</em>, explicitly depict a <strong>pagan ritual</strong>.</li>
</ul>
<h4>3.1.1.2. Celebration</h4>
<p>All genres in this area serve a significant function of <strong>public celebration and entertainment</strong>.</p>
<ul>
<li> <strong>Film Music:</strong> Large, dynamic orchestral scores are employed in big-budget blockbusters, reflecting the spectacle and excitement of the action on screen.</li>
<li> <strong>Ballet:</strong> Dance music, such as the <em>Hoe-Down</em> from Copland's <em>Rodeo</em>, is used to celebrate a lively atmosphere featuring fast tempos and driving rhythms.</li>
</ul>
<h4>3.1.1.3. work, protest</h4>
<p>NOT APPLICABLE.</p>
<h4>3.1.1.4. healing</h4>
<p>NOT APPLICABLE.</p>
<h4>3.1.1.5. Social Identity</h4>
<p>Music is used to establish and root the narrative in a specific culture or region, often reinforcing national identity.</p>
<ul>
<li> <strong>Nationalism:</strong> Composers like Aaron Copland evoked a strong sense of <strong>nationalism</strong> and American ranch life in ballets like <em>Rodeo</em> and <em>Appalachian Spring</em> by using <strong>American folk tunes</strong> (e.g., the Shaker hymn <em>Simple Gifts</em>).</li>
<li> <strong>Location:</strong> Music can be used to set the ballet in a particular location, often through writing music inspired by local folk tunes or dances.</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default StageScreen0301CulturalFunctionPage;
