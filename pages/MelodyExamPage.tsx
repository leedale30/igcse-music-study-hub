import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const melodyQuestions: Question[] = [
  // Anacrusis Questions
  {
    id: 1,
    question: "What is an anacrusis in music?",
    options: [
      "The final note of a phrase",
      "One or more unstressed notes that precede the first strong beat of a phrase",
      "A type of chord progression",
      "The highest note in a melody"
    ],
    correctAnswer: 1,
    explanation: "An anacrusis (also called an upbeat or pickup) consists of one or more unstressed notes that precede the first strong beat of a phrase, creating forward momentum into the main phrase."
  },
  {
    id: 2,
    question: "What describes conjunct melodic movement?",
    options: [
      "Large leaps between notes",
      "Stepwise movement between adjacent notes",
      "Repeated notes only",
      "Random pitch intervals"
    ],
    correctAnswer: 1,
    explanation: "Conjunct melodic movement refers to stepwise motion where notes move to adjacent pitches, creating smooth, flowing melodic lines that are easy to sing and follow."
  },
  {
    id: 3,
    question: "What characterizes disjunct (angular) melodic movement?",
    options: [
      "Only stepwise motion",
      "Large leaps and jumps between notes",
      "Repeated notes",
      "Chromatic movement only"
    ],
    correctAnswer: 1,
    explanation: "Disjunct or angular melodic movement features large leaps and jumps between notes, creating more dramatic and sometimes challenging melodic lines that can be harder to sing."
  },
  {
    id: 4,
    question: "What is an arpeggio in melodic terms?",
    options: [
      "A scale passage",
      "Notes of a chord played in succession (broken chord)",
      "A repeated rhythmic pattern",
      "A chromatic sequence"
    ],
    correctAnswer: 1,
    explanation: "An arpeggio is a broken chord where the notes of a chord are played in succession rather than simultaneously, creating a flowing melodic line based on harmonic structure."
  },
  {
    id: 5,
    question: "What defines scalic melodic movement?",
    options: [
      "Random note patterns",
      "Melodic lines that follow scale patterns, ascending or descending",
      "Only chord tones",
      "Repeated single notes"
    ],
    correctAnswer: 1,
    explanation: "Scalic melodic movement follows scale patterns, moving systematically up or down through the notes of a scale, creating predictable and often virtuosic melodic passages."
  },
  
  // Sequence Questions
  {
    id: 6,
    question: "What is imitation in melodic composition?",
    options: [
      "Exact repetition of a melody",
      "One voice echoing or copying a melody presented by another voice",
      "Playing the same rhythm",
      "Using the same key signature"
    ],
    correctAnswer: 1,
    explanation: "Imitation occurs when one voice echoes or copies a melody that was previously presented by another voice, often at a different pitch level or with slight modifications."
  },
  {
    id: 7,
    question: "Which melodic technique involves repeating a musical phrase at different pitch levels?",
    options: [
      "Inversion",
      "Sequence",
      "Augmentation",
      "Retrograde"
    ],
    correctAnswer: 1,
    explanation: "A sequence involves repeating a musical phrase at different pitch levels, either higher or lower than the original, creating a sense of melodic development and movement."
  },
  {
    id: 8,
    question: "What creates melodic contrast?",
    options: [
      "Using identical phrases throughout",
      "Introducing different melodic material that differs in character, rhythm, or pitch",
      "Only using one instrument",
      "Maintaining the same tempo"
    ],
    correctAnswer: 1,
    explanation: "Melodic contrast is created by introducing different melodic material that differs in character, rhythm, pitch content, or style from previously heard material."
  },
  {
    id: 9,
    question: "What does melodic range refer to?",
    options: [
      "The tempo of the melody",
      "The distance between the highest and lowest notes in a melody",
      "The number of notes in a melody",
      "The key signature of the melody"
    ],
    correctAnswer: 1,
    explanation: "Melodic range refers to the distance between the highest and lowest notes in a melody, which affects the vocal or instrumental demands and the overall character of the piece."
  },
  
  // Leitmotif/Motif Questions
  {
    id: 10,
    question: "What is a leitmotif?",
    options: [
      "A complete song form",
      "A recurring musical theme associated with a particular character, place, or idea",
      "A type of chord progression",
      "A rhythmic pattern only"
    ],
    correctAnswer: 1,
    explanation: "A leitmotif is a recurring musical theme or phrase that is associated with a particular character, place, idea, or emotion, commonly used in operas and film scores."
  },
  {
    id: 11,
    question: "What is a motif in melodic analysis?",
    options: [
      "A complete song section",
      "A short, distinctive musical idea that can be developed throughout a piece",
      "A type of chord progression",
      "A rhythmic pattern only"
    ],
    correctAnswer: 1,
    explanation: "A motif is a short, distinctive musical idea that serves as a building block for larger musical structures and can be developed, varied, and repeated throughout a piece."
  },
  {
    id: 12,
    question: "What characterizes chromatic movement in melody?",
    options: [
      "Movement only by whole steps",
      "Movement by half-steps (semitones) including notes outside the key",
      "Movement only by perfect fifths",
      "Movement only by octaves"
    ],
    correctAnswer: 1,
    explanation: "Chromatic movement involves progression by half-steps (semitones), including notes that may be outside the established key, creating colorful and often expressive melodic lines."
  },
  {
    id: 13,
    question: "What is a pentatonic scale?",
    options: [
      "A seven-note scale",
      "A five-note scale commonly used in folk and popular music",
      "A twelve-note scale",
      "A three-note scale"
    ],
    correctAnswer: 1,
    explanation: "A pentatonic scale contains five notes and is commonly used in folk music, popular music, and various world music traditions. It often creates a distinctive, accessible sound."
  },
  {
    id: 14,
    question: "What are blue notes in music?",
    options: [
      "Notes written in blue ink",
      "Flattened or bent notes that create a distinctive blues sound",
      "High-pitched notes only",
      "Notes played on blue instruments"
    ],
    correctAnswer: 1,
    explanation: "Blue notes are flattened or bent notes (typically the 3rd, 5th, and 7th degrees of the scale) that create the distinctive sound characteristic of blues music and jazz."
  },
  {
    id: 15,
    question: "What interval is a perfect fifth?",
    options: [
      "5 semitones",
      "7 semitones",
      "8 semitones",
      "12 semitones"
    ],
    correctAnswer: 1,
    explanation: "A perfect fifth spans 7 semitones and is considered one of the most consonant intervals in Western music, forming the basis of many harmonic structures."
  },
  {
    id: 16,
    question: "How many semitones make up a major third?",
    options: [
      "2 semitones",
      "4 semitones",
      "5 semitones",
      "7 semitones"
    ],
    correctAnswer: 1,
    explanation: "A major third consists of 4 semitones and is a fundamental interval in major chords and scales, contributing to the bright, happy sound of major tonality."
  },
  {
    id: 17,
    question: "What defines an octave interval?",
    options: [
      "6 semitones",
      "10 semitones",
      "12 semitones - the same note name at a different pitch level",
      "14 semitones"
    ],
    correctAnswer: 2,
    explanation: "An octave spans 12 semitones and represents the same note name at a different pitch level. It's the fundamental interval that defines pitch equivalence in Western music."
  },
  
  // Ornamentation/Decoration Questions
  {
    id: 18,
    question: "What is a countermelody?",
    options: [
      "The main melody played backwards",
      "A secondary melody that accompanies and contrasts with the main melody",
      "A melody played at half speed",
      "A melody in a different key"
    ],
    correctAnswer: 1,
    explanation: "A countermelody is a secondary melodic line that accompanies the main melody, providing harmonic and rhythmic interest while maintaining its own melodic character."
  },
  {
    id: 19,
    question: "What is an answering phrase in music?",
    options: [
      "A phrase that asks a question",
      "A melodic phrase that responds to or complements a previous phrase",
      "A phrase played by the percussion",
      "A phrase in a different language"
    ],
    correctAnswer: 1,
    explanation: "An answering phrase is a melodic phrase that responds to or complements a previous phrase, often creating a question-and-answer dialogue in the musical structure."
  },
  {
    id: 20,
    question: "What does 'thematic' mean in melodic context?",
    options: [
      "Related to the main themes or subjects of the musical work",
      "Always played loudly",
      "Only instrumental music",
      "Music without words"
    ],
    correctAnswer: 0,
    explanation: "Thematic refers to material that is related to the main themes or subjects of a musical work, often involving the development and variation of primary melodic ideas."
  },
  {
    id: 21,
    question: "What is a fanfare in music?",
    options: [
      "A quiet, gentle melody",
      "A short, ceremonial tune typically played by brass instruments",
      "A type of dance",
      "A vocal technique"
    ],
    correctAnswer: 1,
    explanation: "A fanfare is a short, ceremonial tune typically played by brass instruments, often used to announce important events or create a sense of grandeur and celebration."
  },
  
  // Additional Comprehensive Questions
  {
    id: 22,
    question: "What is a 'hook' in popular music?",
    options: [
      "A repeated chord progression",
      "A catchy, memorable melodic phrase designed to grab the listener's attention",
      "The bridge section of a song",
      "A type of guitar technique"
    ],
    correctAnswer: 1,
    explanation: "A hook is a catchy, memorable melodic phrase specifically designed to grab and hold the listener's attention. It's often the most recognizable part of a song."
  },
  {
    id: 23,
    question: "Which of the following best describes a 'riff'?",
    options: [
      "A vocal improvisation",
      "A drum pattern",
      "A short, repeated melodic or rhythmic pattern, often instrumental",
      "A type of song structure"
    ],
    correctAnswer: 2,
    explanation: "A riff is a short, repeated melodic or rhythmic pattern that is often instrumental and serves as a foundation or recurring element in a song."
  },
  {
    id: 24,
    question: "What is melodic contour?",
    options: [
      "The volume of the melody",
      "The speed of the melody",
      "The shape or direction of a melody as it moves up and down in pitch",
      "The rhythm of the melody"
    ],
    correctAnswer: 2,
    explanation: "Melodic contour refers to the shape or direction of a melody as it moves up and down in pitch, creating patterns that can be visualized as lines moving higher or lower."
  }
];

const MelodyExamPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(melodyQuestions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(false);
  };

  const handleNext = () => {
    if (currentQuestion < melodyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === melodyQuestions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const resetExam = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(melodyQuestions.length).fill(-1));
    setShowResults(false);
    setShowExplanation(false);
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / melodyQuestions.length) * 100);

    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Melody Exam Results
            </h1>
            <div className="text-6xl font-bold mb-4">
              <span className={percentage >= 70 ? 'text-green-500' : percentage >= 50 ? 'text-yellow-500' : 'text-red-500'}>
                {percentage}%
              </span>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              You scored {score} out of {melodyQuestions.length} questions correctly
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {melodyQuestions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Question {index + 1}: {question.question}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    {question.options.map((option, optionIndex) => {
                      let className = "p-3 rounded border ";
                      
                      if (optionIndex === question.correctAnswer) {
                        className += "bg-green-100 border-green-500 text-green-800 dark:bg-green-900/20 dark:border-green-400 dark:text-green-300";
                      } else if (optionIndex === userAnswer && !isCorrect) {
                        className += "bg-red-100 border-red-500 text-red-800 dark:bg-red-900/20 dark:border-red-400 dark:text-red-300";
                      } else {
                        className += "bg-gray-50 border-gray-200 text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300";
                      }
                      
                      return (
                        <div key={optionIndex} className={className}>
                          {option}
                          {optionIndex === question.correctAnswer && (
                            <span className="ml-2 text-green-600 dark:text-green-400">✓ Correct</span>
                          )}
                          {optionIndex === userAnswer && !isCorrect && (
                            <span className="ml-2 text-red-600 dark:text-red-400">✗ Your answer</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded p-4">
                    <p className="text-blue-800 dark:text-blue-300">
                      <strong>Explanation:</strong> {question.explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={resetExam}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retake Exam
            </button>
            <Link
              to="/listening-exams"
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Back to Listening Exams
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const question = melodyQuestions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== -1;
  const allAnswered = selectedAnswers.every(answer => answer !== -1);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/listening-exams"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
          >
            ← Back to Listening Exams
          </Link>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Question {currentQuestion + 1} of {melodyQuestions.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-8">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / melodyQuestions.length) * 100}%` }}
          ></div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Melody Listening Exam
          </h1>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            {question.question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                  selectedAnswers[currentQuestion] === index
                    ? 'bg-blue-100 border-blue-500 text-blue-800 dark:bg-blue-900/30 dark:border-blue-400 dark:text-blue-300'
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <span className="font-medium mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Show Explanation Button */}
        {isAnswered && (
          <div className="mb-6">
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              {showExplanation ? 'Hide' : 'Show'} Explanation
            </button>
            
            {showExplanation && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
                <p className="text-green-800 dark:text-green-300">
                  <strong>Explanation:</strong> {question.explanation}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          <div className="flex space-x-2">
            {melodyQuestions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                  index === currentQuestion
                    ? 'bg-blue-600 text-white'
                    : selectedAnswers[index] !== -1
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-300 text-gray-600 dark:bg-gray-600 dark:text-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {currentQuestion === melodyQuestions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Submit Exam
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MelodyExamPage;