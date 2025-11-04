import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [isPaid, setIsPaid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (!formData.cardName || !formData.cardNumber || !formData.expiry || !formData.cvv) {
      alert("⚠️ Please fill all the fields!");
      return;
    }

    // Simulate payment success
    setIsPaid(true);
    setTimeout(() => {
      alert("✅ Payment Successful! Your ticket has been booked.");
      navigate("/"); // Redirect to home
    }, 1500);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(120deg, #f6d365, #fda085)",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          width: "420px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#004aad", marginBottom: "20px" }}>💳 Secure Payment</h2>

        {!isPaid ? (
          <form onSubmit={handlePayment}>
            <input
              type="text"
              name="cardName"
              placeholder="Cardholder Name"
              value={formData.cardName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number (xxxx-xxxx-xxxx-xxxx)"
              maxLength="19"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                maxLength="5"
                value={formData.expiry}
                onChange={handleChange}
                required
                style={{ ...inputStyle, width: "50%" }}
              />
              <input
                type="password"
                name="cvv"
                placeholder="CVV"
                maxLength="3"
                value={formData.cvv}
                onChange={handleChange}
                required
                style={{ ...inputStyle, width: "50%" }}
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "#28a745",
                color: "white",
                padding: "12px",
                border: "none",
                borderRadius: "8px",
                marginTop: "20px",
                cursor: "pointer",
                width: "100%",
                fontSize: "1rem",
              }}
            >
              Pay Now 💸
            </button>
          </form>
        ) : (
          <div style={{ marginTop: "30px" }}>
            <h3 style={{ color: "green" }}>✅ Payment Successful!</h3>
            <p>Your ticket has been booked successfully.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Input field style
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

export default PaymentPage;