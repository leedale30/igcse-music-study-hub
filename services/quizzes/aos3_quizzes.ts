
import { Quiz } from '../../types';

export const romanticIntroQuiz: Quiz = {
    title: 'Romantic Music: Introduction Quiz',
    questions: [
        {
            id: 'rom-intro-q1',
            text: 'What is the approximate date range of the Romantic period in music?',
            options: [
                { id: 'a', text: '1600-1750' },
                { id: 'b', text: '1750-1820' },
                { id: 'c', text: '1810-1900' },
                { id: 'd', text: '1900-present' }
            ],
            correctAnswerId: 'c',
            explanation: 'The Romantic period roughly spans from 1810 to 1900, following the Classical era.'
        },
        {
            id: 'rom-intro-q2',
            text: 'Which of these is a CORE characteristic of Romantic music?',
            options: [
                { id: 'a', text: 'Musical restraint and balance' },
                { id: 'b', text: 'Emotional expression and individualism' },
                { id: 'c', text: 'Strict adherence to formal structures' },
                { id: 'd', text: 'Small, chamber-sized orchestras only' }
            ],
            correctAnswerId: 'b',
            explanation: 'Romantic composers prioritized emotion, imagination, and personal expression over Classical restraint.'
        },
        {
            id: 'rom-intro-q3',
            text: 'What term describes music that seeks to tell a story or describe a scene?',
            options: [
                { id: 'a', text: 'Abstract music' },
                { id: 'b', text: 'Absolute music' },
                { id: 'c', text: 'Programme music' },
                { id: 'd', text: 'Polyphonic music' }
            ],
            correctAnswerId: 'c',
            explanation: 'Programme music is instrumental music associated with a story, poem, or scene.'
        },
        {
            id: 'rom-intro-q4',
            text: 'How did the Romantic orchestra differ from the Classical orchestra?',
            options: [
                { id: 'a', text: 'It became much smaller' },
                { id: 'b', text: 'It removed the brass section' },
                { id: 'c', text: 'It became larger and added newer instruments' },
                { id: 'd', text: 'It only used string instruments' }
            ],
            correctAnswerId: 'c',
            explanation: 'The Romantic orchestra expanded significantly, adding instruments like the piccolo, tuba, and more percussion.'
        },
        {
            id: 'rom-intro-q5',
            text: 'Which technique involves subtle speeding up and slowing down of the tempo for expression?',
            options: [
                { id: 'a', text: 'Staccato' },
                { id: 'b', text: 'Rubato' },
                { id: 'c', text: 'Legato' },
                { id: 'd', text: 'Pizzicato' }
            ],
            correctAnswerId: 'b',
            explanation: 'Rubato ("robbed time") is a hallmark of Romantic performance, allowing for flexible expression.'
        },
        {
            id: 'rom-intro-q6',
            text: 'Composers using folk dances and legends from their homeland are expressing:',
            options: [
                { id: 'a', text: 'Atheism' },
                { id: 'b', text: 'Serialism' },
                { id: 'c', text: 'Nationalism' },
                { id: 'd', text: 'Neo-classicism' }
            ],
            correctAnswerId: 'c',
            explanation: 'Musical nationalism was a major trend as composers sought to create a distinct identity for their countries.'
        },
        {
            id: 'rom-intro-q7',
            text: 'Which instrument underwent major mechanical improvements in the 19th century?',
            options: [
                { id: 'a', text: 'Harpsichord' },
                { id: 'b', text: 'Lute' },
                { id: 'c', text: 'Piano' },
                { id: 'd', text: 'Recorder' }
            ],
            correctAnswerId: 'c',
            explanation: 'The piano gained a cast-iron frame, more keys, and cross-stringing, allowing for greater power and range.'
        },
        {
            id: 'rom-intro-q8',
            text: 'What is a "Lied" (plural "Lieder")?',
            options: [
                { id: 'a', text: 'A long orchestral work' },
                { id: 'b', text: 'A German art song for voice and piano' },
                { id: 'c', text: 'A type of opera' },
                { id: 'd', text: 'A religious chant' }
            ],
            correctAnswerId: 'b',
            explanation: 'Lieder are Romantic art songs where the piano and voice are equal partners in conveying the poem\'s mood.'
        },
        {
            id: 'rom-intro-q9',
            text: 'Which composer is primary associated with virtuoso piano music?',
            options: [
                { id: 'a', text: 'J.S. Bach' },
                { id: 'b', text: 'Frédéric Chopin' },
                { id: 'c', text: 'Joseph Haydn' },
                { id: 'd', text: 'Antonio Vivaldi' }
            ],
            correctAnswerId: 'b',
            explanation: 'Chopin was the "poet of the piano," known for его expressive and technically demanding piano works.'
        },
        {
            id: 'rom-intro-q10',
            text: 'Chromaticism in Romantic music often led to:',
            options: [
                { id: 'a', text: 'Simpler harmonies' },
                { id: 'b', text: 'More predictable modulations' },
                { id: 'c', text: 'Increased dissonance and emotional tension' },
                { id: 'd', text: 'The end of major and minor keys' }
            ],
            correctAnswerId: 'c',
            explanation: 'Chromatic notes (outside the home key) added color, tension, and a sense of longing to the music.'
        },
        {
            id: 'rom-intro-q11',
            text: 'Which dynamic marking would be MORE common in the Romantic era than the Classical?',
            options: [
                { id: 'a', text: 'p' },
                { id: 'b', text: 'f' },
                { id: 'c', text: 'ffff' },
                { id: 'd', text: 'mf' }
            ],
            correctAnswerId: 'c',
            explanation: 'Romantic composers used extreme dynamic ranges, from ppp to ffff.'
        },
        {
            id: 'rom-intro-q12',
            text: 'A "Symphonic Poem" is usually:',
            options: [
                { id: 'a', text: 'A four-movement symphony' },
                { id: 'b', text: 'A single-movement orchestral work with a program' },
                { id: 'c', text: 'A solo piano piece' },
                { id: 'd', text: 'A choral work' }
            ],
            correctAnswerId: 'b',
            explanation: 'The symphonic poem (or tone poem) was pioneered by Lizst and refined by Smetana and Strauss.'
        },
        {
            id: 'rom-intro-q13',
            text: 'Through-composed form in Lieder means:',
            options: [
                { id: 'a', text: 'The music stays the same for every verse' },
                { id: 'b', text: 'The music changes to follow the story of each verse' },
                { id: 'c', text: 'There is only one verse' },
                { id: 'd', text: 'The singer and pianist alternate' }
            ],
            correctAnswerId: 'b',
            explanation: '"Durchkomponiert" means the music evolves with the text, never simply repeating a whole section.'
        },
        {
            id: 'rom-intro-q14',
            text: 'Which of these is a typical Romantic texture?',
            options: [
                { id: 'a', text: 'Thin, single-line monophony' },
                { id: 'b', text: 'Rich, layered homophony with pedal use on piano' },
                { id: 'c', text: 'Very strict 2-part counterpoint only' },
                { id: 'd', text: 'No texture at all' }
            ],
            correctAnswerId: 'b',
            explanation: 'Romantic textures are often dense, rich, and "sonorous," especially with the use of the sustaining pedal.'
        },
        {
            id: 'rom-intro-q15',
            text: 'Which IGCSE Focus Work represents Romantic nationalism?',
            options: [
                { id: 'a', text: 'Vivaldi\'s Spring' },
                { id: 'b', text: 'Haydn\'s "Joke" Quartet' },
                { id: 'c', text: 'Smetana\'s Vltava' },
                { id: 'd', text: 'Handel\'s Messiah' }
            ],
            correctAnswerId: 'c',
            explanation: 'Smetana\'s Vltava depicts the landscapes and legends of his beloved Bohemia.'
        },
        {
            id: 'rom-intro-q16',
            text: 'The "Virtuoso" perfromer was often treated like:',
            options: [
                { id: 'a', text: 'A servant' },
                { id: 'b', text: 'A rock star or celebrity' },
                { id: 'c', text: 'A background noise' },
                { id: 'd', text: 'A teacher only' }
            ],
            correctAnswerId: 'b',
            explanation: 'Performers like Liszt and Paganini gained fame for their incredible technical skills.'
        },
        {
            id: 'rom-intro-q17',
            text: 'What happened to melody in the Romantic era?',
            options: [
                { id: 'a', text: 'It became shorter and less important' },
                { id: 'b', text: 'It became longer, more lyrical and expansive' },
                { id: 'c', text: 'It was removed completely' },
                { id: 'd', text: 'It only used two notes' }
            ],
            correctAnswerId: 'b',
            explanation: 'Romantic melodies are known for their song-like ("bel canto") quality and long phrases.'
        },
        {
            id: 'rom-intro-q18',
            text: 'Which era came BEFORE the Romantic era?',
            options: [
                { id: 'a', text: 'Classical' },
                { id: 'b', text: 'Modern' },
                { id: 'c', text: 'Renaissance' },
                { id: 'd', text: 'Baroque' }
            ],
            correctAnswerId: 'a',
            explanation: 'The chronlogical order is Baroque -> Classical -> Romantic -> Modern.'
        },
        {
            id: 'rom-intro-q19',
            text: 'Harmony in the 19th century became more:',
            options: [
                { id: 'a', text: 'Functional and simple' },
                { id: 'b', text: 'Complex, using distant modulations' },
                { id: 'c', text: 'Trained to only use C major' },
                { id: 'd', text: 'Silent' }
            ],
            correctAnswerId: 'b',
            explanation: 'Composers explored "distant" keys that sounded exotic or dramatic compared to the home key.'
        },
        {
            id: 'rom-intro-q20',
            text: 'True or False: The pedal is essential for Romantic piano music.',
            options: [
                { id: 'a', text: 'True' },
                { id: 'b', text: 'False' }
            ],
            correctAnswerId: 'a',
            explanation: 'The sustaining (damper) pedal creates the warm, "ringing" quality typical of Romantic piano style.'
        }
    ]
};

