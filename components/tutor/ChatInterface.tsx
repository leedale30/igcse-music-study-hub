import React, { useState, useEffect, useRef } from 'react';
import { Send, Music, Sparkles, User, GraduationCap, Loader2, Link as LinkIcon, ExternalLink, RefreshCw, KeyRound } from 'lucide-react';
import { ChatMessage, TeacherState } from '../../types/tutor';
import { sendMessageToTeacher, initChatSession } from '../../services/geminiService';
import { AbcRenderer } from './AbcRenderer';
import { VexFlowRenderer } from './VexFlowRenderer';
import { MusFretsRenderer } from './MusFretsRenderer';
import { VexTabRenderer } from './VexTabRenderer';

declare global {
    interface Window {
        marked: {
            parse: (text: string) => string;
        };
    }
}

interface Props {
    isWidget?: boolean;
    initialContext?: string;
    onClose?: () => void;
    baseUrl?: string; // Support for proxies
}

export const ChatInterface: React.FC<Props> = ({ isWidget = false, initialContext = '', onClose, baseUrl }) => {
    const [state, setState] = useState<TeacherState>({
        status: 'IDLE',
        messages: [{
            id: 'welcome',
            role: 'model',
            content: initialContext
                ? "Hello! I see you're looking at a music lesson. I've read the page content. How can I help you understand it? I can also generate audio examples for you."
                : "Hello! I'm Maestro. I can help you understand music theory, compose melodies, or analyze pieces. Ask me anything!",
            timestamp: Date.now()
        }]
    });
    const [input, setInput] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);
    const [missingKeyError, setMissingKeyError] = useState(false);

    // Initialize session with context on mount
    useEffect(() => {
        const chat = initChatSession(initialContext, baseUrl);
        if (!chat) {
            // If chat returns null, it likely means something went wrong with initialization
            setMissingKeyError(true);
        } else {
            setMissingKeyError(false);
        }
    }, [initialContext, baseUrl]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [state.messages]);

    const handleSend = async () => {
        if (!input.trim() || state.status === 'THINKING') return;

        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: input,
            timestamp: Date.now()
        };

        setState(prev => ({
            status: 'THINKING',
            messages: [...prev.messages, userMsg]
        }));
        setInput('');

        try {
            const { text, groundingMetadata } = await sendMessageToTeacher(userMsg.content, state.messages, baseUrl);

            const modelMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                content: text,
                groundingMetadata: groundingMetadata,
                timestamp: Date.now()
            };

            setState(prev => ({
                status: 'IDLE',
                messages: [...prev.messages, modelMsg]
            }));
        } catch (error: any) {
            console.error(error);
            let errorMessage = "I encountered an error processing your request. Please try again.";

            const errorMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                content: errorMessage,
                timestamp: Date.now()
            };
            setState(prev => ({
                status: 'ERROR',
                messages: [...prev.messages, errorMsg]
            }));
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    // Helper to render search sources
    const renderGroundingSources = (msg: ChatMessage) => {
        if (!msg.groundingMetadata?.groundingChunks || msg.groundingMetadata.groundingChunks.length === 0) {
            return null;
        }

        const sources = msg.groundingMetadata.groundingChunks
            .filter(chunk => chunk.web?.uri && chunk.web?.title)
            .map(chunk => chunk.web!);

        if (sources.length === 0) return null;

        // Dedup sources based on URI
        const uniqueSources = Array.from(new Map(sources.map(s => [s.uri, s])).values());

        return (
            <div className="mt-4 pt-3 border-t border-gray-800">
                <p className="text-xs font-semibold text-gray-500 mb-2 flex items-center gap-1">
                    <LinkIcon className="w-3 h-3" />
                    Sources & Related Images
                </p>
                <div className="grid grid-cols-1 gap-2">
                    {uniqueSources.slice(0, 3).map((source, idx) => (
                        <a
                            key={idx}
                            href={source.uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-3 bg-gray-950 hover:bg-gray-800 border border-gray-800 rounded-lg transition-colors group"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-indigo-400 font-medium truncate pr-2 group-hover:underline">
                                    {source.title}
                                </span>
                                <ExternalLink className="w-3 h-3 text-gray-600 group-hover:text-indigo-400 flex-shrink-0" />
                            </div>
                            <span className="text-xs text-gray-600 truncate block mt-0.5">
                                {new URL(source.uri).hostname}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        );
    };

    // Helper to parse text and extract ABC, VEX, MUSFRETS, and VEXTAB blocks
    const renderMessageContent = (msg: ChatMessage) => {
        const contentElements = [];

        if (msg.content) {
            // Regex to find code blocks
            const parts = msg.content.split(/(```(?:abc|vex|musfrets|vextab)[\s\S]*?```)/g);

            parts.forEach((part, index) => {
                if (part.startsWith('```abc')) {
                    const abcCode = part.replace(/^```abc\s*/, '').replace(/```$/, '').trim();
                    contentElements.push(<AbcRenderer key={`abc-${index}`} id={`${msg.id}-${index}`} abc={abcCode} />);
                } else if (part.startsWith('```vex')) {
                    const vexCode = part.replace(/^```vex\s*/, '').replace(/```$/, '').trim();
                    contentElements.push(<VexFlowRenderer key={`vex-${index}`} id={`${msg.id}-${index}`} data={vexCode} />);
                } else if (part.startsWith('```musfrets')) {
                    const fretsCode = part.replace(/^```musfrets\s*/, '').replace(/```$/, '').trim();
                    contentElements.push(<MusFretsRenderer key={`frets-${index}`} id={`${msg.id}-${index}`} data={fretsCode} />);
                } else if (part.startsWith('```vextab')) {
                    const tabCode = part.replace(/^```vextab\s*/, '').replace(/```$/, '').trim();
                    contentElements.push(<VexTabRenderer key={`vextab-${index}`} id={`${msg.id}-${index}`} data={tabCode} />);
                } else {
                    if (!part.trim()) return;

                    let htmlContent = "";
                    if (window.marked) {
                        htmlContent = window.marked.parse(part);
                    } else {
                        htmlContent = `<p>${part}</p>`;
                    }

                    contentElements.push(
                        <div
                            key={`text-${index}`}
                            className="markdown-prose text-sm leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: htmlContent }}
                        />
                    );
                }
            });
        }

        return (
            <>
                {contentElements}
                {renderGroundingSources(msg)}
            </>
        );
    };

    return (
        <div className={`flex flex-col h-full bg-gray-950 ${!isWidget && 'border-l border-gray-800 max-w-md shadow-2xl'} w-full`}>
            {/* Header */}
            <div className="p-4 bg-gray-900 border-b border-gray-800 flex items-center justify-between shadow-sm z-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                        <Music className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h2 className="font-bold text-gray-100">Maestro</h2>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs text-gray-400">Online • Gemini 3 Flash</span>
                        </div>
                    </div>
                </div>
                {/* Refresh/Close for Widget Mode */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => initChatSession(initialContext, baseUrl)}
                        className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg"
                        title="Reset Chat"
                    >
                        <RefreshCw className="w-4 h-4" />
                    </button>
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    )}
                </div>
            </div>

            {/* API Key Warning - simplified to just check if init failed */}
            {missingKeyError && (
                <div className="bg-red-900/50 border-b border-red-800 p-3 flex items-start gap-3">
                    <KeyRound className="w-5 h-5 text-red-400 shrink-0" />
                    <div className="text-xs text-red-200">
                        <strong>Initialization Error:</strong> Could not connect to Gemini. Check your API configuration.
                    </div>
                </div>
            )}

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6" ref={scrollRef}>
                {state.messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                        <div className={`
                            w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center
                            ${msg.role === 'user' ? 'bg-gray-700' : 'bg-indigo-900/50'}
                        `}>
                            {msg.role === 'user' ? <User className="w-4 h-4 text-gray-300" /> : <GraduationCap className="w-4 h-4 text-indigo-400" />}
                        </div>

                        <div className={`
                            flex-1 max-w-[85%] rounded-2xl p-4 shadow-sm overflow-hidden
                            ${msg.role === 'user'
                                ? 'bg-gray-800 text-gray-100 rounded-tr-none'
                                : 'bg-gray-900 border border-gray-800 text-gray-300 rounded-tl-none'}
                        `}>
                            {renderMessageContent(msg)}
                        </div>
                    </div>
                ))}

                {state.status === 'THINKING' && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center">
                            <GraduationCap className="w-4 h-4 text-indigo-400" />
                        </div>
                        <div className="bg-gray-900 border border-gray-800 rounded-2xl rounded-tl-none p-4 flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
                            <span className="text-xs text-gray-500">
                                Consulting music library...
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-gray-900 border-t border-gray-800 space-y-3">
                <div className="relative">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={initialContext ? "Ask about this page..." : "Ask about music theory..."}
                        className="w-full bg-gray-950 text-gray-100 rounded-xl pl-4 pr-12 py-3 border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-none h-14 custom-scrollbar text-sm transition-colors"
                    />

                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || state.status === 'THINKING'}
                        className="absolute right-2 top-2 p-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded-lg transition-colors"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
                {!isWidget && (
                    <p className="text-[10px] text-gray-500 text-center flex items-center justify-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        AI uses Google Search for real-world info.
                    </p>
                )}
            </div>
        </div>
    );
};