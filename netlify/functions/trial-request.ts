import { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { phone, email, packageName } = JSON.parse(event.body || "{}");

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set.");
      return { 
        statusCode: 200, 
        body: JSON.stringify({ success: true, message: "Lead logged (Email disabled)" }) 
      };
    }

    await resend.emails.send({
      from: 'VybeTV Leads <onboarding@resend.dev>',
      to: ['ahsankamboh11@gmail.com'],
      subject: `New Trial Request: ${packageName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #8b5cf6;">New Lead from VybeTV</h2>
          <p><strong>Package:</strong> ${packageName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">This request was generated from the VybeTV Premium website.</p>
        </div>
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Request received successfully." }),
    };
  } catch (error) {
    console.error("Netlify Function Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: "Internal Server Error" }),
    };
  }
};
