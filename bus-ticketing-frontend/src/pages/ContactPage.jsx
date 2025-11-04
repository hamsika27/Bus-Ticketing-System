import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.text}>
        Have questions about your booking or need support? We’re here to help!
      </p>

      <div style={styles.infoBox}>
        <p><strong>Email:</strong> support@busticketing.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> 123 Main Road, Bangalore, India</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  heading: {
    color: "#0077b6",
    fontSize: "32px",
    marginBottom: "15px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  infoBox: {
    display: "inline-block",
    textAlign: "left",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 8px rgba(0,0,0,0.1)",
  },
};

export default Contact;