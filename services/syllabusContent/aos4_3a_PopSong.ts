import { SyllabusItem } from '../../types';
import { popSongIntroductionPage } from './aos4_3a/introduction';
import { popSongMelodyPage } from './aos4_3a/melody';
import { popSongStructurePage } from './aos4_3a/structure';
import { popSongTempoPage } from './aos4_3a/tempo';

export const popSongAoS: SyllabusItem = {
  id: 'aos4-3a-pop-song',
  title: 'AOS4.3A: Pop Song',
  title_zh: 'AOS4.3A：流行歌曲',
  path: '/areas-of-study/aos4-music-and-words/aos4-3a-pop-song',
  content: 'Popular music from the 20th and 21st centuries with focus on commercial appeal.',
  content_zh: '20世纪和21世纪的流行音乐，重点关注商业吸引力。',
  longDescription: `**AOS4.3A: Pop Song - A Focus Area within Music and Words**

This focus area explores popular music as a form of musical expression that combines words and music for mass appeal. Pop songs are characterized by their accessibility, commercial viability, and cultural relevance. Unlike art songs which are often written for trained classical singers, pop songs are designed to be performed and enjoyed by a broad audience.

**Key Characteristics of Pop Songs:**

**Commercial Appeal:**
*   Written with mass market success in mind
*   Designed to be memorable and easily singable
*   Often follow proven formulas for structure and melody
*   Typically 3-5 minutes in length for radio play

**Accessibility:**
*   Use familiar chord progressions and scales
*   Vocal melodies within comfortable singing ranges
*   Clear, understandable lyrics in everyday language
*   Repetitive elements that aid memorability

**Cultural Relevance:**
*   Reflect contemporary social issues and experiences
*   Appeal to specific demographic groups, especially youth
*   Often become associated with particular time periods or movements
*   Influence and are influenced by fashion, technology, and social trends

This area of study will examine how pop songs balance artistic expression with commercial considerations, and how they use familiar musical languages to communicate with broad audiences while still creating memorable and meaningful musical experiences.`,
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