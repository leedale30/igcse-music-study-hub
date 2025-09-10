import { Quiz } from '../../../../types';

export const pedalNoteTermQuiz: Quiz = {
  title: "Pedal Notes Quiz",
  questions: [
    {
      id: 'pnq1',
      text: "What is a pedal note (or pedal point)?",
      options: [
        { id: 'pnq1a1', text: 'A short, decorative note.' },
        { id: 'pnq1a2', text: 'The highest note in a chord.' },
        { id: 'pnq1a3', text: 'A long-held or repeated note, usually in the bass, while harmonies change above it.' },
        { id: 'pnq1a4', text: 'A note played only by the foot pedals of a piano.' },
      ],
      correctAnswerId: 'pnq1a3',
      explanation: "A pedal note is a sustained or repeated note, typically in the bass, that acts as a harmonic anchor while other parts move."
    },
    {
      id: 'pnq2',
      text: "The term 'pedal note' originates from which instrument?",
      options: [
        { id: 'pnq2a1', text: 'The violin' },
        { id: 'pnq2a2', text: 'The organ' },
        { id: 'pnq2a3', text: 'The harpsichord' },
        { id: 'pnq2a4', text: 'The lute' },
      ],
      correctAnswerId: 'pnq2a2',
      explanation: "The name comes from the organ, where a player can hold a bass note with their foot on a pedal."
    },
    {
      id: 'pnq3',
      text: "What is the main function of a DOMINANT pedal?",
      options: [
        { id: 'pnq3a1', text: 'To immediately end the piece.' },
        { id: 'pnq3a2', text: 'To create a sense of calm and stability.' },
        { id: 'pnq3a3', text: 'To build tension and create anticipation for a return to the tonic.' },
        { id: 'pnq3a4', text: 'To introduce a new, unrelated key.' },
      ],
      correctAnswerId: 'pnq3a3',
      explanation: "A dominant pedal (on the 5th degree of the scale) is a classic device for building harmonic tension that strongly leads back to the tonic."
    },
    {
      id: 'pnq4',
      text: "When harmonies played above a pedal note clash with it, what is created?",
      options: [
        { id: 'pnq4a1', text: 'A perfect cadence' },
        { id: 'pnq4a2', text: 'Harmonic tension (dissonance)' },
        { id: 'pnq4a3', text: 'A new melody' },
        { id: 'pnq4a4', text: 'A stable, consonant sound' },
      ],
      correctAnswerId: 'pnq4a2',
      explanation: "The clash between the changing upper harmonies and the static pedal note creates dissonance, which builds tension until it is resolved."
    },
    {
      id: 'pnq5',
      text: "What are the two most common scale degrees used for pedal notes in Baroque music?",
      options: [
        { id: 'pnq5a1', text: 'The leading note (7th) and the mediant (3rd).' },
        { id: 'pnq5a2', text: 'The subdominant (4th) and the submediant (6th).' },
        { id: 'pnq5a3', text: 'The tonic (1st) and the dominant (5th).' },
        { id: 'pnq5a4', text: 'The supertonic (2nd) and the leading note (7th).' },
      ],
      correctAnswerId: 'pnq5a3',
      explanation: "The tonic pedal is used to confirm the key, while the dominant pedal is used to create tension and prepare for a return to the tonic."
    }
  ]
};