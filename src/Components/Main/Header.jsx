import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Header({ changeBg, bgColor }) {
  return (
    <div className="header-sec">
      <Navbar />

      <div className="nike-header-wrapper">
        <h1 className="nike-header">NIKE</h1>
      </div>
      <div className="header-info">
        <h2 className="header-name">
          Jordan 1 {bgColor.name} {}
        </h2>

        <div className="header-tag-wrapper">
          <h3 className="header-tag">Released date</h3>
          <p className="header-date">10/04/2005</p>
        </div>
        <div className="header-tag-wrapper">
          <h3 className="header-tag">Price</h3>
          <p className="header-price">$200</p>
        </div>
      </div>
      <Footer changeBg={changeBg} />
    </div>
  );
}

export default Header;
