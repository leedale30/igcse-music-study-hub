
import { SyllabusItem } from '../../types';
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
      content: 'Passionate dance music from Argentina.',
      content_zh: '来自阿根廷的充满激情的舞曲。',
      longDescription: `Tango is a dramatic and passionate dance and music style from Buenos Aires, Argentina. We will learn about its history, characteristic rhythms like the habanera, and important instruments like the bandoneon.`,
      longDescription_zh: `探戈是一种来自阿根廷布宜诺斯艾利斯的戏剧性且充满激情的舞蹈和音乐风格。我们将学习它的历史、哈巴涅拉等特色节奏，以及班多钮手风琴等重要乐器。`
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
      content: 'Lively dance music from Latin America.',
      content_zh: '来自拉丁美洲的活泼舞曲。',
      longDescription: `Salsa is energetic dance music that came from Cuban and Puerto Rican communities in New York. It has exciting rhythms, often uses call-and-response vocals, and features instruments like congas, timbales, and a horn section (trumpets and trombones).`,
      longDescription_zh: `萨尔萨是源自纽约古巴和波多黎各社区的充满活力的舞曲。它有令人兴奋的节奏，经常使用呼应式唱法，并以康加鼓、廷巴鼓和号角组（小号和长号）等乐器为特色。`
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
      content: 'Music made with computers for dancing.',
      content_zh: '用电脑制作的舞曲。',
      longDescription: `Electronic Dance Music (EDM) is made using electronic instruments like synthesisers, drum machines, and computers. It has many subgenres (like House, Techno, Trance) and features like a strong beat ("four-to-the-floor"), builds, and drops to create energy on the dancefloor.`,
      longDescription_zh: `电子舞曲（EDM）是使用合成器、鼓机和电脑等电子乐器制作的。它有许多子流派（如浩室、铁克诺、出神），并具有强劲的"四四拍"节拍、高潮构建和高潮释放等特点，以在舞池中创造能量。`
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

