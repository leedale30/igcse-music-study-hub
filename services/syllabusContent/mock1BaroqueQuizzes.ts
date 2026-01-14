import { QuizData } from './mock1Quizzes';

export const mock1BaroqueQuizzes: Record<string, QuizData> = {
    'baroque-dido-lament': {
        id: 'baroque-dido-lament',
        title: "Purcell: Dido's Lament",
        topicCode: 'BAROQUE_PURCELL',
        description: "Analysis of Purcell's masterpiece from Dido and Aeneas, focusing on Recitative and Ground Bass.",
        abcNotation: `X:1
T:Dido's Lament - Henry Purcell - Aria
%%score 1 { 2 | 3 }
L:1/8
Q:1/8=80
M:4/4
I:linebreak $
K:B
V:1 treble nm="Vocal Melody" snm="V"
%%MIDI program 71
V:2 treble nm="Harpsichord" snm="Hpc"
%%MIDI program 6
V:3 bass 
%%MIDI program 43
V:1
z!pp! B B>A B2 B !fermata!z | B =A3- A/G/A/F/ =G>A | =G3 G !fermata!z2 GG |$ 
w: Thy hand, Be- lin- da:|Dar- * * * * * * kness|shades me: On thy|
(=G F2) F z F3/2EF/- | F4 !fermata!z2 FF | (FE) z E!<(! (E2 D)E!<)! | 
w: bo- * som let me rest:|* More i|w ould but death * in-|
D!fermata!D z z !>!C =D2 D |$ ^^C ^C2!pp! ^E (EF)(F^B,) | C4 z4 |] 
w: vades me: Death * is|now * a wel- * co- me|guest.|
V:2
!pp! [B,=DF]8 | [=A,^DF]8 | [=G,E]8 |$ [=A,D]4 !fermata![B,E]4 | [A,C]8 | [A,E]8 | 
[F,B,D]4 [F,B,=D]4 |$ [G,C-]4 [F,-C]2{C} [F,^B,]2 | [G,C]4 z4 |] 
V:3
[B,,F,]8 | [B,,F,]8 | [E,,E,]8 |$ [F,,F,]4 !fermata![=G,,=G,]4 | [F,,F,]8 | [F,,F,]8 | 
[B,,,B,,]8 |$ [C,,C,^E,]4 [=D,,=D,]4 | [C,,C,^E,]4 z4 |]`,
        revisionNotes: `# Section 3: Henry Purcell and the Baroque Opera

## 3.1 Focus Work: Dido and Aeneas (c. 1689)
*   **Composer:** Henry Purcell.
*   **Genre:** English Baroque Opera.
*   **Setup:** Tragic love story of Dido (Queen of Carthage) and Aeneas (Trojan hero).

## 3.2 The Recitative: "Thy hand, Belinda"
*   **Function:** Advances the narrative; Dido prepares for death.
*   **Rhythm:** Free, speech-like (Recitativo secco).
*   **Accompaniment:** Sparse continuo (Cello and Harpsichord).
*   **Harmony:** Begins in C minor; chromatically unstable.
*   **Word Painting:** Melismas on "darkness" and descending lines symbolize death.

## 3.3 The Aria: "When I am laid in earth"
This is a **Ground Bass Aria**.
*   **Ground Bass (Basso Ostinato):** A repeating 5-measure chromatic bass line in G Minor.
*   **Symbolism:** The descending chromatic scale (**Passus duriusculus**) represents weeping and death.
*   **The Vocal Melody:** Overlaps with the bass pattern start points to prevent monotony.
*   **Word Painting:** "Laid" descends; "Trouble" uses dissonance; "Remember me" on a repeated high G sounds like a cry or tolling bell.
*   **Texture:** Homophonic (Melody with Accompaniment).`,
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
        abcNotation: `X:1
T:Spring-Four season
T:Vivaldi
L:1/16
M:4/4
I:linebreak $
K:E
%%MIDI program 40
z8 z4 z2[Q:1/4=100] e2 |: g2g2 g2fe b6 ba :| g2ab a2g2 f2d2B2e2 |:$ g2g2 g2fe b6 ba :| 
g2ab a2g2 f4 z2 e2 |: b2ag a2b2 c'2 b4 e2 :|$ c'2 b4 a2 g2fe Tf4 | e4 z2 e2 b2ag a2b2 | 
c'2 b4 e2 b2ag a2b2 |$ c'2 b4 e2 c'2 b4 a2 | g2fe Tf4 Mb4 Mb4 | (Mb4 Mb4 Mb4 Mb4) |$ 
.b2.b2.b2.b2 .b2.b2.b2.b2 | .b2.b2.b2.b2 .b2.b2 .b2c'd' | (e'd'c'b agfe) Te4 z4 |:$ 
(.e'2.e'2.e'2.e'2 .e'2) Te6 :| z4 (b4 (b)e')(bc') (b4 | 
(b)e')(bc') (be')(bc') (be')(bc') (be')(bc') |$ (be')(bc') b2e2 Tg6 z2 | Tg6 z2 Tg6 z2 | 
Tg6 z2 (d'4 e'4) |$ Te'8 (e'4 e'4) | Te'8 z4 z2 e2 |: b2ag a2b2 c'2 b4 e2 :|$ c'2 b4 a2 g2fe Tf4 | 
e2GA (BA)(BA) (GA)(GA) (BA)(BA) | (GA)(GA) (BA)(BA) (GA)(GA) (Bc)(Bc) |$ 
(de)(de) (fe)(fe) (de)(de) (fe)(fe) | (de)(de) ((fg))(fg) (ag)(ag) (fa)(gf) | 
g2fe dcBA (BA)(BA) (GA)(GA) |$ (BA)(BA) (GA)(GA) (BA)(BA) (GA)(GA) | G4 z2 g2 a8 | g8 f8 |$ 
g8 a8 | g8 f4 z2 B2 |: f2ed e2f2 g2 f4 B2 :|$ g2 f4 e2 d2cB Tc4 | 
B/B,/B,/B,/B,/B,/B,/B,/ B,/B,/B,/B,/B,/B,/B,/B,/ B,/B,/B,/B,/B,/B,/B,/B,/ B,/B,/B,/B,/B,/B,/B,/B,/ |$ 
(B/c/d/e/f/g/a/b/) z4 (B/c/d/e/f/g/a/b/) z4 |$ 
B,/B,/B,/B,/B,/B,/B,/B,/ B,/B,/B,/B,/B,/B,/B,/B,/ A,/A,/A,/A,/A,/A,/A,/A,/ A,/A,/A,/A,/A,/A,/A,/A,/ |$ 
bgbe' be'bg be'be' bgbe'be'bgbe'be' | c'6 z6 c'ac'f'c'f'c'^ac'f'c'f' |$ 
c'ac'e' c'e'c'a c'e'c'e' d'6 z z z4 | d'bd'g' d'g'd'b d'g'd'g' d'bd'f'd'f'd'bd'f'd'f' |$ 
e'6 z6 e'c'e'g'e'g'e'c'e'g'e'g' | d'bd'g' d'g'd'b d'g'd'g' c'ac'f'c'f'c'^ac'f'c'f' |$ 
bgbe' be'bg be'be' afad'ad'afad'ad' | gegc' gc'ge gc'gc' gdgc'gc'gdgc'gc' |$ 
gdgb gbgd gbgb c'7 z3 c2 |: g2fe f2g2 a2 g4 c2 :| a2 g4 f2 e2dc Td4 |$ 
(.c2.g2.g2.g2) (.g2.g2.g2.g2) | (.a2.^a2.a2.a2) (.b2.^b2.b2.b2) | (Tc'16 |$ c'16) | 
(c'd')(c'd') c'4 (c'd')(c'd') c'4 | ((c'd'))(c'd') (c'd')(c'd') (Tc'8 |$ 
(c'/)d'/)(c'/d'/)(c'/d'/)(c'/d'/) (c'/d'/)(c'/d'/) c'8 z2 | g2g2 g2fg a6 ag | f2f2 f2ef g6 ga |:$ 
b2b2 b2ba g2g2 g2ga :| b2b2 b2ag (fB)(cB) (dc)(ed) | (fe)(gf) (ag)(ba) (BA)(cB) (dc)(ed) |$ 
(fe)(gf) (ag)(ba) (ge)(fe) (ge)(fe) | (ae)(fe) (ae)(fe) (be)(fe) (be)(fe) | 
c'2d'2 e'4 (e'b)(e'b) (c'b)(e'b) |$ (c'b)(e'b) (c'b)(e'b) e'2e2 Tf4 | e2>g2 a2b2 c'2 b4 e2 | 
b2ag a2b2 c'2 b4 e2 |$ c'2 b4 a2 g2fe Tf4 | e4 z2 e2 b2ag a2b2 | c'2 b4 e2 b2ag a2b2 |$ 
c'2 b4 e2 c'2 b4 c'2 | g2fe Tf4 !fermata!e8 |]`,
        revisionNotes: `# Section 4: Antonio Vivaldi and The Concerto

## 4.1 Focus Work: The Four Seasons ("Spring")
*   **Composer:** Antonio Vivaldi (1678–1741).
*   **Genre:** Solo Violin Concerto.
*   **Set Work:** Concerto No. 1 in E Major, Op. 8, RV 269, "La Primavera".

## 4.2 Program Music
Instrumental music intended to depict a story, poem, or scene. Vivaldi published Sonnets alongside the music.

## 4.3 Form: Ritornello Form
*   **Ritornello (Tutti):** The "Little Return." Recurring theme played by the full orchestra (Ripieno).
*   **Episodes (Solo):** Virtuosic sections for the soloist, often programmatic.

## 4.4 Analysis of Movement 1 (Allegro)
1.  **Opening Ritornello:** Joyful, dance-like theme in E Major. Repeats piano (echo effect).
2.  **Episode 1 (The Birds):** High-pitched trills and staccato notes mimic bird calls.
3.  **Episode 2 (The Streams):** Flowing, legato semiquavers moving stepwise.
4.  **Episode 3 (The Thunderstorm):** Rapid repeated notes (tremolo) in low strings (thunder) and fast scales/arpeggios in solo violin (lightning). Brief shift to E Minor.`,
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
        abcNotation: `X:2
T:Brandenburg Concerto No. 2 in F Major
T:1st Movement
T:J. S. Bach
%%score [ 1 | 2 | 3 | 4 ] [ { 5 6 } 7 8 9 ]
L:1/16
Q:1/4=90
M:4/4
I:linebreak $
K:F
V:1 treble nm="Trumpet"
%%MIDI program 56
V:2 treble nm="Flute"
%%MIDI program 73
V:3 treble nm="Oboe"
%%MIDI program 68
V:4 treble nm="Violin"
%%MIDI program 40
V:5 treble nm="Violino 1.\ndi ripieno"
%%MIDI program 40
V:6 treble nm="Violino 2.\ndi ripieno"
%%MIDI program 40
V:7 alto nm="Viola\ndi ripieno"
%%MIDI program 41
V:8 bass nm="Violone\ndi ripieno"
%%MIDI program 43
V:9 bass nm="Violoncello\ne Cembalo"
%%MIDI program 42
V:1
F2 | A2c2A2F2 A2c2f2c2 | A2c2A2F2 A2c2 fgab | c'2c'2c'2c'2 Tc'8- | c'12 z2 f2 |$ 
f2c2c2A2 A2F2F2f2 | f2c2c2A2 A2F2 F2cc | c4 z2 cc c4 z2 cc | c2fc AFc2 A4 z4 | z16 |$ 
z8 z4 z2 F2 | A2c2A2F2 A2c2f2c2 | A2c2A2F2 A2c2 f4 | z16 |$ z8 z4 z2 c2 | 
c'd'e'd' c'd'e'd' c'=bc'd' e'f'e'd' | c'd'e'd' c'd'e'd' c'2c2 z4 | z16 |$ z8 z4 z2 c2 | 
c'd'e'd' c'd'e'd' c'=bc'd' e'f'e'd' | c'd'e'd' c'd'e'd' c'2c2 z2 g2 | 
a=bab Tb3a/b/ c'bc'd' c'bag |$ agac' =bagf g2c2 z2 gg | g4 z2 gg g4 z2 gg | g4 z2 gg g4 z2 g2 | 
g2c'=b c'2g2 g2e'_e' =e'2g2 |$ g2c'=b c'2g2 g2e'd' e'4 | z2 ga g2c'2 =b2ga g2c'2 | 
c4 z4 z4 z2 c'2 | d'e'd'e' Te'3d'/e'/ f'2fg abc'a |$ d'bgb cgc'b abc'a f2a2 | a16- | 
Ta8 z2 a2d'2a2 | b8- b2g2c'2g2 |$ a8- a2f2b2f2 | Tg8- g2fg a2g2 | f2d'_d' =d'2a2 a2f'e' f'2a2 | 
a2d'_d' =d'2a2 a2f'e' f'2 z2 |$ z2 AA A4 z2 AA A4 | z2 AA A2A2 F4 z2 a2 | a2fg a2fg a2d'2a2d'2 | 
a2fg a2fg a2d'2 a2d'c' |$ =baga baga bc'ba gaga | =baga baga bc'ba g4 | z16 |$ z8 z4 z2 c2 | 
f2c2A2c2 F2c2A2c2 | f2c2A2c2 F4 z2 cc | c4 z2 cc c4 z2 cc |$ c4 z2 cc c4 z4 | z2 F2A2c2 f2c2A2F2 | 
!p! (a2a2a2a2) (a2a2a2a2) | (d'2d'2d'2d'2) (d'2d'2d'2d'2) |$ d'_e'f'e' d'e'd'c' =bc'd'c' bc'd'e' | 
a4 z4 z8 | c2!f!_ed c2ag f2c'b agfe | f2ba b2f2 f2d'c' d'2f2 |$ f2ba b2f2 f2d'c' d'2ff | 
f4 z2 FF F4 z2 ff | bc'bc' c'2>b2 b4 z4 | z16 |$ z16 | z16 | z16 | z16 |$ z8 z4 z2 g2 | 
a=bab Tb3a/b/ c'bc'd' c'd'_e'c' | d'_e'd'c' =bagf _efge c2c2 | _e2g2e2c2 e2g2c'2g2 |$ 
_e2g2e2c2 e2g2 c'4 | z2 gg g4 z2 gg g4 | z2 gg g4 z2 gg g4 | z2!p! (b2b2b2) (b2b2b2b2) |$ 
a2F2!f!A2c2 f2c2A2F2 |!p! (a2a2a2a2) (a2a2a2a2) |!f! b2ga b2ga b2d'2b2d'2 | 
b2ga b2ga b2d'2g'2d'2 |$ _e'4 z4 z2 c'2f'2c'2 | d'4 z4 z2 b2_e'2b2 | c'4 z4 z2 a2d'2c'2 | 
b2g2b2d'2 g'2d'2b2d'2 |$ b2g2b2d'2 g'2d'2b2g2 | z16 | z8 z4 z2 ga | baga b2ga bc'ba gaga |$ 
baga b2ga bc'ba g4 | z2 (A2A2A2) (A2A2A2A2) | (A2A2A2A2) A4 z4 | z4 z2 a2 a2fg a2fg |$ 
a2d'2a2d'2 a2fg a2d'2 | b2d'2b2d'2 c'2g2c'2g2 | a2c'2a2c'2 =bc'bc' d'c'ba | 
(d'2d'2d'2)=b2 (c'2c'2c'2)a2 |$ =babc' d'c'bd' c'd'e'c' a4 | z4 z2!f! c'2 c'2a=b c'2ab | 
c'2e'2c'2e'2 c'2a=b c'2a2 |$ a2c'2a2c'2 g2=b2g2b2 | g2=b2g2b2 f2a2f2a2 | f2a2f2d'2 =b4 z2 a2 | 
a4 z2 a2 a4 z2 a2 |$ a4 z4 z8 | z16 | z8 z4 z2 f2 | c2AF c2AF c2f2c2f2 | c2AF c2AF c2f2 c2cc |$ 
c4 z2 cc c4 z2 cc | c4 z2 cc c4 z4 |!p! (f2f2f2f2) (f2f2f2f2) | (g2g2g2g2) (g2g2g2g2) |$ 
!f! g2c2g2g2 c'2g2g2c2 |!p! A2A2A2A2 A2A2A2A2 | A2A2A2A2 A2A2A2A2 | F2F2F2F2 F2F2F2F2 |$ 
!f! c2gf g2c2 c2c'b c'2c2 | c2gf g2c2 c2c'b c'2fg | f2c2c2A2 A2F2F2f2 | f2c2c2A2 A2F2 F2cc | 
c4 z2 cc c4 z2 cc |$ c2fc AFc2 A6 |]`,
        revisionNotes: `# Section 5: J.S. Bach and The Brandenburg Concertos

## 5.1 Focus Work: Brandenburg Concerto No. 2 in F Major
*   **Composer:** J.S. Bach (1685–1750).
*   **Genre:** Concerto Grosso (Small group vs. Large group).

## 5.2 Instrumentation
*   **Concertino (Soloists):** 
    1.  **Natural Trumpet in F:** Played in the high **Clarino** register.
    2.  **Recorder (Flauto dolce):** Soft woodwind.
    3.  **Oboe:** Nasal, piercing agility.
    4.  **Violin:** Virtuosic string voice.
*   **Ripieno (Full Orchestra):** Strings and Basso Continuo (Harpsichord/Cello).

## 5.3 Analysis of Movement 1 (Allegro)
*   **Form:** Ritornello Form.
*   **Texture:** Complex Polyphony. Bach weaves the soloists together in dense counterpoint.

## 5.4 Analysis of Movement 3 (Allegro Assai)
*   **Form:** Fugue.
*   **Interaction:** The subject is introduced by the Trumpet, then Oboe, then Violin, then Recorder. High virtuosity required for the natural trumpet.`,
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
        abcNotation: `X:565
T:Toccata and Fugue in D Minor
C:Johann Sebastian Bach(1685 - 1750)
%%score { ( 1 4 6 10 ) | ( 2 5 7 9 ) | ( 3 8 ) }
L:1/16
Q:1/4=25
M:4/4
I:linebreak $
K:F
U:s=!stemless!
V:1 treble nm="Organ"
V:4 treble 
V:6 treble 
V:10 treble 
V:2 bass 
V:5 bass 
V:7 bass 
V:9 bass 
V:3 bass 
V:8 bass 
V:1
"^Adagio" !fermata!Ma2 z/ g/4f/4e/4d/4^c/ d !fermata!z z2 !fermata!MA2 z/ E/F/^C/ D !fermata!z z2 |$ 
[I:staff +1] !fermata!MA,2[I:staff -1] z/[I:staff +1] G,/4F,/4E,/4D,/4^C,/ D,[I:staff -1] !fermata!z z2 (7:2:5z4 x12 B,4- ^C4- E4- |$ 
[CE]4[Q:1/4=20] D4[Q:1/4=20] z4 z2 z ^C |$ 
[Q:1/4=70]"^Prestissimo" (3DE^C (3DEC (3DEC DE (3FGE (3FGE (3FGE FG |$ 
[Q:1/4=65] (3ABG[Q:1/4=65] (3ABG[Q:1/4=65] (3ABG[Q:1/4=65] A !fermata!z[Q:1/4=65] z4 z2 z ^c |$ 
(3de^c (3dec (3dec de (3fge (3fge (3fge fg |$ 
[Q:1/4=65] (3abg[Q:1/4=65] (3abg[Q:1/4=65] (3abg[Q:1/4=65] a !fermata!z[Q:1/4=65] z4 z2 z a |$ 
(3gbe (3gbe (3fad (3fad (3egc (3egc (3dfB (3dfB |$ 
(3ceA (3ceA (3BdG (3BdG (3AcF (3AcF (3GBE (3GBE |$ 
(3FAD (3FAD[Q:1/4=65] (3EG^C[Q:1/4=65] (3EGC z4[Q:1/4=65] B4- |$ 
B4- B/A/G/F/E/ D/^C/=B,/ CA,C E/G/ TF2>[Q:1/4=40][Q:1/4=40]E2 |$ 
[Q:1/4=20] !fermata!F4[Q:1/4=20] z2 z[Q:1/4=20] A defd efge |$ fgaf gabg afge fde^c |$ 
dABG AFGE FDGE FDE^C |$[K:bass] DA,B,G, A,F,G,E, F,D,G,E, F,D,E,^C, |$ 
D,2[K:treble] x/ F/B/F/ x/ E/A/E/ x/ D/G/D/ x E/A/[Q:1/4=48] z [FB][Q:1/4=48] z [EA][Q:1/4=48] z [DG] |$ 
[Q:1/4=40] [EA]2[Q:1/4=40] x/ F/B/F/ x/ E/A/E/ x/ D/G/D/ x E/A/[Q:1/4=40] z [FB][Q:1/4=40] z [EA] z[Q:1/4=40] [DG] |$ 
[Q:1/4=40] A4-[Q:1/4=40] A/G/F/E/ D/^C/=B,/C/ A,/=B,/^C/D/ E/F/G/A/G/F/E/F/ D/F/ A/^c/ |$ 
d/ x/ x x/ e/f/4g/4a/ _b2[Q:1/4=48] z [fb][Q:1/4=48] z [ea][Q:1/4=48] z [dg][Q:1/4=48] [^cea]2[Q:1/4=48] x/ f/b/f/ |$ 
x/ e/a/e/ x/ d/g/d/ x e/a/[Q:1/4=48] z [fb][Q:1/4=48] z [ea][Q:1/4=48] z [dg][Q:1/4=48] [^cea]2[F=B]2 |$ 
^c2>[Q:1/4=48]=B2 A[Q:1/4=48]^c e/[Q:1/4=48]g/[Q:1/4=48]_b[Q:1/4=48] a/g/f/e/f/e/d/^c/ d/=c/_B/A/ G/F/E/D/ |$ 
e8[Q:1/4=75]"^Prestissimo" (3ce^c (3BcB (3cec (3BcB |$ 
(3^cec (3BcB (3cec (3BcB (3GBG (3EGE (3GBG (3EGE |$ 
(3GBG (3EGE (3GBG (3EGE (3^CEC (3B,CB, (3CEC (3B,CB, |$ 
(3^CEC (3B,CB, (3CEC (3B,CB, (3CEC (3EGE (3CEC (3EGE |$ 
(3^CEC (3EGE (3CEC (3EGE (3GBG (3BGB (3GBG (3BGB |$ 
[Q:1/4=72] (3^cBc[Q:1/4=72] (3ece[Q:1/4=72] (3cec[Q:1/4=72] (3ece[Q:1/4=72] [A^cea]4 [Adfa]4 | 
[Bdg]4 z4[Q:1/4=50] [A^ceg]4 z4 |$ 
[Q:1/4=48] z4[Q:1/4=48] z2[Q:1/4=48] z[Q:1/4=48] [A^c] [FAd]2[Q:1/4=48]F2 E4[Q:1/4=48] | 
[Q:1/4=30] D8 z8 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z8 z aga faea |$ 
da^ca daea faAa =Ba^ca |$ da^ca daea faea da=ca |$ Baca dgBg egdg cgBg |$ AgBg cfAf dfcf BfAf |$ 
GfAf BeGe ^ceBe AeGe |$ FeGe AdFd EeEe FdFd |$ B^cBc AdFd EeEe FdFd |$ z d^cd =Bd^cB c4 z4 |$ 
z d^cd fd^c=B c4 e4- |$ e2d2- d2^c2 =c4 _B4 |$ A4 A4 G4 G4 |$ ^F2 A4 _e2 d4 z2 g2- |$ 
g2^f2 g4 B2d2d2d2 |$ d2d2d2d2 d2d2d2d2 |$ dg=fg efde caga fgef |$ dbab gafg ec'bc' abga |$ 
f_edc dcBA BdBA GBGF |$ EFGA BdcB A4 c2B2 |$ A2G2A2B2 c2E2F2G2 |$ A2G2A2B2 cBAG F x x2 |$ 
dcBA G x x2 edcB A x x2 |$ fedc B x x2 gfed c x x2 |$ afef cfef afef cfef |$ 
gede cede gede cede |$ afef cfef afef cfef |$ gede cede gede cede |$ fgfe d x x2 x4 fafd |$ 
x4 fafd x4 egec |$ x4 egec x4 dfdB |$ x4 dfdB x3 x ^cecB |$ x3 x ^cecB z aga faea |$ 
da^ca daea faAa =Ba^ca |$ da^ca d2e2 d2=c2 B2A2 |$ 
BAG=F ED^C=B,[I:staff +1] A,[I:staff -1] x x2[I:staff +1] G,_B,G,E, |$ 
[I:staff -1] x4[I:staff +1] G,B,G,E,[I:staff -1] x4[I:staff +1] A,DA,F, |$ 
[I:staff -1] x4[I:staff +1] A,DA,F,[I:staff -1] x4[I:staff +1] G,B,G,E, |$ 
[I:staff -1] x4[I:staff +1] G,B,G,E,[I:staff -1] x4[I:staff +1] A,DA,F, |$ 
[I:staff -1] x4[I:staff +1] A,DA,F,[I:staff -1] x4[I:staff +1] B,^CB,G, |$ 
[I:staff -1] x4[I:staff +1] B,^CB,G,[I:staff -1] x4 DFD[I:staff +1]A, |$ 
[I:staff -1] x4 DFD[I:staff +1]A,[I:staff -1] x4[I:staff +1] B,^CB,G, |$ 
[I:staff -1] x4[I:staff +1] B,^CB,G,[I:staff -1] x4 DFD[I:staff +1]A, |$ 
[I:staff -1] x4 DFD[I:staff +1]A,[I:staff -1] x4 ^CECB, |$ x4 ^CECB, x4 DFD x |$ 
x[I:staff +1] DB,[I:staff -1] x2[I:staff +1] A,F,[I:staff -1] x2[I:staff +1] D,A,,[I:staff -1] x2[I:staff +1] D,^C,=B,, |$ 
[I:staff -1] x[I:staff +1] _B,A,G,[I:staff -1] x[I:staff +1] G,F,E,[I:staff -1] x[I:staff +1] B,A,G,[I:staff -1] x[I:staff +1] G,F,E, |$ 
[I:staff -1] x4 x FED A x3 z ed^c |$ d_e/d/=c/_B/A/G/ ^F2A2- A2G2c2=B2 |$ _e2d2e2=B2 c2B2c2d2 |$ 
_e2d2e2f2 !trill(!Tg8- |$ g16- |$ !trill)!g8- ggfg _efde |$ cf_ef decd _B_ede cdBc |$ 
Adcd BcAB GBAB cBAG |$ ^F2A2 dGc^F BGdA BGA^F |$ Gd^Fd GdAd BGdA BGcA |$ dcBA BABG ABcd _edcd |$ 
BcAB G2=B2 c_efg _agfg |$ _efde c2_B2 A2B2- B2A2- |$ A2G2- G2^F2 =F2_E2- E2DB |$ 
ABAG ^F_edc Bag^f g2>=f2 |$ _efde ^c4 d4 =c4 |$ B4 A2^c2 d2=e2 f4 |$ e8 d6 f2 |$ 
g2d2^c2d2 e2d2^c2d2 |$ e2d2^c2d2 e2g2f2e2 |$ B2e2d2d2 ^c4 d2e2 |$ f2e2f2^c2 d2c2d2e2 |$ 
f2e2f2g2 abga fgef |$ dA^cA dAeA fAeA fAgA |$ aAeA fAgA a4 z4 |$ z16 |$ z8 z ed^c d2 z f |$ 
efga baga f2e2 def_e |$ dcBA GABc A4 z2 c2- |$ c2B2 z2 g2 _efde cBAG |$ 
A4[I:staff +1] A,DA,G,[I:staff -1] x4[I:staff +1] A,DA,^F, |$ 
[I:staff -1] x4[I:staff +1] B,DB,A,[I:staff -1] x4[I:staff +1] B,DCB, |$ 
[I:staff -1] x4 C_ECB, x4 CECB, |$ x4 GBGD x4 GBGD |$ x4 ^FAF_E x4 FAFE |$ D2 z2 d2c2 B4 c2d2 |$ 
_e4 f2g2 a4 f2_e2 |$ d_edc BcBA GcBA GAG^F |$ G=F=ED ^C2E2 FGA=B ^cdef |$ g2fe d2^c2 d2e2f2g2 |$ 
a2^c2d2e2 f2e2f2d2 | e2d2d2^c2[Q:1/4=70] d2f2[Q:1/4=70] e4[Q:1/4=70] |$ 
[Q:1/4=40] !fermata!d8 z/[Q:1/4=75]"_Recitativo" f/g/a/ b/ x3/2 z/ c/d/_e/ f/ x3/2 |$ 
z/ A/B/c/ d/ x3/2 z/ G/A/B/ c/ x3/2 z/ F/G/A/ B/ x3/2 z/ C/D/_E/ F/ x3/2 |$ 
z/[I:staff +1] A,/B,/C/ D/[I:staff -1] x3/2 z/ B,/C/D/ _E/ x3/2 z/ C/D/=E/ ^F/ x3/2 z/[Q:1/4=60] ^F/G/A/ z/ c/[Q:1/4=60]d/G/ |$ 
[Q:1/4=52]"^Adagissimo" [B=e]8- [Be]4 d4- | d8 z8 |$ z4 z2 [=Bd]2 c8-[Q:1/4=20] | 
[Q:1/4=30] !fermata!c8 z/[Q:1/4=75]"^Presto" G/F/G/ E/ x3/2 z/ A/G/A/ F/ x3/2 |$ 
z/ =B/A/B/ G/ x3/2 z/ c/=B/c/ z/ d/c/d/ z/ e/d/e/ z/ f/e/f/ z/ g/e/g/ e/ x3/2 |$ 
z/ d/c/d/ =B/ x3/2 z/ c/=B/c/ A/ x3/2 z/ =B/A/B/ z/ A/=G/A/ z/ ^G/^F/G/ E/ x3/2 |$ 
z/ D/C/=B,/ z/ E/D/C/ z/ F/E/D/ z/ =G/F/E/ z/ A/G/F/ z/[Q:1/4=57] G/A/=B/[Q:1/4=35]"^Adagio" c4 |$ 
[Q:1/4=75]"^Vivace" ^c2 x2 c2c2 d2 x2 d2d2 |$ =B2 x3/2 x/4 x/4 =B2B2 c2 x2 c2c2 | 
A2 x2 A2A2 _B2 x2 B2B2 |$ B2 x2 B2B2 A2 x2 A2A2- |[Q:1/4=30]"^Molto adagio" A4 G8 =F4 | 
E8[Q:1/4=25] D8- | !fermata![A,D]16 |] 
V:2
[I:staff -1] !fermata!MA2[I:staff +1] z/[I:staff -1] G/4F/4E/4D/4^C/ D[I:staff +1] !fermata!z z2 !fermata!MA,2 z/ E,/F,/^C,/ D, !fermata!z z2 |$ 
!fermata!MA,,2 z/ G,,/4F,,/4E,,/4D,,/4^C,,/ D,, !fermata!z z2 (7:2:5z4 ^C,4- E,4- G,4- x12 |$ 
[E,G,-]4 G,E,^F,2 z4 z2 z ^C, |$ 
(3D,E,^C, (3D,E,C, (3D,E,C, D,E, (3F,G,E, (3F,G,E, (3F,G,E, F,G, |$ 
(3A,B,G, (3A,B,G, (3A,B,G, A, !fermata!z z4 z2 z[K:treble] ^C |$ 
(3DE^C (3DEC (3DEC DE (3FGE (3FGE (3FGE FG |$ (3ABG (3ABG (3ABG A !fermata!z z4 z2 z A |$ 
(3GBE (3GBE (3FAD (3FAD (3EGC (3EGC (3DFB, (3DFB, |$ 
[K:bass] (3CEA, (3CEA, (3B,DG, (3B,DG, (3A,CF, (3A,CF, (3G,B,E, (3G,B,E, |$ 
(3F,A,D, (3F,A,D, (3E,G,^C, (3E,G,C, z4 [G,B,]4- |$ [G,B,]4 z4 z8 |$ 
!fermata![F,A,]4 z4[K:treble] z/ AAAA AAAA/ |$ z/ AAAA AAAA AAAA AAAA/ |$ 
z/ AAAA AAAA AAAA AAAA/ |$ z/ AAAA AAAA AAAA AAAA/ |$ 
[K:bass] z2[I:staff -1] D/[I:staff +1] x x/[I:staff -1] =C/[I:staff +1] x3/2[I:staff -1] B,/[I:staff +1] x3/2 A,/[I:staff -1]^C/[I:staff +1] x[I:staff -1] D[I:staff +1] z A, z B, z |$ 
E,2[I:staff -1] D/[I:staff +1] x x/[I:staff -1] =C/[I:staff +1] x3/2[I:staff -1] B,/[I:staff +1] x3/2 A,/[I:staff -1]^C/[I:staff +1] x[I:staff -1] D[I:staff +1] z A, z B, z |$ 
E,4 z4 z8 |$ 
x/[I:staff -1] A/=B/^c/ d/[I:staff +1] x/ x x2[I:staff -1] d[I:staff +1] z[I:staff -1] A[I:staff +1] z[I:staff -1] _B[I:staff +1] z[I:staff -1] E2 d/[I:staff +1] x/ x |$ 
[I:staff -1] =c/[I:staff +1] x/ x[I:staff -1] B/[I:staff +1] x/ x[I:staff -1] A/^c/[I:staff +1] x[I:staff -1] d[I:staff +1] z[I:staff -1] A[I:staff +1] z[I:staff -1] B[I:staff +1] z[I:staff -1] E2[I:staff +1][=B,D]2 |$ 
E4 z4 z8 |$[K:treble] G8 (3EGE (3^CEC (3EGE (3CEC |$ 
(3EGE (3^CEC (3EGE (3CEC[K:bass] (3B,^CB, (3G,B,G, (3B,CB, (3G,B,G, |$ 
(3B,^CB, (3G,B,G, (3B,CB, (3G,B,G, (3E,G,E, (3^C,E,C, (3E,G,E, (3C,E,C, |$ 
(3E,G,E, (3^C,E,C, (3E,G,E, (3C,E,C, (3E,G,E, (3G,B,G, (3E,G,E, (3G,B,G, |$ 
(3E,G,E, (3G,B,G, (3E,G,E, (3G,B,G, (3E,G,E, (3G,E,G, (3B,^CB, (3CB,C |$ 
(3E^CE (3CEC (3ECE (3CEC A,4 A,4 | 
[I:staff -1] [DG]4[I:staff +1] z4[I:staff -1] [^CE]4[I:staff +1] z4 |$ 
z4 z2 z A, A,2A,2- A,2>G,2- | G,2F,E, F,4[K:treble]"^Fuga" z AGA FAEA |$ 
DA^CA DAEA FAA,A =B,A^CA |$ DA^CA DAEA F2^F2G2=C2 |$[K:bass] B,2A,2B,2C2 D2^F,2G,2A,2 |$ 
B,2A,2B,2^F,2 G,GG,G DGDG |$ C_ECE CECE CFCF CFCF |$ B,DB,D B,DB,D B,=EB,E B,EB,E |$ 
A,^CA,C A,CA,C F,DF,D F,DF,D |$ E,B,E,B, E,B,E,B, D,A,D,A, D,A,D,A, |$ 
E,G,E,G, E,G,E,G, A,2A,2A,2A,2 |$ A,2A,2A,2A,2 A,2A,2A,2A,2 |$ A,2A,2A,2A,2 A,4 D4 |$ 
D4 z4 C4 C4 |$ C4 z4 B,4 B,4 |$ B,4 z4 A,4 A,4 |$ A,4 z2 D2 ^C2C2D2D2 |$ E4 z2 D2 ^C2C2D2D2 |$ 
E4 z4 z8 |$[I:staff -1] F4 D4[I:staff +1] A,[I:staff -1]=AGA ^CGFE |$ 
[I:staff +1] z D^CD A,A,G,A, ^F,D^CD G,=F_ED |$ ^C=EA,C D,_ED=C =B,DG,B, C,DC_B, |$ 
A,C^F,A, D,CB,A,[K:treble] B,AG^F GB,A,G, |$ D4 z2[K:bass] D2 D2D2D2C2 |$ B,2D2D2C2 B,2D2D2C2 |$ 
B,4 z4 z8 |$ z16 |$ z16 |$ z8 z CB,C A,CG,C |$ F,CE,C F,CG,C A,CC,C D,CE,C |$ 
F,CE,C F,CG,C A,4 x[I:staff -1] _EDC |$ 
B,2[I:staff +1] x2 x[I:staff -1] F=ED C2[I:staff +1] x2 x[I:staff -1] GFE |$ 
D2[I:staff +1] x2 x[I:staff -1] AGF E2[I:staff +1] x2 x[I:staff -1] BAG |$ 
F2[I:staff +1] z2[I:staff -1] c2[I:staff +1] z2[I:staff -1] F2[I:staff +1] z2[I:staff -1] c2[I:staff +1] z2 |$ 
[I:staff -1] E2[I:staff +1] z2[I:staff -1] c2[I:staff +1] z2[I:staff -1] E2[I:staff +1] z2[I:staff -1] c2[I:staff +1] z2 |$ 
[I:staff -1] F2[I:staff +1] z2[I:staff -1] c2[I:staff +1] z2[I:staff -1] F2[I:staff +1] z2[I:staff -1] c2[I:staff +1] z2 |$ 
[I:staff -1] E2[I:staff +1] z2[I:staff -1] c2[I:staff +1] z2[I:staff -1] E2[I:staff +1] z2[I:staff -1] c2[I:staff +1] z2 |$ 
[I:staff -1] D2[I:staff +1] x3[I:staff -1] c=BA BGBd[I:staff +1] x4 |$ 
[I:staff -1] =BGBd[I:staff +1] x3 x[I:staff -1] _BGBc[I:staff +1] x4 |$ 
[I:staff -1] BGBc[I:staff +1] x4[I:staff -1] AFAc[I:staff +1] x4 |$ 
[I:staff -1] AFAc[I:staff +1] x4[I:staff -1] GEGB[I:staff +1] x4 |$ 
[I:staff -1] GEGB[I:staff +1] x4[K:treble][I:staff -1] A2[I:staff +1]^c2d2G2 |$ 
F2A2=B2^c2 d2c2d2e2 |$ f2e2f2[I:staff -1]^c2[I:staff +1] z ^FEF[K:bass] z D=CD |$ 
B,CB,A, G,=F,E,D, ^C,A,,C,E, x4 |$ ^C,A,,C,E, x4 D,A,,D,F, x4 |$ D,A,,D,F, x3 x ^C,A,,C,E, x4 |$ 
^C,A,,C,E, x4 D,A,,D,F, x4 |$ D,A,,D,F, x4 E,^C,E,G, x4 |$ E,^C,E,G, x4 F,D,F,A, x4 |$ 
F,D,F,A, x4 E,^C,E,G, x4 |$ E,^C,E,G, x4 F,D,F,A, x4 |$ F,D,F,A, x4 G,E,G,B, x4 |$ 
G,E,G,B, x4 A,F,A,^C x3 A, |$ B, x2 G,F, x2 D,A,, x2 F,,D,, x3 |$ ^C, x3 F, x3 D, x3 F, x3 |$ 
D,E,/F,/G,/A,/=B,/^C/ D x3[K:treble] A,=B,/^C/D/E/F/G/ AGFE |$ F2 z2 z _ED=C B,2=B,2C2G2 |$ 
!trill(!TG16- |$ !trill)!G8- GGFG _EGDG |$ CG=B,G CGDG _EGG,G A,G=B,G |$ 
CG=B,G CGDG _E2D2 G_AFG |$ _E2C2 FGEF D2_B,2 EFDE |$ C2^F2 GA=FG _EG^FG AGFE |$ 
[K:bass] z DCD B,DA,D G,D^F,D G,DA,D |$ B,DD,D E,D^F,D G,DF,D G,DA,D |$ B,2A,2 G,8 ^F,4 |$ 
G,2A,2 B,A,G,=F, _E,2_E2 D4 |$ C2D2 _EFDE CEDF GFEF |$ DB,_ED ^CA,D=C A,G,C_B, A,F,B,D |$ 
CDCB, A,CB,A, G,CB,A, B,CB,A, |$ G,A,F,G, =E,4 z _ED=C DCB,A, |$ G,4 A,B,A,G, =F,G,E,A, D,4 |$ 
[I:staff -1] GAGA BAGA FGEF D[I:staff +1]=CB,A, |$ B,A,G,F, E,F,E,D, ^C,A,,D,A,, E,A,,F,A,, |$ 
G,A,,F,A,, E,A,,D,A,, ^C,A,A,,A, D,A,F,D |$ G,DE,^C F,DD,D[K:treble] EAGA FAEA |$ 
DA^CA DAEA FAA,A =B,A^CA |$ DA^CA DAEA F2E2D2G2 |$ F2E2F2^C2 D2C2D2=B,2 |$ ^C2G2F2D2 ^C4 z4 |$ 
z16 |$ z8 z GFE F^CD2- |$ D4 ^C4 DA=B^c d2=c2 |$ F6[K:bass] _E2- ECA,F, A,CEC |$ 
DB,G,D, G,B,DG CDB,C A,G,^F,=E, |$ ^F,D,F,G, x4 F,D,F,G, x4 |$ G,D,G,A, x4 G,D,G,A, x4 |$ 
A,^F,A,B, x4 A,F,A,B, x4 |$ A,B,D^F x4 B,G,B,D x4 |$ CA,C_E x4 CA,CE x4 |$ 
^F,2 z2 G,2A,2 B,4 _E2=B,2 |$ G,4 C2_B,2 A,4 B,2C2 |$ DGF_E DEDC B,EDC B,CB,A, |$ 
B,A,G,F, =E,2G,2 A,=B,^CD[K:treble] EFGA |$ _B2AG FAEA DA^CA DAEA |$ FAA,A =B,A^CA DACA DA=B,A | 
^C2D2G2E2 F2A2B2A2 |$ 
[K:bass] !fermata!D8 x2 z/[I:staff -1] A/B/c/ d/[I:staff +1] x/ x z/[I:staff -1] F/G/A/ |$ 
B/[I:staff +1] x3/2 z/[I:staff -1] A/G/F/ _E/[I:staff +1] x3/2 z/[I:staff -1] G/F/_E/ D/[I:staff +1] x3/2 z/ A,/B,/C/ D/ x3/2 z/ F,/G,/A,/ |$ 
B,/ x3/2 z/ C/B,/A,/ G,/ x3/2 z/ D/C/B,/ A,/ x3/2 z/[I:staff -1] _E/D/C/ B,/[I:staff +1] x3/2 z G, |$ 
^C8- C4 D4 | =B,8 z8 |$ z4 z2 [^G,=B,]2 C8- | 
!fermata!C8 x2 z/[I:staff -1] E/D/E/ C/[I:staff +1] x/ x z/[I:staff -1] F/E/F/ |$ 
D/[I:staff +1] x3/2 z/[I:staff -1] G/F/G/ E/[I:staff +1] x3/2[I:staff -1] A/[I:staff +1] x3/2[I:staff -1] =B/[I:staff +1] x3/2[I:staff -1] c/[I:staff +1] x3/2[I:staff -1] d/[I:staff +1] x3/2 z/[I:staff -1] c/=B/c/ |$ 
A/[I:staff +1] x3/2 z/[I:staff -1] ^G/^F/G/ E/[I:staff +1] x3/2 z/[I:staff -1] =F/E/F/ D/[I:staff +1] x3/2[I:staff -1] C/[I:staff +1] x3/2[I:staff -1] =B,/[I:staff +1] x3/2 z/ C/=B,/A,/ |$ 
^G,/ x3/2 A,/ x3/2 =B,/ x3/2 C/ x3/2[I:staff -1] D/[I:staff +1] x3/2[I:staff -1] E/[I:staff +1] x3/2 z2 =G,2 |$ 
A,2 A,/[I:staff -1]^C/E/ A/[I:staff +1] z2 A,2 A,2 A,/[I:staff -1]D/F/ A/[I:staff +1] z2 A,2 |$ 
=B,2 G,/=B,/[I:staff -1]D/ G/[I:staff +1] z2 G,2 G,2 G,/[I:staff -1]C/E/ G/[I:staff +1] z2 G,2 | 
A,2 F,/A,/[I:staff -1]C/ F/[I:staff +1] z2 F,2 F,2 F,/_B,/[I:staff -1]E/ F/[I:staff +1] z2 F,2 |$ 
E,2 E,/G,/B,/[I:staff -1] ^C/[I:staff +1] z2 E,2 ^F,2 D,/A,/[I:staff -1]D/ ^F/[I:staff +1] z2 ^F,2 | 
G,8 B,4 A,4 | A,8 F,4 G,4 | !fermata!F,16 |] 
V:3
z16 |$ z8 D,,8- |$ D,,8 z8 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z8 D,,8- |$ D,,4 z4 z8 |$ 
!fermata!D,,4 z4 z8 |$ z16 |$ z16 |$ z16 |$ z8 z2 D,2C,2B,,2 |$ A,,2 z2 z4 z2 D,2C,2B,,2 |$ 
A,,4 z4 z8 |$ z4 z2 D,2 C,2B,,2A,,2 z2 |$ z4 z2 D,2 C,2B,,2A,,2^G,,2 |$ =G,,4 z4 z8 |$ G,8 z8 |$ 
z16 |$ z16 |$ z16 |$ z16 |$ z8 G,4 F,4 | B,6 A,G, A,2>E,2 F,D,E,^C, |$ 
D,=B,,^C,A,, _B,,^G,,A,,=G, F,2D,2 A,,4 | D,,8 z8 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ 
z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ 
z16 |$ z D,C,D, B,,D,A,,D, G,,D,^F,,D, G,,D,A,,D, |$ 
B,,D,D,,D, E,,D,^F,,D, G,,D,F,,D, G,,D,A,,D, |$ B,,4 z2 =B,,2 C,4 z2 ^C,2 |$ 
D,4 z2 D,2 E,4 z2 E,2 |$ F,2A,,2B,,2D,2 G,,4 z2 B,,2- |$ B,,2A,,2G,,2C,2 F,,4 z4 |$ z16 |$ z16 |$ 
z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ 
z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ 
z8 z G,=F,G, _E,G,D,G, |$ C,G,=B,,G, C,G,D,G, _E,G,G,,G, A,,G,=B,,G, |$ 
C,G,=B,,G, C,G,D,G, _E,2D,2C,2=B,,2 |$ C,2D,2_E,2F,2 G,2=B,,2C,2D,2 |$ 
_E,2D,2E,2F,2 G,2=B,,2C,2D,2 |$ _E,2=A,,2_B,,2C,2 D,2G,,2A,,2B,,2 |$ 
C,2D,2G,2D,2 _E,2B,,2A,,2C,2 |$ D,16- |$ D,16- |$ D,4 z2 G,,2 C,2A,,2D,2D,,2 |$ 
G,,4 z2 G,,2 C,6 =B,,2 |$ C,4 z4 z8 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ z16 |$ 
z16 |$ z16 |$ z16 |$ z8 z A,G,A, F,A,E,A, |$ D,A,^C,A, D,A,E,A, F,A,A,,A, =B,,A,^C,A, |$ 
D,A,^C,A, D,A,E,A, F,4 z2 F,2 |$ G,2E,2A,2A,,2 D,4 z2 A,,2 |$ B,,2G,,2C,2C,,2 F,,4 z2 A,,2 |$ 
B,,4 z2 B,,2 C,4 z2 A,,2 |$ D,4 z4 D,4 z4 |$ D,4 z4 D,4 z4 |$ D,4 z4 D,4 z4 |$ D,4 z4 D,4 z4 |$ 
D,4 z4 D,4 z4 |$ z D,C,D, _B,,D,A,,D, G,,G,=F,G, _E,G,D,G, |$ 
C,C,_B,,C, A,,C,G,,C, F,,F,_E,F, D,F,C,F, |$ B,,2_E,2F,2F,,2 G,,2C,2D,2D,,2 |$ 
G,,4 z A,,G,,A,, F,,2D,,2 A,,4 |$ D,,16- |$ D,,8 z4 z2 D,2 | A,,2F,,2G,,2A,,2 F,,2D,,2G,,2A,,2 |$ 
!fermata!B,,8 z8 |$ z16 |$ z16 |$ (^C,8 F,6) D,2 | ^G,,8 z ^G,=B,F, G,D,F,=B,, |$ 
D,^G,,A,,2 E,,12- | !fermata!E,,8 z8 |$ z16 |$ z16 |$ z8 z4 z2 E,2 |$ 
G,2 z2 z2 G,2 F,2 z2 z2 F,2 |$ F,2 z2 z2 F,2 E,2 z2 z2 E,2 | E,2 z2 z2 E,2 D,2 z2 z2 D,2 |$ 
^C,2 z2 z2 C,2 =C,2 z2 z2 C,2 | G,,4 B,,4 E,,4 F,,4 | A,,8 B,,4 G,,4 | !fermata![D,,D,]16 |]`,
        revisionNotes: `# Section 6: J.S. Bach and The Fugue

## 6.1 Focus Concept: The Fugue
A **Fugue** is a polyphonic composition based on one main theme, called a **Subject**. It is the most sophisticated form of Baroque counterpoint.

## 6.2 Structural Components of a Fugue
1.  **Exposition:** The opening section where each voice enters with the subject.
2.  **Subject:** The main theme presented in the Tonic key.
3.  **Answer:** The Subject repeated a 5th higher (Dominant key).
    *   **Real Answer:** Exact transposition.
    *   **Tonal Answer:** Adjusted slightly to stay in the key.
4.  **Countersubject:** The melodic line played by one voice while another plays the Answer.
5.  **Episode:** Transitional sections between subject entries. Uses **Sequences** to modulate. No complete Subject is heard.
6.  **Stretto:** Close succession of overlapping subject entries (like a canon).
7.  **Pedal Point:** A sustained bass note over which harmonies change.

## 6.3 Focus Work: Toccata and Fugue in D Minor (BWV 565)
*   **Instrument:** Pipe Organ.
*   **Style:** Stylus Phantasticus (Free, improvisatory style).
*   **Toccata:** Famous opening mordent; descending diminished 7th arpeggios (drama); massive chords.
*   **Fugue:** Subject is "violinistic" (rapid 16th notes); implied polyphony.`,
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
        revisionNotes: `# Section 7: George Frideric Handel and The Oratorio

## 7.1 Focus Work: Messiah ("Hallelujah Chorus")
*   **Composer:** George Frideric Handel (1685–1759).
*   **Genre:** Oratorio.
*   **Oratorio vs. Opera:** Oratorios are sacred, have no acting/costumes/scenery, and feature a larger role for the **Chorus**.

## 7.2 Analysis of "Hallelujah Chorus"
Handel uses three main textures for dramatic impact:
1.  **Homophony:** Block chords ("Hallelujah!").
2.  **Monophony:** Unison singing ("For the Lord God Omnipotent reigneth").
3.  **Polyphony:** Imitative entries ("And He shall reign for ever and ever").

*   **Key:** D Major (Key of glory and trumpets).
*   **Instrumentation:** Includes Trumpets and Timpani (festive occasions).
*   **Text Setting:** Syllabic (Hallelujah) and Melismatic (For ever).`,
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
C:Antony Leedale 
M:4/4
L:1/16
Q:1/4=92
K:Cm
%%score {1 | 2}
%%MIDI program 6
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
!mf! !mordent!c2de d2G2 c2e2 g2c'2 |
V:2
z4 z4 C,2E,2 G,2C2 |
%
% Measure 2
% RH: Sequence/Codetta.
% LH: Linear Walking Bass.
V:1
b2a2 g2f2 !staccato!e2 !staccato!d2 !staccato!c2 !staccato!=B2 |
V:2
G,2F,2 E,2D,2 C,2=B,,2 C,2D,2 |
%
% Measure 3
% LH: ANSWER (Subject transposed to Dominant Gm).
% Note: Adjusted to Bb (minor dominant) for stylistic accuracy.
% RH: COUNTER-SUBJECT.
V:1
e2g2 c'2e2 d2c2 B2A2 |
V:2
!mf! G,2A,B, A,2D,2 G,2B,2 d2g2 |
%
% Measure 4
% RH: Sequence and modulation back towards C.
V:1
G2f2 e2d2 c2=B2 c2d2 |
V:2
f2e2 d2c2 !staccato!=B,2 !staccato!A,2 !staccato!G,2 !staccato!F,2 |
%
% Measure 5
% Sequence with invertible counterpoint.
V:1
!f! !mordent!e2fg f2d2 g2a2 b2g2 |
V:2
E,2C,2 F,2A,2 G,2=B,2 G,2F,2 |
%
% Measure 6
V:1
c'2b2 a2g2 !staccato!f2 !staccato!e2 !staccato!d2 !staccato!c2 |
V:2
E,2C,2 F,2D,2 G,2A,2 =B,2G,2 |
%
% Measure 7
% RH: Compound Melody (Style Brise).
V:1
c'2a2 f2a2 =B2g2 d2g2 |
V:2
A,2C2 F,2E,2 D,2F,2 =B,2A,2 |
%
% Measure 8
V:1
c2f2 A2f2 !staccato!d2 !staccato!c2 !staccato!=B2 !staccato!A2 |
V:2
G,2=B,2 D2C2 =B,2A,2 G,2F,2 |
%
% Measure 9
% Modulation and crossing voices.
V:1
!mf! g2G2 c2=B2 c2d2 e2f2 |
V:2
E,2G,2 E,2D,2 C,2E,2 G,2A,2 |
%
% Measure 10
V:1
g2e2 c2G2 A2G2 F2E2 |
V:2
=B,2G,2 C2E2 F2C2 A,2C2 |
%
% Measure 11
% Pre-Cadential Tension.
V:1
F2A2 d2c2 =B2d2 g2f2 |
V:2
D,2F,2 A,2D2 G,2=B,2 D2G,2 |
%
% Measure 12
V:1
e2d2 c2=B2 c2d2 e2c2 |
V:2
C2=B,2 A,2G,2 ^F,2E,2 ^F,2D,2 |
%
% Measure 13
% CADENCE: Double Suspension.
V:1
!f! f2ed e2c2 !trill!d4 c2=B2 |
V:2
G,2=B,2 C2E2 F2D2 G2G,2 |
%
% Measure 14
V:1
c2G2 E2G2 c4 !trill!=B4 |
V:2
A,2=B,2 C2E,2 F,2D,2 G,2G,,2 |
%
% Measure 15
% Ending
V:1
!ff! c2G2 E2D2 C4 z4 |]
V:2
!staccato!C,4 !staccato!G,,4 !tenuto!C,4 z4 |]`,
        revisionNotes: `# Section 1: Historical Context & The Baroque Aesthetic

