import React from 'react';
import { Link } from 'react-router-dom';

const RomanticRomanticMusicPage: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/aos/romantic" className="hover:text-sky-600 dark:hover:text-sky-400">Romantic Music</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700 dark:text-gray-300">Romantic Music</span>
      </nav>

      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Romantic Music
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Area of Study 3 • Romantic Music
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
<p>In this unit, you will be looking at Romantic instrumental music, focusing on <strong>single movement works for orchestra</strong>. This era emphasized emotion, individual expression, and virtuosity, representing a dramatic shift from the restraint and balance of the Classical period toward passionate, personal, and often programmatic musical expression.</p>
</section>
<section id="core-themes">
<h2>Core Themes to Exemplify</h2>
<p>The Focus Work is used to study major trends that defined the Romantic period:</p>
<h3>The Expansion of the Orchestra</h3>
<p>The Romantic orchestra was much larger than in the Classical period, featuring:</p>
<ul>
<li>New instruments such as the <strong>tuba</strong>, piccolo, and English horn</li>
<li>Much more prominent use of <strong>brass instruments</strong></li>
<li>Expanded percussion sections</li>
<li>Larger string sections for increased volume and richness</li>
<li>Greater variety of woodwind instruments</li>
</ul>
<h3>Programme Music</h3>
<p><strong>Programme music</strong> represents instrumental music written to tell a story, describe a scene, or depict a specific idea, without using words. This concept allowed composers to:</p>
<ul>
<li>Create musical narratives and imagery</li>
<li>Express extra-musical ideas through sound</li>
<li>Connect music with literature, art, and nature</li>
<li>Develop new forms of musical expression beyond abstract structures</li>
</ul>
<h3>Nationalism</h3>
<p>The desire by composers to express their <strong>national identity</strong> through their music became a defining characteristic of the Romantic era:</p>
<ul>
<li>Incorporation of folk melodies and traditional songs</li>
<li>Use of traditional dances (such as the <em>polka</em>, mazurka, and waltz)</li>
<li>Musical depiction of national landscapes and history</li>
<li>Celebration of national heroes and legends</li>
<li>Resistance to foreign musical influences</li>
</ul>
</section>
<section id="key-features">
<h2>Key Musical Features</h2>
<p>You must recognize the shift toward more complex musical language that characterizes the Romantic style:</p>
<h3>Chromatic Harmony</h3>
<p>Romantic composers employed increasingly complex <strong>chromatic harmony</strong>, featuring:</p>
<ul>
<li>Use of notes outside the basic major or minor scale</li>
<li>More adventurous chord progressions</li>
<li>Delayed resolution of dissonance</li>
<li>Exploration of remote key relationships</li>
</ul>
<h3>Wide-ranging Dynamics</h3>
<p>Romantic music features dramatic contrasts and gradual changes in volume:</p>
<ul>
<li>Extreme contrasts from <em>pianissimo</em> to <em>fortissimo</em></li>
<li>Long, gradual crescendos and diminuendos</li>
<li>Sudden dynamic changes for dramatic effect</li>
<li>Use of dynamics to support programmatic content</li>
</ul>
<h3>Expanded Forms</h3>
<p>Romantic composers stretched and modified traditional forms:</p>
<ul>
<li>Longer movements and works</li>
<li>Freer treatment of sonata form</li>
<li>Development of new forms like the symphonic poem</li>
<li>Integration of multiple movements</li>
</ul>
</section>
<section id="focus-work">
<h2>Focus Work for Learning</h2>
<p>Your study will be based on analysis of:</p>
<ul>
<li><strong>Bedřich Smetana:</strong> <em>Vltava</em> from <em>Má Vlast</em> (My Country)</li>
</ul>
<p>This work exemplifies all three core themes of Romantic music: it uses an expanded orchestra, tells the programmatic story of the Vltava River flowing through Bohemia, and expresses Czech national identity through folk-inspired melodies and patriotic sentiment.</p>
<p><strong>Important Note:</strong> This specific work will <em>not</em> appear in your examination, but you will apply the musical features and analytical skills it teaches you to new, unseen music in the listening paper.</p>
</section>
<section id="orchestration">
<h2>Romantic Orchestration</h2>
<p>The Romantic period saw revolutionary developments in orchestration:</p>
<ul>
<li><strong>Coloristic Effects:</strong> Use of instruments for their unique timbral qualities</li>
<li><strong>Sectional Writing:</strong> Highlighting different sections of the orchestra</li>
<li><strong>Solo Passages:</strong> Individual instruments featured prominently</li>
<li><strong>Blended Textures:</strong> Complex combinations of instrumental colors</li>
<li><strong>Programmatic Orchestration:</strong> Instruments chosen to support narrative content</li>
</ul>
</section>
<section id="learning-objectives">
<h2>Learning Objectives</h2>
<p>By the end of this unit, you should be able to:</p>
<ul>
<li>Identify and describe the key characteristics of Romantic musical style</li>
<li>Recognize the expanded Romantic orchestra and its new instruments</li>
<li>Understand the concept and function of programme music</li>
<li>Identify nationalist elements in Romantic compositions</li>
<li>Analyze chromatic harmony and its expressive effects</li>
<li>Recognize wide-ranging dynamics and their dramatic purposes</li>
<li>Apply Romantic musical terminology accurately in written analysis</li>
<li>Understand the relationship between music and extra-musical content</li>
</ul>
</section>
<section id="historical-context">
<h2>Historical Context</h2>
<p>The Romantic period (c. 1810–1900) coincided with major social, political, and cultural changes across Europe. The Industrial Revolution, rise of nationalism, and emphasis on individual expression influenced all arts, including music. Composers gained greater independence from aristocratic patronage, writing for growing middle-class audiences in public concert halls. The period saw revolutions across Europe, the unification of Germany and Italy, and the development of national consciousness, all of which found expression in the era's music.</p>
</section>
<section id="key-composers">
<h2>Important Romantic Composers</h2>
<p>While your focus work features Smetana, the Romantic period produced many influential composers:</p>
<ul>
<li><strong>Ludwig van Beethoven (1770-1827):</strong> Bridged Classical and Romantic periods</li>
<li><strong>Franz Schubert (1797-1828):</strong> Master of Romantic song and melody</li>
<li><strong>Hector Berlioz (1803-1869):</strong> Pioneer of programme music and orchestration</li>
<li><strong>Frédéric Chopin (1810-1849):</strong> Nationalist composer and piano virtuoso</li>
<li><strong>Franz Liszt (1811-1886):</strong> Virtuoso pianist and inventor of the symphonic poem</li>
<li><strong>Richard Wagner (1813-1883):</strong> Revolutionary opera composer</li>
<li><strong>Bedřich Smetana (1824-1884):</strong> Father of Czech national music</li>
<li><strong>Johannes Brahms (1833-1897):</strong> Master of Romantic symphonic form</li>
<li><strong>Pyotr Ilyich Tchaikovsky (1840-1893):</strong> Russian nationalist composer</li>
</ul>
</section>
<section id="romantic-innovations">
<h2>Romantic Innovations</h2>
<p>The Romantic period introduced several important musical innovations:</p>
<ul>
<li><strong>Leitmotif:</strong> Recurring musical themes associated with characters or ideas</li>
<li><strong>Symphonic Poem:</strong> Single-movement orchestral work with programmatic content</li>
<li><strong>Art Song (Lied):</strong> Sophisticated songs for voice and piano</li>
<li><strong>Character Pieces:</strong> Short instrumental works with descriptive titles</li>
<li><strong>Cyclic Form:</strong> Use of recurring themes across multiple movements</li>
</ul>
</section>` }} />
      </div>
    </article>
  );
};

export default RomanticRomanticMusicPage;
