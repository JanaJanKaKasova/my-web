import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="row pt-3">
          <div className="col-sm" />
          <div className="col-sm heading">
            <h1>...so I do</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-1" />
          <div className="col-sm-11">
            <h2>My name is Jana</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-1" />
          <div className="col-sm-3">
            <h3>
              I am Content Creator, Junior Front-End Developer & Surf Instructor
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-1" />
          <div className="col-sm-5">
            <p>
              Bio .......... Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Aliquam erat volutpat. In sem justo, commodo ut, suscipit
              at, pharetra vitae, orci. Fusce dui leo, imperdiet in, aliquam sit
              amet, feugiat eu, orci. Duis sapien nunc, commodo et, interdum
              suscipit, sollicitudin et, dolor. In rutrum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
