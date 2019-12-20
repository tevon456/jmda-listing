import "./public/styles/header.css";

import { Link } from "react-router-dom";
import React from "react";

const Header = () => (
  <header>
    <nav>
      <ul
        className="header shadow"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <li id="logo">
          <Link
            id="logochild"
            to="/"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src="./192.png" alt="logo" width="40px" />
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
