// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" style={styles.link}>Go back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "80px 20px",
    backgroundColor: "#f3faf3",
    height: "100vh",
  },
  title: {
    fontSize: "5rem",
    color: "#3b7a57",
    marginBottom: "10px",
  },
  message: {
    fontSize: "1.2rem",
    color: "#555",
  },
  link: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#a8e6cf",
    color: "#2e4f3e",
    borderRadius: "8px",
    textDecoration: "none",
  },
};

export default NotFound;