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
    }
  ]
};