## 1.1 Defining the Baroque
The term "Baroque" (from Portuguese **barroco**, "irregularly shaped pearl") originally mocked the period's lack of Renaissance "rationality." In music, it signifies grandeur, energy, and emotional intensity. The era spans **1600** (birth of opera) to **1750** (death of Bach).

## 1.2 The Doctrine of Affections (Affektenlehre)
Music was seen as a tool to arouse specific emotional states (**affections**).
*   **Unity of Mood:** A single movement maintains one single affect throughout.
*   **Musical Symbols:** Descending chromatic scales represented grief (**Passus duriusculus**); arpeggios represented joy.

## 1.3 The Rise of the Professional Musician
Composers were craftsmen employed by:
1.  **The Church:** Producing cantatas/oratorios (e.g., Bach).
2.  **The Court:** Entertainment for royalty (e.g., Lully for Louis XIV).
3.  **The Opera House:** Commercial public theater (e.g., Handel).`,
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
        abcNotation: `X:1
T: Baroque Demonstration: Continuo and Contrast
C: Antony Leedale
M: 4/4
L: 1/8
Q: "Allegro" 1/4=90
K: Dm
%%score (V1) (V2) (V3)
V:1 name="Flute" snm="Fl" clef=treble
%%MIDI program 73
V:2 name="Harpsichord" snm="Hps" clef=treble
%%MIDI program 6
V:3 name="Basso Continuo" snm="B.C." clef=bass
%%MIDI program 42
V:1
"^Section A: Homophony" "Dm" !f! !staccato!d2 !staccato!f2 !staccato!a2 !staccato!d'2 | "A" !tenuto!^c'2 !staccato!a2 !staccato!e2 !staccato!A2 | "Dm" !p! d f "Dm/F" a d' "A" ^c' a "A/C#" e A | "Gm" !f! !staccato!B2 !staccato!d2 !staccato!g2 !staccato!b2 |
w: M1(Arp) \- \- \- | \- \- \- \- | M1(Dim) \- \- \- ^N(L) \- ^P \- | M1(Arp) \- \- \- |
"Gm" !p! B d "Gm/Bb" g b "C" a g "A/C#" f e | "Dm" !mf! !tenuto!f2 "A" !trill!e2 "Dm" !staccato!d4 | z8 | z8 ||
w: M1(Dim) \- \- \- ^P \- ^P \- | ^App(S) \- \- Res \- | | |
V:2
!f! [F2A2d2] [A2d2f2] [d2f2a2] [f2a2d'2] | [E2A2^c'2] [A2^c'2e2] [^c'2e2a2] [A2e2a2] | !p! !staccato![FAd] z !staccato![Adf] z !staccato![dfa] z !staccato![Ace] z | !f! [G2B2d2] [B2d2g2] [d2g2b2] [g2b2d'2] |
!p! !staccato![GBd] z !staccato![Bdg] z !staccato![ceg] z !staccato![A^ce] z | !mf! [A2d2f2] [G2^c2e2] [F4d4] | z8 | z8 ||
V:3
!f! !accent!D,2 !staccato!D2 !staccato!F,2 !staccato!F2 | !accent!A,2 !staccato!A2 !accent!^C,2 !staccato!^C2 | !p! D, D F, F A, A ^C, ^C | !f! !accent!G,2 !staccato!G2 !staccato!B,2 !staccato!B2 |
w: i \- \- \- | V \- V6 \- | i \- i6 \- V \- V6 | iv \- \- \- |
!p! G, G B, B C c A, A | !mf! !tenuto!D2 !tenuto!A,2 D,4 | z8 | z8 ||
w: iv \- iv6 \- VII \- V6 | i V i | | |
V:1
"^Section B: Polyphony (Fugato)" z4 "A" !mf! !staccato!A2 !staccato!^c2 | "Dm" !accent!d2 e2 !tenuto!f2 !staccato!d2 | "A" !accent!e2 ^c2 !staccato!A2 !staccato!G2 | "Dm" F2 D2 z4 |
w: Subject \- | \- ^P \- \- | \- \- \- ^P | (End) \- |
"Dm" !f! !staccato!A2 !staccato!d2 "A" !staccato!^c2 !staccato!A2 | "Gm" !staccato!B2 !staccato!G2 "A7" !staccato!E2 !staccato!^C2 | "Dm" !accent!D2 !staccato!F2 "A7" !staccato!E2 !staccato!D2 | "A" !tenuto!^C2 !staccato!A,2 z4 ||
w: C.S. \- \- \- | \- \- \- \- | Sequence \- ^P \- | (HC) \- |
V:2
z8 | z4 !mf! !staccato!A2 !staccato!^c2 | !accent!d2 e2 !tenuto!f2 !staccato!d2 | !accent!e2 ^c2 !staccato!A2 !staccato!G2 |
!f! !accent!F2 !staccato!A2 !staccato!E2 !staccato!A2 | !accent!D2 !staccato!B2 !staccato!G2 !staccato!E2 | !accent!F2 !staccato!A2 !staccato!G2 !staccato!F2 | !tenuto!E2 !staccato!^C2 !staccato!A2 !staccato!G2 ||
V:3
!mf! !staccato!D,2 !staccato!F,2 !staccato!A,2 !staccato!G,2 | !staccato!F,2 !staccato!D,2 !staccato!A,2 !staccato!G,2 | !staccato!F,2 !staccato!D,2 !staccato!F,2 !staccato!G,2 | !staccato!A,2 !staccato!^C,2 !staccato!E,2 !staccato!G,2 |
w: i \- V \- | i \- V \- | i \- i \- | V \- \- V4/2 |
!f! !accent!D,2 !staccato!F,2 !staccato!A,2 !staccato!^C,2 | !accent!B,,2 !staccato!D,2 !staccato!G,2 !staccato!B,2 | !accent!A,2 !staccato!F,2 !staccato!G,2 !staccato!A,2 | !accent!A,2 !staccato!A,,2 !staccato!^C,2 !staccato!E,2 ||
w: i \- V \- | iv \- iiø \- | i6/4 \- V7 \- | V \- V6/5 \- |
V:1
"^Section C: Ornamentation" "A" !f! !tenuto!a4 {/b}a2 g2 | "Dm" !p! !staccato!g2 !staccato!f2 z4 | "G" !mf! !tenuto!g4 {/a}g2 f2 | "C" !p! !staccato!f2 !staccato!e2 z4 |
w: \- ^App(Inc) \- | \- Res \- | \- ^App(Inc) \- | \- Res \- |
"A" !f! !accent!a2 "Am" g2 "Bb" f2 "Gm" e2 | "Dm" !staccato!d2 "A" !staccato!^c2 "Dm" !trill!d4 | "A7" e2 f2 {/g}f2 e2 | "Dm" !fermata!d8 |]
w: Seq(Desc) \- \- \- | \- ^N(L) Res | ^N \- ^App \- | (PAC) |
V:2
!f! [^c2e2a2] [c2e2a2] [^c2e2a2] [c2e2a2] | !p! [d2a2] [d2a2] z4 | !mf! [=B2d2g2] [B2d2g2] [B2d2g2] [B2d2g2] | !p! [c2g2] [c2g2] z4 |
!f! [^c2e2a2] [c2e2a2] [d2f2a2] [G2B2g2] | [F2A2f2] [E2G2e2] [F2A2d2] [G2B2d2] | [G2^c2e2] [A2d2f2] [A2d2] [G2^c2] | !fermata![F8A8d8] |]
V:3
!f! !accent!A,2 A,,2 A,2 A,,2 | !p! !staccato!D,2 !staccato!D,,2 z4 | !mf! !accent!G,2 G,,2 G,2 G,,2 | !p! !staccato!C,2 !staccato!C,,2 z4 |
w: V \- V \- | i \- \- | IV \- IV \- | VII \- \- |
!f! !accent!A,,2 !staccato!A,2 !staccato!B,2 !staccato!G,2 | !staccato!A,2 !staccato!A,,2 !staccato!B,,2 !staccato!G,,2 | !accent!A,,2 !staccato!D,2 !staccato!A,2 !staccato!A,,2 | !fermata!D,8 |]
w: V V VI iv | i V vi iv | V7 i V V7 | i |]`,
        revisionNotes: `# Section 2: Musical Language & Syntax

