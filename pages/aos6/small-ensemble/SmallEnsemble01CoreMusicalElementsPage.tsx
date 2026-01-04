import React from 'react';
import { Link } from 'react-router-dom';

const SmallEnsemble01CoreMusicalElementsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/small-ensemble" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Small Ensemble</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Core Musical Elements</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Core Musical Elements
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 6 • Music for Small Ensemble
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
        <div dangerouslySetInnerHTML={{ __html: `<div className="content-container">
<!-- Page Header -->
<section id="page-header">
<h1>Core Musical Elements in Music for Small Ensemble</h1>
<h2>Area of Study 6: Music for Small Ensemble</h2>
<p className="aos-description">
                    Area of Study 6 explores non-Western classical traditions through three distinct small ensemble traditions: 
                    Chinese Silk and Bamboo ensembles, Hindustani Classical Music from India, and Arab Takht ensembles. 
                    These traditions require specialized listening skills and understanding of unique concepts of melody, rhythm, 
                    texture, and instrumental timbre that differ significantly from Western classical music.
                </p>
</section>
<!-- Introduction -->
<section id="introduction">
<h3>Understanding Music for Small Ensemble</h3>
<p>
                    Music for Small Ensemble in this context refers to traditional chamber music from three major non-Western 
                    classical traditions. Each tradition has developed sophisticated musical systems over centuries, with complex 
                    modal frameworks, rhythmic cycles, and performance practices that reflect deep cultural and philosophical meanings.
                </p>
<div className="tradition-overview">
<div className="tradition-card">
<h4>Silk and Bamboo (Sizhu) - China</h4>
<p>Intimate chamber music featuring instruments made from silk (strings) and bamboo (winds), 
                        characterized by heterophonic texture and pentatonic melodies.</p>
</div>
<div className="tradition-card">
<h4>Hindustani Classical - India</h4>
<p>North Indian classical music built on raga (melodic modes) and tala (rhythmic cycles), 
                        featuring improvisation within strict traditional frameworks.</p>
</div>
<div className="tradition-card">
<h4>Arab Takht - Middle East</h4>
<p>Traditional Arab ensemble music based on maqam (modal systems) with quarter-tone intervals, 
                        emphasizing melodic improvisation and rhythmic modes (iqa'at).</p>
</div>
</div>
</section>
<!-- Core Musical Elements Overview -->
<section id="elements-overview">
<h3>The Ten Core Musical Elements</h3>
<p>
                    Each musical element takes on unique characteristics and meanings within these non-Western traditions, 
                    often contrasting significantly with Western classical approaches.
                </p>
<div className="elements-grid">
<a className="element-card" href="aos06-01-01-dynamics.html">
<h4>1. Dynamics</h4>
<p><strong>Definition:</strong> Volume levels and expressive changes throughout a piece</p>
<p><strong>Key Features:</strong> Subtle dynamic changes through instrumental density and rhythmic intensity, 
                        gradual crescendos in improvisatory sections, contrasts highlighting heterophonic moments</p>
<p><strong>Focus:</strong> Expressive range from pianissimo to fortissimo, crescendo and diminuendo in structural development</p>
</a>
<a className="element-card" href="aos06-01-02-rhythm.html">
<h4>2. Rhythm</h4>
<p><strong>Definition:</strong> Pattern of beats, accents, and durations with complex cyclical meanings</p>
<p><strong>Key Features:</strong> Tala (Indian rhythmic cycles), Iqa'at (Arabic rhythmic modes), 
                        complex polyrhythms and cross-rhythms, vocalised rhythm patterns</p>
<p><strong>Focus:</strong> Rhythmic cycles and modes, syncopation, polyrhythm, triplets and dotted rhythms</p>
</a>
<a className="element-card" href="aos06-01-03-metre.html">
<h4>3. Metre</h4>
<p><strong>Definition:</strong> Underlying pulse and time organization, often contrasting measured and unmeasured music</p>
<p><strong>Key Features:</strong> Metrical contrast between fixed compositions and free improvisation, 
                        banyan structure in Chinese music, irregular metre in improvisatory sections</p>
<p><strong>Focus:</strong> Simple and compound time, duple and quadruple metre, unmetred sections</p>
</a>
<a className="element-card" href="aos06-01-04-tempo.html">
<h4>4. Tempo</h4>
<p><strong>Definition:</strong> Speed of performance, directing listeners through narrative or emotional phases</p>
<p><strong>Key Features:</strong> Structural tempo progression in Hindustani music (alap to jhala), 
                        flexible rubato in improvisatory sections, BPM measurement alongside traditional terms</p>
<p><strong>Focus:</strong> Tempo progression, rubato, Italian terms (allegro, andante, adagio), BPM</p>
</a>
<a className="element-card" href="aos06-01-05-melody.html">
<h4>5. Melody</h4>
<p><strong>Definition:</strong> Main tune governed by complex modal systems and elaborate ornamentation</p>
<p><strong>Key Features:</strong> Raga (Indian modes), Maqam (Arabic modes with quarter-tones), 
                        pentatonic scales in Chinese music, extensive pitch-bending and ornamentation</p>
<p><strong>Focus:</strong> Modal systems, scalic movement, ornamentation, glissando, vibrato</p>
</a>
<a className="element-card" href="aos06-01-06-harmony.html">
<h4>6. Harmony</h4>
<p><strong>Definition:</strong> Vertical pitch relationships, rejecting Western functional progressions</p>
<p><strong>Key Features:</strong> Drone foundation (tambura), heterophonic harmony, 
                        horizontal alignment rather than vertical chord progressions</p>
<p><strong>Focus:</strong> Drone, heterophony, absence of Western chordal structures</p>
</a>
<a className="element-card" href="aos06-01-07-tonality.html">
<h4>7. Tonality</h4>
<p><strong>Definition:</strong> Key centre or modal system governing pitch relationships and emotional context</p>
<p><strong>Key Features:</strong> Ancient modal systems (raga, maqam), emotional associations, 
                        tonal centers shifting through modal frameworks</p>
<p><strong>Focus:</strong> Modal identity, scale recognition, tonal center shifts</p>
</a>
<a className="element-card" href="aos06-01-08-texture.html">
<h4>8. Texture</h4>
<p><strong>Definition:</strong> Layering of musical lines, fundamentally different from Western textures</p>
<p><strong>Key Features:</strong> Heterophony (variants of same melody), layered texture in Hindustani music, 
                        monophonic improvisation, drone accompaniment</p>
<p><strong>Focus:</strong> Heterophony, monophonic sections, layered texture, call and response</p>
</a>
<a className="element-card" href="aos06-01-09-timbre.html">
<h4>9. Timbre</h4>
<p><strong>Definition:</strong> Unique sound quality derived from specific cultural instruments and techniques</p>
<p><strong>Key Features:</strong> Silk and bamboo instruments (erhu, pipa, dizi), 
                        Hindustani instruments (sitar, tabla, sarangi), Arab instruments (ud, qanun, nay)</p>
<p><strong>Focus:</strong> Cultural instrument timbres, specialized playing techniques, pitch-bending</p>
</a>
<a className="element-card" href="aos06-01-10-structure-form.html">
<h4>10. Structure/Form</h4>
<p><strong>Definition:</strong> Overall organization highly formalized in classical traditions</p>
<p><strong>Key Features:</strong> Hindustani progression (alap-jor-gat-jhala), Arabic suite forms, 
                        Chinese qupai structures, improvisatory and composed sections</p>
<p><strong>Focus:</strong> Traditional structural progressions, suite forms, metrical expansion</p>
</a>
</div>
</section>
<!-- Musical Traditions -->
<section id="musical-traditions">
<h3>The Three Musical Traditions</h3>
<div className="tradition-detailed">
<h4>Silk and Bamboo (Sizhu) Ensembles - China</h4>
<div className="tradition-content">
<p>
                            Chinese Silk and Bamboo music represents an intimate chamber music tradition where instruments 
                            are categorized by their construction materials. This tradition emphasizes subtle expression, 
                            heterophonic texture, and pentatonic melodies.
                        </p>
<h5>Key Characteristics:</h5>
<ul>
<li><strong>Instrumentation:</strong> Silk instruments (erhu, pipa, yangqin) and bamboo instruments (dizi, sheng)</li>
<li><strong>Texture:</strong> Heterophonic - multiple instruments playing variants of the same melody</li>
<li><strong>Scale System:</strong> Predominantly pentatonic (five-note scales)</li>
<li><strong>Structure:</strong> Based on qupai (pre-existing labeled melodies) with metrical expansion</li>
<li><strong>Performance Style:</strong> Intimate, refined, with subtle dynamic contrasts</li>
</ul>
</div>
</div>
<div className="tradition-detailed">
<h4>Hindustani Classical Music - India</h4>
<div className="tradition-content">
<p>
                            North Indian classical music built on sophisticated systems of raga (melodic modes) and tala 
                            (rhythmic cycles). This tradition balances strict theoretical frameworks with extensive improvisation, 
                            creating music of great depth and complexity.
                        </p>
<h5>Key Characteristics:</h5>
<ul>
<li><strong>Instrumentation:</strong> Sitar, sarangi, tabla, tambura, sarod</li>
<li><strong>Modal System:</strong> Raga - scales of five or more notes conveying specific moods</li>
<li><strong>Rhythmic System:</strong> Tala - fixed time cycles with beats (matras) and divisions (vibhags)</li>
<li><strong>Structure:</strong> Alap (free improvisation) → Jor → Gat (composed) → Jhala (fast)</li>
<li><strong>Texture:</strong> Layered - drone, melodic improvisation, rhythmic accompaniment</li>
</ul>
</div>
</div>
<div className="tradition-detailed">
<h4>Arab Takht Ensembles - Middle East</h4>
<div className="tradition-content">
<p>
                            Traditional Arab ensemble music based on the maqam system, which incorporates quarter-tone intervals 
                            creating a 24-note octave. This tradition emphasizes melodic improvisation and sophisticated 
                            rhythmic modes.
                        </p>
<h5>Key Characteristics:</h5>
<ul>
<li><strong>Instrumentation:</strong> Ud (lute), qanun (zither), nay (reed flute), riqq (tambourine)</li>
<li><strong>Modal System:</strong> Maqam - melodic modes with quarter-tone intervals</li>
<li><strong>Rhythmic System:</strong> Iqa'at - rhythmic modes with vocalised patterns (dumm, takk)</li>
<li><strong>Structure:</strong> Suite forms with taqsim (improvisation) and layali sections</li>
<li><strong>Improvisation:</strong> Extensive melodic improvisation within modal frameworks</li>
</ul>
</div>
</div>
</section>
<!-- Key Concepts -->
<section id="key-concepts">
<h3>Key Concepts for Understanding Small Ensemble Music</h3>
<div className="concepts-grid">
<div className="concept-card">
<h4>Modal Systems</h4>
<p>Unlike Western major/minor tonality, these traditions use complex modal systems (raga, maqam) 
                        that carry specific emotional and spiritual associations, governing both melody and improvisation.</p>
</div>
<div className="concept-card">
<h4>Improvisation Within Structure</h4>
<p>All three traditions balance strict theoretical frameworks with extensive improvisation, 
                        creating music that is both traditional and spontaneous.</p>
</div>
<div className="concept-card">
<h4>Heterophonic Texture</h4>
<p>Multiple performers playing simultaneous variants of the same melody, creating 
                        rich, complex textures that differ fundamentally from Western polyphony.</p>
</div>
<div className="concept-card">
<h4>Rhythmic Cycles</h4>
<p>Complex rhythmic systems (tala, iqa'at) that provide structural frameworks for improvisation 
                        and composition, often involving intricate cross-rhythms and polyrhythmic patterns.</p>
</div>
<div className="concept-card">
<h4>Microtonal Intervals</h4>
<p>Use of intervals smaller than semitones, particularly quarter-tones in Arabic music, 
                        creating melodic possibilities unavailable in Western equal temperament.</p>
</div>
<div className="concept-card">
<h4>Drone Foundation</h4>
<p>Sustained tones (usually tonic and dominant) that provide harmonic foundation, 
                        particularly important in Indian music through the tambura.</p>
</div>
</div>
</section>
<!-- Assessment Focus -->
<section id="assessment-focus">
<h3>Assessment Focus</h3>
<div className="assessment-content">
<h4>What Candidates Need to Know</h4>
<ul>
<li>Distinctive characteristics of Silk and Bamboo, Hindustani Classical, and Arab Takht traditions</li>
<li>Key instruments and their timbral qualities in each tradition</li>
<li>Modal systems: raga, maqam, and pentatonic scales</li>
<li>Rhythmic systems: tala, iqa'at, and their structural functions</li>
<li>Textural concepts: heterophony, monophony, and layered textures</li>
<li>Improvisatory practices within traditional frameworks</li>
<li>Structural forms and their cultural significance</li>
<li>Specialized techniques: pitch-bending, ornamentation, quarter-tones</li>
<li>Performance contexts and cultural meanings</li>
</ul>
<h4>What Candidates Are Not Expected to Identify</h4>
<ul>
<li>Specific raga or maqam names beyond basic examples</li>
<li>Complex theoretical aspects of modal construction</li>
<li>Historical development of these traditions</li>
<li>Regional variations within each tradition</li>
<li>Advanced improvisation techniques</li>
<li>Detailed instrument construction methods</li>
<li>Philosophical or spiritual aspects beyond musical characteristics</li>
</ul>
</div>
</section>
<!-- Navigation to Individual Elements -->
<section id="elements-navigation">
<h3>Explore Individual Musical Elements</h3>
<div className="navigation-grid">
<a className="nav-card" href="aos06-01-01-dynamics.html">
<h4>Dynamics</h4>
<p>Volume levels and expressive changes</p>
</a>
<a className="nav-card" href="aos06-01-02-rhythm.html">
<h4>Rhythm</h4>
<p>Beat patterns and cyclical structures</p>
</a>
<a className="nav-card" href="aos06-01-03-metre.html">
<h4>Metre</h4>
<p>Time organization and pulse</p>
</a>
<a className="nav-card" href="aos06-01-04-tempo.html">
<h4>Tempo</h4>
<p>Speed and pacing in performance</p>
</a>
<a className="nav-card" href="aos06-01-05-melody.html">
<h4>Melody</h4>
<p>Modal systems and ornamentation</p>
</a>
<a className="nav-card" href="aos06-01-06-harmony.html">
<h4>Harmony</h4>
<p>Drone and heterophonic relationships</p>
</a>
<a className="nav-card" href="aos06-01-07-tonality.html">
<h4>Tonality</h4>
<p>Modal frameworks and tonal centers</p>
</a>
<a className="nav-card" href="aos06-01-08-texture.html">
<h4>Texture</h4>
<p>Layering and heterophonic structures</p>
</a>
<a className="nav-card" href="aos06-01-09-timbre.html">
<h4>Timbre</h4>
<p>Cultural instruments and techniques</p>
</a>
<a className="nav-card" href="aos06-01-10-structure-form.html">
<h4>Structure/Form</h4>
<p>Traditional forms and organization</p>
</a>
</div>
</section>
</div>` }} />
      </div>
    </article>
  );
};

export default SmallEnsemble01CoreMusicalElementsPage;
