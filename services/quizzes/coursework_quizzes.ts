import { Quiz } from '../../types';

export const composingQuiz: Quiz = {
    title: 'IGCSE Music Component 3: Composing Quiz',
    questions: [
        {
            id: 'comp-q1',
            text: 'How many original compositions must a candidate submit for Component 3?',
            options: [
                { id: 'a', text: 'One' },
                { id: 'b', text: 'Two' },
                { id: 'c', text: 'Three' },
                { id: 'd', text: 'Four' }
            ],
            correctAnswerId: 'b',
            explanation: 'Candidates must submit two contrasting compositions.'
        },
        {
            id: 'comp-q2',
            text: 'What notation requirement is mandatory for Composition 1?',
            options: [
                { id: 'a', text: 'Graphic notation' },
                { id: 'b', text: 'Staff notation' },
                { id: 'c', text: 'Chord symbols only' },
                { id: 'd', text: 'No notation is required' }
            ],
            correctAnswerId: 'b',
            explanation: 'The first composition must be submitted in full staff notation.'
        },
        {
            id: 'comp-q3',
            text: 'What is the recommended duration for each composition?',
            options: [
                { id: 'a', text: 'Under 1 minute' },
                { id: 'b', text: '1 to 3 minutes' },
                { id: 'c', text: '4 to 6 minutes' },
                { id: 'd', text: 'Over 5 minutes' }
            ],
            correctAnswerId: 'b',
            explanation: 'Each composition should typically be between 1 and 3 minutes in length.'
        },
        {
            id: 'comp-q4',
            text: 'For Composition 2, which of these can be submitted instead of a staff notation score?',
            options: [
                { id: 'a', text: 'A drawing of the music' },
                { id: 'b', text: 'A written commentary' },
                { id: 'c', text: 'A video of the composer' },
                { id: 'd', text: 'A list of instruments used' }
            ],
            correctAnswerId: 'b',
            explanation: 'For Composition 2, a written commentary is acceptable if traditional notation is not appropriate for the style.'
        },
        {
            id: 'comp-q5',
            text: 'What does "Development" in the marking criteria refer to?',
            options: [
                { id: 'a', text: 'The age of the student' },
                { id: 'b', text: 'How musical ideas are transformed, extended, or varied' },
                { id: 'c', text: 'The volume of the recording' },
                { id: 'd', text: 'The software used to write the music' }
            ],
            correctAnswerId: 'b',
            explanation: 'Development is the process of taking initial ideas (motifs) and evolving them through the piece.'
        },
        {
            id: 'comp-q6',
            text: 'True or False: An arrangement of a pop song is acceptable as a composition.',
            options: [
                { id: 'a', text: 'True' },
                { id: 'b', text: 'False' }
            ],
            correctAnswerId: 'b',
            explanation: 'Compositions must be original. Arrangements of existing music are not permitted.'
        },
        {
            id: 'comp-q7',
            text: 'Which marking category assesses the creative use of instruments or voices?',
            options: [
                { id: 'a', text: 'Structure' },
                { id: 'b', text: 'Use of Medium' },
                { id: 'c', text: 'Compositional Techniques' },
                { id: 'd', text: 'Notation' }
            ],
            correctAnswerId: 'b',
            explanation: '"Use of Medium" refers to how effectively the composer writes for their chosen instruments or voices.'
        },
        {
            id: 'comp-q8',
            text: 'How many marks is each composition worth?',
            options: [
                { id: 'a', text: '25 marks' },
                { id: 'b', text: '50 marks' },
                { id: 'c', text: '100 marks' },
                { id: 'd', text: '10 marks' }
            ],
            correctAnswerId: 'b',
            explanation: 'Each composition is marked out of 50, making a total of 100 for Component 3.'
        },
        {
            id: 'comp-q9',
            text: 'What must accompany EVERY composition submission?',
            options: [
                { id: 'a', text: 'A photo of the score' },
                { id: 'b', text: 'A recording of the piece' },
                { id: 'c', text: 'A letter from the parent' },
                { id: 'd', text: 'A biography of the composer' }
            ],
            correctAnswerId: 'b',
            explanation: 'Both a written version (score/commentary) and a recording are required for all compositions.'
        },
        {
            id: 'comp-q10',
            text: 'What is a "candidate-defined brief"?',
            options: [
                { id: 'a', text: 'An exam paper given by Cambridge' },
                { id: 'b', text: 'A student-chosen purpose or stimulus for the music' },
                { id: 'c', text: 'A list of rules for the classroom' },
                { id: 'd', text: 'A summary of the syllabus' }
            ],
            correctAnswerId: 'b',
            explanation: 'Composition 2 requires the student to define a "brief" or scenario for their music.'
        },
        {
            id: 'comp-q11',
            text: 'In the marking criteria, what does "Texture" refer to?',
            options: [
                { id: 'a', text: 'The feel of the score paper' },
                { id: 'b', text: 'The layers of sound and how they interact' },
                { id: 'c', text: 'The speed of the music' },
                { id: 'd', text: 'The volume of the music' }
            ],
            correctAnswerId: 'b',
            explanation: 'Texture describes how different melodic and harmonic lines are layered (e.g., homophonic, polyphonic).'
        },
        {
            id: 'comp-q12',
            text: 'Which is a common method for creating high-quality recordings?',
            options: [
                { id: 'a', text: 'Humming into a phone' },
                { id: 'b', text: 'Using music software (DAW) and virtual instruments' },
                { id: 'c', text: 'Recording in a noisy hallway' },
                { id: 'd', text: 'There is no need for high quality' }
            ],
            correctAnswerId: 'b',
            explanation: 'Using Digital Audio Workstations (DAWs) is a professional way to produce clear recordings for submission.'
        },
        {
            id: 'comp-q13',
            text: 'What determines the mark for "Notation and Presentation"?',
            options: [
                { id: 'a', text: 'The color of the ink' },
                { id: 'b', text: 'How clearly and accurately the score communicates the composer’s intent' },
                { id: 'c', text: 'The number of pages' },
                { id: 'd', text: 'The font size' }
            ],
            correctAnswerId: 'b',
            explanation: 'Clear notation helps the moderator understand exactly what the composer intended to happen.'
        },
        {
            id: 'comp-q14',
            text: 'Can a composition use electronic or synthesized sounds?',
            options: [
                { id: 'a', text: 'Yes, if appropriate to the style' },
                { id: 'b', text: 'No, only acoustic instruments are allowed' }
            ],
            correctAnswerId: 'a',
            explanation: 'Electronic sounds are perfectly acceptable, especially in styles like EDM or film music.'
        },
        {
            id: 'comp-q15',
            text: 'What does "Contrasting" mean in the context of the two compositions?',
            options: [
                { id: 'a', text: 'They must have different titles' },
                { id: 'b', text: 'They should use different styles, instruments, or musical periods' },
                { id: 'c', text: 'They should be by different people' },
                { id: 'd', text: 'One must be loud and one must be soft' }
            ],
            correctAnswerId: 'b',
            explanation: 'Contrast shows the composer’s range; submitting two very similar pieces is discouraged.'
        },
        {
            id: 'comp-q16',
            text: 'What is a "Motif"?',
            options: [
                { id: 'a', text: 'A long 10-minute melody' },
                { id: 'b', text: 'A short, recurring musical idea or fragment' },
                { id: 'c', text: 'A type of instrument' },
                { id: 'd', text: 'The ending of a piece' }
            ],
            correctAnswerId: 'b',
            explanation: 'A motif is the "seed" from which much of a composition is developed.'
        },
        {
            id: 'comp-q17',
            text: 'True or False: The teacher must certify that the work is original.',
            options: [
                { id: 'a', text: 'True' },
                { id: 'b', text: 'False' }
            ],
            correctAnswerId: 'a',
            explanation: 'Authentication is critical to ensure the student actually wrote the music themselves.'
        },
        {
            id: 'comp-q18',
            text: 'Which marking section evaluates the overall plan and shape of the music?',
            options: [
                { id: 'a', text: 'Melody' },
                { id: 'b', text: 'Structure' },
                { id: 'c', text: 'Harmony' },
                { id: 'd', text: 'Rhythm' }
            ],
            correctAnswerId: 'b',
            explanation: 'Structure refers to the formal organization (e.g., Binary, Ternary, Rondo) of the piece.'
        },
        {
            id: 'comp-q19',
            text: 'How does a commentary differ from a score?',
            options: [
                { id: 'a', text: 'A score is words, a commentary is notes' },
                { id: 'b', text: 'A score is a visual map of the music; a commentary explains the "why" and "how" in words' },
                { id: 'c', text: 'There is no difference' },
                { id: 'd', text: 'A commentary is only for the teacher' }
            ],
            correctAnswerId: 'b',
            explanation: 'Commentaries are used when standard notation is not the primary way the music was created (e.g., studio production).'
        },
        {
            id: 'comp-q20',
            text: 'What is "Harmonic Language"?',
            options: [
                { id: 'a', text: 'The language people speak in Germany' },
                { id: 'b', text: 'The choice and use of chords and tonality in the piece' },
                { id: 'c', text: 'The way the melody is sung' },
                { id: 'd', text: 'The speed of the harmony' }
            ],
            correctAnswerId: 'b',
            explanation: 'Harmonic language refers to the composer\'s approach to chords, scales, and keys.'
        }
    ]
};

