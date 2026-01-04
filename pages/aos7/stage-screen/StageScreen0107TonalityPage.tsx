import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen0107TonalityPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Tonality</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Tonality
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
<h3>Understanding Tonality in Music for Stage and Screen</h3>
<p>Tonality in music for stage and screen serves as a powerful tool for creating atmosphere, establishing character identity, and supporting narrative development. The choice of key, scale, and tonal system can dramatically affect the emotional impact and meaning of the music in relation to the visual and dramatic elements.</p>
</section>
<section id="ballet-tonality">
<h3>Tonality in Ballet</h3>
<h4>Classical Ballet Tonality</h4>
<ul>
<li><strong>Major keys:</strong> Often used for heroic characters and joyful scenes</li>
<li><strong>Minor keys:</strong> Associated with tragic characters and dramatic tension</li>
<li><strong>Key relationships:</strong> Related keys used for character interactions</li>
<li><strong>Modulation:</strong> Key changes to reflect character development or scene changes</li>
</ul>
<h4>Character-Key Associations</h4>
<ul>
<li><strong>Heroic characters:</strong> Bright major keys (C major, D major)</li>
<li><strong>Romantic themes:</strong> Warm keys (A♭ major, D♭ major)</li>
<li><strong>Tragic characters:</strong> Minor keys (D minor, G minor)</li>
<li><strong>Supernatural elements:</strong> Unusual keys or modal scales</li>
</ul>
<h4>Modern Ballet Tonality</h4>
<ul>
<li><strong>Modal scales:</strong> Use of church modes for different colors</li>
<li><strong>Whole-tone scales:</strong> Creating impressionistic effects</li>
<li><strong>Pentatonic scales:</strong> Exotic or folk-like qualities</li>
<li><strong>Atonality:</strong> Absence of traditional key centers</li>
</ul>
</section>
<section id="film-tonality">
<h3>Tonality in Film Music</h3>
<h4>Narrative Tonality</h4>
<ul>
<li><strong>Home key:</strong> Establishing the main tonal center for the film</li>
<li><strong>Character keys:</strong> Specific keys associated with main characters</li>
<li><strong>Tonal journey:</strong> The progression of keys throughout the film</li>
<li><strong>Resolution:</strong> Return to home key for closure</li>
</ul>
<h4>Emotional Tonality</h4>
<ul>
<li><strong>Major keys:</strong> Happiness, triumph, resolution</li>
<li><strong>Minor keys:</strong> Sadness, tension, conflict</li>
<li><strong>Chromatic passages:</strong> Uncertainty, transformation</li>
<li><strong>Modal inflections:</strong> Exotic locations, historical periods</li>
</ul>
<h4>Genre-Specific Tonality</h4>
<ul>
<li><strong>Horror films:</strong> Atonal passages, diminished scales</li>
<li><strong>Western films:</strong> Pentatonic and modal scales</li>
<li><strong>Fantasy films:</strong> Exotic scales and modes</li>
<li><strong>Science fiction:</strong> Electronic and synthetic tonal systems</li>
</ul>
</section>
<section id="computer-game-tonality">
<h3>Tonality in Computer Game Music</h3>
<h4>Interactive Tonality</h4>
<ul>
<li><strong>Adaptive keys:</strong> Tonality that changes based on gameplay</li>
<li><strong>Seamless modulation:</strong> Smooth key changes for continuous play</li>
<li><strong>Layered tonality:</strong> Multiple tonal layers that can be combined</li>
</ul>
<h4>Environmental Tonality</h4>
<ul>
<li><strong>Location-based keys:</strong> Different areas have distinct tonal characteristics</li>
<li><strong>Progression systems:</strong> Tonality that evolves as the game progresses</li>
<li><strong>Character themes:</strong> Tonal signatures for different characters or factions</li>
</ul>
<h4>Genre-Based Tonality</h4>
<ul>
<li><strong>RPG games:</strong> Epic, modal tonalities</li>
<li><strong>Puzzle games:</strong> Simple, clear tonal centers</li>
<li><strong>Action games:</strong> Driving, rhythmic tonal patterns</li>
<li><strong>Horror games:</strong> Atonal and dissonant tonal systems</li>
</ul>
</section>
<section id="tonal-systems">
<h3>Essential Tonal Systems and Concepts</h3>
<h4>Traditional Tonality</h4>
<ul>
<li><strong>Major scales:</strong> Seven-note scales with specific interval patterns</li>
<li><strong>Minor scales:</strong> Natural, harmonic, and melodic minor variations</li>
<li><strong>Key signatures:</strong> Sharps and flats that define the key</li>
<li><strong>Circle of fifths:</strong> Relationship between different keys</li>
</ul>
<h4>Modal Systems</h4>
<ul>
<li><strong>Dorian mode:</strong> Minor scale with raised 6th degree</li>
<li><strong>Phrygian mode:</strong> Minor scale with lowered 2nd degree</li>
<li><strong>Lydian mode:</strong> Major scale with raised 4th degree</li>
<li><strong>Mixolydian mode:</strong> Major scale with lowered 7th degree</li>
</ul>
<h4>Alternative Scales</h4>
<ul>
<li><strong>Pentatonic scales:</strong> Five-note scales common in folk music</li>
<li><strong>Whole-tone scales:</strong> Six-note scales built entirely on whole steps</li>
<li><strong>Chromatic scales:</strong> Twelve-note scales using all semitones</li>
<li><strong>Synthetic scales:</strong> Artificially constructed scale patterns</li>
</ul>
<h4>Modern Tonal Concepts</h4>
<ul>
<li><strong>Atonality:</strong> Music without a tonal center</li>
<li><strong>Polytonality:</strong> Multiple keys sounding simultaneously</li>
<li><strong>Pandiatonicism:</strong> Free use of all notes within a key</li>
<li><strong>Serialism:</strong> Systematic organization of all twelve pitches</li>
</ul>
</section>
<section id="analysis-points">
<h3>Key Points for Analysis and Assessment</h3>
<h4>Tonal Analysis</h4>
<ul>
<li>Identify the key signature and tonal center</li>
<li>Analyze modulations and key relationships</li>
<li>Examine the use of scales and modes</li>
<li>Consider the relationship between tonality and dramatic content</li>
</ul>
<h4>Contextual Understanding</h4>
<ul>
<li>How does tonality serve the dramatic narrative?</li>
<li>What tonal techniques create specific moods or atmospheres?</li>
<li>How do key changes support character or plot development?</li>
<li>What is the relationship between tonality and visual elements?</li>
</ul>
<h4>Technical Terminology</h4>
<ul>
<li>Use appropriate tonal terminology in analysis</li>
<li>Identify specific scales, modes, and key relationships</li>
<li>Describe modulation techniques and their effects</li>
<li>Explain the function of tonality within the dramatic context</li>
</ul>
</section>
<section id="assessment-focus">
<h3>Assessment Focus Areas</h3>
<p><strong>Note:</strong> While all core musical elements are important for understanding music for stage and screen, assessment will focus on specific elements as outlined in the syllabus. Students should be prepared to analyze and discuss tonality in the context of the prescribed focus works and their understanding of how tonal systems serve dramatic and narrative purposes.</p>
</section>` }} />
      </div>
    </article>
  );
};

export default StageScreen0107TonalityPage;
