import { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body || "{}");

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set.");
      return { 
        statusCode: 200, 
        body: JSON.stringify({ success: true, message: "Message received (Email disabled)" }) 
      };
    }

    await resend.emails.send({
      from: 'VybeTV Support <onboarding@resend.dev>',
      to: ['ahsankamboh11@gmail.com'],
      subject: `Support Message: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4cd7f6;">New Support Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">This message was sent via the VybeTV Contact Form.</p>
        </div>
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Message sent successfully." }),
    };
  } catch (error) {
    console.error("Netlify Function Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: "Internal Server Error" }),
    };
  }
};
