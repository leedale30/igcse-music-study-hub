import {
  RPGCharacter,
  RPGGameState,
  CharacterClass,
  RPGChallenge,
  Item,
  InventoryItem,
  RunData,
  DeathCause,
  LootTable,
  ChallengeReward,
  RPGNotification,
  CharacterStats,
  ActiveEffect
} from '../types/rpg';
import { StudentProgress, QuizResult } from '../types';
import {
  CHARACTER_CLASSES,
  RPG_ITEMS,
  RPG_CHALLENGES,
  LOOT_TABLES,
  calculateExperienceForLevel,
  calculateLevelFromExperience
} from './rpgConfig';

export class RPGManager {
  private static instance: RPGManager;
  private gameState: RPGGameState | null = null;
  private notificationQueue: RPGNotification[] = [];
  private eventListeners: { [event: string]: Function[] } = {};

  private constructor() { }

  public static getInstance(): RPGManager {
    if (!RPGManager.instance) {
      RPGManager.instance = new RPGManager();
    }
    return RPGManager.instance;
  }

  // Event System
  public on(event: string, callback: Function): void {
    if (!this.eventListeners[event]) {
      this.eventListeners[event] = [];
    }
    this.eventListeners[event].push(callback);
  }

  private emit(event: string, data?: any): void {
    if (this.eventListeners[event]) {
      this.eventListeners[event].forEach(callback => callback(data));
    }
  }

  // Game State Management
  public initializeGameState(userId: string, characterClass: CharacterClass): RPGGameState {
    const character = this.createCharacter(userId, characterClass);

    this.gameState = {
      character,
      availableChallenges: this.generateDailyChallenges(),
      activeChallenges: [],
      completedChallenges: [],
      discoveredItems: [],
      unlockedClasses: [characterClass],
      currentTheme: 'classic_fantasy',
      settings: {
        permadeathEnabled: false,
        difficultyLevel: 'apprentice',
        autoSave: true,
        notifications: true,
        sounds: true,
        particles: true
      },
      statistics: {
        totalPlayTime: 0,
        totalRuns: 1,
        longestRun: 0,
        totalDeaths: 0,
        totalRevivals: 0,
        itemsCollected: 0,
        legendaryItemsFound: 0,
        bossesDefeated: 0
      }
    };

    this.saveGameState(userId);
    return this.gameState;
  }

  public loadGameState(userId: string): RPGGameState | null {
    const saved = localStorage.getItem(`rpg-game-state-${userId}`);
    if (saved) {
      try {
        this.gameState = JSON.parse(saved);
        // Convert date strings back to Date objects
        if (this.gameState) {
          this.gameState.character.createdAt = new Date(this.gameState.character.createdAt);
          this.gameState.character.lastActive = new Date(this.gameState.character.lastActive);
          this.gameState.character.currentRun.startDate = new Date(this.gameState.character.currentRun.startDate);
          if (this.gameState.character.currentRun.endDate) {
            this.gameState.character.currentRun.endDate = new Date(this.gameState.character.currentRun.endDate);
          }
        }
        return this.gameState;
      } catch (error) {
        console.error('Error loading RPG game state:', error);
        return null;
      }
    }
    return null;
  }

  private saveGameState(userId: string): void {
    if (this.gameState) {
      localStorage.setItem(`rpg-game-state-${userId}`, JSON.stringify(this.gameState));
    }
  }

