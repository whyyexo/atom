import { NextResponse } from "next/server";

type MessagePayload = {
  workspaceId: string;
  agentId: string;
  role: "user" | "assistant" | "system";
  content: string;
  metadata?: Record<string, unknown>;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<MessagePayload>;

  if (!body.workspaceId || !body.agentId || !body.role || !body.content) {
    return NextResponse.json(
      {
        error:
          "Missing required fields: workspaceId, agentId, role, and content are required.",
      },
      { status: 400 },
    );
  }

  // TODO: Plug into AI runtime. For now we simply acknowledge receipt.
  return NextResponse.json({
    status: "accepted",
    receivedAt: new Date().toISOString(),
    message: {
      workspaceId: body.workspaceId,
      agentId: body.agentId,
      role: body.role,
      content: body.content,
      metadata: body.metadata ?? {},
    },
  });
}


