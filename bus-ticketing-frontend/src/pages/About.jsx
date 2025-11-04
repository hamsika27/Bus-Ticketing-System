import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h2>🚌 About Our Bus Ticketing System</h2>
      <p style={styles.text}>
        The <strong>Bus Ticketing System</strong> is a smart, cloud-based web application
        designed to simplify bus travel booking and management.
      </p>
      <p style={styles.text}>
        Developed using <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>,
        it allows users to book, view, and cancel tickets seamlessly.
      </p>
      <p style={styles.text}>
        This project demonstrates how <strong>cloud computing</strong> enables scalable
        and reliable web applications using real-time database connections.
      </p>

      <div style={styles.techContainer}>
        <h3>💻 Technologies Used:</h3>
        <ul style={styles.list}>
          <li>Frontend: React.js + Vite</li>
          <li>Backend: Node.js + Express.js</li>
          <li>Database: MongoDB Atlas (Cloud)</li>
          <li>Deployment: Render (Cloud Hosting)</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "700px",
    margin: "50px auto",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "15px",
    color: "#333",
  },
  techContainer: {
    marginTop: "25px",
    textAlign: "left",
  },
  list: {
    lineHeight: "1.8",
    fontSize: "1rem",
    color: "#444",
  },
};

export default About;