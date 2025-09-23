import { Quiz } from '../../../../types';

export const baroqueViolinQuiz: Quiz = {
  title: "Baroque Violin Quiz",
  questions: [
    {
      id: 'bvq1',
      text: "What material were the strings of a Baroque violin typically made from?",
      options: [
        { id: 'bvq1a1', text: 'Steel' },
        { id: 'bvq1a2', text: 'Nylon' },
        { id: 'bvq1a3', text: 'Gut' },
        { id: 'bvq1a4', text: 'Brass' },
      ],
      correctAnswerId: 'bvq1a3',
      explanation: "Baroque violins used strings made of animal gut, which produced a warmer, richer, and less brilliant sound than modern steel strings."
    },
    {
      id: 'bvq2',
      text: "How did the bow used for a Baroque violin differ from a modern bow?",
      options: [
        { id: 'bvq2a1', text: 'It was much heavier and straighter.' },
        { id: 'bvq2a2', text: 'It was made of metal.' },
        { id: 'bvq2a3', text: 'It was convex (curved outwards), lighter, and handled differently.' },
        { id: 'bvq2a4', text: 'There was no difference.' },
      ],
      correctAnswerId: 'bvq2a3',
      explanation: "The Baroque bow's convex shape and lighter weight resulted in a different articulation, with a softer attack and natural decay on each note."
    },
    {
      id: 'bvq3',
      text: "What feature, common on modern violins for comfort and support, was typically absent on a Baroque violin?",
      options: [
        { id: 'bvq3a1', text: 'A bridge' },
        { id: 'bvq3a2', text: 'A fingerboard' },
        { id: 'bvq3a3', text: 'A chin rest' },
        { id: 'bvq3a4', text: 'Strings' },
      ],
      correctAnswerId: 'bvq3a3',
      explanation: "The chin rest and shoulder rest were not invented until the 19th century, so Baroque violins were held more freely against the collarbone."
    },
    {
      id: 'bvq4',
      text: "What was the typical setup of the Baroque violin's neck and fingerboard?",
      options: [
        { id: 'bvq4a1', text: 'Identical to modern violins' },
        { id: 'bvq4a2', text: 'Shorter neck, lower string tension, and flatter fingerboard angle' },
        { id: 'bvq4a3', text: 'Much longer neck for extended range' },
        { id: 'bvq4a4', text: 'No fingerboard at all' },
      ],
      correctAnswerId: 'bvq4a2',
      explanation: "Baroque violins had shorter necks, lower string tension, and a flatter fingerboard angle, which affected both playing technique and sound production."
    },
    {
      id: 'bvq5',
      text: "What type of bridge was typically used on Baroque violins?",
      options: [
        { id: 'bvq5a1', text: 'Metal bridge' },
        { id: 'bvq5a2', text: 'Lower, flatter wooden bridge' },
        { id: 'bvq5a3', text: 'No bridge was used' },
        { id: 'bvq5a4', text: 'Identical to modern violin bridges' },
      ],
      correctAnswerId: 'bvq5a2',
      explanation: "Baroque violin bridges were typically lower and flatter than modern ones, facilitating the playing of multiple strings simultaneously and affecting the instrument's sound."
    },
    {
      id: 'bvq6',
      text: "What was the typical tuning of a Baroque violin?",
      options: [
        { id: 'bvq6a1', text: 'Different from modern violins' },
        { id: 'bvq6a2', text: 'G-D-A-E (same as modern violins)' },
        { id: 'bvq6a3', text: 'All strings tuned to the same pitch' },
        { id: 'bvq6a4', text: 'Only three strings were used' },
      ],
      correctAnswerId: 'bvq6a2',
      explanation: "Baroque violins used the same G-D-A-E tuning as modern violins, but at a lower pitch standard (typically A=415 Hz instead of A=440 Hz)."
    },
    {
      id: 'bvq7',
      text: "What was the standard pitch (A) for Baroque violins?",
      options: [
        { id: 'bvq7a1', text: 'A=440 Hz (modern standard)' },
        { id: 'bvq7a2', text: 'A=415 Hz (about a semitone lower)' },
        { id: 'bvq7a3', text: 'A=460 Hz (higher than modern)' },
        { id: 'bvq7a4', text: 'There was no standard pitch' },
      ],
      correctAnswerId: 'bvq7a2',
      explanation: "Baroque pitch was typically around A=415 Hz, about a semitone lower than modern concert pitch, creating a warmer, darker sound."
    },
    {
      id: 'bvq8',
      text: "What role did the violin typically play in Baroque orchestras?",
      options: [
        { id: 'bvq8a1', text: 'Only as a solo instrument' },
        { id: 'bvq8a2', text: 'Leading the ensemble and playing the highest melodic lines' },
        { id: 'bvq8a3', text: 'Only for rhythmic accompaniment' },
        { id: 'bvq8a4', text: 'It was rarely used in orchestras' },
      ],
      correctAnswerId: 'bvq8a2',
      explanation: "Violins formed the backbone of Baroque orchestras, typically divided into first and second violin sections, with the first violins often leading the ensemble and playing the main melodic lines."
    },
    {
      id: 'bvq9',
      text: "What is the difference between a Baroque violin and a modern violin in terms of sound projection?",
      options: [
        { id: 'bvq9a1', text: 'Baroque violins were much louder' },
        { id: 'bvq9a2', text: 'Baroque violins had less projection but more complex overtones' },
        { id: 'bvq9a3', text: 'There was no difference in sound' },
        { id: 'bvq9a4', text: 'Baroque violins could only play very quietly' },
      ],
      correctAnswerId: 'bvq9a2',
      explanation: "Baroque violins, with their gut strings and different setup, had less volume and projection than modern instruments but produced a more complex, nuanced sound with richer overtones."
    },
    {
      id: 'bvq10',
      text: "What was the typical bow grip used for Baroque violin playing?",
      options: [
        { id: 'bvq10a1', text: 'Identical to modern bow grip' },
        { id: 'bvq10a2', text: 'Higher on the bow stick, often above the frog' },
        { id: 'bvq10a3', text: 'Using both hands on the bow' },
        { id: 'bvq10a4', text: 'No specific grip was used' },
      ],
      correctAnswerId: 'bvq10a2',
      explanation: "Baroque violinists often held the bow higher up on the stick, sometimes above the frog, which gave them different control and articulation possibilities."
    },
    {
      id: 'bvq11',
      text: "What type of vibrato was typically used in Baroque violin playing?",
      options: [
        { id: 'bvq11a1', text: 'Continuous vibrato like modern playing' },
        { id: 'bvq11a2', text: 'Ornamental vibrato used sparingly for expression' },
        { id: 'bvq11a3', text: 'No vibrato was ever used' },
        { id: 'bvq11a4', text: 'Only very fast vibrato' },
      ],
      correctAnswerId: 'bvq11a2',
      explanation: "In Baroque style, vibrato was used as an ornament for expressive effect rather than as a constant technique, making it more selective and meaningful."
    },
    {
      id: 'bvq12',
      text: "What was the typical size of the violin section in a Baroque orchestra?",
      options: [
        { id: 'bvq12a1', text: 'Just one violin' },
        { id: 'bvq12a2', text: 'Usually 4-8 violins total' },
        { id: 'bvq12a3', text: 'Always exactly 16 violins' },
        { id: 'bvq12a4', text: '30 or more violins' },
      ],
      correctAnswerId: 'bvq12a2',
      explanation: "Baroque orchestras were much smaller than modern ones, typically having only 4-8 violins total, divided between first and second violin parts."
    },
    {
      id: 'bvq13',
      text: "What was the role of ornamentation in Baroque violin playing?",
      options: [
        { id: 'bvq13a1', text: 'Ornamentation was forbidden' },
        { id: 'bvq13a2', text: 'Players were expected to add ornaments and embellishments, especially in slow movements' },
        { id: 'bvq13a3', text: 'Only composers could write ornaments' },
        { id: 'bvq13a4', text: 'Ornamentation was only used in fast movements' },
      ],
      correctAnswerId: 'bvq13a2',
      explanation: "Baroque violinists were expected to add appropriate ornaments and embellishments, particularly in slow movements and da capo arias, as part of their musical training and expression."
    },
    {
      id: 'bvq14',
      text: "What is the difference in string tension between Baroque and modern violins?",
      options: [
        { id: 'bvq14a1', text: 'Baroque violins had much higher tension' },
        { id: 'bvq14a2', text: 'Baroque violins had lower string tension' },
        { id: 'bvq14a3', text: 'The tension was exactly the same' },
        { id: 'bvq14a4', text: 'Baroque violins had no string tension' },
      ],
      correctAnswerId: 'bvq14a2',
      explanation: "Baroque violins operated at lower string tension due to the gut strings and different neck angle, which contributed to their softer, more flexible sound."
    },
    {
      id: 'bvq15',
      text: "What was the typical material for Baroque violin bows?",
      options: [
        { id: 'bvq15a1', text: 'Carbon fiber' },
        { id: 'bvq15a2', text: 'Metal' },
        { id: 'bvq15a3', text: 'Wood (often snakewood or brazilwood)' },
        { id: 'bvq15a4', text: 'Plastic' },
      ],
      correctAnswerId: 'bvq15a3',
      explanation: "Baroque bows were made from wood, commonly snakewood or brazilwood, and were lighter and more flexible than modern bows."
    },
    {
      id: 'bvq16',
      text: "How did Baroque violinists typically approach double stops (playing two notes simultaneously)?",
      options: [
        { id: 'bvq16a1', text: 'They avoided double stops completely' },
        { id: 'bvq16a2', text: 'Double stops were easier due to the flatter bridge and lower string tension' },
        { id: 'bvq16a3', text: 'They used special techniques not available today' },
        { id: 'bvq16a4', text: 'Double stops were only played by professionals' },
      ],
      correctAnswerId: 'bvq16a2',
      explanation: "The flatter bridge and lower string tension of Baroque violins made double stops and chord playing more accessible and were commonly used in the repertoire."
    },
    {
      id: 'bvq17',
      text: "What was the typical approach to dynamics in Baroque violin playing?",
      options: [
        { id: 'bvq17a1', text: 'Constant gradual crescendos and diminuendos' },
        { id: 'bvq17a2', text: 'Terraced dynamics with sudden changes between loud and soft' },
        { id: 'bvq17a3', text: 'Everything played at the same volume' },
        { id: 'bvq17a4', text: 'Only very loud playing was used' },
      ],
      correctAnswerId: 'bvq17a2',
      explanation: "Baroque style favored terraced dynamics with clear contrasts between forte and piano sections, rather than gradual dynamic changes."
    },
    {
      id: 'bvq18',
      text: "What was the relationship between the violin and continuo in Baroque music?",
      options: [
        { id: 'bvq18a1', text: 'They never played together' },
        { id: 'bvq18a2', text: 'The violin often played melodic lines over the harmonic foundation provided by the continuo' },
        { id: 'bvq18a3', text: 'The violin only played continuo parts' },
        { id: 'bvq18a4', text: 'They always played the same melody' },
      ],
      correctAnswerId: 'bvq18a2',
      explanation: "In Baroque music, the violin typically played melodic lines while the continuo (harpsichord, cello, etc.) provided the harmonic foundation and bass line."
    },
    {
      id: 'bvq19',
      text: "What is the modern revival of Baroque violin playing called?",
      options: [
        { id: 'bvq19a1', text: 'The Romantic movement' },
        { id: 'bvq19a2', text: 'The historically informed performance (HIP) movement' },
        { id: 'bvq19a3', text: 'The contemporary classical movement' },
        { id: 'bvq19a4', text: 'The minimalist movement' },
      ],
      correctAnswerId: 'bvq19a2',
      explanation: "The historically informed performance movement seeks to perform Baroque music using period instruments and techniques, including authentic Baroque violins and bows."
    },
    {
      id: 'bvq20',
      text: "What was the typical approach to articulation in Baroque violin playing?",
      options: [
        { id: 'bvq20a1', text: 'All notes played legato (smoothly connected)' },
        { id: 'bvq20a2', text: 'Clear articulation with attention to the natural decay of each note' },
        { id: 'bvq20a3', text: 'All notes played staccato (short and detached)' },
        { id: 'bvq20a4', text: 'No specific articulation style was used' },
      ],
      correctAnswerId: 'bvq20a2',
      explanation: "Baroque violin technique emphasized clear articulation, with attention to the natural attack and decay of each note, creating a more speech-like quality in the music."
    }
  ]
};
