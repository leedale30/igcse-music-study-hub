import { useEffect, useRef, useMemo, useCallback, useState } from 'react';
import abcjs from 'abcjs';
import 'abcjs/abcjs-audio.css';

interface UseAbcPlayerProps {
    abcNotation: string;
    title: string;
}

export const useAbcPlayer = ({ abcNotation, title }: UseAbcPlayerProps) => {
    const visualRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLDivElement>(null);
    const [isReady, setIsReady] = useState(false);

    // Internal refs to hold instances
    const synthRef = useRef<any>(null);
    const synthControlRef = useRef<any>(null);
    const visualObjRef = useRef<any>(null);
    const audioInitializedRef = useRef<boolean>(false);

    // Generate stable IDs for this quiz instance
    const { visualId, audioId } = useMemo(() => {
        const suffix = title.replace(/\s+/g, '-').toLowerCase();
        return {
            visualId: `abc-paper-${suffix}`,
            audioId: `abc-audio-${suffix}`
        };
    }, [title]);

    // Effect to detect when refs are ready
    useEffect(() => {
        // Use a small delay to ensure the DOM is fully committed
        const timer = setTimeout(() => {
            if (visualRef.current && audioRef.current) {
                setIsReady(true);
            }
        }, 50);
        return () => clearTimeout(timer);
    }, [abcNotation, title]);

    // Main effect for rendering - only runs when isReady
    useEffect(() => {
        if (!abcNotation || !isReady) return;

        // Cleanup previous instances if they exist
        if (synthControlRef.current) {
            try {
                synthControlRef.current.disable(true);
            } catch (e) {
                console.warn("Error disabling previous synthControl:", e);
            }
        }

        // Reset containers content
        if (visualRef.current) visualRef.current.innerHTML = "";
        if (audioRef.current) audioRef.current.innerHTML = "";

        // Reset refs
        synthRef.current = null;
        synthControlRef.current = null;
        audioInitializedRef.current = false;

        try {
            // 1. Render Visual
            if (visualRef.current) {
                visualObjRef.current = abcjs.renderAbc(visualRef.current, abcNotation, {
                    responsive: "resize",
                    add_classes: true,
                })[0];
            }

            // 2. Set up audio control UI
            if (abcjs.synth.supportsAudio() && audioRef.current) {
                const synthControl = new abcjs.synth.SynthController();
                synthControlRef.current = synthControl;

                // Load the audio control UI using the element ID
                synthControl.load(`#${audioId}`, null, {
                    displayRestart: true,
                    displayPlay: true,
                    displayProgress: true,
                    displayWarp: true,
                });

                // Create and initialize the synth
                const synth = new abcjs.synth.CreateSynth();
                synthRef.current = synth;

                synth.init({
                    visualObj: visualObjRef.current,
                    options: {
                        soundFontUrl: "https://paulrosen.github.io/midi-js-soundfonts/FluidR3_GM/",
                    }
                }).then(() => {
                    if (synthControlRef.current && visualObjRef.current) {
                        synthControlRef.current.setTune(visualObjRef.current, true)
                            .then(() => {
                                console.log("Audio successfully loaded and tuned");
                                audioInitializedRef.current = true;
                            })
                            .catch((e: any) => console.warn("Audio setTune error:", e));
                    }
                }).catch((e: any) => console.warn("Audio init error:", e));
            }
        } catch (err) {
            console.error("ABCJS Error:", err);
        }

        return () => {
            // Cleanup on unmount
            if (synthControlRef.current) {
                try {
                    synthControlRef.current.disable(true);
                } catch (e) {
                    console.warn("Error disabling synthControl on unmount:", e);
                }
            }
        };
    }, [abcNotation, title, visualId, audioId, isReady]);

    // Reset isReady when notation changes
    useEffect(() => {
        setIsReady(false);
    }, [abcNotation, title]);

    return {
        visualRef,
        audioRef,
        visualId,
        audioId
    };
};
