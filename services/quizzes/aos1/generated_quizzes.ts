import { Quiz } from '../../../types';

// Auto-generated quizzes from raw_quizzes folder
// Generated with improved parsing logic

export const generatedQuiz1: Quiz = {
    id: 'aos01-50298331',
    title: "Concerto Grosso in D Major",
    abcNotation: `X:1
T:Concerto Grosso in D Major
C:AOS01_50298331
M:4/4
L:1/8
Q:"Allegro" 1/4=110
%%barnumbers 1
%%tempofont Wingdings 1
%%score (1 2) 3
K:D
V:1 name="Violino"
V:2 name="Cembalo RH"
V:3 name="Basso Continuo" clef=bass
% --- Ritornello Theme ---
[V:1] d2 d2 (f/e/d) (g/f/e) | f2 f2 a2 f2 | gfed cdef | d2 d2 d4 |
[V:2] z8 | d2 d2 (f/e/d) (g/f/e) | f2 f2 a2 f2 | gfed cdef |
[V:3] D,2 F,2 A,2 D,2 | D,2 F,2 A,2 D,2 | G,,2 B,,2 A,,2 G,,2 | D,2 A,,2 D,,4 |
% --- Solo Episode 1: Polyphonic Imitation ---
[V:1] f2 f2 (a/g/f) (b/a/g) | a2 a2 c'2 a2 | b2 g2 a2 f2 | gfed cBA2 |
[V:2] f2 f2 (a/g/f) (b/a/g) | a2 a2 c'2 a2 | b2 g2 a2 f2 | gfed cBA2 |
[V:3] D,2 D,2 D,2 D,2 | F,2 F,2 F,2 F,2 | G,2 E,2 F,2 D,2 | E,2 E,2 A,,4 |
% --- Modulating Sequence (Circle of Fifths) ---
[V:1] B2 G2 (A/G/F) E2 | A2 F2 (G/F/E) D2 | G2 E2 (F/E/D) C2 | d4 c4 |
[V:2] z2 G2 (A/G/F) E2 | A2 F2 (G/F/E) D2 | G2 E2 (F/E/D) C2 | B2 G2 A4 |
[V:3] G,2 G,,2 C,2 C,,2 | F,2 F,,2 B,,2 B,,,2 | E,2 E,,2 A,,2 A,,,2 | D,2 G,2 A,2 A,,2 |
% --- Final Ritornello (Ripieno) ---
[V:1] d2 d2 (f/e/d) (g/f/e) | f2 f2 a2 f2 | (g/f/e) d2 (c/d/e) d2 | d8 |]
[V:2] d2 d2 (f/e/d) (g/f/e) | f2 f2 a2 f2 | (g/f/e) d2 (c/d/e) d2 | d8 |]
[V:3] D,2 F,2 A,2 D,2 | D,2 F,2 A,2 D,2 | G,,2 B,,2 A,,2 A,,2 | D,8 |]`,
    questions: [
        {
            id: 'q1',
            text: "What is the Italian tempo marking for this piece?",
            options: [
                { id: 'a', text: "Adagio" },
                { id: 'b', text: "Moderato" },
                { id: 'c', text: "Allegro" },
                { id: 'd', text: "Presto" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q2',
            text: "What is the indicated beats per minute (BPM) for the quarter note?",
            options: [
                { id: 'a', text: "120" },
                { id: 'b', text: "110" },
                { id: 'c', text: "90" },
                { id: 'd', text: "105" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q3',
            text: "Based on the key signature, what is the primary key of this concerto?",
            options: [
                { id: 'a', text: "G Major" },
                { id: 'b', text: "A Major" },
                { id: 'c', text: "D Major" },
                { id: 'd', text: "Major" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q4',
            text: "Which Baroque group of instruments is represented by \"V3\" (Basso Continuo)?",
            options: [
                { id: 'a', text: "Concertino" },
                { id: 'b', text: "Ripieno" },
                { id: 'c', text: "oncertino" },
                { id: 'd', text: "Brass Fanfare" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q5',
            text: "In Bars 1–2, the Cembalo (V2) enters one bar after the Violino (V1) with the same melody. What is this texture called?",
            options: [
                { id: 'a', text: "Monophonic" },
                { id: 'b', text: "Homophonic" },
                { id: 'c', text: "Imitative Polyphony" },
                { id: 'd', text: "Heterophonic" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q6',
            text: "Which compositional device is used in V3 (Basso Continuo) during Bars 9–11?",
            options: [
                { id: 'a', text: "Pedal Note" },
                { id: 'b', text: "Circle of Fifths Sequence" },
                { id: 'c', text: "ircle of Fifths Sequence" },
                { id: 'd', text: "Inversion" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q7',
            text: "In Bar 3, the melody `gfed cdef` is best described as:",
            options: [
                { id: 'a', text: "Conjunct (Stepwise)" },
                { id: 'b', text: "Disjunct (Leaping)" },
                { id: 'c', text: "onjunct (Stepwise)" },
                { id: 'd', text: "isjunct (Leaping)" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q8',
            text: "What is the structure of this movement, characterized by the return of the main theme at the end?",
            options: [
                { id: 'a', text: "Sonata Form" },
                { id: 'b', text: "Binary Form" },
                { id: 'c', text: "Ritornello Form" },
                { id: 'd', text: "Variation Form" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q9',
            text: "What is the cadence found in Bars 15–16?",
            options: [
                { id: 'a', text: "Imperfect Cadence (I-V)" },
                { id: 'b', text: "Plagal Cadence (IV-I)" },
                { id: 'c', text: "adence (I-V)" },
                { id: 'd', text: "Perfect Cadence (V-I)" }
            ],
            correctAnswerId: 'd',
            explanation: ""
        },
        {
            id: 'q10',
            text: "What is the meter of the piece?",
            options: [
                { id: 'a', text: "Triple time (3/4)" },
                { id: 'b', text: "Simple Quadruple time (4/4)" },
                { id: 'c', text: "Compound Duple time (6/8)" },
                { id: 'd', text: "uple time (6/8)" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q11',
            text: "During Bars 5–8 (Solo Episode 1), which key does the music briefly modulate to?",
            options: [
                { id: 'a', text: "F# Minor" },
                { id: 'b', text: "G Major" },
                { id: 'c', text: "A Major (The Dominant)" },
                { id: 'd', text: "ominant)" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q12',
            text: "In a \"Concerto Grosso,\" what is the name for the small group of soloists?",
            options: [
                { id: 'a', text: "Concertino" },
                { id: 'b', text: "Tutti" },
                { id: 'c', text: "oncertino" },
                { id: 'd', text: "Continuo" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q13',
            text: "In Bar 3, the bass line moves in steady quavers. What is the specific term for this Baroque bass style?",
            options: [
                { id: 'a', text: "Alberti Bass" },
                { id: 'b', text: "ass" },
                { id: 'c', text: "Murky Bass" },
                { id: 'd', text: "Ostinato" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q14',
            text: "What is the purpose of the Cembalo (Harpsichord) in the Basso Continuo part?",
            options: [
                { id: 'a', text: "To play solo cadenzas only" },
                { id: 'b', text: "To fill in the harmony and provide rhythmic drive" },
                { id: 'c', text: "To double the flute melody" },
                { id: 'd', text: "To conduct the orchestra" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q15',
            text: "Look at Bar 10 in V1 and V2. How does the melody relate to Bar 9?",
            options: [
                { id: 'a', text: "It is an exact repetition" },
                { id: 'b', text: "It is a sequence (moved down by a step)" },
                { id: 'c', text: "It is the retrograde (played backwards)" },
                { id: 'd', text: "It is augmented (notes are twice as long)" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q16',
            text: "Which of the following best describes the rhythm of the opening theme?",
            options: [
                { id: 'a', text: "Syncopated and jazzy" },
                { id: 'b', text: "Dotted rhythms throughout" },
                { id: 'c', text: "Primarily quavers and semiquavers" },
                { id: 'd', text: "otted rhythms throughout" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q17',
            text: "What does the term \"Ripieno\" refer to in the context of this score?",
            options: [
                { id: 'a', text: "The solo violin" },
                { id: 'b', text: "The full orchestra / accompanying group" },
                { id: 'c', text: "The softest dynamic marking" },
                { id: 'd', text: "The concluding coda" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q18',
            text: "Which interval is formed by the first two notes of the Violino (V1) in Bar 1?",
            options: [
                { id: 'a', text: "A Major Third" },
                { id: 'b', text: "A Perfect Fifth" },
                { id: 'c', text: "A Perfect Unison" },
                { id: 'd', text: "An Octave" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q19',
            text: "Bars 13–16 represent the \"Final Ritornello.\" What is the main difference in texture compared to the solo episodes?",
            options: [
                { id: 'a', text: "It is thinner, with only one instrument playing" },
                { id: 'b', text: "It is a tutti section where the ripieno and soloists play together" },
                { id: 'c', text: "It is strictly monophonic" },
                { id: 'd', text: "It uses silences (rests) more frequently" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q20',
            text: "Which typical Baroque feature is NOT found in this score?",
            options: [
                { id: 'a', text: "Basso Continuo" },
                { id: 'b', text: "asso Continuo" },
                { id: 'c', text: "ontinuo" },
                { id: 'd', text: "Functional Harmony" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
    ]
};

export const generatedQuiz2: Quiz = {
    id: 'aos01-72274606',
    title: "AOS 1: Baroque Concerto - Skeleton Score",
    abcNotation: `X:1
T:AOS 1: Baroque Concerto - Skeleton Score
C:ID: AOS01_72274606
M:4/4
L:1/8
Q:"Allegro" 1/4=112
%%barnumbers 1
%%tempofont Wingdings 1
%%score { 1 | 2 | 3 }
V:1 name="Violin" snm="Vln."
V:2 name="Cembalo" snm="Cemb."
V:3 name="Basso Continuo" snm="B.C." clef=bass
K:D
% --- Ritornello Theme (Tutti) ---
[V:1] d2 f2 a2 d'2 | c'bag f2 e2 | b2 g2 a2 f2 | gfed c2 A2 |
[V:2] d2 f2 a2 d'2 | c'bag f2 e2 | b2 g2 a2 f2 | gfed c2 A2 |
[V:3] D2 D,2 D2 D,2 | A,2 A,,2 A,2 A,,2 | G,2 G,,2 F,2 F,,2 | E,2 E,,2 A,,2 A,2 |
% --- Episode 1 (Polyphonic Imitation) ---
[V:1] f2 ed e2 dc | d8 | z2 e2 dc d2 | cB c8 |
[V:2] z2 f2 ed e2 | dc d2 cB c2 | BA B2 AG A2 | GF G8 |
[V:3] D,2 A,,2 D,2 A,,2 | B,,2 F,,2 B,,2 F,,2 | G,,2 D,,2 G,,2 D,,2 | A,,2 E,,2 A,,2 G,,2 |
% --- Sequence and Harmonic Tension ---
[V:1] fgaf gbag | fgaf gbag | f2 d2 e2 c2 | d4 z4 |
[V:2] d2 f2 e2 g2 | d2 f2 e2 g2 | d2 B2 A2 G2 | F4 z4 |
[V:3] F,2 D,2 G,2 E,2 | F,2 D,2 G,2 E,2 | D,2 G,,2 A,,2 A,,2 | D,,4 z4 |
% --- Final Ritornello Fragment (Cadence) ---
[V:1] d2 f2 a2 d'2 | c'bag f2 e2 | f2 d2 e2 c2 | d8 |]
[V:2] d2 f2 a2 d'2 | c'bag f2 e2 | d2 B2 A2 G2 | F8 |]
[V:3] D2 D,2 D2 D,2 | A,2 A,,2 A,2 A,,2 | D,2 G,,2 A,,2 A,,2 | D,,8 |]`,
    questions: [
        {
            id: 'q1',
            text: "What is the Italian tempo marking indicated at the start of the score?",
            options: [
                { id: 'a', text: "Andante" },
                { id: 'b', text: "Allegro" },
                { id: 'c', text: "Vivace" },
                { id: 'd', text: "Presto" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q2',
            text: "What is the precise BPM (beats per minute) for a quarter note in this piece?",
            options: [
                { id: 'a', text: "120" },
                { id: 'b', text: "100" },
                { id: 'c', text: "112" },
                { id: 'd', text: "80" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q3',
            text: "In which key is this concerto written?",
            options: [
                { id: 'a', text: "G Major" },
                { id: 'b', text: "D Major" },
                { id: 'c', text: "A Major" },
                { id: 'd', text: "Major" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q4',
            text: "What is the texture of the music in Bars 1–4?",
            options: [
                { id: 'a', text: "Monophonic" },
                { id: 'b', text: "Homophonic (Melody in octaves/unison)" },
                { id: 'c', text: "Fugue" },
                { id: 'd', text: "Heterophonic" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q5',
            text: "Which compositional device is used between the Violin (V1) and Cembalo (V2) in Bars 5–6?",
            options: [
                { id: 'a', text: "Mirror Inversion" },
                { id: 'b', text: "Stretto" },
                { id: 'c', text: "Imitation" },
                { id: 'd', text: "Augmentation" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q6',
            text: "Identify the harmonic device used in the Violin 1 part during Bars 9–10.",
            options: [
                { id: 'a', text: "Melodic Sequence" },
                { id: 'b', text: "Pedal Point" },
                { id: 'c', text: "Inverted Turn" },
                { id: 'd', text: "Glissando" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q7',
            text: "Which term best describes the movement of the Basso Continuo (V3) in Bars 1–4?",
            options: [
                { id: 'a', text: "Static Bass" },
                { id: 'b', text: "ass" },
                { id: 'c', text: "Octave Disjunction (Walking Bass variant)" },
                { id: 'd', text: "isjunction (Walking Bass variant)" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q8',
            text: "What type of cadence occurs at Bar 4, where the phrase ends on an A major chord?",
            options: [
                { id: 'a', text: "Perfect Cadence" },
                { id: 'b', text: "Plagal Cadence" },
                { id: 'c', text: "adence" },
                { id: 'd', text: "Imperfect Cadence" }
            ],
            correctAnswerId: 'd',
            explanation: ""
        },
        {
            id: 'q9',
            text: "The instrument \"Cembalo\" is the Italian name for which Baroque instrument?",
            options: [
                { id: 'a', text: "Cello" },
                { id: 'b', text: "Lute" },
                { id: 'c', text: "ello" },
                { id: 'd', text: "Pipe Organ" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q10',
            text: "What is the specific rhythmic value of the notes in the Basso Continuo during Bars 1–8?",
            options: [
                { id: 'a', text: "Quarter notes" },
                { id: 'b', text: "Eighth notes" },
                { id: 'c', text: "Sixteenth notes" },
                { id: 'd', text: "Half notes" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q11',
            text: "In Bar 15, the Violin 1 plays the note C#. In the key of D Major, what is the harmonic function of this note?",
            options: [
                { id: 'a', text: "Tonic" },
                { id: 'b', text: "Subdominant" },
                { id: 'c', text: "Leading Tone" },
                { id: 'd', text: "Mediant" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q12',
            text: "Based on the structure (Ritornello -> Episode -> Sequence -> Ritornello), what form is this movement likely in?",
            options: [
                { id: 'a', text: "Sonata Form" },
                { id: 'b', text: "Binary Form" },
                { id: 'c', text: "Ritornello Form" },
                { id: 'd', text: "Theme and Variations" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q13',
            text: "What cadence is used to end the piece in Bars 15–16?",
            options: [
                { id: 'a', text: "Perfect Cadence (V-I)" },
                { id: 'b', text: "Imperfect Cadence (I-V)" },
                { id: 'c', text: "adence (V-I)" },
                { id: 'd', text: "Phrygian Cadence" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q14',
            text: "What is the time signature of this piece?",
            options: [
                { id: 'a', text: "3/4 (Simple Triple)" },
                { id: 'b', text: "4/4 (Simple Quadruple)" },
                { id: 'c', text: "6/8 (Compound Duple)" },
                { id: 'd', text: "uple)" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q15',
            text: "In Bar 2, the melody in the Violin 1 moves primarily by:",
            options: [
                { id: 'a', text: "Large leaps (Disjunct)" },
                { id: 'b', text: "Stepwise motion (Scalic/Conjunct)" },
                { id: 'c', text: "onjunct)" },
                { id: 'd', text: "isjunct)" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q16',
            text: "Which of the following is a characteristic Baroque feature found in the Basso Continuo part?",
            options: [
                { id: 'a', text: "Chromaticism" },
                { id: 'b', text: "Functional diatonic harmony supporting the upper voices" },
                { id: 'c', text: "hromaticism" },
                { id: 'd', text: "Extensive rubato" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q17',
            text: "Look at Bar 7. What is the relationship between the Violin 1 and the Cembalo?",
            options: [
                { id: 'a', text: "They are in unison" },
                { id: 'b', text: "They are playing in a polyphonic/contrapuntal relationship" },
                { id: 'c', text: "They are playing a slow chorale melody" },
                { id: 'd', text: "Only the Violin is playing" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q18',
            text: "How many sharps are in the key signature of this piece?",
            options: [
                { id: 'a', text: "One (F#)" },
                { id: 'b', text: "Two (F# and C#)" },
                { id: 'c', text: "#)" },
                { id: 'd', text: "Zero" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q19',
            text: "Which instrument would most likely join the Cembalo to perform the \"Basso Continuo\" part in a live performance?",
            options: [
                { id: 'a', text: "Flute" },
                { id: 'b', text: "Trumpet" },
                { id: 'c', text: "Cello" },
                { id: 'd', text: "Viola" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q20',
            text: "Although not written in the score, what performance practice would a Baroque violinist likely add to the C# in Bar 15?",
            options: [
                { id: 'a', text: "A trill (ornamentation)" },
                { id: 'b', text: "Heavy vibrato" },
                { id: 'c', text: "A glissando to the next note" },
                { id: 'd', text: "A pizzicato effect" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
    ]
};

export const generatedQuiz3: Quiz = {
    id: 'aos01-72274606',
    title: "AOS 1: Baroque Concerto - Skeleton Score",
    abcNotation: `X:1
T:AOS 1: Baroque Concerto - Skeleton Score
C:ID: AOS01_72274606
M:4/4
L:1/8
Q:"Allegro" 1/4=112
%%barnumbers 1
%%tempofont Wingdings 1
%%score { 1 | 2 | 3 }
V:1 name="Violin" snm="Vln."
V:2 name="Cembalo" snm="Cemb."
V:3 name="Basso Continuo" snm="B.C." clef=bass
K:D
% --- Ritornello Theme (Tutti) ---
[V:1] d2 f2 a2 d'2 | c'bag f2 e2 | b2 g2 a2 f2 | gfed c2 A2 |
[V:2] d2 f2 a2 d'2 | c'bag f2 e2 | b2 g2 a2 f2 | gfed c2 A2 |
[V:3] D2 D,2 D2 D,2 | A,2 A,,2 A,2 A,,2 | G,2 G,,2 F,2 F,,2 | E,2 E,,2 A,,2 A,2 |
% --- Episode 1 (Polyphonic Imitation) ---
[V:1] f2 ed e2 dc | d8 | z2 e2 dc d2 | cB c8 |
[V:2] z2 f2 ed e2 | dc d2 cB c2 | BA B2 AG A2 | GF G8 |
[V:3] D,2 A,,2 D,2 A,,2 | B,,2 F,,2 B,,2 F,,2 | G,,2 D,,2 G,,2 D,,2 | A,,2 E,,2 A,,2 G,,2 |
% --- Sequence and Harmonic Tension ---
[V:1] fgaf gbag | fgaf gbag | f2 d2 e2 c2 | d4 z4 |
[V:2] d2 f2 e2 g2 | d2 f2 e2 g2 | d2 B2 A2 G2 | F4 z4 |
[V:3] F,2 D,2 G,2 E,2 | F,2 D,2 G,2 E,2 | D,2 G,,2 A,,2 A,,2 | D,,4 z4 |
% --- Final Ritornello Fragment (Cadence) ---
[V:1] d2 f2 a2 d'2 | c'bag f2 e2 | f2 d2 e2 c2 | d8 |]
[V:2] d2 f2 a2 d'2 | c'bag f2 e2 | d2 B2 A2 G2 | F8 |]
[V:3] D2 D,2 D2 D,2 | A,2 A,,2 A,2 A,,2 | D,2 G,,2 A,,2 A,,2 | D,,8 |]`,
    questions: [
        {
            id: 'q1',
            text: "What is the Italian tempo marking indicated at the start of the score?",
            options: [
                { id: 'a', text: "Andante" },
                { id: 'b', text: "Allegro" },
                { id: 'c', text: "Vivace" },
                { id: 'd', text: "Presto" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q2',
            text: "What is the precise BPM (beats per minute) for a quarter note in this piece?",
            options: [
                { id: 'a', text: "120" },
                { id: 'b', text: "100" },
                { id: 'c', text: "112" },
                { id: 'd', text: "80" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q3',
            text: "In which key is this concerto written?",
            options: [
                { id: 'a', text: "G Major" },
                { id: 'b', text: "D Major" },
                { id: 'c', text: "A Major" },
                { id: 'd', text: "Major" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q4',
            text: "What is the texture of the music in Bars 1–4?",
            options: [
                { id: 'a', text: "Monophonic" },
                { id: 'b', text: "Homophonic (Melody in octaves/unison)" },
                { id: 'c', text: "Fugue" },
                { id: 'd', text: "Heterophonic" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q5',
            text: "Which compositional device is used between the Violin (V1) and Cembalo (V2) in Bars 5–6?",
            options: [
                { id: 'a', text: "Mirror Inversion" },
                { id: 'b', text: "Stretto" },
                { id: 'c', text: "Imitation" },
                { id: 'd', text: "Augmentation" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q6',
            text: "Identify the harmonic device used in the Violin 1 part during Bars 9–10.",
            options: [
                { id: 'a', text: "Melodic Sequence" },
                { id: 'b', text: "Pedal Point" },
                { id: 'c', text: "Inverted Turn" },
                { id: 'd', text: "Glissando" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q7',
            text: "Which term best describes the movement of the Basso Continuo (V3) in Bars 1–4?",
            options: [
                { id: 'a', text: "Static Bass" },
                { id: 'b', text: "ass" },
                { id: 'c', text: "Octave Disjunction (Walking Bass variant)" },
                { id: 'd', text: "isjunction (Walking Bass variant)" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q8',
            text: "What type of cadence occurs at Bar 4, where the phrase ends on an A major chord?",
            options: [
                { id: 'a', text: "Perfect Cadence" },
                { id: 'b', text: "Plagal Cadence" },
                { id: 'c', text: "adence" },
                { id: 'd', text: "Imperfect Cadence" }
            ],
            correctAnswerId: 'd',
            explanation: ""
        },
        {
            id: 'q9',
            text: "The instrument \"Cembalo\" is the Italian name for which Baroque instrument?",
            options: [
                { id: 'a', text: "Cello" },
                { id: 'b', text: "Lute" },
                { id: 'c', text: "ello" },
                { id: 'd', text: "Pipe Organ" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q10',
            text: "What is the specific rhythmic value of the notes in the Basso Continuo during Bars 1–8?",
            options: [
                { id: 'a', text: "Quarter notes" },
                { id: 'b', text: "Eighth notes" },
                { id: 'c', text: "Sixteenth notes" },
                { id: 'd', text: "Half notes" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q11',
            text: "In Bar 15, the Violin 1 plays the note C#. In the key of D Major, what is the harmonic function of this note?",
            options: [
                { id: 'a', text: "Tonic" },
                { id: 'b', text: "Subdominant" },
                { id: 'c', text: "Leading Tone" },
                { id: 'd', text: "Mediant" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q12',
            text: "Based on the structure (Ritornello -> Episode -> Sequence -> Ritornello), what form is this movement likely in?",
            options: [
                { id: 'a', text: "Sonata Form" },
                { id: 'b', text: "Binary Form" },
                { id: 'c', text: "Ritornello Form" },
                { id: 'd', text: "Theme and Variations" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q13',
            text: "What cadence is used to end the piece in Bars 15–16?",
            options: [
                { id: 'a', text: "Perfect Cadence (V-I)" },
                { id: 'b', text: "Imperfect Cadence (I-V)" },
                { id: 'c', text: "adence (V-I)" },
                { id: 'd', text: "Phrygian Cadence" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q14',
            text: "What is the time signature of this piece?",
            options: [
                { id: 'a', text: "3/4 (Simple Triple)" },
                { id: 'b', text: "4/4 (Simple Quadruple)" },
                { id: 'c', text: "6/8 (Compound Duple)" },
                { id: 'd', text: "uple)" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q15',
            text: "In Bar 2, the melody in the Violin 1 moves primarily by:",
            options: [
                { id: 'a', text: "Large leaps (Disjunct)" },
                { id: 'b', text: "Stepwise motion (Scalic/Conjunct)" },
                { id: 'c', text: "onjunct)" },
                { id: 'd', text: "isjunct)" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q16',
            text: "Which of the following is a characteristic Baroque feature found in the Basso Continuo part?",
            options: [
                { id: 'a', text: "Chromaticism" },
                { id: 'b', text: "Functional diatonic harmony supporting the upper voices" },
                { id: 'c', text: "hromaticism" },
                { id: 'd', text: "Extensive rubato" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q17',
            text: "Look at Bar 7. What is the relationship between the Violin 1 and the Cembalo?",
            options: [
                { id: 'a', text: "They are in unison" },
                { id: 'b', text: "They are playing in a polyphonic/contrapuntal relationship" },
                { id: 'c', text: "They are playing a slow chorale melody" },
                { id: 'd', text: "Only the Violin is playing" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q18',
            text: "How many sharps are in the key signature of this piece?",
            options: [
                { id: 'a', text: "One (F#)" },
                { id: 'b', text: "Two (F# and C#)" },
                { id: 'c', text: "#)" },
                { id: 'd', text: "Zero" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q19',
            text: "Which instrument would most likely join the Cembalo to perform the \"Basso Continuo\" part in a live performance?",
            options: [
                { id: 'a', text: "Flute" },
                { id: 'b', text: "Trumpet" },
                { id: 'c', text: "Cello" },
                { id: 'd', text: "Viola" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q20',
            text: "Although not written in the score, what performance practice would a Baroque violinist likely add to the C# in Bar 15?",
            options: [
                { id: 'a', text: "A trill (ornamentation)" },
                { id: 'b', text: "Heavy vibrato" },
                { id: 'c', text: "A glissando to the next note" },
                { id: 'd', text: "A pizzicato effect" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
    ]
};

export const generatedQuiz4: Quiz = {
    id: 'aos01-79421311',
    title: "Baroque Ritornello for Violin and Basso Continuo",
    abcNotation: `X:1
T:Baroque Ritornello for Violin and Basso Continuo
C:AOS 1: Baroque Music | ID: AOS01_79421311
M:4/4
L:1/16
Q:"Allegro" 1/4=110
%%tempofont Wingdings 1
%%barnumbers 1
%%score { 1 | 2 }
V:1 name="Violin" snm="Vln."
V:2 name="Harpsichord" snm="Hps." clef=bass
K:G
% --- Ritornello Theme: Motor Rhythm and Triadic Melody ---
[V:1] G4 D2G2 B4 G2B2 | d2B2d2g2 e2c2e2g2 | f2d2f2a2 g2d2B2G2 | A2D2F2A2 G4 z4 |
[V:2] G,4 G,,4 G,4 G,,4 | B,,4 G,,4 C,4 C,,4 | D,4 D,,4 G,4 B,,4 | D,4 D,,4 G,,4 z4 |
w: 5 _ _ _ 6 _ 5 _ 6 _ 5 _ 4 3 5
%
% --- Fortspinnung: Sequential Modulation ---
[V:1] d2B2d2g2 d2B2d2g2 | c2A2c2e2 c2A2c2e2 | B2G2B2d2 B2G2B2d2 | A2F2D2F2 G4 z4 |
[V:2] G,4 G,,4 G,4 G,,4 | F,4 F,,4 F,4 F,,4 | E,4 E,,4 E,4 E,,4 | D,4 D,,4 G,,4 z4 |
w: 5 _ _ _ 5 _ _ _ 5 _ _ _ 4 3 5
%
% --- Polyphonic Cadence: Imitative Figures ---
[V:1] G2D2G2B2 d2B2d2g2 | e2c2A2F2 G2B2D2F2 | G2D2G2B2 d2B2d2g2 | e2c2A2F2 G4 z4 |]
[V:2] G,4 B,,4 G,,4 B,,4 | C,4 D,4 B,,4 D,4 | G,4 B,,4 G,,4 B,,4 | C,4 D,4 G,,4 z4 |]
w: 5 6 5 6 6 4 3 5 6 5 6 6 4 3 5`,
    questions: [
        {
            id: 'q1',
            text: "What is the Italian tempo marking for this piece?",
            options: [
                { id: 'a', text: "Adagio" },
                { id: 'b', text: "Moderato" },
                { id: 'c', text: "Allegro" },
                { id: 'd', text: "Presto" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q2',
            text: "What is the specific BPM (beats per minute) indicated in the score?",
            options: [
                { id: 'a', text: "120" },
                { id: 'b', text: "110" },
                { id: 'c', text: "100" },
                { id: 'd', text: "90" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q3',
            text: "What is the time signature of the extract?",
            options: [
                { id: 'a', text: "2/4" },
                { id: 'b', text: "3/4" },
                { id: 'c', text: "4/4" },
                { id: 'd', text: "6/8" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q4',
            text: "Identify the key of the piece.",
            options: [
                { id: 'a', text: "C Major" },
                { id: 'b', text: "G Major" },
                { id: 'c', text: "Major" },
                { id: 'd', text: "Major" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q5',
            text: "Which term best describes the combination of the Harpsichord and the Bass line (V:2)?",
            options: [
                { id: 'a', text: "Basso Ostinato" },
                { id: 'b', text: "asso Ostinato" },
                { id: 'c', text: "ontinuo" },
                { id: 'd', text: "Ground Bass" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q6',
            text: "Which rhythmic feature is most prominent in the Violin part throughout the piece?",
            options: [
                { id: 'a', text: "Syncopation" },
                { id: 'b', text: "Dotted rhythms" },
                { id: 'c', text: "Motor rhythm (continuous semiquavers)" },
                { id: 'd', text: "otted rhythms" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q7',
            text: "In Bars 1-2, the melody is primarily constructed using which technique?",
            options: [
                { id: 'a', text: "Chromatic scales" },
                { id: 'b', text: "Stepwise auxiliary notes" },
                { id: 'c', text: "hromatic scales" },
                { id: 'd', text: "Pentatonic shapes" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q8',
            text: "Look at Bars 5-7. What compositional device is being used here?",
            options: [
                { id: 'a', text: "Pedal point" },
                { id: 'b', text: "Inversion" },
                { id: 'c', text: "Sequence" },
                { id: 'd', text: "Augmentation" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q9',
            text: "Regarding the device in Bars 5-7, which direction does the melody move?",
            options: [
                { id: 'a', text: "Ascending" },
                { id: 'b', text: "Descending" },
                { id: 'c', text: "Static" },
                { id: 'd', text: "escending" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q10',
            text: "What do the numbers \"4 3\" in the figured bass (e.g., Bar 4 and Bar 8) indicate?",
            options: [
                { id: 'a', text: "A 4-3 suspension" },
                { id: 'b', text: "A change to 4/3 time" },
                { id: 'c', text: "A chord of the 4th and 3rd" },
                { id: 'd', text: "A triplet rhythm" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q11',
            text: "What is the overall texture of this piece?",
            options: [
                { id: 'a', text: "Monophonic" },
                { id: 'b', text: "Heterophonic" },
                { id: 'c', text: "Melody and Accompaniment" },
                { id: 'd', text: "Strictly Fugue" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q12',
            text: "In the Figured Bass, what does the number \"6\" indicate?",
            options: [
                { id: 'a', text: "A chord in Root Position" },
                { id: 'b', text: "A chord in First Inversion" },
                { id: 'c', text: "A chord in Second Inversion" },
                { id: 'd', text: "A dominant 7th chord" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q13',
            text: "Which cadence is used to conclude the phrase at Bar 4?",
            options: [
                { id: 'a', text: "Imperfect (I-V)" },
                { id: 'b', text: "Plagal (IV-I)" },
                { id: 'c', text: "Interrupted (V-VI)" },
                { id: 'd', text: "Perfect (V-I)" }
            ],
            correctAnswerId: 'd',
            explanation: ""
        },
        {
            id: 'q14',
            text: "What is the role of the Harpsichordist when reading the \"w:\" line (figures)?",
            options: [
                { id: 'a', text: "To play only the written bass notes" },
                { id: 'b', text: "To improvise a melody above the violin" },
                { id: 'c', text: "To \"realize\" the chords based on the figures" },
                { id: 'd', text: "To change the tempo of the piece" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q15',
            text: "The \"Fortspinnung\" section (Bars 5-8) is characterized by:",
            options: [
                { id: 'a', text: "Introducing a completely new, slow theme" },
                { id: 'b', text: "\"Spinning out\" the initial motif through development and sequence" },
                { id: 'c', text: "A sudden change to a minor key" },
                { id: 'd', text: "Silencing the violin" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q16',
            text: "How would you describe the tonality of the piece?",
            options: [
                { id: 'a', text: "Atonal" },
                { id: 'b', text: "Bitonal" },
                { id: 'c', text: "Diatonic and functional" },
                { id: 'd', text: "iatonic and functional" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q17',
            text: "The interval between the Violin (Bar 1, Note 1) and the Bass (Bar 1, Note 1) is:",
            options: [
                { id: 'a', text: "A Perfect 5th" },
                { id: 'b', text: "An Octave" },
                { id: 'c', text: "A Major 3rd" },
                { id: 'd', text: "Two Octaves" }
            ],
            correctAnswerId: 'd',
            explanation: ""
        },
        {
            id: 'q18',
            text: "Which Baroque composer is most associated with this style of Ritornello writing?",
            options: [
                { id: 'a', text: "Vivaldi" },
                { id: 'b', text: "Chopin" },
                { id: 'c', text: "hopin" },
                { id: 'd', text: "Debussy" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q19',
            text: "What harmonic relationship is established between the bass notes in the final cadence (Bar 12)?",
            options: [
                { id: 'a', text: "Stepwise (G to A)" },
                { id: 'b', text: "Dominant to Tonic (D to G)" },
                { id: 'c', text: "Subdominant to Tonic (C to G)" },
                { id: 'd', text: "ominant to Tonic (D to G)" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q20',
            text: "The texture is often described as \"polarized\" in Baroque music because:",
            options: [
                { id: 'a', text: "There is a wide gap between the high violin and the low bass line" },
                { id: 'b', text: "Both instruments play in the same register" },
                { id: 'c', text: "The instruments play in different keys" },
                { id: 'd', text: "The piece uses electronic effects" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
    ]
};

export const generatedQuiz5: Quiz = {
    id: 'aos01-36284413',
    title: "Ritornello in G Major",
    abcNotation: `X:1
T:Ritornello in G Major
C:AOS01_36284413
M:4/4
L:1/8
Q: "Allegro" 1/4=120
%%tempofont Wingdings 1
%%barnumbers 1
%%score { (V:1 | V:2) | V:3 }
V:1 name="Violin I" snm="Vln.1"
V:2 name="Violin II" snm="Vln.2"
V:3 name="Basso Continuo" snm="B.C." clef=bass
K:G
[V:1] G2 BG d2 BG | e2 cA f2 dB | gdBG cAFD | G2 G2 G4 |]
[V:2] z4 G2 BG | c2 AF d2 BG | BAGF EFGA | B2 A2 G4 |]
[V:3] G,2 G,2 G,2 G,2 | C2 C2 D2 D2 | G,B,DG A,CFA, | G,2 D,2 G,4 |]`,
    questions: [
        {
            id: 'q1',
            text: "What is the Italian tempo marking for this piece?",
            options: [
                { id: 'a', text: "Andante" },
                { id: 'b', text: "Allegro" },
                { id: 'c', text: "Adagio" },
                { id: 'd', text: "Presto" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q2',
            text: "What is the BPM (beats per minute) as indicated in the score?",
            options: [
                { id: 'a', text: "60" },
                { id: 'b', text: "100" },
                { id: 'c', text: "120" },
                { id: 'd', text: "140" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q3',
            text: "In which key is this Ritornello composed?",
            options: [
                { id: 'a', text: "C Major" },
                { id: 'b', text: "D Major" },
                { id: 'c', text: "Major" },
                { id: 'd', text: "Major" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q4',
            text: "What is the time signature of the piece?",
            options: [
                { id: 'a', text: "2/4" },
                { id: 'b', text: "3/4" },
                { id: 'c', text: "4/4" },
                { id: 'd', text: "6/8" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q5',
            text: "Which of the following best describes the texture of the music when Violin II enters in Bar 1?",
            options: [
                { id: 'a', text: "Monophonic" },
                { id: 'b', text: "Homophonic" },
                { id: 'c', text: "Polyphonic (Imitative)" },
                { id: 'd', text: "Heterophonic" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q6',
            text: "Look at the Basso Continuo part in Bar 1. What harmonic device is being used?",
            options: [
                { id: 'a', text: "Chromaticism" },
                { id: 'b', text: "Tonic Pedal" },
                { id: 'c', text: "hromaticism" },
                { id: 'd', text: "Ground Bass" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q7',
            text: "Which instruments would typically perform the \"Basso Continuo\" part in this period?",
            options: [
                { id: 'a', text: "Flute and Harp" },
                { id: 'b', text: "Cello and Harpsichord" },
                { id: 'c', text: "ello and Harpsichord" },
                { id: 'd', text: "Trumpet and Timpani" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q8',
            text: "In Bar 2, Violin I plays the notes `e2 cA f2 dB`. What melodic device is demonstrated here?",
            options: [
                { id: 'a', text: "Inversion" },
                { id: 'b', text: "Sequence" },
                { id: 'c', text: "Ornamentation" },
                { id: 'd', text: "Retrograde" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q9',
            text: "How many beats of rest (in 4/4 time) does Violin II have before its first entry in Bar 1?",
            options: [
                { id: 'a', text: "1 beat" },
                { id: 'b', text: "2 beats" },
                { id: 'c', text: "3 beats" },
                { id: 'd', text: "4 beats" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q10',
            text: "Which note value provides the \"motor rhythm\" feel in the Basso Continuo in Bar 3?",
            options: [
                { id: 'a', text: "Crotchet" },
                { id: 'b', text: "Quaver" },
                { id: 'c', text: "rotchet" },
                { id: 'd', text: "Minim" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q11',
            text: "Identify the cadence used to end the piece in Bar 4.",
            options: [
                { id: 'a', text: "Imperfect Cadence (I-V)" },
                { id: 'b', text: "Plagal Cadence (IV-I)" },
                { id: 'c', text: "adence (I-V)" },
                { id: 'd', text: "Perfect Cadence (V-I)" }
            ],
            correctAnswerId: 'd',
            explanation: ""
        },
        {
            id: 'q12',
            text: "In Bar 3, the first half of the Basso Continuo part outlines which chord?",
            options: [
                { id: 'a', text: "A chromatic scale" },
                { id: 'b', text: "A G Major arpeggio" },
                { id: 'c', text: "A D7 chord" },
                { id: 'd', text: "7 chord" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q13',
            text: "Which Baroque characteristic is most evident in the rhythmic feel of the Basso Continuo?",
            options: [
                { id: 'a', text: "Syncopation" },
                { id: 'b', text: "Rubato" },
                { id: 'c', text: "Motor Rhythm" },
                { id: 'd', text: "Irregular time signatures" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q14',
            text: "Which specific ornament is explicitly written in the notation?",
            options: [
                { id: 'a', text: "Trill" },
                { id: 'b', text: "Mordent" },
                { id: 'c', text: "Acciaccatura" },
                { id: 'd', text: "None of the above" }
            ],
            correctAnswerId: 'd',
            explanation: ""
        },
        {
            id: 'q15',
            text: "What is the interval between the first two notes of Violin I in Bar 1 (G to B)?",
            options: [
                { id: 'a', text: "Perfect 4th" },
                { id: 'b', text: "Minor 3rd" },
                { id: 'c', text: "Major 3rd" },
                { id: 'd', text: "Major 2nd" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q16',
            text: "Which term best describes the relationship between Violin I and Violin II in the first half of the piece?",
            options: [
                { id: 'a', text: "Unison" },
                { id: 'b', text: "Imitation" },
                { id: 'c', text: "Antiphony" },
                { id: 'd', text: "Homorhythm" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q17',
            text: "The Basso Continuo part in Bar 2 moves from C to D. Which chords do these notes represent in the key of G Major?",
            options: [
                { id: 'a', text: "I and V" },
                { id: 'b', text: "IV and V" },
                { id: 'c', text: "ii and vi" },
                { id: 'd', text: "V and I" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q19',
            text: "\"Ritornello\" form is most commonly associated with which Baroque genre?",
            options: [
                { id: 'a', text: "Solo Sonata" },
                { id: 'b', text: "Opera Recitative" },
                { id: 'c', text: "Concerto Grosso" },
                { id: 'd', text: "Fugue" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q20',
            text: "Which of the following is NOT a feature of this Baroque score?",
            options: [
                { id: 'a', text: "Use of Basso Continuo" },
                { id: 'b', text: "asso Continuo" },
                { id: 'c', text: "ontinuo" },
                { id: 'd', text: "Functional diatonic harmony" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
    ]
};

export const generatedQuiz6: Quiz = {
    id: 'aos01-quiz-6',
    title: "Baroque Ritornello for Strings and Basso Continuo",
    abcNotation: `X:1
T:Baroque Ritornello for Strings and Basso Continuo
C:AOS1: Baroque Music
M:4/4
L:1/8
Q: "Allegro" 1/4=110
%%barnumbers 1
%%tempofont Wingdings 1
K:G
V:1 name="Violin I" snm="Vln.I"
V:2 name="Violin II" snm="Vln.II"
V:3 name="Basso Continuo" snm="B.C." clef=bass
% -- Score --
[V:1] g2 (b/a/g) d'2 g2 | e'2 (d'/c'/b) a2 d'2 | (b/c'/d') (a/b/c') (g/a/b) (f/g/a) | g2 f2 g4 |]
[V:2] d2 (g/f/e) b2 d2 | c2 (b/a/g) f2 b2 | (g/a/b) (f/g/a) (e/f/g) (d/e/f) | e2 d2 d4 |]
[V:3] G,2 G2 G,2 G2 | C,2 G,2 D,2 D,,2 | G,,2 F,,2 E,,2 D,,2 | C,,2 D,,2 G,,4 |]`,
    questions: [
        {
            id: 'q1',
            text: "What is the Italian tempo marking indicated at the start of the score?",
            options: [
                { id: 'a', text: "Moderato" },
                { id: 'b', text: "Adagio" },
                { id: 'c', text: "Allegro" },
                { id: 'd', text: "Presto" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q2',
            text: "What is the exact BPM (Beats Per Minute) indicated for this piece?",
            options: [
                { id: 'a', text: "120 BPM" },
                { id: 'b', text: "PM" },
                { id: 'c', text: "100 BPM" },
                { id: 'd', text: "105 BPM" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q3',
            text: "Looking at the key signature, which key is this piece written in?",
            options: [
                { id: 'a', text: "C Major" },
                { id: 'b', text: "D Major" },
                { id: 'c', text: "Major" },
                { id: 'd', text: "Major" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q4',
            text: "What is the time signature of this Baroque Ritornello?",
            options: [
                { id: 'a', text: "2/4" },
                { id: 'b', text: "3/4" },
                { id: 'c', text: "4/4" },
                { id: 'd', text: "6/8" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q5',
            text: "Which term best describes the texture created by the three independent melodic lines?",
            options: [
                { id: 'a', text: "Monophonic" },
                { id: 'b', text: "Homophonic" },
                { id: 'c', text: "Polyphonic" },
                { id: 'd', text: "Heterophonic" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q6',
            text: "The bottom staff is labeled \"Basso Continuo.\" Which instruments would typically play this part in a Baroque ensemble?",
            options: [
                { id: 'a', text: "Flute and Trumpet" },
                { id: 'b', text: "Harpsichord and Cello" },
                { id: 'c', text: "ello" },
                { id: 'd', text: "Oboe and Bassoon" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q7',
            text: "In Bar 3, the Violins feature a melodic motif that is repeated at a lower pitch. What is this device called?",
            options: [
                { id: 'a', text: "Inversion" },
                { id: 'b', text: "Retrograde" },
                { id: 'c', text: "Sequence" },
                { id: 'd', text: "Augmentation" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q8',
            text: "Examine the Basso Continuo in Bar 4. It moves from C to D to G. What type of cadence is this?",
            options: [
                { id: 'a', text: "Imperfect" },
                { id: 'b', text: "Plagal" },
                { id: 'c', text: "Interrupted" },
                { id: 'd', text: "Perfect" }
            ],
            correctAnswerId: 'd',
            explanation: ""
        },
        {
            id: 'q9',
            text: "Bar 3 of the Basso Continuo features a steady descending scalar line. What is the term for this bass style?",
            options: [
                { id: 'a', text: "Ground Bass" },
                { id: 'b', text: "ass" },
                { id: 'c', text: "Alberti Bass" },
                { id: 'd', text: "Murky Bass" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q10',
            text: "What rhythmic/melodic device is used in the Basso Continuo in Bar 1?",
            options: [
                { id: 'a', text: "Syncopation" },
                { id: 'b', text: "Octave jumps" },
                { id: 'c', text: "Chromaticism" },
                { id: 'd', text: "Hemiola" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q11',
            text: "In Bar 3, Violin I and Violin II move in the same direction at a fixed interval. What is this motion called?",
            options: [
                { id: 'a', text: "Parallel Motion" },
                { id: 'b', text: "Imitation" },
                { id: 'c', text: "Antiphony" },
                { id: 'd', text: "Contrary Motion" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q12',
            text: "The title mentions \"Ritornello.\" What does this term literally mean in a Baroque context?",
            options: [
                { id: 'a', text: "A solo cadenza" },
                { id: 'b', text: "A \"little return\" or recurring theme" },
                { id: 'c', text: "A slow introduction" },
                { id: 'd', text: "A final coda" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q13',
            text: "In Bar 1 and 2, the bracketed notes (e.g., b/a/g) represent what Baroque feature?",
            options: [
                { id: 'a', text: "Glissando" },
                { id: 'b', text: "Written-out ornamentation" },
                { id: 'c', text: "Pitch bends" },
                { id: 'd', text: "Double stopping" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q14',
            text: "What is the relationship between Violin I and Violin II in this score?",
            options: [
                { id: 'a', text: "They play in octaves throughout" },
                { id: 'b', text: "They play in a call-and-reponse (Antiphonal) style only" },
                { id: 'c', text: "They are independent contrapuntal parts" },
                { id: 'd', text: "Violin II only plays long drone notes" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q15',
            text: "Which dynamic style was most common during the Baroque period, fitting the character of this piece?",
            options: [
                { id: 'a', text: "Crescendo and Diminuendo" },
                { id: 'b', text: "Terraced dynamics" },
                { id: 'c', text: "rescendo and Diminuendo" },
                { id: 'd', text: "iminuendo" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q16',
            text: "The Basso Continuo part often required the player to \"realize\" the harmony from shorthand symbols. What is this system called?",
            options: [
                { id: 'a', text: "Tablature" },
                { id: 'b', text: "Solfège" },
                { id: 'c', text: "Figured Bass" },
                { id: 'd', text: "Neumes" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q18',
            text: "How would you describe the harmonic language used in this score?",
            options: [
                { id: 'a', text: "Atonal" },
                { id: 'b', text: "Diatonic/Tonal" },
                { id: 'c', text: "Modal" },
                { id: 'd', text: "iatonic/Tonal" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q19',
            text: "This score is likely an excerpt from which larger Baroque genre?",
            options: [
                { id: 'a', text: "An Opera Recitative" },
                { id: 'b', text: "A Solo Keyboard Nocturne" },
                { id: 'c', text: "A Concerto Grosso" },
                { id: 'd', text: "A Romantic Symphony" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
    ]
};

export const generatedQuiz7: Quiz = {
    id: 'aos01-48840697',
    title: "Baroque Ritornello in G Major",
    abcNotation: `X:1
T:Baroque Ritornello in G Major
C:AOS01_48840697
M:4/4
L:1/8
Q:"Allegro" 1/4=115
%%barnumbers 1
%%tempofont Wingdings 1
%%score [ 1 | 2 | (3 4) ]
V:1 clef=treble name="Violin I"
V:2 clef=treble name="Violin II"
V:3 clef=treble name="Harpsichord"
V:4 clef=bass name="Basso Continuo"
K:G
% --- Ritornello Theme (Tutti) ---
[V:1] G2 G/A/B/c/ d2 G2 | e2 e/f/g/a/ g2 f2 | g/f/e/d/ c/B/A/G/ d2 c2 | B2 A2 G4 |
[V:2] D2 D/E/F/G/ B2 D2 | c2 c/d/e/f/ e2 d2 | B2 G2 F2 E2 | D2 D2 D4 |
[V:3] [GBd]4 [GBd]4 | [Gce]4 [Bdg]4 | [GBd]2 [Gce]2 [FA d]2 [EAc]2 | [DGB]2 [DFA]2 [B,DG]4 |
[V:4] G,4 G,4 | C,4 G,4 | G,2 A,2 B,2 C2 | D2 D,2 G,,4 |
% --- Soloistic Polyphonic Episode ---
[V:1] d2 B/c/d/B/ G2 B2 | c2 A/B/c/A/ F2 A2 | B/A/G/F/ G/A/B/c/ d2 d2 | ^c/d/e/f/ g/f/e/d/ a2 A2 |
[V:2] B2 G/A/B/G/ D2 G2 | A2 F/G/A/F/ D2 F2 | G4 G2 G2 | E2 E2 E2 E2 |
[V:3] [GBd]4 [GBd]4 | [FAc]4 [DFA]4 | [DGB]4 [DGB]4 | [A,E A]4 [A,^CA]4 |
[V:4] G,,4 B,,4 | D,4 F,,4 | G,,2 B,,2 D,2 G,2 | A,4 A,,4 |
% --- Return of Ritornello Fragment ---
[V:1] d2 d/e/f/g/ a2 d2 | b2 b/c'/d'/c'/ b2 a2 | g/f/e/d/ c/B/A/G/ d2 F2 | G8 |]
[V:2] F2 F/G/A/B/ d2 F2 | g2 g/a/b/a/ g2 f2 | e2 E2 D2 D2 | B,8 |]
[V:3] [DFA]4 [DFA]4 | [DGB]4 [DGB]4 | [Gce]2 [Gce]2 [DFA]2 [DFA]2 | [B,DG]8 |]
[V:4] D,4 D,4 | G,4 G,4 | C2 C,2 D,2 D,2 | G,,8 |]`,
    questions: [
        {
            id: 'q1',
            text: "What is the Italian tempo marking for this piece?",
            options: [
                { id: 'a', text: "Andante" },
                { id: 'b', text: "Allegro" },
                { id: 'c', text: "Presto" },
                { id: 'd', text: "Adagio" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q2',
            text: "What is the exact BPM (beats per minute) as indicated in the score?",
            options: [
                { id: 'a', text: "120" },
                { id: 'b', text: "100" },
                { id: 'c', text: "115" },
                { id: 'd', text: "105" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q3',
            text: "In which key is the piece written?",
            options: [
                { id: 'a', text: "C Major" },
                { id: 'b', text: "D Major" },
                { id: 'c', text: "Major" },
                { id: 'd', text: "Major" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q4',
            text: "What is the time signature of the extract?",
            options: [
                { id: 'a', text: "2/4" },
                { id: 'b', text: "3/4" },
                { id: 'c', text: "4/4" },
                { id: 'd', text: "6/8" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q5',
            text: "Describe the texture of Bars 1–4.",
            options: [
                { id: 'a', text: "Monophonic" },
                { id: 'b', text: "Heterophonic" },
                { id: 'c', text: "Melody-dominated homophony" },
                { id: 'd', text: "Unison" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q6',
            text: "Which term best describes the texture of the episode in Bars 5–8?",
            options: [
                { id: 'a', text: "Polyphonic" },
                { id: 'b', text: "Fugue" },
                { id: 'c', text: "Homorhythmic" },
                { id: 'd', text: "Monodic" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q7',
            text: "Look at the Basso Continuo (V4) in Bar 3. Which harmonic device is used here?",
            options: [
                { id: 'a', text: "Pedal Note" },
                { id: 'b', text: "Walking Bass" },
                { id: 'c', text: "Ground Bass" },
                { id: 'd', text: "Murky Bass" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q8',
            text: "In Violin I, what melodic device is used between Bar 5 and Bar 6?",
            options: [
                { id: 'a', text: "Inversion" },
                { id: 'b', text: "Retrograde" },
                { id: 'c', text: "Descending Sequence" },
                { id: 'd', text: "escending Sequence" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q9',
            text: "What type of cadence is formed at the end of the first phrase in Bar 4?",
            options: [
                { id: 'a', text: "Imperfect" },
                { id: 'b', text: "Interrupted" },
                { id: 'c', text: "Plagal" },
                { id: 'd', text: "Perfect" }
            ],
            correctAnswerId: 'd',
            explanation: ""
        },
        {
            id: 'q10',
            text: "In Bar 8, Violin I plays a C#. This indicates a modulation to which key?",
            options: [
                { id: 'a', text: "G Major" },
                { id: 'b', text: "D Major (The Dominant)" },
                { id: 'c', text: "A Minor" },
                { id: 'd', text: "Major (The Dominant)" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q11',
            text: "Which two instruments comprise the Basso Continuo group in this score?",
            options: [
                { id: 'a', text: "Violin I and Violin II" },
                { id: 'b', text: "Harpsichord and Basso Continuo (Cello/Bass)" },
                { id: 'c', text: "ontinuo (Cello/Bass)" },
                { id: 'd', text: "Violin II and Harpsichord" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q12',
            text: "What is the structural form of this piece based on the return of the opening material?",
            options: [
                { id: 'a', text: "Binary Form" },
                { id: 'b', text: "inary Form" },
                { id: 'c', text: "Ritornello Form" },
                { id: 'd', text: "Theme and Variations" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q13',
            text: "Which melodic feature is prominent in Violin I during Bars 2 and 10?",
            options: [
                { id: 'a', text: "Chromatic scales" },
                { id: 'b', text: "Scalic flourishes (semiquaver runs)" },
                { id: 'c', text: "hromatic scales" },
                { id: 'd', text: "Wide leaps (disjunct)" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q14',
            text: "Look at the Harpsichord part (V3) in Bar 8. What is the chord?",
            options: [
                { id: 'a', text: "G Major" },
                { id: 'b', text: "C Major" },
                { id: 'c', text: "Major" },
                { id: 'd', text: "E Minor" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q15',
            text: "How would you describe the harmonic language of this Baroque extract?",
            options: [
                { id: 'a', text: "Atonal" },
                { id: 'b', text: "Diatonic and functional" },
                { id: 'c', text: "Modal" },
                { id: 'd', text: "iatonic and functional" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q16',
            text: "What is the interval between the final note of Bar 11 and the note in Bar 12 in the Basso Continuo (V4)?",
            options: [
                { id: 'a', text: "Perfect 4th descending" },
                { id: 'b', text: "Perfect 5th descending" },
                { id: 'c', text: "Octave descending" },
                { id: 'd', text: "Major 3rd ascending" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q17',
            text: "What is the rhythmic value of the final note in Bar 12 for all parts?",
            options: [
                { id: 'a', text: "Crotchet" },
                { id: 'b', text: "Minim" },
                { id: 'c', text: "rotchet" },
                { id: 'd', text: "Quaver" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q18',
            text: "Which typical Baroque \"polarised\" texture feature is evident throughout the score?",
            options: [
                { id: 'a', text: "Only middle-range instruments are used" },
                { id: 'b', text: "A strong top melody and a firm, independent bass line" },
                { id: 'c', text: "All instruments play the same melody in different octaves" },
                { id: 'd', text: "The melody is shared equally between the bass and the treble" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q19',
            text: "What is the purpose of the accidental in Bar 8 for the overall structure?",
            options: [
                { id: 'a', text: "To signal a Perfect Cadence in G Major" },
                { id: 'b', text: "To create a Secondary Dominant (V of V) effect" },
                { id: 'c', text: "adence in G Major" },
                { id: 'd', text: "ominant (V of V) effect" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q20',
            text: "Which of the following best describes the Violin I part in Bar 10?",
            options: [
                { id: 'a', text: "It features an upper auxiliary note figure" },
                { id: 'b', text: "It is strictly syncopated" },
                { id: 'c', text: "It uses double-stopping" },
                { id: 'd', text: "It is entirely pizzicato" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
    ]
};

export const generatedQuiz8: Quiz = {
    id: 'aos01-41831147',
    title: "Baroque Ritornello in D Major",
    abcNotation: `X:1
T:Baroque Ritornello in D Major
T:AOS 1: Baroque Music | ID: AOS01_41831147
C:Skeleton Score
M:4/4
L:1/8
Q:"Allegro" 1/4=110
%%tempofont Wingdings 1
%%barnumbers 1
%%score (1 2) 3
K:D
V:1 name="Flute" snm="Fl."
V:2 name="Harpsichord" snm="Hpschd."
V:3 name="Cello / Basso" snm="Vc." clef=bass
% --- Ritornello (Tutti) ---
[V:1] d2 f/e/d a2 a2 | b2 g/f/e a2 a2 | gfed cdec | d2 d2 d4 |
[V:2] [Fd]2 [Ad]2 [Ac]2 [Ae]2 | [Gd]2 [Bd]2 [Ac]2 [Ae]2 | [Bd]4 [Ac]4 | [Fd]2 [Fd]2 [Fd]4 |
[V:3] D,2 D2 A,2 A2 | G,2 G2 A,2 A2 | G2 F2 E2 A,2 | D,2 D2 D,4 |
% --- Episode 1 (Solo + Continuo) ---
[V:1] f2 a/g/f e2 g/f/e | d2 f/e/d cdec | dAfA dAfA | eAgA eAgA |
[V:2] z8 | z8 | [Fd]4 z4 | [Ge]4 z4 |
[V:3] D2 D2 A,2 A2 | B,2 B2 A,2 A2 | D2 D2 D2 D2 | A,2 A,2 A,2 A,2 |
% --- Sequence and Modulation ---
[V:1] f2 d'2 c'2 b2 | a2 g2 f2 e2 | d/e/f/g/ a/g/f/e/ d2 c2 | d8 |
[V:2] [Ad']4 [Ac']2 [Ab]2 | [Aa]2 [Ag]2 [Af]2 [Ae]2 | [Ad]4 [A,G]4 | [F,A,D]8 |
[V:3] F,2 B,2 A,2 G,2 | F,2 E,2 D,2 A,,2 | B,,2 G,,2 A,,2 A,,2 | D,,8 |
% --- Final Cadence ---
[V:1] d2 f/e/d a2 a2 | b2 g/f/e a2 a2 | gfed cdec | d4 z4 |]
[V:2] [Fd]2 [Ad]2 [Ac]2 [Ae]2 | [Gd]2 [Bd]2 [Ac]2 [Ae]2 | [Bd]4 [Ac]4 | [Fd]4 z4 |]
[V:3] D,2 D2 A,2 A2 | G,2 G2 A,2 A2 | G2 F2 E2 A,2 | D,4 z4 |]`,
    questions: [
        {
            id: 'q1',
            text: "What is the Italian tempo marking indicated in the score?",
            options: [
                { id: 'a', text: "Moderato" },
                { id: 'b', text: "Adagio" },
                { id: 'c', text: "Allegro" },
                { id: 'd', text: "Presto" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q2',
            text: "What is the BPM (Beats Per Minute) for this piece?",
            options: [
                { id: 'a', text: "90 BPM" },
                { id: 'b', text: "PM" },
                { id: 'c', text: "120 BPM" },
                { id: 'd', text: "140 BPM" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q3',
            text: "Based on the key signature, what is the primary key of this piece?",
            options: [
                { id: 'a', text: "G Major" },
                { id: 'b', text: "A Major" },
                { id: 'c', text: "D Major" },
                { id: 'd', text: "Major" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q4',
            text: "Which two instruments make up the \"Basso Continuo\" in this score?",
            options: [
                { id: 'a', text: "Flute and Harpsichord" },
                { id: 'b', text: "Flute and Cello" },
                { id: 'c', text: "ello" },
                { id: 'd', text: "Flute and Violin" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q5',
            text: "Which term best describes the texture of the piece?",
            options: [
                { id: 'a', text: "Monophonic" },
                { id: 'b', text: "Melody and Accompaniment (Homophonic)" },
                { id: 'c', text: "Heterophonic" },
                { id: 'd', text: "Atonal" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q6',
            text: "What is the time signature of the piece?",
            options: [
                { id: 'a', text: "2/4" },
                { id: 'b', text: "3/4" },
                { id: 'c', text: "4/4" },
                { id: 'd', text: "6/8" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q7',
            text: "In Bar 11, the flute plays a rapid series of notes moving primarily by step. What is the term for this?",
            options: [
                { id: 'a', text: "Arpeggio" },
                { id: 'b', text: "Glissando" },
                { id: 'c', text: "Conjunct (Scalic) passage" },
                { id: 'd', text: "Disjunct motion" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q8',
            text: "Which harmonic device is used in the Flute part across Bars 5 and 6?",
            options: [
                { id: 'a', text: "Inversion" },
                { id: 'b', text: "Descending Sequence" },
                { id: 'c', text: "Retrograde" },
                { id: 'd', text: "escending Sequence" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q9',
            text: "Look at the Cello part (V3) in Bars 1–3. What is the most accurate description of this bass style?",
            options: [
                { id: 'a', text: "Walking Bass" },
                { id: 'b', text: "ass" },
                { id: 'c', text: "Ground Bass (Ostinato)" },
                { id: 'd', text: "Slap Bass" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q10',
            text: "What is the cadence used to conclude the Ritornello section in Bar 4?",
            options: [
                { id: 'a', text: "Imperfect Cadence (I-V)" },
                { id: 'b', text: "Plagal Cadence (IV-I)" },
                { id: 'c', text: "adence (I-V)" },
                { id: 'd', text: "Interrupted Cadence (V-vi)" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q11',
            text: "In Bars 7 and 8, the Flute plays broken chord patterns. What is the musical term for this?",
            options: [
                { id: 'a', text: "Chromaticism" },
                { id: 'b', text: "Arpeggiation" },
                { id: 'c', text: "hromaticism" },
                { id: 'd', text: "Trill" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q12',
            text: "Bar 8 features a repeated note in the Cello on the note 'A'. In the key of D Major, this acts as a:",
            options: [
                { id: 'a', text: "Tonic Pedal" },
                { id: 'b', text: "Dominant Pedal/Reinforcement" },
                { id: 'c', text: "Subdominant Pedal" },
                { id: 'd', text: "ominant Pedal/Reinforcement" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q13',
            text: "Which decoration is formed by the 16th note figures in the Flute part (e.g., Bar 1, beat 2)?",
            options: [
                { id: 'a', text: "Acciaccatura" },
                { id: 'b', text: "Mordent" },
                { id: 'c', text: "Passing Notes" },
                { id: 'd', text: "Turn" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q14',
            text: "What is the structural role of the \"Ritornello\" in Baroque music, as seen in this score?",
            options: [
                { id: 'a', text: "A solo section for the harpsichord only" },
                { id: 'b', text: "A recurring theme played by the full ensemble (Tutti)" },
                { id: 'c', text: "A slow introductory section" },
                { id: 'd', text: "A section where the key changes every bar" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q15',
            text: "How does \"Episode 1\" (Bars 5-8) differ from the \"Ritornello\" (Bars 1-4)?",
            options: [
                { id: 'a', text: "The texture becomes thicker" },
                { id: 'b', text: "It features soloistic melodic development over continuo" },
                { id: 'c', text: "It is played much slower" },
                { id: 'd', text: "It moves to a minor key" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q17',
            text: "What is the interval between the first and second notes of the Flute part in Bar 1 (D to F#)?",
            options: [
                { id: 'a', text: "Major 2nd" },
                { id: 'b', text: "Major 3rd" },
                { id: 'c', text: "Perfect 4th" },
                { id: 'd', text: "Perfect 5th" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q18',
            text: "In Bars 9–10, the melody and bass move downwards in a patterned way. What is this device called?",
            options: [
                { id: 'a', text: "Stretto" },
                { id: 'b', text: "Sequence" },
                { id: 'c', text: "Imitation" },
                { id: 'd', text: "Canon" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q19',
            text: "Which of the following is a characteristic Baroque feature present in this score?",
            options: [
                { id: 'a', text: "Use of the Piano for dynamics" },
                { id: 'b', text: "Use of Basso Continuo" },
                { id: 'c', text: "ontinuo" },
                { id: 'd', text: "Twelve-tone serialism" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q20',
            text: "The final cadence of the entire piece (Bars 15–16) is a Perfect Cadence. What are the two chords involved (in Roman Numerals)?",
            options: [
                { id: 'a', text: "IV – I" },
                { id: 'b', text: "ii – I" },
                { id: 'c', text: "V – I" },
                { id: 'd', text: "vi – V" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
    ]
};

export const generatedQuiz9: Quiz = {
    id: 'aos01-20654162',
    title: "Baroque Ritornello in D Major",
    abcNotation: `X:1
T:Baroque Ritornello in D Major
C:AOS01_20654162
M:4/4
L:1/8
Q:"Allegro" 1/4=100
%%barnumbers 1
K:D
V:1 name="Violino"
V:2 name="Cembalo RH"
V:3 clef=bass name="Basso Continuo"
% --- Ritornello (Tutti) ---
[V:1] d2 A2 F2 D2 | GFEG F2 D2 | B2 G2 A2 F2 | G2 F2- F2 D2 |
[V:2] F2 D2 A,2 F,2 | B,A,CB, A,2 F,2 | G2 E2 F2 D2 | E2 E2 D4 |
[V:3] D,2 F,2 D,2 B,,2 | E,2 A,,2 D,2 F,,2 | G,,2 B,,2 D,2 D,,2 | A,,2 A,,2 D,4 |
% --- Solo Episode (Polyphonic) ---
[V:1] z4 a2 f2 | d2 ef gfed | c2 A2 e2 c2 | A2 Bc dcBA |
[V:2] z2 f2 d2 B2 | G2 AB cBAG | F2 D2 A2 F2 | D2 EF GFED |
[V:3] D,4 F,4 | G,4 E,4 | A,,4 C,4 | D,4 B,,4 |
% --- Transition to Cadence ---
[V:1] ^g2 e2 a2 f2 | b2 d2 c2 B2 | A2 a2 g2 f2 | e6 d2 | d8 |]
[V:2] B2 G2 c2 A2 | d2 F2 E2 D2 | C2 c2 B2 A2 | A2 G2 F2 E2 | F8 |]
[V:3] E,2 E,2 F,2 F,2 | G,2 G,2 A,2 G,2 | F,2 F,2 G,2 A,2 | A,,4 A,,4 | D,8 |]`,
    questions: [
        {
            id: 'q1',
            text: "What is the Italian tempo marking for this piece?",
            options: [
                { id: 'a', text: "Adagio" },
                { id: 'b', text: "Andante" },
                { id: 'c', text: "Allegro" },
                { id: 'd', text: "Presto" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q2',
            text: "What is the precise tempo in Beats Per Minute (BPM) as indicated in the score?",
            options: [
                { id: 'a', text: "80 BPM" },
                { id: 'b', text: "PM" },
                { id: 'c', text: "120 BPM" },
                { id: 'd', text: "144 BPM" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q3',
            text: "In which key is the piece primarily written?",
            options: [
                { id: 'a', text: "G Major" },
                { id: 'b', text: "A Major" },
                { id: 'c', text: "D Major" },
                { id: 'd', text: "Major" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q4',
            text: "What is the predominant texture of the \"Ritornello\" (Bars 1–4)?",
            options: [
                { id: 'a', text: "Monophonic" },
                { id: 'b', text: "Homophonic (Melody-dominated)" },
                { id: 'c', text: "Heterophonic" },
                { id: 'd', text: "Fugue" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q5',
            text: "How would you describe the texture in Bars 5–8?",
            options: [
                { id: 'a', text: "Unison" },
                { id: 'b', text: "Polyphonic/Imitative" },
                { id: 'c', text: "Strictly Chordal" },
                { id: 'd', text: "Atonal" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q6',
            text: "Which instrument is represented by \"V2\"?",
            options: [
                { id: 'a', text: "Flute" },
                { id: 'b', text: "Oboe" },
                { id: 'c', text: "Cembalo (Harpsichord)" },
                { id: 'd', text: "Viola" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q7',
            text: "What is the function of \"V3\" (Basso Continuo) in this Baroque score?",
            options: [
                { id: 'a', text: "To play the melody only" },
                { id: 'b', text: "To provide a harmonic and rhythmic foundation" },
                { id: 'c', text: "To play improvised solos throughout" },
                { id: 'd', text: "To replace the violin" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q8',
            text: "Which cadence is found at the end of the first section in Bar 4?",
            options: [
                { id: 'a', text: "Imperfect Cadence" },
                { id: 'b', text: "Interrupted Cadence" },
                { id: 'c', text: "adence" },
                { id: 'd', text: "Perfect Cadence (V-I)" }
            ],
            correctAnswerId: 'd',
            explanation: ""
        },
        {
            id: 'q9',
            text: "What melodic device is used in the Violin (V1) between Bars 5 and 8?",
            options: [
                { id: 'a', text: "Sequence" },
                { id: 'b', text: "Inversion" },
                { id: 'c', text: "Retrograde" },
                { id: 'd', text: "Glissando" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q10',
            text: "In Bar 9, a G# (G sharp) is introduced. Which key is the music briefly modulating to?",
            options: [
                { id: 'a', text: "E Minor" },
                { id: 'b', text: "A Major (The Dominant)" },
                { id: 'c', text: "F# Minor" },
                { id: 'd', text: "ominant)" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q11',
            text: "What is the relationship between the key of D Major and the key reached in Bar 9?",
            options: [
                { id: 'a', text: "Relative Minor" },
                { id: 'b', text: "Subdominant" },
                { id: 'c', text: "Dominant" },
                { id: 'd', text: "ominant" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q12',
            text: "In Bar 12, the Basso Continuo (V3) repeats the note A. What harmonic device is this?",
            options: [
                { id: 'a', text: "Ground Bass" },
                { id: 'b', text: "ass" },
                { id: 'c', text: "Tonic Pedal" },
                { id: 'd', text: "ominant Pedal" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q13',
            text: "What is the time signature of the piece?",
            options: [
                { id: 'a', text: "2/4" },
                { id: 'b', text: "3/4" },
                { id: 'c', text: "4/4 (Common Time)" },
                { id: 'd', text: "6/8" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q14',
            text: "The structure of \"Tutti\" (Bars 1-4) followed by \"Solo\" (Bars 5-8) is characteristic of which Baroque form?",
            options: [
                { id: 'a', text: "Ritornello Form" },
                { id: 'b', text: "Binary Form" },
                { id: 'c', text: "Ternary Form" },
                { id: 'd', text: "Sonata Form" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q15',
            text: "Look at Bar 4 in the Violin (V1) part. The note 'F' is held from the previous beat before resolving to 'E'. This creates a:",
            options: [
                { id: 'a', text: "Trill" },
                { id: 'b', text: "Mordent" },
                { id: 'c', text: "Suspension" },
                { id: 'd', text: "Turn" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q16',
            text: "How many distinct melodic lines/staves are written in this score?",
            options: [
                { id: 'a', text: "One" },
                { id: 'b', text: "Two" },
                { id: 'c', text: "Three" },
                { id: 'd', text: "Five" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q17',
            text: "What is the interval between the first two notes of the Violin part (Bar 1)?",
            options: [
                { id: 'a', text: "Perfect 4th" },
                { id: 'b', text: "Perfect 5th" },
                { id: 'c', text: "Major 3rd" },
                { id: 'd', text: "Major 6th" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q18',
            text: "Which clef is used for the Basso Continuo (V3)?",
            options: [
                { id: 'a', text: "Treble Clef" },
                { id: 'b', text: "Alto Clef" },
                { id: 'c', text: "lef" },
                { id: 'd', text: "Tenor Clef" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q19',
            text: "Which ornament is \"written out\" in the Cembalo part in Bar 2?",
            options: [
                { id: 'a', text: "Arpeggio" },
                { id: 'b', text: "Turn" },
                { id: 'c', text: "Acciaccatura" },
                { id: 'd', text: "Tremolo" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q20',
            text: "What is the final cadence of the entire extract (Bars 12–13)?",
            options: [
                { id: 'a', text: "V-I (Perfect)" },
                { id: 'b', text: "IV-I (Plagal)" },
                { id: 'c', text: "I-V (Imperfect)" },
                { id: 'd', text: "V-vi (Interrupted)" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
    ]
};

export const generatedQuiz10: Quiz = {
    id: 'aos01-50963671',
    title: "Baroque Concerto in D Major",
    abcNotation: `X:1
T:Baroque Concerto in D Major
T:AOS 1: Baroque Music
C:AOS01_50963671
M:4/4
L:1/8
Q:"Allegro" 1/4=110
%%tempofont Wingdings 1
%%barnumbers 1
%%score { (V1 V2) | Va | BC }
K:D
V:1 name="Violin I"
%%MIDI program 40
!f! d2 f2 a2 d'2 | c'bag fedc | d2 f2 a2 d'2 | (3c'ba (3gfe d2 z2 |
w: Ritornello
!p! f'4 e'4 | d'c'ba b4 | a4 g4 | fedc d2 z2 |
!f! d2 f2 a2 d'2 | (3c'ba (3gfe d2 z2 |]
V:2 name="Violin II"
%%MIDI program 40
!f! A2 d2 f2 a2 | gfed cBAG | A2 d2 f2 a2 | (3gfe (3dcB A2 z2 |
!p! d'4 c'4 | bagf g4 | f4 e4 | dcBA F2 z2 |
!f! A2 d2 f2 a2 | (3gfe (3dcB A2 z2 |]
V:3 name="Viola"
%%MIDI program 41
clef=alto
!f! D2 F2 A2 d2 | e2 A2 A2 A2 | D2 F2 A2 d2 | e2 A2 F2 z2 |
!p! a4 a4 | g4 d4 | d4 A4 | A4 D2 z2 |
!f! D2 F2 A2 d2 | e2 A2 F2 z2 |]
V:BC name="Basso Continuo"
%%MIDI program 6 string
%%MIDI gchord ccc
clef=bass
!f! D,2 D2 F,2 F2 | G,2 G2 A,2 A2 | D,2 D2 F,2 F2 | G,2 A,2 D,2 z2 |
w: 5 6 7 #
!p! D2 d2 A2 a2 | B2 b2 G2 g2 | F2 f2 E2 e2 | A2 A,2 D,2 z2 |
w: 5 5 5 5 
!f! D,2 D2 F,2 F2 | G,2 A,2 D,2 z2 |]
w: 5 6 #`,
    questions: [
        {
            id: 'q1',
            text: "What is the Italian tempo marking for this piece?",
            options: [
                { id: 'a', text: "Adagio" },
                { id: 'b', text: "Allegro" },
                { id: 'c', text: "Andante" },
                { id: 'd', text: "Presto" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q2',
            text: "What is the BPM (Beats Per Minute) as indicated in the score?",
            options: [
                { id: 'a', text: "90" },
                { id: 'b', text: "100" },
                { id: 'c', text: "110" },
                { id: 'd', text: "120" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q3',
            text: "What is the primary key of this concerto?",
            options: [
                { id: 'a', text: "G Major" },
                { id: 'b', text: "D Major" },
                { id: 'c', text: "A Major" },
                { id: 'd', text: "Major" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q4',
            text: "What is the time signature of this piece?",
            options: [
                { id: 'a', text: "2/4" },
                { id: 'b', text: "3/4" },
                { id: 'c', text: "4/4" },
                { id: 'd', text: "6/8" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q5',
            text: "Which of the following best describes the melodic motion in Violin I during Bar 1?",
            options: [
                { id: 'a', text: "Scalic and conjunct" },
                { id: 'b', text: "Chromatic" },
                { id: 'c', text: "hromatic" },
                { id: 'd', text: "isjunct and triadic" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q6',
            text: "Bars 5–7 in Violin I demonstrate which common Baroque compositional device?",
            options: [
                { id: 'a', text: "An Inversion" },
                { id: 'b', text: "A Melodic Sequence" },
                { id: 'c', text: "A Canon" },
                { id: 'd', text: "Ground Bass" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q7',
            text: "Which musical term describes the sudden shift in volume from *f* in Bar 1 to *p* in Bar 5?",
            options: [
                { id: 'a', text: "Crescendo" },
                { id: 'b', text: "Diminuendo" },
                { id: 'c', text: "rescendo" },
                { id: 'd', text: "iminuendo" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q8',
            text: "What rhythmic feature is used in Violin I and Violin II in Bar 4 and Bar 10?",
            options: [
                { id: 'a', text: "Syncopation" },
                { id: 'b', text: "Dotted rhythms" },
                { id: 'c', text: "Triplets" },
                { id: 'd', text: "otted rhythms" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q9',
            text: "Looking at the Basso Continuo part, what do the numbers and symbols (e.g., 5, 6, #) beneath the notes represent?",
            options: [
                { id: 'a', text: "Fingerings for the performer" },
                { id: 'b', text: "Figured Bass for harmonic realization" },
                { id: 'c', text: "String positions" },
                { id: 'd', text: "Measure counts" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q10',
            text: "What clef is used for the Viola part (V:3)?",
            options: [
                { id: 'a', text: "Treble Clef" },
                { id: 'b', text: "Bass Clef" },
                { id: 'c', text: "lef" },
                { id: 'd', text: "Tenor Clef" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q11',
            text: "What is the relationship between the music in Bar 1 and the music in Bar 9?",
            options: [
                { id: 'a', text: "It is a variation in a minor key" },
                { id: 'b', text: "It is a literal repetition" },
                { id: 'c', text: "It is an augmentation of the melody" },
                { id: 'd', text: "It is an inverted melody" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q12',
            text: "The Basso Continuo in Bars 5–7 moves in steady octaves. This style of moving bassline is known as a:",
            options: [
                { id: 'a', text: "Walking Bass" },
                { id: 'b', text: "ass" },
                { id: 'c', text: "Murky Bass" },
                { id: 'd', text: "Pedal Point" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q13',
            text: "Which cadence is performed at the very end of the excerpt (Bar 10)?",
            options: [
                { id: 'a', text: "Imperfect (I-V)" },
                { id: 'b', text: "Plagal (IV-I)" },
                { id: 'c', text: "Interrupted (V-VI)" },
                { id: 'd', text: "Perfect (V-I)" }
            ],
            correctAnswerId: 'd',
            explanation: ""
        },
        {
            id: 'q14',
            text: "What is the primary texture of this excerpt?",
            options: [
                { id: 'a', text: "Monophonic" },
                { id: 'b', text: "Homophonic (Melody and Accompaniment)" },
                { id: 'c', text: "Heterophonic" },
                { id: 'd', text: "Polyphonic / Fugue" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q15',
            text: "In Bar 2, Violin I plays a descending passage (`c'bag fedc`). How would you describe this motion?",
            options: [
                { id: 'a', text: "Arpeggiated" },
                { id: 'b', text: "Scalic/Conjunct" },
                { id: 'c', text: "onjunct" },
                { id: 'd', text: "isjunct" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q16',
            text: "Which chordal instrument would typically play the \"Basso Continuo\" part in a Baroque performance?",
            options: [
                { id: 'a', text: "Piano" },
                { id: 'b', text: "Harpsichord" },
                { id: 'c', text: "Clarinet" },
                { id: 'd', text: "Classical Guitar" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q17',
            text: "The structure of this excerpt, where a recurring main theme returns, is known as:",
            options: [
                { id: 'a', text: "Sonata Form" },
                { id: 'b', text: "Ritornello Form" },
                { id: 'c', text: "Theme and Variations" },
                { id: 'd', text: "Minuet and Trio" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q18',
            text: "What is the interval between the first two notes of the Violin I melody (D to F#)?",
            options: [
                { id: 'a', text: "Perfect 4th" },
                { id: 'b', text: "Major 3rd" },
                { id: 'c', text: "Minor 3rd" },
                { id: 'd', text: "Major 2nd" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q19',
            text: "Which of the following Baroque characteristics is NOT present in this score?",
            options: [
                { id: 'a', text: "Use of Basso Continuo" },
                { id: 'b', text: "asso Continuo" },
                { id: 'c', text: "ontinuo" },
                { id: 'd', text: "Sequence and repetition" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q20',
            text: "Based on the instrumentation and style, what type of work is this?",
            options: [
                { id: 'a', text: "Solo Suite" },
                { id: 'b', text: "Opera Aria" },
                { id: 'c', text: "Baroque Concerto" },
                { id: 'd', text: "String Quartet" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
    ]
};

export const generatedQuiz11: Quiz = {
    id: 'aos01-77943068',
    title: "Baroque Ritornello in D Major",
    abcNotation: `X:1
T:Baroque Ritornello in D Major
C:AOS1: Baroque Music (Exemplar)
M:4/4
L:1/8
Q: "Allegro" 1/4=110
%%barnumbers 1
%%tempofont Wingdings 1
%%score [ 1 | 2 | 3 | (4 5) ]
K:D
V:1 name="Violin I" snm="Vln.1"
V:2 name="Violin II" snm="Vln.2"
V:3 name="Cello" snm="Vc." clef=bass
V:4 name="Harpsichord" snm="Hpschd."
V:5 clef=bass
% --- Composition ---
[V:1] d2 (3fed a2 d'2 | f'2 e'd' d'2 c'2 | d'4 z a f d | A2 G/F/G F2 E2 | D8 |]
[V:2] z4 d2 (3fed | a2 g2 f2 e2 | f2 d2 d4 | z2 e2 d2 c2 | d8 |]
[V:3] D2 D2 D2 D2 | A,2 A,2 A,2 A,2 | D2 D2 D2 F2 | G2 A2 A,2 A,2 | D,8 |]
[V:4] [FA d]2 [FA d]2 [FA d]2 [FA d]2 | [EA c]2 [EA c]2 [EA c]2 [EA c]2 | [FA d]2 [FA d]2 [FA d]2 [DF a]2 | [B,D g]2 [CE a]2 [CE a]2 [A,C e]2 | [FA d]8 |]
[V:5] D2 D2 D2 D2 | A,2 A,2 A,2 A,2 | D2 D2 D2 F2 | G2 A2 A,2 A,2 | D,8 |]`,
    questions: [
        {
            id: 'q1',
            text: "What is the Italian tempo marking indicated at the start of the score?",
            options: [
                { id: 'a', text: "Andante" },
                { id: 'b', text: "**Allegro**" },
                { id: 'c', text: "Adagio" },
                { id: 'd', text: "Presto" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q2',
            text: "What is the exact BPM (Beats Per Minute) indicated for the quarter note?",
            options: [
                { id: 'a', text: "120" },
                { id: 'b', text: "100" },
                { id: 'c', text: "**110**" },
                { id: 'd', text: "90" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q3',
            text: "In which key is this piece written?",
            options: [
                { id: 'a', text: "G Major" },
                { id: 'b', text: "A Major" },
                { id: 'c', text: "**D Major**" },
                { id: 'd', text: "Major**" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q4',
            text: "What is the time signature of the excerpt?",
            options: [
                { id: 'a', text: "3/4" },
                { id: 'b', text: "**4/4**" },
                { id: 'c', text: "6/8" },
                { id: 'd', text: "2/2" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q5',
            text: "Which pair of instruments forms the \"Basso Continuo\" in this ensemble?",
            options: [
                { id: 'a', text: "Violin I and Violin II" },
                { id: 'b', text: "Violin I and Cello" },
                { id: 'c', text: "ello" },
                { id: 'd', text: "Harpsichord and Violin II" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q6',
            text: "What is the texture of the music when Violin II enters in Bar 1, following Violin I?",
            options: [
                { id: 'a', text: "Monophonic" },
                { id: 'b', text: "**Imitative**" },
                { id: 'c', text: "Heterophonic" },
                { id: 'd', text: "Homophonic" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q7',
            text: "Look at Violin I, Bar 4. What melodic device is represented by the notes \"G/F/G\"?",
            options: [
                { id: 'a', text: "**A written-out ornament (upper mordent/auxiliary note)**" },
                { id: 'b', text: "A chromatic scale" },
                { id: 'c', text: "An arpeggio" },
                { id: 'd', text: "A glissando" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q8',
            text: "Examine the Cello (V3) and Harpsichord LH (V5) in Bar 1. Which harmonic device is used here?",
            options: [
                { id: 'a', text: "Ground Bass" },
                { id: 'b', text: "ass" },
                { id: 'c', text: "Walking Bass" },
                { id: 'd', text: "Sequence" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q9',
            text: "Examine the Cello (V3) and Harpsichord LH (V5) in Bar 2. Which harmonic device is used here?",
            options: [
                { id: 'a', text: "**Dominant Pedal**" },
                { id: 'b', text: "Inverted Pedal" },
                { id: 'c', text: "Tierce de Picardie" },
                { id: 'd', text: "ominant Pedal**" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q10',
            text: "What type of cadence occurs between Bar 4 and Bar 5?",
            options: [
                { id: 'a', text: "Imperfect (I-V)" },
                { id: 'b', text: "Plagal (IV-I)" },
                { id: 'c', text: "Interrupted (V-VI)" },
                { id: 'd', text: "**Perfect (V-I)**" }
            ],
            correctAnswerId: 'd',
            explanation: ""
        },
        {
            id: 'q11',
            text: "What is the rhythmic feature used in Violin I, Bar 1 (beat 2)?",
            options: [
                { id: 'a', text: "Syncopation" },
                { id: 'b', text: "Dotted rhythms" },
                { id: 'c', text: "**Triplet**" },
                { id: 'd', text: "otted rhythms" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q12',
            text: "In Bar 3, Violin I plays the notes \"a f d\". This is an example of:",
            options: [
                { id: 'a', text: "Scalic movement" },
                { id: 'b', text: "**Triadic/Arpeggio movement**" },
                { id: 'c', text: "Chromaticism" },
                { id: 'd', text: "Octave leaps" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q13',
            text: "What is the function of the Harpsichord’s right hand (V4) in this Baroque excerpt?",
            options: [
                { id: 'a', text: "Playing the main melody in unison with Violin I" },
                { id: 'b', text: "**Providing harmonic realization/filling in the chords**" },
                { id: 'c', text: "Playing a counter-subject" },
                { id: 'd', text: "Playing a solo virtuoso passage" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q14',
            text: "Which statement best describes the relationship between the Cello (V3) and the Harpsichord Left Hand (V5)?",
            options: [
                { id: 'a', text: "They play in contrary motion" },
                { id: 'b', text: "They play a canon" },
                { id: 'c', text: "**They play the same functional bass line in unison/octaves**" },
                { id: 'd', text: "They are independent melodies" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q15',
            text: "The title \"Ritornello\" suggests that this music is likely:",
            options: [
                { id: 'a', text: "**A recurring theme in a Baroque concerto**" },
                { id: 'b', text: "aroque concerto**" },
                { id: 'c', text: "A movement from a solo keyboard suite" },
                { id: 'd', text: "An improvisational cadenza" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q17',
            text: "Which of the following is a characteristic Baroque feature found in this score?",
            options: [
                { id: 'a', text: "Large orchestral brass section" },
                { id: 'b', text: "Extensive use of the sustain pedal" },
                { id: 'c', text: "**Use of Basso Continuo**" },
                { id: 'd', text: "Frequent changes in time signature" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q19',
            text: "How many sharps are in the key signature of D Major?",
            options: [
                { id: 'a', text: "One (F#)" },
                { id: 'b', text: "**Two (F# and C#)**" },
                { id: 'c', text: "#)**" },
                { id: 'd', text: "None" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q20',
            text: "Which of the following best describes the melodic motion in Bar 2 of Violin II?",
            options: [
                { id: 'a', text: "Entirely static on one note" },
                { id: 'b', text: "Large disjunct leaps" },
                { id: 'c', text: "**Conjunct (stepwise) descending motion**" },
                { id: 'd', text: "Ascending chromatic scale" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
    ]
};

export const generatedQuiz12: Quiz = {
    id: 'aos01-69334061',
    title: "Baroque Ritornello for Violin and Continuo",
    abcNotation: `X:1
T:Baroque Ritornello for Violin and Continuo
C:AOS01_69334061
M:4/4
L:1/8
%%barnumbers 1
%%tempofont Wingdings 1
Q:"Allegro" 1/4=120
K:D
%%score {V1 | (V2 V3)}
V:1 clef=treble name="Violin"
V:2 clef=treble name="Harpsichord"
V:3 clef=bass name="Basso Continuo"
% --- Ritornello Theme ---
[V:1] d2 a2 f2 d2 | gfed cdec | d2 a2 f2 d2 | (3gag (3fgf e2 A2 |
[V:2] z8 | d2 f2 a2 d2 | z4 z2 A2 | d2 f2 a2 g2 |
[V:3] D,2 D2 F,2 F2 | G,2 G2 A,2 A2 | D,2 D2 F,2 F2 | G,2 G2 A,4 |
% --- Polyphonic Development ---
[V:1] f2 d2 g2 e2 | a2 f2 b2 g2 | afdf gece | d4 z4 |
[V:2] d2 f2 e2 g2 | f2 a2 g2 b2 | f2 d2 e2 c2 | d4 z4 |
[V:3] D2 B,2 E2 C2 | F2 D2 G2 E2 | F2 G2 A2 A,2 | D,4 z4 |
% --- Sequential Episode ---
[V:1] A2 e2 c2 A2 | d2 f2 B2 d2 | G2 B2 E2 G2 | F2 d2 A2 G2 |
[V:2] z4 z2 E2 | A2 d2 F2 A2 | D2 G2 B,2 D2 | A,2 F2 E2 C2 |
[V:3] A,,2 A,2 C,2 C2 | D,2 D2 G,,2 G,2 | B,,2 B,2 E,,2 E,2 | A,,2 D,2 A,,2 A,,2 |
% --- Final Cadence ---
[V:1] (3fed (3gfe (3agf (3bag | f2 d2 e2 c2 | d8 |]
[V:2] d2 e2 f2 g2 | a2 f2 g2 e2 | f8 |]
[V:3] D,2 C,2 B,,2 G,,2 | A,,2 B,,2 A,,2 A,,2 | D,8 |]`,
    questions: [
        {
            id: 'q1',
            text: "What is the Italian tempo instruction for this piece?",
            options: [
                { id: 'a', text: "Moderato" },
                { id: 'b', text: "Adagio" },
                { id: 'c', text: "Allegro" },
                { id: 'd', text: "Presto" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q2',
            text: "What is the precise tempo of the piece in beats per minute (BPM)?",
            options: [
                { id: 'a', text: "100 BPM" },
                { id: 'b', text: "PM" },
                { id: 'c', text: "140 BPM" },
                { id: 'd', text: "60 BPM" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q3',
            text: "Identify the primary key of the piece.",
            options: [
                { id: 'a', text: "G Major" },
                { id: 'b', text: "A Major /" },
                { id: 'c', text: "D Major" },
                { id: 'd', text: "Major" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q4',
            text: "What is the time signature of this Ritornello?",
            options: [
                { id: 'a', text: "2/4" },
                { id: 'b', text: "3/4" },
                { id: 'c', text: "4/4" },
                { id: 'd', text: "6/8" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q5',
            text: "Which instrument is responsible for the 'Basso Continuo' line (V3)?",
            options: [
                { id: 'a', text: "Flute" },
                { id: 'b', text: "Cello or Viola da Gamba" },
                { id: 'c', text: "ello or Viola da Gamba" },
                { id: 'd', text: "Violin" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q6',
            text: "Which rhythmic decoration is used in the Violin (V1) in Bar 4 and Bar 13?",
            options: [
                { id: 'a', text: "Syncopation" },
                { id: 'b', text: "Dotted rhythms" },
                { id: 'c', text: "Triplets" },
                { id: 'd', text: "otted rhythms" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q7',
            text: "In Bar 4, the Basso Continuo (V3) ends on the note A. Which cadence is suggested here?",
            options: [
                { id: 'a', text: "Perfect Cadence (V-I)" },
                { id: 'b', text: "Plagal Cadence (IV-I)" },
                { id: 'c', text: "adence (V-I)" },
                { id: 'd', text: "Interrupted Cadence (V-vi)" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q8',
            text: "Look at Bars 9–11. What harmonic device is used as the music moves through different chords?",
            options: [
                { id: 'a', text: "Pedal point" },
                { id: 'b', text: "Descending sequence" },
                { id: 'c', text: "Ground bass" },
                { id: 'd', text: "escending sequence" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q9',
            text: "What is the interval between the first two notes of the Violin part in Bar 1?",
            options: [
                { id: 'a', text: "Perfect 4th" },
                { id: 'b', text: "Perfect 5th" },
                { id: 'c', text: "Major 6th" },
                { id: 'd', text: "Octave" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q10',
            text: "How would you describe the texture in Bars 5–7?",
            options: [
                { id: 'a', text: "Monophonic" },
                { id: 'b', text: "Polyphonic (Contrapuntal)" },
                { id: 'c', text: "ontrapuntal)" },
                { id: 'd', text: "Strictly Chordal" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q11',
            text: "What is the term for the steady, eighth-note (quaver) movement found in the bass line (e.g., Bar 3)?",
            options: [
                { id: 'a', text: "Alberti Bass" },
                { id: 'b', text: "ass" },
                { id: 'c', text: "Murky Bass" },
                { id: 'd', text: "Ostinato" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q12',
            text: "Based on the title and style, which of the following composers is most likely to have written this?",
            options: [
                { id: 'a', text: "Wolfgang Amadeus Mozart" },
                { id: 'b', text: "Antonio Vivaldi" },
                { id: 'c', text: "Franz Schubert" },
                { id: 'd', text: "Frédéric Chopin" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q13',
            text: "In Bar 13, the Violin (V1) plays a series of fast scales. What is the musical term for this virtuosic decoration?",
            options: [
                { id: 'a', text: "Glissando" },
                { id: 'b', text: "Fioritura (or Melodic Decoration)" },
                { id: 'c', text: "Mordent" },
                { id: 'd', text: "ecoration)" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q14',
            text: "What is the function of the Harpsichord (V2) in a Baroque ensemble of this type?",
            options: [
                { id: 'a', text: "To play the solo melody only" },
                { id: 'b', text: "To provide harmonic realization of the continuo" },
                { id: 'c', text: "To replace the violin in the sequences" },
                { id: 'd', text: "To conduct the orchestra" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q15',
            text: "Identify the cadence at the very end of the piece (Bars 14–15).",
            options: [
                { id: 'a', text: "Imperfect Cadence" },
                { id: 'b', text: "Perfect Cadence" },
                { id: 'c', text: "adence" },
                { id: 'd', text: "Phrygian Cadence" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q17',
            text: "Look at the Violin part in Bar 1. The notes are D - A - F# - D. What chord do these notes outline?",
            options: [
                { id: 'a', text: "G Major" },
                { id: 'b', text: "D Major" },
                { id: 'c', text: "A Major" },
                { id: 'd', text: "Major" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q18',
            text: "Which statement best describes the \"Polarized Texture\" typical of the Baroque period seen in this score?",
            options: [
                { id: 'a', text: "All instruments play in the same register." },
                { id: 'b', text: "There is a wide gap between the high melody and the firm bass line." },
                { id: 'c', text: "The middle voices are the most important." },
                { id: 'd', text: "Only one instrument plays at a time." }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q19',
            text: "What is the meaning of the Italian term \"Allegro\"?",
            options: [
                { id: 'a', text: "Very slow" },
                { id: 'b', text: "Fast and lively" },
                { id: 'c', text: "Walking pace" },
                { id: 'd', text: "Sweetly" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q20',
            text: "In Bar 15, the final chord contains the notes D (V3), F# (V2), and D (V1). Which note of the triad is provided by the Harpsichord to complete the tonality?",
            options: [
                { id: 'a', text: "The Root" },
                { id: 'b', text: "The Third" },
                { id: 'c', text: "The Fifth" },
                { id: 'd', text: "The Seventh" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
    ]
};

export const generatedQuiz13: Quiz = {
    id: 'aos01-97632558',
    title: "Baroque Concerto Grosso in G Major",
    abcNotation: `X:1
T:Baroque Concerto Grosso in G Major
C:AOS01_97632558
M:4/4
L:1/8
Q: "Allegro" 1/4=112
%%barnumbers 1
%%tempofont Wingdings 1
%%score (1 2 3) 4 5 [6 | 7]
V:1 name="Solo Violin" snm="S.Vln."
V:2 name="Violin I" snm="Vln.I"
V:3 name="Violin II" snm="Vln.II"
V:4 name="Viola" snm="Vla."
V:5 name="Basso Continuo (Cello)" snm="Vc." clef=bass
V:6 name="Harpsichord (RH)" snm="Hpschd."
V:7 name="Harpsichord (LH)" snm="Hpschd." clef=bass
K:G
% --- Ritornello (Tutti) ---
[V:1] G2 G>A B2 B>c | d2 de d2 cB | c2 e2 A2 d2 | B2 G2 G4 |
[V:2] G2 G>A B2 B>c | d2 de d2 cB | c2 e2 A2 d2 | B2 G2 G4 |
[V:3] D2 D2 G2 G2 | B2 Bc B2 AG | A2 c2 F2 A2 | G2 D2 D4 |
[V:4] B,2 B,2 D2 D2 | G2 G2 G2 G2 | E2 A,2 D2 D2 | D2 B,2 B,4 |
[V:5] G,2 G,2 G,2 G,2 | G,2 G,2 G,2 G,2 | C,2 C,2 D,2 D,2 | G,2 G,,2 G,4 |
[V:6] [GBd]2 [GAd]2 [GBe]2 [GBc]2 | [Bdg]2 [Bdg]2 [Bdg]2 [GBe]2 | [EAc]2 [EAc]2 [DAd]2 [DAd]2 | [GBd]2 [GBd]2 [G4B4d4] |
[V:7] G,2 G,2 G,2 G,2 | G,2 G,2 G,2 G,2 | C,2 C,2 D,2 D,2 | G,2 G,,2 G,4 |
% --- Solo Episode (Polyphonic) ---
[V:1] g d B d g d B d | a d c d a d c d | b g f g e g d g | f/g/a/g/ f/e/d/c/ B2 A2 |
[V:2] z8 | z8 | z8 | z8 |
[V:3] z8 | z8 | z8 | z8 |
[V:4] z8 | z8 | z8 | z8 |
[V:5] G,4 G,4 | F,4 F,4 | G,2 B,2 C2 B,2 | A,4 D,4 |
[V:6] z4 B4 | z4 A4 | G2 B2 C2 B2 | A2 G2 F2 D2 |
[V:7] G,4 G,4 | F,4 F,4 | G,2 B,2 C2 B,2 | A,4 D,4 |
% --- Ritornello Fragment (Tutti) ---
[V:1] G2 G>A B2 B>c | d2 de d2 cB | c2 e2 A2 d2 | G8 |]
[V:2] G2 G>A B2 B>c | d2 de d2 cB | c2 e2 A2 d2 | G8 |]
[V:3] D2 D2 G2 G2 | B2 Bc B2 AG | A2 c2 F2 A2 | B8 |]
[V:4] B,2 B,2 D2 D2 | G2 G2 G2 G2 | E2 A,2 D2 D2 | D8 |]
[V:5] G,2 G,2 G,2 G,2 | G,2 G,2 G,2 G,2 | C,2 C,2 D,2 D,2 | G,,8 |]
[V:6] [GBd]2 [GAd]2 [GBe]2 [GBc]2 | [Bdg]2 [Bdg]2 [Bdg]2 [GBe]2 | [EAc]2 [EAc]2 [DAd]2 [DAd]2 | [G8B8d8] |]
[V:7] G,2 G,2 G,2 G,2 | G,2 G,2 G,2 G,2 | C,2 C,2 D,2 D,2 | G,,8 |]`,
    questions: [
        {
            id: 'q1',
            text: "What is the Italian tempo marking for this piece?",
            options: [
                { id: 'a', text: "Allegretto" },
                { id: 'b', text: "Allegro" },
                { id: 'c', text: "Andante" },
                { id: 'd', text: "Presto" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q2',
            text: "What is the designated BPM (beats per minute) for the quarter note?",
            options: [
                { id: 'a', text: "120" },
                { id: 'b', text: "100" },
                { id: 'c', text: "112" },
                { id: 'd', text: "108" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q3',
            text: "Which key is this piece written in?",
            options: [
                { id: 'a', text: "C Major" },
                { id: 'b', text: "D Major" },
                { id: 'c', text: "Major" },
                { id: 'd', text: "Major" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q4',
            text: "What is the formal structure indicated by the return of the opening theme in Bars 9–12?",
            options: [
                { id: 'a', text: "Binary Form" },
                { id: 'b', text: "inary Form" },
                { id: 'c', text: "Sonata Form" },
                { id: 'd', text: "Variation Form" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q5',
            text: "Which rhythmic feature is prominent in the melody of Bars 1 and 2?",
            options: [
                { id: 'a', text: "Syncopation" },
                { id: 'b', text: "Dotted rhythms" },
                { id: 'c', text: "Triplets" },
                { id: 'd', text: "otted rhythms" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q6',
            text: "What is the relationship between the Solo Violin and Violin I in Bars 1–4?",
            options: [
                { id: 'a', text: "They play in octaves" },
                { id: 'b', text: "They play in unison" },
                { id: 'c', text: "They play in imitation" },
                { id: 'd', text: "They play a question-and-answer phrase" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q7',
            text: "Which harmonic device is used in the Basso Continuo (V5/V7) during Bars 1 and 2?",
            options: [
                { id: 'a', text: "Ground Bass" },
                { id: 'b', text: "ass" },
                { id: 'c', text: "Alberti Bass" },
                { id: 'd', text: "Chromatic Ascent" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q8',
            text: "In Bars 5–8, the Solo Violin plays while the other string parts (V2, V3, V4) remain silent. What is this section called?",
            options: [
                { id: 'a', text: "Cadenza" },
                { id: 'b', text: "Episode" },
                { id: 'c', text: "adenza" },
                { id: 'd', text: "Bridge" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q9',
            text: "What type of texture is found in Bar 1?",
            options: [
                { id: 'a', text: "Monophonic" },
                { id: 'b', text: "Polyphonic" },
                { id: 'c', text: "Melody-dominated homophony" },
                { id: 'd', text: "Heterophonic" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q10',
            text: "What is the specific role of the Harpsichord and Cello in this Baroque work?",
            options: [
                { id: 'a', text: "Concertino" },
                { id: 'b', text: "Basso Continuo" },
                { id: 'c', text: "oncertino" },
                { id: 'd', text: "Obbligato" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q11',
            text: "Looking at the Solo Violin in Bars 5–6, what melodic device is being used?",
            options: [
                { id: 'a', text: "Sequence" },
                { id: 'b', text: "Inversion" },
                { id: 'c', text: "Retrograde ) Augmentation" },
                { id: 'd', text: "Option D" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q12',
            text: "What happens to the texture in Bars 5–8?",
            options: [
                { id: 'a', text: "It becomes more dense" },
                { id: 'b', text: "It becomes polarized (top and bottom)" },
                { id: 'c', text: "It becomes strictly monophonic" },
                { id: 'd', text: "It uses four-part fugal imitation" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q13',
            text: "In Bar 8, the Solo Violin performs a rapid descent. How are these notes grouped?",
            options: [
                { id: 'a', text: "Semiquavers" },
                { id: 'b', text: "Demisemiquavers" },
                { id: 'c', text: "Quavers" },
                { id: 'd', text: "emisemiquavers" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q14',
            text: "What cadence is formed at the end of Bar 4?",
            options: [
                { id: 'a', text: "Imperfect (I-V)" },
                { id: 'b', text: "Interrupted (V-VI) ) Perfect (V-I)" },
                { id: 'c', text: "Option C" },
                { id: 'd', text: "Plagal (IV-I)" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q15',
            text: "What is the name given to the group of soloists in a Concerto Grosso?",
            options: [
                { id: 'a', text: "Ripieno" },
                { id: 'b', text: "Tutti" },
                { id: 'c', text: "Concertino" },
                { id: 'd', text: "Continuo" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q17',
            text: "What is the time signature of this piece?",
            options: [
                { id: 'a', text: "2/4" },
                { id: 'b', text: "3/4" },
                { id: 'c', text: "4/4" },
                { id: 'd', text: "6/8" }
            ],
            correctAnswerId: 'c',
            explanation: ""
        },
        {
            id: 'q18',
            text: "Describe the harmonic motion in Bar 7 (V5). The notes move C to D to G. This represents:",
            options: [
                { id: 'a', text: "IV - V - I" },
                { id: 'b', text: "I - IV - V" },
                { id: 'c', text: "II - V - I" },
                { id: 'd', text: "VI - V - I" }
            ],
            correctAnswerId: 'a',
            explanation: ""
        },
        {
            id: 'q19',
            text: "Which Baroque dynamic practice would most likely be applied to the contrast between the Ritornello (Bar 1) and the Solo Episode (Bar 5)?",
            options: [
                { id: 'a', text: "Crescendo" },
                { id: 'b', text: "Terraced dynamics" },
                { id: 'c', text: "rescendo" },
                { id: 'd', text: "iminuendo" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
        {
            id: 'q20',
            text: "What is the final cadence of the piece in Bar 12?",
            options: [
                { id: 'a', text: "Imperfect" },
                { id: 'b', text: "Perfect" },
                { id: 'c', text: "Plagal" },
                { id: 'd', text: "Phrygian" }
            ],
            correctAnswerId: 'b',
            explanation: ""
        },
    ]
};

// Export all generated quizzes as an array
export const generatedQuizzes = [
    generatedQuiz1,
    generatedQuiz2,
    generatedQuiz3,
    generatedQuiz4,
    generatedQuiz5,
    generatedQuiz6,
    generatedQuiz7,
    generatedQuiz8,
    generatedQuiz9,
    generatedQuiz10,
    generatedQuiz11,
    generatedQuiz12,
    generatedQuiz13
];
