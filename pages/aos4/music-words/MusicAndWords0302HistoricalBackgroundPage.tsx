import React from 'react';
import { Link } from 'react-router-dom';

const MusicAndWords0302HistoricalBackgroundPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/music-words" className="hover:text-sky-600 dark:hover:text-sky-400">Music and Words</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Historical Background</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Historical Background
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
        <div dangerouslySetInnerHTML={{ __html: `<h3>3.2. Historical Background: The evolution of the style or tradition and its socio-political influences.</h3>
<p>The content covers a wide range, extending from the early twentieth century to the present day.</p>
<ul>
<li> <strong>Art Song:</strong> The tradition of writing solo songs, so important in the Romantic era (with composers like Schubert writing over 500 songs), continued into the twentieth century with great creativity. Composers often grouped songs into <strong>song cycles</strong> (collections with a related theme or poet) intended to be sung consecutively.</li>
<li> <strong>Choral Music:</strong> Since the beginning of the twentieth century, composers have contributed a vast amount of music for choirs, ranging from simple unaccompanied works to huge compositions for large choral forces and orchestras.</li>
<li> <strong>Popular Song:</strong> This style, gaining widespread appeal <strong>primarily from the 1990s onwards</strong>, relies heavily on modern <strong>music production technology</strong> to achieve its defining sound. The rise of broadcast media and digital streaming platforms (like YouTube and Spotify) has fundamentally changed how this music is distributed and consumed globally.</li>
</ul>` }} />
      </div>
    </article>
  );
};

export default MusicAndWords0302HistoricalBackgroundPage;
