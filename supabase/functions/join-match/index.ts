// ================================================
// Edge Function: Join Match
// Deploy: supabase functions deploy join-match
// ================================================
// Allows a player to join a pending match.
// ================================================

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface JoinMatchRequest {
    match_id: string;
}

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const supabaseUrl = Deno.env.get('SUPABASE_URL')!
        const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
        const supabase = createClient(supabaseUrl, supabaseServiceKey)

        // Authenticate user
        const authHeader = req.headers.get('Authorization')
        if (!authHeader) {
            return new Response(
                JSON.stringify({ error: 'Authentication required' }),
                { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        const token = authHeader.replace('Bearer ', '')
        const { data: { user }, error: authError } = await supabase.auth.getUser(token)

        if (authError || !user) {
            return new Response(
                JSON.stringify({ error: 'Invalid authentication' }),
                { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        const body: JoinMatchRequest = await req.json()
        const { match_id } = body

        if (!match_id) {
            return new Response(
                JSON.stringify({ error: 'Match ID required' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Fetch match
        const { data: match, error: matchError } = await supabase
            .from('rpg_matches')
            .select('*')
            .eq('id', match_id)
            .single()

        if (matchError || !match) {
            return new Response(
                JSON.stringify({ error: 'Match not found' }),
                { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Validate match state
        if (match.status !== 'pending') {
            return new Response(
                JSON.stringify({ error: 'Match is not open for joining' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        if (match.player_a === user.id) {
            return new Response(
                JSON.stringify({ error: 'Cannot join your own match' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        if (match.player_b) {
            return new Response(
                JSON.stringify({ error: 'Match already has two players' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Check if player is in another active match
        const { data: existingMatch } = await supabase
            .from('rpg_matches')
            .select('id')
            .or(`player_a.eq.${user.id},player_b.eq.${user.id}`)
            .in('status', ['pending', 'active'])
            .neq('id', match_id)
            .single()

        if (existingMatch) {
            return new Response(
                JSON.stringify({ error: 'Already in another match' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Join match
        const { data: updatedMatch, error: updateError } = await supabase
            .from('rpg_matches')
            .update({
                player_b: user.id,
                status: 'active',
                started_at: new Date().toISOString()
            })
            .eq('id', match_id)
            .select()
            .single()

        if (updateError) {
            console.error('Error joining match:', updateError)
            return new Response(
                JSON.stringify({ error: 'Failed to join match' }),
                { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Fetch first question
        let firstQuestion = null
        if (updatedMatch.question_ids && updatedMatch.question_ids.length > 0) {
            const { data: question } = await supabase
                .from('rpg_questions')
                .select('id, type, content, media_path, difficulty')
                .eq('id', updatedMatch.question_ids[0])
                .single()
            firstQuestion = question
        }

        // Fetch opponent profile
        const { data: opponent } = await supabase
            .from('profiles')
            .select('id, name, nickname, xp, level, character_class')
            .eq('id', updatedMatch.player_a)
            .single()

        return new Response(
            JSON.stringify({
                success: true,
                match: updatedMatch,
                first_question: firstQuestion,
                opponent,
                message: 'Battle started!'
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
