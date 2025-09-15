import { User, StudentProgress, QuizResult, Badge, IGCSEAssessment } from '../types';
import { EnhancedBadge } from '../types/badges';

export interface StudentBackupData {
  user: User;
  progress: StudentProgress;
  igcseAssessments: IGCSEAssessment[];
  enhancedBadges?: EnhancedBadge[];
  rpgData?: any; // RPG game state if enabled
  backupTimestamp: Date;
  backupVersion: string;
}

export interface SystemBackup {
  users: User[];
  allProgressData: { [userId: string]: StudentProgress };
  allIGCSEAssessments: { [userId: string]: IGCSEAssessment[] };
  allEnhancedBadges: { [userId: string]: EnhancedBadge[] };
  allRPGData: { [userId: string]: any };
  backupTimestamp: Date;
  backupVersion: string;
  totalStudents: number;
}

class DataBackupManager {
  private readonly BACKUP_VERSION = '1.0.0';
  private readonly BACKUP_PREFIX = 'igcse-backup-';
  private readonly SYSTEM_BACKUP_KEY = 'igcse-system-backup';
  private readonly AUTO_BACKUP_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours

  /**
   * Create a complete backup of a single student's data
   */
  createStudentBackup(userId: string): StudentBackupData | null {
    try {
      // Get user data
      const users = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
      const user = users.find((u: User) => u.id === userId);
      if (!user) {
        console.error(`User with ID ${userId} not found`);
        return null;
      }

      // Get progress data
      const progressData = localStorage.getItem(`igcse-progress-${userId}`);
      const progress: StudentProgress = progressData ? JSON.parse(progressData) : {
        userId,
        totalQuizzesCompleted: 0,
        totalPagesVisited: 0,
        averageQuizScore: 0,
        totalStudyTime: 0,
        quizResults: [],
        pageProgress: [],
        badges: [],
        lastUpdated: new Date()
      };

      // Get IGCSE assessments
      const assessmentsData = localStorage.getItem(`igcse-assessments-${userId}`);
      const igcseAssessments: IGCSEAssessment[] = assessmentsData ? JSON.parse(assessmentsData) : [];

      // Get enhanced badges
      const enhancedBadgesData = localStorage.getItem(`enhanced-badges-${userId}`);
      const enhancedBadges: EnhancedBadge[] = enhancedBadgesData ? JSON.parse(enhancedBadgesData) : [];

      // Get RPG data if exists
      const rpgData = localStorage.getItem(`rpg-gamestate-${userId}`);
      const rpgGameState = rpgData ? JSON.parse(rpgData) : null;

      const backup: StudentBackupData = {
        user: { ...user },
        progress,
        igcseAssessments,
        enhancedBadges,
        rpgData: rpgGameState,
        backupTimestamp: new Date(),
        backupVersion: this.BACKUP_VERSION
      };

      // Store individual backup
      localStorage.setItem(`${this.BACKUP_PREFIX}${userId}`, JSON.stringify(backup));
      
      console.log(`Backup created for user ${user.name} (${userId})`);
      return backup;
    } catch (error) {
      console.error('Error creating student backup:', error);
      return null;
    }
  }

  /**
   * Restore a student's data from backup
   */
  restoreStudentBackup(userId: string): boolean {
    try {
      const backupData = localStorage.getItem(`${this.BACKUP_PREFIX}${userId}`);
      if (!backupData) {
        console.error(`No backup found for user ${userId}`);
        return false;
      }

      const backup: StudentBackupData = JSON.parse(backupData);
      
      // Restore user data
      const users = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
      const userIndex = users.findIndex((u: User) => u.id === userId);
      if (userIndex !== -1) {
        users[userIndex] = backup.user;
      } else {
        users.push(backup.user);
      }
      localStorage.setItem('igcse-music-users', JSON.stringify(users));

      // Restore progress data
      localStorage.setItem(`igcse-progress-${userId}`, JSON.stringify(backup.progress));

      // Restore IGCSE assessments
      if (backup.igcseAssessments.length > 0) {
        localStorage.setItem(`igcse-assessments-${userId}`, JSON.stringify(backup.igcseAssessments));
      }

      // Restore enhanced badges
      if (backup.enhancedBadges && backup.enhancedBadges.length > 0) {
        localStorage.setItem(`enhanced-badges-${userId}`, JSON.stringify(backup.enhancedBadges));
      }

      // Restore RPG data
      if (backup.rpgData) {
        localStorage.setItem(`rpg-gamestate-${userId}`, JSON.stringify(backup.rpgData));
      }

      console.log(`Data restored for user ${backup.user.name} (${userId})`);
      return true;
    } catch (error) {
      console.error('Error restoring student backup:', error);
      return false;
    }
  }

