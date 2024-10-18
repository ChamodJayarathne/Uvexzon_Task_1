import React from "react";
import "../styles/TopbarStyles.css";

const Topbar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <i className="bi bi-telephone"></i>
        <span>(225) 555-0118</span>

        <i className="bi bi-envelope"></i>
        <span>michelle.rivera@example.com</span>
      </div>
      <div className="top-bar-middle">
        <span>Follow Us and get a chance to win 80% off</span>
      </div>
      <div className="top-bar-right">
        <span>Follow Us:</span>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <i className="bi bi-youtube"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default Topbar;
