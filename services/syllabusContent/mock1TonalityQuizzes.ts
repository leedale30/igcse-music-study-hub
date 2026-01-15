import { QuizData } from './mock1Quizzes';

export const mock1TonalityQuizzes: Record<string, QuizData> = {
    'tonality-key-relationships': {
        id: 'tonality-key-relationships',
        title: 'Understanding Key Relationships and Modulation',
        topicCode: 'TOPIC_47078897',
        description: 'Learn about modulation to closely related keys (Dominant, Subdominant, Relative Minor) and how to spot them in a score.',
        abcNotation: `X: 1
T: Understanding Key Relationships [TOPIC_47078897]
C: SchoolClass.Net
M: 4/4
L: 1/8
K: C
%%barnumbers 1
%%tempofont Wingdings 1
Q: "Allegro" 1/4=120
%%MIDI program 0
V:1 clef=treble
V:2 clef=bass
% Section 1: Tonic Key (C Major)
[V:1] c2 e2 g2 e2 | d2 B2 G2 B2 | c2 e2 g2 c'2 | b2 g2 d2 B2 |
[V:2] C,4 E,4 | G,4 G,,4 | C,4 E,4 | G,4 G,,4 |
% Bars 5-8
[V:1] c2 G2 E2 C2 | F2 A2 d2 c2 | B2 d2 G2 B2 | c4 z4 ||
[V:2] C,4 E,4 | F,4 D,4 | G,4 G,,4 | C,4 C,,4 ||
% Section 2: Modulation
[V:1] d2 ^f2 a2 f2 | g2 b2 d'2 b2 | a2 ^f2 d2 c2 | B2 d2 g2 b2 |
[V:2] D,4 C,4 | B,,4 G,,4 | D,4 A,,4 | G,,4 B,,4 |
% Bars 13-16
[V:1] e2 g2 c'2 e2 | d2 b2 g2 b2 | a2 d2 ^f2 a2 | g4 z4 ||
[V:2] C,4 E,4 | G,4 B,,4 | D,4 D,,4 | G,,4 G,4 ||
% Section 3: Modulation
[V:1] e2 ^g2 b2 g2 | a2 c'2 e'2 c'2 | d'2 b2 ^g2 e2 | a2 c'2 e'2 c'2 |
[V:2] E,4 E,4 | A,,4 A,4 | E,4 E,,4 | A,,4 A,4 |
% Section 4: Return to Tonic
[V:1] f2 d2 B2 G2 | e2 g2 c'2 g2 | f2 a2 d2 b2 | c'4 c'4 |]
[V:2] G,4 F,4 | E,4 C,4 | F,4 G,4 | C,4 C,,4 |]`,
        revisionNotes: `## Topic: Understanding Key Relationships and Modulation

In Western tonal music, pieces rarely stay in one key from start to finish. Composers move between keys to create contrast, tension, and structure. This process is called **Modulation**.

At the IGCSE level, you are expected to recognize modulations to “closely related keys.” These are keys that share the same key signature or differ by only one # (sharp) or b (flat).

### The Four Main Relationships:
1.  **Tonic (I or i):** The “Home” key.
2.  **Dominant (V):** The most common modulation. It builds tension. It is found on the 5th degree of the scale.
3.  **Subdominant (IV):** Often feels like a “relaxation.” It is found on the 4th degree of the scale.
4.  **Relative Key (vi or III):** The key that shares the exact same key signature but changes mode (Major -> Minor, or Minor -> Major).

### How to Spot the Modulation:
When looking at a score, look for **Accidentals** that do not belong to the current key signature.

*   **1. Moving to the Dominant (V):** Look for a **raised 4th degree** of the scale.
    *   *Example (C Major to G Major):* C Major has no sharps. G Major has one sharp (F#). Look for the accidental **F#**.
*   **2. Moving to the Subdominant (IV):** Look for a **flattened 7th degree** of the scale.
    *   *Example (C Major to F Major):* C Major has no flats. F Major has one flat (Bb). Look for the accidental **Bb**.
*   **3. Moving to the Relative Minor (vi):** Look for the **raised 7th** of the minor key (the accidental required to make it Harmonic Minor).
    *   *Example (C Major to A Minor):* Both share a key signature (blank). However, A Minor raises its 7th note (G) to **G#**.`,
        questions: [
            { id: 1, question: "Look at the tempo marking at the start of the score. What Italian term describes this speed?", options: ["Adagio", "Andante", "Allegro", "Presto"], correctAnswer: 2, rationale: "'Allegro' is the Italian term shown in the tempo header of the score." },
            { id: 2, question: "Based on the tempo marking, how many beats per minute (BPM) should the crotchet (quarter note) be played at?", options: ["60", "100", "120", "144"], correctAnswer: 2, rationale: "The score header indicates 1/4=120, meaning 120 beats per minute." },
            { id: 3, question: "The piece begins in the key of C Major. What feature of the key signature confirms this?", options: ["There is one sharp.", "There is one flat.", "There are no sharps or flats.", "There are three sharps."], correctAnswer: 2, rationale: "C Major is defined by a key signature containing no accidentals." },
            { id: 4, question: "Describe the texture of the music throughout the extract.", options: ["Monophonic", "Polyphonic", "Homophonic", "Heterophonic"], correctAnswer: 2, rationale: "The texture consists of a clear melodic line in the treble with a supporting bass line (accompaniment)." },
            { id: 5, question: "Look at Section 2 (Bars 9–16). Which accidental appears in the melody that is not in the key signature?", options: ["B flat", "F sharp", "G sharp", "C sharp"], correctAnswer: 1, rationale: "In Bars 9-16, the accidental ^f (F sharp) appears multiple times in the melody." },
            { id: 6, question: "The introduction of the F# in Section 2 indicates a modulation to which key?", options: ["F Major", "G Major", "A Minor", "D Major"], correctAnswer: 1, rationale: "The appearance of F# (the raised 4th of C Major) indicates a move to G Major. G is the Dominant (5th) of C." },
            { id: 7, question: "In the context of the modulation in Section 2, what scale degree is the note F# in the new key of G Major?", options: ["The Tonic", "The Subdominant", "The Dominant", "The Leading Note"], correctAnswer: 3, rationale: "In the key of G Major, F# is the 7th degree of the scale, known as the Leading Note, which pulls towards the Tonic (G)." },
            { id: 8, question: "Look at the cadence in Bars 15–16. The bass plays D followed by G, while the melody resolves to G. What type of cadence is this in the new key?", options: ["Plagal Cadence", "Perfect Cadence", "Imperfect Cadence", "Interrupted Cadence"], correctAnswer: 1, rationale: "The bass moves from D (Dominant of G) to G (Tonic of G), and the music feels resolved. This is a Perfect Cadence." },
            { id: 9, question: "Look at Section 3 (Bars 17–20). A new accidental is introduced: G#. Which key is the music modulating to?", options: ["E Minor", "A Minor", "G Major", "F Major"], correctAnswer: 1, rationale: "The introduction of G# suggests the Harmonic Minor scale of A Minor." },
            { id: 10, question: "Why is the G# accidental necessary in Section 3?", options: ["It is the flattened 7th of C Major.", "It acts as the Leading Note of A Minor (Harmonic Minor).", "It transforms the key into the Subdominant.", "It is a decorative chromatic passing note."], correctAnswer: 1, rationale: "To establish a minor key firmly, the 7th degree is raised (G becomes G#) to create a Leading Note that resolves to the tonic (A)." },
            { id: 11, question: "What is the relationship between the original key (C Major) and the key in Section 3 (A Minor)?", options: ["They are Relative keys.", "They are Dominant keys.", "They are Subdominant keys.", "They are unrelated keys."], correctAnswer: 0, rationale: "C Major and A Minor share the same key signature (no sharps/flats), making them relative keys." },
            { id: 12, question: "In Bar 19, the melody outlines the notes D, B, G#, E. What chord do these notes form?", options: ["C Major", "A Minor", "E7", "G Major"], correctAnswer: 2, rationale: "The notes E, G#, B, D form an E7 chord, which is the Dominant 7th chord in the key of A Minor." },
            { id: 13, question: "Look at Section 4 (Bars 21–24). How does the composer signal the return to the original Tonic key?", options: ["By adding flats.", "By using naturals to cancel previous accidentals.", "By changing the tempo.", "By switching to the bass clef."], correctAnswer: 1, rationale: "In Section 4, the score uses natural signs and the absence of sharps to return to the diatonic notes of C Major." },
            { id: 14, question: "Which melodic device is used most frequently in the right hand throughout the piece?", options: ["Stepwise scales", "Broken chords / Arpeggios", "Repeated notes", "Chromatic scales"], correctAnswer: 1, rationale: "The melodic line consists largely of skips that outline chords (e.g., c-e-g-e), known as broken chords or arpeggios." },
            { id: 15, question: "What is the overall harmonic structure of the piece regarding modulation?", options: ["Tonic -> Subdominant -> Tonic", "Tonic -> Dominant -> Relative Minor -> Tonic", "Tonic -> Relative Major -> Dominant -> Tonic", "Tonic -> Subdominant -> Relative Minor -> Tonic"], correctAnswer: 1, rationale: "The piece starts in C (Tonic), moves to G (Dominant with F#), moves to A Minor (Relative Minor with G#), and ends in C (Tonic)." },
            { id: 16, question: "According to standard music theory, which key is found on the 5th degree of the scale?", options: ["The Subdominant", "The Relative Minor", "The Dominant", "The Tonic"], correctAnswer: 2, rationale: "By definition, the Dominant is the 5th degree of the scale." },
            { id: 17, question: "If a piece of music is in F Major, modulation to the Subdominant would involve moving to which key?", options: ["C Major", "Bb Major", "D Minor", "G Minor"], correctAnswer: 1, rationale: "The Subdominant of F Major is found on the 4th degree. The 4th note of F is Bb." },
            { id: 18, question: "To modulate from a Major key to its Subdominant (IV), which accidental change do you typically look for?", options: ["A raised 4th degree", "A flattened 7th degree", "A raised 5th degree", "A double sharp"], correctAnswer: 1, rationale: "Modulating to the Subdominant adds one flat (or removes one sharp). In C Major, flattening the 7th (B to Bb) creates the key of F Major." },
            { id: 19, question: "Which of the following pairs represents a 'Relative Key' relationship?", options: ["C Major and G Major", "C Major and F Major", "C Major and C Minor", "C Major and A Minor"], correctAnswer: 3, rationale: "Relative keys share the same key signature. C Major and A Minor both have zero sharps/flats." },
            { id: 20, question: "Why do composers use modulation in Western tonal music?", options: ["To make the music louder.", "To create contrast, tension, and structure.", "To change the time signature.", "To simplify the harmony."], correctAnswer: 1, rationale: "Modulation is used to provide variety (contrast) and harmonic interest (tension) within a musical structure." }
        ],
        relatedLinks: [
            { text: 'Theory: Major Key Signatures', url: '/theory/chapter02/Ch02MajorkeysignaturesPage' },
            { text: 'Theory: Minor Key Signatures', url: '/theory/chapter03/Ch03MinorkeysignaturesPage' }
        ],
        aiReminder: true
    },
    'tonality-architecture-2': {
        id: 'tonality-architecture-2',
        title: 'The Architecture of Tonality (調性體系) - Focus 2',
        topicCode: 'TOPIC_25081714',
        description: 'Understand tonality as a gravitational system and explore critical key relationships like Dominant and Relative keys.',
        abcNotation: `X: 1
T: 2.2 The Architecture of Tonality [TOPIC_25081714]
C: SchoolClass.Net
M: 4/4
L: 1/8
K: C
Q: "Allegro" 1/4=120
%%tempofont Wingdings 1
%%barnumbers 1
%%staves {RH LH}
V: RH treble
%%MIDI program 0
V: LH bass
%%MIDI program 0
% Section 1: Tonic (C Major) established - The Sun
[V: RH] "^Tonic (The Sun)"c2 G c e2 c e | g2 e g c'4 | f2 a f d2 f d | B2 d B G4 |
[V: LH] C,E,G,E, C,E,G,E, | C,E,G,E, C,E,G,E, | D,F,A,F, D,F,A,F, | G,,B,,D,B,, G,,B,,D,B,, |
% Section 2: Modulation to Dominant (G Major) - The Tension
[V: RH] "^Modulation to V (Tension)"c2 e c A2 c2 | B2 d ^f g4 | a2 c' a ^f2 a f | g4 z4 |
[V: LH] A,,C,E,C, A,,C,E,C, | G,,B,,D,B,, G,,B,,D,B,, | C,E,A,E, D,^F,A,F, | G,,B,,D,B,, G,,4 |
% Section 3: Shift to Relative Minor (A Minor) - The Shadow
[V: RH] "^Relative Minor (Contrast)"e2 c e A2 c A | E2 ^G B d4 | c2 e c A2 c A | B2 e B ^G4 |
[V: LH] A,,C,E,C, A,,C,E,C, | E,,^G,,B,,G,, E,,G,,B,,G,, | A,,C,E,C, A,,C,E,C, | E,,^G,,B,,G,, E,,4 |
% Section 4: Return to Tonic via Circle of Fifths
[V: RH] "^Return to Tonic"A2 c A F2 A F | G2 B G E2 G E | F2 A F D2 F D | G2 B d g2 f2 |
[V: LH] F,,A,,C,A,, F,,A,,C,A,, | E,,G,,C,G,, E,,G,,C,G,, | D,,F,,A,,F,, D,,F,,A,,F,, | G,,B,,D,B,, G,,B,,D,F, |
% Section 5: Cadence in Tonic
[V: RH] "^Cadence"e2 g e c2 e2 | d2 f d B2 d2 | c2 G2 A2 B2 | c8 |]
[V: LH] C,E,G,E, C,E,G,E, | F,,A,,D,A,, G,,B,,D,B,, | E,,G,,C,G,, F,,G,,D,G,, | C,E,G,C, C,4 |]`,
        revisionNotes: `## 2.2 The Architecture of Tonality (調性體體系)

### Concept
Tonality is not just a collection of notes; it is a "gravitational system." In this system, all harmonies orbit a central tone called the **Tonic** (the "Sun"). Understanding these relationships is crucial for analyzing functional harmony and recognizing **modulation** (how music changes keys).

### Key Relationships Map
| Function | Roman Numeral | Relationship | Musical Role |
| :--- | :--- | :--- | :--- |
| **Tonic** | **I** (Major) / **i** (Minor) | The Center | The "Home" key. Ultimate rest and resolution. |
| **Dominant** | **V** | Perfect 5th Higher | Creates the strongest **tension**. Primary destination for modulation. |
| **Relative Minor** | **vi** | Minor 3rd Lower | Shares the **same key signature** as the Major Tonic. Contrasting "shadow" section. |
| **Relative Major** | **III** | Minor 3rd Higher | Shares the same key signature as the Minor Tonic. "Bright" alternative. |`,
        questions: [
            { id: 1, question: "Identify the Italian tempo marking indicated in the score.", options: ["Adagio", "Andante", "Allegro", "Presto"], correctAnswer: 2, rationale: "The Italian term 'Allegro' is explicitly stated in the header of the ABC notation." },
            { id: 2, question: "Identify the specific Beats Per Minute (BPM) set for this piece.", options: ["60", "90", "100", "120"], correctAnswer: 3, rationale: "The tempo indication '1/4=120' is explicitly stated in the header." },
            { id: 3, question: "Which term best describes the texture of this piece, where a melody is supported by a chordal accompaniment?", options: ["Monophonic", "Homophonic", "Polyphonic", "Heterophonic"], correctAnswer: 1, rationale: "The piece features a distinct melody in the Right Hand supported by an accompaniment in the Left Hand, which defines homophonic texture." },
            { id: 4, question: "The accompaniment in the Left Hand, characterized by broken chords played in a continuous repeating pattern, is known as:", options: ["Walking Bass", "Ground Bass", "Alberti Bass", "Stride Bass"], correctAnswer: 2, rationale: "This specific style of broken chord accompaniment in the left hand is the hallmark of the Classical period technique known as Alberti Bass." },
            { id: 5, question: "What is the key of the opening section (Measures 1-4)?", options: ["G Major", "C Major", "A Minor", "F Major"], correctAnswer: 1, rationale: "The key signature has no sharps or flats, and the piece begins on a C Major chord." },
            { id: 6, question: "In Measure 6, an accidental (F#) is introduced in the Right Hand. What harmonic function does this serve?", options: ["It changes the key to F Major.", "It acts as a chromatic passing note.", "It acts as the leading tone to modulate to G Major.", "It indicates a shift to the Relative Minor."], correctAnswer: 2, rationale: "F# is the leading tone (7th degree) of G Major. Introducing it shifts the tonal center from C to G." },
            { id: 7, question: "Section 2 (Measures 5-8) modulates to the Dominant key. According to the 'Key Relationships Map,' what emotional role does this relationship play?", options: ["Point of ultimate rest.", "Strongest tension.", "Melancholic shadow.", "Bright alternative."], correctAnswer: 1, rationale: "According to the map, the Dominant creates the strongest tension and acts as a destination for modulation." },
            { id: 8, question: "Which key is established in Section 3 (Measures 9-12)?", options: ["C Major", "E Major", "A Minor", "D Minor"], correctAnswer: 2, rationale: "Section 3 centers around A, and the presence of G# (the leading tone of A minor) confirms this minor tonality." },
            { id: 9, question: "In Measure 10, the note G# appears. Why is this accidental necessary in Section 3?", options: ["Leading tone of A Minor.", "Modulates to E Major.", "Adding a jazz influence.", "Transforms into Relative Major."], correctAnswer: 0, rationale: "In tonal minor keys, the 7th degree is raised (G to G# in A minor) to create a leading tone that pulls strongly to the tonic." },
            { id: 10, question: "What is the relationship between the key in Section 3 (A Minor) and the original key (C Major)?", options: ["Dominant", "Subdominant", "Relative Major", "Relative Minor"], correctAnswer: 3, rationale: "A Minor shares the same key signature as C Major and is located a minor 3rd lower, making it the Relative Minor." },
            { id: 11, question: "Looking at Measure 16 in the Left Hand, the note F natural returns. What does this signal?", options: ["Modulation to D Minor.", "Return to early home key of C Major.", "Shift to Dominant.", "Change to Mixolydian."], correctAnswer: 1, rationale: "The Dominant of C Major is G (G-B-D-F). The F natural creates the Dominant 7th chord of C, pulling the music back home." },
            { id: 12, question: "Which stylistic period of music is this piece most likely emulating?", options: ["Baroque", "Classical", "Romantic", "Twentieth Century"], correctAnswer: 1, rationale: "The clear functional harmony, homophonic texture, and use of Alberti bass are hallmarks of the Classical style." },
            { id: 13, question: "In the final measure, the piece ends on a C Major chord. Which Roman numeral represents this chord in the home key?", options: ["V", "IV", "vi", "I"], correctAnswer: 3, rationale: "C Major is the Tonic of the key of C Major, represented by the Roman numeral I." },
            { id: 14, question: "What type of cadence brings the piece to a close in Measures 19-20 (moving from Chord V to Chord I)?", options: ["Plagal Cadence", "Imperfect Cadence", "Perfect (Authentic) Cadence", "Interrupted Cadence"], correctAnswer: 2, rationale: "The progression moves from the Dominant (V) to the Tonic (I), creating a strong, finished sound known as a Perfect Cadence." },
            { id: 15, question: "The overall harmonic structure journey demonstrates which feature of the 'Gravitational System'?", options: ["Atonality", "Polytonality", "Departure and Return to the Home key", "Modal ambiguity"], correctAnswer: 2, rationale: "This structure illustrates the fundamental concept of tonality: establishing a home, leaving it to create tension/contrast, and resolving by returning." },
            { id: 16, question: "If the Tonic is C Major, what interval higher is the Dominant key?", options: ["Major 3rd", "Perfect 4th", "Perfect 5th", "Octave"], correctAnswer: 2, rationale: "As defined in the Map, the Dominant is a Perfect 5th higher than the Tonic." },
            { id: 17, question: "What is the Roman Numeral representation for the Relative Minor key?", options: ["ii", "iii", "v", "vi"], correctAnswer: 3, rationale: "The Relative Minor is built on the 6th degree of the major scale, represented by the Roman numeral vi." },
            { id: 18, question: "Which key relationship shares the EXACT same key signature as the Major Tonic?", options: ["The Dominant", "The Relative Minor", "The Parallel Minor", "The Subdominant"], correctAnswer: 1, rationale: "By definition, relative keys share the same key signature (e.g., C Major and A Minor)." },
            { id: 19, question: "In functional harmony, if the Tonic is the 'Sun' (Center), what is the primary role of the Dominant?", options: ["Contrasting shadow.", "Mirror the tonic.", "Create gravitational tension pulling to Tonic.", "Secondary point of rest."], correctAnswer: 2, rationale: "The Dominant is described as creating tension and acting as a destination that eventually resolves to the 'Sun' (Tonic)." },
            { id: 20, question: "If a piece of music is in A Minor (i), what would be its Relative Major (III)?", options: ["C Major", "E Major", "A Major", "F Major"], correctAnswer: 0, rationale: "The Relative Major is a minor 3rd higher than the Minor Tonic. A minor 3rd up from A is C." }
        ],
        relatedLinks: [
            { text: 'Theory: Alberti Bass Accompaniments', url: '/theory/chapter14/Ch14ArpeggiatedaccompanimentsPage' },
            { text: 'AOS2: Classical Structure', url: '/aos/classical/structure' }
        ],
        aiReminder: true
    },
    'tonality-architecture-3': {
        id: 'tonality-architecture-3',
        title: 'The Architecture of Tonality (調性體系) - Focus 3',
        topicCode: 'TOPIC_75359947',
        description: 'Deep dive into tonal centers, secondary dominants, and the return to the tonic.',
        abcNotation: `X: 1
T: 2.2 The Architecture of Tonality [TOPIC_75359947]
C: SchoolClass.Net
M: 4/4
L: 1/8
K: G
Q: "Allegro Moderato" 1/4=108
%%tempofont Wingdings 1
%%score {RH | LH}
%%barnumbers 1
V: RH clef=treble name="Piano"
%%MIDI program 0
% Section 1: Tonic (G Major) established - The "Home"
[| "G" G2 B2 d2 g2 | "C" e2 c2 "G" d2 B2 | "Am" c2 A2 "G" B2 G2 | "D7" A2 d2 "G" G4 |
% Section 2: Modulation to Dominant (D Major) - Adding C# (V of V)
"A7" A2 ^c2 e2 g2 | "D" f2 a2 d'2 A2 | "A7" g2 e2 c2 A2 | "D" d2 f2 d4 |
% Section 3: Shift to Relative Minor (E Minor) - Adding D# (V of vi)
"B7" B2 ^d2 f2 a2 | "Em" g2 b2 e'2 B2 | "Am" c'2 a2 "B7" f2 ^d2 | "Em" e2 g2 e4 |
% Section 4: Return to Tonic (G Major) - Restoring Naturals
"C" c2 e2 g2 e2 | "G" d2 B2 G2 B2 | "Am" c2 e2 "D7" d2 f2 | "G" g2 b2 g4 |]
V: LH clef=bass
%%MIDI program 0
% Harmonic foundation supporting the gravitational centers
[| G,2 [B,D]2 G,2 [B,D]2 | C,2 [CE]2 G,2 [B,D]2 | A,2 [CE]2 G,2 [B,D]2 | D,2 [FA]2 G,2 [B,D]2 |
% Pivot to D Major (A7 -> D)
A,2 [^C,E]2 A,2 [^C,G]2 | D,2 [FA]2 D,2 [FA]2 | A,2 [^C,G]2 A,2 [^C,G]2 | D,2 [FA]2 D,2 [FA]2 |
% Pivot to E Minor (B7 -> Em)
B,2 [^D,F]2 B,2 [^D,A]2 | E,2 [GB]2 E,2 [GB]2 | A,2 [Ce]2 B,2 [^D,A]2 | E,2 [GB]2 E,4 |
% Return to G Major (IV -> I -> ii-V-I)
C,2 [Eg]2 C,2 [Eg]2 | G,2 [Bd]2 G,2 [Bd]2 | A,2 [ce]2 D,2 [cd]2 | G,2 [Bd]2 G,4 |]`,
        revisionNotes: `## 2.2 The Architecture of Tonality (調性体體系)

Tonality is the system of arranging pitches and chords to induce a hierarchy of perceived relations, stabilities, and attractions. The most stable pitch is the **Tonic (Home)**. All other chords relate to this center like planets orbiting a sun.

### Key Concepts to Identify:
1.  **Tonic (主調 - I):** The gravitational center. The piece usually starts and ends here.
2.  **Dominant (屬調 - V):** Located a **Perfect 5th higher** than the Tonic. It creates maximum **tension** and is the most common destination for modulation.
3.  **Relative Minor (关系小调 - vi):** Located a **Minor 3rd lower** than the Major Tonic. It shares the exact same key signature but centers around a different root note.

### Key Relationships Map:
| Function | Roman Numeral | Relationship | Musical Role |
| :--- | :--- | :--- | :--- |
| **Tonic** | I (Major) / i (Minor) | The Center | The “Home” key. Ultimate point of rest. |
| **Dominant** | V | Perfect 5th Higher | Creates tension. Primary destination for modulation. |
| **Relative Minor** | vi | Minor 3rd Lower | Shares key sig with Major Tonic. Contrasting mood. |
| **Relative Major** | III | Minor 3rd Higher | Shares key sig with Minor Tonic. The "bright" alternative. |`,
        questions: [
            { id: 1, question: "Identify the Italian tempo marking indicated in the score header.", options: ["Andante", "Allegro Moderato", "Presto", "Adagio"], correctAnswer: 1, rationale: "The tempo marking is clearly stated in the score header (Q: 'Allegro Moderato')." },
            { id: 2, question: "What is the specific Beats Per Minute (BPM) setting for this piece?", options: ["60", "90", "108", "120"], correctAnswer: 2, rationale: "The BPM is explicitly defined in the header as 1/4=108." },
            { id: 3, question: "Look at the key signature and the first 4 bars. What is the Tonic (Home) key of this piece?", options: ["C Major", "D Major", "G Major", "E Minor"], correctAnswer: 2, rationale: "The key signature has one sharp (F#), and the piece begins and ends on a G major chord." },
            { id: 4, question: "What is the melodic texture of the Right Hand part throughout the piece?", options: ["Block chords", "Arpeggiated (broken chords)", "Scalic runs", "Chromatic scales"], correctAnswer: 1, rationale: "The Right Hand plays the notes of the chords in sequence rather than simultaneously or in a scale." },
            { id: 5, question: "In Bar 5, an accidental (C#) is introduced. What harmonic function does this serve?", options: ["Modulation to Subdominant.", "Leading tone to new key of D Major (Dominant).", "Transforms into G Minor.", "Decorative chromatic passing note."], correctAnswer: 1, rationale: "The C# raises the 7th note of D Major, creating a gravitational pull towards D." },
            { id: 6, question: "Section 2 (Bars 5-8) modulates to the Dominant. Based on the Tonic, what is the Dominant key?", options: ["D Major", "C Major", "A Major", "F Major"], correctAnswer: 0, rationale: "G Major is the Tonic. Counting up a Perfect 5th from G leads to D." },
            { id: 7, question: "Which term best describes the relationship between the chord in Bar 9 (B7) and Bar 10 (Em)?", options: ["Plagal Cadence", "Secondary Dominant resolving to Relative Minor", "Unrelated Modulation", "Tierce de Picardie"], correctAnswer: 1, rationale: "The B7 chord is the Dominant of E Minor. It resolves to the Relative Minor (Em)." },
            { id: 8, question: "In Section 3 (Bars 9-12), the music shifts to the Relative Minor. What is its relationship to the original Major Tonic?", options: ["Major 3rd Higher", "Perfect 5th Higher", "Minor 3rd Lower", "Perfect 4th Lower"], correctAnswer: 2, rationale: "The Relative Minor is always a minor 3rd interval below the Major Tonic (e.g., G down to E)." },
            { id: 9, question: "Which cadence is heard at the very end of the piece?", options: ["Perfect Authentic Cadence", "Plagal Cadence", "Imperfect Cadence", "Interrupted Cadence"], correctAnswer: 0, rationale: "The piece concludes with D7 (V7) resolving to G (I), creating a complete sense of finality." },
            { id: 10, question: "What is the function of the Left Hand part throughout the piece?", options: ["Playing main melody", "Playing counter-melody", "Providing harmonic support with a stride pattern", "Playing a drone"], correctAnswer: 2, rationale: "The LH plays Bass notes on the beat and chords on the off-beat, supporting the harmony." },
            { id: 11, question: "How does the composer signal the return to the 'Home' key in Section 4?", options: ["Adding flats", "Changing time signature", "Using C naturals (canceling previous sharps)", "Speeding up tempo"], correctAnswer: 2, rationale: "To return to G Major, the C# and D# must be removed. Bar 13 introduces C natural explicitly." },
            { id: 12, question: "The structure passes through which tonal centers?", options: ["Tonic -> Subdominant -> Tonic", "Tonic -> Dominant -> Relative Minor -> Tonic", "Tonic -> Relative Major -> Dominant -> Tonic", "Tonic -> Dominant -> Subdominant -> Tonic"], correctAnswer: 1, rationale: "This follows the harmonic map: G Major (I) -> D Major (V) -> E Minor (vi) -> G Major (I)." },
            { id: 13, question: "What role does the V7 chord (D7) in Bar 4 play?", options: ["Sense of rest.", "Tension that pulls towards the Tonic.", "Somber mood.", "Indicates modulation to minor key."], correctAnswer: 1, rationale: "The Dominant 7th (V7) contains the tritone interval and leads strongly back to the Tonic (Home)." },
            { id: 14, question: "Identify the instrument performing the audio stimulus.", options: ["String Quartet", "Solo Piano", "Harpsichord", "Synthesizer"], correctAnswer: 1, rationale: "The score indicates 'Piano' and consists of a treble and bass staff typical of piano music." },
            { id: 15, question: "In Bar 9, which specific note acts as the 'Leading Tone' pulling the music into E Minor?", options: ["B", "F#", "D#", "A"], correctAnswer: 2, rationale: "In E Minor, the leading tone is the raised 7th note. E natural minor has D natural; raising it to D# creates the pull to E." },
            { id: 16, question: "According to standard music theory, what is the Roman Numeral analysis for the Dominant chord?", options: ["I", "IV", "V", "vi"], correctAnswer: 2, rationale: "The Dominant is the 5th degree of the scale, represented by the Roman Numeral V." },
            { id: 17, question: "Which of the following best defines 'Tonality'?", options: ["Random collection of 12 notes.", "System where notes orbit a central Tonic like gravity.", "System based purely on rhythm.", "Specific type of instrument."], correctAnswer: 1, rationale: "This matches the definition provided in the Handout." },
            { id: 18, question: "If a piece is in a Minor key (e.g., A Minor), what is its 'Relative Major'?", options: ["Key a Minor 3rd higher (C Major).", "Key a Perfect 5th higher.", "Key a Major 2nd lower.", "Opposite key signature."], correctAnswer: 0, rationale: "Relative keys are a minor 3rd apart. From Minor to Major, you go UP a minor 3rd." },
            { id: 19, question: "What is the primary musical role of the 'Relative Minor' key in a composition?", options: ["Strongest tension.", "Finish loudly.", "Provide contrast, often with a different mood.", "Initial home key."], correctAnswer: 2, rationale: "As defined in the metadata, the Relative Minor is often used for contrasting sections." },
            { id: 20, question: "In the 'Key Relationships Map,' which interval separates the Tonic from the Dominant?", options: ["Major 3rd", "Perfect 4th", "Perfect 5th", "Octave"], correctAnswer: 2, rationale: "The interval from Step 1 (Tonic) to Step 5 (Dominant) is a Perfect 5th." }
        ],
        relatedLinks: [
            { text: 'Theory: Scale Degree Names', url: '/theory/chapter03/Ch03ScaledegreenamesPage' },
            { text: 'AOS1: Baroque Tonality', url: '/aos/baroque/tonality' }
        ],
        aiReminder: true
    },
    'tonality-relationships-advanced': {
        id: 'tonality-relationships-advanced',
        title: 'Advanced Key Relationships In Western Tonal Music',
        topicCode: 'TOPIC_40041561',
        description: 'Analyze advanced modulations including Subdominant and return transitions.',
        abcNotation: `X: 1
T: Understanding Key Relationships [TOPIC_40041561]
C: SchoolClass.Net
M: 4/4
L: 1/8
K: G
%%barnumbers 1
%%tempofont Wingdings 1
Q: "Allegro moderato" 1/4=112
%%staves {1 2}
V: 1 clef=treble
%%MIDI program 0
V: 2 clef=bass
%%MIDI program 0
% Bar 1 - TONIC: G Major (Home Key)
[V:1] G2 B d g2 d2 | c B A G A2 D2 | G B d g b a g f | g2 d2 G4 |
[V:2] G,2 B, D G2 B,2 | C2 G,2 D2 F,2 | G,2 B, D G2 D2 | B,2 D2 G,4 |
% Bar 5 - MODULATION: Dominant (D Major) - Trigger: C# (Raised 4th)
[V:1] A2 ^c e a2 g2 | f d A F A2 d2 | e2 g e ^c2 A2 | d2 f a d'4 |
[V:2] A,2 ^C E A2 G2 | F2 D A, D2 F,2 | A,2 E G A2 G2 | F2 D2 D,4 |
% Bar 9 - MODULATION: Relative Minor (E Minor) - Trigger: D# (Raised 7th)
[V:1] B2 ^d f b2 a2 | g e B G E2 B2 | c2 A c B2 ^d2 | e2 g b e'4 |
[V:2] B,2 ^D F B2 A2 | G2 E B, E2 G,2 | A,2 F, A, B,2 B,2 | E2 B, G, E,4 |
% Bar 13 - MODULATION: Subdominant (C Major) - Trigger: F natural (Flattened 7th)
[V:1] d2 B G =f2 e d | e2 c G c4 | e2 c A G2 c2 | d c B A B2 G2 |
[V:2] G,2 B, D =F2 F,2 | E,2 G, C E2 G,2 | F,2 A, C E2 C2 | D,2 F, D, G,2 G,,2 |
% Bar 17 - RETURN: Tonic (G Major) - F# is restored
[V:1] G2 B d g2 d2 | c e g e d2 B2 | c A d c B2 A2 | G4 z4 |]
[V:2] G,,2 B,, D, G,2 B,2 | C,2 E, G, B,2 G,2 | A,2 F, D, D2 C2 | [G,4B,4] z4 |]`,
        revisionNotes: `## Topic: Understanding Key Relationships and Modulation

**Definition:**
In Western tonal music, pieces rarely stay in one key from start to finish. Composers move between keys to create contrast, tension, and structure. This process is called **Modulation**.

At the IGCSE level, you are expected to recognize modulations to **“closely related keys.”** These are keys that share the same key signature or differ by only one sharp (#) or flat (b).

### The Four Main Relationships:
1.  **Tonic (I or i):** The “Home” key.
2.  **Dominant (V):** The most common modulation. Found on the 5th degree. *Visual Cue: Add one Sharp (#).*
3.  **Subdominant (IV):** Often feels like a “relaxation.” Found on the 4th degree. *Visual Cue: Add one Flat (b) (or remove a sharp).*
4.  **Relative Key (vi or III):** Shares exact same key signature but changes mode.

### How to Spot Modulation in a Score:
1.  **Moving to the Dominant (V):** Look for a **raised 4th degree** (Leading Note of the new key).
2.  **Moving to the Subdominant (IV):** Look for a **flattened 7th degree**.
3.  **Moving to the Relative Minor (vi):** Look for the **raised 7th** (Harmonic Minor).`,
        questions: [
            { id: 1, question: "Identify the Italian tempo marking indicated at the start of the score.", options: ["Andante", "Allegro moderato", "Adagio", "Presto"], correctAnswer: 1, rationale: "The tempo marking 'Allegro moderato' is explicitly written at the top of the score." },
            { id: 2, question: "What is the precise tempo in beats per minute (BPM) for this piece?", options: ["112", "120", "100", "108"], correctAnswer: 0, rationale: "The BPM indication '1/4=112' is written in the header of the score." },
            { id: 3, question: "The piece begins in the Tonic key. Based on the key signature and starting chord, what is the key of Bars 1-4?", options: ["C Major", "D Major", "G Major", "E Minor"], correctAnswer: 2, rationale: "The key signature has one sharp (F#), and the piece starts and ends on a G Major chord." },
            { id: 4, question: "In Bar 5, an accidental is introduced in the treble clef (^c). What is the name of this note?", options: ["C Natural", "C Sharp", "D Flat", "B Sharp"], correctAnswer: 1, rationale: "The symbol '^' before the note 'c' in ABC notation indicates a Sharp." },
            { id: 5, question: "The introduction of C# signals a modulation to the Dominant key. What is the new key?", options: ["A Major", "D Major", "G Major", "E Major"], correctAnswer: 1, rationale: "In G Major, raising the 4th (C to C#) creates the leading note of D Major (the Dominant)." },
            { id: 6, question: "Look at the interval between the first two notes of the melody in Bar 1 (G to B). What is this interval?", options: ["Major 3rd", "Minor 3rd", "Perfect 4th", "Perfect 5th"], correctAnswer: 0, rationale: "The notes are G and B. The interval from G up to B is a Major 3rd (4 semitones)." },
            { id: 7, question: "In Section 3 (Bars 9-12), the composer introduces a D# accidental. This raises the 7th degree of which Minor scale?", options: ["A Minor", "B Minor", "E Minor", "G Minor"], correctAnswer: 2, rationale: "The relative minor of G Major is E Minor. To establish E Minor, the 7th note (D) is raised to D#." },
            { id: 8, question: "Based on the modulation in Bars 9-12, what is the relationship of E Minor to the original key of G Major?", options: ["Dominant", "Subdominant", "Relative Minor", "Parallel Minor"], correctAnswer: 2, rationale: "E Minor shares the same key signature (one sharp) as G Major. This relationship is called Relative Minor." },
            { id: 9, question: "What type of cadence is heard at the end of the first phrase (Bar 4)?", options: ["Plagal", "Imperfect", "Interrupted", "Perfect"], correctAnswer: 3, rationale: "In Bar 4, the bass moves from D (Dominant) to G (Tonic) on strong beats, creating a Perfect Cadence." },
            { id: 10, question: "Which word best describes the texture of this piece?", options: ["Monophonic", "Homophonic", "Polyphonic", "Heterophonic"], correctAnswer: 1, rationale: "The texture consists of a primary melodic line in the treble with chordal/arpeggiated accompaniment in the bass." },
            { id: 11, question: "In Bar 13, the composer introduces an F natural (=f). What has happened to the 7th degree here?", options: ["Raised.", "Flattened.", "Removed.", "Sharpened."], correctAnswer: 1, rationale: "The 7th degree of G Major is F#. Changing F# to F Natural lowers the pitch by a semitone, thus 'flattening' it." },
            { id: 12, question: "The flattening of the 7th degree (F natural) in Bar 13 triggers a modulation to which key?", options: ["C Major (Subdominant)", "D Major (Dominant)", "F Major", "A Minor"], correctAnswer: 0, rationale: "Flattening the 7th turns the Tonic chord into a Dominant 7th chord (G7), which resolves to the Subdominant (C Major)." },
            { id: 13, question: "Which instrument family is most likely intended to play this score?", options: ["Percussion", "Brass", "Woodwind", "Keyboard"], correctAnswer: 3, rationale: "The use of the Grand Staff and the capability to play multiple parts suggest a keyboard instrument." },
            { id: 14, question: "What chord is formed by D-F#-A?", options: ["G Major", "C Major", "D Major", "E Minor"], correctAnswer: 2, rationale: "The key signature contains F#. The notes D-F#-A create a D Major triad (the Dominant chord)." },
            { id: 15, question: "What is the structural phrase length used consistently throughout this piece?", options: ["2 bars", "3 bars", "4 bars", "6 bars"], correctAnswer: 2, rationale: "The piece is structured in clear 4-bar phrases (1-4, 5-8, 9-12, 13-16, 17-20)." },
            { id: 16, question: "In general music theory, what is the definition of 'Modulation'?", options: ["Changing time signature.", "Process of moving from one key to another.", "Playing melody twice as fast.", "Changing instrumentation."], correctAnswer: 1, rationale: "This is the standard definition of modulation." },
            { id: 17, question: "Which degree of the scale is the 'Dominant' found on?", options: ["1st", "4th", "5th", "7th"], correctAnswer: 2, rationale: "The Dominant is always the 5th degree of the diatonic scale." },
            { id: 18, question: "If a piece is in F Major, which key is the Subdominant (IV)?", options: ["C Major", "Bb Major", "G Minor", "D Minor"], correctAnswer: 1, rationale: "The Subdominant is the 4th degree. In F Major, the 4th note is Bb." },
            { id: 19, question: "To find the Relative Minor of a Major key, which degree of the Major scale do you look for?", options: ["4th", "5th", "6th", "2nd"], correctAnswer: 2, rationale: "The relative minor is found on the 6th degree of the major scale." },
            { id: 20, question: "When modulating to the Dominant key, which accidental do you typically need to add?", options: ["A flat.", "A sharp (raise the 4th).", "A natural.", "A double sharp."], correctAnswer: 1, rationale: "To modulate to the Dominant, you must raise the 4th degree of the old key to create the new Leading Note." }
        ],
        relatedLinks: [
            { text: 'Theory: Cadences', url: '/theory/chapter10/Ch10CadencesPage' },
            { text: 'AOS7: Key Composers', url: '/aos7/stage-screen/StageScreen0306KeyComposersArtistsPage' }
        ],
        aiReminder: true
    }
};
