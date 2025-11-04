import React, { useState } from "react";
import axios from "axios";

const CancelBooking = () => {
  const [bookingId, setBookingId] = useState("");
  const [message, setMessage] = useState("");

  const handleCancel = async (e) => {
    e.preventDefault();
    setMessage("Processing cancellation...");

    try {
      const response = await axios.delete(`http://localhost:10000/api/bookings/${bookingId}`);
      setMessage(response.data.message || "✅ Booking cancelled successfully!");
      setBookingId("");
    } catch (error) {
      setMessage("❌ Failed to cancel booking. Please check the booking ID.");
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>🚌 Cancel Your Booking</h2>
      <form onSubmit={handleCancel} style={styles.form}>
        <input
          type="text"
          placeholder="Enter Booking ID"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Cancel Booking</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    background: "#fff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    width: "400px",
    margin: "60px auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  message: {
    marginTop: "15px",
    color: "#333",
  },
};

export default CancelBooking;