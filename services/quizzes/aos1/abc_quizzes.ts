import { Quiz } from '../../../types';

export const baroqueTextureQuiz: Quiz = {
    id: 'aos1-texture-continuo',
    title: "Identifying Baroque Texture and Continuo",
    abcNotation: `X:1
T:Specimen Extract: Continuo Texture
C:Baroque Assessment Bank
M:4/4
L:1/8
Q:"Andante" 1/4=90
K:G
%%MIDI program 40 % Violin
%%MIDI program 42 % Cello
V:1 name="Violin"
%%MIDI program 40 % Auto-injected for Violin
d2 g2 f2 g2 | e2 c2 A2 G2 | F2 A2 D2 c2 | B4 G4 |
B2 d2 g2 b2 | a2 g2 f4 | e2 g2 c2 e2 | d4 z4 |]
V:2 name="Cello (Continuo)" clef=bass
%%MIDI program 42 % Auto-injected for Cello (Continuo)
G,4 B,4 | C4 C,4 | D,4 F,4 | G,4 G,,4 |
G,4 B,4 | C4 D4 | E4 A,4 | D4 D,4 |]`,
    questions: [
        {
            id: 'bg1-q1',
            text: "Which two instruments would most likely form the basso continuo section in this extract?",
            options: [
                { id: '1', text: "Piano and Double Bass" },
                { id: '2', text: "Harpsichord and Cello" },
                { id: '3', text: "Organ and Timpani" },
                { id: '4', text: "Lute and Clarinet" }
            ],
            correctAnswerId: '2',
            explanation: "The harpsichord (for chords) and cello (for the bass line) constitute the standard Baroque continuo section."
        },
        {
            id: 'bg1-q2',
            text: "The texture of this extract, featuring a clear melody supported by a bass line, is best described as:",
            options: [
                { id: '1', text: "Monophonic" },
                { id: '2', text: "Polyphonic (Fugal)" },
                { id: '3', text: "Homophonic (Melody and Accompaniment)" },
                { id: '4', text: "Heterophonic" }
            ],
            correctAnswerId: '3',
            explanation: "While Baroque music is often contrapuntal, this extract shows a clear treble melody with a supporting bass, characteristic of solo sonata texture."
        },
        {
            id: 'bg1-q3',
            text: "Look at the bass part in bar 2. If the composer wanted the keyboard player to play a first inversion chord, what figure would be written below the note?",
            options: [
                { id: '1', text: "6" },
                { id: '2', text: "4/2" },
                { id: '3', text: "7" },
                { id: '4', text: "5/3" }
            ],
            correctAnswerId: '1',
            explanation: "In figured bass, the number '6' indicates a first inversion triad (intervals of a 3rd and 6th above the bass)."
        },
        {
            id: 'bg1-q4',
            text: "Which period of music history is defined by the presence of the continuo practice?",
            options: [
                { id: '1', text: "Renaissance" },
                { id: '2', text: "Baroque" },
                { id: '3', text: "Classical" },
                { id: '4', text: "Romantic" }
            ],
            correctAnswerId: '2',
            explanation: "The continuo is the most definitive feature of the Baroque era (c. 1600-1750)."
        }
    ]
};

