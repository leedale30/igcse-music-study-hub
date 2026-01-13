import { SyllabusItem } from '../../types';
import { tangoQuiz, salsaQuiz, edmQuiz } from '../quizData';
import { aos5DetailedContent } from './aosDetailedContent';

export const musicForDanceAoS: SyllabusItem = {
  id: 'aos5-music-for-dance',
  title: 'Area of Study 5: Music for Dance',
  title_zh: '学习领域五：舞蹈音乐',
  path: '/areas-of-study/aos5-music-for-dance',
  content: 'Music that makes you want to move!',
  content_zh: '让你想随之起舞的音乐！',
  longDescription: `This area is all about music that is made for dancing. We will study three different styles: Tango from Argentina, Salsa from Latin America, and Electronic Dance Music (EDM) which is popular today. You will learn about their special rhythms, instruments, and how they are used in social events and performances.`,
  longDescription_zh: `这个领域全是关于为舞蹈创作的音乐。我们将学习三种不同的风格：来自阿根廷的探戈、来自拉丁美洲的萨尔萨，以及当今流行的电子舞曲（EDM）。您将了解它们独特的节奏、乐器，以及它们在社交活动和表演中的应用方式。`,
  children: [
    {
      id: 'aos5-tango', title: 'Focus Area: Tango', title_zh: '重点领域：探戈', path: '/areas-of-study/dance/tango',
      content: 'Passional dance music from Argentina with a distinct rhythmic pulse.',
      content_zh: '来自阿根廷的充满激情的舞曲，具有独特的节奏律动。',
      quiz: tangoQuiz,
      longDescription: `
<section>
  <p>Tango is one of the most famous and dramatic dance styles in the world, originating in the late 19th century in the suburbs of <strong>Buenos Aires</strong> (Argentina) and <strong>Montevideo</strong> (Uruguay).</p>

  <div class="grid">
    <div class="card">
      <h3>Key Musical Features</h3>
      <ul>
        <li><strong>Time Signature:</strong> 2/4 or 4/4 with a steady, driving pulse.</li>
        <li><strong>Articulation:</strong> Heavy use of <strong>staccato</strong> and sharp accents (Marcato).</li>
        <li><strong>Rhythm:</strong> The foundational <strong>Habanera</strong> rhythm and heavy syncopation.</li>
        <li><strong>Dynamics:</strong> Sudden, dramatic shifts between very quiet and very loud.</li>
      </ul>
    </div>
    <div class="card">
      <h3>The "Sexteto Típico"</h3>
      <p>A traditional Tango ensemble usually includes:</p>
      <ul>
        <li><strong>Two Violins</strong> (playing in octaves for a thick sound).</li>
        <li><strong>Two Bandoneóns</strong> (the essential "soul" of Tango).</li>
        <li><strong>Piano</strong> (providing percussive rhythmic support).</li>
        <li><strong>Double Bass</strong> (emphasizing the strong beats).</li>
      </ul>
    </div>
  </div>

  <h2>Musical Example: The Habanera Rhythm</h2>
  <p>The Habanera is a syncopated rhythmic pattern that provides the characteristic "hop" or "limp" to the Tango pulse. Listen for the dotted eighth note followed by the sixteenth note.</p>

  <div class="abc-score-container card p-6 bg-white dark:bg-slate-800 overflow-x-auto shadow-inner border-2 border-slate-100 dark:border-slate-700">
    <div class="abc-score" data-abc='
X:1
T:Tango Habanera Rhythm
M:2/4
L:1/8
K:C
G\u003eF EE | G\u003eF EE ||
w: 1-and-a 2-and | 1-and-a 2-and
'></div>
  </div>

  <h3>Astor Piazzolla and "Nuevo Tango"</h3>
  <p>In the 1950s, <strong>Astor Piazzolla</strong> revolutionized the genre by blending traditional Tango with elements of Jazz and Classical music, introducing dissonance, complex counterpoint, and concert-style arrangements.</p>
</section>
`,
      longDescription_zh: `探戈是世界上最著名且最具戏剧性的舞蹈风格之一，19世纪末起源于阿根廷布宜诺斯艾利斯和乌拉圭蒙得维的亚的郊区。探戈音乐以其强烈的节奏感、戏剧性的动态变化以及班多钮手风琴独特的音色而闻名。关键特征包括2/4或4/4拍子、大量使用断奏和重音，以及基础的哈巴涅拉节奏。`
    },
    {
      id: 'bandoneon', title: 'Bandoneon', title_zh: '班多钮手风琴', path: '/term/bandoneon', isTerm: true,
      content: 'The main instrument in Tango.',
      content_zh: '探戈中的主要乐器。',
      longDescription: `The bandoneon is a type of concertina (like an accordion with buttons instead of a keyboard) that is essential to the sound of Tango music. It can play melodies and chords and has a very expressive sound.`,
      longDescription_zh: `班多钮手风琴是一种六角手风琴（类似于用按钮代替键盘的手风琴），对探戈音乐的声音至关重要。它可以演奏旋律与和弦，并具有非常富有表现力的声音。`
    },
    {
      id: 'aos5-salsa', title: 'Focus Area: Salsa', title_zh: '重点领域：萨尔萨', path: '/areas-of-study/dance/salsa',
      content: 'High-energy Latin dance music built on the Clave rhythm.',
      content_zh: '基于克拉维节奏的高能量拉丁舞曲。',
      quiz: salsaQuiz,
      longDescription: `
<section>
  <p>Salsa is an energetic, polyrhythmic dance music that emerged in the 1960s, primarily in <strong>New York City</strong>, through the blending of Cuban (Son), Puerto Rican, and American Jazz influences.</p>

  <div class="grid">
    <div class="card">
      <h3>The Core: The Clave</h3>
      <p>The <strong>Clave</strong> is the rhythmic foundation. All other parts must align with it. The most common is the "Son Clave," which can be 3-2 or 2-3.</p>
      <ul>
        <li><strong>Structural Rhythm:</strong> A two-measure pattern.</li>
        <li><strong>Instruments:</strong> Claves (wooden sticks).</li>
      </ul>
    </div>
    <div class="card">
      <h3>Key Sections</h3>
      <ul>
        <li><strong>Verse (Cuerpo):</strong> The narrative part of the song.</li>
        <li><strong>Montuno:</strong> The high-energy section featuring call-and-response and solos.</li>
        <li><strong>Mambo/Moña:</strong> Powerful brass riffs between vocal sections.</li>
      </ul>
    </div>
  </div>

  <h2>Musical Example: The 2-3 Son Clave</h2>
  <p>Notice the syncopated "3" side and the steady "2" side. This pattern keeps the entire band in sync.</p>

  <div class="abc-score-container card p-6 bg-white dark:bg-slate-800 overflow-x-auto shadow-inner border-2 border-slate-100 dark:border-slate-700">
    <div class="abc-score" data-abc='
X:1
T:2-3 Son Clave
M:4/4
L:4
K:C
z c c z | c z c z ||
'></div>
  </div>

  <h3>Instrumentation</h3>
  <p>Salsa features a rich percussion section: <strong>Congas</strong> (playing the Tumbao), <strong>Timbales</strong> (leading sections with cowbells), and <strong>Bongos</strong> (Martillo rhythm). The harmonic foundation is provided by the <strong>Piano montuno</strong> and the <strong>anticipated bass</strong>.</p>
</section>
`,
      longDescription_zh: `萨尔萨是一种充满活力的复节奏舞曲，20世纪60年代主要出现在纽约市，融合了古巴（颂乐）、波多黎各和美国爵士乐的影响。克拉维（Clave）节奏是萨尔萨的灵魂，所有其他乐器声部都必须与其保持一致。`
    },
    {
      id: 'claves-cuatro', title: 'Clavés and Cuatro', title_zh: '音棒与四弦吉他', path: '/term/claves-cuatro', isTerm: true,
      content: 'Important Salsa instruments.',
      content_zh: '重要的萨尔萨乐器。',
      longDescription: `Clavés are two wooden sticks that play a key rhythmic pattern in Salsa called the clave rhythm. The cuatro is a small, guitar-like instrument with ten strings, common in Puerto Rican music that influenced Salsa.`,
      longDescription_zh: `音棒是两根木棍，在萨尔萨中演奏一种名为克拉维节奏的关键节奏型。四弦吉他是一种有十根弦的小型吉他类乐器，在影响了萨尔萨的波多黎各音乐中很常见。`
    },
    {
      id: 'aos5-edm', title: 'Focus Area: EDM (Electronic Dance Music)', title_zh: '重点领域：电子舞曲 (EDM)', path: '/areas-of-study/dance/edm',
      content: 'Modern dance music produced using digital technology.',
      content_zh: '使用数字技术制作的现代舞曲。',
      quiz: edmQuiz,
      longDescription: `
<section>
  <p>Electronic Dance Music (EDM) covers a vast range of genres (House, Techno, Trance, Dubstep, DnB) united by their production method: the use of <strong>Digital Audio Workstations (DAWs)</strong> and synthesizers.</p>

  <div class="grid">
    <div class="card">
      <h3>Key Production Techniques</h3>
      <ul>
        <li><strong>Four-on-the-floor:</strong> A steady kick on every beat (120-130 BPM in House).</li>
        <li><strong>Build-ups:</strong> Increasing tension through rising pitch and faster rhythms.</li>
        <li><strong>The Drop:</strong> The climax where the full beat and main melody return.</li>
        <li><strong>Sidechaining:</strong> "Pumping" effect where bass ducks under the kick.</li>
      </ul>
    </div>
    <div class="card">
      <h3>Electronic Elements</h3>
      <ul>
        <li><strong>Synthesizers:</strong> Creating Lead, Pad, and Bass sounds.</li>
        <li><strong>Drum Machines:</strong> Iconic sounds like the TR-808 and TR-909.</li>
        <li><strong>Sampling:</strong> Reusing recorded sounds (vocals, loops) in new ways.</li>
      </ul>
    </div>
  </div>

  <h2>Structure and Flow</h2>
  <p>EDM tracks are often built for <strong>Club Mixing</strong>, featuring an intro/outro with minimal percussion to allow DJs to blend tracks. The energy is managed through carefully placed "Breakdowns" where beats drop out, followed by "Builds" and the final "Drop."</p>
</section>
`,
      longDescription_zh: `电子舞曲（EDM）涵盖了广泛的流派（如浩室、铁克诺、出神、回响贝斯），它们通过相同的制作方法联系在一起：使用数字音频工作站（DAW）和合成器。核心技术包括“四四拍”踢鼓节奏、高潮构建、高潮释放和侧链压缩等。`
    },
    {
      id: 'synthesizer-daw', title: 'Synthesisers and DAWs', title_zh: '合成器与数字音频工作站', path: '/term/synthesizer-daw', isTerm: true,
      content: 'Tools for making EDM.',
      content_zh: '制作电子舞曲的工具。',
      longDescription: `Synthesisers create electronic sounds. Digital Audio Workstations (DAWs) are computer programmes used to record, edit, and produce EDM tracks. These are key tools for EDM artists.`,
      longDescription_zh: `合成器创造电子声音。数字音频工作站（DAW）是用于录制、编辑和制作电子舞曲曲目的计算机程序。这些是电子舞曲艺术家的关键工具。`
    },
    {
      id: 'aos5-starting-points', title: 'Starting Points (Wider Listening)', title_zh: '起点 (扩展聆听)', path: '/areas-of-study/dance/starting-points',
      content: 'Examples of dance music to listen to.',
      content_zh: '可供聆听的舞曲范例。',
      longDescription: `Listen to these examples: Piazzolla's "Libertango" (Tango), Hector Lavoe's "El Cantante" (Salsa), and F-777's "Viking Arena" (EDM).`,
      longDescription_zh: `聆听这些范例：皮亚佐拉的《自由探戈》（探戈）、赫克托·拉沃的《歌手》（萨尔萨），以及F-777的《维京竞技场》（电子舞曲）。`
    },
    aos5DetailedContent,
  ]
};

