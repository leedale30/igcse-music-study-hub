import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const RobotIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2 5.5A3.5 3.5 0 015.5 2h9A3.5 3.5 0 0118 5.5v2.753a3.513 3.513 0 01-1.205 2.576l-1.52 1.303A1.5 1.5 0 0014.5 13H14v1.5a2.5 2.5 0 01-2.5 2.5h-3A2.5 2.5 0 016 14.5V13h-.5a1.5 1.5 0 00-.775-.768l-1.52-1.303A3.513 3.513 0 012 8.253V5.5zm1.5 0a2 2 0 012-2h9a2 2 0 012 2v2.753c0 .351-.056.69-.16 1.012l-.001.002-.002.007-.003.008h.001A1.993 1.993 0 0016 9.5H4a1.993 1.993 0 00-1.335-.22l.001-.002-.002-.007-.001-.002A2.005 2.005 0 013.5 8.253V5.5zM8 14.5a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);

const SparkleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.39-3.423 3.352c-.772.753-.235 2.047.788 2.047h4.566l-1.83 4.401c-.321.772.783 1.57 1.482 1.046l4.753-.39 3.423-3.352c.772-.753.235-2.047-.788-2.047h-4.566l1.83-4.401z" clipRule="evenodd" />
  </svg>
);


// Helper to render text with **bold** formatting
const renderFormattedBotResponse = (text: string): React.ReactNode => {
    if (!text) return null;
    // Split by newlines first to preserve them as paragraphs or line breaks
    return text.split('\n').map((line, lineIndex) => {
        // Then split by bold markdown
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
            <p key={lineIndex} className="mb-2 last:mb-0"> {/* Add paragraph for each line */}
                {parts.map((part, index) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={index}>{part.substring(2, part.length - 2)}</strong>;
                    }
                    return part;
                })}
            </p>
        );
    });
};


const GlossaryBot: React.FC = () => {
  const [term, setTerm] = useState('');
  const [definition, setDefinition] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!term.trim()) {
      setError("Please type a musical term for me to define!");
      setDefinition('');
      return;
    }
    setIsLoading(true);
    setError('');
    setDefinition('');

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Hi GlossaBot! Please define the musical term "${term.trim()}" for me. I'm an IGCSE Music student.`,
        config: {
          systemInstruction: `You are GlossaBot, a friendly and knowledgeable assistant specializing in musical terms for IGCSE Music students. Your responses should be clear, concise, accurate, and easy to understand. Use simple language where appropriate, but don't shy away from correct terminology if explained well. Aim for definitions around 2-4 sentences, plus a short example or fun fact if it enhances understanding. Be encouraging and make learning engaging! When you define the term, please make sure the term itself is bolded using markdown like **Term**. Start your response with a friendly greeting unless it's a follow-up.`,
        }
      });
      setDefinition(response.text);
    } catch (e: any) {
      console.error("Gemini API error:", e);
      setError("Oh dear! It seems my circuits are a bit jumbled, or the musical muses are quiet. I couldn't fetch the definition for that. Please check the term or try again in a moment.");
      setDefinition('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-sky-50 rounded-xl shadow-lg border border-sky-200 dark:bg-slate-800 dark:border-slate-700">
      <div className="flex items-center mb-4">
        <RobotIcon className="w-12 h-12 text-sky-600 dark:text-sky-400 mr-3 flex-shrink-0" />
        <div>
          <h2 className="text-2xl font-bold text-sky-700 dark:text-sky-400">GlossaBot</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Your Personal Music Terminology Assistant!</p>
        </div>
      </div>
      
      <p className="mb-6 text-slate-700 dark:text-slate-300 text-base">
        Hello! I'm <strong>GlossaBot</strong>. Curious about a musical term? Type it below, and I'll do my best to explain it in a way that's easy for IGCSE Music students to understand. Let's learn together!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="musical-term" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Musical Term:
          </label>
          <input
            type="text"
            id="musical-term"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="e.g., Ritornello, Sonata Form, Crescendo"
            className="mt-1 block w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-sm transition-colors dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:placeholder-gray-400"
            aria-describedby="term-error"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75 disabled:bg-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-600"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Defining...
            </>
          ) : (
            <>
              <SparkleIcon className="w-5 h-5 mr-2" />
              Define Term
            </>
          )}
        </button>
      </form>

      {error && (
        <p id="term-error" className="mt-4 text-red-600 bg-red-50 p-3 rounded-md border border-red-200 text-sm animate-shake" role="alert">
          {error}
        </p>
      )}

      {definition && !isLoading && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow border border-slate-200 dark:bg-slate-700 dark:border-slate-600">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">GlossaBot says:</h3>
          <div className="text-slate-700 leading-relaxed prose prose-sm max-w-none dark:prose-invert">
            {renderFormattedBotResponse(definition)}
          </div>
        </div>
      )}
    </div>
  );
};

export default GlossaryBot;