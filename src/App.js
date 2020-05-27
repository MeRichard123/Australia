import React, { Component } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";

class App extends Component {
  render() {
    return (
      <div className="app">
        <LandingPage />
        <About />
      </div>
    );
  }
}
export default App;
