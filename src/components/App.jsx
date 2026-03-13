import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/global.css";

/* Pages */
import LandingPage from "./LandingPage";
import LandingAbout from "./LandingAbout";
import MainPage from "./MainPage";
import Login from "./Login";
import Register from "./Register";
import Privacy from "./Privacy";
import Terms from "./Terms";

function App() {
  return (
    <Router>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/landAbout" element={<LandingAbout />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main Scroll Page (Single Page Layout) */}
        <Route path="/home" element={<MainPage />} />
        <Route path="/about" element={<MainPage />} />
        <Route path="/testimonials" element={<MainPage />} />
        <Route path="/faqs" element={<MainPage />} />
        <Route path="/contact" element={<MainPage />} />

        {/* Footer Pages */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

      </Routes>
    </Router>
  );
}

export default App;