import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Commendations from "./Commendations";
import Modal from "./Modal";
import Header from "./Header";
import Error from "./Error";
import Peer from "./Peer";

// import "/public/styles/app.css"

// This example shows how to render two different screens
// (or the same screen in a different context) at the same url,
// depending on you got there.
//
// Click the colors and see them full screen, then "visit the
// commendations" and click on the colors. Note the URL and the component
// are the same as before but now we see them inside a modal
// on top of the old screen.

class App extends Component {
  // We can pass a location to <Switch/> that will tell it to
  // ignore the router's current location and use the location
  // prop instead.
  //
  // We can also use "location state" to tell the app the user
  // wants to go to `/img/2` in a modal, rather than as the
  // main page, keeping the commendations visible behind it.
  //
  // Normally, `/img/2` wouldn't match the commendations at `/`.
  // So, to get both screens to render, we can save the old
  // location and pass it to Switch, so it will think the location
  // is still `/` even though its `/img/2`.
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
            <Route exact path="/Peer" component={Peer} />
            <Route exact path="/*/" component={Error} />
          </Switch>
        </div>

        {isModal ? <Route path="/commendations/:id" component={Modal} /> : null}
      </div>
    );
  }
}

export default App;
