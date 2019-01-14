import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="row pt-5">
          <div className="col-sm" />
          <div className="col-sm heading">
            <h1>...so I do</h1>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-sm-2" />
          <div className="col-sm-8 about_copy">
            <h2>My name is Jana</h2>
          </div>
          <div className="col-sm-2" />
        </div>
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8 about_copy">
            <h3>
              I am Content Creator, Junior Front-End Developer & Surf Instructor
            </h3>
          </div>
          <div className="col-sm-2" />
        </div>
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8 about_copy">
            <p>
              Bio .......... Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Aliquam erat volutpat. In sem justo, commodo ut, suscipit
              at, pharetra vitae, orci. Fusce dui leo, imperdiet in, aliquam sit
              amet, feugiat eu, orci. Duis sapien nunc, commodo et, interdum
              suscipit, sollicitudin et, dolor. In rutrum.
            </p>
          </div>
          <div className="col-sm-2" />
        </div>
      </div>
    );
  }
}

export default About;
