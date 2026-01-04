import React from 'react';
import { Link } from 'react-router-dom';

const Romantic0105MelodyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Melody</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Melody
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 3 • Romantic Music
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
        <div dangerouslySetInnerHTML={{ __html: `Definition Section 
<section id="definition">
<h3>Definition</h3>
<p>In Romantic music, melody becomes the primary vehicle for emotional expression and storytelling. Romantic melodies are characterized by their lyrical beauty, expressive range, and ability to convey deep emotions and programmatic content. They often feature long, flowing lines with wide intervals and expressive leaps that create dramatic and emotional impact.</p>
</section>
 Key Characteristics Section 
<section id="key-characteristics">
<h3>Key Characteristics of Romantic Melody</h3>
<div className="characteristic" id="lyrical-expressive">
<h4>Lyrical and Expressive</h4>
<p>Romantic melodies are designed to be song-like and emotionally expressive, often resembling vocal lines even when written for instruments. They prioritize beauty and emotional impact over structural considerations.</p>
<ul>
<li><strong>Cantabile style:</strong> Singing, lyrical quality</li>
<li><strong>Emotional expression:</strong> Melodies that convey specific feelings</li>
<li><strong>Personal voice:</strong> Individual composer's melodic style</li>
<li><strong>Memorable themes:</strong> Easily recognizable and singable melodies</li>
</ul>
</div>
<div className="characteristic" id="wide-range">
<h4>Wide Range and Dramatic Leaps</h4>
<p>Romantic melodies often span wide ranges and include dramatic interval leaps that create emotional intensity and expressive power, contrasting with the more stepwise motion of earlier periods.</p>
<ul>
<li><strong>Extended range:</strong> Melodies covering wide pitch spans</li>
<li><strong>Dramatic leaps:</strong> Large intervals for emotional effect</li>
<li><strong>Climactic peaks:</strong> High points for maximum expression</li>
<li><strong>Contrasting registers:</strong> Movement between high and low ranges</li>
</ul>
</div>
<div className="characteristic" id="programmatic-melody">
<h4>Programmatic and Descriptive</h4>
<p>In programme music like <em>Vltava</em>, melodies are crafted to represent specific scenes, characters, or natural phenomena, making the musical narrative more vivid and accessible to listeners.</p>
<ul>
<li><strong>Descriptive themes:</strong> Melodies representing specific images</li>
<li><strong>Character motifs:</strong> Musical themes for different characters</li>
<li><strong>Nature painting:</strong> Melodies imitating natural sounds</li>
<li><strong>Narrative function:</strong> Melodies that tell stories</li>
</ul>
</div>
<div className="characteristic" id="folk-influence">
<h4>Folk Music Influence</h4>
<p>Many Romantic composers, especially nationalists like Smetana, incorporated folk melodies and folk-like characteristics into their music, creating a connection with national identity and popular culture.</p>
<ul>
<li><strong>Folk quotations:</strong> Direct use of traditional melodies</li>
<li><strong>Folk-like style:</strong> Melodies in the character of folk music</li>
<li><strong>National character:</strong> Melodies reflecting cultural identity</li>
<li><strong>Modal inflections:</strong> Use of folk modes and scales</li>
</ul>
</div>
</section>
 Terminology Section 
<section id="terminology">
<h3>Essential Melody Terminology</h3>
<div className="terminology-grid">
<div className="term-card">
<h4>Melodic Movement</h4>
<ul>
<li><strong>Stepwise:</strong> Movement by adjacent notes</li>
<li><strong>Leap:</strong> Movement by intervals larger than a 2nd</li>
<li><strong>Ascending:</strong> Moving upward in pitch</li>
<li><strong>Descending:</strong> Moving downward in pitch</li>
<li><strong>Arch shape:</strong> Rising then falling melodic contour</li>
</ul>
</div>
<div className="term-card">
<h4>Melodic Techniques</h4>
<ul>
<li><strong>Sequence:</strong> Repetition at different pitch levels</li>
<li><strong>Imitation:</strong> Melodic ideas repeated in other voices</li>
<li><strong>Variation:</strong> Modified repetition of melodic material</li>
<li><strong>Development:</strong> Transformation of melodic themes</li>
<li><strong>Fragmentation:</strong> Breaking melodies into smaller parts</li>
</ul>
</div>
<div className="term-card">
<h4>Expressive Terms</h4>
<ul>
<li><strong>Cantabile:</strong> In a singing style</li>
<li><strong>Dolce:</strong> Sweetly</li>
<li><strong>Espressivo:</strong> Expressively</li>
<li><strong>Legato:</strong> Smoothly connected</li>
<li><strong>Rubato:</strong> Flexible timing for expression</li>
</ul>
</div>
</div>
</section>
 Comparison Section 
<section id="comparison">
<h3>Comparison with Baroque Melody</h3>
<div className="comparison-table">
<div className="baroque-column">
<h4>Baroque Melody</h4>
<ul>
<li>Continuous spinning-out technique</li>
<li>Motivic development and sequences</li>
<li>Functional, structural purpose</li>
<li>Moderate range and intervals</li>
<li>Ornamental decoration</li>
</ul>
</div>
<div className="romantic-column">
<h4>Romantic Melody</h4>
<ul>
<li>Lyrical, song-like phrases</li>
<li>Emotional expression primary</li>
<li>Expressive, programmatic purpose</li>
<li>Wide range and dramatic leaps</li>
<li>Expressive rubato and phrasing</li>
</ul>
</div>
</div>
</section>
 Focus Work Examples 
<section id="focus-work-examples">
<h3>Focus Work: Smetana's <em>Vltava</em></h3>
<h4>Melodic Examples in <em>Vltava</em></h4>
<div className="example" id="river-source-melody">
<h5>1. The River Source</h5>
<p><strong>Melody:</strong> Light, bubbling figures in flutes and clarinets</p>
<p><strong>Character:</strong> Stepwise motion and small intervals create the impression of gently bubbling springs, with delicate, crystalline melodic fragments that suggest water droplets.</p>
</div>
<div className="example" id="main-river-theme">
<h5>2. Main River Theme (Vltava Melody)</h5>
<p><strong>Melody:</strong> Broad, flowing melody in E minor</p>
<p><strong>Character:</strong> This is the most famous melody of the piece - a long, lyrical line that captures the majesty and beauty of the river. It features a wide range and expressive intervals that create emotional depth.</p>
</div>
<div className="example" id="hunting-melody">
<h5>3. Hunting Scene</h5>
<p><strong>Melody:</strong> Horn calls and fanfare-like figures</p>
<p><strong>Character:</strong> Bold, martial melodies with wide leaps and rhythmic energy, imitating actual hunting horn calls. The melodies are heroic and outdoor in character.</p>
</div>
<div className="example" id="wedding-melody">
<h5>4. Peasant Wedding</h5>
<p><strong>Melody:</strong> Folk-like dance tune</p>
<p><strong>Character:</strong> Simple, repetitive melody with folk characteristics - modal inflections, regular phrases, and dance-like rhythm. Represents Czech national character through melodic style.</p>
</div>
<div className="example" id="nymphs-melody">
<h5>5. Moonlight Dance of Water Nymphs</h5>
<p><strong>Melody:</strong> Ethereal, floating melodic lines</p>
<p><strong>Character:</strong> Mysterious, otherworldly melodies with chromatic inflections and unusual intervals, creating a supernatural atmosphere. The melodies seem to float and shimmer.</p>
</div>
<div className="example" id="rapids-melody">
<h5>6. St. John's Rapids</h5>
<p><strong>Melody:</strong> Fragmented, turbulent melodic figures</p>
<p><strong>Character:</strong> The main river theme is broken up and tossed about, representing the chaos of the rapids. Melodic fragments appear in different instruments, creating musical turbulence.</p>
</div>
<div className="example" id="final-theme">
<h5>7. Final Statement</h5>
<p><strong>Melody:</strong> Triumphant return of the river theme in E major</p>
<p><strong>Character:</strong> The melody is transformed from minor to major, becoming broader and more majestic, representing the river's arrival at Prague and its historical significance.</p>
</div>
</section>
 Performance Practice 
<section id="performance-practice">
<h3>Performance Practice</h3>
<h4>Interpreting Romantic Melody</h4>
<ul>
<li><strong>Expressive Phrasing:</strong> Shape melodic lines with dynamic and tempo flexibility</li>
<li><strong>Cantabile Style:</strong> Play melodies in a singing manner, even on instruments</li>
<li><strong>Rubato:</strong> Use flexible timing to enhance melodic expression</li>
<li><strong>Dynamic Shaping:</strong> Use crescendos and diminuendos to sculpt phrases</li>
<li><strong>Articulation:</strong> Choose appropriate articulation to support melodic character</li>
</ul>
<h4>Ensemble Considerations</h4>
<ul>
<li><strong>Melodic Balance:</strong> Ensure primary melodies are clearly heard</li>
<li><strong>Accompaniment Role:</strong> Support without overwhelming the melody</li>
<li><strong>Phrase Coordination:</strong> Maintain unified phrasing across sections</li>
<li><strong>Tempo Flexibility:</strong> Allow for expressive timing in melodic passages</li>
</ul>
</section>
 Assessment Focus 
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<h4>What You Need to Know</h4>
<ul>
<li>Identify melodic characteristics of Romantic music</li>
<li>Recognize the main themes in <em>Vltava</em> and their programmatic significance</li>
<li>Compare Romantic melody with other musical periods</li>
<li>Understand how melody supports programmatic content</li>
<li>Analyze melodic structure and development techniques</li>
<li>Use correct terminology when describing melodic features</li>
</ul>
<h4>Listening Skills</h4>
<ul>
<li>Identify main melodies and themes</li>
<li>Recognize melodic transformation and development</li>
<li>Distinguish between different melodic characters</li>
<li>Understand how melody creates programmatic associations</li>
<li>Recognize folk influences in melodic style</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default Romantic0105MelodyPage;
