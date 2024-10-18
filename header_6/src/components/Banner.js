import React from "react";
import '../styles/Banner.css'
import leftImage from "../assets/img1.jpeg";
import rightImage from "../assets/img2.jpeg";
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-image-left">
        <img src={leftImage} alt="Left Model" />
      </div>
      <div className="banner-content">
        <h4>SUMMER 2020</h4>
        <h1>Multicoloured Tie-dye Sweater</h1>
        <p>
          We know how large objects will act,
          <br />
          but things on a small scale.
        </p>
        <button className="shop-now-btn">SHOP NOW</button>
      </div>
      <div className="banner-image-right">
        <img src={rightImage} alt="Right Model" />
      </div>
    </div>
  );
};

export default Banner;
