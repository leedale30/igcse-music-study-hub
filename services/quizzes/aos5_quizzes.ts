
import { Quiz } from '../../types';

export const tangoQuiz: Quiz = {
    title: 'Tango Mastery Quiz',
    questions: [
        {
            id: 'tq1',
            text: 'Where did Tango music and dance originate?',
            options: [
                { id: 'tq1a1', text: 'Madrid, Spain' },
                { id: 'tq1a2', text: 'Buenos Aires, Argentina' },
                { id: 'tq1a3', text: 'Rio de Janeiro, Brazil' },
                { id: 'tq1a4', text: 'Mexico City, Mexico' }
            ],
            correctAnswerId: 'tq1a2',
            explanation: 'Tango originated in the late 19th century in the port areas of Buenos Aires and Montevideo.'
        },
        {
            id: 'tq2',
            text: 'Which instrument is considered the "soul" of the Tango ensemble?',
            options: [
                { id: 'tq2a1', text: 'Acoustic Guitar' },
                { id: 'tq2a2', text: 'Piano' },
                { id: 'tq2a3', text: 'Bandoneón' },
                { id: 'tq2a4', text: 'Violin' }
            ],
            correctAnswerId: 'tq2a3',
            explanation: 'The bandoneón, a type of concertina, is essential to the authentic Tango sound.'
        },
        {
            id: 'tq3',
            text: 'What is the characteristic rhythmic pulse often used in Tango music?',
            options: [
                { id: 'tq3a1', text: 'Swing' },
                { id: 'tq3a2', text: 'Waltz (3/4)' },
                { id: 'tq3a3', text: 'Habanera' },
                { id: 'tq3a4', text: 'Shuffle' }
            ],
            correctAnswerId: 'tq3a3',
            explanation: 'The Habanera rhythm is a foundational syncopated pulse in both early and modern Tango.'
        },
        {
            id: 'tq4',
            text: 'What is the standard time signature for modern Tango?',
            options: [
                { id: 'tq4a1', text: '3/4' },
                { id: 'tq4a2', text: '4/4 or 2/4' },
                { id: 'tq4a3', text: '6/8' },
                { id: 'tq4a4', text: '5/4' }
            ],
            correctAnswerId: 'tq4a2',
            explanation: 'Modern Tango is typically written in a steady 2/4 or 4/4 time signature.'
        },
        {
            id: 'tq5',
            text: 'In a "Sexteto Típico," which instruments are usually doubled?',
            options: [
                { id: 'tq5a1', text: 'Violins and Bandoneóns' },
                { id: 'tq5a2', text: 'Flutes and Guitars' },
                { id: 'tq5a3', text: 'Pianos and Cellos' },
                { id: 'tq5a4', text: 'Trumpets and Trombones' }
            ],
            correctAnswerId: 'tq5a1',
            explanation: 'A traditional Tango sextet (Sexteto Típico) includes two violins, two bandoneóns, a piano, and a double bass.'
        },
        {
            id: 'tq6',
            text: 'What does the term "Marcato" mean in a Tango context?',
            options: [
                { id: 'tq6a1', text: 'Play softly' },
                { id: 'tq6a2', text: 'Marked or accented notes, emphasizing the beat' },
                { id: 'tq6a3', text: 'Play very fast' },
                { id: 'tq6a4', text: 'Slurred notes' }
            ],
            correctAnswerId: 'tq6a2',
            explanation: 'Marcato is a common articulation in Tango where notes are played with sharp emphasis to drive the rhythm.'
        },
        {
            id: 'tq7',
            text: 'Who is the most famous composer of "Nuevo Tango" (New Tango)?',
            options: [
                { id: 'tq7a1', text: 'Carlos Gardel' },
                { id: 'tq7a2', text: 'Astor Piazzolla' },
                { id: 'tq7a3', text: 'Enrique Saborido' },
                { id: 'tq7a4', text: 'Aníbal Troilo' }
            ],
            correctAnswerId: 'tq7a2',
            explanation: 'Astor Piazzolla revolutionized Tango by incorporating elements of Jazz and Classical music to create Nuevo Tango.'
        },
        {
            id: 'tq8',
            text: 'What is a "Glissando" often used for on the piano or violin in Tango?',
            options: [
                { id: 'tq8a1', text: 'To create a blurry sound' },
                { id: 'tq8a2', text: 'To mimic a sigh or sliding vocal effect' },
                { id: 'tq8a3', text: 'To hide mistakes' },
                { id: 'tq8a4', text: 'To change key' }
            ],
            correctAnswerId: 'tq8a2',
            explanation: 'Glissandi are used expressively in Tango to add drama and mimic the expressive "slides" of a singer.'
        },
        {
            id: 'tq9',
            text: 'Early Tango was influenced by the music of which group of people?',
            options: [
                { id: 'tq9a1', text: 'Russian immigrants' },
                { id: 'tq9a2', text: 'European sailors and African-descended people in Argentina' },
                { id: 'tq9a3', text: 'Japanese traders' },
                { id: 'tq9a4', text: 'Indigenous tribes of the Andes' }
            ],
            correctAnswerId: 'tq9a2',
            explanation: 'Early Tango (Guardia Vieja) was a melting pot of European (Polka, Waltz) and Afro-Argentine (Candombe) influences.'
        },
        {
            id: 'tq10',
            text: 'What is the "staccato" style of playing often called in Tango strings?',
            options: [
                { id: 'tq10a1', text: 'Pizzicato' },
                { id: 'tq10a2', text: 'Legato' },
                { id: 'tq10a3', text: 'Syncopation' },
                { id: 'tq10a4', text: 'Harsh/Crisp articulation' }
            ],
            correctAnswerId: 'tq10a4',
            explanation: 'Tango strings often use sharp, crisp articulation to provide rhythmic drive.'
        }
    ]
};