export const baroqueDynamicsQuiz: Quiz = {
    id: 'aos1-terraced-dynamics',
    title: "Terraced Dynamics and Echo Effects",
    abcNotation: `X:2
T:Terraced Dynamics Study
C:Baroque Assessment Bank
M:3/4
L:1/8
Q:"Allegro" 1/4=120
K:D
V:1 name="Violin I"
%%MIDI program 40 % Auto-injected for Violin I
!f! d2 f2 a2 | d'2 a2 f2 | e2 g2 b2 | a4 z2 |
!p! d2 f2 a2 | d'2 a2 f2 | e2 g2 b2 | a4 z2 |
!f! f2 a2 d'2 | c'2 b2 a2 | ^g2 b2 e2 | a4 z2 |]`,
    questions: [
        {
            id: 'bg2-q1',
            text: "Compare bars 1-4 with bars 5-8. What is the primary difference?",
            options: [
                { id: '1', text: "The key changes to the relative minor." },
                { id: '2', text: "The rhythm changes from quavers to semiquavers." },
                { id: '3', text: "The dynamic changes from forte to piano." },
                { id: '4', text: "The melody is inverted." }
            ],
            correctAnswerId: '3',
            explanation: "The notation explicitly marks !f! then !p! for the identical phrase."
        },
        {
            id: 'bg2-q2',
            text: "What is the term for this immediate repetition of a phrase at a quieter volume?",
            options: [
                { id: '1', text: "Crescendo" },
                { id: '2', text: "Echo Effect / Terraced Dynamics" },
                { id: '3', text: "Sforzando" },
                { id: '4', text: "Diminuendo" }
            ],
            correctAnswerId: '2',
            explanation: "The abrupt shift without transition creates a 'terrace' of sound, often used to create an echo effect."
        },
        {
            id: 'bg2-q3',
            text: "Why was this dynamic technique common in Baroque keyboard music?",
            options: [
                { id: '1', text: "The piano had not yet been invented." },
                { id: '2', text: "Composers preferred soft music." },
                { id: '3', text: "The harpsichord mechanism could not produce gradual dynamic changes." },
                { id: '4', text: "Orchestras were too small to play loudly." }
            ],
            correctAnswerId: '3',
            explanation: "The plucked string mechanism of the harpsichord produces a uniform volume regardless of finger pressure."
        }
    ]
};

export const vivaldiRitornelloQuiz: Quiz = {
    id: 'aos1-vivaldi-ritornello',
    title: "Vivaldi’s Spring – Ritornello Form",
    abcNotation: `X:3
T:Concerto in E Major (Ritornello Style)
C:Antonio Vivaldi (Style of)
M:4/4
L:1/8
Q:"Allegro" 1/4=100
K:E
V:1 name="Violin Solo"
%%MIDI program 40 % Auto-injected for Violin Solo
!f! E2 G2 B2 B2 | B2 A2 G2 F2 | E2 G2 B2 B2 | B2 A2 G4 |
!p! e/f/g g2 e/f/g g2 | a2 f2 d2 B2 | c2 e2 A2 c2 | B8 |]
V:2 name="Orchestra"
%%MIDI program 48 % Auto-injected for Orchestra
!f! E,4 G,4 | B,4 B,,4 | E,4 G,4 | B,4 E4 |
!p! z8 | z8 | z8 | z8 |]`,
    questions: [
        {
            id: 'vv1-q1',
            text: "Bars 1-4 are played forte by the full orchestra. What is this structural section called?",
            options: [
                { id: '1', text: "Episode" },
                { id: '2', text: "Ritornello" },
                { id: '3', text: "Coda" },
                { id: '4', text: "Cadenza" }
            ],
            correctAnswerId: '2',
            explanation: "The 'Ritornello' (little return) is the recurring thematic block played by the full ensemble (Tutti/Ripieno)."
        },
        {
            id: 'vv1-q2',
            text: "In bars 5-8, the dynamic drops to piano and the solo violin plays decorative material. What is this section called?",
            options: [
                { id: '1', text: "Ritornello" },
                { id: '2', text: "Tutti" },
                { id: '3', text: "Episode" },
                { id: '4', text: "Minuet" }
            ],
            correctAnswerId: '3',
            explanation: "Sections between Ritornellos, featuring the soloist and often modulating or introducing new material, are called Episodes."
        },
        {
            id: 'vv1-q3',
            text: "The joyous mood of this opening is established by the key of:",
            options: [
                { id: '1', text: "E Major" },
                { id: '2', text: "E Minor" },
                { id: '3', text: "A Major" },
                { id: '4', text: "C Major" }
            ],
            correctAnswerId: '1',
            explanation: "The key signature (4 sharps) and the tonic chord (E-G#-B) confirm E Major."
        },
        {
            id: 'vv1-q4',
            text: "Vivaldi uses the solo violin in the episodes to depict images from a poem. This type of music is called:",
            options: [
                { id: '1', text: "Absolute Music" },
                { id: '2', text: "Programme Music" },
                { id: '3', text: "Sacred Music" },
                { id: '4', text: "Chamber Music" }
            ],
            correctAnswerId: '2',
            explanation: "Music intended to evoke extra-musical narrative or imagery (like the seasons) is Programmatic."
        }
    ]
};

