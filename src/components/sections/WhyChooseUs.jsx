import "../../styles/WhyChooseUs.css";

const features = [
  {
    title: "Experienced Artist",
    description: "Professional beauty services with attention to every detail.",
    icon: "👩‍🎨",
  },
  {
    title: "Premium Products",
    description: "We use trusted and high-quality beauty products for every client.",
    icon: "💎",
  },
  {
    title: "Hygiene First",
    description: "Clean tools and a hygienic environment for your safety and comfort.",
    icon: "🧼",
  },
  {
    title: "Affordable Packages",
    description: "Luxury beauty services at reasonable prices.",
    icon: "💖",
  },
  {
    title: "Home Service Available",
    description: "Available on request.",
    icon: "🏠"
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose" id="why-choose" data-aos="zoom-in">
      <div className="container">
        <h2 className="section-title">Why Choose Us?</h2>

        <p className="section-subtitle">
          We are committed to making every client feel confident, beautiful,
          and special with personalized beauty services.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;