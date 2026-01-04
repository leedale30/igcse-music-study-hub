import React from 'react';
import { Link } from 'react-router-dom';

const Ch15TheElementsOfMusicPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 15</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">The Elements of Music</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 15
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Musical Elements & Analysis
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          The Elements of Music
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="The-Elements-of-Music"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">15.1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">The Elements of Music</span>
</h2>
<div className="para" id="The-Elements-of-Music-2">Creating contrast usually involves varying one or more of the “Elements of Music,” which are listed and explained below.<div className="autopermalink" data-description="Paragraph"><a href="#The-Elements-of-Music-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="table table-like" id="The-Elements-of-Music-3"><figcaption><span className="type">Table</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">15.1.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>The “Elements of Music”<div className="autopermalink" data-description='Table 15.1.1: The "Elements of Music"'><a href="#The-Elements-of-Music-3" title='Copy heading and permalink for Table 15.1.1: The "Elements of Music"' aria-label='Copy heading and permalink for Table 15.1.1: The "Elements of Music"'>🔗</a></div></figcaption><div className="tabular-box natural-width"><table className="tabular">
<tr>
<td className="c t b1 r1 l1 t1 lines"><em className="emphasis">Melody</em></td>
<td className="l t b1 r1 l0 t1"><div className="para" id="The-Elements-of-Music-3-2-3-2-1">We all know what melody is, but don’t confuse melody with ostinato! Melody lives and breathes and has variety.<div className="autopermalink" data-description="Paragraph"><a href="#The-Elements-of-Music-3-2-3-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
<tr>
<td className="c t b1 r1 l1 t0 lines"><em className="emphasis">Harmony</em></td>
<td className="l t b1 r1 l0 t0"><div className="para" id="The-Elements-of-Music-3-2-4-2-1">In this section, we will associate harmony with key and mode (major versus minor).<div className="autopermalink" data-description="Paragraph"><a href="#The-Elements-of-Music-3-2-4-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
<tr>
<td className="c t b1 r1 l1 t0 lines"><em className="emphasis">Rhythm</em></td>
<td className="l t b1 r1 l0 t0"><div className="para" id="The-Elements-of-Music-3-2-5-2-1">What the most common rhythmic value is in a section.<div className="autopermalink" data-description="Paragraph"><a href="#The-Elements-of-Music-3-2-5-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
<tr>
<td className="c t b1 r1 l1 t0 lines"><em className="emphasis">Timbre</em></td>
<td className="l t b1 r1 l0 t0"><div className="para" id="The-Elements-of-Music-3-2-6-2-1">The different tone colors of different instruments, and the different tone colors an individual instrument can produce.<div className="autopermalink" data-description="Paragraph"><a href="#The-Elements-of-Music-3-2-6-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
<tr>
<td className="c t b1 r1 l1 t0 lines"><em className="emphasis"><a href="14-01-Texture.html" className="internal" title="Section 14.1: Texture">Texture</a></em></td>
<td className="l t b1 r1 l0 t0"><div className="para" id="The-Elements-of-Music-3-2-7-2-1">Described <a href="14-01-Texture.html" className="internal" title="Section 14.1: Texture">in the previous chapter</a> as existing in the vertical plane (the number of voices) and the horizontal plane (rhythmic activity of the various voices).<div className="autopermalink" data-description="Paragraph"><a href="#The-Elements-of-Music-3-2-7-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
<tr>
<td className="c t b1 r1 l1 t0 lines"><em className="emphasis">Articulation</em></td>
<td className="l t b1 r1 l0 t0"><div className="para" id="The-Elements-of-Music-3-2-8-2-1">Staccato versus legato, or short, clipped notes versus long, sustained or connected notes.<div className="autopermalink" data-description="Paragraph"><a href="#The-Elements-of-Music-3-2-8-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
<tr>
<td className="c t b1 r1 l1 t0 lines"><em className="emphasis">Dynamics</em></td>
<td className="l t b1 r1 l0 t0"><div className="para" id="The-Elements-of-Music-3-2-9-2-1">Loud versus soft.<div className="autopermalink" data-description="Paragraph"><a href="#The-Elements-of-Music-3-2-9-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
<tr>
<td className="c t b1 r1 l1 t0 lines"><em className="emphasis">Register</em></td>
<td className="l t b1 r1 l0 t0"><div className="para" id="The-Elements-of-Music-3-2-10-2-1">High versus middle versus low.<div className="autopermalink" data-description="Paragraph"><a href="#The-Elements-of-Music-3-2-10-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></td>
</tr>
</table></div></figure><div className="para" id="The-Elements-of-Music-4">In the next two sections we will look at how two different pieces exhibit contrast between various sections using the elements of music.<div className="autopermalink" data-description="Paragraph"><a href="#The-Elements-of-Music-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Section 15.1: The Elements of Music"><a href="#The-Elements-of-Music" title="Copy heading and permalink for Section 15.1: The Elements of Music" aria-label="Copy heading and permalink for Section 15.1: The Elements of Music">🔗</a></div></section></div>
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

export default Ch15TheElementsOfMusicPage;
