import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Gallery from "./components/sections/Gallery";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import Booking from "./components/sections/Booking";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Services />
      <Booking />
      <Contact />
      <Footer />

      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}

export default App;