## 2.1 The Basso Continuo
The harmonic foundation of the era.
*   **Instrumentation:** Usually a **Bass instrument** (Cello/Bassoon) and a **Chordal instrument** (Harpsichord/Organ/Lute).
*   **Figured Bass:** Numbers below the bass staff indicating chords (e.g., 6 for first inversion).

## 2.2 Dynamics: The Terraced Effect
Abrupt shifts between loud (f) and soft (p) without gradual transitions, due to instrument limitations (Harpsichord/Organ).

## 2.3 Ornamentation
Melodies are decorated with **Trills** (starting on upper note), **Mordents**, **Turns**, and **Appoggiaturas** (dissonant leaning notes).

## 2.4 Texture
*   **Polyphony:** Independent melodic lines (fugues).
*   **Homophony:** Melody with chords (opera recitatives).`,
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
        revisionNotes: `# Section 8: Instruments of the Baroque (Deep Dive)

## 8.1 The Harpsichord (Cembalo)
Mechanism plucks strings (plectrum/quill). Metallic, sharp attack, quick decay. No dynamic variation by touch.

## 8.2 The Pipe Organ
Air directed through pipes. Sustained sound. Dynamics controlled by stops and manuals.

## 8.3 The Baroque Violin
Uses **Gut strings** (warmer, grittier) and a **Convex bow** (allows for natural swells and light articulation). Vibrato used sparingly as an ornament.

## 8.4 The Natural Trumpet
Long tube with no valves. Plays only notes of the **Harmonic Series**. Performers play in the high **Clarino** register to achieve melodic scales.`,
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
        revisionNotes: `# Section 9: Music Theory & Notation (ABC & MusGlyphs)

## 9.1 MusGlyphs Cheat Sheet
*   **q** = Quarter Note ♩ | **e** = Eighth Note ♪ | **s** = 16th Note ♬
*   **tre** = Treble Clef 𝄞 | **bass** = Bass Clef 𝄢
*   **#** = Sharp ♯ | **b** = Flat ♭ | **n** = Natural ♮

## 9.2 ABC Notation Rules
*   **Pitch:** C (Middle C), c (High C), C, (Low C).
*   **Length:** C (default), C2 (double), C/2 (half).
*   **Key:** K:G (Key of G).
*   **Rests:** z (e.g., z4 is a whole bar rest).`,
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
