import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RefreshCw, Maximize2, X, Download, FileDown, FileText, Loader2, AlertCircle } from 'lucide-react';
import abcjs from 'abcjs';

interface Props {
    abc: string;
    id: string;
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
    const [visualObj, setVisualObj] = useState<any>(null);
    const [isAudioReady, setIsAudioReady] = useState(false);
    const [audioError, setAudioError] = useState(false);
    const [renderError, setRenderError] = useState<string | null>(null);

    // Fullscreen Refs & State
    const [isFullscreen, setIsFullscreen] = useState(false);
    const modalPaperRef = useRef<HTMLDivElement>(null);
    const [isModalPlaying, setIsModalPlaying] = useState(false);
    const [modalSynthControl, setModalSynthControl] = useState<any>(null);
    const [isModalAudioReady, setIsModalAudioReady] = useState(false);

    // Clean ABC notation (remove markdown artifacts, ensure proper headers)
    const cleanAbc = (rawAbc: string): string => {
        let cleaned = rawAbc.trim();

        // Remove markdown code block markers if present
        cleaned = cleaned.replace(/^```abc\s*/i, '').replace(/```\s*$/, '');
        cleaned = cleaned.replace(/^```\s*/i, '').replace(/```\s*$/, '');

        // Ensure X: header exists (required for ABC)
        if (!cleaned.match(/^X:\s*\d+/m)) {
            cleaned = 'X:1\n' + cleaned;
        }

        // Ensure T: header exists
        if (!cleaned.match(/^T:/m)) {
            cleaned = cleaned.replace(/^(X:\s*\d+)/, '$1\nT:Untitled');
        }

        // Ensure M: (meter) exists
        if (!cleaned.match(/^M:/m)) {
            cleaned = cleaned.replace(/(^T:.*$)/m, '$1\nM:4/4');
        }

        // Ensure L: (default note length) exists
        if (!cleaned.match(/^L:/m)) {
            cleaned = cleaned.replace(/(^M:.*$)/m, '$1\nL:1/8');
        }

        // Ensure K: (key) exists
        if (!cleaned.match(/^K:/m)) {
            cleaned = cleaned.replace(/(^L:.*$)/m, '$1\nK:C');
        }

        return cleaned;
    };

    // Initialize Inline Rendering
    useEffect(() => {
        console.log(`[AbcRenderer] Initializing for ID: ${id}`);
        if (!paperRef.current || !abcjs) {
            const error = !paperRef.current ? 'paperRef is null' : 'abcjs not loaded';
            console.error(`[AbcRenderer] Initialization failed: ${error}`);
            setRenderError(error);
            return;
        }

        setIsAudioReady(false);
        setAudioError(false);
        setSynthControl(null);
        setRenderError(null);

        try {
            const cleanedAbc = cleanAbc(abc);
            console.log(`[AbcRenderer] Rendering ABC for ${id}...`);

            const vObj = abcjs.renderAbc(paperRef.current, cleanedAbc, {
                responsive: 'resize',
                add_classes: true,
                paddingtop: 10,
                paddingbottom: 10,
                paddingright: 10,
                paddingleft: 10,
                staffwidth: 700,
                wrap: {
                    minSpacing: 1.5,
                    maxSpacing: 2.5,
                    preferredMeasuresPerLine: 4
                }
            });

            if (!vObj || vObj.length === 0) {
                console.error(`[AbcRenderer] Render returned no visual objects for ${id}`);
                setRenderError('Could not parse ABC notation');
                return;
            }

            console.log(`[AbcRenderer] Render successful for ${id}`);
            setVisualObj(vObj[0]);

            // Initialize audio - separate from visual rendering to prevent blocking
            if (abcjs.synth && abcjs.synth.supportsAudio()) {
                console.log(`[AbcRenderer] Initializing audio for ${id}...`);
                const synth = new abcjs.synth.CreateSynth();
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();

                withTimeout(
                    synth.init({
                        audioContext: audioContext,
                        visualObj: vObj[0],
                        millisecondsPerMeasure: vObj[0].millisecondsPerMeasure ? vObj[0].millisecondsPerMeasure() : 2000,
                        options: {
                            soundFontUrl: "https://paulrosen.github.io/midi-js-soundfonts/abcjs/"
                        }
                    }).then(() => synth.prime()),
                    15000, // 15 second timeout for longer pieces
                    'Audio loading timed out'
                ).then(() => {
                    console.log(`[AbcRenderer] Audio ready for ${id}`);
                    setSynthControl(synth);
                    setIsAudioReady(true);
                }).catch((error: any) => {
                    console.warn(`[AbcRenderer] Audio problem for ${id}:`, error);
                    setAudioError(true);
                });
            } else {
                console.log(`[AbcRenderer] Audio not supported or not present for ${id}`);
            }
        } catch (e: any) {
            console.error(`[AbcRenderer] Exception during render for ${id}:`, e);
            setRenderError(e.message || 'Error rendering notation');
        }

        return () => {
            if (synthControl) {
                try { synthControl.stop(); } catch (e) { }
            }
        };
    }, [abc, id]);

