import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        {/* <div>Hello World!</div>
        <h1>Hellooo</h1> */}
      </div>
    );
  }
}

export default App;
