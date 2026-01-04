import React from 'react';
import { Link } from 'react-router-dom';

const SmallEnsemble0304EconomicsAndPatronagePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/small-ensemble" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Small Ensemble</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Economics And Patronage</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Economics And Patronage
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>3.4. Economics &amp; Patronage: The financial systems supporting the music's creation.</h3>
<p>The economic support systems vary between traditional patronage and modern commercialism:</p>
<ul>
<li> <strong>Patronage (Traditional):</strong> In the Indian tradition, many musicians relied on <strong>patronage from the wealthy classes</strong> to secure employment and perform for auspicious occasions.</li>
<li> <strong>Commercialisation (Modern):</strong> Following the widespread trend in modern music (AOS 4–7), many groups now perform music commercially. Some Indian groups, for example, perform for <strong>tourists at hotels</strong> or have become modern <strong>concert performers</strong>. Chinese <em>Sizhu</em> transitioned to commercial performance in recording studios [67, 18(b)].</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default SmallEnsemble0304EconomicsAndPatronagePage;