export const vivaldiStormQuiz: Quiz = {
    id: 'aos1-vivaldi-storm',
    title: "Vivaldi’s Spring – The Storm (Tremolo)",
    abcNotation: `X:4
T:The Storm Episode
C:Antonio Vivaldi (Style of)
M:4/4
L:1/16
Q:"Presto" 1/4=132
K:E
V:1 name="Violin Solo"
%%MIDI program 40 % Auto-injected for Violin Solo
!f! B,2B,2 B,2B,2 B,2B,2 B,2B,2 | C2C2 C2C2 C2C2 C2C2 |
D2D2 D2D2 D2D2 D2D2 | E2E2 E2E2 E2E2 E2E2 |
e2dc bagf e2d2 c2B2 | c2BA G2F2 E4 z4 |]`,
    questions: [
        {
            id: 'vv2-q1',
            text: "The technique used in bars 1-4, where a single note is rapidly repeated, is called:",
            options: [
                { id: '1', text: "Vibrato" },
                { id: '2', text: "Tremolo" },
                { id: '3', text: "Pizzicato" },
                { id: '4', text: "Glissando" }
            ],
            correctAnswerId: '2',
            explanation: "Rapid iteration of a single pitch by the bow is string tremolo."
        },
        {
            id: 'vv2-q2',
            text: "In the programmatic context of 'Spring', what does this technique represent?",
            options: [
                { id: '1', text: "Birdsong" },
                { id: '2', text: "Murmuring Brooks" },
                { id: '3', text: "Thunder" },
                { id: '4', text: "The Barking Dog" }
            ],
            correctAnswerId: '3',
            explanation: "Vivaldi specifically uses low-string tremolo to mimic the rolling of thunder in the storm episode."
        },
        {
            id: 'vv2-q3',
            text: "The rapid descending scale in bar 5 represents:",
            options: [
                { id: '1', text: "Lightning" },
                { id: '2', text: "Wind" },
                { id: '3', text: "Rain" },
                { id: '4', text: "Dancing Nymphs" }
            ],
            correctAnswerId: '1',
            explanation: "Fast, rushing scales (often ascending) are used to depict flashes of lightning."
        },
        {
            id: 'vv2-q4',
            text: "The tempo indication 'Presto' suggests the music should be played:",
            options: [
                { id: '1', text: "Very slowly" },
                { id: '2', text: "At a walking pace" },
                { id: '3', text: "Very fast" },
                { id: '4', text: "Moderate speed" }
            ],
            correctAnswerId: '3',
            explanation: "Presto indicates a tempo faster than Allegro."
        }
    ]
};

export const vivaldiDogQuiz: Quiz = {
    id: 'aos1-vivaldi-dog',
    title: "Vivaldi’s Spring – The Barking Dog (Viola)",
    abcNotation: `X:5
T:Largo e Pianissimo
C:Antonio Vivaldi (Style of)
M:3/4
L:1/8
Q:"Largo" 1/4=50
K:C#m
V:1 name="Violin Solo (Melody)"
%%MIDI program 40 % Auto-injected for Violin Solo (Melody)
!p! c4 B2 | c4 B2 | G4 F2 | E6 |
V:2 name="Viola (The Dog)" clef=alto
%%MIDI program 41 % Auto-injected for Viola (The Dog)
!f! C2 z C z C | C2 z C z C | C2 z C z C | C2 z C z C |`,
    questions: [
        {
            id: 'vv3-q1',
            text: "This movement is in the relative minor of E Major. What is the key?",
            options: [
                { id: '1', text: "C# Minor" },
                { id: '2', text: "A Major" },
                { id: '3', text: "B Minor" },
                { id: '4', text: "F# Minor" }
            ],
            correctAnswerId: '1',
            explanation: "The relative minor of E Major is C# Minor (sharing the 4-sharp key signature)."
        },
        {
            id: 'vv3-q2',
            text: "The Viola part (Voice 2) plays a repeated, abrupt rhythm C2 z C z C. What does this represent?",
            options: [
                { id: '1', text: "A heartbeat" },
                { id: '2', text: "A ticking clock" },
                { id: '3', text: "A barking dog" },
                { id: '4', text: "Footsteps" }
            ],
            correctAnswerId: '3',
            explanation: "Vivaldi explicitly marked the viola part \"Il cane che grida\" (The barking dog)."
        },
        {
            id: 'vv3-q3',
            text: "Why is the Basso Continuo (Cello/Harpsichord) usually omitted in this movement?",
            options: [
                { id: '1', text: "To save money." },
                { id: '2', text: "To create a lighter, more ethereal texture." },
                { id: '3', text: "Because the harpsichord broke." },
                { id: '4', text: "It was forbidden in slow movements." }
            ],
            correctAnswerId: '2',
            explanation: "Omitting the continuo creates a 'floating' atmosphere appropriate for a sleeping scene."
        },
        {
            id: 'vv3-q4',
            text: "What clef does the Viola use?",
            options: [
                { id: '1', text: "Treble" },
                { id: '2', text: "Bass" },
                { id: '3', text: "Tenor" },
                { id: '4', text: "Alto" }
            ],
            correctAnswerId: '4',
            explanation: "The viola reads from the Alto clef (C clef on the middle line), indicated in ABC by clef=alto."
        }
    ]
};

