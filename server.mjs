import db from "./Config/db.mjs";
import app from "./index.mjs";

// Connect to DB only if not already connected
if (!db.connection.readyState) {
  db.connection.once("open", () => console.log("✅ Connected to DB"))
               .on("error", (err) => console.log("❌ DB connection error -->", err));
}

export default app; // Export app for Vercel serverless
