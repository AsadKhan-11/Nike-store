import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
function Header() {
  return (
    <div className="header-sec">
      <Navbar />

      <div className="nike-header-wrapper">
        <h1 className="nike-header">NIKE</h1>
      </div>

      <h3 className="header-name">Jordan 1 red</h3>
      <p className="header-date">10/04/2005</p>
      <p className="header-price">$200</p>
    </div>
  );
}

export default Header;
