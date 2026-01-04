import React from 'react';
import { Link } from 'react-router-dom';

const StageScreen03CulturalAndHistoricalContextPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/stage-screen" className="hover:text-sky-600 dark:hover:text-sky-400">Music for Stage and Screen</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Cultural And Historical Context</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Cultural And Historical Context
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
        <div dangerouslySetInnerHTML={{ __html: `<h2>Aos07 03 Cultural And Historical Context</h2>
<p>This study area spans repertoire from the early twentieth century to the present day. Your understanding of how music enhances visual action and narrative is crucial for the listening component.</p>
<hr/>
<h2>3. Cultural and Historical Context: Area of Study 7 (Music for Stage and Screen)</h2>
<h3>3.1. Cultural Function: The role music plays in society.</h3>
<h4>3.1.1.1. Ritual</h4>
Music for stage and screen is primarily secular, but some works incorporate dramatic or thematic rituals.<br/><ul><li> <strong>Ballet:</strong> Some modernist ballets, such as Stravinsky’s <em>The Rite of Spring</em>, explicitly depict a <strong>pagan ritual</strong>.</li></ul>
<h4>3.1.1.2. Celebration</h4>
All genres in this area serve a significant function of <strong>public celebration and entertainment</strong>.<br/><ul><li> <strong>Film Music:</strong> Large, dynamic orchestral scores are employed in big-budget blockbusters, reflecting the spectacle and excitement of the action on screen.</li><li> <strong>Ballet:</strong> Dance music, such as the <em>Hoe-Down</em> from Copland's <em>Rodeo</em>, is used to celebrate a lively atmosphere featuring fast tempos and driving rhythms.</li></ul>
<h4>3.1.1.3. work, protest</h4>
<p>NOT APPLICABLE.</p>
<h4>3.1.1.4. healing</h4>
<p>NOT APPLICABLE.</p>
<h4>3.1.1.5. Social Identity</h4>
Music is used to establish and root the narrative in a specific culture or region, often reinforcing national identity.<br/><ul><li> <strong>Nationalism:</strong> Composers like Aaron Copland evoked a strong sense of <strong>nationalism</strong> and American ranch life in ballets like <em>Rodeo</em> and <em>Appalachian Spring</em> by using <strong>American folk tunes</strong> (e.g., the Shaker hymn <em>Simple Gifts</em>).</li><li> <strong>Location:</strong> Music can be used to set the ballet in a particular location, often through writing music inspired by local folk tunes or dances.</li></ul>
<h3>3.2. Historical Background: The evolution of the style or tradition and its socio-political influences.</h3>
<p>This area covers music from the beginning of the twentieth century to the modern day, tracking the profound influence of technology on music production:</p>
<ul><li> <strong>Early Film (Silent Era):</strong> In the early twentieth century, silent films relied on a <strong>live pianist, organist, or small instrumental ensemble</strong> in the movie theatre to enhance the action on screen.</li><li> <strong>Synchronized Sound:</strong> Experiments to synchronize audio failed until inventors discovered how to record sound directly onto rolls of film. <em>Don Juan</em> (1926) was the first full-length film to use this synchronized sound, but <em>The Jazz Singer</em> (1927) is famously known as the first ‘part-talkie’.</li><li> <strong>The Fully Scored Soundtrack:</strong> Max Steiner’s music for <em>King Kong</em> (1933) marked a revolution, becoming the first fully scored soundtrack for a feature-length motion picture. Steiner famously brought Richard Wagner’s operatic idea of the <strong>leitmotif</strong> (a recurring theme for a character or idea) into cinema.</li><li> <strong>Technological Expansion:</strong> Composers began using <strong>electronic synthesizers</strong> in the 1960s and 70s to expand the orchestral sound palette, or simply due to budget limitations. Electronic music alone can create "other-worldly atmospheres".</li><li> <strong>Game Music:</strong> Developed alongside technology, from simple analogue oscillators to complex compositions using MIDI, <strong>sampling</strong>, and eventually <strong>full orchestral arrangements</strong>. Modern scores incorporate professional software with internal <strong>timecodes</strong> for highly accurate synchronization.</li></ul>
<h3>3.3. Movement &amp; Dance: The physical embodiment of the music and its relationship with specific dance forms.</h3>
<p>The relationship between music and movement is fundamental to this area.</p>
<ul><li> <strong>Ballet:</strong> Music for ballet is designed to support the action and <strong>choreography</strong>. The music moves beyond simple accompaniment to become a <strong>vital part of the storytelling</strong>, enhancing action, showing emotional expression, and creating mood.</li><li> <strong>Choreographer-Composer Collaboration:</strong> A key feature of 20th-century ballet is the crucial <strong>collaboration between composers and choreographers</strong>. This can involve the composer writing first (<em>The Rite of Spring</em>), the choreographer developing the concept first (Copland/Martha Graham), or a highly integrated process of mutual refinement.</li><li> <strong>Programmatic Movement:</strong> Film and computer game music often utilize rhythm to directly mirror the action on screen, a technique known as <strong>‘Mickey Mousing’</strong>. Rhythmic <strong>ostinatos</strong> and <strong>loops</strong> are heavily used to build tension and provide continuous accompaniment, driving the player or viewer forward.</li></ul>
<h3>3.4. Economics &amp; Patronage: The financial systems supporting the music's creation.</h3>
<p>The music for stage and screen is heavily tied to the commercial market.</p>
<ul><li> <strong>Commercial Demands:</strong> Composing film music is a complicated process requiring significant planning and adherence to <strong>tight, often unnegotiable deadlines</strong> imposed by major studios. The composer's music is integral to the commercial success of the movie.</li><li> <strong>Budgetary Influence:</strong> Economic constraints often influence the choice of instrumentation, leading composers to use <strong>electronic synthesizers</strong> instead of large, expensive orchestras.</li></ul>
<h3>3.5. Key Works/Pieces: Canonical or representative compositions that define the genre or tradition.</h3>
<p>You are expected to engage with a representative range of repertoire, including the following <em>Starting Points</em>:</p>
<ul><li> <strong>Ballet Music:</strong> <strong>Stravinsky: <em>The Rite of Spring</em></strong>. (This work demonstrates features like dissonance, polytonality, and changing time signatures).</li><li> <strong>Film Music:</strong> <strong>John Williams: <em>Star Wars</em></strong>. (This score exemplifies the use of <strong>leitmotifs</strong>, large symphony orchestras, and dramatic orchestral writing).</li><li>  [YOUTUBE LINK: John Williams - Imperial March (Star Wars Theme) (Suggested listening example)]</li><li> <strong>Computer Game Music:</strong> <strong>Yoko Shimomura: <em>Gran Saga soundtrack</em></strong>. (Game music uses rhythmic loops and adaptive principles, often drawing on orchestral or electronic sounds).</li></ul>
<h3>3.6. Key Composers/Artists: Influential figures who shaped or revolutionized the music.</h3>
<ul><li> <strong>EXCLUSION:</strong> Candidates are explicitly <strong>not expected to identify or name any specific composers</strong> for extracts from Area of Study 7 in the examination. You must focus only on the musical features.</li></ul>
<p>NOT APPLICABLE.</p>
<h3>3.7. Performance Practice: Traditional ways of interpreting and presenting music.</h3>
<h4>3.7.1.1. Staging</h4>
<ul><li> <strong>Ballet:</strong> Requires full <strong>staging</strong> in a theatre, including sets, costumes, and elaborate choreography. The music must support the visual effects, projected visuals, puppetry, and automated sets. Orchestral ballet suites were arranged to be performed in concert <strong>without</strong> choreography.</li><li> <strong>Film:</strong> Music recording is highly technical, with composers traditionally conducting ensembles in studios to edited movie reels containing a <strong>timecode</strong> for synchronization.</li><li>  [PLACEHOLDER: IMAGE or DIAGRAM showing a composer/conductor working with a film reel and timecode in a recording studio.]</li></ul>
<h4>3.7.1.2. performer/audience relationship</h4>
The distribution of music determines the audience relationship.<br/><ul><li> <strong>Mass Media:</strong> Film music and game music are disseminated through <strong>radio, television, and film</strong>.</li><li> <strong>Live Performance:</strong> Ballet is performed in theatres (like the West End). Pop songs from musicals are performed in large live concerts/shows.</li><li> <strong>Synchronization:</strong> Coordination between audio and visuals is crucial in modern film scoring, making the process much easier than it had been previously.</li></ul>
<h4>3.7.1.3. attire</h4>
<p>NOT APPLICABLE.</p>
<h4>3.7.1.4. ritualistic elements</h4>
<p>As noted above, music for stage works may depict <strong>pagan rituals</strong>.</p>` }} />
      </div>
    </article>
  );
};

export default StageScreen03CulturalAndHistoricalContextPage;
