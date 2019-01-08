import React, { Component } from "react";
import main_pic from "./pics/main_pic.jpg";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="conatiner-fluid header_container">
        <div className="row pt-4">
          <div className="col-sm-6 main_pic">
            <img src={main_pic} alt="Main_pic" />
          </div>
          <div className="col-sm-5 pt-5 pl-5">
            <div className="row pt-5" />
            <div className="row pt-5 quote">
              <h1>"Dreams don't work unless we do"</h1>
            </div>
            <div className="row">
              <h4>John C. Maxwell</h4>
            </div>
          </div>
          <div className="col-sm-1" />
        </div>
      </div>
    );
  }
}

export default Header;
