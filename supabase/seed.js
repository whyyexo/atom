// Node.js seed script for Supabase
// Run with: node supabase/seed.js
// Requires: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY env variables

const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Error: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  try {
    console.log("Starting seed...");

    // Get first user
    const { data: users, error: userError } = await supabase.auth.admin.listUsers();
    if (userError || !users?.users || users.users.length === 0) {
      console.error("Error: No users found. Please create a user first via Supabase Auth UI.");
      process.exit(1);
    }

    const testUser = users.users[0];
    console.log(`Using user: ${testUser.email} (${testUser.id})`);

    // Get or create workspace
    let { data: workspace, error: workspaceError } = await supabase
      .from("workspaces")
      .select("*")
      .eq("user_id", testUser.id)
      .single();

    if (workspaceError || !workspace) {
      const slug = `my-space-${testUser.id.substring(0, 8)}`;
      const { data: newWorkspace, error: createError } = await supabase
        .from("workspaces")
        .insert({
          user_id: testUser.id,
          slug,
          name: "My Space",
        })
        .select()
        .single();

      if (createError) {
        console.error("Error creating workspace:", createError);
        process.exit(1);
      }

      workspace = newWorkspace;
      console.log("Created workspace:", workspace.slug);
    } else {
      console.log("Using existing workspace:", workspace.slug);
    }

    // Insert projects
    const projects = [
      {
        workspace_id: workspace.id,
        title: "Q1 Product Launch",
        description: "Launch new product features for Q1",
        color: "#0071e3",
        progress: 68,
      },
      {
        workspace_id: workspace.id,
        title: "Marketing Campaign",
        description: "Spring marketing campaign preparation",
        color: "#34c759",
        progress: 42,
      },
      {
        workspace_id: workspace.id,
        title: "Website Redesign",
        description: "Complete website redesign and rebrand",
        color: "#ff9500",
        progress: 85,
      },
      {
        workspace_id: workspace.id,
        title: "Mobile App Development",
        description: "Build native mobile applications",
        color: "#af52de",
        progress: 23,
      },
    ];

    const { data: insertedProjects, error: projectsError } = await supabase
      .from("projects")
      .upsert(projects, { onConflict: "id" })
      .select();

    if (projectsError) {
      console.error("Error inserting projects:", projectsError);
    } else {
      console.log(`Inserted ${insertedProjects.length} projects`);
    }

    // Insert tasks
    const projectId = insertedProjects?.[0]?.id || workspace.id;
    const tasks = [];
    const taskTitles = [
      "Review design mockups",
      "Team standup meeting",
      "Prepare quarterly report",
      "Client presentation",
      "Update project documentation",
      "Design system updates",
      "API integration",
      "User testing sessions",
    ];

    taskTitles.forEach((title, index) => {
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + index);
      tasks.push({
        workspace_id: workspace.id,
        project_id: projectId,
        title,
        status: ["todo", "in-progress", "todo", "review", "done", "todo", "in-progress", "todo"][index],
        priority: ["high", "medium", "medium", "high", "low", "medium", "high", "medium"][index],
        due_date: dueDate.toISOString(),
      });
    });

    const { data: insertedTasks, error: tasksError } = await supabase
      .from("tasks")
      .upsert(tasks, { onConflict: "id" })
      .select();

    if (tasksError) {
      console.error("Error inserting tasks:", tasksError);
    } else {
      console.log(`Inserted ${insertedTasks.length} tasks`);
    }

    // Insert notes
    const notes = [
      {
        workspace_id: workspace.id,
        title: "Product Strategy Meeting",
        content: "Key points from today's product strategy discussion...",
      },
      {
        workspace_id: workspace.id,
        title: "Q1 Goals",
        content: "Main objectives and milestones for Q1...",
      },
      {
        workspace_id: workspace.id,
        title: "Design System Notes",
        content: "Updates to the design system and component library...",
      },
    ];

    const { data: insertedNotes, error: notesError } = await supabase
      .from("notes")
      .upsert(notes, { onConflict: "id" })
      .select();

    if (notesError) {
      console.error("Error inserting notes:", notesError);
    } else {
      console.log(`Inserted ${insertedNotes.length} notes`);
    }

    // Insert notifications
    const notifications = [
      {
        workspace_id: workspace.id,
        type: "system",
        title: "System update available",
        content: "A new version of Atom is available. Update now to get the latest features.",
        is_read: false,
      },
      {
        workspace_id: workspace.id,
        type: "automations",
        title: "Automation completed",
        content: "Your daily task sync automation ran successfully and updated 12 tasks.",
        is_read: false,
      },
      {
        workspace_id: workspace.id,
        type: "apps",
        title: "New app integration",
        content: "Slack integration is now available. Connect your workspace to get started.",
        is_read: true,
      },
    ];

    const { data: insertedNotifications, error: notificationsError } = await supabase
      .from("notifications")
      .upsert(notifications, { onConflict: "id" })
      .select();

    if (notificationsError) {
      console.error("Error inserting notifications:", notificationsError);
    } else {
      console.log(`Inserted ${insertedNotifications.length} notifications`);
    }

    console.log("\n✅ Seed completed successfully!");
    console.log(`Workspace: ${workspace.slug}`);
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
}

seed();

