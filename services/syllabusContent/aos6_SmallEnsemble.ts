
import { SyllabusItem } from '../../types';

export const smallEnsembleAoS: SyllabusItem = {
  id: 'aos6-small-ensemble',
  title: 'Area of Study 6: Music for Small Ensemble',
  title_zh: '学习领域六：小型合奏音乐',
  path: '/areas-of-study/aos6-small-ensemble',
  content: 'Music for small groups from around the world.',
  content_zh: '来自世界各地的小型团体音乐。',
  longDescription: `An ensemble is a group of musicians. This area looks at music for small groups from different cultures. We will learn about Silk and Bamboo ensembles from China, Hindustani classical music from North India, and Arab Takht ensembles. You will discover their unique instruments, musical features, and how the music is performed and passed on.`,
  longDescription_zh: `合奏团是一群音乐家。这个领域着眼于来自不同文化的小型团体音乐。我们将学习中国的丝竹乐团、北印度的印度斯坦古典音乐，以及阿拉伯的塔赫特乐团。您将发现它们独特的乐器、音乐特征，以及音乐是如何演奏和传承的。`,
  children: [
    {
      id: 'aos6-silk-bamboo', title: 'Focus Area: Silk and Bamboo Ensembles (China)', title_zh: '重点领域：丝竹乐团 (中国)', path: '/areas-of-study/aos6-small-ensemble/silk-bamboo',
      content: 'Traditional Chinese ensembles.',
      content_zh: '中国传统乐团。',
      longDescription: `Sizhu, meaning "silk and bamboo," refers to Chinese ensembles using instruments made from these materials. Silk string instruments include the erhu and pipa. Bamboo wind instruments include the dizi. We will explore their music from the Jiangnan region.`,
      longDescription_zh: `丝竹，意为“丝绸与竹子”，指使用由这些材料制成的乐器的中国乐团。丝弦乐器包括二胡和琵琶。竹管乐器包括笛子。我们将探索他们来自江南地区的音乐。`
    },
    {
      id: 'dizi-erhu-pipa', title: 'Dizi, Erhu, Pipa', title_zh: '笛子、二胡、琵琶', path: '/term/dizi-erhu-pipa', isTerm: true,
      content: 'Key Chinese instruments.',
      content_zh: '关键的中国乐器。',
      longDescription: `The dizi is a bamboo flute. The erhu is a two-stringed fiddle. The pipa is a pear-shaped lute. These are important melody instruments in Silk and Bamboo ensembles.`,
      longDescription_zh: `笛子是一种竹制长笛。二胡是一种双弦的提琴。琵琶是一种梨形的琉特琴。这些都是丝竹乐团中重要的旋律乐器。`
    },
    {
      id: 'aos6-hindustani', title: 'Focus Area: Hindustani Classical Music (North India)', title_zh: '重点领域：印度斯坦古典音乐 (北印度)', path: '/areas-of-study/aos6-small-ensemble/hindustani',
      content: 'Classical music from North India.',
      content_zh: '来自北印度的古典音乐。',
      longDescription: `Hindustani classical music is from North India. It involves improvisation based on a rāga (a melodic framework) and tāla (a rhythmic cycle). Key instruments include the sitār, sarōd, tablā, and tambūrā.`,
      longDescription_zh: `印度斯坦古典音乐来自北印度。它涉及基于拉格（一种旋律框架）和塔拉（一种节奏循环）的即兴创作。主要乐器包括西塔琴、萨罗德琴、塔布拉鼓和坦布拉琴。`
    },
    {
      id: 'sitar-tabla-raga-tala', title: 'Sitār, Tablā, Rāga, Tāla', title_zh: '西塔琴、塔布拉鼓、拉格、塔拉', path: '/term/sitar-tabla-raga-tala', isTerm: true,
      content: 'Core elements of Hindustani music.',
      content_zh: '印度斯坦音乐的核心元素。',
      longDescription: `The sitār is a long-necked lute. The tablā is a pair of hand drums. A rāga is like a scale with specific melodic patterns and mood. A tāla is a cycle of beats. These are essential to Hindustani music performance.`,
      longDescription_zh: `西塔琴是一种长颈琉特琴。塔布拉鼓是一对手鼓。拉格像一个音阶，有特定的旋律模式和情绪。塔拉是一个节拍循环。这些都是印度斯坦音乐表演的要素。`
    },
    {
      id: 'aos6-arab-takht', title: 'Focus Area: Arab Takht Ensembles', title_zh: '重点领域：阿拉伯塔赫特乐团', path: '/areas-of-study/aos6-small-ensemble/arab-takht',
      content: 'Traditional Arab music groups.',
      content_zh: '传统阿拉伯音乐团体。',
      longDescription: `A Takht is a small ensemble in Arab music. It usually includes instruments like the ud (lute), qanun (zither), nay (flute), and riqq (tambourine). Music is often based on a maqam (melodic mode) and iqa (rhythmic mode).`,
      longDescription_zh: `塔赫特是阿拉伯音乐中的一个小型乐团。它通常包括乌德琴（琉特琴）、卡农琴（齐特琴）、乃依笛（长笛）和里格鼓（手鼓）等乐器。音乐通常基于玛卡姆（旋律调式）和伊卡（节奏模式）。`
    },
    {
      id: 'ud-qanun-maqam-iqa', title: 'Ud, Qanun, Maqam, Iqa', title_zh: '乌德琴、卡农琴、玛卡姆、伊卡', path: '/term/ud-qanun-maqam-iqa', isTerm: true,
      content: 'Foundations of Arab Takht music.',
      content_zh: '阿拉伯塔赫特音乐的基础。',
      longDescription: `The ud is a pear-shaped lute. The qanun is a plucked zither. A maqam is a system of melodic modes, like a scale with rules for improvisation. An iqa is a rhythmic pattern or cycle. These are key to Arab music.`,
      longDescription_zh: `乌德琴是一种梨形琉特琴。卡农琴是一种弹拨的齐特琴。玛卡姆是一种旋律调式系统，像一个有即兴创作规则的音阶。伊卡是一种节奏模式或循环。这些是阿拉伯音乐的关键。`
    },
    {
      id: 'heterophony', title: 'Heterophony', title_zh: '异音织体', path: '/term/heterophony', isTerm: true,
      content: 'A special musical texture.',
      content_zh: '一种特殊的音乐织体。',
      longDescription: `Heterophony is a type of musical texture where two or more musicians play the same melody at the same time, but each one adds their own small variations or ornaments. This is common in many types of traditional ensemble music, including Silk and Bamboo and Arab Takht music.`,
      longDescription_zh: `异音织体是一种音乐织体，其中两个或多个音乐家同时演奏相同的旋律，但每个人都添加了自己细微的变化或装饰。这在许多类型的传统合奏音乐中很常见，包括丝竹乐和阿拉伯塔赫特音乐。`
    },
    {
      id: 'aos6-starting-points', title: 'Starting Points (Wider Listening)', title_zh: '起点 (扩展聆听)', path: '/areas-of-study/aos6-small-ensemble/starting-points',
      content: 'Examples of small ensemble music.',
      content_zh: '小型合奏音乐的范例。',
      longDescription: `Listen to: "San Liu" (Chinese National Orchestra), "Rāga khamāj" (Ravi Shankar - Hindustani), and "Wasla en sabâ" (Al-Kindî Ensemble - Arab Takht).`,
      longDescription_zh: `聆听：《三六》（中国国家乐团）、《拉格卡马吉》（拉维·香卡 - 印度斯坦音乐）和《萨巴调瓦斯拉》（金迪乐团 - 阿拉伯塔赫特音乐）。`
    }
  ]
};
