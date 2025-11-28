-- Seed data for development
-- Note: This seed assumes you have auth.users created via Supabase Auth
-- It will auto-detect the workspace column name (user_id or owner_id)

DO $$
DECLARE
  test_user_id uuid;
  test_workspace_id uuid;
  workspace_user_col text;
BEGIN
  -- Get the first user (adjust email as needed)
  SELECT id INTO test_user_id FROM auth.users LIMIT 1;
  
  IF test_user_id IS NULL THEN
    RAISE NOTICE 'No users found. Please create a user first via Supabase Auth.';
    RETURN;
  END IF;
  
  -- Check which column name exists in workspaces table
  SELECT column_name INTO workspace_user_col
  FROM information_schema.columns
  WHERE table_name = 'workspaces'
    AND column_name IN ('user_id', 'owner_id')
  LIMIT 1;
  
  IF workspace_user_col IS NULL THEN
    RAISE NOTICE 'Workspaces table not found or missing user_id/owner_id column. Please run migrations first.';
    RETURN;
  END IF;
  
  -- Get or create workspace for this user
  IF workspace_user_col = 'user_id' THEN
    SELECT id INTO test_workspace_id FROM workspaces WHERE user_id = test_user_id LIMIT 1;
    
    IF test_workspace_id IS NULL THEN
      INSERT INTO workspaces (user_id, slug, name)
      VALUES (test_user_id, 'my-space-dev', 'My Space')
      RETURNING id INTO test_workspace_id;
    END IF;
  ELSE
    SELECT id INTO test_workspace_id FROM workspaces WHERE owner_id = test_user_id LIMIT 1;
    
    IF test_workspace_id IS NULL THEN
      INSERT INTO workspaces (owner_id, slug, name)
      VALUES (test_user_id, 'my-space-dev', 'My Space')
      RETURNING id INTO test_workspace_id;
    END IF;
  END IF;
  
  -- Insert sample projects
  INSERT INTO projects (workspace_id, title, description, color, progress)
  VALUES
    (test_workspace_id, 'Q1 Product Launch', 'Launch new product features for Q1', '#0071e3', 68),
    (test_workspace_id, 'Marketing Campaign', 'Spring marketing campaign preparation', '#34c759', 42),
    (test_workspace_id, 'Website Redesign', 'Complete website redesign and rebrand', '#ff9500', 85),
    (test_workspace_id, 'Mobile App Development', 'Build native mobile applications', '#af52de', 23)
  ON CONFLICT DO NOTHING;
  
  -- Insert sample tasks
  INSERT INTO tasks (workspace_id, project_id, title, status, priority, due_date)
  SELECT 
    test_workspace_id,
    (SELECT id FROM projects WHERE workspace_id = test_workspace_id LIMIT 1),
    unnest(ARRAY[
      'Review design mockups',
      'Team standup meeting',
      'Prepare quarterly report',
      'Client presentation',
      'Update project documentation',
      'Design system updates',
      'API integration',
      'User testing sessions',
      'Content creation',
      'Social media posts'
    ]),
    unnest(ARRAY['todo', 'in-progress', 'todo', 'review', 'done', 'todo', 'in-progress', 'todo', 'todo', 'todo']),
    unnest(ARRAY['high', 'medium', 'medium', 'high', 'low', 'medium', 'high', 'medium', 'low', 'medium']),
    (NOW() + (random() * INTERVAL '7 days'))::timestamptz
  ON CONFLICT DO NOTHING;
  
  -- Insert sample notes
  INSERT INTO notes (workspace_id, title, content)
  VALUES
    (test_workspace_id, 'Product Strategy Meeting', 'Key points from today''s product strategy discussion...'),
    (test_workspace_id, 'Q1 Goals', 'Main objectives and milestones for Q1...'),
    (test_workspace_id, 'Design System Notes', 'Updates to the design system and component library...'),
    (test_workspace_id, 'Team Retrospective', 'Key takeaways from the team retrospective...'),
    (test_workspace_id, 'Research Findings', 'User research insights and patterns identified...')
  ON CONFLICT DO NOTHING;
  
  -- Insert sample notifications
  INSERT INTO notifications (workspace_id, type, title, content, is_read)
  VALUES
    (test_workspace_id, 'system', 'System update available', 'A new version of Atom is available. Update now to get the latest features.', false),
    (test_workspace_id, 'automations', 'Automation completed', 'Your daily task sync automation ran successfully and updated 12 tasks.', false),
    (test_workspace_id, 'apps', 'New app integration', 'Slack integration is now available. Connect your workspace to get started.', true),
    (test_workspace_id, 'billing', 'Payment processed', 'Your subscription payment for $29 has been processed successfully.', true),
    (test_workspace_id, 'automations', 'Automation failed', 'Your email automation failed to run. Check your configuration.', false)
  ON CONFLICT DO NOTHING;
  
  RAISE NOTICE 'Seed data inserted successfully for workspace: %', test_workspace_id;
END $$;
