class AbcPlayer {
    constructor(visualId, audioId, options = {}) {
        this.visualId = visualId;
        this.audioId = audioId;
        this.options = options;
        this.visualObj = null;
        this.synthControl = null;
        this.synth = null;
        this.currentAbc = ""; // Store for reloading
    }

    setSoundFont(url) {
        this.options.synthOptions = {
            ...this.options.synthOptions,
            soundFontUrl: url
        };
        // Reload if we have content
        if (this.currentAbc) {
            return this.load(this.currentAbc);
        }
        return Promise.resolve();
    }

    load(abcString) {
        this.currentAbc = abcString;

        if (typeof ABCJS === 'undefined') {
            console.warn("ABCJS not loaded yet. Retrying in 100ms...");
            setTimeout(() => this.load(abcString), 100);
            return;
        }

        // Cleanup previous instance to ensure SoundFont switches correctly
        if (this.synth) {
            // abcjs doesn't expose a direct 'stop' on CreateSynth instance easily without synthControl,
            // but we can try to destroy the controller or valid references.
            // Actually, simply re-creating it often works, but explicit cleanup is safer.
            this.synth = null;
        }
        if (this.synthControl) {
            // this.synthControl.destroy(); // if available
            this.synthControl = null;
        }

        // Clear containers
        const visEl = document.getElementById(this.visualId);
        const audEl = document.getElementById(this.audioId);
        if (visEl) visEl.innerHTML = "";
        if (audEl) audEl.innerHTML = "";

        // Render Visual
        this.visualObj = ABCJS.renderAbc(this.visualId, abcString, {
            responsive: "resize",
            add_classes: true,
            ...this.options.visualOptions
        })[0];

        // Setup Audio
        if (ABCJS.synth.supportsAudio()) {
            this.synthControl = new ABCJS.synth.SynthController();
            this.synthControl.load(`#${this.audioId}`, null, {
                displayRestart: true,
                displayPlay: true,
                displayProgress: true,
                displayWarp: true,
                ...this.options.controlOptions
            });

            this.synth = new ABCJS.synth.CreateSynth();
            return this.synth.init({
                visualObj: this.visualObj,
                options: {
                    soundFontUrl: "https://paulrosen.github.io/midi-js-soundfonts/FluidR3_GM/",
                    ...this.options.synthOptions
                }
            }).then(() => {
                if (this.synthControl) {
                    return this.synthControl.setTune(this.visualObj, true);
                }
            }).catch(err => console.warn("Audio init error:", err));
        } else {
            if (audEl) audEl.innerHTML = "<div class='audio-error'>Audio not supported</div>";
            return Promise.resolve();
            return Promise.resolve();
        }
    }

    destroy() {
        // Cleanup if necessary (ABCJS doesn't strictly require explicit destroy for simple usage, 
        // but useful if we were doing more complex state management)
        this.visualObj = null;
        this.synthControl = null;
        this.synth = null;

        const visEl = document.getElementById(this.visualId);
        const audEl = document.getElementById(this.audioId);
        if (visEl) visEl.innerHTML = "";
        if (audEl) audEl.innerHTML = "";
    }
}
