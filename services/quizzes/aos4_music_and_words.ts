import { Quiz } from '../../types';

export const artSongQuiz: Quiz = {
  title: "Art Song for Solo Voice Quiz",
  questions: [
    {
      id: 'asq1',
      text: "What is the general definition of an 'Art Song'?",
      options: [
        { id: 'asq1a1', text: 'A song written for a large choir.' },
        { id: 'asq1a2', text: 'A genre for solo voice, typically with piano, where music enhances a poetic text.' },
        { id: 'asq1a3', text: 'An improvised folk song.' },
        { id: 'asq1a4', text: 'A song from a stage musical.' },
      ],
      correctAnswerId: 'asq1a2',
      explanation: "An Art Song is a genre for a solo singer, usually accompanied by piano, designed to enhance the meaning of a poem."
    },
    {
      id: 'asq2',
      text: "What is a 'Song Cycle'?",
      options: [
        { id: 'asq2a1', text: 'A song that repeats the same music for every verse.' },
        { id: 'asq2a2', text: 'A collection of individual songs grouped together with a related theme.' },
        { id: 'asq2a3', text: 'A song with a very complex and cyclical structure.' },
        { id: 'asq2a4', text: 'The final song in an opera.' },
      ],
      correctAnswerId: 'asq2a2',
      explanation: "A song cycle is a collection of art songs linked by a common theme or poet, intended to be performed as a group."
    },
    {
      id: 'asq3',
      text: "The technique where the music directly illustrates the meaning of individual words (e.g., a rising melody for 'rising') is called:",
      options: [
        { id: 'asq3a1', text: 'Text Setting' },
        { id: 'asq3a2', text: 'Word-Painting' },
        { id: 'asq3a3', text: 'Strophic Form' },
        { id: 'asq3a4', text: 'Melisma' },
      ],
      correctAnswerId: 'asq3a2',
      explanation: "Word-painting is the technique of making the music a direct reflection of the text's meaning."
    },
    {
      id: 'asq4',
      text: "What does 'syllabic' text setting mean?",
      options: [
        { id: 'asq4a1', text: 'One syllable is sung over many notes.' },
        { id: 'asq4a2', text: 'The text is spoken instead of sung.' },
        { id: 'asq4a3', text: 'One note is set for each syllable of text.' },
        { id: 'asq4a4', text: 'The syllables are unclear.' },
      ],
      correctAnswerId: 'asq4a3',
      explanation: "Syllabic setting involves one note per syllable, which prioritizes the clarity of the text."
    },
    {
      id: 'asq5',
      text: "A 'melisma' is the setting of:",
      options: [
        { id: 'asq5a1', text: 'One syllable to one note.' },
        { id: 'asq5a2', text: 'One syllable to many notes.' },
        { id: 'asq5a3', text: 'Many syllables to one note.' },
        { id: 'asq5a4', text: 'A sad text to a happy melody.' },
      ],
      correctAnswerId: 'asq5a2',
      explanation: "A melisma is when a single syllable is sung over a series of multiple notes, often for emphasis or expression."
    },
    {
      id: 'asq6',
      text: "What is 'Strophic Form'?",
      options: [
        { id: 'asq6a1', text: 'A song where the music continually changes.' },
        { id: 'asq6a2', text: 'A song that tells a very long story.' },
        { id: 'asq6a3', text: 'A song where each verse of a poem is set to the same music.' },
        { id: 'asq6a4', text: 'A song with no clear structure.' },
      ],
      correctAnswerId: 'asq6a3',
      explanation: "In strophic form, the same melody and accompaniment are used for each verse of the text."
    },
    {
      id: 'asq7',
      text: "A song where the music continually changes to reflect the developing narrative of the text is called:",
      options: [
        { id: 'asq7a1', text: 'Strophic' },
        { id: 'asq7a2', text: 'Through-Composed' },
        { id: 'asq7a3', text: 'Syllabic' },
        { id: 'asq7a4', text: 'Lyrical' },
      ],
      correctAnswerId: 'asq7a2',
      explanation: "Through-composed form allows for a more flexible and detailed musical interpretation as the music changes with the text."
    },
    {
      id: 'asq8',
      text: "In an art song, what is the role of the piano accompaniment?",
      options: [
        { id: 'asq8a1', text: 'It is just a simple backing track.' },
        { id: 'asq8a2', text: 'It is less important than the vocal line.' },
        { id: 'asq8a3', text: 'It is an equal partner in conveying the text\'s meaning.' },
        { id: 'asq8a4', text: 'It always plays the same melody as the singer.' },
      ],
      correctAnswerId: 'asq8a3',
      explanation: "The accompaniment is considered an equal partner, often portraying meaning and atmosphere just as much as the vocal line."
    },
    {
      id: 'asq9',
      text: "Composers like Ralph Vaughan Williams are associated with which national style of art song?",
      options: [
        { id: 'asq9a1', text: 'American Art Song' },
        { id: 'asq9a2', text: 'German Lieder' },
        { id: 'asq9a3', text: 'French Mélodie' },
        { id: 'asq9a4', text: 'English Art Song' },
      ],
      correctAnswerId: 'asq9a4',
      explanation: "Ralph Vaughan Williams was a leading figure in the English Art Song tradition."
    },
    {
      id: 'asq10',
      text: "The English Art Song style often drew inspiration from:",
      options: [
        { id: 'asq10a1', text: 'Jazz and dissonance.' },
        { id: 'asq10a2', text: 'Industrial factory sounds.' },
        { id: 'asq10a3', text: 'Folk music and pastoral lyricism.' },
        { id: 'asq10a4', text: 'Complex mathematical formulas.' },
      ],
      correctAnswerId: 'asq10a3',
      explanation: "English Art Song composers often used folk music and set pastoral poetry to create a distinct national identity in their music."
    },
    {
      id: 'asq11',
      text: "Which song in Vaughan Williams's 'Songs of Travel' uses a 'memorable marching rhythm' and 'striding bass' to reflect a traveller's determination?",
      options: [
        { id: 'asq11a1', text: '"Let beauty awake"' },
        { id: 'asq11a2', text: '"In dreams"' },
        { id: 'asq11a3', text: '"The vagabond"' },
        { id: 'asq11a4', text: '"The infinite shining heavens"' },
      ],
      correctAnswerId: 'asq11a3',
      explanation: '"The vagabond" opens the cycle with a strong marching rhythm to depict the determined traveller.'
    },
    {
      id: 'asq12',
      text: "The gentle, lyrical music with a 'rippling arpeggio accompaniment' is a feature of which song from 'Songs of Travel'?",
      options: [
        { id: 'asq12a1', text: '"The vagabond"' },
        { id: 'asq12a2', text: '"Let beauty awake"' },
        { id: 'asq12a3', text: '"In dreams"' },
        { id: 'asq12a4', text: 'Epilogue' },
      ],
      correctAnswerId: 'asq12a2',
      explanation: '"Let beauty awake" uses a rippling arpeggio in the piano to match the tender poetry.'
    },
    {
      id: 'asq13',
      text: "Which term describes notes that do not belong to the diatonic scale or key, often used for emotional effect?",
      options: [
        { id: 'asq13a1', text: 'Diatonic' },
        { id: 'asq13a2', text: 'Chromatic' },
        { id: 'asq13a3', text: 'Syllabic' },
        { id: 'asq13a4', text: 'Strophic' },
      ],
      correctAnswerId: 'asq13a2',
      explanation: "Chromatic notes are those outside the established key, often used to add color, emotion, or a melancholy feel."
    },
    {
      id: 'asq14',
      text: "Notes that sound tense or unstable when played together are described as having:",
      options: [
        { id: 'asq14a1', text: 'Consonance' },
        { id: 'asq14a2', text: 'Homophony' },
        { id: 'asq14a3', text: 'Dissonance' },
        { id: 'asq14a4', text: 'Timbre' },
      ],
      correctAnswerId: 'asq14a3',
      explanation: "Dissonance refers to notes that sound clashing, tense, or unstable."
    },
    {
      id: 'asq15',
      text: "What does the term 'arpeggio' mean?",
      options: [
        { id: 'asq15a1', text: 'Playing the notes of a chord all at the same time.' },
        { id: 'asq15a2', text: 'A very loud dynamic marking.' },
        { id: 'asq15a3', text: 'Playing the notes of a chord successively rather than simultaneously.' },
        { id: 'asq15a4', text: 'A sad or melancholic melody.' },
      ],
      correctAnswerId: 'asq15a3',
      explanation: "An arpeggio, or broken chord, is when the notes of a chord are played one after another."
    },
    {
      id: 'asq16',
      text: "What is a monophonic texture?",
      options: [
        { id: 'asq16a1', text: 'A single melodic line with no harmonic accompaniment.' },
        { id: 'asq16a2', text: 'Two or more independent melodic lines.' },
        { id: 'asq16a3', text: 'A melody with chordal accompaniment.' },
        { id: 'asq16a4', text: 'A very loud texture.' },
      ],
      correctAnswerId: 'asq16a1',
      explanation: "Monophonic texture consists of only a single melodic line with no harmony."
    },
    {
      id: 'asq17',
      text: "In Vaughan Williams's 'In dreams', what musical feature in the piano creates a persistent, uneasy feel?",
      options: [
        { id: 'asq17a1', text: 'A loud, marching rhythm.' },
        { id: 'asq17a2', text: 'A simple, consonant harmony.' },
        { id: 'asq17a3', text: 'An off-beat rhythm.' },
        { id: 'asq17a4', text: 'A very fast tempo.' },
      ],
      correctAnswerId: 'asq17a3',
      explanation: '"In dreams" uses a persistent, uneasy off-beat rhythm to create a melancholy and unsettled feeling.'
    },
    {
      id: 'asq18',
      text: "How does the Epilogue of 'Songs of Travel' unify the entire work?",
      options: [
        { id: 'asq18a1', text: 'By introducing completely new musical material.' },
        { id: 'asq18a2', text: 'By quoting melodies from earlier songs in the cycle.' },
        { id: 'asq18a3', text: 'By being much louder than all the other songs.' },
        { id: 'asq18a4', text: 'By repeating the first song exactly.' },
      ],
      correctAnswerId: 'asq18a2',
      explanation: "The Epilogue unifies the cycle by quoting themes from earlier songs, bringing the journey to a reflective close."
    },
    {
      id: 'asq19',
      text: "What does the term 'lyrical' mean in a musical context?",
      options: [
        { id: 'asq19a1', text: 'Having a strong, marching rhythm.' },
        { id: 'asq19a2', text: 'Being very dissonant.' },
        { id: 'asq19a3', text: 'Having a rich, song-like, expressive quality.' },
        { id: 'asq19a4', text: 'Having very simple words.' },
      ],
      correctAnswerId: 'asq19a3',
      explanation: "'Lyrical' describes a melody that is expressive, expansive, and has a song-like character."
    },
    {
      id: 'asq20',
      text: "The specific tone quality or sound of an instrument or voice is called its:",
      options: [
        { id: 'asq20a1', text: 'Tempo' },
        { id: 'asq20a2', text: 'Metre' },
        { id: 'asq20a3', text: 'Timbre' },
        { id: 'asq20a4', text: 'Dynamics' },
      ],
      correctAnswerId: 'asq20a3',
      explanation: "Timbre is the term for the unique sound quality of a particular voice or instrument."
    },
    {
      id: 'asq21',
      text: "What does 'pianissimo' (pp) mean?",
      options: [
        { id: 'asq21a1', text: 'Very fast' },
        { id: 'asq21a2', text: 'Very loud' },
        { id: 'asq21a3', text: 'Very slow' },
        { id: 'asq21a4', text: 'Very quiet' },
      ],
      correctAnswerId: 'asq21a4',
      explanation: "Pianissimo (pp) is a dynamic marking indicating that the music should be played very quietly."
    },
    {
      id: 'asq22',
      text: "Composers like Charles Ives and Aaron Copland are associated with which style?",
      options: [
        { id: 'asq22a1', text: 'English Art Song' },
        { id: 'asq22a2', text: 'American Art Song' },
        { id: 'asq22a3', text: 'Baroque Opera' },
        { id: 'asq22a4', text: 'Romantic Symphony' },
      ],
      correctAnswerId: 'asq22a2',
      explanation: "Ives and Copland were prominent composers in the American Art Song tradition."
    },
    {
      id: 'asq23',
      text: "Which of the following is a characteristic of American Art Song?",
      options: [
        { id: 'asq23a1', text: 'A strict adherence to European Romantic styles.' },
        { id: 'asq23a2', text: 'A focus only on religious texts.' },
        { id: 'asq23a3', text: 'An exploration of influences like dissonance, jazz, and folk idioms.' },
        { id: 'asq23a4', text: 'The exclusive use of syllabic text setting.' },
      ],
      correctAnswerId: 'asq23a3',
      explanation: "American Art Song composers explored a wide range of influences, reflecting the diverse American spirit."
    },
    {
      id: 'asq24',
      text: "What is a homophonic texture?",
      options: [
        { id: 'asq24a1', text: 'A single unaccompanied melody.' },
        { id: 'asq24a2', text: 'A texture with two or more independent melodic lines.' },
        { id: 'asq24a3', text: 'A texture consisting of a melody line with chordal accompaniment.' },
        { id: 'asq24a4', text: 'A texture where all parts play in unison.' },
      ],
      correctAnswerId: 'asq24a3',
      explanation: "Homophonic texture features a main melody supported by chords."
    },
    {
      id: 'asq25',
      text: "Vaughan Williams's 'Songs of Travel' sets poems by which author?",
      options: [
        { id: 'asq25a1', text: 'William Shakespeare' },
        { id: 'asq25a2', text: 'William Wordsworth' },
        { id: 'asq25a3', text: 'Robert Louis Stevenson' },
        { id: 'asq25a4', text: 'Charles Dickens' },
      ],
      correctAnswerId: 'asq25a3',
      explanation: "The poems for 'Songs of Travel' were written by Robert Louis Stevenson."
    },
    {
      id: 'asq26',
      text: "The art song tradition continued from which musical era into the twentieth century?",
      options: [
        { id: 'asq26a1', text: 'The Medieval Era' },
        { id: 'asq26a2', text: 'The Renaissance Era' },
        { id: 'asq26a3', text: 'The Romantic Era' },
        { id: 'asq26a4', text: 'The Classical Era' },
      ],
      correctAnswerId: 'asq26a3',
      explanation: "The art song was a significant genre in the Romantic era, and its tradition continued to flourish afterwards."
    },
    {
      id: 'asq27',
      text: "What is the term for the overall plan or organization of a piece of music?",
      options: [
        { id: 'asq27a1', text: 'Tonality' },
        { id: 'asq27a2', text: 'Texture' },
        { id: 'asq27a3', text: 'Structure' },
        { id: 'asq27a4', text: 'Timbre' },
      ],
      correctAnswerId: 'asq27a3',
      explanation: "Structure refers to the overall plan, form, or organization of a musical work."
    },
    {
      id: 'asq28',
      text: "A tonality often associated with sad, solemn, or melancholic music is a:",
      options: [
        { id: 'asq28a1', text: 'Major key' },
        { id: 'asq28a2', text: 'Minor key' },
        { id: 'asq28a3', 'text': 'Modal key' },
        { id: 'asq28a4', 'text': 'Atonal key' },
      ],
      correctAnswerId: 'asq28a2',
      explanation: "Minor keys are often used by composers to evoke sad or serious moods."
    },
    {
      id: 'asq29',
      text: "What does the term 'metre' refer to?",
      options: [
        { id: 'asq29a1', text: 'The speed of the music.' },
        { id: 'asq29a2', text: 'The volume of the music.' },
        { id: 'asq29a3', text: 'The number of beats in a bar and how they are grouped.' },
        { id: 'asq29a4', text: 'The main tune of the song.' },
      ],
      correctAnswerId: 'asq29a3',
      explanation: "Metre is the organization of beats into regular groups within a bar."
    },
    {
      id: 'asq30',
      text: "A 'persistent, uneasy off-beat rhythm' is used to create a melancholy feel in which song?",
      options: [
        { id: 'asq30a1', text: '"The vagabond"' },
        { id: 'asq30a2', text: '"Let beauty awake"' },
        { id: 'asq30a3', text: '"In dreams"' },
        { id: 'asq30a4', text: '"The infinite shining heavens"' },
      ],
      correctAnswerId: 'asq30a3',
      explanation: "The song 'In dreams' from 'Songs of Travel' uses an off-beat rhythm in the piano to create an unsettled, melancholy mood."
    },
    {
      id: 'asq31',
      text: "The distance in pitch between two notes is known as an:",
      options: [
        { id: 'asq31a1', text: 'Interval' },
        { id: 'asq31a2', text: 'Arpeggio' },
        { id: 'asq31a3', text: 'Accompaniment' },
        { id: 'asq31a4', text: 'Rhythm' },
      ],
      correctAnswerId: 'asq31a1',
      explanation: "An interval is the term for the distance between two pitches."
    },
    {
      id: 'asq32',
      text: "Which of these is NOT an example of a musical texture?",
      options: [
        { id: 'asq32a1', text: 'Monophonic' },
        { id: 'asq32a2', text: 'Homophonic' },
        { id: 'asq32a3', text: 'Polyphonic' },
        { id: 'asq32a4', text: 'Strophic' },
      ],
      correctAnswerId: 'asq32a4',
      explanation: "Strophic is a type of musical structure or form, not a texture. Monophonic, homophonic, and polyphonic are all types of texture."
    },
    {
      id: 'asq33',
      text: "Benjamin Britten's 'Serenade' and Richard Strauss's 'Four Last Songs' are examples of art songs with what kind of accompaniment?",
      options: [
        { id: 'asq33a1', text: 'Solo piano only' },
        { id: 'asq33a2', text: 'Unaccompanied (a cappella)' },
        { id: 'asq33a3', text: 'Orchestral or instrumental ensembles' },
        { id: 'asq33a4', text: 'Electronic synthesizers' },
      ],
      correctAnswerId: 'asq33a3',
      explanation: "These works show that while piano is common, art songs can also be accompanied by larger instrumental forces like an orchestra."
    },
    {
      id: 'asq34',
      text: "A large rising interval on the title phrase of 'Let beauty awake' is a striking example of:",
      options: [
        { id: 'asq34a1', text: 'Strophic form' },
        { id: 'asq34a2', text: 'Dissonance' },
        { id: 'asq34a3', text: 'Word-painting' },
        { id: 'asq34a4', text: 'Off-beat rhythm' },
      ],
      correctAnswerId: 'asq34a3',
      explanation: "The music literally rises on a key phrase, a clear instance of word-painting."
    },
    {
      id: 'asq35',
      text: "The overall narrative of Vaughan Williams's 'Songs of Travel' traces the journey of a:",
      options: [
        { id: 'asq35a1', text: 'A king going to battle' },
        { id: 'asq35a2', text: 'A restless wanderer' },
        { id: 'asq35a3', text: 'A sailor on the high seas' },
        { id: 'asq35a4', text: 'A child playing in a field' },
      ],
      correctAnswerId: 'asq35a2',
      explanation: "The song cycle follows the emotional journey of a restless wanderer, as depicted in Robert Louis Stevenson's poems."
    },
    {
      id: 'asq36',
      text: "What does 'forte' (f) mean?",
      options: [
        { id: 'asq36a1', text: 'Fast' },
        { id: 'asq36a2', text: 'Slow' },
        { id: 'asq36a3', text: 'Quiet' },
        { id: 'asq36a4', text: 'Loud' },
      ],
      correctAnswerId: 'asq36a4',
      explanation: "Forte (f) is a dynamic marking that means 'loud'."
    },
    {
      id: 'asq37',
      text: "A 'chromatic vocal line' is a feature of which song in 'Songs of Travel'?",
      options: [
        { id: 'asq37a1', text: '"The vagabond"' },
        { id: 'asq37a2', text: '"In dreams"' },
        { id: 'asq37a3', text: '"Let beauty awake"' },
        { id: 'asq37a4', text: '"The infinite shining heavens"' },
      ],
      correctAnswerId: 'asq37a2',
      explanation: "The song 'In dreams' uses a chromatic vocal line to enhance its melancholy and unsettled mood."
    },
    {
      id: 'asq38',
      text: "In 'The infinite shining heavens', what musical features evoke the 'vast brilliance of the night sky'?",
      options: [
        { id: 'asq38a1', text: 'Loud, fast, and dissonant chords' },
        { id: 'asq38a2', text: 'A marching rhythm and simple melody' },
        { id: 'asq38a3', text: 'Pianissimo, wide-spaced arpeggiated chords and an expansive melody' },
        { id: 'asq38a4', text: 'A syllabic and spoken vocal line' },
      ],
      correctAnswerId: 'asq38a3',
      explanation: "Vaughan Williams uses very quiet (pianissimo), wide-spaced arpeggios and a broad melody to paint a picture of a vast, starry sky."
    },
    {
      id: 'asq39',
      text: "The term for the speed of the music is:",
      options: [
        { id: 'asq39a1', text: 'Dynamics' },
        // FIX: Corrected typo from `id::` to `id:`
        { id: 'asq39a2', text: 'Tempo' },
        { id: 'asq39a3', text: 'Metre' },
        { id: 'asq39a4', text: 'Pitch' },
      ],
      correctAnswerId: 'asq39a2',
      explanation: "Tempo is the musical term for the speed at which a piece of music is performed."
    },
    {
      id: 'asq40',
      text: "A texture with two or more independent melodic lines sounding simultaneously is:",
      options: [
        { id: 'asq40a1', text: 'Homophonic' },
        { id: 'asq40a2', text: 'Monophonic' },
        { id: 'asq40a3', text: 'Polyphonic' },
        { id: 'asq40a4', text: 'Syllabic' },
      ],
      correctAnswerId: 'asq40a3',
      explanation: "Polyphonic texture is characterized by the interweaving of multiple independent melodies."
    },
    {
      id: 'asq41',
      text: "If a composer wants to create a florid, expressive vocal line on a single important word, they would most likely use:",
      options: [
        { id: 'asq41a1', text: 'Syllabic setting' },
        { id: 'asq41a2', text: 'A melisma' },
        { id: 'asq41a3', text: 'Strophic form' },
        { id: 'asq41a4', text: 'A minor key' },
      ],
      correctAnswerId: 'asq41a2',
      explanation: "A melisma allows a singer to embellish a single syllable with many notes, making it more expressive."
    },
    {
      id: 'asq42',
      text: "The highness or lowness of a sound is referred to as its:",
      options: [
        { id: 'asq42a1', text: 'Pitch' },
        { id: 'asq42a2', text: 'Rhythm' },
        { id: 'asq42a3', text: 'Timbre' },
        { id: 'asq42a4', text: 'Dynamics' },
      ],
      correctAnswerId: 'asq42a1',
      explanation: "Pitch is the term that describes how high or low a musical note sounds."
    },
    {
      id: 'asq43',
      text: "True or False: According to the guide, for the examination, you will be expected to identify the specific composer of an art song extract you hear.",
      options: [
        { id: 'asq43a1', text: 'True' },
        { id: 'asq43a2', text: 'False' },
      ],
      correctAnswerId: 'asq43a2',
      explanation: "The guide explicitly states that candidates will NOT be expected to identify or name any specific composers or performers for Area of Study 4."
    },
    {
      id: 'asq44',
      text: "A 'sequence of single notes that is musically satisfying' is the definition of:",
      options: [
        { id: 'asq44a1', text: 'A chord' },
        { id: 'asq44a2', text: 'A melody' },
        { id: 'asq44a3', text: 'A texture' },
        { id: 'asq44a4', text: 'A rhythm' },
      ],
      correctAnswerId: 'asq44a2',
      explanation: "This is the definition of a melody, or the main tune."
    },
    {
      id: 'asq45',
      text: "Which term describes the specific combination of instruments and voices used in a piece of music?",
      options: [
        { id: 'asq45a1', text: 'Instrumentation' },
        { id: 'asq45a2', text: 'Structure' },
        { id: 'asq45a3', text: 'Tonality' },
        { id: 'asq45a4', text: 'Accompaniment' },
      ],
      correctAnswerId: 'asq45a1',
      explanation: "Instrumentation refers to the choice of instruments and/or voices in a composition."
    },
    {
      id: 'asq46',
      text: "The effect created by combining a variety of notes with different durations is:",
      options: [
        { id: 'asq46a1', text: 'Melody' },
        { id: 'asq46a2', text: 'Harmony' },
        { id: 'asq46a3', text: 'Rhythm' },
        { id: 'asq46a4', text: 'Pitch' },
      ],
      correctAnswerId: 'asq46a3',
      explanation: "Rhythm is the element of music that deals with the timing and duration of notes."
    },
    {
      id: 'asq47',
      text: "The 'Epilogue' of 'Songs of Travel' ends with a pianissimo version of the bass line from which song?",
      options: [
        { id: 'asq47a1', text: '"Let beauty awake"' },
        { id: 'asq47a2', text: '"In dreams"' },
        { id: 'asq47a3', text: '"The vagabond"' },
        { id: 'asq47a4', text: '"The infinite shining heavens"' },
      ],
      correctAnswerId: 'asq47a3',
      explanation: "The cycle comes to a quiet, reflective end by recalling the powerful bass line from the opening song, 'The vagabond'."
    },
    {
      id: 'asq48',
      text: "Which form provides a sense of familiarity and repetition by setting each verse to the same music?",
      options: [
        { id: 'asq48a1', text: 'Through-Composed Form' },
        { id: 'asq48a2', text: 'Binary Form' },
        { id: 'asq48a3', text: 'Strophic Form' },
        { id: 'asq48a4', text: 'Sonata Form' },
      ],
      correctAnswerId: 'asq48a3',
      explanation: "Strophic form is defined by its repetition of the same music for different verses of text."
    },
    {
      id: 'asq49',
      text: "A 'striding bass' in the piano accompaniment of 'The vagabond' is an example of the accompaniment acting as an:",
      options: [
        { id: 'asq49a1', text: 'Equal partner in conveying meaning.' },
        { id: 'asq49a2', text: 'Unrelated background noise.' },
        { id: 'asq49a3', text: 'Simple chordal support only.' },
        { id: 'asq49a4', text: 'Interruption to the vocal line.' },
      ],
      correctAnswerId: 'asq49a1',
      explanation: "The 'striding bass' perfectly reflects the traveller's determined walk, showing how the piano is an equal partner in telling the story."
    },
    {
      id: 'asq50',
      text: "Which two elements are in 'interplay' in an art song?",
      options: [
        { id: 'asq50a1', text: 'Rhythm and Dynamics' },
        { id: 'asq50a2', text: 'Text and Sound' },
        { id: 'asq50a3', text: 'Melody and Harmony' },
        { id: 'asq50a4', text: 'Structure and Form' },
      ],
      correctAnswerId: 'asq50a2',
      explanation: "Art song is all about the interplay between the text (the words of the poem) and the sound (the music used to set them)."
    }
  ]
};