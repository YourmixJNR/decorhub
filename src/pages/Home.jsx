import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import ImagePlaceholder1 from "../assets/images/ImagePlaceholder.jpg";
import ImagePlaceholder2 from "../assets/images/Pasteimage.png";
import ImagePlaceholder3 from "../assets/images/ImagePlaceholder.jpg";
import './Home.css'

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [ImagePlaceholder1, ImagePlaceholder2, ImagePlaceholder3];

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5000 milliseconds (5 seconds)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [currentImageIndex, images.length]);

  return (
    <div>
      <Header />
      <div
        className="bg-custom-image bg-cover bg-center h-80 mx-8 lg:mx-40 relative z-0"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        <div className="hidden md:flex">
          <button onClick={handlePrevClick} className="absolute left-0 top-1/2">
            Prev
          </button>
          <button onClick={handleNextClick} className="absolute right-0 top-1/2">
            Next
          </button>
        </div>

        <div className="absolute flex gap-4 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`vanilla-indicators ${index === currentImageIndex ? "vanilla-active" : ""}`}
              onClick={() => setCurrentImageIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
