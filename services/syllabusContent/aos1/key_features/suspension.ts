import { SyllabusItem } from '../../../../types';
import { suspensionTermQuiz } from '../../../quizzes/aos1/key_features';

export const suspensionTerm: SyllabusItem = {
    id: 'suspension-term', 
    title: 'Suspensions', 
    title_zh: '悬留音',
    path: '/term/suspension', 
    isTerm: true,
    content: 'A key expressive device in Baroque harmony.',
    content_zh: '巴洛克和声中的一个关键表现手法。',
    longDescription: `**Suspensions: A Comprehensive Guide**

A **suspension** is one of the most common and expressive harmonic devices in Baroque music. It's a type of dissonance that creates a moment of tension and then releases it in a satisfying way, often producing a "yearning" or poignant sound. A true suspension always follows a three-step pattern:

**1. Preparation:**
The note that will become the dissonance is first heard as a normal, consonant part of a chord. This is the 'setup'.

**2. Suspension (The Dissonance):**
While the other parts move to a new chord, the prepared note is held over (suspended). In this new harmonic context, the held note becomes dissonant (it clashes with the new chord). This is the moment of tension.

**3. Resolution:**
The dissonant suspended note then moves, almost always **downwards by step**, to a note that is consonant with the new chord. This is the moment of release and satisfaction.

**How are Suspensions Named?**
Suspensions are named by the numeric intervals formed between the suspended note and the bass note, from the point of dissonance to the point of resolution.
*   **4-3 Suspension:** This is one of the most common types. The suspended note is a 4th above the bass, which then resolves down to a 3rd above the bass.
*   **7-6 Suspension:** The suspended note is a 7th above the bass, resolving down to a 6th.
*   **9-8 Suspension:** The suspended note is a 9th above the bass, resolving down to an 8th (an octave).
*   **2-3 Suspension (Bass Suspension):** This is a less common type where the dissonant note is in the bass and resolves *upwards* by step.

**Why are they so important in Baroque music?**
Composers like Bach and Handel used suspensions constantly. They are a fundamental part of the contrapuntal language of the era. They add emotional depth, highlight important words in vocal music (word-painting), and create a smooth, flowing harmonic progression. Listening for suspensions is a key way to appreciate the intricate beauty and emotional power of Baroque harmony.

**Educational Videos:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/et76eSnkCP8" title="Music Theory Tip: Suspensions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This video by Deciphering Guitar and Music Theory provides a clear explanation of how suspensions work in music theory, demonstrating the three-step process and their emotional impact.

<iframe width="560" height="315" src="https://www.youtube.com/embed/LmdTdM1gHks" title="Suspension or Appoggiatura? - Music Theory" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This video by Music Matters explores the difference between suspensions and appoggiaturas, helping you understand these related but distinct harmonic devices.`,
    longDescription_zh: `**悬留音：综合指南**

**悬留音**是巴洛克音乐中最常见和最具表现力的和声手法之一。它是一种不协和音，能创造一个紧张的瞬间，然后以令人满意的方式解决，通常产生一种“渴望”或凄美的声音。一个真正的悬留音总是遵循一个三步模式：

**1. 准备：**
将要成为不协和音的音符首先作为和弦的一个正常的、协和的部分出现。这是“设置”阶段。

**2. 悬留（不协和）：**
当其他声部移动到一个新的和弦时，准备好的音符被保持（悬留）。在这个新的和声背景下，被保持的音符变得不协和（它与新和弦冲突）。这是紧张的时刻。

**3. 解决：**
不协和的悬留音符随后移动，几乎总是**向下级进**，到一个与新和弦协和的音符。这是释放和满足的时刻。

**悬留音是如何命名的？**
悬留音根据悬留音符与低音音符之间形成的数字音程来命名，从不协和点到解决点。
*   **4-3 悬留音：** 这是最常见的类型之一。悬留音符是低音上方的四度音，然后向下解决到低音上方的三度音。
*   **7-6 悬留音：** 悬留音符是低音上方的七度音，向下解决到六度音。
*   **9-8 悬留音：** 悬留音符是低音上方的九度音，向下解决到八度音（一个八度）。
*   **2-3 悬留音（低音悬留音）：** 这是一种较不常见的类型，其中不协和音符在低音部，并*向上*级进解决。

**为什么它们在巴洛克音乐中如此重要？**
像巴赫和亨德尔这样的作曲家经常使用悬留音。它们是那个时代对位语言的基本组成部分。它们增加了情感深度，在声乐中突出了重要的词语（音画法），并创造了平滑、流动的和声进行。聆听悬留音是欣赏巴洛克和声错综复杂之美和情感力量的关键方式。

**教学视频：**

<iframe width="560" height="315" src="https://www.youtube.com/embed/et76eSnkCP8" title="Music Theory Tip: Suspensions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

这个由Deciphering Guitar and Music Theory制作的视频清楚地解释了悬留音在音乐理论中的工作原理，演示了三步过程及其情感影响。

<iframe width="560" height="315" src="https://www.youtube.com/embed/LmdTdM1gHks" title="Suspension or Appoggiatura? - Music Theory" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

这个由Music Matters制作的视频探讨了悬留音和倚音之间的区别，帮助您理解这些相关但不同的和声手法。`,
    quiz: suspensionTermQuiz
};