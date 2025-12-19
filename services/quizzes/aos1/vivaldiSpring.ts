import { Quiz } from '../../../types';

// Vivaldi Spring Movement 1 - Allegro
// Full ABC notation with MIDI program directives for correct instrument sounds

export const vivaldiSpringQuiz: Quiz = {
    id: 'aos1-vivaldi-spring-allegro',
    title: "Vivaldi's Spring (Allegro) – Movement 1 Study",
    abcNotation: `X:1
T:Vivaldi: Spring (Allegro) - Movement 1
C:Antonio Vivaldi (1678-1741)
M:4/4
L:1/16
Q:"Allegro" 1/4=100
K:E
%%score [1 2 3 4]
V:1 name="Solo Violin" snm="Solo Vln."
%%MIDI program 40
V:2 name="Violins I & II" snm="Vlns."
%%MIDI program 40
V:3 name="Viola" clef=alto snm="Vla."
%%MIDI program 41
V:4 name="Continuo" clef=bass snm="Cont."
%%MIDI program 42
%
% === RITORNELLO 1: "Spring Has Arrived" (Bars 1-13) ===
%
[V:1] "^RITORNELLO 1: Spring Has Arrived"!f! z2e2 | g2g2 g2fe b6 ba | g2g2 g2fe b6 ba | g2ab a2g2 f2d2 B2!p!e2 |
[V:2]!f! z2e2 | g2g2 g2fe b6 ba | g2g2 g2fe b6 ba | g2ab a2g2 f2d2 B2!p!e2 |
[V:3]!f! z2G2 | B2B2 B2B2 E6 GA | B2B2 B2B2 E6 GA | B2B2 c2c2 F4 z2!p!G2 |
[V:4]!f! z2E,2 | E,4 E,4 E,4 E,4 | E,4 E,4 E,4 E,4 | E,2E,2 A,,2A,,2 B,,4 z2!p!E,2 |
%
[V:1] "^Terraced Dynamics (Echo)" g2g2 g2fe b6 ba | g2g2 g2fe b6 ba | g2ab a2g2 f4 z2!f!e2 |
[V:2] g2g2 g2fe b6 ba | g2g2 g2fe b6 ba | g2ab a2g2 f4 z2!f!e2 |
[V:3] B2B2 B2B2 E6 GA | B2B2 B2B2 E6 GA | B2B2 c2c2 F4 z2!f!G2 |
[V:4] E,4 E,4 E,4 E,4 | E,4 E,4 E,4 E,4 | E,2E,2 A,,2A,,2 B,,4 z2!f!E,2 |
%
[V:1] "^Phrase B - Sequence" b2ag a2b2 c'2 b4 e2 | b2ag a2b2 c'2 b4 e2 | c'2 b4 a2 g2fe !trill!f4 |
[V:2] b2ag a2b2 c'2 b4 e2 | b2ag a2b2 c'2 b4 e2 | c'2 b4 a2 g2fe !trill!f4 |
[V:3] E4 E4 A2 E4 E2 | E4 E4 A2 E4 E2 | A2 E4 d2 B4 B4 |
[V:4] E,4 E,4 E,4 E,4 | E,4 E,4 E,4 E,4 | E,4 E,2B,,2 E,2E,,2 B,2B,,2 |
%
[V:1] e4 z2!p!e2 b2ag a2b2 | c'2 b4 e2 b2ag a2b2 | c'2 b4 e2 c'2 b4 a2 | g2fe !trill!f4 e4 z4 |
[V:2] e4 z2!p!e2 b2ag a2b2 | c'2 b4 e2 b2ag a2b2 | c'2 b4 e2 c'2 b4 a2 | g2fe !trill!f4 e4 z4 |
[V:3] G4 z2!p!B2 E4 E4 | A2 E4 B2 E4 E4 | A2 E4 E2 A2 E4 d2 | B4 B4 G4 z4 |
[V:4] E,,4 z2!p!E,2 E,4 E,4 | E,4 E,4 E,4 E,4 | E,4 E,4 E,4 E,2B,,2 | E,2E,,2 B,2B,,2 E,,4 z4 |
%
% === EPISODE 1: "The Birds" (Bars 14-27) ===
%
[V:1] "^EPISODE 1: Birdsong"!f! !trill!b4 !trill!b4 !trill!b4 !trill!b4 | !trill!b4 !trill!b4 .b2.b2.b2.b2 | .b2.b2.b2.b2 .b2.b2.b2c'd' | e'd'c'b agfe z8 |
[V:2] z16 | z16 | z8!f! .b4.b4 | .b4.b4 .b4.b4 |
[V:3] z16 | z16 | z16 | z16 |
[V:4] "^Continuo tacet" z16 | z16 | z16 | z16 |
%
[V:1] z16 | z4 z2.e'2 .e'2.e'2.e'2.e'2 | !trill!e'6 .e'2 .e'2.e'2.e'2.e'2 | !trill!e'4 z4 b4- be'bc' |
[V:2] .b2.b2.b2.b2 .b2.b2.b2c'd' | e'd'c'b agfe z4 z2.e'2 | .e'2.e'2.e'2.e'2 !trill!e'6.e'2 | .e'2.e'2.e'2.e'2 !trill!e'4 !trill!g4 |
[V:3] z16 | z16 | z16 | z8 (aga) !trill!g4 |
[V:4] z16 | z16 | z16 | z16 |
%
% === RITORNELLO 2: Transition (Bars 28-30) ===
%
[V:1] "^RITORNELLO 2" z2e2 b2ag a2b2 c'2 b4 e2 | b2ag a2b2 c'2 b4 e2 | c'2 b4 a2 g2fe !trill!f4 |
[V:2]!f! z2e2 b2ag a2b2 c'2 b4 e2 | b2ag a2b2 c'2 b4 e2 | c'2 b4 a2 g2fe !trill!f4 |
[V:3] z2B2 E4 E4 A2 E4 B2 | E4 E4 A2 E4 B2 | A2 E4 d2 B4 B4 |
[V:4]!f! z2E,2 E,4 E,4 E,4 E,4 | E,4 E,4 E,4 E,4 | E,4 E,2B,,2 E,2E,,2 B,2B,,2 |
%
% === EPISODE 2: "Murmuring Streams" (Bars 31-40) ===
%
[V:1] "^EPISODE 2: Murmuring Streams"!p! e2(GA) (BA)(BA) (GA)(GA) (BA)(BA) | (GA)(GA) (BA)(BA) (GA)(GA) (Bc)(Bc) | (de)(de) (fe)(fe) (de)(de) (fe)(fe) |
[V:2]!p! e2(GA) (BA)(BA) (GA)(GA) (BA)(BA) | (GA)(GA) (BA)(BA) (GA)(GA) (Bc)(Bc) | (de)(de) (fe)(fe) (de)(de) (fe)(fe) |
[V:3] G4 z4 B4 z4 | B4 z4 B4 z4 | D4 z4 D4 z4 |
[V:4]!p! E,4 E,4 E,4 E,4 | E,4 E,4 E,4 E,4 | B,,4 B,,4 B,,4 B,,4 |
%
% === RITORNELLO 3: Dominant Key (Bars 41-44) ===
%
[V:1] "^RITORNELLO 3: B Major (Dominant)"!f! f2ed e2f2 g2 f4 B2 | f2ed e2f2 g2 f4 B2 | g2 f4 e2 d2cB !trill!c4 |
[V:2]!f! f2ed e2f2 g2 f4 B2 | f2ed e2f2 g2 f4 B2 | g2 f4 e2 d2cB !trill!c4 |
[V:3] B4 B4 E2 B4 F2 | B4 B4 E2 B4 F2 | E2 B2 D2A2 F4 F4 |
[V:4]!f! B,,4 B,,4 B,,4 B,,4 | B,,4 B,,4 B,,4 B,,4 | B,,4 B,,2F,2 B,2B,,2 F,2F,,2 |
%
% === EPISODE 3: "Thunder and Lightning" (Bars 45-55) ===
%
[V:1] "^EPISODE 3: The Storm - Thunder (Tremolo)" B,B,/B,/B,/B,/B,/B,/ B,/B,/B,/B,/B,/B,/B,/B,/ B,/B,/B,/B,/B,/B,/B,/B,/ B,/B,/B,/B,/B,/B,/B,/B,/ | "^Lightning (Scales)" (B/c/d/e/f/g/a/b/) z4 (B/c/d/e/f/g/a/b/) z4 |
[V:2] B,B,/B,/B,/B,/B,/B,/ B,/B,/B,/B,/B,/B,/B,/B,/ B,/B,/B,/B,/B,/B,/B,/B,/ B,/B,/B,/B,/B,/B,/B,/B,/ | (B/c/d/e/f/g/a/b/) z4 (B/c/d/e/f/g/a/b/) z4 |
[V:3] B,B,/B,/B,/B,/B,/B,/ B,/B,/B,/B,/B,/B,/B,/B,/ B,/B,/B,/B,/B,/B,/B,/B,/ B,/B,/B,/B,/B,/B,/B,/B,/ | (B/c/d/e/f/g/a/b/) z4 (B/c/d/e/f/g/a/b/) z4 |
[V:4] B,,4 B,,4 B,,4 B,,4 | B,,2 z2 B,,2 z2 B,,2 z2 B,,2 z2 |
%
% === RITORNELLO 4: C# Minor (Bars 56-59) ===
%
[V:1] "^RITORNELLO 4: C# Minor" c'4 z2 c2 | g2fe f2g2 a2 g4 c2 | g2fe f2g2 a2 g4 c2 | a2 g4 f2 e2dc !trill!d4 |
[V:2] C4 z2 c2 | g2fe f2g2 a2 g4 c2 | g2fe f2g2 a2 g4 c2 | a2 g4 f2 e2dc !trill!d4 |
[V:3] C4 z2 G2 | e2dc d2e2 f2 e4 e2 | e2dc d2e2 f2 e4 e2 | f2 e4 d2 c4 ^B4 |
[V:4] C,4 z2 C,2 | C,4 C,4 C,4 C,4 | C,4 C,4 C,4 C,4 | C,4 C,2G,2 C2C,2 G,2G,,2 |
%
% === EPISODE 4: "Birds Return" (Bars 60-66) ===
%
[V:1] "^EPISODE 4: Birds Return (Chromatic)" .c2.g2.g2.g2 .g2.g2.g2.g2 | .a2.a2.^a2.a2 .b2.b2.^b2.b2 | !trill!c'16- | !trill!c'16 |
[V:2] c4 z4 z8 | z16 | z2.c2.c2.c2 .c2.c2.c2.d2 | .e2.e2.^e2.e2 .f2.f2.^f2.f2 |
[V:3] c4 z4 z8 | z16 | z16 | z16 |
[V:4] C,16- | C,16- | C,16- | C,16- |
%
% === FINALE: Ritornello 5 & Closing (Bars 67-82) ===
%
[V:1] "^FINALE: Return to E Major" g2g2 g2fg a6 ag | f2f2 f2ef g6 ga | b2b2 b2ba g2g2 g2ga | b2b2 b2ba g2g2 g2ga |
[V:2] g2g2 g2fg a6 ag | f2f2 f2ef g6 ga | b2b2 b2ba g2g2 g2ga | b2b2 b2ba g2g2 g2ga |
[V:3] e2e2 e2de f6 fe | d2d2 d2cd e6 ef | g2g2 g2gf e2e2 e2ef | g2g2 g2gf e2e2 e2ef |
[V:4] C,2C,2 C,2C,2 F,2F,2 F,2F,2 | B,,2B,,2 B,,2B,,2 E,2E,2 E,2B,,2 | E,2E,2 E,2B,,2 E,2E,2 E,2B,,2 | E,2E,2 E,2B,,2 E,2E,2 E,2B,,2 |
%
[V:1] "^Final Ritornello" e2>g2 a2b2 c'2 b4 e2 | b2ag a2b2 c'2 b4 e2 | c'2 b4 a2 g2fe !trill!f4 | !fermata!e8 z8 |]
[V:2] b2ag a2b2 c'2 b4 e2 | b2ag a2b2 c'2 b4 e2 | c'2 b4 a2 g2fe !trill!f4 | !fermata!e8 z8 |]
[V:3] g2fe f2g2 a2 g4 g2 | g2fe f2g2 a2 g4 g2 | a2 g4 f2 e4 d4 | !fermata!e8 z8 |]
[V:4] E,4 E,4 E,4 E,4 | E,4 E,4 E,4 E,4 | E,4 E,2B,,2 E,2E,,2 B,2B,,2 | !fermata!E,,8 z8 |]`,
    questions: [
        // RITORNELLO FORM (5 questions)
        {
            id: 'vs1-q1',
            text: "What is the main structural form of Vivaldi's Spring Allegro?",
            options: [
                { id: '1', text: "Binary Form" },
                { id: '2', text: "Ritornello Form" },
                { id: '3', text: "Sonata Form" },
                { id: '4', text: "Rondo Form" }
            ],
            correctAnswerId: '2',
            explanation: "The movement uses Ritornello Form, where a recurring theme (Ritornello) played by the tutti alternates with contrasting solo episodes."
        },
        {
            id: 'vs1-q2',
            text: "In Ritornello form, what is the 'Tutti' section?",
            options: [
                { id: '1', text: "The solo violin playing alone" },
                { id: '2', text: "The full orchestra playing together" },
                { id: '3', text: "A passage for continuo only" },
                { id: '4', text: "An improvised cadenza" }
            ],
            correctAnswerId: '2',
            explanation: "Tutti means 'all' in Italian - it refers to the full orchestra playing the Ritornello theme together."
        },
        {
            id: 'vs1-q3',
            text: "How many times does the Ritornello theme appear in this movement?",
            options: [
                { id: '1', text: "3 times" },
                { id: '2', text: "4 times" },
                { id: '3', text: "5 times" },
                { id: '4', text: "6 times" }
            ],
            correctAnswerId: '3',
            explanation: "The Ritornello appears 5 times: at the opening (E Major), after the birds (E Major), in the dominant (B Major), in the relative minor (C# Minor), and at the finale (E Major)."
        },
        {
            id: 'vs1-q4',
            text: "What happens to the Ritornello theme as the movement progresses?",
            options: [
                { id: '1', text: "It gets longer each time" },
                { id: '2', text: "It is often abbreviated or fragmented" },
                { id: '3', text: "It is played in reverse" },
                { id: '4', text: "It remains exactly the same" }
            ],
            correctAnswerId: '2',
            explanation: "Vivaldi often abbreviates the Ritornello, using fragments of the theme rather than stating it in full each time."
        },
        {
            id: 'vs1-q5',
            text: "The opening Ritornello has an internal structure of:",
            options: [
                { id: '1', text: "ABCD" },
                { id: '2', text: "AABB" },
                { id: '3', text: "ABA" },
                { id: '4', text: "ABAB" }
            ],
            correctAnswerId: '2',
            explanation: "The opening Ritornello follows an AABB structure where each phrase is repeated with terraced dynamics (forte then piano)."
        },
        // TERRACED DYNAMICS (3 questions)
        {
            id: 'vs1-q6',
            text: "What is 'terraced dynamics' as heard in Bars 1-6?",
            options: [
                { id: '1', text: "Gradual crescendo" },
                { id: '2', text: "Sudden shifts between loud and soft (f/p)" },
                { id: '3', text: "Consistent mezzo-forte throughout" },
                { id: '4', text: "Diminuendo to silence" }
            ],
            correctAnswerId: '2',
            explanation: "Terraced dynamics are sudden, abrupt changes between loud (forte) and soft (piano) - a key characteristic of Baroque music. The same phrase is played forte, then immediately repeated piano as an 'echo.'"
        },
        {
            id: 'vs1-q7',
            text: "The 'echo effect' in the Ritornello is created by:",
            options: [
                { id: '1', text: "Playing the same music first forte, then piano" },
                { id: '2', text: "Using different instruments each time" },
                { id: '3', text: "Adding reverb in recording" },
                { id: '4', text: "Playing in different keys" }
            ],
            correctAnswerId: '1',
            explanation: "The echo effect is achieved by repeating the same musical phrase first loudly (forte), then softly (piano), creating a sense of depth and space."
        },
        {
            id: 'vs1-q8',
            text: "Why does the continuo drop out during the Bird episode?",
            options: [
                { id: '1', text: "The continuo players take a break" },
                { id: '2', text: "To create a lighter, airy texture for birdsong" },
                { id: '3', text: "The manuscript was damaged" },
                { id: '4', text: "Birds don't like bass instruments" }
            ],
            correctAnswerId: '2',
            explanation: "The absence of the continuo creates a high-frequency, ethereal texture appropriate for depicting birds flying in the sky. This technique is called 'tasto solo.'"
        },
        // PROGRAM MUSIC (4 questions)
        {
            id: 'vs1-q9',
            text: "What makes 'Spring' an example of program music?",
            options: [
                { id: '1', text: "It follows a concert program" },
                { id: '2', text: "It depicts a narrative (the sonnet) through music" },
                { id: '3', text: "It was written for a TV program" },
                { id: '4', text: "It uses a computer program to generate notes" }
            ],
            correctAnswerId: '2',
            explanation: "Program music tells a story or depicts images through instrumental music. Vivaldi attached a sonnet describing Spring, and the music depicts specific scenes: birdsong, streams, and a storm."
        },
        {
            id: 'vs1-q10',
            text: "How does Vivaldi depict birdsong in Episode 1?",
            options: [
                { id: '1', text: "Slow, sustained notes in the bass" },
                { id: '2', text: "Trills and rapid repeated notes in high violins" },
                { id: '3', text: "Loud timpani rolls" },
                { id: '4', text: "Sung text about birds" }
            ],
            correctAnswerId: '2',
            explanation: "Vivaldi uses trills (rapid alternation between two notes) and staccato repeated notes in the high register of the violins to imitate bird calls. Three solo violins 'converse' in imitation."
        },
        {
            id: 'vs1-q11',
            text: "The 'Murmuring Streams' episode uses which technique?",
            options: [
                { id: '1', text: "Loud chords" },
                { id: '2', text: "Flowing slurred semiquavers" },
                { id: '3', text: "Silence" },
                { id: '4', text: "Percussion effects" }
            ],
            correctAnswerId: '2',
            explanation: "Vivaldi depicts flowing water with smooth, slurred semiquaver passages that undulate up and down, creating a liquid, flowing texture marked piano."
        },
        {
            id: 'vs1-q12',
            text: "How is the storm (thunder and lightning) depicted?",
            options: [
                { id: '1', text: "Tremolo for thunder, rapid scales for lightning" },
                { id: '2', text: "Slow, quiet passages" },
                { id: '3', text: "Sung lyrics about weather" },
                { id: '4', text: "Harpsichord solos" }
            ],
            correctAnswerId: '1',
            explanation: "Thunder is depicted by tremolo (rapid repetition of notes, especially low B), while lightning is shown through fast ascending scales shooting upward in virtuosic passages."
        },
        // KEY RELATIONSHIPS (3 questions)
        {
            id: 'vs1-q13',
            text: "What is the home key (tonic) of 'Spring'?",
            options: [
                { id: '1', text: "C Major" },
                { id: '2', text: "G Major" },
                { id: '3', text: "E Major" },
                { id: '4', text: "D Major" }
            ],
            correctAnswerId: '3',
            explanation: "The movement is in E Major, a bright, sharp key with four sharps (F#, C#, G#, D#). This key contributes to the optimistic, joyful character of Spring."
        },
        {
            id: 'vs1-q14',
            text: "Ritornello 3 modulates to B Major. What is B Major's relationship to E Major?",
            options: [
                { id: '1', text: "Subdominant (IV)" },
                { id: '2', text: "Dominant (V)" },
                { id: '3', text: "Relative Minor (vi)" },
                { id: '4', text: "Parallel Minor (i)" }
            ],
            correctAnswerId: '2',
            explanation: "B Major is the Dominant (fifth scale degree) of E Major. Modulating to the dominant is standard practice in Baroque forms, creating tension that needs resolution."
        },
        {
            id: 'vs1-q15',
            text: "Ritornello 4 is in C# Minor. What is this key's relationship to E Major?",
            options: [
                { id: '1', text: "Parallel Minor" },
                { id: '2', text: "Dominant" },
                { id: '3', text: "Relative Minor" },
                { id: '4', text: "Subdominant" }
            ],
            correctAnswerId: '3',
            explanation: "C# Minor is the Relative Minor of E Major - they share the same key signature but have different tonal centers. This creates a darker mood for the post-storm section."
        },
        // INSTRUMENTATION (3 questions)
        {
            id: 'vs1-q16',
            text: "What is the role of the basso continuo in this concerto?",
            options: [
                { id: '1', text: "Play the melody" },
                { id: '2', text: "Provide the harmonic foundation" },
                { id: '3', text: "Add percussion effects" },
                { id: '4', text: "Sing the sonnet text" }
            ],
            correctAnswerId: '2',
            explanation: "The basso continuo (cello/bass + harpsichord) provides the harmonic foundation, playing the bass line and realizing chords from figured bass. It's the 'engine' of Baroque harmony."
        },
        {
            id: 'vs1-q17',
            text: "This work is classified as which type of concerto?",
            options: [
                { id: '1', text: "Concerto Grosso" },
                { id: '2', text: "Solo Concerto" },
                { id: '3', text: "Symphony" },
                { id: '4', text: "Chamber Music" }
            ],
            correctAnswerId: '2',
            explanation: "This is a Solo Concerto featuring one virtuoso soloist (violin) against the orchestra, unlike a Concerto Grosso which features a small group of soloists (concertino)."
        },
        {
            id: 'vs1-q18',
            text: "Who would have directed the performance in Vivaldi's time?",
            options: [
                { id: '1', text: "A conductor with a baton" },
                { id: '2', text: "The solo violinist or harpsichordist" },
                { id: '3', text: "The audience" },
                { id: '4', text: "A metronome" }
            ],
            correctAnswerId: '2',
            explanation: "In Vivaldi's time, there was no conductor with a baton. The Maestro di Concerti (often Vivaldi himself on solo violin) or the Maestro al Cembalo (harpsichordist) would direct from their instrument."
        },
        // ORNAMENTATION (2 questions)
        {
            id: 'vs1-q19',
            text: "What ornamentation is used extensively in the Bird episode?",
            options: [
                { id: '1', text: "Glissando" },
                { id: '2', text: "Trills" },
                { id: '3', text: "Vibrato" },
                { id: '4', text: "Harmonics" }
            ],
            correctAnswerId: '2',
            explanation: "Trills (rapid alternation between a note and the note above) are used extensively to imitate birdsong. In the score, these are marked with 'tr' or the trill symbol."
        },
        {
            id: 'vs1-q20',
            text: "What is 'tremolo' as used in the Storm episode?",
            options: [
                { id: '1', text: "Gradual speed change" },
                { id: '2', text: "Rapid repetition of a single note" },
                { id: '3', text: "Playing two notes at once" },
                { id: '4', text: "Bending pitch" }
            ],
            correctAnswerId: '2',
            explanation: "Tremolo is the rapid repetition of a single note, creating a 'trembling' effect. Vivaldi uses tremolo on low notes to depict the rumbling of thunder."
        }
    ]
};
