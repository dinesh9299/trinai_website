require("dotenv").config();
const axios = require("axios");

async function quickTest() {
  console.log("🧪 Running quick integration test...\n");

  // Test 1: Health endpoint
  try {
    const health = await axios.get("http://localhost:3001/api/health");
    console.log("✅ Health check:", health.data.status);
  } catch (e) {
    console.error("❌ Backend not running? Start with: node server.js");
    return;
  }

  // Test 2: Simulate form submission (without Turnstile for quick test)
  try {
    const response = await axios.post("http://localhost:3001/api/send-email", {
      name: "Quick Test",
      email: "test@localhost",
      phone: "1234567890",
      message: "Quick integration test",
      turnstileToken: "0x4AAAAAA" + "A".repeat(50), // Dummy token for structure test
    });
    console.log(
      "✅ API responded:",
      response.data.success ? "Success" : "Failed",
    );
  } catch (e) {
    if (e.response?.data?.error?.includes("verification")) {
      console.log(
        "✅ API working! (Turnstile rejection expected without real token)",
      );
    } else {
      console.error("❌ API error:", e.response?.data || e.message);
    }
  }

  console.log(
    "\n🎯 Next: Test full form in browser at http://localhost:5173/contact",
  );
}
quickTest();
