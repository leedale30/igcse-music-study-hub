import { Quiz } from '../../../../types';

export const baroqueConcertoTermQuiz: Quiz = {
  title: "Baroque Concerto Terminology Quiz",
  questions: [
    {
      id: 'bctq1',
      text: "What is the term for the larger orchestral group in a Concerto Grosso that contrasts with the concertino?",
      options: [
        { id: 'bctq1a1', text: 'Solo' },
        { id: 'bctq1a2', text: 'Ripieno (or Tutti)' },
        { id: 'bctq1a3', text: 'Continuo' },
        { id: 'bctq1a4', text: 'Episode' },
      ],
      correctAnswerId: 'bctq1a2',
      explanation: "The ripieno (or tutti) is the larger ensemble that contrasts with the smaller concertino group."
    },
    {
      id: 'bctq2',
      text: "A 'Solo Concerto' features:",
      options: [
        { id: 'bctq2a1', text: 'A small group of equally important soloists.' },
        { id: 'bctq2a2', text: 'A single solo instrument contrasting with the orchestra.' },
        { id: 'bctq2a3', text: 'No orchestral accompaniment.' },
        { id: 'bctq2a4', text: 'Only string instruments.' },
      ],
      correctAnswerId: 'bctq2a2',
      explanation: "A Solo Concerto highlights a single solo instrument against the backdrop of the orchestra."
    },
    {
      id: 'bctq3',
      text: "The most common structure for fast movements in Baroque concertos is:",
      options: [
        { id: 'bctq3a1', text: 'Sonata Form' },
        { id: 'bctq3a2', text: 'Ritornello Form' },
        { id: 'bctq3a3', text: 'Theme and Variations' },
        { id: 'bctq3a4', text: 'Fugue' },
      ],
      correctAnswerId: 'bctq3a2',
      explanation: "Ritornello Form, with its alternating tutti and solo sections, was the predominant form for fast concerto movements."
    },
    {
      id: 'bctq4',
      text: "The 'concertino' in a Concerto Grosso typically consists of:",
      options: [
        { id: 'bctq4a1', text: 'The entire string section.' },
        { id: 'bctq4a2', text: 'A keyboard instrument and a bass instrument.' },
        { id: 'bctq4a3', text: 'A small group of soloists (e.g., two violins and cello).' },
        { id: 'bctq4a4', text: 'A solo wind instrument.' },
      ],
      correctAnswerId: 'bctq4a3',
      explanation: "The concertino is the small group of soloists, often two violins and a cello in Corelli's and Handel's models."
    },
    {
      id: 'bctq5',
      text: "What is the typical number of movements in a Baroque concerto?",
      options: [
        { id: 'bctq5a1', text: 'One' },
        { id: 'bctq5a2', text: 'Two' },
        { id: 'bctq5a3', text: 'Three (Fast-Slow-Fast)' },
        { id: 'bctq5a4', text: 'Four (Slow-Fast-Slow-Fast)' },
      ],
      correctAnswerId: 'bctq5a3',
      explanation: "Most Baroque concertos follow a three-movement plan, typically with a Fast-Slow-Fast tempo scheme."
    },
    {
      id: 'bctq6',
      text: "The 'concertato principle' which underpins the Baroque concerto is based on:",
      options: [
        { id: 'bctq6a1', text: 'Uniformity of sound.' },
        { id: 'bctq6a2', text: 'Complex polyphony only.' },
        { id: 'bctq6a3', text: 'The principle of contrast between different musical forces.' },
        { id: 'bctq6a4', text: 'Strict adherence to dance rhythms.' },
      ],
      correctAnswerId: 'bctq6a3',
      explanation: "The concertato principle is all about contrast – between solo and tutti, loud and soft, different timbres, etc."
    },
    {
      id: 'bctq7',
      text: "Which of these composers is particularly famous for his hundreds of solo concertos, especially for the violin, including 'The Four Seasons'?",
      options: [
        { id: 'bctq7a1', text: 'Arcangelo Corelli' },
        { id: 'bctq7a2', text: 'Johann Sebastian Bach' },
        { id: 'bctq7a3', text: 'George Frideric Handel' },
        { id: 'bctq7a4', text: 'Antonio Vivaldi' },
      ],
      correctAnswerId: 'bctq7a4',
      explanation: "Antonio Vivaldi was an incredibly prolific composer of solo concertos, with 'The Four Seasons' being his most famous work."
    },
    {
      id: 'bctq8',
      text: "The Basso Continuo in a concerto provides:",
      options: [
        { id: 'bctq8a1', text: 'The main melodic themes for the soloists.' },
        { id: 'bctq8a2', text: 'Only percussive effects.' },
        { id: 'bctq8a3', text: 'The harmonic foundation for both solo and orchestral sections.' },
        { id: 'bctq8a4', text: 'Instructions for staging and costumes.' },
      ],
      correctAnswerId: 'bctq8a3',
      explanation: "The Basso Continuo was essential for providing the harmonic and rhythmic underpinning of the concerto."
    },
    {
      id: 'bctq9',
      text: "J.S. Bach's Brandenburg Concertos are examples of which type of concerto?",
      options: [
        { id: 'bctq9a1', text: 'Primarily Solo Concertos for violin.' },
        { id: 'bctq9a2', text: 'Concerti Grossi (though some have prominent solo parts that blur the lines).' },
        { id: 'bctq9a3', text: 'Organ Concertos exclusively.' },
        { id: 'bctq9a4', text: 'Vocal Cantatas in concerto style.' },
      ],
      correctAnswerId: 'bctq9a2',
      explanation: "The Brandenburg Concertos are primarily examples of the Concerto Grosso, featuring diverse groups of solo instruments against the orchestra."
    },
    {
      id: 'bctq10',
      text: "The term 'Tutti' is synonymous with which other term when referring to the full orchestra in a concerto?",
      options: [
        { id: 'bctq10a1', text: 'Concertino' },
        { id: 'bctq10a2', text: 'Episode' },
        { id: 'bctq10a3', text: 'Ripieno' },
        { id: 'bctq10a4', text: 'Cadenza' },
      ],
      correctAnswerId: 'bctq10a3',
      explanation: "'Tutti' (all) and 'Ripieno' (full) are both used to describe the sections played by the full orchestral ensemble."
    }
  ]
};
