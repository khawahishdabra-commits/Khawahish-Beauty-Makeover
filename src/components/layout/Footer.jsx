import "../../styles/Footer.css";
import { FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <h2>Khawahish Beauty Makeover</h2>

        <p>
          Enhancing your beauty with elegance and confidence.
        </p>

        <div className="footer-icons">

          <a
            href="https://wa.me/919306366233"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://instagram.com/khawahishbeautymakeover"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a href="tel:+919306366233">
            <FaPhoneAlt />
          </a>

        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Khawahish Beauty Makeover. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;