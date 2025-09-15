import React, { useState } from 'react';
import { EnhancedBadge, BadgeRarity } from '../types/badges';

interface BadgeDisplayProps {
  badge: EnhancedBadge;
  size?: 'small' | 'medium' | 'large' | 'xl';
  showDetails?: boolean;
  onClick?: () => void;
  isNew?: boolean;
  className?: string;
}

const BadgeDisplay: React.FC<BadgeDisplayProps> = ({
  badge,
  size = 'medium',
  showDetails = false,
  onClick,
  isNew = false,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Size configurations
  const sizeConfig = {
    small: {
      container: 'w-12 h-12',
      icon: 'text-lg',
      border: 'border-2',
      glow: 'shadow-sm'
    },
    medium: {
      container: 'w-16 h-16',
      icon: 'text-2xl',
      border: 'border-2',
      glow: 'shadow-md'
    },
    large: {
      container: 'w-20 h-20',
      icon: 'text-3xl',
      border: 'border-3',
      glow: 'shadow-lg'
    },
    xl: {
      container: 'w-24 h-24',
      icon: 'text-4xl',
      border: 'border-4',
      glow: 'shadow-xl'
    }
  };

  const config = sizeConfig[size];
  const { design } = badge;

  // Generate shape classes
  const getShapeClasses = () => {
    switch (design.shape) {
      case 'circle':
        return 'rounded-full';
      case 'shield':
        return 'rounded-t-full rounded-b-lg';
      case 'star':
        return 'rounded-lg transform rotate-12';
      case 'hexagon':
        return 'rounded-lg transform rotate-45';
      case 'diamond':
        return 'rounded-lg transform rotate-45';
      case 'crown':
        return 'rounded-t-lg rounded-b-full';
      default:
        return 'rounded-lg';
    }
  };

  // Generate pattern classes
  const getPatternClasses = () => {
    const baseClasses = [];
    
    switch (design.pattern) {
      case 'gradient':
        baseClasses.push('bg-gradient-to-br');
        break;
      case 'radial':
        baseClasses.push('bg-gradient-radial');
        break;
      case 'striped':
        baseClasses.push('bg-gradient-to-r');
        break;
      case 'dotted':
        baseClasses.push('bg-dotted');
        break;
      default:
        baseClasses.push('bg-solid');
    }
    
    return baseClasses.join(' ');
  };

  // Generate animation classes
  const getAnimationClasses = () => {
    if (!isHovered && design.animation === 'none') return '';
    
    switch (design.animation) {
      case 'pulse':
        return 'animate-pulse';
      case 'glow':
        return isHovered ? 'animate-pulse' : '';
      case 'bounce':
        return isHovered ? 'animate-bounce' : '';
      case 'rotate':
        return 'animate-spin';
      case 'shimmer':
        return 'animate-shimmer';
      default:
        return '';
    }
  };

  // Generate rarity-specific effects
  const getRarityEffects = () => {
    const effects = [];
    
    if (badge.rarity === 'legendary') {
      effects.push('ring-4 ring-yellow-400 ring-opacity-50');
    } else if (badge.rarity === 'epic') {
      effects.push('ring-2 ring-purple-400 ring-opacity-40');
    } else if (badge.rarity === 'rare') {
      effects.push('ring-2 ring-blue-400 ring-opacity-30');
    }
    
    if (design.glowColor && isHovered) {
      effects.push(`shadow-${badge.rarity}`);
    }
    
    return effects.join(' ');
  };

  // Generate inline styles for custom colors
  const getCustomStyles = (): React.CSSProperties => {
    const styles: React.CSSProperties = {
      backgroundColor: design.backgroundColor,
      borderColor: design.borderColor,
      color: design.primaryColor
    };

    if (design.glowColor && (isHovered || design.animation !== 'none')) {
      styles.boxShadow = `0 0 20px ${design.glowColor}40, 0 0 40px ${design.glowColor}20`;
    }

    if (design.pattern === 'gradient') {
      styles.background = `linear-gradient(135deg, ${design.primaryColor}, ${design.secondaryColor})`;
    } else if (design.pattern === 'radial') {
      styles.background = `radial-gradient(circle, ${design.primaryColor}, ${design.secondaryColor})`;
    }

    return styles;
  };

  const badgeClasses = [
    config.container,
    config.border,
    config.glow,
    getShapeClasses(),
    getAnimationClasses(),
    getRarityEffects(),
    'relative flex items-center justify-center cursor-pointer transition-all duration-300 transform',
    isHovered ? 'scale-110' : 'scale-100',
    isNew ? 'animate-bounce' : '',
    onClick ? 'hover:scale-110' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="relative inline-block">
      {/* New badge indicator */}
      {isNew && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping z-10" />
      )}
      
      {/* Badge container */}
      <div
        className={badgeClasses}
        style={getCustomStyles()}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title={showDetails ? undefined : `${badge.name}: ${badge.description}`}
      >
        {/* Badge icon */}
        <span className={`${config.icon} select-none`}>
          {badge.icon}
        </span>
        
        {/* Rarity indicator */}
        {badge.rarity === 'legendary' && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-xs">👑</span>
          </div>
        )}
        
        {/* Points indicator for larger sizes */}
        {(size === 'large' || size === 'xl') && (
          <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-800 rounded-full px-1 py-0.5 text-xs font-bold border border-gray-300 dark:border-slate-600">
            {badge.points}
          </div>
        )}
      </div>
      
      {/* Badge details */}
      {showDetails && (
        <div className="mt-2 text-center max-w-32">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
            {badge.name}
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
            {badge.description}
          </p>
          {badge.earnedAt && (
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
              {badge.earnedAt.toLocaleDateString()}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

// Badge grid component for displaying multiple badges
interface BadgeGridProps {
  badges: EnhancedBadge[];
  size?: 'small' | 'medium' | 'large' | 'xl';
  showDetails?: boolean;
  onBadgeClick?: (badge: EnhancedBadge) => void;
  newBadgeIds?: string[];
  className?: string;
  emptyMessage?: string;
}

export const BadgeGrid: React.FC<BadgeGridProps> = ({
  badges,
  size = 'medium',
  showDetails = false,
  onBadgeClick,
  newBadgeIds = [],
  className = '',
  emptyMessage = 'No badges earned yet'
}) => {
  if (badges.length === 0) {
    return (
      <div className="text-center py-8 text-slate-500 dark:text-slate-400">
        <div className="text-4xl mb-2">🏆</div>
        <p>{emptyMessage}</p>
      </div>
    );
  }

  const gridClasses = {
    small: 'grid-cols-8 gap-2',
    medium: 'grid-cols-6 gap-3',
    large: 'grid-cols-4 gap-4',
    xl: 'grid-cols-3 gap-6'
  };

  return (
    <div className={`grid ${gridClasses[size]} ${className}`}>
      {badges.map((badge) => (
        <BadgeDisplay
          key={`${badge.id}-${badge.earnedAt?.getTime()}`}
          badge={badge}
          size={size}
          showDetails={showDetails}
          onClick={() => onBadgeClick?.(badge)}
          isNew={newBadgeIds.includes(badge.id)}
        />
      ))}
    </div>
  );
};

// Rarity indicator component
interface RarityIndicatorProps {
  rarity: BadgeRarity;
  className?: string;
}

export const RarityIndicator: React.FC<RarityIndicatorProps> = ({ rarity, className = '' }) => {
  const rarityConfig = {
    common: { color: 'text-gray-500', bg: 'bg-gray-100', label: 'Common' },
    uncommon: { color: 'text-green-600', bg: 'bg-green-100', label: 'Uncommon' },
    rare: { color: 'text-blue-600', bg: 'bg-blue-100', label: 'Rare' },
    epic: { color: 'text-purple-600', bg: 'bg-purple-100', label: 'Epic' },
    legendary: { color: 'text-yellow-600', bg: 'bg-yellow-100', label: 'Legendary' }
  };

  const config = rarityConfig[rarity];

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.color} ${config.bg} ${className}`}>
      {config.label}
    </span>
  );
};

export default BadgeDisplay;