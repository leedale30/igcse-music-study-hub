declare module 'abcjs' {
    export interface AbcVisualParams {
        responsive?: "resize";
        add_classes?: boolean;
        scale?: number;
    }

    export interface AbcAudioParams {
        displayRestart?: boolean;
        displayPlay?: boolean;
        displayProgress?: boolean;
        displayWarp?: boolean;
    }

    export interface SynthOptions {
        soundFontUrl?: string;
        [key: string]: any;
    }

    export namespace synth {
        class CreateSynth {
            init(params: {
                visualObj: any;
                options?: SynthOptions;
            }): Promise<void>;
        }

        class SynthController {
            load(selector: string, cursorControl: any, options: AbcAudioParams): void;
            setTune(visualObj: any, userAction: boolean, audioParams?: any): Promise<void>;
        }

        function supportsAudio(): boolean;
    }

    export function renderAbc(
        outputId: string,
        abcSpec: string,
        params?: AbcVisualParams
    ): any[];

    const abcjs: {
        renderAbc: typeof renderAbc;
        synth: typeof synth;
    };

    export default abcjs;
}
