import React, { Component } from "react";
import main_pic from "./pics/main_pic.jpg";

class Header extends Component {
  render() {
    return (
      <div className="conatiner-fluid">
        <div className="row pt-4">
          <div className="col-sm main_pic">
            <img src={main_pic} alt="Main_pic" />
          </div>
          <div className="col-sm">fň</div>
        </div>
      </div>
    );
  }
}

export default Header;
