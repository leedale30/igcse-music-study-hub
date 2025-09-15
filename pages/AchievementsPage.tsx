import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useProgress } from '../contexts/ProgressContext';
import AchievementsDashboard from '../components/AchievementsDashboard';
import BadgeDisplay from '../components/BadgeDisplay';
import { EnhancedBadge } from '../types/badges';
import { badgeManager } from '../utils/badgeManager';

const AchievementsPage: React.FC = () => {
  const { user } = useAuth();
  const { progress, enhancedBadges, newBadgeIds, markBadgesAsSeen } = useProgress();
  const [selectedBadge, setSelectedBadge] = useState<EnhancedBadge | null>(null);
  const [showBadgeModal, setShowBadgeModal] = useState(false);

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 dark:text-slate-400">Please log in to view your achievements.</p>
        </div>
      </div>
    );
  }

  if (!progress) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading your achievements...</p>
        </div>
      </div>
    );
  }

  const handleBadgeClick = (badge: EnhancedBadge) => {
    setSelectedBadge(badge);
    setShowBadgeModal(true);
    
    // Mark badge as seen if it's new
    if (newBadgeIds.includes(badge.id)) {
      markBadgesAsSeen([badge.id]);
    }
  };

  const handleShareBadge = (badge: EnhancedBadge) => {
    const shareableBadge = badgeManager.generateShareableBadge(badge, user.nickname || user.name);
    
    if (navigator.share) {
      navigator.share({
        title: `I earned the ${badge.name} badge!`,
        text: shareableBadge.socialText,
        url: shareableBadge.shareUrl
      }).catch(console.error);
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(
        `${shareableBadge.socialText} ${shareableBadge.shareUrl}`
      ).then(() => {
        alert('Badge shared to clipboard!');
      }).catch(console.error);
    }
  };

  const BadgeModal = () => {
    if (!selectedBadge || !showBadgeModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-slate-800 rounded-lg max-w-md w-full p-6 relative">
          {/* Close button */}
          <button
            onClick={() => setShowBadgeModal(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Badge display */}
          <div className="text-center mb-6">
            <BadgeDisplay badge={selectedBadge} size="xl" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-4">
              {selectedBadge.name}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              {selectedBadge.longDescription || selectedBadge.description}
            </p>
          </div>

          {/* Badge details */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Points:</span>
              <span className="text-sm text-slate-900 dark:text-slate-100">{selectedBadge.points}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Rarity:</span>
              <span className="text-sm text-slate-900 dark:text-slate-100 capitalize">{selectedBadge.rarity}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Category:</span>
              <span className="text-sm text-slate-900 dark:text-slate-100 capitalize">{selectedBadge.category}</span>
            </div>
            {selectedBadge.earnedAt && (
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Earned:</span>
                <span className="text-sm text-slate-900 dark:text-slate-100">
                  {selectedBadge.earnedAt.toLocaleDateString()}
                </span>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex space-x-3">
            <button
              onClick={() => handleShareBadge(selectedBadge)}
              className="flex-1 bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              <span>Share</span>
            </button>
            <button
              onClick={() => setShowBadgeModal(false)}
              className="flex-1 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100 py-2 px-4 rounded-lg font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* New badge notifications */}
      {newBadgeIds.length > 0 && (
        <div className="fixed top-4 right-4 z-40 space-y-2">
          {newBadgeIds.slice(0, 3).map(badgeId => {
            const badge = enhancedBadges.find(b => b.id === badgeId);
            if (!badge) return null;
            
            return (
              <div
                key={badgeId}
                className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg border-l-4 border-green-500 animate-slide-in-right"
                onClick={() => handleBadgeClick(badge)}
              >
                <div className="flex items-center space-x-3 cursor-pointer">
                  <BadgeDisplay badge={badge} size="small" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">New Badge Earned!</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{badge.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
          {newBadgeIds.length > 3 && (
            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-lg text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                +{newBadgeIds.length - 3} more badges earned!
              </p>
            </div>
          )}
        </div>
      )}

      {/* Main content */}
      <AchievementsDashboard
        progress={progress}
        earnedBadges={enhancedBadges}
        onBadgeClick={handleBadgeClick}
        newBadgeIds={newBadgeIds}
      />

      {/* Badge modal */}
      <BadgeModal />
    </div>
  );
};

export default AchievementsPage;