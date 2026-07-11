import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all fields" },
        { status: 400 }
      );
    }

    // SMTP configuration from environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD;
    const contactEmail = process.env.CONTACT_EMAIL || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn("SMTP environment variables are not fully configured. Falling back to console logging.");
      console.log(`[Contact Form Message] From: ${name} (${email})\nMessage: ${message}`);
      
      // In development / local testing without SMTP env variables, we can return success but log
      return NextResponse.json({
        success: true,
        message: "Message logged successfully (SMTP credentials missing, using local log)",
        loggedLocal: true
      });
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Setup email data
    const mailOptions = {
      from: `"${name}" <${smtpUser}>`, // sender address (some SMTP hosts require sender to match auth user)
      replyTo: email, // replies go to user's email
      to: contactEmail,
      subject: `New Message from Portfolio - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; padding: 10px; background-color: #f3f4f6; border-radius: 4px;">${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Your message in a bottle has been sent and reached the destination!",
    });
  } catch (error: any) {
    console.error("Error sending email via Nodemailer:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
