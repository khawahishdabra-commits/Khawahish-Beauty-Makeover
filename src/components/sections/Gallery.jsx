import { useState } from "react";
import "../../styles/Gallery.css";


import bridal1 from "../../assets/images/gallery/bridal1.jpg";
import bridal2 from "../../assets/images/gallery/bridal2.jpg";
import bridal3 from "../../assets/images/gallery/bridal3.jpg";
import bridal4 from "../../assets/images/gallery/bridal4.jpg";
import hair2 from "../../assets/images/gallery/hair2.jpg";
import hair3 from "../../assets/images/gallery/hair3.jpg";
import engagement_makeup from "../../assets/images/gallery/engagement_makeup.jpg";
import engagement_makeup1 from "../../assets/images/gallery/engagement_makeup1.jpg";


const galleryImages = [
  { id: 1, 
    image: bridal1, 
    title: "Bridal Makeup",
    category: "Bridal",
  },
  { id: 2, 
    image: bridal2, 
    title: "Bridal Makeup",
    category: "Bridal",
  },
  { id: 3, 
    image: bridal3, 
    title: "Bridal Makeup",
    category: "Bridal",
  },
  { id: 4, 
    image: bridal4, 
    title: "Bridal Makeup",
    category: "Bridal",
  },
  { id: 5, 
    image: hair2, 
    title: "HairStyling",
    category: "Hair",
  },
  { id: 6, 
    image: hair3, 
    title: "HairStyling",
    category: "Hair",
  },
  { id: 7, 
    image: engagement_makeup, 
    title: "Engagement Makeup",
    category: "Engagement Makeup",
  },
  { id: 8, 
    image: engagement_makeup1, 
    title: "Engagement Makeup",
    category: "Engagement Makeup",
  },
];


function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (photo) => photo.category === activeCategory
        );

  const currentIndex = filteredImages.findIndex(
    (photo) => photo.id === selectedImage?.id
  );

  const showPrevious = () => {
    const previousIndex =
      currentIndex === 0
        ? filteredImages.length - 1
        : currentIndex - 1;

    setSelectedImage(filteredImages[previousIndex]);
  };

  const showNext = () => {
    const nextIndex =
      currentIndex === filteredImages.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <section className="gallery" id="gallery" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Our Gallery</h2>

        <p className="section-subtitle">
          A glimpse of the beautiful transformations created at
          Khawahish Beauty Makeover.
        </p>

        {/* Filter Buttons */}

        <div className="gallery-filter">
          <button
            className={activeCategory === "All" ? "active" : ""}
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>

          <button
            className={activeCategory === "Bridal" ? "active" : ""}
            onClick={() => setActiveCategory("Bridal")}
          >
            Bridal
          </button>

          <button
            className={activeCategory === "Hair" ? "active" : ""}
            onClick={() => setActiveCategory("Hair")}
          >
            Hair
          </button>
        </div>

        {/* Gallery Grid */}

        <div className="gallery-grid">
          {filteredImages.map((photo) => (
            <div
              className="gallery-card"
              key={photo.id}
              onClick={() => setSelectedImage(photo)}
            >
              <img 
               src={photo.image} 
               alt={photo.title} 
               loading="lazy"
              />

              <div className="gallery-overlay">
                <h3>{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}

        {selectedImage && (
          <div
            className="lightbox"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className="close-btn"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </span>

              <button
                className="prev-btn"
                onClick={showPrevious}
              >
                ❮
              </button>

              <button
                className="next-btn"
                onClick={showNext}
              >
                ❯
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
              />

              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
