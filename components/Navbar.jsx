import React from "react";
import Image from "next/image";
import logo from "../Assets/Images/logo.jpg";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
const Navbar = () => {
  const {showCart,setShowCart,cartItems}=useStateContext()
  return (
    <div className="type3 section">
      <nav>
        <div className="end">
          <div className="logo">
            <i className="fa-solid fa-bars"></i>
            <div className="title">
              <a href="#">
                <Image
                  src={logo}
                  className="logo"
                  alt="/"
                  height="70px"
                  width="70px"
                ></Image>
                Leading Gallopers
              </a>
            </div>
          </div>
        </div>
        <div className="menu">
        <a href="https://www.instagram.com/leading_gallopers_riding_club_/">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="https://www.facebook.com/leadinggallopersridingclub">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </div>

        {/* <div className="end">
          <button type="button" onClick={()=>setShowCart(!showCart)}>
          <ion-icon name="cart-outline"></ion-icon>
          </button>
          {cartItems.length}
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
