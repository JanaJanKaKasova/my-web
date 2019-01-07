import React, { Component } from "react";
import "./navbar.css";
import logo from "./logo_small.jpeg";

// console.log(logo);

class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-1 pt-5 pb-5" />
          <div className="logo col-sm-2 pt-3">
            <img src={logo} alt="Logo" />
          </div>
          <div className="menu_list col-sm-2 pt-5 pb-5">Home</div>
          <div className="menu_list col-sm-2 pt-5 pb-5">About</div>
          <div className="menu_list col-sm-2 pt-5 pb-5">Projects</div>
          <div className="menu_list col-sm-2 pt-5 pb-5">Hire Me</div>
          <div className="col-sm-1 pt-5 pb-5" />
        </div>
      </div>
    );
  }
}

export default Navbar;
