import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen0402LyricsAndTextAnalysisPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Lyrics And Text Analysis</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Lyrics And Text Analysis
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>4.2. Lyrics &amp; Text Analysis: The study of the words, including their poetic structure, narrative, imagery, and symbolism.</h3>
<p>Since the focus of Area of Study 7 is on <strong>instrumental music</strong> (Ballet, Film, and Game scores) and how it accompanies visual action, direct analysis of lyrics is not generally applicable.</p>
<ul>
<li> <strong>Focus on Programme:</strong> The analytical focus shifts to how the instrumental music functions as <strong>programme music</strong>, enhancing the extra-musical narrative, imagery, or dramatic action.</li>
<li> <strong>Narrative Technique:</strong> The primary method is analyzing how devices like the <strong>leitmotif</strong> (a melodic idea representing a character or feeling) are developed, transformed, or juxtaposed to convey narrative progression.</li>
<li> <strong>Emotional Imagery:</strong> You must analyze how musical elements—such as <strong>dissonance</strong> (for fear/conflict), <strong>chromaticism</strong> (for tension), or specific <strong>timbres</strong> (e.g., <em>pizzicato</em> strings for stealth)—are used to achieve the desired emotional and atmospheric <strong>word-painting</strong> effect on screen or stage.</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default StageScreen0402LyricsAndTextAnalysisPage;
