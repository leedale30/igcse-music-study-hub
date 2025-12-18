import { Quiz } from '../../../types';

export const baroqueRapidFireQuiz: Quiz = {
    title: "Baroque Music: Rapid Fire Knowledge Check",
    questions: [
        {
            id: 'rf1',
            text: "A cadence ending V-I is called?",
            options: [
                { id: 'rf1a1', text: 'Interrupted' },
                { id: 'rf1a2', text: 'Imperfect' },
                { id: 'rf1a3', text: 'Plagal (Amen cadence)' },
                { id: 'rf1a4', text: 'Perfect' },
            ],
            correctAnswerId: 'rf1a4',
            explanation: "A Perfect Cadence (V-I) sounds finished and complete, like a full stop."
        },
        {
            id: 'rf2',
            text: "What is the time signature of a Sarabande?",
            options: [
                { id: 'rf2a1', text: '3/2 or 3/4 (slow triple)' },
                { id: 'rf2a2', text: '2/4 (March)' },
                { id: 'rf2a3', text: '6/8 (Compound Duple)' },
                { id: 'rf2a4', text: '4/4 (Common Time)' },
            ],
            correctAnswerId: 'rf2a1',
            explanation: "A Sarabande is a slow, stately dance in triple meter (3/2 or 3/4), often with an emphasis on the second beat."
        },
        {
            id: 'rf3',
            text: "A single melodic line without accompaniment is?",
            options: [
                { id: 'rf3a1', text: 'Homophonic' },
                { id: 'rf3a2', text: 'Polyphonic' },
                { id: 'rf3a3', text: 'Monophonic' },
                { id: 'rf3a4', text: 'Heterophonic' },
            ],
            correctAnswerId: 'rf3a3',
            explanation: "Monophony literally means 'one sound' or 'single voice'."
        },
        {
            id: 'rf4',
            text: "Which wind instrument was NOT standard in the Baroque orchestra?",
            options: [
                { id: 'rf4a1', text: 'Clarinet' },
                { id: 'rf4a2', text: 'Flute' },
                { id: 'rf4a3', text: 'Oboe' },
                { id: 'rf4a4', text: 'Bassoon' },
            ],
            correctAnswerId: 'rf4a1',
            explanation: "The Clarinet was invented around 1700 but did not become a standard orchestral instrument until the Classical period."
        },
        {
            id: 'rf5',
            text: "A sudden change from loud to soft is?",
            options: [
                { id: 'rf5a1', text: 'Terraced Dynamics' },
                { id: 'rf5a2', text: 'Diminuendo' },
                { id: 'rf5a3', text: 'Sforzando' },
                { id: 'rf5a4', text: 'Crescendo' },
            ],
            correctAnswerId: 'rf5a1',
            explanation: "Terraced dynamics describe the abrupt shifts in volume (stepping up or down) typical of Baroque music, lacking gradual crescendos/diminuendos."
        },
        {
            id: 'rf6',
            text: "Form with a recurring theme (A) and episodes (B, C, D)?",
            options: [
                { id: 'rf6a1', text: 'Binary Form' },
                { id: 'rf6a2', text: 'Sonata Form' },
                { id: 'rf6a3', text: 'Ritornello Form' },
                { id: 'rf6a4', text: 'Ternary Form' },
            ],
            correctAnswerId: 'rf6a3',
            explanation: "Ritornello form features a recurring orchestral theme ('Ritornello') alternating with contrasting episodes."
        },
        {
            id: 'rf7',
            text: "A bass line that repeats throughout the piece?",
            options: [
                { id: 'rf7a1', text: 'Walking Bass' },
                { id: 'rf7a2', text: 'Drone' },
                { id: 'rf7a3', text: 'Alberti Bass' },
                { id: 'rf7a4', text: 'Ground Bass (Ostinato)' },
            ],
            correctAnswerId: 'rf7a4',
            explanation: "A Ground Bass (or Basso Ostinato) is a repeating bass pattern that serves as the foundation for the entire piece."
        },
        {
            id: 'rf8',
            text: "Who wrote The Four Seasons?",
            options: [
                { id: 'rf8a1', text: 'Corelli' },
                { id: 'rf8a2', text: 'Vivaldi' },
                { id: 'rf8a3', text: 'Handel' },
                { id: 'rf8a4', text: 'Bach' },
            ],
            correctAnswerId: 'rf8a2',
            explanation: "Antonio Vivaldi composed 'The Four Seasons'."
        },
        {
            id: 'rf9',
            text: "Where did the Concerto Grosso originate?",
            options: [
                { id: 'rf9a1', text: 'Italy (Corelli)' },
                { id: 'rf9a2', text: 'France (Lully)' },
                { id: 'rf9a3', text: 'England (Purcell)' },
                { id: 'rf9a4', text: 'Germany (Bach)' },
            ],
            correctAnswerId: 'rf9a1',
            explanation: "The Concerto Grosso style was pioneered in Italy, with Arcangelo Corelli being a key figure in its development."
        },
        {
            id: 'rf10',
            text: "What does a figured bass number '#6' mean?",
            options: [
                { id: 'rf10a1', text: 'Seventh chord' },
                { id: 'rf10a2', text: 'First inversion chord with a raised 6th' },
                { id: 'rf10a3', text: 'Second inversion chord' },
                { id: 'rf10a4', text: 'Root position triad' },
            ],
            correctAnswerId: 'rf10a2',
            explanation: "In figured bass, a '6' implies a first inversion (6/3). An accidental (like a sharp) next to a number applies to that interval above the bass."
        }
    ]
};
