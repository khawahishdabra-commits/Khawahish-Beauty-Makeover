import { useState } from "react";
import "../../styles/Booking.css";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919306366233"; // Mrs. Reena's WhatsApp number

    const whatsappMessage = `Hello Khawahish Beauty Makeover,

I would like to book an appointment.

👤 Name: ${formData.name}

📱 Phone: ${formData.phone}

💄 Service: ${formData.service}

📅 Preferred Date: ${formData.date}

💬 Message:
${formData.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="booking" id="booking" data-aos="zoom-in-up">
      <div className="container">
        <h2 className="section-title">Book Your Appointment</h2>

        <p className="section-subtitle">
          We'd love to make you look your best. Fill out the form below and
          we'll contact you through WhatsApp.
        </p>

        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>
            <option value="Bridal Makeup">Bridal Makeup</option>
            <option value="Party Makeup">Party Makeup</option>
            <option value="Hair Styling">Hair Styling</option>
            <option value="Mehndi">Mehndi</option>
            <option value="Nail Art">Nail Art</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Tell us about your requirements..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Book on WhatsApp</button>
        </form>
      </div>
    </section>
  );
}

export default Booking;