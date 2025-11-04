import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import ViewBookings from "./pages/ViewBookings.jsx";
import CancelBooking from "./pages/CancelBooking.jsx";
import About from "./pages/About.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";

function App() {
  return (
    <Router>
      {/* ✅ Navbar */}
      <nav
        style={{
          backgroundColor: "#007bff",
          padding: "15px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
          Home
        </Link>
        <Link to="/book" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
          Book Ticket
        </Link>
        <Link to="/view" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
          View Bookings
        </Link>
        <Link to="/cancel" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
          Cancel Booking
        </Link>
        <Link to="/about" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
          About
        </Link>
        <Link to="/contact" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
          Contact
        </Link>
      </nav>

      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/view" element={<ViewBookings />} />
        <Route path="/cancel" element={<CancelBooking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;