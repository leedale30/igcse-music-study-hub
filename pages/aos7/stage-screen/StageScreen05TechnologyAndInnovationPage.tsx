import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen05TechnologyAndInnovationPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Technology And Innovation</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Technology And Innovation
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
        <div dangerouslySetInnerHTML={{ __html: `<h2>Aos07 05 Technology And Innovation</h2>
<p>The analysis below meticulously details the requirements of the Lexicon's fifth section as they apply to this contemporary area.</p>
<hr/>
<h2>5. Technology and Innovation: Area of Study 7 (Music for Stage and Screen)</h2>
<h3>5.1. Music Technology: Tools used in production—DAWs, synthesizers, samplers, effects.</h3>
<p>Music technology is integral to contemporary composition for film, television, and computer games, often expanding the palette beyond traditional orchestral instruments.</p>
<ul><li> <strong>Instrumentation and Sound Generation:</strong> Composers utilize <strong>synthesizers</strong> to create new sounds, often blending them with acoustic instruments. The <strong>drum machine</strong> is employed for rhythmic precision, especially in generating <strong>loops</strong> and <strong>ostinatos</strong>.</li><li> <strong>Compositional Tools:</strong> <strong>Digital Audio Workstations (DAWs)</strong> are the standard software used for composing, arranging, mixing, and mastering complex scores for visual media.</li><li> <strong>Audio Effects:</strong> Digital effects are critical for shaping the atmosphere and texture of the sound, and you must recognize them aurally:</li><li> <strong>Reverb</strong> and <strong>delay</strong> are used to add space and depth.</li><li>  The use of <strong>sample</strong> and <strong>loop</strong> is foundational in game music and often integral to developing a score efficiently.</li></ul>
<ul><li>  [PLACEHOLDER: IMAGE of a professional Digital Audio Workstation (DAW) interface displaying a complex arrangement of MIDI and audio tracks used for film scoring.]</li></ul>
<h3>5.2. Recording &amp; Production Techniques: Studio methods, mic placement, mixing styles, and mastering.</h3>
<p>The production process in this area is highly technical due to the need for precise synchronization with picture or gameplay.</p>
<ul><li> <strong>Layering and Texture:</strong> To achieve the required dramatic density, producers employ techniques such as <strong>multi-tracking</strong> (capturing separate tracks), <strong>overdubbing</strong> (recording additional tracks), and <strong>double-tracking</strong> (layering identical parts).</li><li> <strong>Rhythmic Continuity:</strong> In computer game music, the musical structure is often built on <strong>loops</strong> and <strong>rhythmic ostinatos</strong> that run continuously beneath the action.</li><li> <strong>Structural Manipulation:</strong> Film and game music uses concepts borrowed from popular production, such as the <strong>breakdown, build up, and drop</strong> to manipulate tension and release during action sequences.</li><li> <strong>Compositional Commentary:</strong> For Composition 2, which may relate to Area of Study 7, candidates who submit a recorded composition without notation must include a detailed commentary. This commentary must explain <strong>how their effects were achieved</strong> through the use of <strong>technology</strong>, demonstrating an understanding of production methods.</li></ul>
<h3>5.3. Distribution &amp; Media: How music is shared and consumed—streaming platforms, physical media, social media.</h3>
<p>All music in this Area of Study, due to its contemporary nature, relies heavily on modern distribution methods.</p>
<ul><li> <strong>Commercial Distribution:</strong> Film scores and game soundtracks are widely distributed via <strong>digital, streaming, and physical formats</strong>.</li><li> <strong>Consumption Contexts:</strong> Music is consumed while viewing films (in cinemas or streamed) or actively engaging in games.</li><li> <strong>Learning Resources:</strong> Digital platforms are essential tools for revision and listening across all Areas of Study. <strong>YouTube</strong> is a suggested source for finding further listening examples for this area.</li></ul>
<h3>5.4. Hybridization: Fusion of traditional and modern elements through technology or cross-cultural collaboration.</h3>
<p>Hybridization is a defining feature of modern stage and screen scoring.</p>
<ul><li> <strong>Acoustic and Electronic Fusion:</strong> Film scoring commonly involves the fusion of the traditional <strong>symphony orchestra</strong> (acoustic) with <strong>synthesizers</strong> and electronic processing (modern technology) to create unique sound palettes and effects.</li><li> <strong>Stylistic Blending:</strong> Composers often blend musical styles to enhance narrative. For example, the incorporation of <strong>American folk tunes</strong> (a traditional element) into orchestral ballet scores, as done by Aaron Copland, is a form of stylistic hybridization used to root the narrative in a specific national identity.</li><li> <strong>Technological Integration (Adaptive Music):</strong> Computer game music represents a technological hybridization, where composed music (often orchestral or electronic) is adapted in real-time based on player interaction, a feature known as <strong>adaptive music</strong>.</li></ul>
<ul><li>  [YOUTUBE LINK: Example of computer game music, such as Yoko Shimomura’s <em>Gran Saga Soundtrack</em>, demonstrating how orchestral and technological elements are blended to create an effective score: https://youtu.be/DQ0xHNaqfdc?si=2Pmi1ipz231d0VQF].</li></ul>` }} />
      </div>
    </article>
  );
};

export default StageScreen05TechnologyAndInnovationPage;
