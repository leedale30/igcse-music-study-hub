import React from 'react';
import { Link } from 'react-router-dom';

const Classical0307PerformancePracticePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Performance Practice</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Performance Practice
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 2 • Classical Music
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
        [&_.assessment-section]:bg-amber-50 [&_.assessment-section]:dark:bg-amber-900/20 [&_.assessment-section]:border [&_.assessment-section]:border-amber-200 [&_.assessment-section]:dark:border-amber-800
        [&_.definition-section]:bg-sky-50 [&_.definition-section]:dark:bg-sky-900/20 [&_.definition-section]:border [&_.definition-section]:border-sky-200 [&_.definition-section]:dark:border-sky-800
        [&_.characteristic-item]:bg-white [&_.characteristic-item]:dark:bg-slate-700 [&_.characteristic-item]:rounded-lg [&_.characteristic-item]:p-4 [&_.characteristic-item]:mb-4 [&_.characteristic-item]:border [&_.characteristic-item]:border-slate-200 [&_.characteristic-item]:dark:border-slate-600
        [&_.example-item]:bg-white [&_.example-item]:dark:bg-slate-700 [&_.example-item]:rounded-lg [&_.example-item]:p-4 [&_.example-item]:mb-4 [&_.example-item]:border [&_.example-item]:border-slate-200 [&_.example-item]:dark:border-slate-600
      ">
        <div dangerouslySetInnerHTML={{ __html: `<h3>3.7. Performance Practice: Traditional ways of interpreting and presenting music.</h3>
<p>Performance practice shifted significantly from the Baroque era, primarily due to advances in instrument technology and the change in patronage structure.</p>
<ul>
<li> <strong>Dynamics:</strong> You must recognize the shift away from <strong>terraced dynamics</strong> (sudden changes) towards <strong>graded dynamic changes</strong> (crescendo and diminuendo). The <strong>piano</strong> replaced the harpsichord, which allowed performers to utilize a much wider dynamic range.</li>
<li> <strong>Instrumentation:</strong> The <strong>basso continuo</strong>, a defining feature of Baroque music, was generally obsolete in the Classical period. Chamber music became standardized, with ensembles like the <strong>string quartet</strong> and <strong>piano trio</strong> being prominent.</li>
<li> <strong>Structure:</strong> Instrumental movements frequently include the <strong>cadenza</strong>, a virtuosic solo passage where the soloist demonstrates technical brilliance, usually near the end of the movement.</li>
<li>  [MUSIC SCORE: Example of a homophonic texture in a Mozart or Haydn chamber work, illustrating <strong>Alberti bass</strong> in the accompaniment, which is a key device of this period].</li>
</ul>
<h4>3.7.1.1. Staging</h4>
<p>NOT APPLICABLE (Focus is on instrumental chamber music, which is not staged).</p>
<h4>3.7.1.2. Performer/audience relationship</h4>
<p>The music was typically performed by <strong>small ensembles</strong> (chamber music) for relatively small audiences, often under the patronage of wealthy individuals. This intimate setting contrasts with the large public concert halls that would become prominent in the later Romantic period. Chamber music requires <strong>one player per part</strong>.</p>
<h4>3.7.1.3. attire</h4>
<p>NOT APPLICABLE.</p>
<h4>3.7.1.4. ritualistic elements</h4>
<p>NOT APPLICABLE. (Focus is on secular instrumental music.)</p>` }} />
      </div>
    </article>
  );
};

export default Classical0307PerformancePracticePage;
