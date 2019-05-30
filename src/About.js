import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <div className="row pt-5 pb-5">
          <div className="col-sm" />
          <div className="col-sm heading">
            <h1>...so I do</h1>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-sm-2" />
          <div className="col-sm-8 about_copy">
            <h2>My name is Jana "JanKa" Kašová</h2>
          </div>
          <div className="col-sm-2" />
        </div>
        <div className="row pt-3">
          <div className="col-sm-2" />
          <div className="col-sm-8 about_copy">
            <h3>
              I am Content Creator, Junior Front-End Developer & Surf Instructor
            </h3>
          </div>
          <div className="col-sm-2" />
        </div>
        <div className="row pt-4 pb-5">
          <div className="col-sm-2" />
          <div className="col-sm-8 about_copy">
            <p>
              I was born in Czech Republic. When I was 20 and studying abroad, I
              fell in love.. with the ocean. At the moment I am living in
              between Lisbon and Prague, working my way to become geographically
              independent Front-End Developer and Free surfer. And I have to
              admit this path is not as idylic as it sounds.
            </p>
            <p>
              I am addicted to learning new things. So when I finished my{" "}
              <b>Master's at Media studies</b>, I decided to learn{" "}
              <b>to code websites and apps</b>. I also do <b>Design</b>, mainly{" "}
              <b>Web Design</b>. Trying to get better in both,{" "}
              <b>UI and UX Design</b> and I can do some Graphic Desing for
              Marketing purposes as well. <b>Marketing and Content Creation</b>{" "}
              were my main areas before I started to code, so I have plenty of
              skills from there. Mainly in{" "}
              <b>Social Media Management, Copywriting and the SEO</b>.
            </p>
            <p>
              <i>
                <b>
                  So in a shortcut, I am helping to my clients with their
                  succesful on-line presence.
                </b>
              </i>
            </p>
            <p>
              Because I don't like sitting at the computer whole day and I enjoy
              some offline work, I am also <b>Instructor of Surfing</b>,
              certified by international Academy of Surfing Instructors. Even
              though it sounds like I am super busy, it actually combines very
              well. :)
            </p>
            <p>
              If you are interested in working with me, contact me on one of the
              links bellow the <b>Projects</b>.
            </p>
          </div>
          <div className="col-sm-2" />
        </div>
        {/* <div className="row pt-5 pb-5">
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
      </div>
    );
  }
}

export default About;
