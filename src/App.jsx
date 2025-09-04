import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PortfolioLanding from "./PortfolioLanding";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import CursorFollower from "./components/CursorFollower";

const App = () => {
  return (
    <Router>
      <Navbar />
      <CursorFollower />
      <Routes>
        {/* Main route */}
        <Route path="/" element={<PortfolioLanding />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch all other routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
