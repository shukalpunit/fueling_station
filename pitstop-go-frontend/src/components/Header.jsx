import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: "10px", background: "#282c34", color: "white" }}>
      <h1>Pitstop Go</h1>
      <nav>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/search" style={{ margin: "0 10px" }}>Search Stations</Link>
      </nav>
    </header>
  );
}

export default Header;
