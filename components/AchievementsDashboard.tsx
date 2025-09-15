import React, { useState, useEffect } from 'react';
import { EnhancedBadge, Achievement, BadgeStats, BadgeCategory, BadgeRarity } from '../types/badges';
import { StudentProgress } from '../types';
import BadgeDisplay, { BadgeGrid, RarityIndicator } from './BadgeDisplay';
import { badgeManager } from '../utils/badgeManager';
import { BADGE_CONFIGS } from '../utils/badgeConfig';

interface AchievementsDashboardProps {
  progress: StudentProgress;
  earnedBadges: EnhancedBadge[];
  onBadgeClick?: (badge: EnhancedBadge) => void;
  newBadgeIds?: string[];
}

const AchievementsDashboard: React.FC<AchievementsDashboardProps> = ({
  progress,
  earnedBadges,
  onBadgeClick,
  newBadgeIds = []
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'earned' | 'progress' | 'collections'>('overview');
  const [selectedCategory, setSelectedCategory] = useState<BadgeCategory | 'all'>('all');
  const [selectedRarity, setSelectedRarity] = useState<BadgeRarity | 'all'>('all');
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [stats, setStats] = useState<BadgeStats | null>(null);

  useEffect(() => {
    const generatedAchievements = badgeManager.generateAchievements(progress, earnedBadges);
    setAchievements(generatedAchievements);
    setStats(badgeManager.calculateBadgeStats(earnedBadges));
  }, [progress, earnedBadges]);

  // Filter badges based on selected category and rarity
  const getFilteredBadges = (badges: EnhancedBadge[]) => {
    return badges.filter(badge => {
      const categoryMatch = selectedCategory === 'all' || badge.category === selectedCategory;
      const rarityMatch = selectedRarity === 'all' || badge.rarity === selectedRarity;
      return categoryMatch && rarityMatch;
    });
  };

  // Get next achievable badges
  const nextAchievableBadges = badgeManager.getNextAchievableBadges(progress, earnedBadges, 6);

  // Stats cards
  const StatsCard: React.FC<{ title: string; value: string | number; icon: string; color: string }> = ({ title, value, icon, color }) => (
    <div className={`bg-white dark:bg-slate-800 rounded-lg p-4 border-l-4 ${color} shadow-sm`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{title}</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{value}</p>
        </div>
        <div className="text-3xl">{icon}</div>
      </div>
    </div>
  );

  // Progress bar component
  const ProgressBar: React.FC<{ current: number; target: number; label: string }> = ({ current, target, label }) => {
    const percentage = Math.min((current / target) * 100, 100);
    return (
      <div className="mb-4">
        <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-1">
          <span>{label}</span>
          <span>{current}/{target}</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-sky-500 to-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  };

  // Achievement card component
  const AchievementCard: React.FC<{ achievement: Achievement }> = ({ achievement }) => {
    const { badge, progress: achProgress, isCompleted, isUnlocked } = achievement;
    
    return (
      <div className={`bg-white dark:bg-slate-800 rounded-lg p-4 border transition-all duration-200 hover:shadow-md ${
        isCompleted ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20' :
        isUnlocked ? 'border-slate-200 dark:border-slate-700' :
        'border-slate-100 dark:border-slate-800 opacity-60'
      }`}>
        <div className="flex items-start space-x-3">
          <BadgeDisplay 
            badge={badge} 
            size="medium" 
            onClick={() => onBadgeClick?.(badge)}
            isNew={newBadgeIds.includes(badge.id)}
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h3 className={`font-semibold truncate ${
                isCompleted ? 'text-green-800 dark:text-green-200' :
                isUnlocked ? 'text-slate-900 dark:text-slate-100' :
                'text-slate-500 dark:text-slate-500'
              }`}>
                {isUnlocked ? badge.name : '???'}
              </h3>
              <RarityIndicator rarity={badge.rarity} />
            </div>
            
            <p className={`text-sm mb-2 ${
              isCompleted ? 'text-green-700 dark:text-green-300' :
              isUnlocked ? 'text-slate-600 dark:text-slate-400' :
              'text-slate-500 dark:text-slate-500'
            }`}>
              {isUnlocked ? badge.description : 'Complete prerequisites to unlock'}
            </p>
            
            {isUnlocked && !isCompleted && (
              <div className="space-y-2">
                <ProgressBar 
                  current={achProgress.current} 
                  target={achProgress.target} 
                  label={`Progress (${achProgress.unit})`}
                />
                {achievement.hints && achievement.hints.length > 0 && (
                  <div className="text-xs text-slate-500 dark:text-slate-500">
                    💡 {achievement.hints[0]}
                  </div>
                )}
              </div>
            )}
            
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-slate-500 dark:text-slate-500">
                {badge.points} points • Difficulty: {'⭐'.repeat(achievement.difficulty)}
              </span>
              {isCompleted && achievement.completedAt && (
                <span className="text-xs text-green-600 dark:text-green-400">
                  ✓ {achievement.completedAt.toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Filter controls
  const FilterControls = () => (
    <div className="flex flex-wrap gap-2 mb-4">
      <select 
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value as BadgeCategory | 'all')}
        className="px-3 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
      >
        <option value="all">All Categories</option>
        <option value="quiz">Quiz</option>
        <option value="achievement">Achievement</option>
        <option value="milestone">Milestone</option>
        <option value="streak">Streak</option>
        <option value="progress">Progress</option>
        <option value="special">Special</option>
      </select>
      
      <select 
        value={selectedRarity} 
        onChange={(e) => setSelectedRarity(e.target.value as BadgeRarity | 'all')}
        className="px-3 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
      >
        <option value="all">All Rarities</option>
        <option value="common">Common</option>
        <option value="uncommon">Uncommon</option>
        <option value="rare">Rare</option>
        <option value="epic">Epic</option>
        <option value="legendary">Legendary</option>
      </select>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          🏆 Achievements & Badges
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Track your progress and unlock achievements as you master IGCSE Music
        </p>
      </div>

      {/* Stats Overview */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard 
            title="Total Badges" 
            value={stats.totalBadges} 
            icon="🏅" 
            color="border-blue-500" 
          />
          <StatsCard 
            title="Total Points" 
            value={stats.totalPoints} 
            icon="⭐" 
            color="border-yellow-500" 
          />
          <StatsCard 
            title="Current Level" 
            value={stats.level} 
            icon="📈" 
            color="border-green-500" 
          />
          <StatsCard 
            title="Completion" 
            value={`${Math.round(stats.completionRate)}%`} 
            icon="🎯" 
            color="border-purple-500" 
          />
        </div>
      )}

      {/* Level Progress */}
      {stats && (
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Level {stats.level} Progress
          </h2>
          <ProgressBar 
            current={stats.totalPoints % 100} 
            target={100} 
            label={`${stats.nextLevelPoints} points to next level`}
          />
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex space-x-1 mb-6 bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
        {[
          { id: 'overview', label: 'Overview', icon: '📊' },
          { id: 'earned', label: 'Earned Badges', icon: '🏆' },
          { id: 'progress', label: 'In Progress', icon: '🎯' },
          { id: 'collections', label: 'Collections', icon: '📚' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-96">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Recently Earned */}
            {earnedBadges.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                  Recently Earned
                </h2>
                <BadgeGrid 
                  badges={earnedBadges.slice(-6)} 
                  size="large" 
                  showDetails={true}
                  onBadgeClick={onBadgeClick}
                  newBadgeIds={newBadgeIds}
                />
              </div>
            )}
            
            {/* Next Achievements */}
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                Next Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {nextAchievableBadges.map(achievement => (
                  <AchievementCard key={achievement.id} achievement={achievement} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'earned' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Earned Badges ({earnedBadges.length})
              </h2>
            </div>
            <FilterControls />
            <BadgeGrid 
              badges={getFilteredBadges(earnedBadges)} 
              size="medium" 
              showDetails={true}
              onBadgeClick={onBadgeClick}
              newBadgeIds={newBadgeIds}
              emptyMessage="No badges match your filters"
            />
          </div>
        )}

        {activeTab === 'progress' && (
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Achievements in Progress
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements
                .filter(a => !a.isCompleted && a.isUnlocked)
                .map(achievement => (
                  <AchievementCard key={achievement.id} achievement={achievement} />
                ))}
            </div>
          </div>
        )}

        {activeTab === 'collections' && (
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Badge Collections
            </h2>
            <div className="text-center py-8 text-slate-500 dark:text-slate-400">
              <div className="text-4xl mb-2">🚧</div>
              <p>Collections feature coming soon!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementsDashboard;