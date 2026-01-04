import React from 'react';
import { Link } from 'react-router-dom';

const Romantic0603AudienceReceptionPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Audience Reception</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Audience Reception
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 3 • Romantic Music
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>6.3. Audience Reception: How listeners and communities engage with and interpret the music.</h3>
<p>Audience engagement shifted from private patronage to public performance, requiring analytical and imaginative interpretation.</p>
<ul>
<li> <strong>Active Listening:</strong> Candidates must cultivate <strong>aural awareness</strong> and demonstrate their <strong>recognition and understanding of musical features and concepts</strong> using <strong>appropriate musical terminology</strong>. This includes the ability to identify elements of structure, genre, or style in unseen extracts related to Focus Works.</li>
<li> <strong>Interpretation through Narrative:</strong> For programmatic works, the audience is guided by the composer’s narrative (the 'program'). Listeners interpret the music by relating specific sounds and motifs (e.g., horn fanfares for a hunt, flowing melodies for water) directly to the scenes described by the composer.</li>
<li> <strong>Context of Performance:</strong> Romantic music was increasingly heard in <strong>public concert halls</strong>, marking a shift from the earlier aristocratic patronage, thus allowing wider community access and emotional engagement.</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default Romantic0603AudienceReceptionPage;
