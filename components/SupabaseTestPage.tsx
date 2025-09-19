import React, { useEffect, useState } from 'react'
import { supabase } from '../src/lib/supabase'
import { useAuth } from '../contexts/AuthContext'
import { ProgressService } from '../src/services/progressService'
import { RealtimeService } from '../src/services/realtimeService'
import { StorageService } from '../src/services/storageService'

export function SupabaseTestPage() {
  const { user, login, signup, logout } = useAuth()
  const [progress, setProgress] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [testEmail, setTestEmail] = useState('test@example.com')
  const [testPassword, setTestPassword] = useState('password123')
  const [testResults, setTestResults] = useState<{[key: string]: boolean}>({})
  const [subscription, setSubscription] = useState<any>(null)

  // Test Supabase client connection
  async function testSupabaseConnection() {
    try {
      const { data, error } = await supabase.from('progress').select('count()').limit(1)
      
      if (error) {
        setTestResults(prev => ({ ...prev, connection: false }))
        setError(`Connection error: ${error.message}`)
        return false
      }
      
      setTestResults(prev => ({ ...prev, connection: true }))
      return true
    } catch (err: any) {
      setTestResults(prev => ({ ...prev, connection: false }))
      setError(`Connection test exception: ${err.message}`)
      return false
    }
  }

  // Test authentication
  async function testAuthentication() {
    try {
      // Try sign up
      const signUpResult = await signup(testEmail, testPassword, 'Test User')
      if (!signUpResult) {
        setTestResults(prev => ({ ...prev, auth: false }))
        setError(`Auth test failed: Sign up failed`)
        return false
      }
      
      // Try sign in
      const signInResult = await login(testEmail, testPassword)
      if (!signInResult) {
        setTestResults(prev => ({ ...prev, auth: false }))
        setError(`Auth test failed: Sign in failed`)
        return false
      }
      
      setTestResults(prev => ({ ...prev, auth: true }))
      return true
    } catch (err: any) {
      setTestResults(prev => ({ ...prev, auth: false }))
      setError(`Auth test exception: ${err.message}`)
      return false
    }
  }

  // Test progress service
  async function testProgressService() {
    if (!user) {
      setTestResults(prev => ({ ...prev, progress: false }))
      setError('Progress test failed: No authenticated user')
      return false
    }
    
    try {
      // Create test progress data
      const result = await ProgressService.saveQuizProgress(
        user.id,
        'test-section',
        'test-quiz',
        85,
        100,
        30, // example time taken in seconds
        { answers: ['test'] } // example answers data
      )
      if (!result) {
        setTestResults(prev => ({ ...prev, progress: false }))
        setError('Progress test failed: Could not save progress')
        return false
      }
      
      const userProgress = await ProgressService.getUserProgress(user.id)
      if (!userProgress || userProgress.length === 0) {
        setTestResults(prev => ({ ...prev, progress: false }))
        setError('Progress test failed: Could not retrieve progress')
        return false
      }
      
      setProgress(userProgress)
      setTestResults(prev => ({ ...prev, progress: true }))
      return true
    } catch (err: any) {
      setTestResults(prev => ({ ...prev, progress: false }))
      setError(`Progress test exception: ${err.message}`)
      return false
    }
  }

  // Test realtime service
  async function testRealtimeService() {
    if (!user) {
      setTestResults(prev => ({ ...prev, realtime: false }))
      setError('Realtime test failed: No authenticated user')
      return false
    }
    
    try {
      // Subscribe to user progress changes
      const sub = RealtimeService.subscribeToUserProgress(
        user.id,
        (payload) => {
          console.log('Realtime update received:', payload)
          setProgress(prev => [...prev, payload.new])
        }
      )
      
      setSubscription(sub)
      setTestResults(prev => ({ ...prev, realtime: true }))
      return true
    } catch (err: any) {
      setTestResults(prev => ({ ...prev, realtime: false }))
      setError(`Realtime test exception: ${err.message}`)
      return false
    }
  }

  // Test storage service
  async function testStorageService() {
    if (!user) {
      setTestResults(prev => ({ ...prev, storage: false }))
      setError('Storage test failed: No authenticated user')
      return false
    }
    
    try {
      // Create a small test file
      const testFile = new File(['test content'], 'test.txt', { type: 'text/plain' })
      
      // Upload the file
      const uploadResult = await StorageService.uploadFile('test-files', 'test.txt', testFile)
      if (!uploadResult) {
        setTestResults(prev => ({ ...prev, storage: false }))
        setError('Storage test failed: Could not upload file')
        return false
      }
      
      // Get the URL
      const url = await StorageService.getPublicUrl('test-files', 'test.txt')
      if (!url) {
        setTestResults(prev => ({ ...prev, storage: false }))
        setError('Storage test failed: Could not get public URL')
        return false
      }
      
      // Delete the file
      await StorageService.deleteFile('test-files', 'test.txt')
      
      setTestResults(prev => ({ ...prev, storage: true }))
      return true
    } catch (err: any) {
      setTestResults(prev => ({ ...prev, storage: false }))
      setError(`Storage test exception: ${err.message}`)
      return false
    }
  }

  // Run all tests
  async function runAllTests() {
    setLoading(true)
    setError(null)
    
    await testSupabaseConnection()
    await testAuthentication()
    
    if (user) {
      await testProgressService()
      await testRealtimeService()
      await testStorageService()
    }
    
    setLoading(false)
  }

  // Clean up subscription on unmount
  useEffect(() => {
    return () => {
      if (subscription) {
        RealtimeService.unsubscribe(subscription)
      }
    }
  }, [subscription])

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Supabase Integration Test</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
        </div>
      )}
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Test Credentials</h2>
        <div className="flex gap-4">
          <input
            type="email"
            value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
            placeholder="Email"
            className="border p-2 rounded"
          />
          <input
            type="password"
            value={testPassword}
            onChange={(e) => setTestPassword(e.target.value)}
            placeholder="Password"
            className="border p-2 rounded"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <button 
          onClick={runAllTests}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          {loading ? 'Testing...' : 'Run All Tests'}
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
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Test Results</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded">
            <h3 className="font-medium">Supabase Connection</h3>
            <div className={`mt-2 ${testResults.connection === undefined ? 'text-gray-500' : testResults.connection ? 'text-green-500' : 'text-red-500'}`}>
              {testResults.connection === undefined ? 'Not tested' : testResults.connection ? '✅ Success' : '❌ Failed'}
            </div>
          </div>
          
          <div className="border p-4 rounded">
            <h3 className="font-medium">Authentication</h3>
            <div className={`mt-2 ${testResults.auth === undefined ? 'text-gray-500' : testResults.auth ? 'text-green-500' : 'text-red-500'}`}>
              {testResults.auth === undefined ? 'Not tested' : testResults.auth ? '✅ Success' : '❌ Failed'}
            </div>
          </div>
          
          <div className="border p-4 rounded">
            <h3 className="font-medium">Progress Service</h3>
            <div className={`mt-2 ${testResults.progress === undefined ? 'text-gray-500' : testResults.progress ? 'text-green-500' : 'text-red-500'}`}>
              {testResults.progress === undefined ? 'Not tested' : testResults.progress ? '✅ Success' : '❌ Failed'}
            </div>
          </div>
          
          <div className="border p-4 rounded">
            <h3 className="font-medium">Realtime Service</h3>
            <div className={`mt-2 ${testResults.realtime === undefined ? 'text-gray-500' : testResults.realtime ? 'text-green-500' : 'text-red-500'}`}>
              {testResults.realtime === undefined ? 'Not tested' : testResults.realtime ? '✅ Success' : '❌ Failed'}
            </div>
          </div>
          
          <div className="border p-4 rounded">
            <h3 className="font-medium">Storage Service</h3>
            <div className={`mt-2 ${testResults.storage === undefined ? 'text-gray-500' : testResults.storage ? 'text-green-500' : 'text-red-500'}`}>
              {testResults.storage === undefined ? 'Not tested' : testResults.storage ? '✅ Success' : '❌ Failed'}
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
      
      {progress.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Progress Data</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-auto">
            {JSON.stringify(progress, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}