import React from "react";
import Image from "next/image";
import logo from "../Assets/Images/logo.jpg";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
const Navbar = () => {
  const {showCart,setShowCart,cartItems}=useStateContext()
  return (
    <div class="type3 section">
      <nav>
        <div class="end">
          <div class="logo">
            <i class="fa-solid fa-bars"></i>
            <div class="title">
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
        <div class="menu">
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

        <div class="end">
          <button type="button" onClick={()=>setShowCart(!showCart)}>
          <ion-icon name="cart-outline"></ion-icon>
          </button>
          {cartItems.length}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