export const vltavaQuiz: Quiz = {
    title: 'Focus Work: Smetana: Vltava Quiz',
    questions: [
        {
            id: 'vltava-q1',
            text: 'What is the genre of Smetana\'s "Vltava"?',
            options: [
                { id: 'a', text: 'Symphony' },
                { id: 'b', text: 'Symphonic Poem (Tone Poem)' },
                { id: 'c', text: 'Piano Concerto' },
                { id: 'd', text: 'String Quartet' }
            ],
            correctAnswerId: 'b',
            explanation: 'It is a single-movement orchestral work that tells a story, part of the cycle "My Homeland".'
        },
        {
            id: 'vltava-q2',
            text: 'The piece begins with two of which instrument to represent the springs?',
            options: [
                { id: 'a', text: 'Trumpets' },
                { id: 'b', text: 'Flutes' },
                { id: 'c', text: 'Bassoons' },
                { id: 'd', text: 'Violas' }
            ],
            correctAnswerId: 'b',
            explanation: 'Two flutes introduce the wavy, interlocking motifs of the cold and warm springs.'
        },
        {
            id: 'vltava-q3',
            text: 'What is the time signature of the main "River Theme"?',
            options: [
                { id: 'a', text: '2/4' },
                { id: 'b', text: '4/4' },
                { id: 'c', text: '6/8' },
                { id: 'd', text: '3/4' }
            ],
            correctAnswerId: 'c',
            explanation: 'The 6/8 compound time creates the flowing, wavy motion of the river.'
        },
        {
            id: 'vltava-q4',
            text: 'Which section features a lively polka rhythm?',
            options: [
                { id: 'a', text: 'The Forest Hunt' },
                { id: 'b', text: 'The Peasant Wedding' },
                { id: 'c', text: 'The Moonlight Dance' },
                { id: 'd', text: 'The Rapids' }
            ],
            correctAnswerId: 'b',
            explanation: 'The Peasant Wedding uses a 2/4 polka rhythm, depicting country celebrations.'
        },
        {
            id: 'vltava-q5',
            text: 'How does Smetana depict the hunting scene?',
            options: [
                { id: 'a', text: 'Violin solos' },
                { id: 'b', text: 'Hunting calls on horns and trumpets' },
                { id: 'c', text: 'Silence' },
                { id: 'd', text: 'Slow, funeral-like music' }
            ],
            correctAnswerId: 'b',
            explanation: 'The brass section (horns/trumpets) uses fanfares and "hunting" motifs.'
        },
        {
            id: 'vltava-q6',
            text: 'The "Moonlight" section features which orchestral effect on the strings?',
            options: [
                { id: 'a', text: 'Pizzicato (plucked)' },
                { id: 'b', text: 'Col Legno (with the wood)' },
                { id: 'c', text: 'Double stops' },
                { id: 'd', text: 'Muted strings (con sordini)' }
            ],
            correctAnswerId: 'd',
            explanation: 'Muted strings create the delicate, shimmering atmosphere of moonlight.'
        },
        {
            id: 'vltava-q7',
            text: 'The River Theme is based on what kind of melody?',
            options: [
                { id: 'a', text: 'A complex jazz riff' },
                { id: 'b', text: 'A folk-like melody originally from an Italian song' },
                { id: 'c', text: 'A religious hymn' },
                { id: 'd', text: 'It is entirely original to Smetana' }
            ],
            correctAnswerId: 'b',
            explanation: 'The melody is based on "La Mantovana," a popular European folk tune.'
        },
        {
            id: 'vltava-q8',
            text: 'What musical elements depict the "St. John\'s Rapids"?',
            options: [
                { id: 'a', text: 'Loud brass, rapid string scales, and percussion' },
                { id: 'b', text: 'A single flute playing softly' },
                { id: 'c', text: 'Ternary form' },
                { id: 'd', text: 'A slow waltz' }
            ],
            correctAnswerId: 'a',
            explanation: 'High energy, loud dynamics (ff), and thick texture represent the dangerous water.'
        },
        {
            id: 'vltava-q9',
            text: 'At the end of the piece, the river flows into WHICH city?',
            options: [
                { id: 'a', text: 'Vienna' },
                { id: 'b', text: 'Prague' },
                { id: 'c', text: 'London' },
                { id: 'd', text: 'Paris' }
            ],
            correctAnswerId: 'b',
            explanation: 'The river reaches its peak as it enters Prague, passing the Vyšehrad castle.'
        },
        {
            id: 'vltava-q10',
            text: 'What instrument represents the "Cold Spring" at the very beginning?',
            options: [
                { id: 'a', text: 'Oboe' },
                { id: 'b', text: 'Flute' },
                { id: 'c', text: 'Cello' },
                { id: 'd', text: 'Timpani' }
            ],
            correctAnswerId: 'b',
            explanation: 'The first flute represents the first spring.'
        },
        {
            id: 'vltava-q11',
            text: 'The Peasant Wedding is in which key?',
            options: [
                { id: 'a', text: 'E minor' },
                { id: 'b', text: 'G major' },
                { id: 'c', text: 'C major' },
                { id: 'd', text: 'F# minor' }
            ],
            correctAnswerId: 'b',
            explanation: 'The wedding scene shifts to G major for its cheerful, bright character.'
        },
        {
            id: 'vltava-q12',
            text: 'Which percussion instrument is notable in the Rapids section?',
            options: [
                { id: 'a', text: 'Guiro' },
                { id: 'b', text: 'Piccolo' },
                { id: 'c', text: 'Triangle' },
                { id: 'd', text: 'Cymbals / Bass Drum' }
            ],
            correctAnswerId: 'd',
            explanation: 'Loud cymbals and bass drum hits emphasize the power of the rapids.'
        },
        {
            id: 'vltava-q13',
            text: 'What is "Má Vlast"?',
            options: [
                { id: 'a', text: 'A type of Czech bread' },
                { id: 'b', text: 'A cycle of six symphonic poems' },
                { id: 'c', text: 'The name of Smetana\'s wife' },
                { id: 'd', text: 'A type of musical instrument' }
            ],
            correctAnswerId: 'b',
            explanation: 'Vltava is the second of six pieces in the cycle, titled "My Homeland".'
        },
        {
            id: 'vltava-q14',
            text: 'True or False: The River Theme returns in E major (tonic major) at the end.',
            options: [
                { id: 'a', text: 'True' },
                { id: 'b', text: 'False' }
            ],
            correctAnswerId: 'a',
            explanation: 'The theme returns in E Major as the river reaches Prague in a triumphant state.'
        },
        {
            id: 'vltava-q15',
            text: 'The wavy motion in the springs is created using which technique?',
            options: [
                { id: 'a', text: 'Large chords' },
                { id: 'b', text: 'Arpeggiated scalar passages' },
                { id: 'c', text: 'Silent pauses' },
                { id: 'd', text: 'Only long notes' }
            ],
            correctAnswerId: 'b',
            explanation: 'Rapid arpeggios and scales in woodwinds depict flowing water.'
        },
        {
            id: 'vltava-q16',
            text: 'The "Moonlight" section uses which high woodwind for color?',
            options: [
                { id: 'a', text: 'Tuba' },
                { id: 'b', text: 'Double Bass' },
                { id: 'c', text: 'Flutes and Clarinets' },
                { id: 'd', text: 'Timpani' }
            ],
            correctAnswerId: 'c',
            explanation: 'Legato flutes and clarinets add to the ethereal night-time atmosphere.'
        },
        {
            id: 'vltava-q17',
            text: 'Which family of instruments leads the "Vyšehrad" castle theme?',
            options: [
                { id: 'a', text: 'Percussion' },
                { id: 'b', text: 'Brass and Woodwind (chorale style)' },
                { id: 'c', text: 'Solo violin' },
                { id: 'd', text: 'Quiet harp only' }
            ],
            correctAnswerId: 'b',
            explanation: 'A broad chorale in the brass and winds represents the majestic legendary castle.'
        },
        {
            id: 'vltava-q18',
            text: 'The time signature for the Polka (Wedding) is:',
            options: [
                { id: 'a', text: '3/4' },
                { id: 'b', text: '4/4' },
                { id: 'c', text: '2/4' },
                { id: 'd', text: '6/8' }
            ],
            correctAnswerId: 'c',
            explanation: 'Polkas are traditionally in a lively 2/4 time.'
        },
        {
            id: 'vltava-q19',
            text: 'What happens to the Vltava theme at the very end?',
            options: [
                { id: 'a', text: 'It gets louder and louder' },
                { id: 'b', text: 'It fades away (diminuendo) as it joins the Elbe' },
                { id: 'c', text: 'It turns into a rock song' },
                { id: 'd', text: 'It stops suddenly' }
            ],
            correctAnswerId: 'b',
            explanation: 'The music gradually dies away as the river disappears from view.'
        },
        {
            id: 'vltava-q20',
            text: 'Smetana was a composer from which modern-day country?',
            options: [
                { id: 'a', text: 'Germany' },
                { id: 'b', text: 'Czech Republic (formerly Bohemia)' },
                { id: 'c', text: 'Italy' },
                { id: 'd', text: 'Spain' }
            ],
            correctAnswerId: 'b',
            explanation: 'Smetana is often called the father of Czech music.'
        }
    ]
};

