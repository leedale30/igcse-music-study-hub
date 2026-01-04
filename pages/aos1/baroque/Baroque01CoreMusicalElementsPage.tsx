import React from 'react';
import { Link } from 'react-router-dom';

const Baroque01CoreMusicalElementsPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/baroque" className="hover:text-sky-600 dark:hover:text-sky-400">Baroque Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Core Musical Elements</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Core Musical Elements
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
        <div dangerouslySetInnerHTML={{ __html: `Introduction Section 
<section className="intro-section" id="introduction">

<p>The content below synthesizes the structural and stylistic expectations derived from the syllabus, focusing on the defining characteristics demonstrated in the prescribed Focus Works (Vivaldi: <em>Spring</em> and Handel: <em>Concerto Grosso in D major Op. 6, No. 5</em>).</p>
</section>
 Overview Section 
<section className="overview-section" id="overview">
<h2>Overview: Core Musical Elements in Area of Study 1: Baroque Music</h2>
<p>The study of Baroque Music (c. 1600–1750) emphasizes order, ornamentation, and clear structural function. Candidates are expected to apply knowledge of these core elements when analyzing unseen extracts related to the period in the examination.</p>
<p>The Baroque period is foundational, marking a shift in Western music characterized by the widespread use of the major-minor key system and the increased importance of instrumental music, specifically the <strong>solo concerto</strong> and <strong>concerto grosso</strong>. Mastering the following ten analytical elements is essential for success in Component 1 (Listening Examination) on related works.</p>
</section>
 Elements Summary Section 
<section className="elements-summary" id="elements-summary">
<h2>The Ten Core Musical Elements</h2>
<div className="element-summary" id="element-1">
<h3><a href="aos01-01-01-dynamics/aos01-01-01-dynamics.html">1. Dynamics: The volume levels and expressive changes throughout a piece</a></h3>
<p>The Baroque period is famously characterized by the use of <strong>terraced dynamics</strong> - sudden, abrupt changes from loud (<em>forte</em>) to quiet (<em>piano</em>) or vice versa. This practice stemmed from the nature of instruments used and performance traditions of the era.</p>
</div>
<div className="element-summary" id="element-2">
<h3><a href="aos01-01-02-rhythm/aos01-01-02-rhythm.html">2. Rhythm: The pattern of beats, accents, and durations that drive the music forward</a></h3>
<p>Baroque rhythm is characterized by continuous energy, extensive use of specific patterns, and a wide range of note values. Key features include syncopation, dotted rhythms, and the rhythmic device known as hemiola.</p>
</div>
<div className="element-summary" id="element-3">
<h3><a href="aos01-01-03-metre/aos01-01-03-metre.html">3. Metre: The underlying pulse and time signature that organises rhythmic patterns</a></h3>
<p>Metre in the Baroque era is typically regular and fundamentally dictates the organization of rhythm within a movement. Standard metres include duple, triple, and quadruple time signatures.</p>
</div>
<div className="element-summary" id="element-4">
<h3><a href="aos01-01-04-tempo/aos01-01-04-tempo.html">4. Tempo: The speed at which the music is performed, often affecting mood and style</a></h3>
<p>Tempo selection in the Baroque period was vital, often dictated by the chosen form or dance, and governed by Italian terminology. Composers adhered to the doctrine of "affection" - maintaining a single emotional mood throughout a movement.</p>
</div>
<div className="element-summary" id="element-5">
<h3><a href="aos01-01-05-melody/aos01-01-05-melody.html">5. Melody: The main tune or linear sequence of pitches that forms the musical identity</a></h3>
<p>Baroque melody is diverse, ranging from memorable, defined themes to decorative, technical passagework. Ornamentation is a key Baroque feature, with composers incorporating embellishments such as trills and mordents.</p>
</div>
<div className="element-summary" id="element-6">
<h3><a href="aos01-01-06-harmony/aos01-01-06-harmony.html">6. Harmony: The vertical stacking of pitches that supports or contrasts the melody</a></h3>
<p>Baroque harmony is systematic and functional, relying on established conventions to drive the music forward and define key relationships. It is generally diatonic and functional, with heavy reliance on primary chords.</p>
</div>
<div className="element-summary" id="element-7">
<h3><a href="aos01-01-07-tonality/aos01-01-07-tonality.html">7. Tonality: The key centre or modal system that governs pitch relationships</a></h3>
<p>The Baroque era cemented the use of the major-minor key system. Music is organized clearly around a major or minor key center, with modulations predominantly occurring to closely related keys.</p>
</div>
<div className="element-summary" id="element-8">
<h3><a href="aos01-01-08-texture/aos01-01-08-texture.html">8. Texture: The layering of musical lines—monophonic, polyphonic, homophonic, etc.</a></h3>
<p>Baroque texture is highly varied and dynamic, characterized by the interplay of multiple independent parts. It ranges from polyphonic/contrapuntal textures to homophonic melody and accompaniment styles.</p>
</div>
<div className="element-summary" id="element-9">
<h3><a href="aos01-01-09-timbre/aos01-01-09-timbre.html">9. Timbre: The unique sound quality or colour of voices and instruments</a></h3>
<p>The Baroque orchestra achieved its characteristic timbre through a core group of instruments, centrally featuring strings and the continuo. The basso continuo is an indispensable feature of the period.</p>
</div>
<div className="element-summary" id="element-10">
<h3><a href="aos01-01-10-structure-form/aos01-01-10-structure-form.html">10. Structure/Form: The overall shape and organisation of musical sections</a></h3>
<p>Baroque structure is defined by the proliferation of new instrumental forms. The ritornello form is the defining structural principle of the concerto, based on alternation between orchestral themes and solo episodes.</p>
</div>
</section>
 Assessment Note Section 
<section className="assessment-section" id="assessment-note">
<h2>Note on Assessment</h2>
<p><strong>Important:</strong> Candidates must concentrate their analytical responses on the musical features <em>actually heard</em> in the recorded extracts, rather than generalizing based solely on the knowledge of the Baroque period. The function of studying these elements within the Focus Works is to enable candidates to apply this deep understanding to unseen extracts in the examination.</p>
</section>` }} />
      </div>
    </article>
  );
};

export default Baroque01CoreMusicalElementsPage;
