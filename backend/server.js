// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3001;

// 🔧 ROBUST CORS - Handles trailing slashes & multiple dev ports
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
  "http://127.0.0.1:5175",
  process.env.FRONTEND_URL?.replace(/\/$/, ""),
]
  .filter(Boolean)
  .map((origin) => origin.replace(/\/$/, ""));

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      const normalizedOrigin = origin.replace(/\/$/, "");
      if (allowedOrigins.includes(normalizedOrigin)) {
        callback(null, true);
      } else {
        console.warn("❌ CORS blocked for origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// 🛡️ Cloudflare Turnstile Validation (Server-Side)
async function validateTurnstile(token, remoteIP) {
  try {
    // ✅ FIX #1: No trailing spaces in URL
    const response = await axios.post(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: remoteIP,
      },
      {
        headers: { "Content-Type": "application/json" },
        timeout: 5000,
      },
    );
    return response.data;
  } catch (error) {
    console.error("❌ Turnstile API Error:", error.message);
    return { success: false, "error-codes": ["internal-error"] };
  }
}

// 📧 POST /api/send-email - Main Email Handler
app.post("/api/send-email", async (req, res) => {
  console.log("📩 Received email request:", {
    name: req.body.name,
    email: req.body.email,
    timestamp: new Date().toISOString(),
  });

  try {
    const { name, email, phone, message, turnstileToken } = req.body;
    const remoteIP =
      req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;

    // 🔐 1. Validate Turnstile Token
    if (!turnstileToken || turnstileToken.length < 10) {
      console.warn("⚠️ Missing/invalid Turnstile token");
      return res.status(400).json({
        success: false,
        error: "Security verification required. Please complete CAPTCHA.",
      });
    }

    const turnstileResult = await validateTurnstile(turnstileToken, remoteIP);

    if (!turnstileResult.success) {
      console.error(
        "❌ Turnstile validation failed:",
        turnstileResult["error-codes"],
      );
      return res.status(400).json({
        success: false,
        error: "Security verification failed. Please try again.",
      });
    }
    console.log("✅ Turnstile validated successfully");

    // ✍️ 2. Validate Form Data
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return res
        .status(400)
        .json({ success: false, error: "All fields are required" });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid email format" });
    }

    // 📬 3. Create SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2",
      },
      logger: true,
      debug: false,
    });

    // 🔍 4. Verify SMTP Connection
    try {
      await transporter.verify();
      console.log("✅ SMTP connection verified successfully");
    } catch (smtpError) {
      console.error("❌ SMTP Connection Failed:", smtpError.message);
      return res.status(500).json({
        success: false,
        error: "Email service configuration error. Please contact support.",
      });
    }

    // 📝 5. Prepare Email Content
    const formattedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const mailOptions = {
      from: `"${name}" <${process.env.FROM_EMAIL}>`,
      to: process.env.FROM_EMAIL,
      replyTo: email,
      subject: `📨 New Contact: ${name} - Trinai Website`,
      text: `
NEW CONTACT FORM SUBMISSION
============================
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

---
Sent: ${formattedDate} (IST)
IP: ${remoteIP}
      `.trim(),
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #00ADE7 0%, #305292 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0;">📨 New Contact Form Submission</h2>
          </div>
          <div style="border: 1px solid #e2e8f0; border-top: none; padding: 20px; border-radius: 0 0 10px 10px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Name:</td><td style="padding: 8px 0;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #00ADE7;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td><td style="padding: 8px 0;">${phone}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #475569; vertical-align: top;">Message:</td><td style="padding: 8px 0;">${message.replace(/\n/g, "<br>")}</td></tr>
            </table>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;">
            <p style="font-size: 12px; color: #64748b;">Sent: ${formattedDate} (IST)</p>
          </div>
        </body>
        </html>
      `,
    };

    // 🚀 6. Send the Email
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully! Message ID:", info.messageId);

    res.status(200).json({
      success: true,
      message: "Message sent successfully! We'll get back to you soon.",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("❌ Critical Error in /api/send-email:", {
      message: error.message,
      code: error.code,
    });

    res.status(500).json({
      success: false,
      error: "Failed to send message. Please try again later.",
    });
  }
});

// 🏓 Health Check Endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "trinai-contact-api",
    timestamp: new Date().toISOString(),
  });
});

// 🌐 Start Server
app.listen(PORT, () => {
  console.log(
    `
🚀 Trinai Contact API Server Started!
=====================================
📍 Port: ${PORT}
🌐 Frontend Allowed: ${allowedOrigins.join(", ")}
📧 SMTP Host: ${process.env.SMTP_HOST}
🔐 Turnstile: ${process.env.TURNSTILE_SECRET_KEY?.startsWith("1x") || process.env.TURNSTILE_SECRET_KEY?.startsWith("2x") ? "✅ Configured" : "⚠️ Check Secret Key format"}
=====================================
✅ Server ready to accept requests!
  `.trim(),
  );
});

process.on("SIGINT", () => {
  console.log("\n👋 Shutting down server...");
  process.exit(0);
});
