import React from 'react';
import { RPGLayout } from './RPGLayout';
import { User, Users, MessageSquare } from 'lucide-react';

export const TeamView: React.FC = () => {
    return (
        <RPGLayout theme="nano">
            <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                <Users className="w-20 h-20 text-cyan-400 mb-6" />
                <h1 className="text-4xl font-bold mb-4">Team & Social</h1>
                <p className="text-white/60 max-w-md mb-8">
                    Gather your party before venturing forth! The team system will allow you to add friends, form parties, and challenge other groups.
                </p>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 max-w-md w-full">
                    <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                        <MessageSquare className="w-5 h-5 text-yellow-400" />
                        Coming Soon
                    </h3>
                    <ul className="text-left space-y-3 text-sm text-white/50">
                        <li className="flex items-center gap-2">🔹 Friend List & Status</li>
                        <li className="flex items-center gap-2">🔹 Party Chat</li>
                        <li className="flex items-center gap-2">🔹 Team Battles (2v2, 3v3)</li>
                        <li className="flex items-center gap-2">🔹 Guild System</li>
                    </ul>
                </div>
            </div>
        </RPGLayout>
    );
};
