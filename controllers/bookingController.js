import Booking from "../models/bookingModel.js";

// ✅ Create a new booking
export const createBooking = async (req, res) => {
  try {
    const { name, email, busNumber, seats } = req.body;

    const newBooking = new Booking({
      name,
      email,
      busNumber,
      seats,
    });

    await newBooking.save();
    res.status(201).json({ message: "Booking created successfully", newBooking });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error: error.message });
  }
};

// ✅ Get all bookings
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error: error.message });
  }
};