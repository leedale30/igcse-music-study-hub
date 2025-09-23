import { Quiz } from '../../types';
import { InstrumentData } from './instrumentsData';

export function generateInstrumentQuiz(instrument: InstrumentData): Quiz {
  const instrumentName = instrument.name;
  const instrumentId = instrument.id;
  
  // Get all unique families for wrong answers
  const allFamilies = ['Strings', 'Woodwinds', 'Brass', 'Percussion', 'Keyboard'];
  const correctFamily = instrument.family;
  const wrongFamilies = allFamilies.filter(family => family !== correctFamily).slice(0, 3);
  
  // Common materials for wrong answers
  const commonMaterials = ['Wood', 'Metal', 'Plastic', 'Bamboo', 'Leather', 'Steel', 'Brass', 'Bronze'];
  const correctMaterial = instrument.material;
  const wrongMaterials = commonMaterials.filter(material => 
    !correctMaterial.toLowerCase().includes(material.toLowerCase())
  ).slice(0, 3);
  
  // Common origins for wrong answers
  const commonOrigins = ['Europe', 'Asia', 'Africa', 'Americas', 'Middle East', 'Ancient Greece', 'Medieval times'];
  const correctOrigin = instrument.origins;
  
  return {
    title: `${instrumentName} Knowledge Quiz`,
    questions: [
      // Question 1: Family (always first)
      {
        id: `${instrumentId}_q1`,
        text: `What instrument family does the ${instrumentName.toLowerCase()} belong to?`,
        options: [
          { id: `${instrumentId}_q1_a1`, text: wrongFamilies[0] || 'Brass' },
          { id: `${instrumentId}_q1_a2`, text: correctFamily },
          { id: `${instrumentId}_q1_a3`, text: wrongFamilies[1] || 'Strings' },
          { id: `${instrumentId}_q1_a4`, text: wrongFamilies[2] || 'Percussion' },
        ],
        correctAnswerId: `${instrumentId}_q1_a2`,
        explanation: `The ${instrumentName.toLowerCase()} belongs to the ${correctFamily.toLowerCase()} family.`
      },
      
      // Question 2: Material
      {
        id: `${instrumentId}_q2`,
        text: `What is the ${instrumentName.toLowerCase()} primarily made of?`,
        options: [
          { id: `${instrumentId}_q2_a1`, text: wrongMaterials[0] || 'Plastic' },
          { id: `${instrumentId}_q2_a2`, text: extractMainMaterial(correctMaterial) },
          { id: `${instrumentId}_q2_a3`, text: wrongMaterials[1] || 'Steel' },
          { id: `${instrumentId}_q2_a4`, text: wrongMaterials[2] || 'Bamboo' },
        ],
        correctAnswerId: `${instrumentId}_q2_a2`,
        explanation: `The ${instrumentName.toLowerCase()} is made of: ${correctMaterial}`
      },
      
      // Question 3: Classification
      {
        id: `${instrumentId}_q3`,
        text: `How is the ${instrumentName.toLowerCase()} classified?`,
        options: [
          { id: `${instrumentId}_q3_a1`, text: 'Idiophone' },
          { id: `${instrumentId}_q3_a2`, text: extractClassification(instrument.classification) },
          { id: `${instrumentId}_q3_a3`, text: 'Membranophone' },
          { id: `${instrumentId}_q3_a4`, text: 'Electrophone' },
        ],
        correctAnswerId: `${instrumentId}_q3_a2`,
        explanation: instrument.classification
      },
      
      // Question 4: Origins
      {
        id: `${instrumentId}_q4`,
        text: `Where did the ${instrumentName.toLowerCase()} originate?`,
        options: [
          { id: `${instrumentId}_q4_a1`, text: extractMainOrigin(correctOrigin) },
          { id: `${instrumentId}_q4_a2`, text: 'Ancient Egypt' },
          { id: `${instrumentId}_q4_a3`, text: 'Medieval Europe' },
          { id: `${instrumentId}_q4_a4`, text: 'Modern America' },
        ],
        correctAnswerId: `${instrumentId}_q4_a1`,
        explanation: correctOrigin
      },
      
      // Question 5: Size/Physical characteristics
      {
        id: `${instrumentId}_q5`,
        text: `What is notable about the ${instrumentName.toLowerCase()}'s size?`,
        options: [
          { id: `${instrumentId}_q5_a1`, text: 'Very small and portable' },
          { id: `${instrumentId}_q5_a2`, text: extractSizeDescription(instrument.size) },
          { id: `${instrumentId}_q5_a3`, text: 'Extremely large' },
          { id: `${instrumentId}_q5_a4`, text: 'Standard orchestral size' },
        ],
        correctAnswerId: `${instrumentId}_q5_a2`,
        explanation: `Size: ${instrument.size}`
      },
      
      // Question 6: Pitch Range
      {
        id: `${instrumentId}_q6`,
        text: `What is the pitch range of the ${instrumentName.toLowerCase()}?`,
        options: [
          { id: `${instrumentId}_q6_a1`, text: 'Very high pitched only' },
          { id: `${instrumentId}_q6_a2`, text: extractPitchRange(instrument.pitchRange) },
          { id: `${instrumentId}_q6_a3`, text: 'Very low pitched only' },
          { id: `${instrumentId}_q6_a4`, text: 'Single note only' },
        ],
        correctAnswerId: `${instrumentId}_q6_a2`,
        explanation: `Pitch range: ${instrument.pitchRange}`
      },
      
      // Question 7: Playing technique (general)
      {
        id: `${instrumentId}_q7`,
        text: `How is the ${instrumentName.toLowerCase()} typically played?`,
        options: [
          { id: `${instrumentId}_q7_a1`, text: getPlayingTechnique(instrument.family, instrument.classification) },
          { id: `${instrumentId}_q7_a2`, text: 'By striking with mallets' },
          { id: `${instrumentId}_q7_a3`, text: 'By plucking strings' },
          { id: `${instrumentId}_q7_a4`, text: 'By pressing keys' },
        ],
        correctAnswerId: `${instrumentId}_q7_a1`,
        explanation: `The ${instrumentName.toLowerCase()} is played using techniques typical of ${instrument.family.toLowerCase()} instruments.`
      },
      
      // Question 8: Musical context
      {
        id: `${instrumentId}_q8`,
        text: `In what musical context is the ${instrumentName.toLowerCase()} most commonly used?`,
        options: [
          { id: `${instrumentId}_q8_a1`, text: 'Solo performances only' },
          { id: `${instrumentId}_q8_a2`, text: getMusicContext(instrument.family, correctOrigin) },
          { id: `${instrumentId}_q8_a3`, text: 'Electronic music only' },
          { id: `${instrumentId}_q8_a4`, text: 'Religious ceremonies only' },
        ],
        correctAnswerId: `${instrumentId}_q8_a2`,
        explanation: `The ${instrumentName.toLowerCase()} is commonly used in various musical contexts based on its family and cultural origins.`
      },
      
      // Question 9: Historical significance
      {
        id: `${instrumentId}_q9`,
        text: `What is historically significant about the ${instrumentName.toLowerCase()}?`,
        options: [
          { id: `${instrumentId}_q9_a1`, text: 'It was invented in the 21st century' },
          { id: `${instrumentId}_q9_a2`, text: getHistoricalSignificance(correctOrigin, instrument.family) },
          { id: `${instrumentId}_q9_a3`, text: 'It was only used in royal courts' },
          { id: `${instrumentId}_q9_a4`, text: 'It was banned in most countries' },
        ],
        correctAnswerId: `${instrumentId}_q9_a2`,
        explanation: `Historical context: ${correctOrigin}`
      },
      
      // Question 10: Additional characteristics
      {
        id: `${instrumentId}_q10`,
        text: `What additional characteristic is notable about the ${instrumentName.toLowerCase()}?`,
        options: [
          { id: `${instrumentId}_q10_a1`, text: 'It can only play one note' },
          { id: `${instrumentId}_q10_a2`, text: getAdditionalCharacteristic(instrument) },
          { id: `${instrumentId}_q10_a3`, text: 'It requires electricity to function' },
          { id: `${instrumentId}_q10_a4`, text: 'It is made entirely of glass' },
        ],
        correctAnswerId: `${instrumentId}_q10_a2`,
        explanation: instrument.additionalNotes || `The ${instrumentName.toLowerCase()} has unique characteristics that distinguish it from other instruments in its family.`
      }
    ]
  };
}

