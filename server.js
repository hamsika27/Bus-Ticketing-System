// ✅ Import required modules
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// ✅ Load environment variables from .env file
dotenv.config();

// ✅ Initialize the app
const app = express();

// ✅ Middlewares
app.use(cors({
  origin: "*", // Allow all origins (or specify your frontend URL for more security)
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json()); // Parse JSON request bodies

// ✅ Import routes
import bookingRoutes from "./routes/bookingRoutes.js";
app.use("/api/bookings", bookingRoutes);

// ✅ Test route — used to check if backend is working
app.get("/api/test", (req, res) => {
  res.json({ message: "✅ Backend connected successfully!" });
});

// ✅ Default route (root)
app.get("/", (req, res) => {
  res.send("Welcome to the Bus Ticketing System backend!");
});

// ✅ Environment variables
const PORT = process.env.PORT || 10000;
const MONGO_URI = process.env.MONGO_URI;

// ✅ Connect to MongoDB Atlas and start the server
mongoose
  .connect(MONGO_URI, {
    serverSelectionTimeoutMS: 5000, // optional, avoids hanging connection
  })
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
    app.listen(PORT, () =>
      console.log(`🚀 Server running successfully on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });