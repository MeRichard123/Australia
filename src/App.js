import React, { Component } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <LandingPage />
        <About />
        <Destinations />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;
