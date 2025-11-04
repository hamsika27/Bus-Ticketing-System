import express from "express";
import { createBooking, getBookings } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", createBooking); // Create booking
router.get("/", getBookings); // Get all bookings

export default router;