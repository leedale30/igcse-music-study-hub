const ALL_QUIZZES = {
    "BAR-GEN-001": {
        "info": {
            "title": "Identifying Baroque Texture and Continuo",
            "code": "BAR-GEN-001",
            "description": "Testing the recognition of the melody-dominated homophony supported by a continuo section."
        },
        "abc": "X:1\nT:Specimen Extract: Continuo Texture\nC:Baroque Assessment Bank\nM:4/4\nL:1/8\nQ:\"Andante\" 1/4=90\nK:G\n%%MIDI program 40 % Violin\n%%MIDI program 42 % Cello\nV:1 name=\"Violin\"\n%%MIDI program 40 % Auto-injected for Violin\nd2 g2 f2 g2 | e2 c2 A2 G2 | F2 A2 D2 c2 | B4 G4 |\nB2 d2 g2 b2 | a2 g2 f4 | e2 g2 c2 e2 | d4 z4 |]\nV:2 name=\"Cello (Continuo)\" clef=bass\n%%MIDI program 42 % Auto-injected for Cello (Continuo)\nG,4 B,4 | C4 C,4 | D,4 F,4 | G,4 G,,4 |\nG,4 B,4 | C4 D4 | E4 A,4 | D4 D,4 |]",
        "questions": [
            {
                "question": "Which two instruments would most likely form the basso continuo section in this extract?",
                "options": [
                    "Piano and Double Bass",
                    "Harpsichord and Cello",
                    "Organ and Timpani",
                    "Lute and Clarinet"
                ],
                "correct": 1,
                "feedback": "The harpsichord (for chords) and cello (for the bass line) constitute the standard Baroque continuo section.1"
            },
            {
                "question": "The texture of this extract, featuring a clear melody supported by a bass line, is best described as:",
                "options": [
                    "Monophonic",
                    "Polyphonic (Fugal)",
                    "Homophonic (Melody and Accompaniment)",
                    "Heterophonic"
                ],
                "correct": 2,
                "feedback": "While Baroque music is often contrapuntal, this extract shows a clear treble melody with a supporting bass, characteristic of solo sonata texture.1"
            },
            {
                "question": "Look at the bass part in bar 2. If the composer wanted the keyboard player to play a first inversion chord, what figure would be written below the note?",
                "options": [
                    "6",
                    "4/2",
                    "7",
                    "5/3"
                ],
                "correct": 0,
                "feedback": "In figured bass, the number '6' indicates a first inversion triad (intervals of a 3rd and 6th above the bass).2"
            },
            {
                "question": "Which period of music history is defined by the presence of the continuo practice?",
                "options": [
                    "Renaissance",
                    "Baroque",
                    "Classical",
                    "Romantic"
                ],
                "correct": 1,
                "feedback": "The continuo is the most definitive feature of the Baroque era (c. 1600-1750)."
            }
        ]
    },
    "BAR-GEN-002": {
        "info": {
            "title": "Terraced Dynamics and Echo Effects",
            "code": "BAR-GEN-002",
            "description": "Recognizing abrupt dynamic shifts typical of the Baroque concerto style."
        },
        "abc": "X:2\nT:Terraced Dynamics Study\nC:Baroque Assessment Bank\nM:3/4\nL:1/8\nQ:\"Allegro\" 1/4=120\nK:D\nV:1 name=\"Violin I\"\n%%MIDI program 40 % Auto-injected for Violin I\n!f! d2 f2 a2 | d'2 a2 f2 | e2 g2 b2 | a4 z2 |\n!p! d2 f2 a2 | d'2 a2 f2 | e2 g2 b2 | a4 z2 |\n!f! f2 a2 d'2 | c'2 b2 a2 | ^g2 b2 e2 | a4 z2 |]",
        "questions": [
            {
                "question": "Compare bars 1-4 with bars 5-8. What is the primary difference?",
                "options": [
                    "The key changes to the relative minor.",
                    "The rhythm changes from quavers to semiquavers.",
                    "The dynamic changes from forte to piano.",
                    "The melody is inverted."
                ],
                "correct": 2,
                "feedback": "The notation explicitly marks !f! then !p! for the identical phrase."
            },
            {
                "question": "What is the term for this immediate repetition of a phrase at a quieter volume?",
                "options": [
                    "Crescendo",
                    "Echo Effect / Terraced Dynamics",
                    "Sforzando",
                    "Diminuendo"
                ],
                "correct": 1,
                "feedback": "The abrupt shift without transition creates a \"terrace\" of sound, often used to create an echo effect.1"
            },
            {
                "question": "Why was this dynamic technique common in Baroque keyboard music?",
                "options": [
                    "The piano had not yet been invented.",
                    "Composers preferred soft music.",
                    "The harpsichord mechanism could not produce gradual dynamic changes.",
                    "Orchestras were too small to play loudly."
                ],
                "correct": 2,
                "feedback": "The plucked string mechanism of the harpsichord produces a uniform volume regardless of finger pressure.1"
            }
        ]
    },
    "BAR-VIV-001": {
        "info": {
            "title": "Vivaldi\u2019s Spring \u2013 Ritornello Form",
            "code": "BAR-VIV-001",
            "description": "Differentiating between the Ritornello and the Episode in a major-key concerto."
        },
        "abc": "X:3\nT:Concerto in E Major (Ritornello Style)\nC:Antonio Vivaldi (Style of)\nM:4/4\nL:1/8\nQ:\"Allegro\" 1/4=100\nK:E\nV:1 name=\"Violin Solo\"\n%%MIDI program 40 % Auto-injected for Violin Solo\n!f! E2 G2 B2 B2 | B2 A2 G2 F2 | E2 G2 B2 B2 | B2 A2 G4 |\n!p! e/f/g g2 e/f/g g2 | a2 f2 d2 B2 | c2 e2 A2 c2 | B8 |]\nV:2 name=\"Orchestra\"\n%%MIDI program 48 % Auto-injected for Orchestra\n!f! E,4 G,4 | B,4 B,,4 | E,4 G,4 | B,4 E4 |\n!p! z8 | z8 | z8 | z8 |]",
        "questions": [
            {
                "question": "Bars 1-4 are played forte by the full orchestra. What is this structural section called?",
                "options": [
                    "Episode",
                    "Ritornello",
                    "Coda",
                    "Cadenza"
                ],
                "correct": 1,
                "feedback": "The \"Ritornello\" (little return) is the recurring thematic block played by the full ensemble (Tutti/Ripieno).1"
            },
            {
                "question": "In bars 5-8, the dynamic drops to piano and the solo violin plays decorative material. What is this section called?",
                "options": [
                    "Ritornello",
                    "Tutti",
                    "Episode",
                    "Minuet"
                ],
                "correct": 2,
                "feedback": "Sections between Ritornellos, featuring the soloist and often modulating or introducing new material, are called Episodes.1"
            },
            {
                "question": "The joyous mood of this opening is established by the key of:",
                "options": [
                    "E Major",
                    "E Minor",
                    "A Major",
                    "C Major"
                ],
                "correct": 0,
                "feedback": "The key signature (4 sharps) and the tonic chord (E-G#-B) confirm E Major."
            },
            {
                "question": "Vivaldi uses the solo violin in the episodes to depict images from a poem. This type of music is called:",
                "options": [
                    "Absolute Music",
                    "Programme Music",
                    "Sacred Music",
                    "Chamber Music"
                ],
                "correct": 1,
                "feedback": "Music intended to evoke extra-musical narrative or imagery (like the seasons) is Programmatic.1"
            }
        ]
    },
    "BAR-VIV-002": {
        "info": {
            "title": "Vivaldi\u2019s Spring \u2013 The Storm (Tremolo)",
            "code": "BAR-VIV-002",
            "description": "Analyzing the \"Storm\" episode characterized by tremolo and rapid scales."
        },
        "abc": "X:4\nT:The Storm Episode\nC:Antonio Vivaldi (Style of)\nM:4/4\nL:1/16\nQ:\"Presto\" 1/4=132\nK:E\nV:1 name=\"Violin Solo\"\n%%MIDI program 40 % Auto-injected for Violin Solo\n!f! B,2B,2 B,2B,2 B,2B,2 B,2B,2 | C2C2 C2C2 C2C2 C2C2 |\nD2D2 D2D2 D2D2 D2D2 | E2E2 E2E2 E2E2 E2E2 |\ne2dc bagf e2d2 c2B2 | c2BA G2F2 E4 z4 |]",
        "questions": [
            {
                "question": "The technique used in bars 1-4, where a single note is rapidly repeated, is called:",
                "options": [
                    "Vibrato",
                    "Tremolo",
                    "Pizzicato",
                    "Glissando"
                ],
                "correct": 1,
                "feedback": "Rapid iteration of a single pitch by the bow is string tremolo.1"
            },
            {
                "question": "In the programmatic context of \"Spring\", what does this technique represent?",
                "options": [
                    "Birdsong",
                    "Murmuring Brooks",
                    "Thunder",
                    "The Barking Dog"
                ],
                "correct": 2,
                "feedback": "Vivaldi specifically uses low-string tremolo to mimic the rolling of thunder in the storm episode.1"
            },
            {
                "question": "The rapid descending scale in bar 5 represents:",
                "options": [
                    "Lightning",
                    "Wind",
                    "Rain",
                    "Dancing Nymphs"
                ],
                "correct": 0,
                "feedback": "Fast, rushing scales (often ascending) are used to depict flashes of lightning.1"
            },
            {
                "question": "The tempo indication \"Presto\" suggests the music should be played:",
                "options": [
                    "Very slowly",
                    "At a walking pace",
                    "Very fast",
                    "Moderate speed"
                ],
                "correct": 2,
                "feedback": "Presto indicates a tempo faster than Allegro."
            }
        ]
    },
    "BAR-VIV-003": {
        "info": {
            "title": "Vivaldi\u2019s Spring \u2013 The Barking Dog (Viola)",
            "code": "BAR-VIV-003",
            "description": "Identifying the specific programmatic role of the viola in the slow movement."
        },
        "abc": "X:5\nT:Largo e Pianissimo\nC:Antonio Vivaldi (Style of)\nM:3/4\nL:1/8\nQ:\"Largo\" 1/4=50\nK:C#m\nV:1 name=\"Violin Solo (Melody)\"\n%%MIDI program 40 % Auto-injected for Violin Solo (Melody)\n!p! c4 B2 | c4 B2 | G4 F2 | E6 |\nV:2 name=\"Viola (The Dog)\" clef=alto\n%%MIDI program 41 % Auto-injected for Viola (The Dog)\n!f! C2 z C z C | C2 z C z C | C2 z C z C | C2 z C z C |",
        "questions": [
            {
                "question": "This movement is in the relative minor of E Major. What is the key?",
                "options": [
                    "C# Minor",
                    "A Major",
                    "B Minor",
                    "F# Minor"
                ],
                "correct": 0,
                "feedback": "The relative minor of E Major is C# Minor (sharing the 4-sharp key signature)."
            },
            {
                "question": "The Viola part (Voice 2) plays a repeated, abrupt rhythm C2 z C z C. What does this represent?",
                "options": [
                    "A heartbeat",
                    "A ticking clock",
                    "A barking dog",
                    "Footsteps"
                ],
                "correct": 2,
                "feedback": "Vivaldi explicitly marked the viola part \"Il cane che grida\" (The barking dog).4"
            },
            {
                "question": "Why is the Basso Continuo (Cello/Harpsichord) usually omitted in this movement?",
                "options": [
                    "To save money.",
                    "To create a lighter, more ethereal texture.",
                    "Because the harpsichord broke.",
                    "It was forbidden in slow movements."
                ],
                "correct": 1,
                "feedback": "Omitting the continuo creates a \"floating\" atmosphere appropriate for a sleeping scene."
            },
            {
                "question": "What clef does the Viola use?",
                "options": [
                    "Treble",
                    "Bass",
                    "Tenor",
                    "Alto"
                ],
                "correct": 3,
                "feedback": "The viola reads from the Alto clef (C clef on the middle line), indicated in ABC by clef=alto."
            }
        ]
    },
    "BAR-HAN-001": {
        "info": {
            "title": "Handel Op. 6 No. 5 \u2013 French Overture Style",
            "code": "BAR-HAN-001",
            "description": "Analyzing the rhythmic and textural features of the opening movement."
        },
        "abc": "X:6\nT:Overture in D (French Style)\nC:G.F. Handel\nM:4/4\nL:1/8\nQ:\"Larghetto\" 1/4=70\nK:D\nV:1 name=\"Violin I\"\n%%MIDI program 40 % Auto-injected for Violin I\n!f! d3/2e/ f2 A3/2B/ c2 | d3/2c/ d2 D4 |\ne3/2f/ g2 c3/2d/ e2 | A3/2B/ c2 A4 |\nF3/2G/ A2 G3/2F/ E2 | D8 |]",
        "questions": [
            {
                "question": "The rhythmic pattern d3/2e/ (dotted crotchet followed by quaver) is typical of which style?",
                "options": [
                    "Italian Sinfonia",
                    "French Overture",
                    "Gigue",
                    "Siciliana"
                ],
                "correct": 1,
                "feedback": "The jerky, dotted rhythms are the signature of the French Overture style established by Lully.1"
            },
            {
                "question": "What is the tempo character of a French Overture's opening section?",
                "options": [
                    "Fast and light",
                    "Slow and majestic",
                    "Moderate and dance-like",
                    "Accelerating"
                ],
                "correct": 1,
                "feedback": "Designed for the entry of the King (Louis XIV), the style is pompous and grand.1"
            },
            {
                "question": "In a Concerto Grosso, the full orchestra is referred to as the:",
                "options": [
                    "Concertino",
                    "Ripieno (or Tutti)",
                    "Soloist",
                    "Quartet"
                ],
                "correct": 1,
                "feedback": "The large group is the Ripieno; the small solo group is the Concertino.1"
            },
            {
                "question": "Handel often borrowed material. From where did he adapt the first movement of this concerto?",
                "options": [
                    "His opera Rinaldo",
                    "His Water Music",
                    "Gottlieb Muffat's Componimenti Musicali",
                    "Bach's Brandenburg Concertos"
                ],
                "correct": 2,
                "feedback": "Handel famously borrowed thematic material for this movement from Muffat.7"
            }
        ]
    },
    "BAR-HAN-002": {
        "info": {
            "title": "Handel Op. 6 No. 5 \u2013 Fugal Texture",
            "code": "BAR-HAN-002",
            "description": "Identifying subject, answer, and contrapuntal devices."
        },
        "abc": "X:7\nT:Fugal Allegro\nC:G.F. Handel\nM:4/4\nL:1/8\nQ:\"Allegro\" 1/4=110\nK:D\nV:1 name=\"Violin I\"\n%%MIDI program 40 % Auto-injected for Violin I\nz4 A2 d2 | c2 B2 A2 G2 | F2 E2 D2 F2 | E4 z4 |\nV:2 name=\"Violin II\"\n%%MIDI program 40 % Auto-injected for Violin II\nz8 | z4 A2 d2 | c2 B2 A2 G2 | F2 E2 D2 F2 |",
        "questions": [
            {
                "question": "The musical texture where one voice introduces a melody and another voice repeats it shortly after is called:",
                "options": [
                    "Homophony",
                    "Monophony",
                    "Polyphony (Imitative)",
                    "Heterophony"
                ],
                "correct": 2,
                "feedback": "Independent lines mimicking each other create polyphony.1"
            },
            {
                "question": "In a fugue, the first statement of the theme (Violin I, bar 1) is called the:",
                "options": [
                    "Coda",
                    "Subject",
                    "Countersubject",
                    "Episode"
                ],
                "correct": 1,
                "feedback": "The main theme of a fugue is the Subject.1"
            },
            {
                "question": "When Violin II enters with the theme in bar 2, what is it called?",
                "options": [
                    "The Question",
                    "The Answer",
                    "The Development",
                    "The Recapitulation"
                ],
                "correct": 1,
                "feedback": "The second entry of the subject (usually at the dominant pitch) is the Answer.1"
            },
            {
                "question": "This movement demonstrates Handel's mastery of:",
                "options": [
                    "Counterpoint",
                    "Serialism",
                    "Minimalism",
                    "Impressionism"
                ],
                "correct": 0,
                "feedback": "The art of combining different melodic lines is counterpoint, a key Baroque skill."
            }
        ]
    },
    "BAR-COR-001": {
        "info": {
            "title": "Corelli\u2019s Pastorale \u2013 The Sound of Christmas",
            "code": "BAR-COR-001",
            "description": "Analyzing the compound meter and drone bass of the Pastorale genre."
        },
        "abc": "X:8\nT:Pastorale (Largo)\nC:Arcangelo Corelli\nM:12/8\nL:1/8\nQ:\"Largo\" 1/4.=50\nK:G\nV:1 name=\"Violin I\"\n%%MIDI program 40 % Auto-injected for Violin I\nG3 G3 F3 G3 | E3 A3 F3 D3 |\nV:2 name=\"Violin II\"\n%%MIDI program 40 % Auto-injected for Violin II\nB,3 D3 D3 B,3 | C3 E3 A,3 F,3 |\nV:3 name=\"Cello\" clef=bass\n%%MIDI program 42 % Auto-injected for Cello\nG,12 | C,12 |",
        "questions": [
            {
                "question": "The time signature 12/8 is an example of:",
                "options": [
                    "Simple Quadruple",
                    "Compound Quadruple",
                    "Simple Triple",
                    "Compound Duple"
                ],
                "correct": 1,
                "feedback": "12/8 has four beats per bar, each divided into three (dotted crotchet beat), making it compound quadruple."
            },
            {
                "question": "The long sustained note in the Cello part (Bar 1) is known as a:",
                "options": [
                    "Drone / Pedal Note",
                    "Walking Bass",
                    "Ground Bass",
                    "Alberti Bass"
                ],
                "correct": 0,
                "feedback": "A sustained bass note imitating a bagpipe drone is a key feature of the Pastorale.1"
            },
            {
                "question": "Why is this style called a \"Pastorale\"?",
                "options": [
                    "It was written by a pastor.",
                    "It imitates the bagpipes of Italian shepherds (pifferari).",
                    "It is meant to be played fast.",
                    "It uses minor keys to depict sadness."
                ],
                "correct": 1,
                "feedback": "The Pastorale genre evokes the rural/shepherd imagery associated with the Nativity.10"
            },
            {
                "question": "Corelli's ensemble consists of two violins and a cello as soloists. This group is the:",
                "options": [
                    "Ripieno",
                    "Concertino",
                    "Tutti",
                    "Orchestra"
                ],
                "correct": 1,
                "feedback": "Corelli standardized the concertino trio (2 violins + cello).1"
            }
        ]
    },
    "BAR-BACH-001": {
        "info": {
            "title": "Bach\u2019s Air \u2013 Walking Bass and Suspensions",
            "code": "BAR-BACH-001",
            "description": "Identifying the continuous bass motion and harmonic tension."
        },
        "abc": "X:9\nT:Air from Suite No. 3\nC:J.S. Bach\nM:4/4\nL:1/8\nQ:\"Lento\" 1/4=60\nK:D\nV:1 name=\"Violin I\"\n%%MIDI program 40 % Auto-injected for Violin I\nf12 e4 | d4\nV:2 name=\"Cello\" clef=bass\n%%MIDI program 42 % Auto-injected for Cello\nD,2 D,,2 C,2 C,,2 | B,,2 B,,,2 A,,,2 G,,,2 |",
        "questions": [
            {
                "question": "The bass line moves in steady quavers, often stepping up or down an octave. This is called a:",
                "options": [
                    "Ground Bass",
                    "Walking Bass",
                    "Murky Bass",
                    "Drone"
                ],
                "correct": 1,
                "feedback": "The steady, non-stop rhythmic movement in the bass is a \"walking\" bass.11"
            },
            {
                "question": "The melody in the violin often holds a note over a change of harmony, creating a dissonance that must resolve. This device is a:",
                "options": [
                    "Suspension",
                    "Trill",
                    "Sequence",
                    "Inversion"
                ],
                "correct": 0,
                "feedback": "Holding a note from a previous chord to create tension over a new chord is a suspension.1"
            },
            {
                "question": "This movement comes from an Orchestral Suite. Which of the following is NOT a standard dance found in a Baroque suite?",
                "options": [
                    "Allemande",
                    "Sarabande",
                    "Gigue",
                    "Waltz"
                ],
                "correct": 3,
                "feedback": "The Waltz is a 19th-century dance; standard Baroque dances include Allemande, Courante, Sarabande, and Gigue.12"
            }
        ]
    },
    "BAR-TEL-001": {
        "info": {
            "title": "The Trio Sonata Texture",
            "code": "BAR-TEL-001",
            "description": "Understanding the instrumentation and texture of the Trio Sonata."
        },
        "abc": "X:10\nT:Trio Sonata in A Minor\nC:G.P. Telemann\nM:4/4\nL:1/8\nK:Am\nV:1 name=\"Recorder\"\n%%MIDI program 74 % Auto-injected for Recorder\nc2 e2 A2 c2 | B2 d2 G2 B2 |\nV:2 name=\"Violin\"\n%%MIDI program 40 % Auto-injected for Violin\ne2 c2 f2 e2 | d2 B2 e2 d2 |\nV:3 name=\"Cello\" clef=bass\n%%MIDI program 42 % Auto-injected for Cello\nA,4 A,,4 | G,,4 G,4 |",
        "questions": [
            {
                "question": "How many musicians are required to play a Baroque Trio Sonata?",
                "options": [
                    "Three",
                    "Four",
                    "Two",
                    "Six"
                ],
                "correct": 1,
                "feedback": "Two soloists + Cello + Harpsichord = 4 players.13"
            },
            {
                "question": "The two upper parts (Recorder and Violin) often cross and imitate each other. What is this relationship called?",
                "options": [
                    "Counterpoint",
                    "Unison",
                    "Drone",
                    "Parallel motion"
                ],
                "correct": 0,
                "feedback": "The interplay of independent lines is counterpoint."
            },
            {
                "question": "The bass part would be doubled by a keyboard instrument reading:",
                "options": [
                    "Tablature",
                    "Figured Bass",
                    "Lead Sheet",
                    "Tonic Sol-fa"
                ],
                "correct": 1,
                "feedback": "The keyboard player improvises chords based on the numbers (figures) below the bass line.1"
            }
        ]
    },
    "BAR-ORN-001": {
        "info": {
            "title": "Identifying Ornaments",
            "code": "BAR-ORN-001",
            "description": "Visual recognition of Trills, Mordents, and Appoggiaturas in ABC."
        },
        "abc": "X:11\nT:Ornamentation Study\nC:Baroque Assessment Bank\nM:4/4\nL:1/4\nK:C\nV:1 name=\"Flute\"\n%%MIDI program 73 % Auto-injected for Flute\n!trill!c2 d2 |!mordent!e2 f2 | {d}c4 |]",
        "questions": [
            {
                "question": "The symbol !trill! indicates a rapid alternation between the note and:",
                "options": [
                    "The note below",
                    "The note above",
                    "An octave higher",
                    "The same note"
                ],
                "correct": 1,
                "feedback": "A standard Baroque trill starts on the upper auxiliary note.1"
            },
            {
                "question": "The symbol {d}c4 represents a:",
                "options": [
                    "Turn",
                    "Trill",
                    "Appoggiatura / Grace Note",
                    "Glissando"
                ],
                "correct": 2,
                "feedback": "The small note in brackets indicates a leaning note or grace note.1"
            }
        ]
    },
    "BAR-HARM-001": {
        "info": {
            "title": "Sequences and The Circle of Fifths",
            "code": "BAR-HARM-001",
            "description": "Recognizing the driving harmonic force of Baroque music."
        },
        "abc": "X:12\nT:Circle of Fifths\nC:Baroque Assessment Bank\nM:4/4\nL:1/8\nK:C\nV:1 name=\"Violin\"\n%%MIDI program 40 % Auto-injected for Violin\ne2 g2 c2 e2 | d2 f2 B2 d2 | c2 e2 A2 c2 |\nV:2 name=\"Bass\" clef=bass\nC4 E4 | B,4 D4 | A,4 C4 |",
        "questions": [
            {
                "question": "The melody in bar 1 is repeated in bar 2 and 3 at successively lower pitches. This is a:",
                "options": [
                    "Ascending Sequence",
                    "Descending Sequence",
                    "Canon",
                    "Rondo"
                ],
                "correct": 1,
                "feedback": "The pattern repeats at a lower pitch level."
            },
            {
                "question": "The harmonic progression C -> B -> A implies movement through the:",
                "options": [
                    "Chromatic Scale",
                    "Circle of Fifths",
                    "Pentatonic Scale",
                    "Whole Tone Scale"
                ],
                "correct": 1,
                "feedback": "While the bass notes here are simplified, the implied root movement (C-F-B-E-A-D-G-C) is the standard Baroque drive mechanism.1"
            }
        ]
    },
    "BAR-RF-001": {
        "info": {
            "title": "Rapid Fire Knowledge",
            "code": "BAR-RF-001",
            "description": "Cadences"
        },
        "abc": "X:1\nT:Rapid Fire Question\nM:4/4\nL:1/4\nK:C\nz4 |]",
        "questions": [
            {
                "question": "A cadence ending V-I is called?",
                "options": [
                    "Interrupted",
                    "Imperfect",
                    "Plagal (Amen cadence)",
                    "Perfect"
                ],
                "correct": 3,
                "feedback": "Rapid fire recall."
            }
        ]
    },
    "BAR-RF-002": {
        "info": {
            "title": "Rapid Fire Knowledge",
            "code": "BAR-RF-002",
            "description": "Dance Meter"
        },
        "abc": "X:1\nT:Rapid Fire Question\nM:4/4\nL:1/4\nK:C\nz4 |]",
        "questions": [
            {
                "question": "What is the time signature of a Sarabande?",
                "options": [
                    "3/2 or 3/4 (slow triple)",
                    "2/4 (March)",
                    "6/8 (Compound Duple)",
                    "4/4 (Common Time)"
                ],
                "correct": 0,
                "feedback": "Rapid fire recall."
            }
        ]
    },
    "BAR-RF-003": {
        "info": {
            "title": "Rapid Fire Knowledge",
            "code": "BAR-RF-003",
            "description": "Voices"
        },
        "abc": "X:1\nT:Rapid Fire Question\nM:4/4\nL:1/4\nK:C\nz4 |]",
        "questions": [
            {
                "question": "A single melodic line without accompaniment is?",
                "options": [
                    "Homophonic",
                    "Polyphonic",
                    "Monophonic",
                    "Heterophonic"
                ],
                "correct": 2,
                "feedback": "Rapid fire recall."
            }
        ]
    },
    "BAR-RF-004": {
        "info": {
            "title": "Rapid Fire Knowledge",
            "code": "BAR-RF-004",
            "description": "Instruments"
        },
        "abc": "X:1\nT:Rapid Fire Question\nM:4/4\nL:1/4\nK:C\nz4 |]",
        "questions": [
            {
                "question": "Which wind instrument was NOT standard in the Baroque orchestra?",
                "options": [
                    "Clarinet",
                    "Flute",
                    "Oboe",
                    "Bassoon"
                ],
                "correct": 0,
                "feedback": "Rapid fire recall."
            }
        ]
    },
    "BAR-RF-005": {
        "info": {
            "title": "Rapid Fire Knowledge",
            "code": "BAR-RF-005",
            "description": "Dynamics"
        },
        "abc": "X:1\nT:Rapid Fire Question\nM:4/4\nL:1/4\nK:C\nz4 |]",
        "questions": [
            {
                "question": "A sudden change from loud to soft is?",
                "options": [
                    "Terraced Dynamics",
                    "Diminuendo",
                    "Sforzando",
                    "Crescendo"
                ],
                "correct": 0,
                "feedback": "Rapid fire recall."
            }
        ]
    },
    "BAR-RF-006": {
        "info": {
            "title": "Rapid Fire Knowledge",
            "code": "BAR-RF-006",
            "description": "Form"
        },
        "abc": "X:1\nT:Rapid Fire Question\nM:4/4\nL:1/4\nK:C\nz4 |]",
        "questions": [
            {
                "question": "Form with a recurring theme (A) and episodes (B, C, D)?",
                "options": [
                    "Binary Form",
                    "Sonata Form",
                    "Ritornello Form",
                    "Ternary Form"
                ],
                "correct": 2,
                "feedback": "Rapid fire recall."
            }
        ]
    },
    "BAR-RF-007": {
        "info": {
            "title": "Rapid Fire Knowledge",
            "code": "BAR-RF-007",
            "description": "Composition"
        },
        "abc": "X:1\nT:Rapid Fire Question\nM:4/4\nL:1/4\nK:C\nz4 |]",
        "questions": [
            {
                "question": "A bass line that repeats throughout the piece?",
                "options": [
                    "Walking Bass",
                    "Drone",
                    "Alberti Bass",
                    "Ground Bass (Ostinato)"
                ],
                "correct": 3,
                "feedback": "Rapid fire recall."
            }
        ]
    },
    "BAR-RF-008": {
        "info": {
            "title": "Rapid Fire Knowledge",
            "code": "BAR-RF-008",
            "description": "Composers"
        },
        "abc": "X:1\nT:Rapid Fire Question\nM:4/4\nL:1/4\nK:C\nz4 |]",
        "questions": [
            {
                "question": "Who wrote The Four Seasons?",
                "options": [
                    "Corelli",
                    "Vivaldi",
                    "Handel",
                    "Bach"
                ],
                "correct": 1,
                "feedback": "Rapid fire recall."
            }
        ]
    },
    "BAR-RF-009": {
        "info": {
            "title": "Rapid Fire Knowledge",
            "code": "BAR-RF-009",
            "description": "Geography"
        },
        "abc": "X:1\nT:Rapid Fire Question\nM:4/4\nL:1/4\nK:C\nz4 |]",
        "questions": [
            {
                "question": "Where did the Concerto Grosso originate?",
                "options": [
                    "Italy (Corelli)",
                    "France (Lully)",
                    "England (Purcell)",
                    "Germany (Bach)"
                ],
                "correct": 0,
                "feedback": "Rapid fire recall."
            }
        ]
    },
    "BAR-RF-010": {
        "info": {
            "title": "Rapid Fire: Notation",
            "code": "BAR-RF-010",
            "description": "Quick knowledge check on Notation"
        },
        "abc": "X:1\nT:Rapid Fire Question\nM:4/4\nL:1/4\nK:C\nz4 |]",
        "questions": [
            {
                "question": "What does a figured bass number '#6' mean?",
                "options": [
                    "Seventh chord",
                    "First inversion chord with a raised 6th",
                    "Second inversion chord",
                    "Root position triad"
                ],
                "correct": 1,
                "feedback": "Rapid fire recall."
            }
        ]
    },
    "M4FFLY4X7BKRI7YE": {
        "info": {
            "title": "Baroque Allegro (Specimen 5)",
            "code": "M4FFLY4X7BKRI7YE",
            "description": ""
        },
        "abc": "X:1\nT:Specimen Extract: Baroque Allegro\nC:SchoolClass.Net\nM:4/4\nL:1/8\n%%tempofont Wingdings 1\nQ:\"Allegro\" 1/4=120\nK:D\n%%barnumbers 1\n%%MIDI program 40 % Violin\nV:1 name=\"Violin\"\n!f! d2 f2 a2 d'2 | c'2 b2 a4 | !p! g2 f2 e2 d2 | c2 B2 A4 |\n!f! B2 d2 g2 b2 | a2 g2 f4 | e2 d2 !trill!c2 B2 | A4 z4 |\na2 g2 f2 e2 | d2 c2 B2 A2 | G2 F2 E2 D2 | D4 z4 |]\nV:2 name=\"Cello (Continuo)\" clef=bass\n%%MIDI program 42 % Cello\n!f! D,4 F,4 | A,4 F,4 | !p! E,4 G,4 | A,4 F,4 |\n!f! G,4 B,4 | F,4 D,4 | A,4 E,4 | A,,4 z4 |\nF,4 A,4 | B,4 F,4 | G,4 A,4 | D,4 z4 |]",
        "questions": [
            {
                "question": "Which period of musical history does this extract represent?",
                "options": [
                    "Classical",
                    "Baroque",
                    "Romantic",
                    "Twentieth Century"
                ],
                "correct": 1,
                "feedback": "The presence of continuo functions (implied harpsichord), terraced dynamics, and ornamentation defines the period (c. 1600\u20131750)."
            },
            {
                "question": "The bass line in this extract is played by a cello. Which keyboard instrument would typically complete the *basso continuo*?",
                "options": [
                    "Piano (Fortepiano)",
                    "Synthesizer",
                    "Harpsichord",
                    "Organ"
                ],
                "correct": 2,
                "feedback": "The harpsichord is the standard keyboard instrument for the Baroque *basso continuo*; the piano belongs to the Classical era."
            },
            {
                "question": "What is the texture of the music?",
                "options": [
                    "Monophonic",
                    "Polyphonic / Contrapuntal",
                    "Heterophonic",
                    "Homophonic (Melody and Accompaniment)"
                ],
                "correct": 3,
                "feedback": "While Baroque music is often contrapuntal, this specific extract features a clear melody in the violin supported by a bass line, creating a homophonic texture."
            },
            {
                "question": "In bars 3 and 4, the dynamic changes suddenly from *forte* to *piano*. What is the term for this?",
                "options": [
                    "Crescendo",
                    "Diminuendo",
                    "Terraced Dynamics",
                    "Sforzando"
                ],
                "correct": 2,
                "feedback": "Abrupt volume changes without crescendos/diminuendos are a hallmark of Baroque style."
            },
            {
                "question": "Which ornament is indicated by the symbol in bar 7 of the violin part?",
                "options": [
                    "Mordent",
                    "Turn",
                    "Acciaccatura",
                    "Trill"
                ],
                "correct": 3,
                "feedback": "The `!trill!` code indicates a rapid alternation between the note and the note above."
            },
            {
                "question": "Identify the cadence at the end of the first phrase (bar 8).",
                "options": [
                    "Perfect (V\u2013I)",
                    "Imperfect (ending on V)",
                    "Plagal (IV\u2013I)",
                    "Interrupted (V\u2013VI)"
                ],
                "correct": 1,
                "feedback": "The music pauses on an A Major chord (the Dominant of D Major) at bar 8, creating an expectant, unfinished sound."
            },
            {
                "question": "Which compositional device is used in the violin melody in bars 3 and 4?",
                "options": [
                    "Ascending Sequence",
                    "Descending Sequence",
                    "Pedal Note",
                    "Inversion"
                ],
                "correct": 1,
                "feedback": "The pattern in bar 3 is repeated at a lower pitch in bar 4."
            },
            {
                "question": "In a Concerto Grosso, what is the name given to the small group of soloists?",
                "options": [
                    "Tutti",
                    "Ripieno",
                    "Concertino",
                    "Orchestra"
                ],
                "correct": 2,
                "feedback": "The *concertino* is the specific term for the small group of soloists in a Concerto Grosso."
            },
            {
                "question": "In a Concerto Grosso, what is the name given to the full orchestra?",
                "options": [
                    "Concertino",
                    "Ripieno / Tutti",
                    "Soloist",
                    "Quartet"
                ],
                "correct": 1,
                "feedback": "The *ripieno* (or *tutti*) refers to the full orchestra that accompanies the soloists."
            },
            {
                "question": "Which of the following instruments would NOT typically be found in an orchestra of this period?",
                "options": [
                    "Violin",
                    "Clarinet",
                    "Oboe",
                    "Bassoon"
                ],
                "correct": 1,
                "feedback": "Clarinets were not standard in the Baroque orchestra; they became common in the Classical/Romantic periods."
            },
            {
                "question": "What is the tonality of this extract?",
                "options": [
                    "D Major",
                    "D Minor",
                    "C Major",
                    "Atonal"
                ],
                "correct": 0,
                "feedback": "The key signature (two sharps) and the major sounding triads indicate D Major."
            },
            {
                "question": "Which form is commonly associated with the first movement of a Baroque Concerto (such as Vivaldi's *Spring*)?",
                "options": [
                    "Sonata Form",
                    "Minuet and Trio",
                    "Ritornello Form",
                    "Theme and Variations"
                ],
                "correct": 2,
                "feedback": "This form alternates a recurring orchestral theme (*ritornello*) with solo episodes, as seen in the focus works by Vivaldi and Handel."
            },
            {
                "question": "What is the interval between the first two notes of the violin part in bar 1?",
                "options": [
                    "Major 3rd",
                    "Perfect 4th",
                    "Perfect 5th",
                    "Minor 3rd"
                ],
                "correct": 3,
                "feedback": "D to F is an interval of 3 semitones, which is a Minor 3rd."
            },
            {
                "question": "The aesthetic concept that a single mood or emotion should persist throughout a Baroque movement is known as:",
                "options": [
                    "The Doctrine of the Affections",
                    "Programme Music",
                    "Nationalism",
                    "Minimalism"
                ],
                "correct": 0,
                "feedback": "This is the Baroque belief that a piece of music should explore and sustain one specific emotion (affect) at a time."
            },
            {
                "question": "Look at the bass part in the ABC notation. What clef is used for the Cello?",
                "options": [
                    "Treble Clef",
                    "Alto Clef",
                    "Tenor Clef",
                    "Bass Clef"
                ],
                "correct": 3,
                "feedback": "The code `clef=bass` is used for the Cello/Continuo part, which is standard for low-pitched instruments."
            },
            {
                "question": "Which of the following composers is a 'Focus Composer' for this Area of Study in the 2026 syllabus?",
                "options": [
                    "Mozart",
                    "Handel",
                    "Beethoven",
                    "Haydn"
                ],
                "correct": 1,
                "feedback": "Handel (along with Vivaldi) is a prescribed Focus Composer for Area of Study 1."
            },
            {
                "question": "What is the relationship between the starting key (D Major) and the key suggested at the cadence in bar 8 (A Major)?",
                "options": [
                    "Relative Minor",
                    "Dominant",
                    "Subdominant",
                    "Tonic Minor"
                ],
                "correct": 1,
                "feedback": "A Major is the dominant (5th degree) of the tonic D Major."
            },
            {
                "question": "Which rhythmic feature involves a dotted note followed by a short note, often associated with the French Overture style?",
                "options": [
                    "Syncopation",
                    "Dotted Rhythms",
                    "Triplets",
                    "Polyrhythm"
                ],
                "correct": 1,
                "feedback": "Dotted rhythms are characteristic of the Baroque style, particularly in the stately French Overture."
            },
            {
                "question": "What is the system of numbers written below the bass line to indicate chords called?",
                "options": [
                    "Tablature",
                    "Figured Bass",
                    "Lead Sheet",
                    "Cipher Notation"
                ],
                "correct": 1,
                "feedback": "The Baroque shorthand system of numbers under the bass line to indicate harmony is called Figured Bass."
            },
            {
                "question": "If this piece ended on a minor key but the final chord was changed to a Major chord, what would that device be called?",
                "options": [
                    "Neapolitan Sixth",
                    "Dominant Seventh",
                    "Tierce de Picardie",
                    "Suspension"
                ],
                "correct": 2,
                "feedback": "Ending a piece in a minor key with a major chord is a specific Baroque harmonic device known as a Tierce de Picardie."
            }
        ]
    },
    "G2YYF5JHRQ9X9OKR": {
        "info": {
            "title": "Concerto in G Minor (Specimen A)",
            "code": "G2YYF5JHRQ9X9OKR",
            "description": ""
        },
        "abc": "X:1\nT:Specimen Extract: Concerto in G Minor\nC:SchoolClass.Net\nM:4/4\nL:1/8\n%%tempofont Wingdings 1\nQ:\"Allegro\" 1/4=116\nK:Gm\n%%barnumbers 1\n%%MIDI program 40 % Violin\nV:1 name=\"Violin I (Concertino)\"\n!f! G2 B2 d2 g2 | ^f2 a2 d2 c2 | B2 d2 c2 A2 | G4 ^F4 |\n!p! G2 D2 B,2 G,2 | F2 C2 A,2 F,2 | E2 B,2 G,2 E,2 | D4 ^C4 |\n!f! D2 =E2 ^F2 D2 | G2 A2 B2 G2 | c2 B2 A2 G2 | ^F4 !trill!G4 |\n[M:3/2] A4 d4 ^c4 | d4 A4 F4 | [M:4/4] G2 B2 A2 G2 | ^F2 A2 D2 C2 |\nB,2 G2 D2 ^F2 | G4 =B4 | c4 c4 | =B4 z4 ||\nV:2 name=\"Strings (Ripieno)\"\n%%MIDI program 48 % String Ensemble\n!f! G4 B4 | A4 D4 | G4 E4 | D4 D4 |\n!p! z8 | z8 | z8 | z8 |\n!f! D4 D4 | D4 D4 | E4 E4 | D4 D4 |\n[M:3/2] ^F4 G4 E4 | F4 F4 D4 | [M:4/4] B,2 D2 C2 B,2 | A,4 A,4 |\nG,4 B,4 | B,4 G,4 | G,4 F,4 | G,4 z4 ||\nV:3 name=\"Basso Continuo\" clef=bass\n%%MIDI program 42 % Cello\n!f! G,4 G,4 | D,4 ^F,4 | G,4 C,4 | D,4 D,,4 |\n!p! B,,4 G,,4 | A,,4 F,,4 | G,,4 E,,4 | F,,4 A,,4 |\n!f! D,4 C,4 | B,,4 G,,4 | C,4 ^C,4 | D,4 B,,4 |\n[M:3/2] D,4 B,,4 A,,4 | D,4 D,,4 D,4 | [M:4/4] G,,4 G,4 | D,4 ^F,4 |\nG,4 B,,4 | E,4 D,4 | C,4 A,,4 | G,,4 z4 ||",
        "questions": [
            {
                "question": "Which period of music does this extract represent?",
                "options": [
                    "Classical",
                    "Baroque",
                    "Romantic",
                    "Twentieth Century"
                ],
                "correct": 1,
                "feedback": "The extract features a harpsichord (implied by context), string-dominated texture, and terraced dynamics, consistent with the period c. 1600\u20131750 [Syllabus Section 3.1]."
            },
            {
                "question": "Which instrument plays the bass line in this extract?",
                "options": [
                    "Double Bass and Tuba",
                    "Cello (part of the Basso Continuo)",
                    "Piano",
                    "Synthesizer"
                ],
                "correct": 1,
                "feedback": "The *basso continuo* is the foundational accompaniment in Baroque music, typically consisting of a cello (bass) and harpsichord (chords) [Syllabus Area of Study 1]."
            },
            {
                "question": "What is the texture of the opening four bars?",
                "options": [
                    "Monophonic",
                    "Homophonic (Melody and Accompaniment)",
                    "Polyphonic / Contrapuntal",
                    "Heterophonic"
                ],
                "correct": 1,
                "feedback": "While Baroque music is often contrapuntal, the opening here features a clear melody in the violin supported by block chords in the ripieno, creating a homophonic texture."
            },
            {
                "question": "In bars 5\u20138, the dynamic changes suddenly from *forte* to *piano*. What is the term for this?",
                "options": [
                    "Crescendo",
                    "Diminuendo",
                    "Terraced Dynamics",
                    "Sforzando"
                ],
                "correct": 2,
                "feedback": "The abrupt shift from *forte* to *piano* without a crescendo/diminuendo is a hallmark of Baroque style [Lexicon 1.1]."
            },
            {
                "question": "What compositional device is heard in the Violin I part in bars 5\u20137?",
                "options": [
                    "Ascending Sequence",
                    "Descending Sequence",
                    "Pedal Note",
                    "Inversion"
                ],
                "correct": 1,
                "feedback": "The melodic pattern in bar 5 is repeated at a lower pitch in bar 6 and again in bar 7 [Lexicon 1.10]."
            },
            {
                "question": "Which ornament is indicated by the symbol in bar 12 of the Violin I part?",
                "options": [
                    "Mordent",
                    "Turn",
                    "Acciaccatura",
                    "Trill"
                ],
                "correct": 3,
                "feedback": "The `!trill!` code indicates a rapid alternation between the printed note and the note above [Lexicon 4.1]."
            },
            {
                "question": "Identify the cadence at the end of the first phrase (bar 4).",
                "options": [
                    "Perfect (V\u2013I)",
                    "Plagal (IV\u2013I)",
                    "Imperfect (ending on V)",
                    "Interrupted (V\u2013VI)"
                ],
                "correct": 2,
                "feedback": "The music pauses on a D major chord (the Dominant of G Minor) at bar 4, creating an unfinished cadence."
            },
            {
                "question": "What is the tonality of this extract?",
                "options": [
                    "G Major",
                    "G Minor",
                    "D Major",
                    "B Flat Major"
                ],
                "correct": 1,
                "feedback": "The key signature (two flats) and the presence of F# (leading note) indicate G Minor."
            },
            {
                "question": "In a Concerto Grosso, what is the name given to the small group of soloists (heard here in the Violin I part during the *piano* section)?",
                "options": [
                    "Tutti",
                    "Ripieno",
                    "Concertino",
                    "Orchestra"
                ],
                "correct": 2,
                "feedback": "In a *Concerto Grosso*, the small group of soloists is called the *concertino* [Syllabus Area of Study 1]."
            },
            {
                "question": "In a Concerto Grosso, what is the name given to the full orchestra?",
                "options": [
                    "Concertino",
                    "Ripieno / Tutti",
                    "Soloist",
                    "Quartet"
                ],
                "correct": 1,
                "feedback": "The full orchestra that plays the *ritornello* sections is known as the *ripieno* or *tutti* [Syllabus Area of Study 1]."
            },
            {
                "question": "Look at the time signature change in bar 13 ([M:3/2]). What rhythmic effect does this create before the final section?",
                "options": [
                    "Syncopation",
                    "Hemiola feel (broadening the pulse)",
                    "Polyrhythm",
                    "Accelerando"
                ],
                "correct": 1,
                "feedback": "A change to a 3/2 feel (broadening the beat) before a cadence is a common Baroque device known as a Hemiola [Lexicon 1.2]."
            },
            {
                "question": "Which instrument would most likely be improvising chords based on the bass line?",
                "options": [
                    "Piano",
                    "Harpsichord",
                    "Clarinet",
                    "Timpani"
                ],
                "correct": 1,
                "feedback": "The harpsichord is the standard keyboard instrument for the Baroque *basso continuo*; the piano belongs to the Classical era [Syllabus Area of Study 1]."
            },
            {
                "question": "What is the system of numbers often written below the bass line to indicate these chords called?",
                "options": [
                    "Tablature",
                    "Figured Bass",
                    "Lead Sheet",
                    "Cipher Notation"
                ],
                "correct": 1,
                "feedback": "The numbers indicating chords for improvisation are called Figured Bass [Lexicon 2.1]."
            },
            {
                "question": "Which form is most commonly associated with the first movement of a Baroque Concerto (alternating between the full orchestra theme and solo episodes)?",
                "options": [
                    "Sonata Form",
                    "Rondo Form",
                    "Ritornello Form",
                    "Theme and Variations"
                ],
                "correct": 2,
                "feedback": "This form alternates a recurring orchestral theme (*ritornello*) with solo episodes [Lexicon 1.10]."
            },
            {
                "question": "If the piece ended on a G Major chord instead of the expected G Minor chord in the final bar (bar 20), what would this device be called?",
                "options": [
                    "Neapolitan Sixth",
                    "Dominant Seventh",
                    "Tierce de Picardie",
                    "Suspension"
                ],
                "correct": 2,
                "feedback": "Ending a minor piece with a major chord is a specific Baroque harmonic device called a Tierce de Picardie [Lexicon 4.5]."
            },
            {
                "question": "Which of the following composers is a prescribed 'Focus Composer' for Area of Study 1 in the 2026\u20132028 syllabus?",
                "options": [
                    "Mozart",
                    "Handel",
                    "Beethoven",
                    "Haydn"
                ],
                "correct": 1,
                "feedback": "Handel (along with Vivaldi) is a Focus Composer for AOS1 in the 2026 syllabus [Syllabus Area of Study 1]."
            },
            {
                "question": "What is the relationship between the starting key (G Minor) and the key suggested by the F#s and A naturals in bar 14 (D Major)?",
                "options": [
                    "Dominant",
                    "Subdominant",
                    "Relative Major",
                    "Relative Minor"
                ],
                "correct": 0,
                "feedback": "D Major is the dominant key of G Minor."
            },
            {
                "question": "Which rhythmic feature is prominent in the melody of bar 1?",
                "options": [
                    "Triplets",
                    "Syncopation",
                    "Continuous Quavers/Semiquavers (Motor Rhythm)",
                    "Dotted Rhythms"
                ],
                "correct": 2,
                "feedback": "Baroque music often features a driving, continuous rhythm known as \"motor rhythm\" [Lexicon 1.2]."
            },
            {
                "question": "The Baroque aesthetic belief that a single mood or emotion should persist throughout a movement is known as:",
                "options": [
                    "The Doctrine of the Affections",
                    "Programme Music",
                    "Nationalism",
                    "Minimalism"
                ],
                "correct": 0,
                "feedback": "The belief that a piece should sustain a single \"affect\" or mood is central to Baroque aesthetics [Lexicon 3.2]."
            },
            {
                "question": "Which clef is used for the Basso Continuo part in the score?",
                "options": [
                    "Treble Clef",
                    "Alto Clef",
                    "Tenor Clef",
                    "Bass Clef"
                ],
                "correct": 3,
                "feedback": "The F clef (`clef=bass`) is standard for the cello/continuo line."
            }
        ]
    },
    "CW5OPBWHR120H5G5": {
        "info": {
            "title": "Concerto Grosso (Specimen B)",
            "code": "CW5OPBWHR120H5G5",
            "description": ""
        },
        "abc": "X:1\nT:Specimen Extract B (Concerto Grosso)\nC:SchoolClass.Net\nM:3/4\nL:1/8\n%%tempofont Wingdings 1\nQ:\"Allegro\" 1/4=120\nK:Am\n%%barnumbers 1\n%%MIDI program 40 % Violin\nV:1 name=\"Violin I (Concertino)\"\n!f! A2 c2 e2 | a4 e2 | f2 d2 B2 | e4 E4 |\n!p! c2 B2 A2 | B2 A2 ^G2 | A2 c2 e2 | d4 c4 |\n!f! d2 f2 a2 | b2 d'2 f2 | e2 g2 b2 | c'2 e'2 g2 |\nf2 e2 d2 | !trill!e2 d2 c2 | B2 A2 ^G2 | A4 z2 ||\nV:2 name=\"Violin II (Ripieno)\"\n%%MIDI program 40\n!f! A2 A2 A2 | c4 c2 | d4 d2 | B4 G4 |\n!p! z6 | z6 | z6 | z6 |\n!f! F2 A2 d2 | G2 B2 d2 | c2 e2 g2 | F2 A2 c2 |\nd2 A2 F2 | E2 G2 E2 | E2 E2 E2 | ^c4 z2 ||\nV:3 name=\"Cello/Harpsichord (Continuo)\" clef=bass\n%%MIDI program 42 % Cello\n!f! A,4 A,,2 | A,4 A,,2 | D,4 G,2 | C,4 E,2 |\n!p! A,,2 C,2 E,2 | E,2 D,2 B,,2 | A,,2 A,2 G,2 | F,4 E,4 |\n!f! D,4 C,2 | G,4 F,2 | C,4 B,,2 | F,4 E,2 |\nD,4 F,4 | E,4 A,4 | E,4 E,4 | A,,4 z2 ||",
        "questions": [
            {
                "question": "Listen to the speed of the music. Which of the following is the most suitable Italian tempo marking?",
                "options": [
                    "Adagio (Slow)",
                    "Andante (Walking pace)",
                    "Allegro (Fast)",
                    "Grave (Very slow)"
                ],
                "correct": 2,
                "feedback": "The music is lively and energetic, typical of a Baroque first or last movement."
            },
            {
                "question": "What is the approximate speed (BPM) of this extract?",
                "options": [
                    "60 BPM",
                    "90 BPM",
                    "120 BPM",
                    "160 BPM"
                ],
                "correct": 2,
                "feedback": "\"Allegro\" in this style typically ranges between 110\u2013130 BPM."
            },
            {
                "question": "Which period of music is this extract from?",
                "options": [
                    "Baroque",
                    "Classical",
                    "Romantic",
                    "Twentieth Century"
                ],
                "correct": 0,
                "feedback": "The use of harpsichord (continuo), terraced dynamics, and the specific texture confirms the Baroque era (1600\u20131750)."
            },
            {
                "question": "What is the texture in bars 1\u20134?",
                "options": [
                    "Monophonic",
                    "Polyphonic / Contrapuntal",
                    "Homophonic (Melody and Accompaniment)",
                    "Heterophonic"
                ],
                "correct": 2,
                "feedback": "Although Baroque is often polyphonic, these specific opening bars show a clear melody in V1/V2 supported by a bass line, moving largely together rhythmically."
            },
            {
                "question": "In bars 5\u20138, the dynamic drops to *piano*. Which group of instruments is playing the melody here?",
                "options": [
                    "The full orchestra (Tutti)",
                    "The Concertino (Soloists)",
                    "The Brass section",
                    "The Percussion section"
                ],
                "correct": 1,
                "feedback": "In a Concerto Grosso, the quieter sections are typically played by the small group of soloists (Concertino) to create contrast with the Ripieno."
            },
            {
                "question": "What is the name given to the continuous bass part played by the Cello and Harpsichord?",
                "options": [
                    "Ground Bass",
                    "Walking Bass",
                    "Alberti Bass",
                    "Basso Continuo"
                ],
                "correct": 3,
                "feedback": "This is the defining accompaniment style of the Baroque, consisting of a bass instrument and a chordal instrument."
            },
            {
                "question": "Look at the bass line in bars 9\u201312. The root notes move D -> G -> C -> F. What harmonic device is this?",
                "options": [
                    "Pedal Note",
                    "Circle of Fifths",
                    "Drone",
                    "Tierce de Picardie"
                ],
                "correct": 1,
                "feedback": "The root movement descends by 5ths (or ascends by 4ths): D-G-C-F. This is a standard Baroque sequence."
            },
            {
                "question": "Which ornament is heard in the Violin I part in bar 14?",
                "options": [
                    "Turn",
                    "Mordent",
                    "Trill",
                    "Acciaccatura"
                ],
                "correct": 2,
                "feedback": "The `!trill!` code creates a rapid alternation between the note (E) and the note above."
            },
            {
                "question": "Identify the cadence at the very end of the extract (bars 15\u201316).",
                "options": [
                    "Plagal (IV\u2013I)",
                    "Interrupted (V\u2013VI)",
                    "Imperfect (I\u2013V)",
                    "Perfect (V\u2013I)"
                ],
                "correct": 3,
                "feedback": "The chord moves from E Major (Dominant) to A Major (Tonic), creating a finished cadence."
            },
            {
                "question": "What is the key signature of this piece?",
                "options": [
                    "A Minor (no sharps or flats)",
                    "C Major (no sharps or flats)",
                    "G Major (one sharp)",
                    "F Major (one flat)"
                ],
                "correct": 0,
                "feedback": "The key signature is empty (like C Major), but the frequent G sharps indicate A Minor."
            },
            {
                "question": "Look at the final chord in bar 16. The piece is in A Minor, but the Violin II plays a C# (making the chord A Major). What is this device called?",
                "options": [
                    "Suspension",
                    "Hemiola",
                    "Tierce de Picardie",
                    "Neapolitan 6th"
                ],
                "correct": 2,
                "feedback": "Ending a minor key piece with a major chord (sharpening the 3rd) is a Tierce de Picardie."
            },
            {
                "question": "Which instrument is most likely filling in the harmonies (chords) above the bass line?",
                "options": [
                    "Piano",
                    "Organ",
                    "Lute",
                    "Harpsichord"
                ],
                "correct": 3,
                "feedback": "The standard keyboard continuo instrument for secular Baroque music."
            },
            {
                "question": "In a Concerto Grosso, what is the large accompanying group called?",
                "options": [
                    "Concertino",
                    "Ripieno / Tutti",
                    "Soloist",
                    "Quartet"
                ],
                "correct": 1,
                "feedback": "The full orchestra is known as the Ripieno."
            },
            {
                "question": "Which time signature fits this extract?",
                "options": [
                    "2/4",
                    "3/4",
                    "4/4",
                    "6/8"
                ],
                "correct": 1,
                "feedback": "There are three crotchet beats per bar."
            },
            {
                "question": "Which composer is a 'Focus Composer' for this Area of Study in the 2026 syllabus?",
                "options": [
                    "Bach",
                    "Vivaldi",
                    "Mozart",
                    "Beethoven"
                ],
                "correct": 1,
                "feedback": "Vivaldi is a Focus Composer for AoS1 (along with Handel)."
            },
            {
                "question": "What textural feature is prominent in bars 9\u201312 between the Violin I and the Bass?",
                "options": [
                    "Unison",
                    "Parallel motion",
                    "Imitation (or Dialogue)",
                    "Monophony"
                ],
                "correct": 1,
                "feedback": "In this specific computer-generated extract, the upper melody and bass often move in similar directions or sequences, though strictly speaking, Baroque often uses contrary motion. In this specific sequence (bars 9-12), they are moving in a sequential pattern."
            },
            {
                "question": "The sudden change from *forte* in bar 4 to *piano* in bar 5 is an example of:",
                "options": [
                    "Crescendo",
                    "Diminuendo",
                    "Terraced Dynamics",
                    "Sforzando"
                ],
                "correct": 2,
                "feedback": "Stepped changes in volume without crescendos."
            },
            {
                "question": "What is the interval between the first two notes of the Violin I part (A to C)?",
                "options": [
                    "Major 3rd",
                    "Minor 3rd",
                    "Perfect 4th",
                    "Major 2nd"
                ],
                "correct": 1,
                "feedback": "A to C is 3 semitones."
            },
            {
                "question": "Bars 13\u201314 feature a harmonic progression leading to the cadence. What harmonic device involving a clash of notes is implied in bar 15 (though not explicitly fully scored here, it is typical of the style)?",
                "options": [
                    "Suspension (4-3)",
                    "Pedal Note",
                    "Drone",
                    "Cluster"
                ],
                "correct": 0,
                "feedback": "At a cadence point like this (V-I), a 4-3 suspension is the most stylistic feature expected in the harmony."
            },
            {
                "question": "Based on the style, which specific genre does this extract represent?",
                "options": [
                    "Solo Concerto",
                    "Concerto Grosso",
                    "Symphony",
                    "Sonata"
                ],
                "correct": 1,
                "feedback": "The contrast between the loud tutti sections and the quiet solo sections defines the Concerto Grosso."
            }
        ]
    },
    "3PNS7U52EAU9Y60Z": {
        "info": {
            "title": "Fugal Style (Specimen C)",
            "code": "3PNS7U52EAU9Y60Z",
            "description": ""
        },
        "abc": "X:1\nT:Specimen Extract C (Fugal Style)\nC:SchoolClass.Net\nM:3/4\nL:1/8\n%%tempofont Wingdings 1\nQ:\"Allegro\" 1/4=112\nK:Cm\n%%barnumbers 1\n%%MIDI program 40 % Violin\nV:1 name=\"Violin I\"\n!f! c2 G2 E2 | C2 D2 E2 | F2 G2 A2 | G4 z2 |\nz6 | z6 | G2 d2 B2 | G2 A2 B2 |\nc2 d2 e2 | d2 e2 f2 | e2 d2 c2 | =B4 d2 |\ng2 f2 e2 | d2 c2 B2 | c2 d2 G2 | F4 E2 |\nD2 G,2 =B,2 | C4 =B,2 | C6 ||\nV:2 name=\"Violin II\"\n%%MIDI program 40\nz6 | z6 | !f! G2 E2 C2 | G,2 A,2 =B,2 |\nC2 D2 E2 | D4 z2 | G2 F2 D2 | E2 F2 G2 |\nA2 B2 c2 | =B2 G2 d2 | c2 B2 A2 | G4 =B2 |\nc2 d2 e2 | f2 e2 d2 | e2 f2 e2 | d2 G2 c2 |\n=B,2 D2 F2 | E2 D2 D2 | [K:C] E6 ||\nV:3 name=\"Cello (Continuo)\" clef=bass\n%%MIDI program 42\nz6 | z6 | z6 | z6 |\nz6 | z6 | !f! C,2 G,2 E,2 | C,2 D,2 E,2 |\nF,2 G,2 A,2 | G,2 =B,2 G,2 | C2 G,2 F,2 | G,4 F,2 |\nE,2 D,2 C,2 | B,,2 A,,2 G,,2 | C,2 B,,2 C,2 | D,2 E,2 C,2 |\nG,2 =B,,2 G,,2 | C,2 F,2 G,2 | [K:C] C,6 ||",
        "questions": [
            {
                "question": "Listen to the opening melody in bars 1\u20134. What is the technical name for this main theme in a fugal texture?",
                "options": [
                    "The Episode",
                    "The Subject",
                    "The Ritornello",
                    "The Coda"
                ],
                "correct": 1,
                "feedback": "In a fugue or fugal style, the first statement of the main theme is always called the Subject [Source 1539]."
            },
            {
                "question": "Which instrument plays the main theme first?",
                "options": [
                    "Violin II",
                    "Cello",
                    "Violin I",
                    "Viola"
                ],
                "correct": 2,
                "feedback": "The score shows `V:1` (Violin I) starting alone in bar 1."
            },
            {
                "question": "In bars 3\u20136, Violin II enters with the same theme but at a different pitch. What is this entry called?",
                "options": [
                    "The Answer",
                    "The Counter-subject",
                    "The Inversion",
                    "The Retrograde"
                ],
                "correct": 0,
                "feedback": "The second entry of the subject, usually in the dominant key, is called the Answer [Source 104]."
            },
            {
                "question": "What is the texture of the first 8 bars?",
                "options": [
                    "Monophonic building to Polyphonic",
                    "Homophonic throughout",
                    "Heterophonic",
                    "Monophonic throughout"
                ],
                "correct": 0,
                "feedback": "It starts with a single line (Monophony) and adds independent lines (Polyphony/Counterpoint), a defining trait of fugal expositions [Source 1539]."
            },
            {
                "question": "Which Baroque harmonic device is heard in the bass line in bars 13\u201315 (E-D-C-B-A-G)?",
                "options": [
                    "Tonic Pedal",
                    "Circle of Fifths",
                    "Walking Bass (Scalic descent)",
                    "Ground Bass"
                ],
                "correct": 2,
                "feedback": "The bass moves stepwise down the scale. While sequences exist, this specific motion is a walking bass/scalic run common in Baroque music."
            },
            {
                "question": "Look at bar 18. The Violin I and Violin II parts clash (D against C) before resolving. What is this harmonic device called?",
                "options": [
                    "Suspension (4-3)",
                    "Anticipation",
                    "Tierce de Picardie",
                    "Pedal Note"
                ],
                "correct": 0,
                "feedback": "The clash of a second resolving to a third at a cadence point is a classic 4-3 suspension, typical of Corelli and Handel [Source 149, 1502]."
            },
            {
                "question": "How does the piece end (bar 19)?",
                "options": [
                    "With a fade out",
                    "With a unison note",
                    "With a Tierce de Picardie (Major chord)",
                    "With an interrupted cadence"
                ],
                "correct": 2,
                "feedback": "The key is C Minor, but the final chord contains an E natural (Major 3rd), creating a Tierce de Picardie [Source 1286]."
            },
            {
                "question": "What is the relationship between the starting key (C Minor) and the key of the Answer in bar 3 (G Minor)?",
                "options": [
                    "Tonic and Subdominant",
                    "Tonic and Dominant",
                    "Relative Major",
                    "Relative Minor"
                ],
                "correct": 1,
                "feedback": "G is the dominant note of C. Fugal entries typically move from Tonic to Dominant."
            },
            {
                "question": "Which period of music is this extract from?",
                "options": [
                    "Renaissance",
                    "Baroque",
                    "Classical",
                    "Romantic"
                ],
                "correct": 1,
                "feedback": "Fugal texture, harpsichord instrumentation, and functional harmony define the Baroque period (1600\u20131750) [Source 1539]."
            },
            {
                "question": "Which composer is a Focus Composer for this Area of Study?",
                "options": [
                    "Beethoven",
                    "Haydn",
                    "Handel",
                    "Schubert"
                ],
                "correct": 2,
                "feedback": "Handel (along with Vivaldi) is the specific Focus Composer for AOS1 in the 2026 syllabus [Source 1496]."
            },
            {
                "question": "Listen to the tempo. What is the most suitable Italian term for this speed?",
                "options": [
                    "Largo (Very slow)",
                    "Adagio (Slow)",
                    "Andante (Walking pace)",
                    "Allegro (Fast)"
                ],
                "correct": 3,
                "feedback": "The tempo set in the code is 112 BPM, which corresponds to Allegro."
            },
            {
                "question": "In bar 11, the Violin I plays a trill (implied by the style). This is an example of:",
                "options": [
                    "Ornamentation",
                    "Glissando",
                    "Rubato",
                    "Pizzicato"
                ],
                "correct": 0,
                "feedback": "Trills are a type of ornamentation, essential to Baroque melody [Source 1502]."
            },
            {
                "question": "What cadence is heard at the very end of the extract (bars 18\u201319)?",
                "options": [
                    "Plagal",
                    "Perfect",
                    "Imperfect",
                    "Interrupted"
                ],
                "correct": 1,
                "feedback": "The bass moves from G (Dominant) to C (Tonic), creating a decisive finish [Source 1286]."
            },
            {
                "question": "If this were a Concerto Grosso, which instruments would likely form the *concertino*?",
                "options": [
                    "The full orchestra",
                    "The percussion section",
                    "The two Violins and Cello",
                    "A solo flute"
                ],
                "correct": 2,
                "feedback": "In the Corelli/Handel tradition, the *concertino* (solo group) usually consisted of two violins and a cello [Source 1502]."
            },
            {
                "question": "What is the time signature of this extract?",
                "options": [
                    "2/4",
                    "3/4",
                    "4/4",
                    "6/8"
                ],
                "correct": 1,
                "feedback": "There are three crotchet beats per bar."
            },
            {
                "question": "Which term best describes the dynamic level at the start of the piece?",
                "options": [
                    "Piano (soft)",
                    "Forte (loud)",
                    "Crescendo (getting louder)",
                    "Sforzando (sudden accent)"
                ],
                "correct": 1,
                "feedback": "The code indicates `!f!` (forte) at the start. Baroque openings are often declarative and loud."
            },
            {
                "question": "In Baroque music, who would usually play the chords indicated by the bass line?",
                "options": [
                    "The Conductor",
                    "The Harpsichord player (realizing the figured bass)",
                    "The Timpanist",
                    "The Soloist"
                ],
                "correct": 1,
                "feedback": "The harpsichordist reads the single bass line and improvises chords based on the figures [Source 1497]."
            },
            {
                "question": "Look at the rhythm in bars 17\u201318. It feels like one long bar of 3/2 rather than two bars of 3/4. What is this rhythmic device called?",
                "options": [
                    "Syncopation",
                    "Polyrhythm",
                    "Hemiola",
                    "Ostinato"
                ],
                "correct": 2,
                "feedback": "A Hemiola is a rhythmic device where two bars of triple meter are articulated as if they were three bars of duple meter (or one large bar of 3/2), usually at a cadence [Source 1297]."
            },
            {
                "question": "Which of the following is NOT a feature of this extract?",
                "options": [
                    "Imitation",
                    "Minor tonality",
                    "The use of a piano (fortepiano)",
                    "Diatonic harmony"
                ],
                "correct": 2,
                "feedback": "The piano was not a standard Baroque instrument; it replaced the harpsichord in the Classical period [Source 1503]."
            },
            {
                "question": "What is the texture called when all instruments stop playing except for the soloist (not shown here, but common in the genre)?",
                "options": [
                    "Tutti",
                    "Tasto solo / Monophonic",
                    "Homophonic",
                    "Dense"
                ],
                "correct": 1,
                "feedback": "*Tasto solo* is the instruction for the continuo player to stop playing chords and play only the bass line (or for the texture to thin out completely) [Source 1499]."
            }
        ]
    },
    "U5LJL13DQCZ115AR": {
        "info": {
            "title": "Baroque Gigue (Specimen D)",
            "code": "U5LJL13DQCZ115AR",
            "description": ""
        },
        "abc": "X:1\nT:Specimen Extract D (Baroque Gigue)\nC:SchoolClass.Net\nM:6/8\nL:1/8\n%%tempofont Wingdings 1\nQ:\"Presto\" 3/8=120\nK:Em\n%%barnumbers 1\n%%MIDI program 40 % Violin\nV:1 name=\"Violin I\"\n!f! E2 B G2 E | B,2 E G,2 B, | E2 G F2 A | G2 B A2 c |\nB3 !trill!A3 | G2 F E3 | z6 | z6 |\nb2 g a2 f | g2 e f2 ^d | e2 B c2 A | G2 F E3 ||\nV:2 name=\"Violin II\"\n%%MIDI program 40\nz6 | z6 | !f! E2 B G2 E | B,2 E G,2 B, |\nE2 G F2 A | G2 A B3 | e2 B c2 A | B2 G A2 F |\nG3 F3 | E3 B,3 | G,3 A,3 | B,3 E3 ||\nV:3 name=\"Basso Continuo\" clef=bass\n%%MIDI program 42\n!f! E,3 E3 | ^D3 B,3 | E,3 E3 | E,3 z3 |\nG,3 B,3 | E,3 G,3 | C,3 A,,3 | B,,3 B,,3 |\nE,3 B,,3 | E,3 B,,3 | G,3 A,3 | B,3 E,3 ||",
        "questions": [
            {
                "question": "Listen to the opening melody in Violin I (bars 1\u20132). How does the melody in Violin II relate to it when it enters in bars 3\u20134?",
                "options": [
                    "It plays an inverted version.",
                    "It plays in augmentation (slower).",
                    "It imitates the melody (plays the same tune).",
                    "It plays a counter-melody with no relation to the opening."
                ],
                "correct": 2,
                "feedback": "Baroque music frequently uses imitation where one part repeats the material of another [Sources 1954, 1961]."
            },
            {
                "question": "What is the time signature of this extract?",
                "options": [
                    "2/4 (Simple Duple)",
                    "3/4 (Simple Triple)",
                    "6/8 (Compound Duple)",
                    "9/8 (Compound Triple)"
                ],
                "correct": 2,
                "feedback": "The music has a \"skipping\" feel with two main beats per bar, each subdivided into three (triplets/compound time), typical of a Gigue [Source 2809]."
            },
            {
                "question": "Which Italian term best describes the tempo of this music?",
                "options": [
                    "Adagio (Slow)",
                    "Andante (Walking pace)",
                    "Presto / Vivace (Fast and lively)",
                    "Largo (Broad and slow)"
                ],
                "correct": 2,
                "feedback": "Gigues are lively dances. The audio is generated at 120 dotted-crotchets per minute."
            },
            {
                "question": "What is the tonality of the extract?",
                "options": [
                    "E Major",
                    "E Minor",
                    "G Major",
                    "A Minor"
                ],
                "correct": 1,
                "feedback": "The key signature is one sharp, and the D sharps (leading note) confirm E Minor [Source 74]."
            },
            {
                "question": "Which instrument plays the bass line?",
                "options": [
                    "Double Bass (pizzicato)",
                    "Cello (part of the Basso Continuo)",
                    "Tuba",
                    "Bass Guitar"
                ],
                "correct": 1,
                "feedback": "The cello is the standard string bass instrument in the Baroque continuo section [Source 796]."
            },
            {
                "question": "Identify the harmonic device used in the bass line in bars 9\u201310 (alternating between E and B).",
                "options": [
                    "Drone",
                    "Dominant Pedal / Oscillation",
                    "Chromatic scale",
                    "Alberti Bass"
                ],
                "correct": 1,
                "feedback": "The bass alternates between the tonic (E) and dominant (B), reinforcing the V-I relationship [Source 70]."
            },
            {
                "question": "Which ornament is heard in Violin I in bar 5?",
                "options": [
                    "Trill",
                    "Mordent",
                    "Turn",
                    "Glissando"
                ],
                "correct": 0,
                "feedback": "The `!trill!` code creates a rapid alternation of notes [Source 809]."
            },
            {
                "question": "What is the interval between the first two notes of the Violin I part (E to B)?",
                "options": [
                    "Perfect 4th",
                    "Perfect 5th",
                    "Major 3rd",
                    "Octave"
                ],
                "correct": 1,
                "feedback": "E up to B is 7 semitones, a Perfect 5th [Source 2201]."
            },
            {
                "question": "Identify the cadence at the very end of the extract (bars 11\u201312).",
                "options": [
                    "Plagal",
                    "Interrupted",
                    "Imperfect",
                    "Perfect"
                ],
                "correct": 3,
                "feedback": "The bass moves from B (Dominant) to E (Tonic) [Source 74]."
            },
            {
                "question": "Which period of music history does this extract represent?",
                "options": [
                    "Renaissance",
                    "Baroque",
                    "Classical",
                    "Romantic"
                ],
                "correct": 1,
                "feedback": "The combination of compound time, contrapuntal imitation, and harpsichord instrumentation defines the period [Source 167]."
            },
            {
                "question": "This piece is a \"Gigue\" (Jig). Which suite of dances does the Gigue typically belong to in this era?",
                "options": [
                    "The Baroque Suite",
                    "The Symphony",
                    "The Tone Poem",
                    "The String Quartet"
                ],
                "correct": 0,
                "feedback": "The Gigue is the traditional final movement of a Baroque Dance Suite [Source 167]."
            },
            {
                "question": "In the Baroque era, the keyboard player would read the single bass line and improvise chords. What is the notation system for this called?",
                "options": [
                    "Tablature",
                    "Neumes",
                    "Figured Bass",
                    "Graphic Notation"
                ],
                "correct": 2,
                "feedback": "The system of numbers indicating chords above a bass line [Source 797]."
            },
            {
                "question": "What is the texture at the very beginning (bars 1\u20132) before Violin II enters?",
                "options": [
                    "Monophonic (Violin I and Bass only)",
                    "Polyphonic (Full texture)",
                    "Heterophonic",
                    "Homophonic"
                ],
                "correct": 0,
                "feedback": "Technically two lines (Two-part), but visually Violin 1 is the single melody at the start. In a strict listening context without the score, one hears a sparse texture building up. (Note: Strictly speaking, V1 + Bass is two-part counterpoint, but often described as Melody-dominated or simply \"thin\" before the entry of other parts)."
            },
            {
                "question": "Look at Violin I in bar 9 (b-g-a-f). What compositional device is being used to descend in pitch?",
                "options": [
                    "Sequence",
                    "Inversion",
                    "Retrograde",
                    "Augmentation"
                ],
                "correct": 0,
                "feedback": "The pattern repeats at a lower pitch level [Source 73]."
            },
            {
                "question": "What relationship does the key of G Major (relative major) have to the tonic key of this piece (E Minor)?",
                "options": [
                    "Dominant",
                    "Subdominant",
                    "Relative Major",
                    "Tonic Major"
                ],
                "correct": 2,
                "feedback": "G Major is the relative major of E Minor (they share the same key signature) [Source 74]."
            },
            {
                "question": "Which of the following features is characteristic of Baroque music heard in this extract?",
                "options": [
                    "Wide dynamic range with crescendos",
                    "Use of Rubato",
                    "Constant rhythmic drive (Motor Rhythm)",
                    "Use of the clarinet"
                ],
                "correct": 2,
                "feedback": "Baroque allegros typically feature a continuous, driving rhythmic pulse [Source 1819]."
            },
            {
                "question": "If the final chord were changed from E Minor to E Major, what would this device be called?",
                "options": [
                    "Suspension",
                    "Tierce de Picardie",
                    "Hemiola",
                    "Modulation"
                ],
                "correct": 1,
                "feedback": "A major third in the final chord of a minor piece [Source 77]."
            },
            {
                "question": "Which composer is a Focus Composer for this Area of Study?",
                "options": [
                    "Beethoven",
                    "Vivaldi",
                    "Mozart",
                    "Haydn"
                ],
                "correct": 1,
                "feedback": "Vivaldi is a specified Focus Composer for the 2026-2028 syllabus [Source 30]."
            },
            {
                "question": "How many beats per minute (BPM) is the pulse approximately?",
                "options": [
                    "60 (Dotted Crotchet)",
                    "120 (Dotted Crotchet)",
                    "160 (Dotted Crotchet)",
                    "40 (Dotted Crotchet)"
                ],
                "correct": 1,
                "feedback": "The `%%Q` code sets the tempo to 120."
            },
            {
                "question": "What clef is used for the Basso Continuo part?",
                "options": [
                    "Treble",
                    "Alto",
                    "Tenor",
                    "Bass"
                ],
                "correct": 3,
                "feedback": "The F clef (`clef=bass`) is standard for the cello/continuo line [Source 1021]."
            }
        ]
    },
    "0YRKV0HF2FO9HTQV": {
        "info": {
            "title": "Trio Sonata Style (Specimen E)",
            "code": "0YRKV0HF2FO9HTQV",
            "description": ""
        },
        "abc": "X:1\nT:Specimen Extract E (Trio Sonata style)\nC:SchoolClass.Net\nM:3/4\nL:1/8\n%%tempofont Wingdings 1\nQ:1/4=120\nK:Am\n%%barnumbers 1\n%%MIDI program 40 % Violin\nV:1 name=\"Violin I\"\n!f! c2 B2 A2 | e4 c2 | d2 B2 G2 | E4 z2 |\ne2 d2 c2 | a4 f2 | e2 d2 c2 | B4 E2 |\nA2 c2 e2 | f2 d2 B2 | e2 c2 A2 | B4 E2 |\nc2 A2 F2 | d2 B2 G2 | A2 F2 D2 | E6 |\nA,2 C2 E2 | A4 B2 | c4 B2 | A6 ||\nV:2 name=\"Violin II\"\n%%MIDI program 40\nz6 | c2 B2 A2 | B4 G2 | c2 B2 A2 |\nG4 E2 | c2 B2 A2 | B2 E2 ^G2 | A4 G2 |\nc2 A2 E2 | d2 B2 G2 | c2 A2 F2 | ^G4 E2 |\nA2 c2 A2 | B2 d2 B2 | c2 A2 F2 | E4 D2 |\nC2 E2 A2 | F4 D2 | E4 ^G2 | A6 ||\nV:3 name=\"Basso Continuo\" clef=bass\n%%MIDI program 42 % Cello\nA,4 z2 | A,4 G,2 | F,4 E,2 | A,2 G,2 F,2 |\nE,4 C,2 | F,4 D,2 | G,4 A,2 | E,4 E,,2 |\nA,,2 A,2 G,2 | F,2 G,2 G,,2 | A,2 A,,2 C,2 | E,2 D,2 C,2 |\nA,4 F,2 | G,4 E,2 | F,4 D,2 | ^G,4 ^G,,2 |\nA,,4 C,2 | D,4 F,2 | E,4 E,,2 | A,,6 ||",
        "questions": [
            {
                "question": "Listen to the recording. What is the approximate speed (BPM) of this music?",
                "options": [
                    "60 BPM (Adagio)",
                    "90 BPM (Andante)",
                    "120 BPM (Allegro)",
                    "160 BPM (Presto)"
                ],
                "correct": 2,
                "feedback": "The `%%Q` code sets the tempo to 120 beats per minute."
            },
            {
                "question": "Which Italian term best describes the tempo of this extract?",
                "options": [
                    "Largo",
                    "Andante",
                    "Allegro",
                    "Grave"
                ],
                "correct": 2,
                "feedback": "120 BPM corresponds to Allegro (Fast/Lively)."
            },
            {
                "question": "Which period of music is this extract from?",
                "options": [
                    "Renaissance",
                    "Baroque",
                    "Classical",
                    "Romantic"
                ],
                "correct": 1,
                "feedback": "The contrapuntal texture, use of continuo, and sequential melody are defining features of the period (1600\u20131750) [Sources: Syllabus, 1105]."
            },
            {
                "question": "The texture of this piece features two independent melody lines above a bass line. What is this specific Baroque texture called?",
                "options": [
                    "Trio Sonata texture",
                    "Monophony",
                    "Heterophony",
                    "Unison"
                ],
                "correct": 0,
                "feedback": "A texture consisting of two melody parts and a basso continuo is the definition of the Trio Sonata texture [Source: 1105]."
            },
            {
                "question": "Which instruments are playing the upper two melody lines?",
                "options": [
                    "Flute and Oboe",
                    "Two Violins",
                    "Trumpet and Horn",
                    "Violin and Viola"
                ],
                "correct": 1,
                "feedback": "The score labels them Violin I and Violin II, and the range fits these instruments perfectly."
            },
            {
                "question": "Which instrument is playing the bass line?",
                "options": [
                    "Double Bass",
                    "Cello",
                    "Bassoon",
                    "Tuba"
                ],
                "correct": 1,
                "feedback": "The cello is the standard string bass instrument for the Baroque continuo [Source: 1262]."
            },
            {
                "question": "In a full Baroque performance, which instrument would play chords based on the bass line (realising the figured bass)?",
                "options": [
                    "Piano",
                    "Harp",
                    "Harpsichord or Organ",
                    "Synthesizer"
                ],
                "correct": 2,
                "feedback": "The keyboard player in the continuo group provides the chordal filling [Source: 1262]."
            },
            {
                "question": "Look at bars 13\u201315. The melody in Violin I moves down by step in each bar (C-A-F -> d-B-G -> A-F-D). What is this compositional device called?",
                "options": [
                    "Ascending Sequence",
                    "Descending Sequence",
                    "Pedal Note",
                    "Inversion"
                ],
                "correct": 1,
                "feedback": "The melodic pattern repeats at a progressively lower pitch level [Source: 1262]."
            },
            {
                "question": "Listen to the relationship between Violin I and Violin II in bars 1\u20133. How do they relate?",
                "options": [
                    "They play in unison.",
                    "They play in contrary motion.",
                    "Violin II imitates Violin I (Imitation).",
                    "Violin II plays a drone."
                ],
                "correct": 2,
                "feedback": "Violin I starts the theme, and Violin II enters later with similar material [Source: 1128]."
            },
            {
                "question": "What is the time signature of this extract?",
                "options": [
                    "2/4",
                    "3/4",
                    "4/4",
                    "6/8"
                ],
                "correct": 1,
                "feedback": "There are three crotchet beats per bar."
            },
            {
                "question": "What is the tonality of the piece?",
                "options": [
                    "A Major",
                    "A Minor",
                    "C Major",
                    "G Major"
                ],
                "correct": 1,
                "feedback": "The key signature is blank (C Major/A Minor), but the frequent G#s (leading note) indicate A Minor."
            },
            {
                "question": "In bar 16, the harmony pauses on an E major chord (the Dominant). What type of cadence does this imply before the final phrase?",
                "options": [
                    "Perfect (V\u2013I)",
                    "Plagal (IV\u2013I)",
                    "Imperfect (ending on V)",
                    "Interrupted (V\u2013VI)"
                ],
                "correct": 2,
                "feedback": "A phrase ending on the Dominant chord creates an unfinished, \"comma\" effect [Source: 1169]."
            },
            {
                "question": "At the very end (bars 19\u201320), what cadence brings the piece to a close?",
                "options": [
                    "Perfect (V\u2013I)",
                    "Plagal (IV\u2013I)",
                    "Imperfect (I\u2013V)",
                    "Interrupted (V\u2013VI)"
                ],
                "correct": 0,
                "feedback": "The progression E (Dominant) to A (Tonic) provides a conclusive finish [Source: 1169]."
            },
            {
                "question": "If the final chord (bar 20) contained a C# instead of a C natural (making it A Major), what would this device be called?",
                "options": [
                    "Suspension",
                    "Tierce de Picardie",
                    "Modulation",
                    "Drone"
                ],
                "correct": 1,
                "feedback": "Ending a minor piece with a major chord is a Tierce de Picardie [Source: 1266]."
            },
            {
                "question": "Which of the following is a characteristic feature of Baroque melody heard in this extract?",
                "options": [
                    "Wide leaps and disjunct motion",
                    "Use of the whole-tone scale",
                    "Frequent use of sequences and diatonic movement",
                    "Extreme chromaticism"
                ],
                "correct": 2,
                "feedback": "Sequence is a primary melodic device in Baroque music [Source: 1266]."
            },
            {
                "question": "Which of the following composers is a 'Focus Composer' for Area of Study 1 in the 2026 syllabus?",
                "options": [
                    "Mozart",
                    "Handel",
                    "Beethoven",
                    "Schubert"
                ],
                "correct": 1,
                "feedback": "Handel (and Vivaldi) are the Focus Composers for AOS1 [Source: 1106]."
            },
            {
                "question": "What implies that this music is NOT from the Classical period?",
                "options": [
                    "The use of a Basso Continuo texture.",
                    "The use of violins.",
                    "The use of a 3/4 time signature.",
                    "The use of a melody."
                ],
                "correct": 0,
                "feedback": "The Basso Continuo fell out of use in the Classical period; its presence confirms Baroque [Source: 1109]."
            },
            {
                "question": "Look at the bass line in bars 4\u20135. It moves E -> A (down a 5th / up a 4th). This root movement is characteristic of:",
                "options": [
                    "Functional Harmony (Circle of Fifths progression style)",
                    "Modal Harmony",
                    "Atonal Harmony",
                    "Pentatonic Harmony"
                ],
                "correct": 0,
                "feedback": "Baroque harmony is driven by root movements of 4ths and 5ths [Source: 1266]."
            },
            {
                "question": "What clef is used for the Cello/Continuo part?",
                "options": [
                    "Treble",
                    "Alto",
                    "Tenor",
                    "Bass"
                ],
                "correct": 3,
                "feedback": "The F clef is standard for the cello/continuo line."
            },
            {
                "question": "The volume in Baroque music often stays consistent for a period and then changes suddenly. What is this concept called?",
                "options": [
                    "Crescendo",
                    "Terraced Dynamics",
                    "Fade out",
                    "Sforzando"
                ],
                "correct": 1,
                "feedback": "Abrupt volume changes are characteristic of Baroque performance practice [Source: 1105]."
            }
        ]
    },
    "GX2YBCKDHOFSYMAT": {
        "info": {
            "title": "Baroque Minuet (Specimen F)",
            "code": "GX2YBCKDHOFSYMAT",
            "description": ""
        },
        "abc": "X:1\nT:Specimen Extract F (Baroque Minuet)\nC:SchoolClass.Net\nM:3/4\nL:1/8\n%%tempofont Wingdings 1\nQ:\"Allegretto\" 1/4=120\nK:D\n%%barnumbers 1\n%%MIDI program 40 % Violin\nV:1 name=\"Violin\"\n!f! d2 (3(def) e2 | d4 A2 | B2 G2 E2 | A4 G2 |\nF2 A2 d2 | g2 f2 e2 | d2 e2 !trill!c2 | d6 :|\n!p! a2 f2 d2 | g4 f2 | e2 d2 c2 | B4 A2 |\n^G2 B2 E2 | c2 B2 A2 | B2 e2 ^g2 | a6 |\n!f! A2 c2 e2 | g4 f2 | (3(gfe) d2 c2 | B4 g2 |\n(3(fed) c2 B2 | A2 G2 F2 | E2 A2 C2 | D6 ||\nV:2 name=\"Cello (Continuo)\" clef=bass\n%%MIDI program 42\n!f! D,4 A,,2 | F,4 D,2 | G,4 G,,2 | A,,4 A,2 |\nD,2 C,2 B,,2 | E,4 G,2 | A,4 A,,2 | D,6 :|\n!p! F,4 A,2 | B,4 A,2 | G,2 F,2 E,2 | D,4 C,2 |\nB,,4 E,2 | A,,4 C,2 | D,2 E,2 E,,2 | A,,6 |\n!f! A,,4 C,2 | E,4 D,2 | E,4 F,2 | G,4 E,2 |\nF,4 G,2 | A,2 B,2 A,2 | G,2 F,2 A,2 | D,6 ||",
        "questions": [
            {
                "question": "What is the time signature of this extract?",
                "options": [
                    "2/4",
                    "3/4",
                    "4/4",
                    "6/8"
                ],
                "correct": 1,
                "feedback": "The code `M:3/4` sets the meter; Minuets are always in triple time."
            },
            {
                "question": "Which specific dance type does this extract represent?",
                "options": [
                    "Gigue",
                    "Sarabande",
                    "Minuet",
                    "Gavotte"
                ],
                "correct": 2,
                "feedback": "A stately dance in 3/4 time is the definition of a Minuet (often found in Baroque suites and Classical symphonies) [Source 1024]."
            },
            {
                "question": "What is the structure of the first 8 bars (the first section)?",
                "options": [
                    "Ternary Form",
                    "Through-composed",
                    "Binary Form (Part A)",
                    "Rondo Form"
                ],
                "correct": 2,
                "feedback": "The repeat marks (`:|`) at bar 8 indicate the end of the first section (A) of a Binary form structure (AABB) [Source 1006]."
            },
            {
                "question": "Identify the cadence at bar 8.",
                "options": [
                    "Perfect (V\u2013I)",
                    "Imperfect (I\u2013V)",
                    "Plagal (IV\u2013I)",
                    "Interrupted (V\u2013VI)"
                ],
                "correct": 0,
                "feedback": "The bass moves A (Dominant) to D (Tonic) in bars 7-8, closing the section in the tonic key [Source 74]."
            },
            {
                "question": "Which ornament is heard in the violin part in bar 7?",
                "options": [
                    "Turn",
                    "Mordent",
                    "Acciaccatura",
                    "Trill"
                ],
                "correct": 3,
                "feedback": "The `!trill!` notation indicates a rapid alternation of notes [Source 809]."
            },
            {
                "question": "In bars 9\u201312, the dynamic changes to *piano*. Which key has the music modulated to at the start of this section (Bar 9)?",
                "options": [
                    "G Major (Subdominant)",
                    "A Major (Dominant) \u2013 *hint: look at the C sharps in the B section in general, though bar 9 starts on A chord*.",
                    "B Minor (Relative Minor)",
                    "D Minor (Tonic Minor)"
                ],
                "correct": 1,
                "feedback": "Binary forms typically modulate to the Dominant (A Major) by the end of the A section or start the B section in the dominant. The G#s later confirm this area [Source 1006]."
            },
            {
                "question": "Look at bar 1 (Violin). What rhythmic device is used on beat 2?",
                "options": [
                    "Dotted rhythm",
                    "Triplet",
                    "Syncopation",
                    "Scotch Snap"
                ],
                "correct": 1,
                "feedback": "The code `(3(def)` denotes a triplet group on the second beat."
            },
            {
                "question": "Which instrument plays the bass line?",
                "options": [
                    "Double Bass (pizzicato)",
                    "Cello (Basso Continuo)",
                    "Bassoon only",
                    "Tuba"
                ],
                "correct": 1,
                "feedback": "The cello is the standard bass instrument of the string family in this era [Source 796]."
            },
            {
                "question": "What is the texture of this extract?",
                "options": [
                    "Monophonic",
                    "Polyphonic / Contrapuntal",
                    "Homophonic (Melody and Accompaniment)",
                    "Heterophonic"
                ],
                "correct": 2,
                "feedback": "There is a distinct melody in the violin supported by a bass line that outlines the harmony [Source 2002]."
            },
            {
                "question": "In the B section (starting bar 9), the music moves through several keys. Identify the cadence in bar 16.",
                "options": [
                    "Perfect Cadence in A Major",
                    "Perfect Cadence in D Major",
                    "Imperfect Cadence in E Major",
                    "Plagal Cadence in A Major"
                ],
                "correct": 0,
                "feedback": "The phrase ends on an A major chord, preceded by its dominant (E major), establishing the new key centre before returning to D."
            },
            {
                "question": "Look at bars 20\u201322. The rhythm of the melody (and the harmonic change) feels like it shifts from \"1-2-3, 1-2-3\" to \"1-2, 1-2, 1-2\" (creating a feeling of 3/2 time across two bars). What is this Baroque device called?",
                "options": [
                    "Hemiola",
                    "Ostinato",
                    "Syncopation",
                    "Anacrusis"
                ],
                "correct": 0,
                "feedback": "A Hemiola occurs when two bars of 3/4 are articulated as if they were three bars of 2/4 (or one bar of 3/2), often used at cadences in Baroque music [Source 1297]."
            },
            {
                "question": "Which period of music history is this from?",
                "options": [
                    "Renaissance",
                    "Baroque",
                    "Classical",
                    "Romantic"
                ],
                "correct": 1,
                "feedback": "The use of continuo, terraced dynamics, and binary dance form defines the Baroque period (1600-1750) [Source 1262]."
            },
            {
                "question": "If this were a full performance, which instrument would likely fill in the harmonies above the cello part?",
                "options": [
                    "Piano",
                    "Organ",
                    "Harpsichord",
                    "Harp"
                ],
                "correct": 2,
                "feedback": "The harpsichord realizes the figured bass in the Baroque era [Source 797]."
            },
            {
                "question": "What relationship exists between the opening key (D Major) and the key at bar 16 (A Major)?",
                "options": [
                    "Relative Minor",
                    "Dominant",
                    "Subdominant",
                    "Tonic Minor"
                ],
                "correct": 1,
                "feedback": "A Major is the 5th degree (Dominant) of D Major [Source 74]."
            },
            {
                "question": "In bar 15, the Violin plays a G# leading to an A. This accidental suggests a momentary modulation to:",
                "options": [
                    "E Major",
                    "A Major",
                    "B Minor",
                    "F# Minor"
                ],
                "correct": 1,
                "feedback": "The G# acts as the leading note (sharpened 7th) of A Major."
            },
            {
                "question": "Which of the following composers is a 'Focus Composer' for Area of Study 1 in the 2026 syllabus?",
                "options": [
                    "Mozart",
                    "Vivaldi",
                    "Beethoven",
                    "Schubert"
                ],
                "correct": 1,
                "feedback": "Vivaldi is a specified Focus Composer for AoS1 [Source 30]."
            },
            {
                "question": "What implies that this piece is likely a Minuet?",
                "options": [
                    "It is in 3/4 time and has a moderate, stately tempo.",
                    "It is in 4/4 time and is fast.",
                    "It uses a drone.",
                    "It is in 6/8 compound time."
                ],
                "correct": 0,
                "feedback": "These are the defining characteristics of the Minuet [Source 1024]."
            },
            {
                "question": "Look at the bass line in bars 1-4. It moves mostly by:",
                "options": [
                    "Chromatic steps",
                    "Leaps (disjunct motion)",
                    "Glissando",
                    "Drone"
                ],
                "correct": 1,
                "feedback": "The bass moves D -> A -> F -> D (large intervals), providing a harmonic foundation rather than a scalic melody."
            },
            {
                "question": "The sudden change from *piano* (bar 16) back to *forte* (bar 17) is an example of:",
                "options": [
                    "Crescendo",
                    "Terraced Dynamics",
                    "Diminuendo",
                    "Sforzando"
                ],
                "correct": 1,
                "feedback": "Stepped changes in volume (p to f) without gradation are stylistic of the Baroque [Source 1105]."
            },
            {
                "question": "What is the interval between the first two notes of the Violin part in bar 17 (A to C#)?",
                "options": [
                    "Minor 3rd",
                    "Major 3rd",
                    "Perfect 4th",
                    "Perfect 5th"
                ],
                "correct": 1,
                "feedback": "A to C# is 4 semitones, a Major 3rd."
            }
        ]
    },
    "AOS01_57531122": {
        "info": {
            "title": "AOS 1: Baroque Music Listening Quiz",
            "code": "AOS01_57531122",
            "description": "A comprehensive 20-question MCQ test on AOS 1: Baroque Music."
        },
        "abc": "X:1\nT:AOS 1: Baroque Music [AOS01_57531122]\nC:SchoolClass.Net\nM:4/4\nL:1/16\nK:D\n%%barnumbers 1\n%%tempofont Wingdings 1\nQ:\"Allegro\" 1/4=112\nV:1 name=\"Violino\" clef=treble\n%%MIDI program 40\nV:2 name=\"Continuo\" clef=bass\n%%MIDI program 6\nV:1\n!f! D4 F4 A4 d4 | f2ed c2Bc d4 A4 | B2cd G2B2 A2Bc F2A2 | G2FE E4 D8 |\na2ga f2a2 d'2c'b a2g2 | f2ef d2f2 b2ag f2e2 | d2B2 e2c2 f2d2 g2e2 | a4 A4 d8 |\n!p! a4 f2d2 a2f2 d2ef | g4 e2c2 g2e2 c2de | f2ed c2B2 ^A2Bc d2B2 | e2dc B2A2 ^G2AB c2A2 |\n!f! D4 F2G2 A4 d4 | f2ed c2Bc d4 A4 | B2cd G2B2 A2Bc F2A2 | G2FE E2G2 F4 E4 |\nD4 d4 A4 F4 | G2B2 E2G2 F2A2 D2F2 | E2A2 c2A2 !trill!e4 d4 | (3fed (3edc d4 D8 |]\nV:2\nD,4 D,4 D,4 D,4 | D,4 A,,4 D,4 F,4 | G,4 G,4 F,4 F,4 | A,4 A,,4 D,8 |\nF,4 F,4 F,4 F,4 | D,4 D,4 D,4 D,4 | G,4 A,4 B,4 C4 | D,4 A,,4 D,8 |\nD,4 D,4 D,4 D,4 | A,,4 A,,4 A,,4 A,,4 | B,,4 B,,4 B,,4 B,,4 | E,4 E,4 A,8 |\nD,4 D,4 D,4 D,4 | D,4 A,,4 D,4 F,4 | G,4 G,4 F,4 F,4 | E,4 G,4 A,4 A,,4 |\nD,4 F,4 A,4 D4 | G,4 E,4 F,4 D,4 | A,4 A,,4 A,4 A,,4 | D,4 A,,4 D,8 |]",
        "questions": [
            {
                "question": "What is the Italian tempo marking indicated at the start of the score?",
                "options": [
                    "Andante",
                    "Adagio",
                    "Allegro",
                    "Presto"
                ],
                "correct": 2,
                "feedback": "The score header explicitly states `Q:\"Allegro\"`, which is the Italian term for a fast, lively tempo."
            },
            {
                "question": "Which Beats Per Minute (BPM) setting corresponds to the tempo of this piece?",
                "options": [
                    "60 BPM",
                    "90 BPM",
                    "112 BPM",
                    "140 BPM"
                ],
                "correct": 2,
                "feedback": "The score header explicitly states `1/4=112`, indicating 112 beats per minute."
            },
            {
                "question": "What is the tonality of the piece at the beginning (Bars 1\u20134)?",
                "options": [
                    "D Major",
                    "B Minor",
                    "G Major",
                    "A Major"
                ],
                "correct": 0,
                "feedback": "The key signature has two sharps (F#, C#) and the piece begins and ends on the tonic D chord."
            },
            {
                "question": "Which term best describes the melodic movement in the Violin part in Bar 1 (D-F-A-d)?",
                "options": [
                    "Scalic",
                    "Arpeggio",
                    "Chromatic",
                    "Stepwise"
                ],
                "correct": 1,
                "feedback": "The notes D, F, A, d form a broken chord (triad) played in succession, which is the definition of an arpeggio."
            },
            {
                "question": "In Bars 5 and 6, the melody repeats a pattern at a lower pitch. What is this device called?",
                "options": [
                    "Ostinato",
                    "Imitation",
                    "Pedal note",
                    "Sequence"
                ],
                "correct": 3,
                "feedback": "A sequence is the immediate repetition of a melodic idea at a different pitch level. Bar 6 repeats the shape of Bar 5 one step lower."
            },
            {
                "question": "At Bar 9, the dynamic changes suddenly from *forte* to *piano*. What is this Baroque technique called?",
                "options": [
                    "Crescendo",
                    "Terraced dynamics",
                    "Sforzando",
                    "Diminuendo"
                ],
                "correct": 1,
                "feedback": "Baroque music typically features abrupt shifts in volume (block dynamics) rather than gradual crescendos or diminuendos."
            },
            {
                "question": "Identify the harmonic device used in Bar 11 with the introduction of the A sharp (^A).",
                "options": [
                    "Modulation",
                    "Suspension",
                    "Tierce de Picardie",
                    "Pedal note"
                ],
                "correct": 0,
                "feedback": "The introduction of the accidental A# (the leading note of B minor) indicates a shift in tonality away from the home key, known as modulation."
            },
            {
                "question": "Which instrument would most likely play the bottom stave (Voice 2) along with a cello?",
                "options": [
                    "Trumpet",
                    "Timpani",
                    "Harpsichord",
                    "Oboe"
                ],
                "correct": 2,
                "feedback": "The harpsichord is the quintessential keyboard instrument of the Baroque era, used to fill in harmonies (continuo) alongside a bass instrument like the cello."
            },
            {
                "question": "The accompaniment style provided by Voice 2 throughout the piece is known as:",
                "options": [
                    "Ground bass",
                    "Alberti bass",
                    "Basso continuo",
                    "Walking bass"
                ],
                "correct": 2,
                "feedback": "This is the continuous bass line that provides the harmonic framework in Baroque music, read by the keyboard and bass string player."
            },
            {
                "question": "What specific ornament is marked and played in Bar 19?",
                "options": [
                    "Mordent",
                    "Turn",
                    "Acciaccatura",
                    "Trill"
                ],
                "correct": 3,
                "feedback": "The notation `!trill!` indicates a rapid alternation between the notated note and the note above it."
            },
            {
                "question": "Which rhythmic feature is heard in the Violin part in Bar 20?",
                "options": [
                    "Syncopation",
                    "Triplets",
                    "Hemiola",
                    "Dotted rhythms"
                ],
                "correct": 1,
                "feedback": "The notation `(3fed` indicates three notes played in the time of two, which is a triplet."
            },
            {
                "question": "Based on the structure, what form does this movement suggest, particularly with the return of the opening theme at Bar 13?",
                "options": [
                    "Binary Form",
                    "Theme and Variations",
                    "Ritornello Form",
                    "Fugue"
                ],
                "correct": 2,
                "feedback": "The return of the main theme (the Ritornello) at Bar 13 after contrasting episodes is characteristic of Baroque Ritornello form."
            },
            {
                "question": "In Bar 4, the phrase ends with a V\u2013I chord progression. What type of cadence is this?",
                "options": [
                    "Plagal",
                    "Imperfect",
                    "Interrupted",
                    "Perfect"
                ],
                "correct": 3,
                "feedback": "The chords move from A (Dominant/V) to D (Tonic/I), which creates a sense of completion known as a Perfect Cadence."
            },
            {
                "question": "Which term best describes the texture of this piece (Melody with accompaniment)?",
                "options": [
                    "Monophonic",
                    "Homophonic",
                    "Polyphonic",
                    "Heterophonic"
                ],
                "correct": 1,
                "feedback": "The texture consists of a clear melody line (Violin) supported by a chordal accompaniment (Continuo), defined as homophony (or melody-dominated homophony)."
            },
            {
                "question": "In Bar 7, the bass line moves upwards in steady steps. What is the term for this bass movement?",
                "options": [
                    "Static bass",
                    "Drone",
                    "Walking bass",
                    "Ground bass"
                ],
                "correct": 2,
                "feedback": "The bass line in Bar 7 moves in steady, equal note values (crotchets) up the scale, mimicking a walking motion."
            },
            {
                "question": "In a Concerto Grosso, what is the name given to the small group of soloists?",
                "options": [
                    "Ripieno",
                    "Concertino",
                    "Tutti",
                    "Continuo"
                ],
                "correct": 1,
                "feedback": "In a Concerto Grosso, the small group of soloists is called the *Concertino*, while the larger accompanying orchestra is the *Ripieno*."
            },
            {
                "question": "Which of the following composers is NOT associated with the Baroque period?",
                "options": [
                    "J.S. Bach",
                    "A. Vivaldi",
                    "G.F. Handel",
                    "W.A. Mozart"
                ],
                "correct": 3,
                "feedback": "Mozart is a Classical era composer. Bach, Vivaldi, and Handel are the three main pillars of the Baroque era."
            },
            {
                "question": "What is a \"Tierce de Picardie\"?",
                "options": [
                    "A major chord at the end of a minor piece",
                    "A sudden modulation to the dominant",
                    "A type of French dance suite",
                    "An ornament used in vocal music"
                ],
                "correct": 0,
                "feedback": "A Tierce de Picardie (Picardy Third) is a harmonic device where a piece in a minor key ends with a major tonic chord."
            },
            {
                "question": "Which texture is most characteristic of a Fugue?",
                "options": [
                    "Homophonic",
                    "Monophonic",
                    "Contrapuntal",
                    "Chordal"
                ],
                "correct": 2,
                "feedback": "A Fugue is based on polyphonic texture where independent melodic lines weave together, known as counterpoint (contrapuntal texture)."
            },
            {
                "question": "What is the primary function of the Harpsichord player in a Baroque ensemble?",
                "options": [
                    "To conduct the orchestra",
                    "To play the melody line only",
                    "To realize the figured bass (fill in harmonies)",
                    "To provide percussion effects"
                ],
                "correct": 2,
                "feedback": "The harpsichordist reads the single bass note and improvises (realizes) the chords above it based on numerical figures (figured bass)."
            }
        ]
    }
};
