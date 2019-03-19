import React from "react";
import { Link } from "react-router-dom";
import "./public/styles/home.css";

const Home = () => (
  <div className="home">
    <h1>JMDA Sponsors Dashboard</h1>
    <Link
      style={{
        background: "black",
        color: "white",
        padding: "10px 30px",
        borderRadius: "5px",
        textAlign: "center",
        textDecoration: "none",
        marginLeft: "42vw"
      }}
      to="/list"
    >
      List
    </Link>
  </div>
);

export default Home;
