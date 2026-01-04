import React from 'react';
import { Link } from 'react-router-dom';

const Classical0203VocalTechniquesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Vocal Techniques</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Vocal Techniques
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
<p>Vocal genres prevalent in the Classical era retained foundational techniques inherited from the Baroque period, prioritizing clarity and melodic elegance. Classical vocal music emphasized refined expression, clear text delivery, and sophisticated ornamentation within structured forms.</p>
</section>
<section id="recitative-aria">
<h2>Recitative and Aria</h2>
<p>Vocal pieces, especially within opera and oratorio, utilized two primary forms that served different dramatic and musical functions.</p>
<h3>Recitative</h3>
<div className="technique-detail">
<h4>Definition and Function</h4>
<p><strong>Recitative</strong> is speech-like singing used to advance plot and deliver narrative information quickly and clearly.</p>
<h4>Characteristics</h4>
<ul>
<li><strong>Rhythmic flexibility:</strong> Follows natural speech rhythms</li>
<li><strong>Minimal accompaniment:</strong> Usually simple chordal support</li>
<li><strong>Rapid text delivery:</strong> Many words sung quickly</li>
<li><strong>Functional harmony:</strong> Clear harmonic progressions</li>
</ul>
<h4>Types of Recitative</h4>
<ul>
<li><strong>Recitativo secco:</strong> "Dry" recitative with minimal accompaniment</li>
<li><strong>Recitativo accompagnato:</strong> Accompanied recitative with orchestral support</li>
</ul>
</div>
<h3>Aria</h3>
<div className="technique-detail">
<h4>Definition and Function</h4>
<p><strong>Aria</strong> is a melodic solo song used to express emotion and showcase vocal virtuosity.</p>
<h4>Characteristics</h4>
<ul>
<li><strong>Lyrical melody:</strong> Beautiful, singable melodic lines</li>
<li><strong>Emotional expression:</strong> Focus on character's inner feelings</li>
<li><strong>Structural organization:</strong> Often in da capo (ABA) form</li>
<li><strong>Orchestral accompaniment:</strong> Rich instrumental support</li>
</ul>
<h4>Classical Aria Types</h4>
<ul>
<li><strong>Coloratura aria:</strong> Featuring elaborate vocal ornamentation</li>
<li><strong>Lyric aria:</strong> Emphasizing beautiful melodic expression</li>
<li><strong>Dramatic aria:</strong> Conveying intense emotional content</li>
</ul>
</div>
</section>
<section id="melisma">
<h2>Melismatic Technique</h2>
<p>The technique of setting one syllable to many notes (<strong>melisma</strong>) was employed for heightened emotional expression in the vocal line.</p>
<h3>Function and Usage</h3>
<ul>
<li><strong>Emotional intensification:</strong> Extended melismas on important words</li>
<li><strong>Virtuosic display:</strong> Showcasing singer's technical skill</li>
<li><strong>Structural emphasis:</strong> Highlighting climactic moments</li>
<li><strong>Text painting:</strong> Musical illustration of word meanings</li>
</ul>
<h3>Melisma vs. Syllabic Setting</h3>
<div className="comparison-grid">
<div className="technique-comparison">
<h4>Melismatic Setting</h4>
<ul>
<li>Many notes per syllable</li>
<li>Emphasizes vocal virtuosity</li>
<li>Creates emotional intensity</li>
<li>Common in arias and climactic moments</li>
</ul>
</div>
<div className="technique-comparison">
<h4>Syllabic Setting</h4>
<ul>
<li>One note per syllable</li>
<li>Emphasizes text clarity</li>
<li>Enables rapid text delivery</li>
<li>Common in recitatives and narrative sections</li>
</ul>
</div>
</div>
</section>
<section id="vibrato">
<h2>Vibrato Technique</h2>
<p>The use of <strong>vibrato</strong> (slight pitch fluctuation) is a general vocal technique that adds expression and warmth to the vocal tone.</p>
<h3>Characteristics of Classical Vibrato</h3>
<ul>
<li><strong>Controlled oscillation:</strong> Regular, controlled pitch variation</li>
<li><strong>Expressive tool:</strong> Adds warmth and emotional depth</li>
<li><strong>Technical skill:</strong> Requires proper breath support and control</li>
<li><strong>Stylistic appropriateness:</strong> Used judiciously for maximum effect</li>
</ul>
<h3>Application in Classical Vocal Music</h3>
<ul>
<li><strong>Sustained notes:</strong> Particularly effective on long, held notes</li>
<li><strong>Emotional peaks:</strong> Enhanced expression at climactic moments</li>
<li><strong>Lyrical passages:</strong> Adds beauty to melodic lines</li>
<li><strong>Cadential points:</strong> Emphasizes important harmonic resolutions</li>
</ul>
</section>
<section id="classical-vocal-style">
<h2>Classical Vocal Style Characteristics</h2>
<h3>Clarity and Elegance</h3>
<p>Classical vocal technique emphasized clear articulation and elegant phrasing, reflecting the era's aesthetic values.</p>
<h3>Balanced Expression</h3>
<ul>
<li><strong>Controlled emotion:</strong> Expressive but not excessive</li>
<li><strong>Technical precision:</strong> Clean execution of ornaments and passages</li>
<li><strong>Textual clarity:</strong> Words clearly understood by audience</li>
<li><strong>Musical structure:</strong> Vocal line supports overall formal design</li>
</ul>
<h3>Ornamentation in Vocal Music</h3>
<ul>
<li><strong>Written ornaments:</strong> Composers increasingly wrote out decorations</li>
<li><strong>Improvised additions:</strong> Singers still added tasteful embellishments</li>
<li><strong>Cadential flourishes:</strong> Elaborate passages at phrase endings</li>
<li><strong>Da capo variations:</strong> Ornamented returns in ABA arias</li>
</ul>
</section>
<section id="vocal-genres">
<h2>Classical Vocal Genres</h2>
<h3>Opera</h3>
<ul>
<li><strong>Opera seria:</strong> Serious opera with mythological or historical subjects</li>
<li><strong>Opera buffa:</strong> Comic opera with contemporary, everyday characters</li>
<li><strong>Singspiel:</strong> German opera with spoken dialogue</li>
</ul>
<h3>Sacred Vocal Music</h3>
<ul>
<li><strong>Mass settings:</strong> Musical settings of the Mass Ordinary</li>
<li><strong>Oratorio:</strong> Large-scale sacred dramatic works</li>
<li><strong>Motets:</strong> Shorter sacred choral pieces</li>
</ul>
<h3>Secular Vocal Music</h3>
<ul>
<li><strong>Art songs:</strong> Solo songs with piano accompaniment</li>
<li><strong>Part songs:</strong> Secular choral music</li>
<li><strong>Concert arias:</strong> Standalone arias for concert performance</li>
</ul>
</section>
<section id="performance-practice">
<h2>Classical Vocal Performance Practice</h2>
<h3>Vocal Production</h3>
<ul>
<li><strong>Bel canto principles:</strong> Beautiful, smooth vocal production</li>
<li><strong>Breath control:</strong> Sustained phrases with proper support</li>
<li><strong>Register consistency:</strong> Smooth transitions between vocal registers</li>
<li><strong>Dynamic control:</strong> Precise execution of crescendo and diminuendo</li>
</ul>
<h3>Interpretive Approach</h3>
<ul>
<li><strong>Text sensitivity:</strong> Musical interpretation serves textual meaning</li>
<li><strong>Stylistic awareness:</strong> Understanding of Classical aesthetic principles</li>
<li><strong>Dramatic appropriateness:</strong> Vocal expression matches dramatic context</li>
<li><strong>Ensemble sensitivity:</strong> Vocal line fits within overall texture</li>
</ul>
</section>
<section id="assessment-points">
<h2>Key Assessment Points</h2>
<h3>Students should be able to:</h3>
<ul>
<li>Distinguish between recitative and aria functions and characteristics</li>
<li>Identify melismatic and syllabic text settings</li>
<li>Recognize the use of vibrato as an expressive technique</li>
<li>Understand the different types of recitative (secco and accompagnato)</li>
<li>Identify various Classical vocal genres (opera seria, opera buffa, oratorio)</li>
<li>Recognize vocal ornamentation techniques in Classical music</li>
<li>Understand the relationship between vocal technique and textual expression</li>
</ul>
</section>
<section id="navigation-footer">
<h2>Continue Your Study</h2>
<div className="nav-grid">
<a className="nav-card" href="aos02-02-02-organology.html">
<h3>← Previous: 2.2 Organology</h3>
<p>Review Classical instrument classification and development</p>
</a>
<a className="nav-card" href="aos02-02-04-extended-techniques.html">
<h3>Next: 2.4 Extended Techniques →</h3>
<p>Explore instrumental techniques and articulation</p>
</a>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default Classical0203VocalTechniquesPage;
