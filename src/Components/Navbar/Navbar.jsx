import React from "react";
import "./Navbar.css";
import nike from "../../../public/nike.png";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { ShoppingBagIcon } from "@heroicons/react/16/solid";

function Navbar() {
  return (
    <nav className="nav-section">
      <img src={nike} alt="Nike logo" className="nav-logo" />

      <div className="nav-items">
        <a href="" className="nav-links">
          New Releases
        </a>
        <a href="" className="nav-links">
          Men
        </a>
        <a href="" className="nav-links">
          Women
        </a>
        <a href="" className="nav-links">
          Kids
        </a>
        <a href="" className="nav-links">
          Shop All
        </a>
      </div>

      <div className="nav-shop">
        <a href="" className="nav-links">
          {" "}
          <UserCircleIcon className="nav-user" />
        </a>
        <a href="" className="nav-links">
          {" "}
          <ShoppingBagIcon className="nav-user" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
