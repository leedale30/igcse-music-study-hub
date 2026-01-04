import React from 'react';
import { Link } from 'react-router-dom';

const Ch22KeyrelationshipsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 22</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Key Relationships</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 22
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Modulation
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Key Relationships
        </h1>
      </header>

      {/* Main Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none
        prose-headings:text-slate-800 dark:prose-headings:text-slate-100
        prose-h2:text-2xl prose-h2:font-bold prose-h2:border-b prose-h2:border-slate-200 dark:prose-h2:border-slate-700 prose-h2:pb-2 prose-h2:mb-4
        prose-h3:text-xl prose-h3:font-semibold
        prose-h4:text-lg prose-h4:font-medium
        prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
        prose-li:text-gray-700 dark:prose-li:text-gray-300
        prose-strong:text-slate-800 dark:prose-strong:text-slate-200
        prose-a:text-sky-600 dark:prose-a:text-sky-400 prose-a:hover:underline
        prose-img:rounded-lg prose-img:shadow-md prose-img:mx-auto
        prose-figure:my-6
        prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-gray-500 dark:prose-figcaption:text-gray-400
        [&_section]:mb-8 [&_section]:bg-slate-50 dark:[&_section]:bg-slate-800/50 [&_section]:rounded-lg [&_section]:p-6
        [&_table]:w-full [&_th]:bg-slate-100 dark:[&_th]:bg-slate-700 [&_th]:p-2 [&_td]:p-2 [&_td]:border [&_td]:border-slate-200 dark:[&_td]:border-slate-600
      ">
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="KeyRelationships"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.3</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Key Relationships</span>
</h2>
<div className="para" id="KeyRelationships-2">In the Baroque and Classical eras, composers typically modulated to the dominant (when starting in a major key) or to the relative major (when starting in a minor key). In the Romantic era, composers experimented with modulating to more remote (or perhaps adventurous) key areas, described as “foreign” to the home key.<div className="autopermalink" data-description="Paragraph"><a href="#KeyRelationships-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="KeyRelationships-3">“<dfn className="terminology">Closely related</dfn>” keys have key signatures one degree “sharper” or “flatter” than the starting key. For any major or minor key, there are five closely related keys, including the relative major or minor of the home key.<div className="autopermalink" data-description="Paragraph"><a href="#KeyRelationships-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="KeyRelationships-4"><div className="image-box"><img src="/theory/external/images/unit5/mod-closely-related-keysB.svg" role="img" className="contained" alt="" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">22.3.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Closely Related Keys with A Major as Home Key<div className="autopermalink" data-description="Figure 22.3.1"><a href="#KeyRelationships-4" title="Copy heading and permalink for Figure 22.3.1" aria-label="Copy heading and permalink for Figure 22.3.1">🔗</a></div></figcaption></figure><div className="para" id="KeyRelationships-5">Key signatures that are not closely related are said to be “<dfn className="terminology">foreign</dfn>” or “<dfn className="terminology">distantly related</dfn>.” We will see that some types of modulations from the Romantic era, like common-tone modulations, exploit foreign key relationships to dramatic effect.<div className="autopermalink" data-description="Paragraph"><a href="#KeyRelationships-5" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Section 22.3: Key Relationships"><a href="#KeyRelationships" title="Copy heading and permalink for Section 22.3: Key Relationships" aria-label="Copy heading and permalink for Section 22.3: Key Relationships">🔗</a></div></section></div>
<div id="ptx-content-footer" className="ptx-content-footer">
</div>` }} />
      </div>

      {/* Back to Theory Index */}
      <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
        <Link
          to="/theory"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg transition-colors"
        >
          ← Back to Theory Index
        </Link>
      </div>
    </article>
  );
};

export default Ch22KeyrelationshipsPage;
