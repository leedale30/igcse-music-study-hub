import { SyllabusItem } from '../../../../types';
import { majorMinorScalesQuiz } from '../../../quizzes/aos1/key_features';

export const majorMinorScalesTerm: SyllabusItem = {
    id: 'major-minor-scales-term',
    title: 'Major and Minor Scales',
    title_zh: '大调与小调音阶',
    path: '/term/major-minor-scales',
    isTerm: true,
    content: 'The building blocks of Baroque tonality.',
    content_zh: '巴洛克调性的基石。',
    longDescription: `**Major and Minor Scales: A Comprehensive Guide**

The Baroque era was a crucial time when the **major-minor tonal system** became the main way of organizing music, moving away from the older system of church modes. The building blocks of this system are the major and minor scales. Understanding them is key to understanding Baroque harmony and melody.

**What is a Scale?**
A scale is a set of musical notes ordered by pitch. In the major-minor system, scales are typically made up of seven different notes (plus the final note, which is the starting note an octave higher).

**The Major Scale**
The major scale is often described as sounding **bright, happy, or triumphant**. Its unique sound comes from its specific pattern of whole steps (W) and half steps (H) between the notes.
*   **Pattern:** **W-W-H-W-W-W-H**
*   **Example (C Major):** C-D-E-F-G-A-B-C.
    *   C to D is a whole step.
    *   D to E is a whole step.
    *   E to F is a half step (no black key in between on a piano).
    *   F to G is a whole step.
    *   G to A is a whole step.
    *   A to B is a whole step.
    *   B to C is a half step.
*   **Function:** Music in a major key is built using the notes and chords from its corresponding major scale. The first note of the scale (the tonic) is the "home" note.

**The Minor Scale**
The minor scale is often described as sounding **sad, serious, or dramatic**. There are a few different versions, but the most important one to understand for Baroque harmony is the **harmonic minor scale**.

*   **Natural Minor:** This scale has a pattern of **W-H-W-W-H-W-W**.
    *   **Example (A Natural Minor):** A-B-C-D-E-F-G-A.
    *   Notice that these are the same notes as C major, but starting and ending on A. A minor is the **relative minor** of C major.

*   **Harmonic Minor:** Baroque composers needed a stronger pull to the tonic note in minor keys. To do this, they sharpened the 7th note of the natural minor scale. This creates a strong "leading note" that wants to resolve to the tonic.
    *   **Pattern:** The pattern is the same as natural minor, but with a raised 7th degree.
    *   **Example (A Harmonic Minor):** A-B-C-D-E-F-**G♯**-A.
    *   That G♯ creates a half step to the tonic A, making the dominant chord (which contains G♯) sound much stronger when it leads back home to the A minor chord. This raised 7th is a crucial ingredient in Baroque minor-key harmony.

*   **Melodic Minor:** To avoid the awkward melodic jump between the 6th and 7th notes of the harmonic minor (F to G♯ in our example), composers often raised the 6th note as well when the melody was ascending. When descending, they would often revert to the natural minor form.
    *   **Example (A Melodic Minor):**
        *   **Ascending:** A-B-C-D-E-**F♯**-**G♯**-A
        *   **Descending:** A-**G**-**F**-E-D-C-B-A (same as natural minor)

**Why was this important in the Baroque Era?**
The clear distinction between major and minor scales allowed composers to create strong emotional contrasts (see **Doctrine of Affections**). The system of keys, built on these scales, provided a logical framework for harmony and modulation, allowing for the construction of large, coherent musical forms like concertos, fugues, and operas. The development of the harmonic minor scale, in particular, was vital for creating the strong tonic-dominant relationships that drive Baroque music forward.`,
    longDescription_zh: `**大调与小调音阶：综合指南**

巴洛克时期是一个关键时期，**大小调体系**成为组织音乐的主要方式，逐渐取代了旧的教会调式体系。这个体系的基石是大调和小调音阶。理解它们是理解巴洛克和声与旋律的关键。

**什么是音阶？**
音阶是按音高顺序排列的一组音符。在大小调体系中，音阶通常由七个不同的音符组成（加上最后一个音符，即高一个八度的起始音）。

**大调音阶**
大调音阶通常被描述为听起来**明亮、快乐或胜利的**。其独特的声音来自于音符之间特定的全音（W）和半音（H）模式。
*   **模式：** **W-W-H-W-W-W-H**
*   **示例（C大调）：** C-D-E-F-G-A-B-C。
    *   C到D是全音。
    *   D到E是全音。
    *   E到F是半音（在钢琴上之间没有黑键）。
    *   F到G是全音。
    *   G到A是全音。
    *   A到B是全音。
    *   B到C是半音。
*   **功能：** 大调音乐使用其相应大调音阶的音符和和弦构建。音阶的第一个音（主音）是“家”音。

**小调音阶**
小调音阶通常被描述为听起来**悲伤、严肃或戏剧性的**。有几种不同的版本，但对于理解巴洛克和声最重要的是**和声小调音阶**。

*   **自然小调：** 这个音阶的模式是**W-H-W-W-H-W-W**。
    *   **示例（a自然小调）：** A-B-C-D-E-F-G-A。
    *   注意，这些音符与C大调相同，但从A开始和结束。a小调是C大调的**关系小调**。

*   **和声小调：** 巴洛克作曲家需要在小调中对主音有更强的导向力。为此，他们将自然小调的第7个音升高。这创造了一个强烈的“导音”，想要解决到主音。
    *   **模式：** 模式与自然小调相同，但第7级音升高。
    *   **示例（a和声小调）：** A-B-C-D-E-F-**G♯**-A。
    *   那个G♯创造了到主音A的半音，使得属和弦（包含G♯）在导回主音a小调和弦时听起来更强。这个升高的第7音是巴洛克小调和声的关键成分。

*   **旋律小调：** 为了避免和声小调第6音和第7音之间尴尬的旋律跳跃（在我们的例子中是F到G♯），作曲家在旋律上行时通常也会升高第6音。在下行时，他们通常会恢复到自然小调的形式。
    *   **示例（a旋律小调）：**
        *   **上行：** A-B-C-D-E-**F♯**-**G♯**-A
        *   **下行：** A-**G**-**F**-E-D-C-B-A（与自然小调相同）

**为什么这在巴洛克时期很重要？**
大调和小调音阶之间的清晰区别使作曲家能够创造强烈的情感对比（见**情感论**）。建立在这些音阶上的调性体系为和声和转调提供了逻辑框架，允许构建像协奏曲、赋格曲和歌剧这样的大型、连贯的音乐形式。特别是和声小调音阶的发展，对于创造驱动巴洛克音乐前进的强烈主-属关系至关重要。`,
    quiz: majorMinorScalesQuiz
};