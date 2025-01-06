import React, { useState } from "react";

// LightboxGallery component to display a gallery of images with a lightbox feature
const LightboxGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the lightbox is open
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index in the lightbox

  // Function to open the lightbox modal and set the current image index
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Function to close the lightbox modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Function to change the slide in the lightbox
  const changeSlide = (direction) => {
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery-container">
      {/* Display a static image as a thumbnail */}
      <img
        src={"images/flat-1.jpeg"}
        alt={"images/page-images/9/9.1.jpeg"}
        className="img-thumbnail gallery-thumbnail"
        onClick={() => openModal(index)}
      />

      <div className="row">
        {/* Map through the images array and display each image as a thumbnail */}
        {images.map((image, index) => (
          <div key={index} className="col-6 col-md-3 mb-4">
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="img-thumbnail gallery-thumbnail"
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox modal to display the selected image */}
      {isOpen && (
        <div className="lightbox-modal">
          <span className="lightbox-close" onClick={closeModal}>
            &times;
          </span>
          <div className="lightbox-content">
            <div className="lightbox-slide">
              {/* Display the current image in the lightbox */}
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="img-fluid"
              />
            </div>

            {/* Buttons to navigate through the slides */}
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
