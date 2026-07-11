import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo/logo.png";
import "../../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
  const sections = document.querySelectorAll("section");

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        setActiveSection(section.getAttribute("id"));
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <header className="navbar">
      <div className="container navbar-container">
        
        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <img
            src={logo}
            alt="Khawahish Beauty Makeover"
            className="logo-img"
          />

          <div className="logo-text">
            <h2>Khawahish</h2>
            <span>Beauty Makeover</span>
          </div>
        </a>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <a 
           href="#home" 
           onClick={closeMenu}
           className={activeSection === "home" ? "active" : ""}
          >
            Home
          </a>

          <a 
           href="#about" 
           onClick={closeMenu}
           className={activeSection === "about" ? "active" :""}
           >
            About
          </a>

          <a
           href="#services"
           onClick={closeMenu}
           className={activeSection === "services" ? "active" : ""}
          >
           Services
          </a>

          <a 
           href="#gallery" 
           onClick={closeMenu}
           className={activeSection === "gallery" ? "active" :""}
          >
            Gallery
          </a>

          <a 
           href="#testimonials" 
           onClick={closeMenu}
           className={activeSection === "testimonials" ? "active" :""}
           >
            Reviews
          </a>

          <a href="#booking" 
          onClick={closeMenu}
          className={activeSection === "booking" ? "active" : ""}
          >
            Book Now
          </a>

          <a href="#contact" 
          onClick={closeMenu}
          className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
        