export const romanticPianoQuiz: Quiz = {
    title: 'Romantic Piano Music Quiz',
    questions: [
        {
            id: 'rom-piano-q1',
            text: 'Which instrument became the center of musical life in the Romantic home?',
            options: [
                { id: 'a', text: 'Harpsichord' },
                { id: 'b', text: 'Piano' },
                { id: 'c', text: 'Violin' },
                { id: 'd', text: 'Flute' }
            ],
            correctAnswerId: 'b',
            explanation: 'The piano was extremely popular for both concert performance and amateur music-making at home.'
        },
        {
            id: 'rom-piano-q2',
            text: 'What mechanical improvement allowed the Romantic piano to play louder and sustain notes longer?',
            options: [
                { id: 'a', text: 'Plastic keys' },
                { id: 'b', text: 'A cast-iron frame' },
                { id: 'c', text: 'Electronic amplifiers' },
                { id: 'd', text: 'Removal of the lid' }
            ],
            correctAnswerId: 'b',
            explanation: 'The cast-iron frame supported the high tension of thicker strings, providing more power and resonance.'
        },
        {
            id: 'rom-piano-q3',
            text: 'Frédéric Chopin was famously known as the:',
            options: [
                { id: 'a', text: 'Father of the Symphony' },
                { id: 'b', text: 'Poet of the Piano' },
                { id: 'c', text: 'Master of the Fugue' },
                { id: 'd', text: 'King of Opera' }
            ],
            correctAnswerId: 'b',
            explanation: 'Chopin specialized almost exclusively in solo piano music, known for its lyrical and sensitive quality.'
        },
        {
            id: 'rom-piano-q4',
            text: 'Which of these is a "short" Romantic piano genre (character piece)?',
            options: [
                { id: 'a', text: 'Symphony' },
                { id: 'b', text: 'Nocturne' },
                { id: 'c', text: 'Oratorio' },
                { id: 'd', text: 'Mass' }
            ],
            correctAnswerId: 'b',
            explanation: 'Nocturnes ("night pieces") are short, evocative character pieces popular in the Romantic era.'
        },
        {
            id: 'rom-piano-q5',
            text: 'Franz Liszt was a pioneer of the piano "recital" and was known for his:',
            options: [
                { id: 'a', text: 'Shyness' },
                { id: 'b', text: 'Extreme virtuosity and showmanship' },
                { id: 'c', text: 'Simple, easy-to-play music' },
                { id: 'd', text: 'Dislike of the piano' }
            ],
            correctAnswerId: 'b',
            explanation: 'Liszt was a superstar performer who revolutionized piano technique with his "transcendental" difficulty.'
        },
        {
            id: 'rom-piano-q6',
            text: 'What does the "sustaining pedal" (damper pedal) do?',
            options: [
                { id: 'a', text: 'It makes the notes louder' },
                { id: 'b', text: 'It lifts all dampers, allowing strings to vibrate freely' },
                { id: 'c', text: 'It changes the pitch of the notes' },
                { id: 'd', text: 'It stops the music' }
            ],
            correctAnswerId: 'b',
            explanation: 'The pedal allows notes to ring out even after the keys are released, creating a rich "wash" of sound.'
        },
        {
            id: 'rom-piano-q7',
            text: 'A "Polonaise" or "Mazurka" by Chopin reflects which trend?',
            options: [
                { id: 'a', text: 'Impressionism' },
                { id: 'b', text: 'Nationalism (Polish roots)' },
                { id: 'c', text: 'Jazz' },
                { id: 'd', text: 'Atonality' }
            ],
            correctAnswerId: 'b',
            explanation: 'These were traditional Polish dances that Chopin used to express his national identity.'
        },
        {
            id: 'rom-piano-q8',
            text: 'What is an "Étude"?',
            options: [
                { id: 'a', text: 'A slow, sad song' },
                { id: 'b', text: 'A study piece designed to master a specific technical skill' },
                { id: 'c', text: 'A church hymn' },
                { id: 'd', text: 'The end of a concert' }
            ],
            correctAnswerId: 'b',
            explanation: 'Chopin and Liszt turned études into concert-worthy masterpieces while still focusing on technical challenges.'
        },
        {
            id: 'rom-piano-q9',
            text: 'Which term describes a melody that sounds like it is being "sung" on the piano?',
            options: [
                { id: 'a', text: 'Cantabile' },
                { id: 'b', text: 'Marcato' },
                { id: 'c', text: 'Glissando' },
                { id: 'd', text: 'Staccato' }
            ],
            correctAnswerId: 'a',
            explanation: '"Cantabile" means "in a singing style," a key goal for Romantic piano melodies.'
        },
        {
            id: 'rom-piano-q10',
            text: 'The range of the piano expanded to how many octaves in the late 19th century?',
            options: [
                { id: 'a', text: '4' },
                { id: 'b', text: '7 or more' },
                { id: 'c', text: '2' },
                { id: 'd', text: '12' }
            ],
            correctAnswerId: 'b',
            explanation: 'The modern piano has 88 keys, covering fully 7 octaves plus a few extra notes.'
        },
        {
            id: 'rom-piano-q11',
            text: 'Chopin\'s "Revolutionary" Étude was inspired by:',
            options: [
                { id: 'a', text: 'A quiet walk in the park' },
                { id: 'b', text: 'The Russian invasion of Poland' },
                { id: 'c', text: 'A bird singing' },
                { id: 'd', text: 'A dream about heaven' }
            ],
            correctAnswerId: 'b',
            explanation: 'It is a piece full of turmoil and anger, reflecting his feelings about his homeland\'s struggle.'
        },
        {
            id: 'rom-piano-q12',
            text: 'Which hand usually plays the complex, decorative melody in a Chopin Nocturne?',
            options: [
                { id: 'a', text: 'Left hand' },
                { id: 'b', text: 'Right hand' }
            ],
            correctAnswerId: 'b',
            explanation: 'The right hand often performs "fioritura" (flowery) melodic decorations over a simpler left-hand accompaniment.'
        },
        {
            id: 'rom-piano-q13',
            text: 'True or False: Liszt was the first pianist to turn the piano sideways on stage.',
            options: [
                { id: 'a', text: 'True' },
                { id: 'b', text: 'False' }
            ],
            correctAnswerId: 'a',
            explanation: 'Liszt did this so the audience could see the pianist\'s profile and hands, creating the modern concert look.'
        },
        {
            id: 'rom-piano-q14',
            text: 'What is a "Prelude"?',
            options: [
                { id: 'a', text: 'A very long symphony' },
                { id: 'b', text: 'A short introductory piece' },
                { id: 'c', text: 'A dance for four people' },
                { id: 'd', text: 'A type of piano tuning' }
            ],
            correctAnswerId: 'b',
            explanation: 'Chopin wrote a famous set of 24 Preludes, one in every major and minor key.'
        },
        {
            id: 'rom-piano-q15',
            text: 'Romantic piano music often features WHICH type of texture?',
            options: [
                { id: 'a', text: 'Monophonic (voice only)' },
                { id: 'b', text: 'Homophonic (melody and accompaniment)' },
                { id: 'c', text: 'Strictly polyphonic fugue only' },
                { id: 'd', text: 'Silent' }
            ],
            correctAnswerId: 'b',
            explanation: 'While complex, the most common structure is a beautiful melody supported by rich, pedaled chords or arpeggios.'
        },
        {
            id: 'rom-piano-q16',
            text: 'The "soft pedal" (una corda) works by:',
            options: [
                { id: 'a', text: 'Muting the singer' },
                { id: 'b', text: 'Shifting the hammers so they strike fewer strings' },
                { id: 'c', text: 'Turning off the power' },
                { id: 'd', text: 'Opening the windows' }
            ],
            correctAnswerId: 'b',
            explanation: 'It creates a softer, more delicate "veiled" tone.'
        },
        {
            id: 'rom-piano-q17',
            text: 'Which composer wrote "Kinderszenen" (Scenes from Childhood)?',
            options: [
                { id: 'a', text: 'Robert Schumann' },
                { id: 'b', text: 'Mozart' },
                { id: 'c', text: 'Beethoven' },
                { id: 'd', text: 'Stravinsky' }
            ],
            correctAnswerId: 'a',
            explanation: 'Robert Schumann was a master of the poetic character piece for piano.'
        },
        {
            id: 'rom-piano-q18',
            text: 'A "Scherzo" in the Romantic period is usually:',
            options: [
                { id: 'a', text: 'Slow and funeral-like' },
                { id: 'b', text: 'Fast, playful, and sometimes dark/intense' },
                { id: 'c', text: 'A religious hymn' },
                { id: 'd', text: 'A short dance for children' }
            ],
            correctAnswerId: 'b',
            explanation: 'Chopin\'s Scherzos are far from "jokes"—they are massive, dramatic, and difficult works.'
        },
        {
            id: 'rom-piano-q19',
            text: 'What are "Accompaniment Figures"?',
            options: [
                { id: 'a', text: 'The people watching the concert' },
                { id: 'b', text: 'Repeated patterns (like arpeggios) played by the left hand' },
                { id: 'c', text: 'The decorations on the piano' },
                { id: 'd', text: 'The page turners' }
            ],
            correctAnswerId: 'b',
            explanation: 'Patterns like the "Alberti Bass" or wide-spaced arpeggios are common accompaniment figures.'
        },
        {
            id: 'rom-piano-q20',
            text: 'Which of these is most important for a Romantic piano "Ballade"?',
            options: [
                { id: 'a', text: 'Strict adherence to sonata form' },
                { id: 'b', text: 'A narrative, story-telling quality' },
                { id: 'c', text: 'Being as short as possible' },
                { id: 'd', text: 'Not using any pedals' }
            ],
            correctAnswerId: 'b',
            explanation: 'Ballades are large-scale works inspired by literature and epic stories.'
        }
    ]
};