  /**
   * Sync local state with remote character data
   */
  public syncWithRemote(remoteCharacter: RPGCharacter): RPGGameState {
    // If we have an existing state, preserve settings and other client-side only things
    // If not, create a fresh container

    const userId = remoteCharacter.userId;
    let currentState = this.gameState;

    if (!currentState) {
      // Check local storage just in case for settings
      const saved = localStorage.getItem(`rpg-game-state-${userId}`);
      if (saved) {
        try {
          currentState = JSON.parse(saved);
        } catch (e) { /* ignore */ }
      }
    }

    if (!currentState) {
      // Create default state structure
      const classInfo = CHARACTER_CLASSES[remoteCharacter.class] || CHARACTER_CLASSES['melodist']; // Fallback
      currentState = {
        character: remoteCharacter,
        availableChallenges: this.generateDailyChallenges(),
        activeChallenges: [],
        completedChallenges: [],
        discoveredItems: [],
        unlockedClasses: [remoteCharacter.class],
        currentTheme: 'classic_fantasy',
        settings: {
          permadeathEnabled: false,
          difficultyLevel: 'apprentice',
          autoSave: true,
          notifications: true,
          sounds: true,
          particles: true
        },
        statistics: {
          totalPlayTime: 0,
          totalRuns: 1,
          longestRun: 0,
          totalDeaths: 0,
          totalRevivals: 0,
          itemsCollected: 0,
          legendaryItemsFound: 0,
          bossesDefeated: 0
        }
      };
    } else {
      // Merge remote character into current state
      currentState.character = {
        ...currentState.character,
        ...remoteCharacter,
        // Preserve some client-side defaults if remote is missing them (though remote should be source of truth)
        inventory: remoteCharacter.inventory,
        equipment: remoteCharacter.equipment,
        stats: remoteCharacter.stats
      };
    }

    this.gameState = currentState;
    this.saveGameState(userId); // Persist merged state to local
    return this.gameState;
  }

