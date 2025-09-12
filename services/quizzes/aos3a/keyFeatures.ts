import { Quiz } from '../../../types';

export const popularSongKeyFeaturesQuiz: Quiz = {
  title: "Key Features of Popular Song Quiz",
  questions: [
    {
      id: 'pskfq1',
      text: "What is the 'backbeat' in popular music?",
      options: [
        { id: 'pskfq1a1', text: 'Emphasis on beats 1 and 3' },
        { id: 'pskfq1a2', text: 'Emphasis on beats 2 and 4' },
        { id: 'pskfq1a3', text: 'A very slow tempo' },
        { id: 'pskfq1a4', text: 'Playing behind the beat' },
      ],
      correctAnswerId: 'pskfq1a2',
      explanation: "The backbeat emphasizes beats 2 and 4 in a 4/4 time signature, creating the characteristic driving rhythm of popular music."
    },
    {
      id: 'pskfq2',
      text: "Blue notes are:",
      options: [
        { id: 'pskfq2a1', text: 'Notes played very quietly' },
        { id: 'pskfq2a2', text: 'Flattened 3rd, 5th, and 7th scale degrees' },
        { id: 'pskfq2a3', text: 'Notes played on blue instruments' },
        { id: 'pskfq2a4', text: 'Very high pitched notes' },
      ],
      correctAnswerId: 'pskfq2a2',
      explanation: "Blue notes are flattened 3rd, 5th, and 7th scale degrees that give blues, jazz, and rock their distinctive sound."
    },
    {
      id: 'pskfq3',
      text: "The most common time signature in popular music is:",
      options: [
        { id: 'pskfq3a1', text: '3/4' },
        { id: 'pskfq3a2', text: '4/4' },
        { id: 'pskfq3a3', text: '2/4' },
        { id: 'pskfq3a4', text: '6/8' },
      ],
      correctAnswerId: 'pskfq3a2',
      explanation: "4/4 time is by far the most common time signature in popular music, providing a steady four-beat pattern."
    },
    {
      id: 'pskfq4',
      text: "In a typical verse-chorus song structure, the chorus is:",
      options: [
        { id: 'pskfq4a1', text: 'The part that tells the story with different lyrics each time' },
        { id: 'pskfq4a2', text: 'The most memorable part with repeated lyrics' },
        { id: 'pskfq4a3', text: 'The instrumental solo section' },
        { id: 'pskfq4a4', text: 'The quiet ending of the song' },
      ],
      correctAnswerId: 'pskfq4a2',
      explanation: "The chorus is typically the 'hook' - the most memorable and catchy part of the song with lyrics that repeat."
    },
    {
      id: 'pskfq5',
      text: "The 12-bar blues follows which harmonic progression?",
      options: [
        { id: 'pskfq5a1', text: 'I-V-vi-IV' },
        { id: 'pskfq5a2', text: 'I-I-I-I-IV-IV-I-I-V-IV-I-I' },
        { id: 'pskfq5a3', text: 'ii-V-I' },
        { id: 'pskfq5a4', text: 'vi-IV-I-V' },
      ],
      correctAnswerId: 'pskfq5a2',
      explanation: "The 12-bar blues follows the pattern I-I-I-I-IV-IV-I-I-V-IV-I-I, which is fundamental to blues and rock music."
    },
    {
      id: 'pskfq6',
      text: "Call and response in popular music refers to:",
      options: [
        { id: 'pskfq6a1', text: 'Calling the audience to sing along' },
        { id: 'pskfq6a2', text: 'Musical conversation between different parts' },
        { id: 'pskfq6a3', text: 'Responding to critics' },
        { id: 'pskfq6a4', text: 'Telephone conversations in lyrics' },
      ],
      correctAnswerId: 'pskfq6a2',
      explanation: "Call and response is a musical conversation between different parts, such as lead vocal and backing vocals, rooted in African musical traditions."
    },
    {
      id: 'pskfq7',
      text: "Which instruments typically make up the rhythm section in popular music?",
      options: [
        { id: 'pskfq7a1', text: 'Violin, viola, cello' },
        { id: 'pskfq7a2', text: 'Drums, bass, rhythm guitar/keyboards' },
        { id: 'pskfq7a3', text: 'Trumpet, trombone, saxophone' },
        { id: 'pskfq7a4', text: 'Flute, oboe, clarinet' },
      ],
      correctAnswerId: 'pskfq7a2',
      explanation: "The rhythm section consists of drums (rhythmic foundation), bass (harmonic foundation), and rhythm guitar or keyboards (harmonic and rhythmic support)."
    },
    {
      id: 'pskfq8',
      text: "Syncopation in popular music means:",
      options: [
        { id: 'pskfq8a1', text: 'Playing very fast' },
        { id: 'pskfq8a2', text: 'Emphasizing off-beats or weak beats' },
        { id: 'pskfq8a3', text: 'Playing in perfect time' },
        { id: 'pskfq8a4', text: 'Using electronic instruments' },
      ],
      correctAnswerId: 'pskfq8a2',
      explanation: "Syncopation involves emphasizing off-beats or weak beats, creating rhythmic interest and forward momentum in the music."
    },
    {
      id: 'pskfq9',
      text: "The AABA form (32-bar form) consists of:",
      options: [
        { id: 'pskfq9a1', text: 'Four different musical sections' },
        { id: 'pskfq9a2', text: 'Two A sections, one B section, then another A section' },
        { id: 'pskfq9a3', text: 'Only A sections repeated' },
        { id: 'pskfq9a4', text: 'Alternating A and B sections throughout' },
      ],
      correctAnswerId: 'pskfq9a2',
      explanation: "AABA form has two A sections (main melody), a contrasting B section (bridge), then returns to the A section."
    },
    {
      id: 'pskfq10',
      text: "Multi-tracking in recording refers to:",
      options: [
        { id: 'pskfq10a1', text: 'Recording multiple songs at once' },
        { id: 'pskfq10a2', text: 'Recording different parts separately' },
        { id: 'pskfq10a3', text: 'Using multiple microphones' },
        { id: 'pskfq10a4', text: 'Recording at multiple locations' },
      ],
      correctAnswerId: 'pskfq10a2',
      explanation: "Multi-tracking allows different instruments and vocals to be recorded separately, then combined to create the final mix."
    },
    {
      id: 'pskfq11',
      text: "Extended chords in popular music (7th, 9th, 11th, 13th) are most commonly used in:",
      options: [
        { id: 'pskfq11a1', text: 'Punk rock' },
        { id: 'pskfq11a2', text: 'Jazz and R&B' },
        { id: 'pskfq11a3', text: 'Folk music' },
        { id: 'pskfq11a4', text: 'Heavy metal' },
      ],
      correctAnswerId: 'pskfq11a2',
      explanation: "Jazz and R&B frequently use extended chords to create sophisticated harmonic colors and progressions."
    },
    {
      id: 'pskfq12',
      text: "The bridge in a popular song typically:",
      options: [
        { id: 'pskfq12a1', text: 'Repeats the chorus melody' },
        { id: 'pskfq12a2', text: 'Provides contrast to the verse and chorus' },
        { id: 'pskfq12a3', text: 'Is always instrumental' },
        { id: 'pskfq12a4', text: 'Comes at the very beginning' },
      ],
      correctAnswerId: 'pskfq12a2',
      explanation: "The bridge provides musical and lyrical contrast to the verse and chorus, often appearing once in the song for variety."
    },
    {
      id: 'pskfq13',
      text: "Sampling in popular music involves:",
      options: [
        { id: 'pskfq13a1', text: 'Testing different instruments' },
        { id: 'pskfq13a2', text: 'Using portions of existing recordings in new songs' },
        { id: 'pskfq13a3', text: 'Recording small sections at a time' },
        { id: 'pskfq13a4', text: 'Trying out different melodies' },
      ],
      correctAnswerId: 'pskfq13a2',
      explanation: "Sampling involves taking portions of existing recordings and incorporating them into new compositions, particularly common in hip-hop and electronic music."
    },
    {
      id: 'pskfq14',
      text: "Modal harmony in popular music often uses:",
      options: [
        { id: 'pskfq14a1', text: 'Only major and minor scales' },
        { id: 'pskfq14a2', text: 'Dorian and Mixolydian modes' },
        { id: 'pskfq14a3', text: 'Atonal scales' },
        { id: 'pskfq14a4', text: 'Pentatonic scales exclusively' },
      ],
      correctAnswerId: 'pskfq14a2',
      explanation: "Dorian mode (natural minor with raised 6th) and Mixolydian mode (major with lowered 7th) are commonly used in rock and folk music."
    },
    {
      id: 'pskfq15',
      text: "The typical vocal range in popular music is:",
      options: [
        { id: 'pskfq15a1', text: 'Three octaves or more' },
        { id: 'pskfq15a2', text: 'One octave to one and a half octaves' },
        { id: 'pskfq15a3', text: 'Less than half an octave' },
        { id: 'pskfq15a4', text: 'Exactly two octaves' },
      ],
      correctAnswerId: 'pskfq15a2',
      explanation: "Popular song melodies are typically designed within one to one and a half octaves to ensure singability for most vocalists and audiences."
    }
  ]
};