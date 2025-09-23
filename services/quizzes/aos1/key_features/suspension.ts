import { Quiz } from '../../../../types';

export const suspensionTermQuiz: Quiz = {
  title: "Suspensions Quiz",
  questions: [
    {
      id: 'susq1',
      text: "What are the three essential steps of a musical suspension, in the correct order?",
      options: [
        { id: 'susq1a1', text: 'Resolution, Dissonance, Consonance' },
        { id: 'susq1a2', text: 'Dissonance, Preparation, Resolution' },
        { id: 'susq1a3', text: 'Preparation, Suspension (Dissonance), Resolution' },
        { id: 'susq1a4', text: 'Tension, Release, Preparation' },
      ],
      correctAnswerId: 'susq1a3',
      explanation: "A suspension is a three-step process: 1. Preparation (the note is consonant), 2. Suspension (the note is held over to become dissonant), 3. Resolution (the note moves, usually down by step, to become consonant)."
    },
    {
      id: 'susq2',
      text: "What is the primary emotional or harmonic effect of a suspension?",
      options: [
        { id: 'susq2a1', text: 'To create a simple, unchanging harmony.' },
        { id: 'susq2a2', text: 'To build rhythmic momentum.' },
        { id: 'susq2a3', text: 'To create a feeling of surprise by changing key.' },
        { id: 'susq2a4', text: 'To create expressive harmonic tension followed by a satisfying release.' },
      ],
      correctAnswerId: 'susq2a4',
      explanation: "The dissonance of the suspension creates tension, and its resolution to a consonant note provides a satisfying feeling of release, often described as a 'yearning' quality."
    },
    {
      id: 'susq3',
      text: "During which step does the 'suspension' note become dissonant against the new chord?",
      options: [
        { id: 'susq3a1', text: 'Preparation' },
        { id: 'susq3a2', text: 'Suspension' },
        { id: 'susq3a3', text: 'Resolution' },
        { id: 'susq3a4', text: 'Between the preparation and suspension' },
      ],
      correctAnswerId: 'susq3a2',
      explanation: "The dissonance occurs during the suspension step itself, when the prepared note is held over into a new harmony with which it clashes."
    },
    {
      id: 'susq4',
      text: "How does the suspended note typically resolve?",
      options: [
        { id: 'susq4a1', text: 'By leaping upwards a large interval.' },
        { id: 'susq4a2', text: 'By moving downwards by step.' },
        { id: 'susq4a3', text: 'By remaining on the same note indefinitely.' },
        { id: 'susq4a4', text: 'By moving upwards by step.' },
      ],
      correctAnswerId: 'susq4a2',
      explanation: "The vast majority of suspensions resolve by moving downwards by step to a consonant note."
    },
    {
      id: 'susq5',
      text: "A suspension is named by the intervals above the bass. A '4-3 suspension' means the suspended note is a 4th above the bass and resolves to what interval above the bass?",
      options: [
        { id: 'susq5a1', text: 'A 5th' },
        { id: 'susq5a2', text: 'A 2nd' },
        { id: 'susq5a3', text: 'A 3rd' },
        { id: 'susq5a4', text: 'A 6th' },
      ],
      correctAnswerId: 'susq5a3',
      explanation: "The numbers refer to the dissonant interval followed by the resolved interval. So in a 4-3 suspension, the dissonant 4th resolves down to a consonant 3rd."
    },
    {
      id: 'susq6',
      text: "What is a '7-6 suspension'?",
      options: [
        { id: 'susq6a1', text: 'A suspension where the 7th above the bass resolves to the 6th' },
        { id: 'susq6a2', text: 'A suspension that lasts for 7 beats then 6 beats' },
        { id: 'susq6a3', text: 'A suspension in the 7th and 6th measures' },
        { id: 'susq6a4', text: 'A suspension that moves up by step' },
      ],
      correctAnswerId: 'susq6a1',
      explanation: "A 7-6 suspension occurs when a note that is a 7th above the bass is held over and then resolves down by step to the 6th above the bass."
    },
    {
      id: 'susq7',
      text: "Which type of suspension is most common in Baroque music?",
      options: [
        { id: 'susq7a1', text: '2-3 suspension' },
        { id: 'susq7a2', text: '4-3 suspension' },
        { id: 'susq7a3', text: '9-8 suspension' },
        { id: 'susq7a4', text: '6-5 suspension' },
      ],
      correctAnswerId: 'susq7a2',
      explanation: "The 4-3 suspension is the most frequently used suspension in Baroque music, creating a strong sense of resolution from the dissonant 4th to the consonant 3rd."
    },
    {
      id: 'susq8',
      text: "What is a 'chain of suspensions'?",
      options: [
        { id: 'susq8a1', text: 'Multiple suspensions occurring one after another' },
        { id: 'susq8a2', text: 'Suspensions that are connected by chains' },
        { id: 'susq8a3', text: 'Suspensions that never resolve' },
        { id: 'susq8a4', text: 'Suspensions played by string instruments only' },
      ],
      correctAnswerId: 'susq8a1',
      explanation: "A chain of suspensions occurs when multiple suspensions happen in sequence, creating a flowing, expressive melodic line with continuous tension and release."
    },
    {
      id: 'susq9',
      text: "In which voice part are suspensions most commonly found?",
      options: [
        { id: 'susq9a1', text: 'Bass' },
        { id: 'susq9a2', text: 'Tenor' },
        { id: 'susq9a3', text: 'Alto' },
        { id: 'susq9a4', text: 'Soprano (highest voice)' },
      ],
      correctAnswerId: 'susq9a4',
      explanation: "Suspensions are most commonly found in the soprano (highest) voice because they are more audible and create a stronger melodic effect in the upper register."
    },
    {
      id: 'susq10',
      text: "What is the difference between a suspension and an appoggiatura?",
      options: [
        { id: 'susq10a1', text: 'There is no difference' },
        { id: 'susq10a2', text: 'A suspension is prepared; an appoggiatura is approached by leap' },
        { id: 'susq10a3', text: 'A suspension is louder than an appoggiatura' },
        { id: 'susq10a4', text: 'A suspension resolves upward; an appoggiatura resolves downward' },
      ],
      correctAnswerId: 'susq10a2',
      explanation: "The key difference is preparation: a suspension must be prepared (the dissonant note is first heard as consonant), while an appoggiatura is approached by leap without preparation."
    },
    {
      id: 'susq11',
      text: "What is a 'bass suspension' or '2-3 suspension'?",
      options: [
        { id: 'susq11a1', text: 'A suspension that occurs only in bass clef' },
        { id: 'susq11a2', text: 'A suspension in the bass voice that resolves upward by step' },
        { id: 'susq11a3', text: 'A suspension that lasts for two beats' },
        { id: 'susq11a4', text: 'A suspension played by bass instruments only' },
      ],
      correctAnswerId: 'susq11a2',
      explanation: "A bass suspension (2-3) occurs when the bass voice has a dissonant 2nd above the bass that resolves upward by step to the 3rd, which is unusual since most suspensions resolve downward."
    },
    {
      id: 'susq12',
      text: "How do composers typically use suspensions for word-painting in vocal music?",
      options: [
        { id: 'susq12a1', text: 'To represent happy emotions only' },
        { id: 'susq12a2', text: 'To illustrate words expressing pain, longing, or sorrow' },
        { id: 'susq12a3', text: 'To represent fast movement' },
        { id: 'susq12a4', text: 'To represent loud sounds' },
      ],
      correctAnswerId: 'susq12a2',
      explanation: "Suspensions are often used in vocal music to illustrate words expressing emotional pain, longing, or sorrow because of their inherent tension and yearning quality."
    },
    {
      id: 'susq13',
      text: "What happens if a suspension fails to resolve properly?",
      options: [
        { id: 'susq13a1', text: 'It becomes a consonant chord tone' },
        { id: 'susq13a2', text: 'It creates an unresolved dissonance that sounds incomplete' },
        { id: 'susq13a3', text: 'It automatically becomes an appoggiatura' },
        { id: 'susq13a4', text: 'Nothing happens - resolution is optional' },
      ],
      correctAnswerId: 'susq13a2',
      explanation: "If a suspension doesn't resolve, it leaves an unresolved dissonance that sounds incomplete and unsatisfying to the ear, violating the basic principle of tension and release."
    },
    {
      id: 'susq14',
      text: "In what rhythmic position do suspensions typically occur?",
      options: [
        { id: 'susq14a1', text: 'Only on weak beats' },
        { id: 'susq14a2', text: 'Only on strong beats' },
        { id: 'susq14a3', text: 'The dissonance typically occurs on a strong beat' },
        { id: 'susq14a4', text: 'Rhythm doesn\'t matter for suspensions' },
      ],
      correctAnswerId: 'susq14a3',
      explanation: "Suspensions are most effective when the dissonant note occurs on a strong beat (downbeat), which emphasizes the tension before the resolution on a weaker beat."
    },
    {
      id: 'susq15',
      text: "What is a 'retardation'?",
      options: [
        { id: 'susq15a1', text: 'A suspension that resolves very slowly' },
        { id: 'susq15a2', text: 'A suspension that resolves upward instead of downward' },
        { id: 'susq15a3', text: 'A suspension that occurs in the bass' },
        { id: 'susq15a4', text: 'A suspension that is prepared twice' },
      ],
      correctAnswerId: 'susq15a2',
      explanation: "A retardation is a type of suspension that resolves upward by step instead of the typical downward resolution, often used at cadences where the leading tone resolves up to the tonic."
    },
    {
      id: 'susq16',
      text: "Which Baroque composer was particularly famous for their expressive use of suspensions?",
      options: [
        { id: 'susq16a1', text: 'Wolfgang Amadeus Mozart' },
        { id: 'susq16a2', text: 'Johann Sebastian Bach' },
        { id: 'susq16a3', text: 'Ludwig van Beethoven' },
        { id: 'susq16a4', text: 'Franz Schubert' },
      ],
      correctAnswerId: 'susq16a2',
      explanation: "J.S. Bach was renowned for his masterful and expressive use of suspensions, particularly in his chorales, where they create profound emotional depth and harmonic sophistication."
    },
    {
      id: 'susq17',
      text: "What is the harmonic function of the preparation phase?",
      options: [
        { id: 'susq17a1', text: 'To create immediate dissonance' },
        { id: 'susq17a2', text: 'To establish the note as consonant before it becomes dissonant' },
        { id: 'susq17a3', text: 'To resolve the tension' },
        { id: 'susq17a4', text: 'To change the key' },
      ],
      correctAnswerId: 'susq17a2',
      explanation: "The preparation phase establishes the note as a normal, consonant part of the harmony, which makes its transformation into a dissonance more striking and effective."
    },
    {
      id: 'susq18',
      text: "How do suspensions contribute to voice leading in Baroque counterpoint?",
      options: [
        { id: 'susq18a1', text: 'They create large leaps between voices' },
        { id: 'susq18a2', text: 'They promote smooth, stepwise melodic motion' },
        { id: 'susq18a3', text: 'They eliminate the need for other voices' },
        { id: 'susq18a4', text: 'They make all voices move in parallel motion' },
      ],
      correctAnswerId: 'susq18a2',
      explanation: "Suspensions promote smooth voice leading by creating stepwise melodic motion, particularly in the resolution phase, which is a fundamental principle of good counterpoint."
    },
    {
      id: 'susq19',
      text: "What is a 'double suspension'?",
      options: [
        { id: 'susq19a1', text: 'A suspension that lasts twice as long' },
        { id: 'susq19a2', text: 'Two suspensions occurring simultaneously in different voices' },
        { id: 'susq19a3', text: 'A suspension that resolves twice' },
        { id: 'susq19a4', text: 'A suspension played by two instruments' },
      ],
      correctAnswerId: 'susq19a2',
      explanation: "A double suspension occurs when two different voices have suspensions at the same time, creating multiple layers of tension and resolution simultaneously."
    },
    {
      id: 'susq20',
      text: "Why are suspensions considered essential to the Baroque harmonic language?",
      options: [
        { id: 'susq20a1', text: 'They were required by law in the Baroque period' },
        { id: 'susq20a2', text: 'They provide expressive dissonance treatment and smooth voice leading' },
        { id: 'susq20a3', text: 'They make music easier to play' },
        { id: 'susq20a4', text: 'They eliminate the need for chord progressions' },
      ],
      correctAnswerId: 'susq20a2',
      explanation: "Suspensions are essential to Baroque harmony because they provide a sophisticated way to treat dissonance expressively while maintaining smooth voice leading, creating the emotional depth characteristic of the period."
    }
  ]
};
