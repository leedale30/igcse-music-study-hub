
import { Quiz } from '../../types';

export const balletQuiz: Quiz = {
    title: 'Ballet Music Quiz',
    questions: [
        {
            id: 'bq1',
            text: 'When did ballet originate?',
            options: [
                { id: 'bq1a1', text: 'In ancient Greece' },
                { id: 'bq1a2', text: 'In the Italian Renaissance courts (15th century)' },
                { id: 'bq1a3', text: 'In 19th-century Russia' },
                { id: 'bq1a4', text: 'In 20th-century New York' },
            ],
            correctAnswerId: 'bq1a2',
            explanation: 'Ballet has its roots in the Italian Renaissance courts, later flourishing in France and Russia.'
        },
        {
            id: 'bq2',
            text: 'Who composed "The Nutcracker", "Swan Lake", and "Sleeping Beauty"?',
            options: [
                { id: 'bq2a1', text: 'Igor Stravinsky' },
                { id: 'bq2a2', text: 'Pyotr Ilyich Tchaikovsky' },
                { id: 'bq2a3', text: 'Aaron Copland' },
                { id: 'bq2a4', text: 'Claude Debussy' },
            ],
            correctAnswerId: 'bq2a2',
            explanation: 'Tchaikovsky is the giant of 19th-century Classical Ballet music.'
        },
        {
            id: 'bq3',
            text: 'What is a "Pas de Deux"?',
            options: [
                { id: 'bq3a1', text: 'A dance for one person' },
                { id: 'bq3a2', text: 'A dance for two people (usually the principal male and female dancers)' },
                { id: 'bq3a3', text: 'A group dance' },
                { id: 'bq3a4', text: 'The end of the ballet' },
            ],
            correctAnswerId: 'bq3a2',
            explanation: 'Pas de Deux ("step of two") is a central feature of classical ballet, showcasing the lead couple.'
        },
        {
            id: 'bq4',
            text: 'What musical element is most important for dancers?',
            options: [
                { id: 'bq4a1', text: 'Harmony' },
                { id: 'bq4a2', text: 'Strong, clear Rhythm' },
                { id: 'bq4a3', text: 'Loud volume' },
                { id: 'bq4a4', text: 'Complex lyrics' },
            ],
            correctAnswerId: 'bq4a2',
            explanation: 'Dancers rely on a steady and clear rhythm to synchronize their movements.'
        },
        {
            id: 'bq5',
            text: 'Igor Stravinsky\'s "The Rite of Spring" is famous for...',
            options: [
                { id: 'bq5a1', text: 'Its gentle melodies' },
                { id: 'bq5a2', text: 'Its complex rhythms, dissonant chords, and causing a riot at its premiere' },
                { id: 'bq5a3', text: 'Using electronic instruments' },
                { id: 'bq5a4', text: 'Being a romantic love story' },
            ],
            correctAnswerId: 'bq5a2',
            explanation: 'The Rite of Spring revolutionized music with its primal rhythms and aggressive dissonance.'
        },
        {
            id: 'bq6',
            text: 'Which American composer wrote "Rodeo" and "Appalachian Spring"?',
            options: [
                { id: 'bq6a1', text: 'Leonard Bernstein' },
                { id: 'bq6a2', text: 'Aaron Copland' },
                { id: 'bq6a3', text: 'George Gershwin' },
                { id: 'bq6a4', text: 'John Williams' },
            ],
            correctAnswerId: 'bq6a2',
            explanation: 'Aaron Copland created a distinctly "American" sound often used in ballets about the frontier.'
        },
        {
            id: 'bq7',
            text: 'What is a "Waltz" in ballet?',
            options: [
                { id: 'bq7a1', text: 'A march in 4/4' },
                { id: 'bq7a2', text: 'A dance in 3/4 time' },
                { id: 'bq7a3', text: 'A fast sprint' },
                { id: 'bq7a4', text: 'A slow adagio' },
            ],
            correctAnswerId: 'bq7a2',
            explanation: 'The Waltz (3/4 time) is a staple of romantic ballets, often used for graceful group dances.'
        },
        {
            id: 'bq8',
            text: 'What is "Choreography"?',
            options: [
                { id: 'bq8a1', text: 'Writing the music' },
                { id: 'bq8a2', text: 'The art of designing sequences of movements' },
                { id: 'bq8a3', text: 'Designing the costumes' },
                { id: 'bq8a4', text: 'Playing the piano' },
            ],
            correctAnswerId: 'bq8a2',
            explanation: 'Choreography determines how the dancers move to the music.'
        },
        {
            id: 'bq9',
            text: 'Which instrument often plays the "Celesta" in Tchaikovsky\'s "Nutcracker"?',
            options: [
                { id: 'bq9a1', text: 'Dance of the Sugar Plum Fairy' },
                { id: 'bq9a2', text: 'Waltz of the Flowers' },
                { id: 'bq9a3', text: 'March' },
                { id: 'bq9a4', text: 'Trepak' },
            ],
            correctAnswerId: 'bq9a1',
            explanation: 'Tchaikovsky famously used the newly-invented Celesta for the magical sound of the Sugar Plum Fairy.'
        },
        {
            id: 'bq10',
            text: 'Stravinsky\'s "Petrushka" features a famous chord (the Petrushka chord) that is...',
            options: [
                { id: 'bq10a1', text: 'Consonant and major' },
                { id: 'bq10a2', text: 'Polytonal (C major + F# major)' },
                { id: 'bq10a3', text: 'Minor and sad' },
                { id: 'bq10a4', text: 'Pentatonic' },
            ],
            correctAnswerId: 'bq10a2',
            explanation: 'The clash of two distant keys (C and F#) represents the puppet Petrushka\'s dual nature.'
        },
        {
            id: 'bq11',
            text: 'What is "Mickey-Mousing" (a term also used in film)?',
            options: [
                { id: 'bq11a1', text: 'Playing very quietly' },
                { id: 'bq11a2', text: 'Synced music that mimics physical actions exactly' },
                { id: 'bq11a3', text: 'Using cartoon sounds' },
                { id: 'bq11a4', text: 'Singing in a high voice' },
            ],
            correctAnswerId: 'bq11a2',
            explanation: 'In ballet, music often mimics the physical gestures (e.g., staccato notes for tiptoeing).'
        },
        {
            id: 'bq12',
            text: 'The "Finale" of a ballet is usually...',
            options: [
                { id: 'bq12a1', text: 'Quiet and slow' },
                { id: 'bq12a2', text: 'A grand, energetic conclusion involving the full cast' },
                { id: 'bq12a3', text: 'A solo dance' },
                { id: 'bq12a4', text: 'Spoken word' },
            ],
            correctAnswerId: 'bq12a2',
            explanation: 'Ballets typically end with a spectacular ensemble finale (Apotheosis).'
        },
        {
            id: 'bq13',
            text: 'Which of these is NOT a Tchaikovsky ballet?',
            options: [
                { id: 'bq13a1', text: 'Swan Lake' },
                { id: 'bq13a2', text: 'The Firebird' },
                { id: 'bq13a3', text: 'The Nutcracker' },
                { id: 'bq13a4', text: 'Sleeping Beauty' },
            ],
            correctAnswerId: 'bq13a2',
            explanation: 'The Firebird was composed by Igor Stravinsky.'
        },
        {
            id: 'bq14',
            text: 'Copland\'s "Rodeo" incorporates traditional tunes from which genre?',
            options: [
                { id: 'bq14a1', text: 'Chinese folk music' },
                { id: 'bq14a2', text: 'American Cowboy/Folk songs' },
                { id: 'bq14a3', text: 'Jazz' },
                { id: 'bq14a4', text: 'Opera' },
            ],
            correctAnswerId: 'bq14a2',
            explanation: 'Copland used songs like "Bonaparte\'s Retreat" to evoke the American West.'
        },
        {
            id: 'bq15',
            text: 'What is a "Divertissement"?',
            options: [
                { id: 'bq15a1', text: 'A dramatic scene' },
                { id: 'bq15a2', text: 'A set of dances that display the dancers\' skills but do not advance the plot' },
                { id: 'bq15a3', text: 'The intermission' },
                { id: 'bq15a4', text: 'The tuning of the orchestra' },
            ],
            correctAnswerId: 'bq15a2',
            explanation: 'Divertissements (like the sweets in Nutcracker) are "diversions" for pure entertainment.'
        },
        {
            id: 'bq16',
            text: 'What rhythm is characteristic of a "Polonaise"?',
            options: [
                { id: 'bq16a1', text: 'Fast 2/4' },
                { id: 'bq16a2', text: 'Stately 3/4 (Polish processional dance)' },
                { id: 'bq16a3', text: 'Slow 4/4' },
                { id: 'bq16a4', text: 'Irregular 5/8' },
            ],
            correctAnswerId: 'bq16a2',
            explanation: 'The Polonaise is a proud, stately Polish dance in triple meter often used in court scenes.'
        },
        {
            id: 'bq17',
            text: 'What defines "Modern Ballet"?',
            options: [
                { id: 'bq17a1', text: 'It always uses tutus' },
                { id: 'bq17a2', text: 'It breaks away from rigid classical restrictions and explores more natural or abstract movement' },
                { id: 'bq17a3', text: 'It has no music' },
                { id: 'bq17a4', text: 'It is only performed on ice' },
            ],
            correctAnswerId: 'bq17a2',
            explanation: 'Modern ballet moved away from fairytales and formal technique towards expressionism.'
        },
        {
            id: 'bq18',
            text: 'In Stravinsky\'s "The Firebird", the magical bird is represented by...',
            options: [
                { id: 'bq18a1', text: 'Drums' },
                { id: 'bq18a2', text: 'Chromatic scales and trills (often woodwinds/strings)' },
                { id: 'bq18a3', text: 'Heavy brass' },
                { id: 'bq18a4', text: 'Silence' },
            ],
            correctAnswerId: 'bq18a2',
            explanation: 'Stravinsky used chromaticism to represent magical characters and diatonic folk melodies for humans.'
        },
        {
            id: 'bq19',
            text: 'What orchestra section is typically dominant in Romantic ballet?',
            options: [
                { id: 'bq19a1', text: 'Percussion' },
                { id: 'bq19a2', text: 'Strings' },
                { id: 'bq19a3', text: 'Synthesizer' },
                { id: 'bq19a4', text: 'Brass' },
            ],
            correctAnswerId: 'bq19a2',
            explanation: 'Lush string sections provide the emotional sweep and melody required for Romantic ballet.'
        },
        {
            id: 'bq20',
            text: 'What is an "Adagio" in ballet terms?',
            options: [
                { id: 'bq20a1', text: 'A fast jump' },
                { id: 'bq20a2', text: 'A slow, controlled movement or section' },
                { id: 'bq20a3', text: 'The end' },
                { id: 'bq20a4', text: 'A type of shoe' },
            ],
            correctAnswerId: 'bq20a2',
            explanation: 'Adagio movements showcase the dancer\'s balance, strength, and line.'
        }
    ]
};

