// ================================================
// Edge Function: Get Question
// Deploy: supabase functions deploy get-question
// ================================================
// Fetches the current question for a match.
// Does NOT include answer_key (that stays server-side).
// ================================================

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface GetQuestionRequest {
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

        const body: GetQuestionRequest = await req.json()
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

        // Validate player is in match
        if (match.player_a !== user.id && match.player_b !== user.id) {
            return new Response(
                JSON.stringify({ error: 'You are not in this match' }),
                { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        if (match.status !== 'active') {
            return new Response(
                JSON.stringify({ error: 'Match is not active', status: match.status }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Get current question
        const currentQuestionId = match.question_ids[match.current_turn]
        if (!currentQuestionId) {
            return new Response(
                JSON.stringify({ error: 'No more questions', match_finished: true }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Fetch question WITHOUT answer_key
        const { data: question, error: questionError } = await supabase
            .from('rpg_questions')
            .select('id, type, content, media_path, difficulty, subject_tag')
            .eq('id', currentQuestionId)
            .single()

        if (questionError || !question) {
            return new Response(
                JSON.stringify({ error: 'Question not found' }),
                { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Check if user already answered this turn
        const { data: existingAnswer } = await supabase
            .from('rpg_match_turns')
            .select('id')
            .eq('match_id', match_id)
            .eq('turn_number', match.current_turn)
            .eq('player_id', user.id)
            .single()

        return new Response(
            JSON.stringify({
                success: true,
                question,
                match_state: {
                    current_turn: match.current_turn,
                    total_turns: match.total_turns,
                    player_a_health: match.player_a_health,
                    player_b_health: match.player_b_health,
                    your_role: match.player_a === user.id ? 'player_a' : 'player_b'
                },
                already_answered: !!existingAnswer
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
