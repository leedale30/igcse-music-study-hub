import { supabase } from '../lib/supabase'

export class AuthService {
  // Sign up a new user
  static async signUp(email: string, password: string, metadata?: { fullName?: string, role?: string }) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata
      }
    })
    
    if (error) {
      console.error('Error signing up:', error)
      throw error
    }
    
    return data.user
  }
  
  // Sign in an existing user
  static async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    
    if (error) {
      console.error('Error signing in:', error)
      throw error
    }
    
    return data.user
  }
  
  // Sign out the current user
  static async signOut() {
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      console.error('Error signing out:', error)
      throw error
    }
    
    return true
  }
  
  // Get the current user
  static async getCurrentUser() {
    const { data, error } = await supabase.auth.getUser()
    
    if (error) {
      console.error('Error getting current user:', error)
      return null
    }
    
    return data.user
  }
  
  // Reset password
  static async resetPassword(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email)
    
    if (error) {
      console.error('Error resetting password:', error)
      throw error
    }
    
    return true
  }
  
  // Update user profile
  static async updateProfile(userData: { fullName?: string, role?: string }) {
    const { data, error } = await supabase.auth.updateUser({
      data: userData
    })
    
    if (error) {
      console.error('Error updating profile:', error)
      throw error
    }
    
    return data.user
  }
}