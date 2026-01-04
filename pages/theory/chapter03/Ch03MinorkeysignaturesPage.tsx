import React from 'react';
import { Link } from 'react-router-dom';

const Ch03MinorkeysignaturesPage: React.FC = () => {
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
        <span className="text-gray-700 dark:text-gray-300">Minor Key Signatures</span>
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
          Minor Key Signatures
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
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="MinorKeySignatures"><h2 className="heading hide-type">
<span className="type">Section</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">3.2</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="title">Minor Key Signatures</span>
</h2>
<div className="para" id="MinorKeySignatures-2">Minor key signatures agree with the notes of the natural minor scale. Since the <span className="process-math">\\(\\text{C}\\)</span> natural minor scale had <span className="process-math">\\(\\text{E}^♭\\)</span>, <span className="process-math">\\(\\text{A}^♭\\)</span>, and <span className="process-math">\\(\\text{B}^♭\\)</span>, the key signature of C minor has three flats, written in the order of flats—<span className="process-math">\\(\\text{B}^♭\\)</span>, <span className="process-math">\\(\\text{E}^♭\\)</span>, <span className="process-math">\\(\\text{A}^♭\\)</span>.<div className="autopermalink" data-description="Paragraph"><a href="#MinorKeySignatures-2" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/natural-minor-scale-with-minor-key-sig.svg" role="img" className="contained" alt="An example showing the lowered 3rd, 6th, and 7th scale degrees placed after the clef as the key signature for the minor key" /></div>
<div className="para" id="MinorKeySignatures-4">Therefore, a minor key signature will have three lowered notes—the 3rd, 6th, and 7th—in relation to the corresponding major key signature. We use the term <dfn className="terminology">parallel minor</dfn> when referring to a minor scale that <em className="emphasis">has the same 1st scale degree</em> (in this case <span className="process-math">\\(\\text{C}\\)</span>) as the major. We say, “The parallel minor of <span className="process-math">\\(\\text{E}\\)</span> major is <span className="process-math">\\(\\text{E}\\)</span> minor,” and “The parallel major of <span className="process-math">\\(\\text{F}\\)</span> minor is <span className="process-math">\\(\\text{F}\\)</span> major.” One method of figuring out a minor key signature is to add three flats to the parallel major key signature. This is the same as subtracting three sharps.<div className="autopermalink" data-description="Paragraph"><a href="#MinorKeySignatures-4" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/minor-parallel-add-3-flats.svg" role="img" className="contained" alt="Adding 3 flats or subtracting 3 sharps to get to the parallel minor key signature from the major key" /></div>
<div className="para" id="MinorKeySignatures-6">Note on uppercase versus lowercase: When writing below the five-line staff to designate keys, we will use the shorthand of upper case for major (<span className="process-math">\\(\\left.\\text{C}\\right.\\)</span>) and lowercase for minor (<span className="process-math">\\(\\left.\\text{c}\\right.\\)</span>). When writing prose, we will use uppercase: C major and C minor.<div className="autopermalink" data-description="Paragraph"><a href="#MinorKeySignatures-6" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="para" id="MinorKeySignatures-7">We use the term <dfn className="terminology">relative minor</dfn> when referring to a minor key that <em className="emphasis">has the same key signature</em> as a major key. For example, the relative minor of <span className="process-math">\\(\\text{E}^♭\\)</span> major is <span className="process-math">\\(\\text{C}\\)</span> minor because both have three flats in the key signature. Conversely, one could say the relative major of <span className="process-math">\\(\\text{C}\\)</span> minor is <span className="process-math">\\(\\text{E}^♭\\)</span> major. The relative major is three half steps <em className="emphasis">above</em> the relative minor.<div className="autopermalink" data-description="Paragraph"><a href="#MinorKeySignatures-7" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/half-steps-between-rel-maj-rel-min.svg" role="img" className="contained" alt="Example showing that the relative minor is 3 half steps below the relative major: Eb, D, Db, C" /></div>
<div className="para" id="MinorKeySignatures-9">Below are the minor key signatures.<div className="autopermalink" data-description="Paragraph"><a href="#MinorKeySignatures-9" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/minor-key-signatures.svg" role="img" className="contained" alt="All minor key signatures are shown" /></div>
<div className="para" id="MinorKeySignatures-11">Here are circle of fifths diagrams for both major and minor, for comparison.<div className="autopermalink" data-description="Paragraph"><a href="#MinorKeySignatures-11" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="MinorKeySignatures-12"><div className="image-box"><img src="/theory/external/images/unit1/circle-of-fifths-minor.svg" role="img" className="contained" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">3.2.1<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span><div className="autopermalink" data-description="Figure 3.2.1"><a href="#MinorKeySignatures-12" title="Copy heading and permalink for Figure 3.2.1" aria-label="Copy heading and permalink for Figure 3.2.1">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="MinorKeySignatures-13"><div className="image-box"><img src="/theory/external/images/unit1/circle-of-fifths-major.svg" role="img" className="contained" /></div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">3.2.2<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span><div className="autopermalink" data-description="Figure 3.2.2"><a href="#MinorKeySignatures-13" title="Copy heading and permalink for Figure 3.2.2" aria-label="Copy heading and permalink for Figure 3.2.2">🔗</a></div></figcaption></figure><div className="para" id="MinorKeySignatures-14">Writing harmonic minor and melodic minor scales <em className="emphasis">when using minor key signatures</em> requires you to <em className="emphasis">raise</em> scale degrees.<div className="autopermalink" data-description="Paragraph"><a href="#MinorKeySignatures-14" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<div className="image-box"><img src="/theory/external/images/unit1/minor-scales-in-minor.svg" role="img" className="contained" alt="Example showing raising of 7th scale degree of the harmonic minor when using minor key signature, and raising 6th and 7th scale degrees of ascending melodic minor when using minor key signature" /></div>
<div className="para" id="MinorKeySignatures-16">Compositions in minor typically do not strictly use only one of the three minor scales, however. The three minor scales are distillations of composers’ actual practice.<div className="autopermalink" data-description="Paragraph"><a href="#MinorKeySignatures-16" title="Copy heading and permalink for Paragraph" aria-label="Copy heading and permalink for Paragraph">🔗</a></div>
</div>
<figure className="figure figure-like" id="MinorKeySignatures-17"><div className="image-box"><img src="/theory/external/images/unit1/bach-c-minor-invention.svg" role="img" className="contained" alt="The opening two measures of Bach’s C Minor Invention, which uses natural minor then harmonic minor" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/HFeLqgVLxBM?&amp;modestbranding=1&amp;rel=0&amp;start=164&amp;end=173" id="MinorKeySignatures-17-3"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">3.2.3<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>J.S. Bach, C Minor Invention<div className="autopermalink" data-description="Figure 3.2.3"><a href="#MinorKeySignatures-17" title="Copy heading and permalink for Figure 3.2.3" aria-label="Copy heading and permalink for Figure 3.2.3">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="MinorKeySignatures-18"><div className="image-box"><img src="/theory/external/images/unit1/mozart-k-550-i-minor-scales.svg" role="img" className="contained" alt="The opening eight measures, which show the natural minor scale in the first six and the harmonic minor scale in the last two" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/O0PChj-uQPo?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=10" id="MinorKeySignatures-18-3"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">3.2.4<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>Mozart, Symphony No. 40 in G Minor, K. 550, 1st movement<div className="autopermalink" data-description="Figure 3.2.4"><a href="#MinorKeySignatures-18" title="Copy heading and permalink for Figure 3.2.4" aria-label="Copy heading and permalink for Figure 3.2.4">🔗</a></div></figcaption></figure><figure className="figure figure-like" id="MinorKeySignatures-19"><div className="image-box"><img src="/theory/external/images/unit1/bach-c-minor-fugue-book-1-minor-scales.svg" role="img" className="contained" alt="TThe opening three measures, which uses harmonic minor then melodic minor" /></div>
<div className="video-box">
<div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 14 96 68" preserveAspectRatio="none"><path fill="#e62117" d="M94.98,28.84c0,0-0.94-6.6-3.81-9.5c-3.64-3.81-7.72-3.83-9.59-4.05c-13.4-0.97-33.52-0.85-33.52-0.85s-20.12-0.12-33.52,0.85c-1.87,0.22-5.95,0.24-9.59,4.05c-2.87,2.9-3.81,9.5-3.81,9.5S0.18,36.58,0,44.33v7.26c0.18,7.75,1.14,15.49,1.14,15.49s0.93,6.6,3.81,9.5c3.64,3.81,8.43,3.69,10.56,4.09c7.53,0.72,31.7,0.89,32.54,0.9c0.01,0,20.14,0.03,33.54-0.94c1.87-0.22,5.95-0.24,9.59-4.05c2.87-2.9,3.81-9.5,3.81-9.5s0.96-7.75,1.02-15.49v-7.26C95.94,36.58,94.98,28.84,94.98,28.84z M38.28,61.41v-27l25.74,13.5L38.28,61.41z"></path></svg></div>
<div className="hidden-content"><iframe className="video" allowfullscreen="" src="https://www.youtube-nocookie.com/embed/xp3zPzDnTEk?&amp;modestbranding=1&amp;rel=0&amp;start=0&amp;end=8" id="MinorKeySignatures-19-3"></iframe></div>
</div>
<figcaption><span className="type">Figure</span><span className="space heading-divison-mark heading-divison-mark__space"> </span><span className="codenumber">3.2.5<span className="period heading-divison-mark heading-divison-mark__period">.</span></span><span className="space heading-divison-mark heading-divison-mark__space"> </span>J.S. Bach, Well-Tempered Clavier, Book One, Fugue 2 in C Minor<div className="autopermalink" data-description="Figure 3.2.5"><a href="#MinorKeySignatures-19" title="Copy heading and permalink for Figure 3.2.5" aria-label="Copy heading and permalink for Figure 3.2.5">🔗</a></div></figcaption></figure><div className="autopermalink" data-description="Section 3.2: Minor Key Signatures"><a href="#MinorKeySignatures" title="Copy heading and permalink for Section 3.2: Minor Key Signatures" aria-label="Copy heading and permalink for Section 3.2: Minor Key Signatures">🔗</a></div></section></div>
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

export default Ch03MinorkeysignaturesPage;
