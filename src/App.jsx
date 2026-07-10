import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Gallery from "./components/sections/Gallery";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import Booking from "./components/sections/Booking";
import Contact from "./components/sections/Contact";
import FloatingButtons from "./components/layout/FloatingButtons";
import Footer from "./components/layout/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Gallery />
      <Services />
      <Testimonials />
      <Booking />
      <Contact />
      <FloatingButtons />
      <Footer />
    </>
  );
}

export default App;