import { useEffect, useState } from "react";
import "../../styles/Testimonials.css";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Priya Sharma",
    review:
      "Amazing bridal makeup! I received so many compliments. Thank you for making my day special.",
  },
  {
    name: "Neha Verma",
    review:
      "Very professional service with premium products. Highly recommended!",
  },
  {
    name: "Simran Kaur",
    review:
      "Beautiful hairstyle and makeup. The staff was very friendly and cooperative.",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials" id="testimonials" data-aos="zoom-in-up">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>

        <div className="testimonial-card">
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>"{reviews[current].review}"</p>

          <h3>- {reviews[current].name}</h3>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;