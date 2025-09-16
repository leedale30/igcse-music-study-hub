import { Quiz } from '../../types';

export const popularSongwritingQuiz: Quiz = {
  title: 'Popular Songwriting Quiz',
  questions: [
    {
      id: 'ps-q1',
      text: 'What is the most common song structure in popular music?',
      options: [
        { id: 'ps-q1a1', text: 'AAA Form' },
        { id: 'ps-q1a2', text: 'ABABCB Form' }, 
        { id: 'ps-q1a3', text: 'AABA Form' },
        { id: 'ps-q1a4', text: 'Single-Verse Form' }
      ],
      correctAnswerId: 'ps-q1a2',
      explanation: 'ABABCB (Verse-Chorus-Verse-Chorus-Bridge-Chorus) is the most prevalent structure in popular music, alternating verses and choruses with a contrasting bridge.'
    },
    {
      id: 'ps-q2',
      text: 'What is the primary function of a chorus in a popular song?',
      options: [
        { id: 'ps-q2a1', text: 'To tell the story' },
        { id: 'ps-q2a2', text: 'To provide contrast' },
        { id: 'ps-q2a3', text: 'To deliver the main message and hook' },
        { id: 'ps-q2a4', text: 'To introduce new chords' }
      ],
      correctAnswerId: 'ps-q2a3',
      explanation: 'The chorus is the central, most memorable part of a song, typically containing the main lyrical hook and message, repeated for emphasis.'
    },
    {
      id: 'ps-q3',
      text: 'What is a "hook" in popular songwriting?',
      options: [
        { id: 'ps-q3a1', text: 'A guitar technique' },
        { id: 'ps-q3a2', text: 'A short, repeated musical phrase designed to capture attention' },
        { id: 'ps-q3a3', text: 'A type of chord progression' },
        { id: 'ps-q3a4', text: 'A vocal effect' }
      ],
      correctAnswerId: 'ps-q3a2',
      explanation: 'A hook is a short, repeated musical phrase or lyrical line explicitly designed to capture the listener\'s attention and make the music memorable.'
    },
    {
      id: 'ps-q4',
      text: 'What is the typical melodic range for a popular song?',
      options: [
        { id: 'ps-q4a1', text: 'Two octaves' },
        { id: 'ps-q4a2', text: 'Less than an octave for sections, octave and a half for whole song' },
        { id: 'ps-q4a3', text: 'Three octaves' },
        { id: 'ps-q4a4', text: 'Exactly one octave' }
      ],
      correctAnswerId: 'ps-q4a2',
      explanation: 'Popular song melodies typically use less than an octave for individual sections and about an octave and a half for the entire song to maintain singability.'
    },
    {
      id: 'ps-q5',
      text: 'What is the function of a bridge in popular song structure?',
      options: [
        { id: 'ps-q5a1', text: 'To repeat the chorus' },
        { id: 'ps-q5a2', text: 'To provide contrast and fresh perspective' },
        { id: 'ps-q5a3', text: 'To introduce the song' },
        { id: 'ps-q5a4', text: 'To end the song' }
      ],
      correctAnswerId: 'ps-q5a2',
      explanation: 'A bridge provides contrast and offers a fresh perspective, often introducing new melodic, harmonic, or lyrical material and building tension before the final chorus.'
    },
    {
      id: 'ps-q6',
      text: 'What tempo range is typical for upbeat pop songs?',
      options: [
        { id: 'ps-q6a1', text: '60-90 BPM' },
        { id: 'ps-q6a2', text: '90-110 BPM' },
        { id: 'ps-q6a3', text: '120-140 BPM' },
        { id: 'ps-q6a4', text: '150-180 BPM' }
      ],
      correctAnswerId: 'ps-q6a3',
      explanation: 'Fast tempo pop songs typically range from 120-140 BPM, creating an upbeat, energetic feel suitable for dancing and radio play.'
    },
    {
      id: 'ps-q7',
      text: 'Which of these is NOT typically considered a core instrument in popular music?',
      options: [
        { id: 'ps-q7a1', text: 'Electric guitar' },
        { id: 'ps-q7a2', text: 'Bass guitar' },
        { id: 'ps-q7a3', text: 'Synthesizer' },
        { id: 'ps-q7a4', text: 'Violin' }
      ],
      correctAnswerId: 'ps-q7a4',
      explanation: 'While violin can be used in popular music, the core instruments are typically electric guitar, bass guitar, drums, and synthesizers.'
    },
    {
      id: 'ps-q8',
      text: 'What is "melisma" in vocal technique?',
      options: [
        { id: 'ps-q8a1', text: 'Singing very loudly' },
        { id: 'ps-q8a2', text: 'Singing one syllable to many notes' },
        { id: 'ps-q8a3', text: 'Singing without words' },
        { id: 'ps-q8a4', text: 'Singing in harmony' }
      ],
      correctAnswerId: 'ps-q8a2',
      explanation: 'Melisma is a vocal technique where one syllable of text is sung to many notes in the melody line, often used for expressive effect.'
    },
    {
      id: 'ps-q9',
      text: 'What is the "multiples of 4" rule in song structure?',
      options: [
        { id: 'ps-q9a1', text: 'Songs must be 4 minutes long' },
        { id: 'ps-q9a2', text: 'Sections typically use 4, 8, or 16 bars' },
        { id: 'ps-q9a3', text: 'Use only 4 chords' },
        { id: 'ps-q9a4', text: 'Repeat everything 4 times' }
      ],
      correctAnswerId: 'ps-q9a2',
      explanation: 'The "multiples of 4" rule suggests that song sections typically use 4, 8, or 16 bars for predictability and natural flow.'
    },
    {
      id: 'ps-q10',
      text: 'What should lyrics in the verse primarily do?',
      options: [
        { id: 'ps-q10a1', text: 'Repeat the main message' },
        { id: 'ps-q10a2', text: 'Tell the story and set the scene' },
        { id: 'ps-q10a3', text: 'Provide the hook' },
        { id: 'ps-q10a4', text: 'End the song' }
      ],
      correctAnswerId: 'ps-q10a2',
      explanation: 'Verse lyrics should primarily tell the story, set the scene, and advance the narrative, with changing lyrics in each verse.'
    }
  ]
};