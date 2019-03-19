import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Feed from "./Feed";
import Header from "./Header";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousLocation: props.location,
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
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  previousLocation = this.props.location;
  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render
    return (
      <div>
        <Header />
        <div>
          <Switch location={isModal ? this.previousLocation : location}>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/list"
              render={props => (
                <Feed {...props} data={this.state.apiresponse} />
              )}
            />
          </Switch>
        </div>

        {/* {isModal ? <Route path="/feed/:id" component={Modal} /> : null} */}
      </div>
    );
  }
}

export default App;
