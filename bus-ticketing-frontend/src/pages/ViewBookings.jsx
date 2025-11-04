import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewBookings() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  // ✅ Use your deployed backend URL on Render
  const API_URL = "https://bus-ticketing-system-lgos.onrender.com/api/bookings";

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(API_URL);
        setBookings(response.data);
      } catch (err) {
        console.error("❌ Error fetching bookings:", err);
        setError("⚠️ Cannot fetch booking data. Please try again later.");
      }
    };

    fetchBookings();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        padding: "40px",
        color: "#333",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          padding: "30px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          🚌 Your Bookings
        </h2>

        {error && (
          <p style={{ color: "red", textAlign: "center", marginBottom: "20px" }}>
            {error}
          </p>
        )}

        {bookings.length === 0 ? (
          <p style={{ textAlign: "center" }}>No bookings found.</p>
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "center",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#007bff", color: "white" }}>
                <th style={{ padding: "10px" }}>Name</th>
                <th style={{ padding: "10px" }}>Email</th>
                <th style={{ padding: "10px" }}>From</th>
                <th style={{ padding: "10px" }}>To</th>
                <th style={{ padding: "10px" }}>Date</th>
                <th style={{ padding: "10px" }}>Seats</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b._id}>
                  <td style={{ padding: "10px" }}>{b.name}</td>
                  <td style={{ padding: "10px" }}>{b.email}</td>
                  <td style={{ padding: "10px" }}>{b.from}</td>
                  <td style={{ padding: "10px" }}>{b.to}</td>
                  <td style={{ padding: "10px" }}>{b.date}</td>
                  <td style={{ padding: "10px" }}>{b.seats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ViewBookings;