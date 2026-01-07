// ================================================
// RPG Service: Client-side API for Battle System
// ================================================
// This service provides React-friendly functions to
// interact with the RPG Edge Functions.
// ================================================

import { supabase } from '../src/lib/supabase'; // Your existing Supabase client

// Types
export interface RPGProfile {
    id: string;
    name: string;
    nickname: string;
    xp: number;
    level: number;
    character_class: string;
}

export interface RPGMatch {
    id: string;
    player_a: string;
    player_b: string | null;
    status: 'pending' | 'active' | 'finished' | 'cancelled';
    winner: string | null;
    player_a_health: number;
    player_b_health: number;
    current_turn: number;
    total_turns: number;
    question_ids: string[];
    started_at: string | null;
    ended_at: string | null;
}

export interface RPGQuestion {
    id: string;
    type: 'mcq' | 'short' | 'audio' | 'image' | 'listening';
    content: {
        prompt: string;
        choices?: string[];
        [key: string]: any;
    };
    media_path?: string;
    difficulty: number;
    subject_tag?: string;
}

export interface AnswerResult {
    correct: boolean;
    damage: number;
    streak: number;
    both_answered: boolean;
}

export interface MatchState {
    current_turn: number;
    total_turns: number;
    player_a_health: number;
    player_b_health: number;
    your_role: 'player_a' | 'player_b';
}

// ================================================
// API Functions
// ================================================

/**
 * Award XP to a user (teacher/admin only)
 */
export async function awardXP(params: {
    user_id: string;
    points: number;
    source: 'test' | 'match' | 'teacher' | 'quiz' | 'achievement';
    metadata?: Record<string, any>;
}): Promise<{ success: boolean; profile?: RPGProfile; error?: string }> {
    const { data: { session } } = await supabase.auth.getSession();

    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/award-xp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.access_token}`,
        },
        body: JSON.stringify(params),
    });

    const data = await response.json();

    if (!response.ok) {
        return { success: false, error: data.error };
    }

    return { success: true, profile: data.profile };
}

/**
 * Start a new match
 */
export async function startMatch(params: {
    opponent_id?: string;
    class_id?: string;
    subject_tag?: string;
    total_turns?: number;
}): Promise<{
    success: boolean;
    match?: RPGMatch;
    first_question?: RPGQuestion;
    error?: string
}> {
    const { data: { session } } = await supabase.auth.getSession();

    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/start-match`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.access_token}`,
        },
        body: JSON.stringify(params),
    });

    const data = await response.json();

    if (!response.ok) {
        return { success: false, error: data.error };
    }

    return {
        success: true,
        match: data.match,
        first_question: data.first_question
    };
}

/**
 * Join a pending match
 */
export async function joinMatch(match_id: string): Promise<{
    success: boolean;
    match?: RPGMatch;
    first_question?: RPGQuestion;
    opponent?: RPGProfile;
    error?: string
}> {
    const { data: { session } } = await supabase.auth.getSession();

    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/join-match`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.access_token}`,
        },
        body: JSON.stringify({ match_id }),
    });

    const data = await response.json();

    if (!response.ok) {
        return { success: false, error: data.error };
    }

    return {
        success: true,
        match: data.match,
        first_question: data.first_question,
        opponent: data.opponent
    };
}

/**
 * Get current question for a match (without answer key)
 */
export async function getQuestion(match_id: string): Promise<{
    success: boolean;
    question?: RPGQuestion;
    match_state?: MatchState;
    already_answered?: boolean;
    error?: string
}> {
    const { data: { session } } = await supabase.auth.getSession();

    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/get-question`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.access_token}`,
        },
        body: JSON.stringify({ match_id }),
    });

    const data = await response.json();

    if (!response.ok) {
        return { success: false, error: data.error };
    }

    return {
        success: true,
        question: data.question,
        match_state: data.match_state,
        already_answered: data.already_answered
    };
}

/**
 * Submit an answer for the current turn
 */
export async function submitAnswer(params: {
    match_id: string;
    question_id: string;
    answer: any;
    time_taken_ms: number;
}): Promise<{
    success: boolean;
    result?: AnswerResult;
    match?: RPGMatch;
    error?: string
}> {
    const { data: { session } } = await supabase.auth.getSession();

    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-answer`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.access_token}`,
        },
        body: JSON.stringify(params),
    });

    const data = await response.json();

    if (!response.ok) {
        return { success: false, error: data.error };
    }

    return {
        success: true,
        result: data.result,
        match: data.match
    };
}

// ================================================
// Realtime Subscriptions
// ================================================

/**
 * Subscribe to match updates in real-time
 */
export function subscribeToMatch(
    match_id: string,
    callback: (match: RPGMatch) => void
): () => void {
    const channel = supabase
        .channel(`match-${match_id}`)
        .on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'rpg_matches',
                filter: `id=eq.${match_id}`
            },
            (payload) => {
                callback(payload.new as RPGMatch);
            }
        )
        .subscribe();

    // Return unsubscribe function
    return () => {
        supabase.removeChannel(channel);
    };
}

/**
 * Subscribe to match turn updates
 */
export function subscribeToMatchTurns(
    match_id: string,
    callback: (turn: any) => void
): () => void {
    const channel = supabase
        .channel(`match-turns-${match_id}`)
        .on(
            'postgres_changes',
            {
                event: 'INSERT',
                schema: 'public',
                table: 'rpg_match_turns',
                filter: `match_id=eq.${match_id}`
            },
            (payload) => {
                callback(payload.new);
            }
        )
        .subscribe();

    return () => {
        supabase.removeChannel(channel);
    };
}

// ================================================
// Utility Functions
// ================================================

/**
 * Get leaderboard for a school
 */
export async function getLeaderboard(school_id?: number, limit = 10): Promise<RPGProfile[]> {
    let query = supabase
        .from('rpg_leaderboard')
        .select('*')
        .order('xp', { ascending: false })
        .limit(limit);

    if (school_id) {
        query = query.eq('school_id', school_id);
    }

    const { data, error } = await query;

    if (error) {
        console.error('Error fetching leaderboard:', error);
        return [];
    }

    return data || [];
}

/**
 * Get pending matches available to join
 */
export async function getPendingMatches(): Promise<RPGMatch[]> {
    const { data, error } = await supabase
        .from('rpg_matches')
        .select('*')
        .eq('status', 'pending')
        .is('player_b', null)
        .order('created_at', { ascending: false })
        .limit(20);

    if (error) {
        console.error('Error fetching pending matches:', error);
        return [];
    }

    return data || [];
}

/**
 * Get user's match history
 */
export async function getMatchHistory(user_id: string, limit = 20): Promise<RPGMatch[]> {
    const { data, error } = await supabase
        .from('rpg_matches')
        .select('*')
        .or(`player_a.eq.${user_id},player_b.eq.${user_id}`)
        .eq('status', 'finished')
        .order('ended_at', { ascending: false })
        .limit(limit);

    if (error) {
        console.error('Error fetching match history:', error);
        return [];
    }

    return data || [];
}

/**
 * Get user's XP history
 */
export async function getXPHistory(user_id: string, limit = 50): Promise<any[]> {
    const { data, error } = await supabase
        .from('xp_events')
        .select('*')
        .eq('user_id', user_id)
        .order('created_at', { ascending: false })
        .limit(limit);

    if (error) {
        console.error('Error fetching XP history:', error);
        return [];
    }

    return data || [];
}
