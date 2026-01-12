import { useState } from "react";

export default function Packages() {
  const [places, setPlaces] = useState([]);

  return (
    <div className="container">
      <h2>Packages</h2>
      <button onClick={() => setPlaces(["Pokhara", "Kathmandu", "Chitwan"])}>
        Family Tour
      </button>

      <ul>
        {places.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
