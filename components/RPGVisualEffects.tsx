import React, { useEffect, useRef, useState } from 'react';

interface ParticleEffectsProps {
  enabled: boolean;
  theme?: 'fantasy' | 'musical' | 'dark';
  intensity?: 'low' | 'medium' | 'high';
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  symbol: string;
  rotation: number;
  rotationSpeed: number;
  life: number;
  maxLife: number;
}

export const ParticleEffects: React.FC<ParticleEffectsProps> = ({ 
  enabled, 
  theme = 'fantasy', 
  intensity = 'medium' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const themeConfig = {
    fantasy: {
      symbols: ['✨', '⭐', '🌟', '💫', '🔮', '🏰', '⚔️', '🛡️'],
      colors: ['#FFD700', '#FFA500', '#FF6347', '#9370DB', '#4169E1'],
      particleCount: { low: 15, medium: 30, high: 50 }
    },
    musical: {
      symbols: ['♪', '♫', '♬', '🎵', '🎶', '🎼', '🎹', '🎺', '🎻'],
      colors: ['#FF69B4', '#00CED1', '#32CD32', '#FFD700', '#FF1493'],
      particleCount: { low: 20, medium: 40, high: 60 }
    },
    dark: {
      symbols: ['💀', '🌙', '⚡', '🔥', '💎', '👑', '🗡️', '🏺'],
      colors: ['#8B0000', '#4B0082', '#2F4F4F', '#696969', '#800080'],
      particleCount: { low: 10, medium: 25, high: 40 }
    }
  };

  const config = themeConfig[theme];
  const maxParticles = config.particleCount[intensity];

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!enabled || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const createParticle = (): Particle => {
      const symbol = config.symbols[Math.floor(Math.random() * config.symbols.length)];
      const color = config.colors[Math.floor(Math.random() * config.colors.length)];
      
      return {
        x: Math.random() * dimensions.width,
        y: dimensions.height + 50,
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * 3 - 1,
        size: Math.random() * 20 + 10,
        opacity: Math.random() * 0.8 + 0.2,
        color,
        symbol,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        life: 0,
        maxLife: Math.random() * 300 + 200
      };
    };

    const updateParticles = () => {
      // Add new particles
      while (particlesRef.current.length < maxParticles) {
        particlesRef.current.push(createParticle());
      }

      // Update existing particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.life++;
        
        // Fade out over time
        particle.opacity = Math.max(0, 1 - (particle.life / particle.maxLife));
        
        // Remove particles that are too old or off-screen
        return particle.life < particle.maxLife && 
               particle.y > -50 && 
               particle.x > -50 && 
               particle.x < dimensions.width + 50;
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      particlesRef.current.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.font = `${particle.size}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.fillStyle = particle.color;
        
        ctx.fillText(particle.symbol, 0, 0);
        ctx.restore();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      particlesRef.current = [];
    };
  }, [enabled, dimensions, theme, intensity]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ width: dimensions.width, height: dimensions.height }}
    />
  );
};

// Animated Background Component
interface AnimatedBackgroundProps {
  theme: 'fantasy' | 'musical' | 'dark';
  className?: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ theme, className = '' }) => {
  const backgroundStyles = {
    fantasy: 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900',
    musical: 'bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900',
    dark: 'bg-gradient-to-br from-gray-900 via-black to-gray-800'
  };

  return (
    <div className={`${backgroundStyles[theme]} ${className}`}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.05),transparent)] animate-spin" style={{ animationDuration: '20s' }} />
      </div>
    </div>
  );
};

// RPG-style Button Component
interface RPGButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export const RPGButton: React.FC<RPGButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = ''
}) => {
  const baseClasses = 'relative font-bold transition-all duration-200 transform hover:scale-105 active:scale-95 border-2 rounded-lg shadow-lg';
  
  const variantClasses = {
    primary: 'bg-gradient-to-b from-yellow-400 to-yellow-600 border-yellow-700 text-yellow-900 hover:from-yellow-300 hover:to-yellow-500 shadow-yellow-500/50',
    secondary: 'bg-gradient-to-b from-blue-400 to-blue-600 border-blue-700 text-blue-900 hover:from-blue-300 hover:to-blue-500 shadow-blue-500/50',
    danger: 'bg-gradient-to-b from-red-400 to-red-600 border-red-700 text-red-900 hover:from-red-300 hover:to-red-500 shadow-red-500/50',
    success: 'bg-gradient-to-b from-green-400 to-green-600 border-green-700 text-green-900 hover:from-green-300 hover:to-green-500 shadow-green-500/50'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const disabledClasses = 'opacity-50 cursor-not-allowed hover:scale-100 active:scale-100';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled ? disabledClasses : ''}
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
    </button>
  );
};

// RPG-style Card Component
interface RPGCardProps {
  children: React.ReactNode;
  title?: string;
  rarity?: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  className?: string;
}

export const RPGCard: React.FC<RPGCardProps> = ({ children, title, rarity = 'common', className = '' }) => {
  const rarityStyles = {
    common: 'border-gray-400 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900',
    uncommon: 'border-green-400 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 shadow-green-500/20',
    rare: 'border-blue-400 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 shadow-blue-500/20',
    epic: 'border-purple-400 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 shadow-purple-500/20',
    legendary: 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 shadow-yellow-500/30 animate-pulse'
  };
  
  return (
    <div className={`
      relative p-4 rounded-lg border-2 shadow-lg transition-all duration-200 hover:shadow-xl
      ${rarityStyles[rarity]}
      ${className}
    `}>
      {title && (
        <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-slate-100">
          {title}
        </h3>
      )}
      {children}
      
      {/* Rarity indicator */}
      <div className="absolute top-2 right-2">
        {rarity === 'legendary' && <span className="text-yellow-500">👑</span>}
        {rarity === 'epic' && <span className="text-purple-500">💎</span>}
        {rarity === 'rare' && <span className="text-blue-500">💠</span>}
        {rarity === 'uncommon' && <span className="text-green-500">🔹</span>}
      </div>
    </div>
  );
};

// Health/Mana Bar Component
interface RPGBarProps {
  current: number;
  max: number;
  type: 'health' | 'mana' | 'experience';
  label?: string;
  showNumbers?: boolean;
  className?: string;
}

export const RPGBar: React.FC<RPGBarProps> = ({ 
  current, 
  max, 
  type, 
  label, 
  showNumbers = true, 
  className = '' 
}) => {
  const percentage = Math.min((current / max) * 100, 100);
  
  const typeStyles = {
    health: {
      bg: 'bg-red-200 dark:bg-red-900',
      fill: 'bg-gradient-to-r from-red-500 to-red-600',
      glow: 'shadow-red-500/50'
    },
    mana: {
      bg: 'bg-blue-200 dark:bg-blue-900',
      fill: 'bg-gradient-to-r from-blue-500 to-blue-600',
      glow: 'shadow-blue-500/50'
    },
    experience: {
      bg: 'bg-yellow-200 dark:bg-yellow-900',
      fill: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
      glow: 'shadow-yellow-500/50'
    }
  };
  
  const style = typeStyles[type];
  
  return (
    <div className={`${className}`}>
      {(label || showNumbers) && (
        <div className="flex justify-between text-sm mb-1">
          {label && <span className="font-medium">{label}</span>}
          {showNumbers && <span>{current}/{max}</span>}
        </div>
      )}
      <div className={`relative w-full h-4 ${style.bg} rounded-full overflow-hidden border border-slate-300 dark:border-slate-600`}>
        <div 
          className={`h-full ${style.fill} ${style.glow} transition-all duration-500 ease-out relative`}
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-white/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
};

// Floating Damage/Heal Numbers
interface FloatingNumberProps {
  value: number;
  type: 'damage' | 'heal' | 'experience' | 'gold';
  x: number;
  y: number;
  onComplete: () => void;
}

export const FloatingNumber: React.FC<FloatingNumberProps> = ({ value, type, x, y, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Wait for fade out
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [onComplete]);
  
  const typeStyles = {
    damage: 'text-red-500 text-xl font-bold',
    heal: 'text-green-500 text-xl font-bold',
    experience: 'text-blue-500 text-lg font-semibold',
    gold: 'text-yellow-500 text-lg font-semibold'
  };
  
  const prefix = {
    damage: '-',
    heal: '+',
    experience: '+',
    gold: '+'
  };
  
  return (
    <div
      className={`
        fixed pointer-events-none z-50 transition-all duration-1500 ease-out
        ${typeStyles[type]}
        ${isVisible ? 'opacity-100 transform -translate-y-16' : 'opacity-0 transform -translate-y-8'}
      `}
      style={{ left: x, top: y }}
    >
      <div className="drop-shadow-lg">
        {prefix[type]}{value}
        {type === 'experience' && ' XP'}
        {type === 'gold' && ' 💰'}
      </div>
    </div>
  );
};

// RPG-style Modal
interface RPGModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const RPGModal: React.FC<RPGModalProps> = ({ isOpen, onClose, title, children, size = 'md' }) => {
  if (!isOpen) return null;
  
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className={`
        bg-gradient-to-br from-amber-50 to-orange-100 dark:from-slate-800 dark:to-slate-900 
        rounded-lg w-full ${sizeClasses[size]} max-h-[90vh] overflow-hidden 
        border-4 border-amber-600 dark:border-amber-400 shadow-2xl
      `}>
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-amber-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

// Loading Spinner with RPG Theme
interface RPGLoadingProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const RPGLoading: React.FC<RPGLoadingProps> = ({ message = 'Loading...', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };
  
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`${sizeClasses[size]} relative`}>
        <div className="absolute inset-0 border-4 border-amber-200 dark:border-amber-800 rounded-full animate-pulse" />
        <div className="absolute inset-0 border-4 border-transparent border-t-amber-600 dark:border-t-amber-400 rounded-full animate-spin" />
        <div className="absolute inset-2 border-2 border-transparent border-t-orange-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.75s' }} />
      </div>
      <p className="text-slate-600 dark:text-slate-400 font-medium">{message}</p>
    </div>
  );
};