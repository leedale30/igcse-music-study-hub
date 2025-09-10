import { Quiz } from '../../../../types';

export const baroqueViolinQuiz: Quiz = {
  title: "The Baroque Violin Quiz",
  questions: [
    {
      id: 'bvq1',
      text: "What material were the strings of a Baroque violin typically made from?",
      options: [
        { id: 'bvq1a1', text: 'Steel' },
        { id: 'bvq1a2', text: 'Nylon' },
        { id: 'bvq1a3', text: 'Gut' },
        { id: 'bvq1a4', text: 'Brass' },
      ],
      correctAnswerId: 'bvq1a3',
      explanation: "Baroque violins used strings made of animal gut, which produced a warmer, richer, and less brilliant sound than modern steel strings."
    },
    {
      id: 'bvq2',
      text: "How did the bow used for a Baroque violin differ from a modern bow?",
      options: [
        { id: 'bvq2a1', text: 'It was much heavier and straighter.' },
        { id: 'bvq2a2', text: 'It was made of metal.' },
        { id: 'bvq2a3', text: 'It was convex (curved outwards), lighter, and handled differently.' },
        { id: 'bvq2a4', text: 'There was no difference.' },
      ],
      correctAnswerId: 'bvq2a3',
      explanation: "The Baroque bow's convex shape and lighter weight resulted in a different articulation, with a softer attack and natural decay on each note."
    },
    {
      id: 'bvq3',
      text: "What feature, common on modern violins for comfort and support, was typically absent on a Baroque violin?",
      options: [
        { id: 'bvq3a1', text: 'A bridge' },
        { id: 'bvq3a2', text: 'A fingerboard' },
        { id: 'bvq3a3', text: 'A chin rest' },
        { id: 'bvq3a4', text: 'Strings' },
      ],
      correctAnswerId: 'bvq3a3',
      explanation: "The chin rest and shoulder rest were not invented until the 19th century, so Baroque violins were held more freely against the collarbone."
    }
  ]
};
