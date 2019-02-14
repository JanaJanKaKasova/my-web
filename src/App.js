import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import Projects from "./projects";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
