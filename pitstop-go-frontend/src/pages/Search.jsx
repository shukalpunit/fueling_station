import React, { useState } from "react";
import StationList from "../components/StationList";

function Search() {
  const [query, setQuery] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", query);
  };

  return (
    <main style={{ padding: "20px" }}>
      <h2>Search for Fuel Stations</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter location or station name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {/* Pass query as a prop to StationList */}
      <StationList query={query} />
    </main>
  );
}

export default Search;
