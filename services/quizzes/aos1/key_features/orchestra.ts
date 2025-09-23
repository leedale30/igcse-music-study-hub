import { Quiz } from '../../../../types';

export const baroqueOrchestraQuiz: Quiz = {
  title: "The Baroque Orchestra Quiz",
  questions: [
    {
      id: 'boq1',
      text: "What group of instruments formed the core or 'heart' of the Baroque orchestra?",
      options: [
        { id: 'boq1a1', text: 'The Woodwinds' },
        { id: 'boq1a2', text: 'The Brass' },
        { id: 'boq1a3', text: 'The Basso Continuo' },
        { id: 'boq1a4', text: 'The Strings' },
      ],
      correctAnswerId: 'boq1a4',
      explanation: "The string section (violins, violas, cellos, double basses) was the foundation of the Baroque orchestra."
    },
    {
      id: 'boq2',
      text: "Who typically led the Baroque orchestra in the absence of a modern conductor?",
      options: [
        { id: 'boq2a1', text: 'The timpanist' },
        { id: 'boq2a2', text: 'The composer from the audience' },
        { id: 'boq2a3', text: 'The harpsichordist or the lead violinist' },
        { id: 'boq2a4', text: 'The first oboe player' },
      ],
      correctAnswerId: 'boq2a3',
      explanation: "The ensemble was led from within, usually by the harpsichord player (as the leader of the continuo) or the principal first violinist."
    },
    {
      id: 'boq3',
      text: "The Basso Continuo group consisted of a chordal instrument (like a harpsichord) and what other type of instrument?",
      options: [
        { id: 'boq3a1', text: 'A high-pitched woodwind instrument' },
        { id: 'boq3a2', text: 'A percussion instrument' },
        { id: 'boq3a3', text: 'A bass line instrument (like a cello or bassoon)' },
        { id: 'boq3a4', text: 'A brass instrument' },
      ],
      correctAnswerId: 'boq3a3',
      explanation: "The continuo required both a chordal instrument to 'realize' the harmonies and a bass instrument to play the written bass line."
    },
    {
      id: 'boq4',
      text: "Brass instruments like the natural trumpet were typically used for what purpose in the Baroque orchestra?",
      options: [
        { id: 'boq4a1', text: 'To play quiet, lyrical melodies.' },
        { id: 'boq4a2', text: 'To provide the main harmony in every piece.' },
        { id: 'boq4a3', text: 'For special, festive, or military effects.' },
        { id: 'boq4a4', text: 'To accompany solo singers exclusively.' },
      ],
      correctAnswerId: 'boq4a3',
      explanation: "Due to their limitations (no valves) and bright sound, brass instruments and timpani were often reserved for special occasions and grand music."
    },
    {
      id: 'boq5',
      text: "How did the sound of Baroque string instruments differ from their modern counterparts?",
      options: [
        { id: 'boq5a1', text: 'They were much louder and more brilliant due to steel strings.' },
        { id: 'boq5a2', text: 'They had a warmer, less brilliant tone due to the use of gut strings.' },
        { id: 'boq5a3', text: 'They sounded exactly the same as modern strings.' },
        { id: 'boq5a4', text: 'They were always played with mutes.' },
      ],
      correctAnswerId: 'boq5a2',
      explanation: "Baroque strings used gut strings and different bows, which produced a warmer, richer, and less powerful sound than modern steel-stringed instruments."
    },
    {
      id: 'boq6',
      text: "What was the typical size of a Baroque orchestra compared to a modern symphony orchestra?",
      options: [
        { id: 'boq6a1', text: 'Much larger, often over 100 players' },
        { id: 'boq6a2', text: 'About the same size' },
        { id: 'boq6a3', text: 'Much smaller, typically 15-40 players' },
        { id: 'boq6a4', text: 'Always exactly 50 players' },
      ],
      correctAnswerId: 'boq6a3',
      explanation: "Baroque orchestras were significantly smaller than modern orchestras, typically ranging from 15-40 players depending on the venue and occasion."
    },
    {
      id: 'boq7',
      text: "Which woodwind instruments were most commonly found in Baroque orchestras?",
      options: [
        { id: 'boq7a1', text: 'Clarinets and saxophones' },
        { id: 'boq7a2', text: 'Oboes and bassoons' },
        { id: 'boq7a3', text: 'Piccolos and bass clarinets' },
        { id: 'boq7a4', text: 'Recorders and flutes only' },
      ],
      correctAnswerId: 'boq7a2',
      explanation: "Oboes and bassoons were the primary woodwind instruments in Baroque orchestras, with flutes and recorders used less frequently."
    },
    {
      id: 'boq8',
      text: "What was the typical seating arrangement in a Baroque orchestra?",
      options: [
        { id: 'boq8a1', text: 'Identical to modern orchestras' },
        { id: 'boq8a2', text: 'Harpsichord at the center with strings arranged around it' },
        { id: 'boq8a3', text: 'All instruments in a single line' },
        { id: 'boq8a4', text: 'Completely random arrangement' },
      ],
      correctAnswerId: 'boq8a2',
      explanation: "The harpsichord was typically placed at the center of the ensemble, with the strings arranged around it, allowing the harpsichordist to lead the group."
    },
    {
      id: 'boq9',
      text: "What role did timpani play in the Baroque orchestra?",
      options: [
        { id: 'boq9a1', text: 'They provided constant rhythmic accompaniment' },
        { id: 'boq9a2', text: 'They were used for dramatic emphasis and festive occasions' },
        { id: 'boq9a3', text: 'They played melodic lines' },
        { id: 'boq9a4', text: 'They were never used in Baroque orchestras' },
      ],
      correctAnswerId: 'boq9a2',
      explanation: "Timpani were used sparingly in Baroque orchestras, primarily for dramatic effect, ceremonial music, and to reinforce important musical moments."
    },
    {
      id: 'boq10',
      text: "How were the violin sections typically divided in a Baroque orchestra?",
      options: [
        { id: 'boq10a1', text: 'There was only one violin section' },
        { id: 'boq10a2', text: 'First violins and second violins with different musical roles' },
        { id: 'boq10a3', text: 'Three equal violin sections' },
        { id: 'boq10a4', text: 'Violins were mixed randomly throughout the orchestra' },
      ],
      correctAnswerId: 'boq10a2',
      explanation: "Baroque orchestras typically divided violins into first and second sections, with first violins playing the main melody and second violins providing harmonic support."
    },
    {
      id: 'boq11',
      text: "What was the standard pitch used in Baroque orchestras?",
      options: [
        { id: 'boq11a1', text: 'A=440 Hz (modern concert pitch)' },
        { id: 'boq11a2', text: 'A=415 Hz (about a semitone lower)' },
        { id: 'boq11a3', text: 'A=460 Hz (higher than modern pitch)' },
        { id: 'boq11a4', text: 'There was no standard pitch' },
      ],
      correctAnswerId: 'boq11a2',
      explanation: "Baroque orchestras typically tuned to A=415 Hz, which is about a semitone lower than modern concert pitch, creating a warmer, darker sound."
    },
    {
      id: 'boq12',
      text: "Which instrument was essential for providing harmonic foundation in Baroque orchestral music?",
      options: [
        { id: 'boq12a1', text: 'The violin' },
        { id: 'boq12a2', text: 'The harpsichord' },
        { id: 'boq12a3', text: 'The trumpet' },
        { id: 'boq12a4', text: 'The oboe' },
      ],
      correctAnswerId: 'boq12a2',
      explanation: "The harpsichord was essential in the continuo section, providing harmonic foundation by realizing figured bass notation throughout most Baroque orchestral works."
    },
    {
      id: 'boq13',
      text: "What was the typical approach to dynamics in Baroque orchestral music?",
      options: [
        { id: 'boq13a1', text: 'Gradual crescendos and diminuendos' },
        { id: 'boq13a2', text: 'Terraced dynamics with sudden changes' },
        { id: 'boq13a3', text: 'Everything played at the same volume' },
        { id: 'boq13a4', text: 'Only very soft dynamics were used' },
      ],
      correctAnswerId: 'boq13a2',
      explanation: "Baroque orchestras used terraced dynamics, with sudden changes between loud (forte) and soft (piano) sections, rather than gradual dynamic transitions."
    },
    {
      id: 'boq14',
      text: "Which of these instruments was NOT typically found in a standard Baroque orchestra?",
      options: [
        { id: 'boq14a1', text: 'Viola da gamba' },
        { id: 'boq14a2', text: 'Clarinet' },
        { id: 'boq14a3', text: 'Natural trumpet' },
        { id: 'boq14a4', text: 'Harpsichord' },
      ],
      correctAnswerId: 'boq14a2',
      explanation: "The clarinet was not invented until the early 18th century and was not commonly used in Baroque orchestras, which relied more on oboes for woodwind parts."
    },
    {
      id: 'boq15',
      text: "What was the role of the viola in the Baroque orchestra?",
      options: [
        { id: 'boq15a1', text: 'To play the main melody' },
        { id: 'boq15a2', text: 'To provide inner harmonic voices and support' },
        { id: 'boq15a3', text: 'To play the bass line' },
        { id: 'boq15a4', text: 'Violas were not used in Baroque orchestras' },
      ],
      correctAnswerId: 'boq15a2',
      explanation: "Violas in Baroque orchestras typically played inner harmonic voices, filling out the harmony between the violins and the bass line."
    },
    {
      id: 'boq16',
      text: "How did Baroque orchestras handle ornamentation?",
      options: [
        { id: 'boq16a1', text: 'All ornamentation was written out by the composer' },
        { id: 'boq16a2', text: 'Players were expected to add appropriate ornaments, especially soloists' },
        { id: 'boq16a3', text: 'Ornamentation was forbidden' },
        { id: 'boq16a4', text: 'Only the harpsichord could add ornaments' },
      ],
      correctAnswerId: 'boq16a2',
      explanation: "Baroque musicians were expected to add tasteful ornamentation, particularly in solo passages and slow movements, as part of their musical training and expression."
    },
    {
      id: 'boq17',
      text: "What was the typical texture of Baroque orchestral music?",
      options: [
        { id: 'boq17a1', text: 'Homophonic (melody with accompaniment)' },
        { id: 'boq17a2', text: 'Polyphonic (multiple independent melodic lines)' },
        { id: 'boq17a3', text: 'Monophonic (single melody line)' },
        { id: 'boq17a4', text: 'Both polyphonic and homophonic textures were used' },
      ],
      correctAnswerId: 'boq17a4',
      explanation: "Baroque orchestral music employed both polyphonic textures (especially in fugal passages) and homophonic textures (melody with harmonic accompaniment)."
    },
    {
      id: 'boq18',
      text: "Which composer is most associated with establishing the modern concept of the Baroque orchestra?",
      options: [
        { id: 'boq18a1', text: 'Johann Sebastian Bach' },
        { id: 'boq18a2', text: 'Jean-Baptiste Lully' },
        { id: 'boq18a3', text: 'Wolfgang Amadeus Mozart' },
        { id: 'boq18a4', text: 'Ludwig van Beethoven' },
      ],
      correctAnswerId: 'boq18a2',
      explanation: "Jean-Baptiste Lully, working at the court of Louis XIV, is credited with establishing many conventions of the Baroque orchestra, including the string-based foundation and the use of woodwinds and brass."
    },
    {
      id: 'boq19',
      text: "What was the primary difference between chamber music and orchestral music in the Baroque period?",
      options: [
        { id: 'boq19a1', text: 'Different instruments were used' },
        { id: 'boq19a2', text: 'Chamber music used one player per part, orchestral music used multiple players per part' },
        { id: 'boq19a3', text: 'Chamber music was always faster' },
        { id: 'boq19a4', text: 'There was no difference' },
      ],
      correctAnswerId: 'boq19a2',
      explanation: "The main distinction was that chamber music typically used one player per part (like a string quartet), while orchestral music used multiple players per part for a fuller sound."
    },
    {
      id: 'boq20',
      text: "What led to the eventual transformation of the Baroque orchestra into the Classical orchestra?",
      options: [
        { id: 'boq20a1', text: 'The invention of new instruments and changing musical styles' },
        { id: 'boq20a2', text: 'Political changes in Europe' },
        { id: 'boq20a3', text: 'The death of all Baroque composers' },
        { id: 'boq20a4', text: 'Economic factors only' },
      ],
      correctAnswerId: 'boq20a1',
      explanation: "The transition to the Classical orchestra was driven by the invention of new instruments (like the clarinet), improvements to existing instruments, and evolving musical styles that demanded greater dynamic range and expression."
    }
  ]
};
