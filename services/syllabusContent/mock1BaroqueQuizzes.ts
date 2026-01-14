import { QuizData } from './mock1Quizzes';

export const mock1BaroqueQuizzes: Record<string, QuizData> = {
    'baroque-dido-lament': {
        id: 'baroque-dido-lament',
        title: "Purcell: Dido's Lament",
        topicCode: 'BAROQUE_PURCELL',
        description: "Analysis of Purcell's masterpiece from Dido and Aeneas, focusing on Recitative and Ground Bass.",
        abcNotation: `X: 1
T: Thy hand, Belinda (Recitative Opening)
C: Henry Purcell
M: 4/4
L: 1/8
K: Cmin
G2 c2 B2 c2 | d4 G4 | c2 B2 c2 d2 | e4 ||
% Ground Bass Pattern
X: 2
T: Dido's Lament - Ground Bass
C: Henry Purcell
M: 3/2
L: 1/2
K: Gmin
G, | ^F, =F, E, | _E, D,2 | D,3 | G,,3 :|`,
        revisionNotes: `
            <h3>Analysis: Dido's Lament</h3>
            <p><strong>Recitative:</strong> "Thy hand, Belinda" is a <em>recitativo secco</em> (dry), using speech-like rhythm and sparse accompaniment to advance the story.</p>
            <p><strong>Aria:</strong> "When I am laid in earth" is a <strong>Ground Bass Aria</strong>. The bass line repeats a 5-measure pattern involving a <strong>chromatic descent</strong> (Passus duriusculus).</p>
            <ul>
                <li><strong>Key:</strong> G Minor (associated with tragedy).</li>
                <li><strong>Word Painting:</strong> "Laid" descends; "Remember me" uses repeated high Gs like a cry.</li>
            </ul>
        `,
        questions: [
            {
                id: 1,
                question: "What is the title of the opera from which 'Dido's Lament' is taken?",
                options: ["Orfeo", "Messiah", "Dido and Aeneas", "The Fairy Queen"],
                correctAnswer: 2,
                rationale: "The lament is the climax of Henry Purcell's only true opera, Dido and Aeneas."
            },
            {
                id: 2,
                question: "Who wrote the libretto for Dido and Aeneas?",
                options: ["Nahum Tate", "John Milton", "William Shakespeare", "Alexander Pope"],
                correctAnswer: 0,
                rationale: "Nahum Tate wrote the libretto, basing it on Virgil's Aeneid."
            },
            {
                id: 3,
                question: "What specific type of recitative is 'Thy hand, Belinda'?",
                options: ["Recitativo accompagnato", "Recitativo secco", "Aria form", "Chorus section"],
                correctAnswer: 1,
                rationale: "It is a 'dry' recitative, accompanied only by the basso continuo."
            },
            {
                id: 4,
                question: "Describe the rhythm of a recitative.",
                options: ["Strict and dance-like", "Motoric and constant", "Free and speech-like", "Syncopated throughout"],
                correctAnswer: 2,
                rationale: "Recitatives follow the natural rhythms of speech to move the plot forward."
            },
            {
                id: 5,
                question: "What instrument combination typically plays the continuo in this work?",
                options: ["Trumpet and Drum", "Cello and Harpsichord", "Violin and Flute", "Organ and Oboe"],
                correctAnswer: 1,
                rationale: "The standard Baroque continuo here consists of a sustaining bass instrument (Cello) and a chordal instrument (Harpsichord)."
            },
            {
                id: 6,
                question: "Which term describes musical depiction of specific words, like a descending line for 'darkness'?",
                options: ["Sequencing", "Basso Ostinato", "Word Painting", "Imitation"],
                correctAnswer: 2,
                rationale: "Word painting (or text depiction) is the practice of mimicking the meaning of the words through musical gestures."
            },
            {
                id: 7,
                question: "What is a Ground Bass?",
                options: ["A melody played by the bassoon", "A short repeating bass pattern over which melody varies", "The lowest note in a chord", "A type of low-pitched drum"],
                correctAnswer: 1,
                rationale: "Also called a Basso Ostinato, it is a persistent repeating bass motif."
            },
            {
                id: 8,
                question: "How many measures long is the ground bass pattern in Dido's Lament?",
                options: ["4 measures", "5 measures", "8 measures", "12 measures"],
                correctAnswer: 1,
                rationale: "Purcell uses an unusual 5-measure structure for this specific ground bass."
            },
            {
                id: 9,
                question: "Describe the melodic shape of the ground bass in 'When I am laid in earth'.",
                options: ["Rapidly ascending", "Jagged and disjunct", "Descending chromatic scale", "Static on one note"],
                correctAnswer: 2,
                rationale: "It features a slow, chromatic descent from the tonic to the dominant."
            },
            {
                id: 10,
                question: "What does the descending chromatic scale signify in this context?",
                options: ["Victory", "Grief and Death", "A sunrise", "Birdsong"],
                correctAnswer: 1,
                rationale: "Known as the 'Passus duriusculus', it was a standard Baroque trope for mourning."
            },
            {
                id: 11,
                question: "What is the home key of the Aria 'When I am laid in earth'?",
                options: ["C Major", "G Minor", "D Major", "A Minor"],
                correctAnswer: 1,
                rationale: "G Minor was often chosen for its dark, tragic qualities."
            },
            {
                id: 12,
                question: "Which Latin term refers to the 'painful step' of the chromatic descent?",
                options: ["Cantus Firmus", "Passus duriusculus", "Stretto", "Da Capo"],
                correctAnswer: 1,
                rationale: "Passus duriusculus refers to the harsh chromatic intervals used for lamentation."
            },
            {
                id: 13,
                question: "How does the phrasing of the vocal line relate to the ground bass?",
                options: ["It starts and ends exactly with the bass", "It overlaps the bass pattern start points", "The voice only sings when the bass is silent", "The voice follows the bass in unison"],
                correctAnswer: 1,
                rationale: "Overlapping phrases prevent the repeating bass from sounding mechanical."
            },
            {
                id: 14,
                question: "What word is emphasized by a repeated high note, sounding like a cry?",
                options: ["Belinda", "Remember", "Earth", "Trouble"],
                correctAnswer: 1,
                rationale: "The repeated high G on 'Remember me' creates a desperate, bell-like effect."
            },
            {
                id: 15,
                question: "What texture is dominant in the Aria?",
                options: ["Monophonic", "Polyphonic", "Homophonic", "Heterophonic"],
                correctAnswer: 2,
                rationale: "It is a clear melody supported by a repetitive bass and string accompaniment."
            },
            {
                id: 16,
                question: "Describe the dynamic level typically associated with this lament.",
                options: ["Very loud (fortissimo)", "Soft and somber (piano)", "Rapidly fluctuating", "Strictly terraced without nuance"],
                correctAnswer: 1,
                rationale: "The mood of the lament calls for soft, controlled dynamics."
            },
            {
                id: 17,
                question: "What string instruments accompany the voice in the Aria?",
                options: ["Violins and Violas", "Guitars", "Harps only", "Double Bass only"],
                correctAnswer: 0,
                rationale: "A small string ensemble provides the harmonic weaving over the continuo."
            },
            {
                id: 18,
                question: "Does the ground bass modulate (change key) during the Aria?",
                options: ["Yes, to the relative major", "No, it remains strictly in G Minor", "Yes, to the dominant", "Yes, every two bars"],
                correctAnswer: 1,
                rationale: "The ground bass provides a fixed, unmoving anchor in the home key."
            },
            {
                id: 19,
                question: "What is the time signature of the Aria?",
                options: ["4/4", "6/8", "3/2", "2/4"],
                correctAnswer: 2,
                rationale: "Purcell uses 3/2 time for the aria, providing a slow, triple-meter pulse."
            },
            {
                id: 20,
                question: "Why is this piece considered a 'Lament'?",
                options: ["It is a happy celebration", "It is an expression of deep sorrow or mourning", "It is a story about a dragon", "It is a fast dance movement"],
                correctAnswer: 1,
                rationale: "A lament is a musical expression of grief, in this case, Dido's preparing for her death."
            }
        ]
    },
    'baroque-vivaldi-spring': {
        id: 'baroque-vivaldi-spring',
        title: "Vivaldi: The Four Seasons (Spring)",
        topicCode: 'BAROQUE_VIVALDI',
        description: "Ritornello form and Program Music in Vivaldi's 'La Primavera'.",
        abcNotation: `X: 3
T: Spring - Ritornello Theme
C: Antonio Vivaldi
M: 4/4
L: 1/8
K: E
|: "E"e2 g#g# g#f# eB | "B"g#g# g#f# eB | "E"e^d ef "B"eB GB | "E"e2 g#g# g#f# eB :|`,
        revisionNotes: `
            <h3>Vivaldi's Spring (Movement 1)</h3>
            <p><strong>Form:</strong> Ritornello Form (Alternating Tutti and Solo sections).</p>
            <p><strong>Program Music:</strong> Instrumental music that tells a story. Vivaldi uses specific devices to mimic birds, streams, and storms.</p>
            <ul>
                <li><strong>Ritornello:</strong> The joyful return of the main theme in E Major.</li>
                <li><strong>Episode 1:</strong> Birdsong (High trills).</li>
                <li><strong>Episode 2:</strong> Murmuring streams (Flowing semiquavers).</li>
                <li><strong>Episode 3:</strong> Thunderstorm (Tremolos and scales).</li>
            </ul>
        `,
        questions: [
            {
                id: 1,
                question: "What instrument is the soloist in Vivaldi’s The Four Seasons?",
                options: ["Harpsichord", "Flute", "Violin", "Trumpet"],
                correctAnswer: 2,
                rationale: "Vivaldi was a violin virtuoso and wrote these concertos for the instrument."
            },
            {
                id: 2,
                question: "Define Program Music.",
                options: ["Music written by a computer", "Instrumental music that depicts a story or scene", "Music performed for a radio program", "Music that has no meaning"],
                correctAnswer: 1,
                rationale: "Program music uses instrumental sounds to represent non-musical ideas (like a season)."
            },
            {
                id: 3,
                question: "What literary form did Vivaldi attach to the score to explain the music?",
                options: ["Short Story", "Epic Poem", "Sonnet", "Haiku"],
                correctAnswer: 2,
                rationale: "Vivaldi published four sonnets, one for each concerto, to guide the listener."
            },
            {
                id: 4,
                question: "Identify the key of the first movement of 'Spring'.",
                options: ["C Major", "E Major", "G Major", "A Minor"],
                correctAnswer: 1,
                rationale: "E Major is often characterized as a bright, 'sharp' key suited for spring."
            },
            {
                id: 5,
                question: "What form is used in the first movement?",
                options: ["Sonata Form", "Fugue", "Ritornello Form", "Theme and Variations"],
                correctAnswer: 2,
                rationale: "Ritornello form alternates the full orchestra theme with solo episodes."
            },
            {
                id: 6,
                question: "Describe the 'Ritornello' theme's dynamic structure in the opening.",
                options: ["Constant crescendo", "Terraced dynamics with echo effects", "Unified soft volume", "Extremely loud throughout"],
                correctAnswer: 1,
                rationale: "The opening phrase is played forte, then repeated piano to create an echo."
            },
            {
                id: 7,
                question: "Which musical ornament is used to mimic birdsong in Episode 1?",
                options: ["Mordent", "Turn", "Trill", "Glissando"],
                correctAnswer: 2,
                rationale: "High-pitched trills mimic the chirping of birds."
            },
            {
                id: 8,
                question: "How does Vivaldi represent 'flowing streams' rhythmically?",
                options: ["Dotted rhythms", "Long sustained notes", "Flowing semiquavers (16th notes)", "Silence"],
                correctAnswer: 2,
                rationale: "Steady semiquavers create a murmuring, liquid effect."
            },
            {
                id: 9,
                question: "What technique represents 'thunder' in the low strings?",
                options: ["Pizzicato", "Tremolo", "Harmonics", "Col Legno"],
                correctAnswer: 1,
                rationale: "Rapidly repeated notes (tremolo) create a rumbling thunder effect."
            },
            {
                id: 10,
                question: "What represents 'lightning' in the solo violin part?",
                options: ["Slow chords", "Descending chromatic scales", "Fast ascending scales and arpeggios", "Long trills"],
                correctAnswer: 2,
                rationale: "Rapid, jagged scales depict the sudden flash of lightning."
            },
            {
                id: 11,
                question: "Does the key change during the 'Thunderstorm' episode?",
                options: ["No, it stays in E Major", "Yes, it shifts to E Minor", "Yes, it moves to G Major", "It modulates to B Major"],
                correctAnswer: 1,
                rationale: "Vivaldi switches to the minor mode to depict the darkness of the storm."
            },
            {
                id: 12,
                question: "What is the Ospedale della Pietà?",
                options: ["An opera house in London", "The name of Vivaldi's violin", "The Venetian orphanage where Vivaldi taught", "A famous music school in Rome"],
                correctAnswer: 2,
                rationale: "Vivaldi was the music master at this girls' orphanage for many years."
            },
            {
                id: 13,
                question: "Define 'Tutti' or 'Ripieno'.",
                options: ["The solo group", "The full orchestra", "A specific type of drum", "A slow movement"],
                correctAnswer: 1,
                rationale: "Tutti and Ripieno both refer to the full ensemble playing together."
            },
            {
                id: 14,
                question: "What constitutes the 'Concertino' in a standard Baroque solo concerto?",
                options: ["The full orchestra", "The continuo only", "The soloist(s)", "The wind section"],
                correctAnswer: 2,
                rationale: "The Concertino group represents the small group of soloists (or single soloist)."
            },
            {
                id: 15,
                question: "How many movements are in a typical Vivaldi concerto?",
                options: ["One", "Two", "Three (Fast-Slow-Fast)", "Four"],
                correctAnswer: 2,
                rationale: "Vivaldi standardized the three-movement structure for concertos."
            },
            {
                id: 16,
                question: "What are the tempos of the three movements in Spring?",
                options: ["Slow-Fast-Slow", "Fast-Slow-Fast", "Fast-Fast-Fast", "Slow-Slow-Fast"],
                correctAnswer: 1,
                rationale: "Allegro, Largo, Allegro is the structural tempo plan for Spring."
            },
            {
                id: 17,
                question: "In ABC notation, how do you denote a sharp key signature for E Major?",
                options: ["K:G", "K:D", "K:E", "K:F#"],
                correctAnswer: 2,
                rationale: "K:E in ABC notation automatically applies the four sharps (F#, C#, G#, D#)."
            },
            {
                id: 18,
                question: "What is a tremolo?",
                options: ["A very slow bowing", "A rapid repetition of a single note", "A sliding pitch", "A type of guitar"],
                correctAnswer: 1,
                rationale: "Tremolo involves repeating a note very quickly to create agitation or tension."
            },
            {
                id: 19,
                question: "Did Vivaldi invent the concerto form?",
                options: ["Yes, entirely", "No, but he standardized the 3-movement form", "No, he only wrote symphonies", "Yes, he wrote the first one in 1900"],
                correctAnswer: 1,
                rationale: "While the form existed before him, Vivaldi's hundreds of concertos established the standard model."
            },
            {
                id: 20,
                question: "Why is Vivaldi called the 'Red Priest'?",
                options: ["He always wore a red robe", "He was a priest and had red hair", "He only wrote music in the key of 'red'", "He was a revolutionary"],
                correctAnswer: 1,
                rationale: "He was an ordained priest and notoriously had bright red hair."
            }
        ]
    },
    'baroque-brandenburg': {
        id: 'baroque-brandenburg',
        title: "Bach: Brandenburg Concerto No. 2",
        topicCode: 'BAROQUE_BACH_BRANDENBURG',
        description: "Focus on the Concerto Grosso form and the virtuosic clarino trumpet part.",
        abcNotation: `X: 4
T: Brandenburg No. 2 - Mvt 1 (Trumpet Theme)
C: J.S. Bach
M: 2/2
L: 1/16
K: F
c2 | f2c2 f2c2 f2c2 a2f2 | c'4- c'2b2 a2g2 f2e2 | f2c2 f2c2 f2c2 a2f2 | g4 ||`,
        revisionNotes: `
            <h3>Bach: Brandenburg Concerto No. 2</h3>
            <p><strong>Genre:</strong> Concerto Grosso (Small group vs. Large group).</p>
            <p><strong>Concertino (Soloists):</strong> Trumpet (Natural/Baroque), Recorder, Oboe, Violin.</p>
            <p><strong>Clarino Register:</strong> The high register of the natural trumpet where melodic notes are possible.</p>
            <p><strong>Ripieno (Full Orchestra):</strong> Strings and Basso Continuo.</p>
        `,
        questions: [
            {
                id: 1,
                question: "What is the catalog (BWV) number of Brandenburg Concerto No. 2?",
                options: ["BWV 565", "BWV 1047", "BWV 244", "BWV 1068"],
                correctAnswer: 1,
                rationale: "BWV 1047 is the specific identification for Bach's second Brandenburg concerto."
            },
            {
                id: 2,
                question: "List the four instruments in the Concertino group for this work.",
                options: ["Fluet, Clarinet, Bassoon, Horn", "Trumpet, Recorder, Oboe, Violin", "Violin, Viola, Cello, Bass", "Trumpet, Trombone, Tuba, Horn"],
                correctAnswer: 1,
                rationale: "Bach uses a unique and brilliant combination of Trumpet, Recorder, Oboe, and Violin."
            },
            {
                id: 3,
                question: "What type of trumpet was used in Bach's time?",
                options: ["Slide Trumpet", "Valved Trumpet", "Natural (Baroque) Trumpet", "Pocket Trumpet"],
                correctAnswer: 2,
                rationale: "The natural trumpet has no valves and relies on the harmonic series and lip tension."
            },
            {
                id: 4,
                question: "Define 'Clarino' register.",
                options: ["The lowest notes on a clarinet", "The extreme high register of the natural trumpet", "A type of rhythmic device", "A style of singing"],
                correctAnswer: 1,
                rationale: "Clarino playing refers to the high register where the harmonic series is dense enough to play scales."
            },
            {
                id: 5,
                question: "Why is the balance between the Recorder and Trumpet difficult to manage?",
                options: ["They play in different keys", "The trumpet is much louder than the soft recorder", "The recorder is a modern instrument", "They never play at the same time"],
                correctAnswer: 1,
                rationale: "The Trumpet's power can easily drown out the delicate Recorder, requiring careful orchestration."
            },
            {
                id: 6,
                question: "What is the key of the first movement?",
                options: ["F Major", "C Major", "G Major", "D Minor"],
                correctAnswer: 0,
                rationale: "The concerto is in F Major, providing a bright and festive tonality."
            },
            {
                id: 7,
                question: "Describe the texture of the first movement.",
                options: ["Simple Monophony", "Melody-dominated Homophony", "Complex Polyphony (Counterpoint)", "Homorhythmic Chords"],
                correctAnswer: 2,
                rationale: "Bach weaves the soloists together in dense, independent counterpoint."
            },
            {
                id: 8,
                question: "Which form does the first movement follow?",
                options: ["Sonata Form", "Ritornello Form", "Minuet and Trio", "Rondo"],
                correctAnswer: 1,
                rationale: "Like most Baroque concertos, it uses the Ritornello structure."
            },
            {
                id: 9,
                question: "To whom were these concertos dedicated?",
                options: ["King George of England", "The Pope", "The Margrave of Brandenburg", "Louis XIV of France"],
                correctAnswer: 2,
                rationale: "Presented to Christian Ludwig, Margrave of Brandenburg, in 1721."
            },
            {
                id: 10,
                question: "In the second movement (Andante), which concertino instrument is silent?",
                options: ["Violin", "Oboe", "Trumpet", "Recorder"],
                correctAnswer: 2,
                rationale: "The Trumpet is silent in the second movement because the movement is in D minor, which the natural trumpet in F cannot play."
            },
            {
                id: 11,
                question: "What form is the third movement (Allegro Assai)?",
                options: ["Aria", "Fugue", "Dance Suite", "Variations"],
                correctAnswer: 1,
                rationale: "The final movement is a brilliant fugue showing Bach's contrapuntal mastery."
            },
            {
                id: 12,
                question: "Which instrument introduces the fugue subject in the third movement?",
                options: ["Violin", "Oboe", "Recorder", "Trumpet"],
                correctAnswer: 3,
                rationale: "Unusually, the Trumpet starts the fugue, showcasing extreme virtuosity."
            },
            {
                id: 13,
                question: "What is a Violone?",
                options: ["A large baroque violin", "A predecessor to the double bass", "A type of flute", "A keyboard instrument"],
                correctAnswer: 1,
                rationale: "The violone is the large, lowest-pitched member of the viol family."
            },
            {
                id: 14,
                question: "How does Bach's treatment differ from Vivaldi's regarding texture?",
                options: ["Bach is simpler", "Bach is more polyphonic and dense", "Vivaldi uses more counterpoint", "There is no difference"],
                correctAnswer: 1,
                rationale: "Bach's German style favored dense polyphony over Vivaldi's more homophonic Italian style."
            },
            {
                id: 15,
                question: "What is the role of the Harpsichord in this work?",
                options: ["Solo instrument only", "Part of the Basso Continuo", "It is not used", "Timekeeper only"],
                correctAnswer: 1,
                rationale: "The harpsichord provides harmonic realization and rhythmic drive as part of the continuo."
            },
            {
                id: 16,
                question: "What is the key signature of F major?",
                options: ["One sharp", "One flat (Bb)", "Three sharps", "No sharps or flats"],
                correctAnswer: 1,
                rationale: "F major contains a single flat: B-flat."
            },
            {
                id: 17,
                question: "Define 'Concerto Grosso'.",
                options: ["A concerto for a single virtuoso", "A concerto for a large group vs. a small solo group", "A concerto with singers", "A very loud concerto"],
                correctAnswer: 1,
                rationale: "The 'big concerto' pits a 'ripieno' (orchestra) against a 'concertino' (soloists)."
            },
            {
                id: 18,
                question: "What interval does the trumpet theme outline in the first measure (F to C)?",
                options: ["Major 2nd", "Perfect 5th", "Perfect 4th", "Octave"],
                correctAnswer: 1,
                rationale: "The leap from F up to C is a perfect fifth."
            },
            {
                id: 19,
                question: "How is the rhythmic drive created in this piece?",
                options: ["Frequent silences", "Slow, sustained chords", "Motoric, constant rhythms (semiquavers)", "Complex syncopation"],
                correctAnswer: 2,
                rationale: "Baroque music often uses constant, pulse-driven rhythms called 'motoric'."
            },
            {
                id: 20,
                question: "Why are they called the 'Brandenburg' concertos?",
                options: ["They were composed in the city of Brandenburg", "They were dedicated to the Margrave of Brandenburg", "Bach's family was from Brandenburg", "It was written for a festival in Brandenburg"],
                correctAnswer: 1,
                rationale: "The name comes from the dedication to the Margrave of Brandenburg."
            }
        ]
    },
    'baroque-fugue': {
        id: 'baroque-fugue',
        title: "The Art of the Fugue",
        topicCode: 'BAROQUE_FUGUE',
        description: "Explore the structural components of the fugue, including subjects, answers, and episodes.",
        abcNotation: `X: 5
T: Generic Fugue Subject
M: 4/4
L: 1/8
K: C
C2 G2 E2 C2 | F2 G2 A2 B2 | c4 ||`,
        revisionNotes: `
            <h3>The Structure of a Fugue</h3>
            <ul>
                <li><strong>Subject:</strong> The main theme (Tonic key).</li>
                <li><strong>Answer:</strong> The subject repeated a 5th higher (Dominant key).</li>
                <li><strong>Exposition:</strong> The section where all voices enter with the subject.</li>
                <li><strong>Episode:</strong> Transitional section without the full subject.</li>
                <li><strong>Stretto:</strong> Overlapping of subject entries.</li>
                <li><strong>Pedal Point:</strong> Sustained note (usually bass) over changing harmonies.</li>
            </ul>
        `,
        questions: [
            {
                id: 1,
                question: "What is a Fugue?",
                options: ["A simple vocal song", "A polyphonic composition based on a main theme", "A speed of playing", "A type of keyboard instrument"],
                correctAnswer: 1,
                rationale: "A fugue is the most sophisticated form of imitative counterpoint."
            },
            {
                id: 2,
                question: "What is the 'Subject' of a fugue?",
                options: ["The main theme", "The name of the composer", "The final chord", "The key of the piece"],
                correctAnswer: 0,
                rationale: "The subject is the primary melodic idea that the whole fugue is built on."
            },
            {
                id: 3,
                question: "What is the 'Answer'?",
                options: ["The audience's response", "The subject repeated (usually at the 5th)", "The end of the piece", "A different melody entirely"],
                correctAnswer: 1,
                rationale: "The answer is the second entry of the subject, transposed to the dominant."
            },
            {
                id: 4,
                question: "What is the difference between a Real Answer and a Tonal Answer?",
                options: ["One is played on a piano, one on an organ", "Real is exact interval transposition; Tonal adjusts intervals for the key", "Real is loud, Tonal is soft", "There is no difference"],
                correctAnswer: 1,
                rationale: "Tonal answers modify intervals slightly (like 5th to 4th) to keep the melody within the home key."
            },
            {
                id: 5,
                question: "What is a Countersubject?",
                options: ["A theme that opposes the subject", "The melody played by the first voice against the answer", "The final part of the fugue", "A type of rest"],
                correctAnswer: 1,
                rationale: "It is the accompanying line that consistently appears with the subject/answer entries."
            },
            {
                id: 6,
                question: "What is the function of an 'Episode'?",
                options: ["To present the full subject", "To transition between subject entries and modulate", "To end the piece", "To show off the drums"],
                correctAnswer: 1,
                rationale: "Episodes provide relief from the subject and use sequences to move to new keys."
            },
            {
                id: 7,
                question: "What is 'Stretto'?",
                options: ["A very slow section", "Overlapping subject entries in close succession", "A type of ornament", "A final cadence"],
                correctAnswer: 1,
                rationale: "Stretto (Italian for 'narrow' or 'tightened') increases tension by bringing in the subject more frequently."
            },
            {
                id: 8,
                question: "Define 'Pedal Point'.",
                options: ["The pedals on a bike", "A sustained note (usually bass) over changing harmonies", "A sharp note", "The end of a bar"],
                correctAnswer: 1,
                rationale: "Common in fugue codas, a pedal point (usually tonic or dominant) anchors the harmony."
            },
            {
                id: 9,
                question: "What is the 'Exposition' of a fugue?",
                options: ["The final section", "The opening section where all voices present the subject", "The title of the piece", "The name of the instrument"],
                correctAnswer: 1,
                rationale: "The exposition ends when all voices have entered once."
            },
            {
                id: 10,
                question: "In Bach's BWV 565, what ornament starts the Toccata before the fugue?",
                options: ["Trill", "Mordent", "Appoggiatura", "Glissando"],
                correctAnswer: 1,
                rationale: "The famous opening of the Toccata in D minor begins with an upper mordent."
            },
            {
                id: 11,
                question: "Which interval characterizes the drama of the D minor Toccata (BWV 565)?",
                options: ["Perfect 5th", "Major 2nd", "Diminished 7th", "Minor 6th"],
                correctAnswer: 2,
                rationale: "Descending diminished 7th arpeggios create the 'horror' and drama of the work."
            },
            {
                id: 12,
                question: "Define Polyphony.",
                options: ["One melody with chords", "A single melody alone", "Two or more independent melodic lines", "Singing in unison"],
                correctAnswer: 2,
                rationale: "Fugues are the definition of complex polyphonic (contrapuntal) texture."
            },
            {
                id: 13,
                question: "What is 'Stylus Phantasticus'?",
                options: ["A style of dressing", "A free, improvisatory, and virtuosic style", "A strict rhythmic ruleset", "The name of a font"],
                correctAnswer: 1,
                rationale: "Often applied to North German organ music, emphasizing fantasy and freedom."
            },
            {
                id: 14,
                question: "Why is the fugue subject in BWV 565 described as 'violinistic'?",
                options: ["It was originally written for violin", "It uses rapid 16th notes and string-crossing patterns", "It is very high pitched", "It sounds like a violin tuning up"],
                correctAnswer: 1,
                rationale: "The rapid 16ths and 'bariolage' style suggest violin technique was an inspiration."
            },
            {
                id: 15,
                question: "What is a 'Tierce de Picardie'?",
                options: ["A three-note chord", "A major third in the final chord of a minor key piece", "A type of flute", "A fast dance"],
                correctAnswer: 1,
                rationale: "Used frequently by Bach to give a sense of light/resolution to minor works."
            },
            {
                id: 16,
                question: "How many voices are typically in a fugue?",
                options: ["Only one", "Usually 3, 4, or 5", "Exactly 10", "Over 100"],
                correctAnswer: 1,
                rationale: "Fugues can have any number of voices, but 3-5 is the standard for clarity."
            },
            {
                id: 17,
                question: "Does an Episode contain the *complete* Subject?",
                options: ["Yes, always", "No, it uses fragments or sequences instead", "Only in the bass", "Yes, but it's very quiet"],
                correctAnswer: 1,
                rationale: "By definition, the episode lacks the complete subject to provide contrast."
            },
            {
                id: 18,
                question: "What is the difference between an Organ Manual and a Pedalboard?",
                options: ["One is for hands, one for feet", "One is for volume, one for pitch", "There is no difference", "One is wood, one is metal"],
                correctAnswer: 0,
                rationale: "Manuals are keyboards played by hands; the pedalboard is played by the feet."
            },
            {
                id: 19,
                question: "What is a Fermata?",
                options: ["A type of pasta", "A musical symbol indicating a hold on a note", "A very loud note", "A type of baroque clarinet"],
                correctAnswer: 1,
                rationale: "Indicates that the note or rest should be sustained beyond its written value."
            },
            {
                id: 20,
                question: "Why is the Fugue considered the highest form of Baroque counterpoint?",
                options: ["It is the loudest", "It is the easiest to write", "It combines rigorous structure with melodic independence", "It was invented by the Pope"],
                correctAnswer: 2,
                rationale: "It requires the most skill to maintain multiple independent lines within a strict harmonic framework."
            }
        ]
    },
    'baroque-hallelujah': {
        id: 'baroque-hallelujah',
        title: "Handel: Hallelujah Chorus",
        topicCode: 'BAROQUE_HANDEL',
        description: "Analysis of the iconic chorus from Handel's Messiah, focusing on mixing textures.",
        abcNotation: `X: 6
T: Hallelujah Chorus - Opening
C: G.F. Handel
M: 4/4
L: 1/8
K: D
"D"d2 A2 "G"B2 A2 | "D"d2 z2 "D"d2 z2 | "D"d4 z4 ||`,
        revisionNotes: `
            <h3>Handel: Hallelujah Chorus</h3>
            <p><strong>Genre:</strong> Oratorio (Sacred vocal work without acting/staging).</p>
            <p><strong>Mixed Textures:</strong> Handel uses three textures for impact:</p>
            <ul>
                <li><strong>Homophony:</strong> Opening block chords ("Hallelujah").</li>
                <li><strong>Monophony:</strong> "For the Lord God Omnipotent reigneth" (Unison).</li>
                <li><strong>Polyphony:</strong> "And He shall reign for ever and ever" (Imitation).</li>
            </ul>
        `,
        questions: [
            {
                id: 1,
                question: "Define 'Oratorio'.",
                options: ["A type of opera for churches", "A large sacred vocal work with soloists, chorus, and orchestra", "A specific type of drum", "A short prayer"],
                correctAnswer: 1,
                rationale: "Oratorios use dramatic forms but are not staged like operas."
            },
            {
                id: 2,
                question: "How does an Oratorio differ from an Opera?",
                options: ["No acting, costumes, or scenery; usually sacred themes", "No instruments", "No singing", "It is played in a football stadium"],
                correctAnswer: 0,
                rationale: "The lack of staging and the sacred subject matter are the primary differences."
            },
            {
                id: 3,
                question: "In which city did Handel spend most of his career?",
                options: ["Berlin", "Venice", "London", "New York"],
                correctAnswer: 2,
                rationale: "German-born Handel became a naturalized British citizen and composed for the London stages."
            },
            {
                id: 4,
                question: "What is the source text for the Messiah oratorio?",
                options: ["A novel by Charles Dickens", "The Bible (King James version)", "A play by Shakespeare", "Handel's diary"],
                correctAnswer: 1,
                rationale: "Jennens compiled scriptures into a libretto for Handel."
            },
            {
                id: 5,
                question: "Which section of Messiah does the Hallelujah Chorus conclude?",
                options: ["Part I", "Part II", "Part III", "The Overture"],
                correctAnswer: 1,
                rationale: "It is the triumphal ending to the second part of the oratorio."
            },
            {
                id: 6,
                question: "Identify the three textures used in the 'Hallelujah Chorus'.",
                options: ["Loud, Soft, Medium", "Monophony, Homophony, Polyphony", "String, Brass, Woodwind", "Major, Minor, Modal"],
                correctAnswer: 1,
                rationale: "Handel expertly switches between these textures for clarity and grandeur."
            },
            {
                id: 7,
                question: "Which texture corresponds to 'For the Lord God Omnipotent reigneth'?",
                options: ["Homophony", "Monophony (Unison)", "Polyphony", "Heterophony"],
                correctAnswer: 1,
                rationale: "Handel uses unison to represent the singular power/strength of God."
            },
            {
                id: 8,
                question: "Which texture corresponds to 'And He shall reign for ever and ever'?",
                options: ["Monophony", "Heterophony", "Polyphony (Imitation)", "Homorhythmic"],
                correctAnswer: 2,
                rationale: "The imitative entries symbolize the concept of 'forever and ever' through weaving lines."
            },
            {
                id: 9,
                question: "What is the key of the 'Hallelujah Chorus'?",
                options: ["C Major", "D Major", "G Major", "F Major"],
                correctAnswer: 1,
                rationale: "D Major was the standard 'bright' key for festive works with trumpets."
            },
            {
                id: 10,
                question: "Which brass instrument is featured to signify royalty and divinity?",
                options: ["Trombone", "Tuba", "Trumpet", "Horn"],
                correctAnswer: 2,
                rationale: "Trumpets were associated with high occasions, kings, and God in the Baroque era."
            },
            {
                id: 11,
                question: "What percussion instrument typically accompanies trumpets in the Baroque?",
                options: ["Cymbals", "Timpani (Kettledrums)", "Snare Drum", "Xylophone"],
                correctAnswer: 1,
                rationale: "Timpani were usually tuned to the tonic and dominant to support the trumpets."
            },
            {
                id: 12,
                question: "Why did the audience traditionally stand during this chorus?",
                options: ["They wanted to leave early", "King George II stood up first (legend says)", "It was a requirement in the score", "The chairs were uncomfortable"],
                correctAnswer: 1,
                rationale: "Legend says the King was so moved he stood up, and protocol required everyone to follow."
            },
            {
                id: 13,
                question: "Where is Messiah typically performed?",
                options: ["Strictly in church services", "Concert halls (secular venues)", "In a cave", "Only in Italy"],
                correctAnswer: 1,
                rationale: "Despite the sacred theme, oratorios were public entertainments in theaters/concert halls."
            },
            {
                id: 14,
                question: "What is a 'Da Capo Aria'?",
                options: ["An aria with no accompaniment", "An ABA form aria where the 'A' section repeats", "A very fast song", "A chorus song"],
                correctAnswer: 1,
                rationale: "The standard Baroque aria form where the 'head' (A) is repeated at the end."
            },
            {
                id: 15,
                question: "Define Syllabic text setting.",
                options: ["One note per syllable", "Many notes per syllable", "No notes at all", "Screaming"],
                correctAnswer: 0,
                rationale: "Syllabic setting ensures the text is easy to understand (helpful for the huge 'Hallelujah' shout)."
            },
            {
                id: 16,
                question: "Define Melismatic text setting.",
                options: ["One note per syllable", "Many notes per syllable", "Whispering", "Singing only vowels"],
                correctAnswer: 1,
                rationale: "Used on words like 'ever' to show virtuosity and elongate the thought."
            },
            {
                id: 17,
                question: "What is the time signature of the chorus?",
                options: ["3/4", "4/4", "2/2", "6/8"],
                correctAnswer: 1,
                rationale: "It follows a solid, march-like 4/4 meter."
            },
            {
                id: 18,
                question: "How does Handel create excitement at the end of the chorus?",
                options: ["The music gets slower and quieter", "Higher pitch, louder dynamics, and festive orchestration", "He adds a guitar solo", "The choir stops singing"],
                correctAnswer: 1,
                rationale: "The use of increasing register and full orchestration creates a grand climax."
            },
            {
                id: 19,
                question: "Compare the use of Chorus in Handel's Oratorios vs. Purcell's Opera.",
                options: ["Handel uses the chorus significantly more", "Purcell uses the chorus for everything", "There is no chorus in Handel", "Purcell only uses men"],
                correctAnswer: 0,
                rationale: "Oratorios elevated the chorus to be a primary structural and dramatic force."
            },
            {
                id: 20,
                question: "What does 'Hallelujah' mean?",
                options: ["Bless you", "Praise the Lord", "Goodbye", "Peace be with you"],
                correctAnswer: 1,
                rationale: "It is a Hebrew expression of praise to God."
            }
        ]
    },
    'baroque-historical-context': {
        id: 'baroque-historical-context',
        title: "Section 1: Historical Context",
        topicCode: 'BAROQUE_HISTORY',
        description: "Explore the social, aesthetic, and professional world of the Baroque composer.",
        abcNotation: `X:1
T:Invention in C Minor for Harpsichord
C:Antony Leedale (Arr. AI)
M:4/4
L:1/16
Q:1/4=92
K:Cm
%%score {1 | 2}
V:1 clef=treble name="Harpsichord RH" snm="Hpschd."
%%MIDI program 6
V:2 clef=bass name="Harpsichord LH" snm="Hpschd."
%%MIDI program 6
%%measure-numbering on
%
% Measure 1
% RH: Statement of Subject.
% LH: Rests/Accompaniment.
V:1
!mf! (1slur-start !mordent!c2de d2G2 c2e2 g2c'2 |
V:2
z4 z4 C,2E,2 G,2C2 |
%
% Measure 2
% RH: Sequence/Codetta.
% LH: Linear Walking Bass.
V:1
b2a2 g2f2 (1slur-end !staccato!e2 !staccato!d2 !staccato!c2 !staccato!=B2 |
V:2
G,2F,2 E,2D,2 C,2=B,,2 C,2D,2 |
%
% Measure 3
% LH: ANSWER (Subject transposed to Dominant Gm).
% Note: Adjusted to Bb (minor dominant) for stylistic accuracy.
% RH: COUNTER-SUBJECT.
V:1
(1slur-start e2g2 c'2e2 d2c2 B2A2 |
V:2
!mf! (1slur-start G,2A,B, A,2D,2 G,2B,2 d2g2 |
%
% Measure 4
% RH: Sequence and modulation back towards C.
V:1
G2f2 e2d2 (1slur-end c2=B2 c2d2 |
V:2
f2e2 d2c2 (1slur-end !staccato!=B,2 !staccato!A,2 !staccato!G,2 !staccato!F,2 |
%
% Measure 5
% Sequence with invertible counterpoint.
V:1
!f! (1slur-start !mordent!e2fg f2d2 g2a2 b2g2 |
V:2
E,2C,2 F,2A,2 G,2=B,2 G,2F,2 |
%
% Measure 6
V:1
c'2b2 a2g2 (1slur-end !staccato!f2 !staccato!e2 !staccato!d2 !staccato!c2 |
V:2
E,2C,2 F,2D,2 G,2A,2 =B,2G,2 |
%
% Measure 7
% RH: Compound Melody (Style Brise).
V:1
(1slur-start c'2a2 f2a2 =B2g2 d2g2 |
V:2
A,2C2 F,2E,2 D,2F,2 =B,2A,2 |
%
% Measure 8
V:1
c2f2 A2f2 (1slur-end !staccato!d2 !staccato!c2 !staccato!=B2 !staccato!A2 |
V:2
G,2=B,2 D2C2 =B,2A,2 G,2F,2 |
%
% Measure 9
% Modulation and crossing voices.
V:1
!mf! (1slur-start g2G2 c2=B2 c2d2 e2f2 |
V:2
E,2G,2 E,2D,2 C,2E,2 G,2A,2 |
%
% Measure 10
V:1
g2e2 c2G2 (1slur-end A2G2 F2E2 |
V:2
=B,2G,2 C2E2 F2C2 A,2C2 |
%
% Measure 11
% Pre-Cadential Tension.
V:1
(1slur-start F2A2 d2c2 =B2d2 g2f2 |
V:2
D,2F,2 A,2D2 G,2=B,2 D2G,2 |
%
% Measure 12
V:1
e2d2 c2=B2 (1slur-end c2d2 e2c2 |
V:2
C2=B,2 A,2G,2 ^F,2E,2 ^F,2D,2 |
%
% Measure 13
% CADENCE: Double Suspension.
V:1
!f! (1slur-start f2ed e2c2 !trill!d4 c2=B2 |
V:2
G,2=B,2 C2E2 F2D2 G2G,2 |
%
% Measure 14
V:1
c2G2 E2G2 (1slur-end c4 !trill!=B4 |
V:2
A,2=B,2 C2E,2 F,2D,2 G,2G,,2 |
%
% Measure 15
% Ending
V:1
!ff! (1slur-start c2G2 E2D2 (1slur-end C4 z4 |]
V:2
!staccato!C,4 !staccato!G,,4 !tenuto!C,4 z4 |]`,
        revisionNotes: `
            <h3>Historical Context</h3>
            <ul>
                <li><strong>Era:</strong> 1600 (Birth of Opera) – 1750 (Death of J.S. Bach).</li>
                <li><strong>Aesthetic:</strong> Grandeur, energy, and emotional intensity.</li>
                <li><strong>Professional Life:</strong> Composers were craftsmen employed by the Church, Court, or Opera House.</li>
                <li><strong>Doctrine of Affections:</strong> Music intended to trigger specific physical/emotional responses.</li>
            </ul>
        `,
        questions: [
            {
                id: 1,
                question: "What are the start and end dates of the Baroque period?",
                options: ["1450-1600", "1600-1750", "1750-1820", "1820-1900"],
                correctAnswer: 1,
                rationale: "The period is traditionally defined from the birth of opera (1600) to the death of Bach (1750)."
            },
            {
                id: 2,
                question: "Translate the Portuguese word 'barroco'.",
                options: ["Beautiful pearl", "Irregularly shaped pearl", "Twisted column", "Golden light"],
                correctAnswer: 1,
                rationale: "The term originally mocked the period's complex and 'irregular' aesthetic."
            },
            {
                id: 3,
                question: "Explain the Doctrine of Affections.",
                options: ["Composer's personal feelings", "Religious devotion", "The belief that music triggers specific physical emotions", "The love of music"],
                correctAnswer: 2,
                rationale: "Baroque theory held that music should systematically arouse specific 'affections' (emotions)."
            },
            {
                id: 4,
                question: "What is the concept of 'Unity of Mood'?",
                options: ["Changing emotions rapidly", "Maintaining a single mood throughout a movement", "Only writing sad music", "Everyone in the audience being happy"],
                correctAnswer: 1,
                rationale: "Baroque movements focus on one affection (emotion) at a time."
            },
            {
                id: 5,
                question: "Which major composer's death in 1750 marks the end of the Baroque period?",
                options: ["Handel", "Vivaldi", "J.S. Bach", "Purcell"],
                correctAnswer: 2,
                rationale: "Bach's death is the symbolic end of the high Baroque style."
            },
            {
                id: 6,
                question: "Contrast the 'feel' of Renaissance vs. Baroque music.",
                options: ["Baroque is calmer", "Baroque is driven by forward momentum and drama", "Renaissance is louder", "There is no difference"],
                correctAnswer: 1,
                rationale: "Baroque music introduced greater drama, contrast, and rhythmic drive."
            },
            {
                id: 7,
                question: "List the three primary employers of Baroque composers.",
                options: ["Radio, TV, Film", "Church, Court, Opera House", "Universities, Schools, Libraries", "Villages, Towns, Cities"],
                correctAnswer: 1,
                rationale: "Professional music was sustained by these three major institutions."
            },
            {
                id: 8,
                question: "Why was the term 'Baroque' originally considered an insult?",
                options: ["It meant 'boring'", "It suggested music was excessive/bizarre", "It was a religious slur", "It referred to poor musicians"],
                correctAnswer: 1,
                rationale: "Enlightenment critics found the style too ornate and lacking 'rational' symmetry."
            },
            {
                id: 9,
                question: "Name the 'Sun King' who heavily influenced Baroque arts.",
                options: ["Henry VIII", "Louis XIV", "Charles II", "Napoleon"],
                correctAnswer: 1,
                rationale: "Louis XIV's court at Versailles was the center of the Baroque aesthetic in France."
            },
            {
                id: 10,
                question: "What interval or scale pattern was associated with grief?",
                options: ["Major arpeggio", "Descending chromatic scale", "Whole tone scale", "Perfect 5th"],
                correctAnswer: 1,
                rationale: "The 'Passus duriusculus' or hard step (chromatic descent) symbolized mourning."
            }
        ]
    },
    'baroque-musical-language': {
        id: 'baroque-musical-language',
        title: "Section 2: Musical Language",
        topicCode: 'BAROQUE_LANGUAGE',
        description: "Basso Continuo, Figured Bass, and the unique syntax of the era.",
        abcNotation: "",
        revisionNotes: `
            <h3>Baroque Musical Language</h3>
            <ul>
                <li><strong>Basso Continuo:</strong> The harmonic foundation (Bass instrument + Chordal instrument).</li>
                <li><strong>Figured Bass:</strong> A shorthand system of numbers specifying chords.</li>
                <li><strong>Terraced Dynamics:</strong> Sudden shifts in volume (F to P) without crescendos.</li>
                <li><strong>Ornamentation:</strong> Trills, mordents, and turns used to decorate melodies.</li>
            </ul>
        `,
        questions: [
            {
                id: 1,
                question: "Define Basso Continuo.",
                options: ["A very long song", "The harmonic foundation provided by a bass and chordal instrument", "A type of flute", "The end of a concert"],
                correctAnswer: 1,
                rationale: "It is the 'continuous bass' that underpins almost all Baroque music."
            },
            {
                id: 2,
                question: "Which instruments typically play the continuo melodic bass line?",
                options: ["Violin/Flute", "Cello/Bassoon", "Trumpet/Clarinet", "Harp/Lute"],
                correctAnswer: 1,
                rationale: "Low-register sustaining instruments like Cello or Bassoon play the written notes."
            },
            {
                id: 3,
                question: "Which instruments typically play the chordal realization in a continuo group?",
                options: ["Harpsichord/Organ/Lute", "Timpani/Triangle", "Violin/Viola", "Oboe/Recorder"],
                correctAnswer: 0,
                rationale: "These instruments can play chords to 'realize' the harmony."
            },
            {
                id: 4,
                question: "What is 'Figured Bass'?",
                options: ["A very expensive bass instrument", "Numbers under the bass line indicating chords", "A bass line meant for a soloist", "Singing without words"],
                correctAnswer: 1,
                rationale: "A shorthand system for keyboardists to improvise the harmony."
            },
            {
                id: 5,
                question: "What does the figure '6' underneath a bass note indicate?",
                options: ["Play 6 times", "First inversion chord", "Wait 6 beats", "Use the 6th finger"],
                correctAnswer: 1,
                rationale: "The number 6 indicates a 6-3 chord, or first inversion."
            },
            {
                id: 6,
                question: "Explain 'Terraced Dynamics'.",
                options: ["Gradual crescendos", "Sudden shifts between loud and soft", "Always playing at medium volume", "Using a terrace to play music"],
                correctAnswer: 1,
                rationale: "Step-like volume changes forced by the mechanical nature of harpsichords and organs."
            }
        ]
    },
    'baroque-instruments': {
        id: 'baroque-instruments',
        title: "Section 8: Baroque Instruments",
        topicCode: 'BAROQUE_INSTRUMENTS',
        description: "Mechanism and tone of the Harpsichord, Organ, Natural Trumpet, and Baroque strings.",
        abcNotation: "",
        revisionNotes: `
            <h3>Instruments of the Baroque</h3>
            <ul>
                <li><strong>Harpsichord:</strong> Strings are plucked by a quill. No dynamic variation by touch.</li>
                <li><strong>Pipe Organ:</strong> Wind directed through pipes. Sustained sound.</li>
                <li><strong>Baroque Violin:</strong> Gut strings, convex bow, warmer tone.</li>
                <li><strong>Natural Trumpet:</strong> No valves; plays only notes of the harmonic series.</li>
            </ul>
        `,
        questions: [
            {
                id: 1,
                question: "How does a Harpsichord produce sound?",
                options: ["Hammers hit strings", "Plectrums pluck strings", "Wind blows through pipes", "Bow rubs on strings"],
                correctAnswer: 1,
                rationale: "The mechanical plucking creates its sharp attack and quick decay."
            },
            {
                id: 2,
                question: "What are 'Manuals' on a keyboard instrument?",
                options: ["Instruction books", "The separate keyboards for the hands", "The pedals for the feet", "The volume knobs"],
                correctAnswer: 1,
                rationale: "Organs and large harpsichords often have multiple stacked keyboards called manuals."
            },
            {
                id: 3,
                question: "What were Baroque string instrument strings typically made of?",
                options: ["Steel", "Nylon", "Animal Gut", "Silk"],
                correctAnswer: 2,
                rationale: "Gut strings provide a warmer, more 'gritty' tone compared to modern steel."
            },
            {
                id: 4,
                question: "How does a Natural Trumpet change pitch without valves?",
                options: ["Sliding a tube", "Using lip tension to play different harmonics", "The player sings the notes", "It can only play one note"],
                correctAnswer: 1,
                rationale: "The player manipulates the 'harmonic series' through embouchure alone."
            }
        ]
    },
    'baroque-theory-notation': {
        id: 'baroque-theory-notation',
        title: "Section 9: Theory & Notation",
        topicCode: 'BAROQUE_THEORY',
        description: "Musical theory foundations, MusGlyphs, and ABC notation rules.",
        abcNotation: "",
        revisionNotes: `
            <h3>Theory & Notation</h3>
            <p><strong>ABC Notation:</strong> A text-based music code. C is Middle C, c is High C.</p>
            <p><strong>MusGlyphs:</strong> Key-based symbols (e.g., '#' for sharp, 'b' for flat).</p>
        `,
        questions: [
            {
                id: 1,
                question: "In ABC notation, what does 'C2' represent?",
                options: ["Middle C", "Double length C note", "Half length C note", "The note D"],
                correctAnswer: 1,
                rationale: "Numbers after letters multiply the default note length."
            },
            {
                id: 2,
                question: "How many semiquavers are in a dotted crotchet?",
                options: ["2", "4", "6", "8"],
                correctAnswer: 2,
                rationale: "A crotchet is 4 semiquavers; the dot adds half (2), totaling 6."
            }
        ]
    }
};
