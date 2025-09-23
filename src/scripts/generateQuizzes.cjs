const fs = require('fs');
const path = require('path');

// Read the instruments data file
const instrumentsDataPath = path.join(__dirname, '../data/instrumentsData.ts');
const instrumentsContent = fs.readFileSync(instrumentsDataPath, 'utf8');

// Extract all instrument objects
const instrumentObjects = [];
const lines = instrumentsContent.split('\n');
let currentInstrument = null;
let inInstrument = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  if (line.includes('"id":')) {
    if (currentInstrument) {
      instrumentObjects.push(currentInstrument);
    }
    const idMatch = line.match(/"id":\s*"([^"]+)"/);
    if (idMatch) {
      currentInstrument = { id: idMatch[1] };
      inInstrument = true;
    }
  } else if (inInstrument && currentInstrument) {
    if (line.includes('"name":')) {
      const nameMatch = line.match(/"name":\s*"([^"]+)"/);
      if (nameMatch) currentInstrument.name = nameMatch[1];
    } else if (line.includes('"family":')) {
      const familyMatch = line.match(/"family":\s*"([^"]+)"/);
      if (familyMatch) currentInstrument.family = familyMatch[1];
    } else if (line.includes('"material":')) {
      const materialMatch = line.match(/"material":\s*"([^"]+)"/);
      if (materialMatch) currentInstrument.material = materialMatch[1];
    } else if (line.includes('"pitchRange":')) {
      const pitchMatch = line.match(/"pitchRange":\s*"([^"]+)"/);
      if (pitchMatch) currentInstrument.pitchRange = pitchMatch[1];
    } else if (line.includes('"size":')) {
      const sizeMatch = line.match(/"size":\s*"([^"]+)"/);
      if (sizeMatch) currentInstrument.size = sizeMatch[1];
    } else if (line.includes('"origins":')) {
      const originsMatch = line.match(/"origins":\s*"([^"]+)"/);
      if (originsMatch) currentInstrument.origins = originsMatch[1];
    } else if (line.includes('"classification":')) {
      const classMatch = line.match(/"classification":\s*"([^"]+)"/);
      if (classMatch) currentInstrument.classification = classMatch[1];
    } else if (line.includes('"additionalNotes":')) {
      const notesMatch = line.match(/"additionalNotes":\s*"([^"]+)"/);
      if (notesMatch) currentInstrument.additionalNotes = notesMatch[1];
    }
  }
}

// Add the last instrument
if (currentInstrument) {
  instrumentObjects.push(currentInstrument);
}

console.log(`Found ${instrumentObjects.length} instruments`);

