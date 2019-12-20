import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Feed from "./Feed";
import Header from "./Header";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiresponse: []
    };
  }
  componentDidMount() {
    let url = "https://api.sheety.co/f1db1680-2a10-47cc-b0fd-cad4ff77e9f7";
    axios
      .get(url)
      .then(response => {
        this.setState({ apiresponse: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Feed {...props} data={this.state.apiresponse} />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
