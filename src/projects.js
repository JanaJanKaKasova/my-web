import React, { Component } from "react";
import "./About.css";
import LVPweb from "./pics/LVPweb.png";
import pinkWeather from "./pics/pinkWeather.png";
import svazdesign from "./pics/svazdesign.png";

class projects extends Component {
  render() {
    return (
      <div>
        <div className="container row pt-4 pb-5" id="projects">
          <div className="col-2" />
          <div className="col-8">
            <h1>Projects:</h1>
          </div>
        </div>
        <div className="col-2" />
        <div className="container row pb-5">
          <div className="col-2" />
          <div className="col-8 slider">
            <div className="bd-example">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="0"
                    class="active"
                  />
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="1"
                  />
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="2"
                  />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={LVPweb} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Libor Valečka a partneři - financial advisors</h5>
                      <p>Webdesign, social media content, copywriting</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={pinkWeather}
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>pinkWeather - weather app</h5>
                      <p>
                        React JS web app - Code, design, functionalities, API,
                        etc.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={svazdesign} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Český svaz surfingu</h5>
                      <p>
                        Webdesign - website of The Czech Association of Surfing
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2" />
      </div>
    );
  }
}

export default projects;
