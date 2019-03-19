import React from "react";
import "./public/styles/table.css";
import "./public/styles/card.css";

const Feed = ({ data }) => {
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

  return (
    <div className="page">
      <div className="card item">
        <div className="card-container">
          <h3>
            {n} :{" "}
            <span style={{ color: "var(--secondary-color)" }}>
              {data.length}
            </span>
          </h3>
        </div>
      </div>

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
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map(i => (
            <tr>
              <td>{i.index}</td>
              <td>{i.firstName}</td>
              <td>{i.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Feed;
