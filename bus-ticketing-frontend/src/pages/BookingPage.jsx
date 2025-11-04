import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookingPage = () => {
  const navigate = useNavigate(); // ✅ define navigate here

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    from: "",
    to: "",
    date: "",
    seats: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://bus-ticketing-system-lgos.onrender.com/api/bookings", formData);
      alert("✅ Booking successful!");
      console.log(res.data);
      navigate("/payment"); // ✅ Redirect to payment page after success
    } catch (err) {
      console.error(err);
      alert("❌ Booking failed. Try again!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f6d365, #fda085)",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          width: "450px",
        }}
      >
        <h1 style={{ color: "#004aad", marginBottom: "20px", textAlign: "center" }}>
          🚌 Book Your Ticket
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="from"
            placeholder="From (City)"
            value={formData.from}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="to"
            placeholder="To (City)"
            value={formData.to}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="number"
            name="seats"
            min="1"
            placeholder="Seats"
            value={formData.seats}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "12px 20px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Proceed to Payment 💳
          </button>
        </form>
      </div>
    </div>
  );
};

// ✅ Input styling
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

export default BookingPage;