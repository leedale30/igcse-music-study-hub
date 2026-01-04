import React from 'react';
import { Link } from 'react-router-dom';

const Ch03MinorscalesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 03</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Minor Scales</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 03
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Minor Keys
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Minor Scales
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="MinorScales"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">3.1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Minor Scales</span>
</h2>
<div className="para" id="MinorScales-2">There are three minor scales: the <dfn className="terminology">natural minor</dfn> scale, the <dfn className="terminology">harmonic minor</dfn> scale, and the <dfn className="terminology">melodic minor</dfn> scale. Play or sing through each one and notice the differences.<div className="autopermalink" data-description="Paragraph"><a href="#MinorScales-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/major-and-minor-scales.svg" role="img" className="contained" alt="The major, natural minor, harmonic minor, and melodic minor scales all starting on C, noting that the natural minor has lowered 3rd, 6th and 7th scale degrees, the harmonic minor has lowered 3rd and 6th scale degrees, and the ascending melodic minor scale as a lowered 3rd scale degree" /></div>
<div className="para" id="MinorScales-7">The melodic minor scale has an ascending version, shown above, and a descending version that is the same as the natural minor scale.<div className="autopermalink" data-description="Paragraph"><a href="#MinorScales-7" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/melodic-minor-asc-and-desc.svg" role="img" className="contained" alt="The ascending melodic minor scale on C has a lowered 3rd scale degree and the descending version has lowered 3rd, 6th, and 7th scale degrees" /></div>
<div className="para" id="MinorScales-9">So far, we have looked at minor scales in relation to the major scale. However, we will typically encounter minor scales in music using minor key signatures.<div className="autopermalink" data-description="Paragraph"><a href="#MinorScales-9" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Section 3.1: Minor Scales"><a href="#MinorScales" title="Copy heading and permalink for Section 3.1: Minor Scales" aria-label="Copy heading and permalink for Section 3.1: Minor Scales">🔗</a></div></section></div>
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

export default Ch03MinorscalesPage;
