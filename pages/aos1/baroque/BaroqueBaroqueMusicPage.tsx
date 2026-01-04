import React from 'react';
import { Link } from 'react-router-dom';

const BaroqueBaroqueMusicPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/baroque" className="hover:text-sky-600 dark:hover:text-sky-400">Baroque Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Baroque Music</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Baroque Music
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
        <div dangerouslySetInnerHTML={{ __html: `<section className="content-section" id="introduction">
                <h2>Introduction</h2>
                <p>In this unit, you will be looking at instrumental music written between approximately 1600 and 1750,
                    a period known for highly ornamented music and polyphonic textures. The Baroque era represents a
                    fundamental shift in musical composition and performance practice, establishing many of the
                    structural and stylistic foundations that would influence Western classical music for centuries to
                    come.</p>
            </section>
            <section className="content-section" id="focus-genres">
                <h2>Focus Genres</h2>
                <p>You will concentrate on two primary instrumental forms that defined the Baroque concerto tradition:
                </p>
                <div className="grid">
                    <div className="card">
                        <div className="card-content">
                            <h3>Solo Concerto</h3>
                            <p>A work for a single soloist and orchestra, showcasing the virtuosic capabilities of an
                                individual performer against the backdrop of the full ensemble.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <h3>Concerto Grosso</h3>
                            <p>A work for a small group of soloists (the <em>concertino</em>) contrasted against a
                                larger orchestra (the <em>tutti</em> or <em>ripieno</em>), creating dynamic interplay
                                between different musical forces.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content-section" id="core-concepts">
                <h2>Core Concepts</h2>
                <h3>The Doctrine of Affections</h3>
                <p>You must understand the Baroque concept of <strong>'affection'</strong>, where the composer sought to
                    sustain a single musical mood or feeling throughout an entire movement. This philosophical approach
                    to composition meant that each movement was designed to evoke and maintain a specific emotional
                    state, whether joy, melancholy, anger, or serenity.</p>
            </section>
            <section className="content-section" id="key-features">
                <h2>Key Features to Master</h2>
                <h3>Basso Continuo</h3>
                <p>The defining feature of Baroque music, consisting of a bass line (typically played by cello, bassoon,
                    or viola da gamba) and a chord-playing instrument (such as harpsichord or organ) improvising harmony
                    from a <strong>figured bass</strong>. This continuous bass foundation provided both harmonic support
                    and rhythmic drive throughout the composition.</p>
                <h3>Ritornello Form</h3>
                <p>The structural principle often used in concertos, where sections played by the full orchestra
                    (<em>ritornello</em>) alternate with contrasting sections featuring the soloist or soloists
                    (<em>episodes</em>). This creates a dialogue between the collective and individual musical voices.
                </p>
                <h3>Texture</h3>
                <p>Frequent use of <strong>polyphonic</strong> or <strong>contrapuntal</strong> texture, characterized
                    by multiple independent melodic lines weaving together, often through <strong>imitation</strong>.
                    This complex interweaving of voices creates the rich, dense sound characteristic of Baroque music.
                </p>
                <h3>Dynamics</h3>
                <p>Recognition of <strong>terraced dynamics</strong>—sudden, block-like changes from loud to soft,
                    rather than gradual <em>crescendos</em> or <em>diminuendos</em>. This reflects the mechanical
                    limitations and aesthetic preferences of Baroque instruments and performance practice.</p>
                <h3>Instrumentation</h3>
                <p>Baroque orchestras were typically centered around the string section and continuo, sometimes
                    augmented by a few wind instruments such as flutes, oboes, and trumpets. The relatively small size
                    of these ensembles allowed for greater clarity of individual parts and more intimate musical
                    expression.</p>
            </section>
            <section className="content-section" id="focus-works">
                <h2>Focus Works for Learning</h2>
                <p>Your study will be based on analysis of these representative works:</p>
                <ul>
                    <li><strong>Antonio Vivaldi:</strong> <em>Spring</em> from <em>The Four Seasons</em>, movement 1
                        (Allegro)</li>
                    <li><strong>George Frideric Handel:</strong> <em>Concerto Grosso in D major Op. 6, No. 5</em></li>
                </ul>
                <div>
                    <p><strong>Important Note:</strong> These specific works will <em>not</em>
                        appear in your examination, but you will apply the musical features and analytical skills they
                        teach you to new, unseen music in the listening paper.</p>
                </div>
            </section>
            <section className="content-section" id="historical-context">
                <h2>Historical Context</h2>
                <p>The Baroque period (c. 1600–1750) was an era of dramatic artistic expression, coinciding with the
                    rise of absolute monarchy, the Counter-Reformation, and significant developments in science and
                    philosophy. Music served both sacred and secular functions, with composers often employed by courts,
                    churches, or wealthy patrons. The period saw the development of opera, the standardization of
                    major-minor tonality, and the establishment of many instrumental forms that would influence
                    classical music for generations.</p>
            </section>` }} />
      </div>
    </article>
  );
};

export default BaroqueBaroqueMusicPage;
