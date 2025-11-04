import express from "express";
import { createBooking, getAllBookings, deleteBooking } from "../controllers/bookingController.js";

const router = express.Router();

// ✅ Create a new booking
router.post("/", createBooking);

// ✅ Get all bookings
router.get("/", getAllBookings);

// ✅ Delete a booking by ID
router.delete("/:id", deleteBooking);

export default router;