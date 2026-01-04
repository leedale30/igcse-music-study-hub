import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0401SpecificTerminologyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Specific Terminology - Music And Words Language, Literacy, And Theory</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Specific Terminology - Music And Words Language, Literacy, And Theory
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
        <div dangerouslySetInnerHTML={{ __html: `<h2>Genre-specific vocabulary</h2>
<p>You must acquire and consistently use terminology specific to modern song structure, vocal setting, and music production technology.</p>
<h3>Word-Setting Techniques</h3>
<p><strong>Melisma</strong> (setting one syllable of text to many notes in the melody line) and <strong>Syllabic</strong> (setting one note per syllable). Also includes <strong>Rap</strong> (rhythmic, spoken delivery of lyrics).</p>
<h3>Popular Song Structure</h3>
<p>Specific section names are mandatory: <strong>Intro, Verse, Chorus, Bridge / middle eight, and Outro</strong>. Structures include <strong>Strophic</strong> (same music repeats for each verse) and <strong>Through-composed</strong> (music continuously changes, following the narrative).</p>
<h3>Melodic Devices</h3>
<p><strong>Hook</strong> (a catchy, memorable sequence of notes) and <strong>Riff</strong> (a short, repeated pattern, often instrumental) are crucial elements of popular song. You must also recognize <strong>Call and response</strong> (a musical dialogue where one part answers another).</p>
<h3>Choral Textures</h3>
<p><strong>Antiphonal</strong> texture (where one group responds to another) and the division of voices into a <strong>Double choir</strong> are common in choral music.</p>
<h3>Music Technology</h3>
<p><strong>Sample, loop, chorus, reverb, and delay</strong> are electronic effects and devices used to enhance and produce sound. Production techniques include <strong>overdubbing, double-tracking, and multi-tracking</strong>.</p>
<h3>Tempo</h3>
<p>Tempo can be measured using <strong>BPM (beats per minute)</strong>, particularly in popular and electronic genres. You must also recognize tempo changes like <em>accelerando</em> and <em>rallentando</em>.</p>
<p><a href="../aos04-04-language-literacy-and-theory.html">← Back to Language, Literacy, and Theory</a></p>
<p><a href="aos04-04-02-lyrics-text-analysis.html">Next: Lyrics &amp; Text Analysis →</a></p>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0401SpecificTerminologyPage;
