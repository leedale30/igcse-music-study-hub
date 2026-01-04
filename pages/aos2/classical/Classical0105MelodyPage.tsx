import React from 'react';
import { Link } from 'react-router-dom';

const Classical0105MelodyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/classical" className="hover:text-sky-600 dark:hover:text-sky-400">Classical Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Melody</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Melody
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
<h2>Definition: Melody</h2>
<p><strong>Melody</strong> refers to the main tune or musical line in a composition, consisting of a sequence of pitches that create a coherent musical statement. In Classical music, melody is characterized by elegance, balance, and clear phrase structure, reflecting the period's emphasis on proportion and natural expression.</p>
</section>
 Key Characteristics Section 
<section className="characteristics-section" id="key-characteristics">
<h2>Key Characteristics of Classical Melody</h2>
<div className="characteristic-item" id="balanced-phrases">
<h3>Balanced and Elegant Phrasing</h3>
<p>Classical melody is distinguished by its clear, balanced phrase structure that creates a sense of proportion and natural flow.</p>
<h4>Regular Phrase Lengths</h4>
<p>Classical melodies typically feature:</p>
<ul>
<li><strong>4-bar phrases:</strong> Basic unit of melodic construction</li>
<li><strong>8-bar periods:</strong> Two 4-bar phrases forming complete statements</li>
<li><strong>Antecedent and consequent:</strong> Question and answer phrase relationships</li>
<li><strong>Symmetrical structure:</strong> Balanced proportions creating elegance</li>
</ul>
<h4>Clear Melodic Contour</h4>
<p>Classical melodies exhibit distinctive shape characteristics:</p>
<ul>
<li><strong>Arch-shaped contours:</strong> Rising to a climax then falling</li>
<li><strong>Stepwise motion:</strong> Predominantly conjunct movement</li>
<li><strong>Strategic leaps:</strong> Larger intervals used for expressive effect</li>
<li><strong>Balanced direction:</strong> Upward and downward motion in proportion</li>
</ul>
</div>
<div className="characteristic-item" id="galant-style">
<h3>Galant Style Characteristics</h3>
<p>Classical melody reflects the galant style's emphasis on natural expression and elegant simplicity.</p>
<h4>Singable Quality</h4>
<p>Classical melodies are designed to be naturally expressive:</p>
<ul>
<li><strong>Vocal influence:</strong> Melodies that could be sung naturally</li>
<li><strong>Comfortable range:</strong> Avoiding extreme registers</li>
<li><strong>Natural breathing points:</strong> Phrase endings that allow for breath</li>
<li><strong>Expressive intervals:</strong> Carefully chosen for emotional effect</li>
</ul>
<h4>Ornamentation and Decoration</h4>
<p>Classical melody incorporates tasteful ornamentation:</p>
<ul>
<li><strong>Appoggiatura:</strong> Expressive dissonant notes resolving downward</li>
<li><strong>Turns and trills:</strong> Decorative figures enhancing melodic lines</li>
<li><strong>Passing tones:</strong> Smooth connections between chord tones</li>
<li><strong>Neighbor tones:</strong> Brief departures from and returns to main notes</li>
</ul>
</div>
</section>
 Melodic Techniques Section 
<section className="techniques-section" id="melodic-techniques">
<h2>Classical Melodic Techniques</h2>
<div className="technique-item" id="motivic-development">
<h3>Motivic Development</h3>
<p>Classical composers used sophisticated techniques to develop melodic ideas:</p>
<h4>Motivic Transformation</h4>
<ul>
<li><strong>Sequence:</strong> Repetition of motifs at different pitch levels</li>
<li><strong>Inversion:</strong> Turning motifs upside down</li>
<li><strong>Retrograde:</strong> Playing motifs backward</li>
<li><strong>Augmentation/Diminution:</strong> Lengthening or shortening note values</li>
</ul>
<h4>Thematic Relationships</h4>
<ul>
<li><strong>Unity through variation:</strong> Related themes throughout movements</li>
<li><strong>Contrasting themes:</strong> Different characters within same work</li>
<li><strong>Developmental processes:</strong> Gradual transformation of themes</li>
<li><strong>Cyclic elements:</strong> Themes returning in different movements</li>
</ul>
</div>
<div className="technique-item" id="phrase-structure">
<h3>Phrase Structure and Cadences</h3>
<p>Classical melody is organized through sophisticated phrase relationships:</p>
<h4>Period Structure</h4>
<ul>
<li><strong>Antecedent phrase:</strong> Opening statement, often ending with half cadence</li>
<li><strong>Consequent phrase:</strong> Answering statement, typically ending with authentic cadence</li>
<li><strong>Parallel periods:</strong> Similar melodic content in both phrases</li>
<li><strong>Contrasting periods:</strong> Different melodic material in each phrase</li>
</ul>
<h4>Phrase Extension and Modification</h4>
<ul>
<li><strong>Elision:</strong> Overlapping phrase endings and beginnings</li>
<li><strong>Extension:</strong> Lengthening phrases beyond expected length</li>
<li><strong>Compression:</strong> Shortening expected phrase lengths</li>
<li><strong>Deceptive resolutions:</strong> Unexpected harmonic directions</li>
</ul>
</div>
</section>
 Melodic Types Section 
