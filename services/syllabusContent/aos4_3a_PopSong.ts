import { SyllabusItem } from '../../types';
import { popSongIntroductionPage } from './aos4_3a/introduction';
import { popSongKeyFeaturesPage } from './aos4_3a/keyFeatures';
import { popSongFocusWork1Page } from './aos4_3a/focusWork1';
import { popSongFocusWork2Page } from './aos4_3a/focusWork2';
import { popSongWiderListeningPage } from './aos4_3a/widerListening';
import { popSongFinalExamPage } from './aos4_3a/finalExam';

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

**Musical Elements in Pop Songs:**

**Structure:**
*   **Verse-Chorus Form:** Most common structure with alternating verses and choruses
*   **Bridge/Middle 8:** Contrasting section that provides variety
*   **Pre-Chorus:** Optional section that builds anticipation for the chorus
*   **Intro/Outro:** Short instrumental sections that frame the song

**Melody:**
*   Designed for singability and memorability
*   Often use stepwise motion with occasional leaps
*   Chorus melodies typically higher and more energetic than verses
*   Use of hooks - short, catchy melodic phrases

**Harmony:**
*   Based on major and minor tonalities
*   Common progressions: I-V-vi-IV, vi-IV-I-V, I-vi-ii-V
*   Use of seventh chords for sophistication
*   Modal inflections in some genres

**Rhythm:**
*   Strong, steady beat usually in 4/4 time
*   Emphasis on beats 2 and 4 (backbeat)
*   Syncopation for rhythmic interest
*   Groove patterns specific to different pop styles

**Lyrics and Word-Music Relationships:**

**Lyrical Themes:**
*   Love and relationships (most common)
*   Personal empowerment and self-expression
*   Social issues and political commentary
*   Youth culture and rebellion
*   Escapism and fantasy

**Text Setting:**
*   Primarily syllabic (one note per syllable) for clarity
*   Occasional melismatic passages for emotional emphasis
*   Repetition of key phrases in choruses
*   Use of rhyme schemes to aid memorability

**Word-Painting:**
*   Less common than in art songs but still present
*   Often achieved through production techniques rather than melody
*   Examples: echo effects on words like "echo," distortion for aggressive emotions
*   Rhythmic word-painting: fast rhythms for excitement, slow for sadness

**Production and Technology:**

**Recording Techniques:**
*   Multi-track recording allowing for complex arrangements
*   Use of compression to even out dynamics
*   Reverb and delay for spatial effects
*   Auto-tune and pitch correction for vocal perfection

**Instrumentation:**
*   **Rhythm Section:** Drums, bass, guitar, keyboards
*   **Lead Instruments:** Electric guitar, synthesizers, vocals
*   **Additional Elements:** Strings, horns, electronic sounds
*   **Modern Additions:** Samples, loops, programmed elements

**Vocal Style:**
*   Wide range of techniques from smooth crooning to aggressive belting
*   Use of vocal effects: vibrato, growls, falsetto
*   Conversational delivery in some genres (rap, spoken word)
*   Emphasis on personality and emotional connection

**Evolution of Pop Song:**

**1950s-1960s:** Rock and roll, Motown, British Invasion
**1970s:** Disco, punk, progressive rock
**1980s:** New wave, synth-pop, MTV era
**1990s:** Grunge, hip-hop, Britpop
**2000s:** Digital revolution, auto-tune, reality TV influence
**2010s-Present:** Streaming era, social media influence, genre blending

**Analysis Approach:**

When studying pop songs, consider:
*   **Musical Structure:** How verses, choruses, and bridges are organized
*   **Melodic Content:** Catchiness, range, and memorable phrases
*   **Harmonic Language:** Chord progressions and their emotional effects
*   **Rhythmic Elements:** Beat, groove, and syncopation
*   **Lyrical Content:** Themes, rhyme schemes, and emotional impact
*   **Production Style:** Use of technology and effects
*   **Cultural Context:** When and why the song was popular
*   **Performance Practice:** Live vs. recorded versions

**Relationship to Other AOS4 Areas:**

Pop songs share characteristics with other Music and Words focus areas:
*   **Art Song:** Both combine words and music, but pop prioritizes accessibility
*   **Choral Music:** Some pop songs feature backing vocals or choir-like arrangements
*   **Musical Theatre:** Pop songs may be featured in musicals, and musical theatre influences pop

