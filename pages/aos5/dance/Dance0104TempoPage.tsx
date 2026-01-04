import React from 'react';
import { Link } from 'react-router-dom';

const Dance0104TempoPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Tempo</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Tempo
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 5 • Music for Dance
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
<h3>What is Tempo in Music for Dance?</h3>
<p>Tempo refers to the speed or pace of music, typically measured in beats per minute (BPM). In dance music, tempo is crucial as it determines the energy level, movement style, and overall character of the dance. Different dance genres require specific tempo ranges to facilitate proper movement and expression.</p>
</section>
 Key characteristics 
<section>
<h3>Key Characteristics of Tempo in Dance Music</h3>
<ul>
<li><strong>BPM Range:</strong> Each dance style has an optimal tempo range for comfortable movement</li>
<li><strong>Energy Level:</strong> Faster tempos create higher energy and excitement</li>
<li><strong>Movement Facilitation:</strong> Tempo must allow dancers to execute steps properly</li>
<li><strong>Emotional Impact:</strong> Speed affects the mood and intensity of the dance</li>
<li><strong>Cultural Context:</strong> Traditional dance tempos reflect cultural practices and preferences</li>
<li><strong>Technical Requirements:</strong> Complex steps may require slower tempos for precision</li>
</ul>
</section>
 Applications in focus genres 
<section>
<h3>Tempo in Our Focus Genres</h3>
<h4>Tango</h4>
<ul>
<li><strong>Traditional Tempo:</strong> 60-72 BPM (slow to moderate)</li>
<li><strong>Character:</strong> Deliberate, passionate, allows for dramatic pauses</li>
<li><strong>Movement Style:</strong> Enables precise footwork and intimate connection</li>
<li><strong>Variations:</strong> Milonga (faster), Vals (waltz tempo)</li>
</ul>
<h4>Salsa</h4>
<ul>
<li><strong>Typical Range:</strong> 150-250 BPM (moderate to fast)</li>
<li><strong>Energy:</strong> Vibrant, energetic, encouraging continuous movement</li>
<li><strong>Cultural Influence:</strong> Reflects Latin American musical traditions</li>
<li><strong>Dance Facilitation:</strong> Supports quick footwork and spins</li>
</ul>
<h4>Electronic Dance Music (EDM)</h4>
<ul>
<li><strong>House:</strong> 120-130 BPM (steady, driving)</li>
<li><strong>Techno:</strong> 120-150 BPM (mechanical, hypnotic)</li>
<li><strong>Drum &amp; Bass:</strong> 160-180 BPM (fast, intense)</li>
<li><strong>Dubstep:</strong> 140 BPM (half-time feel, heavy drops)</li>
</ul>
</section>
 Essential terminology 
<section>
<h3>Essential Tempo Terminology</h3>
<dl>
<dt><strong>BPM (Beats Per Minute)</strong></dt>
<dd>The standard measurement of tempo in modern music</dd>
<dt><strong>Accelerando</strong></dt>
<dd>Gradually getting faster</dd>
<dt><strong>Ritardando</strong></dt>
<dd>Gradually getting slower</dd>
<dt><strong>Rubato</strong></dt>
<dd>Flexible tempo for expressive purposes</dd>
<dt><strong>Groove</strong></dt>
<dd>The feel and swing of the tempo</dd>
<dt><strong>Drop</strong></dt>
<dd>Sudden tempo or energy change in EDM</dd>
</dl>
</section>
 Performance practice 
<section>
<h3>Performance Practice</h3>
<h4>For Musicians:</h4>
<ul>
<li>Use metronomes to maintain steady tempo</li>
<li>Understand the relationship between tempo and dance movement</li>
<li>Practice tempo changes smoothly and musically</li>
<li>Consider the dancers' needs when setting tempo</li>
</ul>
<h4>For Dancers:</h4>
<ul>
<li>Develop internal sense of pulse and timing</li>
<li>Adapt movement quality to different tempos</li>
<li>Use tempo changes for dramatic effect</li>
<li>Maintain connection to the music's pulse</li>
</ul>
</section>
 Assessment focus 
<section>
<h3>Assessment Focus</h3>
<p>When analyzing tempo in dance music, consider:</p>
<ul>
<li>How does the tempo support the dance style?</li>
<li>What is the BPM and how does it affect the energy?</li>
<li>Are there any tempo changes and what is their effect?</li>
<li>How does the tempo relate to the cultural context?</li>
<li>Does the tempo allow for proper execution of dance steps?</li>
<li>How does tempo contribute to the overall musical structure?</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default Dance0104TempoPage;
