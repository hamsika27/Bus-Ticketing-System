import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  passengerName: { type: String, required: true },
  email: { type: String, required: true },
  busNumber: { type: String, required: true },
  dateOfTravel: { type: String, required: true },
  seats: { type: Number, required: true },
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;