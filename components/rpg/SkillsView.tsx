import React from 'react';
import { RPGLayout } from './RPGLayout';
import { Zap, Lock, Star } from 'lucide-react';

export const SkillsView: React.FC = () => {
    return (
        <RPGLayout theme="nano">
            <div className="h-full flex flex-col items-center p-6">
                <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <Zap className="w-8 h-8 text-yellow-400" />
                    Class Skills
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                    {/* Active Skill 1 */}
                    <div className="p-6 rounded-xl bg-cyan-900/20 border border-cyan-500/50 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-2 bg-cyan-500 text-black font-bold text-xs rounded-bl-xl">UNLOCKED</div>
                        <h3 className="text-xl font-bold mb-2">Sonic Blast</h3>
                        <p className="text-sm text-white/60 mb-4">Deals medium damage to opponent. Chance to stun.</p>
                        <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                            <span>MANA: 20</span>
                            <span>CD: 2 Turns</span>
                        </div>
                    </div>

                    {/* Active Skill 2 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden opacity-70 grayscale">
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <Lock className="w-8 h-8 text-white/40" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Harmonic Shield</h3>
                        <p className="text-sm text-white/60 mb-4">Reduces incoming damage by 50% for 2 turns.</p>
                        <div className="flex items-center justify-between text-xs font-mono text-white/40">
                            <span>LEVEL 5 REQUIRED</span>
                        </div>
                    </div>

                    {/* Passive Skill */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden opacity-70 grayscale">
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <Lock className="w-8 h-8 text-white/40" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Rhythm Master</h3>
                        <p className="text-sm text-white/60 mb-4">Passive: Increases gold earned from battles by 10%.</p>
                        <div className="flex items-center justify-between text-xs font-mono text-white/40">
                            <span>LEVEL 10 REQUIRED</span>
                        </div>
                    </div>
                </div>
            </div>
        </RPGLayout>
    );
};
