// ================================================
// Edge Function: Start Match
// Deploy: supabase functions deploy start-match
// ================================================
// Creates a new match between two players, selects
// questions, and sets the match to active.
// ================================================

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface StartMatchRequest {
    opponent_id?: string;      // Direct challenge to specific player
    class_id?: string;         // Optional: limit questions to class
    subject_tag?: string;      // Optional: filter questions by subject
    total_turns?: number;      // Default 5
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

        const body: StartMatchRequest = await req.json()
        const { opponent_id, class_id, subject_tag, total_turns = 5 } = body

        // Check if player is already in an active match
        const { data: existingMatch } = await supabase
            .from('rpg_matches')
            .select('id')
            .or(`player_a.eq.${user.id},player_b.eq.${user.id}`)
            .in('status', ['pending', 'active'])
            .single()

        if (existingMatch) {
            return new Response(
                JSON.stringify({ error: 'Already in an active match', match_id: existingMatch.id }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Select random questions
        let questionQuery = supabase
            .from('rpg_questions')
            .select('id')
            .eq('is_active', true)

        if (class_id) {
            questionQuery = questionQuery.eq('class_id', class_id)
        }
        if (subject_tag) {
            questionQuery = questionQuery.eq('subject_tag', subject_tag)
        }

        const { data: allQuestions } = await questionQuery

        if (!allQuestions || allQuestions.length < total_turns) {
            return new Response(
                JSON.stringify({
                    error: 'Not enough questions available',
                    available: allQuestions?.length || 0,
                    required: total_turns
                }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Shuffle and select questions
        const shuffled = allQuestions.sort(() => Math.random() - 0.5)
        const selectedQuestions = shuffled.slice(0, total_turns).map(q => q.id)

        // Create match
        const matchData: any = {
            player_a: user.id,
            player_b: opponent_id || null,
            status: opponent_id ? 'active' : 'pending',
            class_id: class_id || null,
            total_turns,
            current_turn: 0,
            question_ids: selectedQuestions,
            player_a_health: 100,
            player_b_health: 100,
            started_at: opponent_id ? new Date().toISOString() : null,
            meta: {
                subject_tag,
                initiated_by: user.id
            }
        }

        const { data: match, error: matchError } = await supabase
            .from('rpg_matches')
            .insert(matchData)
            .select()
            .single()

        if (matchError) {
            console.error('Error creating match:', matchError)
            return new Response(
                JSON.stringify({ error: 'Failed to create match' }),
                { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Fetch first question if match is active
        let firstQuestion = null
        if (match.status === 'active' && selectedQuestions.length > 0) {
            const { data: question } = await supabase
                .from('rpg_questions')
                .select('id, type, content, media_path, difficulty')
                .eq('id', selectedQuestions[0])
                .single()
            firstQuestion = question
        }

        return new Response(
            JSON.stringify({
                success: true,
                match,
                first_question: firstQuestion,
                message: opponent_id
                    ? 'Match started!'
                    : 'Waiting for opponent to join...'
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
