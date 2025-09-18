// GitHub Backup Test Console Script
// Copy and paste this into your browser console to test backup functionality
// Make sure you've added your GitHub token to .env.local first!

console.log('🧪 GITHUB BACKUP TEST CONSOLE');
console.log('===============================');
console.log('⚠️  IMPORTANT: Make sure your .env.local file contains:');
console.log('   VITE_GITHUB_TOKEN=your-actual-token-here');
console.log('   VITE_GITHUB_REPO=leedale30/igcse-music-backups');
console.log('   VITE_BACKUP_ENABLED=true');
console.log('');

// Test GitHub backup functionality using environment variables
const testGitHubBackupFromEnv = async () => {
  console.log('🚀 Testing GitHub backup with environment variables...');
  
  // Try to get environment variables (only works in development)
  let token, repo;
  
  try {
    // These will only work if the app is running and env vars are loaded
    token = import.meta?.env?.VITE_GITHUB_TOKEN;
    repo = import.meta?.env?.VITE_GITHUB_REPO;
  } catch (error) {
    console.log('⚠️  Environment variables not accessible from console');
    console.log('💡 Please manually set your token and repo:');
    console.log('   const token = "your-github-token-here";');
    console.log('   const repo = "leedale30/igcse-music-backups";');
    console.log('   Then run: testWithManualConfig(token, repo);');
    return false;
  }
  
  if (!token || !repo) {
    console.error('❌ Missing environment variables!');
    console.log('Token exists:', !!token);
    console.log('Repo exists:', !!repo);
    console.log('');
    console.log('💡 To fix this:');
    console.log('1. Check your .env.local file exists');
    console.log('2. Restart your development server (npm run dev)');
    console.log('3. Refresh this page');
    return false;
  }
  
  return await testBackupWithConfig(token, repo);
};

// Test backup with manual configuration
const testWithManualConfig = async (token, repo) => {
  console.log('🔧 Testing with manual configuration...');
  return await testBackupWithConfig(token, repo);
};

// Core backup test function
const testBackupWithConfig = async (token, repo) => {
  console.log('✅ Configuration found');
  console.log('📁 Repository:', repo);
  console.log('🔑 Token:', token ? token.substring(0, 10) + '...' : 'Not provided');
  
  // Get current student data from localStorage
  const users = JSON.parse(localStorage.getItem('igcse-music-users') || '[]');
  const students = users.filter(u => u.role === 'student');
  
  // Gather progress data
  const progressData = {};
  students.forEach(student => {
    const progress = localStorage.getItem(`igcse-progress-${student.id}`);
    if (progress) {
      progressData[student.id] = JSON.parse(progress);
    }
  });
  
  // Create test backup data
  const backupData = {
    timestamp: new Date().toISOString(),
    triggerEvent: 'console-test',
    studentCount: students.length,
    totalUsers: users.length,
    data: {
      users: users,
      progressData: progressData,
      metadata: {
        backupVersion: '1.0.0',
        source: 'console-test'
      }
    }
  };
  
  console.log(`📊 Data Summary:`);
  console.log(`  - Total users: ${users.length}`);
  console.log(`  - Students: ${students.length}`);
  console.log(`  - Progress records: ${Object.keys(progressData).length}`);
  console.log(`  - Backup size: ${Math.round(JSON.stringify(backupData).length / 1024)} KB`);
  
  try {
    // Create filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `console-test-${timestamp}.json`;
    
    console.log('📤 Uploading to GitHub...');
    
    // Upload to GitHub
    const response = await fetch(`https://api.github.com/repos/${repo}/contents/${filename}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Console test backup - ${new Date().toLocaleString()}`,
        content: btoa(JSON.stringify(backupData, null, 2))
      })
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log('✅ BACKUP SUCCESSFUL!');
      console.log('📁 File created:', result.content.name);
      console.log('🔗 View at:', result.content.html_url);
      console.log('📊 File size:', result.content.size, 'bytes');
      console.log('');
      console.log('🎉 Your GitHub backup system is working!');
      return true;
    } else {
      const errorText = await response.text();
      console.error('❌ BACKUP FAILED!');
      console.error('Status:', response.status, response.statusText);
      console.error('Error:', errorText);
      
      // Common error explanations
      if (response.status === 401) {
        console.log('💡 This usually means:');
        console.log('  - Invalid GitHub token');
        console.log('  - Token doesn\'t have \'repo\' permissions');
      } else if (response.status === 404) {
        console.log('💡 This usually means:');
        console.log('  - Repository doesn\'t exist');
        console.log('  - Repository name is incorrect');
        console.log('  - Token doesn\'t have access to the repository');
      }
      
      return false;
    }
  } catch (error) {
    console.error('❌ NETWORK ERROR!');
    console.error('Error:', error.message);
    console.log('💡 This usually means:');
    console.log('  - No internet connection');
    console.log('  - GitHub API is down');
    console.log('  - CORS or network restrictions');
    return false;
  }
};

