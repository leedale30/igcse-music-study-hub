import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen0106HarmonyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Harmony</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Harmony
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 7 • Music for Stage and Screen
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
        <div dangerouslySetInnerHTML={{ __html: `<section id="introduction">
<h3>Understanding Harmony in Music for Stage and Screen</h3>
<p>Harmony in music for stage and screen serves multiple dramatic and emotional functions. It creates atmosphere, supports narrative development, and enhances the visual elements of ballet, film, and computer games. Harmonic progressions can establish character themes, create tension, and provide emotional resolution.</p>
</section>
<section id="ballet-harmony">
<h3>Harmony in Ballet</h3>
<h4>Classical Ballet Harmony</h4>
<ul>
<li><strong>Tonal harmony:</strong> Traditional major and minor key relationships</li>
<li><strong>Functional progressions:</strong> I-V-I cadences for resolution and closure</li>
<li><strong>Character themes:</strong> Specific harmonic progressions associated with characters</li>
<li><strong>Modulation:</strong> Key changes to reflect dramatic development</li>
</ul>
<h4>Modern Ballet Harmony</h4>
<ul>
<li><strong>Extended harmony:</strong> Use of 7th, 9th, and 11th chords</li>
<li><strong>Modal harmony:</strong> Use of church modes for different colors</li>
<li><strong>Quartal harmony:</strong> Chords built on fourths rather than thirds</li>
<li><strong>Polytonality:</strong> Multiple keys sounding simultaneously</li>
</ul>
</section>
<section id="film-harmony">
<h3>Harmony in Film Music</h3>
<h4>Leitmotif Harmony</h4>
<ul>
<li><strong>Character themes:</strong> Specific harmonic progressions for main characters</li>
<li><strong>Harmonic transformation:</strong> Altering harmony to show character development</li>
<li><strong>Motivic harmony:</strong> Short harmonic patterns that recur throughout the film</li>
</ul>
<h4>Atmospheric Harmony</h4>
<ul>
<li><strong>Suspended chords:</strong> Creating tension and uncertainty</li>
<li><strong>Cluster chords:</strong> Dense harmonies for dramatic effect</li>
<li><strong>Pedal points:</strong> Sustained bass notes under changing harmony</li>
<li><strong>Chromatic harmony:</strong> Use of all twelve pitches for color and tension</li>
</ul>
<h4>Genre-Specific Harmony</h4>
<ul>
<li><strong>Horror films:</strong> Diminished chords, tritones, and dissonance</li>
<li><strong>Romance films:</strong> Lush, extended chords and smooth voice leading</li>
<li><strong>Action films:</strong> Powerful, driving harmonic rhythms</li>
<li><strong>Fantasy films:</strong> Modal and exotic harmonic progressions</li>
</ul>
</section>
<section id="computer-game-harmony">
<h3>Harmony in Computer Game Music</h3>
<h4>Interactive Harmony</h4>
<ul>
<li><strong>Adaptive harmony:</strong> Harmonic progressions that change based on gameplay</li>
<li><strong>Looping progressions:</strong> Harmonic sequences designed to repeat seamlessly</li>
<li><strong>Layered harmony:</strong> Multiple harmonic layers that can be added or removed</li>
</ul>
<h4>Genre-Based Harmony</h4>
<ul>
<li><strong>RPG games:</strong> Epic, orchestral harmonic progressions</li>
<li><strong>Puzzle games:</strong> Simple, repetitive harmonic patterns</li>
<li><strong>Action games:</strong> Driving, rhythmic harmonic progressions</li>
<li><strong>Horror games:</strong> Atonal and dissonant harmonic structures</li>
</ul>
</section>
<section id="harmonic-devices">
<h3>Essential Harmonic Devices and Techniques</h3>
<h4>Chord Types</h4>
<ul>
<li><strong>Triads:</strong> Major, minor, diminished, augmented</li>
<li><strong>Seventh chords:</strong> Major 7th, minor 7th, dominant 7th, half-diminished</li>
<li><strong>Extended chords:</strong> 9th, 11th, and 13th chords</li>
<li><strong>Altered chords:</strong> Chords with raised or lowered tones</li>
</ul>
<h4>Harmonic Progressions</h4>
<ul>
<li><strong>Circle of fifths:</strong> Progressions moving by perfect fifths</li>
<li><strong>Chromatic progressions:</strong> Harmony moving by half-steps</li>
<li><strong>Modal progressions:</strong> Progressions based on church modes</li>
<li><strong>Parallel harmony:</strong> Chords moving in parallel motion</li>
</ul>
<h4>Voice Leading</h4>
<ul>
<li><strong>Smooth voice leading:</strong> Minimal movement between chord tones</li>
<li><strong>Contrary motion:</strong> Voices moving in opposite directions</li>
<li><strong>Voice crossing:</strong> Upper voices moving below lower voices</li>
<li><strong>Doubling:</strong> Multiple instruments playing the same pitch</li>
</ul>
</section>
<section id="analysis-points">
<h3>Key Points for Analysis and Assessment</h3>
<h4>Harmonic Analysis</h4>
<ul>
<li>Identify chord types and progressions used</li>
<li>Analyze the relationship between harmony and dramatic content</li>
<li>Examine how harmony supports or contrasts with melody</li>
<li>Consider the role of dissonance and consonance</li>
</ul>
<h4>Contextual Understanding</h4>
<ul>
<li>How does harmony serve the dramatic narrative?</li>
<li>What harmonic techniques create specific moods or atmospheres?</li>
<li>How do harmonic progressions support character development?</li>
<li>What is the relationship between harmony and visual elements?</li>
</ul>
<h4>Technical Terminology</h4>
<ul>
<li>Use appropriate harmonic terminology in analysis</li>
<li>Identify specific chord types and progressions</li>
<li>Describe voice leading techniques</li>
<li>Explain the function of harmony within the dramatic context</li>
</ul>
</section>
<section id="assessment-focus">
<h3>Assessment Focus Areas</h3>
<p><strong>Note:</strong> While all core musical elements are important for understanding music for stage and screen, assessment will focus on specific elements as outlined in the syllabus. Students should be prepared to analyze and discuss harmony in the context of the prescribed focus works and their understanding of how harmonic techniques serve dramatic and narrative purposes.</p>
</section>` }} />
      </div>
    </article>
  );
};

export default StageScreen0106HarmonyPage;
