import { Quiz } from '../../../../types';

export const naturalTrumpetQuiz: Quiz = {
  title: "Natural Trumpet Quiz",
  questions: [
    {
      id: 'ntq1',
      text: "What key feature is missing from a 'natural' trumpet compared to a modern trumpet?",
      options: [
        { id: 'ntq1a1', text: 'A mouthpiece' },
        { id: 'ntq1a2', text: 'A bell' },
        { id: 'ntq1a3', text: 'Valves' },
        { id: 'ntq1a4', text: 'Tubing' },
      ],
      correctAnswerId: 'ntq1a3',
      explanation: "The natural trumpet has no valves, which severely limits the notes it can play to the natural harmonic series of its fundamental pitch."
    },
    {
      id: 'ntq2',
      text: "How did a natural trumpet player change notes?",
      options: [
        { id: 'ntq2a1', text: 'By pressing keys like on a flute.' },
        { id: 'ntq2a2', text: 'By changing the length of the instrument with a slide.' },
        { id: 'ntq2a3', text: 'Solely by changing their lip tension (embouchure) to select different notes from the harmonic series.' },
        { id: 'ntq2a4', text: 'They could only play one single note.' },
      ],
      correctAnswerId: 'ntq2a3',
      explanation: "Players had to use their embouchure to precisely select different pitches from the harmonic series, a very difficult skill."
    },
    {
      id: 'ntq3',
      text: "The difficult, high-pitched, and virtuosic style of playing the natural trumpet is known as the ____ register.",
      options: [
        { id: 'ntq3a1', text: 'Pedal' },
        { id: 'ntq3a2', text: 'Clarino' },
        { id: 'ntq3a3', text: 'Tutti' },
        { id: 'ntq3a4', text: 'Continuo' },
      ],
      correctAnswerId: 'ntq3a2',
      explanation: "Playing in the high 'clarino' register allowed the natural trumpet to play more scale-like passages, as the available notes of the harmonic series are closer together at the top."
    },
    {
      id: 'ntq4',
      text: "In Baroque orchestral music, trumpets were often paired with which percussion instrument?",
      options: [
        { id: 'ntq4a1', text: 'Snare Drum' },
        { id: 'ntq4a2', text: 'Cymbals' },
        { id: 'ntq4a3', text: 'Timpani' },
        { id: 'ntq4a4', text: 'Triangle' },
      ],
      correctAnswerId: 'ntq4a3',
      explanation: "Trumpets and timpani were frequently used together to create a majestic, festive, or military sound, especially in music in D major."
    },
    {
      id: 'ntq5',
      text: "What is the harmonic series that natural trumpets are based on?",
      options: [
        { id: 'ntq5a1', text: 'A random collection of notes' },
        { id: 'ntq5a2', text: 'A mathematical sequence of overtones based on a fundamental frequency' },
        { id: 'ntq5a3', text: 'Only major scales' },
        { id: 'ntq5a4', text: 'Only minor scales' },
      ],
      correctAnswerId: 'ntq5a2',
      explanation: "The harmonic series is a mathematical sequence where each overtone is a multiple of the fundamental frequency, creating specific pitches that natural trumpets can produce."
    },
    {
      id: 'ntq6',
      text: "What was the typical length of a Baroque natural trumpet?",
      options: [
        { id: 'ntq6a1', text: 'About 2 feet (60 cm)' },
        { id: 'ntq6a2', text: 'About 4 feet (120 cm)' },
        { id: 'ntq6a3', text: 'About 8 feet (240 cm)' },
        { id: 'ntq6a4', text: 'About 12 feet (360 cm)' },
      ],
      correctAnswerId: 'ntq6a3',
      explanation: "Natural trumpets were typically about 8 feet long when uncoiled, which determined their fundamental pitch and available harmonic series."
    },
    {
      id: 'ntq7',
      text: "In which key were most Baroque natural trumpets pitched?",
      options: [
        { id: 'ntq7a1', text: 'C major' },
        { id: 'ntq7a2', text: 'D major' },
        { id: 'ntq7a3', text: 'F major' },
        { id: 'ntq7a4', text: 'G major' },
      ],
      correctAnswerId: 'ntq7a2',
      explanation: "Most Baroque natural trumpets were pitched in D major, which was considered a bright, festive key perfect for ceremonial and celebratory music."
    },
    {
      id: 'ntq8',
      text: "What technique did players use to play notes not available in the harmonic series?",
      options: [
        { id: 'ntq8a1', text: 'Hand stopping (placing the hand in the bell)' },
        { id: 'ntq8a2', text: 'Using a mute' },
        { id: 'ntq8a3', text: 'Lip trills and bending' },
        { id: 'ntq8a4', text: 'It was impossible to play such notes' },
      ],
      correctAnswerId: 'ntq8a3',
      explanation: "Skilled players could use lip trills and subtle embouchure adjustments to bend pitches slightly, though this was limited and difficult."
    },
    {
      id: 'ntq9',
      text: "What was the social status of trumpet players in the Baroque period?",
      options: [
        { id: 'ntq9a1', text: 'They were considered lowly servants' },
        { id: 'ntq9a2', text: 'They held high social status and were often part of court guilds' },
        { id: 'ntq9a3', text: 'They were always anonymous musicians' },
        { id: 'ntq9a4', text: 'They were forbidden from playing in public' },
      ],
      correctAnswerId: 'ntq9a2',
      explanation: "Trumpet players held prestigious positions, often belonging to exclusive guilds and serving in royal courts, reflecting the instrument's association with nobility and ceremony."
    },
    {
      id: 'ntq10',
      text: "What is a 'crook' in relation to natural trumpets?",
      options: [
        { id: 'ntq10a1', text: 'A curved mouthpiece' },
        { id: 'ntq10a2', text: 'An additional length of tubing to change the pitch' },
        { id: 'ntq10a3', text: 'A type of mute' },
        { id: 'ntq10a4', text: 'A cleaning tool' },
      ],
      correctAnswerId: 'ntq10a2',
      explanation: "Crooks were additional lengths of tubing that could be inserted to change the fundamental pitch of the trumpet, allowing it to play in different keys."
    },
    {
      id: 'ntq11',
      text: "Which famous Baroque composer wrote challenging trumpet parts that showcased the clarino register?",
      options: [
        { id: 'ntq11a1', text: 'Johann Sebastian Bach' },
        { id: 'ntq11a2', text: 'Wolfgang Amadeus Mozart' },
        { id: 'ntq11a3', text: 'Ludwig van Beethoven' },
        { id: 'ntq11a4', text: 'Franz Schubert' },
      ],
      correctAnswerId: 'ntq11a1',
      explanation: "Bach wrote some of the most demanding and brilliant trumpet parts in the Baroque repertoire, including the Brandenburg Concerto No. 2 and many cantatas."
    },
    {
      id: 'ntq12',
      text: "What was the typical role of natural trumpets in Baroque orchestral music?",
      options: [
        { id: 'ntq12a1', text: 'Playing continuous melodic lines throughout pieces' },
        { id: 'ntq12a2', text: 'Providing fanfares, ceremonial passages, and climactic moments' },
        { id: 'ntq12a3', text: 'Playing only soft, lyrical passages' },
        { id: 'ntq12a4', text: 'Accompanying singers exclusively' },
      ],
      correctAnswerId: 'ntq12a2',
      explanation: "Natural trumpets were primarily used for fanfares, ceremonial music, and to add brilliance and grandeur to climactic passages, rather than for continuous melodic playing."
    },
    {
      id: 'ntq13',
      text: "Why did the natural trumpet decline in popularity?",
      options: [
        { id: 'ntq13a1', text: 'It was too expensive to make' },
        { id: 'ntq13a2', text: 'The invention of valves made trumpets more versatile and easier to play' },
        { id: 'ntq13a3', text: 'It was banned by the church' },
        { id: 'ntq13a4', text: 'All trumpet players retired' },
      ],
      correctAnswerId: 'ntq13a2',
      explanation: "The invention of valves in the early 19th century allowed trumpets to play all chromatic notes easily, making the difficult natural trumpet technique obsolete."
    },
    {
      id: 'ntq14',
      text: "What is the lowest note that a natural trumpet can reliably play?",
      options: [
        { id: 'ntq14a1', text: 'The fundamental (1st harmonic)' },
        { id: 'ntq14a2', text: 'The 2nd harmonic (octave)' },
        { id: 'ntq14a3', text: 'The 3rd harmonic (perfect fifth above the octave)' },
        { id: 'ntq14a4', text: 'The 4th harmonic (two octaves above fundamental)' },
      ],
      correctAnswerId: 'ntq14a2',
      explanation: "While the fundamental exists theoretically, the 2nd harmonic (octave) is the lowest note that natural trumpets can reliably and clearly produce."
    },
    {
      id: 'ntq15',
      text: "What material were natural trumpet mouthpieces typically made from?",
      options: [
        { id: 'ntq15a1', text: 'Wood' },
        { id: 'ntq15a2', text: 'Silver or brass' },
        { id: 'ntq15a3', text: 'Ivory or horn' },
        { id: 'ntq15a4', text: 'Plastic' },
      ],
      correctAnswerId: 'ntq15a2',
      explanation: "Natural trumpet mouthpieces were typically made from silver or brass, materials that provided good resonance and durability for the demanding playing technique."
    },
    {
      id: 'ntq16',
      text: "How many usable notes could a skilled natural trumpet player produce in the clarino register?",
      options: [
        { id: 'ntq16a1', text: 'Only 3-4 notes' },
        { id: 'ntq16a2', text: 'About 8-10 notes' },
        { id: 'ntq16a3', text: 'A complete chromatic scale' },
        { id: 'ntq16a4', text: 'Over 20 different pitches' },
      ],
      correctAnswerId: 'ntq16a2',
      explanation: "In the high clarino register, skilled players could access about 8-10 different pitches from the harmonic series, allowing for more melodic playing than in lower registers."
    },
    {
      id: 'ntq17',
      text: "What was the typical ensemble size for trumpet parts in Baroque orchestras?",
      options: [
        { id: 'ntq17a1', text: 'One trumpet only' },
        { id: 'ntq17a2', text: 'Two trumpets' },
        { id: 'ntq17a3', text: 'Four trumpets' },
        { id: 'ntq17a4', text: 'Six or more trumpets' },
      ],
      correctAnswerId: 'ntq17a2',
      explanation: "Baroque orchestras typically used two trumpets, often with one playing higher clarino parts and the other playing lower principal parts."
    },
    {
      id: 'ntq18',
      text: "What is the modern revival of natural trumpet playing associated with?",
      options: [
        { id: 'ntq18a1', text: 'Jazz music' },
        { id: 'ntq18a2', text: 'The historically informed performance movement' },
        { id: 'ntq18a3', text: 'Rock music' },
        { id: 'ntq18a4', text: 'Electronic music' },
      ],
      correctAnswerId: 'ntq18a2',
      explanation: "The revival of natural trumpet playing is part of the historically informed performance movement, which seeks to perform Baroque music on period instruments."
    },
    {
      id: 'ntq19',
      text: "What was the term for the lower trumpet part in Baroque music?",
      options: [
        { id: 'ntq19a1', text: 'Clarino' },
        { id: 'ntq19a2', text: 'Principale' },
        { id: 'ntq19a3', text: 'Basso' },
        { id: 'ntq19a4', text: 'Continuo' },
      ],
      correctAnswerId: 'ntq19a2',
      explanation: "The 'principale' was the lower trumpet part, typically playing simpler rhythmic and harmonic support while the clarino played the more virtuosic high parts."
    },
    {
      id: 'ntq20',
      text: "What acoustic principle explains why higher harmonics on natural trumpet are closer together in pitch?",
      options: [
        { id: 'ntq20a1', text: 'The Doppler effect' },
        { id: 'ntq20a2', text: 'The mathematical relationship of the harmonic series' },
        { id: 'ntq20a3', text: 'Temperature changes in the instrument' },
        { id: 'ntq20a4', text: 'The material of the trumpet' },
      ],
      correctAnswerId: 'ntq20a2',
      explanation: "In the harmonic series, higher harmonics become progressively closer in pitch because they represent smaller fractional differences in frequency, making scale-like passages possible in the upper register."
    }
  ]
};
