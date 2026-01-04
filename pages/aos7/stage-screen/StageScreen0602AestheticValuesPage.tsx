import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen0602AestheticValuesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Aesthetic Values</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Aesthetic Values
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>6.2. Aesthetic Values: What is considered beautiful, powerful, or meaningful within the tradition.</h3>
<p>The aesthetic quality of music for stage and screen is judged by its success in supporting the non-musical, narrative context.</p>
<ul>
<li> <strong>Narrative Effectiveness:</strong> The most meaningful music is that which is <strong>memorable</strong> and which successfully enhances the plot. The score’s tone can be established through specific keys to represent binary emotions.</li>
<li> <strong>Emotional Pacing:</strong> Power is achieved by shaping the melody contour; <strong>ascending melodies</strong> often imply positivity, while <strong>descending ones</strong> suggest negativity. <strong>Disjunct and dissonant intervals</strong> create tension or terror, while <strong>conjunct and consonant ones</strong> provide relief.</li>
<li> <strong>Sound Design (Computer Games):</strong> In computer game music, the aesthetic value is tied to functionality: the application of <strong>tonality and mode</strong> must reflect what is happening in the game, creating an immersive atmosphere and making the player feel in control.</li>
</ul>
<p>&gt; [PLACEHOLDER 2: Diagram or storyboard showing a character running (action), with accompanying rhythmic notation illustrating <strong>Mickey Mousing</strong> (music mirroring the cadence of footfall, or relentless, punctuated chords for suspense).]</p>` }} />
      </div>
    </article>
  );
};

export default StageScreen0602AestheticValuesPage;
