import React from "react";
import { Link } from "react-router-dom";
import "./styles/card.css";

var json = require('./data/data.json');

class Stats extends React.Component {

  render() {
    return (
      <div className="containery page animated fadeIn">
        {json.map(i => (
          <Link 
            className="item"
            key={i.id}
            to={{
              pathname: `/stats/${i.id}`,
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
                    <h5>{i.branch} Branch</h5>
                  </li>
                  <li>
                    <h5>{i.branch} Branch</h5>
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

export default Stats;
