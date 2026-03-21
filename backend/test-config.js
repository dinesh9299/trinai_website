require("dotenv").config();
const nodemailer = require("nodemailer");
const axios = require("axios");

console.log("🔍 Validating Configuration...\n");

// 1. Check required env vars
const required = [
  "SMTP_HOST",
  "SMTP_USER",
  "SMTP_PASS",
  "TURNSTILE_SECRET_KEY",
  "FRONTEND_URL",
];
const missing = required.filter((key) => !process.env[key]);
if (missing.length > 0) {
  console.error("❌ Missing env vars:", missing);
  process.exit(1);
}
console.log("✅ All required env vars present");

// 2. Test SMTP connection
console.log("📧 Testing SMTP connection...");
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP Error:", error.message);
    console.log("\n💡 Common fixes:");
    console.log("  • Ensure 2-Step Verification is enabled on Google account");
    console.log("  • Use a NEW App Password (not your regular password)");
    console.log("  • Remove spaces from SMTP_PASS in .env");
    console.log("  • Try SMTP_PORT=465 with SMTP_SECURE=true");
  } else {
    console.log("✅ SMTP connection successful!");

    // 3. Test Turnstile secret (basic format check)
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (
      secret.startsWith("0x4AAAA") ||
      secret.startsWith("1x") ||
      secret.startsWith("2x")
    ) {
      console.log("✅ Turnstile Secret Key format looks valid");
    } else {
      console.warn(
        "⚠️ Turnstile Secret Key format unexpected — double-check it's the Secret Key (not Site Key)",
      );
    }

    console.log(
      "\n🎉 Configuration validated! Ready to test your contact form.",
    );
    console.log(`🌐 Frontend allowed: ${process.env.FRONTEND_URL}`);
    console.log(`📧 Emails will send from: ${process.env.FROM_EMAIL}`);
  }
  process.exit(0);
});
