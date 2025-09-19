import { supabase } from '../lib/supabase'

// This file contains simple tests to verify the Supabase integration

// Test authentication
async function testAuth() {
  try {
    console.log('Testing Supabase authentication...')
    const { data, error } = await supabase.auth.getSession()
    
    if (error) {
      console.error('Auth test failed:', error.message)
      return false
    }
    
    console.log('Auth test successful:', data)
    return true
  } catch (err) {
    console.error('Auth test exception:', err)
    return false
  }
}

// Test database connection
async function testDatabase() {
  try {
    console.log('Testing Supabase database connection...')
    // Simple query that should work even without data
    const { data, error } = await supabase
      .from('progress')
      .select('count()')
      .limit(1)
    
    if (error) {
      console.error('Database test failed:', error.message)
      return false
    }
    
    console.log('Database test successful:', data)
    return true
  } catch (err) {
    console.error('Database test exception:', err)
    return false
  }
}

// Run tests
export async function runSupabaseTests() {
  console.log('=== SUPABASE INTEGRATION TESTS ===')
  
  const authResult = await testAuth()
  const dbResult = await testDatabase()
  
  if (authResult && dbResult) {
    console.log('✅ All Supabase tests passed!')
    return true
  } else {
    console.log('❌ Some Supabase tests failed')
    return false
  }
}

// Uncomment to run tests immediately
// runSupabaseTests()