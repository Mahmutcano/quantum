// app/api/send-email/route.ts (for App Router)
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
  to: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: EmailRequestBody = await request.json();
    const { name, email, subject, message, to } = body;

    // Input validation
    if (!name || !email || !subject || !message || !to) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || !emailRegex.test(to)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // For Gmail. Use other SMTP configurations for other providers
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string,
      },
    });

    // Configure email options
    const mailOptions = {
      from: process.env.EMAIL_USER as string,
      to: to,
      subject: `Contact Form: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    
    return NextResponse.json(
      { success: false, error: (error as Error).message }, 
      { status: 500 }
    );
  }
}