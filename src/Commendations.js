import React from "react";
import { Link } from "react-router-dom";
import "./styles/card.css";

var json = require('./data2.json');

class Commendations extends React.Component {

  render() {
    return (
      <div className="container page">
        {json.map(i => (
          <Link 
            className="item"
            key={i.id}
            to={{
              pathname: `/Commendations/${i.id}`,
              // this is the trick!
              state: { modal: true }
            }}
          >
            <div className="card">
              <div className="imageContainer">
                <img alt={i.title} src={i.image} />
              </div>
              <div className="price-tag">nps: {i.nps}</div>
              <div className="container">
                <ul>
                  <li>
                    <h4>{i.first_name} {i.last_name}</h4>
                  </li>
                  <li>
                    <h5>{i.location} Branch</h5>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default Commendations;
