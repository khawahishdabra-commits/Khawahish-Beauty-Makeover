import "../../styles/Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    review:
      "The bridal makeup was absolutely stunning. I received so many compliments throughout the wedding.",
  },
  {
    id: 2,
    name: "Neha Verma",
    review:
      "Very professional service and beautiful hairstyling. The staff was friendly and made me feel comfortable.",
  },
  {
    id: 3,
    name: "Riya Gupta",
    review:
      "Amazing experience! The makeup lasted the entire day and looked completely natural.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials" data-aos="fade-left">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>

        <p className="section-subtitle">
          We are proud to make every client feel confident and beautiful.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <div className="stars">★★★★★</div>

              <p className="review">
                "{item.review}"
              </p>

              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;