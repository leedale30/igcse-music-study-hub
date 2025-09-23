// Sample instrument data based on the original HTML files
// This demonstrates the structure for the 204 instruments

export interface InstrumentData {
  id: string
  name: string
  name_zh?: string
  description: string
  description_zh?: string
  family: string
  family_zh?: string
  pitchRange: string
  pitchRange_zh?: string
  material: string
  material_zh?: string
  size: string
  size_zh?: string
  origins: string
  origins_zh?: string
  classification: string
  classification_zh?: string
  additionalNotes?: string
  additionalNotes_zh?: string
  audioUrl?: string
  imageUrl?: string
  videoUrl?: string
  previousInstrument?: string
  nextInstrument?: string
}

export interface QuizQuestion {
  id: string
  question: string
  question_zh?: string
  options: Array<{
    id: string
    text: string
    text_zh?: string
  }>
  correctAnswer: string
  explanation?: string
  explanation_zh?: string
  difficulty: 'easy' | 'medium' | 'hard'
}

// Sample data for Accordion (based on 1-Accordion-button.html)
export const accordionData: InstrumentData = {
  id: 'accordion',
  name: 'Accordion',
  name_zh: '手风琴',
  description: 'The accordion is a box-shaped musical instrument. It has a keyboard or buttons on one side and buttons on the other side. When you press the keys or buttons and move the bellows, it makes music. The accordion is popular in many types of music around the world.',
  description_zh: '手风琴是一种箱形乐器。一边有键盘或按钮，另一边有按钮。当你按键或按钮并移动风箱时，它就会发出音乐。手风琴在世界各地的许多音乐类型中都很受欢迎。',
  family: 'Aerophone',
  family_zh: '气鸣乐器',
  pitchRange: 'Wide range, typically 3-4 octaves',
  pitchRange_zh: '音域宽广，通常为3-4个八度',
  material: 'Wood, metal, leather, plastic',
  material_zh: '木材、金属、皮革、塑料',
  size: 'Portable, various sizes available',
  size_zh: '便携式，有各种尺寸',
  origins: 'Europe, early 19th century',
  origins_zh: '欧洲，19世纪初',
  classification: 'Free-reed aerophone',
  classification_zh: '自由簧气鸣乐器',
  additionalNotes: 'Used in folk music, classical music, and popular music worldwide',
  additionalNotes_zh: '在世界各地的民间音乐、古典音乐和流行音乐中使用',
  audioUrl: '/audio/accordion.mp3',
  imageUrl: '/images/accordion.jpg',
  videoUrl: 'https://www.youtube.com/embed/accordion-demo',
  previousInstrument: null,
  nextInstrument: 'flute'
}

// Sample data for Flute (based on 78-Flute.html)
export const fluteData: InstrumentData = {
  id: 'flute',
  name: 'Flute',
  name_zh: '长笛',
  description: 'The flute is a woodwind instrument that makes sound when air flows across an opening. You hold it sideways and blow air across a hole near one end. The flute has keys that you press to change the pitch and make different notes.',
  description_zh: '长笛是一种木管乐器，当空气流过开口时发出声音。你横着拿着它，向靠近一端的孔吹气。长笛有按键，你可以按下来改变音高并发出不同的音符。',
  family: 'Woodwind',
  family_zh: '木管乐器',
  pitchRange: 'C4 to C7 (3 octaves)',
  pitchRange_zh: 'C4到C7（3个八度）',
  material: 'Silver, gold, wood, or nickel-plated metal',
  material_zh: '银、金、木材或镀镍金属',
  size: 'About 66 cm (26 inches) long',
  size_zh: '约66厘米（26英寸）长',
  origins: 'Ancient civilizations, modern form from 19th century',
  origins_zh: '古代文明，现代形式来自19世纪',
  classification: 'Side-blown flute',
  classification_zh: '横吹长笛',
  additionalNotes: 'Common in orchestras, bands, and solo performances',
  additionalNotes_zh: '常见于管弦乐队、乐队和独奏表演',
  audioUrl: '/audio/flute.mp3',
  imageUrl: '/images/flute.jpg',
  videoUrl: 'https://www.youtube.com/embed/flute-demo',
  previousInstrument: 'accordion',
  nextInstrument: 'violin'
}

