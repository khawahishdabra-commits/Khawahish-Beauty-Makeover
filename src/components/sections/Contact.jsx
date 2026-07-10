import "../../styles/Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact" data-aos="fade-left">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>

        <p className="section-subtitle">
          We'd love to help you look your best. Get in touch with us today!
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <h3><FaMapMarkerAlt /> Address</h3>
            <p>
              Vill. Jaipur Near Shiv Mandir
              <br />
              Distt. Yamuna Nagar
              <br />
              Haryana
            </p>
          </div>

          <div className="contact-card">
            <h3><FaPhoneAlt /> Phone</h3>
            <p>+91 9306366233</p>
          </div>

          <div className="contact-card">
            <h3><FaWhatsapp /> WhatsApp</h3>

            <a
              href="https://wa.me/919306366233"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="contact-card">
            <h3><FaInstagram /> Instagram</h3>
            
            <p>@khawahishbeautymakeover</p>
            
            <a
             href="https://www.instagram.com/khawahishbeautymakeover"
             target="_blank"
             rel="noopener noreferrer"
             className="instagram-btn"
            >
              Visit Instagram
            </a>
          </div>

          <div className="contact-card">
            <h3><FaClock /> Opening Hours</h3>
            <p>
              Monday - Sunday
              <br />
              9:00 AM – 7:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;