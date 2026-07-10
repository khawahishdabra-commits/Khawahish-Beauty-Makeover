import "../../styles/About.css";

function About() {
  return (
    <section className="about" id="about" data-aos="fade-up">
      <div className="about-container">
        <div className="about-content">
          <h2>About Us</h2>

          <h3>Khawahish Beauty Makeover</h3>

          <p>
            Welcome to <strong>Khawahish Beauty Makeover</strong>, where beauty
            meets elegance. Led by <strong>Mrs. Reena</strong>, we specialize in
            bridal makeup, party makeup, hair styling, skin care, nail art, and
            mehndi.
          </p>

          <p>
            Our mission is to make every client feel beautiful, confident, and
            special through personalized beauty services using premium-quality
            products in a hygienic and comfortable environment.
          </p>

          <ul className="about-list">
            <li>✨ Bridal Makeup Specialist</li>
            <li>✨ Premium Beauty Products</li>
            <li>✨ Hygiene & Safety First</li>
            <li>✨ Personalized Beauty Consultation</li>
          </ul>

          <a
            href="https://wa.me/919306366233?text=Hello%20Mrs.%20Reena,%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="about-btn"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;