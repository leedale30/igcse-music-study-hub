// GitHub Backup Service for IGCSE Music Study Hub
// Automatically backs up student data to private GitHub repository

export interface BackupData {
  timestamp: string
  triggerEvent: string
  studentCount: number
  totalUsers: number
  data: {
    users: any[]
    progressData: { [userId: string]: any }
    metadata: {
      backupVersion: string
      source: string
    }
  }
}

export class GitHubBackupService {
  private static readonly token = (import.meta as any).env.VITE_GITHUB_TOKEN
  private static readonly repo = (import.meta as any).env.VITE_GITHUB_REPO
  private static readonly enabled = (import.meta as any).env.VITE_BACKUP_ENABLED === 'true'
  
  /**
   * Create a backup of all student data and upload to GitHub
   */
  static async createBackup(triggerEvent = 'manual'): Promise<boolean> {
    if (!this.enabled) {
      console.log('📋 Backup disabled in environment');
      return false;
    }
    
    if (!this.token || !this.repo) {
      console.warn('⚠️ GitHub backup not configured - missing token or repo');
      return false;
    }
    
    try {
      console.log(`🚀 Starting backup (${triggerEvent})...`);
      
      // Gather all student data from localStorage
      const users = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
      const progressData: { [userId: string]: any } = {};
      
      // Get progress data for each student
      const students = users.filter((u: any) => u.role === 'student');
      students.forEach((student: any) => {
        const progress = localStorage.getItem(`igcse-progress-${student.id}`);
        if (progress) {
          progressData[student.id] = JSON.parse(progress);
        }
      });
      
      // Create backup data structure
      const backupData: BackupData = {
        timestamp: new Date().toISOString(),
        triggerEvent,
        studentCount: students.length,
        totalUsers: users.length,
        data: {
          users,
          progressData,
          metadata: {
            backupVersion: '1.0.0',
            source: 'igcse-music-hub'
          }
        }
      };
      
      // Create filename with date and trigger
      const date = new Date().toISOString().split('T')[0];
      const time = new Date().toTimeString().split(' ')[0].replace(/:/g, '-');
      const filename = `backup-${date}-${time}-${triggerEvent}.json`;
      
      console.log(`📊 Backing up ${students.length} students, ${users.length} total users`);
      
      // Upload to GitHub
      const response = await fetch(`https://api.github.com/repos/${this.repo}/contents/backups/${filename}`, {
        method: 'PUT',
        headers: {
          'Authorization': `token ${this.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: `Automated backup: ${triggerEvent} - ${new Date().toLocaleString()}`,
          content: btoa(JSON.stringify(backupData, null, 2))
        })
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('✅ Backup successful!');
        console.log(`📁 File: ${filename}`);
        console.log(`🔗 URL: ${result.content.html_url}`);
        console.log(`📊 Size: ${Math.round(JSON.stringify(backupData).length / 1024)} KB`);
        return true;
      } else {
        const error = await response.text();
        console.error('❌ Backup failed:', response.status, error);
        return false;
      }
    } catch (error) {
      console.error('❌ Backup error:', error);
      return false;
    }
  }
  
  /**
   * Test the backup system with current data
   */
  static async testBackup(): Promise<boolean> {
    console.log('🧪 Testing GitHub backup system...');
    return await this.createBackup('test');
  }
  
  /**
   * Schedule automatic backups
   */
  static scheduleAutoBackups(): void {
    if (!this.enabled) {
      console.log('📋 Auto-backup disabled');
      return;
    }
    
    // Backup every 24 hours
    setInterval(() => {
      this.createBackup('daily-auto');
    }, 24 * 60 * 60 * 1000);
    
    // Backup when page is about to close
    window.addEventListener('beforeunload', () => {
      // Use sendBeacon for reliable backup on page unload
      this.createBackup('page-unload');
    });
    
    // Backup after quiz completion (listen for custom events)
    window.addEventListener('quizCompleted', () => {
      this.createBackup('quiz-completed');
    });
    
    console.log('📅 Automatic backups scheduled');
    console.log('  - Daily: Every 24 hours');
    console.log('  - Page unload: When closing browser');
    console.log('  - Quiz completion: After each quiz');
  }
  
  /**
   * Get backup status and configuration
   */
  static getStatus(): {
    enabled: boolean
    configured: boolean
    token: boolean
    repo: string | null
  } {
    return {
      enabled: this.enabled,
      configured: !!(this.token && this.repo),
      token: !!this.token,
      repo: this.repo || null
    };
  }
  
  /**
   * Create a backup triggered by quiz completion
   */
  static async backupAfterQuiz(quizId: string, userId: string): Promise<boolean> {
    console.log(`📝 Quiz completed: ${quizId} by ${userId}`);
    return await this.createBackup(`quiz-${quizId}`);
  }
}

// Auto-start backup scheduling when module loads
if (typeof window !== 'undefined' && GitHubBackupService.getStatus().enabled) {
  // Wait a bit for the app to initialize
  setTimeout(() => {
    GitHubBackupService.scheduleAutoBackups();
  }, 2000);
}

// Make available globally for console testing
if (typeof window !== 'undefined') {
  (window as any).GitHubBackupService = GitHubBackupService;
}

export default GitHubBackupService;