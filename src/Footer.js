import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row pt-5 pb-5">
          <div className="col-sm cleafix">
            <i class="far fa-copyright" />
            <span>2019 by JANKA</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
