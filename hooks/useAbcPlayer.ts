import { useEffect, useRef, useMemo } from 'react';
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

    // Generate stable IDs for this quiz instance
    const { visualId, audioId } = useMemo(() => {
        const suffix = title.replace(/\s+/g, '-').toLowerCase();
        return {
            visualId: `abc-paper-${suffix}`,
            audioId: `abc-audio-${suffix}`
        };
    }, [title]);

    useEffect(() => {
        if (!abcNotation) return;

        // Reset containers content
        if (visualRef.current) visualRef.current.innerHTML = "";
        if (audioRef.current) audioRef.current.innerHTML = "";

        // Cleanup previous synth instances
        if (synthRef.current) synthRef.current = null;
        if (synthControlRef.current) synthControlRef.current = null;

        try {
            // 1. Render Visual
            if (visualRef.current) {
                // renderAbc returns an array of tunes
                visualObjRef.current = abcjs.renderAbc(visualRef.current, abcNotation, {
                    responsive: "resize",
                    add_classes: true,
                })[0];
            }

            // 2. Render Audio
            // We need to use the CSS selector ID for synthControl.load to work correctly
            if (abcjs.synth.supportsAudio()) {
                const synthControl = new abcjs.synth.SynthController();
                synthControlRef.current = synthControl;

                // Passed explicit ID selector as required by abcjs
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
                            .catch((e: any) => console.warn("Audio setTune error:", e));
                    }
                }).catch((e: any) => console.warn("Audio init error:", e));
            }
        } catch (err) {
            console.error("ABCJS Error:", err);
        }
    }, [abcNotation, title, visualId, audioId]);

    return {
        visualRef,
        audioRef,
        visualId,
        audioId
    };
};
