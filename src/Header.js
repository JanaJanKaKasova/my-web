import React, { Component } from "react";
import main_pic from "./pics/main_pic.jpg";

class Header extends Component {
  render() {
    return (
      <div className="conatiner-fluid header_container">
        <div className="row pt-4">
          <div className="col-sm-6 main_pic">
            <img src={main_pic} alt="Main_pic" />
          </div>
          <div className="col-sm-6 pt-5">
            <div className="row pt-5 pb-3" />
            <div className="row pt-5">
              <h1>
                <p>"Dreams don't work</p>
                <p>unless we do"</p>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
