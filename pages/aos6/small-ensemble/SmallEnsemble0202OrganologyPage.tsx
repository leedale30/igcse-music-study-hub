import React from 'react';
import { Link } from 'react-router-dom';

const SmallEnsemble0202OrganologyPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/small-ensemble" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Small Ensemble</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Organology</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Organology
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
        <div dangerouslySetInnerHTML={{ __html: `<section id="introduction">
<h2>Introduction</h2>
<p>Organology in the context of Music for Small Ensemble focuses on how construction techniques enable unique timbres and microtonal flexibility, essential for the modal systems employed in these traditions. Unlike Western instruments designed primarily for equal temperament, the instruments of Silk and Bamboo, Hindustani, and Arab Takht ensembles are specifically engineered to produce the subtle intervals and expressive capabilities required by their respective musical systems. Understanding the organological principles behind these instruments reveals how form follows function in traditional music cultures, where every aspect of construction serves specific musical and cultural purposes.</p>
</section>
<section id="classification-systems">
<h2>Traditional Classification Systems</h2>
<div className="classification-overview">
<h3>Chinese Classification (Bayin - Eight Sounds)</h3>
<p>The traditional Chinese system classifies instruments by the materials used in their construction:</p>
<ul>
<li><strong>Silk (Si):</strong> String instruments like erhu and pipa</li>
<li><strong>Bamboo (Zhu):</strong> Wind instruments like dizi and sheng</li>
<li><strong>Wood (Mu):</strong> Percussion instruments like ban and bangzi</li>
<li><strong>Stone (Shi):</strong> Stone chimes and bells</li>
<li><strong>Metal (Jin):</strong> Bronze bells and gongs</li>
<li><strong>Clay (Tu):</strong> Ceramic wind instruments</li>
<li><strong>Leather (Ge):</strong> Drums with animal skin heads</li>
<li><strong>Gourd (Pao):</strong> Instruments using gourd resonators</li>
</ul>
<h3>Indian Classification (Vadya)</h3>
<p>The traditional Indian system categorizes instruments by their sound production method:</p>
<ul>
<li><strong>Tata Vadya:</strong> String instruments (sitar, sarod, tambura)</li>
<li><strong>Sushira Vadya:</strong> Wind instruments (bansuri, shehnai)</li>
<li><strong>Avanaddha Vadya:</strong> Membrane instruments (tabla, mridangam)</li>
<li><strong>Ghana Vadya:</strong> Solid instruments (cymbals, bells)</li>
</ul>
<h3>Arab Classification</h3>
<p>Arab musical tradition classifies instruments by their primary function and construction:</p>
<ul>
<li><strong>Watariyya:</strong> String instruments (ud, qanun, violin)</li>
<li><strong>Nafkhiyya:</strong> Wind instruments (nay, mijwiz)</li>
<li><strong>Iqa'iyya:</strong> Rhythmic instruments (riqq, tabla, darbuka)</li>
</ul>
</div>
</section>
<section id="construction-techniques">
<h2>Construction Techniques and Materials</h2>
<h3>String Instrument Construction</h3>
<div className="string-construction">
<h4>Resonating Bodies</h4>
<ul>
<li><strong>Gourd construction (sitar):</strong> Natural gourd provides rich, complex resonance</li>
<li><strong>Wooden bodies (erhu, pipa):</strong> Carefully selected woods for tonal qualities</li>
<li><strong>Composite construction (qanun):</strong> Multiple materials for optimal sound</li>
<li><strong>Size relationships:</strong> Body size determines fundamental pitch and resonance</li>
<li><strong>Sound hole placement:</strong> Strategic positioning affects projection and timbre</li>
<li><strong>Internal bracing:</strong> Structural support that influences vibration patterns</li>
<li><strong>Finish materials:</strong> Surface treatments affecting sound reflection and absorption</li>
<li><strong>Aging processes:</strong> How instruments improve with time and use</li>
</ul>
<h4>String Technology</h4>
<ul>
<li><strong>Silk strings (traditional Chinese):</strong> Warm tone with natural decay</li>
<li><strong>Metal strings (modern adaptations):</strong> Brighter tone with longer sustain</li>
<li><strong>Gut strings (historical):</strong> Complex harmonics and natural feel</li>
<li><strong>Synthetic materials:</strong> Modern alternatives with consistent properties</li>
<li><strong>String winding techniques:</strong> Wrapped strings for lower pitches</li>
<li><strong>Tension relationships:</strong> Balancing string tension for optimal performance</li>
<li><strong>Sympathetic strings:</strong> Resonating strings that enhance harmonic content</li>
<li><strong>String spacing:</strong> Distances affecting playing technique and sound</li>
</ul>
<h4>Fret and Fingerboard Design</h4>
<ul>
<li><strong>Moveable frets (sitar):</strong> Curved metal frets allowing microtonal adjustment</li>
<li><strong>Fretless design (sarod, sarangi):</strong> Smooth surfaces enabling continuous pitch</li>
<li><strong>Fixed frets (pipa):</strong> Precise positioning for specific scales</li>
<li><strong>Fret materials:</strong> Metal, bone, or wood affecting tone and durability</li>
<li><strong>Fret height:</strong> Affecting string action and bending capability</li>
<li><strong>Fingerboard materials:</strong> Wood types and treatments for optimal playability</li>
<li><strong>Scale length:</strong> Distance from nut to bridge affecting tension and intonation</li>
<li><strong>Nut and bridge design:</strong> Critical points affecting string vibration</li>
</ul>
</div>
<h3>Wind Instrument Construction</h3>
<div className="wind-construction">
<h4>Bamboo and Reed Instruments</h4>
<ul>
<li><strong>Bamboo selection:</strong> Specific species and aging for optimal acoustic properties</li>
<li><strong>Bore design:</strong> Internal diameter affecting pitch and timbre</li>
<li><strong>Hole placement:</strong> Mathematical relationships determining scale intervals</li>
<li><strong>Embouchure design:</strong> Mouthpiece construction affecting sound production</li>
<li><strong>Reed construction (sheng):</strong> Free reeds made from metal or bamboo</li>
<li><strong>Membrane application (dizi):</strong> Thin membrane creating characteristic buzzing</li>
<li><strong>Length calculations:</strong> Precise measurements for accurate tuning</li>
<li><strong>Joint construction:</strong> Connections between sections in multi-part instruments</li>
</ul>
<h4>Acoustic Principles</h4>
<ul>
<li><strong>Standing wave patterns:</strong> How air columns create specific pitches</li>
<li><strong>Harmonic series:</strong> Natural overtones produced by wind instruments</li>
<li><strong>Cross-fingering:</strong> Techniques for producing chromatic notes</li>
<li><strong>Breath pressure relationships:</strong> How air pressure affects pitch and timbre</li>
<li><strong>Resonance chambers:</strong> Internal spaces affecting tone quality</li>
<li><strong>Embouchure hole design:</strong> Size and shape affecting response</li>
<li><strong>Wall thickness:</strong> Material thickness affecting vibration and tone</li>
<li><strong>Surface treatments:</strong> Internal finishes affecting air flow and resonance</li>
</ul>
</div>
<h3>Percussion Instrument Construction</h3>
<div className="percussion-construction">
<h4>Membrane Instruments</h4>
<ul>
<li><strong>Drum shell materials:</strong> Wood, metal, and clay affecting resonance</li>
<li><strong>Membrane selection:</strong> Animal skins vs. synthetic heads</li>
<li><strong>Tensioning systems:</strong> Methods for adjusting pitch and timbre</li>
<li><strong>Shell shape:</strong> Cylindrical, conical, and barrel shapes</li>
<li><strong>Bearing edge:</strong> Rim design affecting membrane vibration</li>
<li><strong>Internal modifications:</strong> Snares, rattles, and other sound modifiers</li>
<li><strong>Size relationships:</strong> Diameter and depth affecting pitch and projection</li>
<li><strong>Mounting systems:</strong> How drums are supported and positioned</li>
</ul>
<h4>Idiophone Construction</h4>
<ul>
<li><strong>Wood selection:</strong> Hardwoods for clear, penetrating sounds</li>
<li><strong>Metal alloys:</strong> Bronze and brass for cymbals and bells</li>
<li><strong>Shape and thickness:</strong> Affecting pitch and sustain</li>
<li><strong>Surface treatments:</strong> Polishing and texturing for tonal variation</li>
<li><strong>Mounting methods:</strong> How instruments are held or suspended</li>
<li><strong>Resonating chambers:</strong> Hollow spaces enhancing sound</li>
<li><strong>Strike zones:</strong> Different areas producing different timbres</li>
<li><strong>Damping mechanisms:</strong> Methods for controlling sustain</li>
</ul>
</div>
</section>
<section id="microtonal-capabilities">
<h2>Microtonal Capabilities and Design</h2>
<p>Certain instruments are specifically engineered to produce notes outside the standard Western twelve-tone scale, essential for performing the subtle intervals of traditional modal systems.</p>
<h3>Fretted Instrument Microtones</h3>
<div className="fretted-microtones">
<h4>Moveable Fret Systems</h4>
<ul>
<li><strong>Sitar fret adjustment:</strong> Curved frets can be moved to accommodate different ragas</li>
<li><strong>Fret bending technique:</strong> Pulling strings behind frets to raise pitch</li>
<li><strong>Sympathetic string tuning:</strong> Precise tuning to raga-specific pitches</li>
<li><strong>Meend technique:</strong> Sliding between frets for continuous pitch</li>
<li><strong>Gamaka ornamentation:</strong> Microtonal ornaments essential to raga performance</li>
<li><strong>Fret positioning mathematics:</strong> Calculations for just intonation intervals</li>
<li><strong>Regional tuning variations:</strong> Different schools using different microtonal approaches</li>
<li><strong>Seasonal adjustments:</strong> Fret positions adjusted for temperature and humidity</li>
</ul>
<h4>Lever Systems (Qanun)</h4>
<ul>
<li><strong>Mandal construction:</strong> Tiny levers allowing quarter-tone adjustments</li>
<li><strong>Lever positioning:</strong> Strategic placement for quick maqam changes</li>
<li><strong>String group organization:</strong> Multiple strings per note for lever control</li>
<li><strong>Tuning stability:</strong> Maintaining accurate microtones during performance</li>
<li><strong>Lever technique:</strong> Quick adjustments during performance</li>
<li><strong>Maqam-specific settings:</strong> Pre-set lever positions for different modes</li>
<li><strong>Maintenance requirements:</strong> Keeping levers properly adjusted</li>
<li><strong>Historical development:</strong> Evolution of the lever system over time</li>
</ul>
</div>
<h3>Fretless Instrument Microtones</h3>
<div className="fretless-microtones">
<h4>Continuous Pitch Instruments</h4>
<ul>
<li><strong>Sarod fingerboard:</strong> Smooth metal surface allowing precise intonation</li>
<li><strong>Sarangi technique:</strong> Fingernail pressure creating microtonal inflections</li>
<li><strong>Violin adaptations:</strong> Modified technique for Arab maqam performance</li>
<li><strong>Erhu string bending:</strong> Finger pressure variations for pitch control</li>
<li><strong>Slide techniques:</strong> Glissando effects between pitches</li>
<li><strong>Vibrato variations:</strong> Different vibrato styles for different traditions</li>
<li><strong>Intonation training:</strong> Developing ear for precise microtonal intervals</li>
<li><strong>Cultural pitch standards:</strong> Different traditions emphasizing different intervals</li>
</ul>
<h4>Wind Instrument Microtones</h4>
<ul>
<li><strong>Partial hole covering:</strong> Bansuri and nay techniques for quarter-tones</li>
<li><strong>Embouchure adjustments:</strong> Lip position affecting pitch</li>
<li><strong>Breath pressure control:</strong> Dynamic pitch control through air pressure</li>
<li><strong>Cross-fingering patterns:</strong> Complex fingerings for chromatic and microtonal notes</li>
<li><strong>Slide techniques:</strong> Glissando effects between holes</li>
<li><strong>Multiphonics:</strong> Producing multiple pitches simultaneously</li>
<li><strong>Timbral microtones:</strong> Pitch variations through timbre changes</li>
<li><strong>Regional fingering systems:</strong> Different schools using different techniques</li>
</ul>
</div>
</section>
<section id="historical-development">
<h2>Historical Development and Evolution</h2>
<h3>Ancient Origins and Early Development</h3>
<div className="historical-origins">
<h4>Archaeological Evidence</h4>
<ul>
<li><strong>Ancient Chinese instruments:</strong> Archaeological finds dating back thousands of years</li>
<li><strong>Indus Valley artifacts:</strong> Early evidence of Indian musical instruments</li>
<li><strong>Mesopotamian influences:</strong> Early Middle Eastern instrument development</li>
<li><strong>Trade route influences:</strong> How instruments spread along ancient trade routes</li>
<li><strong>Royal patronage:</strong> Court support for instrument development</li>
<li><strong>Religious contexts:</strong> Instruments developed for spiritual practices</li>
<li><strong>Folk traditions:</strong> Popular instruments influencing classical forms</li>
<li><strong>Regional variations:</strong> How geography influenced instrument design</li>
</ul>
<h4>Theoretical Foundations</h4>
<ul>
<li><strong>Ancient treatises:</strong> Early written descriptions of instruments and techniques</li>
<li><strong>Mathematical principles:</strong> Acoustic theories underlying instrument design</li>
<li><strong>Philosophical connections:</strong> Instruments reflecting cosmological beliefs</li>
<li><strong>Medical theories:</strong> Connections between music and health</li>
<li><strong>Seasonal associations:</strong> Instruments connected to natural cycles</li>
<li><strong>Social hierarchies:</strong> Instruments reflecting class and status</li>
<li><strong>Gender associations:</strong> Instruments designated for specific genders</li>
<li><strong>Educational systems:</strong> How instrument knowledge was transmitted</li>
</ul>
</div>
<h3>Medieval and Classical Periods</h3>
<div className="classical-development">
<h4>Refinement and Standardization</h4>
<ul>
<li><strong>Court music development:</strong> Instruments refined for sophisticated repertoire</li>
<li><strong>Guild systems:</strong> Craftsmen organizations maintaining quality standards</li>
<li><strong>Regional schools:</strong> Different areas developing distinctive approaches</li>
<li><strong>Master craftsmen:</strong> Individual makers achieving legendary status</li>
<li><strong>Technical innovations:</strong> Improvements in construction techniques</li>
<li><strong>Repertoire influence:</strong> Music driving instrument development</li>
<li><strong>Cross-cultural exchange:</strong> Instruments influencing each other across cultures</li>
<li><strong>Documentation efforts:</strong> Written records of construction techniques</li>
</ul>
<h4>Cultural Integration</h4>
<ul>
<li><strong>Religious adoption:</strong> Instruments incorporated into spiritual practices</li>
<li><strong>Secular entertainment:</strong> Instruments for popular entertainment</li>
<li><strong>Educational curricula:</strong> Instruments included in formal education</li>
<li><strong>Literary references:</strong> Instruments featured in poetry and literature</li>
<li><strong>Artistic representations:</strong> Instruments depicted in visual arts</li>
<li><strong>Ceremonial roles:</strong> Instruments for state and religious ceremonies</li>
<li><strong>Therapeutic applications:</strong> Instruments used for healing</li>
<li><strong>Social functions:</strong> Instruments for community gatherings</li>
</ul>
</div>
<h3>Modern Developments and Adaptations</h3>
<div className="modern-evolution">
<h4>Contemporary Modifications</h4>
<ul>
<li><strong>Material innovations:</strong> Modern materials improving durability and sound</li>
<li><strong>Manufacturing techniques:</strong> Machine production alongside handcrafting</li>
<li><strong>Amplification systems:</strong> Electronic pickup systems for traditional instruments</li>
<li><strong>Hybrid instruments:</strong> Combining traditional and modern elements</li>
<li><strong>Ergonomic improvements:</strong> Design changes for player comfort</li>
<li><strong>Standardization efforts:</strong> Attempts to standardize tuning and construction</li>
<li><strong>Educational adaptations:</strong> Instruments modified for teaching purposes</li>
<li><strong>Conservation efforts:</strong> Preserving traditional construction methods</li>
</ul>
<h4>Global Influence and Fusion</h4>
<ul>
<li><strong>World music movement:</strong> Traditional instruments in global contexts</li>
<li><strong>Jazz and popular music:</strong> Traditional instruments in contemporary genres</li>
<li><strong>Classical crossover:</strong> Traditional instruments in Western classical music</li>
<li><strong>Electronic integration:</strong> Traditional instruments with electronic processing</li>
<li><strong>Recording technology:</strong> How recording has influenced instrument development</li>
<li><strong>International festivals:</strong> Global platforms for traditional instruments</li>
<li><strong>Academic study:</strong> Scholarly research into traditional instruments</li>
<li><strong>Cultural preservation:</strong> Efforts to maintain traditional practices</li>
</ul>
</div>
</section>
<section id="transmission-methods">
<h2>Notation and Transmission Methods</h2>
<h3>Oral/Aural Transmission</h3>
<div className="oral-transmission">
<h4>Traditional Learning Systems</h4>
<ul>
<li><strong>Guru-shishya parampara:</strong> Indian master-disciple tradition</li>
<li><strong>Family lineages:</strong> Chinese tradition of passing knowledge through families</li>
<li><strong>Apprenticeship systems:</strong> Arab tradition of learning through extended study</li>
<li><strong>Listening and imitation:</strong> Learning through careful observation</li>
<li><strong>Repetitive practice:</strong> Mastery through extensive repetition</li>
<li><strong>Gradual progression:</strong> Systematic advancement through levels</li>
<li><strong>Personal adaptation:</strong> Individual interpretation within tradition</li>
<li><strong>Cultural immersion:</strong> Learning within cultural context</li>
</ul>
<h4>Memory Techniques</h4>
<ul>
<li><strong>Melodic patterns:</strong> Learning through repeated melodic formulas</li>
<li><strong>Rhythmic mnemonics:</strong> Verbal syllables representing rhythmic patterns</li>
<li><strong>Structural frameworks:</strong> Understanding formal organization</li>
<li><strong>Improvisational rules:</strong> Guidelines for spontaneous creation</li>
<li><strong>Emotional associations:</strong> Connecting music with feelings and moods</li>
<li><strong>Physical memory:</strong> Muscle memory for instrumental techniques</li>
<li><strong>Contextual learning:</strong> Understanding music within cultural situations</li>
<li><strong>Spiritual dimensions:</strong> Connecting music with spiritual practice</li>
</ul>
</div>
<h3>Notation Systems</h3>
<div className="notation-systems">
<h4>Traditional Notation Methods</h4>
<ul>
<li><strong>Cipher notation (China):</strong> Numbers 1-7 representing scale degrees</li>
<li><strong>Sargam notation (India):</strong> Sa Re Ga Ma Pa Dha Ni syllables</li>
<li><strong>Arabic notation:</strong> Letters and symbols for maqam notation</li>
<li><strong>Tablature systems:</strong> Fingering notation for specific instruments</li>
<li><strong>Rhythmic notation:</strong> Symbols representing rhythmic patterns</li>
<li><strong>Ornament notation:</strong> Symbols for specific decorative techniques</li>
<li><strong>Modal indicators:</strong> Notation showing modal characteristics</li>
<li><strong>Structural markers:</strong> Symbols indicating formal sections</li>
</ul>
<h4>Modern Adaptations</h4>
<ul>
<li><strong>Western staff notation:</strong> Adaptation of traditional music to Western notation</li>
<li><strong>Microtonal notation:</strong> Special symbols for quarter-tones and other intervals</li>
<li><strong>Computer notation:</strong> Digital systems for traditional music</li>
<li><strong>Audio recording:</strong> Modern technology preserving traditional performances</li>
<li><strong>Video documentation:</strong> Visual records of playing techniques</li>
<li><strong>Hybrid systems:</strong> Combining traditional and Western notation</li>
<li><strong>Educational materials:</strong> Simplified notation for learning</li>
<li><strong>Scholarly editions:</strong> Academic transcriptions of traditional music</li>
</ul>
</div>
</section>
<section id="acoustic-properties">
<h2>Acoustic Properties and Sound Production</h2>
<h3>Resonance and Timbre</h3>
<div className="acoustic-principles">
<h4>Resonating Systems</h4>
<ul>
<li><strong>Gourd resonators:</strong> Natural acoustic properties of dried gourds</li>
<li><strong>Wooden soundboards:</strong> Grain patterns affecting vibration</li>
<li><strong>Air column resonance:</strong> How wind instruments create pitch</li>
<li><strong>Sympathetic resonance:</strong> Strings vibrating in response to other strings</li>
<li><strong>Membrane vibration:</strong> How drum heads produce sound</li>
<li><strong>Cavity resonance:</strong> Internal air spaces affecting tone</li>
<li><strong>Harmonic reinforcement:</strong> How construction emphasizes certain overtones</li>
<li><strong>Coupling effects:</strong> How different parts of instruments interact</li>
</ul>
<h4>Timbral Characteristics</h4>
<ul>
<li><strong>Harmonic content:</strong> Overtone series in different instruments</li>
<li><strong>Attack characteristics:</strong> How sounds begin and develop</li>
<li><strong>Sustain properties:</strong> How long sounds continue</li>
<li><strong>Decay patterns:</strong> How sounds fade away</li>
<li><strong>Dynamic range:</strong> Soft to loud capabilities</li>
<li><strong>Frequency response:</strong> How instruments respond to different pitches</li>
<li><strong>Directional properties:</strong> How sound projects in space</li>
<li><strong>Environmental sensitivity:</strong> How temperature and humidity affect sound</li>
</ul>
</div>
<h3>Cultural Acoustic Preferences</h3>
<div className="cultural-acoustics">
<h4>Aesthetic Values</h4>
<ul>
<li><strong>Chinese refinement:</strong> Preference for subtle, nuanced timbres</li>
<li><strong>Indian expressiveness:</strong> Emphasis on emotional and spiritual expression</li>
<li><strong>Arab sophistication:</strong> Complex timbral relationships and microtonal precision</li>
<li><strong>Dynamic preferences:</strong> Cultural attitudes toward loud vs. soft playing</li>
<li><strong>Ornament aesthetics:</strong> How different cultures approach decoration</li>
<li><strong>Ensemble balance:</strong> Preferred relationships between instruments</li>
<li><strong>Spatial concepts:</strong> How instruments are positioned and heard</li>
<li><strong>Temporal aesthetics:</strong> Attitudes toward rhythm and timing</li>
</ul>
<h4>Functional Considerations</h4>
<ul>
<li><strong>Ceremonial requirements:</strong> Acoustic needs for religious and state functions</li>
<li><strong>Intimate settings:</strong> Instruments designed for small spaces</li>
<li><strong>Outdoor performance:</strong> Projection needs for open-air events</li>
<li><strong>Accompaniment roles:</strong> Acoustic balance with vocal music</li>
<li><strong>Solo capabilities:</strong> Instruments designed for unaccompanied performance</li>
<li><strong>Ensemble integration:</strong> How instruments blend with others</li>
<li><strong>Pedagogical functions:</strong> Acoustic properties suitable for teaching</li>
<li><strong>Therapeutic applications:</strong> Sound qualities for healing and meditation</li>
</ul>
</div>
</section>
<section id="assessment-points">
<h2>Key Assessment Points</h2>
<h3>Students should be able to:</h3>
<ul>
<li>Understand traditional classification systems for instruments in each culture</li>
<li>Recognize how construction techniques enable specific musical capabilities</li>
<li>Appreciate the relationship between materials and sound production</li>
<li>Understand microtonal capabilities and their cultural importance</li>
<li>Recognize historical development patterns in instrument evolution</li>
<li>Understand traditional transmission methods and their cultural significance</li>
<li>Appreciate acoustic principles underlying instrument design</li>
<li>Compare construction approaches across different traditions</li>
<li>Understand how cultural values influence instrument design</li>
<li>Recognize the balance between tradition and innovation in instrument development</li>
</ul>
</section>
<section id="navigation-footer">
<h2>Continue Your Study</h2>
<div className="nav-grid">
<a className="nav-card" href="aos06-02-01-instrumentation.html">
<h3>← Previous: 6.1 Instrumentation</h3>
<p>Review ensemble instruments and their roles</p>
</a>
<a className="nav-card" href="aos06-02-03-vocal-techniques.html">
<h3>Next: 6.3 Vocal Techniques →</h3>
<p>Explore vocal approaches in traditional ensembles</p>
</a>
</div>
</section>` }} />
      </div>
    </article>
  );
};

export default SmallEnsemble0202OrganologyPage;
