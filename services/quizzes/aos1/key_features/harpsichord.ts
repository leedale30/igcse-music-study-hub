import { Quiz } from '../../../../types';

export const harpsichordQuiz: Quiz = {
  title: "The Harpsichord Quiz",
  questions: [
    {
      id: 'hq1',
      text: "How does a harpsichord produce sound?",
      options: [
        { id: 'hq1a1', text: 'By striking the strings with a hammer.' },
        { id: 'hq1a2', text: 'By plucking the strings with a plectrum.' },
        { id: 'hq1a3', text: 'By rubbing the strings with a bow.' },
        { id: 'hq1a4', text: 'By blowing air through pipes.' },
      ],
      correctAnswerId: 'hq1a2',
      explanation: "The harpsichord's mechanism involves a plectrum (often made from a bird's quill) plucking the string when a key is pressed, giving it a bright, distinct sound."
    },
    {
      id: 'hq2',
      text: "Can a harpsichord player create a crescendo by changing their touch and pressing the keys harder?",
      options: [
        { id: 'hq2a1', text: 'Yes, just like a modern piano.' },
        { id: 'hq2a2', text: 'No, the volume cannot be changed by touch.' },
        { id: 'hq2a3', text: 'Only on very large harpsichords.' },
        { id: 'hq2a4', text: 'Yes, but only for very soft passages.' },
      ],
      correctAnswerId: 'hq2a2',
      explanation: "A key characteristic of the harpsichord is its inability to change volume based on finger pressure. This is why Baroque music often features terraced dynamics instead."
    },
    {
      id: 'hq3',
      text: "What was the primary and most essential role of the harpsichord in a Baroque orchestra?",
      options: [
        { id: 'hq3a1', text: 'Playing virtuosic solos in every piece.' },
        { id: 'hq3a2', text: 'Providing percussive effects.' },
        { id: 'hq3a3', text: 'Serving as the chordal instrument of the Basso Continuo and leading the ensemble.' },
        { id: 'hq3a4', text: 'Doubling the main violin melody.' },
      ],
      correctAnswerId: 'hq3a3',
      explanation: "The harpsichord was the harmonic and rhythmic heart of the orchestra, realizing chords for the continuo and directing the other musicians."
    },
    {
      id: 'hq4',
      text: "The numerical shorthand notation used by harpsichordists to improvise the chords of the Basso Continuo is called:",
      options: [
        { id: 'hq4a1', text: 'Tablature' },
        { id: 'hq4a2', text: 'Figured Bass' },
        { id: 'hq4a3', text: 'Lead Sheet' },
        { id: 'hq4a4', text: 'Graphic Notation' },
      ],
      correctAnswerId: 'hq4a2',
      explanation: "Figured bass provided the essential harmonic information for the harpsichordist to realize their part."
    }
  ]
};
