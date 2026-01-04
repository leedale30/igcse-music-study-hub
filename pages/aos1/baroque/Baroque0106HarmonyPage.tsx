import React from 'react';
import { Link } from 'react-router-dom';

const Baroque0106HarmonyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/baroque" className="hover:text-sky-600 dark:hover:text-sky-400">Baroque Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Harmony</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Harmony
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
<p>Harmony refers to the vertical stacking of pitches that supports or contrasts the melody. Baroque harmony is systematic and functional, relying on established conventions to drive the music forward and define key relationships.</p>
</section>
 Diatonic Foundation 
<section>
<h2>Diatonic Foundation</h2>
<h3>Functional Harmony</h3>
<p>Harmony is generally <strong>diatonic</strong> and <strong>functional</strong>, utilizing notes belonging to the major or minor scale and ensuring chords have a clear role in musical progression.</p>
<h3>Systematic Approach</h3>
<p>Baroque composers used established harmonic conventions that created predictable yet expressive progressions, allowing listeners to anticipate and appreciate both expected resolutions and surprising deviations.</p>
</section>
 Core Chords 
<section>
<h2>Core Chords in Baroque Harmony</h2>
<h3>Primary Chords</h3>
<p>There is heavy reliance on <strong>primary chords</strong>:</p>
<ul>
<li><strong>Tonic (I)</strong> - The home chord, providing stability and resolution</li>
<li><strong>Dominant (V)</strong> - Creates tension and drives toward resolution to the tonic</li>
<li><strong>Subdominant (IV)</strong> - Provides contrast and supports harmonic progression</li>
</ul>
<h3>Chord Function</h3>
<p>Each chord serves a specific function in the harmonic progression, creating a sense of departure from and return to the tonic center.</p>
</section>
 Harmonic Devices 
<section>
<h2>Common Harmonic Devices</h2>
<h3>Pedal Notes</h3>
<p>Sustained or repeated notes, usually tonic or dominant, that provide harmonic stability while other voices move above. Handel's fugal Movement 2 provides an example of a dominant pedal.</p>
<h3>Suspensions</h3>
<p>Create transient tension before resolution by temporarily displacing a chord tone with a non-harmonic note that then resolves downward by step.</p>
<h3>Sequential Progressions</h3>
<p>Harmonic patterns that repeat at different pitch levels, creating forward momentum and structural coherence.</p>
</section>
 Cadences 
<section>
<h2>Cadences - Harmonic Punctuation</h2>
<p>Cadences are frequently used to punctuate phrases and define formal sections:</p>
<h3>Perfect Cadence (V-I)</h3>
<ul>
<li>The strongest cadential resolution</li>
<li>Creates definitive closure</li>
<li>Most commonly used at the ends of sections and movements</li>
</ul>
<h3>Imperfect Cadence (II/IV-V)</h3>
<ul>
<li>Creates expectation and forward momentum</li>
<li>Often used at phrase endings that require continuation</li>
<li>Leaves the listener expecting resolution to the tonic</li>
</ul>
<h3>Phrygian Cadence (IVb-V)</h3>
<ul>
<li>Handel's Movement 4 famously ends with a Phrygian cadence</li>
<li>Used to link movements</li>
<li>Creates a melancholy mood</li>
<li>Features a distinctive half-step descent in the bass</li>
</ul>
</section>
 Chromatic Elements 
<section>
<h2>Chromatic Harmony</h2>
<h3>Limited Chromaticism</h3>
<p>While primarily diatonic, minor instances of <strong>chromatic harmony</strong> can be found, particularly in the bass line, adding color and expressive intensity to the harmonic progression.</p>
<h3>Purpose of Chromaticism</h3>
<ul>
<li>Creates temporary tonicization of related keys</li>
<li>Adds expressive intensity at climactic moments</li>
<li>Provides smooth voice leading between diatonic chords</li>
<li>Enhances the emotional impact of important structural points</li>
</ul>
</section>
 Focus Work Examples 
<section>
<h2>Focus Work Examples</h2>
<h3>Handel: Concerto Grosso in D major Op. 6, No. 5</h3>
<ul>
<li>Movement 2 demonstrates dominant pedal technique in fugal writing</li>
<li>Movement 4 features the distinctive Phrygian cadence for linking movements</li>
<li>Shows typical Baroque functional harmony with clear tonic-dominant relationships</li>
</ul>
<h3>Vivaldi: Spring (from The Four Seasons)</h3>
<ul>
<li>Demonstrates clear diatonic harmony supporting the programmatic content</li>
<li>Uses functional progressions to create structural coherence</li>
<li>Shows typical concerto harmony with clear cadential punctuation</li>
</ul>
</section>
 Performance Practice 
<section>
<h2>Performance Practice and Harmony</h2>
<h3>Basso Continuo</h3>
<p>The harmonic foundation was often provided by the basso continuo, where keyboard players would realize the harmony from figured bass notation, adding appropriate chords above the written bass line.</p>
<h3>Harmonic Rhythm</h3>
<p>The rate of harmonic change varies according to the musical context, with faster harmonic rhythm often used to create excitement and slower changes for stability and repose.</p>
</section>
 Assessment Focus 
<section>
<h2>Assessment Focus</h2>
<p>For IGCSE examination purposes, students should be able to:</p>
<ul>
<li>Identify primary chords (I, IV, V) and their functions</li>
<li>Recognize different types of cadences and their effects</li>
<li>Understand the concept of functional harmony</li>
<li>Identify harmonic devices such as pedal notes and suspensions</li>
<li>Distinguish between diatonic and chromatic harmony</li>
<li>Analyze how harmony supports the overall structure</li>
<li>Connect harmonic characteristics to specific focus work examples</li>
<li>Understand the role of basso continuo in Baroque harmony</li>
</ul>
<p><strong>Important Note:</strong> Candidates must concentrate their analytical responses on the musical features actually heard in the recorded extracts, rather than generalizing based solely on knowledge of the Baroque period.</p>
</section>` }} />
      </div>
    </article>
  );
};

export default Baroque0106HarmonyPage;
