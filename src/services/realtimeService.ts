import { RealtimeChannel } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'

export class RealtimeService {
  // Subscribe to changes in the progress table
  static subscribeToProgress(
    callback: (payload: any) => void
  ): RealtimeChannel {
    return supabase
      .channel('public:progress')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'progress' },
        (payload) => {
          console.log('Progress change received:', payload)
          callback(payload)
        }
      )
      .subscribe()
  }

  // Subscribe to changes in a specific user's progress
  static subscribeToUserProgress(
    userId: string,
    callback: (payload: any) => void
  ): RealtimeChannel {
    return supabase
      .channel(`public:progress:user_id=eq.${userId}`)
      .on(
        'postgres_changes',
        { 
          event: '*', 
          schema: 'public', 
          table: 'progress',
          filter: `user_id=eq.${userId}`
        },
        (payload) => {
          console.log(`Progress change for user ${userId} received:`, payload)
          callback(payload)
        }
      )
      .subscribe()
  }

  // Unsubscribe from a channel
  static unsubscribe(subscription: RealtimeChannel): void {
    subscription.unsubscribe()
  }
}