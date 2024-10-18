import React, { useEffect, useState } from "react";
import "../styles/BannerStyles.css"; 
import img1 from "../assets/img1.jpg"; 
import img2 from "../assets/img2.jpg"; 
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";


const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [img1, img2];

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage(); 
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="banner">
      <button onClick={prevImage} className="banner-arrow left">
        <FaAngleLeft />
      </button>

      <div className="banner-content">
        <h2>SUMMER 2020</h2>
        <h1>NEW COLLECTION</h1>
        <p>
          We know how large objects will act,
          <br /> but things on a small scale.
        </p>
        <button className="shop-now-btn">SHOP NOW</button>
      </div>

      <img src={images[currentImage]} alt="Banner" className="banner-image" />

      <button onClick={nextImage} className="banner-arrow right">
        <FaAngleRight />
      </button>

    </div>
  );
};

export default Banner;
