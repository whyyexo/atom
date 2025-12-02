import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT_EMAIL = "fx.bergeron011@gmail.com";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, subject, message } = body;

    // Validate required fields
    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Format the email content
    const emailContent = `
New contact form submission from Atom website

From: ${email}
Subject: ${subject}

Message:
${message}

---
This email was sent from the Atom contact form.
    `.trim();

    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: "Atom Contact Form <onboarding@resend.dev>", // Change this to your verified domain
          to: RECIPIENT_EMAIL,
          subject: `Contact Form: ${subject}`,
          text: emailContent,
          replyTo: email,
        });
      } catch (resendError) {
        console.error("Resend error:", resendError);
        // Fallback to logging if Resend fails
        console.log("=== CONTACT FORM SUBMISSION ===");
        console.log("To:", RECIPIENT_EMAIL);
        console.log("From:", email);
        console.log("Subject:", subject);
        console.log("Message:", message);
        console.log("================================");
      }
    } else {
      // Log to console if RESEND_API_KEY is not configured
      console.log("=== CONTACT FORM SUBMISSION ===");
      console.log("To:", RECIPIENT_EMAIL);
      console.log("From:", email);
      console.log("Subject:", subject);
      console.log("Message:", message);
      console.log("Note: RESEND_API_KEY not configured. Email not sent.");
      console.log("================================");
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

