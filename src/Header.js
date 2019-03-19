import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./public/styles/header.css";

const Header = () => (
  <header>
    <nav>
      <ul className="header shadow">
        <li>
          <NavLink
            activeClassName="activelink"
            className="link"
            exact
            to="/list"
          >
            List
          </NavLink>
        </li>
        <li id="logo">
          <Link id="logochild" to="/">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
