import { Quiz } from '../../../types';

export const popSongIntroductionQuiz: Quiz = {
  title: "Introduction to Pop Song Quiz",
  questions: [
    {
      id: 'ps4iq1',
      text: "What is the primary goal of pop songs?",
      options: [
        { id: 'ps4iq1a1', text: 'To showcase complex musical techniques' },
        { id: 'ps4iq1a2', text: 'To appeal to the broadest possible audience and achieve commercial success' },
        { id: 'ps4iq1a3', text: 'To preserve traditional folk melodies' },
        { id: 'ps4iq1a4', text: 'To demonstrate advanced vocal techniques' },
      ],
      correctAnswerId: 'ps4iq1a2',
      explanation: "Pop songs are designed to appeal to the broadest possible audience and achieve commercial success, unlike art songs which target more specialized audiences."
    },
    {
      id: 'ps4iq2',
      text: "What is the typical length of a pop song?",
      options: [
        { id: 'ps4iq2a1', text: '1-2 minutes' },
        { id: 'ps4iq2a2', text: '3-5 minutes' },
        { id: 'ps4iq2a3', text: '8-10 minutes' },
        { id: 'ps4iq2a4', text: '15-20 minutes' },
      ],
      correctAnswerId: 'ps4iq2a2',
      explanation: "Pop songs are typically 3-5 minutes long, which is ideal for radio play and commercial distribution."
    },
    {
      id: 'ps4iq3',
      text: "Which structural pattern is most common in pop songs?",
      options: [
        { id: 'ps4iq3a1', text: 'Through-composed form' },
        { id: 'ps4iq3a2', text: 'Verse-chorus structure' },
        { id: 'ps4iq3a3', text: 'AABA form only' },
        { id: 'ps4iq3a4', text: 'Fugue form' },
      ],
      correctAnswerId: 'ps4iq3a2',
      explanation: "The verse-chorus structure is the most common in pop songs, with verses telling the story and choruses providing the memorable 'hook'."
    },
    {
      id: 'ps4iq4',
      text: "What is a 'hook' in pop music?",
      options: [
        { id: 'ps4iq4a1', text: 'A type of guitar technique' },
        { id: 'ps4iq4a2', text: 'A short, instantly memorable melodic phrase' },
        { id: 'ps4iq4a3', text: 'A recording device' },
        { id: 'ps4iq4a4', text: 'A type of chord progression' },
      ],
      correctAnswerId: 'ps4iq4a2',
      explanation: "A hook is a short, instantly memorable melodic phrase designed to catch the listener's attention and stick in their memory."
    },
    {
      id: 'ps4iq5',
      text: "Which chord progression is often called the 'four chords of pop'?",
      options: [
        { id: 'ps4iq5a1', text: 'I-V-vi-IV' },
        { id: 'ps4iq5a2', text: 'ii-V-I-vi' },
        { id: 'ps4iq5a3', text: 'I-ii-iii-IV' },
        { id: 'ps4iq5a4', text: 'vi-vii-I-ii' },
      ],
      correctAnswerId: 'ps4iq5a1',
      explanation: "The I-V-vi-IV progression is extremely common in pop music and is often referred to as the 'four chords of pop'."
    },
    {
      id: 'ps4iq6',
      text: "What is the 'backbeat' in pop music?",
      options: [
        { id: 'ps4iq6a1', text: 'Emphasis on beats 1 and 3' },
        { id: 'ps4iq6a2', text: 'Emphasis on beats 2 and 4' },
        { id: 'ps4iq6a3', text: 'Playing behind the tempo' },
        { id: 'ps4iq6a4', text: 'A type of bass line' },
      ],
      correctAnswerId: 'ps4iq6a2',
      explanation: "The backbeat refers to the emphasis on beats 2 and 4 in a 4/4 time signature, which is characteristic of most pop music."
    },
    {
      id: 'ps4iq7',
      text: "How do pop songs typically set text to music?",
      options: [
        { id: 'ps4iq7a1', text: 'Primarily melismatic (many notes per syllable)' },
        { id: 'ps4iq7a2', text: 'Primarily syllabic (one note per syllable)' },
        { id: 'ps4iq7a3', text: 'Only through spoken word' },
        { id: 'ps4iq7a4', text: 'Without any text' },
      ],
      correctAnswerId: 'ps4iq7a2',
      explanation: "Pop songs primarily use syllabic text setting (one note per syllable) for clarity and singability, with occasional melismatic passages for emphasis."
    },
    {
      id: 'ps4iq8',
      text: "What was the significance of MTV in pop music history?",
      options: [
        { id: 'ps4iq8a1', text: 'It created the visual dimension to pop music' },
        { id: 'ps4iq8a2', text: 'It invented the electric guitar' },
        { id: 'ps4iq8a3', text: 'It established the first recording studios' },
        { id: 'ps4iq8a4', text: 'It created the first pop songs' },
      ],
      correctAnswerId: 'ps4iq8a1',
      explanation: "MTV (Music Television) created the visual dimension to pop music through music videos, fundamentally changing how pop music was marketed and consumed."
    },
    {
      id: 'ps4iq9',
      text: "Which era established the 32-bar AABA form as standard for popular songs?",
      options: [
        { id: 'ps4iq9a1', text: 'Tin Pan Alley era (1920s-1940s)' },
        { id: 'ps4iq9a2', text: 'Rock and Roll era (1950s-1960s)' },
        { id: 'ps4iq9a3', text: 'Digital Revolution (1990s-Present)' },
        { id: 'ps4iq9a4', text: 'Album Era (1970s-1980s)' },
      ],
      correctAnswerId: 'ps4iq9a1',
      explanation: "The Tin Pan Alley songwriting industry (1920s-1940s) established the 32-bar AABA form as the standard commercial song formula."
    },
    {
      id: 'ps4iq10',
      text: "What is the most common lyrical theme in pop songs?",
      options: [
        { id: 'ps4iq10a1', text: 'Political commentary' },
        { id: 'ps4iq10a2', text: 'Love and relationships' },
        { id: 'ps4iq10a3', text: 'Historical events' },
        { id: 'ps4iq10a4', text: 'Scientific discoveries' },
      ],
      correctAnswerId: 'ps4iq10a2',
      explanation: "Love and relationships are by far the most common lyrical theme in pop songs, as these are universal human experiences that resonate with broad audiences."
    },
    {
      id: 'ps4iq11',
      text: "What is auto-tune in pop music production?",
      options: [
        { id: 'ps4iq11a1', text: 'A type of guitar effect' },
        { id: 'ps4iq11a2', text: 'Technology that corrects pitch imperfections in vocals' },
        { id: 'ps4iq11a3', text: 'A drumming technique' },
        { id: 'ps4iq11a4', text: 'A method of writing lyrics' },
      ],
      correctAnswerId: 'ps4iq11a2',
      explanation: "Auto-tune is technology that corrects pitch imperfections in vocal recordings and is sometimes used as a creative effect in modern pop production."
    },
    {
      id: 'ps4iq12',
      text: "What is the typical vocal range for pop song melodies?",
      options: [
        { id: 'ps4iq12a1', text: 'Three octaves or more' },
        { id: 'ps4iq12a2', text: 'One to one-and-a-half octaves' },
        { id: 'ps4iq12a3', text: 'Less than half an octave' },
        { id: 'ps4iq12a4', text: 'Exactly two octaves' },
      ],
      correctAnswerId: 'ps4iq12a2',
      explanation: "Pop song melodies typically span one to one-and-a-half octaves to ensure they can be sung by untrained voices and are accessible to most people."
    },
    {
      id: 'ps4iq13',
      text: "How has the digital revolution changed pop music?",
      options: [
        { id: 'ps4iq13a1', text: 'It eliminated the need for musicians' },
        { id: 'ps4iq13a2', text: 'It changed distribution, production, and discovery of music' },
        { id: 'ps4iq13a3', text: 'It made all music sound the same' },
        { id: 'ps4iq13a4', text: 'It only affected classical music' },
      ],
      correctAnswerId: 'ps4iq13a2',
      explanation: "The digital revolution transformed how pop music is distributed (streaming), produced (digital tools), and discovered (social media, algorithms)."
    },
    {
      id: 'ps4iq14',
      text: "What is sampling in pop music?",
      options: [
        { id: 'ps4iq14a1', text: 'Testing different instruments' },
        { id: 'ps4iq14a2', text: 'Incorporating portions of existing recordings into new songs' },
        { id: 'ps4iq14a3', text: 'Playing very short musical phrases' },
        { id: 'ps4iq14a4', text: 'Recording in small studios' },
      ],
      correctAnswerId: 'ps4iq14a2',
      explanation: "Sampling involves incorporating portions of existing recordings into new songs, which became a major technique in hip-hop and electronic pop music."
    },
    {
      id: 'ps4iq15',
      text: "How do pop songs differ from art songs in their approach to word-music relationships?",
      options: [
        { id: 'ps4iq15a1', text: 'Pop songs never use word-painting' },
        { id: 'ps4iq15a2', text: 'Pop songs prioritize accessibility and commercial appeal over sophisticated text interpretation' },
        { id: 'ps4iq15a3', text: 'Pop songs only use instrumental music' },
        { id: 'ps4iq15a4', text: 'Pop songs are always longer than art songs' },
      ],
      correctAnswerId: 'ps4iq15a2',
      explanation: "While both combine words and music, pop songs prioritize accessibility and commercial appeal over the sophisticated text interpretation typically found in art songs."
    }
  ]
};