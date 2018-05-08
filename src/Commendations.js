import React from "react";
import { Link } from "react-router-dom";
import "./styles/card.css";

var json = require("./data2.json");

class Commendations extends React.Component {
  render() {
    return (
      <div>
        <div id="back"></div>
        <div className="containery page">
          {json.map(i => (
            <div
              className="contain item"
              key={i.ID}
              to={{
                pathname: `/Commendations/${i.ID}`,
                // this is the trick!
                state: { modal: true }
              }}
            >
              <div className="letter">
                <p>{i.comments}</p>
              </div>
              <div className="card">
                <div className="ribbon">
                  <b>&#9819;{i.Custom2}</b>
                </div>
                <div className="triangle" />
                <div className="container">
                  <h4>
                    <b>To {i.Custom1}</b>
                  </h4>
                  <h4>
                    <b>From {i.First_Name}</b>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Commendations;
