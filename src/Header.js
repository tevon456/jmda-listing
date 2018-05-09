import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/header.css";
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul className="header shadow">

        <li>
          <NavLink
            activeClassName="activelink"
            className="link"
            exact
            to="/Peer"
          >
            Peer
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="activelink"
            className="link"
            exact
            to="/Commendations"
          >
            Commendations
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="activelink"
            className="link"
            exact
            to="/Stats"
          >
            Stats
          </NavLink>
        </li>
        <li id="logo">
          <Link id="logochild" to="/">
            Agent
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
