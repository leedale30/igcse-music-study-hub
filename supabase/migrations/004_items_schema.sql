-- ================================================
-- RPG ITEMS & INVENTORY: Database Schema Migration
-- ================================================

-- 1. Create Items Table
CREATE TABLE IF NOT EXISTS public.rpg_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    type TEXT CHECK (type IN ('weapon', 'armor', 'accessory', 'consumable')),
    rarity TEXT CHECK (rarity IN ('common', 'rare', 'epic', 'legendary')) DEFAULT 'common',
    price INT DEFAULT 0,
    stats JSONB DEFAULT '{}', -- { "attack": 5, "defense": 2, "hp": 10 }
    effect_id TEXT, -- For consumables/abilities: 'heal_50', 'boost_xp'
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create Inventory Table (Many-to-Many: User <-> Item)
CREATE TABLE IF NOT EXISTS public.rpg_inventory (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    item_id UUID REFERENCES public.rpg_items(id) ON DELETE CASCADE,
    is_equipped BOOLEAN DEFAULT false,
    quantity INT DEFAULT 1,
    acquired_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, item_id)
);

-- 3. Enable RLS
ALTER TABLE public.rpg_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rpg_inventory ENABLE ROW LEVEL SECURITY;

-- 4. Policies
-- Items: Everyone can view
CREATE POLICY "Everyone can view items" ON public.rpg_items
    FOR SELECT USING (true);

-- Inventory: Users can view/manage their own
CREATE POLICY "Users can manage their inventory" ON public.rpg_inventory
    FOR ALL USING (auth.uid() = user_id);

-- 5. Helper RPC to Purchase Item
CREATE OR REPLACE FUNCTION public.purchase_item(item_id UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    item_price INT;
    user_gold INT;
    existing_qty INT;
BEGIN
    -- Get item price
    SELECT price INTO item_price FROM public.rpg_items WHERE id = item_id;
    IF item_price IS NULL THEN
        RETURN jsonb_build_object('success', false, 'error', 'Item not found');
    END IF;

    -- Get user gold (assuming stored in profiles.gold, if not need to add it)
    -- Note: 001_rpg_schema didn't add gold column, let's add it if missing
    -- Checks are done outside this block commonly, but good to be safe.
    
    -- For now, let's assume gold is in profiles metadata or separate column.
    -- Checking profiles table structure... 001_rpg_schema added xp/level.
    -- Let's ADD GOLD COLUMN safely first in this migration just in case.
    
    SELECT COALESCE(gold, 0) INTO user_gold FROM public.profiles WHERE id = auth.uid();

    IF user_gold < item_price THEN
        RETURN jsonb_build_object('success', false, 'error', 'Insufficient gold');
    END IF;

    -- Deduct Gold
    UPDATE public.profiles SET gold = gold - item_price WHERE id = auth.uid();

    -- Add to Inventory
    INSERT INTO public.rpg_inventory (user_id, item_id, quantity)
    VALUES (auth.uid(), item_id, 1)
    ON CONFLICT (user_id, item_id) 
    DO UPDATE SET quantity = rpg_inventory.quantity + 1;

    RETURN jsonb_build_object('success', true, 'message', 'Item purchased');
END;
$$;

-- 6. Add Gold column to profiles if missing
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'gold') THEN
        ALTER TABLE public.profiles ADD COLUMN gold INT DEFAULT 0;
    END IF;
    
    -- Add avatar_url if missing (for user request)
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'avatar_url') THEN
        ALTER TABLE public.profiles ADD COLUMN avatar_url TEXT;
    END IF;
END $$;

-- 7. Create Storage Bucket for Avatars
INSERT INTO storage.buckets (id, name, public) 
VALUES ('avatars', 'avatars', true)
ON CONFLICT (id) DO NOTHING;

-- Storage Policies
-- Allow public access to avatars
CREATE POLICY "Avatar images are publicly accessible" 
ON storage.objects FOR SELECT 
USING ( bucket_id = 'avatars' );

-- Allow authenticated users to upload their own avatar
-- (Simple version: allow any auth user to upload)
CREATE POLICY "Users can upload avatars" 
ON storage.objects FOR INSERT 
WITH CHECK ( bucket_id = 'avatars' AND auth.role() = 'authenticated' );

-- Allow users to update their own avatar
CREATE POLICY "Users can update own avatar"
ON storage.objects FOR UPDATE
USING ( bucket_id = 'avatars' AND auth.uid() = owner )
WITH CHECK ( bucket_id = 'avatars' AND auth.uid() = owner );
