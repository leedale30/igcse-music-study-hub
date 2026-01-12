
import { SyllabusItem, Quiz } from '../../types';

const performingQuiz: Quiz = {
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

export const courseworkPerforming: SyllabusItem = {
  id: 'coursework-performing',
  title: 'Component 2: Performing',
  title_zh: '第二部分：演奏',
  path: '/coursework/performing',
  content: 'How to prepare for your music performances.',
  content_zh: '如何准备您的音乐演奏。',
  longDescription: `
<div class="space-y-6">
  <section>
    <h3 class="text-xl font-bold">Overview of Component 2</h3>
    <p>Component 2 requires you to demonstrate your practical music-making skills through two distinct performances. This component accounts for <strong>30% of your total IGCSE grade</strong>.</p>
  </section>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="card">
      <h4 class="font-bold flex items-center gap-2"><span class="text-purple-500">🎤</span> Solo Performance</h4>
      <p>A performance where you are the sole focus. You can play an unaccompanied piece or a work with live/recorded accompaniment.</p>
    </div>
    <div class="card">
      <h4 class="font-bold flex items-center gap-2"><span class="text-blue-500">👥</span> Ensemble Performance</h4>
      <p>A performance where you interact with at least one other live musician. Your part must be independent and not doubled.</p>
    </div>
  </div>

  <section class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200">
    <h4 class="font-bold mb-2">⏱ Duration Requirements</h4>
    <ul class="list-disc pl-5">
      <li>Each performance category (Solo/Ensemble) must be at least <strong>2 minutes</strong> long.</li>
      <li>Total maximum time for both recordings is <strong>10 minutes</strong>.</li>
      <li>Shouter pieces can be combined to meet the 2-minute minimum.</li>
    </ul>
  </section>

  <section>
    <h3 class="text-xl font-bold">Assessment Categories</h3>
    <p>Each performance is marked out of 25 (Total 50) based on:</p>
    <table class="min-w-full text-sm mt-4">
      <thead>
        <tr class="border-b">
          <th class="text-left pb-2">Category</th>
          <th class="text-left pb-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="py-2"><strong>Technical Control</strong></td>
          <td>Accuracy of notes, rhythm, intonation, and quality of sound.</td>
        </tr>
        <tr>
          <td class="py-2"><strong>Expression</strong></td>
          <td>Musical sensitivity, dynamics, phrasing, and articulation.</td>
        </tr>
        <tr>
          <td class="py-2"><strong>Ensemble Skill</strong></td>
          <td>(Ensemble only) Interaction and synchronization with others.</td>
        </tr>
      </tbody>
    </table>
  </section>
</div>
  `,
  quiz: performingQuiz,
  children: [
    {
      id: 'performing-part1',
      title: 'Part 1 – Solo Performing',
      title_zh: '第一部分 – 独奏',
      path: '/coursework/performing/solo',
      content: 'Performing music by yourself.',
      longDescription: `
<section class="space-y-4">
  <h3 class="text-xl font-bold">What is Solo Performing?</h3>
  <p>Solo performing is about showcasing your individual skill on your chosen instrument or voice. It focuses on your technical mastery and expressive capability.</p>
  
  <h4 class="font-bold">Key Guidelines:</h4>
  <ul class="list-disc pl-5">
    <li><strong>Accompaniment:</strong> You can use a live accompanist (usually piano) or a high-quality backing track.</li>
    <li><strong>Unaccompanied Pieces:</strong> If the piece is designed to be played alone (e.g., a Bach Cello Suite), no accompaniment is needed.</li>
    <li><strong>Repertoire:</strong> Choose pieces that are "challenging but achievable." Playing a simple piece perfectly is usually better than playing a very hard piece with many mistakes.</li>
  </ul>

  <div class="card bg-sky-50 dark:bg-sky-900/10">
    <h4 class="font-bold">Exam Tip 💡</h4>
    <p>Always ensure your instrument is perfectly in tune before you start the recording! Moderators are very sensitive to intonation.</p>
  </div>
</section>
      `
    },
    {
      id: 'performing-part2',
      title: 'Part 2 – Performing with Others',
      title_zh: '第二部分 – 合奏',
      path: '/coursework/performing/ensemble',
      content: 'Performing music in a group.',
      longDescription: `
<section class="space-y-4">
  <h3 class="text-xl font-bold">Defining an Ensemble</h3>
  <p>For IGCSE, an ensemble must involve at least <strong>two live performers</strong>. A backing track does NOT count as an ensemble partner.</p>
  
  <h4 class="font-bold">The Rule of Independence:</h4>
  <p>The most important rule for the Ensemble component is that your part must be <strong>independent</strong>. This means:</p>
  <ul class="list-disc pl-5">
    <li>No one else should be playing the exact same notes as you (doubling).</li>
    <li>Your part should have its own musical interest (e.g., a harmony part, a counter-melody, or a distinct rhythm).</li>
  </ul>

  <h4 class="font-bold">Coordination:</h4>
  <p>The moderator looks specifically at how well you communicate with your partners, stay in time together, and balance your volume with the rest of the group.</p>
</section>
      `
    },
    {
      id: 'performing-choice',
      title: 'Choice of Music',
      title_zh: '曲目选择',
      path: '/coursework/performing/choice-of-music',
      content: 'Tips for choosing your performance pieces.',
      longDescription: `
<section class="space-y-4">
  <h3 class="text-xl font-bold">How to Choose Your Repertoire</h3>
  <p>Choosing the right music is 50% of the battle. Use these tips to select your pieces:</p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="card">
      <h5 class="font-bold">Technical Fit</h5>
      <p>Pick music that allows you to demonstrate variety in technique (staccato vs legato, fast vs slow passages).</p>
    </div>
    <div class="card">
      <h5 class="font-bold">Duration</h5>
      <p>Ensure each piece is long enough. 2:00 is the safe minimum. If your piece is 1:55, find a way to add a repeat or join it with another short piece.</p>
    </div>
  </div>

  <h4 class="font-bold text-red-600">Common Mistakes to Avoid:</h4>
  <ol class="list-decimal pl-5">
    <li>Choosing a piece that is too simple (Grade 1/2 level might not allow for high marks).</li>
    <li>Choosing a piece that is too hard (leading to poor accuracy and tension).</li>
    <li>Ignoring the marks for "Expression" - don't just play the notes, play the music!</li>
  </ol>
</section>
      `
    },
    {
      id: 'performing-marking',
      title: 'Marking Criteria',
      title_zh: '评分标准',
      path: '/coursework/performing/marking-criteria',
      content: 'How your performances will be marked.',
      longDescription: `
<section class="space-y-4">
  <h3 class="text-xl font-bold">Detailed Marking Breakdown</h3>
  <p>Each performance (Solo and Ensemble) is marked out of 25. Here is the general rubic used by Cambridge:</p>
  
  <div class="overflow-x-auto">
    <table class="min-w-full border">
      <thead>
        <tr class="bg-slate-100 dark:bg-slate-800">
          <th class="p-2 border">Category</th>
          <th class="p-2 border">Marks</th>
          <th class="p-2 border">What they look for</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="p-2 border"><strong>Accuracy</strong></td>
          <td class="p-2 border">5</td>
          <td class="p-2 border">Are the notes and rhythms correct? Is the pulse steady?</td>
        </tr>
        <tr>
          <td class="p-2 border"><strong>Technical Control</strong></td>
          <td class="p-2 border">5</td>
          <td class="p-2 border">Tone quality, intonation, fluency, and command of the instrument.</td>
        </tr>
        <tr>
          <td class="p-2 border"><strong>Expression</strong></td>
          <td class="p-2 border">5</td>
          <td class="p-2 border">Dynamics, phrasing, articulation, and stylistic insight.</td>
        </tr>
        <tr>
          <td class="p-2 border"><strong>Ensemble/Interaction</strong></td>
          <td class="p-2 border">5</td>
          <td class="p-2 border">Balance, coordination, and response to other performers.</td>
        </tr>
        <tr>
          <td class="p-2 border"><strong>Difficulty</strong></td>
          <td class="p-2 border">5</td>
          <td class="p-2 border">The technical and musical demand of the chosen repertoire.</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
      `
    }
  ]
};

