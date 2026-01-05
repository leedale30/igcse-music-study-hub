
import React from 'react';

interface Props {
    data: string;
    id: string;
}

interface ChordData {
    name: string;
    strings: (number | 'x' | 'o')[]; // Can be 4 (Uke/Mando) or 6 (Guitar)
}

export const MusFretsRenderer: React.FC<Props> = ({ data, id }) => {
    // Parser: 
    // Guitar: "C x32010" (6 chars)
    // Uke/Mando: "C 0003" (4 chars)
    const parseChords = (input: string): ChordData[] => {
        const lines = input.split('\n').filter(l => l.trim().length > 0);
        const chords: ChordData[] = [];

        lines.forEach(line => {
            const parts = line.trim().split(/\s+/);
            if (parts.length < 2) return;

            const name = parts[0];
            let patternString = parts.slice(1).join('');
            
            let strings: (number | 'x' | 'o')[] = [];
            
            // Check if space separated or compact
            // Space separated if parts > 2 (Name + at least 2 numbers)
            // But we must be careful. "C 0003" is parts.length=2. "C 0 0 0 3" is parts.length=5.
            
            if (parts.length > 2) {
                // Space separated format: "x 3 2 0 1 0" or "0 0 0 3"
                strings = parts.slice(1).map(p => {
                    if (p.toLowerCase() === 'x') return 'x';
                    if (p.toLowerCase() === 'o') return 'o'; 
                    const n = parseInt(p);
                    return isNaN(n) ? 0 : n;
                });
            } else {
                // Compact format: "x32010" or "0003"
                strings = patternString.split('').map(char => {
                    if (char.toLowerCase() === 'x') return 'x';
                    if (char.toLowerCase() === 'o') return 'o'; 
                    const n = parseInt(char);
                    return isNaN(n) ? 0 : n;
                });
            }

            // Determine instrument type by length.
            // If 4, keep as 4 (Uke/Mando).
            // If 6, keep as 6 (Guitar).
            // If neither (e.g. 5 or 7), default to 6 strings logic (pad or trim).
            if (strings.length !== 4 && strings.length !== 6) {
                 if (strings.length > 6) strings = strings.slice(0, 6);
                 while (strings.length < 6) strings.push('x');
            }

            chords.push({ name, strings });
        });

        return chords;
    };

    const renderChord = (chord: ChordData, index: number) => {
        // Layout constants
        const width = 100;
        const height = 140;
        const numFrets = 5;
        const stringSpacing = 14;
        const fretSpacing = 18;
        
        const numStrings = chord.strings.length;
        
        // Calculate dynamic margin to center the chord diagram
        // Width of the strings block = (numStrings - 1) * spacing
        const totalStringsWidth = (numStrings - 1) * stringSpacing;
        const marginX = (width - totalStringsWidth) / 2;
        const marginY = 25;

        // Calculate fret range
        const frets = chord.strings.filter(s => typeof s === 'number' && s > 0) as number[];
        const minFret = frets.length > 0 ? Math.min(...frets) : 0;
        const maxFret = frets.length > 0 ? Math.max(...frets) : 0;

        let startFret = 1;
        if (maxFret > 5) {
            startFret = minFret;
        }

        // Drawing helpers
        const getStringX = (i: number) => marginX + i * stringSpacing;
        const getFretY = (i: number) => marginY + i * fretSpacing;

        return (
            <div key={index} className="flex flex-col items-center mx-4 my-2">
                <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
                    {/* Chord Name */}
                    <text 
                        x={width / 2} 
                        y={15} 
                        textAnchor="middle" 
                        fill="#e2e8f0" 
                        fontWeight="bold" 
                        fontSize="14"
                        fontFamily="sans-serif"
                    >
                        {chord.name}
                    </text>

                    {/* Nut (only if startFret is 1) */}
                    {startFret === 1 && (
                        <line 
                            x1={getStringX(0)} y1={getFretY(0)} 
                            x2={getStringX(numStrings - 1)} y2={getFretY(0)} 
                            stroke="#e2e8f0" 
                            strokeWidth="3" 
                        />
                    )}

                    {/* Frets (Horizontal Lines) */}
                    {Array.from({ length: numFrets + 1 }).map((_, i) => (
                        <line 
                            key={`fret-${i}`}
                            x1={getStringX(0)} 
                            y1={getFretY(i)} 
                            x2={getStringX(numStrings - 1)} 
                            y2={getFretY(i)} 
                            stroke="#64748b" 
                            strokeWidth={startFret === 1 && i === 0 ? 0 : 1} 
                        />
                    ))}

                    {/* Strings (Vertical Lines) */}
                    {Array.from({ length: numStrings }).map((_, i) => (
                        <line 
                            key={`str-${i}`}
                            x1={getStringX(i)} 
                            y1={getFretY(0)} 
                            x2={getStringX(i)} 
                            y2={getFretY(numFrets)} 
                            stroke="#64748b" 
                            strokeWidth="1" 
                        />
                    ))}

                    {/* Finger Positions & Top Indicators */}
                    {chord.strings.map((val, i) => {
                        const x = getStringX(i);
                        
                        // Handle X and O at the top
                        if (val === 'x') {
                            return (
                                <text key={`nut-${i}`} x={x} y={getFretY(0) - 5} textAnchor="middle" fill="#94a3b8" fontSize="10">×</text>
                            );
                        }
                        if (val === 0 || val === 'o') {
                            return (
                                <circle key={`nut-${i}`} cx={x} cy={getFretY(0) - 8} r="2.5" stroke="#94a3b8" strokeWidth="1" fill="none" />
                            );
                        }

                        // Handle Fretted Notes
                        if (typeof val === 'number' && val >= startFret) {
                            const fretPos = val - startFret + 1;
                            if (fretPos <= numFrets) {
                                return (
                                    <circle 
                                        key={`note-${i}`} 
                                        cx={x} 
                                        cy={getFretY(fretPos) - (fretSpacing / 2)} 
                                        r="5" 
                                        fill="#818cf8" 
                                    />
                                );
                            }
                        }
                        return null;
                    })}

                    {/* Fret Label (if shifted) */}
                    {startFret > 1 && (
                        <text 
                            x={getStringX(numStrings - 1) + 8} 
                            y={getFretY(1) - (fretSpacing/2) + 4} 
                            fill="#94a3b8" 
                            fontSize="10" 
                            fontWeight="bold"
                        >
                            {startFret}fr
                        </text>
                    )}
                </svg>
            </div>
        );
    };

    const chords = parseChords(data);

    if (chords.length === 0) return null;

    return (
        <div className="my-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-md">
            <div className="bg-gray-800 px-3 py-2 border-b border-gray-700">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Fretted Chords</span>
            </div>
            <div className="p-4 bg-gray-950 flex flex-wrap justify-center items-start">
                {chords.map((chord, i) => renderChord(chord, i))}
            </div>
        </div>
    );
};
