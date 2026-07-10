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
  { id: 1, image: bridal1, title: "Bridal Makeup"},
  { id: 2, image: bridal2, title: "Bridal Makeup"},
  { id: 3, image: bridal3, title: "Bridal Makeup"},
  { id: 4, image: bridal4, title: "Bridal Makeup"},
  { id: 5, image: hair2, title: "HairStyling"},
  { id: 6, image: hair3, title: "HairStyling"},
  { id: 7, image: engagement_makeup, title: "Engagement Makeup"},
  { id: 8, image: engagement_makeup1, title: "Engagement Makeup"},
];


function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const nextImage = () => {
    setSelectedImage((selectedImage + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (selectedImage - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <>
      <section className="gallery" id="gallery" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Our Signature Looks</h2>

          <p className="section-subtitle">
            Every look is crafted with passion, creativity, and attention to
            detail.
          </p>

          <div className="gallery-grid">
            {galleryImages.map((photo, index) => (
              <div
                className="gallery-card"
                key={photo.id}
                onClick={() => setSelectedImage(index)}
              >
                <img src={photo.image} alt={photo.title} />

                <div className="gallery-overlay">
                  <h3>{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div className="lightbox">

          <button className="close-btn" onClick={() => setSelectedImage(null)}>
            ✕
          </button>

          <button className="prev-btn" onClick={prevImage}>
            ❮
          </button>

          <img
            src={galleryImages[selectedImage].image}
            alt=""
            className="lightbox-image"
          />

          <button className="next-btn" onClick={nextImage}>
            ❯
          </button>
        </div>
      )}
    </>
  );
}

export default Gallery;