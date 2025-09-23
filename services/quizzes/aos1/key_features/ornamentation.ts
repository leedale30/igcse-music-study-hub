import { Quiz } from '../../../../types';

export const ornamentationTermQuiz: Quiz = {
  title: "Baroque Ornamentation Quiz",
  questions: [
    {
      id: 'ornq1',
      text: "What is the primary purpose of ornamentation in Baroque music?",
      options: [
        { id: 'ornq1a1', text: 'To add expression, virtuosity, and variety.' },
        { id: 'ornq1a2', text: 'To simplify the melody.' },
        { id: 'ornq1a3', text: 'To change the key of the music.' },
        { id: 'ornq1a4', text: 'To make the music slower.' },
      ],
      correctAnswerId: 'ornq1a1',
      explanation: "The main purpose of ornamentation is to decorate and embellish a melodic line, allowing performers to show off their skill, add emotional depth, and create interest in repeated sections."
    },
    {
      id: 'ornq2',
      text: "A Trill (tr) is a rapid alternation between the written note and which other note?",
      options: [
        { id: 'ornq2a1', text: 'The note a third above.' },
        { id: 'ornq2a2', text: 'The note below.' },
        { id: 'ornq2a3', text: 'The note above.' },
        { id: 'ornq2a4', text: 'The same note repeated.' },
      ],
      correctAnswerId: 'ornq2a3',
      explanation: "A trill involves rapidly alternating between the main note and the note directly above it in the scale. In the Baroque era, it typically started on this upper note."
    },
    {
      id: 'ornq3',
      text: "Which ornament involves playing the main note, the note below it, and then the main note again very quickly?",
      options: [
        { id: 'ornq3a1', text: 'Upper Mordent' },
        { id: 'ornq3a2', text: 'Turn' },
        { id: 'ornq3a3', text: 'Appoggiatura' },
        { id: 'ornq3a4', text: 'Lower Mordent' },
      ],
      correctAnswerId: 'ornq3a4',
      explanation: "A lower mordent is a three-note figure: main note - lower neighbour - main note. An upper mordent goes to the upper neighbour instead."
    },
    {
      id: 'ornq4',
      text: "Which ornament is known as the 'leaning note' because it is played on the beat, takes time from the main note, and creates an expressive dissonance?",
      options: [
        { id: 'ornq4a1', text: 'Acciaccatura' },
        { id: 'ornq4a2', text: 'Appoggiatura' },
        { id: 'ornq4a3', text: 'Trill' },
        { id: 'ornq4a4', text: 'Mordent' },
      ],
      correctAnswerId: 'ornq4a2',
      explanation: "The appoggiatura is a key expressive dissonance in Baroque music, played on the beat and resolving to the main note."
    },
    {
      id: 'ornq5',
      text: "True or False: In the Baroque era, performers were never expected to improvise their own ornaments; they only played what was written.",
      options: [
        { id: 'ornq5a1', text: 'True' },
        { id: 'ornq5a2', text: 'False' },
      ],
      correctAnswerId: 'ornq5a2',
      explanation: "False. Performers were highly expected to improvise ornaments, especially on repeated sections of music. It was a core part of the performance practice."
    },
    {
      id: 'ornq6',
      text: "What is an 'acciaccatura'?",
      options: [
        { id: 'ornq6a1', text: 'A crushed note played very quickly before the main note' },
        { id: 'ornq6a2', text: 'A long sustained note' },
        { id: 'ornq6a3', text: 'A note played after the main note' },
        { id: 'ornq6a4', text: 'A repeated note pattern' },
      ],
      correctAnswerId: 'ornq6a1',
      explanation: "An acciaccatura is a 'crushed note' - a very short ornamental note played as quickly as possible before the main note, without taking significant time from it."
    },
    {
      id: 'ornq7',
      text: "What is a 'turn' ornament?",
      options: [
        { id: 'ornq7a1', text: 'A four-note figure that goes above, main note, below, main note' },
        { id: 'ornq7a2', text: 'A repeated main note' },
        { id: 'ornq7a3', text: 'A note held for a long time' },
        { id: 'ornq7a4', text: 'A note played backwards' },
      ],
      correctAnswerId: 'ornq7a1',
      explanation: "A turn is a four-note ornamental figure that typically goes: upper neighbor - main note - lower neighbor - main note, creating a decorative 'turning' motion around the main note."
    },
    {
      id: 'ornq8',
      text: "In Baroque performance practice, when were ornaments most commonly added?",
      options: [
        { id: 'ornq8a1', text: 'Only at the beginning of pieces' },
        { id: 'ornq8a2', text: 'In repeated sections and cadences' },
        { id: 'ornq8a3', text: 'Only in fast movements' },
        { id: 'ornq8a4', text: 'Never - they were always written out' },
      ],
      correctAnswerId: 'ornq8a2',
      explanation: "Ornaments were most commonly added in repeated sections (like da capo arias) and at cadences, where performers were expected to embellish to add variety and show virtuosity."
    },
    {
      id: 'ornq9',
      text: "What is the difference between an upper mordent and a lower mordent?",
      options: [
        { id: 'ornq9a1', text: 'Upper mordent goes to the note above, lower mordent goes to the note below' },
        { id: 'ornq9a2', text: 'Upper mordent is louder, lower mordent is softer' },
        { id: 'ornq9a3', text: 'Upper mordent is faster, lower mordent is slower' },
        { id: 'ornq9a4', text: 'There is no difference' },
      ],
      correctAnswerId: 'ornq9a1',
      explanation: "An upper mordent alternates between the main note and the note above it, while a lower mordent alternates between the main note and the note below it."
    },
    {
      id: 'ornq10',
      text: "Which composer is particularly famous for writing out detailed ornaments in their scores?",
      options: [
        { id: 'ornq10a1', text: 'Johann Sebastian Bach' },
        { id: 'ornq10a2', text: 'Wolfgang Amadeus Mozart' },
        { id: 'ornq10a3', text: 'Ludwig van Beethoven' },
        { id: 'ornq10a4', text: 'Franz Schubert' },
      ],
      correctAnswerId: 'ornq10a1',
      explanation: "J.S. Bach was known for writing out many ornaments in detail, providing clear examples of Baroque ornamentation practice in his scores."
    },
    {
      id: 'ornq11',
      text: "What does the symbol '~' typically indicate in Baroque music?",
      options: [
        { id: 'ornq11a1', text: 'A trill' },
        { id: 'ornq11a2', text: 'A turn' },
        { id: 'ornq11a3', text: 'An appoggiatura' },
        { id: 'ornq11a4', text: 'A mordent' },
      ],
      correctAnswerId: 'ornq11a1',
      explanation: "The wavy line symbol '~' or 'tr' indicates a trill, one of the most common ornaments in Baroque music."
    },
    {
      id: 'ornq12',
      text: "In which part of a Baroque aria would a singer most likely add the most ornaments?",
      options: [
        { id: 'ornq12a1', text: 'The first statement of the A section' },
        { id: 'ornq12a2', text: 'The B section' },
        { id: 'ornq12a3', text: 'The da capo return of the A section' },
        { id: 'ornq12a4', text: 'The instrumental introduction' },
      ],
      correctAnswerId: 'ornq12a3',
      explanation: "In a da capo aria, singers were expected to ornament the return of the A section to show virtuosity and add variety to the repeated material."
    },
    {
      id: 'ornq13',
      text: "What is a 'slide' ornament?",
      options: [
        { id: 'ornq13a1', text: 'Two or more notes leading up to the main note from below' },
        { id: 'ornq13a2', text: 'A note that gets gradually louder' },
        { id: 'ornq13a3', text: 'A note that changes pitch' },
        { id: 'ornq13a4', text: 'A very long note' },
      ],
      correctAnswerId: 'ornq13a1',
      explanation: "A slide consists of two or more grace notes that approach the main note from below, creating a smooth 'sliding' effect upward to the principal note."
    },
    {
      id: 'ornq14',
      text: "How should a Baroque trill typically begin?",
      options: [
        { id: 'ornq14a1', text: 'On the main note' },
        { id: 'ornq14a2', text: 'On the upper auxiliary note' },
        { id: 'ornq14a3', text: 'On the lower auxiliary note' },
        { id: 'ornq14a4', text: 'It doesn\'t matter' },
      ],
      correctAnswerId: 'ornq14a2',
      explanation: "In Baroque performance practice, trills typically begin on the upper auxiliary note (the note above the written note), not on the main note itself."
    },
    {
      id: 'ornq15',
      text: "What is the purpose of a 'cadential trill'?",
      options: [
        { id: 'ornq15a1', text: 'To make the music louder' },
        { id: 'ornq15a2', text: 'To emphasize and embellish important cadential points' },
        { id: 'ornq15a3', text: 'To change the key' },
        { id: 'ornq15a4', text: 'To make the music faster' },
      ],
      correctAnswerId: 'ornq15a2',
      explanation: "Cadential trills are used to emphasize and embellish important structural points in the music, particularly at cadences, adding brilliance and finality."
    },
    {
      id: 'ornq16',
      text: "What is a 'gruppetto'?",
      options: [
        { id: 'ornq16a1', text: 'Another name for a turn' },
        { id: 'ornq16a2', text: 'A type of trill' },
        { id: 'ornq16a3', text: 'A loud ornament' },
        { id: 'ornq16a4', text: 'A slow ornament' },
      ],
      correctAnswerId: 'ornq16a1',
      explanation: "Gruppetto is the Italian term for a turn - the ornamental figure that moves around the main note in a decorative pattern."
    },
    {
      id: 'ornq17',
      text: "In Baroque music, what was the relationship between written ornaments and improvised ornaments?",
      options: [
        { id: 'ornq17a1', text: 'Only written ornaments were allowed' },
        { id: 'ornq17a2', text: 'Only improvised ornaments were used' },
        { id: 'ornq17a3', text: 'Both written and improvised ornaments were part of performance practice' },
        { id: 'ornq17a4', text: 'Ornaments were never used' },
      ],
      correctAnswerId: 'ornq17a3',
      explanation: "Baroque performance practice included both written ornaments (specified by the composer) and improvised ornaments (added by the performer), creating a collaborative artistic process."
    },
    {
      id: 'ornq18',
      text: "What effect does an appoggiatura have on the harmony?",
      options: [
        { id: 'ornq18a1', text: 'It creates consonance' },
        { id: 'ornq18a2', text: 'It creates dissonance that resolves downward' },
        { id: 'ornq18a3', text: 'It has no harmonic effect' },
        { id: 'ornq18a4', text: 'It changes the key signature' },
      ],
      correctAnswerId: 'ornq18a2',
      explanation: "An appoggiatura creates a deliberate dissonance that typically resolves downward by step, creating emotional tension and release that was highly valued in Baroque expression."
    },
    {
      id: 'ornq19',
      text: "Which instrument family was particularly associated with elaborate ornamentation in the Baroque era?",
      options: [
        { id: 'ornq19a1', text: 'Percussion instruments' },
        { id: 'ornq19a2', text: 'Keyboard instruments and voice' },
        { id: 'ornq19a3', text: 'Brass instruments only' },
        { id: 'ornq19a4', text: 'String instruments only' },
      ],
      correctAnswerId: 'ornq19a2',
      explanation: "Keyboard instruments (harpsichord, organ) and voice were particularly associated with elaborate ornamentation, as they could execute rapid decorative passages with great agility and expression."
    },
    {
      id: 'ornq20',
      text: "Why was ornamentation considered essential to Baroque musical expression?",
      options: [
        { id: 'ornq20a1', text: 'It made the music easier to play' },
        { id: 'ornq20a2', text: 'It allowed performers to demonstrate skill and add emotional depth to the music' },
        { id: 'ornq20a3', text: 'It was required by law' },
        { id: 'ornq20a4', text: 'It made the music shorter' },
      ],
      correctAnswerId: 'ornq20a2',
      explanation: "Ornamentation was essential because it allowed performers to demonstrate their technical skill and musical understanding while adding emotional depth and personal expression to the music, embodying the Baroque ideal of moving the affections."
    }
  ]
};
