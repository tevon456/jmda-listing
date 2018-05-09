import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Commendations from "./Commendations";
import Modal from "./Modal";
import Header from "./Header";
import Error from "./Error";
import Peer from "./Peer";
import Stats from "./Stats";
import PageView from "./Page";


class App extends Component {
  // We can pass a location to <Switch/> that will tell it to
  // ignore the router's current location and use the location
  // prop instead.
  //
  // We can also use "location state" to tell the app the user
  // wants to go to `/Stats/id` in a modal, rather than as the
  // stats page, keeping the commendations visible behind it.
  //
  // Normally, `/stats/id` wouldn't match the commendations at `/stats`.
  // So, to get both screens to render, we can save the old
  // location and pass it to Switch, so it will think the location
  // is still `/stats` even though its `/stats/id`.
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
            <Route exact path="/commendations" component={Commendations} />
            <Route exact path="/peer" component={Peer} />
            <Route exact path="/stats" component={Stats} />
            <Route path="/stats/:id" component={PageView} />
            <Route exact path="/*/" component={Error} />
          </Switch>
        </div>

        {isModal ? <Route path="/Stats/:id" component={Modal} /> : null}
      </div>
    );
  }
}

export default App;
