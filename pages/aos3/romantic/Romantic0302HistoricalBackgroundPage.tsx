import React from 'react';
import { Link } from 'react-router-dom';

const Romantic0302HistoricalBackgroundPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Historical Background</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Historical Background
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>3.2. Historical Background: The evolution of the style or tradition and its socio-political influences.</h3>
<p>The Romantic period (roughly 1810 to 1900) was defined by two major shifts: the decline of court patronage and the <strong>expansion of the orchestra</strong>.</p>
<ul>
<li> <strong>Patronage Shift:</strong> The social changes following the French Revolution led to a gradual reduction in the aristocratic patronage that supported composers like Haydn and Mozart. Composers increasingly worked independently, relying on income from the <strong>performance and publication</strong> of their music. This freedom fostered greater <strong>individuality of style</strong> and intense, personal expression of emotion.</li>
<li> <strong>Orchestra Expansion:</strong> The orchestra underwent a massive increase in both size and range.</li>
<li> <strong>Woodwind:</strong> New instruments like the <strong>piccolo, cor anglais, bass clarinet, and contrabassoon</strong> provided a broader range of tone colour and pitch.</li>
<li> <strong>Brass:</strong> The invention of the <strong>valve</strong> allowed brass instruments to play a full <strong>chromatic scale</strong>, increasing their range and flexibility. The brass section grew substantially, including three trombones and a <strong>tuba</strong>.</li>
<li> <strong>Strings:</strong> The string section increased in number to balance the greater sound weight of the brass and woodwind sections, and instruments like the <strong>harp</strong> were commonly added.</li>
<li> <strong>Percussion:</strong> A wider variety of <strong>tuned and untuned percussion</strong> was incorporated for dramatic effects.</li>
<li> <strong>Programme Music:</strong> Instrumental music became increasingly programmatic, aiming to describe a specific story, poem, or scene (Programmatic music tells a story without using words). The Focus Work, <em>Vltava</em>, is a <strong>symphonic poem</strong> (or tone poem), a single-movement orchestral work that directly follows a narrative—the journey of a river.</li>
</ul>
<ul>
<li>  [DIAGRAM: Comparison of the size and instrumentation (brass, woodwind, percussion) of a Classical orchestra vs. a Romantic symphony orchestra.]</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default Romantic0302HistoricalBackgroundPage;
