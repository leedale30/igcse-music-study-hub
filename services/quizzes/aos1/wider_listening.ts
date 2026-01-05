import { Quiz } from '../../../types';

export const baroqueWiderListeningQuiz: Quiz = {
  title: "Baroque Wider Listening Quiz",
  questions: [
    {
      id: 'bwlq1',
      text: "Which movement of Corelli's 'Christmas Concerto' (Op. 6 No. 8) is particularly famous for evoking a pastoral scene of shepherds?",
      options: [
        { id: 'bwlq1a1', text: 'The opening Grave' },
        { id: 'bwlq1a2', text: 'The fast Allegro' },
        { id: 'bwlq1a3', text: 'The Pastorale' },
        { id: 'bwlq1a4', text: 'The final Gigue' },
      ],
      correctAnswerId: 'bwlq1a3',
      explanation: "The 'Pastorale' movement, often in a gentle 12/8 time, is characteristic of Corelli's Christmas Concerto."
    },
    {
      id: 'bwlq2',
      text: "Bach's Orchestral Suite No. 3 in D major, BWV 1068, is famous for which beautiful, lyrical movement for strings (often known as 'Air on the G String' in an arrangement)?",
      options: [
        { id: 'bwlq2a1', text: 'Overture' },
        { id: 'bwlq2a2', text: 'Gavotte' },
        { id: 'bwlq2a3', text: 'Bourrée' },
        { id: 'bwlq2a4', text: 'Air' },
      ],
      correctAnswerId: 'bwlq2a4',
      explanation: "The 'Air' from Bach's Orchestral Suite No. 3 is a celebrated lyrical piece."
    },
    {
      id: 'bwlq3',
      text: "Elisabeth Jacquet de la Guerre was a prominent French female composer and virtuoso of which instrument?",
      options: [
        { id: 'bwlq3a1', text: 'Violin' },
        { id: 'bwlq3a2', text: 'Flute' },
        { id: 'bwlq3a3', text: 'Harpsichord' },
        { id: 'bwlq3a4', text: 'Cello' },
      ],
      correctAnswerId: 'bwlq3a3',
      explanation: "Elisabeth Jacquet de la Guerre was a renowned harpsichordist and composer."
    },
    {
      id: 'bwlq4',
      text: "A Trio Sonata, despite its name, usually involved how many players?",
      options: [
        { id: 'bwlq4a1', text: 'Two' },
        { id: 'bwlq4a2', text: 'Three' },
        { id: 'bwlq4a3', text: 'Four (two melody instruments + basso continuo team)' },
        { id: 'bwlq4a4', text: 'Five' },
      ],
      correctAnswerId: 'bwlq4a3',
      explanation: "A Trio Sonata typically features two upper melodic lines and a basso continuo part, which itself is played by two instruments (e.g., cello and harpsichord)."
    },
    {
      id: 'bwlq5',
      text: "The 'style luthé' or 'style brisé' in French harpsichord music refers to:",
      options: [
        { id: 'bwlq5a1', text: 'Playing very loudly.' },
        { id: 'bwlq5a2', text: 'A fast, virtuosic toccata style.' },
        { id: 'bwlq5a3', text: 'A broken-chord style, arpeggiating chords to create sustained harmony, imitating lute playing.' },
        { id: 'bwlq5a4', text: 'Strictly following dance forms.' },
      ],
      correctAnswerId: 'bwlq5a3',
      explanation: "Style luthé/brisé involves arpeggiating chords to mimic the sustaining quality of a lute, a common feature in French Baroque harpsichord music."
    }
  ]
};
