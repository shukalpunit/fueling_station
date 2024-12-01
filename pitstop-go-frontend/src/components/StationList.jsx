import React from "react";
import StationCard from "./StationCard";

function StationList({ query }) {
  const stations = []; // Replace with fetched station data.

  return (
    <section>
      <h3>Search Results</h3>
      {stations.length > 0 ? (
        stations.map((station) => (
          <StationCard key={station.id} station={station} />
        ))
      ) : (
        <p>No stations found for "{query}"</p>
      )}
    </section>
  );
}

export default StationList;
