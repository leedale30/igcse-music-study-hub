import React from 'react';
import { Link } from 'react-router-dom';

const SmallEnsemble0307PerformancePracticePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/small-ensemble" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Small Ensemble</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Performance Practice</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Performance Practice
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 6 • Music for Small Ensemble
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>3.7. Performance Practice: Traditional ways of interpreting and presenting music.</h3>
<p>Understanding how the music is traditionally performed is essential, including instrumentation and style.</p>
<ul>
<li> <strong>Mandatory Instrument Recognition:</strong> You must learn the sound and function of instruments specific to each ensemble, such as the <em>dizi</em> (flute), <em>erhu</em> (bowed fiddle), and <em>yangqin</em> (hammered dulcimer) for Chinese music, or the <em>sitar</em>, <em>tablā</em>, and <em>tambūrā</em> for Hindustani music.</li>
<li> <strong>Stylistic Techniques:</strong> Performance often requires specific techniques to achieve the characteristic sound:</li>
<li> <strong>Ornamentation:</strong> You should recognize the prominent use of <strong>vibrato, pitch-bending</strong> (<em>portamento</em>), <strong>trills</strong>, <strong>tremolos</strong>, and <strong>glissandos</strong> in all three traditions.</li>
<li> <strong>Texture:</strong> The performance of Chinese and Arab music is predominantly <strong>heterophonic</strong> (where multiple instruments play slightly varied versions of the same melody simultaneously).</li>
<li> <strong>Rhythmic Language:</strong> The use of unique rhythmic modes is essential, such as <strong>īqā'āt</strong> (Arab rhythmic mode) and rhythmic patterns associated with the <strong>tāla</strong> (Indian rhythmic cycle).</li>
</ul>
<h4>3.7.1.1. Staging</h4>
<p>NOT APPLICABLE (Focus is on traditional and contemporary non-staged performances).</p>
<h4>3.7.1.2. Performer/audience relationship</h4>
<p>The size of the ensemble (small, chamber-like) often facilitates a <strong>more intimate relationship</strong> with the audience than a large symphony orchestra. Performances may take place in traditional settings (teahouses, courts) or move to modern concert halls.</p>
<h4>3.7.1.3. attire</h4>
<p>NOT APPLICABLE.</p>
<h4>3.7.1.4. ritualistic elements</h4>
<p>As noted in 3.1.1.1, the music functions in the context of <strong>mangal</strong> (joyous and auspicious occasions) and <strong>religious celebrations</strong>, lending a ritualistic element to the performance setting.</p>
<ul>
<li>  [YOUTUBE LINK: Example of an Arab <em>takht</em> ensemble performance, demonstrating heterophony and the <em>ud</em> instrument.]</li>
<li>  [PLACEHOLDER: DIAGRAM showing the seating arrangement of a typical Hindustani classical ensemble: <em>tambūrā</em> (drone), <em>tablā</em> (rhythm), and <em>sitār</em> or <em>sarōd</em> (melody).]</li>
<li>  [PLACEHOLDER: MUSIC NOTATION: An excerpt of a melody written in <strong>Chinese cipher notation</strong> (numbers 1-7).]</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default SmallEnsemble0307PerformancePracticePage;