  // Character Management
  private createCharacter(userId: string, characterClass: CharacterClass): RPGCharacter {
    const classInfo = CHARACTER_CLASSES[characterClass];
    const runId = `run-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    return {
      id: `char-${userId}-${Date.now()}`,
      userId,
      class: characterClass,
      level: 1,
      experience: 0,
      experienceToNext: calculateExperienceForLevel(2),
      stats: { ...classInfo.startingStats },
      totalStats: { ...classInfo.startingStats },
      health: 100,
      maxHealth: 100,
      mana: 50,
      maxMana: 50,
      gold: 100,
      inventory: [],
      equipment: {},
      abilities: [classInfo.classAbilities[0].id], // Start with first ability
      activeEffects: [],
      createdAt: new Date(),
      lastActive: new Date(),
      permadeathCount: 0,
      currentRun: {
        id: runId,
        startDate: new Date(),
        isActive: true,
        difficulty: 'apprentice',
        seed: Math.random().toString(36).substr(2, 16),
        stats: {
          quizzesCompleted: 0,
          challengesCompleted: 0,
          experienceGained: 0,
          goldEarned: 0,
          itemsFound: 0,
          deathCount: 0,
          reviveCount: 0
        },
        milestones: []
      }
    };
  }

  public levelUpCharacter(): boolean {
    if (!this.gameState) return false;

    const character = this.gameState.character;
    const newLevel = calculateLevelFromExperience(character.experience);

    if (newLevel > character.level) {
      const oldLevel = character.level;
      character.level = newLevel;
      character.experienceToNext = calculateExperienceForLevel(newLevel + 1) - character.experience;

      // Apply stat growth
      const classInfo = CHARACTER_CLASSES[character.class];
      const statGains: CharacterStats = {
        knowledge: Math.floor(classInfo.statGrowth.knowledge * (newLevel - oldLevel)),
        rhythm: Math.floor(classInfo.statGrowth.rhythm * (newLevel - oldLevel)),
        harmony: Math.floor(classInfo.statGrowth.harmony * (newLevel - oldLevel)),
        creativity: Math.floor(classInfo.statGrowth.creativity * (newLevel - oldLevel)),
        focus: Math.floor(classInfo.statGrowth.focus * (newLevel - oldLevel))
      };

      character.stats.knowledge += statGains.knowledge;
      character.stats.rhythm += statGains.rhythm;
      character.stats.harmony += statGains.harmony;
      character.stats.creativity += statGains.creativity;
      character.stats.focus += statGains.focus;

      // Increase health and mana
      const healthGain = Math.floor(10 * (newLevel - oldLevel));
      const manaGain = Math.floor(5 * (newLevel - oldLevel));
      character.maxHealth += healthGain;
      character.health = character.maxHealth; // Full heal on level up
      character.maxMana += manaGain;
      character.mana = character.maxMana; // Full mana on level up

      // Unlock new abilities
      const newAbilities = classInfo.classAbilities.filter(
        ability => ability.unlockLevel <= newLevel && !character.abilities.includes(ability.id)
      );
      character.abilities.push(...newAbilities.map(a => a.id));

      // Create level up notification
      this.addNotification({
        id: `levelup-${Date.now()}`,
        type: 'level_up',
        title: 'Level Up!',
        message: `Congratulations! You've reached level ${newLevel}!`,
        icon: '⬆️',
        duration: 5000,
        createdAt: new Date()
      });

      this.emit('levelUp', { oldLevel, newLevel, statGains, newAbilities });
      this.saveGameState(character.userId);
      return true;
    }

    return false;
  }

  // Experience and Rewards
  public grantExperience(amount: number, source: string = 'unknown'): void {
    if (!this.gameState) return;

    const character = this.gameState.character;
    character.experience += amount;
    character.currentRun.stats.experienceGained += amount;

    this.levelUpCharacter();
    this.emit('experienceGained', { amount, source, totalExperience: character.experience });
  }

  public grantGold(amount: number): void {
    if (!this.gameState) return;

    this.gameState.character.gold += amount;
    this.gameState.character.currentRun.stats.goldEarned += amount;
    this.emit('goldGained', { amount, totalGold: this.gameState.character.gold });
  }

  // Item and Loot System
  public generateLoot(lootTableId: string, playerLevel: number = 1): { items: InventoryItem[], gold: number, experience: number } {
    const lootTable = LOOT_TABLES[lootTableId];
    if (!lootTable) return { items: [], gold: 0, experience: 0 };

    const gold = Math.floor(Math.random() * (lootTable.goldRange[1] - lootTable.goldRange[0] + 1)) + lootTable.goldRange[0];
    const experience = Math.floor(Math.random() * (lootTable.experienceRange[1] - lootTable.experienceRange[0] + 1)) + lootTable.experienceRange[0];

    const items: InventoryItem[] = [];

    // Add guaranteed items
    if (lootTable.guaranteedItems) {
      for (const itemId of lootTable.guaranteedItems) {
        const item = RPG_ITEMS[itemId];
        if (item) {
          items.push({
            item,
            quantity: 1,
            acquiredAt: new Date()
          });
        }
      }
    }

    // Roll for random items
    const totalWeight = lootTable.items.reduce((sum, entry) => sum + entry.weight, 0);
    const numRolls = Math.floor(Math.random() * 3) + 1; // 1-3 items

    for (let i = 0; i < numRolls; i++) {
      const roll = Math.random() * totalWeight;
      let currentWeight = 0;

      for (const entry of lootTable.items) {
        currentWeight += entry.weight;
        if (roll <= currentWeight) {
          // Check conditions
          if (entry.condition) {
            if (entry.condition.level && playerLevel < entry.condition.level) continue;
            // Add more condition checks as needed
          }

          const item = RPG_ITEMS[entry.itemId];
          if (item) {
            const quantity = Math.floor(Math.random() * (entry.quantity[1] - entry.quantity[0] + 1)) + entry.quantity[0];
            items.push({
              item,
              quantity,
              acquiredAt: new Date()
            });
          }
          break;
        }
      }
    }

    return { items, gold, experience };
  }

  public addItemToInventory(item: Item, quantity: number = 1): boolean {
    if (!this.gameState) return false;

    const character = this.gameState.character;
    const existingItem = character.inventory.find(invItem => invItem.item.id === item.id);

    if (existingItem && item.type === 'consumable') {
      existingItem.quantity += quantity;
    } else {
      character.inventory.push({
        item,
        quantity,
        acquiredAt: new Date()
      });
    }

    character.currentRun.stats.itemsFound += quantity;
    if (item.rarity === 'legendary') {
      this.gameState.statistics.legendaryItemsFound += quantity;
    }

    // Create item found notification
    this.addNotification({
      id: `item-${Date.now()}`,
      type: 'item_found',
      title: 'Item Found!',
      message: `You found ${quantity}x ${item.name}!`,
      icon: item.icon,
      rarity: item.rarity,
      duration: 4000,
      createdAt: new Date()
    });

    this.emit('itemFound', { item, quantity });
    this.saveGameState(character.userId);
    return true;
  }

  // Challenge System
  public generateDailyChallenges(): RPGChallenge[] {
    const dailyChallenges = Object.values(RPG_CHALLENGES).filter(challenge => challenge.isDaily);
    const randomChallenges = Object.values(RPG_CHALLENGES).filter(challenge => !challenge.isDaily && challenge.type === 'random_encounter');

    // Select 2-3 daily challenges and 1-2 random encounters
    const selected = [
      ...this.shuffleArray(dailyChallenges).slice(0, 3),
      ...this.shuffleArray(randomChallenges).slice(0, 2)
    ];

    return selected;
  }

  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  public completeChallenge(challengeId: string): boolean {
    if (!this.gameState) return false;

    const challenge = RPG_CHALLENGES[challengeId];
    if (!challenge) return false;

    // Check if all objectives are completed
    const allCompleted = challenge.objectives.every(obj => obj.isCompleted || obj.isOptional);
    if (!allCompleted) return false;

    // Grant rewards
    for (const reward of challenge.rewards) {
      this.grantReward(reward);
    }

    // Update game state
    this.gameState.completedChallenges.push(challengeId);
    this.gameState.activeChallenges = this.gameState.activeChallenges.filter(id => id !== challengeId);
    this.gameState.character.currentRun.stats.challengesCompleted++;

    // Create completion notification
    this.addNotification({
      id: `challenge-${Date.now()}`,
      type: 'quest_complete',
      title: 'Challenge Complete!',
      message: `You completed: ${challenge.name}`,
      icon: challenge.icon,
      duration: 4000,
      createdAt: new Date()
    });

    this.emit('challengeCompleted', { challenge });
    this.saveGameState(this.gameState.character.userId);
    return true;
  }

  private grantReward(reward: ChallengeReward): void {
    switch (reward.type) {
      case 'experience':
        this.grantExperience(reward.value as number, 'challenge');
        break;
      case 'gold':
        this.grantGold(reward.value as number);
        break;
      case 'item':
        const item = RPG_ITEMS[reward.value as string];
        if (item) {
          this.addItemToInventory(item);
        }
        break;
      case 'stat_point':
        // Allow player to allocate stat points
        this.emit('statPointsEarned', { points: reward.value });
        break;
    }
  }

  // Permadeath System
  public triggerDeath(cause: DeathCause): void {
    if (!this.gameState) return;

    const character = this.gameState.character;
    character.currentRun.stats.deathCount++;
    this.gameState.statistics.totalDeaths++;

    if (this.gameState.settings.permadeathEnabled) {
      // End current run
      character.currentRun.isActive = false;
      character.currentRun.endDate = new Date();
      character.currentRun.cause = cause;
      character.permadeathCount++;

      // Check for revival abilities
      const hasRevival = this.checkRevivalAbilities();
      if (!hasRevival) {
        this.startNewRun();
      }
    } else {
      // Non-permadeath: just reduce stats temporarily
      character.health = Math.max(1, Math.floor(character.health * 0.5));
      character.mana = Math.max(0, Math.floor(character.mana * 0.3));

      // Add temporary debuff
      this.addActiveEffect({
        id: 'death_penalty',
        name: 'Death Penalty',
        description: 'Reduced stats from recent defeat',
        icon: '💀',
        type: 'debuff',
        duration: 60, // 1 hour
        effect: {
          stats: {
            knowledge: -5,
            rhythm: -5,
            harmony: -5,
            creativity: -5,
            focus: -5
          }
        },
        appliedAt: new Date()
      });
    }

    // Create death notification
    this.addNotification({
      id: `death-${Date.now()}`,
      type: 'death',
      title: 'Defeat!',
      message: cause.description,
      icon: '💀',
      duration: 6000,
      createdAt: new Date()
    });

    this.emit('characterDeath', { cause, permadeath: this.gameState.settings.permadeathEnabled });
    this.saveGameState(character.userId);
  }

  private checkRevivalAbilities(): boolean {
    if (!this.gameState) return false;

    const character = this.gameState.character;
    const classInfo = CHARACTER_CLASSES[character.class];

    // Check for revival abilities (like Conductor's Second Chance)
    const revivalAbility = classInfo.classAbilities.find(
      ability => ability.effect.type === 'revival' && character.abilities.includes(ability.id)
    );

    if (revivalAbility) {
      // Use revival
      character.health = Math.floor(character.maxHealth * 0.5);
      character.mana = Math.floor(character.maxMana * 0.5);
      character.currentRun.stats.reviveCount++;
      this.gameState.statistics.totalRevivals++;

      // Remove ability (one-time use per run)
      character.abilities = character.abilities.filter(id => id !== revivalAbility.id);

      this.addNotification({
        id: `revival-${Date.now()}`,
        type: 'revival',
        title: 'Second Chance!',
        message: `${revivalAbility.name} saved you from defeat!`,
        icon: '🔄',
        duration: 5000,
        createdAt: new Date()
      });

      return true;
    }

    return false;
  }

  private startNewRun(): void {
    if (!this.gameState) return;

    const character = this.gameState.character;
    const runId = `run-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Reset character for new run
    character.level = 1;
    character.experience = 0;
    character.experienceToNext = calculateExperienceForLevel(2);
    character.health = character.maxHealth;
    character.mana = character.maxMana;
    character.gold = 100;
    character.inventory = [];
    character.equipment = {};
    character.activeEffects = [];

    // Reset stats to starting values
    const classInfo = CHARACTER_CLASSES[character.class];
    character.stats = { ...classInfo.startingStats };
    character.abilities = [classInfo.classAbilities[0].id];

    // Create new run
    character.currentRun = {
      id: runId,
      startDate: new Date(),
      isActive: true,
      difficulty: this.gameState.settings.difficultyLevel,
      seed: Math.random().toString(36).substr(2, 16),
      stats: {
        quizzesCompleted: 0,
        challengesCompleted: 0,
        experienceGained: 0,
        goldEarned: 0,
        itemsFound: 0,
        deathCount: 0,
        reviveCount: 0
      },
      milestones: []
    };

    this.gameState.statistics.totalRuns++;
    this.emit('newRunStarted', { runId });
  }

  // Active Effects System
  public addActiveEffect(effect: ActiveEffect): void {
    if (!this.gameState) return;

    this.gameState.character.activeEffects.push(effect);
    this.updateTotalStats();
    this.emit('effectApplied', { effect });
  }

  public removeActiveEffect(effectId: string): void {
    if (!this.gameState) return;

    this.gameState.character.activeEffects = this.gameState.character.activeEffects.filter(
      effect => effect.id !== effectId
    );
    this.updateTotalStats();
    this.emit('effectRemoved', { effectId });
  }

  private updateTotalStats(): void {
    if (!this.gameState) return;

    const character = this.gameState.character;
    character.totalStats = { ...character.stats };

    // Apply equipment bonuses
    Object.values(character.equipment).forEach(equipItem => {
      if (equipItem?.item.stats) {
        Object.entries(equipItem.item.stats).forEach(([stat, value]) => {
          if (value) {
            (character.totalStats as any)[stat] += value;
          }
        });
      }
    });

    // Apply active effect bonuses
    character.activeEffects.forEach(effect => {
      if (effect.effect.stats) {
        Object.entries(effect.effect.stats).forEach(([stat, value]) => {
          if (value) {
            (character.totalStats as any)[stat] += value;
          }
        });
      }
    });
  }

  // Integration with existing systems
  public processQuizResult(quizResult: QuizResult): void {
    if (!this.gameState) return;

    const character = this.gameState.character;
    character.currentRun.stats.quizzesCompleted++;

    // Calculate RPG rewards based on quiz performance
    const baseExp = 25;
    const bonusExp = quizResult.percentage >= 100 ? 25 : Math.floor(quizResult.percentage / 10);
    const goldReward = Math.floor(quizResult.percentage / 5) + 10;

    this.grantExperience(baseExp + bonusExp, 'quiz');
    this.grantGold(goldReward);

    // Chance for loot based on performance
    if (quizResult.percentage >= 90) {
      const lootRoll = Math.random();
      if (lootRoll < 0.3) { // 30% chance for rare loot
        const loot = this.generateLoot('rare_chest', character.level);
        loot.items.forEach(item => this.addItemToInventory(item.item, item.quantity));
      } else if (lootRoll < 0.7) { // 40% chance for common loot
        const loot = this.generateLoot('common_chest', character.level);
        loot.items.forEach(item => this.addItemToInventory(item.item, item.quantity));
      }
    }

    // Check for quiz-related challenges
    this.updateChallengeProgress('quiz_completion', quizResult);

    // Risk of death on very poor performance (if permadeath enabled)
    if (this.gameState.settings.permadeathEnabled && quizResult.percentage < 30) {
      const deathRoll = Math.random();
      if (deathRoll < 0.1) { // 10% chance of death on very poor performance
        this.triggerDeath({
          type: 'quiz_failure',
          description: `Failed catastrophically on ${quizResult.quizTitle}`,
          context: {
            quizId: quizResult.quizId,
            score: quizResult.percentage
          }
        });
      }
    }

    this.saveGameState(character.userId);
  }

  private updateChallengeProgress(eventType: string, data: any): void {
    if (!this.gameState) return;

    // Update active challenge objectives based on events
    this.gameState.activeChallenges.forEach(challengeId => {
      const challenge = RPG_CHALLENGES[challengeId];
      if (challenge) {
        challenge.objectives.forEach(objective => {
          if (!objective.isCompleted) {
            switch (objective.type) {
              case 'quiz_score':
                if (eventType === 'quiz_completion' && data.percentage >= objective.target) {
                  objective.current = data.percentage;
                  objective.isCompleted = true;
                }
                break;
              case 'quiz_count':
                if (eventType === 'quiz_completion') {
                  objective.current++;
                  if (objective.current >= objective.target) {
                    objective.isCompleted = true;
                  }
                }
                break;
              case 'perfect_score':
                if (eventType === 'quiz_completion' && data.percentage === 100) {
                  objective.current++;
                  if (objective.current >= objective.target) {
                    objective.isCompleted = true;
                  }
                }
                break;
            }
          }
        });

        // Check if challenge is complete
        const allCompleted = challenge.objectives.every(obj => obj.isCompleted || obj.isOptional);
        if (allCompleted) {
          this.completeChallenge(challengeId);
        }
      }
    });
  }

  // Notification System
  public addNotification(notification: RPGNotification): void {
    this.notificationQueue.push(notification);
    this.emit('notification', notification);

    // Auto-remove after duration
    setTimeout(() => {
      this.removeNotification(notification.id);
    }, notification.duration);
  }

  public removeNotification(notificationId: string): void {
    this.notificationQueue = this.notificationQueue.filter(n => n.id !== notificationId);
    this.emit('notificationRemoved', { notificationId });
  }

  public getNotifications(): RPGNotification[] {
    return [...this.notificationQueue];
  }

  // Getters
  public getGameState(): RPGGameState | null {
    return this.gameState;
  }

  public getCharacter(): RPGCharacter | null {
    return this.gameState?.character || null;
  }

  public isPermadeathEnabled(): boolean {
    return this.gameState?.settings.permadeathEnabled || false;
  }
}

// Export singleton instance
export const rpgManager = RPGManager.getInstance();