  /**
   * Create a complete system backup of all users and data
   */
  createSystemBackup(): SystemBackup | null {
    try {
      // Get all users
      const users: User[] = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
      
      const allProgressData: { [userId: string]: StudentProgress } = {};
      const allIGCSEAssessments: { [userId: string]: IGCSEAssessment[] } = {};
      const allEnhancedBadges: { [userId: string]: EnhancedBadge[] } = {};
      const allRPGData: { [userId: string]: any } = {};

      // Collect data for all users
      users.forEach(user => {
        // Progress data
        const progressData = localStorage.getItem(`igcse-progress-${user.id}`);
        if (progressData) {
          allProgressData[user.id] = JSON.parse(progressData);
        }

        // IGCSE assessments
        const assessmentsData = localStorage.getItem(`igcse-assessments-${user.id}`);
        if (assessmentsData) {
          allIGCSEAssessments[user.id] = JSON.parse(assessmentsData);
        }

        // Enhanced badges
        const enhancedBadgesData = localStorage.getItem(`enhanced-badges-${user.id}`);
        if (enhancedBadgesData) {
          allEnhancedBadges[user.id] = JSON.parse(enhancedBadgesData);
        }

        // RPG data
        const rpgData = localStorage.getItem(`rpg-gamestate-${user.id}`);
        if (rpgData) {
          allRPGData[user.id] = JSON.parse(rpgData);
        }
      });

      const systemBackup: SystemBackup = {
        users,
        allProgressData,
        allIGCSEAssessments,
        allEnhancedBadges,
        allRPGData,
        backupTimestamp: new Date(),
        backupVersion: this.BACKUP_VERSION,
        totalStudents: users.filter(u => u.role === 'student').length
      };

      // Store system backup
      localStorage.setItem(this.SYSTEM_BACKUP_KEY, JSON.stringify(systemBackup));
      
      console.log(`System backup created with ${systemBackup.totalStudents} students`);
      return systemBackup;
    } catch (error) {
      console.error('Error creating system backup:', error);
      return null;
    }
  }

  /**
   * Restore entire system from backup
   */
  restoreSystemBackup(): boolean {
    try {
      const backupData = localStorage.getItem(this.SYSTEM_BACKUP_KEY);
      if (!backupData) {
        console.error('No system backup found');
        return false;
      }

      const backup: SystemBackup = JSON.parse(backupData);
      
      // Restore users
      localStorage.setItem('igcse-music-users', JSON.stringify(backup.users));

      // Restore all progress data
      Object.entries(backup.allProgressData).forEach(([userId, progress]) => {
        localStorage.setItem(`igcse-progress-${userId}`, JSON.stringify(progress));
      });

      // Restore all IGCSE assessments
      Object.entries(backup.allIGCSEAssessments).forEach(([userId, assessments]) => {
        localStorage.setItem(`igcse-assessments-${userId}`, JSON.stringify(assessments));
      });

      // Restore all enhanced badges
      Object.entries(backup.allEnhancedBadges).forEach(([userId, badges]) => {
        localStorage.setItem(`enhanced-badges-${userId}`, JSON.stringify(badges));
      });

      // Restore all RPG data
      Object.entries(backup.allRPGData).forEach(([userId, rpgData]) => {
        localStorage.setItem(`rpg-gamestate-${userId}`, JSON.stringify(rpgData));
      });

      console.log(`System restored with ${backup.totalStudents} students`);
      return true;
    } catch (error) {
      console.error('Error restoring system backup:', error);
      return false;
    }
  }

  /**
   * Export student data as downloadable JSON
   */
  exportStudentData(userId: string): string | null {
    const backup = this.createStudentBackup(userId);
    if (!backup) return null;

    return JSON.stringify(backup, null, 2);
  }

  /**
   * Import student data from JSON string
   */
  importStudentData(jsonData: string): boolean {
    try {
      const backup: StudentBackupData = JSON.parse(jsonData);
      
      // Validate backup structure
      if (!backup.user || !backup.progress || !backup.backupTimestamp) {
        console.error('Invalid backup data structure');
        return false;
      }

      return this.restoreStudentBackup(backup.user.id);
    } catch (error) {
      console.error('Error importing student data:', error);
      return false;
    }
  }

  /**
   * Export entire system as downloadable JSON
   */
  exportSystemData(): string | null {
    const backup = this.createSystemBackup();
    if (!backup) return null;

    return JSON.stringify(backup, null, 2);
  }

