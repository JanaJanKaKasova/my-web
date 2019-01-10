import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
