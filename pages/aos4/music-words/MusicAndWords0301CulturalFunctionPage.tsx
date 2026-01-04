import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0301CulturalFunctionPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Cultural Function</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Cultural Function
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 4 • Music and Words
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
<p>Sacred choral music continues to be written, meaning music still serves a ritualistic function in religious services (e.g., Masses or Anthems). However, an increasing amount of secular music is composed specifically to be performed in concerts, even if some pieces use religious texts (such as Stravinsky’s <em>Symphony of Psalms</em>).</p>
<h4>3.1.1.2. Celebration</h4>
<p>Music in this area is fundamentally designed for entertainment and emotional connection.</p>
<ul>
<li> <strong>Musicals:</strong> Songs from musicals are vocal works from the Western tradition of musical theatre, intended for public performance and enjoyment in theatres.</li>
<li> <strong>Popular Song:</strong> This genre, primarily defined from the 1990s onwards, is composed for entertainment and widespread appeal. Live performances occur in venues ranging from intimate settings to large stadiums.</li>
</ul>
<h4>3.1.1.3. Work, protest</h4>
<p>NOT APPLICABLE. (The syllabus focuses on emotional connection and entertainment within this area.)</p>
<h4>3.1.1.4. Healing</h4>
<p>NOT APPLICABLE.</p>
<h4>3.1.1.5. Social Identity</h4>
<p>Popular songs reflect <strong>contemporary social trends and cultural shifts</strong>. They help audiences connect emotionally and stylistically. The tradition of Art Song allows for highly <strong>intense and personal expression of emotion</strong>.</p>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0301CulturalFunctionPage;
