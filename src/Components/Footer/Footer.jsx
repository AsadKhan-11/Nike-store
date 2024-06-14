import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-sec">
      <div className="footer-left">
        <div className="footer-size">
          <button className="btn">8</button>
          <button className="btn">8.5</button>
          <button className="btn">9</button>
          <button className="btn">9.5</button>
          <button className="btn">10</button>
          <button className="btn">10.5</button>
          <button className="btn">11</button>
          <button className="btn">12</button>
        </div>

        <div className="footer-colors">
          <button className="btn-colors"></button>
          <button className="btn-colors"></button>
          <button className="btn-colors"></button>
          <button className="btn-colors"></button>
          <button className="btn-colors"></button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
