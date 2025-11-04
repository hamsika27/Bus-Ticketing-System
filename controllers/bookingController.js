import Booking from "../models/Booking.js";

// ✅ Create a new booking
export const createBooking = async (req, res) => {
  try {
    console.log("📩 Received booking data:", req.body);

    const { name, email, from, to, date, seats } = req.body;

    // Validate required fields
    if (!name || !email || !from || !to || !date || !seats) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create and save new booking
    const newBooking = new Booking({ name, email, from, to, date, seats });
    await newBooking.save();

    res.status(201).json({
      message: "✅ Booking successful!",
      booking: newBooking,
    });
  } catch (error) {
    console.error("❌ Booking failed:", error);
    res.status(500).json({ message: "❌ Booking failed. Try again.", error });
  }
};