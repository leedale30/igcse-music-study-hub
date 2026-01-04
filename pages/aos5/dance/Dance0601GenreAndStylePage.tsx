import React from 'react';
import { Link } from 'react-router-dom';

const Dance0601GenreAndStylePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/dance" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Dance</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Genre And Style</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Genre And Style
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 5 • Music for Dance
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>6.1. Genre and Style: Classification and stylistic traits—baroque, reggae, gamelan, trap, etc.</h3>
<h4>Classification and Repertoire</h4>
<p>AOS 5 focuses on music explicitly written for dance, spanning both traditional and contemporary styles.</p>
<p>1.  <strong>Tango:</strong> An urban genre originating in Buenos Aires (late 1800s), considered the representative music and dance form of Argentina.</p>
<p>2.  <strong>Salsa:</strong> Dance music emerging in East Harlem, New York City, drawing heavily on Afro-Cuban and Latin American elements.</p>
<p>3.  <strong>EDM:</strong> A global genre defined by electronic instruments and repetitive rhythms, originating in clubs in the late 1970s and early 1980s.</p>
<h4>Stylistic Traits (Identifying Features)</h4>
<p>Candidates must accurately identify characteristics specific to each genre using appropriate musical terminology:</p>
<ul>
<li> <strong>Rhythm and Metre:</strong></li>
<li> <strong>Tango:</strong> Typically employs duple metre (2/4 or 4/4) and features defining <em>syncopated rhythms</em> (sincopa). Phrases often begin with an <em>anacrusis</em> (upbeat).</li>
<li> <strong>Salsa:</strong> Characterized by relentless <em>rhythmic drive</em>. The interlocking <em>polyrhythm</em> is structured by the two-bar rhythmic <em>ostinato</em> played by the <em>clavé</em>, known as the <em>son clavé</em> (forward/reverse clave). The bass often uses a distinctive <em>anticipated bass pattern</em>, emphasizing off-beats.</li>
<li> <strong>EDM:</strong> Defined by a steady <em>four-to-the-floor</em> rhythm, where the kick drum hits on every beat in 4/4 time. <em>Offbeat rhythms</em> and <em>syncopated percussion</em> (shakers, hi-hats) are added to build texture.</li>
</ul>
<ul>
<li> <strong>Instrumentation and Medium:</strong></li>
<li> <strong>Tango:</strong> The distinctive instrument is the <em>bandoneon</em> (an accordion-like instrument with buttons). Ensembles may be instrumental or vocal, often including strings, piano, and double bass (<em>orquesta tipica</em>).</li>
<li> <strong>Salsa:</strong> Features <em>cuatro</em> (Puerto Rican lute-like instrument) and <em>clavés</em> (hardwood sticks). Ensembles are often large (10–14+ members) incorporating vocals, Afro-Cuban percussion (congas, timbales), piano, bass, and prominent <em>brass instruments</em> (trumpets, trombones).</li>
<li> <strong>EDM:</strong> Primarily relies on <em>Music Technology</em>. Key equipment includes <em>synthesizers</em> (e.g., Moog) to generate sounds, <em>drum machines</em> (e.g., Roland TR808) for rhythmic patterns, and <em>Digital Audio Workstations (DAWs)</em> for composition and mixing.</li>
</ul>
<ul>
<li> <strong>Structure:</strong></li>
<li> <strong>Tango:</strong> Tends to have two or three main sections, with phrases grouped regularly (e.g., 2, 4, or 8 bars). Sections are often repeated with varied scoring.</li>
<li> <strong>Salsa:</strong> Typically starts with an introduction, followed by a <em>verse</em> and a <em>chorus</em> section known as the <em>montuno</em>. The <em>montuno</em> features <em>call-and-response</em> between a lead vocalist and <em>coro</em> (chorus singers) over a repeating harmonic progression.</li>
<li> <strong>EDM:</strong> Structure is dictated by energy, featuring alternating <em>builds</em> (rising volume, increasing texture) and climactic <em>drops</em> (release of tension via powerful basslines and drum fills).</li>
</ul>
<p>&gt; [PLACEHOLDER 1: Music Score or Notation showing the 3-2 Son Clavé pattern, illustrating the fundamental rhythmic ostinato of Salsa music.]</p>
<p>&gt; [Link to F-777: Viking Arena on YouTube, exemplifying EDM structure and synthesis: https://youtu.be/RaJ6Vf2w9hY?si=gMgebUIITfePXkXR]</p>` }} />
      </div>
    </article>
  );
};

export default Dance0601GenreAndStylePage;