// Helper functions
function extractMainMaterial(material: string): string {
  const materials = material.toLowerCase();
  if (materials.includes('wood')) return 'Wood';
  if (materials.includes('metal') || materials.includes('brass') || materials.includes('steel')) return 'Metal';
  if (materials.includes('bamboo')) return 'Bamboo';
  if (materials.includes('leather')) return 'Leather';
  if (materials.includes('plastic')) return 'Plastic';
  return material.split(',')[0].trim() || 'Wood';
}

function extractClassification(classification: string): string {
  if (classification.toLowerCase().includes('aerophone')) return 'Aerophone';
  if (classification.toLowerCase().includes('chordophone')) return 'Chordophone';
  if (classification.toLowerCase().includes('membranophone')) return 'Membranophone';
  if (classification.toLowerCase().includes('idiophone')) return 'Idiophone';
  return 'Aerophone';
}

function extractMainOrigin(origins: string): string {
  const origin = origins.toLowerCase();
  if (origin.includes('africa')) return 'Africa';
  if (origin.includes('asia') || origin.includes('china') || origin.includes('japan') || origin.includes('india')) return 'Asia';
  if (origin.includes('europe') || origin.includes('germany') || origin.includes('france') || origin.includes('italy')) return 'Europe';
  if (origin.includes('america') || origin.includes('united states')) return 'Americas';
  if (origin.includes('middle east') || origin.includes('arabia')) return 'Middle East';
  return origins.split('.')[0].trim() || 'Unknown';
}

