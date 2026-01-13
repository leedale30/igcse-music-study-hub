
import { SyllabusItem } from '../../types';
import { aos3DetailedContent } from './aosDetailedContent';
import { romanticIntroQuiz, vltavaQuiz, romanticPianoQuiz, romanticLiederQuiz } from '../quizzes/aos3_quizzes';

export const romanticMusicAoS: SyllabusItem = {
  // ... (main romanticMusicAoS remains same but with updated children)
  id: 'aos3-romantic-music',
  title: 'Area of Study 3: Romantic Music',
  title_zh: '学习领域三：浪漫主义音乐',
  path: '/areas-of-study/aos3-romantic-music',
  content: 'Emotional and expressive music from about 1810 to 1900.',
  content_zh: '大约从1810年到1900年的充满情感和表现力的音乐。',
  longDescription: `
<section>
  <p>The <strong>Romantic period</strong> (approx. 1810–1900) marked a shift from the restraint of the Classical era towards intense <strong>emotional expression</strong>, <strong>individualism</strong>, and <strong>imagination</strong>. Music became more expansive, harmonies more complex, and the orchestra grew to unprecedented sizes.</p>

  <div class="grid">
    <div class="card">
      <h3 class="mt-0">Core Characteristics</h3>
      <ul>
        <li><strong>Expression:</strong> Focus on intense feelings (longing, love, despair).</li>
        <li><strong>Nature:</strong> Fascination with the wildness and beauty of nature.</li>
        <li><strong>Programme Music:</strong> Instrumental music that tells a story or describes a scene.</li>
        <li><strong>Nationalism:</strong> Composers celebrating their homeland's folk songs and legends.</li>
      </ul>
    </div>
    <div class="card">
      <h3 class="mt-0">Musical Innovations</h3>
      <ul>
        <li><strong>Expanded Harmony:</strong> Increased use of <strong>chromaticism</strong> and dissonance.</li>
        <li><strong>Lyrical Melody:</strong> Song-like, expansive melodies ("Bel Canto" style).</li>
        <li><strong>Flexible Tempo:</strong> Use of <strong>Rubato</strong> for expressive freedom.</li>
        <li><strong>Virtuosity:</strong> High technical demand on performers (e.g., Liszt, Paganini).</li>
      </ul>
    </div>
  </div>
</section>
`,
  longDescription_zh: `浪漫主义时期（约1810-1900年）标志着从古典时期的克制向强烈的情感表达、个人主义和想象力的转变。音乐变得更加广阔，和声更加复杂，管弦乐队的规模也达到了前所未有的程度。`,
  children: [
    {
      id: 'aos3-introduction',
      title: 'Introduction to Romanticism',
      title_zh: '浪漫主义音乐简介',
      path: '/areas-of-study/romantic/introduction',
      content: 'Core concepts and characteristics of the Romantic Era.',
      content_zh: '浪漫主义时代的核心概念和特征。',
      quiz: romanticIntroQuiz,
      longDescription: `
<section>
  <p>Welcome to the Romantic Era! This period is all about <strong>Emotion</strong>, <strong>Nature</strong>, and <strong>National Identity</strong>. Unlike the Classical period's focus on balance and "perfection," Romantic composers wanted to shock, move, and inspire their listeners.</p>

  <h3>Key Terms to Know</h3>
  <div class="grid">
    <div class="card">
      <h4>Rubato</h4>
      <p>Literally "robbed time." The player slightly slows down or speeds up to create emotional pull.</p>
    </div>
    <div class="card">
      <h4>Chromaticism</h4>
      <p>Using notes outside the standard major/minor scale to add "color" and tension.</p>
    </div>
    <div class="card">
      <h4>Virtuosity</h4>
      <p>Incredible technical skill displayed by a performer, often for show-stopping effects.</p>
    </div>
    <div class="card">
      <h4>Lied (Lieder)</h4>
      <p>A German art song for solo voice and piano. Think of it as the 19th-century "pop song."</p>
    </div>
  </div>
</section>
`
    },
    {
      id: 'aos3-orchestra',
      title: 'The Romantic Orchestra',
      title_zh: '浪漫主义管弦乐队',
      path: '/areas-of-study/romantic/orchestra',
      content: 'Bigger, louder, and more colorful than ever before.',
      content_zh: '比以往任何时候都更大、更响亮、更多彩。',
      longDescription: `
<section>
  <p>The 19th-century orchestra grew significantly. Composers like Berlioz and Wagner demanded massive ensembles to achieve the wide range of dynamics and colors they desired.</p>

  <div class="grid">
    <div class="card">
      <h3>Expanded Sections</h3>
      <ul>
        <li><strong>Woodwind:</strong> Addition of Piccolo, Cor Anglais, Bass Clarinet, and Contra-bassoon.</li>
        <li><strong>Brass:</strong> Addition of Trombones and Tuba. Horns and Trumpets gained <strong>valves</strong>, allowing them to play chromatic melodies.</li>
        <li><strong>Percussion:</strong> Bass drum, cymbals, triangle, gong, and tubular bells became common.</li>
      </ul>
    </div>
    <div class="card">
      <h3>Orchestral Effects</h3>
      <ul>
        <li><strong>Tremolo:</strong> Rapidly repeating a note (tension).</li>
        <li><strong>Pizzicato:</strong> Plucking the strings.</li>
        <li><strong>Con Sordini:</strong> Playing with mutes for a "veiled" sound.</li>
        <li><strong>Double/Triple tonguing:</strong> Fast woodwind/brass articulation.</li>
      </ul>
    </div>
  </div>
</section>
`
    },
    {
      id: 'aos3-piano',
      title: 'Romantic Piano Music',
      title_zh: '浪漫主义钢琴音乐',
      path: '/areas-of-study/romantic/piano',
      content: 'The "Golden Age" of the piano.',
      content_zh: '钢琴的“黄金时代”。',
      quiz: romanticPianoQuiz,
      longDescription: `
<section>
  <p>The piano was the most important instrument of the Romantic era. Improvements in its construction (cast-iron frame, cross-stringing) gave it more power and a wider range (88 keys).</p>

  <div class="grid">
    <div class="card">
      <h3>The Character Piece</h3>
      <p>Short, evocative pieces that express a single mood or idea. Popular genres include:</p>
      <ul>
        <li><strong>Nocturne:</strong> A "night piece" (dreamy, lyrical).</li>
        <li><strong>Mazurka/Polonaise:</strong> Polish dances (Nationalism).</li>
        <li><strong>Étude:</strong> A "study" focused on technical skill (but often artistic!).</li>
        <li><strong>Prelude:</strong> A short introductory or standalone piece.</li>
      </ul>
    </div>
    <div class="card">
      <h3>Key Composers</h3>
      <ul>
        <li><strong>Frédéric Chopin:</strong> The "Poet of the Piano." Lyrical, sensitive, Polish-inspired.</li>
        <li><strong>Franz Liszt:</strong> The ultimate virtuoso. Dazzling, technically massive works.</li>
        <li><strong>Robert Schumann:</strong> Poetic and literary-inspired cycles (e.g., <em>Carnaval</em>).</li>
      </ul>
    </div>
  </div>

  <h2>Piano Texture & Pedaling</h2>
  <p>The <strong>sustaining pedal</strong> (or damper pedal) is essential. It allows notes to ring together, creating a "blur" of sound and allowing widely spaced arpeggios to be heard as single rich chords.</p>
</section>
`
    },
    {
      id: 'aos3-lieder',
      title: 'German Lieder',
      title_zh: '德国艺术歌曲',
      path: '/areas-of-study/romantic/lieder',
      content: 'Art songs for voice and piano.',
      content_zh: '为人声和钢琴创作的艺术歌曲。',
      quiz: romanticLiederQuiz,
      longDescription: `
<section>
  <p>A <strong>Lied</strong> (plural <strong>Lieder</strong>) is a German art song. It is an intimate genre where the <strong>singer</strong> and <strong>pianist</strong> are equal partners.</p>

  <div class="grid">
    <div class="card">
      <h3>Structural Forms</h3>
      <ul>
        <li><strong>Strophic:</strong> Same music for every verse (like a hymn).</li>
        <li><strong>Through-composed (Durchkomponiert):</strong> Different music for every verse to follow the story (e.g., <em>Erlkönig</em>).</li>
        <li><strong>Modified Strophic:</strong> Mostly same music but with variations for dramatic moments.</li>
      </ul>
    </div>
    <div class="card">
      <h3>Key Features</h3>
      <ul>
        <li><strong>Piano Prelude/Postlude:</strong> Setting the mood before the singer starts and reflecting after they finish.</li>
        <li><strong>Word Painting:</strong> The music literally mimicking the text (e.g., galloping horse triplets).</li>
        <li><strong>Poetry:</strong> High-quality German poems (e.g., by Goethe or Heine).</li>
      </ul>
    </div>
  </div>

  <h2>Famous Examples</h2>
  <ul>
    <li><strong>Schubert:</strong> <em>Erlkönig</em> (Through-composed, dramatic).</li>
    <li><strong>Schubert:</strong> <em>Die Forelle</em> (The Trout - Modified Strophic).</li>
    <li><strong>Schumann:</strong> <em>Dichterliebe</em> (A "Song Cycle" about unrequited love).</li>
  </ul>
</section>
`
    },
    {
      id: 'aos3-smetana',
      title: 'Focus Work: Smetana: Vltava',
      title_zh: '重点作品：斯美塔那：《沃尔塔瓦河》',
      path: '/areas-of-study/romantic/smetana-vltava',
      content: 'The journey of a Czech river, told through music.',
      content_zh: '通过音乐讲述的捷克河流之旅。',
      quiz: vltavaQuiz,
      longDescription: `
<section>
  <p>Bedřich Smetana (1824–1884) was a master of <strong>Musical Nationalism</strong>. His cycle of six symphonic poems, <em>Má Vlast</em> (My Homeland), celebrates the geography, history, and legends of Bohemia (modern-day Czech Republic).</p>

  <div class="card bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-800">
    <h3 class="mt-0 text-sky-900 dark:text-sky-100">The Journey of the River</h3>
    <p><em>Vltava</em> (also known as <em>The Moldau</em>) follows the river from its source in the Bohemian forest, past a hunt and a rustic wedding, through moonlight and rapids, finally arriving in the capital city, Prague.</p>
  </div>

  <h2>Main River Theme (The Moldau)</h2>
  <p>The iconic river theme is a flowing, folk-like melody in <strong>6/8 time</strong>. It represents the majestic movement of the water.</p>

  <div class="abc-score-container card p-6 bg-white dark:bg-slate-800 overflow-x-auto shadow-inner border-2 border-slate-100 dark:border-slate-700">
    <div class="abc-score" data-abc='
X:1
T:Vltava (The Moldau) - Main Theme
M:6/8
L:1/8
Q:1/4=100
K:Em
E3- E FG | A3- A GA | B3- B d>c | B3- B2 z |
w: The river flows* so* deep* and* wide...
A3- A c>B | A3- A B>A | G3- G A>G | F3- F2 z ||
'></div>
  </div>

  <h3>Key Sections to Identify</h3>
  <div class="grid">
    <div class="card">
      <h4>1. The Two Springs</h4>
      <p><strong>Instrumentation:</strong> Two flutes (soft, wavy motifs).<br/><strong>Texture:</strong> Interlocking arpeggios representing the cold and warm streams.</p>
    </div>
    <div class="card">
      <h4>2. The River Theme</h4>
      <p><strong>Key:</strong> E Minor.<br/><strong>Style:</strong> Folk-like, flowing 6/8 melody led by strings and oboes.</p>
    </div>
    <div class="card">
      <h4>3. Forest Hunt</h4>
      <p><strong>Brass:</strong> French Horns and Trumpets playing fanfares.<br/><strong>Atmosphere:</strong> Energetic, ternary-style hunting calls.</p>
    </div>
    <div class="card">
      <h4>4. Peasant Wedding</h4>
      <p><strong>Rhythm:</strong> 2/4 Polka.<br/><strong>Key:</strong> G Major (bright and cheerful).</p>
    </div>
    <div class="card">
      <h4>5. Moonlight / Nymphs</h4>
      <p><strong>Instrumentation:</strong> Muted strings (<em>con sordini</em>), flutes and harp.<br/><strong>Mood:</strong> Ethereal, shimmering, and quiet.</p>
    </div>
    <div class="card">
      <h4>6. St. John\'s Rapids</h4>
      <p><strong>Dynamics:</strong> <em>ff</em> (Fortissimo).<br/><strong>Texture:</strong> Thick, dissonant, use of brass and percussion (cymbals/bass drum).</p>
    </div>
    <div class="card">
      <h4>7. Triumphant Entry into Prague</h4>
      <p><strong>Key:</strong> E Major (Tonic Major).<br/><strong>Theme:</strong> Return of the river theme but in a majestic, full-orchestra chorale.</p>
    </div>
  </div>
</section>
`
    },
    aos3DetailedContent,
  ]
};

