import React from "react";
import Error from "./Error";
import "./styles/content.css";

var json = require("./data/data.json");
const PageView = ({ match }) => {
  const page = json.find(p => p.id == match.params.id);
  if (!page) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  return (
    <div className="content page">
      <h1>
        {page.first_name} {page.last_name}
      </h1>
      <p>{page.content}</p>
    </div>
  );
};

export default PageView;
