import { Quiz } from '../../../../types';

export const baroqueHarmonyQuiz: Quiz = {
  title: "Baroque Harmony and Tonality Quiz",
  questions: [
    {
      id: 'bhq1',
      text: "What was the primary harmonic system that became fully established during the Baroque era, replacing the earlier system of church modes?",
      options: [
        { id: 'bhq1a1', text: 'The 12-tone serial system' },
        { id: 'bhq1a2', text: 'The major-minor tonal system' },
        { id: 'bhq1a3', text: 'The whole-tone system' },
        { id: 'bhq1a4', text: 'Atonality' },
      ],
      correctAnswerId: 'bhq1a2',
      explanation: "The Baroque period is when the major-minor key system, with its emphasis on a central tonic, became the standard for Western music."
    },
    {
      id: 'bhq2',
      text: "What was the primary role of the Basso Continuo in defining Baroque harmony?",
      options: [
        { id: 'bhq2a1', text: 'To play the main melody.' },
        { id: 'bhq2a2', text: 'To provide a percussive rhythm only.' },
        { id: 'bhq2a3', text: 'To provide the harmonic foundation with a bass line and realized chords.' },
        { id: 'bhq2a4', text: 'To be played only during solo sections.' },
      ],
      correctAnswerId: 'bhq2a3',
      explanation: "The Basso Continuo was the harmonic backbone, with a bass instrument playing the bass line and a chordal instrument (like a harpsichord) realizing the harmonies."
    },
    {
      id: 'bhq3',
      text: "What does 'figured bass' refer to in a Basso Continuo part?",
      options: [
        { id: 'bhq3a1', text: 'Ornaments the performer should add to the melody.' },
        { id: 'bhq3a2', text: 'A numerical shorthand indicating which chords to improvise over the bass note.' },
        { id: 'bhq3a3', text: 'The tempo and dynamic markings for the bass instrument.' },
        { id: 'bhq3a4', text: 'A highly decorated bass line.' },
      ],
      correctAnswerId: 'bhq3a2',
      explanation: "Figured bass uses numbers and symbols to tell the continuo player which intervals and chords to play above the written bass line."
    },
    {
      id: 'bhq4',
      text: "The act of improvising and playing the chords indicated by figured bass is called:",
      options: [
        { id: 'bhq4a1', text: 'Modulation' },
        { id: 'bhq4a2', text: 'Transcription' },
        { id: 'bhq4a3', text: 'Augmentation' },
        { id: 'bhq4a4', text: 'Realization' },
      ],
      correctAnswerId: 'bhq4a4',
      explanation: "'Realization' is the term for the performance of the chords and harmonies from a Basso Continuo part."
    },
    {
      id: 'bhq5',
      text: "What is the function of a Perfect Cadence (V-I) in Baroque harmony?",
      options: [
        { id: 'bhq5a1', text: 'To create a sense of suspense.' },
        { id: 'bhq5a2', text: 'To provide a strong sense of finality and confirm the key.' },
        { id: 'bhq5a3', text: 'To smoothly transition to a new section without resolving.' },
        { id: 'bhq5a4', text: 'To surprise the listener by moving to the relative minor.' },
      ],
      correctAnswerId: 'bhq5a2',
      explanation: "The Perfect Cadence (V-I) is the strongest harmonic progression for creating closure and confirming the tonic key."
    },
    {
      id: 'bhq6',
      text: "Which type of cadence in Baroque music creates a sense of pause or expectation by ending on the dominant (V) chord?",
      options: [
        { id: 'bhq6a1', text: 'Perfect Cadence' },
        { id: 'bhq6a2', text: 'Imperfect Cadence' },
        { id: 'bhq6a3', text: 'Plagal Cadence' },
        { id: 'bhq6a4', text: 'Interrupted Cadence' },
      ],
      correctAnswerId: 'bhq6a2',
      explanation: "An Imperfect Cadence ends on the dominant (V) chord, leaving the music feeling unresolved and creating anticipation for the next phrase."
    },
    {
      id: 'bhq7',
      text: "A 'suspension' is a common expressive device in Baroque harmony. It involves:",
      options: [
        { id: 'bhq7a1', text: 'A sudden stop in the music.' },
        { id: 'bhq7a2', text: 'Holding a note from one chord over to the next, creating a dissonance that then resolves downwards.' },
        { id: 'bhq7a3', text: 'A very fast, virtuosic scale passage.' },
        { id: 'bhq7a4', text: 'Gradually getting louder over a single chord.' },
      ],
      correctAnswerId: 'bhq7a2',
      explanation: "A suspension creates expressive tension by holding a note to create a dissonance, which then resolves to a consonance (e.g., a 4-3 suspension)."
    },
    {
      id: 'bhq8',
      text: "When Baroque composers modulated (changed key), they most commonly moved to:",
      options: [
        { id: 'bhq8a1', text: 'Distant and unrelated keys for dramatic effect.' },
        { id: 'bhq8a2', text: 'The same key in a different mode (e.g. C major to C minor).' },
        { id: 'bhq8a3', text: 'Closely related keys, such as the dominant or relative minor.' },
        { id: 'bhq8a4', text: 'A key with a completely different number of sharps or flats.' },
      ],
      correctAnswerId: 'bhq8a3',
      explanation: "Baroque modulations were typically smooth and logical, moving to closely related keys like the dominant (a fifth up), subdominant (a fourth up), or the relative major/minor."
    },
    {
      id: 'bhq9',
      text: "What is a 'Tierce de Picardie'?",
      options: [
        { id: 'bhq9a1', text: 'A specific type of French dance.' },
        { id: 'bhq9a2', text: 'A chord used to modulate to the dominant key.' },
        { id: 'bhq9a3', text: 'A major tonic chord at the end of a musical piece in a minor key.' },
        { id: 'bhq9a4', text: 'An ornament for the harpsichord.' },
      ],
      correctAnswerId: 'bhq9a3',
      explanation: "A Tierce de Picardie (Picardy Third) is when a piece in a minor key ends with a major tonic chord, creating a surprisingly bright and uplifting conclusion."
    },
    {
      id: 'bhq10',
      text: "The rate at which chords change in a piece of music is referred to as:",
      options: [
        { id: 'bhq10a1', text: 'Rhythmic drive' },
        { id: 'bhq10a2', text: 'Harmonic rhythm' },
        { id: 'bhq10a3', text: 'Metric pulse' },
        { id: 'bhq10a4', text: 'Tempo' },
      ],
      correctAnswerId: 'bhq10a2',
      explanation: "Harmonic rhythm is the speed at which the harmonies change. In Baroque music, this is often steady and driving, contributing to the music's momentum."
    }
  ]
};
