import React from 'react';
import { motion } from 'framer-motion';
import { THEMES, RPGTheme } from '../../types/rpg_themes';
import { cn } from '../../src/lib/utils';

interface RPGLayoutProps {
    children: React.ReactNode;
    theme?: RPGTheme;
    className?: string;
    showGlass?: boolean;
}

export const RPGLayout: React.FC<RPGLayoutProps> = ({
    children,
    theme = 'nano',
    className,
    showGlass = true
}) => {
    const currentTheme = THEMES[theme];

    return (
        <div className={`min-h-screen w-full relative overflow-hidden text-white ${currentTheme.bgClass}`}>
            {/* Dynamic Background Mesh */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/grid.png')] bg-repeat opacity-10" />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] ${theme === 'nano' ? 'bg-cyan-600' : theme === 'banana' ? 'bg-yellow-500' : theme === 'flash' ? 'bg-red-600' : 'bg-white'}`}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -5, 5, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className={`absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] ${theme === 'nano' ? 'bg-blue-800' : theme === 'banana' ? 'bg-pink-600' : theme === 'flash' ? 'bg-orange-600' : 'bg-amber-200'}`}
                />
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                        "w-full max-w-7xl mx-auto min-h-[90vh] flex flex-col",
                        showGlass && "bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden",
                        className
                    )}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
};
