import { SyllabusItem } from '../../../../../types';
import { harpsichordQuiz } from '../../../../quizzes/aos1/key_features';

export const harpsichordTerm: SyllabusItem = {
    id: 'aos1-harpsichord',
    title: 'Harpsichord',
    title_zh: '羽管键琴',
    path: '/term/harpsichord',
    isTerm: true,
    content: 'The primary keyboard instrument of the Baroque.',
    content_zh: '巴洛克时期的主要键盘乐器。',
    longDescription: `**The Harpsichord: A Comprehensive Guide**

The harpsichord was the quintessential keyboard instrument of the Baroque era, central to both solo and ensemble music. Its bright, plucked sound is one of the most recognizable timbres of the period.

**How it Works:**
Unlike a modern piano which uses hammers to strike the strings, the harpsichord uses a mechanism where pressing a key causes a small plectrum (originally made from a bird's quill, now often from plastic) to pluck the string. This gives it a sharp attack and a quick decay.

**Dynamic Limitations:**
A crucial feature of the harpsichord is its inability to create gradual changes in volume (crescendo or diminuendo) by varying finger pressure. Pressing a key harder does not make the sound louder. This is a primary reason why Baroque music features **terraced dynamics** (sudden shifts between loud and soft). Some larger harpsichords had two keyboards (manuals) and stops that could engage different sets of strings to create different volume levels and timbres, but these changes were abrupt.

**Role in Baroque Music:**
The harpsichord had two main roles:
*   **Solo Instrument:** It was a popular solo instrument, with a vast repertoire of suites, sonatas, and toccatas written by composers like J.S. Bach, Handel, and Couperin.
*   **Continuo Instrument:** This was its most essential role in ensemble music. As the primary chordal instrument of the **Basso Continuo**, the harpsichordist would "realize" the harmonies from a **figured bass** line, providing the harmonic and rhythmic foundation for the entire orchestra or chamber group. The harpsichordist was also often the leader of the ensemble.`,
    longDescription_zh: `**羽管键琴：综合指南**

羽管键琴是巴洛克时代典型的键盘乐器，在独奏和合奏音乐中都处于中心地位。其明亮、拨弦的声音是那个时期最易识别的音色之一。

**工作原理：**
与使用琴槌敲击琴弦的现代钢琴不同，羽管键琴使用一种机制，按下一个键会使一个小拨子（最初由鸟的羽毛管制成，现在通常是塑料）拨动琴弦。这使得它的声音起音尖锐，衰减迅速。

**力度限制：**
羽管键琴的一个关键特征是无法通过改变手指压力来产生渐变的音量（渐强或渐弱）。用力按键并不会使声音变大。这是巴洛克音乐以**阶梯式力度**（响亮和柔和之间的突然转换）为特色的一个主要原因。一些较大的羽管键琴有两层键盘（手键）和音栓，可以启动不同的弦组来创造不同的音量水平和音色，但这些变化是突然的。

**在巴洛克音乐中的角色：**
羽管键琴有两个主要角色：
*   **独奏乐器：** 它是一种流行的独奏乐器，有大量由巴赫、亨德尔和库普兰等作曲家创作的组曲、奏鸣曲和托卡塔曲目。
*   **通奏低音乐器：** 这是它在合奏音乐中最核心的角色。作为**通奏低音**的主要和弦乐器，羽管键琴手会根据**数字低音**线条“实现”和声，为整个管弦乐队或室内乐团提供和声和节奏基础。羽管键琴手通常也是合奏团的领导者。`,
    quiz: harpsichordQuiz
};