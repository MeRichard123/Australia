import React, { Component } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Destinations from "./pages/Destinations";

class App extends Component {
  render() {
    return (
      <div className="app">
        <LandingPage />
        <About />
        <Destinations />
      </div>
    );
  }
}
export default App;
