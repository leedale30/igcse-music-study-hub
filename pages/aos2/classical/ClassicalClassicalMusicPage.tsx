import React from 'react';
import { Link } from 'react-router-dom';

const ClassicalClassicalMusicPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Classical Music</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Classical Music
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
        <div dangerouslySetInnerHTML={{ __html: `<section id="introduction">
<h2>Introduction</h2>
<p>In this unit, you will be looking at Classical instrumental music (c. 1750–1810), with an emphasis on <strong>chamber music</strong> composed for three to six players. This era favoured clear structures, logical design, and elegance, representing a shift from the ornate complexity of the Baroque period toward clarity, balance, and refined expression.</p>
</section>
<section id="core-style">
<h2>Core Style Characteristics</h2>
<p>You must learn the defining characteristics of the Classical style, which established the foundation for much of Western classical music:</p>
<ul>
<li><strong>Clear Structure:</strong> Music organized into well-defined sections with logical progression and development</li>
<li><strong>Elegant Melodies with Balanced Phrases:</strong> Often constructed in question-and-answer patterns, creating symmetrical and memorable musical statements</li>
<li><strong>Homophonic Texture:</strong> A preference for melody with accompaniment, providing clarity and directness of expression</li>
<li><strong>Harmonic Clarity:</strong> Use of functional harmony with clear tonal centers and logical chord progressions</li>
</ul>
</section>
<section id="sonata-form">
<h2>Sonata Form - The Key Structure to Master</h2>
<p><strong>Sonata form</strong> is the most important structural principle that composers used to organize their music in this period. You must understand its three main sections and their specific functions:</p>
<h3>1. Exposition</h3>
<p>Presents the main thematic material of the movement:</p>
<ul>
<li><strong>First Subject:</strong> Stated in the tonic (home) key, establishing the main character of the movement</li>
<li><strong>Transition:</strong> A passage that <em>modulates</em> (changes key) to prepare for the second subject</li>
<li><strong>Second Subject:</strong> Presented in the dominant key (or relative major if the movement is in a minor key), providing contrast to the first subject</li>
</ul>
<h3>2. Development</h3>
<p>The central section where themes are explored and manipulated:</p>
<ul>
<li>Themes are fragmented, combined, and transformed</li>
<li>Exploration through various keys creates harmonic tension</li>
<li>Demonstrates the composer's skill in thematic manipulation</li>
</ul>
<h3>3. Recapitulation</h3>
<p>The return and resolution of the opening material:</p>
<ul>
<li>Both first and second subjects return</li>
<li>Crucially, both subjects are now kept in the <strong>tonic key</strong> to achieve harmonic resolution</li>
<li>Provides structural and emotional closure to the movement</li>
</ul>
</section>
<section id="key-devices">
<h2>Key Musical Devices</h2>
<h3>Alberti Bass</h3>
<p>You should be able to identify the <strong>Alberti bass</strong>, a specific broken triad accompaniment figure following the pattern low-high-middle-high. This technique is strongly associated with Classical piano music and provides both harmonic support and rhythmic momentum while maintaining textural clarity.</p>
<h3>Classical Phrasing</h3>
<p>Classical music typically features regular, balanced phrase structures, often in four-bar units that create predictable yet satisfying patterns of tension and release.</p>
<h3>Dynamic Contrast</h3>
<p>Unlike Baroque terraced dynamics, Classical music employs more gradual dynamic changes, including crescendos and diminuendos, reflecting the expressive capabilities of newer instruments.</p>
</section>
<section id="chamber-music">
<h2>Chamber Music Focus</h2>
<p>Your study emphasizes chamber music - intimate instrumental compositions for small ensembles (typically 3-6 players). This genre allowed composers to explore subtle musical relationships and provided a more personal, conversational style of musical expression compared to larger orchestral works.</p>
<p>Key characteristics of Classical chamber music include:</p>
<ul>
<li>Equal importance of all instrumental parts</li>
<li>Intimate, conversational musical dialogue</li>
<li>Sophisticated interplay between instruments</li>
<li>Refined expression suitable for private performance spaces</li>
</ul>
</section>
<section id="focus-work">
<h2>Focus Work for Learning</h2>
<p>Your study will be based on analysis of:</p>
<ul>
<li><strong>Wolfgang Amadeus Mozart:</strong> <em>Quintet for piano and winds in E flat major, K. 452</em>, movement 1 (Largo – Allegro moderato)</li>
</ul>
<p><strong>Important Note:</strong> This specific work will <em>not</em> appear in your examination, but you will apply the musical features and analytical skills it teaches you to new, unseen music in the listening paper.</p>
</section>
<section id="learning-objectives">
<h2>Learning Objectives</h2>
<p>By the end of this unit, you should be able to:</p>
<ul>
<li>Identify and describe the key characteristics of Classical musical style</li>
<li>Analyze the structure and function of sonata form</li>
<li>Recognize homophonic texture and its role in Classical music</li>
<li>Identify Alberti bass and other Classical accompaniment patterns</li>
<li>Understand the principles of Classical phrase structure</li>
<li>Distinguish between exposition, development, and recapitulation sections</li>
<li>Apply Classical musical terminology accurately in written analysis</li>
<li>Appreciate the intimate character of chamber music</li>
</ul>
</section>
<section id="historical-context">
<h2>Historical Context</h2>
<p>The Classical period (c. 1750–1810) coincided with the Age of Enlightenment, emphasizing reason, clarity, and natural order. This philosophical movement influenced musical composition, leading to clearer structures and more accessible musical language. The period saw the rise of public concerts, the development of the piano, and the establishment of the symphony orchestra. Composers like Haydn, Mozart, and early Beethoven created works that balanced intellectual sophistication with emotional appeal, establishing principles that would influence Western music for generations.</p>
</section>
<section id="key-composers">
<h2>Important Composers</h2>
<p>While your focus work features Mozart, the Classical period was defined by several master composers:</p>
<ul>
<li><strong>Franz Joseph Haydn (1732-1809):</strong> "Father of the Symphony" and master of Classical form</li>
<li><strong>Wolfgang Amadeus Mozart (1756-1791):</strong> Exemplar of Classical elegance and perfection</li>
<li><strong>Ludwig van Beethoven (1770-1827):</strong> Bridged Classical and Romantic periods</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default ClassicalClassicalMusicPage;
