import React, { useState, useEffect } from "react";
import BackgroundImage1 from "../../assets/images/backgroundImage1.jpg";
import BackgroundImage2 from "../../assets/images/backgroundImage2.jpg";
import BackgroundImage3 from "../../assets/images/backgroundImage3.jpg";
import { ReactComponent as LeftArrow } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/arrow-right.svg";
import "./HomeHero.css";

const HomeHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [BackgroundImage1, BackgroundImage2, BackgroundImage3];

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
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  return (
    <div
      className="bg-custom-image bg-cover bg-center h-80 mx-8 lg:mx-40 lg:h-[33rem] relative z-0"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="hidden px-8 md:flex">
        <span
          onClick={handlePrevClick}
          className="bg-white w-12 h-12 p-3 flex justify-center items-center rounded-full absolute left-8 top-1/2"
        >
          <LeftArrow />
        </span>
        <span
          onClick={handleNextClick}
          className="bg-white w-12 h-12 p-3 flex justify-center items-center rounded-full absolute right-8 top-1/2"
        >
          <RightArrow />
        </span>
      </div>

      <div className="absolute flex gap-4 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`vanilla-indicators ${
              index === currentImageIndex ? "vanilla-active" : ""
            }`}
            onClick={() => setCurrentImageIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HomeHero;