Understanding pop songs provides insight into how music functions in contemporary culture and how commercial considerations shape artistic expression.`,
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

**流行歌曲中的音乐元素：**

**结构：**
*   **主歌-副歌形式：** 最常见的结构，主歌和副歌交替出现
*   **桥段/中间8小节：** 提供变化的对比段落
*   **预副歌：** 为副歌营造期待的可选段落
*   **前奏/尾奏：** 框架歌曲的短器乐段落

**旋律：**
*   为可唱性和易记性而设计
*   通常使用级进运动，偶有跳跃
*   副歌旋律通常比主歌更高、更有活力
*   使用钩子 - 短小、朗朗上口的旋律短语

**和声：**
*   基于大调和小调调性
*   常见进行：I-V-vi-IV、vi-IV-I-V、I-vi-ii-V
*   使用七和弦增加复杂性
*   某些风格中的调式变化

**节奏：**
*   强烈、稳定的节拍，通常为4/4拍
*   强调第2和第4拍（反拍）
*   切分音增加节奏趣味
*   不同流行风格特有的律动模式

**歌词和词乐关系：**

**歌词主题：**
*   爱情和关系（最常见）
*   个人赋权和自我表达
*   社会问题和政治评论
*   青年文化和反叛
*   逃避现实和幻想

**歌词设定：**
*   主要为音节式（每个音节一个音符）以确保清晰度
*   偶尔的花腔段落用于情感强调
*   副歌中关键短语的重复
*   使用韵律方案帮助记忆

**音画法：**
*   比艺术歌曲中少见但仍然存在
*   通常通过制作技术而非旋律实现
*   例子："回声"等词使用回声效果，激进情感使用失真
*   节奏音画法：快节奏表现兴奋，慢节奏表现悲伤

**制作和技术：**

**录音技术：**
*   多轨录音允许复杂编配
*   使用压缩平衡动态
*   混响和延迟创造空间效果
*   自动调音和音高校正实现声乐完美

**乐器编制：**
*   **节奏组：** 鼓、贝斯、吉他、键盘
*   **主奏乐器：** 电吉他、合成器、人声
*   **附加元素：** 弦乐、铜管、电子声音
*   **现代添加：** 采样、循环、程序化元素

**声乐风格：**
*   从平滑的低吟到激进的高声演唱的广泛技巧
*   使用声乐效果：颤音、咆哮、假声
*   某些风格中的对话式表达（说唱、口语）
*   强调个性和情感连接

**流行歌曲的演变：**

**1950-1960年代：** 摇滚乐、摩城、英国入侵
**1970年代：** 迪斯科、朋克、前卫摇滚
**1980年代：** 新浪潮、合成器流行、MTV时代
**1990年代：** 垃圾摇滚、嘻哈、英式流行
**2000年代：** 数字革命、自动调音、真人秀影响
**2010年代至今：** 流媒体时代、社交媒体影响、风格融合

**分析方法：**

学习流行歌曲时，考虑：
*   **音乐结构：** 主歌、副歌和桥段如何组织
*   **旋律内容：** 朗朗上口程度、音域和难忘短语
*   **和声语言：** 和弦进行及其情感效果
*   **节奏元素：** 节拍、律动和切分音
*   **歌词内容：** 主题、韵律方案和情感影响
*   **制作风格：** 技术和效果的使用
*   **文化背景：** 歌曲流行的时间和原因
*   **演奏实践：** 现场与录音版本

**与其他AOS4领域的关系：**

流行歌曲与其他音乐与文字重点领域共享特征：
*   **艺术歌曲：** 两者都结合文字和音乐，但流行音乐优先考虑易接受性
*   **合唱音乐：** 一些流行歌曲具有背景人声或类似合唱的编配
*   **音乐剧：** 流行歌曲可能出现在音乐剧中，音乐剧影响流行音乐

理解流行歌曲提供了对音乐如何在当代文化中发挥作用以及商业考虑如何塑造艺术表达的洞察。`,
  children: [
    popSongIntroductionPage,
    popSongKeyFeaturesPage,
    popSongFocusWork1Page,
    popSongFocusWork2Page,
    popSongWiderListeningPage,
    popSongFinalExamPage,
  ]
};