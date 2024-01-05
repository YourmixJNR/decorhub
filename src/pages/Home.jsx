import React, { useState } from "react";
import Header from "../components/layout/Header";
import ImagePlaceholder1 from "../assets/images/ImagePlaceholder.jpg";
import ImagePlaceholder2 from "../assets/images/Pasteimage.png";
import ImagePlaceholder3 from "../assets/images/ImagePlaceholder.jpg";

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

  return (
    <div>
      <Header />
      <div
        className="bg-custom-image bg-cover bg-center h-80 mx-8 lg:mx-40 relative z-0"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        {/* Navigation buttons */}
        <button onClick={handlePrevClick} className="absolute left-0 top-1/2">
          Prev
        </button>
        <button onClick={handleNextClick} className="absolute right-0 top-1/2">
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
