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
    }
  ]
};
