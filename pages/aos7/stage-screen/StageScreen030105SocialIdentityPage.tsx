import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen030105SocialIdentityPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Social Identity - Music For Stage And Screen Cultural Function</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Social Identity - Music For Stage And Screen Cultural Function
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
        <div dangerouslySetInnerHTML={{ __html: `<p>Music for stage and screen plays a significant role in shaping and reflecting social identity across different media forms.</p>
<h3>Film Music</h3>
<p>Film scores often incorporate musical elements that reflect cultural identity, national characteristics, or social groups. Composers use specific musical styles, instruments, and themes to represent different cultures, time periods, or social contexts within the narrative.</p>
<h3>Ballet</h3>
<p>Ballet music frequently draws from folk traditions and national musical styles to express cultural identity. Works like Copland's <em>Rodeo</em> celebrate American frontier culture, while other ballets may incorporate elements from various cultural traditions to represent specific social or national identities.</p>
<h3>Computer Game Music</h3>
<p>Game music often creates distinct musical identities for different characters, factions, or worlds, helping players identify with specific groups or cultures within the game environment. This music can reflect real-world cultural influences or create entirely new musical identities for fictional societies.</p>
<p>Through these various media, music for stage and screen serves as a powerful tool for expressing, preserving, and transmitting cultural and social identities to diverse audiences worldwide.</p>` }} />
      </div>
    </article>
  );
};

export default StageScreen030105SocialIdentityPage;
