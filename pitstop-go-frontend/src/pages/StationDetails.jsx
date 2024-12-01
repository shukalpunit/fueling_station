import React from "react";
import { useParams } from "react-router-dom";

function StationDetails() {
  const { id } = useParams();
  // Fetch details using id
  return (
    <main style={{ padding: "20px" }}>
      <h2>Station Details</h2>
      <p>Details for station ID: {id}</p>
    </main>
  );
}

export default StationDetails;
