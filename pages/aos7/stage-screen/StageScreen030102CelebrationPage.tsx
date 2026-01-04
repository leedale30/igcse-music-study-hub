import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen030102CelebrationPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Celebration - Music For Stage And Screen Cultural Function</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Celebration - Music For Stage And Screen Cultural Function
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
        <div dangerouslySetInnerHTML={{ __html: `<p>All genres in this area serve a significant function of <strong>public celebration and entertainment</strong>.</p>
<h3>Film Music</h3>
<p>Large, dynamic orchestral scores are employed in big-budget blockbusters, reflecting the spectacle and excitement of the action on screen. Film music creates celebratory moments that enhance the audience's emotional experience and contribute to the entertainment value of cinema.</p>
<h3>Ballet</h3>
<p>Dance music, such as the <em>Hoe-Down</em> from Copland's <em>Rodeo</em>, is used to celebrate a lively atmosphere featuring fast tempos and driving rhythms. Ballet serves as a form of cultural celebration, bringing communities together through shared artistic experiences.</p>
<h3>Computer Game Music</h3>
<p>Game music contributes to the celebratory and entertaining aspects of interactive media, enhancing player engagement and creating memorable experiences that celebrate achievement and progress within the game environment.</p>
<p>Music for stage and screen fundamentally serves to entertain, celebrate human creativity, and provide shared cultural experiences that bring people together in theaters, cinemas, and gaming environments.</p>` }} />
      </div>
    </article>
  );
};

export default StageScreen030102CelebrationPage;
