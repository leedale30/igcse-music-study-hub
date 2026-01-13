-- ================================================
-- RPG EQUIPMENT LOGIC
-- ================================================

-- 1. Helper RPC to Equip Item
CREATE OR REPLACE FUNCTION public.equip_item(item_id UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    target_item RECORD;
    current_equipped UUID;
BEGIN
    -- Get item details and verify ownership
    SELECT i.*, inv.id as inv_id, inv.is_equipped 
    INTO target_item
    FROM public.rpg_inventory inv
    JOIN public.rpg_items i ON i.id = inv.item_id
    WHERE inv.user_id = auth.uid() AND inv.item_id = item_id;

    IF target_item.id IS NULL THEN
        RETURN jsonb_build_object('success', false, 'error', 'Item not found in inventory');
    END IF;

    IF target_item.type = 'consumable' THEN
        RETURN jsonb_build_object('success', false, 'error', 'Cannot equip consumables');
    END IF;

    -- Unequip current item in same slot (if any)
    UPDATE public.rpg_inventory inv
    SET is_equipped = false
    FROM public.rpg_items i
    WHERE inv.item_id = i.id
    AND inv.user_id = auth.uid()
    AND i.type = target_item.type
    AND inv.is_equipped = true;

    -- Equip new item
    UPDATE public.rpg_inventory
    SET is_equipped = true
    WHERE id = target_item.inv_id;

    RETURN jsonb_build_object('success', true, 'message', 'Item equipped');
END;
$$;

-- 2. Helper RPC to Unequip Item
CREATE OR REPLACE FUNCTION public.unequip_item(item_id UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    inv_record RECORD;
BEGIN
    SELECT * INTO inv_record 
    FROM public.rpg_inventory 
    WHERE user_id = auth.uid() AND item_id = item_id;

    IF inv_record.id IS NULL THEN
         RETURN jsonb_build_object('success', false, 'error', 'Item not found');
    END IF;

    UPDATE public.rpg_inventory
    SET is_equipped = false
    WHERE id = inv_record.id;

    RETURN jsonb_build_object('success', true, 'message', 'Item unequipped');
END;
$$;

-- 3. Helper RPC to Use Consumable
CREATE OR REPLACE FUNCTION public.use_item(item_id UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    target_item RECORD;
BEGIN
    -- Get item and check quantity
    SELECT i.*, inv.quantity, inv.id as inv_id
    INTO target_item
    FROM public.rpg_inventory inv
    JOIN public.rpg_items i ON i.id = inv.item_id
    WHERE inv.user_id = auth.uid() AND inv.item_id = item_id;

    IF target_item.id IS NULL OR target_item.quantity < 1 THEN
        RETURN jsonb_build_object('success', false, 'error', 'Item not available');
    END IF;

    IF target_item.type != 'consumable' THEN
        RETURN jsonb_build_object('success', false, 'error', 'Not a consumable');
    END IF;

    -- Effect Logic (Hardcoded for now, can be expanded)
    IF target_item.effect_id LIKE 'heal_%' THEN
        -- Example: heal_50
        -- Here we would update match health if in match, or just say used.
        -- For now, we assume this is used in LOBBY or sets a buffer.
        NULL; 
    END IF;

    -- Consume 1
    IF target_item.quantity > 1 THEN
        UPDATE public.rpg_inventory SET quantity = quantity - 1 WHERE id = target_item.inv_id;
    ELSE
        DELETE FROM public.rpg_inventory WHERE id = target_item.inv_id;
    END IF;

    RETURN jsonb_build_object('success', true, 'message', 'Item consumed');
END;
$$;
