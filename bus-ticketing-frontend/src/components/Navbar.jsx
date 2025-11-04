import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Bus Ticketing System</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/book">Book Ticket</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/view-bookings">View Bookings</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;