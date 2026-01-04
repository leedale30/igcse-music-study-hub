import React from 'react';
import { useAbcPlayer } from '../hooks/useAbcPlayer';

interface AbcDisplayComponentProps {
    abcNotation: string;
    id: string;
    title?: string;
}

const AbcDisplayComponent: React.FC<AbcDisplayComponentProps> = ({ abcNotation, id, title }) => {
    const { visualRef, audioRef, visualId, audioId } = useAbcPlayer({
        abcNotation,
        quizId: id
    });

    return (
        <div className="my-8 border rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
            {title && (
                <div className="bg-gray-50 dark:bg-gray-700 px-4 py-2 border-b dark:border-gray-600">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-200">{title}</h4>
                </div>
            )}
            <div className="p-4">
                <div
                    id={visualId}
                    ref={visualRef}
                    className="w-full overflow-x-auto"
                />
                <div
                    id={audioId}
                    ref={audioRef}
                    className="mt-4"
                />
            </div>
        </div>
    );
};

export default AbcDisplayComponent;
