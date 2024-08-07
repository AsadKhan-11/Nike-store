import React, { useState } from "react";
import "./Footer.css";
import Black from "../../assets/Black.png";
import Green from "../../assets/Green.png";
import Orange from "../../assets/Orange.png";
import Yellow from "../../assets/Yellow.png";
import Beige from "../../assets/Beige.png";

function Footer({ changeBg }) {
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
          <button
            className="btn-colors"
            onClick={() => {
              changeBg("black", Black, "Black");
            }}
          ></button>
          <button
            className="btn-colors"
            onClick={() => {
              changeBg("#ff2600", Orange, "Red");
            }}
          ></button>
          <button
            className="btn-colors"
            onClick={() => {
              changeBg("#ffa2c1", Beige, "Beige");
            }}
          ></button>
          <button
            className="btn-colors"
            onClick={() => {
              changeBg("#047043", Green, "Green");
            }}
          ></button>
          <button
            className="btn-colors"
            onClick={() => {
              changeBg("#ecec49", Yellow, "Yellow");
            }}
          ></button>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-info">
          Nike shoes are renowned for their innovative design, superior comfort,
          and high performance. Popular among athletes and casual wearers alike,
          they feature advanced technologies like Air Max cushioning and Flyknit
          material. With a variety of styles, Nike shoes cater to diverse needs,
          ensuring both functionality and fashionable appeal.
        </p>
        <div className="btn-move-wrapper">
          <button className="btn-move">&larr;</button>
          <button className="btn-move">&rarr;</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