export const handelOvertureQuiz: Quiz = {
    id: 'aos1-handel-overture',
    title: "Handel Op. 6 No. 5 – French Overture Style",
    abcNotation: `X:6
T:Overture in D (French Style)
C:G.F. Handel
M:4/4
L:1/8
Q:"Larghetto" 1/4=70
K:D
V:1 name="Violin I"
%%MIDI program 40 % Auto-injected for Violin I
!f! d3/2e/ f2 A3/2B/ c2 | d3/2c/ d2 D4 |
e3/2f/ g2 c3/2d/ e2 | A3/2B/ c2 A4 |
F3/2G/ A2 G3/2F/ E2 | D8 |]`,
    questions: [
        {
            id: 'han1-q1',
            text: "The rhythmic pattern d3/2e/ (dotted crotchet followed by quaver) is typical of which style?",
            options: [
                { id: '1', text: "Italian Sinfonia" },
                { id: '2', text: "French Overture" },
                { id: '3', text: "Gigue" },
                { id: '4', text: "Siciliana" }
            ],
            correctAnswerId: '2',
            explanation: "The jerky, dotted rhythms are the signature of the French Overture style established by Lully."
        },
        {
            id: 'han1-q2',
            text: "What is the tempo character of a French Overture's opening section?",
            options: [
                { id: '1', text: "Fast and light" },
                { id: '2', text: "Slow and majestic" },
                { id: '3', text: "Moderate and dance-like" },
                { id: '4', text: "Accelerating" }
            ],
            correctAnswerId: '2',
            explanation: "Designed for the entry of the King (Louis XIV), the style is pompous and grand."
        },
        {
            id: 'han1-q3',
            text: "In a Concerto Grosso, the full orchestra is referred to as the:",
            options: [
                { id: '1', text: "Concertino" },
                { id: '2', text: "Ripieno (or Tutti)" },
                { id: '3', text: "Soloist" },
                { id: '4', text: "Quartet" }
            ],
            correctAnswerId: '2',
            explanation: "The large group is the Ripieno; the small solo group is the Concertino."
        },
        {
            id: 'han1-q4',
            text: "Handel often borrowed material. From where did he adapt the first movement of this concerto?",
            options: [
                { id: '1', text: "His opera Rinaldo" },
                { id: '2', text: "His Water Music" },
                { id: '3', text: "Gottlieb Muffat's Componimenti Musicali" },
                { id: '4', text: "Bach's Brandenburg Concertos" }
            ],
            correctAnswerId: '3',
            explanation: "Handel famously borrowed thematic material for this movement from Muffat."
        }
    ]
};

