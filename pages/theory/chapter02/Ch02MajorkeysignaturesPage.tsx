import React from 'react';
import { Link } from 'react-router-dom';

const Ch02MajorkeysignaturesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 02</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Major Key Signatures</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 02
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Major Keys
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Major Key Signatures
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="MajorKeySignatures"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">2.3</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Major Key Signatures</span>
</h2>
<section className="introduction" id="MajorKeySignatures-2"><div className="para" id="MajorKeySignatures-2-1">A key signature is placed at the beginning of a piece (or the beginning of a section) and is written with the clef on the beginning of each line of music. The <dfn className="terminology">key signature</dfn> reminds the performer which sharps or flats are in the scale (or key) of the piece and prevents the composer or arranger from writing every sharp or flat from the scale every time it occurs.<div className="autopermalink" data-description="Paragraph"><a href="#MajorKeySignatures-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="MajorKeySignatures-2-2"><div className="image-box"><img src="/theory/external/images/unit1/twinkle-in-d-major.svg" role="img" className="contained" alt='"Twinkle, Twinkle, Little Star" in D major' /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">2.3.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>"Twinkle, Twinkle, Little Star" in D major<div className="autopermalink" data-description="Figure 2.3.1"><a href="#MajorKeySignatures-2-2" title="Copy heading and permalink for Figure 2.3.1" aria-label="Copy heading and permalink for Figure 2.3.1">🔗</a></div></figcaption></figure><div className="para" id="MajorKeySignatures-2-3">There are 15 major key signatures. The key of C major has no sharps or flats in the key signature. The other key signatures can have between 1 to 7 sharps and 1 to 7 flats, giving us the other 14 key signatures.<div className="autopermalink" data-description="Paragraph"><a href="#MajorKeySignatures-2-3" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="MajorKeySignatures-2-4"><div className="image-box"><img src="/theory/external/images/unit1/major-with-sharps.svg" role="img" className="contained" alt="Major Key Signatures using Sharps" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">2.3.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Major Key Signatures using Sharps<div className="autopermalink" data-description="Figure 2.3.2"><a href="#MajorKeySignatures-2-4" title="Copy heading and permalink for Figure 2.3.2" aria-label="Copy heading and permalink for Figure 2.3.2">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="MajorKeySignatures-2-5"><div className="image-box"><img src="/theory/external/images/unit1/major-with-flats.svg" role="img" className="contained" alt="Major Key Signatures using Flats" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">2.3.3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Major Key Signatures using Flats<div className="autopermalink" data-description="Figure 2.3.3"><a href="#MajorKeySignatures-2-5" title="Copy heading and permalink for Figure 2.3.3" aria-label="Copy heading and permalink for Figure 2.3.3">🔗</a></div></figcaption></figure><div className="para" id="MajorKeySignatures-2-6">It is important to memorize the order of sharps and flats, since you will be writing key signatures regularly.<div className="autopermalink" data-description="Paragraph"><a href="#MajorKeySignatures-2-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="MajorKeySignatures-2-7">The <dfn className="terminology">order of sharps</dfn> is <span className="process-math">\\(\\text{F}\\)</span>–<span className="process-math">\\(\\text{C}\\)</span>–<span className="process-math">\\(\\text{G}\\)</span>–<span className="process-math">\\(\\text{D}\\)</span>–<span className="process-math">\\(\\text{A}\\)</span>–<span className="process-math">\\(\\text{E}\\)</span>–<span className="process-math">\\(\\text{B}\\)</span>, often remembered by a mnemonic. One common mnemonic for the order of sharps is “Fast Cars Go Dangerously Around Every Bend.”<div className="autopermalink" data-description="Paragraph"><a href="#MajorKeySignatures-2-7" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="MajorKeySignatures-2-8">The <dfn className="terminology">order of flats</dfn> is <span className="process-math">\\(\\text{B}\\)</span>–<span className="process-math">\\(\\text{E}\\)</span>–<span className="process-math">\\(\\text{A}\\)</span>–<span className="process-math">\\(\\text{D}\\)</span>–<span className="process-math">\\(\\text{G}\\)</span>–<span className="process-math">\\(\\text{C}\\)</span>–<span className="process-math">\\(\\text{F}\\)</span>. It is the reverse of the order of sharps. It is easy to remember since the first four letters make the word BEAD, and GCF is something most students learn as “Greatest Common Factor” when studying math in elementary school.<div className="autopermalink" data-description="Paragraph"><a href="#MajorKeySignatures-2-8" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="MajorKeySignatures-2-9">A mnemonic that works forward and backward is “Father Charles Goes Down And Ends Battle,” which reversed is “Battle Ends And Down Goes Charles’ Father.”<div className="autopermalink" data-description="Paragraph"><a href="#MajorKeySignatures-2-9" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="MajorKeySignatures-2-10">A helpful learning device to remember the order of keys in relation to the order of sharps and flats is the <dfn className="terminology">circle of fifths</dfn>. As you ascend in fifths (clockwise), key signatures get one degree “sharper.” (<span className="process-math">\\(\\text{C}\\)</span> to <span className="process-math">\\(\\text{G}\\)</span> is a fifth because <span className="process-math">\\(\\text{C}\\)</span>=1, <span className="process-math">\\(\\text{D}\\)</span>=2, <span className="process-math">\\(\\text{E}\\)</span>=3, <span className="process-math">\\(\\text{F}\\)</span>=4, and <span className="process-math">\\(\\text{G}\\)</span>=5.) As you descend in fifths (counterclockwise), key signatures get one degree “flatter.”<div className="autopermalink" data-description="Paragraph"><a href="#MajorKeySignatures-2-10" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="circle-of-fifths-major"><div className="image-box"><img src="/theory/external/images/unit1/circle-of-fifths-major.svg" role="img" className="contained" alt="Circle of Fifths for Major Keys" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">2.3.4<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Circle of Fifths for Major Keys<div className="autopermalink" data-description="Figure 2.3.4"><a href="#circle-of-fifths-major" title="Copy heading and permalink for Figure 2.3.4" aria-label="Copy heading and permalink for Figure 2.3.4">🔗</a></div></figcaption></figure><div className="para" id="MajorKeySignatures-2-12">Note the overlapping keys at the bottom of the circle. <span className="process-math">\\(\\text{B}\\)</span> major is enharmonically the same as <span className="process-math">\\(\\text{C}^♭\\)</span> major, <span className="process-math">\\(\\text{F}^♯\\)</span> major is enharmonically the same as <span className="process-math">\\(\\text{G}^♭\\)</span> major, and <span className="process-math">\\(\\text{C}^♯\\)</span> major is enharmonically the same as <span className="process-math">\\(\\text{D}^♭\\)</span> major.<div className="autopermalink" data-description="Paragraph"><a href="#MajorKeySignatures-2-12" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div></section><section className="subsection" id="MajorKeySignatures-3"><h3 className="heading hide-type">
<span className="type">Subsection</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">2.3.1</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Identifying Key Signatures</span>
</h3>
<div className="para" id="MajorKeySignatures-3-2">While it is preferable to memorize key signatures, use the following method to determine major key signatures based on the sharps or flats in the key signature.<div className="autopermalink" data-description="Paragraph"><a href="#MajorKeySignatures-3-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<ol className="decimal" id="MajorKeySignatures-3-3">
<li id="MajorKeySignatures-3-3-1">
<div className="para" id="MajorKeySignatures-3-3-1-1">
<em className="emphasis">For key signatures withs sharps</em>: Go up a half step from the last sharp to find the key.<div className="autopermalink" data-description="Paragraph"><a href="#MajorKeySignatures-3-3-1-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item 1"><a href="#MajorKeySignatures-3-3-1" title="Copy heading and permalink for Item 1" aria-label="Copy heading and permalink for Item 1">🔗</a></div>
</li>
<li id="MajorKeySignatures-3-3-2">
<div className="para" id="MajorKeySignatures-3-3-2-1">
<em className="emphasis">For key signatures with flats</em>: The second-to-last flat is the key.<div className="autopermalink" data-description="Paragraph"><a href="#MajorKeySignatures-3-3-2-1" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="autopermalink" data-description="Item 2"><a href="#MajorKeySignatures-3-3-2" title="Copy heading and permalink for Item 2" aria-label="Copy heading and permalink for Item 2">🔗</a></div>
</li>
</ol>
<div className="autopermalink" data-description="Subsection 2.3.1: Identifying Key Signatures"><a href="#MajorKeySignatures-3" title="Copy heading and permalink for Subsection 2.3.1: Identifying Key Signatures" aria-label="Copy heading and permalink for Subsection 2.3.1: Identifying Key Signatures">🔗</a></div></section><div className="autopermalink" data-description="Section 2.3: Major Key Signatures"><a href="#MajorKeySignatures" title="Copy heading and permalink for Section 2.3: Major Key Signatures" aria-label="Copy heading and permalink for Section 2.3: Major Key Signatures">🔗</a></div></section></div>
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

export default Ch02MajorkeysignaturesPage;
