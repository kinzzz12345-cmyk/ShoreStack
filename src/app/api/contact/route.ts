import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      businessType,
      frustrations,
      teamSize,
      tools,
      notes,
      contactName,
      contactEmail,
      contactPhone,
      businessName,
      referral,
    } = body;

    if (!contactName || (!contactEmail && !contactPhone)) {
      return NextResponse.json(
        { error: "Name and either email or phone are required." },
        { status: 400 }
      );
    }

    /* ── Build the email content ── */
    const timestamp = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    });

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#46494c;">
        <div style="background:#2A9D8F;padding:24px 32px;border-radius:12px 12px 0 0;">
          <h1 style="margin:0;color:#fff;font-size:20px;">New Lead from Talk to Us Wizard</h1>
          <p style="margin:4px 0 0;color:rgba(255,255,255,0.8);font-size:13px;">${timestamp}</p>
        </div>
        <div style="border:1px solid #dcdcdd;border-top:none;padding:32px;border-radius:0 0 12px 12px;">
          <h2 style="margin:0 0 16px;color:#2A9D8F;font-size:16px;">Contact Information</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr>
              <td style="padding:8px 0;font-weight:bold;width:140px;vertical-align:top;color:#4c5c68;">Name</td>
              <td style="padding:8px 0;">${contactName}</td>
            </tr>
            ${contactEmail ? `
            <tr>
              <td style="padding:8px 0;font-weight:bold;vertical-align:top;color:#4c5c68;">Email</td>
              <td style="padding:8px 0;"><a href="mailto:${contactEmail}" style="color:#2A9D8F;">${contactEmail}</a></td>
            </tr>` : ''}
            ${contactPhone ? `
            <tr>
              <td style="padding:8px 0;font-weight:bold;vertical-align:top;color:#4c5c68;">Phone</td>
              <td style="padding:8px 0;"><a href="tel:${contactPhone}" style="color:#2A9D8F;">${contactPhone}</a></td>
            </tr>` : ''}
            ${businessName ? `
            <tr>
              <td style="padding:8px 0;font-weight:bold;vertical-align:top;color:#4c5c68;">Business Name</td>
              <td style="padding:8px 0;">${businessName}</td>
            </tr>` : ''}
            ${referral ? `
            <tr>
              <td style="padding:8px 0;font-weight:bold;vertical-align:top;color:#4c5c68;">Referral Source</td>
              <td style="padding:8px 0;">${referral}</td>
            </tr>` : ''}
          </table>

          <h2 style="margin:24px 0 16px;color:#2A9D8F;font-size:16px;">Business Details</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            ${businessType ? `
            <tr>
              <td style="padding:8px 0;font-weight:bold;width:140px;vertical-align:top;color:#4c5c68;">Business Type</td>
              <td style="padding:8px 0;">${businessType}</td>
            </tr>` : ''}
            ${teamSize ? `
            <tr>
              <td style="padding:8px 0;font-weight:bold;vertical-align:top;color:#4c5c68;">Team Size</td>
              <td style="padding:8px 0;">${teamSize}</td>
            </tr>` : ''}
            ${frustrations && frustrations.length > 0 ? `
            <tr>
              <td style="padding:8px 0;font-weight:bold;vertical-align:top;color:#4c5c68;">Frustrations</td>
              <td style="padding:8px 0;">
                <ul style="margin:0;padding-left:20px;">
                  ${frustrations.map((f: string) => `<li>${f}</li>`).join('')}
                </ul>
              </td>
            </tr>` : ''}
            ${tools && tools.length > 0 ? `
            <tr>
              <td style="padding:8px 0;font-weight:bold;vertical-align:top;color:#4c5c68;">Current Tools</td>
              <td style="padding:8px 0;">
                <ul style="margin:0;padding-left:20px;">
                  ${tools.map((t: string) => `<li>${t}</li>`).join('')}
                </ul>
              </td>
            </tr>` : ''}
          </table>

          ${notes ? `
          <h2 style="margin:24px 0 16px;color:#2A9D8F;font-size:16px;">Additional Notes</h2>
          <div style="background:#f9f9f9;padding:16px;border-radius:8px;white-space:pre-wrap;line-height:1.6;">${notes}</div>
          ` : ''}

          <hr style="margin:24px 0;border:none;border-top:1px solid #dcdcdd;" />
          <p style="font-size:12px;color:#c5c3c6;margin:0;">
            This email was sent from the ShoreStack "Talk to Us" wizard.
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
        reply_to: contactEmail || undefined,
        to: [contactTo],
        subject: `New lead: ${contactName}${businessName ? ` from ${businessName}` : ''} — ShoreStack`,
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
