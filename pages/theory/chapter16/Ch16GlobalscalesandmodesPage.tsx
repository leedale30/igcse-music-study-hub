import React from 'react';
import { Link } from 'react-router-dom';

const Ch16GlobalscalesandmodesPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/theory" className="hover:text-sky-600 dark:hover:text-sky-400">Theory</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-300">Ch. 16</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Global Scales and Modes</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium">
            Chapter 16
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            World Music Theory
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
          Global Scales and Modes
        </h1>
      </header>

      {/* Main Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none
        prose-headings:text-slate-800 dark:prose-headings:text-slate-100
        prose-h2:text-2xl prose-h2:font-bold prose-h2:border-b prose-h2:border-slate-200 dark:prose-h2:border-slate-700 prose-h2:pb-2 prose-h2:mb-4
        prose-h3:text-xl prose-h3:font-semibold
        prose-h4:text-lg prose-h4:font-medium
        prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
        prose-li:text-gray-700 dark:prose-li:text-gray-300
        prose-strong:text-slate-800 dark:prose-strong:text-slate-200
        prose-a:text-sky-600 dark:prose-a:text-sky-400 prose-a:hover:underline
        prose-img:rounded-lg prose-img:shadow-md prose-img:mx-auto
        prose-figure:my-6
        prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-gray-500 dark:prose-figcaption:text-gray-400
        [&_section]:mb-8 [&_section]:bg-slate-50 dark:[&_section]:bg-slate-800/50 [&_section]:rounded-lg [&_section]:p-6
        [&_table]:w-full [&_th]:bg-slate-100 dark:[&_th]:bg-slate-700 [&_th]:p-2 [&_td]:p-2 [&_td]:border [&_td]:border-slate-200 dark:[&_td]:border-slate-600
      ">
        <div dangerouslySetInnerHTML={{ __html: `<div id="ptx-content" className="ptx-content"><section className="section" id="GlobalScalesAndModes">
<h2 className="heading hide-type">
<span className="type">Section</span> <span className="codenumber">16.1</span> <span className="title">Global Scales and Modes</span>
</h2>
<div className="introduction">
<p>The study of non-Western scalar systems reveals the remarkable diversity of approaches to organizing pitch relationships across different musical cultures. While Western music theory has traditionally focused on major and minor scales, global musical traditions have developed sophisticated scalar systems that employ different interval relationships, microtonal inflections, and theoretical frameworks. This chapter examines three fundamental non-Western scalar systems: the Rāga system of Indian classical music, the Maqām system of Arab music, and the Pentatonic scales of Chinese music.</p>

<p>Understanding these systems is essential for comprehensive musical analysis across Areas of Study 5 and 6, as they provide the theoretical foundation for melodic construction, improvisation, and compositional practice in their respective traditions. Each system represents a unique solution to the fundamental challenge of organizing pitch relationships for expressive and structural purposes.</p>
</div>

<section className="subsection" id="raga-system">
<h3 className="heading hide-type">
<span className="type">Subsection</span> <span className="codenumber">16.1.1</span> <span className="title">Rāga: The Indian Classical System</span>
</h3>

<div className="paragraphs" id="raga-definition">
<h5 className="heading"><span className="title">Definition and Theoretical Foundation</span></h5>
<p><strong>Rāga</strong> (Sanskrit: "color" or "passion") is a melodic framework that provides the foundation for composition and improvisation in Indian classical music. Unlike Western scales, which are primarily defined by their interval patterns, rāgas encompass a complex system of melodic rules, emotional associations, and performance practices.</p>

<p><strong>Core Components of a Rāga:</strong></p>
<ul className="disc">
<li><p><strong>Svara (Notes):</strong> The specific pitches used, typically 5-7 notes from the 12-note chromatic system</p></li>
<li><p><strong>Arohana:</strong> The ascending melodic pattern</p></li>
<li><p><strong>Avarohana:</strong> The descending melodic pattern</p></li>
<li><p><strong>Vadi:</strong> The most important note (sonant)</p></li>
<li><p><strong>Samvadi:</strong> The second most important note (consonant)</p></li>
<li><p><strong>Varjya:</strong> Forbidden or avoided notes</p></li>
<li><p><strong>Pakad:</strong> Characteristic melodic phrases that define the rāga's identity</p></li>
</ul>
</div>

<div className="paragraphs" id="raga-classification">
<h5 className="heading"><span className="title">Classification Systems</span></h5>
<p><strong>Melakarta System (Carnatic):</strong></p>
<p>The South Indian system organizes rāgas into 72 parent scales (melakarta rāgas), each containing all seven notes (sampurna) in both ascending and descending forms. This mathematical approach provides a comprehensive framework for understanding scalar relationships.</p>

<p><strong>Key Melakarta Characteristics:</strong></p>
<ul className="disc">
<li><p>Each melakarta contains exactly seven notes</p></li>
<li><p>The same notes appear in both arohana and avarohana</p></li>
<li><p>No notes are omitted or repeated</p></li>
<li><p>Systematic organization by interval patterns</p></li>
</ul>

<p><strong>Thaat System (Hindustani):</strong></p>
<p>The North Indian system uses 10 basic thaats (parent scales) from which hundreds of rāgas are derived. This system allows for greater flexibility in note selection and melodic movement.</p>

<p><strong>The Ten Thaats:</strong></p>
<ol className="decimal">
<li><p><strong>Bilaval:</strong> Equivalent to Western major scale (Sa Re Ga Ma Pa Dha Ni)</p></li>
<li><p><strong>Khamaj:</strong> Major scale with flat seventh (Sa Re Ga Ma Pa Dha ni)</p></li>
<li><p><strong>Kafi:</strong> Natural minor with major sixth (Sa Re ga Ma Pa Dha ni)</p></li>
<li><p><strong>Asavari:</strong> Natural minor scale (Sa Re ga Ma Pa dha ni)</p></li>
<li><p><strong>Bhairavi:</strong> Phrygian mode (Sa re ga Ma Pa dha ni)</p></li>
<li><p><strong>Kalyan:</strong> Lydian mode (Sa Re Ga ma Pa Dha Ni)</p></li>
<li><p><strong>Marva:</strong> Unique pattern (Sa re Ga ma Pa Dha Ni)</p></li>
<li><p><strong>Purvi:</strong> Distinctive pattern (Sa re Ga ma Pa dha Ni)</p></li>
<li><p><strong>Todi:</strong> Complex pattern (Sa re ga ma Pa dha Ni)</p></li>
<li><p><strong>Bhairav:</strong> Double harmonic pattern (Sa re Ga Ma Pa dha Ni)</p></li>
</ol>
</div>

<div className="paragraphs" id="raga-performance">
<h5 className="heading"><span className="title">Performance Practice and Expression</span></h5>
<p><strong>Melodic Development:</strong></p>
<ul className="disc">
<li><p><strong>Alap:</strong> Free-rhythm exploration of the rāga's characteristics</p></li>
<li><p><strong>Jor:</strong> Introduction of pulse while maintaining improvisational character</p></li>
<li><p><strong>Jhala:</strong> Fast, rhythmic passages emphasizing the rāga's essential features</p></li>
<li><p><strong>Gat/Kriti:</strong> Composed pieces that demonstrate the rāga's full potential</p></li>
</ul>

<p><strong>Emotional and Temporal Associations:</strong></p>
<ul className="disc">
<li><p><strong>Rasa:</strong> Emotional flavor or sentiment associated with each rāga</p></li>
<li><p><strong>Time Theory:</strong> Specific rāgas associated with particular times of day or seasons</p></li>
<li><p><strong>Devotional Context:</strong> Spiritual and religious associations</p></li>
<li><p><strong>Therapeutic Applications:</strong> Believed healing properties of specific rāgas</p></li>
</ul>
</div>
</section>

<section className="subsection" id="maqam-system">
<h3 className="heading hide-type">
<span className="type">Subsection</span> <span className="codenumber">16.1.2</span> <span className="title">Maqām: The Arab Modal System</span>
</h3>

<div className="paragraphs" id="maqam-definition">
<h5 className="heading"><span className="title">Definition and Theoretical Framework</span></h5>
<p><strong>Maqām</strong> (Arabic: "place" or "position") is the modal system that forms the foundation of Arab classical music and related traditions throughout the Middle East, North Africa, and parts of Central Asia. The maqām system is characterized by its use of microtonal intervals, particularly quarter-tones, and its emphasis on melodic development through improvisation and ornamentation.</p>

<p><strong>Fundamental Elements:</strong></p>
<ul className="disc">
<li><p><strong>Tetrachords (Jins):</strong> Four-note segments that serve as building blocks</p></li>
<li><p><strong>Quarter-tones:</strong> Microtonal intervals that create characteristic melodic inflections</p></li>
<li><p><strong>Tonic (Qarar):</strong> The final note and tonal center of the maqām</p></li>
<li><p><strong>Dominant (Ghammaz):</strong> The secondary tonal center, typically a fifth above the tonic</p></li>
<li><p><strong>Modulation (Tahwil):</strong> Movement between related maqāmāt</p></li>
</ul>
</div>

<div className="paragraphs" id="microtonal-system">
<h5 className="heading"><span className="title">Microtonal Intervals and Quarter-Tones</span></h5>
<p><strong>The 24-Tone Equal Temperament System:</strong></p>
<p>Arab music theory divides the octave into 24 equal parts, creating intervals of approximately 50 cents each. This system allows for the precise notation and performance of quarter-tones, which are essential to the authentic performance of maqāmāt.</p>

<p><strong>Key Microtonal Intervals:</strong></p>
<ul className="disc">
<li><p><strong>Quarter-tone (50 cents):</strong> Half of a Western semitone</p></li>
<li><p><strong>Three-quarter tone (150 cents):</strong> Between a semitone and whole tone</p></li>
<li><p><strong>Neutral second (150 cents):</strong> Characteristic interval in many maqāmāt</p></li>
<li><p><strong>Neutral third (350 cents):</strong> Between major and minor third</p></li>
</ul>

<p><strong>Notation Systems:</strong></p>
<ul className="disc">
<li><p><strong>Traditional Symbols:</strong> Special accidentals indicating quarter-tone alterations</p></li>
<li><p><strong>Safi al-Din Notation:</strong> Historical system using letter names</p></li>
<li><p><strong>Modern Adaptations:</strong> Western staff notation with microtonal accidentals</p></li>
</ul>
</div>

<div className="paragraphs" id="major-maqamat">
<h5 className="heading"><span className="title">Principal Maqāmāt</span></h5>
<p><strong>Maqām Bayāti:</strong></p>
<ul className="disc">
<li><p><strong>Structure:</strong> D - E♭ - F - G - A - B♭ - C - D</p></li>
<li><p><strong>Characteristics:</strong> Neutral third, minor seventh</p></li>
<li><p><strong>Emotional Character:</strong> Contemplative, introspective</p></li>
<li><p><strong>Common Usage:</strong> Vocal and instrumental compositions</p></li>
</ul>

<p><strong>Maqām Hijāz:</strong></p>
<ul className="disc">
<li><p><strong>Structure:</strong> D - E♭ - F# - G - A - B♭ - C - D</p></li>
<li><p><strong>Characteristics:</strong> Augmented second between second and third degrees</p></li>
<li><p><strong>Emotional Character:</strong> Dramatic, passionate</p></li>
<li><p><strong>Regional Variations:</strong> Found throughout the Middle East and North Africa</p></li>
</ul>

<p><strong>Maqām Rāst:</strong></p>
<ul className="disc">
<li><p><strong>Structure:</strong> C - D - E♭ - F - G - A - B♭ - C</p></li>
<li><p><strong>Characteristics:</strong> Neutral third, considered the "mother" of maqāmāt</p></li>
<li><p><strong>Emotional Character:</strong> Balanced, noble</p></li>
<li><p><strong>Theoretical Importance:</strong> Foundation for understanding other maqāmāt</p></li>
</ul>

<p><strong>Maqām Sīkāh:</strong></p>
<ul className="disc">
<li><p><strong>Structure:</strong> E♭ - F - G - A♭ - B♭ - C - D - E♭</p></li>
<li><p><strong>Characteristics:</strong> Neutral intervals throughout</p></li>
<li><p><strong>Emotional Character:</strong> Mysterious, exotic</p></li>
<li><p><strong>Performance Practice:</strong> Requires careful intonation of microtones</p></li>
</ul>
</div>

<div className="paragraphs" id="maqam-performance">
<h5 className="heading"><span className="title">Performance Practice and Improvisation</span></h5>
<p><strong>Taqsīm (Instrumental Improvisation):</strong></p>
<ul className="disc">
<li><p>Free-rhythm exploration of the maqām's characteristics</p></li>
<li><p>Gradual revelation of the modal structure</p></li>
<li><p>Emphasis on ornamentation and microtonal inflection</p></li>
<li><p>Modulation to related maqāmāt</p></li>
</ul>

<p><strong>Layālī (Vocal Improvisation):</strong></p>
<ul className="disc">
<li><p>Wordless vocal improvisation using syllables like "ya layl"</p></li>
<li><p>Demonstration of vocal technique and maqām knowledge</p></li>
<li><p>Emotional expression through melodic ornamentation</p></li>
<li><p>Interaction with instrumental accompaniment</p></li>
</ul>
</div>
</section>

<section className="subsection" id="pentatonic-system">
<h3 className="heading hide-type">
<span className="type">Subsection</span> <span className="codenumber">16.1.3</span> <span className="title">Pentatonic Scales: Chinese Musical Foundation</span>
</h3>

<div className="paragraphs" id="pentatonic-theory">
<h5 className="heading"><span className="title">Theoretical Foundation</span></h5>
<p><strong>The Five-Tone System:</strong></p>
<p>Chinese music theory is built upon pentatonic (five-tone) scales that omit the fourth and seventh degrees of the Western major scale. This creates a distinctive sound characterized by the absence of semitones and the prominence of perfect fourths and fifths.</p>

<p><strong>The Five Fundamental Tones (Wu Sheng):</strong></p>
<ol className="decimal">
<li><p><strong>Gong (宫):</strong> The tonic or fundamental tone</p></li>
<li><p><strong>Shang (商):</strong> The second degree (major second above gong)</p></li>
<li><p><strong>Jue (角):</strong> The third degree (major third above gong)</p></li>
<li><p><strong>Zhi (徵):</strong> The fifth degree (perfect fifth above gong)</p></li>
<li><p><strong>Yu (羽):</strong> The sixth degree (major sixth above gong)</p></li>
</ol>

<p><strong>Interval Structure:</strong></p>
<p>The basic pentatonic scale follows the pattern: Tone - Tone - Minor Third - Tone - Minor Third, creating the intervals C - D - E - G - A when starting on C.</p>
</div>

<div className="paragraphs" id="pentatonic-modes">
<h5 className="heading"><span className="title">Modal Variations</span></h5>
<p><strong>The Five Modes:</strong></p>
<p>Each of the five tones can serve as the tonic, creating five different modal variations of the pentatonic scale:</p>

<ol className="decimal">
<li><p><strong>Gong Mode:</strong> C - D - E - G - A (major pentatonic character)</p></li>
<li><p><strong>Shang Mode:</strong> D - E - G - A - C (Dorian-like character)</p></li>
<li><p><strong>Jue Mode:</strong> E - G - A - C - D (Phrygian-like character)</p></li>
<li><p><strong>Zhi Mode:</strong> G - A - C - D - E (Mixolydian-like character)</p></li>
<li><p><strong>Yu Mode:</strong> A - C - D - E - G (minor pentatonic character)</p></li>
</ol>

<p><strong>Emotional and Symbolic Associations:</strong></p>
<ul className="disc">
<li><p><strong>Gong:</strong> Associated with earth, center, stability</p></li>
<li><p><strong>Shang:</strong> Associated with metal, west, autumn</p></li>
<li><p><strong>Jue:</strong> Associated with wood, east, spring</p></li>
<li><p><strong>Zhi:</strong> Associated with fire, south, summer</p></li>
<li><p><strong>Yu:</strong> Associated with water, north, winter</p></li>
</ul>
</div>

<div className="paragraphs" id="heptatonic-extensions">
<h5 className="heading"><span className="title">Heptatonic Extensions</span></h5>
<p><strong>Seven-Tone Scales:</strong></p>
<p>Chinese music theory also includes seven-tone scales created by adding two auxiliary tones (bian tones) to the basic pentatonic framework:</p>

<ul className="disc">
<li><p><strong>Bian Gong (变宫):</strong> A semitone below gong (leading tone)</p></li>
<li><p><strong>Bian Zhi (变徵):</strong> A semitone below zhi (tritone from gong)</p></li>
</ul>

<p><strong>Complete Seven-Tone Scale:</strong></p>
<p>C - D - E - F - G - A - B, where F is bian zhi and B is bian gong.</p>

<p><strong>Usage and Context:</strong></p>
<ul className="disc">
<li><p>Auxiliary tones used for melodic ornamentation</p></li>
<li><p>Temporary modulation and color</p></li>
<li><p>Influence from foreign musical traditions</p></li>
<li><p>Modern compositional techniques</p></li>
</ul>
</div>

<div className="paragraphs" id="chinese-instruments">
<h5 className="heading"><span className="title">Instrumental Applications</span></h5>
<p><strong>String Instruments:</strong></p>
<ul className="disc">
<li><p><strong>Guqin:</strong> Seven-string zither tuned to pentatonic intervals</p></li>
<li><p><strong>Pipa:</strong> Four-string lute with pentatonic fret positions</p></li>
<li><p><strong>Erhu:</strong> Two-string fiddle emphasizing pentatonic melodic lines</p></li>
</ul>

<p><strong>Wind Instruments:</strong></p>
<ul className="disc">
<li><p><strong>Dizi:</strong> Transverse flute with holes positioned for pentatonic scales</p></li>
<li><p><strong>Xiao:</strong> End-blown flute optimized for pentatonic performance</p></li>
<li><p><strong>Sheng:</strong> Mouth organ with pipes tuned to pentatonic harmony</p></li>
</ul>

<p><strong>Performance Characteristics:</strong></p>
<ul className="disc">
<li><p>Emphasis on melodic ornamentation within pentatonic framework</p></li>
<li><p>Use of slides and bends between pentatonic tones</p></li>
<li><p>Heterophonic texture in ensemble performance</p></li>
<li><p>Integration with Chinese poetic and philosophical concepts</p></li>
</ul>
</div>
</section>

<section className="subsection" id="comparative-analysis-scales">
<h3 className="heading hide-type">
<span className="type">Subsection</span> <span className="codenumber">16.1.4</span> <span className="title">Comparative Analysis</span>
</h3>

<div className="paragraphs" id="structural-comparison">
<h5 className="heading"><span className="title">Structural Characteristics</span></h5>
<p><strong>Interval Systems:</strong></p>
<ul className="disc">
<li><p><strong>Rāga:</strong> Uses 12-tone chromatic system with emphasis on specific note relationships</p></li>
<li><p><strong>Maqām:</strong> Employs 24-tone system with quarter-tone intervals</p></li>
<li><p><strong>Pentatonic:</strong> Based on five-tone system avoiding semitones</p></li>
</ul>

<p><strong>Theoretical Approach:</strong></p>
<ul className="disc">
<li><p><strong>Rāga:</strong> Emphasizes melodic rules, emotional associations, and performance practice</p></li>
<li><p><strong>Maqām:</strong> Focuses on tetrachordal construction and microtonal precision</p></li>
<li><p><strong>Pentatonic:</strong> Based on cosmological and philosophical principles</p></li>
</ul>

<p><strong>Performance Practice:</strong></p>
<ul className="disc">
<li><p><strong>Rāga:</strong> Extensive improvisation within strict melodic rules</p></li>
<li><p><strong>Maqām:</strong> Improvisation emphasizing ornamentation and modulation</p></li>
<li><p><strong>Pentatonic:</strong> Heterophonic variation and subtle ornamentation</p></li>
</ul>
</div>

<div className="paragraphs" id="cultural-context">
<h5 className="heading"><span className="title">Cultural and Philosophical Context</span></h5>
<p><strong>Spiritual Dimensions:</strong></p>
<ul className="disc">
<li><p><strong>Rāga:</strong> Connected to Hindu philosophy, time cycles, and emotional states (rasa)</p></li>
<li><p><strong>Maqām:</strong> Linked to Islamic culture, poetry, and Sufi mysticism</p></li>
<li><p><strong>Pentatonic:</strong> Integrated with Chinese cosmology, Confucian ethics, and Taoist philosophy</p></li>
</ul>

<p><strong>Social Functions:</strong></p>
<ul className="disc">
<li><p><strong>Rāga:</strong> Classical concert performance, devotional music, dance accompaniment</p></li>
<li><p><strong>Maqām:</strong> Court music, religious ceremonies, folk traditions</p></li>
<li><p><strong>Pentatonic:</strong> Ritual music, court entertainment, scholarly pursuits</p></li>
</ul>
</div>
</section>

<section className="subsection" id="analytical-applications">
<h3 className="heading hide-type">
<span className="type">Subsection</span> <span className="codenumber">16.1.5</span> <span className="title">Analytical Applications</span>
</h3>

<div className="paragraphs" id="analysis-methodology">
<h5 className="heading"><span className="title">Analytical Methodology</span></h5>
<p><strong>Identifying Scalar Systems:</strong></p>
<ol className="decimal">
<li><p>Determine the total number of pitches used</p></li>
<li><p>Identify interval patterns and relationships</p></li>
<li><p>Analyze ascending and descending patterns</p></li>
<li><p>Recognize characteristic melodic phrases</p></li>
<li><p>Consider cultural and contextual factors</p></li>
</ol>

<p><strong>Comparative Analysis Framework:</strong></p>
<ul className="disc">
<li><p>Structural analysis of interval relationships</p></li>
<li><p>Examination of performance practice implications</p></li>
<li><p>Cultural and historical contextualization</p></li>
<li><p>Cross-cultural influence and adaptation</p></li>
</ul>
</div>

<div className="paragraphs" id="practical-exercises">
<h5 className="heading"><span className="title">Practical Exercises</span></h5>
<p><strong>Listening Analysis:</strong></p>
<ul className="disc">
<li><p>Identify scalar systems in recorded examples</p></li>
<li><p>Recognize characteristic intervals and ornaments</p></li>
<li><p>Compare different performances of the same rāga or maqām</p></li>
<li><p>Analyze modulation and development techniques</p></li>
</ul>

<p><strong>Theoretical Exercises:</strong></p>
<ul className="disc">
<li><p>Construct scales in different systems</p></li>
<li><p>Analyze interval relationships and patterns</p></li>
<li><p>Compare modal variations within each system</p></li>
<li><p>Examine cross-cultural influences and adaptations</p></li>
</ul>
</div>
</section>

<section className="subsection" id="conclusion-scales">
<h3 className="heading hide-type">
<span className="type">Subsection</span> <span className="codenumber">16.1.6</span> <span className="title">Conclusion</span>
</h3>
<p>The study of global scales and modes reveals the remarkable diversity of approaches to organizing pitch relationships across different musical cultures. The Rāga system of Indian classical music, with its emphasis on melodic rules and emotional associations; the Maqām system of Arab music, with its sophisticated use of microtonal intervals; and the Pentatonic system of Chinese music, with its philosophical and cosmological foundations, each represent sophisticated solutions to the fundamental challenge of creating meaningful musical structures.</p>

<p>Understanding these systems is essential for comprehensive musical analysis, as they provide the theoretical foundation for melodic construction, improvisation, and compositional practice in their respective traditions. The comparative study of these scalar systems enhances our appreciation of both the universal principles of musical organization and the culture-specific innovations that have enriched the global musical heritage.</p>

<p>For students engaged in Areas of Study 5 and 6, mastery of these concepts provides the analytical tools necessary for understanding and appreciating the sophisticated musical traditions of India, the Arab world, and China, while also developing a broader perspective on the possibilities of musical expression beyond the Western tonal system.</p>
</section>
</section></div>` }} />
      </div>

      {/* Back to Theory Index */}
      <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
        <Link
          to="/theory"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg transition-colors"
        >
          ← Back to Theory Index
        </Link>
      </div>
    </article>
  );
};

export default Ch16GlobalscalesandmodesPage;
