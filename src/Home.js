import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";

const Home = () => (
  <div className="home">
    <h1>Agent Commendations </h1>
    <center>
      <Link className="backLink" to="/commendations">
        Click here
      </Link>
    </center>
  </div>
);

export default Home;
