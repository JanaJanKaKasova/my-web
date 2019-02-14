import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/* <div className="row pt-4 pb-4">
          <div className="col-sm-4" />
          <div className="col-sm-1">
            <a href="https://www.facebook.com/JanaKasova.JanKa" target="_blank">
              {" "}
              <i class="fab fa-facebook"> </i>
            </a>
          </div>
          <div className="col-sm-1">
            <a href="https://www.instagram.com/jan.ka.s/" target="_blank">
              {" "}
              <i class="fab fa-instagram" />
            </a>
          </div>
          <div className="col-sm-1">
            <a href="https://github.com/JanaJanKaKasova" target="_blank">
              {" "}
              <i class="fab fa-github" />
            </a>
          </div>
          <div className="col-sm-1">
            <a href="https://www.linkedin.com/in/jana-kasova/" target="_blank">
              {" "}
              <i class="fab fa-linkedin" />
            </a>
          </div>
          <div className="col-sm-4" />
        </div>*/}
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
