import React from "react";
import "./Skills.css";
import { Button } from "reactstrap";
import HTML from "./html-logo1.png";
import CSS from "./css-circle.jpg";
import JavaScript from "./javascript-circle.jpg";
import Circle from "./React-circle.png";
import Node from "./node-circle.png";
import Mongo from "./Mongodb-circle.png";
import Bootstrap from "./bootstrap-circle.jpg";

function Projects() {
  return (
    <div id="Skills">
      <a id="Skills">
        <div className="service-head2 text-center">
          <h2>
            {" "}
            Skills
            <div className="comment2"> </div>
          </h2>
          <h3>
            {" "}
            <span className="line2">
              {" "}
              <div className="border2"></div>
            </span>
          </h3>
        </div>
      </a>

      <div className="contact_upper_div">
        <section
          className="content-section text-white text-center"
          id="services"
        >
          <div className="container">
            <div className="content-section-heading">
              <h3 className="text-dark mb-0">
                Here are some technologies I know:
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <img
                    src={HTML}
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      left: "50px",
                    }}
                    alt="HTML"
                  ></img>
                  <h1 style={{ color: "black" }}>HTML</h1>
                </span>
              </div>
              <div className="col-lg-2 col-md-6 mb-5 mb-md-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <img
                    src={CSS}
                    style={{
                      width: "150px",
                      marginTop: "42px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                    alt="CSS"
                    id="contact_photo"
                  ></img>
                  <h1 style={{ color: "black", marginTop: "24px" }}>CSS</h1>
                </span>
              </div>
              <div className="col-lg-2 col-md-6 mb-5 mb-md-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <img
                    src={JavaScript}
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "50%",
                      marginTop: "30px",
                    }}
                    alt="JavaScript"
                    id="contact_photo"
                  ></img>
                  <h1 style={{ color: "black", marginTop: "10px" }}>
                    JavaScript
                  </h1>
                </span>
              </div>
              <div className="col-lg-2 col-md-6 mb-5 mb-md-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <img
                    src={Circle}
                    style={{
                      width: "175px",
                      height: "125px",
                      borderRadius: "50%",
                      marginTop: "35px",
                    }}
                    alt="React"
                    id="contact_photo"
                  ></img>
                  <h1
                    style={{
                      color: "black",
                      marginTop: "5px",
                      marginLeft: "15px",
                    }}
                  >
                    React
                  </h1>
                </span>
              </div>
              <div className="col-lg-2 col-md-6">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <img
                    src={Node}
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      marginTop: "43px",
                    }}
                    alt="Node"
                    id="contact_photo"
                  ></img>
                  <h1 style={{ color: "black", marginTop: "24px" }}>Node.js</h1>
                </span>
              </div>
              <div className="col-lg-2 col-md-6">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <img
                    src={Mongo}
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      marginTop: "43px",
                    }}
                    alt="MongoDB"
                    id="contact_photo"
                  ></img>
                  <h1 style={{ color: "black", marginTop: "24px" }}>MongoDB</h1>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
