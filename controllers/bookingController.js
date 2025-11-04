import Booking from "../models/Booking.js";

// ✅ Create a new booking
export const createBooking = async (req, res) => {
  try {
    const { name, email, from, to, date, seats } = req.body;

    // ✅ Validation
    if (!name || !email || !from || !to || !date || !seats) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBooking = new Booking({
      name,
      email,
      from,
      to,
      date,
      seats,
    });

    await newBooking.save(); // ✅ This saves it to MongoDB!

    res.status(201).json({
      message: "✅ Booking saved successfully!",
      booking: newBooking,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({
      message: "Error creating booking",
      error: error.message,
    });
  }
};

// ✅ Fetch all bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
};

// ✅ Delete a booking
export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    await Booking.findByIdAndDelete(id);
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting booking" });
  }
};