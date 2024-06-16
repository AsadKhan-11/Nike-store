import React, { useState } from "react";
import "./Footer.css";

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
              changeBg("black");
            }}
          ></button>
          <button
            className="btn-colors"
            onClick={() => {
              changeBg("orange");
            }}
          ></button>
          <button
            className="btn-colors"
            onClick={() => {
              changeBg("purple");
            }}
          ></button>
          <button
            className="btn-colors"
            onClick={() => {
              changeBg("green");
            }}
          ></button>
          <button
            className="btn-colors"
            onClick={() => {
              changeBg("red");
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
