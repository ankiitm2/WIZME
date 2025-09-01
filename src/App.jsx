import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PortfolioLanding from "./PortfolioLanding";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main route */}
        <Route path="/" element={<PortfolioLanding />} />

        {/* Catch all other routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
