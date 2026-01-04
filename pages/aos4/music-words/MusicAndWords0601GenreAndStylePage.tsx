import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0601GenreAndStylePage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Genre And Style</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Genre And Style
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 4 • Music and Words
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
<p>Area of Study 4 covers a diverse chronological range (early twentieth century to the present day) and a variety of styles within the context of music set to text. Candidates must be able to classify and describe stylistic traits specific to each sub-genre:</p>
<h4>A. Art Song (Solo Voice) and Music for Choirs</h4>
<p>These genres often belong to the Western classical tradition or its modern derivatives. Key stylistic traits revolve around the relationship between the melody and the text:</p>
<ul>
<li> <strong>Text Setting:</strong> Candidates must distinguish between:</li>
<li> <strong>Syllabic:</strong> One note set per syllable, prioritizing textual clarity and rhythmic drive.</li>
<li> <strong>Melisma:</strong> One syllable of text sung over multiple notes, used for expressive vocal embellishment.</li>
<li> <strong>Structure:</strong> Structural choices are often dictated by the poem's narrative:</li>
<li> <strong>Strophic Form:</strong> Each verse (strophe) of the poem uses the same music and accompaniment, providing familiarity and repetition.</li>
<li> <strong>Through-Composed:</strong> The music continuously changes and avoids repetition, allowing the composer to reflect the evolving narrative and emotional shifts in the text.</li>
<li> <strong>Texture (Choirs):</strong> Composers use varied textures for dramatic effect, including:</li>
<li> <strong>Homophonic:</strong> Clear melody supported by chords (e.g., SATB).</li>
<li> <strong>Polyphonic/Contrapuntal:</strong> Multiple independent melodic lines simultaneously.</li>
<li> <strong>Antiphonal:</strong> Call-and-response between different vocal groups (e.g., double choir arrangements).</li>
</ul>
<p>&gt; [PLACEHOLDER 1: Music Score or Notation showing a clear example of syllabic vs. melismatic word-setting from an Art Song example.]</p>
<h4>B. Popular Song and Songs from Musicals</h4>
<p>These genres prioritize accessibility, emotional connection, and modern structures. Key traits include:</p>
<ul>
<li> <strong>Structure:</strong> Standardized popular song structures are essential knowledge, identified by terms such as <strong>intro, verse, chorus, bridge/middle eight, and outro</strong>. The common overall form is often cited as <strong>ABABCB</strong>.</li>
<li> <strong>Melodic Devices:</strong> The use of repetitive, catchy melodic hooks and recognizable musical riffs (often instrumental) to aid recall and appeal is a defining trait.</li>
<li> <strong>Instrumentation and Technology:</strong> The style utilizes <strong>pop and rock instruments</strong> (electric guitar, bass guitar, drum kit, synthesizers). <strong>Music technology and production</strong> techniques, such as <strong>overdubbing, multi-tracking, double-tracking, chorus, reverb, and delay</strong>, are integral to the final sound and texture.</li>
<li> <strong>Rhythm and Tempo:</strong> Tempo is typically consistent and often referred to using <strong>BPM</strong>. Vocal techniques include <strong>rap</strong> and expressive slides.</li>
</ul>
<p>&gt; [PLACEHOLDER 2: Diagram illustrating the typical Verse-Chorus-Bridge structure (A B C B) of a popular song.]</p>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0601GenreAndStylePage;
