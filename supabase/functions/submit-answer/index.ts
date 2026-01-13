// ================================================
// Edge Function: Submit Answer
// Deploy: supabase functions deploy submit-answer
// ================================================
// AUTHORITATIVE answer validation for battle matches.
// Clients submit answers here; the server validates
// against answer_key, calculates damage, and updates match.
// ================================================

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface SubmitAnswerRequest {
    match_id: string;
    question_id: string;
    answer: any; // Player's answer (index for MCQ, text for short answer)
    time_taken_ms: number;
}

interface AnswerKey {
    correct?: number; // For MCQ: index of correct answer
    text?: string[]; // For short answer: acceptable answers
    regex?: string; // For pattern matching
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

        // Parse request
        const body: SubmitAnswerRequest = await req.json()
        const { match_id, question_id, answer, time_taken_ms } = body

        if (!match_id || !question_id || answer === undefined || !time_taken_ms) {
            return new Response(
                JSON.stringify({ error: 'Missing required fields' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Fetch match and verify player is in it
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

        if (match.player_a !== user.id && match.player_b !== user.id) {
            return new Response(
                JSON.stringify({ error: 'You are not in this match' }),
                { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        if (match.status !== 'active') {
            return new Response(
                JSON.stringify({ error: 'Match is not active' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Check if player already answered this turn
        const { data: existingTurn } = await supabase
            .from('rpg_match_turns')
            .select('id')
            .eq('match_id', match_id)
            .eq('turn_number', match.current_turn)
            .eq('player_id', user.id)
            .single()

        if (existingTurn) {
            return new Response(
                JSON.stringify({ error: 'Already answered this turn' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Fetch question and answer key
        const { data: question, error: questionError } = await supabase
            .from('rpg_questions')
            .select('*')
            .eq('id', question_id)
            .single()

        if (questionError || !question) {
            return new Response(
                JSON.stringify({ error: 'Question not found' }),
                { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Validate answer against answer_key
        const answerKey = question.answer_key
        let isCorrect = false

        if (question.type === 'mcq' || question.type === 'audio' || question.type === 'listening') {
            // MCQ: check if answer matches correct index
            // Handle both legacy (integer) and new (object) formats
            let correctIndex: number = -1;

            if (typeof answerKey === 'number') {
                correctIndex = answerKey;
            } else if (typeof answerKey === 'object' && answerKey !== null) {
                // Check for 'correct' property (number or string)
                if (answerKey.correct !== undefined) {
                    correctIndex = Number(answerKey.correct);
                }
            }

            isCorrect = answer === correctIndex;
        } else if (question.type === 'short') {
            // Short answer: check if answer matches any acceptable answer
            if (answerKey && typeof answerKey === 'object' && answerKey.text && Array.isArray(answerKey.text)) {
                const normalizedAnswer = String(answer).toLowerCase().trim()
                isCorrect = answerKey.text.some(
                    (acceptable: string) => acceptable.toLowerCase().trim() === normalizedAnswer
                )
            }
        }

        // Get player's current streak
        const { data: previousTurns } = await supabase
            .from('rpg_match_turns')
            .select('correct')
            .eq('match_id', match_id)
            .eq('player_id', user.id)
            .order('turn_number', { ascending: false })
            .limit(5)

        let streak = 0
        if (previousTurns) {
            for (const turn of previousTurns) {
                if (turn.correct) streak++
                else break
            }
        }
        if (isCorrect) streak++ // Include this answer

        // Calculate damage using the SQL function
        const { data: damageResult } = await supabase
            .rpc('calculate_damage', {
                is_correct: isCorrect,
                time_taken_ms: time_taken_ms,
                streak: streak,
                max_time_ms: 30000
            })

        const damage = damageResult || 0

        // Insert match turn
        const { data: turn, error: turnError } = await supabase
            .from('rpg_match_turns')
            .insert({
                match_id,
                turn_number: match.current_turn,
                question_id,
                player_id: user.id,
                answer,
                correct: isCorrect,
                time_taken_ms,
                damage,
                streak
            })
            .select()
            .single()

        if (turnError) {
            console.error('Error inserting turn:', turnError)
            return new Response(
                JSON.stringify({ error: 'Failed to record answer' }),
                { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Check if both players have answered this turn
        const { data: turnAnswers } = await supabase
            .from('rpg_match_turns')
            .select('player_id, damage, correct')
            .eq('match_id', match_id)
            .eq('turn_number', match.current_turn)

        const bothAnswered = turnAnswers && turnAnswers.length === 2

        // If both answered, apply damage and advance turn
        if (bothAnswered) {
            const playerADamage = turnAnswers.find(t => t.player_id === match.player_a)?.damage || 0
            const playerBDamage = turnAnswers.find(t => t.player_id === match.player_b)?.damage || 0

            const newPlayerAHealth = Math.max(0, match.player_a_health - playerBDamage)
            const newPlayerBHealth = Math.max(0, match.player_b_health - playerADamage)
            const newTurn = match.current_turn + 1

            // Check if match should end
            const matchEnded =
                newPlayerAHealth <= 0 ||
                newPlayerBHealth <= 0 ||
                newTurn >= match.total_turns

            if (matchEnded) {
                // Determine winner
                let winner = null
                if (newPlayerAHealth > newPlayerBHealth) {
                    winner = match.player_a
                } else if (newPlayerBHealth > newPlayerAHealth) {
                    winner = match.player_b
                }
                // If equal, it's a draw (winner stays null)

                // Update match
                await supabase
                    .from('rpg_matches')
                    .update({
                        player_a_health: newPlayerAHealth,
                        player_b_health: newPlayerBHealth,
                        current_turn: newTurn,
                        status: 'finished',
                        winner,
                        ended_at: new Date().toISOString()
                    })
                    .eq('id', match_id)

                // Award XP to both players
                const winnerXp = 50
                const loserXp = 15
                const drawXp = 30

                if (winner) {
                    // Winner gets more XP
                    await supabase.from('xp_events').insert([
                        { user_id: winner, source: 'match', points: winnerXp, metadata: { match_id, result: 'win' } },
                        {
                            user_id: winner === match.player_a ? match.player_b : match.player_a,
                            source: 'match',
                            points: loserXp,
                            metadata: { match_id, result: 'loss' }
                        }
                    ])
                } else {
                    // Draw - both get equal XP
                    await supabase.from('xp_events').insert([
                        { user_id: match.player_a, source: 'match', points: drawXp, metadata: { match_id, result: 'draw' } },
                        { user_id: match.player_b, source: 'match', points: drawXp, metadata: { match_id, result: 'draw' } }
                    ])
                }
            } else {
                // Match continues - update health and turn
                await supabase
                    .from('rpg_matches')
                    .update({
                        player_a_health: newPlayerAHealth,
                        player_b_health: newPlayerBHealth,
                        current_turn: newTurn
                    })
                    .eq('id', match_id)
            }
        }

        // Fetch updated match state
        const { data: updatedMatch } = await supabase
            .from('rpg_matches')
            .select('*')
            .eq('id', match_id)
            .single()

        return new Response(
            JSON.stringify({
                success: true,
                result: {
                    correct: isCorrect,
                    damage,
                    streak,
                    both_answered: bothAnswered
                },
                match: updatedMatch,
                turn
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
