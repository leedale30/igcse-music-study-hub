import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen030702PerformerAudienceRelationshipPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Performer-Audience Relationship - Music For Stage And Screen Performance Practice</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Performer-Audience Relationship - Music For Stage And Screen Performance Practice
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 7 • Music for Stage and Screen
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
        <div dangerouslySetInnerHTML={{ __html: `<p>The relationship between performers and audiences in music for stage and screen varies significantly across different media, creating unique forms of engagement and interaction.</p>
<h3>Mass Media vs. Live Performance</h3>
<p>Music for stage and screen creates different types of performer-audience relationships:</p>
<ul>
<li><strong>Mediated Experience:</strong> Film and game music typically reach audiences through recorded media rather than live performance</li>
<li><strong>Live Theater:</strong> Ballet maintains direct performer-audience interaction in theater settings</li>
<li><strong>Hybrid Experiences:</strong> Some productions combine live and recorded elements</li>
</ul>
<h3>Film Music Audience Relationship</h3>
<p>Film music creates a unique form of audience engagement:</p>
<ul>
<li><strong>Invisible Performers:</strong> Musicians are typically not seen by the audience</li>
<li><strong>Emotional Manipulation:</strong> Music guides audience emotional responses to visual narrative</li>
<li><strong>Subconscious Influence:</strong> Audiences may not consciously notice the music while being affected by it</li>
<li><strong>Collective Experience:</strong> Shared emotional responses in cinema settings</li>
</ul>
<h3>Ballet Performance Relationship</h3>
<p>Ballet maintains traditional live performance dynamics:</p>
<ul>
<li><strong>Live Orchestra:</strong> Direct connection between musicians, dancers, and audience</li>
<li><strong>Immediate Response:</strong> Audience can react in real-time to performances</li>
<li><strong>Visual Integration:</strong> Music, dance, and staging create unified artistic experience</li>
<li><strong>Cultural Ritual:</strong> Formal theater etiquette and traditions</li>
</ul>
<h3>Computer Game Music Interaction</h3>
<p>Game music creates the most interactive performer-audience relationship:</p>
<ul>
<li><strong>Player Agency:</strong> Audience (players) directly influence musical development</li>
<li><strong>Adaptive Response:</strong> Music responds to player actions and choices</li>
<li><strong>Personal Experience:</strong> Each player may hear different musical variations</li>
<li><strong>Extended Engagement:</strong> Long-term relationship through repeated gameplay</li>
</ul>
<p>These varied relationships demonstrate how different media create distinct forms of musical communication and audience engagement.</p>` }} />
      </div>
    </article>
  );
};

export default StageScreen030702PerformerAudienceRelationshipPage;