// Function to generate quiz questions for an instrument
function generateInstrumentQuiz(instrument) {
  const { id, name, family, material, pitchRange, size, origins, classification, additionalNotes } = instrument;
  
  // Determine correct family option
  let familyCorrectId = 'a4'; // Default to Percussion
  if (family === 'Brass') familyCorrectId = 'a1';
  else if (family === 'Woodwinds') familyCorrectId = 'a2';
  else if (family === 'Strings') familyCorrectId = 'a3';
  
  const quiz = {
    title: `${name} Knowledge Quiz`,
    questions: [
      {
        id: `${id}_q1`,
        text: `What instrument family does the ${name.toLowerCase()} belong to?`,
        options: [
          { id: `${id}_q1_a1`, text: 'Brass' },
          { id: `${id}_q1_a2`, text: 'Woodwinds' },
          { id: `${id}_q1_a3`, text: 'Strings' },
          { id: `${id}_q1_a4`, text: 'Percussion' }
        ],
        correctAnswerId: `${id}_q1_${familyCorrectId}`,
        explanation: `The ${name.toLowerCase()} belongs to the ${family ? family.toLowerCase() : 'unknown'} family.`
      },
      {
        id: `${id}_q2`,
        text: `What is the ${name.toLowerCase()} primarily made of?`,
        options: [
          { id: `${id}_q2_a1`, text: 'Plastic' },
          { id: `${id}_q2_a2`, text: material || 'Various materials' },
          { id: `${id}_q2_a3`, text: 'Glass' },
          { id: `${id}_q2_a4`, text: 'Paper' }
        ],
        correctAnswerId: `${id}_q2_a2`,
        explanation: `The ${name.toLowerCase()} is made of: ${material || 'various materials'}.`
      },
      {
        id: `${id}_q3`,
        text: `How is the ${name.toLowerCase()} classified?`,
        options: [
          { id: `${id}_q3_a1`, text: 'Idiophone' },
          { id: `${id}_q3_a2`, text: 'Aerophone' },
          { id: `${id}_q3_a3`, text: 'Chordophone' },
          { id: `${id}_q3_a4`, text: 'Membranophone' }
        ],
        correctAnswerId: `${id}_q3_a${classification && classification.includes('Aerophone') ? '2' : classification && classification.includes('Chordophone') ? '3' : classification && classification.includes('Membranophone') ? '4' : '1'}`,
        explanation: classification || `The ${name.toLowerCase()} has a specific classification based on how it produces sound.`
      },
      {
        id: `${id}_q4`,
        text: `What is the pitch range of the ${name.toLowerCase()}?`,
        options: [
          { id: `${id}_q4_a1`, text: 'Very high pitched only' },
          { id: `${id}_q4_a2`, text: pitchRange || 'Variable range' },
          { id: `${id}_q4_a3`, text: 'Very low pitched only' },
          { id: `${id}_q4_a4`, text: 'Single note only' }
        ],
        correctAnswerId: `${id}_q4_a2`,
        explanation: `Pitch range: ${pitchRange || 'The range varies depending on the specific instrument'}.`
      },
      {
        id: `${id}_q5`,
        text: `What is notable about the ${name.toLowerCase()}'s size?`,
        options: [
          { id: `${id}_q5_a1`, text: 'Very small and portable' },
          { id: `${id}_q5_a2`, text: size || 'Standard size' },
          { id: `${id}_q5_a3`, text: 'Extremely large' },
          { id: `${id}_q5_a4`, text: 'Microscopic' }
        ],
        correctAnswerId: `${id}_q5_a2`,
        explanation: `Size: ${size || 'The size varies depending on the specific type'}.`
      },
      {
        id: `${id}_q6`,
        text: `Where did the ${name.toLowerCase()} originate?`,
        options: [
          { id: `${id}_q6_a1`, text: 'Modern invention' },
          { id: `${id}_q6_a2`, text: origins ? origins.substring(0, 50) + '...' : 'Historical origins' },
          { id: `${id}_q6_a3`, text: 'Unknown origins' },
          { id: `${id}_q6_a4`, text: 'Space technology' }
        ],
        correctAnswerId: `${id}_q6_a2`,
        explanation: origins || `The ${name.toLowerCase()} has historical origins that trace back through musical traditions.`
      },
      {
        id: `${id}_q7`,
        text: `How is the ${name.toLowerCase()} typically played?`,
        options: [
          { id: `${id}_q7_a1`, text: family === 'Strings' ? 'By bowing or plucking' : family === 'Brass' ? 'By buzzing lips into mouthpiece' : family === 'Woodwinds' ? 'By blowing air through reeds or holes' : 'By striking or shaking' },
          { id: `${id}_q7_a2`, text: 'By pressing computer keys' },
          { id: `${id}_q7_a3`, text: 'By remote control' },
          { id: `${id}_q7_a4`, text: 'Automatically' }
        ],
        correctAnswerId: `${id}_q7_a1`,
        explanation: `The ${name.toLowerCase()} is played using techniques typical of ${family ? family.toLowerCase() : 'its instrument family'}.`
      },
      {
        id: `${id}_q8`,
        text: `In what musical context is the ${name.toLowerCase()} most commonly used?`,
        options: [
          { id: `${id}_q8_a1`, text: 'Solo performances only' },
          { id: `${id}_q8_a2`, text: 'Various musical contexts' },
          { id: `${id}_q8_a3`, text: 'Electronic music only' },
          { id: `${id}_q8_a4`, text: 'Silent meditation' }
        ],
        correctAnswerId: `${id}_q8_a2`,
        explanation: `The ${name.toLowerCase()} is used in various musical contexts based on its family and cultural origins.`
      },
      {
        id: `${id}_q9`,
        text: `What is historically significant about the ${name.toLowerCase()}?`,
        options: [
          { id: `${id}_q9_a1`, text: 'It was invented yesterday' },
          { id: `${id}_q9_a2`, text: 'It has cultural and historical importance' },
          { id: `${id}_q9_a3`, text: 'It was banned everywhere' },
          { id: `${id}_q9_a4`, text: 'It has no history' }
        ],
        correctAnswerId: `${id}_q9_a2`,
        explanation: `Historical context: ${origins || `The ${name.toLowerCase()} has developed through various cultural and musical traditions`}.`
      },
      {
        id: `${id}_q10`,
        text: `What additional characteristic is notable about the ${name.toLowerCase()}?`,
        options: [
          { id: `${id}_q10_a1`, text: 'It can only play one note' },
          { id: `${id}_q10_a2`, text: additionalNotes || 'It has unique musical properties' },
          { id: `${id}_q10_a3`, text: 'It requires electricity' },
          { id: `${id}_q10_a4`, text: 'It is invisible' }
        ],
        correctAnswerId: `${id}_q10_a2`,
        explanation: additionalNotes || `The ${name.toLowerCase()} has unique characteristics that make it distinctive in the musical world.`
      }
    ]
  };
  
  return quiz;
}

// Generate quiz files for first 20 instruments as a test
const testInstruments = instrumentObjects.slice(0, 20);
let createdCount = 0;

testInstruments.forEach(instrument => {
  try {
    const quiz = generateInstrumentQuiz(instrument);
    const variableName = instrument.id.replace(/-/g, '').replace(/[^a-zA-Z0-9]/g, '');
    
    const quizContent = `import { Quiz } from '../../types';

export const ${variableName}Quiz: Quiz = ${JSON.stringify(quiz, null, 2)};`;
    
    const quizFilePath = path.join(__dirname, `../data/${instrument.id}Quiz.ts`);
    fs.writeFileSync(quizFilePath, quizContent);
    createdCount++;
    console.log(`Created quiz for ${instrument.id} (${instrument.name})`);
  } catch (error) {
    console.error(`Error creating quiz for ${instrument.id}:`, error.message);
  }
});

console.log(`Successfully created ${createdCount} quiz files out of ${testInstruments.length} instruments`);