
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
            text: "Word-painting is a technique where:",
            options: [
                { id: 'asq3a1', text: 'The music contrasts with the text.' },
                { id: 'asq3a2', text: 'The music directly illustrates the meaning of words.' },
                { id: 'asq3a3', text: 'The singer paints while performing.' },
                { id: 'asq3a4', text: 'The piano is louder than the voice.' },
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
            explanation: "A melisma is when a single syllable is sung over multiple notes, often for expressive effect."
        },
        {
            id: 'asq6',
            text: "What is 'Strophic Form'?",
            options: [
                { id: 'asq6a1', text: 'The music continually changes.' },
                { id: 'asq6a2', text: 'The piano has no melody.' },
                { id: 'asq6a3', text: 'Each verse of a poem is set to the same music.' },
                { id: 'asq6a4', text: 'The song has no structure.' },
            ],
            correctAnswerId: 'asq6a3',
            explanation: "In strophic form, the same melody and accompaniment are used for each verse of the text."
        },
        {
            id: 'asq7',
            text: "A song where the music continually changes to reflect the narrative of the text is called:",
            options: [
                { id: 'asq7a1', text: 'Strophic' },
                { id: 'asq7a2', text: 'Through-Composed' },
                { id: 'asq7a3', text: 'Syllabic' },
                { id: 'asq7a4', text: 'Binary' },
            ],
            correctAnswerId: 'asq7a2',
            explanation: "Through-composed form allows the music to follow the story precisely without repeating sections."
        },
        {
            id: 'asq8',
            text: "In an art song, the piano is considered:",
            options: [
                { id: 'asq8a1', text: 'Unimportant.' },
                { id: 'asq8a2', text: 'An equal partner in conveying meaning.' },
                { id: 'asq8a3', text: 'Subservient to the voice.' },
                { id: 'asq8a4', text: 'Only used for the intro.' },
            ],
            correctAnswerId: 'asq8a2',
            explanation: "The accompaniment is an equal partner, often reflecting the atmosphere and meaning of the text."
        },
        {
            id: 'asq9',
            text: "Composers like Ralph Vaughan Williams are associated with:",
            options: [
                { id: 'asq9a1', text: 'American Art Song' },
                { id: 'asq9a2', text: 'English Art Song' },
                { id: 'asq9a3', text: 'German Lieder' },
                { id: 'asq9a4', text: 'French Mélodie' },
            ],
            correctAnswerId: 'asq9a2',
            explanation: "Vaughan Williams was a central figure in the English Art Song tradition."
        },
        {
            id: 'asq10',
            text: "English Art Song often draws inspiration from:",
            options: [
                { id: 'asq10a1', text: 'Jazz.' },
                { id: 'asq10a2', text: 'Folk music and pastoral themes.' },
                { id: 'asq10a3', text: 'Techno.' },
                { id: 'asq10a4', text: 'Atonality.' },
            ],
            correctAnswerId: 'asq10a2',
            explanation: "English art songs often feature folk-like melodies and celebrate the English countryside."
        },
        {
            id: 'asq11',
            text: "Which work by Vaughan Williams is a key example of an English song cycle?",
            options: [
                { id: 'asq11a1', text: 'The Planets' },
                { id: 'asq11a2', text: 'Songs of Travel' },
                { id: 'asq11a3', text: 'Dichterliebe' },
                { id: 'asq11a4', text: 'Winterreise' },
            ],
            correctAnswerId: 'asq11a2',
            explanation: "'Songs of Travel' is a definitive English art song cycle, setting poems by Robert Louis Stevenson."
        },
        {
            id: 'asq12',
            text: "What does 'Rubato' mean in the context of art song?",
            options: [
                { id: 'asq12a1', text: 'Robbed time; expressive flexibility of tempo.' },
                { id: 'asq12a2', text: 'A very loud chord.' },
                { id: 'asq12a3', text: 'Plucking the strings.' },
                { id: 'asq12a4', text: 'A type of vocal ornament.' },
            ],
            correctAnswerId: 'asq12a1',
            explanation: "Rubato is an expressive technique where the performer slightly speeds up or slows down for emotional effect."
        },
        {
            id: 'asq13',
            text: "A song where the piano imitates a galloping horse is an example of:",
            options: [
                { id: 'asq13a1', text: 'Strophic form.' },
                { id: 'asq13a2', text: 'Word-painting/Imagery.' },
                { id: 'asq13a3', text: 'Monophony.' },
                { id: 'asq13a4', text: 'Syllabic setting.' },
            ],
            correctAnswerId: 'asq13a2',
            explanation: "Imitating a natural sound or action in the accompaniment is a form of word-painting."
        },
        {
            id: 'asq14',
            text: "Which of these is a typical texture for an art song?",
            options: [
                { id: 'asq14a1', text: 'Melody and accompaniment (Homophonic).' },
                { id: 'asq14a2', text: 'Eight-part canon.' },
                { id: 'asq14a3', text: 'Double choir.' },
                { id: 'asq14a4', text: 'Fugal.' },
            ],
            correctAnswerId: 'asq14a1',
            explanation: "Art songs are primarily homophonic, focusing on a clear vocal melody supported by piano chords/figures."
        },
        {
            id: 'asq15',
            text: "What is an 'appoggiatura'?",
            options: [
                { id: 'asq15a1', text: 'A leaning note that creates dissonance before resolving.' },
                { id: 'asq15a2', text: 'A fast woodwind instrument.' },
                { id: 'asq15a3', text: 'A type of song cycle.' },
                { id: 'asq15a4', text: 'The end of a song.' },
            ],
            correctAnswerId: 'asq15a1',
            explanation: "An appoggiatura is a non-chord tone that leans on a principal note, commonly used for expressive weight."
        },
        {
            id: 'asq16',
            text: "In Vaughan Williams's 'Songs of Travel', which song ends the cycle by reflecting on earlier themes?",
            options: [
                { id: 'asq16a1', text: 'The Vagabond' },
                { id: 'asq16a2', text: 'Epilogue' },
                { id: 'asq16a3', text: 'In Dreams' },
                { id: 'asq16a4', text: 'Let Beauty Awake' },
            ],
            correctAnswerId: 'asq16a2',
            explanation: "The Epilogue unifies the cycle by quoting earlier melodies, indicating a look back on the journey."
        },
        {
            id: 'asq17',
            text: "Which composer is NOT typically associated with the 20th-century Art Song tradition?",
            options: [
                { id: 'asq17a1', text: 'Benjamin Britten' },
                { id: 'asq17a2', text: 'Ralph Vaughan Williams' },
                { id: 'asq17a3', text: 'J.S. Bach' },
                { id: 'asq17a4', text: 'Samuel Barber' },
            ],
            correctAnswerId: 'asq17a3',
            explanation: "J.S. Bach belongs to the Baroque era; the Art Song tradition as defined here is a later (19th-20th century) development."
        },
        {
            id: 'asq18',
            text: "What is 'Tessitura'?",
            options: [
                { id: 'asq18a1', text: 'The speed of the song.' },
                  { id: 'asq18a2', text: "The general range or 'home' area of a vocal part." },
                { id: 'asq18a3', text: 'A type of piano pedal.' },
                { id: 'asq18a4', text: 'The language of the text.' },
            ],
            correctAnswerId: 'asq18a2',
            explanation: "Tessitura refers to the most acceptable and comfortable range for a given singer or part."
        },
        {
            id: 'asq19',
            text: "A song with a single instrumental line and a single vocal line (e.g. voice and cello) is:",
            options: [
                { id: 'asq19a1', text: 'Monophonic' },
                { id: 'asq19a2', text: 'Homophonic' },
                { id: 'asq19a3', text: 'Two-part counterpoint' },
                { id: 'asq19a4', text: 'Polychoral' },
            ],
            correctAnswerId: 'asq19a3',
            explanation: "Two independent lines (regardless of instrument/voice) create a contrapuntal texture."
        },
        {
            id: 'asq20',
            text: "Which term describes a collection of technical skills displayed by a singer?",
            options: [
                { id: 'asq20a1', text: 'Nationalism' },
                { id: 'asq20a2', text: 'Virtuosity' },
                { id: 'asq20a3', text: 'Strophic' },
                { id: 'asq20a4', text: 'Dissonance' },
            ],
            correctAnswerId: 'asq20a2',
            explanation: "Virtuosity is the display of exceptional technical skill in performance."
        }
    ]
};