  /**
   * Get backup status for all students
   */
  getBackupStatus(): { [userId: string]: { hasBackup: boolean; backupDate?: Date; user?: User } } {
    const users: User[] = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
    const status: { [userId: string]: { hasBackup: boolean; backupDate?: Date; user?: User } } = {};

    users.forEach(user => {
      const backupData = localStorage.getItem(`${this.BACKUP_PREFIX}${user.id}`);
      if (backupData) {
        try {
          const backup: StudentBackupData = JSON.parse(backupData);
          status[user.id] = {
            hasBackup: true,
            backupDate: new Date(backup.backupTimestamp),
            user
          };
        } catch {
          status[user.id] = { hasBackup: false, user };
        }
      } else {
        status[user.id] = { hasBackup: false, user };
      }
    });

    return status;
  }

  /**
   * Auto-backup all student data
   */
  performAutoBackup(): void {
    try {
      const users: User[] = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
      const students = users.filter(u => u.role === 'student');
      
      let successCount = 0;
      students.forEach(student => {
        if (this.createStudentBackup(student.id)) {
          successCount++;
        }
      });

      // Also create system backup
      this.createSystemBackup();

      // Store last backup timestamp
      localStorage.setItem('last-auto-backup', new Date().toISOString());
      
      console.log(`Auto-backup completed: ${successCount}/${students.length} students backed up`);
    } catch (error) {
      console.error('Error during auto-backup:', error);
    }
  }

  /**
   * Check if auto-backup is needed
   */
  shouldPerformAutoBackup(): boolean {
    const lastBackup = localStorage.getItem('last-auto-backup');
    if (!lastBackup) return true;

    const lastBackupDate = new Date(lastBackup);
    const now = new Date();
    return (now.getTime() - lastBackupDate.getTime()) > this.AUTO_BACKUP_INTERVAL;
  }

  /**
   * Initialize auto-backup system
   */
  initializeAutoBackup(): void {
    // Perform initial backup if needed
    if (this.shouldPerformAutoBackup()) {
      this.performAutoBackup();
    }

    // Set up periodic auto-backup
    setInterval(() => {
      if (this.shouldPerformAutoBackup()) {
        this.performAutoBackup();
      }
    }, 60 * 60 * 1000); // Check every hour
  }

  /**
   * Migrate user data safely (preserves all data during account changes)
   */
  migrateUserData(oldUserId: string, newUserId: string): boolean {
    try {
      // Create backup of old data
      const backup = this.createStudentBackup(oldUserId);
      if (!backup) {
        console.error('Failed to create backup for migration');
        return false;
      }

      // Update user ID in backup
      backup.user.id = newUserId;
      backup.progress.userId = newUserId;
      backup.igcseAssessments.forEach(assessment => {
        assessment.studentId = newUserId;
      });

      // Store backup with new ID
      localStorage.setItem(`${this.BACKUP_PREFIX}${newUserId}`, JSON.stringify(backup));

      // Restore data with new ID
      return this.restoreStudentBackup(newUserId);
    } catch (error) {
      console.error('Error during user data migration:', error);
      return false;
    }
  }

  /**
   * Verify data integrity
   */
  verifyDataIntegrity(userId: string): { isValid: boolean; issues: string[] } {
    const issues: string[] = [];
    
    try {
      // Check user exists
      const users = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
      const user = users.find((u: User) => u.id === userId);
      if (!user) {
        issues.push('User account not found');
      }

      // Check progress data
      const progressData = localStorage.getItem(`igcse-progress-${userId}`);
      if (!progressData) {
        issues.push('Progress data missing');
      } else {
        try {
          const progress = JSON.parse(progressData);
          if (progress.userId !== userId) {
            issues.push('Progress data user ID mismatch');
          }
        } catch {
          issues.push('Progress data corrupted');
        }
      }

      // Check backup exists
      const backupData = localStorage.getItem(`${this.BACKUP_PREFIX}${userId}`);
      if (!backupData) {
        issues.push('No backup found');
      }

      return {
        isValid: issues.length === 0,
        issues
      };
    } catch (error) {
      return {
        isValid: false,
        issues: [`Data integrity check failed: ${error}`]
      };
    }
  }
}

// Export singleton instance
export const dataBackupManager = new DataBackupManager();

// Auto-initialize backup system
if (typeof window !== 'undefined') {
  // Initialize after a short delay to ensure localStorage is ready
  setTimeout(() => {
    dataBackupManager.initializeAutoBackup();
  }, 1000);
}