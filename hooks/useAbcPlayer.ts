import { useEffect, useRef, useMemo, useCallback } from 'react';
import abcjs from 'abcjs';
import 'abcjs/abcjs-audio.css';

interface UseAbcPlayerProps {
    abcNotation: string;
    title: string;
}

export const useAbcPlayer = ({ abcNotation, title }: UseAbcPlayerProps) => {
    const visualRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLDivElement>(null);

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

    // Function to initialize audio - called on user interaction
    const initializeAudio = useCallback(() => {
        if (audioInitializedRef.current || !visualObjRef.current) return;

        if (!abcjs.synth.supportsAudio()) {
            console.warn("Audio not supported");
            return;
        }

        try {
            const synthControl = new abcjs.synth.SynthController();
            synthControlRef.current = synthControl;

            // Load the audio control UI
            synthControl.load(`#${audioId}`, null, {
                displayRestart: true,
                displayPlay: true,
                displayProgress: true,
                displayWarp: true,
            });

            const synth = new abcjs.synth.CreateSynth();
            synthRef.current = synth;

            synth.init({
                visualObj: visualObjRef.current,
                options: {
                    soundFontUrl: "https://paulrosen.github.io/midi-js-soundfonts/FluidR3_GM/",
                }
            }).then(() => {
                if (synthControlRef.current) {
                    synthControlRef.current.setTune(visualObjRef.current, true)
                        .then(() => {
                            console.log("Audio successfully loaded and tuned");
                            audioInitializedRef.current = true;
                        })
                        .catch((e: any) => console.warn("Audio setTune error:", e));
                }
            }).catch((e: any) => console.warn("Audio init error:", e));
        } catch (err) {
            console.error("ABCJS Audio Error:", err);
        }
    }, [audioId]);

    useEffect(() => {
        if (!abcNotation) return;

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
            // 1. Render Visual immediately
            if (visualRef.current) {
                visualObjRef.current = abcjs.renderAbc(visualRef.current, abcNotation, {
                    responsive: "resize",
                    add_classes: true,
                })[0];
            }

            // 2. Set up audio control UI (but don't initialize synth yet)
            // The synth will be initialized on first user click
            if (abcjs.synth.supportsAudio() && audioRef.current) {
                const synthControl = new abcjs.synth.SynthController();
                synthControlRef.current = synthControl;

                // Load the audio control UI - this creates the play button
                synthControl.load(`#${audioId}`, null, {
                    displayRestart: true,
                    displayPlay: true,
                    displayProgress: true,
                    displayWarp: true,
                });

                // Create the synth but don't call init() yet
                const synth = new abcjs.synth.CreateSynth();
                synthRef.current = synth;

                // Initialize the synth - abcjs handles the user interaction requirement internally
                // when the user clicks play, it will trigger the audio context
                synth.init({
                    visualObj: visualObjRef.current,
                    options: {
                        soundFontUrl: "https://paulrosen.github.io/midi-js-soundfonts/FluidR3_GM/",
                    }
                }).then(() => {
                    if (synthControlRef.current) {
                        // setTune with userAction=true tells abcjs that this came from a user action
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
    }, [abcNotation, title, visualId, audioId, initializeAudio]);

    return {
        visualRef,
        audioRef,
        visualId,
        audioId,
        initializeAudio
    };
};
