import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./public/styles/app.css";

import App from "./App";

const ModalGallery = () => (
  <Router>
    <Route component={App} />
  </Router>
);

render(<ModalGallery />, document.getElementById("root"));
