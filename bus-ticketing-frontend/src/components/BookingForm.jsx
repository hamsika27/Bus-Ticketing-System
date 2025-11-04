import { useState } from "react";
import axios from "axios";

const BookingForm = ({ busId }) => {
  const [passenger, setPassenger] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://bus-ticketing-system-lgos.onrender.com/api/bookings", {
        busId,
        passenger,
      });
      setSuccess("🎉 Booking Successful!");
      setPassenger("");
    } catch (err) {
      console.error(err);
      setSuccess("❌ Booking Failed. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Book a Seat</h3>
      <input
        type="text"
        placeholder="Enter your name"
        value={passenger}
        onChange={(e) => setPassenger(e.target.value)}
        required
      />
      <button type="submit">Confirm Booking</button>
      {success && <p>{success}</p>}
    </form>
  );
};

export default BookingForm;