export const salsaQuiz: Quiz = {
    title: 'Salsa Rhythm & Style Quiz',
    questions: [
        {
            id: 'sq1',
            text: 'Which rhythmic pattern is the "heartbeat" of Salsa music?',
            options: [
                { id: 'sq1a1', text: 'The Clave' },
                { id: 'sq1a2', text: 'The Waltz' },
                { id: 'sq1a3', text: 'The Backbeat' },
                { id: 'sq1a4', text: 'The Shuffle' }
            ],
            correctAnswerId: 'sq1a1',
            explanation: 'The Clave (2-3 or 3-2 pattern) is the essential rhythmic foundation for all Salsa.'
        },
        {
            id: 'sq2',
            text: 'Which percussive instrument typically leads the "Mambo" or "Coro" section with a cowbell?',
            options: [
                { id: 'sq2a1', text: 'Congas' },
                { id: 'sq2a2', text: 'Timbales' },
                { id: 'sq2a3', text: 'Bongos' },
                { id: 'sq2a4', text: 'Maracas' }
            ],
            correctAnswerId: 'sq2a2',
            explanation: 'The timbalero often switches to a cowbell (cencerro) during high-energy sections like the Mambo.'
        },
        {
            id: 'sq3',
            text: 'What is a "Montuno" in Salsa?',
            options: [
                { id: 'sq3a1', text: 'A type of drum' },
                { id: 'sq3a2', text: 'A repetitive piano or guitar ostinato' },
                { id: 'sq3a3', text: 'A dance step' },
                { id: 'sq3a4', text: 'A singer\'s name' }
            ],
            correctAnswerId: 'sq3a2',
            explanation: 'The piano montuno (or guajeo) is a syncopated, repetitive pattern that provides the harmonic/rhythmic bed.'
        },
        {
            id: 'sq4',
            text: 'Salsa evolved largely in which city during the 1960s and 70s?',
            options: [
                { id: 'sq4a1', text: 'Havana' },
                { id: 'sq4a2', text: 'San Juan' },
                { id: 'sq4a3', text: 'New York City' },
                { id: 'sq4a4', text: 'Miami' }
            ],
            correctAnswerId: 'sq4a3',
            explanation: 'While rooted in Cuban music, modern Salsa as we know it was solidified by the Latino community in New York.'
        },
        {
            id: 'sq5',
            text: 'Which of these instruments provides the "Tumbao" pattern in Salsa?',
            options: [
                { id: 'sq5a1', text: 'Piano' },
                { id: 'sq5a2', text: 'Trumpet' },
                { id: 'sq5a3', text: 'Congas and Bass' },
                { id: 'sq5a4', text: 'Flute' }
            ],
            correctAnswerId: 'sq5a3',
            explanation: 'The "Tumbao" is a fundamental rhythm played by the congas and mirrored by the bass.'
        }
    ]
};

export const edmQuiz: Quiz = {
    title: 'EDM & Electronic Production Quiz',
    questions: [
        {
            id: 'eq1',
            text: 'What does "Four-on-the-floor" refer to in EDM?',
            options: [
                { id: 'eq1a1', text: 'Four dancers on stage' },
                { id: 'eq1a2', text: 'A steady kick drum hit on every quarter-note beat' },
                { id: 'eq1a3', text: 'Four speakers' },
                { id: 'eq1a4', text: 'A type of synth' }
            ],
            correctAnswerId: 'eq1a2',
            explanation: 'Four-on-the-floor is a rhythm pattern where the kick drum strikes on beats 1, 2, 3, and 4.'
        },
        {
            id: 'eq2',
            text: 'What is a "DAW" in the context of music production?',
            options: [
                { id: 'eq2a1', text: 'Digital Audio Workstation' },
                { id: 'eq2a2', text: 'Drum and Woodwind' },
                { id: 'eq2a3', text: 'Direct Audio Wire' },
                { id: 'eq2a4', text: 'Daily Audio Work' }
            ],
            correctAnswerId: 'eq2a1',
            explanation: 'A DAW (e.g., Ableton Live, Logic Pro) is the software used to produce electronic music.'
        },
        {
            id: 'eq3',
            text: 'What is a "Build-up" in an EDM track?',
            options: [
                { id: 'eq3a1', text: 'Constructing the stage' },
                { id: 'eq3a2', text: 'An increase in tension, tempo-density, or volume before the "Drop"' },
                { id: 'eq3a3', text: 'A long silence' },
                { id: 'eq3a4', text: 'The end of the song' }
            ],
            correctAnswerId: 'eq3a2',
            explanation: 'Build-ups use rising pitch, faster drum rolls, and filters to create anticipation.'
        },
        {
            id: 'eq4',
            text: 'What is the "Drop" in EDM?',
            options: [
                { id: 'eq4a1', text: 'When the music stops completely' },
                { id: 'eq4a2', text: 'The point of maximum intensity and energy after a build-up' },
                { id: 'eq4a3', text: 'Dropping the headphones' },
                { id: 'eq4a4', text: 'A slow section' }
            ],
            correctAnswerId: 'eq4a2',
            explanation: 'The "Drop" is the climax of the track, where the full bassline and lead melody kick in.'
        },
        {
            id: 'eq5',
            text: 'Which element is most responsible for the "electronic" sound of EDM?',
            options: [
                { id: 'eq5a1', text: 'Acoustic Guitar' },
                { id: 'eq5a2', text: 'The Synthesizer' },
                { id: 'eq5a3', text: 'A Grand Piano' },
                { id: 'eq5a4', text: 'Violin' }
            ],
            correctAnswerId: 'eq5a2',
            explanation: 'Synthesizers use oscillators to create a vast range of artificial/processed sounds.'
        }
    ]
};
