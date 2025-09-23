import { Quiz } from '../../../../types';

export const majorMinorScalesQuiz: Quiz = {
  title: "Major and Minor Scales Quiz",
  questions: [
    {
      id: 'mmsq1',
      text: "The major scale is often described as sounding:",
      options: [
        { id: 'mmsq1a1', text: 'Sad and dramatic' },
        { id: 'mmsq1a2', text: 'Mysterious and vague' },
        { id: 'mmsq1a3', text: 'Bright and happy' },
        { id: 'mmsq1a4', text: 'Simple and folksy' },
      ],
      correctAnswerId: 'mmsq1a3',
      explanation: "The pattern of whole and half steps in a major scale typically gives it a bright, happy, or triumphant character."
    },
    {
      id: 'mmsq2',
      text: "What is the correct pattern of whole (W) and half (H) steps for a major scale?",
      options: [
        { id: 'mmsq2a1', text: 'W-H-W-W-H-W-W' },
        { id: 'mmsq2a2', text: 'W-W-H-W-W-W-H' },
        { id: 'mmsq2a3', text: 'W-W-W-H-W-W-H' },
        { id: 'mmsq2a4', text: 'W-H-W-W-W-H-W' },
      ],
      correctAnswerId: 'mmsq2a2',
      explanation: "The pattern for a major scale is Whole-Whole-Half-Whole-Whole-Whole-Half."
    },
    {
      id: 'mmsq3',
      text: "In Baroque music, why was the 7th note of the natural minor scale often raised?",
      options: [
        { id: 'mmsq3a1', text: 'To make the scale easier to sing.' },
        { id: 'mmsq3a2', text: 'To create a stronger \'leading note\' pull to the tonic.' },
        { id: 'mmsq3a3', text: 'To make the music sound older and more like a church mode.' },
        { id: 'mmsq3a4', text: 'To remove all half steps from the scale.' },
      ],
      correctAnswerId: 'mmsq3a2',
      explanation: "Raising the 7th degree creates a strong leading note, which is only a half step from the tonic. This strengthens the dominant chord's function and the pull back to the tonic, a key feature of Baroque harmony."
    },
    {
      id: 'mmsq4',
      text: "A minor scale with a raised 7th degree is called a:",
      options: [
        { id: 'mmsq4a1', text: 'Natural minor scale' },
        { id: 'mmsq4a2', text: 'Melodic minor scale' },
        { id: 'mmsq4a3', text: 'Dorian mode' },
        { id: 'mmsq4a4', text: 'Harmonic minor scale' },
      ],
      correctAnswerId: 'mmsq4a4',
      explanation: "The harmonic minor scale is a natural minor scale with a sharpened 7th degree, crucial for creating strong dominant-tonic harmony."
    },
    {
      id: 'mmsq5',
      text: "What is the relationship between C major and A minor, which share the same key signature?",
      options: [
        { id: 'mmsq5a1', text: 'They are parallel keys.' },
        { id: 'mmsq5a2', text: 'They are relative keys.' },
        { id: 'mmsq5a3', text: 'They are enharmonic keys.' },
        { id: 'mmsq5a4', text: 'They are unrelated keys.' },
      ],
      correctAnswerId: 'mmsq5a2',
      explanation: "C major and A minor are relative keys; they share the same notes and key signature, but have different tonic (starting) notes."
    },
    {
      id: 'mmsq6',
      text: "What is the pattern of whole (W) and half (H) steps for a natural minor scale?",
      options: [
        { id: 'mmsq6a1', text: 'W-H-W-W-H-W-W' },
        { id: 'mmsq6a2', text: 'W-W-H-W-W-W-H' },
        { id: 'mmsq6a3', text: 'W-H-W-W-W-H-W' },
        { id: 'mmsq6a4', text: 'H-W-W-H-W-W-W' },
      ],
      correctAnswerId: 'mmsq6a1',
      explanation: "The natural minor scale pattern is W-H-W-W-H-W-W, which gives it its characteristic melancholy sound."
    },
    {
      id: 'mmsq7',
      text: "In the melodic minor scale, what happens to the 6th and 7th degrees when ascending?",
      options: [
        { id: 'mmsq7a1', text: 'They are both lowered' },
        { id: 'mmsq7a2', text: 'They remain natural' },
        { id: 'mmsq7a3', text: 'They are both raised' },
        { id: 'mmsq7a4', text: 'Only the 7th is raised' },
      ],
      correctAnswerId: 'mmsq7a3',
      explanation: "In the ascending melodic minor scale, both the 6th and 7th degrees are raised to avoid the awkward augmented 2nd interval found in harmonic minor."
    },
    {
      id: 'mmsq8',
      text: "Which scale degree is known as the 'leading tone' in a major scale?",
      options: [
        { id: 'mmsq8a1', text: '5th degree' },
        { id: 'mmsq8a2', text: '6th degree' },
        { id: 'mmsq8a3', text: '7th degree' },
        { id: 'mmsq8a4', text: '4th degree' },
      ],
      correctAnswerId: 'mmsq8a3',
      explanation: "The 7th degree is called the leading tone because it 'leads' strongly to the tonic (1st degree) being only a half step away."
    },
    {
      id: 'mmsq9',
      text: "What is the relative minor of F major?",
      options: [
        { id: 'mmsq9a1', text: 'A minor' },
        { id: 'mmsq9a2', text: 'D minor' },
        { id: 'mmsq9a3', text: 'C minor' },
        { id: 'mmsq9a4', text: 'G minor' },
      ],
      correctAnswerId: 'mmsq9a2',
      explanation: "The relative minor is found a minor third (3 semitones) below the major key. F major's relative minor is D minor."
    },
    {
      id: 'mmsq10',
      text: "In Baroque music, which type of minor scale was most commonly used for creating strong cadences?",
      options: [
        { id: 'mmsq10a1', text: 'Natural minor' },
        { id: 'mmsq10a2', text: 'Harmonic minor' },
        { id: 'mmsq10a3', text: 'Melodic minor' },
        { id: 'mmsq10a4', text: 'Dorian mode' },
      ],
      correctAnswerId: 'mmsq10a2',
      explanation: "The harmonic minor scale, with its raised 7th degree, creates a strong leading tone essential for dominant-tonic cadences in Baroque harmony."
    },
    {
      id: 'mmsq11',
      text: "What interval is created between the 6th and 7th degrees in a harmonic minor scale?",
      options: [
        { id: 'mmsq11a1', text: 'Major 2nd' },
        { id: 'mmsq11a2', text: 'Minor 2nd' },
        { id: 'mmsq11a3', text: 'Augmented 2nd' },
        { id: 'mmsq11a4', text: 'Perfect 4th' },
      ],
      correctAnswerId: 'mmsq11a3',
      explanation: "The harmonic minor scale creates an augmented 2nd interval between the 6th and raised 7th degrees, giving it a distinctive exotic sound."
    },
    {
      id: 'mmsq12',
      text: "Which scale would you use to write a piece in G major?",
      options: [
        { id: 'mmsq12a1', text: 'G-A-B-C-D-E-F#-G' },
        { id: 'mmsq12a2', text: 'G-A-B-C-D-E-F-G' },
        { id: 'mmsq12a3', text: 'G-A-Bb-C-D-E-F-G' },
        { id: 'mmsq12a4', text: 'G-Ab-Bb-C-D-Eb-F-G' },
      ],
      correctAnswerId: 'mmsq12a1',
      explanation: "G major has one sharp (F#) in its key signature, so the scale is G-A-B-C-D-E-F#-G."
    },
    {
      id: 'mmsq13',
      text: "What is the parallel minor of E major?",
      options: [
        { id: 'mmsq13a1', text: 'C# minor' },
        { id: 'mmsq13a2', text: 'E minor' },
        { id: 'mmsq13a3', text: 'A minor' },
        { id: 'mmsq13a4', text: 'F# minor' },
      ],
      correctAnswerId: 'mmsq13a2',
      explanation: "The parallel minor has the same tonic note but uses the minor scale pattern. E major's parallel minor is E minor."
    },
    {
      id: 'mmsq14',
      text: "In the descending melodic minor scale, which degrees return to their natural minor form?",
      options: [
        { id: 'mmsq14a1', text: 'Only the 7th degree' },
        { id: 'mmsq14a2', text: 'Only the 6th degree' },
        { id: 'mmsq14a3', text: 'Both 6th and 7th degrees' },
        { id: 'mmsq14a4', text: 'All degrees remain raised' },
      ],
      correctAnswerId: 'mmsq14a3',
      explanation: "In the descending melodic minor scale, both the 6th and 7th degrees return to their natural minor form, making it identical to the natural minor scale when descending."
    },
    {
      id: 'mmsq15',
      text: "Which scale degree is called the 'subdominant' in both major and minor scales?",
      options: [
        { id: 'mmsq15a1', text: '3rd degree' },
        { id: 'mmsq15a2', text: '4th degree' },
        { id: 'mmsq15a3', text: '5th degree' },
        { id: 'mmsq15a4', text: '6th degree' },
      ],
      correctAnswerId: 'mmsq15a2',
      explanation: "The 4th degree is called the subdominant because it is a perfect 5th below the tonic, just as the dominant (5th degree) is a perfect 5th above the tonic."
    },
    {
      id: 'mmsq16',
      text: "What key signature does D minor share with its relative major?",
      options: [
        { id: 'mmsq16a1', text: 'No sharps or flats' },
        { id: 'mmsq16a2', text: 'One flat (Bb)' },
        { id: 'mmsq16a3', text: 'Two flats (Bb, Eb)' },
        { id: 'mmsq16a4', text: 'One sharp (F#)' },
      ],
      correctAnswerId: 'mmsq16a2',
      explanation: "D minor's relative major is F major, which has one flat (Bb) in its key signature. Relative keys always share the same key signature."
    },
    {
      id: 'mmsq17',
      text: "In Baroque music, why was the major-minor tonal system preferred over church modes?",
      options: [
        { id: 'mmsq17a1', text: 'It was easier to sing' },
        { id: 'mmsq17a2', text: 'It provided clearer harmonic direction and stronger cadences' },
        { id: 'mmsq17a3', text: 'It used fewer notes' },
        { id: 'mmsq17a4', text: 'It was more religious' },
      ],
      correctAnswerId: 'mmsq17a2',
      explanation: "The major-minor system provided clearer tonal centers and stronger harmonic progressions, allowing for more dramatic musical expression and larger-scale compositions."
    },
    {
      id: 'mmsq18',
      text: "What is the dominant note in the key of A minor?",
      options: [
        { id: 'mmsq18a1', text: 'D' },
        { id: 'mmsq18a2', text: 'E' },
        { id: 'mmsq18a3', text: 'F' },
        { id: 'mmsq18a4', text: 'G' },
      ],
      correctAnswerId: 'mmsq18a2',
      explanation: "The dominant is always the 5th degree of the scale. In A minor (A-B-C-D-E-F-G-A), the 5th degree is E."
    },
    {
      id: 'mmsq19',
      text: "Which interval pattern distinguishes major scales from minor scales?",
      options: [
        { id: 'mmsq19a1', text: 'The position of the half steps' },
        { id: 'mmsq19a2', text: 'The number of sharps and flats' },
        { id: 'mmsq19a3', text: 'The starting note' },
        { id: 'mmsq19a4', text: 'The octave range' },
      ],
      correctAnswerId: 'mmsq19a1',
      explanation: "The key difference between major and minor scales is where the half steps occur. Major scales have half steps between 3-4 and 7-8, while natural minor scales have them between 2-3 and 5-6."
    },
    {
      id: 'mmsq20',
      text: "In Baroque compositions, what emotional effect was typically associated with minor keys?",
      options: [
        { id: 'mmsq20a1', text: 'Joy and celebration' },
        { id: 'mmsq20a2', text: 'Sadness, drama, or introspection' },
        { id: 'mmsq20a3', text: 'Playfulness and humor' },
        { id: 'mmsq20a4', text: 'Religious devotion only' },
      ],
      correctAnswerId: 'mmsq20a2',
      explanation: "In Baroque music theory (Affektenlehre), minor keys were associated with more serious emotions like sadness, drama, or introspection, contrasting with the brightness of major keys."
    }
  ]
};
