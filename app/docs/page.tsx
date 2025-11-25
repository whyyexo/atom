"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { PublicLayout } from "@/components/public/public-layout";
import { cn } from "@/lib/utils";

const subtleFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const docSections = [
  {
    id: "overview",
    title: "Overview",
    content: `Atom is a productivity workspace that combines tasks, notes, and AI-powered workflows. This documentation will help you get started and make the most of Atom.

## What is Atom?

Atom is designed to help you think clearly and work efficiently. It brings together everything you need to organize your work in a single, minimal interface.

## Key Features

- **Smart Tasks**: Prioritize work with context-aware lists
- **Notes & Documents**: Structure your thoughts in a clean editor
- **AI Workspace**: Built-in AI assistant for automation
- **Real-time Collaboration**: Share workspaces with your team`,
  },
  {
    id: "getting-started",
    title: "Getting Started",
    content: `Get up and running with Atom in minutes.

## Create an Account

1. Visit the [sign up page](/sign-up)
2. Enter your email address
3. Check your inbox for a magic link
4. Click the link to activate your account

## Your First Workspace

After signing in, you'll be prompted to create your first workspace. Workspaces are containers for your projects, tasks, and notes.

## Create a Project

1. Navigate to your workspace
2. Click "New Project"
3. Give it a name and description
4. Start adding tasks and notes`,
  },
  {
    id: "api",
    title: "API",
    content: `Atom provides a RESTful API for programmatic access to your data.

## Authentication

All API requests require authentication using your API key. Include it in the Authorization header:

\`\`\`bash
Authorization: Bearer YOUR_API_KEY
\`\`\`

## Base URL

\`\`\`
https://api.atom.com/v1
\`\`\`

## Endpoints

### Get Workspaces

\`\`\`bash
GET /workspaces
\`\`\`

### Create Workspace

\`\`\`bash
POST /workspaces
Content-Type: application/json

{
  "name": "My Workspace",
  "description": "A new workspace"
}
\`\`\`

### Get Projects

\`\`\`bash
GET /workspaces/{workspace_id}/projects
\`\`\``,
  },
  {
    id: "examples",
    title: "Examples",
    content: `Here are some examples to help you get started.

## JavaScript Example

\`\`\`javascript
const response = await fetch('https://api.atom.com/v1/workspaces', {
  headers: {
    'Authorization': \`Bearer \${API_KEY}\`,
    'Content-Type': 'application/json'
  }
});

const workspaces = await response.json();
console.log(workspaces);
\`\`\`

## Python Example

\`\`\`python
import requests

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.atom.com/v1/workspaces', headers=headers)
workspaces = response.json()
print(workspaces)
\`\`\`

## cURL Example

\`\`\`bash
curl -X GET https://api.atom.com/v1/workspaces \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"
\`\`\``,
  },
];

const sidebarItems = [
  { id: "overview", label: "Overview" },
  { id: "getting-started", label: "Getting Started" },
  { id: "api", label: "API" },
  { id: "examples", label: "Examples" },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const activeContent = docSections.find((s) => s.id === activeSection) || docSections[0];

  return (
    <PublicLayout>
      <div className="mx-auto max-w-[1180px] px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[240px,1fr]">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={cn(
                    "block w-full text-left px-4 py-2.5 text-sm font-normal transition-colors rounded-md",
                    activeSection === item.id
                      ? "text-[#000000] dark:text-white bg-[rgba(0,0,0,0.04)] dark:bg-[rgba(255,255,255,0.04)]"
                      : "text-[#333333] dark:text-[#cccccc] hover:bg-[rgba(0,0,0,0.02)] dark:hover:bg-[rgba(255,255,255,0.02)]"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="min-w-0">
            <motion.div
              key={activeSection}
              initial="hidden"
              animate="visible"
              variants={subtleFade}
              transition={{ duration: 0.4 }}
              className="prose prose-sm max-w-none dark:prose-invert"
            >
              <h1 className="mb-8 text-4xl font-semibold text-[#000000] dark:text-white">
                {activeContent.title}
              </h1>
              <div className="space-y-6 text-base font-light leading-relaxed text-[#333333] dark:text-[#cccccc]">
                {activeContent.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2
                        key={index}
                        className="mt-12 text-2xl font-semibold text-[#000000] dark:text-white first:mt-0"
                      >
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3
                        key={index}
                        className="mt-8 text-xl font-semibold text-[#000000] dark:text-white"
                      >
                        {paragraph.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith("```")) {
                    const lines = paragraph.split("\n");
                    const language = lines[0].replace("```", "").trim() || "bash";
                    const code = lines.slice(1, -1).join("\n");
                    return (
                      <CodeBlock key={index} language={language} code={code} />
                    );
                  }
                  if (paragraph.startsWith("- ")) {
                    const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 ml-4">
                        {items.map((item, i) => (
                          <li key={i} className="text-[#333333] dark:text-[#cccccc]">
                            {item.replace(/^-\s*\*\*/, "").replace(/\*\*:\s*/, ": ")}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="text-[#333333] dark:text-[#cccccc]">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </PublicLayout>
  );
}

function CodeBlock({ language, code }: { language: string; code: string }) {
  return (
    <div className="my-6 rounded-lg border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[#f5f5f5] dark:bg-[#1a1a1a] overflow-hidden">
      <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.02)] px-4 py-2">
        <span className="text-xs font-mono text-[#666666] dark:text-[#999999]">{language}</span>
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-xs font-normal text-[#666666] dark:text-[#999999] hover:text-[#000000] dark:hover:text-white transition-colors"
        >
          Copy
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-[#000000] dark:text-white leading-relaxed">
          {code}
        </code>
      </pre>
    </div>
  );
}