export const romanticLiederQuiz: Quiz = {
    title: 'German Lieder Quiz',
    questions: [
        {
            id: 'rom-lied-q1',
            text: 'What does the German word "Lied" mean?',
            options: [
                { id: 'a', text: 'Light' },
                { id: 'b', text: 'Leader' },
                { id: 'c', text: 'Song' },
                { id: 'd', text: 'Life' }
            ],
            correctAnswerId: 'c',
            explanation: '"Lied" (plural "Lieder") is the German word for song.'
        },
        {
            id: 'rom-lied-q2',
            text: 'Who is considered the most prolific and famous composer of Lieder?',
            options: [
                { id: 'a', text: 'Franz Schubert' },
                { id: 'b', text: 'Richard Wagner' },
                { id: 'c', text: 'Johann Sebastian Bach' },
                { id: 'd', text: 'Igor Stravinsky' }
            ],
            correctAnswerId: 'a',
            explanation: 'Schubert wrote over 600 Lieder in his short life.'
        },
        {
            id: 'rom-lied-q3',
            text: 'In true Romantic Lieder, the piano is:',
            options: [
                { id: 'a', text: 'Less important than the singer' },
                { id: 'b', text: 'An equal partner to the singer, helping tell the story' },
                { id: 'c', text: 'Not used at all' },
                { id: 'd', text: 'Only used for the introduction' }
            ],
            correctAnswerId: 'b',
            explanation: 'The piano part often uses "word painting" to reflect the poem\'s mood and imagery.'
        },
        {
            id: 'rom-lied-q4',
            text: 'What form uses the SAME music for every verse of the poem?',
            options: [
                { id: 'a', text: 'Through-composed' },
                { id: 'b', text: 'Strophic' },
                { id: 'c', text: 'Binary' },
                { id: 'd', text: 'Fugal' }
            ],
            correctAnswerId: 'b',
            explanation: 'Strophic form (like a modern hymn or pop song) repeats the music for each stanza.'
        },
        {
            id: 'rom-lied-q5',
            text: 'What form uses NEW music for each verse to follow the story?',
            options: [
                { id: 'a', text: 'Strophic' },
                { id: 'b', text: 'Through-composed (Durchkomponiert)' },
                { id: 'c', text: 'Ternary' },
                { id: 'd', text: 'Ground Bass' }
            ],
            correctAnswerId: 'b',
            explanation: 'Through-composed songs allow the composer to react to every emotional shift in the text.'
        },
        {
            id: 'rom-lied-q6',
            text: 'What is a "Song Cycle"?',
            options: [
                { id: 'a', text: 'A song about a bicycle' },
                { id: 'b', text: 'A group of Lieder designed to be performed together, often telling a story' },
                { id: 'c', text: 'A song that repeats forever' },
                { id: 'd', text: 'A type of musical instrument' }
            ],
            correctAnswerId: 'b',
            explanation: 'Examples include Schubert\'s "Winterreise" and Schumann\'s "Dichterliebe".'
        },
        {
            id: 'rom-lied-q7',
            text: 'Which language is used for IGCSE Romantic Lieder?',
            options: [
                { id: 'a', text: 'English' },
                { id: 'b', text: 'German' },
                { id: 'c', text: 'Italian' },
                { id: 'd', text: 'French' }
            ],
            correctAnswerId: 'b',
            explanation: 'The genre developed from German Romantic poetry.'
        },
        {
            id: 'rom-lied-q8',
            text: 'The piano part in "Der Erlkönig" (The Erlking) depicts:',
            options: [
                { id: 'a', text: 'A calm river' },
                { id: 'b', text: 'A galloping horse' },
                { id: 'c', text: 'A bird singing' },
                { id: 'd', text: 'Silence' }
            ],
            correctAnswerId: 'b',
            explanation: 'Rapid triplets in the right hand mimic the pounding hooves of the horse.'
        },
        {
            id: 'rom-lied-q9',
            text: 'Which composer married Clara Wieck and wrote "Year of Song" in 1840?',
            options: [
                { id: 'a', text: 'Robert Schumann' },
                { id: 'b', text: 'Brahms' },
                { id: 'c', text: 'Liszt' },
                { id: 'd', text: 'Berlioz' }
            ],
            correctAnswerId: 'a',
            explanation: 'Schumann wrote nearly 140 songs in a single year inspired by his love for Clara.'
        },
        {
            id: 'rom-lied-q10',
            text: 'What is "Word Painting" (Madrigalism)?',
            options: [
                { id: 'a', text: 'Painting a picture of the singer' },
                { id: 'b', text: 'Writing music that literally reflects the meaning of the words' },
                { id: 'c', text: 'Singing without lyrics' },
                { id: 'd', text: 'Using very loud dynamics' }
            ],
            correctAnswerId: 'b',
            explanation: 'E.g., high notes for "heaven" or chromatic descents for "sorrow".'
        },
        {
            id: 'rom-lied-q11',
            text: 'A "Modified Strophic" song is one where:',
            options: [
                { id: 'a', text: 'There are no verses' },
                { id: 'b', text: 'The music is mostly the same but varies for dramatic effect' },
                { id: 'c', text: 'The singer and pianist switch roles' },
                { id: 'd', text: 'The music is randomly generated' }
            ],
            correctAnswerId: 'b',
            explanation: 'It combines the repetition of strophic with some of the flexibility of through-composed.'
        },
        {
            id: 'rom-lied-q12',
            text: 'Who wrote the poetry for many of Schubert\'s songs (including "Erlkönig")?',
            options: [
                { id: 'a', text: 'William Shakespeare' },
                { id: 'b', text: 'Johann Wolfgang von Goethe' },
                { id: 'c', text: 'Victor Hugo' },
                { id: 'd', text: 'Mark Twain' }
            ],
            correctAnswerId: 'b',
            explanation: 'Goethe was the preeminent German Romantic poet.'
        },
        {
            id: 'rom-lied-q13',
            text: 'Lieder are usually performed in:',
            options: [
                { id: 'a', text: 'Large football stadiums' },
                { id: 'b', text: 'Intimate settings like salons or small concert halls' },
                { id: 'c', text: 'Only in churches' },
                { id: 'd', text: 'Underwater' }
            ],
            correctAnswerId: 'b',
            explanation: 'Lieder are essentially "chamber music," designed for close-up emotional sharing.'
        },
        {
            id: 'rom-lied-q14',
            text: 'The "mood" of a Lied is often set by:',
            options: [
                { id: 'a', text: 'The piano introduction' },
                { id: 'b', text: 'The applause from the audience' },
                { id: 'c', text: 'The color of the singer\'s shoes' },
                { id: 'd', text: 'The price of the ticket' }
            ],
            correctAnswerId: 'a',
            explanation: 'The piano prelude establishes the tempo, key, and emotional atmosphere before the singer begins.'
        },
        {
            id: 'rom-lied-q15',
            text: 'Which of these is a typical Lieder topic?',
            options: [
                { id: 'a', text: 'Computer science' },
                { id: 'b', text: 'Unrequited love and nature' },
                { id: 'c', text: 'Cooking recipes' },
                { id: 'd', text: 'Industrial manufacturing' }
            ],
            correctAnswerId: 'b',
            explanation: 'Romantic poets and composers were obsessed with love, longing, and the great outdoors.'
        },
        {
            id: 'rom-lied-q16',
            text: 'In Schubert\'s "Die Forelle" (The Trout), the piano mimics:',
            options: [
                { id: 'a', text: 'A bird flying' },
                { id: 'b', text: 'A fish leaping in water' },
                { id: 'c', text: 'A storm blowing' },
                { id: 'd', text: 'A clock ticking' }
            ],
            correctAnswerId: 'b',
            explanation: 'Sparkling ascending figures depict the trout swimming in a brook.'
        },
        {
            id: 'rom-lied-q17',
            text: 'True or False: Romantic Lieder can be for any voice type (Soprano, Tenor, etc.).',
            options: [
                { id: 'a', text: 'True' },
                { id: 'b', text: 'False' }
            ],
            correctAnswerId: 'a',
            explanation: 'Lieder are written for all voice ranges depending on the poem and composer\'s intent.'
        },
        {
            id: 'rom-lied-q18',
            text: 'Clara Schumann was EQUALLY famous as a singer as she was a pianist.',
            options: [
                { id: 'a', text: 'True' },
                { id: 'b', text: 'False' }
            ],
            correctAnswerId: 'b',
            explanation: 'Clara was one of the greatest *pianists* of the age, though she also composed songs.'
        },
        {
            id: 'rom-lied-q19',
            text: 'What happens in a "Piano Postlude" in a Lied?',
            options: [
                { id: 'a', text: 'The singer keeps singing' },
                { id: 'b', text: 'The piano plays alone after the singer finishes to conclude the mood' },
                { id: 'c', text: 'The piano is silenced' },
                { id: 'd', text: 'The audience leaves' }
            ],
            correctAnswerId: 'b',
            explanation: 'The postlude allows the listener to reflect on the song\'s final emotional impact.'
        },
        {
            id: 'rom-lied-q20',
            text: 'Which of these is NOT a German Lieder composer?',
            options: [
                { id: 'a', text: 'Franz Schubert' },
                { id: 'b', text: 'Robert Schumann' },
                { id: 'c', text: 'Johannes Brahms' },
                { id: 'd', text: 'Giuseppe Verdi' }
            ],
            correctAnswerId: 'd',
            explanation: 'Verdi was an Italian *opera* composer.'
        }
    ]
};
