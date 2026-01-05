import React, { useState, useEffect } from 'react';
import { ChatInterface } from './ChatInterface';
import { Music, X, MessageCircle } from 'lucide-react';

interface Props {
    baseUrl?: string; // Allow proxy configuration (e.g. for China)
}

export const ChatWidget: React.FC<Props> = ({ baseUrl }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [pageContext, setPageContext] = useState('');

    const toggleOpen = () => {
        if (!isOpen) {
            // When opening, grab the current page text to help the AI
            // We select a specific ID if available (e.g. 'main-content') or fall back to body
            const mainContent = document.getElementById('lesson-content') || document.body;
            // Get innerText but truncate if too massive to save some tokens/time
            const text = mainContent.innerText || "";
            setPageContext(text);
        }
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">
            {/* The Chat Window */}
            {isOpen && (
                <div className="w-[400px] h-[600px] max-h-[80vh] max-w-[90vw] bg-gray-950 rounded-2xl shadow-2xl border border-gray-700 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
                    <ChatInterface
                        isWidget={true}
                        initialContext={pageContext}
                        onClose={() => setIsOpen(false)}
                        baseUrl={baseUrl}
                    />
                </div>
            )}

            {/* The Floating Action Button */}
            <button
                onClick={toggleOpen}
                className={`
                    h-14 w-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300
                    hover:scale-110 active:scale-95 border border-white/10
                    ${isOpen ? 'bg-gray-800 text-gray-400 rotate-90' : 'bg-indigo-600 text-white hover:bg-indigo-500'}
                `}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Music className="w-6 h-6" />}
            </button>
        </div>
    );
};