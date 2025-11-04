import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // ✅ Load environment variables first

const app = express();

// ✅ These 2 lines are VERY IMPORTANT
app.use(cors()); // Allows your frontend (React) to talk to backend
app.use(express.json()); // Allows backend to read JSON data in requests

// ✅ Import routes
import bookingRoutes from "./routes/bookingRoutes.js";
app.use("/api/bookings", bookingRoutes);

// ✅ Test route (for checking frontend-backend connection)
app.get("/api/test", (req, res) => {
  res.json({ message: "✅ Backend connected successfully!" });
});

// ✅ Default home route
app.get("/", (req, res) => {
  res.send("Welcome to the Bus Ticketing System backend!");
});

const PORT = process.env.PORT || 10000;
const MONGO_URI = process.env.MONGO_URI;

// ✅ Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));