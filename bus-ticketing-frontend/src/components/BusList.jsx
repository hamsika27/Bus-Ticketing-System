import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BusList = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    axios.get("https://bus-ticketing-system-lgos.onrender.com/api/buses")
      .then((res) => setBuses(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bus-list">
      <h2>Available Buses</h2>
      {buses.length === 0 ? (
        <p>No buses available right now.</p>
      ) : (
        <ul>
          {buses.map((bus) => (
            <li key={bus._id}>
              <h3>{bus.name}</h3>
              <p>{bus.source} → {bus.destination}</p>
              <p>Seats: {bus.seats} | Fare: ₹{bus.fare}</p>
              <Link to={`/book/${bus._id}`}>Book Now</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BusList;