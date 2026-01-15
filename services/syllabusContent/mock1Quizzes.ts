export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // Index 0-3
    rationale: string;
}

export interface QuizData {
    id: string;
    title: string;
    topicCode: string;
    description: string;
    abcNotation: string;
    revisionNotes?: string;
    relatedLinks?: { text: string; url: string; }[];
    aiReminder?: boolean;
    questions: QuizQuestion[];
}

export const mock1Quizzes: Record<string, QuizData> = {
    'quiz-tonality': {
        id: 'quiz-tonality',
        title: '2.2 The Architecture of Tonality',
        topicCode: 'TOPIC_64310510',
        description: 'A comprehensive 20-question MCQ test on 2.2 The Architecture of Tonality.',
        revisionNotes: `
<h3>Study Handout: 2.2 The Architecture of Tonality</h3>
<p><strong>Tonality</strong> provides the “gravity” of a piece. It determines which note feels like “home” (the <strong>Tonic</strong>). Understanding the architecture requires fluency in the symbols used to map pitch.</p>

<h4>The Tools of Pitch</h4>
<p>Music is written on a staff governed by clefs.</p>
<ul>
    <li><strong>The Treble Clef (&):</strong> Generally locates G above middle C. It is used for higher voices (Violin, Flute, Soprano).</li>
    <li><strong>The Bass Clef (?):</strong> Locates the F below middle C. It is used for lower foundations (Cello, Tuba, Bass).</li>
</ul>

<h4>Key Signatures and Accidentals</h4>
<p>The specific “flavor” of the tonality is defined by the key signature, which instructs us which notes to alter consistently.</p>
<ul>
    <li><strong>Sharp (#):</strong> Raises a pitch by a semitone.</li>
    <li><strong>Flat (b):</strong> Lowers a pitch by a semitone.</li>
    <li><strong>Natural (n):</strong> Cancels a previous sharp or flat, returning the note to its white-key state.</li>
</ul>

<h4>The Functional Hierarchy</h4>
<p>In tonal music, not all notes are created equal. We organize them by <strong>Scale Degree</strong> to understand their structural weight.</p>

<table class="w-full text-left border-collapse border border-slate-300 dark:border-slate-700 my-4">
    <thead>
        <tr class="bg-slate-100 dark:bg-slate-800">
            <th class="border border-slate-300 dark:border-slate-700 p-2">Degree</th>
            <th class="border border-slate-300 dark:border-slate-700 p-2">Name</th>
            <th class="border border-slate-300 dark:border-slate-700 p-2">Function / “Personality”</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 dark:border-slate-700 p-2"><strong>I</strong></td>
            <td class="border border-slate-300 dark:border-slate-700 p-2"><strong>Tonic</strong></td>
            <td class="border border-slate-300 dark:border-slate-700 p-2"><strong>Home.</strong> The point of rest and resolution.</td>
        </tr>
        <tr>
            <td class="border border-slate-300 dark:border-slate-700 p-2"><strong>IV</strong></td>
            <td class="border border-slate-300 dark:border-slate-700 p-2"><strong>Subdominant</strong></td>
            <td class="border border-slate-300 dark:border-slate-700 p-2"><strong>The Departure.</strong> Often feels like moving away from home; creates moderate tension.</td>
        </tr>
        <tr>
            <td class="border border-slate-300 dark:border-slate-700 p-2"><strong>V</strong></td>
            <td class="border border-slate-300 dark:border-slate-700 p-2"><strong>Dominant</strong></td>
            <td class="border border-slate-300 dark:border-slate-700 p-2"><strong>The Tension.</strong> Demands resolution back to the Tonic (I).</td>
        </tr>
        <tr>
            <td class="border border-slate-300 dark:border-slate-700 p-2"><strong>VII</strong></td>
            <td class="border border-slate-300 dark:border-slate-700 p-2"><strong>Leading Tone</strong></td>
            <td class="border border-slate-300 dark:border-slate-700 p-2"><strong>The Guide.</strong> A semitone below the Tonic; it pulls strongly upward (e.g., Ti &rarr; Do).</td>
        </tr>
    </tbody>
</table>

<p><strong>Summary:</strong> When analyzing, look at the interaction between <strong>Texture</strong> (the layers) and <strong>Tonality</strong> (the key). A change from a thin <strong>Monophonic</strong> texture to a thick <strong>Polyphonic</strong> texture often coincides with a harmonic shift, creating a structural climax.</p>
`,
        abcNotation: `X: 1
T: 2.2 The Architecture of Tonality [TOPIC_64310510]
C: SchoolClass.Net
M: 4/4
L: 1/8
K: G
%%barnumbers 1
%%tempofont Wingdings 1
Q: "Andante con moto" 1/4=90
%%score { 1 | 2 | 3 | 4 }
V: 1 name="Violin I" clef=treble
V: 2 name="Violin II" clef=treble
V: 3 name="Viola" clef=alto
V: 4 name="Violoncello" clef=bass
%%MIDI program 1 40
%%MIDI program 2 40
%%MIDI program 3 41
%%MIDI program 4 42
% Section A: Monophonic Texture (The Tonic Home)
% Pedagogical Goal: Establish the Tonic (I) and Treble Clef
V: 1
"^Monophonic: Tonic (I)" G2 B d g2 d2 | c2 B A G4 | "^Leading Tone (VII)" F2 G A D2 EF | "^Resolution" G2 B2 G4 ||
V: 2
z8 | z8 | z8 | z8 ||
V: 3
z8 | z8 | z8 | z8 ||
V: 4
z8 | z8 | z8 | z8 ||
% Section B: Homophonic/2-Part (The Departure)
% Pedagogical Goal: Introduce Bass Clef and I -> IV -> V progression
V: 1
"^Homophonic" d2 c B A2 G2 | F2 G A B2 c2 | d2 g2 e2 c2 | "^Dominant (V)" d4 z4 ||
V: 2
z8 | z8 | z8 | z8 ||
V: 3
z8 | z8 | z8 | z8 ||
V: 4
"^Bass Clef" G,4 G,,4 | D,4 G,4 | B,4 "^Subdominant (IV)" C4 | D4 D,4 ||
% Section C: Polyphonic Texture (The Tension & Accidentals)
% Pedagogical Goal: Modulation using Sharps (#) and Naturals (n)
V: 1
"^Polyphonic" d2 "^Sharp (#)" ^c d e2 d2 | c2 B A B2 G2 | "^Natural (n)" =c2 B c d2 c2 | B2 A G A4 ||
V: 2
F2 E F G2 F2 | E2 D C D2 B,2 | E2 ^D E F2 E2 | G2 F E F4 ||
V: 3
A,4 A,4 | A,4 G,4 | G,4 A,4 | D4 D4 ||
V: 4
D,4 C,4 | D,4 G,,4 | C,4 C,4 | B,,4 D,4 ||
% Section D: Structural Climax & Resolution
% Pedagogical Goal: Modal Mixture (Flat b) and Final Cadence
V: 1
"^Climax" g2 f e "^Flat (b)" _e2 c2 | B2 d g f2 e2 | d2 c B A2 (3ABc | "^Tonic (I)" B2 A2 G4 |]
V: 2
B2 d c c2 G2 | G2 B d c2 B2 | B2 A G F2 E2 | D2 C2 B,4 |]
V: 3
D4 _E4 | D4 G,4 | G,4 C4 | D4 D4 |]
V: 4
G,4 C,4 | G,4 E,4 | D,4 D,4 | D,4 G,,4 |]`,
        questions: [
            {
                id: 1,
                question: 'Identify the Italian tempo marking indicated at the start of the score.',
                options: ['Allegro ma non troppo', 'Andante con moto', 'Adagio cantabile', 'Presto vivace'],
                correctAnswer: 1,
                rationale: 'The tempo header explicitly states "Andante con moto".'
            },
            {
                id: 2,
                question: 'What is the precise metronome mark (BPM) assigned to the quarter note in this piece?',
                options: ['60', '90', '120', '144'],
                correctAnswer: 1,
                rationale: 'The tempo header indicates 1/4=90.'
            },
            {
                id: 3,
                question: 'In Section A (bars 1-4), only the Violin I is playing. Which term best describes this texture?',
                options: ['Polyphonic', 'Homophonic', 'Monophonic', 'Heterophonic'],
                correctAnswer: 2,
                rationale: '"Monophonic" is a single melodic line without accompaniment. In bars 1-4, only Violin 1 plays (z8 rests in all other parts).'
            },
            {
                id: 4,
                question: 'Based on the melody in Bar 1 (G-B-d-g), which harmonic device is being used to establish the "Home" key?',
                options: ['A chromatic scale', 'An arpeggio (broken chord)', 'A pedal note', 'A sequence'],
                correctAnswer: 1,
                rationale: 'The notes G-B-d-g form the G Major triad played sequentially, which is the definition of an arpeggio.'
            },
            {
                id: 5,
                question: 'In Section B (starting at Bar 5), a low instrument enters to provide a foundation. Which clef does this instrument typically read?',
                options: ['Treble Clef', 'Alto Clef', 'Tenor Clef', 'Bass Clef'],
                correctAnswer: 3,
                rationale: 'Section B introduces the Cello (Violoncello), which serves as the "lower foundation" and reads the Bass Clef, as stated in the study handout.'
            },
            {
                id: 6,
                question: 'Look at the harmony in Bar 8. The phrase ends on a D Major chord (the V chord of the key). What is the functional name for this chord?',
                options: ['Tonic', 'Subdominant', 'Dominant', 'Leading Tone'],
                correctAnswer: 2,
                rationale: 'The chord is D Major. In the key of G Major, D is the 5th degree (V). The handout defines V as the "Dominant."'
            },
            {
                id: 7,
                question: 'How does the texture change between Section B (bars 5-8) and Section C (bars 9-12)?',
                options: ['It changes from Homophonic (Melody + Accompaniment) to Polyphonic (independent layers).', 'It changes from Polyphonic to Monophonic.', 'It remains strictly Monophonic throughout.', 'It becomes Unison.'],
                correctAnswer: 0,
                rationale: 'Section B has a clear melody and bass line (2-part Homophony). Section C (m.9) sees all four instruments playing independent rhythmic lines, creating Polyphony.'
            },
            {
                id: 8,
                question: 'In Bar 9, Violin I plays a C# (C-sharp). What does the Sharp symbol (#) do to the pitch?',
                options: ['Lowers the pitch by a semitone.', 'Raises the pitch by a semitone.', 'Cancels a previous accidental.', 'Doubles the length of the note.'],
                correctAnswer: 1,
                rationale: 'Definition of a Sharp (#) provided in the handout and applied to the C# in the score.'
            },
            {
                id: 9,
                question: 'In Bar 11, Violin I plays a note marked with a Natural sign (n). What is the function of this symbol?',
                options: ['It raises the pitch by a whole tone.', 'It lowers the pitch by a whole tone.', 'It cancels the previous sharp or flat, returning the note to its white-key state.', 'It indicates the note should be played loudly.'],
                correctAnswer: 2,
                rationale: 'Definition of a Natural (n) provided in the handout.'
            },
            {
                id: 10,
                question: 'Identify the rhythmic feature used in the melody of Bar 15 on beat 4.',
                options: ['Dotted rhythm', 'Syncopation', 'Triplet', 'Scotch Snap'],
                correctAnswer: 2,
                rationale: 'The notation (3ABc indicates three notes played in the time of two, which is a triplet.'
            },
            {
                id: 11,
                question: 'In Bar 13, the melody introduces an Eb (E-flat). Given the key is G Major, what effect does this accidental create?',
                options: ['It reinforces the major tonality.', 'It creates a "Modal Mixture" or minor color (borrowed from G Minor).', 'It acts as a Leading Tone to G.', 'It raises the pitch of E to create brightness.'],
                correctAnswer: 1,
                rationale: 'An Eb in the key of G Major lowers the 6th scale degree, associated with the minor mode. The handout mentions flats lower pitch; in context, this creates a "darker" minor chord (C minor) within the major key.'
            },
            {
                id: 12,
                question: 'Which instrument family is performing this piece?',
                options: ['Woodwind Quartet', 'Brass Quartet', 'String Quartet', 'Percussion Ensemble'],
                correctAnswer: 2,
                rationale: 'The parts are labeled Violin I, Violin II, Viola, and Violoncello.'
            },
            {
                id: 13,
                question: 'The final cadence in Bar 16 moves from the Dominant (D) to the Tonic (G). What type of cadence is this?',
                options: ['Plagal Cadence (IV-I)', 'Perfect (Authentic) Cadence (V-I)', 'Imperfect Cadence (I-V)', 'Interrupted Cadence (V-vi)'],
                correctAnswer: 1,
                rationale: 'The progression resolves from the Tension (Dominant D) to the Home (Tonic G), which is the definition of a Perfect Cadence.'
            },
            {
                id: 14,
                question: 'What is the time signature of this piece?',
                options: ['3/4 (Simple Triple)', '4/4 (Simple Quadruple)', '6/8 (Compound Duple)', '2/2 (Cut Time)'],
                correctAnswer: 1,
                rationale: 'The time signature M: 4/4 is at the start of the score.'
            },
            {
                id: 15,
                question: 'In Bar 3, the melody emphasizes F# before resolving to G. In functional harmony, F# is known as the:',
                options: ['Subdominant', 'Tonic', 'Leading Tone', 'Mediant'],
                correctAnswer: 2,
                rationale: 'F# is a semitone below the Tonic (G). The handout defines the VII degree as the Leading Tone which "pulls strongly upward."'
            },
            {
                id: 16,
                question: 'According to the study handout, which scale degree is considered "The Tension" that demands resolution?',
                options: ['The Tonic (I)', 'The Subdominant (IV)', 'The Dominant (V)', 'The Mediant (III)'],
                correctAnswer: 2,
                rationale: 'The handout explicitly links the Dominant (V) to "The Tension" which demands resolution.'
            },
            {
                id: 17,
                question: 'Which clef is described as locating the G above middle C and is used for higher voices like the Violin?',
                options: ['Bass Clef', 'Alto Clef', 'Treble Clef', 'Tenor Clef'],
                correctAnswer: 2,
                rationale: 'The handout states the Treble Clef locates G above middle C and is used for higher voices like the Violin.'
            },
            {
                id: 18,
                question: 'If a composer wants to lower a pitch by a semitone, which symbol must they use?',
                options: ['Sharp (#)', 'Natural (n)', 'Flat (b)', 'Fermata'],
                correctAnswer: 2,
                rationale: 'The handout defines the Flat symbol as the instruction to "Lower a pitch by a semitone."'
            },
            {
                id: 19,
                question: 'Which degree of the scale is known as "The Departure," often creating moderate tension by moving away from home?',
                options: ['I (Tonic)', 'IV (Subdominant)', 'V (Dominant)', 'VII (Leading Tone)'],
                correctAnswer: 1,
                rationale: 'The handout defines the Subdominant (IV) as "The Departure," creating moderate tension.'
            },
            {
                id: 20,
                question: 'When analyzing a piece of music, what is meant by "Tonality"?',
                options: ['The speed of the music.', 'The number of layers in the texture.', 'The "gravity" of the piece that determines which note feels like "home."', 'The loudness or softness of the sound.'],
                correctAnswer: 2,
                rationale: 'This is the verbatim definition of Tonality provided in the study handout.'
            }
        ],
        relatedLinks: [
            { text: 'Theory: Minor & Major Scales', url: '/theory/ch4/scales' },
            { text: 'AOS1: Baroque Tonality', url: '/aos/baroque/tonality' }
        ],
        aiReminder: true
    },
    'quiz-texture-basics': {
        id: 'quiz-texture-basics',
        title: 'Types of Musical Texture',
        topicCode: 'TOPIC_77913866',
        description: 'A comprehensive 20-question MCQ test on Types of Musical Texture, analyzing a score containing Monophony, Homophony, Polyphony, and Heterophony.',
        abcNotation: `X: 1
T: Types of Musical Texture [TOPIC_77913866]
C: SchoolClass.Net
M: 4/4
L: 1/8
K: G
Q: "Andante con moto" 1/4=96
%%tempofont Wingdings 1
%%score (V1) (V2) (V3)
%%barnumbers 1
%%staffsep 60
% Voice Definitions and MIDI Programs
V:1 name="Flute" snm="Fl."
%%MIDI program 73
V:2 name="Violin" snm="Vln."
%%MIDI program 40
V:3 name="Piano" snm="Pno." CLEF=bass
%%MIDI program 0
% SECTION 1: MONOPHONY (Bars 1-4)
% Definition: A single melodic line without accompaniment.
V:1
"^SECTION 1: MONOPHONY" G2 G>A B2 d2 | c>B A>G E2 D2 | G2 G>A B>c d>B | A4 G4 ||
V:2
z8 | z8 | z8 | z8 ||
V:3
z8 | z8 | z8 | z8 ||
% SECTION 2: HOMOPHONY (Bars 5-8)
% Definition: Melody supported by chordal accompaniment.
V:1
"^SECTION 2: HOMOPHONY" d2 d>e d2 B2 | c2 c>d c2 A2 | B>c d>B c>A B>G | A>G A>B G4 ||
V:2
z8 | z8 | z8 | z8 ||
V:3
[G,4D4] [G,4B,4] | [A,4E4] [D,4F,4] | [G,4D4] [C,4E4] | [D,4F,4] [G,4B,4] ||
% SECTION 3: POLYPHONY (Bars 9-12)
% Definition: Multiple independent melodic lines.
V:1
"^SECTION 3: POLYPHONY" z4 D2 G>A | B2 c2 d2 B2 | e2 d2 c2 B2 | A2 G2 F2 A2 ||
V:2
G,2 B,>C D2 F2 | G2 A2 B2 G2 | c2 B2 A2 G2 | F2 E2 D2 C2 ||
V:3
z8 | z8 | z8 | z8 ||
% SECTION 4: HETEROPHONY (Bars 13-16)
% Definition: Simultaneous variation of a single melodic line.
V:1
"^SECTION 4: HETEROPHONY" G2 G2 A2 G2 | E2 D2 C2 E2 | D2 C2 A,2 G,2 | G,4 G,4 |]
V:2
G>A B>G (3ABc G>F | E>F (3DEF (3EDC E2 | D>E (3FED A,>C (3B,A,G, | G,2 (3B,CD [G,4B,4] |]
V:3
z8 | z8 | z8 | z8 |]`,
        questions: [
            {
                id: 1,
                question: 'Identify the Italian tempo marking indicated at the beginning of the score.',
                options: ['Allegro moderato', 'Andante con moto', 'Adagio cantabile', 'Presto agitato'],
                correctAnswer: 1,
                rationale: 'The score header explicitly states "Andante con moto" as the tempo marking.'
            },
            {
                id: 2,
                question: 'What is the precise metronome mark (BPM) associated with the tempo in this extract?',
                options: ['Crotchet = 72', 'Crotchet = 120', 'Crotchet = 96', 'Crotchet = 60'],
                correctAnswer: 2,
                rationale: 'The score header indicates the metronome mark 1/4 (crotchet) = 96.'
            },
            {
                id: 3,
                question: 'Which instrument plays the melody alone in Section 1 (Bars 1–4)?',
                options: ['Violin', 'Piano', 'Flute', 'Cello'],
                correctAnswer: 2,
                rationale: 'In Bars 1–4 (Section 1), only Voice 1 (Flute) has notes; Voices 2 and 3 are marked with rests (z8).'
            },
            {
                id: 4,
                question: 'How is the texture in Bars 1–4 best described?',
                options: ['Homophonic', 'Monophonic', 'Polyphonic', 'Heterophonic'],
                correctAnswer: 1,
                rationale: 'Monophony is defined as a single melodic line without accompaniment. Since only the Flute is playing, the texture is monophonic.'
            },
            {
                id: 5,
                question: 'In Section 1, the melody in Bar 1 moves primarily by which type of motion?',
                options: ['Large chromatic leaps', 'Stepwise motion and small leaps', 'Rapid arpeggios', 'Static repetition'],
                correctAnswer: 1,
                rationale: 'The melody in Bar 1 moves from G to A (step) and B to d (small leap of a third). There are no large chromatic leaps or rapid arpeggios.'
            },
            {
                id: 6,
                question: 'Which instrument enters in Bar 5 to change the texture?',
                options: ['Violin', 'Piano', 'Double Bass', 'Oboe'],
                correctAnswer: 1,
                rationale: 'In Bar 5, Voice 3 (Piano) enters with chords [G,4D4], joining the Flute.'
            },
            {
                id: 7,
                question: 'Section 2 (Bars 5–8) demonstrates Homophony. Which feature defines this texture here?',
                options: ['Two melodies playing different rhythms simultaneously', 'A single melody played in unison by all instruments', 'A clear melody in the Flute supported by chordal accompaniment in the Piano', 'The Piano plays a variation of the Flute melody'],
                correctAnswer: 2,
                rationale: 'This is the textbook definition of Homophony presented in the piece: a foreground melody (Flute) with a background harmonic support (Piano).'
            },
            {
                id: 8,
                question: 'What is the rhythmic relationship between the melody and accompaniment in Section 2?',
                options: ['The accompaniment moves faster than the melody', 'Both parts move in identical rhythm', 'The melody moves in shorter note values (quavers) while the accompaniment moves in longer values (minims)', 'The accompaniment plays syncopated off-beats against a straight melody'],
                correctAnswer: 2,
                rationale: 'The Flute plays quavers (eighth notes) while the Piano plays minims (half notes), establishing a rhythmic hierarchy.'
            },
            {
                id: 9,
                question: 'In Section 3 (Bars 9–12), which two instruments interact to create the texture?',
                options: ['Flute and Piano', 'Violin and Piano', 'Flute and Violin', 'Piano (Left Hand) and Piano (Right Hand)'],
                correctAnswer: 2,
                rationale: 'In Bars 9–12, Voice 1 (Flute) and Voice 2 (Violin) are playing. Voice 3 (Piano) is tacet.'
            },
            {
                id: 10,
                question: 'Which term best describes the texture in Section 3 (Bars 9–12)?',
                options: ['Monophony', 'Homophony', 'Polyphony', 'Unison'],
                correctAnswer: 2,
                rationale: 'The section features two independent melodic lines (Flute and Violin) interacting, which defines polyphony.'
            },
            {
                id: 11,
                question: 'How is the independence of lines achieved in Section 3?',
                options: ['Through block chords moving together', 'Through rhythmic independence and counterpoint between the two voices', 'Through one instrument playing a drone while the other plays melody', 'Through exact rhythmic unison'],
                correctAnswer: 1,
                rationale: 'The Violin and Flute have different starting points and rhythmic profiles (e.g., the Violin plays quavers while the Flute plays crotchets in Bar 9), creating independence.'
            },
            {
                id: 12,
                question: 'In Section 4 (Bars 13–16), the Violin plays a decorated version of the Flute\'s melody. What is this texture called?',
                options: ['Heterophony', 'Monophony', 'Homophony', 'Antiphony'],
                correctAnswer: 0,
                rationale: 'Heterophony is defined as the simultaneous variation of a single melodic line. The Violin ornaments the same melody the Flute is playing.'
            },
            {
                id: 13,
                question: 'Identify the rhythmic device used by the Violin in Bar 14 to create variation against the Flute.',
                options: ['Syncopation', 'Triplets', 'Hemiola', 'Augmentation'],
                correctAnswer: 1,
                rationale: 'In Bar 14, Voice 2 (Violin) uses the notation (3DEF and (3EDC, which indicates triplets.'
            },
            {
                id: 14,
                question: 'In Section 4 (Bars 13–16), what role does the Flute play in relation to the Violin?',
                options: ['It plays the accompaniment chords', 'It plays a simple melodic skeleton', 'It plays rapid scales', 'It is silent'],
                correctAnswer: 1,
                rationale: 'In Section 4, the Flute plays a simplified, structural version of the melody (Quarter notes), serving as the "skeleton" which the Violin elaborates upon.'
            },
            {
                id: 15,
                question: 'The overall structure of this piece is defined by:',
                options: ['A return to the opening theme (A-B-A)', 'A set of variations on a ground bass', 'Four distinct sections, each demonstrating a different texture', 'A continuous fugue'],
                correctAnswer: 2,
                rationale: 'The piece is pedagogical, divided strictly into four 4-bar sections labeled Monophony, Homophony, Polyphony, and Heterophony.'
            },
            {
                id: 16,
                question: 'Which of the following is the most accurate definition of \'Polyphony\'?',
                options: ['A single melodic line with no accompaniment', 'A texture where all parts move in the same rhythm', 'A texture consisting of two or more simultaneous lines of independent melody', 'A texture where a melody is accompanied by chords'],
                correctAnswer: 2,
                rationale: 'This is the standard music theory definition of polyphony (poly = many, phonos = sounds/voices).'
            },
            {
                id: 17,
                question: 'In Western Classical music, Homophony (Melody and Accompaniment) became the dominant texture during which musical period?',
                options: ['Medieval', 'Renaissance', 'Classical and Romantic', 'Ancient Greek'],
                correctAnswer: 2,
                rationale: 'While homophony existed earlier, the melody-dominated homophony (melody + accompaniment) became the stylistic norm in the Classical period (Mozart, Haydn) and continued through the Romantic era.'
            },
            {
                id: 18,
                question: 'Which visual analogy best represents Heterophony?',
                options: ['A single thin line drawn on a page', 'A main subject in the foreground with a blurred background', 'Two different colored lines weaving around each other independently', 'A shadow that closely follows an object but with slight distortions'],
                correctAnswer: 3,
                rationale: 'This is a common visual analogy for heterophony: the main line is the object, and the variation is the shadow—same shape, but slightly different details.'
            },
            {
                id: 19,
                question: 'Monophony is most commonly associated with which of the following historical traditions?',
                options: ['Gregorian Chant', 'The Romantic Symphony', '20th Century Minimalism', 'The Baroque Fugue'],
                correctAnswer: 0,
                rationale: 'Gregorian Chant (Plainchant) is the most famous historical example of monophonic texture in Western music history.'
            },
            {
                id: 20,
                question: 'What is the key auditory cue to distinguish Polyphony from Homophony?',
                options: ['In Polyphony, you can hum along to a single clear tune; in Homophony, you cannot.', 'In Polyphony, there are multiple competing melodies of equal importance; in Homophony, there is one clear melody and a supporting background.', 'Polyphony is always faster than Homophony.', 'Homophony always uses drums, while Polyphony does not.'],
                correctAnswer: 1,
                rationale: 'This describes the auditory distinction regarding the "hierarchy of importance" within the texture.'
            }
        ],
        relatedLinks: [
            { text: 'Theory: Musical Texture (Chapter 14)', url: '/theory/ch14/texture' },
            { text: 'AOS1: Baroque Texture', url: '/aos/baroque/texture' }
        ],
        aiReminder: true
    },
    'quiz-texture-detailed': {
        id: 'quiz-texture-detailed',
        title: 'Musical Texture (Detailed)',
        topicCode: 'TOPIC_11437684',
        description: 'Detailed definitions, visual analogies, and auditory cues for: Monophony, Homophony, Polyphony, Heterophony.',
        abcNotation: `X: 1
T: Types of Musical Texture
C: SchoolClass.Net
M: 4/4
L: 1/8
K: Gm
Q: "Andante Con Moto" 1/4=96
%%tempofont Wingdings 1
%%barnumbers 1
%%staves (1) (2) (3)
% Voice 1: Flute (Lead Melody)
V:1 name="Flute" snm="Fl." clef=treble
%%MIDI program 73
% Voice 2: Clarinet (Counterpoint/Ornamentation)
V:2 name="Clarinet in Bb" snm="Cl." clef=treble
%%MIDI program 71
% Voice 3: Cello (Bass/Accompaniment)
V:3 name="Violoncello" snm="Vc." clef=bass
%%MIDI program 42
% --- SECTION 1: MONOPHONY (Bars 1-4) ---
% A single melodic line without accompaniment.
[V:1] "^Monophony" G2 B2 d2 cB | A2 G2 ^F2 D2 | G2 B2 d2 g2 | ^f4 d4 ||
[V:2] z8 | z8 | z8 | z8 ||
[V:3] z8 | z8 | z8 | z8 ||
% --- SECTION 2: HOMOPHONY (Bars 5-8) ---
% Melody supported by chordal accompaniment (Melody-Dominated Homophony).
[V:1] "^Homophony" e2 c2 G2 c2 | d2 B2 G2 B2 | c2 A2 ^F2 A2 | G4 G4 ||
[V:2] [G2c2] [G2c2] [E2c2] [E2c2] | [G2B2] [G2B2] [D2B2] [D2G2] | [E2A2] [E2A2] [D2A2] [D2c2] | [D4B4] [D4=B4] ||
[V:3] C,2 E,2 G,2 E,2 | G,,2 D,2 G,2 F,2 | E,2 C,2 D,2 D,,2 | G,,2 B,,2 D,2 G,2 ||
% --- SECTION 3: POLYPHONY (Bars 9-16) ---
% Multiple independent melodic lines (Imitative Fugato).
[V:1] "^Polyphony" z4 z2 D2 | G2 B2 d2 cB | A2 G2 ^F2 D2 | B2 G2 c2 A2 | d2 cB A2 G2 | ^F2 D2 G2 A2 | B4 A4 | G4 z4 ||
[V:2] z8 | z4 z2 D2 | G2 B2 d2 cB | A2 G2 ^F2 D2 | B2 G2 c2 e2 | d2 cB A2 c2 | B2 G2 d2 c2 | B4 z4 ||
[V:3] D,2 ^F,2 A,2 C2 | B,2 G,2 B,2 G,2 | D,2 =E,2 ^F,2 A,2 | G,2 B,2 A,2 G,2 | ^F,2 E,2 D,2 C,2 | D,2 E,2 C,2 A,,2 | D,2 E,2 ^F,2 D,2 | G,,2 B,,2 D,2 G,2 ||
% --- SECTION 4: HETEROPHONY (Bars 17-20) ---
% Simultaneous variation of a single melodic line (Simple vs. Ornamented).
[V:1] "^Heterophony" d2 c2 B2 A2 | G2 A2 B2 G2 | A2 G2 ^F2 E2 | D8 |]
[V:2] (d/e/d/c/) (c/d/c/B/) (B/c/B/A/) (A/B/A/G/) | (G/A/B/G/) (A/B/c/A/) (B/c/d/c/) (B/A/G/B/) | (A/G/A/B/) (c/B/A/G/) (A/G/^F/G/) (E/^F/G/E/) | ^F8 |]
[V:3] [G,8B,8] | [G,8D8] | [D,8A,8] | [D,8A,8] |]`,
        questions: [
            {
                id: 1,
                question: 'Identify the Italian tempo marking indicated in the score header.',
                options: ['Allegro Vivace', 'Adagio', 'Andante Con Moto', 'Presto'],
                correctAnswer: 2,
                rationale: 'The tempo marking is explicitly stated in the header of the score as "Andante Con Moto".'
            },
            {
                id: 2,
                question: 'What is the metronome mark (BPM) associated with the tempo in this extract?',
                options: ['60 crotchet beats per minute', '96 crotchet beats per minute', '120 crotchet beats per minute', '144 crotchet beats per minute'],
                correctAnswer: 1,
                rationale: 'The header indicates "1/4=96", meaning 96 quarter notes (crotchets) per minute.'
            },
            {
                id: 3,
                question: 'Based on the clefs and names in the score, which combination of instruments performs this extract?',
                options: ['String Quartet (Violin I, Violin II, Viola, Cello)', 'Brass Trio (Trumpet, Horn, Trombone)', 'Mixed Trio (Flute, Clarinet in Bb, Violoncello)', 'Percussion Ensemble (Xylophone, Marimba, Timpani)'],
                correctAnswer: 2,
                rationale: 'The staff names are labelled "Flute", "Clarinet in Bb", and "Violoncello".'
            },
            {
                id: 4,
                question: 'What is the overall Tonality (Key) of the extract, indicated by the two flats in the key signature?',
                options: ['G Major', 'D Major', 'G Minor', 'Bb Major'],
                correctAnswer: 2,
                rationale: 'The key signature contains two flats (Bb and Eb), and the music frequently uses F# (the leading tone) and ends phrases on G, indicating G Minor rather than Bb Major.'
            },
            {
                id: 5,
                question: 'Listen to (or observe) Bars 1-4. Which musical texture is presented in this opening section?',
                options: ['Polyphony', 'Monophony', 'Homophony', 'Heterophony'],
                correctAnswer: 1,
                rationale: 'In Bars 1-4, only the Flute is playing. A single melodic line without accompaniment is the definition of Monophony.'
            },
            {
                id: 6,
                question: 'In Bar 1, what is the specific melodic interval between the first two notes played by the Flute?',
                options: ['Perfect 4th', 'Major 3rd', 'Minor 3rd', 'Perfect 5th'],
                correctAnswer: 2,
                rationale: 'The key is G Minor. The notes are G and Bb. The interval between these two pitches is a Minor 3rd.'
            },
            {
                id: 7,
                question: 'How does the texture change in Section 2 (Bars 5-8)?',
                options: ['It becomes Monophonic (one voice only)', 'It becomes Homophonic (melody with chordal accompaniment)', 'It becomes Polyphonic (multiple independent melodies)', 'It becomes Heterophonic (simultaneous variation)'],
                correctAnswer: 1,
                rationale: 'In Bars 5-8, the Flute plays the melody while the Clarinet and Cello provide harmonic/chordal support, creating a homophonic texture.'
            },
            {
                id: 8,
                question: 'Look at Bar 8. The piece is in a minor key, but the final chord of this section includes a B natural instead of a B flat. What is this harmonic device called?',
                options: ['Tierce de Picardie (Picardy Third)', 'Plagal Cadence', 'Neapolitan Sixth', 'Suspension'],
                correctAnswer: 0,
                rationale: 'A Tierce de Picardie is the use of a major third in the final tonic chord of a passage in a minor key (changing the Gm chord to G Major).'
            },
            {
                id: 9,
                question: 'In Section 3 (Bars 9-16), the instruments enter one after another with independent melodic lines. What is this texture called?',
                options: ['Monophony', 'Homophony', 'Polyphony', 'Unison'],
                correctAnswer: 2,
                rationale: 'In Bars 9-16, the voices move independently with staggered entries and different rhythms, creating a polyphonic (contrapuntal) texture.'
            },
            {
                id: 10,
                question: 'What specific compositional device is used in Bars 9-12 where the Clarinet repeats the Flute\'s melody a few beats later?',
                options: ['Sequence', 'Imitation', 'Ostinato', 'Inversion'],
                correctAnswer: 1,
                rationale: 'The Clarinet enters in Bar 10 playing the same melodic figure the Flute played in Bar 9. This repetition of a phrase by another voice is called imitation.'
            },
            {
                id: 11,
                question: 'Describe the role of the Cello (Voice 3) in Section 3 (Bars 9-16).',
                options: ['It plays long sustained drone notes.', 'It is silent (tacet).', 'It plays an independent "walking" bass line.', 'It doubles the Flute melody exactly.'],
                correctAnswer: 2,
                rationale: 'In Section 3, the cello plays a steady stream of crotchets (quarter notes) that moves independently of the upper voices, typical of a walking bass line.'
            },
            {
                id: 12,
                question: 'In Section 4 (Bars 17-20), the Flute plays a simple melody while the Clarinet plays an ornamented version of the *same* melody simultaneously. What texture does this create?',
                options: ['Heterophony', 'Homophony', 'Monophony', 'Antiphony'],
                correctAnswer: 0,
                rationale: 'Heterophony occurs when two or more voices simultaneously perform variations of the same melodic line (one simple, one ornamented).'
            },
            {
                id: 13,
                question: 'Which rhythmic value is predominantly used by the Clarinet in Section 4 to ornament the melody?',
                options: ['Minims (Half notes)', 'Crotchets (Quarter notes)', 'Quavers (Eighth notes)', 'Semiquavers (Sixteenth notes)'],
                correctAnswer: 3,
                rationale: 'In Bars 17-20 (Voice 2), the beamed notes are double-beamed (dividing the 1/8 note unit), indicating semiquavers (sixteenth notes), which ornament the melody.'
            },
            {
                id: 14,
                question: 'What describes the accompaniment played by the Cello in Section 4 (Bars 17-20)?',
                options: ['Alberti Bass', 'Staccato chords', 'Drone (Pedal point)', 'Arpeggios'],
                correctAnswer: 2,
                rationale: 'In Section 4, the Cello holds long sustained notes for the duration of the section, acting as a drone.'
            },
            {
                id: 15,
                question: 'The extract ends in Bar 20 on a D Major chord (the Dominant), leaving the music sounding unfinished. What type of cadence is this?',
                options: ['Perfect Cadence', 'Plagal Cadence', 'Interrupted Cadence', 'Half (Imperfect) Cadence'],
                correctAnswer: 3,
                rationale: 'The music ends on a D Major chord. In the key of G Minor, D is the Dominant (V). Ending on the Dominant creates a Half Cadence, sounding unresolved.'
            },
            {
                id: 16,
                question: 'Which of the following is the correct definition of Monophony?',
                options: ['A single melodic line with no harmonic accompaniment.', 'A melody supported by chords.', 'Two or more independent melodic lines played simultaneously.', 'A single melody played with simultaneous variations.'],
                correctAnswer: 0,
                rationale: 'This is the standard definition of Monophony. It applies even if multiple instruments play in unison.'
            },
            {
                id: 17,
                question: 'Which visual analogy best describes Polyphonic texture?',
                options: ['A single thread (Monophony).', 'A block of solid colour (Homophony).', 'Several coloured threads woven together into a complex knot.', 'A blurred line or shadow (Heterophony).'],
                correctAnswer: 2,
                rationale: 'Polyphony implies "many sounds" moving independently. The weaving of distinct threads is the standard visual analogy for counterpoint/polyphony.'
            },
            {
                id: 18,
                question: 'In which musical tradition is Heterophony most commonly found as a primary texture?',
                options: ['Classical Viennese Symphonies', '19th Century Romantic Piano Music', 'Traditional Gamelan or Folk Music', 'Modern Pop Ballads'],
                correctAnswer: 2,
                rationale: 'While rare in Western Classical music (except as an effect), Heterophony is a defining characteristic of many non-Western traditions, including Indonesian Gamelan and various Folk traditions.'
            },
            {
                id: 19,
                question: 'Which texture is generally defined as "Melody-Dominated," where the listener focuses on one lead line supported by background harmony?',
                options: ['Monophony', 'Homophony', 'Polyphony', 'Heterophony'],
                correctAnswer: 1,
                rationale: 'Homophony is characterized by a clear hierarchy: a primary melody supported by an accompaniment that is subordinate to it.'
            },
            {
                id: 20,
                question: 'If a choir sings a hymn where everyone sings the exact same rhythm but different pitches (chords), what is the specific type of Homophony?',
                options: ['Fugal', 'Homorhythmic (Chordal)', 'Call and Response', 'Canonic'],
                correctAnswer: 1,
                rationale: 'When voices move in the same rhythm but on different pitches (forming block chords), it is a specific sub-type of homophony called Homorhythmic or Chordal texture.'
            }
        ],
        relatedLinks: [
            { text: 'Theory: Musical Texture (Chapter 14)', url: '/theory/ch14/texture' },
            { text: 'AOS2: Classical Texture', url: '/aos/classical/texture' }
        ],
        aiReminder: true
    },
    'quiz-texture-strategies': {
        id: 'quiz-texture-strategies',
        title: 'Strategies for Identifying Texture',
        topicCode: 'TOPIC_40977192',
        description: 'Quiz on strategies for identifying texture in exams.',
        abcNotation: `X: 1
T: Strategies for Identifying Texture [TOPIC_40977192]
C: SchoolClass.Net
M: 4/4
L: 1/8
K: Gm
Q: "Allegro risoluto" 1/4=110
%%tempofont Wingdings 1
%%barnumbers 1
%%staves [V1, V2, V3, V4]
V: V1 name="Flute" clef=treble
%%MIDI program 73
V: V2 name="Clarinet" clef=treble
%%MIDI program 71
V: V3 name="Violin" clef=treble
%%MIDI program 40
V: V4 name="Cello" clef=bass
%%MIDI program 42
% =======================================================
% SECTION A: THE "UNISON TRAP" (Monophonic/Octaves)
% =======================================================
[V: V1] z2 D2 G2 B2 | A2 G2 ^F2 D2 | GABc d2 c2 | B2 A2 G4 ||
[V: V2] z2 D2 G2 B2 | A2 G2 ^F2 D2 | GABc d2 c2 | B2 A2 G4 ||
[V: V3] z2 D,2 G,2 B,2| A,2 G,2 ^F,2 D,2| G,A,B,C D2 C2 | B,2 A,2 G,4 ||
[V: V4] z2 D,,2 G,,2 B,,2| A,,2 G,,2 ^F,,2 D,,2| G,,A,,B,,C, D,2 C,2 | B,,2 A,,2 G,,4 ||
% =======================================================
% SECTION B: HOMOPHONY (Melody and Accompaniment)
% =======================================================
[V: V1] d4 d2 c2 | B4 G4 | c2 c2 B2 G2 | A4 ^F2 D2 ||
[V: V2] [D4G4B4] z4 | [D4G4] z4 | [E4G4c4] z4 | [D4^F4A4] z4 ||
[V: V3] B,8 | D8 | E8 | D8 ||
[V: V4] G,2 G,,2 G,2 G,,2 | B,,2 G,,2 B,,2 G,,2 | C,2 C,,2 C,2 C,,2 | D,2 D,,2 D,2 D,,2 ||
% =======================================================
% SECTION C: POLYPHONY (Imitation/Canon)
% =======================================================
[V: V1] z8 | z4 d2 cB | A2 G2 ^F2 D2 | GABc d2 g2 | ^f2 d2 =e2 c2 | d4 z4 | z8 | z8 ||
[V: V2] z8 | z8 | z4 A2 GF | E2 D2 ^C2 A,2 | defg a2 d2 | ^c2 A2 B2 G2 | A2 F2 G2 E2 | F2 D2 E2 ^C2 ||
[V: V3] d2 cB A2 G2 | ^F2 D2 GABc | d2 D2 z4 | z8 | z4 a2 gf | e2 A2 g2 e2 | f2 d2 e2 ^c2 | d2 A2 G2 E2 ||
[V: V4] D,4 z4 | D,2 C,B,, A,,2 G,,2 | ^F,,2 D,,2 G,,A,,B,,C, | D,4 z4 | D,2 F,2 A,2 D2 | A,4 G,4 | F,4 E,4 | D,4 A,,4 ||
% =======================================================
% SECTION D: HOMORHYTHMIC (Block Chords)
% =======================================================
[V: V1] d2 d2 c2 c2 | B2 B2 A2 A2 | G4 ^F4 | G8 |]
[V: V2] F2 F2 E2 E2 | D2 D2 C2 C2 | B,4 A,4 | B,8 |]
[V: V3] A,2 A,2 G,2 G,2 | G,2 G,2 ^F,2 ^F,2 | G,4 D4 | D8 |]
[V: V4] D,2 D,2 C,2 C,2 | G,,2 G,,2 D,2 D,2 | E,4 D,4 | G,,8 |]`,
        questions: [
            {
                id: 1,
                question: 'Identify the Italian tempo term indicated in the score.',
                options: ['Andante', 'Allegro risoluto', 'Adagio cantabile', 'Presto'],
                correctAnswer: 1,
                rationale: 'The Italian tempo term is explicitly stated in the Q: header of the ABC notation.'
            },
            {
                id: 2,
                question: 'Identify the Beats Per Minute (BPM) setting for this piece.',
                options: ['60', '90', '110', '140'],
                correctAnswer: 2,
                rationale: 'The BPM is stated in the Q: header as "1/4=110".'
            },
            {
                id: 3,
                question: 'Which texture is heard in Bars 1-4 (Section A)?',
                options: ['Polyphonic', 'Homophonic', 'Monophonic', 'Heterophonic'],
                correctAnswer: 2,
                rationale: 'Although four instruments are playing, they play identical pitch classes in rhythm. This is "Octave Unison," which functions as a monophonic texture.'
            },
            {
                id: 4,
                question: 'Bars 1-4 are an example of the "Unison Trap." Despite four instruments playing, why is the texture considered single-line?',
                options: ['All instruments are playing different rhythms.', 'The instruments are playing in a canon.', 'All instruments play the exact same pitch classes in octaves with identical rhythm.', 'The accompaniment is silent while the flute plays alone.'],
                correctAnswer: 2,
                rationale: 'This defines the "Unison Trap." The visual density of four staves can mislead students into thinking it is polyphonic, but the musical content is a single line.'
            },
            {
                id: 5,
                question: 'What is the tonality of the piece, as established in Bar 1?',
                options: ['G Major', 'G Minor', 'D Major', 'Bb Major'],
                correctAnswer: 1,
                rationale: 'The key signature has two flats (Bb, Eb), and the presence of the F# accidental (leading tone) confirms G Minor.'
            },
            {
                id: 6,
                question: 'In Bars 5-8 (Section B), the texture changes. Which description best fits this section?',
                options: ['Melody and Accompaniment (Homophony)', 'Block Chords (Homorhythmic)', 'Fugal imitation (Polyphony)', 'Unison doubling (Monophony)'],
                correctAnswer: 0,
                rationale: 'There is a clear hierarchy: Flute has the melody, while the other instruments provide harmonic and rhythmic support.'
            },
            {
                id: 7,
                question: 'Look at the Clarinet part (V2) in Bars 5-8. What is unusual about the notation for this specific instrument?',
                options: ['It is written in the Bass clef.', 'It plays a single melody line.', 'It plays block chords (triads), which is physically impossible for a standard acoustic clarinet.', 'It is silent throughout the section.'],
                correctAnswer: 2,
                rationale: 'The notation [D4G4B4] indicates a three-note chord. A standard clarinet is a monophonic wind instrument and cannot play triads.'
            },
            {
                id: 8,
                question: 'In Section B (Bars 5-8), what role does the Violin (V3) play?',
                options: ['It plays a rhythmic bass line.', 'It doubles the main melody.', 'It plays sustained pedal notes/inner harmony.', 'It plays rapid arpeggios.'],
                correctAnswer: 2,
                rationale: 'In Bars 5-8, the Violin (V3) plays whole notes (B, D, E, D), filling the inner texture significantly slower than the melody.'
            },
            {
                id: 9,
                question: 'How does the texture change in Section C (Bars 9-16)?',
                options: ['All instruments play in unison.', 'It becomes Polyphonic with independent melodic lines.', 'It becomes Homorhythmic with block chords.', 'It becomes a solo cadenza for the Flute.'],
                correctAnswer: 1,
                rationale: 'The instruments enter at different times (staggered entries) and maintain rhythmically independent lines.'
            },
            {
                id: 10,
                question: 'Which compositional device is primarily used to create the texture in Section C (Bars 9-16)?',
                options: ['Ostinato', 'Imitation', 'Drone', 'Parallel motion'],
                correctAnswer: 1,
                rationale: 'The melodic idea introduced by V3 is repeated (imitated) by V4 (Bar 10), then V1 (Bar 10 beat 3) and V2 (Bar 11), a hallmark of polyphonic writing.'
            },
            {
                id: 11,
                question: 'Which instrument is the first to state the **melodic subject** in Section C (Bar 9)?',
                options: ['Flute (V1)', 'Clarinet (V2)', 'Violin (V3)', 'Cello (V4)'],
                correctAnswer: 2,
                rationale: 'In Bar 9, the Violin (V3) plays the melodic subject (d2 cB...). Although the Cello (V4) plays a note in Bar 9, it is a sustained accompaniment/pedal note; the Cello does not start the melodic subject until Bar 10.'
            },
            {
                id: 12,
                question: 'Compare Section D (Bars 17-20) with Section C. How is the rhythmic relationship between the parts different in Section D?',
                options: ['The parts are more rhythmically independent in Section D.', 'The parts move together in the same rhythm (Homorhythmic) in Section D.', 'Section D is faster than Section C.', 'Section D has only one instrument playing.'],
                correctAnswer: 1,
                rationale: 'In Bars 17-20, all four voices move primarily in crotchets simultaneously, creating a block chord texture.'
            },
            {
                id: 13,
                question: 'Identify the cadence at the very end of the piece (Bars 19-20).',
                options: ['Plagal Cadence', 'Interrupted Cadence', 'Perfect Cadence', 'Imperfect Cadence'],
                correctAnswer: 2,
                rationale: 'The harmony moves from D Major (the Dominant, V) in the second half of Bar 19/start of Bar 20 to G Minor (the Tonic, i) at the end of Bar 20.'
            },
            {
                id: 14,
                question: 'In Bar 2, the note F# is used. What does this accidental indicate about the scale?',
                options: ['It is the leading note of G Harmonic Minor.', 'It indicates a modulation to F Major.', 'It is a chromatic passing note with no harmonic function.', 'It changes the key to D Major.'],
                correctAnswer: 0,
                rationale: 'In the key of G Minor, the 7th note (F) is raised to F# to create a leading tone that resolves to G.'
            },
            {
                id: 15,
                question: 'Which staff represents the instrument reading from the Bass Clef?',
                options: ['V1', 'V2', 'V3', 'V4'],
                correctAnswer: 3,
                rationale: 'The ABC header defines V: V4 name="Cello" clef=bass.'
            },
            {
                id: 16,
                question: 'When analysing a score for the "Unison Trap," what is the most important visual clue to look for?',
                options: ['The presence of a key signature.', 'Multiple staves having different time signatures.', 'Multiple staves having identical rhythmic patterns and pitch classes (often spaced by octaves).', 'The use of dynamic markings.'],
                correctAnswer: 2,
                rationale: 'This is the visual definition of the "Unison Trap." Students must check if the lines are distinct or merely doublings.'
            },
            {
                id: 17,
                question: 'Which of the following is a key characteristic on a checklist for identifying Polyphonic texture?',
                options: ['All parts move in the same rhythm.', 'There is a clear distinction between a single melody and chordal accompaniment.', 'Multiple melodic lines are rhythmically independent and often overlap.', 'Only one instrument is playing.'],
                correctAnswer: 2,
                rationale: 'Independence of rhythm and contour between simultaneous lines is the primary checklist item for identifying polyphony.'
            },
            {
                id: 18,
                question: '"Homorhythmic" is a specific sub-category of which broader texture?',
                options: ['Monophony', 'Polyphony', 'Homophony', 'Heterophony'],
                correctAnswer: 2,
                rationale: 'Homorhythm (block chords) is a type of Homophony where the "accompaniment" moves in the same rhythm as the "melody," effectively merging them into a single rhythmic unit.'
            },
            {
                id: 19,
                question: 'A student sees a score with a Flute and a Violin. The Flute plays a melody, and the Violin plays the exact same melody one octave lower. How should this texture be classified?',
                options: ['Polyphonic', 'Monophonic (Unison/Octave doubling)', 'Homophonic (Melody and Accompaniment)', 'Trio Sonata texture'],
                correctAnswer: 1,
                rationale: 'Doubling a melody at the octave does not add a new independent line or harmony; it thickens the existing single line (Monophony).'
            },
            {
                id: 20,
                question: 'In "Melody and Accompaniment" texture, which layer is typically the "Foreground"?',
                options: ['The bass line.', 'The sustained inner harmony.', 'The line with the most prominent melodic profile and rhythmic interest.', 'The drum beat.'],
                correctAnswer: 2,
                rationale: 'In a homophonic texture, the listener\'s attention is drawn to the foreground element, which is the melody.'
            }
        ],
        relatedLinks: [
            { text: 'Theory: Musical Texture', url: '/theory/ch14/texture' },
            { text: 'Tools: Ear Training', url: '/tools/ear-training' }
        ],
        aiReminder: true
    }
};
