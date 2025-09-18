# 🚀 Step-by-Step: GitHub Backup Repository Setup

**Time Required: 10 minutes**
**Difficulty: ⭐⭐☆☆☆ (Beginner)**

---

## 📋 **Step 1: Create Backup Repository (2 minutes)**

### 1.1 Navigate to GitHub
1. Open your web browser
2. Go to **https://github.com**
3. Make sure you're logged in as `leedale30`
4. You should see your dashboard with your existing repositories

### 1.2 Create New Repository
1. Look for the **green "New"** button (usually top-left or in repositories section)
2. Click **"New"** or **"New repository"**
3. You'll be taken to the "Create a new repository" page

### 1.3 Configure Repository Settings
**Fill in these exact details:**

```
📝 Repository name: igcse-music-backups
📝 Description: Private backup storage for IGCSE Music Study Hub student data
🔒 Visibility: Private (VERY IMPORTANT - click the Private radio button)
📋 Initialize: Leave ALL checkboxes UNCHECKED
   ❌ Don't check "Add a README file"
   ❌ Don't check "Add .gitignore"
   ❌ Don't check "Choose a license"
```

### 1.4 Create the Repository
1. Double-check that **"Private"** is selected (crucial for student data)
2. Click the **green "Create repository"** button
3. You'll see a page with setup instructions - **ignore these for now**
4. Copy the repository URL (should be: `https://github.com/leedale30/igcse-music-backups.git`)

**✅ Repository Created!** You now have a private backup repository.

---

## 🔑 **Step 2: Generate GitHub Personal Access Token (3 minutes)**

### 2.1 Navigate to Developer Settings
1. Click your **profile picture** (top-right corner)
2. Click **"Settings"** from the dropdown menu
3. Scroll down the left sidebar to **"Developer settings"** (at the bottom)
4. Click **"Developer settings"**

### 2.2 Access Personal Access Tokens
1. In the left sidebar, click **"Personal access tokens"**
2. Click **"Tokens (classic)"**
3. You'll see a list of existing tokens (might be empty)

### 2.3 Generate New Token
1. Click the **"Generate new token"** button
2. Select **"Generate new token (classic)"**
3. You might be asked to confirm your password - enter it

### 2.4 Configure Token Settings
**Fill in these details:**

```
📝 Note: IGCSE Music Hub Backup Token
📅 Expiration: No expiration (or 1 year if you prefer)
🔐 Scopes: Check ONLY these boxes:
   ✅ repo (Full control of private repositories)
   ❌ Leave all other boxes unchecked
```

### 2.5 Generate and Copy Token
1. Scroll down and click **"Generate token"**
2. **IMMEDIATELY COPY THE TOKEN** - it looks like: `ghp_xxxxxxxxxxxxxxxxxxxx`
3. **SAVE IT SOMEWHERE SAFE** - you won't be able to see it again!
4. Paste it in a text file temporarily or directly into the next step

**⚠️ CRITICAL:** Don't close this page until you've saved the token!

**✅ Token Generated!** You now have API access to your repositories.

---

## 📁 **Step 3: Add Environment Variables (2 minutes)**

### 3.1 Open Your Project
1. Open your IGCSE Music Study Hub project folder
2. Look for the file `.env.local` in the root directory
3. If it doesn't exist, create a new file called `.env.local`

### 3.2 Add Environment Variables
**Add these lines to `.env.local`:**

```env
# GitHub Backup Configuration
VITE_GITHUB_TOKEN=paste-your-token-here
VITE_GITHUB_REPO=leedale30/igcse-music-backups
VITE_BACKUP_ENABLED=true
```

**Replace `paste-your-token-here` with your actual token from Step 2.5**

### 3.3 Example Complete File
```env
# GitHub Backup Configuration
VITE_GITHUB_TOKEN=ghp_1234567890abcdefghijklmnopqrstuvwxyz
VITE_GITHUB_REPO=leedale30/igcse-music-backups
VITE_BACKUP_ENABLED=true

# Add any other environment variables you might have
# VITE_SUPABASE_URL=your-supabase-url (if you have it)
# VITE_SUPABASE_ANON_KEY=your-supabase-key (if you have it)
```

### 3.4 Save and Secure
1. **Save the file**
2. **NEVER commit this file to Git** (it should be in your `.gitignore`)
3. Make sure `.env.local` is listed in your `.gitignore` file

**✅ Environment Configured!** Your app can now access GitHub.

---

## 🧪 **Step 4: Test Backup Functionality (3 minutes)**

### 4.1 Start Your Development Server
1. Open terminal in your project directory
2. Run: `npm run dev`
3. Open your site in the browser (usually `http://localhost:5173`)

### 4.2 Open Browser Console
1. Press **F12** (or right-click → "Inspect")
2. Click the **"Console"** tab
3. You should see the console where you can type JavaScript

### 4.3 Run Test Backup Script
**Copy and paste this entire script into the console:**

