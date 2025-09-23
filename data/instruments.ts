// Instrument data structure based on the test content

export interface InstrumentFamily {
  id: string;
  name: string;
  description: string;
  imagePath: string;
}

export interface Instrument {
  id: string;
  name: string;
  description: string;
  familyId: string;
  imagePath: string;
  imagePathDetail?: string;
  audioPath?: string;
  videoUrl?: string;
  funFact?: string;
  origin?: string;
  classification?: string;
  material?: string;
  size?: string;
  range?: string;
}

export const instrumentFamilies: InstrumentFamily[] = [
  {
    id: 'strings',
    name: 'String Instruments',
    description: 'String instruments produce sound from vibrating strings. They can be played by plucking, strumming, or using a bow. The string family forms the foundation of the modern orchestra and includes some of the most versatile instruments in music.',
    imagePath: '/images/families/strings.jpg'
  },
  {
    id: 'woodwinds',
    name: 'Woodwind Instruments',
    description: 'Woodwind instruments produce sound when air is blown through them. They often have reeds or a special mouthpiece. Woodwinds are known for their expressive capabilities and wide tonal range, from the deep sounds of the bassoon to the bright tones of the piccolo.',
    imagePath: '/images/families/woodwinds.jpg'
  },
  {
    id: 'brass',
    name: 'Brass Instruments',
    description: 'Brass instruments produce sound when the player buzzes their lips into a cup-shaped mouthpiece. They are typically made of brass or other metals. Known for their powerful, bright sound, brass instruments are essential in orchestras, concert bands, and jazz ensembles.',
    imagePath: '/images/families/brass.jpg'
  },
  {
    id: 'percussion',
    name: 'Percussion Instruments',
    description: 'Percussion instruments produce sound when struck, shaken, or scraped. They include drums, cymbals, and other rhythm instruments. Percussion instruments are among the oldest musical instruments and are found in virtually every culture around the world.',
    imagePath: '/images/families/percussion.jpg'
  },
  {
    id: 'world',
    name: 'World Instruments',
    description: 'World instruments come from various cultures around the globe and include unique instruments not commonly found in Western orchestras. These instruments offer distinctive sounds and playing techniques that reflect the rich musical heritage of different regions.',
    imagePath: '/images/families/world.jpg'
  }
];

export const instruments: Instrument[] = [
  {
    id: 'sitar',
    name: 'Sitar',
    description: 'The sitar is a plucked stringed instrument, originating from the Indian subcontinent, used in Hindustani classical music. It derives its distinctive timbre and resonance from sympathetic strings, bridge design, and a gourd-shaped resonance chamber.',
    familyId: 'world',
    imagePath: '/images/instruments/Sitar.jpg',
    imagePathDetail: '/images/instruments/Sitar_views.jpg',
    audioPath: '/audio/sitar.mp3',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    funFact: 'The sitar became popular in Western music during the 1960s when George Harrison of The Beatles studied it with Indian musician Ravi Shankar.',
    origin: 'Indian subcontinent, 16th-17th century',
    classification: 'Plucked string instrument',
    material: 'Teak wood, gourd, brass, and steel strings',
    size: 'Large (about 4 feet long)',
    range: 'C3 to D6'
  },
  {
    id: 'violin',
    name: 'Violin',
    description: 'The violin is a wooden string instrument in the violin family. It is the smallest and highest-pitched instrument in the family in regular use. The violin typically has four strings and is played by drawing a bow across its strings or by plucking the strings with the fingers.',
    familyId: 'strings',
    imagePath: '/images/instruments/Violin.jpg',
    range: 'G3 to A7',
    material: 'Spruce top, maple back and sides, ebony fingerboard',
    origin: 'Italy, 16th century',
    classification: 'Bowed string instrument'
  },
  {
    id: 'clarinet',
    name: 'Clarinet',
    description: 'The clarinet is a family of woodwind instruments that have a single-reed mouthpiece, a straight cylindrical tube with an almost cylindrical bore, and a flared bell. A person who plays a clarinet is called a clarinetist or clarinettist.',
    familyId: 'woodwinds',
    imagePath: '/images/instruments/Clarinet.jpg',
    range: 'D3 to Bb6',
    material: 'Grenadilla wood or plastic, metal keys',
    origin: 'Germany, early 18th century',
    classification: 'Single-reed woodwind instrument'
  },
  {
    id: 'trumpet',
    name: 'Trumpet',
    description: 'The trumpet is a brass instrument commonly used in classical and jazz ensembles. The trumpet group ranges from the piccolo trumpet with the highest register in the brass family, to the bass trumpet, which is pitched one octave below the standard B♭ or C trumpet.',
    familyId: 'brass',
    imagePath: '/images/instruments/Trumpet.jpg',
    range: 'F#3 to D6',
    material: 'Brass with silver or gold plating',
    origin: 'Developed into its modern form in the late 14th and early 15th centuries',
    classification: 'Brass instrument'
  },
  {
    id: 'timpani',
    name: 'Timpani',
    description: 'Timpani or kettledrums are musical instruments in the percussion family. A type of drum categorized as a hemispherical drum, they consist of a membrane called a head stretched over a large bowl traditionally made of copper.',
    familyId: 'percussion',
    imagePath: '/images/instruments/Timpani.jpg',
    range: 'Variable, typically F2 to C4',
    material: 'Copper bowl, calfskin or synthetic head',
    origin: 'Middle East, introduced to Europe in the 13th century',
    classification: 'Pitched percussion instrument'
  },
  {
    id: 'bassoon',
    name: 'Bassoon',
    description: 'The bassoon is a woodwind instrument in the double reed family that typically plays music written in the bass and tenor clefs, and occasionally the treble. Appearing in its modern form in the 19th century, the bassoon figures prominently in orchestral, concert band, and chamber music literature.',
    familyId: 'woodwinds',
    imagePath: '/images/instruments/Bassoon.jpg',
    range: 'Bb1 to Eb5',
    material: 'Maple wood with metal keys and bocal',
    origin: 'Italy, 16th century, modern form developed in 19th century',
    classification: 'Double-reed woodwind instrument'
  },
  {
    id: 'koto',
    name: 'Koto',
    description: 'The koto is a traditional Japanese stringed musical instrument derived from the Chinese zheng. It is the national instrument of Japan. Koto are about 180 centimetres length, and made from kiri wood. They have 13 strings that are strung over 13 movable bridges along the width of the instrument.',
    familyId: 'world',
    imagePath: '/images/instruments/Koto.jpg',
    range: 'Typically spans about 3 octaves',
    material: 'Paulownia wood with silk or synthetic strings',
    origin: 'Japan, derived from Chinese zheng in the 7th to 8th century',
    classification: 'Plucked string instrument'
  }
];
// Utility functions
export function getInstrumentById(id: string): Instrument | undefined {
  return instruments.find(instrument => instrument.id === id);
}

export function getInstrumentFamily(familyId: string | undefined): InstrumentFamily | undefined {
  if (!familyId) return undefined;
  return instrumentFamilies.find(family => family.id === familyId);
}

export function getInstrumentsByFamily(familyId: string | undefined): Instrument[] {
  if (!familyId) return [];
  return instruments.filter(instrument => instrument.familyId === familyId);
}

export function getFamilyById(id: string): InstrumentFamily | undefined {
  return instrumentFamilies.find(family => family.id === id);
}