import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },        // ✅ passenger name
  email: { type: String, required: true },
  from: { type: String, required: true },        // ✅ starting point
  to: { type: String, required: true },          // ✅ destination
  date: { type: String, required: true },        // ✅ date of travel
  seats: { type: Number, required: true },       // ✅ number of seats
}, { timestamps: true }); // Optional: adds createdAt, updatedAt fields

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;