
import React, { useEffect, useRef } from 'react';

interface Props {
    data: string;
    id: string;
}

declare global {
    interface Window {
        Vex: any;
    }
}

export const VexFlowRenderer: React.FC<Props> = ({ data, id }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !window.Vex) return;

        const container = containerRef.current;
        container.innerHTML = ''; // Clear previous render

        try {
            const VF = window.Vex.Flow;
            
            // Parse the data block
            const lines = data.split('\n');
            let clef = 'treble';
            let time = '4/4';
            let notesStr = '';

            lines.forEach(line => {
                const [key, ...valParts] = line.split(':');
                if (!key || valParts.length === 0) return;
                
                const val = valParts.join(':').trim();
                const k = key.trim().toLowerCase();
                
                if (k === 'clef') clef = val;
                if (k === 'time') time = val;
                if (k === 'notes') notesStr = val;
            });

            if (!notesStr) {
                // If no notes provided, we can't render much
                return;
            }

            // Initialize Factory with the container element directly
            const vf = new VF.Factory({
                renderer: { elementId: container, width: 500, height: 200, backend: VF.Renderer.Backends.SVG }
            });

            const context = vf.getContext();
            
            // Apply Dark Mode Styling to Context
            context.setFont("Arial", 10, "").setBackgroundFillStyle("#0d1117");
            context.setFillStyle("#e2e8f0"); // Text/Notes color
            context.setStrokeStyle("#e2e8f0"); // Lines color

            const score = vf.EasyScore();
            const system = vf.System();

            // Create notes
            const notes = score.notes(notesStr, { stem: 'up' });
            
            // Create voice manually to disable strict mode
            // This prevents "Voice does not have enough notes" errors if the AI generates incomplete measures
            const voice = score.voice(notes);
            voice.setStrict(false);

            // Render Stave
            system.addStave({
                voices: [ voice ]
            }).addClef(clef).addTimeSignature(time);

            // Add connector (start line)
            system.addConnector(); 

            vf.draw();

            // Post-render SVG adjustments for responsive width
            const svg = container.querySelector('svg');
            if (svg) {
                svg.style.width = '100%';
                svg.style.height = 'auto';
                svg.setAttribute('viewBox', '0 0 500 200');
            }

        } catch (e: any) {
            console.error("VexFlow Render Error:", e);
            // Handle cases where error might be an object or string
            const msg = e.message || (typeof e === 'object' ? JSON.stringify(e) : String(e));
            container.innerHTML = `<div class="text-red-400 text-xs p-2 font-mono bg-red-900/20 rounded border border-red-800">Error rendering notation: ${msg}</div>`;
        }
    }, [data]);

    return (
        <div className="my-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-md">
            <div className="bg-gray-800 px-3 py-2 border-b border-gray-700">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Theory Visualization</span>
            </div>
            <div className="p-4 flex justify-center bg-gray-950 vexflow-container">
                <div ref={containerRef} id={`vex-${id}`} className="max-w-full" />
            </div>
        </div>
    );
};
