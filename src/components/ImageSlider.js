import React, { useState } from "react";
import "../styles/components/ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const slideStyle = { backgroundImage: `url(${slides[currentImage]})` };

  const goToPrevious = () => {
    const isFirstSlide = currentImage === 0;
    const newImage = isFirstSlide ? slides.length - 1 : currentImage - 1;
    setCurrentImage(newImage);
  };

  const goToNext = () => {
    const isLastSlide = currentImage === slides.length - 1;
    const newImage = isLastSlide ? 0 : currentImage + 1;
    setCurrentImage(newImage);
  };

  return (
    <div className="slide-container">
      {slides.length > 1 && (
        <>

          <p className="numberOfSlide">
            {currentImage + 1} / {slides.length}
          </p>

          <div className="leftArrow" onClick={goToPrevious}>
            <svg
              width="48"
              height="80"
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="rightArrow" onClick={goToNext}>
            <svg
              width="48"
              height="80"
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                fill="white"
              />
            </svg>
          </div>
        </>
      )}
      <div style={slideStyle} className="bgSlide"></div>
    </div>
  );
};

export default ImageSlider;
