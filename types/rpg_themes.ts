export type RPGTheme = 'nano' | 'banana' | 'flash' | 'light';

export const THEMES: Record<RPGTheme, {
    name: string;
    bgClass: string;
    accentClass: string;
    avatar: string;
    description: string;
}> = {
    nano: {
        name: 'Nano',
        bgClass: 'bg-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black',
        accentClass: 'text-cyan-400 border-cyan-500/50 shadow-cyan-500/20',
        avatar: '/assets/rpg/nano.png',
        description: 'Precision engineering. Digital dominance.',
    },
    banana: {
        name: 'Banana',
        bgClass: 'bg-yellow-950 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/20 via-purple-900/40 to-black',
        accentClass: 'text-yellow-400 border-yellow-500/50 shadow-yellow-500/20',
        avatar: '/assets/rpg/banana.png',
        description: 'Pop art vibrancy. Maximum fun.',
    },
    flash: {
        name: 'Flash',
        bgClass: 'bg-red-950 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600/20 via-black to-black',
        accentClass: 'text-red-500 border-red-500/50 shadow-red-500/20',
        avatar: '/assets/rpg/flash.png',
        description: 'Speed and power. Strike first.',
    },
    light: {
        name: 'Light',
        bgClass: 'bg-slate-950 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700/30 via-black to-black',
        accentClass: 'text-amber-100 border-amber-200/50 shadow-amber-200/20',
        avatar: '/assets/rpg/light.png',
        description: 'Divine radiance. Pure excellence.',
    }
};
