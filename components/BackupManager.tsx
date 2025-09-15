import React, { useState, useEffect } from 'react';
import { dataBackupManager, StudentBackupData, SystemBackup } from '../utils/dataBackup';
import { User } from '../types';

interface BackupManagerProps {
  onClose: () => void;
}

interface BackupStatusItem {
  hasBackup: boolean;
  backupDate?: Date;
  user?: User;
}

const BackupManager: React.FC<BackupManagerProps> = ({ onClose }) => {
  const [backupStatus, setBackupStatus] = useState<{ [userId: string]: BackupStatusItem }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [selectedTab, setSelectedTab] = useState<'status' | 'backup' | 'restore' | 'export'>('status');

  useEffect(() => {
    loadBackupStatus();
  }, []);

  const loadBackupStatus = () => {
    try {
      const status = dataBackupManager.getBackupStatus();
      setBackupStatus(status);
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to load backup status' });
    }
  };

  const handleCreateBackup = async (userId?: string) => {
    setIsLoading(true);
    setMessage(null);
    
    try {
      if (userId) {
        // Backup single student
        const backup = dataBackupManager.createStudentBackup(userId);
        if (backup) {
          setMessage({ type: 'success', text: `Backup created for ${backup.user.name}` });
        } else {
          setMessage({ type: 'error', text: 'Failed to create student backup' });
        }
      } else {
        // Backup all students
        dataBackupManager.performAutoBackup();
        setMessage({ type: 'success', text: 'System backup completed for all students' });
      }
      loadBackupStatus();
    } catch (error) {
      setMessage({ type: 'error', text: 'Backup operation failed' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRestoreBackup = async (userId: string) => {
    if (!confirm('Are you sure you want to restore this student\'s data from backup? This will overwrite current data.')) {
      return;
    }

    setIsLoading(true);
    setMessage(null);
    
    try {
      const success = dataBackupManager.restoreStudentBackup(userId);
      if (success) {
        setMessage({ type: 'success', text: 'Student data restored successfully' });
      } else {
        setMessage({ type: 'error', text: 'Failed to restore student data' });
      }
      loadBackupStatus();
    } catch (error) {
      setMessage({ type: 'error', text: 'Restore operation failed' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleExportData = (userId?: string) => {
    try {
      let data: string | null;
      let filename: string;
      
      if (userId) {
        data = dataBackupManager.exportStudentData(userId);
        const user = Object.values(backupStatus).find((s: BackupStatusItem) => s.user?.id === userId)?.user;
        filename = `student-backup-${user?.name.replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.json`;
      } else {
        data = dataBackupManager.exportSystemData();
        filename = `system-backup-${new Date().toISOString().split('T')[0]}.json`;
      }
      
      if (data) {
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        setMessage({ type: 'success', text: 'Data exported successfully' });
      } else {
        setMessage({ type: 'error', text: 'Failed to export data' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Export operation failed' });
    }
  };

  const handleImportData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData = e.target?.result as string;
        const success = dataBackupManager.importStudentData(jsonData);
        
        if (success) {
          setMessage({ type: 'success', text: 'Student data imported successfully' });
          loadBackupStatus();
        } else {
          setMessage({ type: 'error', text: 'Failed to import student data' });
        }
      } catch (error) {
        setMessage({ type: 'error', text: 'Invalid backup file format' });
      }
    };
    reader.readAsText(file);
  };

  const verifyDataIntegrity = (userId: string) => {
    const result = dataBackupManager.verifyDataIntegrity(userId);
    const user = backupStatus[userId]?.user;
    
    if (result.isValid) {
      setMessage({ type: 'success', text: `Data integrity verified for ${user?.name}` });
    } else {
      setMessage({ 
        type: 'error', 
        text: `Data integrity issues found for ${user?.name}: ${result.issues.join(', ')}` 
      });
    }
  };

  const students = Object.values(backupStatus).filter((s: BackupStatusItem): s is BackupStatusItem & { user: User } => s.user?.role === 'student');
  const totalStudents = students.length;
  const backedUpStudents = students.filter(s => s.hasBackup).length;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Student Data Backup Manager
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Protect and manage student quiz scores, progress, and achievements
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Status Summary */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">Total Students</p>
                  <p className="text-lg font-bold text-blue-900 dark:text-blue-100">{totalStudents}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">Backed Up</p>
                  <p className="text-lg font-bold text-green-900 dark:text-green-100">{backedUpStudents}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/40 rounded-lg">
                  <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Need Backup</p>
                  <p className="text-lg font-bold text-yellow-900 dark:text-yellow-100">{totalStudents - backedUpStudents}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Display */}
        {message && (
          <div className={`p-4 border-b border-slate-200 dark:border-slate-700 ${
            message.type === 'success' ? 'bg-green-50 dark:bg-green-900/20' :
            message.type === 'error' ? 'bg-red-50 dark:bg-red-900/20' :
            'bg-blue-50 dark:bg-blue-900/20'
          }`}>
            <p className={`text-sm ${
              message.type === 'success' ? 'text-green-800 dark:text-green-200' :
              message.type === 'error' ? 'text-red-800 dark:text-red-200' :
              'text-blue-800 dark:text-blue-200'
            }`}>
              {message.text}
            </p>
          </div>
        )}

        {/* Tabs */}
        <div className="border-b border-slate-200 dark:border-slate-700">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'status', label: 'Backup Status', icon: '📊' },
              { id: 'backup', label: 'Create Backups', icon: '💾' },
              { id: 'restore', label: 'Restore Data', icon: '🔄' },
              { id: 'export', label: 'Export/Import', icon: '📤' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === tab.id
                    ? 'border-sky-500 text-sky-600 dark:text-sky-400'
                    : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {selectedTab === 'status' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">Student Backup Status</h3>
                <button
                  onClick={loadBackupStatus}
                  className="bg-slate-600 hover:bg-slate-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                >
                  Refresh
                </button>
              </div>
              
              <div className="space-y-3">
                {students.map(({ user, hasBackup, backupDate }) => {
                  if (!user) return null;
                  return (
                    <div key={user.id} className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          hasBackup ? 'bg-green-500' : 'bg-red-500'
                        }`} />
                        <div>
                          <p className="font-medium text-slate-900 dark:text-slate-100">
                            {user.nickname || user.name} ({user.group || 'Unassigned'})
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {user.email}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        {hasBackup && backupDate && (
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            Last backup: {backupDate.toLocaleDateString()}
                          </span>
                        )}
                        <button
                          onClick={() => verifyDataIntegrity(user.id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
                        >
                          Verify
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {selectedTab === 'backup' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">Create Backups</h3>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">System-Wide Backup</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                      Create backups for all students at once. Recommended for regular maintenance.
                    </p>
                    <button
                      onClick={() => handleCreateBackup()}
                      disabled={isLoading}
                      className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-md font-medium transition-colors"
                    >
                      {isLoading ? 'Creating...' : 'Backup All Students'}
                    </button>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-3">Individual Student Backups</h4>
                    <div className="space-y-2">
                      {students.map(({ user }) => {
                        if (!user) return null;
                        return (
                          <div key={user.id} className="flex items-center justify-between p-3 border border-slate-200 dark:border-slate-700 rounded">
                            <span className="text-slate-900 dark:text-slate-100">
                              {user.nickname || user.name} ({user.group || 'Unassigned'})
                            </span>
                            <button
                              onClick={() => handleCreateBackup(user.id)}
                              disabled={isLoading}
                              className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-3 py-1 rounded text-sm transition-colors"
                            >
                              Backup
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'restore' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">Restore Student Data</h3>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200">Warning</h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                      Restoring data will overwrite current student progress, quiz scores, and achievements. This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                {students.filter(s => s.hasBackup).map(({ user }) => {
                  if (!user) return null;
                  return (
                    <div key={user.id} className="flex items-center justify-between p-3 border border-slate-200 dark:border-slate-700 rounded">
                      <span className="text-slate-900 dark:text-slate-100">
                        {user.nickname || user.name} ({user.group || 'Unassigned'})
                      </span>
                      <button
                        onClick={() => handleRestoreBackup(user.id)}
                        disabled={isLoading}
                        className="bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        Restore
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {selectedTab === 'export' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">Export Data</h3>
                
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Export All Data</h4>
                    <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                      Download a complete backup file containing all student data.
                    </p>
                    <button
                      onClick={() => handleExportData()}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                    >
                      Export System Data
                    </button>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-3">Export Individual Students</h4>
                    <div className="space-y-2">
                      {students.map(({ user }) => {
                        if (!user) return null;
                        return (
                          <div key={user.id} className="flex items-center justify-between p-3 border border-slate-200 dark:border-slate-700 rounded">
                            <span className="text-slate-900 dark:text-slate-100">
                              {user.nickname || user.name} ({user.group || 'Unassigned'})
                            </span>
                            <button
                              onClick={() => handleExportData(user.id)}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
                            >
                              Export
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">Import Data</h3>
                <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-6">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3-3m-3 3l3 3m-3-3H21" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="mt-4">
                      <label htmlFor="backup-file" className="cursor-pointer">
                        <span className="mt-2 block text-sm font-medium text-slate-900 dark:text-slate-100">
                          Select backup file to import
                        </span>
                        <input
                          id="backup-file"
                          type="file"
                          accept=".json"
                          onChange={handleImportData}
                          className="hidden"
                        />
                      </label>
                      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                        JSON files only. This will restore student data from the backup file.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BackupManager;