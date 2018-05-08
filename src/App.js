import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";


import Home from "./Home";
import Feed from "./Feed";
import PageView from "./Page";
import Modal from "./Modal";
import Header from "./Header";
import BottomBar from "./BottomBar"
import Error from "./Error"

// import "/public/styles/app.css"

// This example shows how to render two different screens
// (or the same screen in a different context) at the same url,
// depending on you got there.
//
// Click the colors and see them full screen, then "visit the
// Feed" and click on the colors. Note the URL and the component
// are the same as before but now we see them inside a modal
// on top of the old screen.

class App extends Component {

  // We can pass a location to <Switch/> that will tell it to
  // ignore the router's current location and use the location
  // prop instead.
  //
  // We can also use "location state" to tell the app the user
  // wants to go to `/img/2` in a modal, rather than as the
  // main page, keeping the Feed visible behind it.
  //
  // Normally, `/img/2` wouldn't match the Feed at `/`.
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
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/img/:id" component={PageView} />
          <Route path="/feed/:id" component={PageView} />
          <Route exact path="/*/" component={Error} />
        </Switch>
        </div>
        <BottomBar/>

        {isModal ? <Route path="/feed/:id" component={Modal} /> : null}
      </div>
    );
  }
}

export default App;
