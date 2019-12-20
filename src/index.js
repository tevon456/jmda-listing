import "./public/styles/app.css";

import * as serviceWorker from "./createServiceWorker";

import { Route, BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import React from "react";
import { render } from "react-dom";

const Root = () => (
  <Router>
    <Route component={App} />
  </Router>
);

render(<Root />, document.getElementById("root"));
serviceWorker.register();
