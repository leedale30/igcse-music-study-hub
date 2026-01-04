import React from 'react';
import { Link } from 'react-router-dom';

const Baroque0107TonalityPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/baroque" className="hover:text-sky-600 dark:hover:text-sky-400">Baroque Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Tonality</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Tonality
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 1 • Baroque Music
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
        <div dangerouslySetInnerHTML={{ __html: `Introduction 
<section>
<h2>Definition</h2>
<p>Tonality refers to the key centre or modal system that governs pitch relationships. The Baroque era cemented the use of the <strong>major-minor key system</strong>, establishing clear tonal centers around which all harmonic and melodic activity revolves.</p>
</section>
 Core Tonality System 
<section>
<h2>The Major-Minor Key System</h2>
<h3>Establishment of Tonal Centers</h3>
<p>Music is organized clearly around a major or minor key center, providing:</p>
<ul>
<li>A sense of harmonic stability and direction</li>
<li>Clear hierarchical relationships between pitches</li>
<li>Predictable patterns of tension and resolution</li>
<li>Structural coherence throughout entire movements</li>
</ul>
<h3>Major vs. Minor Tonalities</h3>
<p>Baroque composers exploited the contrasting characters of major and minor keys:</p>
<ul>
<li><strong>Major keys</strong> - Often associated with brightness, joy, and triumph</li>
<li><strong>Minor keys</strong> - Often associated with melancholy, introspection, and drama</li>
</ul>
</section>
 Modulation Patterns 
<section>
<h2>Modulation in Baroque Music</h2>
<h3>Closely Related Keys</h3>
<p>Modulations (key changes) predominantly occur to <strong>closely related keys</strong>, which share most of their pitches with the original key:</p>
<h4>From Major Keys:</h4>
<ul>
<li><strong>Dominant (V)</strong> - The most common modulation destination</li>
<li><strong>Subdominant (IV)</strong> - Less common but structurally important</li>
<li><strong>Relative Minor (vi)</strong> - Provides contrast while maintaining tonal stability</li>
</ul>
<h4>From Minor Keys:</h4>
<ul>
<li><strong>Relative Major (III)</strong> - The most common destination from minor</li>
<li><strong>Dominant (V)</strong> - Often to the dominant major</li>
<li><strong>Subdominant (iv)</strong> - Less frequent but expressive</li>
</ul>
</section>
 Key Relationships 
<section>
<h2>Understanding Key Relationships</h2>
<h3>Tonic Major and Minor</h3>
<p>Candidates must identify the relationship between <strong>tonic major and minor</strong> - keys that share the same tonic note but differ in their third degree (e.g., D major and D minor).</p>
<h3>Circle of Fifths Relationships</h3>
<p>Baroque modulations typically follow the circle of fifths, moving to keys that are:</p>
<ul>
<li>One sharp or flat away from the original key</li>
<li>Closely related in terms of shared pitches</li>
<li>Harmonically logical and smooth in transition</li>
</ul>
</section>
 Focus Work Examples 
<section>
<h2>Focus Work Examples</h2>
<h3>Vivaldi: Spring (from The Four Seasons)</h3>
<ul>
<li>Written in the bright key of <strong>E major</strong></li>
<li>Often modulates to <strong>B major (dominant)</strong> for contrast and development</li>
<li>Uses <strong>C# minor (relative minor)</strong> for episodes and contrasting sections</li>
<li>The choice of E major supports the programmatic content of spring's brightness</li>
</ul>
<h3>Handel: Concerto Grosso in D major Op. 6, No. 5</h3>
<ul>
<li>Movement 4 and 6 demonstrate contrasting tonalities</li>
<li><strong>D major in the Menuet (Movement 6)</strong> - Bright and dance-like character</li>
<li><strong>B minor in the Largo (Movement 4)</strong> - Melancholy and expressive mood</li>
<li>Shows how key choice affects the emotional character of movements</li>
</ul>
</section>
 Tonal Structure and Form 
<section>
<h2>Tonality and Musical Structure</h2>
<h3>Ritornello Form and Tonality</h3>
<p>In concerto movements, tonality helps define the structure:</p>
<ul>
<li><strong>Ritornello sections</strong> - Usually in the tonic key</li>
<li><strong>Episodes</strong> - Often modulate to related keys</li>
<li><strong>Return of ritornello</strong> - Confirms the return to tonic</li>
</ul>
<h3>Cadential Confirmation</h3>
<p>Key areas are established and confirmed through:</p>
<ul>
<li>Perfect cadences in the new key</li>
<li>Extended passages in the new tonal center</li>
<li>Characteristic harmonies of the destination key</li>
</ul>
</section>
 Performance and Expression 
<section>
<h2>Tonality and Musical Expression</h2>
<h3>Affective Qualities</h3>
<p>Different keys were believed to have specific emotional characteristics:</p>
<ul>
<li>Key choice often reflected the intended mood or character</li>
<li>Modulation created dramatic contrast and development</li>
<li>Return to the tonic provided resolution and closure</li>
</ul>
<h3>Instrumental Considerations</h3>
<p>Key choice was also influenced by:</p>
<ul>
<li>The technical capabilities of period instruments</li>
<li>The resonant qualities of string instruments</li>
<li>The limitations of keyboard tuning systems</li>
</ul>
</section>
 Essential Terminology 
<section>
<h2>Essential Terminology</h2>
<p>Students must identify and understand these tonal concepts:</p>
<ul>
<li><strong>Major and Minor Keys</strong> - The two primary tonal systems</li>
<li><strong>Tonic</strong> - The home key or key center</li>
<li><strong>Dominant</strong> - The fifth degree, most common modulation destination</li>
<li><strong>Subdominant</strong> - The fourth degree</li>
<li><strong>Relative Major/Minor</strong> - Keys sharing the same key signature</li>
<li><strong>Modulation</strong> - The process of changing from one key to another</li>
<li><strong>Closely Related Keys</strong> - Keys differing by one sharp or flat</li>
<li><strong>Key Signature</strong> - The sharps or flats that define a key</li>
</ul>
</section>
 Assessment Focus 
<section>
<h2>Assessment Focus</h2>
<p>For IGCSE examination purposes, students should be able to:</p>
<ul>
<li>Identify major and minor keys from musical examples</li>
<li>Recognize modulations to closely related keys</li>
<li>Understand the relationship between tonic major and minor</li>
<li>Identify dominant, subdominant, and relative key relationships</li>
<li>Analyze how key changes affect musical structure</li>
<li>Connect tonal choices to expressive and programmatic content</li>
<li>Recognize how tonality supports formal organization</li>
<li>Apply knowledge of key relationships to focus work examples</li>
</ul>
<p><strong>Important Note:</strong> Candidates must concentrate their analytical responses on the musical features actually heard in the recorded extracts, rather than generalizing based solely on knowledge of the Baroque period.</p>
</section>` }} />
      </div>
    </article>
  );
};

export default Baroque0107TonalityPage;
