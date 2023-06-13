import React from "react";
import styles from "../../styles/components/Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <p className="footer__logo">Pupper Palette</p>
      </div>
      <div className="footer__nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer__text">
        <p>
          About Pupper Palette: We are passionate about sharing digital art of
          our furry friends.
        </p>
      </div>
      <div className="footer__copyright">
        <p>© {year} Pupper Palette. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
