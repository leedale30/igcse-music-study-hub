import { Quiz } from '../../../../types';

export const luteTheorboQuiz: Quiz = {
  title: "Lute and Theorbo Quiz",
  questions: [
    {
      id: 'ltq1',
      text: "What is the main difference between a lute and a theorbo?",
      options: [
        { id: 'ltq1a1', text: 'The lute has more strings.' },
        { id: 'ltq1a2', text: 'The theorbo is larger with extended bass strings.' },
        { id: 'ltq1a3', text: 'The lute is played with a bow.' },
        { id: 'ltq1a4', text: 'There is no difference.' },
      ],
      correctAnswerId: 'ltq1a2',
      explanation: "The theorbo is essentially a large lute with extended bass strings that don't pass over the fretboard, giving it a distinctive appearance and extended range."
    },
    {
      id: 'ltq2',
      text: "How are lutes and theorbos typically played?",
      options: [
        { id: 'ltq2a1', text: 'With a bow like a violin.' },
        { id: 'ltq2a2', text: 'By plucking the strings with fingers or a plectrum.' },
        { id: 'ltq2a3', text: 'By striking the strings with hammers.' },
        { id: 'ltq2a4', text: 'By blowing air through them.' },
      ],
      correctAnswerId: 'ltq2a2',
      explanation: "Both lutes and theorbos are plucked string instruments, typically played with the fingers or sometimes with a plectrum."
    },
    {
      id: 'ltq3',
      text: "What role did the theorbo typically play in Baroque ensembles?",
      options: [
        { id: 'ltq3a1', text: 'Solo melody instrument only.' },
        { id: 'ltq3a2', text: 'Percussion instrument.' },
        { id: 'ltq3a3', text: 'Basso continuo accompaniment.' },
        { id: 'ltq3a4', text: 'It was never used in ensembles.' },
      ],
      correctAnswerId: 'ltq3a3',
      explanation: "The theorbo was commonly used as a continuo instrument, providing harmonic support and bass lines in Baroque ensembles."
    },
    {
      id: 'ltq4',
      text: "What is tablature in relation to lute music?",
      options: [
        { id: 'ltq4a1', text: 'A type of lute made from tables' },
        { id: 'ltq4a2', text: 'A notation system showing finger positions on frets' },
        { id: 'ltq4a3', text: 'A dining table for musicians' },
        { id: 'ltq4a4', text: 'A mathematical calculation system' },
      ],
      correctAnswerId: 'ltq4a2',
      explanation: "Tablature is a notation system that shows where to place fingers on the fretboard rather than using traditional staff notation, commonly used for lute music."
    },
    {
      id: 'ltq5',
      text: "How many courses (pairs of strings) did a typical Renaissance lute have?",
      options: [
        { id: 'ltq5a1', text: '4 courses' },
        { id: 'ltq5a2', text: '6 courses' },
        { id: 'ltq5a3', text: '8 courses' },
        { id: 'ltq5a4', text: '12 courses' },
      ],
      correctAnswerId: 'ltq5a2',
      explanation: "A typical Renaissance lute had 6 courses (pairs of strings), though this number varied and increased over time, with Baroque lutes often having more."
    },
    {
      id: 'ltq6',
      text: "What material were lute strings traditionally made from?",
      options: [
        { id: 'ltq6a1', text: 'Steel wire' },
        { id: 'ltq6a2', text: 'Nylon' },
        { id: 'ltq6a3', text: 'Gut (animal intestines)' },
        { id: 'ltq6a4', text: 'Silk' },
      ],
      correctAnswerId: 'ltq6a3',
      explanation: "Lute strings were traditionally made from gut (processed animal intestines), which provided a warm, mellow tone characteristic of the instrument."
    },
    {
      id: 'ltq7',
      text: "What is the characteristic shape of a lute's body?",
      options: [
        { id: 'ltq7a1', text: 'Rectangular' },
        { id: 'ltq7a2', text: 'Pear-shaped with a rounded back' },
        { id: 'ltq7a3', text: 'Triangular' },
        { id: 'ltq7a4', text: 'Perfectly circular' },
      ],
      correctAnswerId: 'ltq7a2',
      explanation: "The lute has a distinctive pear-shaped body with a rounded back made from multiple ribs of wood, contributing to its unique sound."
    },
    {
      id: 'ltq8',
      text: "In which historical periods were lutes most popular?",
      options: [
        { id: 'ltq8a1', text: 'Medieval and Renaissance periods' },
        { id: 'ltq8a2', text: 'Classical and Romantic periods' },
        { id: 'ltq8a3', text: 'Renaissance and Baroque periods' },
        { id: 'ltq8a4', text: 'Modern and Contemporary periods' },
      ],
      correctAnswerId: 'ltq8a3',
      explanation: "Lutes were most popular during the Renaissance and Baroque periods, serving as both solo and ensemble instruments in European music."
    },
    {
      id: 'ltq9',
      text: "What is the pegbox of a lute?",
      options: [
        { id: 'ltq9a1', text: 'A box for storing picks' },
        { id: 'ltq9a2', text: 'The angled headstock containing the tuning pegs' },
        { id: 'ltq9a3', text: 'A storage compartment in the body' },
        { id: 'ltq9a4', text: 'A decorative element' },
      ],
      correctAnswerId: 'ltq9a2',
      explanation: "The pegbox is the angled headstock at the end of the lute's neck where the tuning pegs are located, often bent back at a sharp angle."
    },
    {
      id: 'ltq10',
      text: "How does the theorbo's extended bass strings affect its sound?",
      options: [
        { id: 'ltq10a1', text: 'They make it sound higher in pitch' },
        { id: 'ltq10a2', text: 'They provide additional bass notes and resonance' },
        { id: 'ltq10a3', text: 'They have no effect on the sound' },
        { id: 'ltq10a4', text: 'They make the instrument quieter' },
      ],
      correctAnswerId: 'ltq10a2',
      explanation: "The theorbo's extended bass strings provide additional low notes and sympathetic resonance, enriching the instrument's harmonic spectrum and bass response."
    },
    {
      id: 'ltq11',
      text: "What is a 'course' in lute terminology?",
      options: [
        { id: 'ltq11a1', text: 'A lesson in lute playing' },
        { id: 'ltq11a2', text: 'A pair of strings tuned to the same pitch' },
        { id: 'ltq11a3', text: 'A type of lute music' },
        { id: 'ltq11a4', text: 'A path the lute player follows' },
      ],
      correctAnswerId: 'ltq11a2',
      explanation: "A course refers to a pair (or sometimes three) of strings tuned to the same pitch, which are played together to increase volume and create a richer sound."
    },
    {
      id: 'ltq12',
      text: "Which famous Baroque composer wrote extensively for the lute?",
      options: [
        { id: 'ltq12a1', text: 'Johann Sebastian Bach' },
        { id: 'ltq12a2', text: 'Wolfgang Amadeus Mozart' },
        { id: 'ltq12a3', text: 'Ludwig van Beethoven' },
        { id: 'ltq12a4', text: 'Franz Schubert' },
      ],
      correctAnswerId: 'ltq12a1',
      explanation: "Bach wrote several important works for lute, including suites and partitas, though some may have been intended for lute-harpsichord or other keyboard instruments."
    },
    {
      id: 'ltq13',
      text: "What is the typical tuning system used for lutes?",
      options: [
        { id: 'ltq13a1', text: 'Equal temperament like modern guitars' },
        { id: 'ltq13a2', text: 'Various historical temperaments and tunings' },
        { id: 'ltq13a3', text: 'Always in the key of G major' },
        { id: 'ltq13a4', text: 'Pentatonic tuning only' },
      ],
      correctAnswerId: 'ltq13a2',
      explanation: "Lutes used various historical tuning systems and temperaments, with different tunings for different periods and styles of music, not the equal temperament of modern instruments."
    },
    {
      id: 'ltq14',
      text: "What is the soundhole of a lute typically called?",
      options: [
        { id: 'ltq14a1', text: 'F-hole' },
        { id: 'ltq14a2', text: 'Sound port' },
        { id: 'ltq14a3', text: 'Rose' },
        { id: 'ltq14a4', text: 'Resonator' },
      ],
      correctAnswerId: 'ltq14a3',
      explanation: "The lute's soundhole is called a 'rose' and is often intricately carved or decorated with geometric patterns, serving both acoustic and aesthetic purposes."
    },
    {
      id: 'ltq15',
      text: "How did the size of lutes change from Renaissance to Baroque periods?",
      options: [
        { id: 'ltq15a1', text: 'They became much smaller' },
        { id: 'ltq15a2', text: 'They remained exactly the same size' },
        { id: 'ltq15a3', text: 'They generally became larger with more courses' },
        { id: 'ltq15a4', text: 'They became triangular in shape' },
      ],
      correctAnswerId: 'ltq15a3',
      explanation: "Baroque lutes generally became larger than their Renaissance predecessors and gained additional courses (string pairs) to extend their range and harmonic possibilities."
    },
    {
      id: 'ltq16',
      text: "What is the primary difference between a theorbo and an archlute?",
      options: [
        { id: 'ltq16a1', text: 'Archlutes are smaller' },
        { id: 'ltq16a2', text: 'Theorbos have longer bass strings and necks' },
        { id: 'ltq16a3', text: 'Archlutes have no frets' },
        { id: 'ltq16a4', text: 'There is no difference' },
      ],
      correctAnswerId: 'ltq16a2',
      explanation: "While both are extended lutes, theorbos typically have longer bass strings and necks than archlutes, making them larger and giving them an even more extended bass range."
    },
    {
      id: 'ltq17',
      text: "In Baroque opera, what role did the theorbo often play?",
      options: [
        { id: 'ltq17a1', text: 'Providing special effects sounds' },
        { id: 'ltq17a2', text: 'Accompanying recitatives and arias' },
        { id: 'ltq17a3', text: 'Playing only during intermissions' },
        { id: 'ltq17a4', text: 'It was never used in opera' },
      ],
      correctAnswerId: 'ltq17a2',
      explanation: "The theorbo was commonly used in Baroque opera to accompany recitatives and arias, providing harmonic support and bass lines in the continuo section."
    },
    {
      id: 'ltq18',
      text: "What technique is used to play melody and bass simultaneously on a lute?",
      options: [
        { id: 'ltq18a1', text: 'Using two hands on different necks' },
        { id: 'ltq18a2', text: 'Thumb and fingers technique' },
        { id: 'ltq18a3', text: 'Using a bow and plucking simultaneously' },
        { id: 'ltq18a4', text: 'It\'s impossible to do both' },
      ],
      correctAnswerId: 'ltq18a2',
      explanation: "Lute players use a thumb and fingers technique where the thumb typically plays bass notes on the lower courses while the fingers play melody and harmony on the higher courses."
    },
    {
      id: 'ltq19',
      text: "Why did lutes and theorbos decline in popularity after the Baroque period?",
      options: [
        { id: 'ltq19a1', text: 'They were too expensive to make' },
        { id: 'ltq19a2', text: 'Louder instruments like the guitar and piano became preferred' },
        { id: 'ltq19a3', text: 'They were banned by the church' },
        { id: 'ltq19a4', text: 'All lute makers died in a plague' },
      ],
      correctAnswerId: 'ltq19a2',
      explanation: "As musical venues became larger and orchestras grew, louder instruments like the guitar and piano were preferred over the relatively quiet lute and theorbo."
    },
    {
      id: 'ltq20',
      text: "In modern times, what has led to a revival of interest in lutes and theorbos?",
      options: [
        { id: 'ltq20a1', text: 'Their use in rock music' },
        { id: 'ltq20a2', text: 'The historically informed performance movement' },
        { id: 'ltq20a3', text: 'Government mandates' },
        { id: 'ltq20a4', text: 'They have not experienced a revival' },
      ],
      correctAnswerId: 'ltq20a2',
      explanation: "The historically informed performance movement of the 20th and 21st centuries has led to renewed interest in authentic Baroque instruments, including lutes and theorbos."
    }
  ]
};
