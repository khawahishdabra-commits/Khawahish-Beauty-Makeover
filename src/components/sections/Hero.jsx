import "../../styles/Hero.css";
import heroImage from "../../assets/images/hero/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      data-aos="fade-up"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroImage})`,
      }}
    >

      <div className="hero-content">
        <p className="welcome">✨ Welcome To</p>

        <h1>Khawahish Beauty Makeover</h1>

        <h2>Enhancing Your Natural Beauty</h2>

        <p className="description">
          Bridal Makeup • Party Makeup • Hair Styling • Nail Art • Mehndi • Skin Care
        </p>

        <div className="hero-buttons">
          <a
            href="https://wa.me/919306366233?text=Hello%20Mrs.%20Reena,%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="book-btn"
          >
            Book Appointment
          </a>

          <a href="#services" className="service-btn">
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;