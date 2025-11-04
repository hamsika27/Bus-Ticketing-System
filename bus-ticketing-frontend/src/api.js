const API_BASE_URL = "http://localhost:10000/api/bookings";

export const createBooking = async (bookingData) => {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookingData),
  });
  return response.json();
};

export const getBookings = async () => {
  const response = await fetch(API_BASE_URL);
  return response.json();
};