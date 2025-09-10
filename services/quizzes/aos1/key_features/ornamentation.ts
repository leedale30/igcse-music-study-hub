import { Quiz } from '../../../../types';

export const ornamentationTermQuiz: Quiz = {
  title: "Baroque Ornamentation Quiz",
  questions: [
    {
      id: 'ornq1',
      text: "What is the primary purpose of ornamentation in Baroque music?",
      options: [
        { id: 'ornq1a1', text: 'To add expression, virtuosity, and variety.' },
        { id: 'ornq1a2', text: 'To simplify the melody.' },
        { id: 'ornq1a3', text: 'To change the key of the music.' },
        { id: 'ornq1a4', text: 'To make the music slower.' },
      ],
      correctAnswerId: 'ornq1a1',
      explanation: "The main purpose of ornamentation is to decorate and embellish a melodic line, allowing performers to show off their skill, add emotional depth, and create interest in repeated sections."
    },
    {
      id: 'ornq2',
      text: "A Trill (tr) is a rapid alternation between the written note and which other note?",
      options: [
        { id: 'ornq2a1', text: 'The note a third above.' },
        { id: 'ornq2a2', text: 'The note below.' },
        { id: 'ornq2a3', text: 'The note above.' },
        { id: 'ornq2a4', text: 'The same note repeated.' },
      ],
      correctAnswerId: 'ornq2a3',
      explanation: "A trill involves rapidly alternating between the main note and the note directly above it in the scale. In the Baroque era, it typically started on this upper note."
    },
    {
      id: 'ornq3',
      text: "Which ornament involves playing the main note, the note below it, and then the main note again very quickly?",
      options: [
        { id: 'ornq3a1', text: 'Upper Mordent' },
        { id: 'ornq3a2', text: 'Turn' },
        { id: 'ornq3a3', text: 'Appoggiatura' },
        { id: 'ornq3a4', text: 'Lower Mordent' },
      ],
      correctAnswerId: 'ornq3a4',
      explanation: "A lower mordent is a three-note figure: main note - lower neighbour - main note. An upper mordent goes to the upper neighbour instead."
    },
    {
      id: 'ornq4',
      text: "Which ornament is known as the 'leaning note' because it is played on the beat, takes time from the main note, and creates an expressive dissonance?",
      options: [
        { id: 'ornq4a1', text: 'Acciaccatura' },
        { id: 'ornq4a2', text: 'Appoggiatura' },
        { id: 'ornq4a3', text: 'Trill' },
        { id: 'ornq4a4', text: 'Mordent' },
      ],
      correctAnswerId: 'ornq4a2',
      explanation: "The appoggiatura is a key expressive dissonance in Baroque music, played on the beat and resolving to the main note."
    },
    {
      id: 'ornq5',
      text: "True or False: In the Baroque era, performers were never expected to improvise their own ornaments; they only played what was written.",
      options: [
        { id: 'ornq5a1', text: 'True' },
        { id: 'ornq5a2', text: 'False' },
      ],
      correctAnswerId: 'ornq5a2',
      explanation: "False. Performers were highly expected to improvise ornaments, especially on repeated sections of music. It was a core part of the performance practice."
    }
  ]
};
