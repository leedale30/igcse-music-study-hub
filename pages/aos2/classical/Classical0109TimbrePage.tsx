import React from 'react';
import { Link } from 'react-router-dom';

const Classical0109TimbrePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Timbre</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Timbre
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
        <div dangerouslySetInnerHTML={{ __html: `Definition Section 
<section className="definition-section" id="definition">
<h2>Definition: Timbre</h2>
<p><strong>Timbre</strong> (pronounced "TAM-ber") refers to the distinctive quality or color of a musical sound that allows us to distinguish between different instruments, voices, or sound sources, even when they play the same pitch at the same volume. In Classical music, timbre is carefully exploited through orchestration, instrumental technique, and the blending of different sound colors to create expressive and structural effects.</p>
</section>
 Key Characteristics Section 
<section className="characteristics-section" id="key-characteristics">
<h2>Key Characteristics of Classical Timbre</h2>
<div className="feature-list" id="classical-timbral-features">
<h3>Orchestral Color Palette</h3>
<ul>
<li><strong>String section dominance:</strong> Strings form the foundation of Classical orchestral timbre</li>
<li><strong>Woodwind clarity:</strong> Individual woodwind colors used for melodic and harmonic contrast</li>
<li><strong>Brass punctuation:</strong> Horns and trumpets provide harmonic support and dramatic emphasis</li>
<li><strong>Timpani foundation:</strong> Kettledrums reinforce tonic and dominant harmonies</li>
<li><strong>Chamber ensemble intimacy:</strong> Smaller forces allow for detailed timbral interplay</li>
</ul>
<h3>Instrumental Techniques</h3>
<ul>
<li><strong>Articulation variety:</strong> Legato, staccato, and mixed bowings create timbral contrast</li>
<li><strong>Dynamic shading:</strong> Volume changes affect timbral character</li>
<li><strong>Register exploitation:</strong> Different ranges of instruments for color variation</li>
<li><strong>Muting techniques:</strong> Con sordino effects in strings and brass</li>
<li><strong>Extended techniques:</strong> Pizzicato, stopped horns, and other special effects</li>
</ul>
<h3>Textural Timbres</h3>
<ul>
<li><strong>Homophonic clarity:</strong> Clear distinction between melody and accompaniment timbres</li>
<li><strong>Contrapuntal independence:</strong> Each voice maintains distinct timbral identity</li>
<li><strong>Orchestral tutti:</strong> Full ensemble creates rich, blended timbre</li>
<li><strong>Solo passages:</strong> Individual instruments featured for expressive effect</li>
<li><strong>Sectional contrasts:</strong> Different instrument families create formal articulation</li>
</ul>
</div>
</section>
 Terminology Section 
<section className="terminology-section" id="terminology">
<h2>Essential Timbre Terminology</h2>
<div className="terminology-list" id="timbre-terms">
<h3>Basic Concepts</h3>
<ul>
<li><strong>Tone color:</strong> Alternative term for timbre</li>
<li><strong>Orchestration:</strong> The art of combining instrumental timbres</li>
<li><strong>Instrumentation:</strong> The specific instruments chosen for a composition</li>
<li><strong>Blend:</strong> The smooth combination of different timbres</li>
<li><strong>Contrast:</strong> The juxtaposition of different timbral qualities</li>
</ul>
<h3>Instrumental Families</h3>
<ul>
<li><strong>Strings:</strong> Violin, viola, cello, double bass</li>
<li><strong>Woodwinds:</strong> Flute, oboe, clarinet, bassoon</li>
<li><strong>Brass:</strong> Horn, trumpet, trombone, tuba</li>
<li><strong>Percussion:</strong> Timpani, and other pitched/unpitched instruments</li>
<li><strong>Keyboard:</strong> Fortepiano, harpsichord, organ</li>
</ul>
<h3>Timbral Techniques</h3>
<ul>
<li><strong>Doubling:</strong> Multiple instruments playing the same part</li>
<li><strong>Divisi:</strong> String sections divided into multiple parts</li>
<li><strong>Unison:</strong> Multiple instruments playing identical pitches</li>
<li><strong>Solo:</strong> Single instrument featured prominently</li>
<li><strong>Tutti:</strong> Full ensemble playing together</li>
</ul>
</div>
</section>
 Focus Work Examples Section 
<section className="examples-section" id="focus-work-examples">
<h2>Timbre in Mozart's Quintet for Piano and Winds, K. 452</h2>
<div className="work-analysis" id="mozart-timbre-analysis">
<h3>Instrumental Combination</h3>
<p>Mozart's innovative scoring combines piano with oboe, clarinet, horn, and bassoon, creating a unique timbral palette that balances keyboard and wind colors.</p>
<h4>First Movement - Largo/Allegro moderato</h4>
<ul>
<li><strong>Opening contrast:</strong> Piano's percussive attack against winds' sustained tones</li>
<li><strong>Dialogue textures:</strong> Piano and winds alternate melodic material with distinct timbral characters</li>
<li><strong>Harmonic blending:</strong> Winds create rich harmonic cushions for piano's melodic lines</li>
<li><strong>Register distribution:</strong> Careful spacing prevents timbral muddiness</li>
</ul>
<h4>Second Movement - Larghetto</h4>
<ul>
<li><strong>Expressive solos:</strong> Each wind instrument featured for its unique character</li>
<li><strong>Piano accompaniment:</strong> Keyboard provides delicate harmonic support</li>
<li><strong>Muted effects:</strong> Subtle dynamic control creates intimate timbral atmosphere</li>
<li><strong>Melodic sharing:</strong> Themes passed between different timbral colors</li>
</ul>
<h4>Third Movement - Rondo: Allegretto</h4>
<ul>
<li><strong>Playful contrasts:</strong> Light, dance-like character exploits timbral variety</li>
<li><strong>Virtuosic display:</strong> Each instrument's technical capabilities highlighted</li>
<li><strong>Ensemble unity:</strong> Individual colors blend in tutti passages</li>
<li><strong>Formal articulation:</strong> Timbral changes mark structural divisions</li>
</ul>
</div>
<div className="additional-examples" id="other-classical-examples">
<h3>Other Classical Examples</h3>
<ul>
<li><strong>Mozart Symphony No. 40:</strong> Dark string timbre contrasted with bright woodwinds</li>
<li><strong>Haydn "Surprise" Symphony:</strong> Sudden forte creates timbral shock</li>
<li><strong>Beethoven Piano Sonata Op. 27 No. 2:</strong> Pedal effects create atmospheric timbres</li>
<li><strong>Mozart Clarinet Concerto:</strong> Exploitation of clarinet's unique timbral registers</li>
</ul>
</div>
</section>
 Performance Practice Section 
<section className="practice-section" id="performance-practice">
<h2>Performance Practice and Timbre</h2>
<div className="practice-guidelines" id="historical-performance">
<h3>Historical Instruments</h3>
<ul>
<li><strong>Fortepiano:</strong> Lighter, more transparent sound than modern piano</li>
<li><strong>Natural horns:</strong> Hand-stopping creates unique timbral effects</li>
<li><strong>Wooden flutes:</strong> Warmer, less penetrating than modern metal instruments</li>
<li><strong>Gut strings:</strong> Different timbral quality from modern steel strings</li>
<li><strong>Period timpani:</strong> Calfskin heads produce different attack and resonance</li>
</ul>
<h3>Ensemble Balance</h3>
<ul>
<li><strong>Proportional forces:</strong> Smaller orchestras create different timbral balance</li>
<li><strong>Acoustic considerations:</strong> Room size affects timbral blend and projection</li>
<li><strong>Dynamic relationships:</strong> Careful balance between different instrumental families</li>
<li><strong>Articulation coordination:</strong> Unified approach to phrasing and attack</li>
</ul>
<h4>Modern Performance Considerations</h4>
<ul>
<li><strong>Stylistic awareness:</strong> Understanding Classical timbral ideals</li>
<li><strong>Technical precision:</strong> Clean execution enhances timbral clarity</li>
<li><strong>Listening skills:</strong> Awareness of blend and balance in ensemble</li>
<li><strong>Expressive use:</strong> Timbre as a tool for musical communication</li>
</ul>
</div>
</section>
 Assessment Focus Section 
<section className="assessment-section" id="assessment-focus">
<h2>Assessment Focus</h2>
<p>Key points for IGCSE Music assessment regarding timbre in Classical music:</p>
<div className="assessment-list" id="assessment-points">
<h3>Essential Knowledge</h3>
<ul>
<li><strong>Instrumental identification:</strong> Recognize individual instruments and their characteristics</li>
<li><strong>Orchestration principles:</strong> Understand how instruments are combined effectively</li>
<li><strong>Timbral effects:</strong> Identify special techniques and their expressive purposes</li>
<li><strong>Historical context:</strong> Classical orchestration practices and limitations</li>
<li><strong>Textural relationships:</strong> How timbre supports different musical textures</li>
<li><strong>Formal functions:</strong> Timbral changes as structural markers</li>
</ul>
<h3>Analytical Skills</h3>
<ul>
<li>Identify instruments and instrumental combinations in recorded examples</li>
<li>Describe timbral effects and their musical purposes</li>
<li>Analyze the relationship between timbre and other musical elements</li>
<li>Evaluate the effectiveness of orchestration choices</li>
<li>Compare timbral treatment across different Classical works</li>
</ul>
<h3>Listening Examination Focus</h3>
<ul>
<li>Accurate identification of instruments in Classical ensembles</li>
<li>Recognition of timbral techniques and special effects</li>
<li>Understanding of how timbre supports musical structure and expression</li>
<li>Comparison of timbral characteristics between different movements or sections</li>
<li>Focus on the timbral features <em>actually heard</em> in the recorded extracts</li>
</ul>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default Classical0109TimbrePage;
