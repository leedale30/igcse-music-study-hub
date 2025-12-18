import { Quiz } from '../../types';

export const classicalIntroductionQuiz: Quiz = {
  id: 'aos2-classical-intro',
  title: "Introduction to the Classical Era Quiz",
  questions: [
    {
      id: 'ciq1',
      text: "The Classical period in music roughly spans which set of years?",
      options: [
        { id: 'ciq1a1', text: 'c. 1600 – c. 1750' },
        { id: 'ciq1a2', text: 'c. 1750 – c. 1820' },
        { id: 'ciq1a3', text: 'c. 1820 – c. 1900' },
        { id: 'ciq1a4', text: 'c. 1400 – c. 1600' },
      ],
      correctAnswerId: 'ciq1a2',
      explanation: "The Classical period is generally considered to be from around 1750 to 1820, following the Baroque and preceding the Romantic era."
    },
    {
      id: 'ciq2',
      text: "Which musical texture became predominant in the Classical era, emphasizing a clear melody with accompaniment?",
      options: [
        { id: 'ciq2a1', text: 'Polyphonic' },
        { id: 'ciq2a2', text: 'Monophonic' },
        { id: 'ciq2a3', text: 'Homophonic' },
        { id: 'ciq2a4', text: 'Heterophonic' },
      ],
      correctAnswerId: 'ciq2a3',
      explanation: "Homophonic texture, with a clear melody and chordal accompaniment, was the predominant texture in Classical music, contrasting with Baroque polyphony."
    },
    {
      id: 'ciq3',
      text: "Which of these composers is considered one of the main figures of the 'First Viennese School' and the Classical era?",
      options: [
        { id: 'ciq3a1', text: 'J.S. Bach' },
        { id: 'ciq3a2', text: 'G.F. Handel' },
        { id: 'ciq3a3', text: 'Wolfgang Amadeus Mozart' },
        { id: 'ciq3a4', text: 'Franz Liszt' },
      ],
      correctAnswerId: 'ciq3a3',
      explanation: "Wolfgang Amadeus Mozart, along with Haydn and early Beethoven, is a key composer of the First Viennese School and the Classical style."
    },
    {
      id: 'ciq4',
      text: "What is the name of the most important structural design of the Classical era, typically used for the first movement of sonatas, symphonies, and string quartets?",
      options: [
        { id: 'ciq4a1', text: 'Ritornello Form' },
        { id: 'ciq4a2', text: 'Fugue' },
        { id: 'ciq4a3', text: 'Rondo Form' },
        { id: 'ciq4a4', text: 'Sonata Form' },
      ],
      correctAnswerId: 'ciq4a4',
      explanation: "Sonata Form, with its Exposition, Development, and Recapitulation sections, was the cornerstone of many Classical first movements."
    },
    {
      id: 'ciq5',
      text: "Compared to the Baroque 'terraced dynamics', what type of dynamic changes became much more common and expressive in the Classical era?",
      options: [
        { id: 'ciq5a1', text: 'Only sudden loud accents (sforzando).' },
        { id: 'ciq5a2', text: 'Consistently soft dynamics.' },
        { id: 'ciq5a3', text: 'Gradual changes like crescendo and diminuendo.' },
        { id: 'ciq5a4', text: 'No dynamic variation at all.' },
      ],
      correctAnswerId: 'ciq5a3',
      explanation: "Gradual dynamic changes (crescendo and diminuendo) were a key expressive tool in Classical music, facilitated by instruments like the fortepiano."
    },
    {
      id: 'ciq6',
      text: "Which term describes a common Classical accompaniment pattern consisting of broken chords played by the left hand on a keyboard instrument?",
      options: [
        { id: 'ciq6a1', text: 'Basso Continuo' },
        { id: 'ciq6a2', text: 'Alberti Bass' },
        { id: 'ciq6a3', text: 'Ground Bass' },
        { id: 'ciq6a4', text: 'Ostinato' },
      ],
      correctAnswerId: 'ciq6a2',
      explanation: "The Alberti Bass, a pattern of broken chords (e.g., lowest note, highest, middle, highest), was a frequent accompaniment texture in Classical keyboard music."
    },
    {
      id: 'ciq7',
      text: "Classical melodies are often described as:",
      options: [
        { id: 'ciq7a1', text: 'Highly ornamented and complex.' },
        { id: 'ciq7a2', text: 'Short, fragmented, and rhythmically irregular.' },
        { id: 'ciq7a3', text: 'Clear, balanced, memorable, and organized in symmetrical phrases.' },
        { id: 'ciq7a4', text: 'Based primarily on folk songs.' },
      ],
      correctAnswerId: 'ciq7a3',
      explanation: "Clarity, balance, and memorable, singable (cantabile) qualities are hallmarks of Classical melodies, often structured in clear phrases."
    },
    {
      id: 'ciq8',
      text: "The Classical orchestra became more standardized. Which instrument largely disappeared from orchestral use as its harmonic function was written into instrumental parts?",
      options: [
        { id: 'ciq8a1', text: 'Violin' },
        { id: 'ciq8a2', text: 'Flute' },
        { id: 'ciq8a3', text: 'Timpani' },
        { id: 'ciq8a4', text: 'Harpsichord (as a continuo instrument)' },
      ],
      correctAnswerId: 'ciq8a4',
      explanation: "The Basso Continuo, typically played by a harpsichord and a bass instrument, largely disappeared as harmonies became fully notated within the orchestral parts."
    }
  ]
};

