import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'
import { ProgressService } from '../services/progressService'
import { RealtimeService } from '../services/realtimeService'

export function SupabaseExample() {
  const { user } = useAuth()
  const [progress, setProgress] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Only fetch progress if user is authenticated
    if (user) {
      fetchProgress()

      // Subscribe to real-time updates
      const subscription = RealtimeService.subscribeToUserProgress(
        user.id,
        (payload) => {
          // Refresh progress data when changes occur
          fetchProgress()
        }
      )

      // Cleanup subscription on unmount
      return () => {
        RealtimeService.unsubscribe(subscription)
      }
    }
  }, [user])

  // Fetch user progress
  const fetchProgress = async () => {
    if (!user) return

    try {
      setLoading(true)
      const data = await ProgressService.getUserProgress(user.id)
      setProgress(data || [])
      setError(null)
    } catch (err: any) {
      console.error('Error fetching progress:', err)
      setError(err.message || 'Failed to load progress')
    } finally {
      setLoading(false)
    }
  }

  // Save a sample quiz result
  const saveQuizResult = async () => {
    if (!user) return

    try {
      setLoading(true)
      await ProgressService.saveQuizProgress(
        user.id,
        'sample_section',
        'sample_quiz',
        8, // score
        10, // total questions
        60, // time taken in seconds
        { answers: [true, false, true, true, false, true, true, true, false, true] }
      )
      setError(null)
      // Real-time subscription will update the progress list
    } catch (err: any) {
      console.error('Error saving quiz result:', err)
      setError(err.message || 'Failed to save quiz result')
    } finally {
      setLoading(false)
    }
  }

  if (!user) {
    return <div>Please log in to view your progress</div>
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Your Progress</h2>
      
      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded">{error}</div>
      )}
      
      <button
        onClick={saveQuizResult}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {loading ? 'Saving...' : 'Save Sample Quiz Result'}
      </button>
      
      {loading && <div>Loading...</div>}
      
      {!loading && progress.length === 0 && (
        <div>No progress data found. Try saving a quiz result.</div>
      )}
      
      {!loading && progress.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quiz Results</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Section
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quiz
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Percentage
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Completed
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {progress.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.section}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.quiz_id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.score}/{item.total_questions}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.percentage}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(item.completed_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}