```javascript
// GitHub Backup Test Script
const testGitHubBackup = async () => {
  console.log('🚀 Starting GitHub backup test...');
  
  // Get environment variables
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const repo = import.meta.env.VITE_GITHUB_REPO;
  
  if (!token || !repo) {
    console.error('❌ Missing environment variables!');
    console.log('Token exists:', !!token);
    console.log('Repo exists:', !!repo);
    return;
  }
  
  // Get current student data
  const users = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
  const studentCount = users.filter(u => u.role === 'student').length;
  
  // Create test backup data
  const backupData = {
    timestamp: new Date().toISOString(),
    message: 'Test backup from IGCSE Music Hub',
    studentCount: studentCount,
    totalUsers: users.length,
    data: {
      users: users,
      metadata: {
        backupVersion: '1.0.0',
        source: 'manual-test'
      }
    }
  };
  
  console.log(`📊 Backing up ${studentCount} students, ${users.length} total users`);
  
  try {
    // Upload to GitHub
    const filename = `test-backup-${Date.now()}.json`;
    const response = await fetch(`https://api.github.com/repos/${repo}/contents/${filename}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Test backup: ${new Date().toLocaleString()}`,
        content: btoa(JSON.stringify(backupData, null, 2))
      })
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log('✅ Backup successful!');
      console.log('📁 File created:', result.content.name);
      console.log('🔗 View at:', result.content.html_url);
      console.log('📊 Backup size:', Math.round(JSON.stringify(backupData).length / 1024), 'KB');
    } else {
      const error = await response.text();
      console.error('❌ Backup failed:', response.status, error);
    }
  } catch (error) {
    console.error('❌ Network error:', error.message);
  }
};

// Run the test
testGitHubBackup();
```

### 4.4 Check Results
**You should see output like:**
```
🚀 Starting GitHub backup test...
📊 Backing up 9 students, 11 total users
✅ Backup successful!
📁 File created: test-backup-1703123456789.json
🔗 View at: https://github.com/leedale30/igcse-music-backups/blob/main/test-backup-1703123456789.json
📊 Backup size: 15 KB
```

### 4.5 Verify on GitHub
1. Go to your backup repository: `https://github.com/leedale30/igcse-music-backups`
2. You should see a new file with a name like `test-backup-1703123456789.json`
3. Click on the file to view its contents
4. You should see your student data in JSON format

**✅ Backup Working!** Your system can now automatically backup student data.

---

## 🔄 **Step 5: Set Up Automatic Backups (Optional - 2 minutes)**

### 5.1 Add Backup Service to Your App
**Create a new file: `src/services/githubBackup.ts`**

```typescript
// GitHub Backup Service
export class GitHubBackupService {
  private static readonly token = import.meta.env.VITE_GITHUB_TOKEN
  private static readonly repo = import.meta.env.VITE_GITHUB_REPO
  
  static async createBackup(triggerEvent = 'manual') {
    if (!this.token || !this.repo) {
      console.warn('GitHub backup not configured');
      return false;
    }
    
    try {
      // Gather all student data
      const users = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
      const progressData: any = {};
      
      // Get progress for each student
      users.filter(u => u.role === 'student').forEach(student => {
        const progress = localStorage.getItem(`igcse-progress-${student.id}`);
        if (progress) {
          progressData[student.id] = JSON.parse(progress);
        }
      });
      
      const backupData = {
        timestamp: new Date().toISOString(),
        triggerEvent,
        studentCount: users.filter(u => u.role === 'student').length,
        data: {
          users,
          progressData,
          metadata: {
            backupVersion: '1.0.0',
            source: 'automated'
          }
        }
      };
      
      // Create filename with date
      const date = new Date().toISOString().split('T')[0];
      const filename = `backup-${date}-${triggerEvent}.json`;
      
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
        console.log(`✅ Backup created: ${filename}`);
        return true;
      } else {
        console.error('❌ Backup failed:', response.status);
        return false;
      }
    } catch (error) {
      console.error('❌ Backup error:', error);
      return false;
    }
  }
  
  static scheduleAutoBackups() {
    // Backup every 24 hours
    setInterval(() => {
      this.createBackup('daily-auto');
    }, 24 * 60 * 60 * 1000);
    
    // Backup when page is about to close
    window.addEventListener('beforeunload', () => {
      this.createBackup('page-unload');
    });
    
    console.log('📅 Automatic backups scheduled');
  }
}

// Auto-start backup scheduling
if (import.meta.env.VITE_BACKUP_ENABLED === 'true') {
  GitHubBackupService.scheduleAutoBackups();
}
```

### 5.2 Import in Your Main App
**Add to your `src/main.tsx` or `src/index.tsx`:**

```typescript
// Add this import at the top
import './services/githubBackup';

// Rest of your existing code...
```

**✅ Automatic Backups Enabled!** Your app will now backup data daily and when closing.

---

## 🎉 **Congratulations! Setup Complete**

### **What You've Accomplished:**
✅ **Private GitHub repository** for secure student data storage
✅ **API access token** for automated backups
✅ **Environment configuration** for secure credential management
✅ **Working backup system** tested and verified
✅ **Automatic scheduling** for daily data protection

### **Your Data is Now Protected:**
- 🔒 **Encrypted storage** in private GitHub repository
- 📅 **Daily automatic backups** of all student progress
- 🔄 **Version history** - can restore any previous backup
- 🌍 **Cloud storage** - accessible from anywhere
- 🛡️ **Professional security** - industry-standard practices

### **Next Steps:**
1. **Monitor backups** - check your repository daily for new backup files
2. **Test recovery** - try downloading and restoring a backup
3. **Plan Supabase migration** - when ready for full backend
4. **Document for team** - share backup procedures with other teachers

---

## 🆘 **Troubleshooting**

### **Issue: "Missing environment variables"**
**Solution:** Check your `.env.local` file exists and has correct token

### **Issue: "403 Forbidden" error**
**Solution:** 
1. Check token has `repo` permissions
2. Verify repository name is correct
3. Make sure you're the owner of the repository

### **Issue: "Network error"**
**Solution:**
1. Check internet connection
2. Verify GitHub is accessible
3. Try the test script again

### **Issue: "No data to backup"**
**Solution:**
1. Make sure students have completed some quizzes
2. Check localStorage has user data
3. Verify you're on the correct domain

### **Need Help?**
- Check the backup repository: `https://github.com/leedale30/igcse-music-backups`
- Review console logs for error messages
- Test with the provided script first

**🎵 Your IGCSE Music Study Hub data is now professionally protected!** ✨