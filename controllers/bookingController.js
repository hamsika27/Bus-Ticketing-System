import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    console.log("📩 Booking request received:", req.body);

    const { name, email, from, to, date, seats } = req.body;

    if (!name || !email || !from || !to || !date || !seats) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBooking = new Booking({ name, email, from, to, date, seats });
    await newBooking.save();

    res.status(201).json({
      message: "✅ Booking successful!",
      booking: newBooking,
    });
  } catch (error) {
    console.error("❌ Error creating booking:", error);
    res.status(500).json({ message: "Error creating booking", error: error.message });
  }
};