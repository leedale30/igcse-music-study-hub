import React from 'react';
import { Link } from 'react-router-dom';

const Classical0204ExtendedTechniquesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Extended Techniques</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Extended Techniques
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
<p>Rather than 20th-century 'extended techniques,' the focus in Classical music is on highly controlled articulation and decoration. Classical composers developed a sophisticated vocabulary of performance techniques that emphasized precision, clarity, and expressive nuance within established conventions.</p>
</section>
<section id="articulation">
<h2>Articulation Techniques</h2>
<p>Precise articulation is critical for character and clarity in Classical music. Students must be able to recognize and understand the expressive function of various articulation markings.</p>
<h3>Primary Articulation Types</h3>
<div className="articulation-grid">
<div className="articulation-type">
<h4>Legato</h4>
<p><strong>Definition:</strong> Smooth, connected playing</p>
<p><strong>Notation:</strong> Slur markings over note groups</p>
<p><strong>Effect:</strong> Creates flowing, lyrical character</p>
<p><strong>Usage:</strong> Melodic lines, expressive passages</p>
</div>
<div className="articulation-type">
<h4>Staccato</h4>
<p><strong>Definition:</strong> Detached, separated notes</p>
<p><strong>Notation:</strong> Dots above or below note heads</p>
<p><strong>Effect:</strong> Creates light, crisp character</p>
<p><strong>Usage:</strong> Dance movements, playful passages</p>
</div>
<div className="articulation-type">
<h4>Accent</h4>
<p><strong>Definition:</strong> Emphasis on specific notes</p>
<p><strong>Notation:</strong> &gt; symbol above or below notes</p>
<p><strong>Effect:</strong> Creates rhythmic emphasis</p>
<p><strong>Usage:</strong> Structural downbeats, important notes</p>
</div>
<div className="articulation-type">
<h4>Sforzando (sfz)</h4>
<p><strong>Definition:</strong> Sudden strong accent</p>
<p><strong>Notation:</strong> sfz, sf, or fz markings</p>
<p><strong>Effect:</strong> Creates dramatic emphasis</p>
<p><strong>Usage:</strong> Climactic moments, surprise effects</p>
</div>
</div>
</section>
<section id="ornamentation">
<h2>Ornamentation Techniques</h2>
<p>Melodic decoration is required knowledge in Classical music, representing a sophisticated system of embellishment that adds elegance and expression to melodic lines.</p>
<h3>Essential Ornaments</h3>
<div className="ornament-grid">
<div className="ornament">
<h4>Trill</h4>
<p><strong>Symbol:</strong> tr or ~~~</p>
<p><strong>Execution:</strong> Rapid alternation between main note and upper neighbor</p>
<p><strong>Function:</strong> Adds brilliance and excitement</p>
</div>
<div className="ornament">
<h4>Mordent</h4>
<p><strong>Symbol:</strong> Wavy line with vertical line</p>
<p><strong>Execution:</strong> Quick alternation: main note - lower neighbor - main note</p>
<p><strong>Function:</strong> Adds subtle decoration</p>
</div>
<div className="ornament">
<h4>Turn</h4>
<p><strong>Symbol:</strong> S-shaped curve</p>
<p><strong>Execution:</strong> Upper neighbor - main note - lower neighbor - main note</p>
<p><strong>Function:</strong> Creates graceful melodic curve</p>
</div>
<div className="ornament">
<h4>Appoggiatura</h4>
<p><strong>Notation:</strong> Small note before main note</p>
<p><strong>Execution:</strong> Dissonant note resolving downward</p>
<p><strong>Function:</strong> Creates emotional tension and release</p>
</div>
<div className="ornament">
<h4>Acciaccatura</h4>
<p><strong>Notation:</strong> Small note with slash through stem</p>
<p><strong>Execution:</strong> Very quick "crushed" note</p>
<p><strong>Function:</strong> Adds sharp, momentary dissonance</p>
</div>
</div>
<h3>Ornamentation in Performance Practice</h3>
<ul>
<li><strong>Written vs. Improvised:</strong> Classical composers increasingly wrote out ornaments</li>
<li><strong>Stylistic appropriateness:</strong> Ornaments must fit the musical context</li>
<li><strong>Structural function:</strong> Often used at cadential points</li>
<li><strong>Expressive purpose:</strong> Enhances emotional content of melody</li>
</ul>
</section>
<section id="string-techniques">
<h2>String Techniques</h2>
<p>Composers utilized specialized string techniques to create specific timbral effects and expressive qualities.</p>
<h3>Bowing Techniques</h3>
<div className="string-technique-grid">
<div className="technique">
<h4>Arco</h4>
<p><strong>Definition:</strong> Normal bowing technique</p>
<p><strong>Usage:</strong> Standard string playing method</p>
<p><strong>Effect:</strong> Sustained, expressive tone</p>
</div>
<div className="technique">
<h4>Pizzicato</h4>
<p><strong>Definition:</strong> Plucking the strings</p>
<p><strong>Notation:</strong> "pizz." marking</p>
<p><strong>Effect:</strong> Short, percussive sound</p>
<p><strong>Usage:</strong> Special effects, light textures</p>
</div>
<div className="technique">
<h4>Tremolo</h4>
<p><strong>Definition:</strong> Rapid repetition of a single note</p>
<p><strong>Notation:</strong> Note with tremolo markings</p>
<p><strong>Effect:</strong> Creates sustained, shimmering sound</p>
<p><strong>Usage:</strong> Dramatic effects, sustained harmonies</p>
</div>
</div>
<h3>Advanced String Effects</h3>
<ul>
<li><strong>Double stopping:</strong> Playing two notes simultaneously</li>
<li><strong>Harmonics:</strong> Light finger touch creating flute-like tones</li>
<li><strong>Sul ponticello:</strong> Bowing near the bridge for glassy tone</li>
<li><strong>Sul tasto:</strong> Bowing over the fingerboard for soft tone</li>
</ul>
</section>
<section id="wind-brass-techniques">
<h2>Wind and Brass Techniques</h2>
<h3>Wind Instrument Techniques</h3>
<ul>
<li><strong>Tonguing:</strong> Various articulation techniques using the tongue</li>
<li><strong>Slurring:</strong> Smooth connection between notes</li>
<li><strong>Breath control:</strong> Managing airflow for dynamic control</li>
<li><strong>Embouchure:</strong> Mouth position affecting tone quality</li>
</ul>
<h3>Brass Instrument Techniques</h3>
<ul>
<li><strong>Lip trills:</strong> Rapid alternation between adjacent harmonics</li>
<li><strong>Hand stopping:</strong> Horn technique using hand in bell</li>
<li><strong>Muting:</strong> Various mutes for different timbral effects</li>
<li><strong>Stopped notes:</strong> Partially closed horn bell for nasal tone</li>
</ul>
</section>
<section id="keyboard-techniques">
<h2>Keyboard Techniques</h2>
<p>The fortepiano enabled new expressive techniques that were impossible on the harpsichord.</p>
<h3>Touch and Dynamics</h3>
<ul>
<li><strong>Touch sensitivity:</strong> Varying finger pressure for dynamic control</li>
<li><strong>Pedaling:</strong> Use of sustaining pedal for resonance</li>
<li><strong>Articulation:</strong> Finger technique affecting note connection</li>
<li><strong>Voicing:</strong> Bringing out inner voices in complex textures</li>
</ul>
<h3>Classical Piano Style</h3>
<ul>
<li><strong>Alberti bass:</strong> Broken chord accompaniment pattern</li>
<li><strong>Scale passages:</strong> Rapid scalar runs for virtuosic effect</li>
<li><strong>Octave doubling:</strong> Reinforcing melodies in octaves</li>
<li><strong>Hand independence:</strong> Different articulations in each hand</li>
</ul>
</section>
<section id="performance-context">
<h2>Performance Context and Style</h2>
<h3>Classical Performance Aesthetic</h3>
<ul>
<li><strong>Clarity:</strong> Every note and ornament clearly articulated</li>
<li><strong>Balance:</strong> Proper relationship between melody and accompaniment</li>
<li><strong>Proportion:</strong> Appropriate use of dynamics and tempo</li>
<li><strong>Elegance:</strong> Refined execution without excessive emotion</li>
</ul>
<h3>Ensemble Considerations</h3>
<ul>
<li><strong>Precision:</strong> Exact coordination between performers</li>
<li><strong>Blend:</strong> Homogeneous sound in orchestral sections</li>
<li><strong>Balance:</strong> Proper dynamic relationships between parts</li>
<li><strong>Intonation:</strong> Accurate pitch in ensemble playing</li>
</ul>
</section>
<section id="assessment-points">
<h2>Key Assessment Points</h2>
<h3>Students should be able to:</h3>
<ul>
<li>Identify and describe basic articulation markings (legato, staccato, accent, sforzando)</li>
<li>Recognize standard ornaments (trill, mordent, turn, appoggiatura, acciaccatura)</li>
<li>Distinguish between pizzicato and arco string techniques</li>
<li>Understand the function of tremolo in string writing</li>
<li>Recognize the expressive purpose of ornamentation in Classical music</li>
<li>Understand how articulation contributes to musical character</li>
<li>Identify keyboard techniques specific to the fortepiano</li>
<li>Recognize wind and brass articulation techniques</li>
</ul>
</section>
<section id="navigation-footer">
<h2>Continue Your Study</h2>
<div className="nav-grid">
<a className="nav-card" href="aos02-02-03-vocal-techniques.html">
<h3>← Previous: 2.3 Vocal Techniques</h3>
<p>Review Classical vocal techniques and styles</p>
</a>
<a className="nav-card" href="aos02-02-05-improvisation.html">
<h3>Next: 2.5 Improvisation →</h3>
<p>Explore improvisation in Classical music</p>
</a>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default Classical0204ExtendedTechniquesPage;
