import { Quiz } from '../../../../types';

export const polyphonyTermQuiz: Quiz = {
  title: "Polyphony and Counterpoint Quiz",
  questions: [
    {
      id: 'ptq1',
      text: "What is the defining characteristic of a polyphonic texture?",
      options: [
        { id: 'ptq1a1', text: 'A single, unaccompanied melody.' },
        { id: 'ptq1a2', text: 'One main melody with chordal accompaniment.' },
        { id: 'ptq1a3', text: 'Two or more independent melodic lines woven together simultaneously.' },
        { id: 'ptq1a4', text: 'A single note held for a long time.' },
      ],
      correctAnswerId: 'ptq1a3',
      explanation: "Polyphony (from 'many sounds') is defined by having multiple independent melodic lines sounding at the same time."
    },
    {
      id: 'ptq2',
      text: "The art and technique of writing polyphonic music is known as:",
      options: [
        { id: 'ptq2a1', text: 'Homophony' },
        { id: 'ptq2a2', text: 'Counterpoint' },
        { id: 'ptq2a3', text: 'Figured Bass' },
        { id: 'ptq2a4', text: 'Terraced Dynamics' },
      ],
      correctAnswerId: 'ptq2a2',
      explanation: "Counterpoint ('point against point' or 'note against note') is the craft of combining independent melodies harmoniously."
    },
    {
      id: 'ptq3',
      text: "Which musical texture, common for contrast in Baroque music, features a single clear melody with chordal accompaniment?",
      options: [
        { id: 'ptq3a1', text: 'Polyphonic' },
        { id: 'ptq3a2', text: 'Monophonic' },
        { id: 'ptq3a3', text: 'Homophonic' },
        { id: 'ptq3a4', text: 'Heterophonic' },
      ],
      correctAnswerId: 'ptq3a3',
      explanation: "Homophonic texture has one main melodic line supported by chords, making it different from the interwoven lines of polyphony."
    },
    {
      id: 'ptq4',
      text: "What is the most complex form of contrapuntal music in the Baroque era, built on the imitation of a main theme called a 'subject'?",
      options: [
        { id: 'ptq4a1', text: 'Aria' },
        { id: 'ptq4a2', text: 'Concerto' },
        { id: 'ptq4a3', text: 'Sonata' },
        { id: 'ptq4a4', text: 'Fugue' },
      ],
      correctAnswerId: 'ptq4a4',
      explanation: "A fugue is the pinnacle of Baroque polyphony, where a 'subject' is introduced by one voice and then imitated by others."
    },
    {
      id: 'ptq5',
      text: "When one musical line or voice copies the melody of another, often starting a few beats later, this is called:",
      options: [
        { id: 'ptq5a1', text: 'Suspension' },
        { id: 'ptq5a2', text: 'Sequence' },
        { id: 'ptq5a3', text: 'Imitation' },
        { id: 'ptq5a4', text: 'Cadence' },
      ],
      correctAnswerId: 'ptq5a3',
      explanation: "Imitation is a key device in polyphonic and contrapuntal music, where one part mimics another."
    }
  ]
};
