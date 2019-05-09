import React, { Component } from "react";
import "./navbar.css";
import logo from "./pics/logo_small.jpeg";

// console.log(logo);

class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-1 pt-5 pb-5" />
          <div className="logo col-sm-2 pt-3">
            <a
              href="https://www.freeride.cz/surfr/surfr-blogy-jankas"
              target="_blank"
            >
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="menu_list col-sm-2 pt-5 pb-5">
            {" "}
            <a href="#Header">
              <h5>Home</h5>
            </a>
          </div>
          <div className="menu_list col-sm-2 pt-5 pb-5">
            {" "}
            <a href="#about">
              <h5>About</h5>
            </a>
          </div>
          <div className="menu_list col-sm-2 pt-5 pb-5">
            <a href="#projects">
              <h5>Projects</h5>
            </a>
          </div>
          <div className="menu_list col-sm-2 pt-5 pb-5">
            <a href="#hire_me">
              <h5>Hire me</h5>
            </a>
          </div>
          <div className="col-sm-1 pt-5 pb-5" />
        </div>
      </div>
    );
  }
}

export default Navbar;
