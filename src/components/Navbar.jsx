import { useState } from "react";
import "./Navbar.css";

function Navbar({ goToAnalysis }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">✦</span>
        <h2>
          ProfitPilot<span>AI</span>
        </h2>
      </div>

      {/* Desktop / Mobile Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#features" onClick={closeMenu}>
          Features
        </a>

        <a href="#how-it-works" onClick={closeMenu}>
          How It Works
        </a>

        <a href="#pricing" onClick={closeMenu}>
          Pricing
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <button
          className="mobile-nav-btn"
          onClick={() => {
            goToAnalysis();
            closeMenu();
          }}
        >
          Get Started →
        </button>
      </div>

      {/* Desktop Button */}
      <button className="nav-btn" onClick={goToAnalysis}>
        Get Started →
      </button>

      {/* Hamburger */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
    </nav>
  );
}

export default Navbar;