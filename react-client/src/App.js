import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Project from "./components/Project";

//style
import "./bootstrap.css";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />

          <Route exact path="/projects/:id" component={Project} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
