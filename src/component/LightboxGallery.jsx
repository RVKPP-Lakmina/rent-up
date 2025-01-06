import React, { useState } from "react";

const LightboxGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const changeSlide = (direction) => {
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery-container">
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-6 col-md-3 mb-4">
            <img
              src={"images/house-1.jpg"}
              alt={`Thumbnail ${index + 1}`}
              className="img-thumbnail gallery-thumbnail"
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox-modal">
          <span className="lightbox-close" onClick={closeModal}>
            &times;
          </span>
          <div className="lightbox-content">
            <div className="lightbox-slide">
              <img
                src={""}
                alt={`Slide ${currentIndex + 1}`}
                className="img-fluid"
              />
            </div>

            <button
              className="lightbox-prev btn btn-dark"
              onClick={() => changeSlide(-1)}
            >
              &#10094;
            </button>
            <button
              className="lightbox-next btn btn-dark"
              onClick={() => changeSlide(1)}
            >
              &#10095;
            </button>
          </div>
          <div className="lightbox-caption text-center text-white">
            {images[currentIndex].caption || `Slide ${currentIndex + 1}`}
          </div>
        </div>
      )}
    </div>
  );
};

export default LightboxGallery;
