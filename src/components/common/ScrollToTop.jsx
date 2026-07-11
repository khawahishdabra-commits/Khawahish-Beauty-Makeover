import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../../styles/ScrollToTop.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        className="scroll-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    )
  );
}

export default ScrollToTop;