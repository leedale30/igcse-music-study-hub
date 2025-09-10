import { Quiz } from '../../../../types';

export const bassoContinuoTermQuiz: Quiz = {
  title: "Basso Continuo Quiz",
  questions: [
    {
      id: 'bcq1',
      text: "The Basso Continuo typically involves which two types of instruments performing together?",
      options: [
        { id: 'bcq1a1', text: 'Two melody instruments (e.g., violins)' },
        { id: 'bcq1a2', text: 'A percussion instrument and a wind instrument' },
        { id: 'bcq1a3', text: 'A low sustaining instrument (e.g., cello) and a chord-playing instrument (e.g., harpsichord)' },
        { id: 'bcq1a4', text: 'Only keyboard instruments' },
      ],
      correctAnswerId: 'bcq1a3',
      explanation: "Basso Continuo combines a bass line instrument (like cello or bassoon) with a chord-playing instrument (like harpsichord or organ)."
    },
    {
      id: 'bcq2',
      text: "What is 'Figured Bass'?",
      options: [
        { id: 'bcq2a1', text: 'A highly ornamented melodic line.' },
        { id: 'bcq2a2', text: 'A shorthand notation of numbers and symbols under the bass line indicating chords.' },
        { id: 'bcq2a3', text: 'The main theme of a fugue.' },
        { id: 'bcq2a4', text: 'A specific type of dance rhythm.' },
      ],
      correctAnswerId: 'bcq2a2',
      explanation: "Figured bass uses numbers/symbols to tell the continuo player which harmonies to improvise over the written bass notes."
    },
    {
      id: 'bcq3',
      text: "Which of these keyboard instruments was MOST commonly used for Basso Continuo in secular Baroque music?",
      options: [
        { id: 'bcq3a1', text: 'Piano' },
        { id: 'bcq3a2', text: 'Clavichord' },
        { id: 'bcq3a3', text: 'Harpsichord' },
        { id: 'bcq3a4', text: 'Synthesizer' },
      ],
      correctAnswerId: 'bcq3a3',
      explanation: "The harpsichord was the most common keyboard instrument for continuo in secular instrumental and vocal music."
    },
    {
      id: 'bcq4',
      text: "The act of playing the chords from a figured bass line is called:",
      options: [
        { id: 'bcq4a1', text: 'Transcription' },
        { id: 'bcq4a2', text: 'Modulation' },
        { id: 'bcq4a3', text: 'Realization' },
        { id: 'bcq4a4', text: 'Sequencing' },
      ],
      correctAnswerId: 'bcq4a3',
      explanation: "'Realization' is the term for performing the harmonies indicated by (or implied by) the Basso Continuo line."
    },
    {
      id: 'bcq5',
      text: "Which of the following was NOT a primary function of the Basso Continuo?",
      options: [
        { id: 'bcq5a1', text: 'Providing harmonic support.' },
        { id: 'bcq5a2', text: 'Contributing to rhythmic drive.' },
        { id: 'bcq5a3', text: 'Playing the main melody exclusively.' },
        { id: 'bcq5a4', text: 'Unifying the ensemble texture.' },
      ],
      correctAnswerId: 'bcq5a3',
      explanation: "While the continuo player might add melodic interest, its primary role was harmonic and rhythmic support, not playing the main melody."
    },
    {
      id: 'bcq6',
      text: "True or False: Continuo players were expected to play only exactly what was written, with no improvisation.",
      options: [
        { id: 'bcq6a1', text: 'True' },
        { id: 'bcq6a2', text: 'False' },
      ],
      correctAnswerId: 'bcq6a2',
      explanation: "False. Continuo players were expected to improvise and elaborate on their parts, adapting to the music and performers."
    },
    {
      id: 'bcq7',
      text: "Which of these instruments would typically play the bass LINE of the Basso Continuo?",
      options: [
        { id: 'bcq7a1', text: 'Flute' },
        { id: 'bcq7a2', text: 'Violin' },
        { id: 'bcq7a3', text: 'Cello or Viola da Gamba' },
        { id: 'bcq7a4', text: 'Trumpet' },
      ],
      correctAnswerId: 'bcq7a3',
      explanation: "Low-pitched sustaining instruments like the cello, viola da gamba, or bassoon played the bass line."
    },
    {
      id: 'bcq8',
      text: "The decline of Basso Continuo practice is a marker for the transition from the Baroque to which musical era?",
      options: [
        { id: 'bcq8a1', text: 'Renaissance' },
        { id: 'bcq8a2', text: 'Classical' },
        { id: 'bcq8a3', text: 'Romantic' },
        { id: 'bcq8a4', text: 'Modern' },
      ],
      correctAnswerId: 'bcq8a2',
      explanation: "The phasing out of Basso Continuo in the mid-18th century is one of the key distinctions between Baroque and Classical music."
    },
    {
      id: 'bcq9',
      text: "In the absence of figures, what would a continuo player generally assume for the harmony above a bass note?",
      options: [
        { id: 'bcq9a1', text: 'A seventh chord.' },
        { id: 'bcq9a2', text: 'A root position triad.' },
        { id: 'bcq9a3', text: 'A dissonant cluster.' },
        { id: 'bcq9a4', text: 'Silence.' },
      ],
      correctAnswerId: 'bcq9a2',
      explanation: "If no figures were present, a root position triad (with a third and fifth above the bass) was usually implied."
    },
    {
      id: 'bcq10',
      text: "Which type of Baroque composition would almost certainly NOT feature a Basso Continuo?",
      options: [
        { id: 'bcq10a1', text: 'Solo Harpsichord Suite' },
        { id: 'bcq10a2', text: 'Trio Sonata' },
        { id: 'bcq10a3', text: 'Opera Aria' },
        { id: 'bcq10a4', text: 'Concerto Grosso' },
      ],
      correctAnswerId: 'bcq10a1',
      explanation: "While a harpsichord is a continuo instrument, a solo harpsichord suite implies the harpsichord is the solo instrument playing all parts, not one part of a continuo team. The other genres ubiquitously used continuo."
    }
  ]
};
