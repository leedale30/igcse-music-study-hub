import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen0504HybridizationPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Hybridization</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Hybridization
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>5.4. Hybridization: Fusion of traditional and modern elements through technology or cross-cultural collaboration.</h3>
<p>Hybridization is a defining feature of modern stage and screen scoring.</p>
<ul>
<li> <strong>Acoustic and Electronic Fusion:</strong> Film scoring commonly involves the fusion of the traditional <strong>symphony orchestra</strong> (acoustic) with <strong>synthesizers</strong> and electronic processing (modern technology) to create unique sound palettes and effects.</li>
<li> <strong>Stylistic Blending:</strong> Composers often blend musical styles to enhance narrative. For example, the incorporation of <strong>American folk tunes</strong> (a traditional element) into orchestral ballet scores, as done by Aaron Copland, is a form of stylistic hybridization used to root the narrative in a specific national identity.</li>
<li> <strong>Technological Integration (Adaptive Music):</strong> Computer game music represents a technological hybridization, where composed music (often orchestral or electronic) is adapted in real-time based on player interaction, a feature known as <strong>adaptive music</strong>.</li>
</ul>
<ul>
<li>  [YOUTUBE LINK: Example of computer game music, such as Yoko Shimomura’s <em>Gran Saga Soundtrack</em>, demonstrating how orchestral and technological elements are blended to create an effective score: https://youtu.be/DQ0xHNaqfdc?si=2Pmi1ipz231d0VQF].</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default StageScreen0504HybridizationPage;