    // Initialize Fullscreen Rendering when active
    useEffect(() => {
        if (!isFullscreen || !modalPaperRef.current || !abcjs) return;

        setIsModalAudioReady(false);
        setModalSynthControl(null);

        const timer = setTimeout(() => {
            try {
                const cleanedAbc = cleanAbc(abc);

                const vObj = abcjs.renderAbc(modalPaperRef.current, cleanedAbc, {
                    responsive: 'resize',
                    add_classes: true,
                    scale: 1.3,
                    paddingtop: 30,
                    paddingbottom: 30,
                    paddingright: 30,
                    paddingleft: 30,
                    staffwidth: 900,
                    wrap: {
                        minSpacing: 1.5,
                        maxSpacing: 2.5,
                        preferredMeasuresPerLine: 4
                    }
                });

                if (vObj && vObj.length > 0 && abcjs.synth && abcjs.synth.supportsAudio()) {
                    const synth = new abcjs.synth.CreateSynth();
                    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

                    synth.init({
                        audioContext: audioContext,
                        visualObj: vObj[0],
                        millisecondsPerMeasure: vObj[0].millisecondsPerMeasure ? vObj[0].millisecondsPerMeasure() : 2000,
                        options: {
                            soundFontUrl: "https://paulrosen.github.io/midi-js-soundfonts/abcjs/"
                        }
                    }).then(() => synth.prime()).then(() => {
                        setModalSynthControl(synth);
                        setIsModalAudioReady(true);
                    }).catch((error: any) => console.warn("Modal Audio problem:", error));
                }
            } catch (e) {
                console.error("Modal render error:", e);
            }
        }, 100);

        return () => {
            clearTimeout(timer);
            if (modalSynthControl) {
                try { modalSynthControl.stop(); } catch (e) { }
            }
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
            try {
                await control.start();
            } catch (e) {
                console.error("Playback error:", e);
            }
            setPlaying(false);
        }
    };

    const retryAudio = () => {
        setAudioError(false);
        setIsAudioReady(false);
        // Force re-render by triggering the effect
        const cleanedAbc = cleanAbc(abc);
        if (visualObj && abcjs.synth && abcjs.synth.supportsAudio()) {
            const synth = new abcjs.synth.CreateSynth();
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();

            synth.init({
                audioContext: audioContext,
                visualObj: visualObj,
                millisecondsPerMeasure: visualObj.millisecondsPerMeasure ? visualObj.millisecondsPerMeasure() : 2000,
                options: {
                    soundFontUrl: "https://paulrosen.github.io/midi-js-soundfonts/abcjs/"
                }
            }).then(() => synth.prime()).then(() => {
                setSynthControl(synth);
                setIsAudioReady(true);
            }).catch((error: any) => {
                console.warn("Audio retry failed:", error);
                setAudioError(true);
            });
        }
    };

    const downloadMidi = () => {
        if (!visualObj || !abcjs) {
            alert("Score not ready. Please wait for it to load.");
            return;
        }

        try {
            // Use link format which is more reliable
            const midi = abcjs.synth.getMidiFile(visualObj, {
                midiOutputType: "link",
                fileName: `maestro-${id}`
            });

            if (midi && midi.href) {
                // It's an anchor element, click it
                document.body.appendChild(midi);
                midi.click();
                document.body.removeChild(midi);
            } else {
                // Fallback to binary
                const midiBinary = abcjs.synth.getMidiFile(visualObj, { midiOutputType: "binary" });
                if (midiBinary && midiBinary.length > 0) {
                    const blob = new Blob([midiBinary], { type: "audio/midi" });
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `maestro-${id}.mid`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);
                } else {
                    throw new Error("Empty MIDI data");
                }
            }
        } catch (e) {
            console.error("Error generating MIDI:", e);
            alert("Could not generate MIDI. The notation may be too complex or invalid.");
        }
    };

