import { Quiz } from '../../../../types';

export const harpsichordQuiz: Quiz = {
  title: "The Harpsichord Quiz",
  questions: [
    {
      id: 'hq1',
      text: "How does a harpsichord produce sound?",
      options: [
        { id: 'hq1a1', text: 'By striking the strings with a hammer.' },
        { id: 'hq1a2', text: 'By plucking the strings with a plectrum.' },
        { id: 'hq1a3', text: 'By rubbing the strings with a bow.' },
        { id: 'hq1a4', text: 'By blowing air through pipes.' },
      ],
      correctAnswerId: 'hq1a2',
      explanation: "The harpsichord's mechanism involves a plectrum (often made from a bird's quill) plucking the string when a key is pressed, giving it a bright, distinct sound."
    },
    {
      id: 'hq2',
      text: "Can a harpsichord player create a crescendo by changing their touch and pressing the keys harder?",
      options: [
        { id: 'hq2a1', text: 'Yes, just like a modern piano.' },
        { id: 'hq2a2', text: 'No, the volume cannot be changed by touch.' },
        { id: 'hq2a3', text: 'Only on very large harpsichords.' },
        { id: 'hq2a4', text: 'Yes, but only for very soft passages.' },
      ],
      correctAnswerId: 'hq2a2',
      explanation: "A key characteristic of the harpsichord is its inability to change volume based on finger pressure. This is why Baroque music often features terraced dynamics instead."
    },
    {
      id: 'hq3',
      text: "What was the primary and most essential role of the harpsichord in a Baroque orchestra?",
      options: [
        { id: 'hq3a1', text: 'Playing virtuosic solos in every piece.' },
        { id: 'hq3a2', text: 'Providing percussive effects.' },
        { id: 'hq3a3', text: 'Serving as the chordal instrument of the Basso Continuo and leading the ensemble.' },
        { id: 'hq3a4', text: 'Doubling the main violin melody.' },
      ],
      correctAnswerId: 'hq3a3',
      explanation: "The harpsichord was the harmonic and rhythmic heart of the orchestra, realizing chords for the continuo and directing the other musicians."
    },
    {
      id: 'hq4',
      text: "The numerical shorthand notation used by harpsichordists to improvise the chords of the Basso Continuo is called:",
      options: [
        { id: 'hq4a1', text: 'Tablature' },
        { id: 'hq4a2', text: 'Figured Bass' },
        { id: 'hq4a3', text: 'Lead Sheet' },
        { id: 'hq4a4', text: 'Graphic Notation' },
      ],
      correctAnswerId: 'hq4a2',
      explanation: "Figured bass provided the essential harmonic information for the harpsichordist to realize their part."
    },
    {
      id: 'hq5',
      text: "What material were harpsichord plectra originally made from?",
      options: [
        { id: 'hq5a1', text: 'Metal wire' },
        { id: 'hq5a2', text: 'Bird quills (feathers)' },
        { id: 'hq5a3', text: 'Wooden picks' },
        { id: 'hq5a4', text: 'Plastic strips' },
      ],
      correctAnswerId: 'hq5a2',
      explanation: "Harpsichord plectra were traditionally made from bird quills, particularly crow or raven feathers, which provided the right flexibility and tone."
    },
    {
      id: 'hq6',
      text: "How many keyboards (manuals) did a typical Baroque harpsichord have?",
      options: [
        { id: 'hq6a1', text: 'Always just one' },
        { id: 'hq6a2', text: 'One or two' },
        { id: 'hq6a3', text: 'Three or four' },
        { id: 'hq6a4', text: 'Five or more' },
      ],
      correctAnswerId: 'hq6a2',
      explanation: "Baroque harpsichords typically had one or two manuals (keyboards), with two-manual instruments allowing for different registrations and dynamic contrasts."
    },
    {
      id: 'hq7',
      text: "What is a 'stop' on a harpsichord?",
      options: [
        { id: 'hq7a1', text: 'A pedal that stops all sound' },
        { id: 'hq7a2', text: 'A mechanism that engages or disengages sets of strings' },
        { id: 'hq7a3', text: 'A key that doesn\'t work' },
        { id: 'hq7a4', text: 'A rest in the music' },
      ],
      correctAnswerId: 'hq7a2',
      explanation: "Stops on a harpsichord control which sets of strings are plucked, allowing the player to change the instrument's timbre and volume."
    },
    {
      id: 'hq8',
      text: "What is the typical range of a harpsichord keyboard?",
      options: [
        { id: 'hq8a1', text: 'Two octaves' },
        { id: 'hq8a2', text: 'Three octaves' },
        { id: 'hq8a3', text: 'Four to five octaves' },
        { id: 'hq8a4', text: 'Seven octaves like a modern piano' },
      ],
      correctAnswerId: 'hq8a3',
      explanation: "Baroque harpsichords typically had a range of four to five octaves, smaller than a modern piano's seven-octave range."
    },
    {
      id: 'hq9',
      text: "In what key were many Baroque pieces written to showcase the harpsichord's brilliance?",
      options: [
        { id: 'hq9a1', text: 'C minor' },
        { id: 'hq9a2', text: 'F# major' },
        { id: 'hq9a3', text: 'D major' },
        { id: 'hq9a4', text: 'Bb minor' },
      ],
      correctAnswerId: 'hq9a3',
      explanation: "D major was a favorite key for Baroque composers as it allowed the harpsichord to sound particularly brilliant and festive."
    },
    {
      id: 'hq10',
      text: "What happens to a harpsichord string immediately after it is plucked?",
      options: [
        { id: 'hq10a1', text: 'It continues to vibrate at the same volume' },
        { id: 'hq10a2', text: 'It gradually gets louder' },
        { id: 'hq10a3', text: 'It immediately begins to decay in volume' },
        { id: 'hq10a4', text: 'It stops vibrating completely' },
      ],
      correctAnswerId: 'hq10a3',
      explanation: "Unlike a piano where strings can sustain, harpsichord strings begin to decay immediately after being plucked, creating the characteristic sharp attack and quick fade."
    },
    {
      id: 'hq11',
      text: "Which famous Baroque composer wrote the 'Goldberg Variations' specifically for harpsichord?",
      options: [
        { id: 'hq11a1', text: 'George Frideric Handel' },
        { id: 'hq11a2', text: 'Johann Sebastian Bach' },
        { id: 'hq11a3', text: 'Antonio Vivaldi' },
        { id: 'hq11a4', text: 'Jean-Philippe Rameau' },
      ],
      correctAnswerId: 'hq11a2',
      explanation: "Bach's Goldberg Variations (BWV 988) were specifically composed for a two-manual harpsichord and remain one of the instrument's greatest masterpieces."
    },
    {
      id: 'hq12',
      text: "What is the '4-foot stop' on a harpsichord?",
      options: [
        { id: 'hq12a1', text: 'A stop that makes the instrument 4 feet tall' },
        { id: 'hq12a2', text: 'A stop that engages strings tuned an octave higher' },
        { id: 'hq12a3', text: 'A stop that only works for 4 minutes' },
        { id: 'hq12a4', text: 'A stop that plays only 4 notes' },
      ],
      correctAnswerId: 'hq12a2',
      explanation: "The 4-foot stop engages a set of strings tuned an octave higher than the normal 8-foot pitch, adding brilliance and a higher register to the sound."
    },
    {
      id: 'hq13',
      text: "How did harpsichordists typically ornament their music during the Baroque period?",
      options: [
        { id: 'hq13a1', text: 'They never added any ornamentation' },
        { id: 'hq13a2', text: 'They improvised ornaments based on written symbols and conventions' },
        { id: 'hq13a3', text: 'They only played exactly what was written' },
        { id: 'hq13a4', text: 'They added modern jazz harmonies' },
      ],
      correctAnswerId: 'hq13a2',
      explanation: "Baroque harpsichordists were expected to improvise ornaments like trills, mordents, and appoggiaturas based on written symbols and stylistic conventions of the period."
    },
    {
      id: 'hq14',
      text: "What is the 'lute stop' on some harpsichords?",
      options: [
        { id: 'hq14a1', text: 'A stop that makes the harpsichord sound like a lute' },
        { id: 'hq14a2', text: 'A stop that breaks the instrument' },
        { id: 'hq14a3', text: 'A stop that only works with lute music' },
        { id: 'hq14a4', text: 'A stop that tunes the instrument like a lute' },
      ],
      correctAnswerId: 'hq14a1',
      explanation: "The lute stop creates a muted, plucked sound similar to a lute by having the plectra pluck the strings very close to the nut, producing a more nasal, guitar-like timbre."
    },
    {
      id: 'hq15',
      text: "In Baroque ensemble music, who typically led the group from the harpsichord?",
      options: [
        { id: 'hq15a1', text: 'A separate conductor with a baton' },
        { id: 'hq15a2', text: 'The harpsichordist themselves' },
        { id: 'hq15a3', text: 'The first violinist only' },
        { id: 'hq15a4', text: 'No one led the group' },
      ],
      correctAnswerId: 'hq15a2',
      explanation: "The harpsichordist often served as the leader of Baroque ensembles, directing tempo, entrances, and musical interpretation while playing the continuo part."
    },
    {
      id: 'hq16',
      text: "What technique did harpsichordists use to create the illusion of sustained notes?",
      options: [
        { id: 'hq16a1', text: 'Pressing the keys harder' },
        { id: 'hq16a2', text: 'Using a sustain pedal' },
        { id: 'hq16a3', text: 'Rapid repetition of notes (tremolo) or arpeggiation' },
        { id: 'hq16a4', text: 'Bowing the strings' },
      ],
      correctAnswerId: 'hq16a3',
      explanation: "Since harpsichord notes decay quickly, players used techniques like tremolo (rapid repetition) or arpeggiation to create the illusion of sustained sound."
    },
    {
      id: 'hq17',
      text: "What is 'registration' in harpsichord playing?",
      options: [
        { id: 'hq17a1', text: 'Signing up to play the instrument' },
        { id: 'hq17a2', text: 'The selection and combination of stops to achieve desired timbres' },
        { id: 'hq17a3', text: 'Playing only in one octave' },
        { id: 'hq17a4', text: 'The legal ownership of the instrument' },
      ],
      correctAnswerId: 'hq17a2',
      explanation: "Registration refers to the art of selecting and combining different stops to achieve the desired sound colors and dynamic levels for different pieces or sections."
    },
    {
      id: 'hq18',
      text: "Why did the harpsichord decline in popularity during the Classical period?",
      options: [
        { id: 'hq18a1', text: 'It was too expensive to maintain' },
        { id: 'hq18a2', text: 'The piano offered greater dynamic expression and volume control' },
        { id: 'hq18a3', text: 'It was considered too old-fashioned' },
        { id: 'hq18a4', text: 'All harpsichord makers died out' },
      ],
      correctAnswerId: 'hq18a2',
      explanation: "The piano's ability to create gradual dynamics (crescendo/diminuendo) and respond to touch made it more suitable for the expressive ideals of Classical and Romantic music."
    },
    {
      id: 'hq19',
      text: "What is a 'coupler' on a two-manual harpsichord?",
      options: [
        { id: 'hq19a1', text: 'A device that connects two harpsichords together' },
        { id: 'hq19a2', text: 'A mechanism that allows one manual to activate the other' },
        { id: 'hq19a3', text: 'A romantic partner for the harpsichordist' },
        { id: 'hq19a4', text: 'A tool for tuning the instrument' },
      ],
      correctAnswerId: 'hq19a2',
      explanation: "A coupler mechanically connects the two manuals so that playing on one manual also activates the strings controlled by the other manual, creating a fuller sound."
    },
    {
      id: 'hq20',
      text: "In what century did the harpsichord experience a major revival?",
      options: [
        { id: 'hq20a1', text: '19th century' },
        { id: 'hq20a2', text: '20th century' },
        { id: 'hq20a3', text: '21st century' },
        { id: 'hq20a4', text: 'It never experienced a revival' },
      ],
      correctAnswerId: 'hq20a2',
      explanation: "The 20th century saw a major revival of interest in the harpsichord, driven by the historically informed performance movement and renewed appreciation for Baroque music."
    }
  ]
};
