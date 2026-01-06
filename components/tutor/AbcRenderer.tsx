
import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RefreshCw, Maximize2, X, Download, FileDown, Loader2 } from 'lucide-react';

interface Props {
    abc: string;
    id: string;
}

declare global {
    interface Window {
        ABCJS: any;
        webkitAudioContext: typeof AudioContext;
    }
}

// Timeout wrapper for promises
const withTimeout = <T,>(promise: Promise<T>, ms: number, errorMsg: string): Promise<T> => {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error(errorMsg)), ms);
        promise.then(resolve).catch(reject).finally(() => clearTimeout(timer));
    });
};

export const AbcRenderer: React.FC<Props> = ({ abc, id }) => {
    // Inline Refs & State
    const paperRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [synthControl, setSynthControl] = useState<any>(null);
    const [visualObj, setVisualObj] = useState<any>(null); // Store parsed ABC object
    const [isAudioReady, setIsAudioReady] = useState(false);
    const [audioError, setAudioError] = useState(false);

    // Fullscreen Refs & State
    const [isFullscreen, setIsFullscreen] = useState(false);
    const modalPaperRef = useRef<HTMLDivElement>(null);
    const [isModalPlaying, setIsModalPlaying] = useState(false);
    const [modalSynthControl, setModalSynthControl] = useState<any>(null);
    const [isModalAudioReady, setIsModalAudioReady] = useState(false);

    // Initialize Inline Rendering
    useEffect(() => {
        if (!paperRef.current || !window.ABCJS) return;

        setIsAudioReady(false);
        setAudioError(false);
        setSynthControl(null);

        const vObj = window.ABCJS.renderAbc(paperRef.current, abc, {
            responsive: 'resize',
            add_classes: true,
            paddingtop: 0,
            paddingbottom: 0,
            paddingright: 0,
            paddingleft: 0,
        });

        if (vObj && vObj.length > 0) {
            setVisualObj(vObj[0]);
        }

        if (window.ABCJS.synth.supportsAudio()) {
            const synth = new window.ABCJS.synth.CreateSynth();
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // Use timeout to prevent infinite loading
            withTimeout(
                synth.init({
                    audioContext: audioContext,
                    visualObj: vObj[0],
                    millisecondsPerMeasure: vObj[0].millisecondsPerMeasure(),
                    options: {
                        soundFontUrl: "https://paulrosen.github.io/midi-js-soundfonts/abcjs/"
                    }
                }).then(() => synth.prime()),
                10000, // 10 second timeout
                'Audio loading timed out'
            ).then(() => {
                setSynthControl(synth);
                setIsAudioReady(true);
            }).catch((error: any) => {
                console.warn("Audio problem:", error);
                setAudioError(true);
            });
        }

        return () => {
            if (synthControl) synthControl.stop();
        };
    }, [abc]);

    // Initialize Fullscreen Rendering when active
    useEffect(() => {
        if (!isFullscreen || !modalPaperRef.current || !window.ABCJS) return;

        setIsModalAudioReady(false);
        setModalSynthControl(null);

        // Small timeout to ensure DOM is ready 
        const timer = setTimeout(() => {
            const vObj = window.ABCJS.renderAbc(modalPaperRef.current, abc, {
                responsive: 'resize',
                add_classes: true,
                scale: 1.5, // Larger scale for fullscreen
                paddingtop: 30,
                paddingbottom: 30,
                paddingright: 30,
                paddingleft: 30,
            });

            if (window.ABCJS.synth.supportsAudio()) {
                const synth = new window.ABCJS.synth.CreateSynth();
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();

                synth.init({
                    audioContext: audioContext,
                    visualObj: vObj[0],
                    millisecondsPerMeasure: vObj[0].millisecondsPerMeasure(),
                    options: {
                        soundFontUrl: "https://paulrosen.github.io/midi-js-soundfonts/abcjs/"
                    }
                }).then(() => synth.prime()).then(() => {
                    setModalSynthControl(synth);
                    setIsModalAudioReady(true);
                }).catch((error: any) => console.warn("Modal Audio problem:", error));
            }
        }, 50);

        return () => {
            clearTimeout(timer);
            if (modalSynthControl) modalSynthControl.stop();
            // Reset synth control on unmount/close
            setModalSynthControl(null);
            setIsModalPlaying(false);
            setIsModalAudioReady(false);
        };
    }, [isFullscreen, abc]);

    const togglePlay = async (isModal: boolean) => {
        const control = isModal ? modalSynthControl : synthControl;
        const setPlaying = isModal ? setIsModalPlaying : setIsPlaying;
        const playingState = isModal ? isModalPlaying : isPlaying;
        const readyState = isModal ? isModalAudioReady : isAudioReady;

        if (!control || !readyState) return;

        if (playingState) {
            control.stop();
            setPlaying(false);
        } else {
            setPlaying(true);
            await control.start();
            setPlaying(false);
        }
    };

    const downloadMidi = () => {
        if (!visualObj || !window.ABCJS) return;

        try {
            // Generate MIDI binary
            const midi = window.ABCJS.synth.getMidiFile(visualObj, { midiOutputType: "binary" });
            const blob = new Blob([midi], { type: "audio/midi" });
            const url = window.URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = `maestro-result-${id}.mid`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (e) {
            console.error("Error generating MIDI", e);
            // Fallback for user feedback
            alert("Could not generate MIDI for this example.");
        }
    };

    return (
        <>
            {/* Inline Card */}
            <div className="my-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-md">
                <div className="bg-gray-800 px-3 py-2 flex items-center justify-between border-b border-gray-700">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Musical Example</span>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => togglePlay(false)}
                            disabled={!isAudioReady}
                            className={`flex items-center gap-2 px-3 py-1 rounded text-xs font-bold transition-colors ${isAudioReady
                                ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            {audioError ? (
                                <RefreshCw className="w-3 h-3" />
                            ) : !isAudioReady ? (
                                <Loader2 className="w-3 h-3 animate-spin" />
                            ) : (
                                isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />
                            )}
                            {audioError ? 'Retry' : isPlaying ? 'Stop' : (isAudioReady ? 'Play' : 'Loading...')}
                        </button>

                        <div className="h-4 w-px bg-gray-600 mx-1"></div>

                        <button
                            onClick={downloadMidi}
                            className="p-1 hover:bg-gray-700 rounded text-gray-400 hover:text-white transition-colors"
                            title="Download MIDI"
                        >
                            <Download className="w-4 h-4" />
                        </button>

                        <button
                            onClick={() => setIsFullscreen(true)}
                            className="p-1 hover:bg-gray-700 rounded text-gray-400 hover:text-white transition-colors"
                            title="Expand Score"
                        >
                            <Maximize2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="p-4 bg-gray-850 flex justify-center overflow-x-auto">
                    <div ref={paperRef} id={`paper-${id}`} className="min-w-[200px] text-gray-200" />
                </div>
            </div>

            {/* Fullscreen Modal */}
            {isFullscreen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="bg-gray-900 w-full max-w-5xl h-[90vh] rounded-2xl shadow-2xl flex flex-col border border-gray-700">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-950 rounded-t-2xl">
                            <h3 className="font-bold text-lg text-white flex items-center gap-2">
                                <Maximize2 className="w-5 h-5 text-indigo-400" />
                                Full Score View
                            </h3>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => togglePlay(true)}
                                    disabled={!isModalAudioReady}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-colors ${isModalAudioReady
                                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                                        : 'bg-gray-800 text-gray-400 cursor-not-allowed border border-gray-700'
                                        }`}
                                >
                                    {!isModalAudioReady ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        isModalPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />
                                    )}
                                    {isModalPlaying ? 'Stop Playback' : (isModalAudioReady ? 'Play Score' : 'Loading Audio...')}
                                </button>

                                <button
                                    onClick={downloadMidi}
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg font-medium transition-colors border border-gray-700"
                                >
                                    <FileDown className="w-4 h-4" />
                                    Download MIDI
                                </button>

                                <button
                                    onClick={() => {
                                        if (modalSynthControl) modalSynthControl.stop();
                                        setIsFullscreen(false);
                                    }}
                                    className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="flex-1 overflow-auto p-8 bg-gray-950 flex justify-center items-start">
                            <div className="w-full flex justify-center">
                                <div ref={modalPaperRef} className="w-full max-w-4xl" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