export const performingQuiz: Quiz = {
    title: 'IGCSE Music Component 2: Performing Quiz',
    questions: [
        {
            id: 'perf-q1',
            text: 'What is the required minimum duration for the solo performance piece(s)?',
            options: [
                { id: 'a', text: '1 minute' },
                { id: 'b', text: '2 minutes' },
                { id: 'c', text: '4 minutes' },
                { id: 'd', text: '5 minutes' }
            ],
            correctAnswerId: 'b',
            explanation: 'Each piece (or set of pieces for solo/ensemble) must be at least 2 minutes long.'
        },
        {
            id: 'perf-q2',
            text: 'Which of the following defines an "ensemble" performance for IGCSE?',
            options: [
                { id: 'a', text: 'Playing along with a pre-recorded backing track' },
                { id: 'b', text: 'Playing with at least one other live musician where your part is independent' },
                { id: 'c', text: 'Playing in a large orchestra where you are doubled by others' },
                { id: 'd', text: 'Solo playing with a conductor' }
            ],
            correctAnswerId: 'b',
            explanation: 'Ensemble requires at least one other live performer, and your part must be independent (not doubled).'
        },
        {
            id: 'perf-q3',
            text: 'What is the maximum total time allowed for both performances combined?',
            options: [
                { id: 'a', text: '5 minutes' },
                { id: 'b', text: '8 minutes' },
                { id: 'c', text: '10 minutes' },
                { id: 'd', text: '15 minutes' }
            ],
            correctAnswerId: 'c',
            explanation: 'The maximum total duration for Component 2 is 10 minutes.'
        },
        {
            id: 'perf-q4',
            text: 'In the marking criteria, what does "Technical Control" specifically assess?',
            options: [
                { id: 'a', text: 'The difficulty of the piece' },
                { id: 'b', text: 'Pitch and rhythm accuracy, intonation, and tone quality' },
                { id: 'c', text: 'The historical accuracy of the performance' },
                { id: 'd', text: 'The volume of the recording' }
            ],
            correctAnswerId: 'b',
            explanation: 'Technical control focuses on the physical mastery of the instrument/voice, involving accuracy and sound quality.'
        },
        {
            id: 'perf-q5',
            text: 'Can a student perform two short solo pieces to meet the minimum time requirement?',
            options: [
                { id: 'a', text: 'No, it must be one single piece' },
                { id: 'b', text: 'Yes, if the total time of both pieces is at least 2 minutes' },
                { id: 'c', text: 'Only if the pieces are by the same composer' },
                { id: 'd', text: 'Only if the teacher gives permission' }
            ],
            correctAnswerId: 'b',
            explanation: 'If a piece is under 2 minutes, you can perform two pieces as long as they reach the minimum duration.'
        },
        {
            id: 'perf-q6',
            text: 'Which marking category evaluates the use of dynamics, phrasing, and articulation?',
            options: [
                { id: 'a', text: 'Technical Control' },
                { id: 'b', text: 'Expression and Interpretation' },
                { id: 'c', text: 'Ensemble Coordination' },
                { id: 'd', text: 'Metronomic Accuracy' }
            ],
            correctAnswerId: 'b',
            explanation: 'Expression and Interpretation covers how the performer communicates the musical meaning through stylistic nuances.'
        },
        {
            id: 'perf-q7',
            text: 'True or False: An accompaniment is required for all solo performances.',
            options: [
                { id: 'a', text: 'True' },
                { id: 'b', text: 'False' }
            ],
            correctAnswerId: 'b',
            explanation: 'Accompaniment is only required if it is part of the original composition. Unaccompanied works are allowed.'
        },
        {
            id: 'perf-q8',
            text: 'What is the "Focus" for ensemble marking?',
            options: [
                { id: 'a', text: 'How loud the group plays' },
                { id: 'b', text: 'The ability to maintain a steady pulse' },
                { id: 'c', text: 'Rhythmic and melodic coordination with other performers' },
                { id: 'd', text: 'The number of people in the group' }
            ],
            correctAnswerId: 'c',
            explanation: 'Ensemble marking specifically looks at how well the performer interacts and synchronizes with the other live musicians.'
        },
        {
            id: 'perf-q9',
            text: 'If a singer performs with a piano accompanist, does this count as an ensemble?',
            options: [
                { id: 'a', text: 'Yes, always' },
                { id: 'b', text: 'No, it is a solo performance' },
                { id: 'c', text: 'Only if the piano part is equally difficult' },
                { id: 'd', text: 'Only if there are no other instruments' }
            ],
            correctAnswerId: 'b',
            explanation: 'Vocals with piano accompaniment is considered a "Solo Performance" for IGCSE purposes unless the piano part is specifically an ensemble partner part.'
        },
        {
            id: 'perf-q10',
            text: 'What should be submitted alongside the recordings?',
            options: [
                { id: 'a', text: 'A photo of the instrument' },
                { id: 'b', text: 'The sheet music (scores) for both pieces' },
                { id: 'c', text: 'A 500-word essay about the composer' },
                { id: 'd', text: 'A video of the practice session' }
            ],
            correctAnswerId: 'b',
            explanation: 'Clear copies of the sheet music (scores) must be submitted so the moderator can check for accuracy.'
        },
        {
            id: 'perf-q11',
            text: 'Which is NOT a valid reason for choosing a piece?',
            options: [
                { id: 'a', text: 'It showcases your best technical skills' },
                { id: 'b', text: 'It meets the duration requirements' },
                { id: 'c', text: 'It is a style you are comfortable with' },
                { id: 'd', text: 'It is the most famous piece in the world' }
            ],
            correctAnswerId: 'd',
            explanation: 'Fame is irrelevant; suitability for the performer\'s skill and ability to demonstrate criteria are what matter.'
        },
        {
            id: 'perf-q12',
            text: 'What happens if a performance is significantly shorter than 2 minutes?',
            options: [
                { id: 'a', text: 'Nothing, the mark is unaffected' },
                { id: 'b', text: 'Marks will be deducted for failure to meet duration requirements' },
                { id: 'c', text: 'The entire coursework is disqualified' },
                { id: 'd', text: 'The student must record it again at a slower tempo' }
            ],
            correctAnswerId: 'b',
            explanation: 'Failure to meet the minimum duration results in a mark deduction.'
        },
        {
            id: 'perf-q13',
            text: 'In an ensemble, can the candidate be "conducted"?',
            options: [
                { id: 'a', text: 'Yes, but the conductor cannot be the teacher' },
                { id: 'b', text: 'No, the ensemble must coordinate themselves' },
                { id: 'c', text: 'Yes, it is common in large groups' },
                { id: 'd', text: 'Only for choral ensembles' }
            ],
            correctAnswerId: 'b',
            explanation: 'The candidate should demonstrate the ability to coordinate without external direction like conducting.'
        },
        {
            id: 'perf-q14',
            text: 'What is "Intonation"?',
            options: [
                { id: 'a', text: 'The speed of the notes' },
                { id: 'b', text: 'The accuracy of pitch (staying in tune)' },
                { id: 'c', text: 'The volume of the music' },
                { id: 'd', text: 'The length of the performance' }
            ],
            correctAnswerId: 'b',
            explanation: 'Intonation refers specifically to playing or singing at the correct pitch.'
        },
        {
            id: 'perf-q15',
            text: 'Which component number is "Performing" in IGCSE Music?',
            options: [
                { id: 'a', text: 'Component 1' },
                { id: 'b', text: 'Component 2' },
                { id: 'c', text: 'Component 3' },
                { id: 'd', text: 'Component 4' }
            ],
            correctAnswerId: 'b',
            explanation: 'Listening is Component 1, Performing is Component 2, and Composing is Component 3.'
        },
        {
            id: 'perf-q16',
            text: 'Can a student perform on two different instruments?',
            options: [
                { id: 'a', text: 'Yes, one for solo and one for ensemble' },
                { id: 'b', text: 'No, they must use the same instrument for both' },
                { id: 'c', text: 'Only if they are in the same family' },
                { id: 'd', text: 'Only if they get special permission' }
            ],
            correctAnswerId: 'a',
            explanation: 'Students are free to use different instruments for their two performances.'
        },
        {
            id: 'perf-q17',
            text: 'What is the total mark available for Component 2?',
            options: [
                { id: 'a', text: '25 marks' },
                { id: 'b', text: '50 marks' },
                { id: 'c', text: '100 marks' },
                { id: 'd', text: '40 marks' }
            ],
            correctAnswerId: 'b',
            explanation: 'Each performance is marked out of 25, totaling 50 marks.'
        },
        {
            id: 'perf-q18',
            text: 'Which of these is checked during "Moderation"?',
            options: [
                { id: 'a', text: 'Whether the student practiced enough' },
                { id: 'b', text: 'Whether the internal teacher\'s marking aligns with the official standard' },
                { id: 'c', text: 'Whether the instruments were expensive' },
                { id: 'd', text: 'Whether the recording was done in a studio' }
            ],
            correctAnswerId: 'b',
            explanation: 'Moderation ensures that grading is consistent and fair across all schools.'
        },
        {
            id: 'perf-q19',
            text: 'Does "Ensemble" mean the student must be the leader?',
            options: [
                { id: 'a', text: 'Yes' },
                { id: 'b', text: 'No, but their part must be essential' }
            ],
            correctAnswerId: 'b',
            explanation: 'The candidate doesn\'t need to be the soloist/leader, but they must have a distinct, independent part.'
        },
        {
            id: 'perf-q20',
            text: 'Which of the following is an "Articulation" marking?',
            options: [
                { id: 'a', text: 'Forte' },
                { id: 'b', text: 'Staccato' },
                { id: 'c', text: 'Andante' },
                { id: 'd', text: 'Crescendo' }
            ],
            correctAnswerId: 'b',
            explanation: 'Staccato, legato, and accents are examples of articulation.'
        }
    ]
};