export const handelFugueQuiz: Quiz = {
    id: 'aos1-handel-fugue',
    title: "Handel Op. 6 No. 5 – Fugal Texture",
    abcNotation: `X:7
T:Fugal Allegro
C:G.F. Handel
M:4/4
L:1/8
Q:"Allegro" 1/4=110
K:D
V:1 name="Violin I"
%%MIDI program 40 % Auto-injected for Violin I
z4 A2 d2 | c2 B2 A2 G2 | F2 E2 D2 F2 | E4 z4 |
V:2 name="Violin II"
%%MIDI program 40 % Auto-injected for Violin II
z8 | z4 A2 d2 | c2 B2 A2 G2 | F2 E2 D2 F2 |`,
    questions: [
        {
            id: 'han2-q1',
            text: "The musical texture where one voice introduces a melody and another voice repeats it shortly after is called:",
            options: [
                { id: '1', text: "Homophony" },
                { id: '2', text: "Monophony" },
                { id: '3', text: "Polyphony (Imitative)" },
                { id: '4', text: "Heterophony" }
            ],
            correctAnswerId: '3',
            explanation: "Independent lines mimicking each other create polyphony."
        },
        {
            id: 'han2-q2',
            text: "In a fugue, the first statement of the theme (Violin I, bar 1) is called the:",
            options: [
                { id: '1', text: "Coda" },
                { id: '2', text: "Subject" },
                { id: '3', text: "Countersubject" },
                { id: '4', text: "Episode" }
            ],
            correctAnswerId: '2',
            explanation: "The main theme of a fugue is the Subject."
        },
        {
            id: 'han2-q3',
            text: "When Violin II enters with the theme in bar 2, what is it called?",
            options: [
                { id: '1', text: "The Question" },
                { id: '2', text: "The Answer" },
                { id: '3', text: "The Development" },
                { id: '4', text: "The Recapitulation" }
            ],
            correctAnswerId: '2',
            explanation: "The second entry of the subject (usually at the dominant pitch) is the Answer."
        },
        {
            id: 'han2-q4',
            text: "This movement demonstrates Handel's mastery of:",
            options: [
                { id: '1', text: "Counterpoint" },
                { id: '2', text: "Serialism" },
                { id: '3', text: "Minimalism" },
                { id: '4', text: "Impressionism" }
            ],
            correctAnswerId: '1',
            explanation: "The art of combining different melodic lines is counterpoint, a key Baroque skill."
        }
    ]
};

export const corelliQuiz: Quiz = {
    id: 'aos1-corelli-pastorale',
    title: "Corelli’s Pastorale – The Sound of Christmas",
    abcNotation: `X:8
T:Pastorale (Largo)
C:Arcangelo Corelli
M:12/8
L:1/8
Q:"Largo" 1/4.=50
K:G
V:1 name="Violin I"
%%MIDI program 40 % Auto-injected for Violin I
G3 G3 F3 G3 | E3 A3 F3 D3 |
V:2 name="Violin II"
%%MIDI program 40 % Auto-injected for Violin II
B,3 D3 D3 B,3 | C3 E3 A,3 F,3 |
V:3 name="Cello" clef=bass
%%MIDI program 42 % Auto-injected for Cello
G,12 | C,12 |`,
    questions: [
        {
            id: 'cor1-q1',
            text: "The time signature 12/8 is an example of:",
            options: [
                { id: '1', text: "Simple Quadruple" },
                { id: '2', text: "Compound Quadruple" },
                { id: '3', text: "Simple Triple" },
                { id: '4', text: "Compound Duple" }
            ],
            correctAnswerId: '2',
            explanation: "12/8 has four beats per bar, each divided into three (dotted crotchet beat), making it compound quadruple."
        },
        {
            id: 'cor1-q2',
            text: "The long sustained note in the Cello part (Bar 1) is known as a:",
            options: [
                { id: '1', text: "Drone / Pedal Note" },
                { id: '2', text: "Walking Bass" },
                { id: '3', text: "Ground Bass" },
                { id: '4', text: "Alberti Bass" }
            ],
            correctAnswerId: '1',
            explanation: "A sustained bass note imitating a bagpipe drone is a key feature of the Pastorale."
        },
        {
            id: 'cor1-q3',
            text: "Why is this style called a 'Pastorale'?",
            options: [
                { id: '1', text: "It was written by a pastor." },
                { id: '2', text: "It imitates the bagpipes of Italian shepherds (pifferari)." },
                { id: '3', text: "It is meant to be played fast." },
                { id: '4', text: "It uses minor keys to depict sadness." }
            ],
            correctAnswerId: '2',
            explanation: "The Pastorale genre evokes the rural/shepherd imagery associated with the Nativity."
        },
        {
            id: 'cor1-q4',
            text: "Corelli's ensemble consists of two violins and a cello as soloists. This group is the:",
            options: [
                { id: '1', text: "Ripieno" },
                { id: '2', text: "Concertino" },
                { id: '3', text: "Tutti" },
                { id: '4', text: "Orchestra" }
            ],
            correctAnswerId: '2',
            explanation: "Corelli standardized the concertino trio (2 violins + cello)."
        }
    ]
};