// Test repository access
const testRepositoryAccess = async (token, repo) => {
  console.log('🔍 Testing repository access...');
  
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        'Authorization': `token ${token}`
      }
    });
    
    if (response.ok) {
      const repoData = await response.json();
      console.log('✅ Repository access successful!');
      console.log('📁 Repository:', repoData.full_name);
      console.log('🔒 Private:', repoData.private);
      console.log('📊 Size:', repoData.size, 'KB');
      return true;
    } else {
      console.error('❌ Repository access failed:', response.status);
      return false;
    }
  } catch (error) {
    console.error('❌ Repository test error:', error.message);
    return false;
  }
};

// Check if GitHubBackupService is available
const testBackupService = () => {
  console.log('🔍 Checking if GitHubBackupService is loaded...');
  
  if (typeof window !== 'undefined' && window.GitHubBackupService) {
    console.log('✅ GitHubBackupService is available!');
    const service = window.GitHubBackupService;
    const status = service.getStatus();
    
    console.log('📊 Service Status:');
    console.log('  - Enabled:', status.enabled);
    console.log('  - Configured:', status.configured);
    console.log('  - Has Token:', status.token);
    console.log('  - Repository:', status.repo);
    
    if (status.configured) {
      console.log('\n🧪 Testing service backup...');
      service.testBackup().then(success => {
        if (success) {
          console.log('✅ Service backup test successful!');
        } else {
          console.log('❌ Service backup test failed');
        }
      });
    }
    
    return true;
  } else {
    console.log('⚠️  GitHubBackupService not found');
    console.log('💡 This means the service hasn\'t loaded yet or there\'s an error');
    return false;
  }
};

// Main test runner
const runBackupTests = () => {
  console.log('🧪 Running backup system tests...\n');
  
  // Test 1: Check if service is loaded
  const serviceLoaded = testBackupService();
  
  // Test 2: Try environment variable test
  if (!serviceLoaded) {
    console.log('\n🔧 Trying environment variable test...');
    testGitHubBackupFromEnv();
  }
  
  console.log('\n📋 MANUAL TEST INSTRUCTIONS:');
  console.log('============================');
  console.log('If automatic tests don\'t work, try manual testing:');
  console.log('');
  console.log('1. Set your credentials:');
  console.log('   const token = "your-github-token-here";');
  console.log('   const repo = "leedale30/igcse-music-backups";');
  console.log('');
  console.log('2. Test repository access:');
  console.log('   testRepositoryAccess(token, repo);');
  console.log('');
  console.log('3. Test backup upload:');
  console.log('   testWithManualConfig(token, repo);');
  console.log('');
  console.log('🔗 Your backup repository:');
  console.log('   https://github.com/leedale30/igcse-music-backups');
};

// Make functions available globally
if (typeof window !== 'undefined') {
  window.testGitHubBackupFromEnv = testGitHubBackupFromEnv;
  window.testWithManualConfig = testWithManualConfig;
  window.testRepositoryAccess = testRepositoryAccess;
  window.testBackupService = testBackupService;
  window.runBackupTests = runBackupTests;
}

// Auto-run tests
console.log('Starting tests in 2 seconds...');
setTimeout(runBackupTests, 2000);