import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "../../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="logo">
        <span>Khawahish</span> Beauty Makeover
      </div>

      {/* Mobile Menu Button */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={menuOpen ? "nav active" : "nav"}>
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>

          <li>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        <a
          href="https://wa.me/919306366233?text=Hello%20Mrs.%20Reena,%20I%20would%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="book-now"
          onClick={() => setMenuOpen(false)}
        >
          Book Now
        </a>
      </nav>
    </header>
  );
}

export default Navbar;