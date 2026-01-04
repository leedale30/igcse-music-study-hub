import React from 'react';
import { Link } from 'react-router-dom';

const Baroque0102RhythmPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/baroque" className="hover:text-sky-600 dark:hover:text-sky-400">Baroque Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Rhythm</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Rhythm
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
        <div dangerouslySetInnerHTML={{ __html: `Definition Section 
<section className="definition-section" id="definition">
<h2>Definition: Rhythm</h2>
<p><strong>Rhythm</strong> refers to the pattern of beats, accents, and durations that drive the music forward. In Baroque music, rhythm is often characterized by a strong, continuous drive, particularly in faster movements, or by specific, formalized patterns that create energy and momentum.</p>
</section>
 Key Characteristics Section 
<section className="characteristics-section" id="key-characteristics">
<h2>Key Characteristics of Baroque Rhythm</h2>
<div className="characteristic-item" id="continuous-energy">
<h3>Continuous Energy and Drive</h3>
<p>Baroque rhythm is characterized by <strong>continuous energy</strong>, extensive use of specific patterns, and a wide range of note values. This creates a sense of forward momentum that propels the music from beginning to end.</p>
</div>
<div className="characteristic-item" id="rhythmic-variety">
<h3>Rhythmic Variety</h3>
<p>Baroque composers utilize a <strong>wide range of note values</strong>, creating rhythmic complexity and interest:</p>
<ul>
<li><strong>Long sustained notes</strong> - Providing stability and foundation</li>
<li><strong>Fast-moving semiquavers and demisemiquavers</strong> - Creating excitement and virtuosic display</li>
<li><strong>Mixed note values</strong> - Combining different durations for rhythmic contrast</li>
</ul>
</div>
</section>
 Specific Rhythmic Features Section 
<section className="features-section" id="specific-features">
<h2>Specific Rhythmic Features</h2>
<p>Candidates must be able to identify and describe the following rhythmic elements:</p>
<div className="feature-item" id="syncopation">
<h3>Syncopation</h3>
<p><strong>Syncopation</strong> refers to rhythms that emphasize beats played on the weaker beats of the bar, creating an off-beat feel. This is a required term for identification across the syllabus.</p>
<h4>Characteristics of Syncopation in Baroque Music:</h4>
<ul>
<li>Frequent use contributes to the drive and momentum of the music</li>
<li>Creates rhythmic interest by displacing expected accents</li>
<li>Often found in fast-moving passages and virtuosic sections</li>
</ul>
<h4>Focus Work Example:</h4>
<p>In Handel's <em>Allegro</em> (Movement 2, Op. 6, No. 5), syncopation, along with fast-moving semiquavers, helps drive the music forward and creates rhythmic excitement.</p>
</div>
<div className="feature-item" id="dotted-rhythms">
<h3>Dotted Rhythms</h3>
<p><strong>Dotted rhythms</strong> are common in Baroque music, especially in slow, majestic introductory sections. They create a stately, emphatic quality that is characteristic of the period.</p>
<h4>Common Uses:</h4>
<ul>
<li><strong>French Overture style</strong> - Slow, ceremonial openings with characteristic dotted rhythms</li>
<li><strong>Stately character</strong> - Imparting dignity and grandeur to musical passages</li>
<li><strong>Ceremonial music</strong> - Court dances and formal occasions</li>
</ul>
</div>
<div className="feature-item" id="hemiola">
<h3>Hemiola</h3>
<p><strong>Hemiola</strong> is a specific rhythmic device that candidates must recognize. This rhythmic device creates a temporary shift in metrical emphasis.</p>
<h4>How Hemiola Works:</h4>
<p>Hemiola makes two bars of triple time temporarily sound like three bars of duple time, creating a cross-rhythm effect that adds sophistication to the musical texture.</p>
<h4>Typical Usage:</h4>
<ul>
<li>Often used immediately prior to important cadences</li>
<li>Creates rhythmic tension before resolution</li>
<li>Adds metrical complexity to otherwise regular patterns</li>
</ul>
</div>
<div className="feature-item" id="note-values">
<h3>Note Values and Patterns</h3>
<p>Recognition and interpretation of all common note values is essential for score reading and listening comprehension:</p>
<h4>Essential Note Values:</h4>
<ul>
<li><strong>Whole notes, half notes, quarter notes</strong> - Basic rhythmic foundation</li>
<li><strong>Eighth notes and sixteenth notes</strong> - Creating movement and activity</li>
<li><strong>Triplets</strong> - Three notes played in the time of two</li>
<li><strong>Dotted rhythms</strong> - Extended note values creating specific character</li>
<li><strong>Corresponding rests</strong> - Silence as an important rhythmic element</li>
</ul>
</div>
</section>
 Focus Work Examples Section 
<section className="examples-section" id="focus-examples">
<h2>Focus Work Examples</h2>
<div className="example-item" id="handel-example">
<h3>Handel: <em>Concerto Grosso Op. 6 No. 5</em></h3>
<h4>Movement 2 - <em>Allegro</em></h4>
<p>This movement demonstrates several key rhythmic features:</p>
<ul>
<li><strong>Syncopation</strong> - Creates forward drive and momentum</li>
<li><strong>Fast-moving semiquavers</strong> - Provides rhythmic excitement</li>
<li><strong>Rhythmic imitation</strong> - Between different instrumental parts</li>
<li><strong>Varied note values</strong> - From sustained notes to rapid passages</li>
</ul>
<h4>Movement 1 - <em>Larghetto e staccato</em></h4>
<p>Features characteristic Baroque rhythmic elements:</p>
<ul>
<li><strong>Staccato articulation</strong> - Creating rhythmic clarity</li>
<li><strong>Moderate rhythmic activity</strong> - Balanced between movement and stability</li>
</ul>
</div>
<div className="example-item" id="vivaldi-example">
<h3>Vivaldi: <em>Spring</em> (Movement 1)</h3>
<p>Vivaldi's <em>Spring</em> demonstrates various rhythmic techniques:</p>
<ul>
<li><strong>Contrasting rhythmic sections</strong> - Between tutti and solo passages</li>
<li><strong>Virtuosic rhythmic patterns</strong> - In the solo violin part</li>
<li><strong>Programmatic rhythms</strong> - Imitating natural sounds like birdsong</li>
<li><strong>Rhythmic sequences</strong> - Repeated patterns at different pitch levels</li>
</ul>
</div>
</section>
 Terminology Section 
<section className="terminology-section" id="terminology">
<h2>Essential Rhythmic Terminology</h2>
<p>Students must recognize and understand the following rhythmic terms:</p>
<div className="terminology-list" id="rhythm-terms">
<h3>Core Rhythmic Terms</h3>
<ul>
<li><strong>Syncopation</strong> - Emphasis on weak beats or off-beats</li>
<li><strong>Dotted rhythms</strong> - Notes with dots extending their duration</li>
<li><strong>Triplets</strong> - Three notes played in the time normally occupied by two</li>
<li><strong>Hemiola</strong> - Cross-rhythm creating temporary metrical shift</li>
<li><strong>Note values</strong> - The duration of individual notes (whole, half, quarter, etc.)</li>
<li><strong>Rests</strong> - Periods of silence with specific durations</li>
</ul>
<h3>Rhythmic Patterns</h3>
<ul>
<li><strong>Ostinato</strong> - Repeated rhythmic pattern</li>
<li><strong>Sequence</strong> - Rhythmic pattern repeated at different pitch levels</li>
<li><strong>Augmentation</strong> - Rhythmic pattern with note values lengthened</li>
<li><strong>Diminution</strong> - Rhythmic pattern with note values shortened</li>
</ul>
</div>
</section>
 Performance Practice Section 
<section className="practice-section" id="performance-practice">
<h2>Baroque Rhythmic Performance Practice</h2>
<p>Understanding Baroque rhythmic conventions is essential for proper interpretation:</p>
<ul>
<li><strong>Precision and Clarity:</strong> Baroque rhythms require precise execution and clear articulation</li>
<li><strong>Continuous Drive:</strong> Maintain forward momentum throughout the piece</li>
<li><strong>Ornamentation:</strong> Rhythmic embellishments were often added by performers</li>
<li><strong>Dance Origins:</strong> Many rhythmic patterns derive from Baroque dance forms</li>
<li><strong>Metric Hierarchy:</strong> Strong and weak beats clearly defined within the meter</li>
</ul>
</section>
 Assessment Focus Section 
<section className="assessment-section" id="assessment-focus">
<h2>Assessment Focus</h2>
<p><strong>Important for Examination:</strong> When analyzing Baroque rhythm in the listening examination, candidates should:</p>
<ul>
<li>Identify specific rhythmic patterns such as syncopation and dotted rhythms</li>
<li>Recognize the use of hemiola and its effect on the music</li>
<li>Describe the range of note values used and their expressive effect</li>
<li>Listen for rhythmic imitation between different parts</li>
<li>Understand how rhythm contributes to the overall drive and character of the music</li>
<li>Use correct terminology when describing rhythmic features</li>
<li>Focus on the rhythmic features <em>actually heard</em> in the recorded extracts</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default Baroque0102RhythmPage;
