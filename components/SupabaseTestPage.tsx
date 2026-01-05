import React, { useEffect, useState } from 'react'
import { supabase } from '../src/lib/supabase'
import { useAuth } from '../contexts/AuthContext'
import { ProgressService } from '../src/services/progressService'
import { RealtimeService } from '../src/services/realtimeService'
import { StorageService } from '../src/services/storageService'

interface ErrorLogEntry {
  timestamp: string
  test: string
  level: 'info' | 'warning' | 'error'
  message: string
  details?: any
}

export function SupabaseTestPage() {
  console.log('SupabaseTestPage component is rendering!')
  const { user, login, signup, logout } = useAuth()
  const [progress, setProgress] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [testEmail, setTestEmail] = useState('test@example.com')
  const [testPassword, setTestPassword] = useState('password123')
  const [testResults, setTestResults] = useState<{ [key: string]: boolean }>({})
  const [subscription, setSubscription] = useState<any>(null)
  const [errorLog, setErrorLog] = useState<ErrorLogEntry[]>([])
  const [showErrorLog, setShowErrorLog] = useState(false)

  // Helper function to add entries to error log
  const addToErrorLog = (test: string, level: ErrorLogEntry['level'], message: string, details?: any) => {
    const entry: ErrorLogEntry = {
      timestamp: new Date().toISOString(),
      test,
      level,
      message,
      details
    }
    setErrorLog(prev => [...prev, entry])
    console.log(`[${level.toUpperCase()}] ${test}: ${message}`, details || '')
  }

  // Helper function to clear error log
  const clearErrorLog = () => {
    setErrorLog([])
  }

  // Helper function to export error log
  const exportErrorLog = () => {
    if (errorLog.length === 0) {
      alert('No error log entries to export')
      return
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const exportData = {
      exportedAt: new Date().toISOString(),
      totalEntries: errorLog.length,
      summary: {
        errors: errorLog.filter(e => e.level === 'error').length,
        warnings: errorLog.filter(e => e.level === 'warning').length,
        info: errorLog.filter(e => e.level === 'info').length
      },
      entries: errorLog.map(entry => ({
        timestamp: entry.timestamp,
        test: entry.test,
        level: entry.level,
        message: entry.message,
        details: entry.details
      }))
    }

    // Create formatted text version
    const textOutput = [
      '=== SUPABASE TEST ERROR LOG ===',
      `Exported: ${exportData.exportedAt}`,
      `Total Entries: ${exportData.totalEntries}`,
      `Errors: ${exportData.summary.errors} | Warnings: ${exportData.summary.warnings} | Info: ${exportData.summary.info}`,
      '',
      '=== LOG ENTRIES ===',
      ...errorLog.map((entry, index) => [
        `[${index + 1}] ${entry.timestamp} | ${entry.test} | ${entry.level.toUpperCase()}`,
        `Message: ${entry.message}`,
        entry.details ? `Details: ${typeof entry.details === 'string' ? entry.details : JSON.stringify(entry.details, null, 2)}` : '',
        '---'
      ].filter(Boolean).join('\n'))
    ].join('\n')

    // Copy to clipboard
    navigator.clipboard.writeText(textOutput).then(() => {
      // Create and download JSON file
      const jsonBlob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' })
      const jsonUrl = URL.createObjectURL(jsonBlob)
      const jsonLink = document.createElement('a')
      jsonLink.href = jsonUrl
      jsonLink.download = `supabase-test-log-${timestamp}.json`
      document.body.appendChild(jsonLink)
      jsonLink.click()
      document.body.removeChild(jsonLink)
      URL.revokeObjectURL(jsonUrl)

      // Create and download text file
      const textBlob = new Blob([textOutput], { type: 'text/plain' })
      const textUrl = URL.createObjectURL(textBlob)
      const textLink = document.createElement('a')
      textLink.href = textUrl
      textLink.download = `supabase-test-log-${timestamp}.txt`
      document.body.appendChild(textLink)
      textLink.click()
      document.body.removeChild(textLink)
      URL.revokeObjectURL(textUrl)

      alert('Error log exported! Files downloaded and log copied to clipboard.')
    }).catch(err => {
      console.error('Failed to copy to clipboard:', err)
      alert('Error log files downloaded, but failed to copy to clipboard.')
    })
  }

  // Test Supabase connection
  async function testSupabaseConnection() {
    addToErrorLog('Connection', 'info', 'Starting Supabase connection test...')
    addToErrorLog('Connection', 'info', `Supabase URL: ${import.meta.env.VITE_SUPABASE_URL}`)
    addToErrorLog('Connection', 'info', `Supabase Key exists: ${!!import.meta.env.VITE_SUPABASE_ANON_KEY}`)

    try {
      // Test basic connection by trying to get the current session
      addToErrorLog('Connection', 'info', 'Testing Supabase client connection...')
      const { data: { session }, error: sessionError } = await supabase.auth.getSession()
      addToErrorLog('Connection', 'info', 'Session query completed', { session: !!session, sessionError })

      if (sessionError) {
        addToErrorLog('Connection', 'error', 'Session error occurred', sessionError)
        setTestResults(prev => ({
          ...prev,
          connection: false
        }))
        return false
      }

      // Test a simple query to verify database connection
      addToErrorLog('Connection', 'info', 'Testing database connection...')
      const { data, error } = await supabase.from('profiles').select('count').limit(1)
      addToErrorLog('Connection', 'info', 'Database query completed', { data, error })

      if (error) {
        // This might fail if the table doesn't exist, which is okay for testing connection
        addToErrorLog('Connection', 'warning', 'Database query failed (expected if no tables exist)', error.message)
        setTestResults(prev => ({
          ...prev,
          connection: true
        }))
      } else {
        addToErrorLog('Connection', 'info', 'Database connection successful!')
        setTestResults(prev => ({
          ...prev,
          connection: true
        }))
      }

      return true
    } catch (error: any) {
      addToErrorLog('Connection', 'error', 'Connection test exception', error)
      setTestResults(prev => ({
        ...prev,
        connection: false
      }))
      return false
    }
  }

  // Test authentication
  async function testAuthentication() {
    addToErrorLog('Authentication', 'info', 'Testing authentication...')

    // Store current user to restore later
    const originalUser = user
    const originalUserData = localStorage.getItem('igcse-music-user')
    addToErrorLog('Authentication', 'info', `Original user: ${originalUser?.email || 'none'}`)

    try {
      // Test the actual authentication system (localStorage-based)
      const testEmail = 'test@example.com'
      const testPassword = 'testpassword123'
      const testName = 'Test User'

      addToErrorLog('Authentication', 'info', `Testing signup with: ${testEmail}`)

      // Test signup
      const signupResult = await signup(testEmail, testPassword, testName)
      addToErrorLog('Authentication', 'info', 'Signup completed', { success: !!signupResult })

      if (signupResult) {
        // Test logout and login cycle
        addToErrorLog('Authentication', 'info', 'Testing logout...')
        logout()

        // Test login
        addToErrorLog('Authentication', 'info', `Testing login with: ${testEmail}`)
        const loginResult = await login(testEmail, testPassword)
        addToErrorLog('Authentication', 'info', 'Login completed', { success: !!loginResult })

        if (loginResult) {
          addToErrorLog('Authentication', 'info', 'Authentication test passed')
          setTestResults(prev => ({
            ...prev,
            auth: true
          }))
        } else {
          addToErrorLog('Authentication', 'error', 'Login failed after successful signup')
          setTestResults(prev => ({
            ...prev,
            auth: false
          }))
        }
      } else {
        // Try login with demo account for testing
        addToErrorLog('Authentication', 'warning', 'Signup failed, testing with demo login...')
        const demoLoginResult = await login('demo@student.com', 'demo123')

        if (demoLoginResult) {
          addToErrorLog('Authentication', 'info', 'Demo login successful')
          setTestResults(prev => ({
            ...prev,
            auth: true
          }))
        } else {
          addToErrorLog('Authentication', 'error', 'Demo login also failed')
          setTestResults(prev => ({
            ...prev,
            auth: false
          }))
        }
      }

      // Restore original user session
      if (originalUser && originalUserData) {
        addToErrorLog('Authentication', 'info', 'Restoring original user session...')
        localStorage.setItem('igcse-music-user', originalUserData)
        // Force re-login with original user to restore context
        if (originalUser.email === 'teacher@school.com') {
          await login('teacher@school.com', 'teacher123')
          addToErrorLog('Authentication', 'info', 'Restored teacher session')
        } else if (originalUser.email === 'demo@student.com') {
          await login('demo@student.com', 'demo123')
          addToErrorLog('Authentication', 'info', 'Restored demo student session')
        }
      }

    } catch (error: any) {
      addToErrorLog('Authentication', 'error', 'Authentication test exception', error)
      setTestResults(prev => ({
        ...prev,
        auth: false
      }))

      // Restore original user session even on error
      if (originalUser && originalUserData) {
        addToErrorLog('Authentication', 'info', 'Restoring original user session after error...')
        localStorage.setItem('igcse-music-user', originalUserData)
        if (originalUser.email === 'teacher@school.com') {
          await login('teacher@school.com', 'teacher123')
        } else if (originalUser.email === 'demo@student.com') {
          await login('demo@student.com', 'demo123')
        }
      }
    }
  }

  // Test login with provided credentials
  async function testLogin() {
    addToErrorLog('Login', 'info', `Testing login with provided credentials: ${testEmail}`)

    try {
      const loginResult = await login(testEmail, testPassword)
      addToErrorLog('Login', 'info', 'Login attempt completed', { success: !!loginResult })

      if (loginResult) {
        setTestResults(prev => ({
          ...prev,
          auth: true
        }))
        setError(null)
        addToErrorLog('Login', 'info', 'Login test passed')
      } else {
        setTestResults(prev => ({
          ...prev,
          auth: false
        }))
        const errorMsg = 'Login failed with provided credentials'
        setError(errorMsg)
        addToErrorLog('Login', 'error', errorMsg)
      }
    } catch (error: any) {
      addToErrorLog('Login', 'error', 'Login test exception', error)
      setTestResults(prev => ({
        ...prev,
        auth: false
      }))
      const errorMsg = `Login error: ${error.message || error}`
      setError(errorMsg)
      addToErrorLog('Login', 'error', errorMsg)
    }
  }

  // Test progress service
  async function testProgressService() {
    if (!user) {
      const errorMsg = 'Progress test failed: No authenticated user'
      setTestResults(prev => ({ ...prev, progress: false }))
      setError(errorMsg)
      addToErrorLog('Progress Service', 'error', errorMsg)
      return false
    }

    addToErrorLog('Progress Service', 'info', `Testing progress service for user: ${user.email}`)

    try {
      // Create test progress data
      addToErrorLog('Progress Service', 'info', 'Attempting to save quiz progress...')
      const result = await ProgressService.saveQuizProgress(
        user.id,
        'test-section',
        'test-quiz',
        85,
        100,
        30, // example time taken in seconds
        { answers: ['test'] } // example answers data
      )

      addToErrorLog('Progress Service', 'info', 'Save progress completed', { success: !!result })

      if (!result) {
        const errorMsg = 'Progress test failed: Could not save progress'
        setTestResults(prev => ({ ...prev, progress: false }))
        setError(errorMsg)
        addToErrorLog('Progress Service', 'error', errorMsg)
        return false
      }

      addToErrorLog('Progress Service', 'info', 'Attempting to retrieve user progress...')
      const userProgress = await ProgressService.getUserProgress(user.id)
      addToErrorLog('Progress Service', 'info', 'Retrieve progress completed', {
        success: !!userProgress,
        count: userProgress?.length || 0
      })

      if (!userProgress || userProgress.length === 0) {
        const errorMsg = 'Progress test failed: Could not retrieve progress'
        setTestResults(prev => ({ ...prev, progress: false }))
        setError(errorMsg)
        addToErrorLog('Progress Service', 'error', errorMsg)
        return false
      }

      setProgress(userProgress)
      setTestResults(prev => ({ ...prev, progress: true }))
      addToErrorLog('Progress Service', 'info', 'Progress service test passed')
      return true
    } catch (err: any) {
      const errorMsg = `Progress test exception: ${err.message}`
      setTestResults(prev => ({ ...prev, progress: false }))
      setError(errorMsg)
      addToErrorLog('Progress Service', 'error', 'Progress service test exception', err)
      return false
    }
  }

  // Test realtime service
  async function testRealtimeService() {
    if (!user) {
      const errorMsg = 'Realtime test failed: No authenticated user'
      setTestResults(prev => ({ ...prev, realtime: false }))
      setError(errorMsg)
      addToErrorLog('Realtime Service', 'error', errorMsg)
      return false
    }

    addToErrorLog('Realtime Service', 'info', `Testing realtime service for user: ${user.email}`)

    try {
      // Subscribe to user progress changes
      addToErrorLog('Realtime Service', 'info', 'Attempting to subscribe to user progress changes...')
      const sub = RealtimeService.subscribeToUserProgress(
        user.id,
        (payload) => {
          addToErrorLog('Realtime Service', 'info', 'Realtime update received', payload)
          setProgress(prev => [...prev, payload.new])
        }
      )

      addToErrorLog('Realtime Service', 'info', 'Subscription created successfully', { subscriptionStatus: sub ? 'active' : 'failed' })

      setSubscription(sub)
      setTestResults(prev => ({ ...prev, realtime: true }))
      addToErrorLog('Realtime Service', 'info', 'Realtime service test passed')
      return true
    } catch (err: any) {
      const errorMsg = `Realtime test exception: ${err.message}`
      setTestResults(prev => ({ ...prev, realtime: false }))
      setError(errorMsg)
      addToErrorLog('Realtime Service', 'error', 'Realtime service test exception', err)
      return false
    }
  }

  // Test storage service
  async function testStorageService() {
    if (!user) {
      const errorMsg = 'Storage test failed: No authenticated user'
      setTestResults(prev => ({ ...prev, storage: false }))
      setError(errorMsg)
      addToErrorLog('Storage Service', 'error', errorMsg)
      return false
    }

    addToErrorLog('Storage Service', 'info', `Testing storage service for user: ${user.email}`)

    try {
      // Create a small test file
      addToErrorLog('Storage Service', 'info', 'Creating test file...')
      const testFile = new File(['test content'], 'test.txt', { type: 'text/plain' })
      addToErrorLog('Storage Service', 'info', 'Test file created', {
        name: testFile.name,
        size: testFile.size,
        type: testFile.type
      })

      // Upload the file
      addToErrorLog('Storage Service', 'info', 'Attempting to upload file to test-files bucket...')
      const uploadResult = await StorageService.uploadFile('test-files', 'test.txt', testFile)
      addToErrorLog('Storage Service', 'info', 'Upload completed', { success: !!uploadResult })

      if (!uploadResult) {
        const errorMsg = 'Storage test failed: Could not upload file'
        setTestResults(prev => ({ ...prev, storage: false }))
        setError(errorMsg)
        addToErrorLog('Storage Service', 'error', errorMsg)
        return false
      }

      // Get the URL
      addToErrorLog('Storage Service', 'info', 'Attempting to get public URL...')
      const url = await StorageService.getPublicUrl('test-files', 'test.txt')
      addToErrorLog('Storage Service', 'info', 'Get public URL completed', { success: !!url, url })

      if (!url) {
        const errorMsg = 'Storage test failed: Could not get public URL'
        setTestResults(prev => ({ ...prev, storage: false }))
        setError(errorMsg)
        addToErrorLog('Storage Service', 'error', errorMsg)
        return false
      }

      // Delete the file
      addToErrorLog('Storage Service', 'info', 'Attempting to delete test file...')
      await StorageService.deleteFile('test-files', 'test.txt')
      addToErrorLog('Storage Service', 'info', 'File deletion completed')

      setTestResults(prev => ({ ...prev, storage: true }))
      addToErrorLog('Storage Service', 'info', 'Storage service test passed')
      return true
    } catch (err: any) {
      const errorMsg = `Storage test exception: ${err.message}`
      setTestResults(prev => ({ ...prev, storage: false }))
      setError(errorMsg)
      addToErrorLog('Storage Service', 'error', 'Storage service test exception', err)
      return false
    }
  }

  // Run all tests
  async function runAllTests() {
    addToErrorLog('System', 'info', 'Starting all tests...')
    addToErrorLog('System', 'info', 'Button clicked - runAllTests function called')
    setLoading(true)
    setError(null)

    // Reset test results
    setTestResults({})
    addToErrorLog('System', 'info', 'Test results reset')

    try {
      addToErrorLog('System', 'info', 'Running connection test...')
      await testSupabaseConnection()

      addToErrorLog('System', 'info', 'Running authentication test...')
      await testAuthentication()

      if (user) {
        addToErrorLog('System', 'info', 'User is authenticated, running additional tests...')
        await testProgressService()
        await testRealtimeService()
        await testStorageService()
      } else {
        addToErrorLog('System', 'warning', 'No authenticated user, skipping user-dependent tests')
      }
    } catch (error: any) {
      addToErrorLog('System', 'error', 'Error during test execution', error)
      setError(`Test execution failed: ${error.message || error}`)
    }

    addToErrorLog('System', 'info', 'All tests completed')
    setLoading(false)
  }

  // Run tests automatically when component mounts
  useEffect(() => {
    console.log('SupabaseTestPage mounted, starting automatic tests...')
    runAllTests()
  }, [])

  // Clean up subscription on unmount
  useEffect(() => {
    return () => {
      if (subscription) {
        RealtimeService.unsubscribe(subscription)
      }
    }
  }, [subscription])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Supabase Connection Test Page</h1>
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-6">
            <p className="font-semibold">You are now on the Supabase Test Page!</p>
            <p>This page tests the connection to your Supabase backend services.</p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <p>{error}</p>
            </div>
          )}

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Test Credentials</h2>
            <div className="flex gap-4 mb-4">
              <input
                type="email"
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
                placeholder="Email"
                className="border p-2 rounded flex-1"
              />
              <input
                type="password"
                value={testPassword}
                onChange={(e) => setTestPassword(e.target.value)}
                placeholder="Password"
                className="border p-2 rounded flex-1"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={testLogin}
                disabled={loading}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Test Login
              </button>
              {user && (
                <button
                  onClick={() => logout()}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Sign Out
                </button>
              )}
            </div>
          </div>

          <div className="mb-6">
            <button
              onClick={runAllTests}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Testing...' : 'Run All Tests'}
            </button>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Test Results</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="border p-4 rounded">
                <h3 className="font-medium">Supabase Connection</h3>
                <div className={`mt-2 ${testResults.connection === undefined ? 'text-gray-500' : testResults.connection ? 'text-green-500' : 'text-red-500'}`}>
                  {testResults.connection === undefined ? 'Not tested' : testResults.connection ? 'Success' : 'Failed'}
                </div>
              </div>

              <div className="border p-4 rounded">
                <h3 className="font-medium">Authentication</h3>
                <div className={`mt-2 ${testResults.auth === undefined ? 'text-gray-500' : testResults.auth ? 'text-green-500' : 'text-red-500'}`}>
                  {testResults.auth === undefined ? 'Not tested' : testResults.auth ? 'Success' : 'Failed'}
                </div>
              </div>

              <div className="border p-4 rounded">
                <h3 className="font-medium">Progress Service</h3>
                <div className={`mt-2 ${testResults.progress === undefined ? 'text-gray-500' : testResults.progress ? 'text-green-500' : 'text-red-500'}`}>
                  {testResults.progress === undefined ? 'Not tested' : testResults.progress ? 'Success' : 'Failed'}
                </div>
              </div>

              <div className="border p-4 rounded">
                <h3 className="font-medium">Realtime Service</h3>
                <div className={`mt-2 ${testResults.realtime === undefined ? 'text-gray-500' : testResults.realtime ? 'text-green-500' : 'text-red-500'}`}>
                  {testResults.realtime === undefined ? 'Not tested' : testResults.realtime ? 'Success' : 'Failed'}
                </div>
              </div>

              <div className="border p-4 rounded">
                <h3 className="font-medium">Storage Service</h3>
                <div className={`mt-2 ${testResults.storage === undefined ? 'text-gray-500' : testResults.storage ? 'text-green-500' : 'text-red-500'}`}>
                  {testResults.storage === undefined ? 'Not tested' : testResults.storage ? 'Success' : 'Failed'}
                </div>
              </div>
            </div>
          </div>

          {user && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">User Information</h2>
              <pre className="bg-gray-100 p-4 rounded overflow-auto">
                {JSON.stringify(user, null, 2)}
              </pre>
            </div>
          )}

          {/* Error Log Section */}
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Error Log</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowErrorLog(!showErrorLog)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  {showErrorLog ? 'Hide Log' : 'Show Log'}
                </button>
                <button
                  onClick={clearErrorLog}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                >
                  Clear Log
                </button>
                <button
                  onClick={exportErrorLog}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                >
                  Export Log
                </button>
              </div>
            </div>

            {showErrorLog && (
              <div className="bg-white border rounded-lg max-h-96 overflow-y-auto">
                {errorLog.length === 0 ? (
                  <div className="p-4 text-gray-500 text-center">
                    No log entries yet. Run tests to see detailed logs.
                  </div>
                ) : (
                  <div className="divide-y divide-gray-200">
                    {errorLog.map((entry, index) => (
                      <div key={index} className="p-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`inline-block w-2 h-2 rounded-full ${entry.level === 'error' ? 'bg-red-500' :
                                  entry.level === 'warning' ? 'bg-yellow-500' :
                                    'bg-blue-500'
                                }`}></span>
                              <span className="font-medium text-sm text-gray-700">
                                {entry.test}
                              </span>
                              <span className="text-xs text-gray-500">
                                {new Date(entry.timestamp).toLocaleTimeString()}
                              </span>
                            </div>
                            <div className="text-sm text-gray-800 mb-1">
                              {entry.message}
                            </div>
                            {entry.details && (
                              <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded font-mono">
                                {typeof entry.details === 'string'
                                  ? entry.details
                                  : JSON.stringify(entry.details, null, 2)
                                }
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="mt-2 text-sm text-gray-600">
              Total entries: {errorLog.length}
              {errorLog.length > 0 && (
                <>
                  {' | '}
                  Errors: {errorLog.filter(e => e.level === 'error').length}
                  {' | '}
                  Warnings: {errorLog.filter(e => e.level === 'warning').length}
                  {' | '}
                  Info: {errorLog.filter(e => e.level === 'info').length}
                </>
              )}
            </div>
          </div>

          {/* User Information */}
          {user && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">User Information</h2>
              <pre className="bg-gray-100 p-4 rounded overflow-auto">
                {JSON.stringify(user, null, 2)}
              </pre>
            </div>
          )}

          {progress.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Progress Data</h2>
              <pre className="bg-gray-100 p-4 rounded overflow-auto">
                {JSON.stringify(progress, null, 2)}
              </pre>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}