export const bachAirQuiz: Quiz = {
    id: 'aos1-bach-air',
    title: "Bach’s Air – Walking Bass and Suspensions",
    abcNotation: `X:9
T:Air from Suite No. 3
C:J.S. Bach
M:4/4
L:1/8
Q:"Lento" 1/4=60
K:D
V:1 name="Violin I"
%%MIDI program 40 % Auto-injected for Violin I
f12 e4 | d4
V:2 name="Cello" clef=bass
%%MIDI program 42 % Auto-injected for Cello
D,2 D,,2 C,2 C,,2 | B,,2 B,,,2 A,,,2 G,,,2 |`,
    questions: [
        {
            id: 'bach1-q1',
            text: "The bass line moves in steady quavers, often stepping up or down an octave. This is called a:",
            options: [
                { id: '1', text: "Ground Bass" },
                { id: '2', text: "Walking Bass" },
                { id: '3', text: "Murky Bass" },
                { id: '4', text: "Drone" }
            ],
            correctAnswerId: '2',
            explanation: "The steady, non-stop rhythmic movement in the bass is a 'walking' bass."
        },
        {
            id: 'bach1-q2',
            text: "The melody in the violin often holds a note over a change of harmony, creating a dissonance that must resolve. This device is a:",
            options: [
                { id: '1', text: "Suspension" },
                { id: '2', text: "Trill" },
                { id: '3', text: "Sequence" },
                { id: '4', text: "Inversion" }
            ],
            correctAnswerId: '1',
            explanation: "Holding a note from a previous chord to create tension over a new chord is a suspension."
        },
        {
            id: 'bach1-q3',
            text: "This movement comes from an Orchestral Suite. Which of the following is NOT a standard dance found in a Baroque suite?",
            options: [
                { id: '1', text: "Allemande" },
                { id: '2', text: "Sarabande" },
                { id: '3', text: "Gigue" },
                { id: '4', text: "Waltz" }
            ],
            correctAnswerId: '4',
            explanation: "The Waltz is a 19th-century dance; standard Baroque dances include Allemande, Courante, Sarabande, and Gigue."
        }
    ]
};

export const telemannQuiz: Quiz = {
    id: 'aos1-telemann-trio',
    title: "The Trio Sonata Texture",
    abcNotation: `X:10
T:Trio Sonata in A Minor
C:G.P. Telemann
M:4/4
L:1/8
K:Am
V:1 name="Recorder"
%%MIDI program 74 % Auto-injected for Recorder
c2 e2 A2 c2 | B2 d2 G2 B2 |
V:2 name="Violin"
%%MIDI program 40 % Auto-injected for Violin
e2 c2 f2 e2 | d2 B2 e2 d2 |
V:3 name="Cello" clef=bass
%%MIDI program 42 % Auto-injected for Cello
A,4 A,,4 | G,,4 G,4 |`,
    questions: [
        {
            id: 'tel1-q1',
            text: "How many musicians are required to play a Baroque Trio Sonata?",
            options: [
                { id: '1', text: "Three" },
                { id: '2', text: "Four" },
                { id: '3', text: "Two" },
                { id: '4', text: "Six" }
            ],
            correctAnswerId: '2',
            explanation: "Two soloists + Cello + Harpsichord = 4 players."
        },
        {
            id: 'tel1-q2',
            text: "The two upper parts (Recorder and Violin) often cross and imitate each other. What is this relationship called?",
            options: [
                { id: '1', text: "Counterpoint" },
                { id: '2', text: "Unison" },
                { id: '3', text: "Drone" },
                { id: '4', text: "Parallel motion" }
            ],
            correctAnswerId: '1',
            explanation: "The interplay of independent lines is counterpoint."
        },
        {
            id: 'tel1-q3',
            text: "The bass part would be doubled by a keyboard instrument reading:",
            options: [
                { id: '1', text: "Tablature" },
                { id: '2', text: "Figured Bass" },
                { id: '3', text: "Lead Sheet" },
                { id: '4', text: "Tonic Sol-fa" }
            ],
            correctAnswerId: '2',
            explanation: "The keyboard player improvises chords based on the numbers (figures) below the bass line."
        }
    ]
};

