import { SyllabusItem } from '../../../../../types';
import { naturalTrumpetQuiz } from '../../../../quizzes/aos1/key_features';

export const naturalTrumpetTerm: SyllabusItem = {
    id: 'aos1-natural-trumpet',
    title: 'Natural Trumpet',
    title_zh: '自然小号',
    path: '/term/natural-trumpet',
    isTerm: true,
    content: 'The valveless trumpet of the Baroque era.',
    content_zh: '巴洛克时代的无阀小号。',
    longDescription: `**The Natural Trumpet: A Comprehensive Guide**

The natural trumpet was the standard form of the trumpet during the Baroque era. Its brilliant, piercing sound was reserved for music of a majestic, festive, or military character.

**Key Feature: No Valves**
The defining characteristic of the natural trumpet is its lack of valves. Modern trumpets use valves to change the length of the tubing, allowing them to play all the notes of the chromatic scale. The natural trumpet could only produce the notes of the natural **harmonic series** of its fundamental pitch (e.g., C, G, C, E, G, Bb, C...).

**Playing Technique and the 'Clarino' Register:**
Changing notes required the player to alter their lip tension and breath pressure (embouchure) to isolate specific pitches from the harmonic series. This was an incredibly difficult skill. The notes are far apart in the low register, making only fanfare-like figures possible. However, in the very high register, the notes of the harmonic series are much closer together, allowing a skilled player to perform scale-like passages and melodies. This specialized, virtuosic high-register playing was known as **clarino** playing.

**Role in the Orchestra:**
Because of these limitations, trumpets were not used in all pieces. They were typically employed in bright, festive keys like D major and were almost always paired with the **timpani** to add grandeur and brilliance.`,
    longDescription_zh: `**自然小号：综合指南**

自然小号是巴洛克时期小号的标准形式。其明亮、穿透力强的声音被保留用于庄严、节日或军事性质的音乐。

**关键特征：无阀门**
自然小号的决定性特征是它没有阀门。现代小号使用阀门来改变管子的长度，从而可以演奏半音阶的所有音符。自然小号只能产生其基频的自然**泛音列**的音符（例如，C, G, C, E, G, Bb, C...）。

**演奏技巧与“克拉里诺”音区：**
改变音符需要演奏者改变他们的唇部张力和呼吸压力（口型）来分离泛音列中的特定音高。这是一项极其困难的技能。在低音区，音符相距很远，使得只能演奏类似팡파르的音型。然而，在非常高的音区，泛音列的音符彼此更接近，使得熟练的演奏者能够演奏音阶般的段落和旋律。这种专业的、技巧高超的高音区演奏被称为**克拉里诺**演奏。

**在管弦乐队中的角色：**
由于这些限制，小号并非在所有作品中都使用。它们通常被用于像D大调这样明亮、节日的调中，并且几乎总是与**定音鼓**配对，以增添宏伟和光彩。`,
    quiz: naturalTrumpetQuiz
};