import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        textAlign: "center",
        color: "#333",
        padding: "40px",
      }}
    >
      {/* 🚌 Bus Image from public folder */}
      <img src="/images.png" alt="Bus Icon" style={{ width: "180px", height: "180px", marginBottom: "30px" }} />

      <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#004aad" }}>
        Welcome to the Bus Ticketing System
      </h1>

      <p style={{ fontSize: "1.1rem", marginBottom: "30px" }}>
        Book your tickets easily and travel with comfort!
      </p>

      <button
        onClick={() => navigate("/book")}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "12px 25px",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        🚌 Book My Ticket
      </button>
    </div>
  );
};

export default HomePage;