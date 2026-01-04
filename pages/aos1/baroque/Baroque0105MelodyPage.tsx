import React from 'react';
import { Link } from 'react-router-dom';

const Baroque0105MelodyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/baroque" className="hover:text-sky-600 dark:hover:text-sky-400">Baroque Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Melody</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Melody
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
        <div dangerouslySetInnerHTML={{ __html: `Introduction 
<section>
<h2>Definition</h2>
<p>Melody refers to the main tune or linear sequence of pitches that forms the musical identity. Baroque melody is diverse, ranging from memorable, defined themes to decorative, technical passagework.</p>
</section>
 Melodic Movement 
<section>
<h2>Melodic Movement in Baroque Music</h2>
<h3>Types of Melodic Motion</h3>
<p>Melodies typically move in two primary ways:</p>
<ul>
<li><strong>Stepwise Movement (Conjunct/Scalic)</strong> - Moving by adjacent pitches in the scale</li>
<li><strong>Controlled Leaps</strong> - Jumping between pitches, often by intervals of a third</li>
</ul>
<p>Ritornello themes often utilize leaps of a third, creating memorable and distinctive melodic profiles.</p>
</section>
 Ornamentation 
<section>
<h2>Ornamentation - A Key Baroque Feature</h2>
<h3>Purpose and Function</h3>
<p>Ornamentation is a key Baroque feature where composers incorporated or performers added embellishments for expressive effect. Vivaldi famously uses ornamentation to suggest birdsong in his programmatic works.</p>
<h3>Types of Ornaments</h3>
<ul>
<li><strong>Trills</strong> - Rapid alternation between two adjacent pitches</li>
<li><strong>Mordents</strong> - Quick alternation with the note above or below</li>
<li><strong>Acciaccatura</strong> - Grace note that "crushes" into the main note</li>
<li><strong>Appoggiatura</strong> - Leaning note that resolves downward</li>
<li><strong>Turn</strong> - Ornamental figure that circles around the main note</li>
</ul>
</section>
 Contrast of Texture 
<section>
<h2>Contrast of Texture in Melodic Writing</h2>
<p>Melody differs significantly between formal sections, creating structural contrast:</p>
<h3>Ritornello Themes</h3>
<ul>
<li>Often "memorable" and thematic</li>
<li>Clearly defined melodic character</li>
<li>Designed to return throughout the movement</li>
<li>Usually played by the full ensemble (tutti)</li>
</ul>
<h3>Episodes</h3>
<ul>
<li>Often highly technical and virtuosic</li>
<li>Feature fast passages, scales, and arpeggios (broken chords)</li>
<li>Especially prominent in solo concerto movements</li>
<li>Designed to showcase virtuosity of the soloist</li>
<li>Vivaldi's solo violin part is highly virtuosic and generally at a higher pitch</li>
</ul>
</section>
 Technical Elements 
<section>
<h2>Technical Melodic Elements</h2>
<h3>Scales and Arpeggios</h3>
<p>Episodes frequently feature:</p>
<ul>
<li><strong>Scales</strong> - Stepwise passages that demonstrate technical facility</li>
<li><strong>Arpeggios (Broken Chords)</strong> - Chord tones played in succession rather than simultaneously</li>
<li>These elements showcase the performer's virtuosity and technical skill</li>
</ul>
<h3>Pitch Relationships</h3>
<p>Solo parts, particularly in concertos, are often written at higher pitches to ensure they project above the orchestral accompaniment.</p>
</section>
 Focus Work Examples 
<section>
<h2>Focus Work Examples</h2>
<h3>Vivaldi: Spring (from The Four Seasons)</h3>
<ul>
<li>Solo violin part demonstrates high virtuosity</li>
<li>Extensive use of ornamentation to depict birdsong</li>
<li>Melodic writing generally at higher pitch for projection</li>
<li>Contrasts between memorable ritornello themes and technical episodes</li>
</ul>
<h3>Handel: Concerto Grosso in D major Op. 6, No. 5</h3>
<ul>
<li>Demonstrates contrast between concertino and ripieno melodic writing</li>
<li>Features both lyrical and technical melodic passages</li>
<li>Shows typical Baroque melodic ornamentation</li>
</ul>
</section>
 Essential Terminology 
<section>
<h2>Essential Terminology</h2>
<p>Students must recognize and understand these melodic terms:</p>
<ul>
<li><strong>Scalic</strong> - Moving by step through scale degrees</li>
<li><strong>Broken Chord</strong> - Chord tones played successively rather than simultaneously</li>
<li><strong>Arpeggio</strong> - Specific type of broken chord pattern</li>
<li><strong>Ornaments</strong> - Decorative embellishments added to the basic melody</li>
<li><strong>Trill</strong> - Rapid alternation between two adjacent notes</li>
<li><strong>Mordent</strong> - Quick ornamental figure</li>
<li><strong>Acciaccatura</strong> - Crushed grace note</li>
<li><strong>Appoggiatura</strong> - Leaning note that resolves</li>
<li><strong>Turn</strong> - Ornamental figure circling the main note</li>
</ul>
</section>
 Assessment Focus 
<section>
<h2>Assessment Focus</h2>
<p>For IGCSE examination purposes, students should be able to:</p>
<ul>
<li>Identify different types of melodic movement (stepwise vs. leaps)</li>
<li>Recognize and name various ornaments and embellishments</li>
<li>Distinguish between thematic and virtuosic melodic writing</li>
<li>Understand the contrast between ritornello and episode melodies</li>
<li>Analyze how melody contributes to the overall structure</li>
<li>Identify technical elements like scales and arpeggios</li>
<li>Connect melodic characteristics to specific focus work examples</li>
</ul>
<p><strong>Important Note:</strong> Candidates must concentrate their analytical responses on the musical features actually heard in the recorded extracts, rather than generalizing based solely on knowledge of the Baroque period.</p>
</section>` }} />
      </div>
    </article>
  );
};

export default Baroque0105MelodyPage;
