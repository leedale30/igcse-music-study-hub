// ================================================
// Edge Function: Award XP
// Deploy: supabase functions deploy award-xp
// ================================================
// This function awards XP to a user from external sources
// (test completions, achievements, teacher awards).
// It requires a secure API key for server-to-server calls.
// ================================================

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-api-key',
}

interface AwardXPRequest {
    user_id: string;           // Profile ID or email
    points: number;            // XP to award
    source: 'test' | 'match' | 'teacher' | 'quiz' | 'achievement';
    metadata?: {
        test_id?: string;
        quiz_id?: string;
        match_id?: string;
        reason?: string;
        correct_count?: number;
        total_questions?: number;
        [key: string]: any;
    };
    // For server-to-server auth
    api_key?: string;
}

serve(async (req) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        // Initialize Supabase client with service role
        const supabaseUrl = Deno.env.get('SUPABASE_URL')!
        const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
        const expectedApiKey = Deno.env.get('RPG_API_KEY') // Set this in Supabase Dashboard

        const supabase = createClient(supabaseUrl, supabaseServiceKey)

        // Parse request body
        const body: AwardXPRequest = await req.json()
        const { user_id, points, source, metadata, api_key } = body

        // Validate required fields
        if (!user_id || !points || !source) {
            return new Response(
                JSON.stringify({ error: 'Missing required fields: user_id, points, source' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Validate points
        if (points <= 0 || points > 1000) {
            return new Response(
                JSON.stringify({ error: 'Points must be between 1 and 1000' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Authentication: Either JWT (user) or API key (server)
        const authHeader = req.headers.get('Authorization')
        let authenticatedUserId: string | null = null

        if (api_key && api_key === expectedApiKey) {
            // Server-to-server call with API key
            authenticatedUserId = 'server'
        } else if (authHeader) {
            // User authentication via JWT
            const token = authHeader.replace('Bearer ', '')
            const { data: { user }, error } = await supabase.auth.getUser(token)

            if (error || !user) {
                return new Response(
                    JSON.stringify({ error: 'Invalid authentication' }),
                    { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
                )
            }

            // Only teachers/admins can award XP to others
            const { data: profile } = await supabase
                .from('profiles')
                .select('role')
                .eq('id', user.id)
                .single()

            if (!profile || !['teacher', 'admin'].includes(profile.role)) {
                return new Response(
                    JSON.stringify({ error: 'Only teachers can award XP' }),
                    { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
                )
            }

            authenticatedUserId = user.id
        } else {
            return new Response(
                JSON.stringify({ error: 'Authentication required' }),
                { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Resolve user_id (could be UUID or email)
        let targetUserId = user_id
        if (user_id.includes('@')) {
            // It's an email, look up the profile
            const { data: profile } = await supabase
                .from('profiles')
                .select('id')
                .eq('email', user_id)
                .single()

            if (!profile) {
                return new Response(
                    JSON.stringify({ error: 'User not found' }),
                    { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
                )
            }
            targetUserId = profile.id
        }

        // Insert XP event (trigger will update profile.xp and level)
        const { data: xpEvent, error: insertError } = await supabase
            .from('xp_events')
            .insert({
                user_id: targetUserId,
                source,
                points,
                metadata: {
                    ...metadata,
                    awarded_by: authenticatedUserId,
                    timestamp: new Date().toISOString()
                }
            })
            .select()
            .single()

        if (insertError) {
            console.error('Error inserting XP event:', insertError)
            return new Response(
                JSON.stringify({ error: 'Failed to award XP', details: insertError.message }),
                { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Fetch updated profile
        const { data: updatedProfile } = await supabase
            .from('profiles')
            .select('id, name, nickname, xp, level, character_class')
            .eq('id', targetUserId)
            .single()

        return new Response(
            JSON.stringify({
                success: true,
                xp_event: xpEvent,
                profile: updatedProfile,
                message: `Awarded ${points} XP to user`
            }),
            { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )

    } catch (error) {
        console.error('Unexpected error:', error)
        return new Response(
            JSON.stringify({ error: 'Internal server error' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
    }
})
