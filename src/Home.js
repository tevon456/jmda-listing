import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home">
    <h1>JMDA Sponsors Dashboard</h1>
    <p style={{ textAlign: "center" }}>Simple dashboard for JMDA partners and sponsors to view list of active members fo r the current month.</p>
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
      View List
    </Link>
  </div>
);

export default Home;
