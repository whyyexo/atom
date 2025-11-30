import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Use service role key for seeding

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function seed() {
  console.log('🌱 Starting database seed...');

  try {
    // Create demo user
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: 'demo@atom.app',
      password: 'demo123456',
      email_confirm: true,
      user_metadata: {
        first_name: 'Demo',
        last_name: 'User',
        full_name: 'Demo User',
      },
    });

    if (authError) {
      console.error('Error creating user:', authError);
      return;
    }

    const userId = authData.user.id;
    console.log('✅ Created demo user:', userId);

    // Wait for profile to be created by trigger
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Create demo tasks
    const tasks = [
      {
        user_id: userId,
        title: 'Complete mobile app setup',
        description: 'Finish setting up the Atom mobile app',
        completed: false,
      },
      {
        user_id: userId,
        title: 'Review AI integration',
        description: 'Test AI assistant functionality',
        completed: true,
      },
      {
        user_id: userId,
        title: 'Add voice notes feature',
        description: 'Implement voice recording and transcription',
        completed: false,
      },
    ];

    const { data: tasksData, error: tasksError } = await supabase
      .from('tasks')
      .insert(tasks)
      .select();

    if (tasksError) {
      console.error('Error creating tasks:', tasksError);
    } else {
      console.log('✅ Created', tasksData.length, 'tasks');
    }

    // Create demo notes
    const notes = [
      {
        user_id: userId,
        title: 'Welcome to Atom',
        content: 'This is your first note. You can edit, delete, and create new notes.',
      },
      {
        user_id: userId,
        title: 'Mobile App Features',
        content: 'The Atom mobile app includes:\n- AI Assistant\n- Tasks Management\n- Notes\n- Voice Notes',
      },
    ];

    const { data: notesData, error: notesError } = await supabase
      .from('notes')
      .insert(notes)
      .select();

    if (notesError) {
      console.error('Error creating notes:', notesError);
    } else {
      console.log('✅ Created', notesData.length, 'notes');
    }

    // Create demo AI messages
    const messages = [
      {
        user_id: userId,
        role: 'user' as const,
        text: 'Hello! How can you help me today?',
      },
      {
        user_id: userId,
        role: 'assistant' as const,
        text: 'Hello! I'm your AI assistant. I can help you with tasks, answer questions, and assist with your workflow.',
      },
    ];

    const { data: messagesData, error: messagesError } = await supabase
      .from('ai_messages')
      .insert(messages)
      .select();

    if (messagesError) {
      console.error('Error creating messages:', messagesError);
    } else {
      console.log('✅ Created', messagesData.length, 'AI messages');
    }

    console.log('\n✨ Seed completed successfully!');
    console.log('\n📧 Demo credentials:');
    console.log('   Email: demo@atom.app');
    console.log('   Password: demo123456');
  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  }
}

seed();

