import { createClient } from '@supabase/supabase-js'

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL?: string
  readonly VITE_SUPABASE_ANON_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const hasEnv = Boolean(supabaseUrl && supabaseAnonKey)

function createAuthMock() {
  const error = new Error('Supabase is not configured')
  return {
    getSession: async () => ({ data: { session: null } }),
    onAuthStateChange: (_event: any, _cb: any) => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signUp: async (_args: any) => ({ data: null, error }),
    signInWithPassword: async (_args: any) => ({ data: null, error }),
    signOut: async () => ({ error }),
    resetPasswordForEmail: async (_email: string) => ({ data: null, error }),
    updateUser: async (_args: any) => ({ data: { user: null }, error }),
    getUser: async () => ({ data: { user: null }, error: null })
  }
}

export const supabase = hasEnv ? createClient(String(supabaseUrl), String(supabaseAnonKey)) : { auth: createAuthMock() } as unknown as ReturnType<typeof createClient>
export const isSupabaseConfigured = hasEnv
