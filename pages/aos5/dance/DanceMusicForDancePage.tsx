import React from 'react';
import { Link } from 'react-router-dom';

const DanceMusicForDancePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Music For Dance</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Music For Dance
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
        <div dangerouslySetInnerHTML={{ __html: `<section id="introduction">
<h2>Introduction</h2>
<p>In this unit, you will explore the intimate relationship between <strong>music and dance</strong>, examining how musical elements support and inspire physical movement across different cultures and time periods. This area of study focuses on the functional aspects of music designed specifically to accompany dance, from traditional folk dances to contemporary club music.</p>
</section>
<section id="focus-genres">
<h2>Focus Genres and Dance Types</h2>
<p>Your study will encompass dance music from diverse cultural traditions and historical periods:</p>
<h3>Traditional Folk Dances</h3>
<p>Cultural dance forms passed down through generations, featuring:</p>
<ul>
<li><strong>Regional Characteristics:</strong> Unique rhythmic patterns and melodic styles</li>
<li><strong>Social Function:</strong> Community bonding and cultural celebration</li>
<li><strong>Seasonal Connections:</strong> Dances for harvest, festivals, and ceremonies</li>
<li><strong>Instrumental Traditions:</strong> Specific instruments associated with each culture</li>
</ul>
<h3>Ballroom and Social Dances</h3>
<p>Formal partner dances developed in European courts and social settings:</p>
<ul>
<li><strong>Waltz:</strong> Triple meter, flowing movements, romantic character</li>
<li><strong>Tango:</strong> Passionate, dramatic, syncopated rhythms</li>
<li><strong>Foxtrot:</strong> Smooth, gliding movements in 4/4 time</li>
<li><strong>Swing:</strong> Energetic, improvisational, jazz-influenced</li>
</ul>
<h3>Latin American Dances</h3>
<p>Vibrant dance forms from Central and South America:</p>
<ul>
<li><strong>Salsa:</strong> Complex polyrhythms, call-and-response patterns</li>
<li><strong>Samba:</strong> Brazilian carnival rhythms, percussion-heavy</li>
<li><strong>Rumba:</strong> Slow, sensual, Afro-Cuban origins</li>
<li><strong>Cha-cha-cha:</strong> Distinctive rhythm pattern, Cuban roots</li>
</ul>
<h3>Contemporary Dance Music</h3>
<p>Modern electronic and popular music designed for dancing:</p>
<ul>
<li><strong>Electronic Dance Music (EDM):</strong> Synthesized sounds, repetitive beats</li>
<li><strong>Hip-Hop:</strong> Strong backbeat, rhythmic complexity</li>
<li><strong>Disco:</strong> Four-on-the-floor beat, orchestral arrangements</li>
<li><strong>House Music:</strong> Repetitive 4/4 beats, electronic production</li>
</ul>
</section>
<section id="core-concepts">
<h2>Core Concepts</h2>
<h3>Rhythm and Movement</h3>
<p>The fundamental relationship between musical rhythm and physical movement:</p>
<ul>
<li><strong>Pulse and Beat:</strong> The steady underlying beat that guides movement</li>
<li><strong>Rhythmic Patterns:</strong> Specific combinations that define dance styles</li>
<li><strong>Syncopation:</strong> Off-beat accents that create rhythmic interest</li>
<li><strong>Polyrhythm:</strong> Multiple rhythmic layers in complex dance forms</li>
</ul>
<h3>Meter and Time Signatures</h3>
<p>How different meters support various dance movements:</p>
<ul>
<li><strong>Duple Meter (2/4, 4/4):</strong> Marches, polkas, most popular dances</li>
<li><strong>Triple Meter (3/4, 6/8):</strong> Waltzes, minuets, some folk dances</li>
<li><strong>Complex Meters:</strong> 5/4, 7/8, and other irregular patterns in world music</li>
<li><strong>Mixed Meters:</strong> Changing time signatures within a single piece</li>
</ul>
<h3>Tempo and Energy</h3>
<p>How speed and intensity affect dance character:</p>
<ul>
<li><strong>Slow Dances:</strong> Romantic, intimate, flowing movements</li>
<li><strong>Moderate Tempos:</strong> Social dancing, comfortable movement</li>
<li><strong>Fast Dances:</strong> Energetic, athletic, celebratory</li>
<li><strong>Tempo Changes:</strong> Building excitement or creating contrast</li>
</ul>
</section>
<section id="musical-elements">
<h2>Key Musical Elements in Dance Music</h2>
<h3>Rhythmic Foundation</h3>
<p>The rhythmic elements that make music danceable:</p>
<ul>
<li><strong>Strong Downbeats:</strong> Clear emphasis on beat one</li>
<li><strong>Consistent Pulse:</strong> Steady, predictable beat patterns</li>
<li><strong>Rhythmic Hooks:</strong> Memorable patterns that define the dance</li>
<li><strong>Cross-rhythms:</strong> Conflicting rhythmic patterns for complexity</li>
</ul>
<h3>Melodic Characteristics</h3>
<p>How melody supports dance movement:</p>
<ul>
<li><strong>Phrase Structure:</strong> Musical phrases matching dance steps</li>
<li><strong>Repetition:</strong> Memorable melodies that dancers can anticipate</li>
<li><strong>Call and Response:</strong> Interactive melodic patterns</li>
<li><strong>Melodic Contour:</strong> Rising and falling patterns suggesting movement</li>
</ul>
<h3>Harmonic Progressions</h3>
<p>Chord patterns that support dance forms:</p>
<ul>
<li><strong>Simple Progressions:</strong> Easy-to-follow harmonic patterns</li>
<li><strong>Cyclical Harmony:</strong> Repeating chord sequences</li>
<li><strong>Modal Harmony:</strong> Scales and modes from folk traditions</li>
<li><strong>Functional Harmony:</strong> Clear tonic-dominant relationships</li>
</ul>
</section>
<section id="cultural-contexts">
<h2>Cultural and Social Contexts</h2>
<h3>Social Functions of Dance Music</h3>
<p>Dance music serves various social purposes across cultures:</p>
<ul>
<li><strong>Courtship and Romance:</strong> Partner dances for social interaction</li>
<li><strong>Community Celebration:</strong> Group dances for festivals and gatherings</li>
<li><strong>Religious and Ceremonial:</strong> Sacred dances for spiritual purposes</li>
<li><strong>Entertainment and Recreation:</strong> Social dancing for enjoyment</li>
</ul>
<h3>Cultural Identity and Expression</h3>
<p>How dance music reflects cultural values and identity:</p>
<ul>
<li><strong>National Characteristics:</strong> Distinctive rhythms and melodies</li>
<li><strong>Regional Variations:</strong> Local adaptations of dance forms</li>
<li><strong>Historical Evolution:</strong> How dances change over time</li>
<li><strong>Cross-Cultural Influence:</strong> Fusion and adaptation between cultures</li>
</ul>
</section>
<section id="instrumentation">
<h2>Instrumentation and Sound Sources</h2>
<h3>Traditional Instruments</h3>
<p>Instruments commonly associated with dance music:</p>
<ul>
<li><strong>Percussion:</strong> Drums, tambourines, castanets, claves</li>
<li><strong>String Instruments:</strong> Fiddles, guitars, mandolins, banjos</li>
<li><strong>Wind Instruments:</strong> Flutes, pipes, accordions, harmonicas</li>
<li><strong>Keyboard Instruments:</strong> Piano, organ, harpsichord</li>
</ul>
<h3>Modern Production Techniques</h3>
<p>Contemporary approaches to creating dance music:</p>
<ul>
<li><strong>Electronic Instruments:</strong> Synthesizers, drum machines, samplers</li>
<li><strong>Digital Audio Workstations:</strong> Computer-based music production</li>
<li><strong>Sampling:</strong> Incorporating recorded sounds and loops</li>
<li><strong>Effects Processing:</strong> Reverb, delay, filtering, distortion</li>
</ul>
</section>
<section id="focus-works">
<h2>Focus Works for Learning</h2>
<p>Your study will be based on analysis of diverse dance music representing different traditions:</p>
<ul>
<li><strong>European Folk Dances:</strong> Traditional waltzes, polkas, and regional dances</li>
<li><strong>Latin American Forms:</strong> Salsa, samba, tango, and other Latin styles</li>
<li><strong>Popular Dance Music:</strong> Contemporary styles from disco to EDM</li>
<li><strong>World Dance Traditions:</strong> African, Asian, and other global dance forms</li>
</ul>
<p><strong>Important Note:</strong> These specific works will <em>not</em> appear in your examination, but you will apply the analytical skills and understanding of music-dance relationships to new, unseen dance music in the listening paper.</p>
</section>
<section id="analytical-approaches">
<h2>Analytical Approaches</h2>
<p>When analyzing dance music, consider multiple dimensions:</p>
<h3>Rhythmic Analysis</h3>
<ul>
<li>Identification of meter and time signature</li>
<li>Analysis of rhythmic patterns and motifs</li>
<li>Recognition of syncopation and cross-rhythms</li>
<li>Understanding of tempo and its effect on movement</li>
</ul>
<h3>Structural Analysis</h3>
<ul>
<li>Phrase structure and sectional organization</li>
<li>Repetition and variation patterns</li>
<li>Introduction, verse, chorus, and bridge sections</li>
<li>Overall form and its relationship to dance structure</li>
</ul>
<h3>Cultural Analysis</h3>
<ul>
<li>Historical and social context of the dance</li>
<li>Cultural significance and function</li>
<li>Regional characteristics and variations</li>
<li>Evolution and adaptation over time</li>
</ul>
</section>
<section id="learning-objectives">
<h2>Learning Objectives</h2>
<p>By the end of this unit, you should be able to:</p>
<ul>
<li>Identify and describe different types of dance music from various cultures</li>
<li>Analyze rhythmic patterns and their relationship to movement</li>
<li>Understand how musical elements support and inspire dance</li>
<li>Recognize the social and cultural functions of dance music</li>
<li>Compare dance traditions from different cultures and time periods</li>
<li>Apply appropriate terminology for dance music analysis</li>
<li>Understand the role of instrumentation in dance music</li>
<li>Analyze the relationship between musical structure and dance form</li>
</ul>
</section>
<section id="performance-considerations">
<h2>Performance and Production Considerations</h2>
<h3>Live Performance</h3>
<p>Factors important in live dance music performance:</p>
<ul>
<li><strong>Tempo Consistency:</strong> Maintaining steady beat for dancers</li>
<li><strong>Dynamic Energy:</strong> Building and sustaining excitement</li>
<li><strong>Audience Interaction:</strong> Responding to dancers and crowd</li>
<li><strong>Instrumental Balance:</strong> Ensuring rhythm section prominence</li>
</ul>
<h3>Recording and Production</h3>
<p>Technical aspects of dance music production:</p>
<ul>
<li><strong>Beat Emphasis:</strong> Clear, punchy rhythm tracks</li>
<li><strong>Frequency Balance:</strong> Strong bass and clear highs</li>
<li><strong>Compression and Limiting:</strong> Consistent volume levels</li>
<li><strong>Stereo Imaging:</strong> Spatial placement of instruments</li>
</ul>
</section>
<section id="contemporary-developments">
<h2>Contemporary Developments</h2>
<p>Modern trends and innovations in dance music:</p>
<ul>
<li><strong>Electronic Dance Music (EDM):</strong> Festival culture and DJ artistry</li>
<li><strong>Fusion Genres:</strong> Blending traditional and modern elements</li>
<li><strong>Global Connectivity:</strong> Worldwide sharing of dance styles</li>
<li><strong>Technology Integration:</strong> Apps, streaming, and social media</li>
<li><strong>Virtual Reality:</strong> New platforms for dance and music experience</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default DanceMusicForDancePage;
