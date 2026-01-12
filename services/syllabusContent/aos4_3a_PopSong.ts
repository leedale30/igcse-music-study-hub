
import { SyllabusItem } from '../../types';
import { popSongQuiz } from '../quizzes/aos4_quizzes';

export const popSongAoS: SyllabusItem = {
  id: 'aos4-3a-pop-song',
  title: 'AOS4.3A: Pop Song',
  title_zh: 'AOS4.3A：流行歌曲',
  path: '/areas-of-study/aos4-music-and-words/aos4-3a-pop-song',
  content: 'Popular music from the 20th and 21st centuries with focus on commercial appeal.',
  content_zh: '20世纪和21世纪的流行音乐，重点关注商业吸引力。',
  quiz: popSongQuiz,
  longDescription: `
<section>
  <p>Pop music is built on <strong>Commercial Appeal</strong> and <strong>Accessibility</strong>. Songs are designed to be "earworms" that stick in the listener's head through the use of catchy <strong>Hooks</strong> and familiar <strong>Structures</strong>.</p>

  <div class="grid">
    <div class="card">
      <h3>Key Structures</h3>
      <ul>
        <li><strong>Verse:</strong> Tells the story/narrative.</li>
        <li><strong>Chorus:</strong> The main hook, highest energy, repetitive.</li>
        <li><strong>Bridge/Middle Eight:</strong> Provides contrast before the final payoff.</li>
      </ul>
    </div>
    <div class="card">
      <h3>Musical Elements</h3>
      <ul>
        <li><strong>Harmony:</strong> Heavily reliant on the I, IV, V, and vi chords.</li>
        <li><strong>Rhythm:</strong> Usually a steady 4/4 with strong backbeats.</li>
      </ul>
    </div>
  </div>

  <h2>Musical Example: A "Standard" Pop Hook</h2>
  <p>This melody uses a typical syncopated rhythm and simple intervals to create a memorable hook over a C major - G major - A minor - F major progression.</p>

  <div class="abc-score-container card p-6 bg-white dark:bg-slate-800 overflow-x-auto shadow-inner border-2 border-slate-100 dark:border-slate-700">
    <div class="abc-score" data-abc='
X:1
T:Standard Pop Hook
M:4/4
L:1/8
K:C
"C" G2 E2 F2 GE | "G" D4 z4 | "Am" E2 C2 D2 EC | "F" D4 z4 ||
w: I can feel it now, oh yeah. High-er than the clouds.
'></div>
  </div>
</section>
`,
  longDescription_zh: `**AOS4.3A：流行歌曲 - 音乐与文字中的重点领域**

本重点领域探讨流行音乐作为一种结合文字和音乐以获得大众吸引力的音乐表达形式。流行歌曲的特点是易于接受、商业可行性和文化相关性。与通常为受过训练的古典歌手创作的艺术歌曲不同，流行歌曲旨在被广大听众演奏和欣赏。

**流行歌曲的关键特征：**

**商业吸引力：**
*   以大众市场成功为目标创作
*   设计得令人难忘且易于演唱
*   通常遵循经过验证的结构和旋律公式
*   通常长度为3-5分钟以适合电台播放

**易于接受：**
*   使用熟悉的和弦进行和音阶
*   声乐旋律在舒适的演唱音域内
*   清晰、易懂的日常语言歌词
*   有助于记忆的重复元素

**文化相关性：**
*   反映当代社会问题和经历
*   吸引特定人群，尤其是年轻人
*   经常与特定时期或运动相关联
*   影响并受到时尚、技术和社会趋势的影响

本学习领域将检查流行歌曲如何平衡艺术表达与商业考虑，以及它们如何使用熟悉的音乐语言与广大听众交流，同时仍然创造难忘和有意义的音乐体验。`,
  children: [
    popSongIntroductionPage,
    popSongMelodyPage,
    popSongStructurePage,
    popSongTempoPage
  ]
};