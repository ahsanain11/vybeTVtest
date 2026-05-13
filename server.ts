import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Resend lazily or check for key
  const getResend = () => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY is not set. Emails will not be sent.");
      return null;
    }
    return new Resend(apiKey);
  };

  // API Routes
  app.post("/api/trial-request", async (req, res) => {
    const { phone, email, packageName } = req.body;
    
    console.log("=========================================");
    console.log("NEW TRIAL REQUEST RECEIVED");
    console.log(`Package: ${packageName}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log("=========================================");

    const resend = getResend();
    if (resend) {
      try {
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
        console.log("Email sent successfully via Resend.");
      } catch (error) {
        console.error("Failed to send email via Resend:", error);
      }
    }

    res.json({ success: true, message: "Request received and lead logged." });
  });

  app.post("/api/contact-message", async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    console.log("=========================================");
    console.log("NEW CONTACT MESSAGE RECEIVED");
    console.log(`From: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log("=========================================");

    const resend = getResend();
    if (resend) {
      try {
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
        console.log("Support email sent successfully via Resend.");
      } catch (error) {
        console.error("Failed to send support email via Resend:", error);
      }
    }

    res.json({ success: true, message: "Message received." });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
