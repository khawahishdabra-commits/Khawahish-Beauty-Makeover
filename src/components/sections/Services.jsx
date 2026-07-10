import "../../styles/Services.css";
import services from "../../data/services";

function Services() {
  return (
    <section className="services" id="services" data-aos="fade-left">
      <div className="container">
        <h2 className="section-title">Our Services</h2>

        <p className="section-subtitle">
          Discover our premium beauty services designed to make you look and
          feel your best.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a
                href="https://wa.me/919306366233?text=Hello%20Mrs.%20Reena,%20I%20want%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="service-btn"
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;