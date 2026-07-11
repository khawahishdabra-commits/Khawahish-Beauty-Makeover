import { FaWhatsapp } from "react-icons/fa";
import "../../styles/FloatingWhatsApp.css";

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919306366233?text=Hello%20Khawahish%20Beauty%20Makeover,%20I%20would%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default FloatingWhatsApp;