const express = require("express");
const app = express();

// Middleware to read JSON data from requests
app.use(express.json());

// Route 1: Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Bus Ticketing and Payment System!");
});

// Route 2: View available buses
app.get("/buses", (req, res) => {
  const buses = [
    { id: 1, name: "GreenLine Express", seats: 40, available: 12 },
    { id: 2, name: "BlueStar Travels", seats: 50, available: 5 },
  ];
  res.json(buses);
});

// Route 3: Book a seat
app.post("/book", (req, res) => {
  const { busId, passengerName } = req.body;
  if (!busId || !passengerName) {
    return res.status(400).json({ message: "Missing booking details!" });
  }
  res.json({
    message: `Seat booked successfully for ${passengerName} on Bus ${busId}`,
  });
});

// Route 4: Payment
app.post("/payment", (req, res) => {
  const { amount, method } = req.body;
  if (!amount || !method) {
    return res.status(400).json({ message: "Payment details missing!" });
  }
  res.json({ message: `Payment of ₹${amount} made via ${method} successful!` });
});

const PORT = 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
