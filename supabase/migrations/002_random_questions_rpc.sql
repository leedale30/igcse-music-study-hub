-- Add RPC for fetching random questions
CREATE OR REPLACE FUNCTION public.get_random_rpg_questions(limit_count INT DEFAULT 20)
RETURNS SETOF public.rpg_questions
LANGUAGE sql
STABLE
AS $$
  SELECT * FROM public.rpg_questions
  WHERE is_active = true
  ORDER BY random()
  LIMIT limit_count;
$$;
