import React, { Component } from "react";
import SearchInput, { createFilter } from 'react-search-input'
import "./public/styles/table.css";
import "./public/styles/card.css";

const KEYS_TO_FILTERS = ['firstName', 'lastName']

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  render() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var d = new Date();
    var n = month[d.getMonth()];

    let members = this.props.data.filter(i => i.active == true);

    const filtered = members.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div>
        <div className="page">
          <div className="card item">
            <div className="card-container">
              <h3>
                {n} :{" "}
                <span style={{ color: "var(--secondary-color)" }}>
                  {members.length} active members
                </span>
              </h3>
            </div>
          </div>

          <div style={{ marginBottom: "120px" }} />

          <SearchInput className="search-input" onChange={this.searchUpdated} />

          <div style={{ marginBottom: "120px" }} />

          <table id="customers">
            <thead
              style={{
                position: "-webkit - sticky",
                position: "sticky",
                top: "20px"
              }}
            >
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(i => (
                <tr>
                  <td>{i.firstName}</td>
                  <td>{i.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
}

export default Feed;