export const filmMusicQuiz: Quiz = {
    title: 'Film Music Concepts Quiz',
    questions: [
        {
            id: 'fq1',
            text: 'What is a "Leitmotif" in film music?',
            options: [
                { id: 'fq1a1', text: 'A loud noise' },
                { id: 'fq1a2', text: 'A recurring musical theme associated with a specific character, place, or idea' },
                { id: 'fq1a3', text: 'The credits music' },
                { id: 'fq1a4', text: 'A pop song' },
            ],
            correctAnswerId: 'fq1a2',
            explanation: 'Leitmotifs (like Darth Vader\'s theme or the Jaws theme) help tell the story musically.'
        },
        {
            id: 'fq2',
            text: 'What is "Underscore"?',
            options: [
                { id: 'fq2a1', text: 'Music played softly under dialogue' },
                { id: 'fq2a2', text: 'Music played during the credits' },
                { id: 'fq2a3', text: 'Source music' },
                { id: 'fq2a4', text: 'A song sung by a character' },
            ],
            correctAnswerId: 'fq2a1',
            explanation: 'Underscore provides atmosphere and emotion without overpowering the spoken words.'
        },
        {
            id: 'fq3',
            text: 'What is "Diegetic" (Source) music?',
            options: [
                { id: 'fq3a1', text: 'Background music the characters can\'t hear' },
                { id: 'fq3a2', text: 'Music that exists within the film\'s world (e.g., from a radio) that characters CAN hear' },
                { id: 'fq3a3', text: 'Scary music' },
                { id: 'fq3a4', text: 'Orchestral music' },
            ],
            correctAnswerId: 'fq3a2',
            explanation: 'If a character turns on a radio, that music is diegetic.'
        },
        {
            id: 'fq4',
            text: 'What does "Non-Diegetic" music mean?',
            options: [
                { id: 'fq4a1', text: 'Music characters can hear' },
                { id: 'fq4a2', text: 'Background score added for the audience, unheard by characters' },
                { id: 'fq4a3', text: 'Sound effects' },
                { id: 'fq4a4', text: 'Dialogue' },
            ],
            correctAnswerId: 'fq4a2',
            explanation: 'Most film scores are non-diegetic; they comment on the action rather than being part of it.'
        },
        {
            id: 'fq5',
            text: 'Which composer is known for "Star Wars", "Jaws", and "Harry Potter"?',
            options: [
                { id: 'fq5a1', text: 'Hans Zimmer' },
                { id: 'fq5a2', text: 'John Williams' },
                { id: 'fq5a3', text: 'Ennio Morricone' },
                { id: 'fq5a4', text: 'Danny Elfman' },
            ],
            correctAnswerId: 'fq5a2',
            explanation: 'John Williams is the most famous symphonic film composer of the modern era.'
        },
        {
            id: 'fq6',
            text: 'What is "Mickey-Mousing"?',
            options: [
                { id: 'fq6a1', text: 'Using cartoon voices' },
                { id: 'fq6a2', text: 'When the music mimics every physical action on screen' },
                { id: 'fq6a3', text: 'Playing happy music' },
                { id: 'fq6a4', text: 'Using silence' },
            ],
            correctAnswerId: 'fq6a2',
            explanation: 'Common in cartoons (and early films), this technique tightly synchronizes music to movement.'
        },
        {
            id: 'fq7',
            text: 'What is a "Hit Point"?',
            options: [
                { id: 'fq7a1', text: 'A precise moment where music must coincide with a visual event' },
                { id: 'fq7a2', text: 'A loud drum' },
                { id: 'fq7a3', text: 'The end of the film' },
                { id: 'fq7a4', text: 'A wrong note' },
            ],
            correctAnswerId: 'fq7a1',
            explanation: 'Composers and editors use hit points to sync accents (like a punch or explosion) with the score.'
        },
        {
            id: 'fq8',
            text: 'Hans Zimmer is famous for combining orchestra with...',
            options: [
                { id: 'fq8a1', text: 'Only choir' },
                { id: 'fq8a2', text: 'Electronic synthesizers and modern production' },
                { id: 'fq8a3', text: 'Bluegrass bands' },
                { id: 'fq8a4', text: 'Solo piano only' },
            ],
            correctAnswerId: 'fq8a2',
            explanation: 'Zimmer pioneered the hybrid orchestral-electronic sound (e.g., Inception, Dark Knight).'
        },
        {
            id: 'fq9',
            text: 'What is "Dissonance" used for in film?',
            options: [
                { id: 'fq9a1', text: 'Romance scenes' },
                { id: 'fq9a2', text: 'Creating tension, fear, or suspense' },
                { id: 'fq9a3', text: 'Comedy' },
                { id: 'fq9a4', text: 'End credits' },
            ],
            correctAnswerId: 'fq9a2',
            explanation: 'Clashing notes (dissonance) naturally create unease, perfect for horror or thrillers.'
        },
        {
            id: 'fq10',
            text: 'What is a "Pedal Note"?',
            options: [
                { id: 'fq10a1', text: 'A sustained low note that builds tension' },
                { id: 'fq10a2', text: 'A high note' },
                { id: 'fq10a3', text: 'A fast scale' },
                { id: 'fq10a4', text: 'A drum solo' },
            ],
            correctAnswerId: 'fq10a1',
            explanation: 'A long pedal note acts as an anchor that can build suspense or stability.'
        },
        {
            id: 'fq11',
            text: 'Bernard Herrmann\'s score for "Psycho" is famous for using only...',
            options: [
                { id: 'fq11a1', text: 'Brass' },
                { id: 'fq11a2', text: 'Strings (string orchestra)' },
                { id: 'fq11a3', text: 'Synthesizers' },
                { id: 'fq11a4', text: 'Vocals' },
            ],
            correctAnswerId: 'fq11a2',
            explanation: 'Herrmann used a stark, black-and-white sound palate of strings only (hello, shower scene screech!).'
        },
        {
            id: 'fq12',
            text: 'What is "Ostinato"?',
            options: [
                { id: 'fq12a1', text: 'A short, repeated musical pattern' },
                { id: 'fq12a2', text: 'A long melody' },
                { id: 'fq12a3', text: 'A silence' },
                { id: 'fq12a4', text: 'A crash' },
            ],
            correctAnswerId: 'fq12a1',
            explanation: 'Ostinatos are crucial for driving action scenes or building suspense.'
        },
        {
            id: 'fq13',
            text: 'What mood does a "Major Key" usually convey?',
            options: [
                { id: 'fq13a1', text: 'Sadness and fear' },
                { id: 'fq13a2', text: 'Happiness, heroism, or safety' },
                { id: 'fq13a3', text: 'Anger' },
                { id: 'fq13a4', text: 'Mystery' },
            ],
            correctAnswerId: 'fq13a2',
            explanation: 'Culturally, major keys are associated with brightness and positivity.'
        },
        {
            id: 'fq14',
            text: 'What is "Silence" used for in film?',
            options: [
                { id: 'fq14a1', text: 'Boredom' },
                { id: 'fq14a2', text: 'To create extreme tension or focus on dialogue/sound design' },
                { id: 'fq14a3', text: 'To save money' },
                { id: 'fq14a4', text: 'Mistake' },
            ],
            correctAnswerId: 'fq14a2',
            explanation: 'Sudden silence can be louder than a full orchestra, shocking the audience.'
        },
        {
            id: 'fq15',
            text: 'Danny Elfman is often associated with the films of...',
            options: [
                { id: 'fq15a1', text: 'Steven Spielberg' },
                { id: 'fq15a2', text: 'Tim Burton' },
                { id: 'fq15a3', text: 'George Lucas' },
                { id: 'fq15a4', text: 'James Cameron' },
            ],
            correctAnswerId: 'fq15a2',
            explanation: 'Elfman\'s quirky, dark, and magical style fits perfectly with Tim Burton\'s visuals.'
        },
        {
            id: 'fq16',
            text: 'What is "Minimalism" in film music?',
            options: [
                { id: 'fq16a1', text: 'Using very few instruments or repetitive patterns' },
                { id: 'fq16a2', text: 'Playing very quietly' },
                { id: 'fq16a3', text: 'Short films only' },
                { id: 'fq16a4', text: 'No music' },
            ],
            correctAnswerId: 'fq16a1',
            explanation: 'Minimalist scores (like Phillip Glass) use repetition and subtle changes to create hypnotic atmospheres.'
        },
        {
            id: 'fq17',
            text: 'What is "Instrumentation"?',
            options: [
                { id: 'fq17a1', text: 'The choice of instruments used to create a specific timbre' },
                { id: 'fq17a2', text: 'Repairing instruments' },
                { id: 'fq17a3', text: 'Buying instruments' },
                { id: 'fq17a4', text: 'Tuning' },
            ],
            correctAnswerId: 'fq17a1',
            explanation: 'Choosing a saxophone vs. a cello drastically changes the "color" and meaning of a scene.'
        },
        {
            id: 'fq18',
            text: 'Ennio Morricone is famous for scoring specifically which genre?',
            options: [
                { id: 'fq18a1', text: 'Sci-Fi' },
                { id: 'fq18a2', text: 'Spaghetti Westerns' },
                { id: 'fq18a3', text: 'Rom-Coms' },
                { id: 'fq18a4', text: 'Documentaries' },
            ],
            correctAnswerId: 'fq18a2',
            explanation: 'Morricone gave the Western its iconic sound (whistles, electric guitars, choirs).'
        },
        {
            id: 'fq19',
            text: 'What is a "Main Title" cue?',
            options: [
                { id: 'fq19a1', text: 'The music played during the opening credits/scenes' },
                { id: 'fq19a2', text: 'The music at the end' },
                { id: 'fq19a3', text: 'Music for the villain' },
                { id: 'fq19a4', text: 'Sound effects' },
            ],
            correctAnswerId: 'fq19a1',
            explanation: 'The Main Title establishes the tone, themes, and "brand" of the movie immediately.'
        },
        {
            id: 'fq20',
            text: 'Why might a composer use a "Tremolo" on strings?',
            options: [
                { id: 'fq20a1', text: 'To sound funny' },
                { id: 'fq20a2', text: 'To create suspense, shivering, or tension' },
                { id: 'fq20a3', text: 'To sound like a drum' },
                { id: 'fq20a4', text: 'To signify sleep' },
            ],
            correctAnswerId: 'fq20a2',
            explanation: 'Rapidly repeating notes (tremolo) creates a sense of vibrating tension.'
        }
    ]
};

