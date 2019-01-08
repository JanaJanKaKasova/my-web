import React, { Component } from "react";
import main_pic from "./pics/main_pic.jpg";

class Header extends Component {
  render() {
    return (
      <div className="conatiner-fluid header_container">
        <div className="row pt-4">
          <div className="main_pic">
            {/* <img src={main_pic} alt="Main_pic" /> */}
            <div className="quote">
              <h1>"Dreams don't work unless we do"</h1>
            </div>
          </div>
          {/* <div className="col-sm quote">
            <h1>"Dreams don't work unless we do"</h1>
    </div> */}
        </div>
      </div>
    );
  }
}

export default Header;