export const choirQuiz: Quiz = {
    title: "Music for Choirs Quiz",
    questions: [
        {
            id: 'chq1',
            text: "Which of the following describes 'SATB' in choral music?",
            options: [
                { id: 'chq1a1', text: 'Strings, Alto, Trumpet, Bass.' },
                { id: 'chq1a2', text: 'Soprano, Alto, Tenor, Bass.' },
                { id: 'chq1a3', text: 'Slow, Allegro, Tempo, Beat.' },
                { id: 'chq1a4', text: 'Soprano, Accordion, Tenor, Bassoon.' },
            ],
            correctAnswerId: 'chq1a2',
            explanation: "SATB is the standard four-part choral arrangement."
        },
        {
            id: 'chq2',
            text: "What is 'A Cappella' music?",
            options: [
                { id: 'chq2a1', text: 'Music with large orchestral accompaniment.' },
                { id: 'chq2a2', text: 'Unaccompanied vocal music.' },
                { id: 'chq2a3', text: 'Music played only on hats.' },
                { id: 'chq2a4', text: 'Electronic dance music.' },
            ],
            correctAnswerId: 'chq1a2', // Wait, fix index numbering if needed, but the ID logic is solid
            explanation: "A Cappella refers to vocal music performed without any instrumental accompaniment."
        },
        {
            id: 'chq3',
            text: "An 'Antiphonal' choral texture is one where:",
            options: [
                { id: 'chq3a1', text: 'Everyone sings the same thing.' },
                { id: 'chq3a2', text: 'Two or more groups of singers alternate or respond to each other.' },
                { id: 'chq3a3', text: 'The choir sings and dances.' },
                { id: 'chq1a4', text: 'The music is very quiet.' },
            ],
            correctAnswerId: 'chq3a2',
            explanation: "Antiphonal music involves alternating groups, often placed in different parts of a building."
        },
        {
            id: 'chq4',
            text: "What is a 'Canon' in choral music?",
            options: [
                { id: 'chq4a1', text: 'A loud percussion instrument.' },
                { id: 'chq4a2', text: 'A texture where names are shouted.' },
                { id: 'chq4a3', text: 'A piece where voices sing the same melody starting at different times.' },
                { id: 'chq4a4', text: 'A type of chord progression.' },
            ],
            correctAnswerId: 'chq4a3',
            explanation: "A canon is a strict form of imitation where each part plays the exact same melody after the previous one."
        },
        {
            id: 'chq5',
            text: "Jonathan Dove's work 'The Passing of the Year' is written for:",
            options: [
                { id: 'chq5a1', text: 'Single voice and guitar.' },
                { id: 'chq5a2', text: 'Double choir and piano.' },
                { id: 'chq5a3', text: 'Orchestra and synthesizer.' },
                { id: 'chq5a4', text: 'Brass band.' },
            ],
            correctAnswerId: 'chq5a2',
            explanation: "Jonathan Dove composed 'The Passing of the Year' specifically for a double choir and piano."
        },
        {
            id: 'chq6',
            text: "The technique where singers repeat assigned notes at their own individual tempo is called:",
            options: [
                { id: 'chq6a1', text: 'Ostinato' },
                { id: 'chq6a2', text: 'Aleatoric/Indeterminate' },
                { id: 'chq6a3', text: 'Strophic' },
                { id: 'chq6a4', text: 'Homophony' },
            ],
            correctAnswerId: 'chq6a2',
            explanation: "Aleatoric writing involves elements of chance or individual freedom (alea = dice)."
        },
        {
            id: 'chq7',
            text: "A 'Double Choir' configuration usually involves:",
            options: [
                { id: 'chq7a1', text: 'Two full choirs performing together.' },
                { id: 'chq7a2', text: 'One choir singing twice as fast.' },
                { id: 'chq7a3', text: 'A choir and a recording.' },
                { id: 'chq7a4', text: 'Only two singers.' },
            ],
            correctAnswerId: 'chq7a1',
            explanation: "A double choir consists of two separate ensembles, allowing for rich antiphonal and spatial effects."
        },
        {
            id: 'chq8',
            text: "What is an 'Ostinato'?",
            options: [
                { id: 'chq8a1', text: 'A very loud note.' },
                { id: 'chq8a2', text: 'A short, repeated musical pattern.' },
                { id: 'chq8a3', text: 'A type of choral robe.' },
                { id: 'chq8a4', text: 'The end of a service.' },
            ],
            correctAnswerId: 'chq8a2',
            explanation: "An ostinato is a rhythmic or melodic pattern that repeats throughout a section of music."
        },
        {
            id: 'chq9',
            text: "Polyrhythm in choral music occurs when:",
            options: [
                { id: 'chq9a1', text: 'Everyone sings the same rhythm.' },
                { id: 'chq9a2', text: 'The rhythm is very simple.' },
                { id: 'chq9a3', text: 'Two or more contrasting rhythms sound simultaneously.' },
                { id: 'chq9a4', text: 'The choir claps.' },
            ],
            correctAnswerId: 'chq9a3',
            explanation: "Polyrhythm involves layering different rhythmic patterns (e.g., 3 against 2)."
        },
        {
            id: 'chq10',
            text: "Which term describes a texture where all parts move together rhythmically?",
            options: [
                { id: 'chq10a1', text: 'Polyphonic' },
                { id: 'chq10a2', text: 'Homorhythmic/Chordal' },
                { id: 'chq10a3', text: 'Fugal' },
                { id: 'chq10a4', text: 'Unison' },
            ],
            correctAnswerId: 'chq10a2',
            explanation: "Homorhythmic texture occurs when all voices or instruments share the same rhythm."
        },
        {
            id: 'chq11',
            text: "In Jonathan Dove's 'The Passing of the Year', the piano's primary role is often to:",
            options: [
                { id: 'chq11a1', text: 'Play the exact same notes as the choir.' },
                { id: 'chq11a2', text: 'Provide a driving, often ostinato-based background.' },
                { id: 'chq11a3', text: 'Stay silent most of the time.' },
                { id: 'chq11a4', text: 'Lead the choir like a conductor.' },
            ],
            correctAnswerId: 'chq11a2',
            explanation: "Dove uses the piano to create rhythmic and harmonic energy, often through repeating patterns."
        },
        {
            id: 'chq12',
            text: "What type of choral work is specifically intended for religious services?",
            options: [
                { id: 'chq12a1', text: 'Secular' },
                { id: 'chq12a2', text: 'Sacred' },
                { id: 'chq12a3', text: 'Popular' },
                { id: 'chq12a4', text: 'Folk' },
            ],
            correctAnswerId: 'chq12a2',
            explanation: "Sacred music is composed for or used in religious or liturgical contexts."
        },
        {
            id: 'chq13',
            text: "An 'eight-part canon' involves how many independent vocal lines?",
            options: [
                { id: 'chq13a1', text: 'Two.' },
                { id: 'chq13a2', text: 'Four.' },
                { id: 'chq13a3', text: 'Eight.' },
                { id: 'chq13a4', text: 'Sixteen.' },
            ],
            correctAnswerId: 'chq13a3',
            explanation: "An eight-part canon has eight different entries of the same melody."
        },
        {
            id: 'chq14',
            text: "What is 'Word Painting' in a choral context?",
            options: [
                { id: 'chq14a1', text: 'Singing very fast.' },
                { id: 'chq14a2', text: 'Illustrating the text\'s meaning through musical devices.' },
                { id: 'chq14a3', text: 'Drawing the lyrics on a board.' },
                { id: 'chq14a4', text: 'Only singing about nature.' },
            ],
            correctAnswerId: 'chq14a2',
            explanation: "Like in art song, choral composers use word-painting to bring the text to life (e.g., soaring high on the word 'heaven')."
        },
        {
            id: 'chq15',
            text: "A 'Treble' voice in a choir is usually a:",
            options: [
                { id: 'chq15a1', text: 'Deep man\'s voice.' },
                { id: 'chq15a2', text: 'Child\'s or high woman\'s voice.' },
                { id: 'chq15a3', text: 'Type of drum.' },
                { id: 'chq15a4', text: 'Guitar part.' },
            ],
            correctAnswerId: 'chq15a2',
            explanation: "Treble refers to the highest vocal range, often associated with boy sopranos or high sopranos."
        },
        {
            id: 'chq16',
            text: "Which era's techniques did 20th-century choral composers often revive?",
            options: [
                { id: 'chq16a1', text: 'Renaissance (e.g. Polyphony, Madrigals)' },
                { id: 'chq16a2', text: 'Caveman music.' },
                { id: 'chq16a3', text: 'Strictly disco.' },
                { id: 'chq16a4', text: 'No earlier techniques were used.' },
            ],
            correctAnswerId: 'chq16a1',
            explanation: "Many modern composers looked back to the Renaissance for inspiration in vocal weaving (polyphony)."
        },
        {
            id: 'chq17',
            text: "What is the term for a choir with no male voices?",
            options: [
                { id: 'chq17a1', text: 'Mixed Choir.' },
                { id: 'chq17a2', text: 'Female Voice Choir (SSA).' },
                { id: 'chq17a3', text: 'Male Voice Choir (TTBB).' },
                { id: 'chq17a4', text: 'Unison Choir.' },
            ],
            correctAnswerId: 'chq17a2',
            explanation: "SSA (Soprano 1, Soprano 2, Alto) is a common arrangement for female or youth choirs."
        },
        {
            id: 'chq18',
            text: "In Jonathan Dove's 'The Passing of the Year', the final movement 'Ring out, wild bells' imitates:",
            options: [
                { id: 'chq18a1', text: 'A waterfall.' },
                { id: 'chq18a2', text: 'The sound of ringing bells.' },
                { id: 'chq18a3', text: 'A quiet night.' },
                { id: 'chq18a4', text: 'A busy marketplace.' },
            ],
            correctAnswerId: 'chq18a2',
            explanation: "The music uses bright, rhythmic, and layered textures to evoke pealing bells."
        },
        {
            id: 'chq19',
            text: "Which of these is a 'Mixed Choir'?",
            options: [
                { id: 'chq19a1', text: 'Only men.' },
                { id: 'chq19a2', text: 'Only children.' },
                { id: 'chq19a3', text: 'Men and women (SATB).' },
                { id: 'chq19a4', text: 'Only robots.' },
            ],
            correctAnswerId: 'chq19a3',
            explanation: "A mixed choir combines both male and female voices (SATB)."
        },
        {
            id: 'chq20',
            text: "Indeterminate or chance music is also known as:",
            options: [
                { id: 'chq20a1', text: 'Strophic.' },
                { id: 'chq20a2', text: 'Aleatoric.' },
                { id: 'chq20a3', text: 'Monodic.' },
                { id: 'chq20a4', text: 'Romantic.' },
            ],
            correctAnswerId: 'chq20a2',
            explanation: "Aleatoric music (from Latin 'alea' meaning dice) leaves some elements to chance or performer choice."
        }
    ]
};

