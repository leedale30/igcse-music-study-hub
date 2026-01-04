import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0602AestheticValuesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Aesthetic Values</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Aesthetic Values
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>6.2. Aesthetic Values: What is considered beautiful, powerful, or meaningful within the tradition.</h3>
<p>Aesthetic value in this area is fundamentally linked to the emotional and intellectual power of musical interpretation.</p>
<ul>
<li> <strong>Meaningfulness via Word-Painting:</strong> The success (beauty/meaningfulness) of a piece is measured by how effectively musical features are employed to <strong>enhance the meaning of the words</strong>. This is achieved using techniques like <strong>word-painting</strong> (e.g., using an ascending scale for the word 'rising').</li>
<li> <strong>Emotional Power:</strong> In Romantic-era derived Art Song, expressive quality (e.g., <em>rubato</em> or highly chromatic harmony) conveys the emotional depth of the poem. In Musicals/Pop, power and dramatic impact are often achieved through orchestral buildup, dynamic extremes, or the quality of studio production (e.g., use of <strong>reverb</strong> to build drama).</li>
<li> <strong>Lyrical/Sonic Quality:</strong> For solo and choral works, beauty lies in the lyrical quality of the vocal line. For pop music, beauty is often defined by the polished sonic realization—the blend created by effects and multi-tracking.</li>
</ul>
<p>&gt; [PLACEHOLDER 3: Audio Extract demonstrating a clear instance of word-painting (e.g., high pitch/melisma on a word like 'heaven' or 'soaring').]</p>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0602AestheticValuesPage;