export const gameMusicQuiz: Quiz = {
    title: 'Video Game Music & Audio Quiz',
    questions: [
        {
            id: 'gq1',
            text: 'What is "Adaptive (Dynamic) Audio"?',
            options: [
                { id: 'gq1a1', text: 'Music that stays the same' },
                { id: 'gq1a2', text: 'Music that changes in real-time based on the player\'s actions' },
                { id: 'gq1a3', text: 'Audio played on speakers' },
                { id: 'gq1a4', text: 'Recorded dialogue' },
            ],
            correctAnswerId: 'gq1a2',
            explanation: 'Adaptive audio reacts to gameplay states (e.g., combat starting, health low).'
        },
        {
            id: 'gq2',
            text: 'What is "Chiptune" (8-bit) music?',
            options: [
                { id: 'gq2a1', text: 'Music made with real orchestras' },
                { id: 'gq2a2', text: 'Music synthesized by early computer sound chips' },
                { id: 'gq2a3', text: 'Music about chips' },
                { id: 'gq2a4', text: 'Vocal music' },
            ],
            correctAnswerId: 'gq2a2',
            explanation: 'Chiptune relies on simple waveforms (square, triangle, noise) due to early hardware limitations.'
        },
        {
            id: 'gq3',
            text: 'What is "Looping"?',
            options: [
                { id: 'gq3a1', text: 'Playing a track specifically once' },
                { id: 'gq3a2', text: 'Seamlessly repeating a piece of music indefinitely' },
                { id: 'gq3a3', text: 'Stopping the music' },
                { id: 'gq3a4', text: 'Skipping tracks' },
            ],
            correctAnswerId: 'gq3a2',
            explanation: 'Game music must loop because we don\'t know how long a player will stay in one area.'
        },
        {
            id: 'gq4',
            text: 'What is "Horizontal Resequencing"?',
            options: [
                { id: 'gq4a1', text: 'Playing songs backwards' },
                { id: 'gq4a2', text: 'Switching between different musical sections (e.g., Explore -> Combat) as the music flows' },
                { id: 'gq4a3', text: 'Layering instruments' },
                { id: 'gq4a4', text: 'Turning up the volume' },
            ],
            correctAnswerId: 'gq4a2',
            explanation: 'Horizontal resequencing seamlessly transitions between different "blocks" of music along the timeline.'
        },
        {
            id: 'gq5',
            text: 'What is "Vertical Layering"?',
            options: [
                { id: 'gq5a1', text: 'Adding or removing instrument tracks to change intensity' },
                { id: 'gq5a2', text: 'Switching songs' },
                { id: 'gq5a3', text: 'Dancing vertically' },
                { id: 'gq5a4', text: 'Playing simple melodies' },
            ],
            correctAnswerId: 'gq5a1',
            explanation: 'Vertical layering keeps the same musical flow but adds layers (e.g., drums enter) when action heats up.'
        },
        {
            id: 'gq6',
            text: 'Who composed the iconic "Super Mario Bros." theme?',
            options: [
                { id: 'gq6a1', text: 'Nobuo Uematsu' },
                { id: 'gq6a2', text: 'Koji Kondo' },
                { id: 'gq6a3', text: 'Jeremy Soule' },
                { id: 'gq6a4', text: 'Hans Zimmer' },
            ],
            correctAnswerId: 'gq6a2',
            explanation: 'Koji Kondo is the legendary composer behind Nintendo\'s Mario and Zelda franchises.'
        },
        {
            id: 'gq7',
            text: 'What is a "Leitmotif" in games?',
            options: [
                { id: 'gq7a1', text: 'A text box' },
                { id: 'gq7a2', text: 'A recurring theme for a character (like Zelda\'s Lullaby)' },
                { id: 'gq7a3', text: 'A sound effect' },
                { id: 'gq7a4', text: 'A glitch' },
            ],
            correctAnswerId: 'gq7a2',
            explanation: 'Just like in film, leitmotifs help players instantly recognize characters or places.'
        },
        {
            id: 'gq8',
            text: 'What is "Foley" in games?',
            options: [
                { id: 'gq8a1', text: 'Background music' },
                { id: 'gq8a2', text: 'Recorded everyday sound effects (footsteps, cloth rustle)' },
                { id: 'gq8a3', text: 'Voice acting' },
                { id: 'gq8a4', text: 'Coding' },
            ],
            correctAnswerId: 'gq8a2',
            explanation: 'Foley artists record real-world sounds to make the game environment feel realistic.'
        },
        {
            id: 'gq9',
            text: 'What limitation defined early game music (NES/GameBoy)?',
            options: [
                { id: 'gq9a1', text: 'It had to be classical' },
                { id: 'gq9a2', text: 'Limited number of sound channels (polyphony)' },
                { id: 'gq9a3', text: 'It had to be 10 minutes long' },
                { id: 'gq9a4', text: 'No limitations' },
            ],
            correctAnswerId: 'gq9a2',
            explanation: 'Early consoles could often only play 3 or 4 notes at once.'
        },
        {
            id: 'gq10',
            text: 'What is "MIDI" in the context of old PC games?',
            options: [
                { id: 'gq10a1', text: 'Recorded audio' },
                { id: 'gq10a2', text: 'Instructions for the computer\'s sound card to play notes' },
                { id: 'gq10a3', text: 'A video format' },
                { id: 'gq10a4', text: 'A controller' },
            ],
            correctAnswerId: 'gq10a2',
            explanation: 'MIDI files were tiny because they were just instructions; the user\'s sound card generated the actual audio.'
        },
        {
            id: 'gq11',
            text: 'Which game is famous for its Gregorian Chant-style title theme?',
            options: [
                { id: 'gq11a1', text: 'Tetris' },
                { id: 'gq11a2', text: 'Halo' },
                { id: 'gq11a3', text: 'Sonic the Hedgehog' },
                { id: 'gq11a4', text: 'Pac-Man' },
            ],
            correctAnswerId: 'gq11a2',
            explanation: 'Halo\'s chant theme became iconic for its ancient, mysterious atmosphere.'
        },
        {
            id: 'gq12',
            text: 'What is "Immersion"?',
            options: [
                { id: 'gq12a1', text: 'Playing underwater' },
                { id: 'gq12a2', text: 'The feeling of being completely absorbed in the game world' },
                { id: 'gq12a3', text: 'Winning the game' },
                { id: 'gq12a4', text: 'Turning off the sound' },
            ],
            correctAnswerId: 'gq12a2',
            explanation: 'Audio (music and SFX) is critical for suspending disbelief and creating immersion.'
        },
        {
            id: 'gq13',
            text: 'What is a "Stinger"?',
            options: [
                { id: 'gq13a1', text: 'A very short musical sound to signal an event (e.g., getting a coin)' },
                { id: 'gq13a2', text: 'A long song' },
                { id: 'gq13a3', text: 'A wrong note' },
                { id: 'gq13a4', text: 'A bee' },
            ],
            correctAnswerId: 'gq13a1',
            explanation: 'Stingers provide instant positive or negative feedback to the player.'
        },
        {
            id: 'gq14',
            text: 'Modern AAA games often use...',
            options: [
                { id: 'gq14a1', text: 'Only beeps' },
                { id: 'gq14a2', text: 'Full live orchestral scores' },
                { id: 'gq14a3', text: 'Silence only' },
                { id: 'gq14a4', text: 'Mono audio' },
            ],
            correctAnswerId: 'gq14a2',
            explanation: 'Big budget games now rival Hollywood films with massive orchestral productions.'
        },
        {
            id: 'gq15',
            text: 'What is "Procedural Audio"?',
            options: [
                { id: 'gq15a1', text: 'Recorded songs' },
                { id: 'gq15a2', text: 'Sound generated in real-time by algorithms (e.g., wind, footsteps)' },
                { id: 'gq15a3', text: 'Radio music' },
                { id: 'gq15a4', text: 'Voice acting' },
            ],
            correctAnswerId: 'gq15a2',
            explanation: 'Procedural audio creates variety, so footsteps don\'t sound exactly the same every time.'
        },
        {
            id: 'gq16',
            text: 'Nobuo Uematsu is famous for the music of which RPG series?',
            options: [
                { id: 'gq16a1', text: 'Call of Duty' },
                { id: 'gq16a2', text: 'Final Fantasy' },
                { id: 'gq16a3', text: 'FIFA' },
                { id: 'gq16a4', text: 'Tetris' },
            ],
            correctAnswerId: 'gq16a2',
            explanation: 'Uematsu\'s emotional scores are central to the identity of Final Fantasy.'
        },
        {
            id: 'gq17',
            text: 'What defines "Open World" music?',
            options: [
                { id: 'gq17a1', text: 'Fast techno' },
                { id: 'gq17a2', text: 'Sparse, ambient music that allows for long exploration without annoyance' },
                { id: 'gq17a3', text: 'Constant loud singing' },
                { id: 'gq17a4', text: 'No music' },
            ],
            correctAnswerId: 'gq17a2',
            explanation: 'Games like Skyrim or Breath of the Wild use ambient music to avoid repetitive fatigue.'
        },
        {
            id: 'gq18',
            text: 'What is "Spatial Audio" (or 3D Audio)?',
            options: [
                { id: 'gq18a1', text: 'Loud volume' },
                { id: 'gq18a2', text: 'Sound that simulates direction and distance (surround sound)' },
                { id: 'gq18a3', text: 'Flat sound' },
                { id: 'gq18a4', text: 'Mono sound' },
            ],
            correctAnswerId: 'gq18a2',
            explanation: 'Spatial audio allows players to hear if an enemy is behind or above them (crucial for VR/Shooters).'
        },
        {
            id: 'gq19',
            text: 'Why do boss battles usually have unique music?',
            options: [
                { id: 'gq19a1', text: 'They don\'t' },
                { id: 'gq19a2', text: 'To heighten intensity and signal a major challenge' },
                { id: 'gq19a3', text: 'Because the boss sings' },
                { id: 'gq19a4', text: 'To annoy the player' },
            ],
            correctAnswerId: 'gq19a2',
            explanation: 'High-octane boss themes raise the stakes and adrenaline.'
        },
        {
            id: 'gq20',
            text: 'The "Tetris" theme is actually a folk song from which country?',
            options: [
                { id: 'gq20a1', text: 'USA' },
                { id: 'gq20a2', text: 'Russia' },
                { id: 'gq20a3', text: 'Japan' },
                { id: 'gq20a4', text: 'Gemany' },
            ],
            correctAnswerId: 'gq20a2',
            explanation: 'The theme is based on the Russian folk song "Korobeiniki."'
        }
    ]
};
