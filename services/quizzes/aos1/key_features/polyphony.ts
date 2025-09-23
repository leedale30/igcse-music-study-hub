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
    },
    {
      id: 'ptq6',
      text: "What is a 'canon' in polyphonic music?",
      options: [
        { id: 'ptq6a1', text: 'A type of percussion instrument' },
        { id: 'ptq6a2', text: 'A strict form of imitation where voices follow each other exactly' },
        { id: 'ptq6a3', text: 'A loud dynamic marking' },
        { id: 'ptq6a4', text: 'A type of cadence' },
      ],
      correctAnswerId: 'ptq6a2',
      explanation: "A canon is a contrapuntal technique where one voice strictly imitates another at a fixed interval of time and pitch."
    },
    {
      id: 'ptq7',
      text: "In a fugue, what is the 'subject'?",
      options: [
        { id: 'ptq7a1', text: 'The main theme that is imitated throughout the piece' },
        { id: 'ptq7a2', text: 'The person who composed the fugue' },
        { id: 'ptq7a3', text: 'The key signature' },
        { id: 'ptq7a4', text: 'The time signature' },
      ],
      correctAnswerId: 'ptq7a1',
      explanation: "The subject is the main melodic theme of a fugue, which is introduced by one voice and then imitated by other voices."
    },
    {
      id: 'ptq8',
      text: "What is the 'answer' in a fugue?",
      options: [
        { id: 'ptq8a1', text: 'The final chord of the fugue' },
        { id: 'ptq8a2', text: 'The imitation of the subject, usually at the fifth above or fourth below' },
        { id: 'ptq8a3', text: 'The slowest section of the fugue' },
        { id: 'ptq8a4', text: 'The loudest part of the fugue' },
      ],
      correctAnswerId: 'ptq8a2',
      explanation: "The answer is the imitation of the fugue subject, typically transposed to the dominant key (fifth above or fourth below)."
    },
    {
      id: 'ptq9',
      text: "Which Baroque composer is most famous for their mastery of fugal writing?",
      options: [
        { id: 'ptq9a1', text: 'Wolfgang Amadeus Mozart' },
        { id: 'ptq9a2', text: 'Johann Sebastian Bach' },
        { id: 'ptq9a3', text: 'Ludwig van Beethoven' },
        { id: 'ptq9a4', text: 'Franz Schubert' },
      ],
      correctAnswerId: 'ptq9a2',
      explanation: "J.S. Bach is universally regarded as the master of fugal composition, with works like 'The Well-Tempered Clavier' and 'The Art of Fugue'."
    },
    {
      id: 'ptq10',
      text: "What is 'stretto' in fugal composition?",
      options: [
        { id: 'ptq10a1', text: 'A very slow tempo marking' },
        { id: 'ptq10a2', text: 'When subject entries overlap before the previous one is complete' },
        { id: 'ptq10a3', text: 'The final cadence of a fugue' },
        { id: 'ptq10a4', text: 'A type of ornament' },
      ],
      correctAnswerId: 'ptq10a2',
      explanation: "Stretto (Italian for 'tight') occurs when fugal entries are compressed, with new entries beginning before previous ones finish, creating intensity."
    },
    {
      id: 'ptq11',
      text: "What is a 'countersubject' in a fugue?",
      options: [
        { id: 'ptq11a1', text: 'A melody that accompanies the subject in subsequent entries' },
        { id: 'ptq11a2', text: 'The opposite of the subject' },
        { id: 'ptq11a3', text: 'A subject played backwards' },
        { id: 'ptq11a4', text: 'The bass line of the fugue' },
      ],
      correctAnswerId: 'ptq11a1',
      explanation: "A countersubject is a recurring melodic line that accompanies the subject in fugal entries, providing consistent contrapuntal material."
    },
    {
      id: 'ptq12',
      text: "What does 'invertible counterpoint' mean?",
      options: [
        { id: 'ptq12a1', text: 'Counterpoint played upside down' },
        { id: 'ptq12a2', text: 'Counterpoint where the upper and lower voices can exchange positions' },
        { id: 'ptq12a3', text: 'Counterpoint in a minor key' },
        { id: 'ptq12a4', text: 'Counterpoint that changes tempo' },
      ],
      correctAnswerId: 'ptq12a2',
      explanation: "Invertible counterpoint allows the upper and lower voices to exchange positions while maintaining harmonic correctness."
    },
    {
      id: 'ptq13',
      text: "In species counterpoint, what is 'first species'?",
      options: [
        { id: 'ptq13a1', text: 'Note against note (1:1 ratio)' },
        { id: 'ptq13a2', text: 'Two notes against one (2:1 ratio)' },
        { id: 'ptq13a3', text: 'Four notes against one (4:1 ratio)' },
        { id: 'ptq13a4', text: 'Syncopated counterpoint' },
      ],
      correctAnswerId: 'ptq13a1',
      explanation: "First species counterpoint involves writing one note against each note of the cantus firmus, creating a 1:1 rhythmic relationship."
    },
    {
      id: 'ptq14',
      text: "What is 'augmentation' in contrapuntal music?",
      options: [
        { id: 'ptq14a1', text: 'Making the music louder' },
        { id: 'ptq14a2', text: 'Presenting a theme in longer note values' },
        { id: 'ptq14a3', text: 'Adding more voices' },
        { id: 'ptq14a4', text: 'Changing the key' },
      ],
      correctAnswerId: 'ptq14a2',
      explanation: "Augmentation is a contrapuntal technique where a theme is presented in proportionally longer note values, often doubling the original durations."
    },
    {
      id: 'ptq15',
      text: "What is 'diminution' in contrapuntal music?",
      options: [
        { id: 'ptq15a1', text: 'Making the music softer' },
        { id: 'ptq15a2', text: 'Presenting a theme in shorter note values' },
        { id: 'ptq15a3', text: 'Removing voices' },
        { id: 'ptq15a4', text: 'Playing in a lower register' },
      ],
      correctAnswerId: 'ptq15a2',
      explanation: "Diminution presents a theme in proportionally shorter note values, often halving the original durations to create rhythmic variety."
    },
    {
      id: 'ptq16',
      text: "What is 'retrograde' in contrapuntal composition?",
      options: [
        { id: 'ptq16a1', text: 'Playing a theme backwards' },
        { id: 'ptq16a2', text: 'Playing a theme upside down' },
        { id: 'ptq16a3', text: 'Playing a theme faster' },
        { id: 'ptq16a4', text: 'Playing a theme in a different key' },
      ],
      correctAnswerId: 'ptq16a1',
      explanation: "Retrograde involves presenting a melodic line in reverse order, from the last note to the first, creating mirror-like symmetry."
    },
    {
      id: 'ptq17',
      text: "What is 'inversion' in contrapuntal music?",
      options: [
        { id: 'ptq17a1', text: 'Turning a melody upside down (intervals reversed)' },
        { id: 'ptq17a2', text: 'Playing a melody backwards' },
        { id: 'ptq17a3', text: 'Playing a melody in a different rhythm' },
        { id: 'ptq17a4', text: 'Playing a melody in a different key' },
      ],
      correctAnswerId: 'ptq17a1',
      explanation: "Melodic inversion flips the direction of intervals: where the original goes up, the inversion goes down by the same interval, and vice versa."
    },
    {
      id: 'ptq18',
      text: "What is an 'episode' in a fugue?",
      options: [
        { id: 'ptq18a1', text: 'A section where the complete subject is not present' },
        { id: 'ptq18a2', text: 'The opening of the fugue' },
        { id: 'ptq18a3', text: 'The final section of the fugue' },
        { id: 'ptq18a4', text: 'A section with only one voice' },
      ],
      correctAnswerId: 'ptq18a1',
      explanation: "An episode is a section in a fugue where the complete subject is absent, often featuring sequences or development of motifs from the subject."
    },
    {
      id: 'ptq19',
      text: "What is the typical number of voices in a Baroque fugue?",
      options: [
        { id: 'ptq19a1', text: 'Always exactly four voices' },
        { id: 'ptq19a2', text: 'Usually three or four voices, but can vary' },
        { id: 'ptq19a3', text: 'Always two voices' },
        { id: 'ptq19a4', text: 'Always five or more voices' },
      ],
      correctAnswerId: 'ptq19a2',
      explanation: "Most Baroque fugues are written for three or four voices, though they can range from two voices to six or more, depending on the composer's intent."
    },
    {
      id: 'ptq20',
      text: "Why was polyphonic texture so important in Baroque music?",
      options: [
        { id: 'ptq20a1', text: 'It was easier to compose than other textures' },
        { id: 'ptq20a2', text: 'It demonstrated compositional skill and created rich, complex musical expression' },
        { id: 'ptq20a3', text: 'It was required by the church' },
        { id: 'ptq20a4', text: 'It was the only texture available at the time' },
      ],
      correctAnswerId: 'ptq20a2',
      explanation: "Polyphonic texture was prized in the Baroque era because it showcased compositional mastery and created sophisticated, emotionally rich musical experiences through the interweaving of independent melodic lines."
    }
  ]
};
