
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

export const VexTabRenderer: React.FC<Props> = ({ data, id }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !window.Vex) return;

        const container = containerRef.current;
        container.innerHTML = '';

        try {
            const VF = window.Vex.Flow;
            const width = 500;
            const height = 200;

            const renderer = new VF.Renderer(container, VF.Renderer.Backends.SVG);
            renderer.resize(width, height);
            const context = renderer.getContext();
            
            // Dark mode styles
            context.setFont("Arial", 10, "").setBackgroundFillStyle("#0d1117");
            context.setFillStyle("#e2e8f0");
            context.setStrokeStyle("#e2e8f0");

            // Simple Parser State
            let currentDuration = 'q';
            const notes: any[] = [];
            let timeSignature = '4/4';
            
            // 1. Create Stave
            // We'll create a generic TabStave. 
            // Parsing "tabstave" options is complex, so we'll stick to basic tab for now.
            // If the AI asks for notation=true, implementing the coupled stave is harder in a simple parser.
            // We will stick to TAB only for this component as requested "VexTab for tab".
            
            const tabStave = new VF.TabStave(10, 40, width - 20);
            tabStave.addClef("tab");
            
            // 2. Parse Data
            // We look for "notes" lines.
            // Support simple duration changes :w :h :q :8 :16
            // Support notes 3/2 (fret 3, string 2)
            // Support chords (3/2.5/3)
            
            const lines = data.split('\n');
            lines.forEach(line => {
                const l = line.trim();
                if (l.startsWith('options') || l.startsWith('tabstave')) {
                     // Check for time signature
                     // e.g. time=4/4
                     const timeMatch = l.match(/time=([\w\/]+)/);
                     if (timeMatch) {
                        timeSignature = timeMatch[1];
                     }
                } else if (l.startsWith('notes')) {
                    const tokens = l.replace('notes', '').trim().split(/\s+/);
                    
                    tokens.forEach(token => {
                        // Check Duration
                        if (token.startsWith(':')) {
                            const d = token.substring(1);
                            if (['w','h','q','8','16','32'].includes(d)) {
                                currentDuration = d;
                            }
                            return;
                        }

                        // Check Bar
                        if (token === '|') {
                            notes.push(new VF.BarNote());
                            return;
                        }

                        // Check Note/Chord
                        // Format: 5/2 or (5/2.7/3)
                        // VexTab uses dot for chord separation inside parens? Or space? 
                        // Standard VexTab: (4/5 4/6) space separated inside parens.
                        // Our parser: let's support 5/2 single, and (5/2.7/3) dot separated or (5/2 7/3) space
                        
                        let positions = [];
                        let isChord = false;

                        if (token.startsWith('(') && token.endsWith(')')) {
                            isChord = true;
                            const inner = token.slice(1, -1);
                            // Split by . or space
                            const parts = inner.split(/[.\s]+/);
                            parts.forEach(p => {
                                const [fret, str] = p.split('/');
                                if (fret !== undefined && str !== undefined) {
                                    positions.push({ str: parseInt(str), fret: parseInt(fret) });
                                }
                            });
                        } else {
                            const [fret, str] = token.split('/');
                            if (fret !== undefined && str !== undefined) {
                                positions.push({ str: parseInt(str), fret: parseInt(fret) });
                            }
                        }

                        if (positions.length > 0) {
                            const tabNote = new VF.TabNote({
                                positions: positions,
                                duration: currentDuration
                            });
                            notes.push(tabNote);
                        }
                    });
                }
            });

            // Set Context
            tabStave.setContext(context).draw();

            if (notes.length > 0) {
                // If there are too many notes, we might need multiple staves, 
                // but for this snippet renderer, we assume it fits or VexFlow handles squeeze.
                // Using Formatter to layout
                VF.Formatter.FormatAndDraw(context, tabStave, notes);
            }

            // Post-render SVG sizing
            const svg = container.querySelector('svg');
            if (svg) {
                svg.style.width = '100%';
                svg.style.height = 'auto';
            }

        } catch (e: any) {
            console.error("VexTab Render Error:", e);
            container.innerHTML = `<div class="text-red-400 text-xs p-2 font-mono bg-red-900/20 rounded border border-red-800">Error rendering tab: ${e.message}</div>`;
        }
    }, [data]);

    return (
        <div className="my-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-md">
            <div className="bg-gray-800 px-3 py-2 border-b border-gray-700">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Guitar Tablature</span>
            </div>
            <div className="p-4 flex justify-center bg-gray-950 vexflow-container">
                <div ref={containerRef} id={`vextab-${id}`} className="max-w-full" />
            </div>
        </div>
    );
};