export const mozartLifeQuiz: Quiz = {
  id: 'aos2-mozart-life',
  title: "Mozart's Life and Times Quiz",
  questions: [
    {
      id: 'mlq1',
      text: "In which city was Wolfgang Amadeus Mozart born?",
      options: [
        { id: 'mlq1a1', text: 'Vienna, Austria' },
        { id: 'mlq1a2', text: 'Salzburg, Austria' },
        { id: 'mlq1a3', text: 'Paris, France' },
        { id: 'mlq1a4', text: 'Prague, Bohemia' },
      ],
      correctAnswerId: 'mlq1a2',
      explanation: "Mozart was born in Salzburg, which was then part of the Holy Roman Empire (now Austria)."
    },
    {
      id: 'mlq2',
      text: "What was the name of Mozart's father, who was also a musician and greatly influenced his upbringing?",
      options: [
        { id: 'mlq2a1', text: 'Johann Mozart' },
        { id: 'mlq2a2', text: 'Franz Mozart' },
        { id: 'mlq2a3', text: 'Leopold Mozart' },
        { id: 'mlq2a4', text: 'Carl Mozart' },
      ],
      correctAnswerId: 'mlq2a3',
      explanation: "Leopold Mozart was a composer, violinist, and music theorist who guided his son's prodigious musical development."
    },
    {
      id: 'mlq3',
      text: "Mozart was famously known as a ______, composing and performing at an exceptionally young age.",
      options: [
        { id: 'mlq3a1', text: 'Late bloomer' },
        { id: 'mlq3a2', text: 'Child prodigy' },
        { id: 'mlq3a3', text: 'Musical apprentice' },
        { id: 'mlq3a4', text: 'Court jester' },
      ],
      correctAnswerId: 'mlq3a2',
      explanation: "Mozart was a remarkable child prodigy, composing minuets by age five and symphonies by age eight."
    },
    {
      id: 'mlq4',
      text: "In 1781, Mozart moved to which major European city to pursue a career as a freelance musician, seeking independence from the Salzburg court?",
      options: [
        { id: 'mlq4a1', text: 'London' },
        { id: 'mlq4a2', text: 'Rome' },
        { id: 'mlq4a3', text: 'Vienna' },
        { id: 'mlq4a4', text: 'Berlin' },
      ],
      correctAnswerId: 'mlq4a3',
      explanation: "Mozart settled in Vienna in 1781, where he spent the most productive and famous years of his career."
    },
    {
      id: 'mlq5',
      text: "Which of the following is NOT one of Mozart's famous operas?",
      options: [
        { id: 'mlq5a1', text: 'The Marriage of Figaro' },
        { id: 'mlq5a2', text: 'Don Giovanni' },
        { id: 'mlq5a3', text: 'Fidelio' },
        { id: 'mlq5a4', text: 'The Magic Flute' },
      ],
      correctAnswerId: 'mlq5a3',
      explanation: "'Fidelio' is an opera by Ludwig van Beethoven. The others are all famous operas by Mozart."
    },
    {
      id: 'mlq6',
      text: "Mozart composed over 600 works in his lifetime. Which genre is he particularly renowned for, having composed 27 for his own performances?",
      options: [
        { id: 'mlq6a1', text: 'String Quartets' },
        { id: 'mlq6a2', text: 'Piano Concertos' },
        { id: 'mlq6a3', text: 'Oratorios' },
        { id: 'mlq6a4', text: 'Ballets' },
      ],
      correctAnswerId: 'mlq6a2',
      explanation: "Mozart composed many celebrated piano concertos, often for himself to perform as soloist."
    },
    {
      id: 'mlq7',
      text: "What is the nickname of Mozart's Symphony No. 41, his final symphony?",
      options: [
        { id: 'mlq7a1', text: 'Eroica' },
        { id: 'mlq7a2', text: 'Pastoral' },
        { id: 'mlq7a3', text: 'Jupiter' },
        { id: 'mlq7a4', text: 'Surprise' },
      ],
      correctAnswerId: 'mlq7a3',
      explanation: "Mozart's Symphony No. 41 in C major is known by the nickname 'Jupiter'."
    },
    {
      id: 'mlq8',
      text: "Which famous sacred choral work was Mozart composing at the time of his death, leaving it unfinished?",
      options: [
        { id: 'mlq8a1', text: 'Coronation Mass' },
        { id: 'mlq8a2', text: 'Requiem Mass in D minor' },
        { id: 'mlq8a3', text: 'Great Mass in C minor' },
        { id: 'mlq8a4', text: 'Ave Verum Corpus' },
      ],
      correctAnswerId: 'mlq8a2',
      explanation: "Mozart was working on his Requiem Mass when he died in 1791; it was later completed by his student Süssmayr."
    },
    {
      id: 'mlq9',
      text: "Mozart's music is characterized by its:",
      options: [
        { id: 'mlq9a1', text: 'Overwhelming complexity and dissonance.' },
        { id: 'mlq9a2', text: 'Strict adherence to Baroque counterpoint.' },
        { id: 'mlq9a3', text: 'Melodic beauty, formal elegance, and emotional depth.' },
        { id: 'mlq9a4', text: 'Use of folk music as its primary source material.' },
      ],
      correctAnswerId: 'mlq9a3',
      explanation: "Mozart's style is renowned for its perfect balance of melodic invention, formal clarity, and profound emotional expression."
    },
    {
      id: 'mlq10',
      text: "In what year did Mozart die at the young age of 35?",
      options: [
        { id: 'mlq10a1', text: '1781' },
        { id: 'mlq10a2', text: '1789' },
        { id: 'mlq10a3', text: '1791' },
        { id: 'mlq10a4', text: '1800' },
      ],
      correctAnswerId: 'mlq10a3',
      explanation: "Wolfgang Amadeus Mozart died in Vienna on December 5, 1791."
    }
  ]
};