function extractSizeDescription(size: string): string {
  if (size.toLowerCase().includes('small') || size.toLowerCase().includes('portable')) return 'Small and portable';
  if (size.toLowerCase().includes('large') || size.toLowerCase().includes('big')) return 'Large instrument';
  if (size.includes('in') || size.includes('cm') || size.includes('ft')) return 'Medium-sized instrument';
  return 'Variable size';
}

function extractPitchRange(pitchRange: string): string {
  if (pitchRange.toLowerCase().includes('octave')) return pitchRange.split('.')[0];
  if (pitchRange.toLowerCase().includes('high')) return 'High pitch range';
  if (pitchRange.toLowerCase().includes('low')) return 'Low pitch range';
  return 'Wide pitch range';
}

function getPlayingTechnique(family: string, classification: string): string {
  const fam = family.toLowerCase();
  if (fam.includes('string')) return 'By bowing or plucking strings';
  if (fam.includes('woodwind')) return 'By blowing air through reeds or holes';
  if (fam.includes('brass')) return 'By buzzing lips into a mouthpiece';
  if (fam.includes('percussion')) return 'By striking or shaking';
  if (fam.includes('keyboard')) return 'By pressing keys';
  return 'By traditional playing techniques';
}

function getMusicContext(family: string, origins: string): string {
  const fam = family.toLowerCase();
  const orig = origins.toLowerCase();
  
  if (orig.includes('folk') || orig.includes('traditional')) return 'Folk and traditional music';
  if (fam.includes('string') || fam.includes('woodwind') || fam.includes('brass')) return 'Orchestral and chamber music';
  if (fam.includes('percussion')) return 'Ensemble and rhythmic music';
  return 'Various musical contexts';
}

function getHistoricalSignificance(origins: string, family: string): string {
  const orig = origins.toLowerCase();
  if (orig.includes('ancient')) return 'Has ancient historical origins';
  if (orig.includes('medieval')) return 'Developed during medieval times';
  if (orig.includes('century')) return 'Has centuries of musical tradition';
  return 'Has rich cultural and musical heritage';
}

function getAdditionalCharacteristic(instrument: InstrumentData): string {
  if (instrument.additionalNotes) {
    const notes = instrument.additionalNotes;
    if (notes.length > 50) return notes.substring(0, 47) + '...';
    return notes;
  }
  
  const family = instrument.family.toLowerCase();
  if (family.includes('woodwind')) return 'Produces sound through air vibration';
  if (family.includes('string')) return 'Sound produced by vibrating strings';
  if (family.includes('brass')) return 'Sound amplified through metal tubing';
  if (family.includes('percussion')) return 'Creates rhythm and percussive effects';
  return 'Has unique tonal characteristics';
}