import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, email, device, service, date, time, notes } = data;

    // Validate required fields
    if (!name || !phone || !email || !device || !service || !date) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const fromEmail = process.env.SMTP_FROM_EMAIL || 'onboarding@resend.dev';
    const fromName = process.env.SMTP_FROM_NAME || 'FixUp Platform';
    const toEmail = process.env.ADMIN_EMAIL || 'rakibul2237@gmail.com';

    const { data: emailData, error } = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New Repair Booking: ${service} for ${device}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #ccc; border-radius: 8px;">
          <h2 style="color: #0a84ff;">New Repair Appointment Request</h2>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <br />
          <p><strong>Device:</strong> ${device}</p>
          <p><strong>Service:</strong> ${service}</p>
          <br />
          <p><strong>Preferred Date:</strong> ${date}</p>
          <p><strong>Preferred Time:</strong> ${time || 'Not specified'}</p>
          <br />
          <p><strong>Additional Notes:</strong></p>
          <p style="background: #f9f9f9; padding: 10px; border-radius: 4px;">${notes || 'None provided.'}</p>
        </div>
      `,
      text: `
        New Repair Appointment Request
        -------------------------------
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        
        Device: ${device}
        Service: ${service}
        
        Preferred Date: ${date}
        Preferred Time: ${time || 'Not specified'}
        
        Additional Notes:
        ${notes || 'None provided.'}
      `
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: 'Failed to send booking notification via Resend.', details: error },
        { status: 500 }
      );
    }

    console.log("Message sent via Resend:", emailData?.id);

    return NextResponse.json(
      { success: true, messageId: emailData?.id },
      { status: 200 }
    );
    
  } catch (error: any) {
    console.error("Internal Server error:", error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
