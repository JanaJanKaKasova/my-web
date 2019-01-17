import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row pt-3 pb-5">
          <div className="col-sm">
            <i class="far fa-copyright" />
            <span>2019 by JANKA</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
