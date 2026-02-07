import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    /* ── Build the email content ── */
    const serviceLabel = service || "Not specified";
    const phoneLabel = phone || "Not provided";
    const timestamp = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    });

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#46494c;">
        <div style="background:#1985a1;padding:24px 32px;border-radius:12px 12px 0 0;">
          <h1 style="margin:0;color:#fff;font-size:20px;">New Contact Form Submission</h1>
          <p style="margin:4px 0 0;color:rgba(255,255,255,0.8);font-size:13px;">${timestamp}</p>
        </div>
        <div style="border:1px solid #dcdcdd;border-top:none;padding:32px;border-radius:0 0 12px 12px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;font-weight:bold;width:130px;vertical-align:top;color:#4c5c68;">Name</td>
              <td style="padding:8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:bold;vertical-align:top;color:#4c5c68;">Email</td>
              <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#1985a1;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:bold;vertical-align:top;color:#4c5c68;">Phone</td>
              <td style="padding:8px 0;">${phoneLabel}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:bold;vertical-align:top;color:#4c5c68;">Service</td>
              <td style="padding:8px 0;">${serviceLabel}</td>
            </tr>
            <tr>
              <td colspan="2" style="padding:16px 0 0;">
                <div style="font-weight:bold;color:#4c5c68;margin-bottom:8px;">Message</div>
                <div style="background:#f9f9f9;padding:16px;border-radius:8px;white-space:pre-wrap;line-height:1.6;">${message}</div>
              </td>
            </tr>
          </table>
          <hr style="margin:24px 0;border:none;border-top:1px solid #dcdcdd;" />
          <p style="font-size:12px;color:#c5c3c6;margin:0;">
            This email was sent from the ShoreStack contact form.
          </p>
        </div>
      </div>
    `;

    /* ── Send via Resend REST API (no npm package needed) ── */
    const apiKey = process.env.RESEND_API_KEY;
    const contactTo = process.env.CONTACT_EMAIL || "shorestack@gmail.com";

    if (!apiKey) {
      console.error(
        "Email not configured — RESEND_API_KEY environment variable is required. " +
        "Submission was received but no email was sent.",
      );
      console.log("Contact form submission (email not sent):", {
        name, email, phone: phoneLabel, service: serviceLabel, message, timestamp,
      });
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us directly." },
        { status: 503 }
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "ShoreStack Contact <onboarding@resend.dev>",
        reply_to: email,
        to: [contactTo],
        subject: `New inquiry from ${name} — ShoreStack`,
        html: htmlBody,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error("Resend API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again or email us directly." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Thank you for reaching out. We will get back to you within 24 hours." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
