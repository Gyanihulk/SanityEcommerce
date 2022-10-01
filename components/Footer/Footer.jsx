import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
        <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
           
        </div>
      <ul className="social_icons">
        <li>
          <a href="https://linktr.ee/Cinevab?fbclid=PAAabL7hmjiQtLSlerTX2smKmaQxzozhDYGZs_eD86clvMxjHpACWmo2Jz-KM">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#">
          <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#">
          <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li>

      </ul>
      <ul className="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <p>Copyright © CINEVAB </p>
      <p>All Rights Reserverd</p>
      <p>Designed & Developed By</p>
      <p>Gyani Hulk</p>
    </footer>
  );
};

export default Footer;
