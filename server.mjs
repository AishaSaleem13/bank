import db from "./Config/db.mjs";
import app from "./index.mjs";

db.connection.once("open", () => console.log("✅ Connected to DB"))
  .on("error", (err) => console.log("❌ DB connection error -->", err));

if (process.env.NODE_ENV !== "vercel") {
  // Only start server locally
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
  });
}

export default app; // For Vercel serverless
