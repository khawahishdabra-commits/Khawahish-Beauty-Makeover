import { useState } from "react";
import "../../styles/Booking.css";

function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = () => {
    const text = `Hello Khawahish Beauty Makeover,

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Preferred Date: ${form.date}

Message:
${form.message}`;

    window.open(
      `https://wa.me/919306366233?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="booking" id="booking" data-aos="fade-right">
      <div className="container">

        <h2 className="section-title">
          Book Your Appointment
        </h2>

        <p className="section-subtitle">
          Fill in your details and we'll connect with you on WhatsApp.
        </p>

        <div className="booking-form">

          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
          >
            <option value="">Select Service</option>
            <option>Bridal Makeup</option>
            <option>Party Makeup</option>
            <option>Hair Styling</option>
            <option>Hair Spa</option>
            <option>Facial</option>
            <option>Mehndi</option>
            <option>Nail Art</option>
            <option>Skin Care</option>
          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <textarea
            rows="5"
            placeholder="Additional Message"
            name="message"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button onClick={handleBooking}>
            Book on WhatsApp
          </button>

        </div>

      </div>
    </section>
  );
}

export default Booking;