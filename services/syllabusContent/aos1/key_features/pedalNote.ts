import { SyllabusItem } from '../../../../types';
import { pedalNoteTermQuiz } from '../../../quizzes/aos1/key_features';

export const pedalNoteTerm: SyllabusItem = {
    id: 'pedal-note-term', 
    title: 'Pedal Notes', 
    title_zh: '持续音',
    path: '/term/pedal-note', 
    isTerm: true,
    content: 'A sustained or repeated note, usually in the bass.',
    content_zh: '一个持续或重复的音符，通常在低音部。',
    longDescription: `**Pedal Notes: A Comprehensive Guide**

A **pedal note** (also known as a **pedal point**) is a long-held or continuously repeated note, most often found in the bass register. While this single note is sustained, the harmonies in the upper parts change, often creating dissonance with the pedal before resolving.

**Where does the name come from?**
The term originates from organ music. An organist can hold down a bass note with their foot on a pedal, sustaining the sound, while their hands are free to play changing chords and melodies on the keyboard manuals.

**What is the function of a Pedal Note?**
Pedal notes serve two main harmonic functions:

*   **Creating Stability:** By holding a key note of the scale (usually the tonic), a pedal can firmly anchor the music in its home key. This provides a solid foundation over which other harmonies can move. A **tonic pedal** (holding the 'home' note) is often used at the beginning or end of a piece to establish or confirm the tonality.
*   **Creating Tension:** When the chords played above the pedal note clash with it, a pedal can build immense harmonic tension. The listener's ear holds onto the sustained bass note while hearing dissonant chords above it, creating a desire for resolution. A **dominant pedal** (holding the 5th note of the scale) is a classic way to build tension and create a powerful sense of anticipation for a return to the tonic chord.

**Examples in Baroque Music:**
You can hear pedal notes frequently in the works of J.S. Bach:
*   **Fugues:** Many of Bach's fugues end with a powerful tonic pedal in the bass to signal the final, emphatic conclusion of the piece.
*   **Toccata and Fugue in D minor, BWV 565:** This famous organ work uses pedal notes extensively to create drama and grandeur.
*   **Preludes:** A dominant pedal is often used near the end of a prelude to prepare for the start of the fugue in the tonic key.

Though named after the organ, pedal notes are used by all instruments, from string orchestras to harpsichords (by repeatedly playing the note). It is a powerful harmonic tool that has been used by composers for centuries.

**Educational Videos**

<iframe width="560" height="315" src="https://www.youtube.com/embed/WjMO4hb7sQM" title="How Does a Pedal Point Work? - Music Theory" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*This video by Music Matters provides a clear explanation of how pedal points work in music theory, demonstrating their harmonic function and effect.*

<iframe width="560" height="315" src="https://www.youtube.com/embed/3aiq-sd7CgU" title="Lesson 4.5.5: NCTs - The Pedal Point" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*Mr. Clark Music Theory delivers a comprehensive lesson on pedal points as non-chord tones, explaining their theoretical foundation and practical application.*`,
    longDescription_zh: `**持续音：综合指南**

**持续音**（也称为**踏板音**）是一个长时间保持或连续重复的音符，最常出现在低音区。当这个单音持续时，上方的和声会发生变化，常常与持续音形成不协和音，然后解决。

**这个名字从何而来？**
该术语源于管风琴音乐。管风琴演奏者可以用脚踩住一个踏板来保持一个低音音符，维持声音，而双手则可以在键盘上自由地演奏变化的和弦和旋律。

**持续音的功能是什么？**
持续音主要有两个和声功能：

*   **创造稳定性：** 通过保持音阶的一个关键音（通常是主音），持续音可以牢固地将音乐锚定在其主调中。这为其他和声的运动提供了一个坚实的基础。**主音持续音**（保持“家”音）常用于作品的开头或结尾，以建立或确认调性。
*   **创造张力：** 当持续音上方的和弦与它冲突时，持续音可以建立巨大的和声张力。听众的耳朵会抓住持续的低音音符，同时听到上方的不协和和弦，从而产生解决的渴望。**属音持续音**（保持音阶的第5个音）是建立张力并为回归主和弦创造强烈期待感的经典手法。

**巴洛克音乐中的范例：**
你可以在J.S.巴赫的作品中频繁地听到持续音：
*   **赋格曲：** 许多巴赫的赋格曲都以低音部强有力的主音持续音结束，以标志作品最后、有力的结论。
*   **d小调托卡塔与赋格，BWV 565：** 这部著名的管风琴作品广泛使用持续音来创造戏剧性和宏伟感。
*   **前奏曲：** 属音持续音常用于前奏曲的结尾附近，为赋格曲在主调上的开始做准备。

尽管以管风琴命名，但持续音被所有乐器使用，从弦乐团到羽管键琴（通过重复演奏音符）。这是一个强大的和声工具，几个世纪以来一直被作曲家使用。

**教育视频**

<iframe width="560" height="315" src="https://www.youtube.com/embed/WjMO4hb7sQM" title="How Does a Pedal Point Work? - Music Theory" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*Music Matters的这个视频清楚地解释了踏板音在音乐理论中的工作原理，展示了它们的和声功能和效果。*

<iframe width="560" height="315" src="https://www.youtube.com/embed/3aiq-sd7CgU" title="Lesson 4.5.5: NCTs - The Pedal Point" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*Mr. Clark Music Theory提供了关于踏板音作为非和弦音的全面课程，解释了它们的理论基础和实际应用。*`,
    quiz: pedalNoteTermQuiz
};