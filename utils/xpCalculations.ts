// XP Level Calculation Utilities
// Mirrors the database calculation for frontend display

/**
 * XP required to reach a specific level
 * Formula: 30 * (level - 1)^2
 */
export function xpForLevel(level: number): number {
    if (level <= 1) return 0;
    if (level > 100) return 30 * 99 * 99; // Max at level 100
    return 30 * (level - 1) * (level - 1);
}

/**
 * Calculate level from XP
 * Formula: floor(sqrt(xp / 30)) + 1, capped at 100
 */
export function calculateLevel(xp: number): number {
    if (xp <= 0) return 1;
    const level = Math.floor(Math.sqrt(xp / 30)) + 1;
    return Math.min(100, Math.max(1, level));
}

/**
 * Get XP progress within current level (0-100%)
 */
export function getLevelProgress(xp: number): number {
    const currentLevel = calculateLevel(xp);
    if (currentLevel >= 100) return 100; // Max level

    const currentLevelXP = xpForLevel(currentLevel);
    const nextLevelXP = xpForLevel(currentLevel + 1);
    const xpInLevel = xp - currentLevelXP;
    const xpNeeded = nextLevelXP - currentLevelXP;

    return Math.min(100, Math.max(0, (xpInLevel / xpNeeded) * 100));
}

/**
 * Get XP needed for next level
 */
export function xpToNextLevel(xp: number): number {
    const currentLevel = calculateLevel(xp);
    if (currentLevel >= 100) return 0; // Already at max

    const nextLevelXP = xpForLevel(currentLevel + 1);
    return Math.max(0, nextLevelXP - xp);
}

/**
 * Level milestones for reference
 */
export const LEVEL_MILESTONES = {
    1: 0,
    5: 480,
    10: 2430,
    25: 17280,
    50: 72030,
    75: 164430,
    100: 294030,
} as const;

/**
 * Max level constant
 */
export const MAX_LEVEL = 100;
