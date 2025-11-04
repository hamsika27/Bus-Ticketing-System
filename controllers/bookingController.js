import Booking from "../models/Booking.js";

// ✅ Create Booking
export const createBooking = async (req, res) => {
  try {
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

// ✅ Get All Bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error("❌ Error fetching bookings:", error);
    res.status(500).json({ message: "Error fetching bookings", error: error.message });
  }
};

// ✅ Delete Booking (Newly Added)
export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Booking.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "✅ Booking deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting booking:", error);
    res.status(500).json({ message: "Error deleting booking", error: error.message });
  }
};