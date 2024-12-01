import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import StationDetails from "./pages/StationDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/station/:id" element={<StationDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