    const downloadAbc = () => {
        const cleanedAbc = cleanAbc(abc);
        const blob = new Blob([cleanedAbc], { type: "text/plain" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `maestro-${id}.abc`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    };

    // Error state
    if (renderError) {
        return (
            <div className="my-4 bg-red-900/30 rounded-lg border border-red-700 p-4">
                <div className="flex items-center gap-2 text-red-400">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Could not render music notation</span>
                </div>
                <p className="text-red-300 text-sm mt-2">{renderError}</p>
                <button
                    onClick={downloadAbc}
                    className="mt-3 flex items-center gap-2 px-3 py-1.5 bg-red-800 hover:bg-red-700 text-white rounded text-sm"
                >
                    <FileText className="w-4 h-4" />
                    Download ABC+ Source
                </button>
            </div>
        );
    }

    return (
        <>
            {/* Inline Card */}
            <div className="my-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-md">
                <div className="bg-gray-800 px-3 py-2 flex items-center justify-between border-b border-gray-700">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Musical Example</span>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={audioError ? retryAudio : () => togglePlay(false)}
                            disabled={!isAudioReady && !audioError}
                            className={`flex items-center gap-2 px-3 py-1 rounded text-xs font-bold transition-colors ${isAudioReady || audioError
                                ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                }`}
                            title={audioError ? "Retry loading audio" : isPlaying ? "Stop" : "Play"}
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
                            onClick={downloadAbc}
                            className="p-1 hover:bg-gray-700 rounded text-gray-400 hover:text-white transition-colors"
                            title="Download ABC+ Source"
                        >
                            <FileText className="w-4 h-4" />
                        </button>

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

                <div className="p-4 bg-gray-850 flex justify-center overflow-x-auto overflow-y-auto max-h-[400px]">
                    <div ref={paperRef} id={`paper-${id}`} className="min-w-[200px] text-gray-200" />
                </div>
            </div>

            {/* Fullscreen Modal */}
            {isFullscreen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="bg-gray-900 w-full max-w-6xl h-[90vh] rounded-2xl shadow-2xl flex flex-col border border-gray-700">
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
                                    title={isModalPlaying ? "Stop" : "Play"}
                                >
                                    {!isModalAudioReady ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        isModalPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />
                                    )}
                                    {isModalPlaying ? 'Stop Playback' : (isModalAudioReady ? 'Play Score' : 'Loading Audio...')}
                                </button>

                                <button
                                    onClick={downloadAbc}
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg font-medium transition-colors border border-gray-700"
                                    title="Download ABC+ Source"
                                >
                                    <FileText className="w-4 h-4" />
                                    ABC+
                                </button>

                                <button
                                    onClick={downloadMidi}
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg font-medium transition-colors border border-gray-700"
                                    title="Download MIDI"
                                >
                                    <FileDown className="w-4 h-4" />
                                    MIDI
                                </button>

                                <button
                                    onClick={() => {
                                        if (modalSynthControl) {
                                            try { modalSynthControl.stop(); } catch (e) { }
                                        }
                                        setIsFullscreen(false);
                                    }}
                                    className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
                                    title="Close"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="flex-1 overflow-auto p-8 bg-gray-950 flex justify-center items-start">
                            <div className="w-full flex justify-center">
                                <div ref={modalPaperRef} className="w-full max-w-5xl" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
