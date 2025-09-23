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
    },
    {
      id: 'pnq6',
      text: "What is a tonic pedal primarily used for?",
      options: [
        { id: 'pnq6a1', text: 'To create maximum tension' },
        { id: 'pnq6a2', text: 'To confirm and establish the home key' },
        { id: 'pnq6a3', text: 'To modulate to a new key' },
        { id: 'pnq6a4', text: 'To create rhythmic interest' },
      ],
      correctAnswerId: 'pnq6a2',
      explanation: "A tonic pedal anchors the music firmly in the home key, providing stability and confirming the tonal center."
    },
    {
      id: 'pnq7',
      text: "In which part of a musical texture are pedal notes most commonly found?",
      options: [
        { id: 'pnq7a1', text: 'The soprano (highest) part' },
        { id: 'pnq7a2', text: 'The alto part' },
        { id: 'pnq7a3', text: 'The tenor part' },
        { id: 'pnq7a4', text: 'The bass (lowest) part' },
      ],
      correctAnswerId: 'pnq7a4',
      explanation: "Pedal notes are most commonly found in the bass part, where they provide a harmonic foundation for the changing harmonies above."
    },
    {
      id: 'pnq8',
      text: "What happens when a pedal note is sustained while the harmony above it changes?",
      options: [
        { id: 'pnq8a1', text: 'The music becomes atonal' },
        { id: 'pnq8a2', text: 'Consonance and dissonance alternate as harmonies change' },
        { id: 'pnq8a3', text: 'The pedal note changes pitch automatically' },
        { id: 'pnq8a4', text: 'The music stops completely' },
      ],
      correctAnswerId: 'pnq8a2',
      explanation: "As harmonies change above a sustained pedal note, some chords will be consonant with it while others create dissonance, creating a dynamic harmonic effect."
    },
    {
      id: 'pnq9',
      text: "Which Baroque composer was particularly famous for using pedal points in their organ works?",
      options: [
        { id: 'pnq9a1', text: 'Wolfgang Amadeus Mozart' },
        { id: 'pnq9a2', text: 'Johann Sebastian Bach' },
        { id: 'pnq9a3', text: 'Ludwig van Beethoven' },
        { id: 'pnq9a4', text: 'Franz Schubert' },
      ],
      correctAnswerId: 'pnq9a2',
      explanation: "J.S. Bach masterfully used pedal points in his organ works, particularly in his preludes and fugues, to create dramatic harmonic effects."
    },
    {
      id: 'pnq10',
      text: "What is an 'inverted pedal' or 'pedal in the soprano'?",
      options: [
        { id: 'pnq10a1', text: 'A pedal note played backwards' },
        { id: 'pnq10a2', text: 'A sustained note in the highest voice while lower parts change' },
        { id: 'pnq10a3', text: 'A pedal note that changes pitch' },
        { id: 'pnq10a4', text: 'A very short pedal note' },
      ],
      correctAnswerId: 'pnq10a2',
      explanation: "An inverted pedal occurs when the sustained note is in the soprano (highest) part instead of the bass, while the lower voices provide changing harmonies."
    },
    {
      id: 'pnq11',
      text: "In a dominant pedal, which scale degree is sustained?",
      options: [
        { id: 'pnq11a1', text: '1st degree (tonic)' },
        { id: 'pnq11a2', text: '3rd degree (mediant)' },
        { id: 'pnq11a3', text: '5th degree (dominant)' },
        { id: 'pnq11a4', text: '7th degree (leading tone)' },
      ],
      correctAnswerId: 'pnq11a3',
      explanation: "A dominant pedal sustains the 5th degree of the scale, creating tension that strongly pulls toward resolution to the tonic."
    },
    {
      id: 'pnq12',
      text: "What effect does a pedal note typically have on the harmonic rhythm?",
      options: [
        { id: 'pnq12a1', text: 'It speeds up the harmonic changes' },
        { id: 'pnq12a2', text: 'It creates a sense of harmonic stability while allowing upper voices to move' },
        { id: 'pnq12a3', text: 'It stops all harmonic movement' },
        { id: 'pnq12a4', text: 'It makes the harmony completely unpredictable' },
      ],
      correctAnswerId: 'pnq12a2',
      explanation: "A pedal note provides harmonic stability through its sustained presence while allowing the upper voices to create harmonic movement and interest."
    },
    {
      id: 'pnq13',
      text: "In which musical forms are pedal points commonly used for dramatic effect?",
      options: [
        { id: 'pnq13a1', text: 'Only in dance forms' },
        { id: 'pnq13a2', text: 'Fugues, preludes, and other contrapuntal forms' },
        { id: 'pnq13a3', text: 'Only in vocal music' },
        { id: 'pnq13a4', text: 'Only in chamber music' },
      ],
      correctAnswerId: 'pnq13a2',
      explanation: "Pedal points are particularly effective in fugues and preludes, where they can create dramatic tension and provide structural anchoring points."
    },
    {
      id: 'pnq14',
      text: "What is the difference between a pedal note and an ostinato?",
      options: [
        { id: 'pnq14a1', text: 'There is no difference' },
        { id: 'pnq14a2', text: 'A pedal is a single sustained note; an ostinato is a repeated melodic or rhythmic pattern' },
        { id: 'pnq14a3', text: 'A pedal is louder than an ostinato' },
        { id: 'pnq14a4', text: 'A pedal is only used in Baroque music' },
      ],
      correctAnswerId: 'pnq14a2',
      explanation: "A pedal note is typically a single sustained or repeated note, while an ostinato is a repeated melodic, harmonic, or rhythmic pattern that can be more complex."
    },
    {
      id: 'pnq15',
      text: "How does a pedal note affect the listener's perception of harmonic tension?",
      options: [
        { id: 'pnq15a1', text: 'It eliminates all tension' },
        { id: 'pnq15a2', text: 'It creates and releases tension as harmonies clash and resolve against it' },
        { id: 'pnq15a3', text: 'It makes the music sound random' },
        { id: 'pnq15a4', text: 'It has no effect on tension' },
      ],
      correctAnswerId: 'pnq15a2',
      explanation: "The pedal note creates a cycle of tension and release as the changing harmonies above it sometimes clash (creating dissonance) and sometimes align (creating consonance)."
    },
    {
      id: 'pnq16',
      text: "In organ music, why are pedal points particularly effective?",
      options: [
        { id: 'pnq16a1', text: 'The organ cannot play chords' },
        { id: 'pnq16a2', text: 'The foot pedals can sustain bass notes while hands play changing harmonies' },
        { id: 'pnq16a3', text: 'Organs are always out of tune' },
        { id: 'pnq16a4', text: 'They are not effective on organ' },
      ],
      correctAnswerId: 'pnq16a2',
      explanation: "The organ's foot pedals allow the organist to sustain bass notes effortlessly while the hands are free to play complex, changing harmonies on the manuals."
    },
    {
      id: 'pnq17',
      text: "What is a 'double pedal'?",
      options: [
        { id: 'pnq17a1', text: 'Two pedal notes sustained simultaneously' },
        { id: 'pnq17a2', text: 'A pedal note played twice as loud' },
        { id: 'pnq17a3', text: 'A pedal note that lasts twice as long' },
        { id: 'pnq17a4', text: 'A pedal note played by two instruments' },
      ],
      correctAnswerId: 'pnq17a1',
      explanation: "A double pedal occurs when two different notes are sustained simultaneously, often a tonic and dominant, creating a more complex harmonic foundation."
    },
    {
      id: 'pnq18',
      text: "In which period of music history were pedal points most systematically developed and used?",
      options: [
        { id: 'pnq18a1', text: 'Medieval period' },
        { id: 'pnq18a2', text: 'Renaissance period' },
        { id: 'pnq18a3', text: 'Baroque period' },
        { id: 'pnq18a4', text: 'Romantic period' },
      ],
      correctAnswerId: 'pnq18a3',
      explanation: "The Baroque period saw the most systematic development and use of pedal points, particularly in the works of composers like Bach, Handel, and Vivaldi."
    },
    {
      id: 'pnq19',
      text: "What happens when a pedal note finally resolves or ends?",
      options: [
        { id: 'pnq19a1', text: 'The music becomes atonal' },
        { id: 'pnq19a2', text: 'There is often a sense of harmonic release and forward motion' },
        { id: 'pnq19a3', text: 'The music must end immediately' },
        { id: 'pnq19a4', text: 'Nothing significant happens' },
      ],
      correctAnswerId: 'pnq19a2',
      explanation: "When a pedal note resolves, especially a dominant pedal moving to tonic, there is typically a strong sense of harmonic release and renewed forward motion in the music."
    },
    {
      id: 'pnq20',
      text: "Which of the following best describes the structural function of pedal points in Baroque music?",
      options: [
        { id: 'pnq20a1', text: 'They are purely decorative' },
        { id: 'pnq20a2', text: 'They provide harmonic anchoring and create dramatic tension and release' },
        { id: 'pnq20a3', text: 'They are used only to show off technical skill' },
        { id: 'pnq20a4', text: 'They replace the need for other bass notes' },
      ],
      correctAnswerId: 'pnq20a2',
      explanation: "Pedal points serve important structural functions in Baroque music by providing harmonic anchoring, creating dramatic tension through dissonance, and offering satisfying resolution when they finally move."
    }
  ]
};