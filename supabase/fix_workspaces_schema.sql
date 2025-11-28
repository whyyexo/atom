-- Fix workspaces table schema if it uses owner_id instead of user_id
-- Run this in Supabase SQL Editor if you get column name errors

DO $$
BEGIN
  -- Check if workspaces table has owner_id but not user_id
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'workspaces' AND column_name = 'owner_id'
  ) AND NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'workspaces' AND column_name = 'user_id'
  ) THEN
    -- Rename owner_id to user_id
    ALTER TABLE workspaces RENAME COLUMN owner_id TO user_id;
    RAISE NOTICE 'Renamed owner_id to user_id in workspaces table';
  END IF;
  
  -- Ensure the column has correct constraints
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'workspaces' AND column_name = 'user_id'
  ) THEN
    -- Add foreign key if it doesn't exist
    IF NOT EXISTS (
      SELECT 1 FROM information_schema.table_constraints 
      WHERE table_name = 'workspaces' 
      AND constraint_type = 'FOREIGN KEY'
      AND constraint_name LIKE '%user_id%'
    ) THEN
      ALTER TABLE workspaces 
      ADD CONSTRAINT workspaces_user_id_fkey 
      FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;
      RAISE NOTICE 'Added foreign key constraint for user_id';
    END IF;
    
    -- Add unique constraint if it doesn't exist
    IF NOT EXISTS (
      SELECT 1 FROM information_schema.table_constraints 
      WHERE table_name = 'workspaces' 
      AND constraint_type = 'UNIQUE'
      AND constraint_name LIKE '%user_id%'
    ) THEN
      ALTER TABLE workspaces 
      ADD CONSTRAINT workspaces_user_id_unique UNIQUE (user_id);
      RAISE NOTICE 'Added unique constraint for user_id';
    END IF;
  END IF;
END $$;

