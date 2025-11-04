import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:10000/api/bookings");
        setBookings(response.data);
      } catch (err) {
        console.error(err);
        setError("❌ Failed to fetch bookings");
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>⏳ Loading bookings...</p>;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>📋 All Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table
          style={{
            margin: "20px auto",
            borderCollapse: "collapse",
            width: "80%",
            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead style={{ backgroundColor: "#007bff", color: "#fff" }}>
            <tr>
              <th style={cellStyle}>Name</th>
              <th style={cellStyle}>Source</th>
              <th style={cellStyle}>Destination</th>
              <th style={cellStyle}>Date</th>
              <th style={cellStyle}>Ticket ID</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id} style={{ textAlign: "center" }}>
                <td style={cellStyle}>{b.name}</td>
                <td style={cellStyle}>{b.source}</td>
                <td style={cellStyle}>{b.destination}</td>
                <td style={cellStyle}>
                  {new Date(b.date).toLocaleDateString()}
                </td>
                <td style={cellStyle}>{b._id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const cellStyle = {
  border: "1px solid #ddd",
  padding: "10px 15px",
};

export default ViewBookings;