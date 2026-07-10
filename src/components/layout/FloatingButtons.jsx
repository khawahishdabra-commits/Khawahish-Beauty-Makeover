import "../../styles/FloatingButtons.css";

import { FaPhoneAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";

function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a
        href="tel:+919306366233"
        className="floating-btn call"
        title="Call Us"
      >
        <FaPhoneAlt />
      </a>

      <a
        href="https://wa.me/919306366233"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp"
        title="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <a
        href="https://instagram.com/khawahishbeautymakeover"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn instagram"
        title="Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
}

export default FloatingButtons;