import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen0104TempoPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Tempo</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Tempo
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
        <div dangerouslySetInnerHTML={{ __html: `Definition section 
<section>
<h3>What is Tempo in Music for Stage and Screen?</h3>
<p>Tempo in music for stage and screen is a crucial dramatic tool that controls the pace of action, emotion, and narrative flow. It ranges from extremely slow passages that create suspense or contemplation to rapid tempos that drive excitement and urgency. Tempo changes are often used to mirror visual pacing, enhance dramatic tension, and support character development.</p>
</section>
 Key characteristics 
<section>
<h3>Key Characteristics of Tempo in Stage and Screen Music</h3>
<ul>
<li><strong>Dramatic Pacing:</strong> Tempo directly influences the perceived speed of dramatic action</li>
<li><strong>Emotional Intensity:</strong> Faster tempos generally increase excitement, slower tempos create contemplation</li>
<li><strong>Visual Synchronization:</strong> Tempo matching with editing pace and camera movement</li>
<li><strong>Character Association:</strong> Specific tempos linked to particular characters or themes</li>
<li><strong>Narrative Function:</strong> Tempo changes to reflect story development and climactic moments</li>
<li><strong>Genre Conventions:</strong> Traditional tempo associations for different dramatic situations</li>
</ul>
</section>
 Applications in focus areas 
<section>
<h3>Tempo in Our Focus Areas</h3>
<h4>Ballet Music</h4>
<ul>
<li><strong>Choreographic Requirements:</strong> Tempos that match the physical demands of dance movements</li>
<li><strong>Character Portrayal:</strong> Different tempos for various character types and emotions</li>
<li><strong>Dramatic Pacing:</strong> Tempo changes to support narrative development</li>
<li><strong>Technical Considerations:</strong> Tempos that allow for precise execution of dance technique</li>
<li><strong>Expressive Range:</strong> From slow, lyrical passages to fast, virtuosic sequences</li>
<li><strong>Ensemble Coordination:</strong> Consistent tempos for group choreography</li>
</ul>
<h4>Film Music</h4>
<ul>
<li><strong>Action Sequences:</strong> Fast tempos for chase scenes, battles, and high-energy moments</li>
<li><strong>Suspense Building:</strong> Gradual tempo increases (accelerando) to build tension</li>
<li><strong>Emotional Scenes:</strong> Slower tempos for romantic, sad, or contemplative moments</li>
<li><strong>Dialogue Support:</strong> Flexible tempos that accommodate speech rhythms</li>
<li><strong>Visual Matching:</strong> Tempo synchronized with editing pace and camera movement</li>
<li><strong>Cultural Context:</strong> Appropriate tempos for different cultural and historical settings</li>
</ul>
<h4>Computer Game Music</h4>
<ul>
<li><strong>Gameplay Enhancement:</strong> Tempos that match and enhance player activity levels</li>
<li><strong>Adaptive Systems:</strong> Dynamic tempo changes based on game state and player actions</li>
<li><strong>Loop Compatibility:</strong> Tempos that work well with seamless musical loops</li>
<li><strong>Genre Conventions:</strong> Fast tempos for action games, varied tempos for RPGs</li>
<li><strong>Atmospheric Support:</strong> Slower tempos for exploration and ambient sections</li>
<li><strong>Player Engagement:</strong> Tempo choices that maintain player interest and immersion</li>
</ul>
</section>
 Tempo ranges and effects 
<section>
<h3>Tempo Ranges and Their Dramatic Effects</h3>
<dl>
<dt><strong>Largo/Grave (Very Slow: 40-60 BPM)</strong></dt>
<dd>Creates solemnity, grandeur, or deep emotion; often used for death scenes or profound moments</dd>
<dt><strong>Adagio (Slow: 66-76 BPM)</strong></dt>
<dd>Expressive and lyrical; ideal for romantic scenes or character introspection</dd>
<dt><strong>Andante (Walking Pace: 76-108 BPM)</strong></dt>
<dd>Natural, comfortable pace; suitable for dialogue scenes or gentle action</dd>
<dt><strong>Moderato (Moderate: 108-120 BPM)</strong></dt>
<dd>Balanced tempo; works well for general dramatic scenes</dd>
<dt><strong>Allegro (Fast: 120-168 BPM)</strong></dt>
<dd>Energetic and lively; perfect for action sequences and exciting moments</dd>
<dt><strong>Presto (Very Fast: 168+ BPM)</strong></dt>
<dd>Intense excitement and urgency; used for climactic action and chase scenes</dd>
</dl>
</section>
 Essential terminology 
<section>
<h3>Essential Tempo Terminology</h3>
<dl>
<dt><strong>Accelerando</strong></dt>
<dd>Gradually getting faster; builds excitement and tension</dd>
<dt><strong>Ritardando</strong></dt>
<dd>Gradually getting slower; creates resolution or contemplation</dd>
<dt><strong>Rubato</strong></dt>
<dd>Flexible tempo for expressive effect; common in emotional scenes</dd>
<dt><strong>A tempo</strong></dt>
<dd>Return to the original tempo after a change</dd>
<dt><strong>Fermata</strong></dt>
<dd>Held note or pause; creates dramatic emphasis</dd>
<dt><strong>Metronome Marking</strong></dt>
<dd>Precise tempo indication in beats per minute (BPM)</dd>
</dl>
</section>
 Performance practice 
<section>
<h3>Performance Practice</h3>
<h4>For Musicians:</h4>
<ul>
<li>Maintain precise tempo while allowing for expressive flexibility</li>
<li>Understand how tempo choices support dramatic narrative</li>
<li>Master smooth tempo transitions (accelerando, ritardando)</li>
<li>Coordinate tempo with visual elements and other performers</li>
</ul>
<h4>For Listeners:</h4>
<ul>
<li>Notice how tempo affects the perceived pace of action</li>
<li>Observe tempo changes and their dramatic significance</li>
<li>Appreciate how different tempos create different emotional effects</li>
<li>Understand the relationship between tempo and visual pacing</li>
</ul>
</section>
 Assessment focus 
<section>
<h3>Assessment Focus</h3>
<p>When analyzing tempo in music for stage and screen, consider:</p>
<ul>
<li>How does the tempo support the dramatic action or emotional content?</li>
<li>What effect do tempo changes have on the narrative flow?</li>
<li>How does the tempo coordinate with visual pacing and editing?</li>
<li>What is the relationship between tempo and character themes?</li>
<li>How do tempo choices reflect genre conventions or cultural context?</li>
<li>What techniques are used to create smooth tempo transitions?</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default StageScreen0104TempoPage;
