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
        <div style="background-color: #020617; padding: 30px; font-family: 'Georgia', serif; text-align: center;">
          <div style="max-width: 500px; margin: 0 auto; background-color: #fdf5e6; border: 8px solid #5b3d1b; border-radius: 8px; padding: 30px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); text-align: left; position: relative;">
            
            <!-- Wanted Poster Header -->
            <div style="text-align: center; border-bottom: 3px double #5b3d1b; padding-bottom: 15px; margin-bottom: 20px;">
              <span style="font-size: 10px; font-weight: bold; color: #b85a00; letter-spacing: 4px; text-transform: uppercase;">Log Entry</span>
              <h2 style="margin: 5px 0; color: #5b3d1b; font-size: 26px; text-transform: uppercase; letter-spacing: 2px;">WANTED CONTACT</h2>
              <div style="font-size: 12px; color: #78350f; font-style: italic; margin-top: 5px;">"A new sailor approaches the ship..."</div>
            </div>

            <!-- Content -->
            <div style="color: #2c1b0c; font-size: 15px; line-height: 1.6;">
              <p style="margin: 10px 0;"><strong>SAILOR NAME:</strong> <span style="color: #c77b00; font-weight: bold;">${name}</span></p>
              <p style="margin: 10px 0;"><strong>COMMUNICATION DEN-DEN:</strong> <a href="mailto:${email}" style="color: #c77b00; text-decoration: underline; font-weight: bold;">${email}</a></p>
              
              <div style="margin-top: 25px; border-top: 1px dashed #5b3d1b; padding-top: 15px;">
                <strong style="display: block; margin-bottom: 8px; color: #5b3d1b; font-size: 13px; letter-spacing: 1px; text-transform: uppercase;">Message Bottle Content:</strong>
                <div style="background-color: #f5ecd5; border-left: 4px solid #5b3d1b; padding: 15px; border-radius: 4px; white-space: pre-wrap; font-style: italic; color: #1e1208; font-size: 14px;">
                  "${message}"
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div style="text-align: center; margin-top: 30px; border-top: 3px double #5b3d1b; padding-top: 15px; font-size: 11px; color: #78350f;">
              ⚓ Sent from your grand portfolio bounty board ⚓
            </div>
          </div>
        </div>
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
