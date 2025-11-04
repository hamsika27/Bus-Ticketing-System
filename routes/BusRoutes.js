import express from "express";
import Bus from "../models/Bus.js";

const router = express.Router();

// Add a new bus
router.post("/add", async (req, res) => {
  try {
    const newBus = new Bus(req.body);
    await newBus.save();
    res.status(201).json({ message: "Bus added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add bus", details: error.message });
  }
});

// Get all buses
router.get("/", async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch buses", details: error.message });
  }
});

export default router;