<section className="types-section" id="melodic-types">
<h2>Types of Classical Melody</h2>
<div className="category-list" id="melody-categories">
<h3>Functional Categories</h3>
<h4>Primary Themes</h4>
<p>Main melodic ideas that define musical works:</p>
<ul>
<li><strong>First themes:</strong> Opening melodic statements, often lyrical</li>
<li><strong>Second themes:</strong> Contrasting melodies, typically in related keys</li>
<li><strong>Closing themes:</strong> Concluding melodic material</li>
<li><strong>Development themes:</strong> New melodies introduced in development sections</li>
</ul>
<h4>Accompaniment Melodies</h4>
<p>Secondary melodic lines supporting main themes:</p>
<ul>
<li><strong>Counter-melodies:</strong> Independent lines accompanying main themes</li>
<li><strong>Bass lines:</strong> Melodic bass parts, often walking or arpeggiated</li>
<li><strong>Inner voices:</strong> Melodic activity in middle parts</li>
<li><strong>Alberti bass:</strong> Broken chord accompaniment patterns</li>
</ul>
<h4>Transitional Melodies</h4>
<p>Melodic material connecting main sections:</p>
<ul>
<li><strong>Bridge passages:</strong> Connecting different themes or keys</li>
<li><strong>Developmental episodes:</strong> Melodic working-out of themes</li>
<li><strong>Retransitions:</strong> Melodic preparation for theme returns</li>
<li><strong>Codetta melodies:</strong> Brief concluding melodic ideas</li>
</ul>
</div>
</section>
 Melodic Expression Section 
<section className="expression-section" id="melodic-expression">
<h2>Melodic Expression in Classical Music</h2>
<div className="expression-list" id="expressive-devices">
<h3>Expressive Techniques</h3>
<h4>Intervallic Expression</h4>
<p>Classical composers used specific intervals for emotional effect:</p>
<ul>
<li><strong>Ascending sixths:</strong> Often express yearning or reaching</li>
<li><strong>Descending sevenths:</strong> Create pathos and emotional intensity</li>
<li><strong>Chromatic steps:</strong> Add harmonic color and expression</li>
<li><strong>Octave leaps:</strong> Provide dramatic emphasis</li>
</ul>
<h4>Rhythmic Expression</h4>
<p>Melodic rhythm contributes to expressive character:</p>
<ul>
<li><strong>Syncopation:</strong> Creates forward momentum and interest</li>
<li><strong>Dotted rhythms:</strong> Add elegance and character</li>
<li><strong>Hemiola:</strong> Cross-rhythms for expressive tension</li>
<li><strong>Rubato implications:</strong> Melodic shapes suggesting tempo flexibility</li>
</ul>
<h4>Dynamic Implications</h4>
<p>Melodic contour often implies dynamic treatment:</p>
<ul>
<li><strong>Rising lines:</strong> Often suggest crescendo</li>
<li><strong>Falling lines:</strong> May imply diminuendo</li>
<li><strong>Climactic points:</strong> Highest notes often receive emphasis</li>
<li><strong>Phrase endings:</strong> Typically taper dynamically</li>
</ul>
</div>
</section>
 Focus Work Examples Section 
<section className="examples-section" id="focus-examples">
<h2>Focus Work Examples</h2>
<div className="example-item" id="mozart-example">
<h3>Mozart: <em>Quintet for Piano and Winds in E flat major, K. 452</em></h3>
<p>Mozart's Quintet demonstrates exemplary Classical melodic writing:</p>
<h4>First Movement (Largo - Allegro moderato)</h4>
<ul>
<li><strong>Opening theme:</strong> Elegant, balanced phrases with clear antecedent-consequent structure</li>
<li><strong>Second theme:</strong> Contrasting character in B flat major, more lyrical and expressive</li>
<li><strong>Development melodies:</strong> Sophisticated motivic development and transformation</li>
<li><strong>Instrumental dialogue:</strong> Melodic lines passed between piano and winds</li>
</ul>
<h4>Second Movement (Larghetto)</h4>
<ul>
<li><strong>Lyrical main theme:</strong> Singable melody with expressive ornamentation</li>
<li><strong>Variation techniques:</strong> Melodic embellishment and decoration</li>
<li><strong>Counter-melodies:</strong> Independent melodic lines in accompanying parts</li>
<li><strong>Expressive intervals:</strong> Strategic use of sixths and sevenths for emotion</li>
</ul>
<h4>Third Movement (Allegretto)</h4>
<ul>
<li><strong>Rondo theme:</strong> Memorable, recurring melodic idea</li>
<li><strong>Episode melodies:</strong> Contrasting melodic material in different keys</li>
<li><strong>Developmental episodes:</strong> Motivic working of main themes</li>
<li><strong>Virtuosic passages:</strong> Brilliant melodic writing showcasing instrumental capabilities</li>
</ul>
</div>
</section>
 Comparison with Baroque Section 
<section className="comparison-section" id="baroque-comparison">
<h2>Classical vs. Baroque Melody</h2>
<p>Understanding the evolution from Baroque to Classical melodic style:</p>
<div className="comparison-list" id="comparison-points">
<h3>Key Differences</h3>
<h4>Phrase Structure</h4>
<ul>
<li><strong>Baroque:</strong> Continuous, spinning-out melodic lines</li>
<li><strong>Classical:</strong> Clear, balanced phrase structure with regular cadences</li>
<li><strong>Baroque:</strong> Fortspinnung (spinning forth) technique</li>
<li><strong>Classical:</strong> Antecedent-consequent phrase relationships</li>
</ul>
<h4>Melodic Character</h4>
<ul>
<li><strong>Baroque:</strong> Often instrumental in conception, virtuosic</li>
<li><strong>Classical:</strong> More vocal in character, naturally singable</li>
<li><strong>Baroque:</strong> Emphasis on contrapuntal complexity</li>
<li><strong>Classical:</strong> Focus on melodic clarity and elegance</li>
</ul>
<h4>Ornamentation</h4>
<ul>
<li><strong>Baroque:</strong> Extensive, often improvised ornamentation</li>
<li><strong>Classical:</strong> More controlled, written-out decoration</li>
<li><strong>Baroque:</strong> Ornamentation as structural element</li>
<li><strong>Classical:</strong> Ornamentation for expressive enhancement</li>
</ul>
</div>
</section>
 Performance Practice Section 
<section className="practice-section" id="performance-practice">
<h2>Performance Practice</h2>
<p>Guidelines for performing Classical melodies with appropriate style:</p>
<div className="practice-list" id="practice-guidelines">
<h3>Key Considerations</h3>
<h4>Phrasing and Articulation</h4>
<ul>
<li><strong>Natural phrasing:</strong> Follow the melodic contour and harmonic rhythm</li>
<li><strong>Breath-like phrasing:</strong> Even in instrumental music, consider vocal phrasing</li>
<li><strong>Appropriate articulation:</strong> Use legato and staccato to enhance melodic character</li>
<li><strong>Dynamic shaping:</strong> Follow melodic contour with subtle dynamic changes</li>
</ul>
<h4>Ornamentation</h4>
<ul>
<li><strong>Tasteful addition:</strong> Add appropriate ornaments where indicated or traditional</li>
<li><strong>Style consistency:</strong> Use ornamentation appropriate to Classical period</li>
<li><strong>Expressive purpose:</strong> Ornaments should enhance, not obscure, melodic line</li>
<li><strong>Historical awareness:</strong> Understand period ornamentation practices</li>
</ul>
<h4>Tempo and Rubato</h4>
<ul>
<li><strong>Controlled flexibility:</strong> Use rubato to enhance phrasing without disrupting pulse</li>
<li><strong>Phrase-sensitive timing:</strong> Slight ritardandos at phrase endings</li>
<li><strong>Structural awareness:</strong> Maintain overall tempo while allowing expressive flexibility</li>
<li><strong>Ensemble consideration:</strong> Coordinate melodic flexibility with accompaniment</li>
</ul>
</div>
</section>
 Assessment Focus Section 
<section className="assessment-section" id="assessment-focus">
<h2>Assessment Focus</h2>
<p>Key points for IGCSE Music assessment regarding melody in Classical music:</p>
<div className="assessment-list" id="assessment-points">
<h3>Essential Knowledge</h3>
<ul>
<li><strong>Phrase structure:</strong> Understand antecedent-consequent relationships</li>
<li><strong>Melodic contour:</strong> Analyze shape and direction of melodic lines</li>
<li><strong>Motivic development:</strong> Recognize techniques of thematic transformation</li>
<li><strong>Expressive devices:</strong> Identify how melody creates emotional effect</li>
<li><strong>Historical context:</strong> Understand Classical melodic style characteristics</li>
<li><strong>Comparative analysis:</strong> Differences from Baroque melodic practices</li>
</ul>
<h3>Analytical Skills</h3>
<ul>
<li>Identify phrase boundaries and cadence types</li>
<li>Analyze melodic intervals and their expressive effects</li>
<li>Trace motivic development through musical works</li>
<li>Evaluate the relationship between melody and harmony</li>
<li>Compare melodic treatment across different Classical composers</li>
</ul>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default Classical0105MelodyPage;
