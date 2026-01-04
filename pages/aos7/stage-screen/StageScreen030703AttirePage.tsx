import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen030703AttirePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Attire - Music For Stage And Screen Performance Practice</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Attire - Music For Stage And Screen Performance Practice
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
        <div dangerouslySetInnerHTML={{ __html: `<p><strong>NA - NOT APPLICABLE</strong></p>
<p>Attire is not a primary focus in the study of music for stage and screen. While visual elements including costumes are important in ballet and film production, the emphasis in this area of study is on musical characteristics, compositional techniques, and the relationship between music and visual media rather than on costume design or performer attire.</p>
<h3>Context of Visual Elements</h3>
<p>Although not a focus of musical study, visual elements do play supporting roles:</p>
<ul>
<li><strong>Ballet:</strong> Elaborate costumes and staging support the musical and choreographic elements</li>
<li><strong>Film:</strong> Visual design including costumes contributes to the overall aesthetic that music supports</li>
<li><strong>Games:</strong> Character and environmental design creates contexts for musical composition</li>
</ul>
<p>The study of music for stage and screen concentrates on how music functions within these visual contexts rather than on the visual elements themselves. Students should focus on musical analysis, compositional techniques, and the integration of music with multimedia rather than on costume or attire considerations.</p>` }} />
      </div>
    </article>
  );
};

export default StageScreen030703AttirePage;