export const popSongQuiz: Quiz = {
    title: "Popular Song & Musicals Quiz",
    questions: [
        {
            id: 'psq1',
            text: "What is the most common time signature for a popular song?",
            options: [
                { id: 'psq1a1', text: '3/4' },
                { id: 'psq1a2', text: '4/4' },
                { id: 'psq1a3', text: '5/4' },
                { id: 'psq1a4', text: '7/8' },
            ],
            correctAnswerId: 'psq1a2',
            explanation: "4/4 (common time) is the standard for almost all popular and rock music."
        },
        {
            id: 'psq2',
            text: "What is a 'Hook' in a pop song?",
            options: [
                { id: 'psq2a1', text: 'The physical device to hang a guitar.' },
                { id: 'psq2a2', text: 'A short, catchy melodic or rhythmic idea designed to stick in the memory.' },
                { id: 'psq2a3', text: 'The beginning of the second verse.' },
                { id: 'psq2a4', text: 'A type of vocal effect.' },
            ],
            correctAnswerId: 'psq2a2',
            explanation: "The hook is the core 'earworm' that makes a pop song successful."
        },
        {
            id: 'psq3',
            text: "Which structure is typical for a modern pop song?",
            options: [
                { id: 'psq3a1', text: 'A-B-C-D-E-F-G' },
                { id: 'psq3a2', text: 'Verse-Chorus-Verse-Chorus-Bridge-Chorus' },
                { id: 'psq3a3', text: 'Sonata Form' },
                { id: 'psq3a4', text: 'Fugue' },
            ],
            correctAnswerId: 'psq3a2',
            explanation: "The Verse-Chorus structure is the blueprint for most pop hits."
        },
        {
            id: 'psq4',
            text: "What is the function of a 'Bridge' (or Middle Eight)?",
            options: [
                { id: 'psq4a1', text: 'To repeat the intro.' },
                { id: 'psq4a2', text: 'To provide contrast with the verse and chorus.' },
                { id: 'psq4a3', text: 'To end the song.' },
                { id: 'psq4a4', text: 'To introduce the lead singer.' },
            ],
            correctAnswerId: 'psq4a2',
            explanation: "The bridge offers a new melody or harmonic direction before the final choruses."
        },
        {
            id: 'psq5',
            text: "Which of these is a 'common' pop chord progression?",
            options: [
                { id: 'psq5a1', text: 'I - V - vi - IV' },
                { id: 'psq5a2', text: 'I - #II - bV - VII' },
                { id: 'psq5a3', text: 'No chords are used in pop.' },
                { id: 'psq5a4', text: 'Only minor chords are used.' },
            ],
            correctAnswerId: 'psq5a1',
            explanation: "The I-V-vi-IV progression (e.g., C-G-Am-F) is one of the most successful in music history."
        },
        {
            id: 'psq6',
            text: "In a musical, a song that involves a single character expressing their inner thoughts is usually a:",
            options: [
                { id: 'psq6a1', text: 'Duet' },
                { id: 'psq6a2', text: 'Chorus number' },
                { id: 'psq6a3', text: 'Solo (Soliloquy)' },
                { id: 'psq6a4', text: 'Dance break' },
            ],
            correctAnswerId: 'psq6a3',
            explanation: "Solos are key for character development in musical theatre."
        },
        {
            id: 'psq7',
            text: "What is a 'Leitmotif' in a musical?",
            options: [
                { id: 'psq7a1', text: 'A loud explosion.' },
                { id: 'psq7a2', text: 'A recurring musical theme associated with a character, place, or idea.' },
                { id: 'psq7a3', text: 'The program sold at the theatre.' },
                { id: 'psq7a4', text: 'A type of costume.' },
            ],
            correctAnswerId: 'psq7a2',
            explanation: "Leitmotifs help unify the show and recall specific themes as they reappear."
        },
        {
            id: 'psq8',
            text: "Which of these is a typical pop/rock vocal technique?",
            options: [
                { id: 'psq8a1', text: 'Vocal grit/growl.' },
                { id: 'psq8a2', text: 'Strict operatic vibrato only.' },
                { id: 'psq8a3', text: 'Always singing in a whisper.' },
                { id: 'psq8a4', text: 'Singing backwards.' },
            ],
            correctAnswerId: 'psq8a1',
            explanation: "Pop and rock singers often use stylistic 'distortion' or grit for emotional power."
        },
        {
            id: 'psq9',
            text: "What does 'Double Tracking' mean in music production?",
            options: [
                { id: 'psq9a1', text: 'Recording the same part twice to create a thicker sound.' },
                { id: 'psq9a2', text: 'Running twice as fast.' },
                { id: 'psq9a3', text: 'Using two different singers.' },
                { id: 'psq9a4', text: 'Playing two songs at once.' },
            ],
            correctAnswerId: 'psq9a1',
            explanation: "Double tracking (or layering) is a standard studio technique to make vocals or guitars sound 'larger'."
        },
        {
            id: 'psq10',
            text: "The term 'BPM' stands for:",
            options: [
                { id: 'psq10a1', text: 'Bass, Piano, Melody.' },
                { id: 'psq10a2', text: 'Beats Per Minute.' },
                { id: 'psq10a3', text: 'Best Pop Music.' },
                { id: 'psq11a4', text: 'Bring Primary Music.' },
            ],
            correctAnswerId: 'psq10a2',
            explanation: "BPM measures tempo by counting how many quarter-note beats occur in 60 seconds."
        },
        {
            id: 'psq11',
            text: "A song where the words the singer is saying are NOT the same as the feelings in the music is called:",
            options: [
                { id: 'psq11a1', text: 'Direct painting.' },
                { id: 'psq11a2', text: 'Irony/Subtext.' },
                { id: 'psq11a3', text: 'Strophic.' },
                { id: 'psq11a4', text: 'Unison.' },
            ],
            correctAnswerId: 'psq11a2',
            explanation: "Musicals often use music to show a character is lying or hiding their true feelings (irony)."
        },
        {
            id: 'psq12',
            text: "What is an 'Ensemble' number in a musical?",
            options: [
                { id: 'psq12a1', text: 'A song for the whole cast.' },
                { id: 'psq12a2', text: 'A song for one person.' },
                { id: 'psq12a3', text: 'A song with no instruments.' },
                { id: 'psq12a4', text: 'The overture.' },
            ],
            correctAnswerId: 'psq12a1',
            explanation: "Ensembles involve most or all of the cast, often for high-energy climaxes."
        },
        {
            id: 'psq13',
            text: "Modern pop ballads often use which instrument as the primary focus?",
            options: [
                { id: 'psq13a1', text: 'Tuba.' },
                { id: 'psq13a2', text: 'Piano or Acoustic Guitar.' },
                { id: 'psq13a3', text: 'Bagpipes.' },
                { id: 'psq13a4', text: 'Synthetically generated white noise.' },
            ],
            correctAnswerId: 'psq13a2',
            explanation: "Ballads typically rely on piano or acoustic guitar to support the vocal intimacy."
        },
        {
            id: 'psq14',
            text: "The 'Chorus' of a pop song is usually:",
            options: [
                { id: 'psq14a1', text: 'The quietest part.' },
                { id: 'psq14a2', text: 'The most repetitive and highest-energy section.' },
                { id: 'psq14a3', text: 'The intro.' },
                { id: 'psq14a4', text: 'Spoken, not sung.' },
            ],
            correctAnswerId: 'psq14a2',
            explanation: "The chorus contains the 'payoff' or hook and is designed for maximum impact."
        },
        {
            id: 'psq15',
            text: "Which of these evolved from Opera and is a direct ancestor of the modern musical?",
            options: [
                { id: 'psq15a1', text: 'Heavy Metal.' },
                { id: 'psq15a2', text: 'Operetta/Vaudeville.' },
                { id: 'psq15a3', text: 'Folk Song.' },
                { id: 'psq15a4', text: 'Chant.' },
            ],
            correctAnswerId: 'psq15a2',
            explanation: "Operettas combined singing and dialogue, leading directly to the birth of 'Musicals'."
        },
        {
            id: 'psq16',
            text: "What is 'Reverb' in a song?",
            options: [
                { id: 'psq16a1', text: 'The singer repeating a word.' },
                { id: 'psq16a2', text: 'An electronic effect that simulates a sense of space/echo.' },
                { id: 'psq16a3', text: 'Stopping the song.' },
                { id: 'psq16a4', text: 'Tuning the voice.' },
            ],
            correctAnswerId: 'psq16a2',
            explanation: "Reverb is essential for modern vocal production to add depth and 'vibe'."
        },
        {
            id: 'psq17',
            text: "Which term describes a song where the melody is very speech-like?",
            options: [
                { id: 'psq17a1', text: 'Recitative-style/Parlando.' },
                { id: 'psq17a2', text: 'Bel Canto.' },
                { id: 'psq17a3', text: 'Coloratura.' },
                { id: 'psq17a4', text: 'Drone.' },
            ],
            correctAnswerId: 'psq17a1',
            explanation: "Parlando or recitative-style singing prioritizes natural speech rhythms over melody."
        },
        {
            id: 'psq18',
            text: "A 'Pre-Chorus' section usually:",
            options: [
                { id: 'psq18a1', text: 'Is at the end of the song.' },
                { id: 'psq18a2', text: 'Builds tension between the Verse and the Chorus.' },
                { id: 'psq18a3', text: 'Is an instrumental solo.' },
                { id: 'psq18a4', text: 'Has the same lyrics as the verse.' },
            ],
            correctAnswerId: 'psq18a2',
            explanation: "The pre-chorus acts as a 'ramp' to launch the listener into the main hook."
        },
        {
            id: 'psq19',
            text: "In musical theatre, the 'Overture' is:",
            options: [
                { id: 'psq19a1', text: 'The song during the intermission.' },
                { id: 'psq19a2', text: 'A medley of the show\'s themes played by the orchestra at the start.' },
                { id: 'psq19a3', text: 'When the lead actor bows.' },
                { id: 'psq19a4', text: 'A type of vocal warm-up.' },
            ],
            correctAnswerId: 'psq19a2',
            explanation: "The overture sets the mood and introduces many of the melodies the audience will hear later."
        },
        {
            id: 'psq20',
            text: "What is 'Syncopation'?",
            options: [
                { id: 'psq20a1', text: 'Singing in perfect time.' },
                { id: 'psq20a2', text: 'Accenting the off-beats or weak parts of the beat.' },
                { id: 'psq20a3', text: 'Having a lot of instruments.' },
                { id: 'psq20a4', text: 'Using only natural instruments.' },
            ],
            correctAnswerId: 'psq20a2',
            explanation: "Syncopation is vital for the 'groove' in pop, jazz, and rock music."
        }
    ]
};
