
import { SyllabusItem, Quiz } from '../../types';
import { popularSongwritingOverview } from './popularSongwriting';

const composingQuiz: Quiz = {
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

export const courseworkComposing: SyllabusItem = {
  id: 'coursework-composing',
  title: 'Component 3: Composing',
  title_zh: '第三部分：作曲',
  path: '/coursework/composing',
  content: 'How to create your own original music.',
  content_zh: '如何创作您自己的原创音乐。',
  longDescription: `
<div class="space-y-6">
  <section>
    <h3 class="text-xl font-bold">Introduction to Composing</h3>
    <p>Component 3 allows you to express your musical creativity. You will create <strong>two original pieces</strong> that demonstrate your ability to manipulate musical elements to create a coherent work. This accounts for <strong>30% of your grade</strong>.</p>
  </section>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="card border-l-4 border-emerald-500">
      <h4 class="font-bold">Composition 1</h4>
      <p>Must be in <strong>Western Staff Notation</strong>. Usually focuses on acoustic instruments (e.g., piano solo, string quartet).</p>
    </div>
    <div class="card border-l-4 border-blue-500">
      <h4 class="font-bold">Composition 2</h4>
      <p>Can be in any style. Requires a <strong>brief</strong> (purpose). May use staff notation, other notation, or a written commentary.</p>
    </div>
  </div>

  <section class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
    <h4 class="font-bold mb-2">💡 Core Principles</h4>
    <ul class="list-disc pl-5">
      <li><strong>Originality:</strong> The music must be 100% your own work. No arrangements.</li>
      <li><strong>Contrast:</strong> The two pieces should be different in style, mood, or instrumentation.</li>
      <li><strong>Coherence:</strong> The music must have a clear structure and logical flow.</li>
    </ul>
  </section>

  <section>
    <h3 class="text-xl font-bold">Submit Checklist</h3>
    <ul class="space-y-2">
      <li>✅ High-quality audio recording (.mp3 or .wav)</li>
      <li>✅ Clear PDF Score or Written Commentary</li>
      <li>✅ Component 3 Authentication Form</li>
    </ul>
  </section>
</div>
  `,
  quiz: composingQuiz,
  children: [
    {
      id: 'composing-comp1',
      title: 'Composition 1 (Staff Notation)',
      title_zh: '作曲 1 (五线谱记谱)',
      path: '/coursework/composing/composition-1',
      content: 'Your first composition, written in standard music notation.',
      longDescription: `
<section class="space-y-4">
  <h3 class="text-xl font-bold">The Staff Notation Requirement</h3>
  <p>Composition 1 is designed to show your literacy in Western music notation. You must provide a "full score" using treble, bass, and (optionally) other clefs.</p>
  
  <h4 class="font-bold">Tips for Success:</h4>
  <ul class="list-disc pl-5">
    <li><strong>Use Professional Software:</strong> Programs like Musescore, Sibelius, or Finale help you produce neat, accurate scores.</li>
    <li><strong>Check Your Theory:</strong> Ensure key signatures, accidentals, and rhythmic groupings follow standard rules.</li>
    <li><strong>Write for the Instrument:</strong> Don't write notes that are impossible for humans to play (e.g., a note too low for a flute).</li>
  </ul>
</section>
      `
    },
    {
      id: 'composing-comp2',
      title: 'Composition 2 (Candidate-defined Brief)',
      title_zh: '作曲 2 (考生自定义主题)',
      path: '/coursework/composing/composition-2',
      content: 'Your second composition, based on an idea or purpose you choose.',
      longDescription: `
<section class="space-y-4">
  <h3 class="text-xl font-bold">Creating Your Brief</h3>
  <p>Composition 2 requires context. You must decide *why* the music exists. Examples of briefs:</p>
  <ul class="list-disc pl-5">
    <li>"A song for an indie pop band about a rainy day." (AOS 4)</li>
    <li>"A tango for a professional dance duo." (AOS 5)</li>
    <li>"Atmospheric music for a horror film scene." (AOS 7)</li>
  </ul>

  <h4 class="font-bold">Notation or Commentary?</h4>
  <p>If your music is sample-based or uses complex production techniques that staff notation can't capture, you can submit a <strong>written commentary</strong>. This should explain your creative process, the technology used, and the musical structure.</p>
</section>
      `,
      children: [
        popularSongwritingOverview
      ]
    },
    {
      id: 'composing-commentary',
      title: 'Written Commentaries',
      title_zh: '书面评论',
      path: '/coursework/composing/commentaries',
      content: 'How to write about your Composition 2.',
      longDescription: `
<section class="space-y-4">
  <h3 class="text-xl font-bold">Writing a Great Commentary</h3>
  <p>If you don't submit a staff score for Composition 2, your commentary must be professional and detailed. It is NOT an essay about your feelings, but a technical document.</p>
  
  <h4 class="font-bold">What to Include:</h4>
  <ol class="list-decimal pl-5">
    <li><strong>The Brief:</strong> Restate your aim clearly.</li>
    <li><strong>Structure:</strong> Explain the sections (e.g., Intro, Verse, Chorus, Outro).</li>
    <li><strong>Musical Content:</strong> Describe your motifs, chord progressions, and textures.</li>
    <li><strong>Technology:</strong> List software, plugins, or recording techniques used.</li>
  </ol>
</section>
      `
    },
    {
      id: 'composing-marking',
      title: 'Marking Criteria',
      title_zh: '评分标准',
      path: '/coursework/composing/marking-criteria',
      content: 'How your compositions will be marked.',
      longDescription: `
<section class="space-y-4">
  <h3 class="text-xl font-bold">The 50-Mark Rubric</h3>
  <p>Each composition is marked out of 50 across these categories:</p>
  
  <div class="grid grid-cols-1 gap-2">
    <div class="p-3 border rounded"><strong>1. Ideas (10 Marks):</strong> Originality and quality of melody/rhythm.</div>
    <div class="p-3 border rounded"><strong>2. Development (10 Marks):</strong> How motifs are expanded and varied.</div>
    <div class="p-3 border rounded"><strong>3. Structure (10 Marks):</strong> Overall form and balance.</div>
    <div class="p-3 border rounded"><strong>4. Use of Medium (10 Marks):</strong> Effective writing for instruments/voices.</div>
    <div class="p-3 border rounded"><strong>5. Notation/Commentary (10 Marks):</strong> Accuracy and clarity.</div>
  </div>
</section>
      `
    }
  ]
};
