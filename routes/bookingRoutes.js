import express from "express";
import { createBooking, getAllBookings, deleteBooking } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", createBooking); // create new booking
router.get("/", getAllBookings); // get all bookings
router.delete("/:id", deleteBooking); // delete booking

export default router;