// Sample quiz questions for Accordion
export const accordionQuizQuestions: QuizQuestion[] = [
  {
    id: 'acc-q1',
    question: 'What type of instrument is the accordion?',
    question_zh: '手风琴是什么类型的乐器？',
    options: [
      { id: 'a', text: 'String instrument', text_zh: '弦乐器' },
      { id: 'b', text: 'Percussion instrument', text_zh: '打击乐器' },
      { id: 'c', text: 'Aerophone', text_zh: '气鸣乐器' },
      { id: 'd', text: 'Electronic instrument', text_zh: '电子乐器' }
    ],
    correctAnswer: 'c',
    explanation: 'The accordion is an aerophone because it produces sound using air flow through reeds.',
    explanation_zh: '手风琴是气鸣乐器，因为它通过空气流过簧片产生声音。',
    difficulty: 'easy'
  },
  {
    id: 'acc-q2',
    question: 'What materials are commonly used to make accordions?',
    question_zh: '制作手风琴常用什么材料？',
    options: [
      { id: 'a', text: 'Only wood', text_zh: '只有木材' },
      { id: 'b', text: 'Wood, metal, leather, and plastic', text_zh: '木材、金属、皮革和塑料' },
      { id: 'c', text: 'Only metal', text_zh: '只有金属' },
      { id: 'd', text: 'Only plastic', text_zh: '只有塑料' }
    ],
    correctAnswer: 'b',
    explanation: 'Accordions are made from a combination of materials including wood for the body, metal for reeds, leather for bellows, and plastic for some components.',
    explanation_zh: '手风琴由多种材料制成，包括用于琴身的木材、用于簧片的金属、用于风箱的皮革以及用于某些部件的塑料。',
    difficulty: 'medium'
  },
  {
    id: 'acc-q3',
    question: 'When did the modern accordion first appear?',
    question_zh: '现代手风琴最早出现在什么时候？',
    options: [
      { id: 'a', text: '18th century', text_zh: '18世纪' },
      { id: 'b', text: 'Early 19th century', text_zh: '19世纪初' },
      { id: 'c', text: '20th century', text_zh: '20世纪' },
      { id: 'd', text: '17th century', text_zh: '17世纪' }
    ],
    correctAnswer: 'b',
    explanation: 'The accordion was invented in the early 19th century in Europe.',
    explanation_zh: '手风琴是在19世纪初在欧洲发明的。',
    difficulty: 'medium'
  },
  {
    id: 'acc-q4',
    question: 'How does an accordion produce sound?',
    question_zh: '手风琴是如何发声的？',
    options: [
      { id: 'a', text: 'By striking strings', text_zh: '通过敲击琴弦' },
      { id: 'b', text: 'By pressing keys and moving bellows to push air through reeds', text_zh: '通过按键和移动风箱将空气推过簧片' },
      { id: 'c', text: 'By electronic amplification', text_zh: '通过电子放大' },
      { id: 'd', text: 'By hitting with mallets', text_zh: '通过用槌敲击' }
    ],
    correctAnswer: 'b',
    explanation: 'The accordion produces sound when air is pushed through metal reeds by operating the bellows and pressing keys or buttons.',
    explanation_zh: '手风琴通过操作风箱和按键或按钮将空气推过金属簧片来产生声音。',
    difficulty: 'easy'
  },
  {
    id: 'acc-q5',
    question: 'What is the typical pitch range of an accordion?',
    question_zh: '手风琴的典型音域是多少？',
    options: [
      { id: 'a', text: '1-2 octaves', text_zh: '1-2个八度' },
      { id: 'b', text: '3-4 octaves', text_zh: '3-4个八度' },
      { id: 'c', text: '5-6 octaves', text_zh: '5-6个八度' },
      { id: 'd', text: 'Only one octave', text_zh: '只有一个八度' }
    ],
    correctAnswer: 'b',
    explanation: 'Most accordions have a wide range of 3-4 octaves, making them versatile instruments.',
    explanation_zh: '大多数手风琴都有3-4个八度的宽广音域，使它们成为多功能乐器。',
    difficulty: 'medium'
  },
  // Additional questions to reach 20 total
  {
    id: 'acc-q6',
    question: 'In which types of music is the accordion commonly used?',
    question_zh: '手风琴常用于哪些类型的音乐？',
    options: [
      { id: 'a', text: 'Only classical music', text_zh: '只有古典音乐' },
      { id: 'b', text: 'Only folk music', text_zh: '只有民间音乐' },
      { id: 'c', text: 'Folk, classical, and popular music', text_zh: '民间音乐、古典音乐和流行音乐' },
      { id: 'd', text: 'Only electronic music', text_zh: '只有电子音乐' }
    ],
    correctAnswer: 'c',
    explanation: 'The accordion is versatile and used in many musical genres including folk, classical, and popular music worldwide.',
    explanation_zh: '手风琴用途广泛，在世界各地的许多音乐流派中使用，包括民间音乐、古典音乐和流行音乐。',
    difficulty: 'easy'
  },
  {
    id: 'acc-q7',
    question: 'What is the classification of the accordion in the Hornbostel-Sachs system?',
    question_zh: '在霍恩博斯特尔-萨克斯分类系统中，手风琴属于什么分类？',
    options: [
      { id: 'a', text: 'Chordophone', text_zh: '弦鸣乐器' },
      { id: 'b', text: 'Membranophone', text_zh: '膜鸣乐器' },
      { id: 'c', text: 'Free-reed aerophone', text_zh: '自由簧气鸣乐器' },
      { id: 'd', text: 'Idiophone', text_zh: '体鸣乐器' }
    ],
    correctAnswer: 'c',
    explanation: 'The accordion is classified as a free-reed aerophone because it uses air to vibrate metal reeds freely.',
    explanation_zh: '手风琴被归类为自由簧气鸣乐器，因为它使用空气使金属簧片自由振动。',
    difficulty: 'hard'
  },
  {
    id: 'acc-q8',
    question: 'Which part of the accordion controls the airflow?',
    question_zh: '手风琴的哪个部分控制气流？',
    options: [
      { id: 'a', text: 'The keyboard', text_zh: '键盘' },
      { id: 'b', text: 'The bellows', text_zh: '风箱' },
      { id: 'c', text: 'The buttons', text_zh: '按钮' },
      { id: 'd', text: 'The case', text_zh: '外壳' }
    ],
    correctAnswer: 'b',
    explanation: 'The bellows is the expandable part that controls airflow through the reeds when squeezed or expanded.',
    explanation_zh: '风箱是可扩展的部分，在挤压或扩张时控制通过簧片的气流。',
    difficulty: 'easy'
  },
  {
    id: 'acc-q9',
    question: 'What makes the accordion a portable instrument?',
    question_zh: '是什么让手风琴成为便携式乐器？',
    options: [
      { id: 'a', text: 'It is very light', text_zh: '它很轻' },
      { id: 'b', text: 'It can be folded and carried', text_zh: '它可以折叠和携带' },
      { id: 'c', text: 'It has wheels', text_zh: '它有轮子' },
      { id: 'd', text: 'It is electronic', text_zh: '它是电子的' }
    ],
    correctAnswer: 'b',
    explanation: 'The accordion can be compressed by folding the bellows, making it more compact for transport.',
    explanation_zh: '手风琴可以通过折叠风箱来压缩，使其在运输时更加紧凑。',
    difficulty: 'medium'
  },
  {
    id: 'acc-q10',
    question: 'How do you change the pitch on an accordion?',
    question_zh: '如何改变手风琴的音高？',
    options: [
      { id: 'a', text: 'By changing the air pressure only', text_zh: '只通过改变气压' },
      { id: 'b', text: 'By pressing different keys or buttons', text_zh: '通过按不同的键或按钮' },
      { id: 'c', text: 'By moving the bellows faster', text_zh: '通过更快地移动风箱' },
      { id: 'd', text: 'By turning a dial', text_zh: '通过转动旋钮' }
    ],
    correctAnswer: 'b',
    explanation: 'Different keys and buttons open different reeds, which produce different pitches when air flows through them.',
    explanation_zh: '不同的键和按钮打开不同的簧片，当空气流过时产生不同的音高。',
    difficulty: 'easy'
  },
  // Continue with more questions to reach 20 total...
  {
    id: 'acc-q11',
    question: 'What is the main difference between a piano accordion and a button accordion?',
    question_zh: '钢琴手风琴和按钮手风琴的主要区别是什么？',
    options: [
      { id: 'a', text: 'The size', text_zh: '尺寸' },
      { id: 'b', text: 'The keyboard layout', text_zh: '键盘布局' },
      { id: 'c', text: 'The sound quality', text_zh: '音质' },
      { id: 'd', text: 'The material', text_zh: '材料' }
    ],
    correctAnswer: 'b',
    explanation: 'Piano accordions have piano-style keys while button accordions have round buttons arranged in rows.',
    explanation_zh: '钢琴手风琴有钢琴式按键，而按钮手风琴有排列成行的圆形按钮。',
    difficulty: 'medium'
  },
  {
    id: 'acc-q12',
    question: 'Which country is most associated with the development of the modern accordion?',
    question_zh: '哪个国家与现代手风琴的发展最相关？',
    options: [
      { id: 'a', text: 'Italy', text_zh: '意大利' },
      { id: 'b', text: 'Germany', text_zh: '德国' },
      { id: 'c', text: 'France', text_zh: '法国' },
      { id: 'd', text: 'Austria', text_zh: '奥地利' }
    ],
    correctAnswer: 'b',
    explanation: 'Germany is credited with the development of the modern accordion in the early 19th century.',
    explanation_zh: '德国被认为在19世纪初发展了现代手风琴。',
    difficulty: 'hard'
  },
  {
    id: 'acc-q13',
    question: 'What happens when you pull the bellows apart?',
    question_zh: '当你拉开风箱时会发生什么？',
    options: [
      { id: 'a', text: 'Air is pushed out', text_zh: '空气被推出' },
      { id: 'b', text: 'Air is drawn in', text_zh: '空气被吸入' },
      { id: 'c', text: 'No air movement', text_zh: '没有空气流动' },
      { id: 'd', text: 'The sound stops', text_zh: '声音停止' }
    ],
    correctAnswer: 'b',
    explanation: 'When the bellows are pulled apart, air is drawn into the instrument through the reeds.',
    explanation_zh: '当风箱被拉开时，空气通过簧片被吸入乐器。',
    difficulty: 'medium'
  },
  {
    id: 'acc-q14',
    question: 'What is the purpose of the bass buttons on an accordion?',
    question_zh: '手风琴上低音按钮的作用是什么？',
    options: [
      { id: 'a', text: 'To play melody', text_zh: '演奏旋律' },
      { id: 'b', text: 'To play bass notes and chords', text_zh: '演奏低音音符和和弦' },
      { id: 'c', text: 'To control volume', text_zh: '控制音量' },
      { id: 'd', text: 'To change tempo', text_zh: '改变节拍' }
    ],
    correctAnswer: 'b',
    explanation: 'The bass buttons on the left side of the accordion are used to play bass notes and chord accompaniments.',
    explanation_zh: '手风琴左侧的低音按钮用于演奏低音音符和和弦伴奏。',
    difficulty: 'medium'
  },
  {
    id: 'acc-q15',
    question: 'How many reeds might a full-size accordion have?',
    question_zh: '一个全尺寸手风琴可能有多少个簧片？',
    options: [
      { id: 'a', text: '50-100', text_zh: '50-100个' },
      { id: 'b', text: '200-400', text_zh: '200-400个' },
      { id: 'c', text: '500-1000', text_zh: '500-1000个' },
      { id: 'd', text: '10-20', text_zh: '10-20个' }
    ],
    correctAnswer: 'c',
    explanation: 'A full-size accordion can have hundreds or even over a thousand individual reeds to produce its wide range of notes.',
    explanation_zh: '一个全尺寸手风琴可以有数百甚至超过一千个单独的簧片来产生其宽广的音符范围。',
    difficulty: 'hard'
  },
  {
    id: 'acc-q16',
    question: 'What is the typical weight of a full-size accordion?',
    question_zh: '全尺寸手风琴的典型重量是多少？',
    options: [
      { id: 'a', text: '2-5 kg', text_zh: '2-5公斤' },
      { id: 'b', text: '8-15 kg', text_zh: '8-15公斤' },
      { id: 'c', text: '20-25 kg', text_zh: '20-25公斤' },
      { id: 'd', text: '1-2 kg', text_zh: '1-2公斤' }
    ],
    correctAnswer: 'b',
    explanation: 'A full-size accordion typically weighs between 8-15 kg, making it quite heavy to carry and play.',
    explanation_zh: '全尺寸手风琴通常重8-15公斤，携带和演奏都相当重。',
    difficulty: 'medium'
  },
  {
    id: 'acc-q17',
    question: 'Which musical technique is unique to accordion playing?',
    question_zh: '哪种音乐技巧是手风琴演奏独有的？',
    options: [
      { id: 'a', text: 'Vibrato', text_zh: '颤音' },
      { id: 'b', text: 'Bellows shake', text_zh: '风箱摇动' },
      { id: 'c', text: 'Staccato', text_zh: '断奏' },
      { id: 'd', text: 'Legato', text_zh: '连奏' }
    ],
    correctAnswer: 'b',
    explanation: 'Bellows shake is a technique unique to accordion where the bellows are rapidly moved to create a tremolo effect.',
    explanation_zh: '风箱摇动是手风琴独有的技巧，通过快速移动风箱来产生颤音效果。',
    difficulty: 'hard'
  },
  {
    id: 'acc-q18',
    question: 'What is the standard number of bass buttons on a full-size accordion?',
    question_zh: '全尺寸手风琴的标准低音按钮数量是多少？',
    options: [
      { id: 'a', text: '48', text_zh: '48个' },
      { id: 'b', text: '72', text_zh: '72个' },
      { id: 'c', text: '120', text_zh: '120个' },
      { id: 'd', text: '96', text_zh: '96个' }
    ],
    correctAnswer: 'c',
    explanation: 'A standard full-size accordion typically has 120 bass buttons arranged in six rows.',
    explanation_zh: '标准全尺寸手风琴通常有120个低音按钮，排列成六行。',
    difficulty: 'hard'
  },
  {
    id: 'acc-q19',
    question: 'In which direction do you typically hold an accordion?',
    question_zh: '你通常以什么方向持握手风琴？',
    options: [
      { id: 'a', text: 'Horizontally', text_zh: '水平地' },
      { id: 'b', text: 'Vertically', text_zh: '垂直地' },
      { id: 'c', text: 'Upside down', text_zh: '倒置' },
      { id: 'd', text: 'At an angle', text_zh: '倾斜' }
    ],
    correctAnswer: 'b',
    explanation: 'The accordion is typically held vertically against the body with straps over the shoulders.',
    explanation_zh: '手风琴通常垂直地贴着身体持握，肩带跨过肩膀。',
    difficulty: 'easy'
  },
  {
    id: 'acc-q20',
    question: 'What is the main advantage of the accordion\'s design?',
    question_zh: '手风琴设计的主要优势是什么？',
    options: [
      { id: 'a', text: 'It is very quiet', text_zh: '它很安静' },
      { id: 'b', text: 'It can play melody and accompaniment simultaneously', text_zh: '它可以同时演奏旋律和伴奏' },
      { id: 'c', text: 'It never needs tuning', text_zh: '它从不需要调音' },
      { id: 'd', text: 'It is waterproof', text_zh: '它是防水的' }
    ],
    correctAnswer: 'b',
    explanation: 'The accordion\'s design allows one person to play both melody (right hand) and bass/chord accompaniment (left hand) simultaneously.',
    explanation_zh: '手风琴的设计允许一个人同时演奏旋律（右手）和低音/和弦伴奏（左手）。',
    difficulty: 'medium'
  }
]

// Export all sample data
export const sampleInstruments = {
  accordion: accordionData,
  flute: fluteData
}

export const sampleQuizzes = {
  accordion: accordionQuizQuestions
}