export const ornamentsQuiz: Quiz = {
    id: 'aos1-ornaments',
    title: "Identifying Ornaments",
    abcNotation: `X:11
T:Ornamentation Study
C:Baroque Assessment Bank
M:4/4
L:1/4
K:C
V:1 name="Flute"
%%MIDI program 73 % Auto-injected for Flute
!trill!c2 d2 |!mordent!e2 f2 | {d}c4 |]`,
    questions: [
        {
            id: 'orn1-q1',
            text: "The symbol !trill! indicates a rapid alternation between the note and:",
            options: [
                { id: '1', text: "The note below" },
                { id: '2', text: "The note above" },
                { id: '3', text: "An octave higher" },
                { id: '4', text: "The same note" }
            ],
            correctAnswerId: '2',
            explanation: "A standard Baroque trill starts on the upper auxiliary note."
        },
        {
            id: 'orn1-q2',
            text: "The symbol {d}c4 represents a:",
            options: [
                { id: '1', text: "Turn" },
                { id: '2', text: "Trill" },
                { id: '3', text: "Appoggiatura / Grace Note" },
                { id: '4', text: "Glissando" }
            ],
            correctAnswerId: '3',
            explanation: "The small note in brackets indicates a leaning note or grace note."
        }
    ]
};

export const harmonyQuiz: Quiz = {
    id: 'aos1-harmony-circle',
    title: "Sequences and The Circle of Fifths",
    abcNotation: `X:12
T:Circle of Fifths
C:Baroque Assessment Bank
M:4/4
L:1/8
K:C
V:1 name="Violin"
%%MIDI program 40 % Auto-injected for Violin
e2 g2 c2 e2 | d2 f2 B2 d2 | c2 e2 A2 c2 |
V:2 name="Bass" clef=bass
C4 E4 | B,4 D4 | A,4 C4 |`,
    questions: [
        {
            id: 'harm1-q1',
            text: "The melody in bar 1 is repeated in bar 2 and 3 at successively lower pitches. This is a:",
            options: [
                { id: '1', text: "Ascending Sequence" },
                { id: '2', text: "Descending Sequence" },
                { id: '3', text: "Canon" },
                { id: '4', text: "Rondo" }
            ],
            correctAnswerId: '2',
            explanation: "The pattern repeats at a lower pitch level."
        },
        {
            id: 'harm1-q2',
            text: "The harmonic progression C -> B -> A implies movement through the:",
            options: [
                { id: '1', text: "Chromatic Scale" },
                { id: '2', text: "Circle of Fifths" },
                { id: '3', text: "Pentatonic Scale" },
                { id: '4', text: "Whole Tone Scale" }
            ],
            correctAnswerId: '2',
            explanation: "While the bass notes here are simplified, the implied root movement (C-F-B-E-A-D-G-C) is the standard Baroque drive mechanism."
        }
    ]
};

export const specimenAllegroQuiz: Quiz = {
    id: 'aos1-specimen-allegro',
    title: "Baroque Allegro (Specimen 5)",
    abcNotation: `X:1
T:Specimen Extract: Baroque Allegro
C:SchoolClass.Net
M:4/4
L:1/8
%%tempofont Wingdings 1
Q:"Allegro" 1/4=120
K:D
%%barnumbers 1
%%MIDI program 40 % Violin
V:1 name="Violin"
!f! d2 f2 a2 d'2 | c'2 b2 a4 | !p! g2 f2 e2 d2 | c2 B2 A4 |
!f! B2 d2 g2 b2 | a2 g2 f4 | e2 d2 !trill!c2 B2 | A4 z4 |
a2 g2 f2 e2 | d2 c2 B2 A2 | G2 F2 E2 D2 | D4 z4 |]
V:2 name="Cello (Continuo)" clef=bass
%%MIDI program 42 % Cello
!f! D,4 F,4 | A,4 F,4 | !p! E,4 G,4 | A,4 F,4 |
!f! G,4 B,4 | F,4 D,4 | A,4 E,4 | A,,4 z4 |
F,4 A,4 | B,4 F,4 | G,4 A,4 | D,4 z4 |]`,
    questions: [
        {
            id: 'spec5-q1',
            text: "Which period of musical history does this extract represent?",
            options: [
                { id: '1', text: "Classical" },
                { id: '2', text: "Baroque" },
                { id: '3', text: "Romantic" },
                { id: '4', text: "Twentieth Century" }
            ],
            correctAnswerId: '2',
            explanation: "The presence of continuo functions (implied harpsichord), terraced dynamics, and ornamentation defines the period (c. 1600-1750)."
        }
    ]
};
